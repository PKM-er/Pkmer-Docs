---
uid: 1793625612112000
title: "Obsidian 插件：Dictionary and Synonyms"
tags: ["文字处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Select a word to see its synonyms and click one to replace it, or select it with Ctrl or Cmd to see its definitions. Each word is looked up once and kept as a note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dictionary and Synonyms

> [!Note] 插件名片
> - 插件名称：Dictionary and Synonyms
> - 插件作者：megatron
> - 插件说明：Select a word to see its synonyms and click one to replace it, or select it with Ctrl or Cmd to see its definitions. Each word is looked up once and kept as a note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gameboard-dev/dictionary-and-synonyms)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dictionary-and-synonyms)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gameboard-dev/dictionary-and-synonyms/master/README.md)



## 概述

Dictionary and Synonyms 旨在解决写作时词汇贫乏或需要快速查证词义的问题。其核心功能是在编辑器中直接提供同义词替换和定义查询服务。当你选中一个单词或短语时，下方会立即列出同义词，点击即可无缝替换，且自动匹配原词的字母大小写。若按住 Ctrl（macOS 为 Cmd）选中单词，则会弹出包含词性、Wiktionary 标签（如“非正式”、“美式”）的详细定义。所有查询结果都会以属性笔记的形式保存在库中，避免重复网络请求，提升响应速度。

典型使用场景包括润色文章和快速学习。例如，当你觉得“happy”一词过于普通时，选中它即可看到“joyful”、“cheerful”等更丰富的同义词，点击即可替换，无需离开编辑器。另一个场景是阅读外文资料时，选中不确定的术语，通过 Ctrl+选中 快速查看其作为名词或动词的具体含义及语境标签，帮助准确理解上下文。

相比同类插件，该工具的特色在于“离线优先”与“数据透明”。它支持下载完整的离线词典（如 Open English WordNet 或特定语言的 Wiktionary 数据），在无网络环境下也能通过本地二进制搜索快速查词。此外，每个查询结果都会生成包含来源许可（如 CC BY-SA 4.0）的笔记，确保数据可追溯。插件还具备智能缓存机制，优先读取本地笔记和离线词典，仅在必要时才访问网络，既保护隐私又提高效率。

使用前需注意，该插件仅支持桌面端，因为离线词典下载依赖 Node.js 模块。它不支持翻译功能，仅处理同义词和定义。如果你需要实时翻译、语音朗读或移动端支持，此插件可能不适合。另外，首次使用某些生僻词时仍需联网获取数据，且离线词典下载体积较大（数百 MB 至 GB 级），需预留足够的磁盘空间。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


