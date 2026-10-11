---
uid: 1791709367977000
title: 'Obsidian 插件：Latex Paste Cleaner'
tags: ['编辑工具', '文字处理', '效率工具', 'obsidian插件']
description: 'Automatically cleans up LaTeX formulas pasted from web pages or AI chats, preserving text formatting. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Latex Paste Cleaner

> [!Note] 插件名片
> - 插件名称：Latex Paste Cleaner
> - 插件作者：ren yi
> - 插件说明：Automatically cleans up LaTeX formulas pasted from web pages or AI chats, preserving text formatting. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zych2023/latex-paste-cleaner)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-paste-cleaner)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zych2023/latex-paste-cleaner/master/README.md)



## 概述

**1. 主要功能**
自动清理从网页或AI对话粘贴的LaTeX公式，修复断裂语法（如 `\( ... \)` 转 `$...$`）、双重转义、HTML实体及Unicode数学符号，同时保留普通文本格式。

**2. 适用场景**
适用于频繁从外部来源（网页、AI助手）复制数学内容到Obsidian笔记的场景，解决粘贴后公式显示错误、格式混乱的问题。

**3. 核心特色**
- **智能拦截**：仅处理含LaTeX信号的内容，纯文本和代码不受影响。
- **精准修复**：默认“HTML手术模式”仅替换公式节点，保留周围加粗、列表等格式；支持“纯文本模式”。
- **安全转换**：仅在数学区域内转换Unicode符号，避免误改普通文本。
- **批量修复**：提供“清理当前笔记”命令，可修复已存在的错误笔记。
- **双语支持**：界面支持中英文切换。

**4. 使用建议**
目前需手动安装：下载Release中的 `main.js` 和 `manifest.json`，放入 `.obsidian/plugins/latex-paste-cleaner/` 文件夹后重启Obsidian。建议默认使用“HTML手术模式”以保留格式，若遇复杂格式问题可切换至“纯文本模式”确保稳定性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


