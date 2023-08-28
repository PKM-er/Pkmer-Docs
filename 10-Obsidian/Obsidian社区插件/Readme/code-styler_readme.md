---
uid: 2023082011353892
title: Obsidian 插件：【Readme】Code Styler
tags: ['obsidian插件', 'readme']
description: 在阅读视图和编辑视图中对代码块和内联代码进行样式设置。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Code Styler

> [!Note] 插件名片
> - 插件名称：Code Styler
> - 插件作者：Mayuran Visakan
> - 插件说明：在阅读视图和编辑视图中对代码块和内联代码进行样式设置。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mayurankv/Obsidian-Code-Styler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-styler)

## 概述

在阅读视图和编辑视图中对代码块和内联代码进行样式设置。

![Code Styler](https://cdn.pkmer.cn/covers/code-styler.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mayurankv/Obsidian-Code-Styler/master/README.md)
> 

---

## Readme(翻译）

下面是 [[code-styler]] 插件的自述翻译


# 代码样式插件

[![发布](https://img.shields.io/github/v/release/mayurankv/Obsidian-Code-Styler?style=for-the-badge)](https://github.com/mayurankv/Obsidian-Code-Styler/releases/latest)
[![下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&style=for-the-badge&query=%24%5B%22code-styler%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=code-styler)

这是一个为[Obsidian.md](https://obsidian.md)设计的插件，可以在编辑模式和阅读模式下对代码块和内联代码进行样式设置。

<!--
> **警告**  
> 如果您使用的是1.1.9或更低版本，则必须从`VaultFolder/.obsidian/plugins/code-styler/`中删除`data.json`文件。这只需要进行一次，但是由于该文件不包含版本2.0.0或更高版本所需的一些条目，因此这是必要的。之后，一切都应该正常工作。
-->
## 设置
### 排除的代码块

该插件可以设置忽略某些代码块（例如，如果另一个插件使用了像`dataview`代码块这样的代码块）。这些代码块在设置中以逗号分隔的列表形式设置。通配符\*操作符也可以用于匹配语言，例如使用'ad-*'来匹配警告。

此设置用于告诉插件它可以完全忽略哪些代码块，而不仅仅是不装饰代码块。要不装饰代码块，请使用[排除语言设置](#excluded-languages)。

> **注意**  
> 为您使用的其他插件使用的代码块设置排除的代码块非常重要，否则，在某些情况下，插件不知道要忽略哪些代码块。
### 排除的语言

该插件可以设置忽略某些语言（例如，如果您不希望装饰`python`代码块）。这些语言可以在设置中以逗号分隔的列表形式设置。通配符\*操作符也可以用于匹配诸如'ad-*'以匹配警告。

此设置用于告诉插件不要装饰某些语言。要完全忽略一个代码块（即在阅读模式下不生成渲染的代码块作为插件的结果），请使用[排除的代码块设置](#excluded-codeblocks)。
### 主题

该插件提供了一个“默认”主题和几个基于流行配色方案的主题。默认主题使用现有的Obsidian主题定义的颜色，以最小化安装时的外观变化（它使用当前主题定义的CSS变量）。

所有主题都可以自定义浅色和深色模式的颜色（要更改特定模式的颜色，请先切换到该模式，然后在设置中更改颜色）。每个主题还包括其他外观设置，例如显示行号，允许高亮覆盖行号等。

当在主题中更改设置或颜色时，该更改不会保存到主题中；您必须点击主题名称旁边的更新按钮，将该主题更新为当前设置。请注意，无法保存对内置主题的更改。

可以在主题中设置的不同组件颜色包括：

- 代码块背景颜色
- 代码块文本颜色
- 行号栏背景颜色
- 行号栏文本颜色
- 代码块行号当前行指示器
- 代码块标题栏背景颜色
- 代码块标题栏标题文本颜色
- 代码块标题栏分隔线颜色
- 代码块标题栏语言标签背景颜色
- 代码块标题栏语言标签文本颜色
- 编辑器活动行高亮颜色
- 代码块活动行高亮颜色
- 默认高亮颜色
- 其他高亮颜色
- 按钮颜色
- 按钮活动颜色

默认Obsidian主题下的“默认”主题在深色模式下的颜色：

![默认默认深色颜色](images/DefaultDefaultDarkColours.png)

默认Obsidian主题下的“默认”主题在浅色模式下的颜色：

![默认默认浅色颜色](images/DefaultDefaultLightColours.png)

默认Obsidian主题下的“默认”主题在深色模式下的颜色：

![默认Obsidianite深色颜色](images/DefaultObsidianiteDarkColours.png)

默认Obsidian主题下的“Solarized”主题在深色模式下的颜色：

![Solarized默认深色颜色](images/SolarizedDefaultDarkColours.png)

我不是设计师，所以如果您创建了一个很酷的主题，请将颜色代码发送给我，我可能会在下一个版本中将其作为默认主题包含进去 :-\)
## 代码块参数

代码块参数被添加到语言后的代码块的第一行。它们可以以任何顺序添加。如果没有设置语言，则在代码块分隔符 ` ``` ` 后应留出一个空格，以表示第一个参数不是代码块的语言。

示例：

- ` ```cpp fold title:example_title`
- ` ```cpp title:example_title fold`（与上一行效果相同）
- ` ``` fold title:example_title`（如果没有设置语言）
### 行号

行号可以在主题的设置中启用/禁用。除此之外，是否应用行号还可以在代码块本身中使用`ln`参数进行额外指定。

设置`ln:true`将始终显示行号，`ln:false`将永远不显示行号，而`ln:NUMBER`（例如`ln:27`）将始终显示从指定数字开始的行号（因此偏移量为该数字减一）。
### 标题

要为代码块显示一个标题，在代码块的第一行指定`title:`，然后跟上标题。如果标题包含空格，可以使用`""`或`''`将其指定在其中，例如：`title:"long filename.cpp"`。

示例：

```cpp title:test.cpp`

![Title Short](images/TitleShort.png)

```cpp title:"long filename.cpp"`

![Title Long](images/TitleLong.png)
### 折叠

要在打开文档时指定初始折叠状态，请使用 `fold` 参数。如果在代码块中设置了 `fold`，那么在打开文档时，代码块将自动折叠，只显示标题。您可以通过点击标题来展开代码块。

点击任何标题都会切换该代码块的折叠状态。

当没有设置 `title` 参数时，折叠的代码块将具有默认的折叠占位符标题。可以在设置中更改此设置，或者可以通过在折叠参数后设置字符串来更改特定参数，例如 `fold:Folded` 或 `fold:"Collapsed Codeblock"`。

示例：

` ```cpp fold`

![Fold](images/Fold.png)

` ```cpp fold:"This is collapsed"`

![Fold Placeholder](images/FoldPlaceholder.png)

点击标题
![Collapse](images/Collapse.gif)
### 高亮显示

要高亮显示行，请在代码块的第一行中指定`hl:`，后面跟着行号、纯文本或正则表达式。

您可以使用逗号（**不带空格**）分隔的以下任何高亮类型，例如：`hl:1,3-4,foo,'bar baz',"bar and baz",/#\w{6}/`。

- 单个数字：`hl:1`将高亮显示第一行
- 数字范围：`hl:1-3`将高亮显示从第1行到第3行
- 纯文本：`hl:foo`将高亮显示包含单词`foo`的行
- 用引号括起来的纯文本：`hl:'bar baz'`或`hl:"bar baz"`将高亮显示包含单词`bar baz`的行
- 正则表达式：`hl:/#\w{6}/`将高亮显示与该正则表达式匹配的行（通过`regex.test(line)`进行测试）- 对于此示例，任何包含十六进制颜色的行都会被高亮显示

这些组合将高亮显示所有相关行。

示例：
```cpp hl:1,3-4,foo,'bar baz',"bar and baz",/#\w{6}/```

![默认高亮显示](images/DefaultHighlight.png)

在设置中，可以设置高亮显示行号以及代码。

示例：
![默认高亮显示行号](images/DefaultHighlightGutter.png)

由默认高亮参数或替代高亮参数创建的高亮显示可以在设置中设置为渐变高亮显示，向右侧淡出。还可以设置此渐变的颜色停止百分比。

示例：
![默认高亮显示渐变](images/DefaultHighlightGradient.png)
#### 备选高亮

您还可以通过定义具有名称的备选高亮颜色来定义多个高亮颜色。该名称将用作参数，并且您可以像使用`hl`参数一样使用它。

示例：

您可以添加三种其他类型的高亮颜色（`info`，`warn`，`error`）。在设置中添加这些并设置所需的颜色后，您可以在代码块的第一行中使用它：

` ```cpp info:2 warn:4-6 error:8`

![备选高亮](images/AlternativeHighlights.png)

相应的设置：

![备选高亮](images/AlternativeHighlightsSettings.png)
解开

是否换行可以在设置中设置。有一个高级选项叫做“单击换行”，在代码块的内容上按住鼠标会导致内容换行（如果已经在设置中设置了换行）。

这些设置也可以通过`unwrap`参数在每个代码块上进行设置，该参数会覆盖设置。设置`unwrap:true`将解开代码块中的行，设置`unwrap:false`将在代码块中换行，设置`unwrap:inactive`将解开代码块中的行，但在按住鼠标时会换行。参数`wrap`只是`unwrap:false`的别名，而`unwrap`只是`unwrap:true`的别名。

示例：

` ```python unwrap:true` 或 ` ```python unwrap`
![解开为真](images/UnwrapTrue.gif)

` ```python unwrap:false` 或 ` ```python wrap`
![解开为假](images/UnwrapFalse.png)

` ```python unwrap:inactive`
![解开为非活动状态](images/UnwrapInactive.gif)
### 忽略

除了排除语言外，插件还可以通过包含`ignore`参数来告诉它不应用于特定的代码块。

还可以通过在笔记的前置元数据中添加`code-styler-ignore: true`来告诉插件不应用于特定的文件。

示例：

` ```cpp ignore`
![忽略](images/忽略.png)

`code-styler-ignore: true`
![忽略元数据](images/忽略元数据.png)
外貌
代码块

可以在设置中更改代码块的曲率，使其显示更圆或更直。

如果在设置中启用，代码块的左边框可以根据语言进行着色（颜色与语言图标相匹配）。还可以更改此边框的宽度。

示例：

![语言边框](images/LanguageBorder.png)
### 头部

在以下情况下会显示头部：

- 您指定了 `title:`
- 您指定了 `fold` 如果您指定了 `fold` 但没有指定 `title:` 或 `fold:`，则默认文本将显示在头部（默认为“折叠代码”）
- 您通过 ` ```language` 定义了代码块语言，并在主题设置中将 `Display Header Language Tags` 设置为 `Always` 或将 `Display Header Language Icons` 设置为 `Always`

如果显示了头部，则折叠也会起作用。如果将 `Display Header Language Tags` 设置为 `Always`，则头部将始终显示代码块语言，如果将其设置为 `If Header Shown`，则仅在显示头部时显示（即设置了 `title` 参数）。

您可以在设置页面中启用选项以显示头部中的图标。当此选项设置为 `If Header Shown` 时，如果代码块中指定的语言具有图标并且显示了代码块头部（即设置了 `title` 参数），则会显示图标。当此选项设置为 `Always` 时，如果代码块中指定的语言具有图标，则始终显示带有图标的头部。图标还可以在设置中设置为灰度或调整大小。目前有大约170个不同语言的图标可用。

语言标签文本和标题文本也可以设置为粗体和/或斜体，以及特定字体。此外，头部文本的字体大小可以更改。

示例：

- 无头部
![Header None](images/HeaderNone.png)

- 仅带折叠的头部
![Header Fold](images/HeaderFold.png)

- 仅带代码块语言的头部
![Header Language](images/HeaderLanguage.png)

- 带有代码块语言和标题的头部
![Header Language Title](images/HeaderLanguageTitle.png)

- 带有代码块语言、标题和图标的头部
![Header Language Title Icon](images/HeaderLanguageTitleIcon.png)
### 活动行指示器

如果在设置中启用，代码块内的活动行可以用自定义颜色进行突出显示。如果还在设置中启用了此设置，还可以通过不同颜色的行号来指示活动行。

如果在设置中启用，代码块外的活动行也可以用自定义颜色进行突出显示。

示例：
![活动代码块突出显示](images/ActiveCodeblockHighlight.png)

![活动行号指示器](images/ActiveLineNumberIndicator.png)

![活动编辑器突出显示](images/ActiveEditorHighlight.png)
内联代码也可以通过设置来自定义背景颜色、文本颜色、编辑时的文本颜色、字体粗细、内联代码周围的间距和内联代码的曲率。

内联代码在编辑模式和阅读模式下都可以进行语法高亮，使用的高亮样式与代码块相同。可以通过使用语法`{语言} code here`来设置（注意`{语言}`和`code here`之间的空格是不必要的）。

您也可以将文本`{text here not styled}`作为内联代码输入，只需在插件激活时在其前面加上空的`{}`：`{}{text here not styled}`将在光标位于内联代码之外时生成`{text here not styled}`。

示例：

`{python} 'result if true'.method() if 1 else result_if_false.property`
![内联代码高亮](images/InlineCodeHighlighted.png)

您还可以在内联代码之前使用参数`title:`和`icon`来设置标题和/或显示图标。`title`可以用引号或双引号括起来的多个单词。

示例：

`{python icon} 'result if true'.method() if 1 else result_if_false.property`
![内联代码高亮图标](images/InlineCodeHighlightedIcon.png)

`{python title:'Inline If'} 'result if true'.method() if 1 else result_if_false.property`
![内联代码高亮标题](images/InlineCodeHighlightedTitle.png)

`{python title:'Inline If' icon} 'result if true'.method() if 1 else result_if_false.property`
![内联代码高亮标题图标](images/InlineCodeHighlightedTitleIcon.png)
## 插件兼容性

该插件与以下 Obsidian 插件完全兼容：

[![Execute Code Plugin](https://github-readme-stats.vercel.app/api/pin/?username=twibiral&repo=obsidian-execute-code&show_owner=true&bg_color=00000010&border_color=e3e7ef)](https://github.com/twibiral/obsidian-execute-code)
[![Code Preview Plugin](https://github-readme-stats.vercel.app/api/pin/?username=zjhcn&repo=obsidian-code-preview&show_owner=true&bg_color=00000010&border_color=e3e7ef)](https://github.com/zjhcn/obsidian-code-preview)
[![Code Preview Plugin](https://github-readme-stats.vercel.app/api/pin/?username=tillahoffmann&repo=obsidian-file-include&show_owner=true&bg_color=00000010&border_color=e3e7ef)](https://github.com/tillahoffmann/obsidian-file-include)
[![Admonitions Plugin](https://github-readme-stats.vercel.app/api/pin/?username=javalent&repo=admonitions&show_owner=true&bg_color=00000010&border_color=e3e7ef)](https://github.com/javalent/admonitions)
## 路线图

请查看[路线图讨论](../../discussions/8)。
## 如何安装插件

- 直接从Obsidian安装即可
- 或者您可以将`main.js`、`styles.css`、`manifest.json`复制到您的vault `VaultFolder/.obsidian/plugins/code-styler/`中，或者使用[Obsidian Beta Reviewers Plugin](https://github.com/TfTHacker/obsidian42-brat)。
## 贡献

欢迎所有的贡献者，只需创建一个合并请求。[路线图](../../discussions/8)中的项目列表是一个很好的起点！

请尽量创建可重现的错误报告/问题，包括以下内容：

- **可重现性**：包括重现问题的步骤
- **具体性**：包括可能的插件冲突、主题冲突等相关细节
- **独特性**：请不要重复已存在的未解决问题，而是在现有问题上添加内容
- **范围**：请为每个已识别的错误创建一个单独的问题
### 维护者

- [@mayurankv](https://github.com/mayurankv)
### 贡献者

[![贡献者列表](https://contrib.rocks/image?repo=mayurankv/Obsidian-Code-Styler)](https://github.com/mayurankv/Obsidian-Code-Styler/graphs/contributors)

*使用 [contrib.rocks](https://contrib.rocks) 制作。*

此插件基于 [@mugiwara85](https://github.com/mugiwara85) 的 [Codeblock Customizer Plugin](https://github.com/mugiwara85/CodeblockCustomizer)。
## 支持

如果您喜欢这个插件，并希望帮助支持持续开发，请使用下面的按钮！

[![给我买杯咖啡](https://img.buymeacoffee.com/button-api/?text=给我买杯咖啡&emoji=&slug=mayurankv2&button_colour=e3e7ef&font_colour=262626&font_family=Inter&outline_colour=262626&coffee_colour=a0522d)](https://www.buymeacoffee.com/mayurankv2)
## 许可证

根据 MIT 许可证进行分发。有关更多信息，请参阅 `LICENSE`。



