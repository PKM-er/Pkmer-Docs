---
uid: 1793625620227001
title: "Obsidian 插件：Pretty Punctuation"
tags: ["样式与美化", "文字处理", "界面优化", "obsidian插件"]
description: "Displays curly quotes, dashes, ellipses, and arrows without changing the file. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pretty Punctuation

> [!Note] 插件名片
> - 插件名称：Pretty Punctuation
> - 插件作者：Philip Linden
> - 插件说明：Displays curly quotes, dashes, ellipses, and arrows without changing the file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '文字处理', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/philiplinden/obsidian-pretty-punctuation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pretty-punctuation)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/philiplinden/obsidian-pretty-punctuation/master/README.md)



## 概述

Pretty Punctuation 旨在解决 Markdown 纯文本符号与美观排版之间的冲突。它通过实时渲染，将文件中输入的直引号、短横线、省略号及箭头等字符，在界面上显示为对应的弯引号、破折号、省略号及数学箭头。核心优势在于“只改显示，不改文件”，确保底层数据始终保持为标准的 ASCII 字符，从而维护了 Markdown 文件的纯文本规范，避免了因自动替换字符而导致的搜索失效或格式混乱问题。

典型使用场景包括撰写技术文档或学术笔记时，希望界面呈现专业的排版效果，但底层文件需保持简洁以便版本控制或跨平台同步。例如，在输入 `--` 时，编辑器即时显示为短破折号 `–`，而文件内容仍保留 `--`；或者在编写代码注释或数学公式时，使用 `->` 快速输入，界面自动渲染为箭头 `→`，既提升了阅读体验，又无需手动插入特殊 Unicode 字符。

与 Smart Typography 等同类插件相比，Pretty Punctuation 的最大特色是非侵入性。其他插件通常在输入时直接重写文件内容，这会破坏纯文本约定并影响后续处理。本插件仅在视图层进行转换，且智能识别上下文，自动跳过代码块、内联代码、Frontmatter、链接、URL、HTML、数学公式、注释、标签及表格分隔行，确保这些技术区域的内容不被误改，保持了代码和元数据的原始状态。

使用前需注意，引号方向基于前一个字符进行推测，因此行首的撇号（如 `'90s`）可能显示方向错误；在实时预览模式下，跨行的引号可能因逐行处理而出现方向偏差。此外，跳过代码和链接的逻辑依赖 Obsidian 内部语法名称及模式匹配，极端或非标准的写法可能会漏过检测。因此，它不适合对底层文件字符有严格自动化处理需求，或依赖特定 Unicode 字符进行数据解析的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


