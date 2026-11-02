---
uid: 1793625605747000
title: "Obsidian 插件：ai-search"
tags: ["搜索与排序", "自动化与AI", "效率工具", "obsidian插件"]
description: "Use an AI decision model for fast fuzzy search, without exact keyword matching or a complex search engine. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ai-search

> [!Note] 插件名片
> - 插件名称：ai-search
> - 插件作者：QuincyLeo
> - 插件说明：Use an AI decision model for fast fuzzy search, without exact keyword matching or a complex search engine. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/quincy-leo/obsidian-ai-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-search)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/quincy-leo/obsidian-ai-search/master/README.md)



## 概述

ai-search 利用 AI 决策模型实现快速模糊搜索，彻底摆脱对精确关键词匹配的依赖，也无需搭建复杂的搜索引擎。它通过调用 API 返回的概率值来评估文本相关性，将匹配结果按百分比排序，让你能迅速定位笔记中语义相近但用词不同的内容。这种机制让搜索体验更接近人类直觉，而非机械的字面匹配。

典型场景包括在海量笔记中查找特定概念。例如，当你想回顾“项目延期原因”时，即使笔记中写的是“进度滞后”或“时间线调整”，该插件也能通过语义理解将其识别为高相关结果。此外，你可以选择仅在当前笔记内搜索，或限定在特定文件夹和文件扩展名范围内进行全库检索，从而在保持上下文的同时高效挖掘信息。

相比传统搜索插件，其核心特色在于无需建立本地索引或保存搜索历史，除了设置文件外不在磁盘留下任何痕迹，极大保护隐私。同时，它具备精细的预算控制能力，允许用户配置并发数、令牌限制及速率上限，并支持在搜索过程中随时中断，保留并展示已返回的部分结果，兼顾了效率与资源消耗。

使用前需注意，该插件仅支持桌面端，且默认预设针对 TypeSafe 的 Jev 模型，若使用其他兼容端点需手动配置。它仅处理纯文本笔记，会自动忽略二进制文件。如果你依赖复杂的布尔逻辑搜索、需要离线环境运行，或希望插件自动构建全文索引以支持毫秒级响应，那么 ai-search 可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


