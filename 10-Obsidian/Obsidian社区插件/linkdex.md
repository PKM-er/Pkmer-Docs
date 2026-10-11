---
uid: 1791709368060000
title: 'Obsidian 插件：LinkDex'
tags: ['模板与链接处理', '编辑工具', '自动化与AI', 'obsidian插件']
description: 'LinkDex — automatically wrap relevant terms in wiki-style links. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LinkDex

> [!Note] 插件名片
> - 插件名称：LinkDex
> - 插件作者：Kevin Bonnett
> - 插件说明：LinkDex — automatically wrap relevant terms in wiki-style links. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kbonn/obsidian-linkdex)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?linkdex)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kbonn/obsidian-linkdex/master/README.md)



## 概述

**主要功能**
LinkDex 是一款自动术语链接插件。它基于用户维护的索引文件（默认为 `_index.md`），自动扫描笔记，将匹配的关键术语包裹为 Wiki 风格链接（`[[...]]`），从而快速构建和维护术语表。

**适用场景**
适用于需要建立知识库、术语表或概念索引的用户，特别是希望减少手动添加链接操作、保持笔记间术语一致性的 Obsidian 用户。

**核心特色**
1. **智能匹配**：仅匹配完整单词，忽略大小写，优先匹配较长的多词术语。
2. **安全排除**：自动跳过已存在的链接、Markdown 链接及代码块，避免误操作。
3. **自动索引**：支持从库中建议新术语，并自动管理索引文件中的“Auto Indexed”部分，简化维护流程。
4. **灵活配置**：支持自定义索引文件路径及快捷键，兼容 Obsidian 1.13.0+。

**使用建议**
1. 在设置中关闭“受限模式”并安装启用插件。
2. 创建专用索引文件（如 `_index.md`），手动添加核心术语，注意 `//` 开头为注释。
3. 建议为“Link terms in active file”命令分配快捷键，以便在编辑时一键批量链接当前笔记中的术语。
4. 定期使用“Suggest index terms”功能补充新术语，保持索引的时效性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


