---
uid: 20230822234037
title: Obsidian 插件：Folder Note
tags: [笔记文件处理, 界面相关, 搜索/排序, 导航工具, 自动化, obsidian插件]
description: 为文件夹中生成卡片风格的文件夹概述。
author: OS,永皓Yh
type: basic
draft: false
editable: false
modified: 20240408185545
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

![Folder Note|800](https://cdn.pkmer.cn/covers/folder-note-plugin.PNG!pkmer)

## 效果&特性

![Folder_Note_Show|800](https://raw.githubusercontent.com/xpgo/obsidian-folder-note-plugin/master/image/folder-note1.png)

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

#### 文件夹概览

- 通过右键菜单 creat folder overview/命令菜单 Insert folder overview 进行创建，并可进行编辑

#### 文件夹笔记

- 通过 alt 或 ctrl + 鼠标单击创建文件夹笔记
- 通过右键文件夹进行创建
- 通过命令菜单创建
- 点击文件夹打开对应文件夹笔记
- **添加**文件夹笔记：在文件资源管理器面板中按住 alt 或 ctrl 键并单击文件夹。
- **显示**文件夹笔记：只需单击文件夹。
- **删除**文件夹笔记：只需删除已打开的注释文件。
- **设置**：在设置面板上配置注释文件的方法、文件名和初始模板。
- **命令**：使用一些命令来控制文件夹注释插件。

### 工作原理

机制很简单：将一个与文件夹同名的笔记添加到对应文件夹中，文件夹的笔记文件将被 CSS 规则隐藏起来（默认，但是也可以在插件设置中选择显示）。

当按下 CTRL+ 单击一个文件夹时，插件将根据你选择的方法创建一个带有路径的描述笔记。当单击一个文件夹时，插件将为你打开附加的笔记。你可以配置插件来隐藏/显示文件夹的笔记。它还可以配置为尝试自动保持文件夹和笔记名称的同步。

有三种方法可以为文件夹创建描述笔记：**文件夹内部**、**文件夹外部**和**索引文件**，请阅读 [文件夹笔记方法](https://github.com/xpgo/obsidian-folder-note-plugin/blob/main/doc/folder-note-methods.md) 以了解每种方法的优缺点。**默认**配置是**文件夹内部**方法。如果你喜欢其他方法，请更改设置。

## 设置菜单

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

### General settings 常规设置

- Folder note name：文件夹笔记的名称 `{{folder_name}}` 代表文件夹的名称
- Default folder note type for new folder notes：默认类型，`markdown`
- Supported file types for folder notes：新增类型，以便在上面进行选择
- Template path ：选择文件夹笔记的模板
- Storage location：文件夹笔记的位置
    - inside the folder：在内部
    - In the parent folder：在旁边
- Switch to new storage location：转换到新设置的位置（重启）
- Delete folder notes when deleting the folder：删除文件夹时并删除笔记 `关闭`
- Move folder notes when moving the folder：移动文件夹时，移动文件夹笔记 `开启`
- Key for creating folder note：创建文件夹笔记的方式
    - `Ctrl + Click` ：按住 ctrl 点击文件夹
    - `Alt+ Click`：按住 alt 点击文件夹
- Key for opening folder note：打开文件夹笔记的方式
    - `Mouse Click`：鼠标点击文件夹
    - `Ctrl + Click` ：按住 ctrl 点击文件夹
    - `Alt+ Click`：按住 alt 点击文件夹
- Sync folder name：文件夹名称修改时同步修改文件夹笔记名称 `开启`
- Open folder note in a new tab by default：默认在新标签页打开文件夹笔记 `关闭`
- Automatically create folder notes：创建文件夹时自动创建文件夹笔记 `关闭`
- Enable front matter title plugin integration：文件夹笔记名称修改时同步修改文件夹名称 `开启`
- Create folder note for every folder：为库中的每个文件夹创建文件夹笔记

### Folder overview settings 文件夹概览默认设置

- Manage folder overview defaults：修改文件夹笔记的概览默认配置

文件夹概览即在文件夹笔记中显示对应文件夹下笔记内容

- Show the title：是否显示标题 `{{folderName}}` 为文件夹名称
- Folder path for the overview：概览文件夹路径
- Overview style：概览样式
    - list：列表
    - explore：文件夹
- Include types：包括类型
- Disable file tag：是否应在文件名后显示文件标签
- Show folder notes：是否应在概览中显示文件夹笔记
- File depth：文件深度
- Sort files by：文件的排序方式
    - `name/created/modified`：名称/创建时间/修改时间
    - `asc/des`：升序/降序
- Show folder names of folders that appear empty in the folderoverview：显示文件夹概述中内容为空的文件夹
- Only show first empty subfolders of current folder：只显示当前文件夹的第一个空子文件夹

### Exclude folders settings 排除文件夹设置

- Manage excluded folders：管理排除的文件夹，使用 `*` 表示通用匹配
    - 前后使用 `*` 包裹的内容，排除包含该内容的文件夹
    - 在内容名称前使用 `*`，排除以该内容结尾的文件夹
    - 在内容名称后使用 `*`，排除以该内容开头的文件夹
    - 正则表达式和通配符仅用于文件夹名称，而不是路径
- Add excluded folder：添加排除文件夹

#### Exclude folder default settings 排除文件夹设置

输入路径即可排除

- Include subfolders：子文件央是否也应排除 `开启`
- Disable folder name sync：禁用文件夹名称同步 `关闭`
- Don't show folder in folder overview：在文件夹概览中不显示 `关闭`
- Disable auto creation of folder notes in this folder：禁用在此文件夹中自动创建文件夹笔记 `开启`
- Disable open folder note：禁用打开的文件夹笔记 `关闭`
- Collapse folder when opening folder note：打开文件夹笔记时是否折叠该文件夹 `关闭`

#### Exclude pattern default settings 排除模式设置

在文件夹名称的开头添加 `{regex}` 以使用排除模式。

- Disable folder name sync：禁用文件名更改后重命名文件夹名称 `开启`
- Disable auto creation of folder notes in this folder：禁用在此文件夹中自动创建文件夹笔记 `开启`
- Don't show folder in folder overview：在文件夹概览中不显示 `关闭`
- Disable open folder note：禁用在打开文件夹时打开文件夹笔记 `关闭`
- Collapse folder when opening folder note：打开文件夹笔记时折叠文件夹 `关闭`

### File explorer settings 文件资源管理器设置

- Hide folder note：隐藏文件夹笔记 `开启`
- Don't open folder notes by clicking on the name (on mobile)： 在移动设备上单击文件夹名称时，文件夹笔记不会打开 `开启`
- Only open folder notes through the name：单击文件夹名称在文件外部访问器中打开文件夹笔记 `关闭`
- Disable folder collapsing：单击文件夹名称禁用折叠 `关闭`
- Use submenus：使用文件/文件夹命令的子菜单 `开启`
- Change folder name in the file explorer：文件夹笔记重命名时，在文件资源管理器中自动重命名文件夹名称 `开启`

#### Style settings 样式设置

- Hide collapse icon：当文件夹只包含文件夹时，隐藏文件资源管理器中文件夹名称旁边的折叠图标 `开启`
- Underline the name of folder notes：为具有文件夹笔记的文件夹添加下划线 `开启`
- Bold the name of folder notes： 将文件夹笔记加粗 `关闭`
- Cursive the name of folder notes：中将文件夹笔记设为斜体 `关闭`

### Path settings 路径设置

- Open folder note through path：通过路径打开文件夹笔记
- Change folder name in the path：当文件夹笔记重命名时，自动重命名上方路径中的文件夹名称

#### Style settings 样式设置

- Underline folders in the path：将下划线添加到笔记上方路径中有文件夹笔记的文件夹 `开启`
- Bold folders in the path：将文件夹名称加粗 `关闭`
- Cursive the name of folder notes in the path：将文件夹笔记设为斜体 `关闭`

### 命令菜单

使用 `Ctrl+P` 打开 Obsidian 的命令面板，并使用以下插件的命令：

- Create canvas folder note for current folder of active note：为当前笔记的文件夹创建 canvas 文件夹笔记
- Create folder note from selected text：从所选文本创建文件夹笔记
- Create folder note with a new folder for the active note in the current folder：以当前文件作为文件夹笔记并创建新文件夹
- Create markdown folder note for current folder of active note：为当前笔记的文件夹创建 markdown 文件夹笔记
- Delete folder note of current folder of active note：删除当前文件所在的文件夹的文件夹笔记
- Insert folder overview：插入文件夹概述
- Make current active note a folder note for the folder of the active note：重命名笔记，使当前笔记成为对应文件夹的文件夹笔记
- Open folder note of current folder of active note：打开当前笔记所在文件夹的文件夹笔记。

## 文件夹概述

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

## 未来计划

- 添加更多的模板选项以生成初始内容。
- 根据文件夹中的内容自动生成文件夹笔记文件的概览内容，类似于软件 [Trilium](https://github.com/zadam/trilium) 的功能。（部分完成）
- 更强大的重命名操作。
- 更多样式的概览。

## 已知问题

- 创建时可能会出现文件夹注释文件。再次点击以隐藏。
- 如果您发现任何问题或想改进插件，请在 GitHub 存储库上留言。