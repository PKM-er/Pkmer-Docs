---
uid: 1791709370984000
title: 'Obsidian 插件：Voice Append'
tags: ['多媒体', '文字处理', '自动化与AI', 'obsidian插件']
description: 'Record, transcribe, clean up, and append thoughts with configurable providers. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Voice Append

> [!Note] 插件名片
> - 插件名称：Voice Append
> - 插件作者：Walter Forkel
> - 插件说明：Record, transcribe, clean up, and append thoughts with configurable providers. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '文字处理', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wko/obsidian-voice-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?voice-append)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wko/obsidian-voice-notes/master/README.md)



## 概述

**Voice Append** 是一款旨在实现“语音转笔记”的 Obsidian 插件，核心功能是将录音自动转录、经 LLM 清洗后追加至当前笔记。

**适用场景**：专为 iPhone 等移动端快速捕捉灵感设计，同时兼容桌面端，适合需要在移动中高效记录想法的用户。

**核心特色**：
1. **全流程自动化**：支持从笔记末尾、命令面板或移动端工具栏启动录音，全程保持屏幕常亮。
2. **智能清洗**：直接调用 OpenAI 兼容接口（无需本地服务器），利用 LLM 优化语音转录文本，支持注入笔记上下文以提升准确性。
3. **鲁棒性强**：具备断点续传功能，网络中断或重启后可恢复任务；进度显示直观，不污染 Markdown 源码。
4. **灵活配置**：支持自定义转录与清洗模型，可选生成文件名或保留原始转录文本，界面支持中英文。

**使用建议**：
1. **安装**：目前需手动从 GitHub 发布版安装，需将 `dist/` 文件复制至插件目录。
2. **配置**：确保 Obsidian 版本 ≥1.11.4，并配置有效的 API 密钥（默认使用 OpenAI 接口）。
3. **优化**：建议开启“包含笔记上下文”选项以提高专业术语识别率；若需追溯原文，可开启“显示原始转录”功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


