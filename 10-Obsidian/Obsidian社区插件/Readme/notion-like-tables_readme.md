---
uid: 2023080322170880
title: Obsidian 插件：DataLoom
tags: ['表格', '界面相关', '效率', 'obsidian插件', 'readme']
description: 给你类似于 Notion 中的表格编辑体验。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：DataLoom

> [!Note] 插件名片
> - 插件名称：DataLoom
> - 插件作者：Trey Wallis
> - 插件说明：给你类似于 Notion 中的表格编辑体验。
> - 插件分类：[' 表格 ', ' 界面相关 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/trey-wallis/obsidian-dataloom)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notion-like-tables)

## 概述

给你类似于 Notion 中的表格编辑体验。

![DataLoom](https://cdn.pkmer.cn/covers/notion-like-tables.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/trey-wallis/obsidian-dataloom/master/README.md)
>

---

## Readme(翻译）

下面是 [[notion-like-tables]] 插件的自述翻译

![](/docusaurus/static/img/cover.png)

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=下载量&query=%24%5B%22notion-like-tables%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

在 [dataloom.xyz](https://dataloom.xyz) 找到详细的文档。

DataLoom 是一个适用于桌面和移动设备的 [Obsidian.md](https://obsidian.md/) 插件。DataLoom 允许您将来自不同来源的数据编织在一起，形成一个连贯的表格视图。

支持开发

<a href="https://buymeacoffee.com/treywallis" target="_blank" rel="noopener">
<img width="180px" src="https://img.buymeacoffee.com/button-api/?text=请我喝咖啡&amp;emoji=&amp;slug=treywallis&amp;button_colour=6a8695&amp;font_colour=ffffff&amp;font_family=Poppins&amp;outline_colour=000000&amp;coffee_colour=FFDD00" referrerpolicy="no-referrer" alt="?text=请我喝咖啡&amp;emoji=&amp;slug=treywallis&amp;button_colour=6a8695&amp;font_colour=ffffff&amp;font_family=Poppins&amp;outline_colour=000000&amp;coffee_colour=FFDD00"></a>

## 关于

- [截图](#screenshots)
- [安装](#installation)
- [入门指南](#getting-started)
- [问题](#issues)
- [贡献](#contributing)
- [网络使用](#network-usage)
- [许可证](#license)
- [免责声明](#disclaimer)

## 截图

DataLoom 支持浅色和深色模式，并支持大多数 Obsidian 主题。

![](/docusaurus/static/img/light-mode.png)

![](/docusaurus/static/img/dark-mode.png)

选择 11 种不同的单元格类型

<img src="./docusaurus/static/img/type-menu.png" width="200">

类似 Notion 的标签菜单系统

![](/docusaurus/static/img/tag-menu.png)

切换不同列的可见性

<img src="./docusaurus/static/img/toggle-menu.png" width="200">

直接从表格中引用笔记

![](/docusaurus/static/img/file-menu.png)

高级过滤菜单

![](/docusaurus/static/img/filter-menu.png)

## 安装

### 安装插件

1. 在 Obsidian 中，打开 **设置**
2. 进入 **社区插件**
3. 选择 **浏览**
4. 搜索 **DataLoom**，作者为 **Trey Wallis**
5. 选择 **安装**
6. 然后选择 **启用**

### 链接织布机文件

默认情况下，Obsidian 在您键入双括号 `[[` 时打开的模态框中不显示 `.loom` 文件。为了允许显示，您必须启用所有文件扩展名的检测。

1. 在 Obsidian 中，打开**设置**
2. 选择**文件和链接**
3. 切换**检测所有文件扩展名**

![](/docusaurus/static/img/detect-all-extensions.png)

## 入门指南

首先创建一个新的织布。您可以通过在侧边栏上点击表格图标来完成此操作。

<img src="./docusaurus/static/img/new-loom-sidebar.png" width="350">

您还可以右键单击文件夹，然后点击**新建织布**。

<img src="./docusaurus/static/img/new-loom-folder.png" width="450">

## 路线图

有关以下详细信息，请参阅我们的 [项目路线图](https://github.com/users/trey-wallis/projects/2)：

- 目前正在进行的工作
- 接下来将要进行的工作
- 等待发布的工作

问题

请参阅 [问题](https://github.com/trey-wallis/obsidian-dataloom/issues) 以获取功能请求和错误报告。

如果您在使用插件时遇到问题，请在打开新问题之前搜索问题以查找与您的问题相关的任何未解决错误报告。

## 贡献

DataLoom 是一个社区插件。欢迎贡献。

请参阅我们的 [贡献指南](https://github.com/trey-wallis/obsidian-dataloom/blob/master/CONTRIBUTING.md) 了解如何贡献的详细信息。

## 网络使用

根据 Obsidian 开发者政策，Obsidian 插件必须解释使用了哪些网络服务以及原因。

DataLoom 将向 `https://api.github.com/repos/trey-wallis/obsidian-dataloom/releases/latest` 发起一个 `GET` 请求，以获取最新版本的 "What's New" 模态框。除此之外，DataLoom 不会发起任何其他网络请求。DataLoom 不包含客户端遥测功能。

## 许可证

DataLoom 在 [GNU通用公共许可证v3.0](https://github.com/trey-wallis/obsidian-dataloom/blob/master/LICENSE) 下分发。

## 免责声明

该插件扩展了 Obsidian.md 的功能。尽管在开发过程中经过了测试，但软件中仍可能存在错误。我**强烈建议**您频繁备份您的保险库。对于因使用该插件而丢失的任何数据，我不承担任何责任。
