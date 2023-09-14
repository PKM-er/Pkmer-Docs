---
uid: 20230822233837
title: Obsidian 插件：Folder Note
tags: [笔记文件处理, 界面相关, 搜索/排序, 导航工具, 自动化, obsidian插件]
description: 为文件夹中生成卡片风格的文件夹概述。
author: OS
type: basic
draft: false
editable: false
modified: 20230914150110
---

# Obsidian 插件：Folder Note

> [!Note] 插件名片
> - 插件名称：Folder Note
> - 插件作者：xpgo
> - 插件说明：为文件夹中生成卡片风格的文件夹概述。
> - 插件分类：[' 笔记文件处理 ', ' 界面相关 ', ' 搜索/排序 ', ' 导航工具 ', ' 自动化 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/xpgo/obsidian-folder-note-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?folder-note-plugin)

## 概述

为文件夹中生成卡片风格的文件夹概述文件。

![Folder Note](https://cdn.pkmer.cn/covers/folder-note-plugin.PNG!pkmer)

## 效果&特性

![Folder_Note_Show](https://raw.githubusercontent.com/xpgo/obsidian-folder-note-plugin/master/image/folder-note1.png)

- 轻松显示和管理文件夹笔记
- 支持 3 种不同的文件夹笔记方法
- 自动保持文件夹和文件夹笔记名称同步
- 通过活动笔记文件创建文件夹
- 自定义初始文件夹笔记内容
- 文件夹内容的卡片和条形视图
- 优雅显示项目数据的 ccard 代码块

## 使用

Obsidian 插件：为文件夹添加描述笔记。生成以卡片样式呈现的文件夹概览。使您的仓库成为一个层次化的笔记系统。

### 基本使用

- **添加**描述注释：在文件资源管理器面板中按住 CTRL 键并单击文件夹。
- **显示**描述注释：只需单击文件夹。
- **删除**描述注释：只需删除已打开的注释文件。
- **设置**：在设置面板上配置注释文件的方法、文件名和初始模板。
- **命令**：使用一些命令来控制文件夹注释插件。

### 工作原理

机制很简单：将一个与文件夹同名的笔记添加到对应文件夹中，文件夹的笔记文件将被 CSS 规则隐藏起来（默认，但是也可以在插件设置中选择显示）。

当按下 CTRL+ 单击一个文件夹时，插件将根据你选择的方法创建一个带有路径的描述笔记。当单击一个文件夹时，插件将为你打开附加的笔记。你可以配置插件来隐藏/显示文件夹的笔记。它还可以配置为尝试自动保持文件夹和笔记名称的同步。

有三种方法可以为文件夹创建描述笔记：**文件夹内部**、**文件夹外部**和**索引文件**，请阅读 [文件夹笔记方法](https://github.com/xpgo/obsidian-folder-note-plugin/blob/main/doc/folder-note-methods.md) 以了解每种方法的优缺点。**默认**配置是**文件夹内部**方法。如果你喜欢其他方法，请更改设置。

### 设置

- **笔记文件方法**：选择上述提到的文件夹笔记文件方法。
- **索引文件名**：对于*索引文件*方法，设置文件夹笔记的名称，如 `_overview_` 或 `index`。
- **笔记初始内容**：为新的文件夹笔记设置初始内容，可以使用一些关键词：
    - {{FOLDER_NAME}}将被替换为文件夹名称。
    - {{FOLDER_PATH}}将被替换为文件夹路径。
    - {{FOLDER_BRIEF}}将被替换为用于当前文件夹的卡片样式概览的 ccard 代码块，ccard 中的内容可以进行编辑，详见 [ccard语法](https://github.com/xpgo/obsidian-folder-note-plugin/blob/main/doc/ccard-syntax.md) 了解更多信息。
    - {{FOLDER_BRIEF_LIVE}}将被替换为一个微小的代码块，该代码块将实时渲染为文件夹概览。
- **新笔记的快捷键**：设置使用 CTRL+ 单击或 ALT+ 单击来创建新的文件夹笔记。
- **隐藏文件夹笔记**：如果要在文件资源管理器中显示笔记文件，请关闭此设置。
- **自动重命名**：对于*文件夹内部*和*文件夹外部*的方法，插件会尝试在更改文件夹名称或反之时重命名文件夹笔记名称。然而，此功能是实验性的，不总是有效。如果遇到与操作相关的问题，请手动重命名它们。
- **删除文件夹笔记**：对于*文件夹外部*的方法，在删除文件夹时删除文件夹笔记文件。

### 命令

使用 `Ctrl+P` 打开 Obsidian 的命令面板，并使用以下插件的命令：

- **插入文件夹概览**: 在当前笔记文件中插入一个文件夹概览代码块。
- **将当前笔记转为文件夹**: 基于当前笔记创建一个文件夹，并将笔记附加到新文件夹作为文件夹笔记。

文件夹概述

该插件可以自动生成一个 `ccard` 代码块，用于在笔记文件中显示文件夹的概述。该代码块可以在任何普通的笔记文件中使用和编辑。有关 `ccard` 代码块的语法，请参阅 [ccard语法](https://github.com/xpgo/obsidian-folder-note-plugin/blob/main/doc/ccard-syntax.md)。

您可以在设置页面的初始文件夹笔记模板中使用 `ccard` 代码块。或者，您可以在初始文件夹笔记模板中使用一些关键词来为您生成代码块：

**关键词：{{FOLDER_BRIEF}}**

关键词{{FOLDER_BRIEF}}将被替换为一个 `ccard` 代码块，该代码块描述了文件夹的简要概述。您可以编辑代码块中的代码，以显示任何您喜欢的内容。如果您想要更新文件夹的概述，可以通过命令将其插入到笔记中：Ctrl+P，插入文件夹概述。

**关键词：{{FOLDER_BRIEF_LIVE}}**

关键词{{FOLDER_BRIEF_LIVE}}将被替换为一个 `ccard` 代码块，该代码块将实时渲染为文件夹概述。当您将一些带有图像的笔记放在一个文件夹中时，例如事物收集，它将动态生成所有带有图像的笔记的卡片视图。

**配置**

如果您想要配置 `ccard` 代码块的内容和外观，请参阅 [ccard语法](https://github.com/xpgo/obsidian-folder-note-plugin/blob/main/doc/ccard-syntax.md)。您可以配置样式、列数、图像前缀、文件夹路径、仅笔记、最大简要长度等。例如，下面的图片展示了不同样式的文件夹概述。

![image.png](https://cdn.pkmer.cn/images/20230914145946.png!pkmer)

## 更新日志

如果您发现了一些问题，请记得更新插件。

**对于从版本<0.4.0 进行更新**，请参考 [从旧版本更新](https://github.com/xpgo/obsidian-folder-note-plugin/blob/main/doc/update-old-version.md)。

### 0.7.x

- 添加了条目数据的剥离样式视图（0.7.3）
- 在默认初始内容中使用{{FOLDER_BRIEF_LIVE}}（0.7.2）
- 添加了{{FOLDER_PATH}}关键字用于初始内容（0.7.1）
- 修复了一些关键字在初始内容中的多次使用问题（0.7.1）
- 为 ccard 添加了 imagePrefix 键（0.7.0）
- 为 folder_brief_live 添加了 noteOnly 键（0.7.0）
- 修复了在外部模式下同时显示文件夹和笔记的问题（0.7.0）
- 根据文件夹方法隐藏设置选项（0.7.0）

查看 [更多变更日志](https://github.com/xpgo/obsidian-folder-note-plugin/blob/main/doc/change-log.md)。

## 未来计划

- 添加更多的模板选项以生成初始内容。
- 根据文件夹中的内容自动生成文件夹笔记文件的概览内容，类似于软件 [Trilium](https://github.com/zadam/trilium) 的功能。（部分完成）
- 更强大的重命名操作。
- 更多样式的概览。

## 已知问题

- 创建时可能会出现文件夹注释文件。再次点击以隐藏。
- 如果您发现任何问题或想改进插件，请在 GitHub 存储库上留言。