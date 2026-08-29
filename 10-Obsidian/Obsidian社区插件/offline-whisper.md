---
uid: 1786577081077004
title: 'Obsidian 插件：Offline Whisper Transcription'
tags: ['多媒体', '自动化与AI', '文字处理', '效率工具', 'obsidian插件']
description: '使用Whisper进行离线语音转文字——Obsidian工作人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Offline Whisper Transcription

> [!Note] 插件名片
> - 插件名称：Offline Whisper Transcription
> - 插件作者：David Manthey
> - 插件说明：使用Whisper进行离线语音转文字——Obsidian工作人员尚未对该插件进行人工审核。
> - 插件分类：['多媒体', '自动化与AI', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/manthey/offline-whisper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?offline-whisper)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/manthey/offline-whisper/master/README.md)



## 概述

### 《Offline Whisper Transcription插件总结》
1. **主要功能**：利用Whisper模型为Obsidian提供离线语音转文字服务，支持桌面和移动环境。
2. **适用场景**：适用于在Obsidian中需要将语音内容快速转化为文字记录的场景，如会议记录、课堂笔记等。
3. **核心特色**：
    - 完全离线使用，首次下载模型后即可本地运行。
    - 不同平台采用不同底层引擎，确保性能和兼容性。桌面用`whisper.cpp`，移动用transformers.js的WebAssembly版本。
    - 注重隐私，所有音频数据本地处理，不传输至外部服务器。
4. **使用建议**：
    - 在插件设置里选模型，模型从Hugging Face下载，越大越慢。测试显示“base”适用于移动设备，“small”适用于桌面设备，建议选能跟上语音转录的最大模型。
    - 在笔记中通过点击丝带图标或使用命令面板“Toggle Voice Transcription”开始转录，再次点击停止。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


