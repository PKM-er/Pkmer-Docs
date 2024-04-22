---
uid: 2024042221315359
title: Obsidian 插件：【Readme】IMDb
tags: ['obsidian插件', 'readme']
description: 同步您的IMDb列表。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】IMDb

> [!Note] 插件名片
> - 插件名称：IMDb
> - 插件作者：Andrew Chen
> - 插件说明：同步您的 IMDb 列表。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aaachen/IMDb-Obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?imdb-sync)

## 概述

同步您的 IMDb 列表。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aaachen/IMDb-Obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[imdb-sync]] 插件的自述翻译

【机翻】

# IMDb

将您的 IMDb 数据带入 Obsidian。

![](https://cdn.pkmer.cn/covers/imdb-sync_1_0.png!pkmer)

## 设置说明

### 准备 IMDb 列表进行同步

此插件依赖于列表是公开的，以便可以下载和解析数据。

在撰写本文时，可以在给定列表页面的“编辑”>“设置”下进行配置

![](https://cdn.pkmer.cn/covers/imdb-sync_1_1.png!pkmer)

然后，复制列表网址。此网址的格式为 `https://www.imdb.com/list/ls502212336`

- 对于 `Watchlist`，将鼠标悬停在页面底部的 `导出此列表` 按钮上，右键单击并选择 `复制链接`。请参见 [论坛](https://community-imdb.sprinklr.com/conversations/imdbcom/how-to-export-watchlist/61be41d2add924150d1748de)
- 对于 `我的评分`，单击菜单，将鼠标悬停在 `导出` 上，右键单击并选择 `复制链接`
- 对于其他列表，请在浏览器中检查网址

### （可选）创建一个 OMDb 密钥

在创建笔记时，可以查询 OMDb 以获取额外信息，如海报、编剧、剧情描述。

您可以在 [https://www.omdbapi.com/](https://www.omdbapi.com/) 创建一个 API 密钥。

如果您认为 IMDb 的 CSV 导出中的信息已经足够，那么这一步是可选的。然而，我强烈建议这样做，因为我发现 OMDb 上的信息更加完整和用户友好。

### 创建模板

这个插件要求您指定一个模板，这样您就可以在构建笔记时获得最大的灵活性。您可以使用 Obsidian 提供的模板插件，也可以使用 [Templater](https://github.com/SilentVoid13/Templater) 来获得更高级的选项。下面分别提供了两种示例

IMDb obsidian 使用 [mustache模板语言](https://mustache.github.io/) 来定义导入数据保存到 Obsidian 的方式。您可以在 [这里](https://docs.omnivore.app/integrations/obsidian.html#mustache-template-language) 找到一些有用的使用文档。

- [基本模板](https://raw.githubusercontent.com/aaachen/IMDb-Obsidian/main/readme/IMDB%20Plugin%20-%20Basic%20Template.md)
- [高级模板](https://raw.githubusercontent.com/aaachen/IMDb-Obsidian/main/readme/IMDB%20Plugin%20-%20Advance%20Template.md) 使用 [Templater](https://github.com/SilentVoid13/Templater)
- id: IMDb 的 id，例如：`tt0468569`
- description: 电影/节目/游戏的描述（即剧情）
- title: 节目标题
- imdbUrl: IMDb 上的链接
- type: 项目类型，如在 IMDb csv 中提供的（即电影，视频游戏，电视系列，电视迷你系列）
- imdbRating: IMDb 评分
- runtimeMin: 播放时间（分钟）
- year: 节目发布年份
- releaseDate: 节目发布日期
- genres: 类型
- votes: IMDb 上的投票数
- directors: 导演
- writers: 编剧
- cast: 演员阵容
- yourRating: 你在 IMDb 上的评分
- poster: 海报链接

### 运行插件

您可以通过执行“IMDb Sync”命令或按下菜单栏中的星形图标来运行 IMDb 同步。

### 覆盖注释

默认情况下，一旦插件从您的列表同步了一个项目并创建了一个注释，即使与该项目相关的数据在您的源中发生变化，该注释也永远不会被更新或更改。例如，如果您同步一个项目，然后给它评分并再次同步，该评分不会被同步到注释中。

要让 IMDb Obsidian 覆盖旧注释，请切换 `overwrite` 插件设置。这将导致 IMDb Obsidian 始终用新的注释替换项目的现有注释。不过要小心 - 如果您对注释文件进行了自己的更新，它们将在下次同步时丢失。

在最后，完全取决于你如何为你的电影/节目/游戏设置笔记样式。我使用 dataview 来设置我的如下：

![](https://cdn.pkmer.cn/covers/imdb-sync_1_2.png!pkmer)

Dataview 脚本：

```dataview
table without id
	("![](" + poster + ")") as Poster, 
	file.link as Title, 
	year as Year, 
	director as Director, 
	"⭐ " + scoreImdb as "⭐ IMDB", 
	rating, 
	genre from "Entertainment"
where type = [[Series]] and contains(genre, [[Animation]])
```

请查看这两个令人惊叹的工作

[here](https://github.com/blacksmithgu/obsidian-dataview) 和

[here](https://github.com/kepano/obsidian-minimal).

## 鸣谢

- 该插件是 [Booksidian](https://github.com/MichaBrugger/booksidian_plugin) 插件的一个分支，我对其进行了修改以适用于 IMDb 的用例。感谢 [Micha](https://github.com/MichaBrugger) 和 [Zachary](https://github.com/zacharyw) 作为插件的原始作者。
- [Quickadd 的 movie.js](https://github.com/chhoumann/quickadd/blob/master/docs/docs/Examples/Attachments/movies.js) 用于查询 OMDb。



