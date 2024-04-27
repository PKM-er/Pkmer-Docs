---
uid: 20240427160234
title: Focus Mode 插件魔改
tags: [obsidian]
description: 魔改 Focus Mode
author: Huajin
type: other
draft: false
editable: false
modified: 20240427170105
---

# Focus Mode 插件魔改

[[obsidian-focus-mode|Focus Mode]] 插件可以快速隐藏页面中的许多内容

- 左右侧边栏
- ribbon：左侧竖条内容
- status bar：右下角状态栏

魔改前

![image.png](https://cdn.pkmer.cn/images/20240427165043.png!pkmer)

魔改后

![image.png](https://cdn.pkmer.cn/images/20240427170050.png!pkmer)

## 确定需求

我使用下来觉得 focus 距离我心中的 focus 还有点区别，因此我做了如下更改

- 进入 focus mode 和退出按钮用的都是 lucide 图标 enter，我想要将他们区分开，因此我将进入时的图标改为 zap，退出时的图标改为 zap-off。
- 进入 focus mode 之后，左侧的退出按钮过于抢眼，选择把它挪到右下角（right: 0; bottom: 0）。
- 进入 focus mode 后上方的标签页没有隐藏，将它隐藏掉。
	- 鼠标移动到这里后需要标签页出现；
	- 需要隐藏后这块区域，下方正文内容滚动到这里依旧可以显示，而不是变成一片空白；
- 进入 focus mode 后，页内标题会被隐藏，我习惯显示页内标题，因此恢复页内标题的显示。
- 隐藏滚动条

## 修改源码

这个插件的功能比较简单，因此我选择直接修改 main.js。对于大插件的魔改还是建议下载整个插件的源码更方便。

### 第一步：修改图标

图标位于左侧的 ribbon 栏中，因此插件使用的是 `addRibbonIcon(icon, ...)` 在侧边添加按钮的同时添加图标，我们只需要搜索 addRibbonIcon，将后面的 icon 从 enter 改为 zap 即可修改好进入 focus mode 的按钮。

![image.png](https://cdn.pkmer.cn/images/20240427161742.png!pkmer)

点击按钮之后，插件执行函数 `toggleFocusMode()` 切换到 Focus Mode。因此我们需要在这里修改图标。obsidian 提供了方法 `setIcon(HTMLElement, String);` 为 HTML 元素设置图标。我们需要在进入 Focus Mode 后将图标设置为 zap-off，退出 Focus Mode 之后将图标设置为 zap。

> [!warning] 注意
> 因为我是直接修改的 main.js，而不是下载修改原仓库中的 main.ts，因此需要写全是用的 obsidian 类的 setIcon 方法。

![image.png](https://cdn.pkmer.cn/images/20240427161910.png!pkmer)

重启 obsidian 检查是否成功。

### 第二步：将图标移至右下角

图标原本位于左边的 ribbon 栏中，在开发者模式 (ctrl shift i) 可以看到它对应的 css 类为 .workspace-ribbon，插件是给这个类添加了 `visibility: hidden;` 将它隐藏了。因此左边还是会留有一条竖着的空白条。可以给这个类添加 `max-width: 0; background: transparent;` 解决，且不会影响图标。

图标要移动到右下角，我们需要单独把图标按钮的定位设置 `position: absolute;`，然后利用 `right: 0; bottom: 0;` 即可实现。（可以直接在原来 css 提供选择到这个按钮的类中添加这三个属性）

```css
.focus-mode .workspace-ribbon {
  visibility: hidden;
  max-width: 0;
  background: transparent;
}

.focus-mode .side-dock-ribbon-action[aria-label="Toggle Focus Mode (Shift + Click to show active pane only)"] {
  visibility: visible;
  position: absolute;
  right: 0;
  bottom: 0;
}
```

### 第三步：优化上方标签栏

在开发者模式中找到，上方标签栏的类为 `.workspace-tab-header-container`。

隐藏上方标签页：考虑到鼠标移动到这里时想让标签栏出现，我们把标签栏的透明度设置为 0 即可 (`opacity: 0;`)。

此时滚动页面，正文内容移动到这里会被一片空白遮住。将标签栏的背景设置为透明 transparent 是无法解决的，因为实际上正文内容不是遮住了，而是正文内容所在的盒子上边界没那么高。或者说是标签栏把正文挤到了下方。如果我们只是简单的把标签栏背景设置为透明，标签栏盒子依旧占有空间。因此我们要让它无法将正文盒子挤开，这需要将它的定位设置为 `position: absolute;`。

由于我们需要在鼠标移动到这里的时候标签栏能够显示，因此要给他一个合适的 `z-index` 使得这个透明的标签栏盖在正文上方。`z-index` 不能高于 30，否则会挡住 titlebar，也就是右上角的隐藏、缩放和关闭按钮。

```css
.focus-mode .workspace-tab-header-container {
  opacity: 0;
  position: absolute;
  z-index: 25; /* 不能高于30，否则会挡住titlebar */
  width: 100%;
  transition: all 0.2s ease;
}

.focus-mode .workspace-tab-header-container:hover {
  opacity: 1;
}
```

### 第四步：优化上方标签栏

页内标题被隐藏了，我们找到隐藏页内标题的 css，注释掉或者直接删掉这行即可。

![image.png](https://cdn.pkmer.cn/images/20240427163640.png!pkmer)

### 第五步：隐藏滚动条

```css
.focus-mode .ͼ1 .cm-scroller::-webkit-scrollbar {
  display: none;
}
```