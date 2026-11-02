---
uid: 1793625619879000
title: "Obsidian 插件：Pandoc Crossref Preview"
tags: ["学术与科研", "编辑工具", "界面优化", "obsidian插件"]
description: "Show equation numbering and figure references as numbers from Pandoc labels while you read a note. Select a number to open the source line of its target. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pandoc Crossref Preview

> [!Note] 插件名片
> - 插件名称：Pandoc Crossref Preview
> - 插件作者：theluckystrike
> - 插件说明：Show equation numbering and figure references as numbers from Pandoc labels while you read a note. Select a number to open the source line of its target. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '编辑工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/pandoc-crossref-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pandoc-crossref-preview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/pandoc-crossref-preview/master/README.md)



## 概述

Pandoc Crossref Preview 旨在解决 Obsidian 阅读视图中无法直接显示 Pandoc 标签对应编号的问题。它允许你在撰写笔记时，为图片和公式添加特定的 Pandoc 标签，并在阅读模式下自动将这些标签替换为可视化的“图 1”或“公式 1”等编号。核心功能包括独立的计数器、引用解析以及点击编号即可跳转至源文件对应行的导航能力，帮助你在不运行 Pandoc 的情况下直观检查文档结构。

典型场景适用于学术写作或技术文档的草稿阶段。例如，当你在一篇长文中引用了后文才出现的图表时，该插件能正确解析并显示编号，无需等待文档末尾。另一个例子是，当你需要快速定位某个公式在源码中的具体位置时，只需在阅读视图中点击该公式的编号，插件便会自动切换至编辑模式并高亮显示对应的 LaTeX 代码行，极大提升了校对效率。

与同类插件相比，其特色在于提供免费的“标签报告”功能，能列出所有已索引标签、缺失引用及重复定义，方便你在导出前排查错误。此外，它严格区分图片与公式的计数器，确保添加图片不会干扰公式编号。插件还支持在代码块或链接中保留原始引用语法，避免误解析，且不会修改笔记源文件，仅作为预览层存在。

使用前需注意，该插件仅支持简单的本地标签语法，不支持章节编号、表格、子图或跨笔记引用，因此不适合复杂的出版级排版需求。它不替代 pandoc-crossref，仅作为草稿检查工具。若需保存编号配置或生成本地 Markdown 报告，需使用 Pro 版本功能。此外，标签对大小写敏感，且修改标签后需重新打开阅读视图以刷新编号。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


