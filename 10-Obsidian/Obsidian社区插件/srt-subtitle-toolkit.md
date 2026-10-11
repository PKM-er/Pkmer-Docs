---
uid: 1791709371236000
title: 'Obsidian 插件：ZeroCloud Clip'
tags: ['多媒体', '自动化与AI', '第三方工具集成', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ZeroCloud Clip

> [!Note] 插件名片
> - 插件名称：ZeroCloud Clip
> - 插件作者：skylines010101
> - 插件说明：
> - 插件分类：['多媒体', '自动化与AI', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lamvanbien65-crypto/obsidian-srt-toolkit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?srt-subtitle-toolkit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lamvanbien65-crypto/obsidian-srt-toolkit/master/README.md)



## 概述

**1. 主要功能**
ZeroCloud Clip 是一款 Obsidian 插件，实现 B 站视频到结构化字幕笔记的一键转换。核心流程包括：自动下载视频（默认 1080P）、抓取 CC/AI 字幕或调用本地 Whisper 进行语音转写，最后通过纯算法进行标准断句，生成规范的字幕笔记。

**2. 适用场景**
适用于需要高效整理 B 站视频内容的用户，特别是希望将视频知识转化为可检索、可编辑的文本笔记的场景。适合对数据隐私敏感、拒绝云端处理的用户，以及 macOS 用户（利用 Metal 加速获得最佳性能）。

**3. 核心特色**
*   **零云隐私**：全本地处理，不调用任何云 LLM 或 API，数据不出本机，提供三层硬保证。
*   **全自动流水线**：从链接输入到笔记生成一键完成，支持串行任务队列、实时进度显示及无残留取消。
*   **高性能本地转写**：集成 Whisper（Apple Metal 加速），转写速度约为实时 15-20 倍。
*   **标准断句**：采用纯算法断句（25 字/条），无需 LLM 即可生成规范笔记。

**4. 使用建议**
*   **环境准备**：macOS 优先，首次使用务必运行设置页的“环境自检”，确保安装 python3、yt-dlp、ffmpeg 及 Whisper 模型。
*   **安装方式**：推荐通过 BRAT 安装 Beta 版，或手动下载 Release 文件至插件目录。
*   **操作技巧**：支持输入完整链接、b23.tv 短链或裸 BV 号；若视频无字幕，建议确保 Whisper 模型已正确下载以启用本地转写功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


