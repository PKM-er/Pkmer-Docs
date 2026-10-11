---
uid: 1791709365488000
title: 'Obsidian 插件：Automatic Mood History'
tags: ['日历与时间', '图表与可视化', '自动化与AI', '数据分析', '效率工具', 'obsidian插件']
description: 'Local-first mood history dashboard for dated Obsidian notes, with optional Groq analysis. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Automatic Mood History

> [!Note] 插件名片
> - 插件名称：Automatic Mood History
> - 插件作者：remriel
> - 插件说明：Local-first mood history dashboard for dated Obsidian notes, with optional Groq analysis. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '图表与可视化', '自动化与AI', '数据分析', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/remriel/automatic-mood-history)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?automatic-mood-history)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/remriel/automatic-mood-history/master/README.md)



## 概述

**主要功能**
Automatic Mood History 是一款本地优先的情绪历史仪表盘插件。它根据笔记的创建日期自动分组，整合当日所有文件夹中的笔记，生成包含情绪、能量、连接度、强度及主导情绪的可视化趋势图表，并提供源笔记链接。

**适用场景**
适合希望追踪个人心理状态变化、进行情绪日记记录或回顾长期情感趋势的用户。特别适用于注重数据隐私、偏好离线使用或希望结合AI辅助分析的场景。

**核心特色**
1. **本地优先与隐私保护**：默认使用本地确定性分析，无需网络或API密钥；可选启用 Groq 分析，API 密钥仅从环境变量读取，不存储于 Vault，且传输内容不包含文件路径。
2. **智能容错**：采用三级 JSON 回退机制，若 Groq 不可用则自动切换至本地分析；对无文本或仅图片的日期标记为“证据不足”，避免虚构评分。
3. **高效缓存**：通过源哈希跳过未变更笔记，提升性能。
4. **美观界面**：提供适应 Obsidian 主题的 Neo-brutalist 风格仪表盘，支持深浅色模式。

**使用建议**
建议先体验默认的本地分析功能，无需配置即可使用。若需更细腻的情感洞察，可在设置中明确启用 Groq 分析，并确保已正确配置 `GROQ_API_KEY` 环境变量。注意该插件未经 Obsidian 官方人工审核，请自行评估风险。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


