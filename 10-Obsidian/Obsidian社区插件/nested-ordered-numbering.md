---
uid: 1791709368791000
title: 'Obsidian 插件：Nested Ordered Numbering'
tags: ['文字处理', '编辑工具', '效率工具', 'obsidian插件']
description: 'Create and maintain hierarchical plain-text numbering with a trailing period at every depth. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nested Ordered Numbering

> [!Note] 插件名片
> - 插件名称：Nested Ordered Numbering
> - 插件作者：spark
> - 插件说明：Create and maintain hierarchical plain-text numbering with a trailing period at every depth. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/spark00000/NestedOrderedNumbering)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nested-ordered-numbering)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/spark00000/NestedOrderedNumbering/master/README.md)



## 概述

**插件名称**：Nested Ordered Numbering

**主要功能**
该插件用于在 Obsidian 中创建和维护层级化的纯文本编号系统。它支持在任意深度生成如 `1.`、`1.1.`、`1.1.1.` 等格式，且每一级末尾强制保留句点。与标准 Markdown 有序列表不同，插件将数字前缀视为纯文本而非列表标记，并能在编辑时自动重算周围块，确保编号逻辑正确。

**适用场景**
适用于需要严格层级编号结构的文档，如技术文档、法律条款、详细大纲或任何要求编号格式统一且末尾带点的场景。特别适合那些 Markdown 原生有序列表无法完美满足嵌套格式需求的用户。

**核心特色**
1. **完整层级控制**：完全接管数字前缀，确保所有层级末尾均有句点，格式严谨统一。
2. **智能交互**：按 Enter 键在当前项有内容时创建同级下一项；若当前项仅有前缀（如 `1.3.`），按 Enter 可移除前缀并保留内容，操作流畅。
3. **原子性事务**：编号重算在单次可撤销的编辑器事务中完成，避免编辑状态混乱。

**使用建议**
建议用于需要长期维护且对编号格式有严格要求的笔记。注意该插件处理的是“文本编号”，不同于 Markdown 列表，因此导出为其他格式时需确认目标平台是否支持纯文本层级编号。适合喜欢手动控制结构而非依赖自动列表渲染的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


