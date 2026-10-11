---
uid: 1791709368057000
title: 'Obsidian 插件：Link to Notes'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: 'Clip Xiaohongshu, Bilibili, and web articles into local Markdown notes — 100% offline, zero API cost. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Link to Notes

> [!Note] 插件名片
> - 插件名称：Link to Notes
> - 插件作者：skylines010101
> - 插件说明：Clip Xiaohongshu, Bilibili, and web articles into local Markdown notes — 100% offline, zero API cost. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lamvanbien65-crypto/obsidian-zerocloud-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zerocloud-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lamvanbien65-crypto/obsidian-zerocloud-notes/master/README.md)



## 概述

**Link to Notes** 是一款专为 Obsidian 设计的本地化内容剪藏插件，主要功能是将小红书、Bilibili、YouTube 及网页文章转换为结构清晰的 Markdown 笔记。

**适用场景：** 适合希望将社交媒体图文、视频内容离线归档至个人知识库的用户，尤其是注重数据隐私、拒绝云端依赖及 API 成本的技术爱好者。

**核心特色：**
1. **100% 离线运行：** 基于 yt-dlp、whisper.cpp 和 silero-vad 等本地工具，数据不出本机，零 API 费用。
2. **智能视频处理：** 自动分离背景音乐，仅对有人声部分进行语音转写；无人声视频则仅保存视频文件。
3. **自然断句：** 字幕根据说话人自然停顿进行分割，并附带单点时间戳。
4. **完整图文保留：** 小红书笔记可保存标题、正文、标签及全分辨率图片。

**使用建议：**
1. **环境准备：** 仅限 macOS 系统（推荐 Apple Silicon），需安装 Python 3、yt-dlp、ffmpeg 及 whisper-cli。
2. **依赖安装：** 建议通过 Homebrew 安装核心工具，并通过 pip 安装 silero-vad 以优化语音检测效果。
3. **自检配置：** 使用前务必在插件设置中运行环境自检，确保所有本地依赖项就绪。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


