---
uid: 1791709369534000
title: 'Obsidian 插件：Reel'
tags: ['第三方工具集成', '移动端优化', '数据处理', '效率工具', 'obsidian插件']
description: 'Log films and series with TMDB metadata. Poster library, reviews, episode ratings, content filtering, Up Next and stats — all computed from frontmatter. Built for mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Reel

> [!Note] 插件名片
> - 插件名称：Reel
> - 插件作者：Liam Gour
> - 插件说明：Log films and series with TMDB metadata. Poster library, reviews, episode ratings, content filtering, Up Next and stats — all computed from frontmatter. Built for mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '移动端优化', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/virus7976/2026-08-16_obsidian_plugin-movie-tracker_v1)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reel)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/virus7976/2026-08-16_obsidian_plugin-movie-tracker_v1/master/README.md)



## 概述

**Reel** 是一款专为移动端设计的 Obsidian 影视追踪插件，通过 TMDB 元数据实现电影与剧集的数字化管理。

**主要功能**：自动同步 TMDB 海报与评分，支持记录观看状态、单集进度、重看历史及个人评分。所有数据均存储于笔记 Frontmatter 中，无需依赖 Dataview 或 Node API，完全离线可用。

**适用场景**：适合希望在个人知识库中建立“可链接、可备份”的观影记录的用户，尤其是移动端重度用户。它解决了传统数据库（如 Letterboxd）数据孤岛问题，让观影笔记能直接融入 Obsidian 的双链网络。

**核心特色**：
1. **移动端优先**：界面与交互专为手机优化，支持 `isDesktopOnly: false`。
2. **极简数据模型**：每部影视对应一个笔记（剧集按整部而非单集存储），避免元数据缓存爆炸。
3. **安全写入**：仅修改 Frontmatter，绝不触碰笔记正文内容。
4. **追加式日志**：重看记录采用 Append-only 模式，保留完整观看历史。

**使用建议**：
- 建议将影视笔记分类存放（如 `Movies/` 和 `Series/` 文件夹）。
- 利用 `[[Dune (2021)]]` 格式在日记或 Canvas 中链接影视笔记，构建个人观影图谱。
- 定期备份 Vault，因为所有数据均依赖本地 Markdown 文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


