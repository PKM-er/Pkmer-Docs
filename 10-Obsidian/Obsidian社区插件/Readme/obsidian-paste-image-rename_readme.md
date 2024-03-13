---
uid: 2023080322243195
title: Obsidian 插件：Paste image rename
tags: ['obsidian插件', 'readme']
description: 粘贴后重命名图像，支持命名模式和自动重命名。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Paste image rename

> [!Note] 插件名片
> - 插件名称：Paste image rename
> - 插件作者：Reorx
> - 插件说明：粘贴后重命名图像，支持命名模式和自动重命名。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/reorx/obsidian-paste-image-rename)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-paste-image-rename)

## 概述

粘贴后重命名图像，支持命名模式和自动重命名。

![Paste image rename](https://cdn.pkmer.cn/covers/obsidian-paste-image-rename.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/reorx/obsidian-paste-image-rename/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-paste-image-rename]] 插件的自述翻译

# Obsidian 粘贴图片重命名

> :loudspeaker: 从 1.4.0 版本开始，粘贴图片重命名成为一个通用的重命名插件，可以处理添加到 vault 中的所有附件。

这个插件受到 Zettlr 的启发，Zettlr 显示一个提示框，允许用户重命名图片，如果您希望您的图片被清晰地命名和组织，这是一个很大的帮助。

<details>
  <summary>Zettlr粘贴图片后的提示框</summary>

  ![image](https://user-images.githubusercontent.com/405972/162478462-b5ff4fc9-ade2-4ace-adcb-c6436479a7d9.png)

</details>

粘贴图片重命名插件不仅实现了 Zettlr 的功能，还允许您自定义生成图片名称的方式，并最终通过自动根据规则重命名图片来解决繁琐的问题。

**目录**

- [Obsidian粘贴图片重命名](#obsidian-粘贴图片重命名)
  - [如何使用](#如何使用)
    - [基本用法](#基本用法)
    - [设置`imageNameKey`前置元数据](#设置imagenamekey前置元数据)
    - [给重复的名称添加前缀/后缀](#给重复的名称添加前缀后缀)
    - [批量重命名过程](#批量重命名过程)
    - [立即批量重命名所有图片](#立即批量重命名所有图片)
    - [处理所有附件](#处理所有附件)
  - [常见问题解答](#常见问题解答)
  - [设置](#设置)

如何使用

### 基本用法

安装插件后，您可以将图像粘贴到任何文档中，然后重命名提示将显示：

![](images/modal.png)

通过输入新名称并点击“重命名”（或直接按回车键），图像将被重命名，并且内部链接将被替换为新名称。

如果将“图像名称模式”设置为 `{{fileName}}`（在 1.2.0 版本之后是默认行为），

“新名称”将生成为活动文件的名称。

![](images/modal-fileName.png)

### 设置 `imageNameKey` 前置元数据

当在一个文档中添加大量图片时，人们可能希望这些图片以相同的格式命名，这就是 `imageNameKey` 的用处所在。

首先在前置元数据中为 `imageNameKey` 设置一个值：

```
---
imageNameKey: my-blog
---
```

然后粘贴一张图片，你会注意到“新名称”已经生成为“my-blog”，这正是 `imageNameKey` 的值：

![](images/modal-with-imageNameKey.png)

你可以通过在设置中更新“图像名称模式”值来更改新名称生成的模式。

有关详细说明和其他功能，如自动重命名，请参阅 [设置](#settings)。

### 给重复的名称添加前缀/后缀

如果存在同名文件，该插件将始终尝试添加前缀/后缀。

让我们从上一节继续，并粘贴第二张图片，提示仍然会将新名称显示为 "my-blog"，现在如果我们只需点击 " 重命名 "，文件将被重命名为 "my-blog-1.png"，而不是 "my-blog.png"：

<img src="images/document.png" width="400px">

"-1" 后缀是根据默认设置生成的：

- 因为 "Duplicate number at start" 为 false，所以使用后缀而不是前缀
- "Duplicate number delimiter" "-" 放在数字 "1" 之前

如果我们粘贴第三张图片而不编辑 "New name" 输入，它的名称将为 "my-blog-2.png"，数字根据附件目录中 "my-blog-?.png" 的最大数字递增。

如果您在设置中启用了 " 自动重命名 "，此功能尤其强大，您只需添加新图片而无需考虑，它们将按照设置的模式和 `imageNameKey` 进行顺序重命名。

### 批量重命名过程

> 1.3.0 版本新增功能

您可以使用命令“批量重命名当前文件中的嵌入文件”来重命名当前文件中的图像和其他附件（甚至是笔记）。

![](images/batch-renaming.png)

上图演示了如何使用此功能将所有的 `foo-1.png`，`foo-2.png`... png 文件重命名为 `bar-1-png`，`bar-2.png`...

您还可以将图像重命名为相同的名称，并让插件为您处理名称去重。在此处查看视频演示：<https://i.imgur.com/6UICugX.mp4>

### 立即批量重命名所有图像

> 1.5.0 新增功能

" 立即批量重命名所有图像（在当前文件中）" 命令将根据设置中的 " 图像名称模式 " 重命名当前文件中的所有图像。

这是使用特定参数的 [批量重命名过程](#batch-renaming-process) 的快捷方式，使得每天的图像重命名更加容易。

请注意，此命令没有确认功能，请谨慎使用！

### 处理所有附件

> 1.4.0 版本新增功能

粘贴图片重命名不仅仅是一个用于粘贴图片的插件，它有潜力处理添加到存储库中的所有附件，无论是粘贴还是拖放。

要使用此功能，您需要在设置中启用“处理所有附件”选项。

![](images/handle-all-attachments-settings.png)

此外，您还可以配置“排除扩展名模式”以忽略与给定扩展名模式匹配的文件。

## 常见问题解答

- 问：我粘贴了一张图片，但重命名提示没有出现。

    答：这可能是因为您正在使用 Windows 系统，并且从文件中粘贴（即图片是从文件资源管理器中复制的，而不是从浏览器或图片查看器中复制的）。在 Windows 中，从文件中粘贴就像是常规的文件传输，原始文件名会被保留，而不是由 Obsidian 创建并命名为“Pasted image ...”。您需要在设置中打开“处理所有附件”选项，以使其在这种情况下起作用。

## 设置

- **图像名称模式**

  该模式指示新名称应如何生成。

  - 可用变量：
    - `{{fileName}}`：活动文件的名称，不包括“.md”扩展名。
    - `{{imageNameKey}}`：此变量从 markdown 文件的 frontmatter 中读取，从相同的键 `imageNameKey` 中读取。
    - `{{DATE:$FORMAT}}`：使用 `$FORMAT` 来格式化当前日期，`$FORMAT` 必须是 Moment.js 格式字符串，例如 `{{DATE:YYYY-MM-DD}}`。
  - 示例

    这里有一些模式到图像名称的示例（按顺序重复），变量：`fileName = "My note"`，`imageNameKey = "foo"`：

    - `{{fileName}}`：My note，My note-1，My note-2
    - `{{imageNameKey}}`：foo，foo-1，foo-2
    - `{{imageNameKey}}-{{DATE:YYYYMMDD}}`：foo-20220408，foo-20220408-1，foo-20220408-2
- **在开头（或结尾）添加重复编号**

  如果启用，重复编号将作为前缀添加到图像名称的开头，否则将作为后缀添加到图像名称的结尾。

- **重复编号分隔符**

  用于生成重复名称的编号前缀/后缀的分隔符。例如，如果值为“-”，后缀将类似于“-1”，“-2”，“-3”，前缀将类似于“1-”，“2-”，“3-”。

- **自动重命名**

  默认情况下，在重命名之前，重命名模态框将始终显示以确认操作，如果设置了此选项，则在粘贴后图像将自动重命名。

- **处理所有附件**

  默认情况下，在重命名之前，重命名模态框将始终显示以确认操作，如果设置了此选项，则在粘贴后图像将自动重命名。

- **排除扩展名模式**

  仅当启用了“处理所有附件”选项时，此选项才有用。

  编写一个正则表达式模式来排除某些扩展名的处理。只使用第一行。

- **禁用重命名通知**

  如果不想在重命名图像时看到通知，请关闭此选项。

  请注意，Obsidian 可能会在链接发生更改时显示通知，此选项无法禁用该通知。
