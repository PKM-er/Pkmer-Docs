---
uid: 1791709370019000
title: 'Obsidian 插件：Skill Symlinks'
tags: ['文件管理', '第三方工具集成', '自动化与AI', 'obsidian插件']
description: 'Keep agent skills in your vault and link them into Claude Code, Codex, Cursor and other agent skill folders. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Skill Symlinks

> [!Note] 插件名片
> - 插件名称：Skill Symlinks
> - 插件作者：nikled
> - 插件说明：Keep agent skills in your vault and link them into Claude Code, Codex, Cursor and other agent skill folders. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/v-samodelkin/obsidian-skill-symlinks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?skill-symlinks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/v-samodelkin/obsidian-skill-symlinks/master/README.md)



## 概述

**插件名称**：Skill Symlinks

**主要功能**
该插件允许用户在 Obsidian 库中集中管理 AI 代理（Agent）的技能文件，并自动通过符号链接（Symlinks）将其同步到 Claude Code、Codex、Cursor 等代理指定的技能目录（如 `~/.claude/skills`）。

**适用场景**
适用于同时使用多个 AI 编程助手，且希望统一维护、复用同一套提示词或技能配置（Skills）的高级用户。特别适合需要在不同代理间共享标准化工作流（如 TDD、代码审查）的场景。

**核心特色**
1. **实时同步**：在 Obsidian 中编辑、重命名或删除技能后，链接会在秒级内自动更新，所有关联代理即时生效。
2. **灵活分组**：支持通过文件夹层级结构定义技能组，并可针对不同组指定链接到特定的代理目录。
3. **安全机制**：仅在库内操作，对外部目录仅创建/删除指向库内的符号链接，不移动或删除其他文件，且支持预演变更。

**使用建议**
安装后默认同步关闭，建议先在设置中开启同步并预览将要创建的链接。注意不同代理读取的目录不同（如 Claude 仅读 `~/.claude`，Cursor 可能读多个），避免重复链接导致技能列表重复显示。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


