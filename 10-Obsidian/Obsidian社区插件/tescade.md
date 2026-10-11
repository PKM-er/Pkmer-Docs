---
uid: 1791709370387000
title: 'Obsidian 插件：Tescade'
tags: ['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
description: 'Recursively resolves Obsidian wikilinks into a standalone Markdown file. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tescade

> [!Note] 插件名片
> - 插件名称：Tescade
> - 插件作者：xoyowiz
> - 插件说明：Recursively resolves Obsidian wikilinks into a standalone Markdown file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xoyowiz/tescade-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tescade)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xoyowiz/tescade-obsidian/master/README.md)



## 概述

**1. 主要功能**
Tescade 是一款轻量级 Obsidian 插件，用于将笔记中的 `[[双链]]` 递归解析为独立 Markdown 文件。它会在原笔记旁生成 `-resolved.md` 文件，将引用的笔记内容直接嵌入到链接位置，原文件保持不变。

**2. 适用场景**
适用于需要将模块化笔记合并为完整文档的场景，如导出最终报告、生成独立分享文档，或构建基于引用结构的长篇内容。

**3. 核心特色**
*   **递归解析**：支持多层级链接嵌套（A→B→C），自动展开所有层级内容。
*   **安全机制**：自动检测并报错循环引用（Circular Links），防止无限递归；若链接指向不存在的文件，也会明确报错而非静默忽略。
*   **非破坏性**：仅生成新文件，不修改原始笔记，确保源数据完整。

**4. 使用建议**
*   打开目标笔记，通过命令面板执行 `Tescade: Resolve file`。
*   建议保持笔记结构清晰，避免不必要的循环引用，以便顺利生成解析文件。
*   解析后的文件视为生成产物，请勿手动编辑，应通过修改源笔记并重新解析来更新内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


