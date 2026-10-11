---
uid: 1791709368862000
title: 'Obsidian 插件：Note Schemas'
tags: ['编辑工具', '文件管理', '模板与链接处理', 'obsidian插件']
description: 'Typed schemas for note kinds: frontmatter validation, autocomplete, and autofix. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Schemas

> [!Note] 插件名片
> - 插件名称：Note Schemas
> - 插件作者：aguilaaa
> - 插件说明：Typed schemas for note kinds: frontmatter validation, autocomplete, and autofix. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文件管理', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/aguila1989/obsidian-note-schemas)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-schemas)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/aguila1989/obsidian-note-schemas/master/README.md)



## 概述

**1. 主要功能**
Note Schemas 插件允许用户通过单一 JSON/YAML 文件定义笔记类型的 Frontmatter 架构。它提供字段类型验证、枚举值检查、输入自动补全以及安全自动修复功能，确保笔记元数据符合预设规范。

**2. 适用场景**
适用于需要严格管理笔记元数据结构的场景，如图书管理、会议记录、项目追踪等。特别适合希望统一团队或个人笔记格式、避免 Frontmatter 字段缺失或类型错误的用户。

**3. 核心特色**
*   **类型化架构**：通过 `match` 规则（文件夹、标签等）自动识别笔记类型。
*   **实时验证**：侧边栏列出违规项，状态栏显示当前笔记有效性（✓/✗）。
*   **智能辅助**：在 `---` 块内提供字段名和枚举值自动补全。
*   **安全自动修复**：自动插入带默认值的缺失字段，并强制转换明显类型错误（如数字字符串转数字）。

**4. 使用建议**
建议在 `.obsidian` 目录下创建 `note-schemas.json` 文件，根据笔记分类定义字段规则。对于必填字段务必设置 `required: true`，并为枚举字段提供 `values` 列表以提升补全体验。注意该插件未经官方人工审查，建议定期备份数据后再启用自动修复功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


