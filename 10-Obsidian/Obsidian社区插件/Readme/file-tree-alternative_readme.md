---
uid: 2023080322182079
title: Obsidian 插件：File Tree Alternative Plugin
tags: ['界面相关', '文件管理', 'obsidian插件', 'readme']
description: 为 Obsidian 添加一个全新的文件列表。文件夹和文件的内容会在不同面板内展示
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：File Tree Alternative Plugin

> [!Note] 插件名片
> - 插件名称：File Tree Alternative Plugin
> - 插件作者：Ozan Tellioglu
> - 插件说明：为 Obsidian 添加一个全新的文件列表。文件夹和文件的内容会在不同面板内展示
> - 插件分类：[' 界面相关 ', ' 文件管理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ozntel/file-tree-alternative)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-tree-alternative)

## 概述

为 Obsidian 添加一个全新的文件列表。文件夹和文件的内容会在不同面板内展示

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ozntel/file-tree-alternative/main/README.md)
>

---

## Readme(翻译）

下面是 [[file-tree-alternative]] 插件的自述翻译

# Obsidian 文件树替代插件

![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/ozntel/file-tree-alternative?style=for-the-badge)

![GitHub所有发布](https://img.shields.io/github/downloads/ozntel/file-tree-alternative/total?style=for-the-badge)

Obsidian 的默认文件浏览器将所有文件和文件夹显示在一个视图中。文件树替代插件帮助您为文件夹和文件分别创建视图。

该插件定期更新。您可以使用以下链接查看每个版本的详细信息 [发布更新](https://github.com/ozntel/file-tree-alternative/blob/main/Releases.md)

## 插件特点

### 一般

- 您可以使用 `Evernote` 视图，同时显示文件夹和文件列表。或者简单地关闭它以获得单独的视图。该插件支持水平或垂直拆分视图。请确保相应地调整插件设置。
- 如果您错误地关闭了 `文件树叶`，您可以使用 `Ribbon图标` 来激活它。您可以从插件设置中关闭 `ribbon图标`。只有在意外关闭插件视图或有意关闭以重新构建时，它才会起作用。

### 文件夹窗格功能

- 在“文件夹”视图中，您可以看到每个文件夹下的“笔记数量”。您可以选择是否要查看笔记数量或“所有文件数量”。您还可以完全关闭此功能，以从显示中删除计数。

    <img src="https://raw.githubusercontent.com/ozntel/file-tree-alternative/main/images/number-of-notes.png" width="180"></img>

- 您还可以“聚焦”到特定文件夹，以帮助您节省文件夹窗格中的空间：

    <img src="https://raw.githubusercontent.com/ozntel/file-tree-alternative/main/images/focus-in-folder.png" width="180"></img>

    <img src="https://raw.githubusercontent.com/ozntel/file-tree-alternative/main/images/focus-out-from-folder.png" width="180"></img>

- 插件会记住“上次展开的文件夹”和“上次聚焦的文件夹”状态，在重新启动保险库时加载。
- 您可以在插件设置中定义特定的“文件夹路径”，以从主文件夹列表中排除。所有子文件夹也将被排除在外。
- 您可以在文件树中打开/关闭“根文件夹”。
- 您可以自定义“文件夹图标”。请从插件设置中查看可用选项：

    <img src="https://raw.githubusercontent.com/ozntel/file-tree-alternative/main/images/folder-icons.png" width="300"></img>

- 您可以使用顶部的导航按钮展开/折叠所有文件夹。

### 文件列表窗格功能

- 插件列出了所有文件，包括“子文件夹中的文件”。如果您只想看到所选文件夹下的文件，可以在插件设置中关闭此选项。您还可以在插件设置中打开“切换按钮”，它将包括一个额外的按钮（看起来像一个眼睛），用于切换“子文件夹中的文件”。您还可以切换查看文件夹下的直接文件还是所有文件。
- 插件允许您将喜欢的文件“固定”在顶部。它们将在下次会话中保存。
- 您可以在插件设置中定义特定的“文件扩展名”，以排除在文件资源管理器中列出的文件。
- 如果您已经打开了“标记”插件，您可以对文件进行“标记”/“取消标记”。
- 您可以将“外部文件”拖放到文件列表中，以将文件添加到当前活动文件夹路径中。
- 您可以从插件设置中打开“搜索”功能，以通过文件名筛选文件。
  - 您可以在搜索框中使用“all:”语法来从所有文件夹中搜索文件，而不仅仅是活动文件夹。
  - 您可以在搜索框中使用“tag:”语法来搜索带有标签的文件。它将显示所有与标签完全或部分匹配的文件。
- 您可以固定按钮和标题在文件列表的顶部。并非所有主题都与此选项兼容。您可能需要添加自定义 CSS 来有效使用此选项：

    <img src="https://raw.githubusercontent.com/ozntel/file-tree-alternative/main/images/fixed-top-files.png" width="180"></img>

- 您可以根据需要对文件进行排序。当前选项包括“文件名”、“文件大小”、“创建时间”和“更新时间”。您可以使用“反向顺序”按钮从两侧进行排序。

# 样式设置

从 2.3.2 版本开始，该插件支持自定义样式设置。要使用它，您需要安装插件。您可以自定义大小、颜色等。

## 示例图片

- 单文件夹视图：

      <img src="https://github.com/ozntel/file-tree-alternative/raw/main/images/folders-view.png" style="width: 400px;" />

- 置顶固定：

      <img src="https://github.com/ozntel/file-tree-alternative/raw/main/images/files-pinned.png" style="width: 400px;" />

## 示例记录

<a href="https://youtu.be/fbz8IZtXuUE" target="_blank">
    <img src="https://github.com/ozntel/file-tree-alternative/raw/main/images/obsidian-plugin.png" style="width: 300px;" />
</a>

您还可以查看由 Antone Heyward 创建的 Youtube 视频，详细解释了该插件的功能：

## 联系方式

如果您有任何问题或建议，请随时通过我的网站联系页面 [ozan.pl/contact/](https://www.ozan.pl/contact/) 或直接发送邮件至 <me@ozan.pl> 联系我。

## 支持

如果你喜欢这个插件，可以通过给我买杯咖啡来支持我的工作和热情：

<a href='https://ko-fi.com/L3L356V6Q' target='_blank'>
    <img height='48' style='border:0px;height:48px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='在ko-fi.com上给我买杯咖啡' />
</a>



