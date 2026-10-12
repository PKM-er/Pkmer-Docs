---
uid: 1780392511201000
title: 'Obsidian 插件：KarMind'
tags: ['自动化与AI', '文件管理', '效率工具', '学习与教育', '学术与科研', 'obsidian插件']
description: '它可以借助大语言模型（LLM）来管理笔记，实现维基整理、问答、内容回填以及健康检查等功能。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：KarMind

> [!Note] 插件名片
> - 插件名称：KarMind
> - 插件作者：lhy723
> - 插件说明：它可以借助大语言模型（LLM）来管理笔记，实现维基整理、问答、内容回填以及健康检查等功能。
> - 插件分类：['自动化与AI', '文件管理', '效率工具', '学习与教育', '白板学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lhy723/obsidian-karmind)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?karmind)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lhy723/obsidian-karmind/master/README.md)



## 概述

### 主要功能
KarMind是一款Obsidian插件，可借助大语言模型（LLM）构建个人知识维基。能收集原始资料、将其编译为相互关联的维基页面、进行问答、回填有用信息到维基，还能对维基进行健康检查。

### 适用场景
适用于知识管理、个人知识体系搭建，帮助用户高效整理和利用笔记。

### 核心特色
遵循“收集、编译、提问、回填、改进”的工作流程，借鉴Andrej Karpathy的LLM Wiki模式；能显示长时间运行任务的进度和文件操作；可根据内容哈希记录源编译状态，避免重复编译未更改的文件。

### 使用建议
先将源材料放入`raw/`文件夹，使用`/compile`命令编译成维基页面，用`/qa`提问，`/backfill`保存有用输出，`/health`检查维基质量。若需重新编译所有文件，可使用`/compile --force`。此外，插件会在聊天中给出工作流操作建议，需用户确认后执行。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


