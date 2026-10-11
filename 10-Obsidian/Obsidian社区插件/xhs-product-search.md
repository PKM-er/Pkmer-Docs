---
uid: 1791709371150000
title: 'Obsidian 插件：XHS Product Search'
tags: ['数据处理', '第三方工具集成', '编程与脚本', '搜索与排序', 'obsidian插件']
description: 'Collect Xiaohongshu product details (price, shipping origin, shop rating, listing age, sales) with a bundled standard-library-only Python script. Works standalone or as the data backend for other plugins. No login required. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：XHS Product Search

> [!Note] 插件名片
> - 插件名称：XHS Product Search
> - 插件作者：ShangBin
> - 插件说明：Collect Xiaohongshu product details (price, shipping origin, shop rating, listing age, sales) with a bundled standard-library-only Python script. Works standalone or as the data backend for other plugins. No login required. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '第三方工具集成', '编程与脚本', '搜索与排序', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gitbins/xhs-product-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?xhs-product-search)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gitbins/xhs-product-search/master/README.md)



## 概述

**XHS Product Search** 是一款用于采集小红书商品及店铺数据的 Obsidian 插件。

1. **主要功能**：通过商品链接、分享文本或 ID，自动提取标题、价格（含券后价）、发货地、运费、店铺评分、销量及上架时长等结构化数据。支持将数据保存为 Markdown 笔记，数据存入 Frontmatter 以便查询，正文仅保留标题、链接及“每日跟踪”变动表。重复采集同一商品会自动更新笔记，避免重复。
2. **适用场景**：适合电商从业者、比价用户或数据分析师，用于监控商品销量变化、分析店铺数据，或作为其他插件（如交易工作台）的数据后端。
3. **核心特色**：
   - **零依赖**：内置仅使用标准库的 Python 脚本，无需登录即可运行。
   - **数据严谨**：保留页面原始销量表述（如“1.5万+”），不伪造精确数值。
   - **多端兼容**：支持桌面端与移动端，并提供 API 供其他插件调用。
4. **使用建议**：建议配置保存文件夹（默认“小红书商品采集”），利用 Frontmatter 进行批量查询；若需自动化，可结合支持本地命令的 AI 工具使用其 Skill 版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


