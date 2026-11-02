---
uid: 1793625612446000
title: "Obsidian 插件：Echostrata"
tags: ["多媒体", "自动化与AI", "效率工具", "obsidian插件"]
description: "Record your microphone and your Mac's system audio directly within the note you're writing. Get a transcript, a summary and action items. Nothing leaves your Mac. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Echostrata

> [!Note] 插件名片
> - 插件名称：Echostrata
> - 插件作者：sene-kela
> - 插件说明：Record your microphone and your Mac's system audio directly within the note you're writing. Get a transcript, a summary and action items. Nothing leaves your Mac. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/senekela/echostrata-for-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?echostrata)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/senekela/echostrata-for-obsidian/master/README.md)



## 概述

Echostrata 是一款专为 macOS 设计的本地录音与转录插件，旨在解决会议记录依赖云端服务导致的隐私顾虑。它允许用户直接在 Obsidian 笔记中同时录制麦克风和系统音频，无需将数据上传至外部服务器。核心功能包括一键录音、本地语音转文字，以及基于本地大模型生成的摘要和待办事项，确保所有数据处理均在设备内部完成，实现真正的离线工作流。

典型使用场景包括远程会议和在线课程学习。例如，在参加 Zoom 或 Teams 会议时，插件能同时捕捉你的发言和对方声音，自动区分“我”和“他人”的对话内容，并生成包含关键决策和行动项的会议纪要。又如，在观看技术讲座或网络研讨会时，它可以记录视频音频，随后生成结构化的笔记大纲、核心概念总结及复习问题，帮助高效整理学习成果。

相比同类插件，Echostrata 的最大特色在于完全本地化运行。它利用 whisper.cpp 进行转录，通过 Ollama 调用本地模型生成摘要，无需 API 密钥或订阅服务。此外，它内置了六种针对不同场景（如 1:1 面谈、客户通话、用户访谈等）的摘要模板，并支持自定义模板。系统音频捕获采用 Apple ScreenCaptureKit 技术，无需安装虚拟音频驱动，且支持在录音过程中单独静音麦克风或系统声音，操作灵活且对系统资源干扰小。

使用前需注意，该插件仅支持 macOS 13 及以上版本，且首次配置需安装 Homebrew 和 Xcode 命令行工具，磁盘空间需预留约 3.2 GB 用于模型存储。处理速度约为每 20 分钟音频需 1 分钟，不适合对实时性要求极高或需要跨平台（如 Windows/Linux）使用的用户。若你的 Mac 配置较低，运行本地大模型生成摘要可能会较为缓慢，此时可仅使用转录功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


