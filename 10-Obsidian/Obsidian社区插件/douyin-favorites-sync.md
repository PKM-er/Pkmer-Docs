---
uid: 1791709366608000
title: 'Obsidian 插件：Douyin Favorites Sync'
tags: ['第三方工具集成', '多媒体', '数据处理', '文件管理', 'obsidian插件']
description: 'Sync your Douyin favorites into Obsidian notes with metadata, tags, transcripts and video attachments. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Douyin Favorites Sync

> [!Note] 插件名片
> - 插件名称：Douyin Favorites Sync
> - 插件作者：Yu Mingtao
> - 插件说明：Sync your Douyin favorites into Obsidian notes with metadata, tags, transcripts and video attachments. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '多媒体', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yumingtao/douyin-favorites-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?douyin-favorites-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yumingtao/douyin-favorites-sync/master/README.md)



## 概述

**Douyin Favorites Sync** 是一款将抖音收藏夹同步至 Obsidian 笔记的插件，支持保留元数据、标签、字幕及视频附件。

**适用场景**：适合需要归档抖音收藏内容、建立个人知识库或进行视频素材管理的用户，特别是希望将视频内容转化为可检索文本笔记的场景。

**核心特色**：
1. **双模式同步**：提供“轻量”模式（仅提取链接、封面和文案，速度快）和“重型”模式（下载无水印视频并生成 Whisper 语音转录文本）。
2. **智能调度**：支持定时自动同步，启动时自动补全，失败任务具备指数退避重试机制。
3. **去重机制**：基于 `douyin_id` 自动跳过已导入内容，避免重复。
4. **架构分离**：插件负责前端交互，需配合本地 Python (FastAPI) 后端服务运行，提供实时状态栏监控。

**使用建议**：
1. **前置依赖**：必须首先安装并配置 `douyin-favorites-sync-backend` 本地服务。
2. **平台限制**：仅支持桌面端（Windows/macOS/Linux），因涉及文件系统操作。
3. **资源考量**：若需语音转录或视频下载，请确保本地算力与存储空间充足；仅做笔记归档建议优先使用“轻量”模式以提升效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


