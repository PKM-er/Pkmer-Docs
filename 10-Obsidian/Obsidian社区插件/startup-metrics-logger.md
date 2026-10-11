---
uid: 1791709370119000
title: 'Obsidian 插件：Startup Metrics Logger'
tags: ['数据分析', '效率工具', '自动化与AI', '数据处理', 'obsidian插件']
description: 'Tracks startup time and per-plugin load breakdown, writing structured JSON and Markdown logs for AI analysis and optimization. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Startup Metrics Logger

> [!Note] 插件名片
> - 插件名称：Startup Metrics Logger
> - 插件作者：Hannes Delbeke
> - 插件说明：Tracks startup time and per-plugin load breakdown, writing structured JSON and Markdown logs for AI analysis and optimization. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据分析', '效率工具', '自动化与AI', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hannesdelbeke/obsidian-startup-metrics-logger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?startup-metrics-logger)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hannesdelbeke/obsidian-startup-metrics-logger/master/README.md)



## 概述

**1. 主要功能**
该插件用于追踪 Obsidian 启动时间及各插件加载耗时，并生成结构化的 JSON、Markdown 和 JSONL 日志文件，支持 AI 分析与自动化性能监控。

**2. 适用场景**
适用于插件数量较多、启动速度变慢，或希望利用 AI 助手及外部脚本对 Vault 性能进行深度诊断、历史趋势追踪及自动化优化的用户。

**3. 核心特色**
*   **数据持久化**：不同于内置调试功能仅显示临时弹窗，本插件将数据写入磁盘，保留历史记录。
*   **AI 友好格式**：输出专为 AI 消费设计的结构化日志，便于智能体读取并给出优化建议（如自动排序插件加载优先级）。
*   **轻量专用**：专注于启动性能测量，无冗余功能。

**4. 使用建议**
*   **优先加载**：建议将此插件设置为社区插件中的第一个加载项，以确保能准确捕获所有其他插件的初始化时间。
*   **定期分析**：利用生成的日志文件，定期让 AI 助手分析启动瓶颈，识别耗时较长的插件，从而针对性地禁用或优化，提升整体启动效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


