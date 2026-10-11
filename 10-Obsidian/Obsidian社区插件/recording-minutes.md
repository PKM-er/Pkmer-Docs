---
uid: 1791709369522000
title: 'Obsidian 插件：Recording Minutes'
tags: ['多媒体', '自动化与AI', '文字处理', 'obsidian插件']
description: 'On macOS, record microphone audio to your vault, transcribe it locally with your own Whisper CLI, and create source-linked Markdown notes with optional Codex summaries. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Recording Minutes

> [!Note] 插件名片
> - 插件名称：Recording Minutes
> - 插件作者：Jiajun Song
> - 插件说明：On macOS, record microphone audio to your vault, transcribe it locally with your own Whisper CLI, and create source-linked Markdown notes with optional Codex summaries. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '自动化与AI', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/songjiajun0209-byte/recording-minutes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?recording-minutes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/songjiajun0209-byte/recording-minutes/master/README.md)



## 概述

**1. 主要功能**
该插件专为 macOS 设计，支持通过麦克风录制音频并保存为 Vault 内的本地 WAV 文件。它调用本地 Whisper CLI 进行语音转写，生成带时间戳的 Markdown 笔记。可选集成 Codex 生成会议纪要，且所有 AI 生成内容均链接回原始转写段落。

**2. 适用场景**
适用于需要离线、隐私安全的会议记录或语音笔记场景。适合希望数据完全本地化存储，避免音频上传云端，同时利用 AI 辅助整理会议决策、任务及待办事项的用户。

**3. 核心特色**
*   **本地隐私优先**：录音与转写均在本地完成，不上传音频；Codex 总结需单独授权，且仅发送文本，不传输音频或文件路径。
*   **可恢复流程**：录音、转写、笔记写入分阶段保存，即使中断或失败，已生成文件仍保留，可通过“恢复中心”继续处理。
*   **可追溯性**：笔记包含状态、音频链接、转写文本及 AI 摘要，AI 内容强制关联转写片段，便于核对。

**4. 使用建议**
仅支持 macOS 桌面端，且仅录制麦克风输入（无法捕获系统音频或独立扬声器）。建议在使用前确保本地已安装并配置好 `whisper-cli`。由于 AI 输出可能存在误差，务必结合原始转写和录音进行人工复核。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


