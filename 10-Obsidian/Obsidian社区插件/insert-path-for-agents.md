---
uid: 1791709367814000
title: 'Obsidian 插件：Insert Path for Agents'
tags: ['自动化与AI', '文件管理', '编辑工具', 'obsidian插件']
description: 'Insert the absolute filesystem path of the active note at the cursor so AI agents can open and read that file verbatim. Does not use the clipboard. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Insert Path for Agents

> [!Note] 插件名片
> - 插件名称：Insert Path for Agents
> - 插件作者：Dominik Bach
> - 插件说明：Insert the absolute filesystem path of the active note at the cursor so AI agents can open and read that file verbatim. Does not use the clipboard. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mit-bach/insert-path-for-agents)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?insert-path-for-agents)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mit-bach/insert-path-for-agents/master/README.md)



## 概述

**插件名称**：Insert Path for Agents

**主要功能**
该插件可在光标处直接插入当前笔记的绝对文件系统路径。它不经过剪贴板，而是将路径文本直接写入笔记中，确保AI代理能获取真实、准确的文件位置。

**适用场景**
适用于使用AI代理（如Grok、Claude、Cursor、Codex等）进行开发或文档处理的场景。当你在提示词（Prompt）笔记中需要引用特定文件时，通过该插件可快速提供文件路径，让LLM或子代理直接读取原始Markdown内容，避免模型对文件内容的误解或幻觉。

**核心特色**
1. **精准引用**：提供真实的绝对路径，而非相对路径或文件名称，确保AI能定位到具体文件。
2. **无剪贴板干扰**：直接插入文本，不占用剪贴板，保持工作流顺畅。
3. **高效操作**：支持自定义快捷键或命令面板调用，一键插入，提升提示词编写效率。
4. **桌面端专用**：基于`FileSystemAdapter`实现，仅适用于桌面版Obsidian。

**使用建议**
1. 启用插件后，务必在设置中绑定一个便捷的快捷键。
2. 在编写AI提示词时，若需引用当前笔记内容，直接按下快捷键即可插入路径。
3. 确保路径指向的文件在AI代理可访问的文件系统范围内，以便其成功读取。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


