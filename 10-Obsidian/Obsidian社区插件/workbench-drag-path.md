---
uid: 1791709366640000
title: 'Obsidian 插件：Drop as Path'
tags: ['文件管理', '效率工具', '编辑工具', 'obsidian插件']
description: 'Drag Obsidian file explorer items as terminal-friendly absolute paths. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Drop as Path

> [!Note] 插件名片
> - 插件名称：Drop as Path
> - 插件作者：IvyYang1999
> - 插件说明：Drag Obsidian file explorer items as terminal-friendly absolute paths. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ivyyang1999/obsidian-workbench-drag-path)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?workbench-drag-path)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ivyyang1999/obsidian-workbench-drag-path/master/README.md)



## 概述

**1. 主要功能**
Drop as Path 插件允许用户从 Obsidian 的文件资源管理器中直接拖拽笔记、附件或文件夹到终端，自动将其转换为终端可识别的绝对路径文本。它解决了 Obsidian 内部拖拽对象与终端不兼容的问题，支持多文件拖拽，并在拖拽失败时自动将路径复制到剪贴板作为备用。

**2. 适用场景**
适用于频繁在 Obsidian 与本地开发工具间切换的用户。特别适合使用 Terminal.app、iTerm2、Claude Code、Codex 等 AI 编程助手或 Shell 脚本的工作流，当你的 Obsidian 仓库同时作为项目笔记库或 AI 上下文库时，能极大提升效率。

**3. 核心特色**
- **无缝集成**：直接拖拽即得路径，无需手动复制粘贴。
- **灵活配置**：支持绝对路径或 Vault 相对路径，可选 Shell 引号包裹以处理含空格的文件名。
- **广泛兼容**：支持桌面端主流终端应用，兼容嵌入式及外部终端。
- **多文件支持**：支持批量拖拽，可选空格或换行符分隔。

**4. 使用建议**
建议开启“Shell 引号”选项，以防止路径中包含空格导致命令执行错误。若终端不支持文本拖拽，插件会自动复制路径，此时可直接粘贴使用。该插件仅支持桌面端，移动端用户需寻找替代方案。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


