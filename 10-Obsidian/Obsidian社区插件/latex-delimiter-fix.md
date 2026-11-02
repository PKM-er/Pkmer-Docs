---
uid: 1793625614703000
title: "Obsidian 插件：LaTeX Delimiter Fix"
tags: ["编辑工具", "文字处理", "学术与科研", "obsidian插件"]
description: "Repair LaTeX math delimiters in existing notes, selections, and pasted text. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LaTeX Delimiter Fix

> [!Note] 插件名片
> - 插件名称：LaTeX Delimiter Fix
> - 插件作者：Atharva Savnerkar 
> - 插件说明：Repair LaTeX math delimiters in existing notes, selections, and pasted text. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ayush4265/latex-delimiter-fix)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-delimiter-fix)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ayush4265/latex-delimiter-fix/master/README.md)



## 概述

LaTeX Delimiter Fix 旨在解决 Obsidian 笔记中 LaTeX 数学公式无法正确渲染的问题。它通过扫描现有笔记、选中片段或粘贴内容，自动将旧式的 `\[ ... \]` 和 `\( ... \)` 分隔符转换为 Obsidian 标准的 `$$` 和 `$` 格式。此外，该插件还能智能处理数学公式中的百分比符号，自动转义数字后的 `%`，防止其被误认为注释符而导致公式闭合失败，从而确保数学表达式在编辑和阅读视图中均能正常显示。

典型使用场景包括修复从其他来源导入的旧笔记，或处理日常写作中的粘贴内容。例如，当你从网页复制包含 `\( x^2 \)` 的文本时，插件会在粘贴瞬间自动将其转换为 `$x^2$`，无需手动调整。另一个场景是批量修复整个笔记，只需点击侧边栏的 Sigma 图标或运行命令，插件即可扫描当前笔记，将嵌套列表或加粗文本中的行内公式统一修正，同时保留原有的 Markdown 结构。

相比同类工具，该插件具备更精细的上下文感知能力。它能准确识别嵌套列表、斜体及粗体中的数学表达式，并正确处理代码缩进，确保代码块内的内容不被误改。其“保守扫描”策略会严格保护围栏代码、YAML 属性、HTML 注释及 Wiki 链接，仅修改明确的数学分隔符。此外，插件提供针对阅读视图的“撤销上次修复”功能，允许用户在非编辑模式下安全地回退操作，且所有处理均在本地完成，不产生任何网络请求。

使用前需注意，该插件是源码扫描器而非完整的 TeX 解析器，无法修复语法错误的 TeX 代码或自动换行长公式。对于跨空行的显示公式、表格内的复杂公式或行内未闭合的表达式，插件可能会跳过处理。由于转换过程可能规范化表达式边缘的空格或列表前缀，建议操作后仔细检查变更。若你主要编写纯文本笔记，或需要处理极度复杂的非标准 LaTeX 结构，此插件可能无法满足需求，且其撤销功能仅保留单次会话内的最近一次修复记录，并非持久化备份。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


