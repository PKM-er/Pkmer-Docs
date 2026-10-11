---
uid: 1791709365217000
title: 'Obsidian 插件：Agent Annotations'
tags: ['自动化与AI', '编辑工具', '第三方工具集成', 'obsidian插件']
description: '选中 Markdown 文本，编写 Agent 指令，然后通过 current.json 将队列交给任意 Agent。- 此插件尚未经过 Obsidian 官方人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agent Annotations

> [!Note] 插件名片
> - 插件名称：Agent Annotations
> - 插件作者：exceedhl
> - 插件说明：选中 Markdown 文本，编写 Agent 指令，然后通过 current.json 将队列交给任意 Agent。- 此插件尚未经过 Obsidian 官方人工审核。
> - 插件分类：['自动化与AI', '编辑工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/exceedhl/obsidian-agent-annotations)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agent-annotations)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/exceedhl/obsidian-agent-annotations/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在 Obsidian 中选中 Markdown 文本，直接撰写针对 AI Agent 的修改指令（Annotation）。这些指令会生成可视化的卡片并同步至 `current.json` 队列，供外部 Agent 读取并执行文件编辑。

**2. 适用场景**
适用于需要利用 AI 辅助进行文档批量修订、代码重构或内容优化的场景。特别适合用户希望像标记代码差异（Diff）一样，在阅读过程中即时记录修改需求，并批量交给 Agent 处理的工作流。

**3. 核心特色**
*   **非侵入式标注**：标注以卡片形式嵌入文档，随阅读滚动，不破坏原文结构。
*   **可视化队列管理**：提供右侧面板实时查看待处理列表，支持跳转定位、单条删除或清空。
*   **审阅模式**：可一键隐藏所有标注和高亮，便于对比修改前后的文档状态。
*   **标准化接口**：通过 `current.json` 文件与 Agent 交互，兼容支持相应 Skill 的任意 AI Agent。

**4. 使用建议**
安装启用后，选中文字点击“+ Annotation”输入指令并保存。建议熟悉快捷键（默认 `Mod+Enter` 保存），并利用右侧面板高效管理任务队列。在执行修改前，确保你的 AI Agent 已配置好读取 `current.json` 的能力，以便准确执行标注的修改指令。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


