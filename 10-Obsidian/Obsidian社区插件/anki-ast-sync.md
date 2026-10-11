---
uid: 1791709365309000
title: 'Obsidian 插件：Anki AST Sync'
tags: ['ANKI', '第三方工具集成', '学习与教育', '效率工具', 'obsidian插件']
description: 'Sync flashcards directly to Anki using an AST markdown engine via AnkiConnect. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Anki AST Sync

> [!Note] 插件名片
> - 插件名称：Anki AST Sync
> - 插件作者：zunaid-farouque
> - 插件说明：Sync flashcards directly to Anki using an AST markdown engine via AnkiConnect. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['ANKI', '第三方工具集成', '学习与教育', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zunaidfarouque/Obsidian-Anki-AST-Engine)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?anki-ast-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zunaidfarouque/Obsidian-Anki-AST-Engine/master/README.md)



## 概述

**插件名称**：Anki AST Sync

**1. 主要功能**
该插件通过 AnkiConnect 将 Obsidian 笔记中的闪卡直接同步至 Anki。它利用 AST（抽象语法树）解析引擎替代传统的正则表达式，确保在复杂 Markdown 环境下实现安全、无损的双向同步。

**2. 适用场景**
适用于使用 Obsidian 构建知识库并依赖 Anki 进行记忆复习的用户，特别是笔记中包含嵌套代码块、LaTeX 公式、Obsidian 特有语法（如 Callouts、块引用）或复杂 HTML 结构的场景。

**3. 核心特色**
*   **AST 驱动解析**：深入理解笔记语法结构，避免正则表达式在复杂格式下失效。
*   **非破坏性同步**：不重新序列化整个文件，完美保留用户的自定义格式、间距和排版风格。
*   **高稳定性**：拥有 800+ 通过的测试用例，支持基本卡、可逆卡、填空卡及自定义 Anki 模型。

**4. 使用建议**
需预先安装并配置 AnkiConnect 插件。建议用户熟悉插件提供的卡片语法参考（如 `#basic`、`#cloze` 等标签），以充分利用其支持的多种卡片类型和区块继承功能，确保同步逻辑符合预期。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


