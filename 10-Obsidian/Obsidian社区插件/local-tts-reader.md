---
uid: 1791709368204000
title: 'Obsidian 插件：Local TTS Reader'
tags: ['多媒体', '文字处理', '效率工具', 'obsidian插件']
description: 'Read notes aloud with on-device text-to-speech and word highlighting. No cloud, no API keys. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local TTS Reader

> [!Note] 插件名片
> - 插件名称：Local TTS Reader
> - 插件作者：Josh Shearer
> - 插件说明：Read notes aloud with on-device text-to-speech and word highlighting. No cloud, no API keys. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/joshshearer/Note-Reader-Local)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-tts-reader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/joshshearer/Note-Reader-Local/master/README.md)



## 概述

**Local TTS Reader** 是一款完全本地运行的文本转语音（TTS）插件，旨在通过设备端合成技术朗读笔记，并同步高亮当前单词。

**主要功能**：支持多种本地TTS后端（如 macOS/Windows 系统语音、Linux 的 Speech Dispatcher 或 espeak-ng，以及全平台通用的 Kokoro 神经语音引擎）。提供逐词高亮、自动引擎优选、阅读位置记忆及自定义播放速度等功能。

**适用场景**：适合注重隐私、无网络环境或希望避免订阅费用的用户。适用于长时间阅读笔记、辅助学习或听力训练，无需依赖云端服务或 API 密钥。

**核心特色**：
1. **极致隐私**：笔记数据绝不离开设备，无遥测、无分析，完全离线运行。
2. **灵活引擎**：自动根据设备性能和质量排名选择最佳本地引擎；Kokoro 引擎仅在用户手动点击下载时从 Hugging Face 获取模型，之后完全本地运行。
3. **智能过滤**：可自动跳过代码块、Frontmatter、标题等非正文内容，提升阅读流畅度。

**使用建议**：首次使用 Kokoro 引擎需下载约 92-326MB 的模型文件，请确保存储空间充足。建议根据设备性能选择引擎（如 Android 端使用 WASM 路径），并调整高亮颜色与前瞻大小以优化视觉体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


