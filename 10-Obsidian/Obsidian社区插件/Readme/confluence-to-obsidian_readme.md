---
uid: 20231220115812
title: Obsidian 插件：【Readme】Confluence to Obsidian
tags: ['obsidian插件', 'readme']
description: 将Confluence空间导入Obsidian vault。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Confluence to Obsidian

> [!Note] 插件名片
> - 插件名称：Confluence to Obsidian
> - 插件作者：K
> - 插件说明：将 Confluence 空间导入 Obsidian vault。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/KkEi34/confluence-to-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?confluence-to-obsidian)

## 概述

将 Confluence 空间导入 Obsidian vault。

![Confluence to Obsidian](https://cdn.pkmer.cn/covers/confluence-to-obsidian.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/KkEi34/confluence-to-obsidian-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[confluence-to-obsidian]] 插件的自述翻译

# Confluence 转 Obsidian

该插件将以 HTML 格式导出的 [Confluence](https://www.atlassian.com/software/confluence) 空间导入到 [Obsidian](https://obsidian.md) vault 中。

> **注意**
> - 该插件目前仍在开发中，因此使用时请自行承担风险
> - 仅适用于桌面版，且仅在 Windows 上进行了测试
> - 在插件内部使用了 [confluence-to-markdown](https://github.com/KkEi34/confluence-to-markdown)。

# 要求

您必须安装 [pandoc](http://pandoc.org/installing.html) 命令行工具。

# 如何使用

1. 将 Confluence 空间导出为 HTML
   - **Confluence Server**
     - 打开空间
     - 选择**Space Tools** | **Content Tools** | **Export**
     - 选择**HTML**作为导出格式，然后点击**Next>>**
     - 在**Export HTML Options**中选择**Normal**或**Custom**导出，然后点击**Export**
     - 下载 `zip` 文件
   - **Confluence Cloud**
     - 打开空间
     - 选择**Space Settings**，在**Manage space**组中选择 "Export space"
     - 选择**HTML**作为导出格式，然后点击**Next>>**
     - 在**Export HTML Options**中选择 Normal 或 Custom 导出，然后点击**Export**
     - 下载 `zip` 文件
 2. 将空间导入 Obsidian
    - 解压缩 zip 文件
    - 在 Obsidian 命令面板中选择**Confluence to Obsidian: Import Confluence space**命令
    - 在**Import Confluence space**对话框的**Space directory**中提供从 `zip` 文件中提取的 Confluence 空间文件夹的路径，然后点击**Import**

![import-space](https://cdn.pkmer.cn/covers/confluence-to-obsidian_2_0.gif)
