---
uid: 1791709369096000
title: 'Obsidian 插件：Oura Metrics'
tags: ['第三方工具集成', '数据处理', '数据分析', '自动化与AI', 'obsidian插件']
description: 'Summarize Oura sleep, heart-rate and activity metrics into one LLM-ready note — 7, 14, or 28 days, compared against the weeks before. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Oura Metrics

> [!Note] 插件名片
> - 插件名称：Oura Metrics
> - 插件作者：Jaan Altosaar
> - 插件说明：Summarize Oura sleep, heart-rate and activity metrics into one LLM-ready note — 7, 14, or 28 days, compared against the weeks before. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '数据分析', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/altosaar/obsidian-oura-metrics)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?oura-metrics)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/altosaar/obsidian-oura-metrics/master/README.md)



## 概述

**1. 主要功能**
该插件将Oura戒指的睡眠、心率及活动数据转化为一份结构化的Markdown笔记。它支持生成7、14或28天的数据摘要，并自动计算与之前三周基线数据的对比，包括均值、标准差及变化量。

**2. 适用场景**
适合需要长期追踪健康趋势的用户，特别是希望将生物数据整合进Obsidian知识库，或需要将结构化健康数据直接粘贴给LLM进行深度分析的场景。

**3. 核心特色**
*   **基线对比机制**：以窗口前的三周为基准，而非窗口自身，有效识别偏离常态的异常周。
*   **LLM友好格式**：仅输出精简的核心标量数据，剔除冗余字段，减少大模型处理噪声。
*   **统计深度**：提供标准化均值差异（z-score）及超出±1.5 SD的具体日期，量化数据波动。

**4. 使用建议**
建议配合Microlite插件使用，形成“健康数据+笔记编辑”的双维数据闭环。生成笔记后，可直接作为上下文投喂给AI助手，获取基于个人历史基线的个性化健康洞察。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


