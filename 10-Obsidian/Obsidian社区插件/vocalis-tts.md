---
uid: 1793625624310000
title: "Obsidian 插件：Vocalis TTS"
tags: ["自动化与AI", "多媒体", "效率工具", "obsidian插件"]
description: "Offline neural text-to-speech with dual teleprompter and per-note memory. Powered by Piper TTS. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vocalis TTS

> [!Note] 插件名片
> - 插件名称：Vocalis TTS
> - 插件作者：Mack
> - 插件说明：Offline neural text-to-speech with dual teleprompter and per-note memory. Powered by Piper TTS. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '多媒体', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mack-yilman/vocalis-tts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vocalis-tts)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mack-yilman/vocalis-tts/master/README.md)



## 概述

Vocalis TTS 是一款完全离线运行的神经网络文本转语音插件，旨在解决用户在阅读笔记时无法兼顾视觉与听觉的问题。它基于 Piper TTS 引擎，支持西班牙语和英语，无需联网或 API 密钥，所有处理均在本地完成。核心功能包括高精度的双模式提词器，能在编辑和阅读视图中实时高亮当前朗读的句子，并提供从 0.75x 到 2.5x 的实时变速功能，且变速过程中保持音调自然，避免失真。

典型使用场景包括长时间阅读长文或学习外语。例如，当你阅读一篇复杂的英文技术文档时，可以开启插件，它会自动高亮当前朗读的句子，帮助你集中注意力；或者在复习西班牙语笔记时，你可以利用其独立的进度记忆功能，暂停阅读去处理其他事务，稍后返回时能精确地从上次中断的句子继续，无需重新寻找位置。

相比其他 TTS 插件，Vocalis TTS 的特色在于其“无延迟”的双模提词器算法，能精准锚定 DOM 文本，即使在复杂的 Markdown 格式下也不会出现高亮错位。此外，它具备智能的起始检测功能：若选中了特定文本，则从该处开始朗读；若无选中，则自动恢复该笔记的历史进度。右侧边栏面板还集成了“继续收听”列表，方便快速跳转至未读完的笔记，并支持通过 Frontmatter 单独指定每篇笔记的语言，无需更改全局设置。

使用前需注意，该插件目前仅支持西班牙语和英语，且部分高质量语音模型（如拉美西班牙语或特定英语音色）需要额外下载，体积较大。它不适合需要多语言混合朗读（如中英混排）或依赖云端高级语音情感表达的用户。由于完全离线，其语音自然度虽高，但可能略逊于顶级云端服务，且对本地 CPU 性能有一定要求，老旧设备可能会感到合成速度稍慢。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


