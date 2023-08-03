---
uid: 2023080322230024
title: Obsidian 插件：【Readme】Note Content Pusher
tags: ['obsidian插件', 'readme']
description: 插件可以在不打开另一个窗格的情况下，将指定内容添加（前置或后置）到笔记（现有或新建）中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Note Content Pusher

> [!Note] 插件名片
> - 插件名称：Note Content Pusher
> - 插件作者：Henry Gustafson
> - 插件说明：插件可以在不打开另一个窗格的情况下，将指定内容添加（前置或后置）到笔记（现有或新建）中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/lizard-heart/obsidian-note-content-pusher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-note-content-pusher)

## 概述

插件可以在不打开另一个窗格的情况下，将指定内容添加（前置或后置）到笔记（现有或新建）中。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lizard-heart/obsidian-note-content-pusher/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-note-content-pusher]] 插件的自述翻译


# Obsidian笔记内容推送器
_一个Obsidian插件，可以在不打开其他窗格的情况下，将指定的内容添加（前置或后置）到一个笔记（已存在或新建）中。_

根据[这个](https://forum.obsidian.md/t/push-content-to-link-automatically-apply-tags-links-embeds-into-newly-created-links-through-link-insert-content/36844)论坛帖子的要求。

<a href="https://www.buymeacoffee.com/lizardheart">
 <img align="left" alt="Buy me a Coffee" width="200px" src="https://raw.githubusercontent.com/lizard-heart/lizard-heart/main/buy-me-a-cofee.png" />
</a>

<br>
<br>

## 演示
<img src="https://user-images.githubusercontent.com/62226606/170394694-1e138cf3-67ac-47f1-a1d4-0bea28d4c7b8.mov" width=70%>

如何使用
- 当您想要链接到一个尚不存在的文件时，请使用以下语法：`[[新文件的标题]]>>{您希望在文件中出现的内容}`
- 然后运行此插件中唯一的命令“创建文件并推送内容”，可以通过命令面板或热键来运行。该命令将自动替换原始文件中的内容，使其看起来像这样：`[[新文件的标题]]`，并创建该文件，并将括号内的内容添加到其中，所有操作都不会离开当前打开的笔记。
- 如果已经存在具有您指定名称的文件，则括号内的内容将添加到该文件的末尾。

### 别名
- 要为新文件添加别名，请按照以下格式进行：`[[新文件的标题|>>替代标题]]>>{}`
- 运行该命令将修复当前文件的格式：`[[新文件的标题|替代标题]]`，并且还会将您编写的别名（在本例中为"替代标题"）添加到新笔记的yaml前置元数据中，如下所示：
```yaml
---
alias: 替代标题
---
```

### 内联设置
要调整文本推送到笔记的方式，您可以在花括号内添加内联设置，使用内联设置字符（默认为`@@`）。目前，唯一可用的内联设置有：
- **append**：覆盖将内容推送到现有笔记的设置，将新内容添加到现有文件的末尾。
- **prepend**：覆盖将内容推送到现有笔记的设置，将新内容添加到现有文件的开头。

例如，要告诉插件在内容之前添加内容，您可以写：`[[现有文件的标题]]>>{要添加的内容@@prepend}`

## 自定义/设置

### 内容推送字符
首先，您可以自定义插件在将内容推送到文件时要查找的字符字符串。将其设置为您在其他地方不经常输入的内容。默认值为`>>`。例如，如果您将此设置更改为`%%%`，则可以输入类似`[[标题]]%%%{内容}`的内容将内容推送到新的笔记中。

### 内联设置字符
下一个设置允许您自定义用于告诉插件何时在花括号内查找内联设置的字符。

### 自动推送
第三个设置允许您切换到自动推送。当您切换到笔记的新行时，它将自动检查是否有正确格式的文本。这样，您就不必运行插件的命令来触发笔记的创建。您仍然可以随时手动运行该命令。

### 将内容推送到现有笔记
第四个设置允许您切换将内容推送到新笔记时是将其添加到笔记的开头还是结尾。默认情况下，内容将被追加（添加到末尾），但打开切换开关将新内容添加到开头。



