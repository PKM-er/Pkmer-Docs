---
uid: 20240120144510
title: Callout
tags: [obsidian, callout]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240125213246
---

# Callout

callout 是 obsidian 的特有语法，源于 markdown 的引用语法 <kbd>></kbd>

除了 obsidian，其实在很多地方你都能看到类似的样式，举几个例子

![image.png](https://cdn.pkmer.cn/images/20240120144817.png!pkmer)

<center>Electron 的 Docs</center>

![image.png](https://cdn.pkmer.cn/images/20240120145249.png!pkmer)

<center>matplotlib 的 API Reference</center>

## 语法

### 基本使用

```
> [!NOTE] Title
> Content
```

复制上面两行内容粘贴到 obsidian 中，他们会自动渲染成 callout 的样式。

分为四个部分：

- 开头的 >
- 标明 callout 类型的 NOTE
- Callout 的标题 Title
- Callout 的正文 Content

obsidian 共提供了 13 种 callout

- 他们是大小写不敏感的，例如<kbd>> [!BUG]</kbd>,<kbd>> [!bug]</kbd> 和 <kbd>> [!Bug]</kbd> 的效果是一样的；
- 同一类型的 callout 可能有很多种别名，例如 <kbd>> [!info]</kbd> 和 <kbd>> [!todo]</kbd> 的样式是一样的；

1. note
2. abstract, summary, tldr
3. info
4. todo
5. tip, hint, important
6. success, check, done
7. question, help, faq
8. warning, caution, attention
9. failure, fail, missing
10. danger, error
11. bug
12. example
13. quote, cite

![image.png](https://cdn.pkmer.cn/images/20240120150627.png!pkmer)

### Callout 的展开与折叠

```
> [!NOTE]+ 左边多了个加号
> 代表 Callout 默认展开

> [!NOTE]- 左边多了个减号
> 代表 Callout 默认折叠
```

### Callout 的嵌套使用

每到下一层多加个一个 <kbd>></kbd> 即可，例如

```
> [!question] Can callouts be nested?
> > [!todo] Yes!, they can.
> > > [!example]  You can even use multiple layers of nesting.
```

![image.png](https://cdn.pkmer.cn/images/20240120151430.png!pkmer)

### Callout 的换行

要换行的地方用 <kbd>></kbd> 连接保证 Callout 不断即可，你也可以直接用 shift enter 换行，这样 obsidian 会自动补充开头的 <kbd>></kbd>

```
> [!NOTE] Callout 的换行
> 第一行
> 
> 第二行
```

### Callout 自定义

如果你觉得 obsidian 提供的 13 种 callout 都不适用于你当前需要的场景，你还可以用 obsidian 提供的两个 css 变量自定义 callout

```css
--callout-color
--callout-icon
```

- 前者用于控制 callout 的颜色
- 后者用于控制 callout 的图标，图标代码可以从 [Lucide](https://lucide.dev/) 找到，也可以使用自己找的 svg 图标

举个例子，如果你想要获得一个名为 <kbd>custom-question-type</kbd> 的 Callout，那么你只需要创建一个 css 文件（[[Obsidian的CSS代码片段]] 中有关于创建 css 的教程，熟练的话一两分钟就能搞定），在里面写到

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

之后你可以在笔记中用到

```
> [!custom-question-type] Title
> Contents
```

需要注意，Callout 的名称中不能包含空格。

使用 svg 作为图标的格式为

```
--callout-icon: '<svg>...custom svg...</svg>';
```

你可以在 [[Obsidian样式-Callout样式]] 中找到许多已经写好的 callout 样式，直接放到你的库的配置文件中即可使用。

修改图标和颜色足以实现大部分 callout 的自定义，下面给出另一种 callout 自定义的玩法：**添加修饰词而非创建新的 callout 名称**

这种用法也挺常见，例如 blue topaz 主题的实现 callout 的百分比显示

```
> [!Note|50%] Title
> Content
```

![image.png](https://cdn.pkmer.cn/images/20240120153917.png!pkmer)

css 代码如下

```css
.callout[data-callout-metadata*="..."] {
  ...
}
```

把原来的 <kbd>data-callout=".."</kbd> 替换为 <kbd>data-callout-metadata*=".."</kbd>。

<kbd>=</kbd> 代表需要严格等于，而<kbd>*=</kbd> 代表包含后面的字符

同样，在 [[Obsidian样式-用Callout实现的边注]] 也是使用了这种方式
