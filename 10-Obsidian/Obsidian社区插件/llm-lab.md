---
uid: 1791709368154000
title: 'Obsidian 插件：LLM Lab'
tags: ['自动化与AI', '数据处理', '安全与隐私', 'obsidian插件']
description: 'Record the local LLM calls your plugins make — stored only inside your vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LLM Lab

> [!Note] 插件名片
> - 插件名称：LLM Lab
> - 插件作者：Johannes Kaindl
> - 插件说明：Record the local LLM calls your plugins make — stored only inside your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '数据处理', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johannes-kaindl/llm-lab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?llm-lab)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johannes-kaindl/llm-lab/master/README.md)



## 概述

**1. 主要功能**
LLM Lab 是一个被动记录插件，用于捕获并存储 Obsidian 中其他插件对本地 LLM 的调用日志。它记录模型、完整对话历史、响应内容、延迟及错误状态，数据仅保存在 Vault 内的追加式日志中，不主动发起网络请求或修改笔记。

**2. 适用场景**
适用于使用多个依赖本地 LLM 的 Obsidian 插件（如 RAG 助手、聊天插件等）的用户，特别是需要监控 LLM 调用质量、排查错误或构建评估数据集的场景。

**3. 核心特色**
*   **纯记录性**：不干预 LLM 运行，仅作为“黑匣子”记录交互细节。
*   **数据本地化**：所有数据严格存储在 Vault 内，保障隐私。
*   **评估支持**：支持对记录进行评分（Good/Poor），可将优质回答转化为微调或评估材料。
*   **低侵入性**：通过简单 API 调用集成，不影响原有插件逻辑。

**4. 使用建议**
*   需配合其他 LLM 插件使用，由开发者在插件代码中调用 `lab.log()` 接口。
*   建议定期查看“未评分”记录，标记高质量回答以积累训练数据。
*   注意日志为追加式且会轮转，重要数据请及时导出或归档。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


