---
uid: 1791709368848000
title: 'Obsidian 插件：Note Improver'
tags: ['自动化与AI', '编辑工具', '文字处理', '第三方工具集成', 'obsidian插件']
description: 'Improve active notes with reviewed AI edits using Groq or local Ollama. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Improver

> [!Note] 插件名片
> - 插件名称：Note Improver
> - 插件作者：aquinas
> - 插件说明：Improve active notes with reviewed AI edits using Groq or local Ollama. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编辑工具', '文字处理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nuuye/obsidian-agent-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-improver)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nuuye/obsidian-agent-plugin/master/README.md)



## 概述

**1. 主要功能**
Note Improver 是一款利用 LLM（支持 Groq 云端或本地 Ollama）优化当前 Obsidian 笔记的插件。它能纠正拼写、格式及措辞，澄清模糊内容，并自动添加 YAML 别名及内部链接。所有修改均以“修改前/后”预览形式展示，用户可逐条或批量接受/拒绝，且应用前会自动备份原文件。

**2. 适用场景**
适用于需要提升笔记质量、结构清晰度或完善元数据的场景。适合希望快速整理杂乱笔记、统一写作风格，或为概念笔记建立知识关联的用户。

**3. 核心特色**
- **智能适配**：根据笔记类型（备忘、概念、参考）调整优化策略。
- **安全可控**：提供完整的 Before/After 预览，支持选择性采纳，绝不直接覆盖。
- **双引擎支持**：兼容 Groq（跨平台）和 Ollama（仅限桌面本地），兼顾隐私与便捷。
- **知识增强**：自动识别主题生成别名，并将已知概念转化为 `[[内部链接]]`，甚至生成 Mermaid 图表。

**4. 使用建议**
- 确保 Obsidian 版本 ≥1.11.4。
- 云端用户需配置 Groq API Key；本地用户需确保 Ollama 在 `127.0.0.1:11434` 运行。
- 建议先在小范围笔记上测试，熟悉其修改风格后再批量使用，以保留个人写作风格。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


