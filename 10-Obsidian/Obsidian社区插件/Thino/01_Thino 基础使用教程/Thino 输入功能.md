---
uid: 20231109234546
title: Thino 输入
tags: 
description: Thino 输入
author: Bon,PKMer
type: other
draft: false
editable: false
modified: 20231110001429
---

# Thino 输入

在 2.1.0 以后，本体 Thino 将会默认使用 Obsidian 所提供的所见即所得编辑器，而 Web Thino 则采用了 Tiptap 进行自有编辑器的开发，当你第一次接触到编辑器的时候会看到以下的几个元素，我会逐一跟你解释他们的作用：

![Thino 输入](https://cdn.pkmer.cn/images/Pasted%20image%2020231108232536.png!pkmer)

其中

- 1 为标签的快速输入按钮，当你点击后可以快速弹出标签选择弹窗；
- 2 为图片的快速选择按钮，当你点击以后你可以从外部导入图片到 Thino 中；
- 3 为更改当前的 Thino 卡片的任务状态或者列表状态，当你保存到文本中时，其对应会变成任务或者列表；
- 4 为选择保存的目标位置，现阶段你可以选择日记、CANVAS、多文件保存模式；
- 5 为保存按钮，当你在编辑器中时，可以快速按 `CTRL` / `Meta ` + ` ENTER ` 来保存当前的 Thino；
- 6 为文本输入区域，其中文本输入区域有以下的快捷输入功能：

## 日期选择弹窗

当你在编辑器中输入 `@` 时，会有一个日期选择的弹窗跳出，

![Thino 输入](https://cdn.pkmer.cn/images/Pasted%20image%2020231108233205.png!pkmer)

你可以在其中选择一个日期，其会转化成 `📆2023-11-01` 的形式，而这个形式的日期字符串，允许你在使用 Dataview 或者 Tasks 插件时，根据时间来筛选出你所需要的任务或者列表内容。

PS: 你可以在设置中挑选你更希望使用的格式，可以是 Dataview 优先，也可以是 Tasks 格式优先。

## 标签选择弹窗

当你在编辑器中输入 `#` 时，会有一个日期选择的弹窗跳出，Obsidian 编辑器原生支持了 Tag 选择器的功能，但是 Thino 更进一步将其改造成了可以仅显示 Thino 内部标签的标签选择器（这个你需要到设置中开启是否使用全库的标签，如果不启用的话，则默认会仅显示 Thino 中使用过的标签）

但是 Web Thino 并不支持索引 Obsidian 的库中标签，所以仅能显示当前的 Web Thino 所使用的标签。

## 悬浮工具条

当你在 Thino 编辑器中选中内容后，会弹出一个悬浮工具条，这个工具条中包含了常见的几种编辑命令，当你点击后可以快速调整对应的格式效果。

## 其它

由于新版的编辑器继承于 Obsidian 的所见即所得编辑器，所以理论上所有能在所见即所得编辑器中使用的编辑器插件都可以正常在 Thino 的编辑器中进行使用。

包括但不限于：

- Task Progress Bar
- Markdown Table Generator
- 其它 Callout 之类的



