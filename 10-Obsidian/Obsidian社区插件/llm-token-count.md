---
uid: 1786577079625000
title: 'Obsidian 插件：LLM Token Count'
tags: ['导航与状态栏', '文字处理', '自动化与AI', '效率工具', 'obsidian插件']
description: '状态栏里能精准统计大语言模型（LLM）的令牌数量 —— 对GLM - 5.2、GPT、Qwen、DeepSeek可精确统计，对Claude、Gemini能大致估算。 - 这个插件还没经过Obsidian官方人员手动审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LLM Token Count

> [!Note] 插件名片
> - 插件名称：LLM Token Count
> - 插件作者：William Hardesty
> - 插件说明：状态栏里能精准统计大语言模型（LLM）的令牌数量 —— 对GLM - 5.2、GPT、Qwen、DeepSeek可精确统计，对Claude、Gemini能大致估算。 - 这个插件还没经过Obsidian官方人员手动审核呢。
> - 插件分类：['导航与状态栏', '文字处理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hardes11/llm-token-count)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?llm-token-count)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hardes11/llm-token-count/master/README.md)



## 概述

### LLM Token Count 插件总结
1. **主要功能**：在 Obsidian 状态栏实时显示当前打开笔记基于所选大语言模型（LLM）的 token 数量，支持 GLM、GPT、Qwen、DeepSeek 等 11 种模型。
2. **适用场景**：适用于需要向大模型发送笔记内容，需提前判断笔记是否在模型上下文窗口范围内，或是否需要拆分、总结的场景。
3. **核心特色**：一是准确性，对 GLM - 5.2 可使用真实的 HuggingFace 分词器进行精确计数，避免 GPT 类计数器对中文的高估；二是清晰标注，对不同模型的计数结果明确标注是精确还是近似；三是离线使用，首次使用后分词器会本地缓存，后续计数无需网络。
4. **使用建议**：在向大模型发送笔记前，通过状态栏的 token 计数判断是否超出上下文预算，若超出可考虑对笔记进行拆分或总结处理。安装时需从指定链接下载相关文件并放置到对应位置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


