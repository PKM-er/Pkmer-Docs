---
uid: 1791709370280000
title: 'Obsidian 插件：Tag Match'
tags: ['自动化与AI', '文件管理', '效率工具', 'obsidian插件']
description: 'Match and apply tags to one note or many with AI decision models (default: Jev), using your vault’s tags or a specific set you provide. Faster + cheaper than LLM-based taggers. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tag Match

> [!Note] 插件名片
> - 插件名称：Tag Match
> - 插件作者：Nathan Cheng
> - 插件说明：Match and apply tags to one note or many with AI decision models (default: Jev), using your vault’s tags or a specific set you provide. Faster + cheaper than LLM-based taggers. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nweii/tag-match)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tag-match)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nweii/tag-match/master/README.md)



## 概述

**1. 主要功能**
Tag Match 是一款基于 AI 决策模型的 Obsidian 标签插件。它能根据笔记内容，从库中现有标签或用户自定义的特定标签集中匹配并应用最相关的标签。支持单篇笔记预览或批量自动添加，并提供撤销功能。

**2. 适用场景**
适用于需要高效管理大量笔记标签的用户，特别是希望统一标签体系、清理旧标签或为新笔记快速分类的场景。也适合已使用 AI Agent 工作流，希望保持标签偏好一致性的进阶用户。

**3. 核心特色**
*   **高效低成本**：采用 Jev 等决策模型而非通用 LLM，通过返回每个标签的概率进行判断，比传统 LLM 打标更快、更便宜。
*   **灵活可控**：支持自然语言定义标签规则，可平衡高频与低频标签，确保冷门标签也被考虑；允许排除特定标签、设置最低分数及添加上限。
*   **批量处理**：支持对单篇、文件夹或混合范围进行后台批量打标，不阻塞用户操作，进度可视且可撤销。

**4. 使用建议**
需配置 TypeSafe、OpenRouter 或 OpenAI 的 API 密钥及付费额度。建议先利用“自然语言定义”优化标签规则，再小范围测试批量效果，最后调整分数阈值以平衡标签覆盖率与准确性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


