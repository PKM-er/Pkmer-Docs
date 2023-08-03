---
uid: 20230803231105
title: Obsidian 插件：Search Obsidian in Google
tags: ['obsidian插件', 'readme']
description: 一个简单的插件，用于在Google（或其他搜索引擎）中搜索当前的笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232426
---

# Obsidian 插件：Search Obsidian in Google

> [!Note] 插件名片
> - 插件名称：Search Obsidian in Google
> - 插件作者：YuNing Chen
> - 插件说明：一个简单的插件，用于在 Google（或其他搜索引擎）中搜索当前的笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/qazxcdswe123/search-obsidian-in-google)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?search-obsidian-in-google)

## 概述

一个简单的插件，用于在 Google（或其他搜索引擎）中搜索当前的笔记。

![Search Obsidian in Google](https://cdn.pkmer.cn/covers/search-obsidian-in-google.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/qazxcdswe123/search-obsidian-in-google/main/README.md)
>

---

## Readme(翻译）

下面是 [[search-obsidian-in-google]] 插件的自述翻译

# 在 Google 中搜索 Obsidian

这是什么？

一个简单的插件，允许你在 Google 中搜索 Obsidian。

- 特点：
  - 在搜索结果中包含摘录
  - 模糊匹配
  - 评分结果
  - 在 Obsidian 中快速打开

如何使用？

### 快速入门

1. 在 Chrome/Firefox 中安装 [Chrome](https://chrome.google.com/webstore/detail/search-obsidian-in-google/dkefnggaipjamcbnjdlapgilhlaikbme) / Firefox（正在审核中）扩展程序。([源代码](https://github.com/qazxcdswe123/search-obsidian-browser-extension))
2. 在 Obsidian 中安装 [Obsidian Omnisearch](https://github.com/scambier/obsidian-omnisearch) 插件，并根据需要配置插件。
3. 在 Obsidian 中安装 [Search Obsidian in Google](https://github.com/qazxcdswe123/search-obsidian-in-google) 插件。现在可以直接从 Obsidian 插件商店安装。
4. 在 Obsidian 中配置插件。
5. 在 Chrome 扩展程序中设置端口号、身份验证令牌和保险库名称。

- 提示：您可以**点击搜索结果**在 Obsidian 中打开文件！这需要您在 Chrome 扩展程序中设置保险库名称。建议在弹出窗口中勾选“始终允许<www.google.com 打开此类型的链接>”。
- 请注意，不需要安装“Local Rest API”插件。

### 配置

- Obsidian 插件
  - 端口：Obsidian 和 Chrome 扩展之间的本地 REST API 的端口号。默认为 `27080`。
- Chrome 扩展
  - 本地端口：应与 Obsidian 插件中的端口号匹配。
  - 令牌：Obsidian 和 Chrome 扩展之间的身份验证令牌。您可以在 Obsidian 插件的设置页面中找到它。
  - Vault 名称（可选）：当您想要点击搜索结果以在 Obsidian 中打开文件时使用。您可以通过点击 Obsidian 左下角的 vault 图标找到名称。

### 手动安装

1. 从 [这里](https://github.com/qazxcdswe123/search-obsidian-in-google/releases/tag/1.0.0) 下载最新版本。
2. 在 Obsidian 中打开插件文件夹，创建一个名为 `search-obsidian-in-google` 的文件夹，并将 `main.js`、`manifest.json` 和 `index.css` 放入其中。
3. 在 Chrome 中安装 [Chrome扩展程序](https://chrome.google.com/webstore/detail/search-obsidian-in-google/dkefnggaipjamcbnjdlapgilhlaikbme)，并正确配置。
4. 在 Obsidian 中安装 [OmniSearch](https://github.com/scambier/obsidian-omnisearch) 插件，并根据需要进行配置。

## 演示

![演示1](assets/img/demo1.jpg)

![演示2](assets/img/demo2.jpg)

![演示3](https://github.com/qazxcdswe123/search-obsidian-in-google/assets/29861494/97011979-7840-455c-8c92-0272d46ffe96)

## 已知问题

- 目前只确认 Chrome 可以正常工作。Firefox 正在审核中（需要帮助）。不支持 Brave（[问题](https://github.com/qazxcdswe123/search-obsidian-in-google/issues/2)，[Brave 问题](https://github.com/brave/brave-browser/issues/27346)）。
- 有些人在获取摘录时遇到了问题（[问题](https://github.com/qazxcdswe123/search-obsidian-in-google/issues/1)）。

## 故障排除

- 检查 Obsidian 中是否安装并正确配置了 `omnisearch` 和 `search obsidian in google`。
- 检查 Chrome 扩展中是否设置了端口号和令牌。
- 检查 Obsidian 中的 `omnisearch` 插件是否产生了正确的结果。

## 鸣谢

- [Omnisearch](https://github.com/scambier/obsidian-omnisearch)
- [Obsidian-local-rest-api](https://github.com/coddingtonbear/obsidian-local-rest-api/)
- [Chatgpt-google-extension](https://github.com/wong2/chatgpt-google-extension)



