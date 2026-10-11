---
uid: "1791709370644000"
title: "Obsidian 插件：Unified Tag Links"
tags: ['模板与链接处理', '导航与状态栏', '效率工具', 'obsidian插件']
description: "Links every note carrying a promoted tag to that tag's concept note, through a managed tag_links property. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Unified Tag Links

> [!Note] 插件名片
> - 插件名称：Unified Tag Links
> - 插件作者：Issac Roy
> - 插件说明：Links every note carrying a promoted tag to that tag's concept note, through a managed tag_links property. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theboyroy05/Obsidian-Unified-Tag-Links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?unified-tag-links)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theboyroy05/Obsidian-Unified-Tag-Links/master/README.md)



## 概述

**1. 主要功能**
该插件实现了标签（Tags）与笔记（Notes）的双向同步。当笔记包含特定标签时，插件会自动在笔记的 frontmatter 中生成 `tag_links` 属性，将其链接到对应的“概念笔记”。这解决了标签无法在关系图中可视化、而普通笔记难以处理子标签引用的痛点。

**2. 适用场景**
适用于希望同时利用标签的层级引用优势（如 `#Obsidian/Graph`）和笔记的图谱可视化优势（如 `[[Obsidian]]`）的知识管理者。特别适合构建结构化知识体系，需要清晰展示概念间关联的用户。

**3. 核心特色**
- **自动同步**：无需手动维护，插件自动创建、更新和删除链接。
- **子标签支持**：支持嵌套标签匹配，`#Parent/Child` 会自动链接到父级概念笔记，除非子标签有独立的概念笔记。
- **概念笔记机制**：通过将标签添加至笔记的 `aliases` 字段来定义概念笔记，逻辑清晰。
- **延迟写入**：编辑停止约2秒后自动保存，避免干扰实时编辑体验。

**4. 使用建议**
- **提升标签**：在编辑器中右键点击标签选择“Promote”，可快速将标签转化为概念笔记并自动关联所有相关笔记。
- **降级处理**：若不再需要概念笔记，可通过命令面板运行“Demote”移除别名及链接，但保留笔记本身。
- **定期同步**：插件启动时会自动全量同步，也可随时手动运行“Resync all notes”以确保数据一致性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

