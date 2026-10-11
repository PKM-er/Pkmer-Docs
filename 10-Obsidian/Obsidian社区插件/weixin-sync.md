---
uid: 1791709371059000
title: 'Obsidian 插件：Weixin Sync'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Weixin Sync

> [!Note] 插件名片
> - 插件名称：Weixin Sync
> - 插件作者：chen
> - 插件说明：
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chenyk0317/obsidian-weixin-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?weixin-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chenyk0317/obsidian-weixin-sync/master/README.md)



## 概述

**1. 主要功能**
Weixin Sync 是一款将微信小程序暂存的微信文章自动同步至 Obsidian 本地知识库的插件。它支持将微信原文解析为 Markdown，自动下载图片并本地化（替换为 Wikilink），同时基于 `sync_id` 实现文件去重，避免覆盖已有笔记。

**2. 适用场景**
适用于需要长期保存、整理微信文章或随笔的用户，特别是希望将移动端阅读内容无缝整合到个人知识管理体系中的 Obsidian 用户。支持桌面端与移动端同步。

**3. 核心特色**
*   **自动化同步**：支持定时自动同步（默认5分钟）及手动触发。
*   **图片本地化**：自动抓取并存储图片，确保笔记离线可用且链接稳定。
*   **智能去重**：基于唯一标识防止重复导入。
*   **灵活配置**：可自定义同步目录、按公众号建目录及文件名格式。

**4. 使用建议**
*   **前置依赖**：本插件非开箱即用，需先在微信搜索小程序「Obsidian同步」生成 API Key，并在插件设置中填入以完成设备绑定。
*   **安装方式**：推荐通过 BRAT 插件安装测试，或从社区市场/手动安装。
*   **版本要求**：需 Obsidian 1.5.0 及以上版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


