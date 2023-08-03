---
uid: 20230803231105
title: Obsidian 插件：Mochi Cards Exporter
tags: ['转换工具', '第三方工具集成', 'obsidian插件', 'readme']
description: 从Obsidian中将Markdown笔记导出为Mochi卡片
author: AI
type: readme
draft: false
editable: false
modified: 20230803232543
---

# Obsidian 插件：Mochi Cards Exporter

> [!Note] 插件名片
> - 插件名称：Mochi Cards Exporter
> - 插件作者：kalbetre
> - 插件说明：从 Obsidian 中将 Markdown 笔记导出为 Mochi 卡片
> - 插件分类：[' 转换工具 ', ' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kalbetredev/mochi-cards-exporter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mochi-cards-exporter)

## 概述

从 Obsidian 中将 Markdown 笔记导出为 Mochi 卡片

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kalibetre/mochi-cards-exporter/main/README.md)
>

---

## Readme(翻译）

下面是 [[mochi-cards-exporter]] 插件的自述翻译

# Mochi Cards 导出插件

这是一个 [Obsidian](https://obsidian.md/) 插件，可以将 Markdown 笔记导出为 [Mochi](https://mochi.cards) 闪卡。Mochi 是一个基于 Markdown 的出色闪卡应用程序，如果您使用闪卡和间隔重复来学习或记忆任何内容，我强烈推荐它。

## 特点

- 使用 Obsidian 中的标签创建卡片，并将其导出到 Mochi，就是这么简单。
- 支持 Mochi 支持的图像、视频、声音或任何其他附件。

使用方法：

要使用此插件：

- 在笔记中使用默认的 `#card` 标签标记一行。您还可以在插件的设置中自定义此标签。这行将成为您卡片的正面。
- 要标记卡片的结束，使用节分隔符 `---` 或 `***`。
- 在第一行标有卡片标签和节分隔符之间的任何文本将成为您卡片的背面。

**注意**：插件将您的卡片导出为 `.mochi` 文件。该文件只是一个包含您导出的卡片和附件的压缩文件。您可以使用 Mochi 应用程序导入此文件。

## 示例格式

```md

任何由Mochi支持的文本、图像或其他附件类型

## 安装

要安装和使用此插件，请在 Obsidian 中的 Obsidian 社区插件中搜索 *Mochi Card Exporter*。

这是一个开源项目，所以请随意贡献！！！

在GitHub上查看仓库[Mochi-Card-Exporter](https://github.com/kalbetredev/mochi-cards-exporter)。



