---
uid: 1791709365311000
title: 'Obsidian 插件：Anki Exporter'
tags: ['ANKI', '第三方工具集成', '学习与教育', 'obsidian插件']
description: 'Exports Obsidian Markdown to Anki Flashcards. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Anki Exporter

> [!Note] 插件名片
> - 插件名称：Anki Exporter
> - 插件作者：Erik Mielke
> - 插件说明：Exports Obsidian Markdown to Anki Flashcards. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['ANKI', '第三方工具集成', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/erikmielke/Obsidian2Anki)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?anki-exporter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/erikmielke/Obsidian2Anki/master/README.md)



## 概述

**1. 主要功能**
Anki Exporter 是一款 Obsidian 插件，通过 AnkiConnect 将 Markdown 笔记中的内容同步至 Anki 记忆卡片。它支持在笔记中直接编写 `问题 :: 答案` 格式的卡片，并实现双向智能同步，无需在两个软件间手动维护重复内容。

**2. 适用场景**
适合使用 Obsidian 进行知识管理，同时利用 Anki 进行间隔重复复习的用户。特别适用于学生、研究者或任何希望将学习笔记转化为高效记忆卡片的人群，实现“笔记即卡片”的工作流。

**3. 核心特色**
*   **智能同步机制**：通过隐藏注释记录 Anki 笔记 ID，自动识别卡片状态（新建、更新、跳过或重建），避免重复创建。
*   **变更预览**：同步前提供详细预览，展示新增、修改及未变动的卡片，支持前后对比，确保数据准确。
*   **灵活管理**：支持在 Obsidian 内直接搜索、选择或创建 Anki 牌组，并可配置 AnkiConnect 地址及重复项处理策略。

**4. 使用建议**
*   严格遵循语法：`::` 前后必须各有一个空格。
*   同步前务必使用“预览”功能检查变更，防止误操作。
*   确保 Anki 桌面端已安装 AnkiConnect 插件并开启服务，且 Obsidian 与 Anki 处于同一网络环境。
*   建议定期备份笔记，因为卡片 ID 存储在 Markdown 文件中，若文件损坏可能导致同步异常。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


