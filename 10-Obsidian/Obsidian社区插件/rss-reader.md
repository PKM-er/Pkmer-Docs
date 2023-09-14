---
uid: 20230822233837
title: Obsidian 插件：RSS Reader 让你的 Obsidian 秒变 RSS 阅读器
tags: [第三方工具集成, 信息收集, 文件管理, obsidian插件]
description: 从RSS订阅源中阅读文章，并将它们纳入您的笔记中。支持将RSS按文件夹分类，文章专注模式，用RSS 源里的文章创建新笔记，将文章粘贴到当前笔记中。创建自定义过滤器，标记文章，支持音频和视频内容。
author: OS
type: basic
draft: false
editable: false
modified: 20230914115959
---

# Obsidian 插件：RSS Reader 让你的 Obsidian 秒变 RSS 阅读器

## 概述

从 RSS 订阅源中阅读文章，并将它们纳入您的笔记中。支持将 RSS 按文件夹分类，文章专注模式，用 RSS 源里的文章创建新笔记，将文章粘贴到当前笔记中。创建自定义过滤器，标记文章，支持音频和视频内容。

> [!Note] 插件名片
> - 插件名称：RSS Reader
> - 插件作者：Johannes Theiner
> - 插件说明：从 RSS 订阅源中阅读文章，并将它们纳入您的笔记中。支持将 RSS 按文件夹分类，文章专注模式，用 RSS 源里的文章创建新笔记，将文章粘贴到当前笔记中。创建自定义过滤器，标记文章，支持音频和视频内容。
> - 插件分类：[' 第三方工具集成 ', ' 信息收集 ', ' 文件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/joethei/obsidian-rss)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rss-reader)

## 效果&特点

![RSS Reader](https://cdn.pkmer.cn/covers/rss-reader.PNG!pkmer)

- 从 Obsidian 内部阅读 RSS 订阅源
- 将订阅源分类到文件夹中
- 收藏 RSS 源中的文章
- 从文章创建新笔记
- 将文章粘贴到当前笔记中
- 创建自定义过滤器
- 给文章打标签
- 支持音频和视频订阅源
- 使用文本转语音功能阅读文章（如果已安装 [TTS插件](https://github.com/joethei/obsidian-tts)）
- 多语言支持（有关翻译说明，请参见 [#43](https://github.com/joethei/obsidian-rss/issues/43)）
- 更多功能请参见 [路线图](https://github.com/joethei/obsidian-rss/projects/1)

![演示GIF](https://i.joethei.space/QQATWu36eC.gif)

## 使用

安装插件后：

- 进入插件配置页面，在“内容”部分添加一个订阅源。
- 在 Obsidian 中，展开右侧面板，点击 RSS 选项卡。

### 查找网站的 RSS 订阅源

- 在网站上搜索 RSS 标志或链接
- 使用浏览器插件（[Firefox](https://addons.mozilla.org/en-US/firefox/addon/awesome-rss/)，[基于Chrome的](https://chrome.google.com/webstore/detail/get-rss-feed-url/kfghpdldaipanmkhfpdcjglncmilendn)）
- 在网站的源代码中搜索 `rss`

### 提示

- 使用 [morss.it](https://morss.it/) 获取一些被截断的 RSS 源的完整文本内容。
- 使用 [RSS Box](https://rssbox.herokuapp.com/) 从一些社交媒体网站获取 RSS 源。
- 使用 [SiftRSS](https://siftrss.com/) 过滤来自 RSS 源的内容。
- 使用 [RSS-proxy](https://github.com/damoeb/rss-proxy/) 或 [RSS Hub](https://github.com/DIYgod/RSSHub) 为不支持 RSS 的网站获取 RSS 源。

### 模板变量

- `{{title}}` 文章标题
- `{{link}}` 文章链接
- `{{author}}` 文章作者
- `{{published}}` 发布日期，你也可以指定自定义的日期格式，例如：`{{published:YYYYMMDD}}`
- `{{created}}` 笔记创建日期，你也可以指定自定义的日期格式，例如：`{{created:YYYYMMDD}}`
- `{{content}}` 实际内容
- `{{description}}` 简短描述
- `{{folder}}` 所在文件夹
- `{{feed}}` 订阅源名称
- `{{filename}}` 文件名，仅在新文件模板中可用
- `{{tags}}` 标签，用逗号分隔，你也可以指定分隔符，例如：`{{tags:;}}`
- `{{#tags}}` 带有 # 的标签，用逗号分隔，你也可以指定分隔符，例如：`{{#tags:;}}`
- `{{media}}` 媒体链接
- `{{highlights}}` 高亮列表，你也可以指定自定义样式，下面的示例为每个高亮创建了一个 [admonition](https://github.com/valentine195/obsidian-admonition)：
    ![](https://i.joethei.space/obsidian-rss-highlight-syntax.png)

### 安全性

- 此插件会链接并托管您指定的 RSS 源的服务器。
- RSS 源可能包含任意数据，这些数据在显示之前会进行清理。
- 许多 Obsidian 插件使用代码块来添加一些功能。此插件在读取/创建笔记时会对这些代码块进行清理。这是为了阻止 RSS 源执行任意插件代码。
- 一些插件允许使用不同类型的内联语法，这些语法会被单独处理（目前只有 _Dataview_ 和 _Templater_）。

## 样式化

如果您想以不同的样式化方式使用插件，可以使用以下 CSS 类：

- rss-read
- rss-not-read
- rss-filters
- rss-folders
- rss-folder
- rss-feed
- rss-feed-title
- rss-feed-items
- rss-feed-item
- rss-tag
- rss-tooltip
- rss-modal
- rss-title
- rss-subtitle
- rss-content

如果需要帮助进行样式化，您还可以查看 [Obsidian Members Group Discord](https://obsidian.md/community) 上的 `#appearance` 频道。
