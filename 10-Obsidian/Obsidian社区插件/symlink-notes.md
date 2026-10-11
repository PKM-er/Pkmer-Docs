---
uid: 1791709370188000
title: 'Obsidian 插件：Symlink Notes'
tags: ['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Create portable Markdown shortcuts that open their target notes and follow target renames. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Symlink Notes

> [!Note] 插件名片
> - 插件名称：Symlink Notes
> - 插件作者：deadhedd
> - 插件说明：Create portable Markdown shortcuts that open their target notes and follow target renames. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/deadhedd/symlink-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?symlink-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/deadhedd/symlink-notes/master/README.md)



## 概述

**Symlink Notes** 是一款为 Obsidian 桌面及移动端设计的“便携式 Markdown 快捷方式”插件。

1. **主要功能**：在笔记间创建基于 YAML 属性的软链接（Symlink）。打开快捷方式时，直接在当前标签页跳转至目标笔记，且目标笔记重命名或移动时，快捷方式会自动更新指向。
2. **适用场景**：适用于需要跨文件夹引用同一内容、避免内容重复复制，或希望保持笔记结构扁平但逻辑关联紧密的知识库管理场景。
3. **核心特色**：
   - **纯 Markdown 兼容**：快捷方式本质是普通笔记，禁用插件后仍可读，不依赖文件系统符号链接。
   - **单一数据源**：不复制内容，目标笔记为唯一权威副本。
   - **智能解析**：支持链接链解析（最多20次重定向），具备循环检测机制，错误时保留原文件以便修复。
4. **使用建议**：通过命令面板运行“Create symlink to active note”创建快捷方式；确保插件处于启用状态以实现目标移动时的自动路径更新；注意路径需为有效 Markdown 文件，避免创建过深的链接链。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


