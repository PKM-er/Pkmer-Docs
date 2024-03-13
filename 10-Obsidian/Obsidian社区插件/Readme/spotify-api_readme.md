---
uid: 2024031219332503
title: Obsidian 插件：【Readme】Spotify API
tags: ['obsidian插件', 'readme']
description: 暴露Spotify API
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Spotify API

> [!Note] 插件名片
> - 插件名称：Spotify API
> - 插件作者：Darren-project
> - 插件说明：暴露 Spotify API
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Darren-project/obsidian-spotify)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?spotify-api)

## 概述

暴露 Spotify API

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Darren-project/obsidian-spotify/main/README.md)

---

## Readme(翻译）

下面是 [[spotify-api]] 插件的自述翻译

Spotify 插件适用于 Obsidian

该项目使用官方的 Spotify TS Api

Obsidian 的 Spotify 插件允许您将 Spotify 功能集成到您的 Obsidian 笔记中。通过此插件，您可以访问您的 Spotify 帐户，搜索歌曲、专辑和艺术家，并检索有关播放列表、曲目等的信息。立即开始使用 Spotify 插件，通过音乐集成增强您的笔记体验！

安装

要安装 Obsidian 的 Spotify 插件，请按照以下步骤操作：

1. 打开 Obsidian，并导航到设置中的“社区插件”选项卡。
2. 在插件搜索栏中搜索“Spotify api”。
3. 单击 Spotify api 插件旁边的“安装”按钮。
4. 安装完成后，启用插件。

配置

在您可以使用 Spotify 插件之前，您需要使用您的 Spotify API 凭据对其进行配置。以下是配置方法：

1. 转到 Spotify 开发人员仪表板并创建一个新应用程序。
2. 从您的 Spotify 应用程序中复制“客户端 ID”和“客户端密钥”值。
3. 打开 Obsidian 设置，并导航到“Spotify”选项卡。
4. 将“客户端 ID”和“客户端密钥”值粘贴到相应字段中。
5. 接下来按照授权步骤进行操作

认证

要使用 Spotify 进行身份验证，请按照以下步骤操作：

1. 打开 Obsidian 设置，并导航到“Spotify”选项卡。
2. 输入您的客户端和密钥 ID
3. 单击“Spotify 登录”按钮。
4. 按照屏幕上的说明完成认证过程。

用法

认证后，您可以使用 Spotify 插件与 Spotify API 进行交互。以下是您可以做的一些示例：

1. 搜索歌曲、专辑和艺术家。
2. 检索有关播放列表、曲目和专辑的信息。
3. 在 Spotify 设备上控制播放。
4. 根据您的收听历史获得推荐。
5. 访问用户特定数据，如热门曲目和最近播放的曲目。

要在 Obsidian 笔记中使用 Spotify 插件，您可以使用提供的 JavaScript 代码示例。以下是搜索曲目的示例：

```js
// 搜索曲目
const searchResults = await window.spotifysdk.search("track", "Believer");
console.log(searchResults);
```