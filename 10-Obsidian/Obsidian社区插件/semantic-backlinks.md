---
uid: 1786577082449006
title: 'Obsidian 插件：Semantic Backlinks'
tags: ['自动化与AI', '搜索与排序', '效率工具', '学习与教育', '白板学术与科研', 'obsidian插件']
description: '基于本地Ollama嵌入（bge - m3）技术实现语义笔记推荐和相关笔记面板功能。——此插件尚未经过Obsidian官方人员人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Semantic Backlinks

> [!Note] 插件名片
> - 插件名称：Semantic Backlinks
> - 插件作者：Brightwav3
> - 插件说明：基于本地Ollama嵌入（bge - m3）技术实现语义笔记推荐和相关笔记面板功能。——此插件尚未经过Obsidian官方人员人工审核。
> - 插件分类：['自动化与AI', '搜索与排序', '效率工具', '学习与教育', '白板学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/brightwav3/semantic-backlinks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?semantic-backlinks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/brightwav3/semantic-backlinks/master/README.md)



## 概述

### 插件名称
Semantic Backlinks

### 主要功能
- 在输入时提供笔记链接建议，结合快速词汇匹配与语义搜索。
- 有内联建议弹窗，词汇匹配即时显示，语义匹配随后呈现，还可选择片段预览。
- 有相关笔记面板，展示与当前打开笔记语义最相似的笔记，也支持片段预览。

### 适用场景
适用于在Obsidian中撰写笔记，需要快速找到相关笔记链接，拓展知识关联的场景。

### 核心特色
- 默认完全本地化，使用Ollama和LM Studio将嵌入数据保留在本地。
- 支持OpenAI API，可选择云推理。
- 自动索引，启动时对库进行索引，编辑停止后自动重新索引。
- 支持移动设备，可通过Tailscale或本地网络访问Ollama实例使用。

### 使用建议
推荐本地使用，安装Ollama或LM Studio并拉取多语言嵌入模型，如bge - m3；也可使用OpenAI API，但需有API密钥。手动安装插件后，确保Ollama运行，再在社区插件中启用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


