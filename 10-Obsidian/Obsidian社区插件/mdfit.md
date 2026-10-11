---
uid: 1791709368538000
title: 'Obsidian 插件：mdfit - Fit Any Markdown'
tags: ['自动化与AI', '文字处理', '编辑工具', 'obsidian插件']
description: 'Auto-convert pasted LLM output (ChatGPT / Claude / Gemini) into Obsidian-flavored Markdown: math delimiters, headings, citations, tables. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：mdfit - Fit Any Markdown

> [!Note] 插件名片
> - 插件名称：mdfit - Fit Any Markdown
> - 插件作者：che1sy
> - 插件说明：Auto-convert pasted LLM output (ChatGPT / Claude / Gemini) into Obsidian-flavored Markdown: math delimiters, headings, citations, tables. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/naloam/mdfit-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mdfit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/naloam/mdfit-obsidian-plugin/master/README.md)



## 概述

**1. 主要功能**
mdfit 是一款自动格式转换插件，能在粘贴时将 ChatGPT、Claude 等 LLM 的输出即时转换为 Obsidian 原生 Markdown。它自动修复数学公式定界符（如 `\(...\)` 转 `$...$`）、提升标题层级、剥离引用噪音（如 `【20†...】`），并将 HTML 表格、任务列表及 `**Note:**` 段落还原为标准 Markdown 和 Callout。

**2. 适用场景**
适用于频繁从 AI 对话窗口复制内容到 Obsidian 笔记的场景，特别是涉及复杂数学公式、代码块、表格或长文本整理的用户，可免去手动清理格式的步骤。

**3. 核心特色**
*   **即时转换**：粘贴即生效，无需手动触发。
*   **智能保护**：内置保护机制，确保代码块、行内代码和数学公式在转换过程中保持字节级一致，不被误改。
*   **细节优化**：自动处理 CJK 与拉丁字符间距、移除零宽字符及“Copy code”等冗余文本。

**4. 使用建议**
*   直接从社区插件目录搜索“mdfit”安装。
*   默认开启，粘贴内容（Ctrl+V）即可自动转换。
*   若需临时关闭，可使用命令“mdfit: Toggle paste conversion on/off”。
*   该插件未经 Obsidian 官方人工审核，建议从可信来源下载。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


