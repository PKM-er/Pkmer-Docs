---
uid: "1791709365306000"
title: "Obsidian 插件：Angle Guard"
tags: ['编辑工具', '文字处理', '效率工具', 'obsidian插件']
description: "Captures and wraps HTML tags in pasted text so they don't break the note's formatting. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Angle Guard

> [!Note] 插件名片
> - 插件名称：Angle Guard
> - 插件作者：Yuriy Vereshchagin
> - 插件说明：Captures and wraps HTML tags in pasted text so they don't break the note's formatting. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yuriy144/angle-guard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?angle-guard)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yuriy144/angle-guard/master/README.md)



## 概述

**主要功能**
Angle Guard 是一款粘贴防护插件。它在用户粘贴文本时，自动识别并包裹 HTML 标签（如 `<name>`），防止其被误读为 Markdown 标记，从而避免笔记排版错乱（如标题失效、列表丢失项目符号等）。

**适用场景**
适用于从网页、阅读视图或外部文档复制包含 HTML 标签或类似标签文本（如变量名、代码片段）到 Obsidian 笔记的场景。

**核心特色**
*   **智能识别**：自动将行内标签转为行内代码，独立行或连续 HTML 块转为代码块，保持字符内容不变。
*   **精准过滤**：自动忽略数学公式、Wiki 链接、自动链接、已转义文本及特定无害标签（如 `br`, `img` 等），避免误伤正常内容。
*   **无感保护**：仅处理粘贴动作，不改变源文本，确保笔记渲染正常。

**使用建议**
*   该插件主要解决“从渲染后的 HTML 预览复制”导致的标签丢失或格式破坏问题。
*   若从 Obsidian 内的代码块复制，文本本身即为纯文本，插件也会介入保护，确保粘贴后格式稳定。
*   建议开启默认忽略列表，以保持常用 HTML 标签（如 `br`）的正常功能，无需手动转义。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

