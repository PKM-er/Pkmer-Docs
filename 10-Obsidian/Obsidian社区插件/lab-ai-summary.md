---
uid: 1793625605671000
title: "Obsidian 插件：AI Summary"
tags: ["自动化与AI", "文字处理", "效率工具", "obsidian插件"]
description: "Adds an AI-generated summary and key takeaways to notes marked ai_summary: pending, using your own Gemini or OpenAI API key. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Summary

> [!Note] 插件名片
> - 插件名称：AI Summary
> - 插件作者：lab829
> - 插件说明：Adds an AI-generated summary and key takeaways to notes marked ai_summary: pending, using your own Gemini or OpenAI API key. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lab829/obsidian-ai-summary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lab-ai-summary)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lab829/obsidian-ai-summary/master/README.md)



## 概述

AI Summary 是一款专为 Obsidian 设计的自动化摘要插件，旨在解决长文档阅读效率低下的问题。它通过监控笔记元数据中的 `ai_summary: pending` 状态，自动调用 Gemini 或 OpenAI 接口，在笔记正文顶部生成精炼的摘要与核心要点。处理完成后，插件会将状态标记更新为 `generated`，形成清晰的工作流闭环，让你无需手动整理即可快速掌握笔记精髓。

典型使用场景包括配合官方 Web Clipper 进行网页剪藏。只需在剪藏模板中预设 `ai_summary: pending` 属性，每次保存网页时，插件便会自动在桌面端生成摘要，极大简化了信息收集流程。此外，它也适用于个人知识库管理，当你将大量未读文章或会议记录标记为待处理时，插件会在后台静默完成摘要生成，方便你后续快速回顾。

相比其他同类插件，AI Summary 的特色在于其明确的状态机设计，支持 `none`、`pending` 和 `generated` 三种显式状态，避免了误触发。它允许用户自定义提示词以适配特定的输出格式，且仅将笔记正文发送至你选择的 AI 服务商，不经过任何第三方服务器。此外，插件完全免费且开源，无遥测数据收集，隐私保护机制透明可靠，适合对数据主权有较高要求的用户。

使用前需注意，该插件目前仅支持桌面端，且需要你自备 Gemini 或 OpenAI 的 API 密钥。密钥以明文形式存储在本地配置文件中，若使用同步服务需格外注意隐私安全。它不适合需要实时交互或复杂多轮对话的场景，也不适合完全离线环境。如果你希望完全控制 AI 交互过程，或不需要自动化的批量处理，这款插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


