---
uid: 20230803231105
title: Obsidian 插件：Obsidian ReadItLater
tags: ['快捷键', '自动化', 'obsidian插件', 'readme']
description: 从你的剪贴板收集有趣的信息到你的保险库中。网站将被转换为MD，推文和Youtube视频嵌入，纯文本只会保存到一个新的通知中。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232453
---

# Obsidian 插件：Obsidian ReadItLater

> [!Note] 插件名片
> - 插件名称：Obsidian ReadItLater
> - 插件作者：Dominik Pieper
> - 插件说明：从你的剪贴板收集有趣的信息到你的保险库中。网站将被转换为 MD，推文和 Youtube 视频嵌入，纯文本只会保存到一个新的通知中。
> - 插件分类：[' 快捷键 ', ' 自动化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/DominikPieper/obsidian-ReadItLater)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-read-it-later)

## 概述

从你的剪贴板收集有趣的信息到你的保险库中。网站将被转换为 MD，推文和 Youtube 视频嵌入，纯文本只会保存到一个新的通知中。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/DominikPieper/obsidian-ReadItLater/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-read-it-later]] 插件的自述翻译

# Obsidian 的 ReadItLater 插件

## 目录

- [介绍](#introduction)
- [内容类型](#content-types)
    - [Youtube](#youtube)
    - [Vimeo](#vimeo)
    - [Bilibili](#bilibili)
    - [Twitter](#twitter)
    - [Stack Exchange](#stack-exchange)
    - [Mastodon](#mastodon)
    - [网站链接](#website-url)
    - [文本片段](#text-snippet)

## 简介

ReadItLater 是 Obsidian 的一个简单插件，用于将剪贴板中的有趣信息收集到您的存储库中。

要将某些内容添加到您的存储库中，只需点击“ReadItLater: Save clipboard”功能区或运行“ReadItLater: Save clipboard”命令。新的笔记将被添加到插件设置中配置的文件夹（默认为“ReadItLater Inbox”）。

## 内容类型

笔记内容的结构由 URL 确定。目前插件支持保存网站内容和嵌入来自多个服务的内容。每种内容类型都有标题和笔记模板，其中包含可替换的变量，可以在插件设置中进行编辑。

可用的内容类型按照 URL 检测优先级排序。

### Youtube

将转换为带有嵌入式播放器的注释 `<iframe>`。

| 标题模板变量 | 来源 |
| ----------------------- | ------------------------------------------- |
| %title%                 | 从插件设置中获取的当前日期格式 |
| %date%                  | 从插件设置中获取的当前日期格式 |

| 内容模板变量 | 来源 |
| ------------------------- | ------------------------------------------- |
| %videoTitle%              | 从插件生成的嵌入式播放器 |
| %date%                    | 从插件设置中获取的当前日期格式 |
| %videoURL%                | 剪贴板中的 URL |
| %videoId%                 | 从插件生成的嵌入式播放器 |
| %videoPlayer%             | 从插件生成的嵌入式播放器 |
| %channelId%               | 从插件生成的嵌入式播放器 |
| %channelName%             | 从插件生成的嵌入式播放器 |
| %channelURL%              | 从插件生成的嵌入式播放器 |

### Vimeo

将转换为带有嵌入式播放器的 `<iframe>` 的注释。

| 标题模板变量 | 来源 |
| ----------------------- | ------------------------------------------- |
| %title%                 | 从插件设置中获取的当前日期格式 |
| %date%                  | 从插件设置中获取的当前日期格式 |

| 内容模板变量 | 来源 |
| ------------------------- | ------------------------------------------- |
| %videoTitle%              | 从插件设置中获取的当前日期格式 |
| %date%                    | 从插件设置中获取的当前日期格式 |
| %videoURL%                | 剪贴板中的 URL |
| %videoId%                 | 从插件生成的嵌入式播放器 |
| %videoPlayer%             | 从插件生成的嵌入式播放器 |
| %channelName%             | 从插件设置中获取的当前日期格式 |
| %channelURL%              | 从插件设置中获取的当前日期格式 |

### Bilibili

将转换为带有嵌入式播放器的注释 `<iframe>`。

| 标题模板变量 | 来源 |
| ----------------------- | ------------------------------------------- |
| %title%                 | `<meta name="og:title">` HTML 元素       |
| %date%                  | 插件设置中的当前日期格式 |

| 内容模板变量 | 来源                              |
| ------------------------- | ------------------------------------------- |
| %videoTitle%              | `<meta name="og:title">` HTML 元素       |
| %date%                    | 插件设置中的当前日期格式 |
| %videoURL%                | 剪贴板中的 URL                            |
| %videoId%                 | 剪贴板中的 URL                            |
| %videoPlayer%             | 插件生成的嵌入式播放器          |

### Twitter

将转换为带有来自 [Twitter发布API](https://publish.twitter.com/) 的数据的 markdown 笔记

| 标题模板变量 | 来源                               |
| ------------ | ---------------------------------- |
| %tweetAuthorName% | Twitter 发布 API                         |
| %date% | 插件设置中的当前日期格式 |

| 内容模板变量 | 来源                               |
| ------------ | ---------------------------------- |
| %tweetAuthorName% | Twitter 发布 API                         |
| %date% | 插件设置中的当前日期格式 |
| %tweetURL% | Twitter 发布 API                         |
| %tweetContent% | Twitter 发布 API                         |

### Stack Exchange

将转换为带有来自 DOM 的解析问题和答案的 markdown。

| 标题模板变量 | 来自哪里 |
| ----------------------- | ------------------------------------------- |
| %title%                 | HTML 元素 |
| %date%                  | 来自插件设置的当前日期格式 |

***注意模板变量***

| 内容模板变量 | 来自哪里 |
| ------------------------- | ------------------------------------------- |
| %date%                    | 来自插件设置的当前日期格式 |
| %questionTitle%           | HTML 元素 |
| %questionURL%             | HTML 元素 |
| %questionContent%         | HTML 元素 |
| %authorName%              | HTML 元素 |
| %authorProfileURL         | HTML 元素 |
| %topAnswer%               | HTML 元素 |
| %answers%                 | HTML 元素 |

***部分答案模板变量***

| 内容模板变量 | 来自哪里 |
| ------------------------- | ------------------------------------------- |
| %date%                    | 来自插件设置的当前日期格式 |
| %answerContent%           | HTML 元素 |
| %authorName%              | HTML 元素 |
| %authorProfileURL         | HTML 元素 |

### Mastodon

将被转换为从 [API](https://docs.joinmastodon.org/methods/statuses/#get) 检索到的 markdown 笔记

| 标题模板变量 | 检索自 |
| ----------------------- | ------------------------------------------- |
| %tootAuthorName%        | Mastodon API                                |
| %date%                  | 插件设置中的当前日期格式 |

| 内容模板变量 | 检索自 |
| ------------------------- | ------------------------------------------- |
| %tootAuthorName%          | Mastodon API                                |
| %date%                    | 插件设置中的当前日期格式 |
| %tootURL%                 | Mastodon API                                |
| %tootContent%             | Mastodon API                                |

您可以启用保存 toot 的回复或整个线程。

| 回复模板变量   | 检索自 |
| ------------------------- | ------------------------------------------- |
| %tootAuthorName%          | Mastodon API                                |
| %tootURL%                 | Mastodon API                                |
| %tootContent%             | Mastodon API                                |

### 网站 URL

将使用 [Mozilla Readability](https://github.com/mozilla/readability) 解析为可读形式，然后转换为 markdown 格式。如果网站内容被 [Readability](https://github.com/mozilla/readability) 标记为不可读，则会创建一个带有 URL 的空笔记。

如果启用，图片将被下载到插件设置中配置的文件夹（默认为 `ReadItLater Inbox/assets`）。 （目前仅在桌面上支持）

| 标题模板变量 | 来源 |
| ------------------------| ------------------------------------------- |
| %title%                 | `<title>` HTML 元素                      |
| %date%                  | 插件设置中的当前日期格式 |

| 内容模板变量 | 来源 |
| ------------------------- | ------------------------------------------- |
| %articleTitle%            | `<title>` HTML 元素                      |
| %articleURL%              | 来自剪贴板的 URL                          |
| %articleReadingTime%      | 预计阅读时间                      |
| %articleContent%          | 解析的 `<body>` HTML 元素                |
| %date%                    | 插件设置中的当前日期格式 |

将整个剪贴板内容创建为新的笔记。

| 标题模板变量 | 来源 |
| ------------ | ---- |
| %date%       | 从插件设置中获取的当前日期格式 |

| 内容模板变量 | 来源 |
| ------------ | ---- |
| %content%    | 剪贴板 |
| %date%       | 从插件设置中获取的当前日期格式 |