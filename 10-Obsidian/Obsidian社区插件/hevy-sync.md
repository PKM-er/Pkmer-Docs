---
uid: 1791709367486000
title: 'Obsidian 插件：Hevy Sync'
tags: ['第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
description: 'Syncs data with Hevy. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hevy Sync

> [!Note] 插件名片
> - 插件名称：Hevy Sync
> - 插件作者：stihi
> - 插件说明：Syncs data with Hevy. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/s-t-i-h-i/obsidian-hevy-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hevy-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/s-t-i-h-i/obsidian-hevy-plugin/master/README.md)



## 概述

**1. 主要功能**
Hevy Sync 插件将 Hevy 健身应用的数据同步至 Obsidian，为每次训练生成独立笔记。笔记包含 YAML Frontmatter（如日期、总容量），支持通过 Dataview 进行查询和统计。

**2. 适用场景**
适合使用 Hevy Pro 版记录健身数据，且希望利用 Obsidian 进行长期训练数据追踪、回顾及可视化分析的用户。

**3. 核心特色**
- **结构化数据**：自动提取训练日期、标题及总容量（Volume），便于数据检索。
- **灵活同步**：提供“仅同步新训练”和“全量覆盖”两种模式，后者适用于修改体重设置后重新计算引体向上容量。
- **轻量集成**：基于 Hevy API，无需额外服务器，直接本地存储为 Markdown 笔记。

**4. 使用建议**
- 需先在 Hevy 开发者设置中获取 API Key 并填入插件设置。
- 设置中需指定存储文件夹（默认 `Hevy`）及当前体重，以确保无负重动作（如引体向上）的容量计算准确。
- 日常使用建议执行“Sync new workouts”以增量导入；若修改了体重设置，请执行“Sync all workouts”以更新历史数据。
- 注意：笔记文件名基于 Hevy ID，手动重命名会导致下次同步时重复导入，请避免手动改名。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


