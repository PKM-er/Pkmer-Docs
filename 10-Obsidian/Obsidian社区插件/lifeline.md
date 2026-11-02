---
uid: 1793625614780001
title: "Obsidian 插件：Lifeline"
tags: ["备份与恢复", "第三方工具集成", "文件管理", "obsidian插件"]
description: "Back up your YouTube subscriptions, playlists, and Watch Later list into Markdown notes in your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lifeline

> [!Note] 插件名片
> - 插件名称：Lifeline
> - 插件作者：Aaqil Ilyas
> - 插件说明：Back up your YouTube subscriptions, playlists, and Watch Later list into Markdown notes in your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/aaqil101/obsidian-lifeline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lifeline)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/aaqil101/obsidian-lifeline/master/README.md)



## 概述

Lifeline 是一款专为桌面端设计的 Obsidian 插件，旨在解决 YouTube 账号被封禁或内容意外丢失的风险。它通过调用 YouTube Data API，将你的订阅频道、指定播放列表以及“稍后再看”列表导出为纯 Markdown 笔记。所有数据均以本地文本形式存储在库中，不依赖任何专有格式或数据库，确保你的观看记录和组织习惯拥有持久且可控的备份。

典型的使用场景包括构建个人视频知识库或管理长期关注的频道。例如，你可以将订阅的频道信息导出为带有 Dataview 字段的笔记，方便后续通过查询语句筛选特定领域的创作者；或者将“稍后再看”列表同步到笔记中，结合 Obsidian 的其他插件进行任务管理，确保重要视频不会因平台变动而遗漏。

相比同类工具，Lifeline 的核心特色在于其“纯文本”与“可查询性”。所有导出内容均为标准 Markdown，每条记录都支持 Dataview 查询，极大提升了数据在 Obsidian 生态内的复用价值。此外，插件完全离线运行，不下载视频文件，且无任何遥测数据，隐私安全性高。它利用用户自己的 Google OAuth 凭证，确保 API 配额和数据控制权完全掌握在用户手中。

使用前需注意，该插件仅支持桌面端，且配置过程涉及 Google Cloud Console 的 OAuth 客户端创建，对非技术用户有一定门槛。若未将应用发布为公开状态，刷新令牌每 7 天会过期，需重新授权。此外，它仅备份元数据（如标题、链接、时间），不保存视频文件本身，因此不适合需要离线观看视频或备份视频实体的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


