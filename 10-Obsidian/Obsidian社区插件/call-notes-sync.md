---
uid: 1793625608770000
title: "Obsidian 插件：Call Notes Sync"
tags: ["第三方工具集成", "任务管理", "效率工具", "obsidian插件"]
description: "Unofficial sync of your Fathom meeting summaries and action items into your vault, one note per meeting. Not made by Fathom. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Call Notes Sync

> [!Note] 插件名片
> - 插件名称：Call Notes Sync
> - 插件作者：theluckystrike
> - 插件说明：Unofficial sync of your Fathom meeting summaries and action items into your vault, one note per meeting. Not made by Fathom. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/call-notes-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?call-notes-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/call-notes-sync/master/README.md)



## 概述

Call Notes Sync 将 Fathom 的会议摘要与行动项自动同步至 Obsidian 库中，每场会议生成独立笔记。笔记包含标题、日期、参与者、摘要及以任务形式呈现的行动项，并附带录音链接。插件支持断点续传，确保数据同步的连续性，让你无需手动整理即可在本地知识库中快速回顾会议核心内容。

典型场景如每周团队例会或客户沟通后，你希望将 Fathom 生成的摘要直接存入笔记库以便后续检索。例如，同步后你可以直接在 Obsidian 中勾选已完成的行动项，或通过笔记内的链接快速跳转回 Fathom 查看原始录音。若你使用 Pro 功能，还能在每日笔记中自动插入新会议链接，实现会议记录与日常工作的无缝关联。

相比同类插件，其特色在于“删除即永久忽略”机制：一旦你删除某条会议笔记，插件会记住该会议 ID，后续同步不再重建，且此状态在 Obsidian 关闭时依然有效。此外，API 密钥存储在 Obsidian 的安全存储中，而非明文配置文件，提升了安全性。Pro 版本还支持自定义模板、标签、参与者 Wiki 链接及带时间戳的完整转录，适合对笔记结构有较高要求的用户。

使用前需注意，该插件非 Fathom 官方出品，需自行在 Fathom 账户中生成 API 密钥。它仅读取数据，不修改 Fathom 端内容；若 Fathom 端摘要更新，本地笔记不会自动刷新，需手动删除笔记并重置同步起点。此外，插件受 Fathom API 速率限制，大量同步时可能需等待。若你不需要将会议数据导入 Obsidian，或依赖 Fathom OAuth 登录而非个人 API 密钥，则不适合使用此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


