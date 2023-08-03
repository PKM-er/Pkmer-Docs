---
uid: 2023080322142008
title: Obsidian 插件：【Readme】Attachment Name Formatting
tags: ['obsidian插件', 'readme']
description: 格式化附件名（文件名附件类型索引号.xxx）
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Attachment Name Formatting

> [!Note] 插件名片
> - 插件名称：Attachment Name Formatting
> - 插件作者：JYC333
> - 插件说明：格式化附件名（文件名附件类型索引号.xxx）
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/JYC333/obsidian-attachment-name-formatting)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-attachment-name-formatting)

## 概述

格式化附件名（文件名附件类型索引号.xxx）



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/JYC333/obsidian-attachment-name-formatting/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-attachment-name-formatting]] 插件的自述翻译


## Obsidian附件名称格式化

该插件将以以下格式格式化所有附件："笔记名称 附件格式 索引号.xxx"

附件格式可以是图片、音频、视频和PDF。索引号是基于附件格式的递增数字，从1开始。您可以在设置中更改不同类型附件的默认格式和连接符。基本上，有三种格式：

1. 笔记名称 附件格式 索引号.xxx
2. 笔记名称 附件格式 索引号 时间.xxx
3. 附件格式 索引号 时间.xxx

之间的空格可以根据您的选择进行设置，甚至可以不使用空格。

存在一对多的情况，即在许多不同的笔记中使用相同的附件。在该插件中，它提供了三个选项来处理这种情况：

1. 默认：始终使用笔记名称重命名；
2. 复制：为附件创建副本，并使用新的笔记名称进行重命名；
3. 无更改：保持附件首次重命名的状态，并且不占用索引号。

在使用“复制”模式时，重命名时间会比通常的重命名时间长，大约为1-2秒。对于“无更改”模式，如果您想在此插件重命名附件后再次重命名它，您需要在Vault或文件系统中自己重命名。可能会在以后添加一个命令来处理这个问题。

**注意**：附件的基本路径是基于Vault设置中的“文件和链接”->“附件文件夹路径”。

### 特点

#### 核心功能

- 格式化活动文件中的附件，例如“notename image 1.png”。还可以在索引后添加修改时间，例如“notename image 1 20220101000000.png”，默认设置不添加时间。您还可以在附件名称中排除notename，但时间后缀将自动添加。
- 格式化选定文件夹中的附件。
- 为每种附件类型自定义子文件夹格式。
- 可以为每种附件类型自定义附件名称，您可以使用笔记名称中允许的任何字符。
- 连接符（notename、attachmentFormat、indexNumber和time之间的字符）可以自定义，您可以使用笔记名称中允许的任何字符。您还可以单独自定义不同的连接符，甚至不使用连接符。
- 添加新附件->将根据类型和索引重命名附件。
- 更改顺序->将使用新顺序重命名附件。
- 删除附件->将使用新顺序重命名附件。

#### 其他功能

-   将当前文件中的附件导出并保存为zip文件（导出后可删除），目前仅在桌面版可用
-   将保险库中未使用的附件导出并保存为zip文件（导出后可删除），目前仅在桌面版可用

### 支持的附件格式

1. 图像文件：png、webp、jpg、jpeg、gif、bmp、svg
2. 音频文件：mp3、wav、m4a、ogg、3gp、flac
3. 视频文件：mp4、webp、ogv、mov、mkv
4. PDF 文件：pdf

即使 `webm` 文件也可以是音频，但将被视为视频文件类型。

### 已知问题

-   当删除一个已经重命名的附件时，它不会重新命名，并且会占用该笔记的索引号。但是如果后面发生冲突，它将被重命名为tmp_xxx。
-   当存在两个具有相同名称但位于不同路径的附件时，该功能将无法正常工作。请尽量不要更改“文件和链接 -> 新附件的默认位置”设置。

### 路线图

-   在文件中删除附件时，将其重命名为“notename attachmentFormat unuse 1.xxx”。
-   当删除一个没有其他文件使用的附件时，从保险库中删除它。（可以禁用）
-   支持附件具有相同名称但位于不同路径下的情况。

### 许可证

MIT



