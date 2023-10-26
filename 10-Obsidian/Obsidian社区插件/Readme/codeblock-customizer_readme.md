---
uid: 2023080322160870
title: Obsidian 插件：Codeblock Customizer
tags: ['obsidian插件', 'readme']
description: 在编辑和阅读模式下自定义您的代码块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Codeblock Customizer

> [!Note] 插件名片
> - 插件名称：Codeblock Customizer
> - 插件作者：mugiwara
> - 插件说明：在编辑和阅读模式下自定义您的代码块。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mugiwara85/CodeblockCustomizer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?codeblock-customizer)

## 概述

在编辑和阅读模式下自定义您的代码块。

![Codeblock Customizer](https://cdn.pkmer.cn/covers/codeblock-customizer.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mugiwara85/CodeblockCustomizer/master/README.md)
>

---

## Readme(翻译）

下面是 [[codeblock-customizer]] 插件的自述翻译

<h1 align="center">Codeblock Customizer 插件</h1>

<p align=center>


</p>

这是一个适用于 Obsidian（<https://obsidian.md）的插件。>

由于我没有找到任何一个可靠地在编辑器和阅读模式下工作的自定义代码块的插件，所以我自己创建了一个。我不是一个设计师，所以如果你创建了一个很酷的主题，请给我发送颜色代码，我可能会在下一个版本中将其包含为默认主题 :-)

该插件在编辑器模式和阅读模式下均可使用！

该插件允许您以以下方式自定义代码块：

- 默认的暗色和亮色主题。您也可以创建自己的主题。
- 启用编辑器活动行高亮。Obsidian 中的活动行（包括代码块）将被突出显示（您可以自定义颜色）。
- 启用代码块活动行高亮。代码块内的活动行将被突出显示（您可以自定义颜色）。
- 排除语言。您可以用逗号分隔的语言来定义插件不适用的语言。
- 为代码块设置背景颜色。
- 允许您突出显示特定行。
    - 自定义突出显示颜色
- 允许您定义多个突出显示颜色以突出显示行。
- 显示文件名
    - 如果定义了文件名，将插入一个标题，可以自定义文本（颜色、粗体、斜体）和标题（颜色、标题行）本身
- 折叠代码
    - 如果显示了标题（通过定义文件名或其他方式解释），您可以单击标题折叠其下方的代码块
- 显示代码块语言。这在标题中显示代码块的语言（如果指定）。
    - 自定义语言标签在标题中的文本颜色、背景颜色、粗体文本、斜体文本。
    - 默认情况下，仅在显示标题并为代码块定义了语言时才显示语言标签。但是，您可以强制始终显示代码块语言，即使不显示标题。
- 在标题中显示代码块语言图标（如果指定语言可用）。
- 为代码块添加行号
    - 自定义如果突出显示一行是否还应突出显示行号
    - 自定义行号的背景颜色和颜色
主题

默认的暗色主题：

![Pasted_image_20230125231644.png](attachments/Pasted_image_20230125231644.png)

默认的亮色主题：

![Pasted_image_20230125231735.png](attachments/Pasted_image_20230125231735.png)

该插件会根据 Obsidian 中选择的模式（暗色/亮色）自动设置默认主题。您可以自定义颜色，然后将其保存为“主题”。创建主题时有两个切换按钮，如下所示：

![Theme.png](attachments/Theme.png)

如果您经常更改 Obsidian 的主题，并且想要使用自己的主题，那么这两个切换按钮对您很重要。如果您保存了一个主题，并且想要将该主题默认设置为暗色或亮色模式，则设置相应的切换按钮。这样您就可以将您的主题设置为默认的亮色或暗色主题。

突出显示

### 主要亮点

要突出显示代码块中的行，请在代码块的第一行中指定 `hl:` 后跟行号。

- 您可以指定单个行号，用逗号分隔，例如：`hl:1,3,5,7`。
- 您可以指定范围，例如：`hl:2-5`。这将突出显示从第 2 行到第 5 行的行。
- 您还可以组合这些方法，例如：`hl:1,3,4-6`。这将突出显示第 1 行、第 3 行以及第 4 行到第 6 行的行。

示例：

