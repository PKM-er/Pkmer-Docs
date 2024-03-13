---
uid: 2024022121235987
title: Obsidian 插件：【Readme】RSS Copyist
tags: ['obsidian插件', 'readme']
description: 获取RSS文章作为笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】RSS Copyist

> [!Note] 插件名片
> - 插件名称：RSS Copyist
> - 插件作者：aoout
> - 插件说明：获取 RSS 文章作为笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aoout/obsidian-rss-copyist)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rss-copyist)

## 概述

获取 RSS 文章作为笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aoout/obsidian-rss-copyist/main/README.md)

---

## Readme(翻译）

下面是 [[rss-copyist]] 插件的自述翻译

# 黑曜石 RSS 复制插件

## 用法

创建一个笔记，并使用 `feed` 标签来表示一个**RSS 订阅源**。相应更新的文章将被收集到一个同名文件夹中，该文件夹位于存放订阅源笔记的目录的根目录中。

另外，在同一级别或更高级别的目录中放置一个 `template.md` 文件，为其下所有**RSS 订阅源**提供一个模板。

完成这些最后的准备工作后，您可以运行 `获取所有订阅源的最新文章` 命令来获取最新的订阅文章。

>[!note]
>在桌面端，解析效果比在移动端好。

```
.
└── RSS/
    ├── obsidian
    ├── sppai
    ├── steam/
    │   ├── gameUpdate1
    │   ├── gameUpdate2
    │   ├── gameUpdate1.md
    │   └── gameUpdate2.md
    ├── obsidian.md
    ├── sppai.md
    └── template.md
```

## 我的模板

```
---
feed: "{{item.feed}}"
url: "{{item.link}}"
author: "{{item.author}}"
date: "{{item.pubDate}}"
firstImage: "{{item.firstImage}}"
unread: true
---
{{item.content}}
```

## Feed.md 示例

``````
---
url: https://rsshub.app/sspai/index
newestNum: 10
showunreadonly: true
tags:
- feed
---
```dataview
table dateformat(file.mtime, "yyyy.MM.dd") AS "发布日期",
"![](" + firstImage + ")"
where contains(file.folder, this.file.folder) and file.name != this.file.name
and (!this.showunreadonly or unread)
sort file.mtime DESC 
```
``````