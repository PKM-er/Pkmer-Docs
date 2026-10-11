---
uid: 1791709370558000
title: 'Obsidian 插件：Trending Radar'
tags: ['数据分析', '搜索与排序', '效率工具', 'obsidian插件']
description: 'Manually run a configurable, auditable trend radar. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Trending Radar

> [!Note] 插件名片
> - 插件名称：Trending Radar
> - 插件作者：云沧
> - 插件说明：Manually run a configurable, auditable trend radar. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据分析', '搜索与排序', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yuncang123/trending-radar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?trending-radar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yuncang123/trending-radar/master/README.md)



## 概述

**1. 主要功能**
Trending Radar 是一款手动触发的趋势雷达插件。它支持从 RSS/Atom、GitHub、Hacker News 及 RSSHub 等来源抓取数据，经过标准化、去重和筛选后，自动生成结构化的 Markdown 趋势报告草稿。

**2. 适用场景**
适用于需要定期追踪特定领域技术动态、行业新闻或开源项目进展的知识工作者。特别适合希望将分散信息源整合为每日简报，并纳入个人知识库（Obsidian）进行长期归档与回顾的用户。

**3. 核心特色**
*   **可审计与版本控制**：每次运行均记录完整的执行状态（成功/失败/中断）及配置版本，确保结果可追溯，防止旧配置静默复用。
*   **灵活配置**：设置界面直接编辑 Profile，支持分组管理多源数据、自定义关键词过滤及时间窗口（默认24小时），无需手写 JSON。
*   **多语言支持**：界面支持简体中文与英文，数据层保持语言中立。
*   **智能处理**：自动推断缺失日期，基于主题相关性和质量门槛对内容进行排序与筛选。

**4. 使用建议**
*   建议先配置“Focus Topics”以精准匹配兴趣领域，避免信息过载。
*   利用“Filtering”设置合理的 `maxAgeHours`，确保内容新鲜度。
*   定期查看生成的 `draft-input.json` 和日志，以便排查抓取失败或调整源配置。
*   注意该插件目前仅限桌面端使用，且需手动触发，适合有固定时间习惯进行信息整理的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


