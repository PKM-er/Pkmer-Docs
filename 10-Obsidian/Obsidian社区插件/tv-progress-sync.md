---
uid: 1791709370595000
title: 'Obsidian 插件：TV Progress Sync'
tags: ['数据处理', '效率工具', '自动化与AI', 'obsidian插件']
description: 'Keeps TV series, season, and episode Seen properties synchronized. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TV Progress Sync

> [!Note] 插件名片
> - 插件名称：TV Progress Sync
> - 插件作者：Jim Ezesinachi
> - 插件说明：Keeps TV series, season, and episode Seen properties synchronized. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jimezesinachi/obsidian-tv-progress-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tv-progress-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jimezesinachi/obsidian-tv-progress-sync/master/README.md)



## 概述

**TV Progress Sync** 是一款专为 Obsidian 设计的插件，旨在自动同步电视系列、季和集数之间的“已看”（seen）状态，解决手动维护进度繁琐的问题。

**主要功能**
该插件实现了层级联动的进度管理：勾选系列会同步所有关联的季和集；勾选或取消勾选季会更新其下属集数并重新计算系列状态；当所有集数看完时，自动标记季为已看；所有季看完时，自动标记系列为已看。同时，它会自动维护 `season_count`、`seasons_seen` 和 `completion` 等进度属性。

**适用场景**
适用于使用 Obsidian 构建个人影视数据库的用户，特别是那些希望以 Markdown 笔记形式记录追剧进度，并追求数据一致性和自动化管理的场景。

**核心特色**
1. **双向联动**：支持从系列到集数的双向状态同步，避免数据不一致。
2. **自动计算**：实时自动更新完成度统计属性，无需手动计算。
3. **结构规范**：基于特定的 YAML Frontmatter 架构（type: tv-series/season/episode），确保数据解析准确。

**使用建议**
1. **目录规范**：请确保笔记文件位于 `Film & TV/TV/` 目录下，并严格遵循 README 中定义的 YAML 属性格式（如 `seen`, `series`, `season_number` 等）。
2. **批量修复**：若进行大量手动编辑后进度显示异常，可使用命令面板中的 “TV Progress Sync: Recalculate all TV progress” 命令重新计算所有进度值。
3. **安装方式**：可通过社区插件市场安装，或手动构建后放置于 `.obsidian/plugins` 目录启用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


