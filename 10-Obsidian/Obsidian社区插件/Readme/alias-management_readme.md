---
uid: 20240312193744
title: Obsidian 插件：【Readme】Alias Management
tags: ['obsidian插件', 'readme']
description: Identify duplicate notes based on similar aliases and filenames.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Alias Management

> [!Note] 插件名片
> - 插件名称：Alias Management
> - 插件作者：WithMarcel
> - 插件说明：Identify duplicate notes based on similar aliases and filenames.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/WithMarcel/alias-management)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?alias-management)

## 概述

Identify duplicate notes based on similar aliases and filenames.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/WithMarcel/alias-management/main/README.md)

---

## Readme(翻译）

下面是 [[alias-management]] 插件的自述翻译

# Obsidian 的别名管理

根据相似的别名和文件名识别重复的笔记。

该插件在运行时动态扩展别名和文件名，保持文件的完整性。

# 特点

## 查看重复的别名

轻松识别出现在多个文件中的别名，以列表形式组织。别名可以来自文件名，也可以来自文件内的别名。

<p align="center">
  <img src="img/duplicate-aliases-view.gif" alt="Duplicate Aliases View">
</p>

### 头部概述

头部显示了别名链接的数量以及列表的数量。将鼠标悬停在上面会显示唯一列表的计数。

<p align="center">
  <img src="img/header.png" alt="Header">
</p>

### 颜色编码的来源

别名来源以颜色编码以便清晰显示。

- **红色：** 从文件名派生的别名。
- **浅红色：** 从文件内的别名派生的别名。

将鼠标悬停在别名上会显示其源文件和来源。

<p align="center">
  <img src="img/bullet-points.gif" alt="Bullet Points">
</p>

### 交互链接

点击别名会打开相应的文件，简化导航和编辑。这个功能可以通过单个快捷键快速重命名文件，特别是对于基于文件名的别名。

**阅读模式**

高亮显示的别名可以在必要时通过单击鼠标快速识别和删除。

<p align="center">
  <img src="img/link-click-reading-mode.gif" alt="在阅读模式中点击链接">
</p>

**源模式**

带有前导或尾随逗号的预选别名（如果有的话）可以通过按退格键轻松删除。

<p align="center">
  <img src="img/link-click-source-mode.gif" alt="在源模式中点击链接">
</p>

### 自动更新

查看别名或文件名更改时的实时更新，确保当前数据表示。

<p align="center">
  <img src="img/auto-update.gif" alt="Auto Update">
</p>

### 披露小部件

通过单击三角形来隐藏或显示别名列表，以减少干扰。

<p align="center">
  <img src="img/disclosure-widget.gif" alt="Disclosure Widget">
</p>

### 排序顺序

列表按条目数量排序，以文件名为基础的别名优先。

<p align="center">
  <img src="img/sort-order.png" alt="Sort Order">
</p>

## 查看每个文件的别名

打开一个专用视图，查看为单个文件生成的别名。

<p align="center">
  <img src="img/list-aliases-view.png" alt="List Aliases View">
</p>

# 设置

- **将文件名添加到别名中：** 切换以将文件名包括在别名中。
  - 默认值：True
- **按字母顺序排列多词文件名：** 按字母顺序排列具有多个单词的文件名。例如，`to go` 变为 `go to`。
  - 默认值：True
- **按字母顺序排列多词别名：** 按字母顺序排列具有多个单词的别名。
  - 默认值：True
- **忽略大小写：** 切换以忽略别名和文件名中的大小写差异。例如，`NOTE` 被视为 `note`。
  - 默认值：True
- **排除文件：** 排除位于指定文件夹路径内的文件。路径应以逗号分隔，并相对于根目录。
  - 默认值：`assets`，`images`
- **替换别名：** 定义用于替换别名中特定模式的正则表达式。例如，特殊字符可以被替换为空格。
  - 默认值：
    - `s/[^\\w\\s]|_/ /g`：用空格替换特殊字符
    - `s/ //g`：移除空格
- **排除别名：** 定义用于排除特定别名的正则表达式。这对于过滤常见或无关的别名非常有用。
  - 默认值：`^readme$/i`，`^general$/i`
- **降序排列：** 根据出现次数将重复别名列表以降序排列。
  - 默认值：True
- **并排打开笔记：** 启用以便并排打开笔记，便于在文件之间进行更轻松的比较。
  - 默认值：True

# 特征管道

- [ ] 搜索别名

# 免责声明

请自行承担使用此插件的风险。作者对使用此插件可能导致的任何损害或数据丢失不承担任何责任。
