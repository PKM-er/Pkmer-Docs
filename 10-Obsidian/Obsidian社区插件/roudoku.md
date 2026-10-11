---
uid: 1791709369749000
title: 'Obsidian 插件：Roudoku'
tags: ['第三方工具集成', '多媒体', '文字处理', 'obsidian插件']
description: 'Read Japanese notes aloud with Google Cloud text-to-speech, a sidebar player, and device speech fallback. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Roudoku

> [!Note] 插件名片
> - 插件名称：Roudoku
> - 插件作者：analosmith
> - 插件说明：Read Japanese notes aloud with Google Cloud text-to-speech, a sidebar player, and device speech fallback. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '多媒体', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/analosmith/obsidian-roudoku)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?roudoku)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/analosmith/obsidian-roudoku/master/README.md)



## 概述

**主要功能**：Roudoku是一款Obsidian插件，可将日语Markdown笔记通过Google Cloud TTS或设备内置语音朗读。它自动过滤代码、URL等无关内容，仅朗读正文，并智能处理长句分割以避免API错误。

**适用场景**：适用于在iPhone或Mac上回顾日语笔记、阅读文章或学习日语，无需切换应用即可“听”笔记，适合通勤或休息时利用碎片时间。

**核心特色**：
1. **智能预处理**：自动剔除Frontmatter、代码块，保留标题和链接文本，确保朗读自然。
2. **长文优化**：基于句点智能分句，遇API长度限制自动重试分割。
3. **双向交互**：侧边栏播放器高亮当前朗读位置，点击可跳转；支持迷你栏后台操作。
4. **灵活配置**：免API Key即可使用标准语音，也可接入Google Cloud获取更优音色。

**使用建议**：建议先使用免配置的“标准语音”测试流程，确认体验后再决定是否配置Google Cloud API Key以获取更自然的日语发音。注意该插件需在Obsidian开启状态下运行，不支持锁屏后台持续播放。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


