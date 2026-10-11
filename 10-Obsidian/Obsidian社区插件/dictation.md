---
uid: 1791709366525000
title: 'Obsidian 插件：Dictation'
tags: ['自动化与AI', '编辑工具', '移动端优化', '效率工具', 'obsidian插件']
description: 'Record speech on desktop and mobile, transcribe it with your chosen provider, and safely insert it at the captured cursor. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dictation

> [!Note] 插件名片
> - 插件名称：Dictation
> - 插件作者：Raúl Antón Cuadrado
> - 插件说明：Record speech on desktop and mobile, transcribe it with your chosen provider, and safely insert it at the captured cursor. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编辑工具', '移动端优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rantoncuadrado/obsidian-dictation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dictation)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rantoncuadrado/obsidian-dictation/master/README.md)



## 概述

**1. 主要功能**
Dictation 是一款专注于语音转文字的 Obsidian 插件。它通过核心音频记录器捕获语音，利用用户指定的服务商（如 OpenAI、Groq、Deepgram 或自定义端点）进行转录，并将结果精准插入到录音开始时记录的光标位置。支持桌面端和移动端。

**2. 适用场景**
适用于需要快速记录灵感、会议内容或日常笔记的场景。特别适合在移动端打字不便时，通过语音快速输入文本到笔记中。

**3. 核心特色**
*   **隐私安全**：不索引库内容、不发送笔记数据、无遥测，API 密钥通过 Obsidian SecretStorage 安全存储。
*   **灵活控制**：支持多种触发方式（侧边栏、快捷键、移动端悬浮按钮），提供“转录”、“保留音频”或“丢弃”的灵活处理策略。
*   **多语言支持**：支持自动检测或指定语言，界面支持中英文。
*   **容错机制**：若插入失败，可弹窗恢复完整转录文本；音频默认保守保留 21 天。

**4. 使用建议**
*   确保 Obsidian 版本 ≥1.11.4，并启用核心插件“Audio recorder”。
*   在设置中配置所选服务商的 API 密钥。
*   移动端建议开启“悬浮麦克风按钮”，以便在键盘上方快速访问。
*   根据隐私需求，合理设置音频保留策略及转录后的处理选项。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


