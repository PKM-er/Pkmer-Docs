---
uid: 1793625617106000
title: "Obsidian 插件：MyST Reader"
tags: ["文字处理", "学术与科研", "样式与美化", "obsidian插件"]
description: "Render MyST Markdown admonitions, math, figures, roles, and nested directives directly in your notes while preserving source files. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MyST Reader

> [!Note] 插件名片
> - 插件名称：MyST Reader
> - 插件作者：YOAV PALTI
> - 插件说明：Render MyST Markdown admonitions, math, figures, roles, and nested directives directly in your notes while preserving source files. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '学术与科研', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yoav-palti/myst-reader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?myst-reader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yoav-palti/myst-reader/master/README.md)



## 概述

MyST Reader 允许在 Obsidian 笔记中直接渲染 MyST Markdown 的指令、数学公式、图表及嵌套结构，同时保持源文件不变。它专为技术笔记、方程和多语言课程材料设计，支持希伯来语等语言。插件在“阅读视图”和“实时预览”中自动解析支持的 MyST 块，无需额外面板或命令，让你能在 Obsidian 中直接查看 Jupyter Book 或 Sphinx 风格的文档内容，而无需切换工具。

典型场景包括编写包含复杂公式的技术文档或课程讲义。例如，你可以使用 `admonition` 指令创建带有提示类的提示框，并在其中嵌入 LaTeX 数学公式，插件会将其渲染为原生的提示调用块。另一个例子是使用嵌套的 `note` 和 `warning` 指令来组织多层级的注意事项，在实时预览中，当光标移出这些块时，它们会显示为预览效果，移入时则显示源码以便编辑。

与同类插件相比，MyST Reader 的特色在于其对 MyST 子集的支持以及对交互式 HTML 的处理。它支持 `raw` HTML 指令，允许加载本地 HTML 文件并在隔离的 iframe 中运行脚本，甚至自动注入 MathJax 以支持数学渲染。此外，它支持多种内联角色如 `{math}`、`{code}` 和 `{ref}`，以及本地锚点链接。插件不执行代码块，仅用于展示，确保了安全性。

使用前需注意，该插件仅支持 MyST 的文档化子集，并非完整的 MyST 解析器或 Jupyter/Sphinx 运行时。它不支持跨文档标签索引、自动编号、Sphinx 域、网格布局以及嵌套超过 32 层的指令。对于需要完整构建书籍或复杂 Sphinx 功能的用户，建议仍使用原有工具链。此外，虽然插件不写入笔记或收集遥测数据，但嵌入的 HTML 脚本可能访问外部网络，因此仅应嵌入可信的 HTML 内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


