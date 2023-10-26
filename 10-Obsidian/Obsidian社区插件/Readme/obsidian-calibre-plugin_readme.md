---
uid: 2023080322152831
title: Obsidian 插件：Calibre
tags: ['obsidian插件', 'readme']
description: 这个插件允许您访问Calibre库并直接在Obsidian中阅读书籍。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Calibre

> [!Note] 插件名片
> - 插件名称：Calibre
> - 插件作者：caronchen
> - 插件说明：这个插件允许您访问 Calibre 库并直接在 Obsidian 中阅读书籍。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/caronchen/obsidian-calibre-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-calibre-plugin)

## 概述

这个插件允许您访问 Calibre 库并直接在 Obsidian 中阅读书籍。

![Calibre](https://cdn.pkmer.cn/covers/obsidian-calibre-plugin.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/caronchen/obsidian-calibre-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-calibre-plugin]] 插件的自述翻译

![GitHub标签（最新的SemVer）](https://img.shields.io/github/v/tag/caronchen/obsidian-calibre-plugin) ![GitHub所有发布](https://img.shields.io/github/downloads/caronchen/obsidian-calibre-plugin/total) ![GitHub发布日期](https://img.shields.io/github/release-date/caronchen/obsidian-calibre-plugin) ![GitHub最后提交](https://img.shields.io/github/last-commit/caronchen/obsidian-calibre-plugin)

# Obsidian Calibre 插件

这是一个为 [Obsidian](https://obsidian.md) 设计的 calibre 内容服务器插件。它允许您直接在 Obsidian 中访问 calibre 图书馆并阅读书籍。通过重新排列舒适的工作区布局，您可以在阅读时记笔记，并通过打开更多窗格同时阅读更多书籍。

- [Obsidian Calibre 插件](#obsidian-calibre-plugin)
	- [工作原理](#how-it-works)
	- [如何使用](#how-to-use)
		- [快速开始](#start-quickly)
			- [步骤 1：启动内容服务器](#step-1-start-content-server)
			- [步骤 2：安装 Calibre 插件](#step-2-install-calibre-plugin)
			- [步骤 3：打开 Calibre 容器](#step-3-open-calibre-container)
		- [如何更改内容服务器端口](#how-to-change-content-server-port)
			- [在 Calibre 应用程序中更改](#change-in-calibre-application)
			- [在 Calibre 插件中更改](#change-in-calibre-plugin)
	- [手动安装插件](#manually-installing-the-plugin)
	- [calibre 内容服务器](#the-calibre-content-server)

## 工作原理

当您点击 Calibre 功能区图标时，Calibre 插件将在您的工作区中打开一个 Obsidian 视图。该视图包含一个 iframe 用于连接到内容服务器。您可以在插件设置中更改服务器地址。

如何使用

### 快速开始

#### 步骤 1：启动内容服务器

要启动服务器，请单击“连接/共享”按钮，然后选择“启动内容服务器”。

![image](https://user-images.githubusercontent.com/150803/143490663-afc3b418-a36e-422a-bab7-97b09237b507.png)

#### 步骤 2：安装 Calibre 插件

就这么做。

#### 步骤 3：打开 Calibre 容器

点击丝带图标打开 Calibre 容器。

![image](https://user-images.githubusercontent.com/150803/143490701-b7eedf79-b555-49e7-ad67-1a55da714c46.png)

![image](https://user-images.githubusercontent.com/150803/143516737-05d428df-88fc-40a9-a26b-cd163683d607.png)

如何更改内容服务器端口

#### Calibre 应用程序的变化

![image](https://user-images.githubusercontent.com/150803/143490820-094fd57d-8150-4b82-a678-a81e3f15614e.png)

![image](https://user-images.githubusercontent.com/150803/143490891-58dcb930-c0c6-40ee-9256-ab25164a77ec.png)

#### Calibre 插件的变更

![image](https://user-images.githubusercontent.com/150803/143490977-89e98839-0861-44c5-a002-b855a26f00ae.png)

## 手动安装插件

- 从 [Releases](https://github.com/caronchen/obsidian-calibre-plugin/releases) 中复制 `main.js`、`styles.css` 和 `manifest.json` 到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-calibre-plugin/` 中。

calibre 内容服务器

请参阅<https://manual.calibre-ebook.com/server.html>
