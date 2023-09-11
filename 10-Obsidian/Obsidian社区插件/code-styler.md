---
uid: 20230901102531
title: Obsidian 插件：Code Styler
tags:
  - obsidian插件
description: 在阅读视图和编辑视图中对代码块和内联代码进行样式设置。
author: OS
type: basic
draft: false
editable: false
modified: 20230911105134
---

# Obsidian 插件：Code Styler

> [!Note] 插件名片
> - 插件名称：Code Styler
> - 插件作者：Mayuran Visakan
> - 插件说明：在阅读视图和编辑视图中对代码块和内联代码进行样式设置。
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/mayurankv/Obsidian-Code-Styler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-styler)

## 概述

在阅读视图和编辑视图中对代码块和内联代码进行样式设置。

## 效果&特性

![Code Styler](https://cdn.pkmer.cn/covers/code-styler.png!pkmer)

这是一个为 [Obsidian.md](https://obsidian.md) 设计的插件，可以在编辑模式和阅读模式下对代码块和内联代码进行样式设置。

> [!Warning] **警告**
> 如果您使用的是 1.1.9 或更低版本，则必须从 `VaultFolder/.obsidian/plugins/code-styler/` 中删除 `data.json` 文件。这只需要进行一次，但是由于该文件不包含版本 2.0.0 或更高版本所需的一些条目，因此这是必要的。之后，一切都应该正常工作。

## 使用

### 排除的代码块

该插件可以设置忽略某些代码块（例如，如果另一个插件使用了像 `dataview` 代码块这样的代码块）。这些代码块在设置中以逗号分隔的列表形式设置。通配符\* 操作符也可以用于匹配语言，例如使用 'ad-*' 来匹配警告。

此设置用于告诉插件它可以完全忽略哪些代码块，而不仅仅是不装饰代码块。要不装饰代码块，请使用 [排除语言设置](#excluded-languages)。

> **注意**
> 为您使用的其他插件使用的代码块设置排除的代码块非常重要，否则，在某些情况下，插件不知道要忽略哪些代码块。

### 排除的语言

该插件可以设置忽略某些语言（例如，如果您不希望装饰 `python` 代码块）。这些语言可以在设置中以逗号分隔的列表形式设置。通配符\* 操作符也可以用于匹配诸如 'ad-*' 以匹配警告。

此设置用于告诉插件不要装饰某些语言。要完全忽略一个代码块（即在阅读模式下不生成渲染的代码块作为插件的结果），请使用 [排除的代码块设置](#excluded-codeblocks)。

### 主题

该插件提供了一个“默认”主题和几个基于流行配色方案的主题。默认主题使用现有的 Obsidian 主题定义的颜色，以最小化安装时的外观变化（它使用当前主题定义的 CSS 变量）。

所有主题都可以自定义浅色和深色模式的颜色（要更改特定模式的颜色，请先切换到该模式，然后在设置中更改颜色）。每个主题还包括其他外观设置，例如显示行号，允许高亮覆盖行号等。

当在主题中更改设置或颜色时，该更改不会保存到主题中；您必须点击主题名称旁边的更新按钮，将该主题更新为当前设置。请注意，无法保存对内置主题的更改。

可以在主题中设置的不同组件颜色包括：

- 代码块背景颜色【Codeblock background colour】
- 代码块文本颜色【Codeblock text colour】
- 行号栏背景颜色【Line number gutter background colour】
- 行号栏文本颜色【Line number text colour】
- 代码块行号当前行指示器【Codeblock line number current line indicator】
- 代码块标题栏背景颜色【Codeblock header background colour】
- 代码块标题栏标题文本颜色【Codeblock header title text colour】
- 代码块标题栏分隔线颜色【Codeblock header separator colour】
- 代码块标题栏语言标签背景颜色【Codeblock header language tag background colour 】
- 代码块标题栏语言标签文本颜色【Codeblock header language tag text colour】
- 编辑器活动行高亮颜色【Editor active line highlight colour】
- 代码块活动行高亮颜色【Codeblock active line highlight colour】
- 默认高亮颜色【Default highlight colour】
- 其他高亮颜色【Alternative highlight colours】
- 按钮颜色【Button colour】
- 按钮活动颜色【Button active colour】

作者不是设计师，所以如果你创建了一个很酷的主题，请将颜色代码发送给作者，作者可能会在下一个版本中将其作为默认主题包含进去 :-\)

## 代码块参数

代码块参数被添加到语言后的代码块的第一行。它们可以以任何顺序添加。如果没有设置语言，则在代码块分隔符 ` ``` ` 后应留出一个空格，以表示第一个参数不是代码块的语言。

示例：

- ` ```cpp fold title:example_title`
- ` ```cpp title:example_title fold`（与上一行效果相同）
- ` ``` fold title:example_title`（如果没有设置语言）

### 行号

行号可以在主题的设置中启用/禁用。除此之外，是否应用行号还可以在代码块本身中使用 `ln` 参数进行额外指定。

设置 `ln:true` 将始终显示行号，`ln:false` 将永远不显示行号，而 `ln:NUMBER`（例如 `ln:27`）将始终显示从指定数字开始的行号（因此偏移量为该数字减一）。

### 标题

要为代码块显示一个标题，在代码块的第一行指定 `title:`，然后跟上标题。如果标题包含空格，可以使用 `""` 或 `''` 将其指定在其中，例如：`title:"long filename.cpp"`。

示例：

```cpp title:test.cpp`

![Title Short](images/TitleShort.png)

```cpp title:"long filename.cpp"`

### 折叠

要在打开文档时指定初始折叠状态，请使用 `fold` 参数。如果在代码块中设置了 `fold`，那么在打开文档时，代码块将自动折叠，只显示标题。您可以通过点击标题来展开代码块。

点击任何标题都会切换该代码块的折叠状态。

当没有设置 `title` 参数时，折叠的代码块将具有默认的折叠占位符标题。可以在设置中更改此设置，或者可以通过在折叠参数后设置字符串来更改特定参数，例如 `fold:Folded` 或 `fold:"Collapsed Codeblock"`。

示例：

![image.png|535](https://cdn.pkmer.cn/images/20230908155121.png!pkmer)

### 高亮显示

要高亮显示行，请在代码块的第一行中指定 `hl:`，后面跟着行号、纯文本或正则表达式。

您可以使用逗号（**不带空格**）分隔的以下任何高亮类型，例如：`hl:1,3-4,foo,'bar baz',"bar and baz",/#\w{6}/`。

- 单个数字：`hl:1` 将高亮显示第一行
- 数字范围：`hl:1-3` 将高亮显示从第 1 行到第 3 行
- 纯文本：`hl:foo` 将高亮显示包含单词 `foo` 的行
- 用引号括起来的纯文本：`hl:'bar baz'` 或 `hl:"bar baz"` 将高亮显示包含单词 `bar baz` 的行
- 正则表达式：`hl:/#\w{6}/` 将高亮显示与该正则表达式匹配的行（通过 `regex.test(line)` 进行测试）- 对于此示例，任何包含十六进制颜色的行都会被高亮显示

这些组合将高亮显示所有相关行。

### 外貌

代码块

可以在设置中更改代码块的曲率，使其显示更圆或更直。

如果在设置中启用，代码块的左边框可以根据语言进行着色（颜色与语言图标相匹配）。还可以更改此边框的宽度。

在以下情况下会显示头部：

- 您指定了 `title:`
- 您指定了 `fold` 如果您指定了 `fold` 但没有指定 `title:` 或 `fold:`，则默认文本将显示在头部（默认为“折叠代码”）
- 您通过 ` ```language` 定义了代码块语言，并在主题设置中将 `Display Header Language Tags` 设置为 `Always` 或将 `Display Header Language Icons` 设置为 `Always`

如果显示了头部，则折叠也会起作用。如果将 `Display Header Language Tags` 设置为 `Always`，则头部将始终显示代码块语言，如果将其设置为 `If Header Shown`，则仅在显示头部时显示（即设置了 `title` 参数）。

您可以在设置页面中启用选项以显示头部中的图标。当此选项设置为 `If Header Shown` 时，如果代码块中指定的语言具有图标并且显示了代码块头部（即设置了 `title` 参数），则会显示图标。当此选项设置为 `Always` 时，如果代码块中指定的语言具有图标，则始终显示带有图标的头部。图标还可以在设置中设置为灰度或调整大小。目前有大约 170 个不同语言的图标可用。

语言标签文本和标题文本也可以设置为粗体和/或斜体，以及特定字体。此外，头部文本的字体大小可以更改。

## 插件兼容性

该插件与以下 Obsidian 插件完全兼容：

[![Execute Code Plugin](https://github-readme-stats.vercel.app/api/pin/?username=twibiral&repo=obsidian-execute-code&show_owner=true&bg_color=00000010&border_color=e3e7ef)](https://github.com/twibiral/obsidian-execute-code)

[![Code Preview Plugin](https://github-readme-stats.vercel.app/api/pin/?username=zjhcn&repo=obsidian-code-preview&show_owner=true&bg_color=00000010&border_color=e3e7ef)](https://github.com/zjhcn/obsidian-code-preview)

[![Code Preview Plugin](https://github-readme-stats.vercel.app/api/pin/?username=tillahoffmann&repo=obsidian-file-include&show_owner=true&bg_color=00000010&border_color=e3e7ef)](https://github.com/tillahoffmann/obsidian-file-include)

[![Admonitions Plugin](https://github-readme-stats.vercel.app/api/pin/?username=javalent&repo=admonitions&show_owner=true&bg_color=00000010&border_color=e3e7ef)](https://github.com/javalent/admonitions)

## 路线图

请查看 [路线图讨论](../../discussions/8)。