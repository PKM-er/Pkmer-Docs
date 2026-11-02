---
uid: 1793625611474000
title: "Obsidian 插件：Curtis AI Audit"
tags: ["自动化与AI", "安全与隐私", "文件管理", "obsidian插件"]
description: "(changes coming)  Local-first audit trail for AI agent activity. Every agent inference gets an append-only markdown receipt in your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Curtis AI Audit

> [!Note] 插件名片
> - 插件名称：Curtis AI Audit
> - 插件作者：Jordan Newell
> - 插件说明：(changes coming)  Local-first audit trail for AI agent activity. Every agent inference gets an append-only markdown receipt in your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '安全与隐私', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jordannewell/curtis-ai-audit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?curtis-ai-audit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jordannewell/curtis-ai-audit/master/README.md)



## 概述

Curtis AI Audit 为 Obsidian 库中的 AI 智能体活动提供本地优先的审计追踪。它不依赖云端服务，而是将每次智能体推理生成一份仅追加的 Markdown 收据，记录执行者、时间、模型、耗时、Token 消耗及状态。这些收据以结构化 JSON 和人类可读摘要的形式存储，形成一份由你完全掌控的本地日志，而非复杂的取证系统，确保数据主权始终在你手中。

典型场景包括监控本地运行的 Claude Code 或 OpenCode 等智能体。例如，当你让智能体处理笔记时，插件会自动捕获其操作并写入当天的账本文件；或者，你可以手动通过 Shell 命令向审计收件箱发送记录，无需安装额外的消息插件。这种设计使得无论是自动化脚本还是手动操作，都能无缝融入现有的工作流，实现对所有 AI 交互的透明化记录。

相比同类插件，其特色在于“仅追加”的账本结构和严格的完整性校验。它支持按天分片的 UTC 时间账本，能自动检测重复 ID、序列缺口或乱序分片，确保日志未被篡改或意外删除。此外，它提供了灵活的集成方式，既支持通过 OM-1 协议接收外部消息，也允许其他插件直接调用 API 记录或查询数据，甚至支持从源码安装独立的收据写入器，适应多种技术栈需求。

使用前需注意，该插件默认不启用数据保留策略，审计日志会无限增长，需手动配置清理规则。它仅记录元数据，不保存工具输入的具体内容，因此不适合需要完整对话内容备份的需求。此外，若在同一库的两个同步设备上同时运行，可能会产生序列错误，建议单点写入。对于商业使用，需获得作者单独授权，个人和非商业用途则免费。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


