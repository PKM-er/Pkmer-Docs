---
uid: 1786577079421000
title: 'Obsidian 插件：Kotonoha Console'
tags: ['自动化与AI', '第三方工具集成', '效率工具', '白板学术与科研', 'obsidian插件']
description: '在Obsidian中对Kotonoha语义谱系进行提案、RDE审计以及人工审批。——Obsidian工作人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kotonoha Console

> [!Note] 插件名片
> - 插件名称：Kotonoha Console
> - 插件作者：tomyuk
> - 插件说明：在Obsidian中对Kotonoha语义谱系进行提案、RDE审计以及人工审批。——Obsidian工作人员尚未对该插件进行人工审核。
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', '白板学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zyx-corporation/obsidian-kotonoha-console)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kotonoha-console)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zyx-corporation/obsidian-kotonoha-console/master/README.md)



## 概述

### 主要功能
Kotonoha Console是Obsidian的UI插件，支持Kotonoha语义谱系的提案、RDE审核和人工审批。

### 适用场景
- 适用于需要对Kotonoha语义谱系进行提案、审核和审批的场景。
- 日常本地优先使用场景，如本地RDE审核和边车工作流。
- 需要使用大语言模型进行总结、重写、扩展的场景。

### 核心特色
提供多种后端模式选择，包括用于UI/开发冒烟测试的`mock`模式、支持本地优先RDE审核的`cli`模式，以及支持大语言模型提案生成的`http`模式。

### 使用建议
- 手动从[GitHub Release 0.5.4](https://github.com/zyx-corporation/obsidian-kotonoha-console/releases/tag/0.5.4)下载`main.js`、`manifest.json`和`styles.css`文件，放置到指定插件文件夹并启用（先关闭受限模式）。
- 日常本地使用推荐从**CLI**后端开始；若需大语言模型相关功能，使用**HTTP orchestrator**后端。详细安装和后端设置步骤可参考对应文档。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


