---
uid: 2025042920531608
title: Obsidian 插件：Vector Search
tags: ['自动化与AI', '搜索与排序', '数据处理', 'obsidian插件']
description: 用Ollama和nomic-embed-text嵌入技术对笔记进行语义搜索。需要安装Ollama。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vector Search

> [!Note] 插件名片
> - 插件名称：Vector Search
> - 插件作者：Ashwin A Murali
> - 插件说明：用Ollama和nomic-embed-text嵌入技术对笔记进行语义搜索。需要安装Ollama。
> - 插件分类：['自动化与AI', '搜索与排序', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ashwin271/obsidian-vector-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vector-search)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ashwin271/obsidian-vector-search/main/README.md)



## 概述

Obsidian Vector Search 插件通过集成 Ollama 的嵌入 API 为 Obsidian 提供语义搜索功能，支持基于内容而非关键词匹配的笔记相似性检索。核心功能包括全库语义搜索、Ollama 嵌入模型支持、可配置相似度阈值、本地快速搜索、自动文件变更检测更新、智能文本分块策略和高效增量更新。该插件适用于需要深度关联笔记内容的场景，解决传统关键词搜索无法捕捉语义关联的问题。使用前需安装 Ollama 并下载 nomic-embed-text 模型（约500MB），支持 macOS/Linux/Windows 平台，要求至少 1GB 内存和 11434 端口可用。安装后通过配置 Ollama 地址和相似度阈值，即可通过选中文本触发语义搜索，系统会实时生成向量嵌入并通过余弦相似度计算返回结果。插件提供段落/字符两种分块策略，支持自动处理文件修改/重命名/删除操作，开发模式下可通过日志监控 API 调用和索引构建状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



