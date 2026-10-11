---
uid: 1791709368220000
title: 'Obsidian 插件：Longhai Podscript'
tags: ['多媒体', '自动化与AI', '文字处理', '第三方工具集成', 'obsidian插件']
description: 'Fetch full podcast transcripts (YouTube, Apple Podcasts, audio links, or a title) — reuse existing captions or transcribe audio locally with Whisper — and save them as structured notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Longhai Podscript

> [!Note] 插件名片
> - 插件名称：Longhai Podscript
> - 插件作者：longhai
> - 插件说明：Fetch full podcast transcripts (YouTube, Apple Podcasts, audio links, or a title) — reuse existing captions or transcribe audio locally with Whisper — and save them as structured notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '自动化与AI', '文字处理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/longhaiqwe/longhai-podscript)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?longhai-podscript)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/longhaiqwe/longhai-podscript/master/README.md)



## 概述

**Longhai Podscript** 是一款专为 Obsidian 设计的播客文字稿抓取插件，旨在将音频内容高效转化为结构化笔记。

**主要功能**：支持通过 YouTube、Apple Podcasts、音频直链或标题关键词获取播客完整文字稿。若存在现成字幕则直接复用，否则调用本地 `faster-whisper` 进行离线转写，最终保存为包含元数据（来源、质量、日期）的 Markdown 笔记。

**适用场景**：适合播客重度用户、内容创作者及研究者，用于快速整理播客内容、进行二次编辑、翻译或发布，实现从“听”到“写”的高效工作流。

**核心特色**：
1. **全本地运行**：无需付费 API，数据不上传，隐私安全且免费。
2. **智能识别**：自动判断是否有字幕，有则秒回，无则本地转写。
3. **结构化输出**：生成的笔记自带 Frontmatter，便于后续检索与管理。

**使用建议**：
1. 仅限桌面端使用，需本地安装 Python 3.9+。
2. 首次使用会自动在 `~/.longhai-podscript` 创建独立虚拟环境并安装依赖，请确保磁盘空间充足。
3. 建议利用“关注收藏”功能固定常听播客，提升抓取效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


