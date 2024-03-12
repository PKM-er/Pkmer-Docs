---
uid: 20240227160841
title: Obsidian 插件：【Readme】YouTube Template
tags: ['obsidian插件', 'readme']
description: 一个插件，可以帮助您将YouTube视频数据提取到您的保险库中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】YouTube Template

> [!Note] 插件名片
> - 插件名称：YouTube Template
> - 插件作者：sundevista
> - 插件说明：一个插件，可以帮助您将 YouTube 视频数据提取到您的保险库中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sundevista/youtube-template)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?youtube-template)

## 概述

一个插件，可以帮助您将 YouTube 视频数据提取到您的保险库中。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sundevista/youtube-template/master/README.md)

---

## Readme(翻译）

下面是 [[youtube-template]] 插件的自述翻译

【机翻】

# YouTube 模板

![封面图片](https://cdn.pkmer.cn/covers/youtube-template_1_0.png!pkmer)

## 演示

![演示 GIF](https://cdn.pkmer.cn/covers/youtube-template_1_1.gif!pkmer)

## 描述

一个插件，可以帮助您使用可配置的模板在 YouTube 视频上做笔记。它有一个单一命令，接受 YouTube 视频的 URL 并从中创建一个笔记。您可以选择模板文件夹、模板以及章节和标签的格式。

## 接收 API 密钥

要使此插件正常工作，您需要粘贴您的 Google Cloud API 密钥，以便能够访问 YouTube 数据 API。为此，您需要创建一个项目，然后访问 [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials) 并添加一个新的 API 密钥。之后，转到 [https://console.cloud.google.com/apis/dashboard](https://console.cloud.google.com/apis/dashboard)，点击“启用 API 和服务”按钮，并搜索“YouTube 数据 API v3”。为您的 API 密钥启用此服务（默认情况下应该是关闭的）。最后，您需要将此 API 密钥粘贴到插件设置中（“Google Cloud API 密钥”字段）。

## 可接受的 YouTube 视频 URL

该插件使用特殊的正则表达式来从给定的 URL 中检测 YouTube ID。这些 URL 肯定会被检测到：

- <http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index>
- <http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o>
- <<http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp>;hl=en_US&amp;rel=0>
- <http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s>
- <http://www.youtube.com/embed/0zM3nApSvMg?rel=0>
- <http://www.youtube.com/watch?v=0zM3nApSvMg>
- <http://youtu.be/0zM3nApSvMg>
- <https://youtube.com/shorts/0dPkkQeRwTI?feature=share>
- <https://youtube.com/shorts/0dPkkQeRwTI>

## 贡献和问题

如果您想要添加新功能或修复错误，欢迎您创建一个拉取请求（PR），我会进行审查。

如果您发现任何错误，请随时创建一个问题。提供 URL 和问题描述，以便我能够重现并修复它。
