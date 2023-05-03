---
uid: 20230503114425
title: latex-suite
description: 
author: 
type: other
draft: false
editable: false
modified: 20230503151948
---

# latex-suite

> [!note] latex-suite
> 插件 ID：obsidian-latex-suite
> 插件作者：artisticat
> 插件描述：通过片段、文本扩展和编辑器增强功能，使排版 LaTeX 数学与手写一样快
> 插件版本：1.7.1
> 插件源码地址：[obsidian-latex-suite](https://github.com/artisticat1/obsidian-latex-suite)
> 插件文档地址：同上

## 基本功能

1. 文本编辑增强：通过使用自定义片段，对常用输入文字快速输入。支持文本模式，正则模式，latex 模式，通过字符自动触发或者 `tab` 键触发。
2. latex 增强：内置 latex 常用片段，隐藏 latex 符号，自动填充括号，大括号，换行等操作，并使得 latex 公式的可读性更强

==以下是原速公式输入示例==

![demo.gif](https://cdn.pkmer.cn/images/demo.gif)

## 基本用法

使用该插件的唯一前提就是设置好片段，除了了解内置的 latex 片段外，就是自定义的文本编辑片段。除此之外，就是熟练度的问题了，多多练习，输入公式比手写快得多。

### 片段设置

片段有两个方式进行设置，一个是在设置里有个内置的输入框，这个体验不是很好，输入框大小被限制了；另一个是自定义文件，将一个后缀为 `js` 的文件放到库内，然后在设置里指定就好了。

### 片段编写

典型的片段文件如下：

```json
[
	//环境设置
	{trigger: "$", replacement: " $$0$ ", options: "t"},
	{trigger: "$$", replacement: "$$\n$0\n$$", options: "tA"},
	{trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},
	//begin环境
    {trigger: "equat", replacement: "\\begin{equation}\n$0\n\\end{equation}", options: "mA"},
]
```

是一个 `json` 文件，每一个大括号是一个片段。一个典型的片段如下：

```json
{trigger: string, replacement: string, options: string, description?: string, priority?: number}
```

其中 `trigger` 字段指定触发字符，`replacement` 代表将触发字符替换后的字符，`option` 是选项，t 代表文本模式，m 代表 latex 模式，r 代表正则模式，A 代表自动触发。文本模式指仅在正文中触发，latex 模式指仅在 latex 块中触发——`$` 包裹的部分，r 是使用正则表达式，w代表词边界，仅当触发字符前面（和后面）有单词分隔符时才运行此代码段。`$0` 代表光标跳转的位置，`[[0]]` 代表正则表达式替换的位置。 description 是片段描述，可选，priority 是优先级，当有多个同样的触发字符时，优先级高的会优先触发，默认是 0 优先级。

以第一个片段为例：指明 `$` 为触发字符，将字符替换成 `$$`，替换后光标在两个 `$` 符号中间，option 中的 `t` 代表文本模式，不会自动触发。

