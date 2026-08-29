---
uid: 1786577078127003
title: 'Obsidian 插件：Graph Context for Claude Code'
tags: ['第三方工具集成', '自动化与AI', '图谱', '效率工具', 'obsidian插件']
description: 'Claude Code的 /ide 功能，还能关联你的知识图谱。选中文本后，它会带着扩展后的图谱推送给 Claude，这里面包括内联嵌入内容、关联笔记的总结、标题路径以及反向链接。——这款插件尚未经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Graph Context for Claude Code

> [!Note] 插件名片
> - 插件名称：Graph Context for Claude Code
> - 插件作者：senna-lang
> - 插件说明：Claude Code的 /ide 功能，还能关联你的知识图谱。选中文本后，它会带着扩展后的图谱推送给 Claude，这里面包括内联嵌入内容、关联笔记的总结、标题路径以及反向链接。——这款插件尚未经过 Obsidian 官方人员的人工审核。
> - 插件分类：['第三方工具集成', '自动化与AI', '图谱', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/senna-lang/graph-context-for-claude-code)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?graph-context-for-claude-code)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/senna-lang/graph-context-for-claude-code/master/README.md)



## 概述

### 主要功能
该插件实现Obsidian与Claude Code IDE的集成，让Claude Code能自动识别Obsidian中正在编辑的笔记和选中的文本。同时，在选中文本时，会扩展知识图谱上下文，将嵌入内容、链接笔记摘要、标题路径、前置元数据和反向链接等信息整合发送给Claude Code。

### 适用场景
适用于在Obsidian中进行知识管理，同时借助Claude Code进行智能分析、总结等工作的用户。

### 核心特色
与其他集成方式不同，它在Obsidian内部使用自身的`metadataCache`链接解析器进行链接解析，一次性扩展内容并随选中内容推送，避免了Claude多次拉取链接内容的多轮交互，也不会出现外部服务器解析链接与Obsidian不一致的情况。

### 使用建议
可直接选中Obsidian中的文本使用该插件功能，无需额外配置MCP服务器或进行多步工具调用。但需注意该插件未经过Obsidian官方人员手动审核。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


