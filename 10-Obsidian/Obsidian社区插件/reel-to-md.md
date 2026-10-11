---
uid: 1791709369536000
title: 'Obsidian 插件：Reel2MD'
tags: ['第三方工具集成', '多媒体', '文字处理', '数据处理', 'obsidian插件']
description: 'Import Instagram videos into structured Markdown (MD) notes with captions, metadata, and optional local transcription. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Reel2MD

> [!Note] 插件名片
> - 插件名称：Reel2MD
> - 插件作者：RichDir
> - 插件说明：Import Instagram videos into structured Markdown (MD) notes with captions, metadata, and optional local transcription. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '多媒体', '文字处理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/aptoren/obsidian-reel2md)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reel-to-md)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/aptoren/obsidian-reel2md/master/README.md)



## 概述

**Reel2MD** 是一款将 Instagram 视频导入为结构化 Markdown 笔记的 Obsidian 插件，主打本地优先与自动化处理。

1.  **主要功能**：支持从 Markdown 队列批量读取 Instagram 链接（Reels/Posts/TV），利用 `yt-dlp` 提取标题、元数据及媒体流，并可选调用 `faster-whisper` 进行本地语音转录（支持英语或自动检测多语言），最终生成包含字幕和元数据的结构化笔记。
2.  **适用场景**：适合需要归档 Instagram 内容、建立个人知识库，或希望将视频内容转化为可搜索文本笔记的用户。
3.  **核心特色**：
    *   **本地化处理**：转录在本地运行，保护隐私。
    *   **智能去重**：通过 Shortcode 自动去重并规范化追踪链接。
    *   **灵活配置**：支持可选保留视频/音频文件，提供实时任务输出窗口及依赖检查。
    *   **稳定命名**：文件名基于稳定 ID，标题作为别名存储，便于链接管理。
4.  **使用建议**：需配合 Python 环境及 `yt-dlp`、`faster-whisper` 等依赖。建议先阅读新手安装指南，配置好媒体存储路径，并利用插件内的网络检查功能确保环境正常。注意该插件未经 Obsidian 官方人工审核，请自行评估安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


