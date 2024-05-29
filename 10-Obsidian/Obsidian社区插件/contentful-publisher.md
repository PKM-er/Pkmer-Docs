---
uid: 2024052909034477
title: Obsidian 插件：Contentful Publisher
tags: ['第三方工具集成', '文件管理', '笔记与日志', 'obsidian插件']
description: 从Obsidian管理您的Contentful内容。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Contentful Publisher

> [!Note] 插件名片
> - 插件名称：Contentful Publisher
> - 插件作者：Ziya Fenn
> - 插件说明：从 Obsidian 管理您的 Contentful 内容。
> - 插件分类：[' 第三方工具集成 ', ' 文件管理 ', ' 笔记与日志 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/ziyafenn/obsidian-contentful-publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?contentful-publisher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ziyafenn/obsidian-contentful-publisher/main/README.md)

## 概述

Contentful Publisher 是一个 Obsidian 插件，它可以帮助用户管理 Contentful 内容。该插件可以从 Contentful 获取内容类型，并根据这些内容类型创建 Obsidian 模板。它还可以从 Contentful 获取所有内容条目，并根据它们创建笔记，根据内容类型将它们组织到文件夹中。用户还可以从 Obsidian 更新内容并将其推送回 Contentful。如果插件检测到内容不同步（它会检查内容是否在 Contentful 上更新），它会提醒用户并创建内容的副本。所有内容的字段都将作为 frontmatter 参数添加，除了标题和正文以外。目前，插件将忽略以下字段：_RichText_、_ResourceLink_、_Link_、_Object_ 和 _Location_。插件的使用要求启用和配置 Obsidian 核心模板插件，并禁用 _Wikilinks_，以便默认使用 Markdown 链接。同时，Contentful 中需要创建内容模型，并且每个内容模型必须有一个表示内容标题的字段，内容类型模型应该至少有一个表示条目正文的文本字段。未来计划的功能包括从 Obsidian 创建内容、从 Obsidian 上传图片以及支持多个语言环境。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



