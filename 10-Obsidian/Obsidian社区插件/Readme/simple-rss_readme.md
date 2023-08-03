---
uid: 20230803231105
title: Obsidian 插件：Simple RSS
tags: ['obsidian插件', 'readme']
description: 将RSS文章收集到笔记中。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232424
---

# Obsidian 插件：Simple RSS

> [!Note] 插件名片
> - 插件名称：Simple RSS
> - 插件作者：Monnierant
> - 插件说明：将 RSS 文章收集到笔记中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/monnierant/obsidian-simple-rss)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?simple-rss)

## 概述

将 RSS 文章收集到笔记中。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/monnierant/obsidian-simple-rss/master/README.md)
>

---

## Readme(翻译）

下面是 [[simple-rss]] 插件的自述翻译

# Obsidian 简单 RSS 插件

这是一个为 [Obsidian](https://obsidian.md/) 设计的插件，可以将 RSS 订阅源拉取到你的知识库中。

我该如何使用它？

1. 安装插件
2. 进入插件设置并添加您想要拉取的 RSS 订阅源
3. 使用菜单栏中的“Simple-RSS”按钮来拉取订阅源

如何添加一个订阅源？

1. 进入插件设置
2. 点击“添加订阅源”按钮
3. 为订阅源添加一个名称
4. 输入要添加的订阅源的 URL
5. 您可以指定一个文件夹来存放新的笔记。如果不指定，插件将使用默认文件夹。
6. 您可以为订阅源指定一个标题。如果不指定，插件将默认使用 item.title。（您可以使用 [Handlebars](https://handlebarsjs.com/) 来格式化标题）
7. 您可以为订阅源指定一个模板。如果不指定，插件将使用默认模板。（您可以使用 [Handlebars](https://handlebarsjs.com/) 来格式化模板）

## 如何启用自动拉取笔记？

1. 进入插件设置
2. 使用“自动拉取”设置来启用自动拉取笔记
3. 使用“自动拉取间隔”设置来更改每次拉取之间的间隔（以分钟为单位）
4. 重新启动 Obsidian

如何更改默认文件夹？

1. 进入插件设置
2. 使用“默认文件夹”设置来更改默认文件夹

## 我如何更改默认模板？

1. 进入插件设置
2. 使用“默认模板”设置来更改默认模板
[Handlebars](https://handlebarsjs.com/) 格式化模板)

可用于标题和模板的变量

该插件使用 [Handlebars](https://handlebarsjs.com/) 来格式化订阅源。您可以使用以下变量：

- `{{feed.feedUrl}}` - 订阅源的 URL
- `{{feed.title}}` - 订阅源的标题
- `{{feed.description}}` - 订阅源的描述
- `{{feed.link}}` - 订阅源的链接
- `{{item.title}}` - 条目的标题
- `{{item.description}}` - 条目的描述
- `{{item.author}}` - 条目的作者
- `{{item.link}}` - 条目的链接
- `{{item.guid}}` - 条目的唯一标识符
- `{{item.comments}}` - 条目的评论
- `{{item.categories}}` - 条目的分类
- `{{item.pubDate}}` - 条目的发布日期



