---
uid: 2023080322241764
title: Obsidian 插件：【Readme】Oura Plugin for Obsidian
tags: ['obsidian插件', 'readme']
description: taking app一个用于将OURA环数据导入笔记应用程序的插件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Oura Plugin for Obsidian

> [!Note] 插件名片
> - 插件名称：Oura Plugin for Obsidian
> - 插件作者：Andrew Lombardi
> - 插件说明：taking app 一个用于将 OURA 环数据导入笔记应用程序的插件
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kinabalu/obsidian-oura-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-oura-plugin)

## 概述

taking app 一个用于将 OURA 环数据导入笔记应用程序的插件

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kinabalu/obsidian-oura-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-oura-plugin]] 插件的自述翻译

Oura Ring 插件适用于 Obsidian

将您的 Oura Ring 统计数据添加到 Obsidian 笔记中的任何日期。Oura Ring 的 API 文档可在 [API文档](https://cloud.ouraring.com/docs) 中找到。

### 特点

- 使用个人访问令牌获取您的 Oura Ring 数据
  - 要创建个人访问令牌，请访问并登录 <https://cloud.ouraring.com/personal-access-tokens，然后将令牌复制到此插件的设置中>
- 将数据插入格式为 YYYY-MM-DD 的页面中
- 或者插入到任何页面中，它将使用当天的日期

### 安装

Oura 插件的 Obsidian 版本正在等待审核。

### 手动安装

有两种方法，第一种更简单：

#### 方法 1

- 启用社区插件并安装 Obsidian42 - BRAT
- 进入设置，在 Beta 插件列表下点击“添加 Beta 插件”，然后输入 kinabalu/obsidian-oura-plugin

#### 方法 2

- 在你的 vault 的 `.obsidian/plugins` 文件夹下创建一个 `obsidian-oura-plugin` 文件夹。将 [最新版本](https://github.com/kinabalu/obsidian-oura-plugin/releases) 中的 `main.js`、`manifest.json` 和 `styles.css` 文件添加到该文件夹中。

### 使用方法

打开命令面板（⌃+P 或⌘+P），然后输入“Oura Ring”。执行“Oura Ring: Insert Oura Ring Stats”操作，您的数据将被写入当前光标位置。

如果你喜欢这个插件，并想请我喝杯咖啡，你可以！

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/andrewlombardi)
