---
uid: 1791709367203000
title: 'Obsidian 插件：Frontmatter Templater'
tags: ['模板与链接处理', '文件管理', '编辑工具', 'obsidian插件']
description: 'Apply default and inherited folder templates configured from folder-note frontmatter. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Frontmatter Templater

> [!Note] 插件名片
> - 插件名称：Frontmatter Templater
> - 插件作者：krisspy
> - 插件说明：Apply default and inherited folder templates configured from folder-note frontmatter. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kriss-spy/frontmatter-templater)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-templater)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kriss-spy/frontmatter-templater/master/README.md)



## 概述

**1. 主要功能**
Frontmatter Templater 是一款轻量级模板插件，用于自动为新创建的空 Markdown 笔记填充内容。它通过读取文件夹同名笔记（Folder Note）中的 `folder-template` 属性，或插件设置中的默认模板，实现自动化模板应用。

**2. 适用场景**
适用于需要标准化笔记结构的用户，特别是希望模板规则随文件夹层级自动继承的场景。适合希望模板配置“可见且可发现”的团队或个人，无需依赖复杂的插件内部数据文件。

**3. 核心特色**
*   **基于文件系统的规则**：模板规则直接存储在 Vault 内的文件夹笔记中，而非仅存在于插件设置里，便于人工或 AI Agent 直接读取和发现。
*   **层级继承机制**：遵循“就近原则”，深层文件夹的规则优先于父级文件夹，若无特定规则则回退至全局默认模板。
*   **安全且透明**：不执行 JavaScript 或 Shell 命令，确保安全性；设置页面仅作为规则索引，实际解析始终基于文件夹结构。

**4. 使用建议**
*   在目标文件夹内创建同名笔记（如 `Projects/Acme/Acme.md`），并在其 Frontmatter 中定义 `folder-template` 指向具体模板文件。
*   建议在 Vault 根目录的 `AGENTS.md` 中记录默认模板路径，以便 AI 助手能理解全局回退逻辑。
*   利用设置页面可视化管理规则，但需注意重排序仅影响显示，实际生效逻辑严格遵循文件夹层级。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


