---
uid: 1791709366357000
title: 'Obsidian 插件：Custom Folder Links'
tags: ['模板与链接处理', '文件管理', '编辑工具', 'obsidian插件']
description: 'Enables wikilinks pointing to folders, with custom settings to control how those links appear in the editor and what happens when one is clicked. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Custom Folder Links

> [!Note] 插件名片
> - 插件名称：Custom Folder Links
> - 插件作者：Ian Hays
> - 插件说明：Enables wikilinks pointing to folders, with custom settings to control how those links appear in the editor and what happens when one is clicked. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ianhays/obsidian-custom-folder-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?custom-folder-links)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ianhays/obsidian-custom-folder-links/master/README.md)



## 概述

**主要功能**
该插件为 Obsidian 添加了通过标准 `[[Wikilinks]]` 直接链接文件夹的能力。它拦截对文件夹的链接点击，防止 Obsidian 误将其视为“幽灵链接”并自动创建同名 Markdown 文件，同时优化了实时编辑器中文件夹链接的显示效果。

**适用场景**
适用于希望建立结构化笔记库、频繁需要引用特定目录或项目文件夹，且希望保持 Vault 整洁、避免产生大量隐藏辅助笔记的用户。

**核心特色**
1. **零侵入性**：无需为每个文件夹创建隐藏的代理笔记，也不依赖特殊语法，完全兼容原生 Wikilink 格式。
2. **安全无状态**：启用或禁用插件均不会修改 Vault 内容，且不保留会话状态，对现有笔记无副作用。
3. **智能冲突处理**：优先遵循 Obsidian 原生逻辑，仅接管原本无法解析的链接；若存在同名文件和文件夹，则保持原有行为，删除同名文件后自动指向文件夹。
4. **自动修复**：激活插件后，原本显示为未解析的文件夹链接将自动恢复正常解析。

**使用建议**
建议直接启用插件，无需额外配置即可享受文件夹链接功能。若遇到同名文件和文件夹冲突，建议删除冗余的同名文件以触发自动指向文件夹的行为。注意该插件尚未经过 Obsidian 官方人工审核，重要数据建议定期备份。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


