---
uid: 1791709365273000
title: 'Obsidian 插件：AI Transcribe and Summary'
tags: ['自动化与AI', '文字处理', '效率工具', 'obsidian插件']
description: 'Record meetings, transcribe reliably past size/silence failure modes, and produce a structured summary alongside the full transcript. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Transcribe and Summary

> [!Note] 插件名片
> - 插件名称：AI Transcribe and Summary
> - 插件作者：onlyutkarsh
> - 插件说明：Record meetings, transcribe reliably past size/silence failure modes, and produce a structured summary alongside the full transcript. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/onlyutkarsh/ai-transcribe-summary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-transcribe-summary)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/onlyutkarsh/ai-transcribe-summary/master/README.md)



## 概述

**AI Transcribe and Summary** 是一款专为 Obsidian 设计的会议录音与智能总结插件。

1. **主要功能**：支持在 Obsidian 内直接录音或右键转录现有音频文件。它自动保存原始音频，生成完整文字记录，并输出包含概述、讨论话题、决策、行动项及未决问题的结构化摘要。
2. **适用场景**：适用于长时间会议记录、访谈整理及需要高效提取关键信息的场景，特别适合担心录音失败或音频过长的用户。
3. **核心特色**：针对 Whisper 模型的常见故障进行了优化。自动按静音间隙分割长录音以突破 25MB 上传限制，并行处理以节省时间；智能检测静音或低信号音频，避免重复循环伪影及无效 API 调用；确保原始音频优先保存，防止转录失败导致数据丢失。
4. **使用建议**：无需手动干预，插件会自动处理长音频分割。建议确保麦克风输入正常，若遇到连续无停顿语音，插件会自动回退至硬切割策略。适合希望“记录即归档”且对数据完整性有高要求的知识工作者。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


