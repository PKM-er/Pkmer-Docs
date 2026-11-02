---
uid: 1793625615822000
title: "Obsidian 插件：Markdown RSS"
tags: ["第三方工具集成", "效率工具", "文字处理", "obsidian插件"]
description: "Subscribe to RSS feeds, read articles in a clean side panel, and save highlights to your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Markdown RSS

> [!Note] 插件名片
> - 插件名称：Markdown RSS
> - 插件作者：xmmw
> - 插件说明：Subscribe to RSS feeds, read articles in a clean side panel, and save highlights to your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xmmw-fun/obsidian-markdown-rss)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdown-rss)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xmmw-fun/obsidian-markdown-rss/master/README.md)



## 概述

Markdown RSS 将 RSS 订阅功能直接集成到 Obsidian 侧边栏，让你无需切换浏览器即可阅读文章。其核心设计在于将订阅列表存储为纯文本 Markdown 文件，而非隐藏数据库，这意味着你可以像编辑普通笔记一样手动管理订阅源，支持通过 Git 或 Obsidian Sync 同步，彻底解决了传统阅读器配置难以备份和迁移的痛点。

典型场景包括：当你想快速整理信息流时，只需在 `RSS Feeds.md` 中粘贴 URL 即可添加新源；若某个源暂时不想看，只需在行尾加上“| 禁用”标记，无需删除或重新配置。此外，如果你从其他阅读器迁移，可直接导入 OPML 文件，插件会列出所有检测到的订阅供你确认，避免误操作。

相比同类插件，Markdown RSS 提供了更精细的关键词筛选能力，支持白名单和黑名单规则，并允许选择“同时满足”或“任一满足”的组合模式，帮助你在海量文章中快速定位感兴趣的内容。插件还具备阅读位置记忆功能，即使刷新面板或重启应用，也能通过滚动按钮回到上次阅读的位置。由于仅使用纯 Obsidian API，它完全兼容移动端，且无遥测或远程代码执行风险，数据均本地存储。

需要注意的是，该插件主要服务于阅读和收藏场景，不适合需要复杂自动化工作流或深度数据分析的用户。关键词筛选仅匹配标题和摘要，不涵盖正文全文。此外，虽然支持手动编辑文件，但修改后需点击刷新才能生效。如果你依赖特定的阅读器插件生态或需要离线全文搜索，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


