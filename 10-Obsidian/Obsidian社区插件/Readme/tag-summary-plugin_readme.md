---
uid: 20230803231105
title: Obsidian 插件：Tag Summary
tags: ['obsidian插件', 'readme', chapter1, crazy, crazy）。如果您只想包括包含列表中所有标签的文本块，可以使用**include:**标签声明，如下例所示。, crazy标签的段落。如果您想要排除包含特定标签的文本块，可以添加**exclude:**标签，如下所示。, chapter2标签并且同时包含, chapter4标签但不包含, chapter2**。]
description: 这个插件可以创建具有相同标签的段落或文本块的摘要。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232420
---

# Obsidian 插件：Tag Summary

> [!Note] 插件名片
> - 插件名称：Tag Summary
> - 插件作者：J.D Gauchat
> - 插件说明：这个插件可以创建具有相同标签的段落或文本块的摘要。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/macrojd/tag-summary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tag-summary-plugin)

## 概述

这个插件可以创建具有相同标签的段落或文本块的摘要。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/macrojd/tag-summary/master/README.md)
>

---

## Readme(翻译）

下面是 [[tag-summary-plugin]] 插件的自述翻译

# 标签摘要

这是一个 [Obsidian](https://obsidian.md) 的插件。

标签摘要可以创建包含相同标签的段落或文本块的摘要。该插件会扫描您的文件，寻找由空行分隔的文本块，并创建一个包含所有包含指定标签的文本块的摘要。例如，如果您的笔记中有以下段落：

```
怪物是真实存在的，鬼魂也是真实存在的。它们存在于我们内心，有时候，它们会获胜。
#chapter1
```

```
人们认为我一定是一个非常奇怪的人。这是不正确的。我有一个小男孩的心。它在我桌子上的一个玻璃罐里。
#crazy
```

```
伟大的思想讨论理念；普通的思想讨论事件；狭隘的思想讨论人物。
#chapter1 #crazy
```

您可以创建包含包含 #chapter1 和 #crazy 标签的段落的摘要。例如，如果您使用 #chapter1 标签创建摘要，将包含第一和第三个段落，但如果您使用 #crazy 标签创建摘要，将包含第二和第三个段落。

向笔记添加摘要

使用代码块和**add-summary**标识符向笔记添加摘要。标签在代码块内用**tags:**标签指定，如下所示。

````markdown
```add-summary
tags: #chapter1
```
````

如果您需要包含具有不同标签的文本块，请用空格分隔标签，如下所示。

````markdown
```add-summary
tags: #chapter1 #crazy
```
````

摘要包括包含**tags:**标签指定的任何标签的文本块。在最后一个示例中，摘要将包括上面列出的三个段落，因为每个段落都包含**tags:**标签指定的至少一个标签（#chapter1 OR #crazy）。如果您只想包括包含列表中所有标签的文本块，可以使用**include:**标签声明，如下例所示。

````markdown
```add-summary
include: #chapter1 #crazy
```
````

在这种情况下，只有包含两个标签的文本块将被添加到摘要中。如果处理上面列出的段落，只有第三个段落将被添加到摘要中，因为它是唯一一个包含#chapter1 AND #crazy标签的段落。如果您想要排除包含特定标签的文本块，可以添加**exclude:**标签，如下所示。

````markdown
```add-summary
tags: #chapter1
exclude: #crazy
```
````

这将向摘要中添加包含#chapter1 标签但不包含#crazy 标签的每个文本块。如果处理上面列出的段落，只有第一个段落将被添加到摘要中。**exclude:**标签可以与**tags:**和**include:**标签结合使用以指定复杂条件。以下示例创建一个摘要，其中包含包含#chapter1 OR #chapter2标签并且同时包含#chapter3 AND #chapter4标签但不包含#crazy 标签的文本块。

````markdown
```add-summary
tags: #chapter1 #chapter2
include: #chapter3 #chapter4
exclude: #crazy
```
````

## 添加摘要的命令

该插件包括添加摘要的命令，用于向笔记添加摘要。

- 打开您想要包含摘要的笔记。
- 将光标移动到要添加摘要的位置。
- 按下 Command+P（Mac）或 Control+P（Windows）打开命令面板（或在移动设备上向下拖动笔记）。
- 搜索**Tag Summary: Add Summary**命令并点击它。
- 在弹出窗口中，选择要包含和排除的标签以创建摘要，然后按下添加摘要按钮。

完成后，您的笔记应包含类似上面示例的代码块。添加摘要命令允许您选择一个要包含的标签和一个要排除的标签，但您也可以手动添加所有您想要的标签，用空格分隔，例如**tags: #chapter1 #chapter2**。

## 摘要配置

该插件包括以下三个选项来配置摘要的样式。

- 显示标注框：在每个文本块的周围显示一个标注框（默认）。如果禁用，则以纯文本形式显示文本块。
- 显示链接：在顶部包含一个链接，用于打开该段落所在的笔记。
- 移除标签：从文本中移除原始标签。

还有两个选项来确定插件如何处理列表。如果启用了这些选项，插件将独立处理列表的每个项目，并仅在摘要中包含与标签匹配的项目。如果您希望插件将整个列表作为文本块进行处理，可以禁用这些选项。

- 列表项：仅包含包含标签的列表项，而不是整个列表。
- 包含子项：包含列表的子项。

使用方法

该插件不会影响 Obsidian、链接和标签的工作方式。您仍然可以按照您一直以来的方式组织您的笔记，但现在您可以为段落、文本块或列表上的项目分配标签，然后使用这些标签创建摘要，其中包括特定的标签列表。

在构建您的笔记时，请考虑以下事项：

- 该插件将一个文本块视为两个空行之间的所有文本。如果您在段落或文本块中间添加一个空行，插件将将其视为两个不同的文本块。
- 标签可以在段落或文本块的任何位置指定，甚至可以在末尾的新行中指定，只要它们之间没有空行即可。

安全性

该插件不会修改原始笔记，不会下载或上传任何信息到网络，也不会存储或检索任何私人信息。

免责声明

本插件不提供任何形式的保证，作者和 Obsidian 对于任何数据丢失或不便概不负责。

请自行承担使用本插件的风险。

来自作者

我为个人使用创建了这个插件。我会不时发布更新。如果你发现了一个 bug，你可以通过我的网站与我联系：

[www.jdgauchat.com](https://www.jdgauchat.com/)
