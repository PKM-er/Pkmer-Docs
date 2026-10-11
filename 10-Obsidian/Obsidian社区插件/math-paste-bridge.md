---
uid: 1791709368513000
title: 'Obsidian 插件：Math Paste Bridge'
tags: ['编辑工具', '文字处理', '学术与科研', 'obsidian插件']
description: 'Convert pasted LaTeX delimiters and recover exact math source from rich text while preserving Markdown formatting. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Math Paste Bridge

> [!Note] 插件名片
> - 插件名称：Math Paste Bridge
> - 插件作者：hlyang1992
> - 插件说明：Convert pasted LaTeX delimiters and recover exact math source from rich text while preserving Markdown formatting. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hlyang1992/math-paste-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?math-paste-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hlyang1992/math-paste-bridge/master/README.md)



## 概述

**主要功能**
Math Paste Bridge 是一款自动转换数学公式的 Obsidian 插件。它能将粘贴内容中的 LaTeX 定界符（如 `\(...\)` 或 `\[...\]`）及裸露的 TeX 代码，实时转换为 Obsidian 原生支持的 `$...$` 或 `$$...$$` 格式，同时保留原有的 Markdown 格式。

**适用场景**
适用于从 ChatGPT、Codex 或其他 AI 助手、网页复制包含数学公式的内容时，直接粘贴到 Obsidian 笔记中，无需手动调整格式。

**核心特色**
1. **无感操作**：无热键、命令或设置项，粘贴即自动转换，不干扰正常粘贴流程。
2. **智能识别**：不仅处理标准定界符，还能识别文中裸露的 TeX 命令（如 `\tau_t`）及无反斜杠的代数表达式，并正确包裹数学符号。
3. **精准安全**：仅处理新粘贴的内容，不扫描或修改已有笔记；若未检测到公式，则执行标准粘贴行为。

**使用建议**
安装启用后，直接像往常一样粘贴包含公式的内容即可。建议从官方社区插件页或 GitHub Release 下载 `main.js` 和 `manifest.json` 至插件目录，确保使用编译后的构建文件而非源码。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


