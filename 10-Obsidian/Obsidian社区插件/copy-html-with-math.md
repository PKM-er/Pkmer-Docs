---
uid: 1791709366250000
title: 'Obsidian 插件：Copy as HTML with Math'
tags: ['编辑工具', '文字处理', '效率工具', '第三方工具集成', 'obsidian插件']
description: 'Copy notes or selections to clipboard as HTML with math formulas rendered as MathML/KaTeX for Microsoft Word, Google Docs, Anki, and Web. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Copy as HTML with Math

> [!Note] 插件名片
> - 插件名称：Copy as HTML with Math
> - 插件作者：nani-31
> - 插件说明：Copy notes or selections to clipboard as HTML with math formulas rendered as MathML/KaTeX for Microsoft Word, Google Docs, Anki, and Web. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nani-31/obsidian-copy-html-with-math)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copy-html-with-math)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nani-31/obsidian-copy-html-with-math/master/README.md)



## 概述

**1. 主要功能**
该插件将笔记或选区复制为富文本 HTML，并将数学公式自动渲染为 MathML 或 KaTeX 格式。同时支持智能粘贴（Ctrl+V），自动清理从 ChatGPT、网页等来源粘贴时的重复文本，并将公式转换为标准的 Obsidian LaTeX 语法。

**2. 适用场景**
适用于需要频繁在 Obsidian 与 Microsoft Word、Google Docs、Anki、Gmail 或博客之间交换含公式内容的用户，特别是处理 AI 生成内容或网络资料时。

**3. 核心特色**
*   **原生公式兼容**：MathML 格式可直接在 Word 中转为可编辑的原生方程，解决普通复制保留原始 LaTeX 代码的痛点。
*   **智能清洗**：拦截粘贴操作，自动去除 KaTeX/HTML 双层结构导致的冗余字符，并智能识别行内与块级公式，统一包裹为 `$...$` 或 `$$...$$`。
*   **多端支持**：兼容 Apple Pages、LibreOffice 及主流浏览器环境。

**4. 使用建议**
在 Word 中粘贴时，建议优先选择 MathML 模式以获得最佳编辑体验；从 AI 对话窗口复制内容时，直接粘贴即可触发自动格式化，无需手动修正公式语法。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


