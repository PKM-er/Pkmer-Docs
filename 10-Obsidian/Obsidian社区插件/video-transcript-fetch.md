---
uid: 1791709370926000
title: 'Obsidian 插件：Video Caption Fetch'
tags: ['第三方工具集成', '多媒体', '文字处理', 'obsidian插件']
description: 'Save Bilibili and YouTube transcripts as notes, using optional speech recognition when captions are unavailable. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Video Caption Fetch

> [!Note] 插件名片
> - 插件名称：Video Caption Fetch
> - 插件作者：larryxu
> - 插件说明：Save Bilibili and YouTube transcripts as notes, using optional speech recognition when captions are unavailable. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '多媒体', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/larryxu001/video-transcript-obsidian-fetch)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?video-transcript-fetch)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/larryxu001/video-transcript-obsidian-fetch/master/README.md)



## 概述

**Video Caption Fetch** 是一款将 Bilibili 和 YouTube 视频字幕保存为 Obsidian 笔记的插件。

**主要功能**：支持批量导入视频转录文本，优先读取平台现有字幕；若字幕缺失，可调用 Groq 或 OpenAI 进行语音识别。插件严格保留原始语音内容，不进行自动翻译或摘要。

**适用场景**：适合需要归档视频内容、提取讲座或教程要点，以及构建基于视频素材的个人知识库的用户。

**核心特色**：
1. **双平台支持**：兼容 Bilibili（需扫码登录）和 YouTube。
2. **灵活配置**：支持自定义文件夹、文件名模板、时间戳及元数据。
3. **智能降级**：无字幕时自动切换至 AI 语音识别，支持多语言自动检测。
4. **成本控制**：视频顺序处理，API 调用可控，保存设置不产生费用。

**使用建议**：
1. 安装后在设置页配置 API Key（如需语音识别）。
2. 通过命令面板执行“Import video transcript”，每行粘贴一个 URL（单次最多 100 个）。
3. 建议启用“Create a new note”以生成独立笔记文件，便于管理。
4. 注意：语音识别需自备 API Key，且仅识别原始语音语言，不翻译。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


