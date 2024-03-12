---
uid: 20231220112631
title: Obsidian 插件：【Readme】Multiple Notes Outline
tags: ['obsidian插件', 'readme']
description: 添加自定义视图，显示多个带有标题、链接、标签和列表项的笔记的轮廓。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Multiple Notes Outline

> [!Note] 插件名片
> - 插件名称：Multiple Notes Outline
> - 插件作者：iiz
> - 插件说明：添加自定义视图，显示多个带有标题、链接、标签和列表项的笔记的轮廓。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/iiz00/obsidian-multiple-notes-outline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?multiple-notes-outline)

## 概述

添加自定义视图，显示多个带有标题、链接、标签和列表项的笔记的轮廓。

![Multiple Notes Outline](https://cdn.pkmer.cn/covers/multiple-notes-outline.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/iiz00/obsidian-multiple-notes-outline/master/README.md)

---

## Readme(翻译）

下面是 [[multiple-notes-outline]] 插件的自述翻译

# Obsidian 多个笔记大纲

ページの後半に日本語のドキュメントがあります。<br>
日本語のドキュメントはこのページの後半にあります。<br><br>

## 简介

该插件帮助您跟踪多个文件的大纲和关系，提供以下两个视图。

- 文件视图
	- 列出活动文件、其外链文件和其反向链接文件的大纲。也就是说，它以深度 1 列出了本地图（那些文件的反向链接文件，也称为 2 跳链接，也可以显示）。
- 文件夹视图
	- 列出特定文件夹中包含的文件的大纲。

我之前创建了一个名为 Daily Note Outline Plugin（<<https://github.com/iiz00/obsidian-daily-note-outline>）的插件，它列出了多个日记的大纲，而这个插件是该插件针对常规文件的改编。>

## 用法

### 入门指南

使用 Obsidian BRAT 插件安装并启用 MNO。<br>
如下所述的“关于性能”部分中提到的，我建议安装并激活 Dataview 社区插件，以提高检索反向链接文件的速度。<br>
从命令面板中选择“打开文件视图”或“打开文件夹视图”来选择多个笔记大纲。

### 文件视图

列出活动文件的大纲以及与之连接的任何文件。<br>
当另一个文件成为活动文件时，视图会更新，除非默认情况下是通过在 MNO 视图中点击项目引起的。<br>
如果您希望视图在通过在 MNO 视图中点击导航到另一个文件时也更新，请在设置的文件视图部分关闭“通过点击视图项目暂停更新”选项。<br>
![文件视图截图](https://cdn.pkmer.cn/covers/multiple-notes-outline_2_0.png!pkmer)

### 文件夹视图

在启动时，列出活动文件所在文件夹中文件的大纲。只有在点击刷新图标时，此视图才会更新。

### UI 图标

![UI图标](https://cdn.pkmer.cn/covers/multiple-notes-outline_2_1.png!pkmer)<br>
点击刷新图标可以聚焦当前活动文件或者在需要重新绘制视图时使用。

齿轮图标打开设置窗口。右键点击可以打开上下文菜单以快速更改一些设置。<br>
H、链接、列表和反向链接图标用于显示/隐藏相应的大纲元素。<br>
点击最右边的图标（chevrons-down-up）可以折叠所有大纲；再次点击可以取消折叠。

### 始终置顶

在设置屏幕中指定的单独文件或使用标签指定的文件可以始终显示在大纲列表的顶部。<br>
此功能旨在将用作目录或与活动文件/文件夹有强烈关联的文件显示在列表顶部。<br>
要指定单独的文件，请右键单击要在顶部显示的文件名，并从上下文菜单中选择“始终显示在顶部”。<br><br>
关于性能

当一次显示许多大文件的轮廓时，需要大量的处理。通常这不是一个问题，但如果您遇到性能问题，请检查以下内容。

影响性能最大的两个因素是获取反向链接和要绘制的元素数量。

### 检索反向链接文件和 Dataview 插件

通常，检索反向链接文件需要很长时间。<br>
Dataview 插件是最受欢迎的社区插件之一，它缓存了存储库的反向链接信息，并且当激活 Dataview 插件时，MNO 会尝试使用其缓存。<br>
在这种情况下，使用 Dataview 可以显着加快检索反向链接信息的速度。如果可能的话，我建议安装和激活 Dataview 插件。或者，如果隐藏反向链接文件元素，MNO 将停止检索反向链接信息，进一步减轻负载。

### 要绘制的元素数量

要绘制的轮廓元素数量与性能直接相关。如果要显示的文件数量很大，请考虑减少要显示的轮廓元素类型或标题级别的数量。

### 读取限制，处理限制

为了避免过多的处理，如果要显示的文件数量超过设置屏幕中“处理限制”指定的数量，就不会读取概要信息。<br>
即使文件数量没有超过“处理限制”，如果文件数量超过“读取限制”指定的数量，后续文件的处理将会停止。<br>
在这些情况下，概要将被折叠，只显示文件名，因此您可以点击折叠图标来显示文件的概要。<br>

### 预览

MNO 实现了两种类型的预览：内联预览和工具提示预览，每种预览都需要一定的处理时间，尽管不像检索反向链接和绘制那样长。如果您不需要它们，请关闭它们。

杂项。

请从设置屏幕中调整各种设置。

### 文件名的背景颜色

根据您使用的主题，文件名显示的背景颜色可能与主题不匹配。<br>
如果是这种情况，请在设置中更改“笔记标题背景颜色”，如果没有匹配的颜色，请选择“自定义”来指定您喜欢的颜色。<br><br>

## 致谢

在开发每日笔记大纲和多个笔记大纲时，我参考了 Obsidian 社区中许多优秀的插件。特别是，[Spaced Repetition by @st3v3nmw](https://github.com/st3v3nmw/obsidian-spaced-repetition) 和 [Recent Files by @tgrosinger](https://github.com/tgrosinger/recent-files-obsidian) 用于创建自定义视图。<br>
我还在 Discord 的插件开发频道上搜索并参考了许多帖子。<br><br>
如果你喜欢我的插件，我会很感激如果你能给我买杯咖啡！<br> [!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/iiz00)<br><br>

## 更新日志

- 0.1.3
	- 修复了当隐藏反向链接时文件视图无法正常工作的问题。
- 0.1.1
	- 修复
		- 修复了在创建/重命名文件时更新处理的问题
		- 延迟了 Obsidian 启动时绘图的开始时间
- 0.1.0
	- 初始版本发布。

# Obsidian Multiple Notes Outline 日本語ドキュメント

## 概要

本插件支持在以下两个视图中了解多个文件的内容和关系。

- 文件视图
	- 列出活动文件以及其外链文件和反向链接文件的大纲。换句话说，它以大纲形式显示深度为 1 的本地图（还可以显示该文件的反向链接文件，即所谓的 2-hop 链接）。
- 文件夹视图
	- 列出包含在特定文件夹中的文件的大纲。

之前，我创建了一个名为 Daily Note Outline Plugin 的插件，用于列出多个日记笔记的大纲，而这个插件是将其应用于普通文件的版本。

## 使用方法

### 前言

请使用 Obsidian BRAT 插件进行安装和启用。<br>
如下所述的“关于性能”部分建议安装并启用 Dataview 插件，以提高获取反向链接的速度。<br>
请从命令面板中选择“打开文件视图”或“打开文件夹视图”。<br>

### 文件视图

列出了活动文件以及与该文件相关联的文件的大纲视图。<br>
当从文件资源管理器或编辑器内的链接移动到另一个文件时，视图会被更新。但是，默认情况下，如果通过点击 MNO 视图列表中的项目来移动到另一个文件，则不会更新视图。如果您希望在点击列表并移动时也更新视图，请将设置中的“通过点击视图项目暂停更新”选项关闭。<br>
![文件视图截图](https://cdn.pkmer.cn/covers/multiple-notes-outline_2_0.png!pkmer)

### 文件夹视图

在启动时，将显示包含活动文件的文件夹中文件的大纲列表。此视图仅在单击更新图标时才会更新。

![文件视图截图](https://cdn.pkmer.cn/covers/multiple-notes-outline_2_3.png!pkmer)

### UI 图标

![UI图标](https://cdn.pkmer.cn/covers/multiple-notes-outline_2_1.png!pkmer)<br>
点击更新图标可将焦点放在当前活动文件上，或在需要重新绘制时点击。<br>
点击齿轮图标可打开设置界面。右键单击可快速切换一些选项。<br>
点击 H、链接、列表和反向链接图标可切换各自大纲元素的显示/隐藏。<br>
点击最右侧的图标可折叠所有大纲，再次点击可展开。<br>

### Always display at the top

You can always display a file that is individually specified or a file with a specified tag in the settings screen at the top of the list. <br>
This is intended to display files that serve as a table of contents or files with strong relationships at the top. <br>
If you want to specify individually, right-click on the file name you want to display at the top and select "Always display at the top" from the context menu. <br><br>
关于性能

如果要同时显示许多大文件的大纲，将需要进行许多处理。通常情况下，我认为这通常不会成为问题，但如果您感到性能有问题，请尝试检查以下内容。

对性能影响最大的是获取反向链接和绘制元素的数量。

### 获取 backlink 文件

在 MNO 中，除了大纲信息外，还可以显示每个文件的 backlink 文件。但通常情况下，当尝试获取 backlink 文件时，需要从整个 vault 中搜索目标文件，因此 vault 越大，所需时间就越长。

Dataview 插件是最著名的社区插件之一，它会缓存 vault 的 backlink 信息。当启用 Dataview 插件时，MNO 会尝试从该缓存中获取 backlink 信息。在这种情况下，相比平常情况，可以显著更快地获取 backlink 信息。

如果可能的话，建议安装并启用 Dataview 插件。或者，如果将 backlink 文件隐藏起来，MNO 将停止获取 backlink 信息，从而进一步减轻负担。

### 绘制元素的数量

绘制轮廓元素的数量直接影响性能（与绘制相比，收集轮廓元素本身并不重）。如果要显示的文件数量很多或者很大，可以考虑减少要显示的元素类型或减少要显示的标题级别。

### 读取限制，处理限制

为了避免处理过多的情况，如果超过设置界面的处理限制所指定的文件数量，将不会加载大纲信息。<br>
即使不超过处理限制，如果超过读取限制，将停止加载后续内容。<br>
在这种情况下，大纲将以折叠状态仅显示文件名，点击折叠图标将显示该文件的大纲信息。<br>

### 预览

MNO 实现了两种预览方式：内联预览和工具提示预览。虽然它们的处理时间不如 backlink 或绘图，但仍然需要一些时间。如果不需要，可以将其关闭。

其他

请尝试通过设置界面进行各种设置。

### 文件名的背景色

根据使用的主题，文件名显示的背景色可能与主题不匹配。<br>
在这种情况下，请更改设置中的“笔记标题背景色”，如果没有合适的选项，请选择“自定义”并指定任意颜色。<br><br>

## 致谢

在创建本插件的过程中，我参考了许多优秀的 Obsidian 插件。特别是，我非常感谢 st3v3nmw 的 Spaced Repetition 和 tgrosinger 的 Recent files，它们对我创建自定义视图提供了很大的帮助。此外，我还参考了 discord 的 plugin-dev 频道中的许多帖子。

## 请我喝杯咖啡

如果你喜欢这个插件，我会很高兴如果你能请我喝杯咖啡！<br>
[!["请我喝杯咖啡"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/iiz00)
