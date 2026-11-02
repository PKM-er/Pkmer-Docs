---
uid: 1793625614714001
title: "Obsidian 插件：LaTeX References"
tags: ["学术与科研", "文字处理", "编辑工具", "obsidian插件"]
description: "Render and navigate portable LaTeX labels, references, figures, and BibTeX citations in Markdown. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LaTeX References

> [!Note] 插件名片
> - 插件名称：LaTeX References
> - 插件作者：jared cui
> - 插件说明：Render and navigate portable LaTeX labels, references, figures, and BibTeX citations in Markdown. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '文字处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dignity-ghost/latex_references)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-references)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dignity-ghost/latex_references/master/README.md)



## 概述

LaTeX References 让 Obsidian 用户无需修改 Markdown 源码，即可直接渲染和导航标准的 LaTeX 标签、引用及 BibTeX 文献。它保留了 `\label`、`\ref`、`\eqref` 和 `\cite` 等命令的原始文本，确保笔记内容具备高度可移植性，未来可无缝迁移至真正的 LaTeX 项目。插件在实时预览和阅读视图中将命令转化为可点击的链接，同时在源码模式下保持命令可见且可编辑，实现了“所见即所得”与“源码纯净”的平衡。

典型场景包括撰写长篇技术文档或学术论文。例如，当你在笔记中定义了一个带标签的公式环境，后续通过 `\eqref` 引用时，插件会自动生成带括号的公式编号链接，点击即可跳转至对应位置。若需引用外部文献，只需在库中维护 `.bib` 文件，使用 `\cite` 命令即可生成数字引用，点击后能直接打开对应的文献笔记或 BibTeX 条目，极大提升了文献管理的效率。

相比其他数学插件，其核心特色在于对标准 LaTeX 语法的严格遵循与零侵入性。它不依赖外部程序、网络请求或遥测数据，完全在本地库内运行，支持 Windows、macOS、Linux 及移动端。插件能自动识别库内的 `.bib` 文件，并在输入时提供标签和引用键的自动补全。此外，它具备强大的校验能力，能实时报告未解析的引用、缺失的文献键、无效标签及重复标签，帮助用户在写作过程中即时发现并修复结构错误。

使用前需注意，该插件主要服务于需要标准 LaTeX 工作流的用户，不适合仅追求简单数学公式渲染的场景。它不实现完整的 BibTeX 样式引擎，引用格式为轻量级数字样式；图形预览仅支持库内本地文件，不处理复杂的 LaTeX 布局选项。此外，Obsidian 原生的图谱视图和反向链接面板无法解析这些 LaTeX 命令，导航需通过插件生成的渲染链接完成。若笔记中不含相关命令，插件处于无操作状态，不影响普通 Markdown 行为。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


