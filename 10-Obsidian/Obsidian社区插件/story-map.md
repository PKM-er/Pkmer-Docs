---
uid: 1791709370138000
title: 'Obsidian 插件：Story Map'
tags: ['图表与可视化', '任务管理', '效率工具', 'obsidian插件']
description: 'Map user journeys and plan releases with user story mapping. Keep local maps alongside project notes so humans and file-capable agents can work from the same plan. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Story Map

> [!Note] 插件名片
> - 插件名称：Story Map
> - 插件作者：prohui
> - 插件说明：Map user journeys and plan releases with user story mapping. Keep local maps alongside project notes so humans and file-capable agents can work from the same plan. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/prohui/obsidian-story-map)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?story-map)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/prohui/obsidian-story-map/master/README.md)



## 概述

**主要功能**
Story Map 是一款专为 Obsidian 设计的用户故事映射插件。它允许用户可视化地构建产品计划，将用户旅程拆解为活动、任务，并将用户故事按发布里程碑（Release）进行分层管理。地图数据以本地 `.storymap`（JSON）文件形式存储，与项目笔记共存于同一工作区。

**适用场景**
适用于产品经理、开发者及团队在 Obsidian 中进行敏捷开发规划。特别适合需要同时管理需求文档、研究笔记和发布计划的场景，尤其适合希望利用 AI 代理辅助梳理产品逻辑的用户。

**核心特色**
1. **人机协同**：采用基于文件的架构，既提供直观的可视化界面供人类操作，又因底层为标准 JSON 文件，允许具备文件读写能力的 AI 代理直接读取和编辑同一份计划，无需额外 API 或 MCP 服务器。
2. **本地化存储**：所有数据保留在本地 Vault 中，确保数据隐私与离线可用性。
3. **结构化规划**：清晰展示横向的用户旅程与纵向的发布范围，使每个迭代的范围一目了然。

**使用建议**
建议先创建地图并将故事链接至相关项目笔记。随后，可指示 AI 代理读取地图及关联笔记，识别逻辑缺口或提出验收标准建议。在代理更新文件时，务必保留原有 ID 和结构，最后在 Obsidian 中视觉化审查并调整发布范围。此插件不包含内置 AI，需用户自行接入具备文件访问权限的外部代理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