```cpp hl:1,3,4-6`

![Pasted_image_20230125230046.png](attachments/Pasted_image_20230125230046.png)

### 替代高亮

在版本 `1.1.0` 中，发布了这个新功能。从现在开始，您可以定义多个高亮颜色。这意味着您需要为高亮颜色定义一个名称。该名称将用作参数，并且您可以像使用 `hl` 参数一样使用它。

示例：

您定义了三种高亮颜色（`info`，`warn`，`error`）。之后为浅色和深色主题指定颜色。深色主题将使用指定的深色，而浅色主题将使用指定的浅色。之后，您可以在代码块的第一行中使用它：

` ```cpp info:2 warn:4-6 error:8`

![[Pasted_image_20230314211256.png]](attachments/Pasted_image_20230314211256.png)

带有多个高亮颜色的示例代码块：

![[Pasted_image_20230314211417.png]](attachments/Pasted_image_20230314211417.png)

## 显示文件名

要显示文件名，请在代码块的第一行中指定 `file:`，后面跟着文件名。如果文件名包含空格，请使用 `""` 将其括起来，例如：`file:"long filename.cpp"`。

示例：

` ```cpp file:test.cpp`

` ```cpp file:"long filename.cpp"`

![Pasted_image_20230125230351.png](attachments/Pasted_image_20230125230351.png)

折叠

要在打开文档时指定初始折叠状态，请在代码块的第一行中指定 `fold`。如果在代码块中定义了 `fold`，那么当您打开文档时，代码块将自动折叠，只显示标题。您可以通过点击标题来展开代码块。

示例：

` ```cpp fold`

![Pasted_image_20230125230928.png](attachments/Pasted_image_20230125230928.png)

图标

版本 `1.1.0` 引入了一个新功能。现在可以在代码块中显示图标。目前有大约 170 个不同语言的图标可用。您可以在设置页面中启用该选项以在标题中显示图标。如果启用了此选项，并且代码块中指定的语言有图标，并且显示了标题，则会显示图标。您还可以强制始终显示图标（这也意味着标题也将显示），即使未显示标题，因为未定义 `file` 参数。

## 头部

在以下情况下显示头部：

- 您指定了一个 `file:`
- 您指定了 `fold`，如果您指定了 `fold` 但没有指定 `file:`，则头部将显示默认文本 `Collapsed code`
- 您在设置中启用了 `Always display codeblock language` 或 `Always display codeblock language icon` 选项，但没有指定 `file:` 或 `fold`

如果显示了头部，则折叠也会起作用。如果启用了 `Always display codeblock language`，则头部也会显示代码块的语言。

示例：

- 仅带折叠的头部

![Pasted_image_20230125233958.png](attachments/Pasted_image_20230125233958.png)

- 仅带代码块语言的头部

![Pasted_image_20230125231233.png](attachments/Pasted_image_20230125231233.png)

- 同时带有代码块语言和文件名的头部

![Pasted_image_20230125231356.png](attachments/Pasted_image_20230125231356.png)

- 同时带有代码块语言、文件名和图标的头部

![[Pasted_image_20230314212111.png]](attachments/Pasted_image_20230314212111.png)

## 行号

要启用行号，请转到插件设置并启用“启用行号”选项。之后，行号将显示在代码块之前。

**注意：**在版本 `1.1.0` 之前显示行号的方法已经不存在了。从现在开始，行号将如下所示显示。

示例：

![[Pasted_image_20230314211657.png]](attachments/Pasted_image_20230314211657.png)

阅读模式示例：

![Pasted_image_20230125232448.png](attachments/Pasted_image_20230125232448.png)

## 注意

如果您使用的是 1.0.0 版本，则必须从 `VaultFolder/.obsidian/plugins/codeblock-customizer/` 中删除 `data.json` 文件。这只需要进行一次。这是必要的，因为该文件不包含版本 1.0.1 或更高版本所需的几个条目。之后，一切应该正常工作。

## 如何安装插件

- 直接从 Obsidian 安装
- 或者你可以将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/codeblock-customizer/` 目录中。

## 支持

如果您喜欢这个插件，并希望帮助支持持续开发，请使用下面的按钮！
