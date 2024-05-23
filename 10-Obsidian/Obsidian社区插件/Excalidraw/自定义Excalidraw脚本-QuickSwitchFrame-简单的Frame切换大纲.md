---
uid: 20240311180729
title: 自定义 Excalidraw 脚本 -QuickSwitchFrame- 简单的 Frame 切换大纲
tags: [Excalidraw脚本]
description: 简单的 Frame 切换大纲
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240311181006
---

# 自定义 Excalidraw 脚本 -QuickSwitchFrame- 简单的 Frame 切换大纲

## 效果演示

![2024-03-08_自定义Excalidraw脚本-QuickSwitchFrame-简单的Frame切换大纲_IMG-1](https://cdn.pkmer.cn/images/202403111810108.gif!pkmer)

## 背景

在之前的 [[自定义Excalidraw脚本-画板与 Kanban 得梦幻结合-像PPT一样演示]] 中可生成侧边的大纲对 Frame 进行大纲显示、预览、排序等功能，但是如果是编辑过程中只想快速跳转到某个区域，单独分离出一个 Kanban 的侧边栏就比较占地方了，想到了我常用的 another quick Switcher 的标题切换，通过下拉菜单聚焦于画板的 Frame，这样更加方便。

## 脚本安装

脚本安装可以根据源码来安装，也可以通过 Excalidraw 插件提供的脚本安装代码块来安装

- 代码块链接方法：
	- 优点：一键安装脚本和图标，操作方便，后续脚本更新可以检测
	- 缺点：国内需要可访问 GitHub 的网络
- 源码拷贝方式：
	- 优点：不需要特殊网络
	- 缺点：需要手动复制源码，这个过程很容易出问题，没有图标，脚本更新无法检测…

> PS：之后我的脚本更新或者 BUG 修复，可能不会更新到网站，而是直接更新到 GitHub，因为这样对我来说比较方便点而且快速点。

### 代码块链接方法

````
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/QuickSwitchFrame.md
```
````

将上述代码块放到一个 **md 文件**，阅读模式下该代码块会显示为 <kbd>安装脚本</kbd>的按钮，点击安装之后，更新为<kbd>脚本已是最新 - 点击重新安装</kbd>，即当前脚本已经安装，在 Excalidraw 画布界面的侧边**Obsidian 工具面板**中可以查看。

![Pasted image 20240311163906](https://cdn.pkmer.cn/images/202403111810109.png!pkmer)

![Pasted image 20240311164317](https://cdn.pkmer.cn/images/202403111810110.png!pkmer)

### 源码拷贝方式

```js
const ea2 = ExcalidrawAutomate;
const frameElements = ea2.getViewElements().filter(el => el.type === "frame");
const choices = frameElements.map(el => el.name);
choices.sort();

let choice = "";
choice = await utils.suggester(choices, choices, "请选择要跳转的大纲");
// if (!choice) return;

const selectedElement = frameElements.find(el => el.name === choice);
if (selectedElement) {
    // 执行跳转到选定元素的操作
    api = ea2.getExcalidrawAPI();
    api.zoomToFit([selectedElement], 10);
}
```
