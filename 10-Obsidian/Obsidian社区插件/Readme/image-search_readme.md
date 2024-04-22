---
uid: 2024042221313396
title: Obsidian 插件：【Readme】Image Search
tags: ['obsidian插件', 'readme']
description: 搜索并使用Google API插入图片
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Image Search

> [!Note] 插件名片
> - 插件名称：Image Search
> - 插件作者：Mohammad Razeghi
> - 插件说明：搜索并使用 Google API 插入图片
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/razeghi71/obsidian-image-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-search)

## 概述

搜索并使用 Google API 插入图片

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/razeghi71/obsidian-image-search/main/README.md)

---

## Readme(翻译）

下面是 [[image-search]] 插件的自述翻译

# Obsidian 的图片搜索插件

图片搜索插件使 Obsidian 用户能够直接在 Obsidian 内通过 Google 的可编程搜索引擎搜索图片。本文提供了关于如何设置和使用该插件的详细说明。

## 安装

1. **从 Obsidian 的社区插件列表中下载** 图像搜索插件。
2. **通过 Obsidian 的设置** 在“社区插件”下安装插件。
3. **在“已安装插件”选项卡中启用** 插件。

## 先决条件

在使用图像搜索插件之前，您必须从 Google 的可编程搜索引擎中获取 Google API 密钥和搜索引擎 ID。

### 步骤 1：创建搜索引擎 ID

1. **前往** Google 可编程搜索引擎网站：[可编程搜索引擎](http://programmablesearchengine.google.com) 并创建一个新的搜索引擎。
2. 给你的搜索引擎取一个名字。
3. 在 **搜索什么？** 部分，选择 **" 搜索整个网络 "**。
4. 在 " 搜索设置 " 中 **启用 " 图像搜索 "**。如果需要，也可以启用 " 安全搜索 "。
5. **点击 " 创建 "**。创建完成后，您将被重定向到一个页面，显示您的搜索引擎 ID。**复制此 ID 并妥善保管。**

### 步骤 2：获取 Google API 密钥

1. 在搜索引擎配置页面底部的**“程序访问”**部分，点击**“开始”**旁边的“自定义搜索 JSON API。每天最多 10,000 次查询。”
2. 点击**“获取密钥”**按钮，将打开一个模态框。
3. **选择**您在上一步中创建的搜索引擎。然后将提供一个 API 密钥。**复制此密钥并保管好。**

## 配置

1. 在 Obsidian 中导航到 设置 -> 社区插件 -> 图片搜索，**打开插件设置**。
2. 在插件设置中的相应字段中，**输入您的 Google API 密钥和搜索引擎 ID**。

## 用法

1. **在 Obsidian 中打开命令面板**（默认快捷键 `Ctrl/Cmd + P`）。
2. **输入 `Image Search`** 并从列表中选择。
3. **在弹出窗口中输入搜索查询**，然后按 Enter 键。
4. **从显示的结果中选择一张图片** 插入到当前文档中。

## 支持

对于支持，您可以 [给我买杯咖啡](https://www.buymeacoffee.com/marzghi)。

对于功能请求或报告问题，请访问此插件的 [GitHub页面](https://github.com/razeghi71/obsidian-image-search)。

感谢您使用 Obsidian 的 Image Search 插件！
