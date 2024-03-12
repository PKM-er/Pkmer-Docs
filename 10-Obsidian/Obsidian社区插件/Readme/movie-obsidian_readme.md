---
uid: 20231220115812
title: Obsidian 插件：【Readme】Movie
tags: ['obsidian插件', 'readme']
description: 搜索电影信息和预告片。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Movie

> [!Note] 插件名片
> - 插件名称：Movie
> - 插件作者：Onur Ayçiçek
> - 插件说明：搜索电影信息和预告片。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/onuraycicek/obsidian-movie)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?movie-obsidian)

## 概述

搜索电影信息和预告片。

![Movie](https://cdn.pkmer.cn/covers/movie-obsidian_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/onuraycicek/obsidian-movie/master/README.md)

---

## Readme(翻译）

下面是 [[movie-obsidian]] 插件的自述翻译

# 在 Obsidian 中爬取电影数据

这个插件是一个简单的插件，可以让你从 [omdb](https://www.omdbapi.com/) 和 Youtube 预告片中爬取电影数据。

![Screencast-from-2023-05-30-16-36-23](https://cdn.pkmer.cn/covers/movie-obsidian_1_0.gif)

## 使用方法

1. 您需要从 [omdb](https://www.omdbapi.com/apikey.aspx) 获取一个 API 密钥，并在插件设置中设置它。
2. （可选）您需要从 [Youtube](https://console.cloud.google.com/apis/credentials) 获取一个 API 密钥，并在插件设置中设置它。这是获取预告片所必需的。如果您不设置它，您将无法获取预告片。如果您无法从 Youtube 获取 API 密钥，您可以访问 [这里](https://developers.google.com/youtube/v3/getting-started) 获取更多信息。
3. 您的存储库中必须有一个名为 `movies` 的文件夹。您可以在插件设置中更改此文件夹名称（主路径）。
4. 您的存储库中必须有一个名为 `assets` 的文件夹。您可以在插件设置中更改此文件夹名称（图像路径）。
5. 就是这样！您可以使用命令面板搜索电影。您还可以使用快捷键 `Ctrl+Alt+M`，或者单击功能区中的电影图标。



