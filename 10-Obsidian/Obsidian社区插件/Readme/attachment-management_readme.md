---
uid: 20230803203453
title: Obsidian 插件：【Readme】Attachment Management
tags: ['obsidian插件', 'readme']
description: 附件管理插件，用于自定义附件路径和自动重命名等功能。
author: trganda
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Attachment Management

> [!Note] 插件名片
> - 插件名称：Attachment Management
> - 插件作者：trganda
> - 插件说明：附件管理插件，用于自定义附件路径和自动重命名等功能。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/trganda/obsidian-attachment-management)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?attachment-management)

## 概述

附件管理插件，用于自定义附件路径和自动重命名等功能。

![Attachment Management](https://cdn.pkmer.cn/covers/attachment-management.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/trganda/obsidian-attachment-management/main/README.md)
> 

---

## Readme(翻译）

下面是 [[attachment-management]] 插件的自述翻译


# Obsidian附件管理

该插件支持使用变量`${notepath}`, `${notename}`和`${date}`更灵活地设置附件的位置。

## 功能路线图

该插件目前支持以下功能：

- [x] 使用`${notepath}`, `${notename}`, `${date}`和`${parent}`设置附件位置
- [x] 在将文件粘贴到`markdown`或`canvas`时自动重命名附件
- [x] 在重命名文章（`markdown`或`canvas`）文件时自动重命名附件文件或文件夹
- [x] 在将文件拖放到`markdown`或`canvas`时自动重命名附件
- [x] 将由`markdown`或`canvas`链接的附件文件重新排列到您配置的相应路径（实验性功能）
- [x] 处理重复的附件
  - [x] 在创建时处理重复的附件（第一次在笔记中粘贴或拖放附件）
  - [x] 在重命名时处理重复的附件
- [x] 为指定的笔记或文件夹覆盖附件配置
- [x] 通过该插件排除您想要跳过的文件夹
  - [x] 通过菜单添加排除文件夹

## 安装方法

- 从Obsidian社区插件中安装。
- 克隆这个仓库
  - 运行 `npm i` 安装依赖
  - 运行 `npm run build` 以启动编译并进入监听模式。
  - 将 `main.js`、`manifest.json` 和 `style.css` 文件复制到你的笔记库 `VaultFolder.obsidian/plugins/obsidian-attachment-management` 目录下。
- 下载发布文件并解压缩到你的笔记库 `VaultFolder.obsidian/plugins/obsidian-attachment-management` 目录下。

## 设置

附件的路径由三部分组成：

```
{根路径}/{附件路径}/{附件名称}.扩展名
```

您可以使用以下变量进行配置：

- `${notepath}`：笔记本根目录下的 `markdown` 或 `canvas` 文件的**目录**。
- `${notename}`：`markdown` 或 `canvas` 文件的**文件名**（不包括文件扩展名）。
- `${parent}`：`markdown` 或 `canvas` 文件的**父文件夹名称**。
- `${originalname}`：附件文件在 Obsidian 中首次创建时的**文件名**。
- `${date}`：日期时间格式，使用 [Moment 格式选项](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format)。

> **注意** 在使用 `${originalname}` 之前，有一些事情您应该知道。该插件**不会持久保存**原始名称，它只会在创建事件（首次添加到 Obsidian）时使用文件名生成附件名称。这意味着如果您使用了 `${originalname}`，当您重新排列附件时，不会为附件生成新名称，它只会使用当前名称（例如，将 `附件格式` 从 `asset-${originalname}` 更改为 `asset-1-${originalname}`，然后使用重新排列命令，它是无效的）。

### 保存新附件的根路径

您必须选择一个根文件夹来保存与`markdown`或`canvas`文件相关联的附件。

![SCR-20230511-rgge](./images/SCR-20230511-rgge.png)

可以使用Obsidian中的“文件和链接”配置进行设置，或在此选项中重新设置。

- 复制Obsidian设置：使用Obsidian中的“文件和链接”配置。
- 在下面指定的文件夹中：设置一个固定的文件夹。
- 在下面指定的文件夹旁边的注释中：在当前`markdown`或`canvas`文件的子文件夹中。

### 附件路径

在 `{root path}` 下放置附件的子文件夹，可用变量：

- `${notepath}`：`markdown` 或 `canvas` 文件在 vault 根目录下的**目录**。
- `${notename}`：`markdown` 或 `canvas` 文件的**文件名**（不包括文件扩展名）。
- `${parent}`：`markdown` 或 `canvas` 文件的**父文件夹**名称。

默认值为 `${notepath}/${notename}`。

### 附件格式

设置附件的重命名方式，可用变量：

- `${notename}`：`markdown` 或 `canvas` 文件的**文件名**（不包括文件扩展名）。
- `${originalname}`：附件文件在创建时的**文件名**。
- `${date}`：日期时间格式，使用 [Moment 格式选项](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format)。

默认值为 `IMG-{date}`。

### 日期格式

使用[Moment格式选项](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format)来设置`${date}`，默认值为`YYYYMMDDHHmmssSSS`。您应该始终使用`${date}`变量来防止相同的文件名。

### 处理所有附件

默认情况下，仅自动重命名图像文件（参见[接受的文件格式](https://help.obsidian.md/Advanced+topics/Accepted+file+formats)），如果启用此选项，则所有创建的文件（除了`md`或`canvas`）将自动重命名。

#### 排除扩展名模式

此选项仅在启用“处理所有附件”时有用。编写一个正则表达式模式来排除某些扩展名的处理。

![SCR-20230511-roat](./images/SCR-20230511-roat.png)

自动重命名附件文件夹/文件名，当您重命名相应的md/canvas文件所在的文件夹/文件名时。

### 排除路径

如果您希望某些路径被此插件跳过，请将它们添加到文本区域中。
如果您有多个路径，请使用分号 ';' 进行分隔。

默认情况下，“排除路径”仅适用于您添加的文件夹，您可以切换“排除子路径”以排除子路径。

> **路径区分大小写，并且不应在开头添加斜杠 '/'。**

使用方法

安装并启用插件后，配置完成后，您可以像往常一样粘贴或拖放附件文件，它将自动重命名。

该插件支持一个命令“重新排列链接的附件/重新排列所有链接的附件”。如果运行此命令，它将根据您的配置重命名所有链接在“markdown”或“canvas”文件中的附件（默认为图像文件，如果要重命名其他类型，您需要启用[处理所有附件](#handle-all-attachments)）。

![SCR-20230511-rrtk](./images/SCR-20230511-rrtk.png)

**注意**：目前，“重新排列链接的附件/重新排列所有链接的附件”是一个实验性功能，如果您想尝试，请先备份您的文件。

### 覆盖设置

您可以为文件或文件夹设置附件路径设置。这些设置的优先级如下：

```
文件设置 > 最近的父文件夹设置 > 全局设置
```

如果您想将文件或文件夹的设置重置为全局设置，请使用命令`Reset Override Setting`或覆盖设置面板上的`Reset`按钮。顺便说一下，**重置只会对您设置的每个文件或文件夹起作用**。更合适的重置方法将在将来添加。

### 已知问题

- ~~目前不支持处理重复的文件名（正在开发中）。在备份中，您可以使用数据变量[`x`](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/)将Unix时间戳与毫秒作为文件名（这将防止重复的文件名）。~~
- 当在`canvas`中放置一个文件时，它会延迟显示更新后的链接/文件名。

![屏幕录制](./images/canvas_drop_delay.gif)

- 假设您有以下结构的默认配置：
  - 附加目录，"assets/notes/hello/1.png"
  - 文章目录，"notes/Hello.md"
  - 如果您运行`Rearrange ***`命令可能会导致错误，因为该文件夹已经存在，但是名称的大小写不同。

问：如果我将“/”添加到排除路径中会怎么样？

答：它将排除整个保险库文件夹。



