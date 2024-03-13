---
uid: 2023082011354458
title: Obsidian 插件：【Readme】CSS Editor
tags: ['obsidian插件', 'readme']
description: 在Obsidian中编辑CSS代码片段文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】CSS Editor

> [!Note] 插件名片
> - 插件名称：CSS Editor
> - 插件作者：Zachatoo
> - 插件说明：在 Obsidian 中编辑 CSS 代码片段文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Zachatoo/obsidian-css-editor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?css-editor)

## 概述

在 Obsidian 中编辑 CSS 代码片段文件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Zachatoo/obsidian-css-editor/main/README.md)

---

## Readme(翻译）

下面是 [[css-editor]] 插件的自述翻译

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22css-editor%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

# CSS 编辑器

该插件允许您编辑位于 `.obsidian/snippets/` 目录中的 CSS 文件。

## 特点

- 创建、编辑和删除 CSS 代码片段
- 语法高亮和代码补全
- 适用于桌面和移动设备
- 基本的 VIM 支持

## 安装

建议从 Obsidian 社区商店安装。

您也可以使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) Obsidian 插件手动安装。有关该插件的通用安装说明，请参阅该插件的文档。

## 命令

### 编辑 CSS 代码片段

打开一个建议模态框，以选择你的 `.obsidian/snippets/` 目录中的一个 CSS 代码片段。选择后，显示编辑器以编辑该 CSS 文件。

### 创建 CSS 片段

打开一个提示框，用于在 `.obsidian/snippets/` 目录中创建 CSS 片段。创建完成后，显示编辑器以编辑该 CSS 文件。

### 删除 CSS 代码片段

打开一个提示框，用于删除你的 `.obsidian/snippets/` 目录中的 CSS 代码片段。

贡献

### 运行测试

测试在 Obsidian 内部运行，无法在命令行界面中运行。运行 `npm run test` 将输出一个插件，该插件有一个命令用于运行测试。然后，您可以在 Obsidian 中运行该命令，测试结果将输出到 Obsidian 的控制台中。
