---
uid: 1793625612608001
title: "Obsidian 插件：Equation Ordinal"
tags: ["学术与科研", "编辑工具", "效率工具", "obsidian插件"]
description: "Automatic equation numbering and cross-references for display math. Write \\label and \\ref, get numbered tags at render time — the note itself stays standard LaTeX. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Equation Ordinal

> [!Note] 插件名片
> - 插件名称：Equation Ordinal
> - 插件作者：junzi-ana
> - 插件说明：Automatic equation numbering and cross-references for display math. Write \label and \ref, get numbered tags at render time — the note itself stays standard LaTeX. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/junzi-ana/equation-ordinal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?equation-ordinal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/junzi-ana/equation-ordinal/master/README.md)



## 概述

Equation Ordinal 专为解决 Obsidian 中行间公式手动编号繁琐且易错的问题而设计。它允许你在标准的 LaTeX 语法中直接使用 `\label` 和 `\ref`，插件会在渲染时自动计算编号并生成带括号的交叉引用。核心优势在于“无侵入性”：所有编号逻辑仅在显示层生效，笔记文件本身保持纯净，不会混入任何自动生成的 `\tag` 代码，确保你的源码始终符合标准 LaTeX 规范，可直接用于论文导出。

典型场景包括撰写包含大量推导过程的数学笔记或技术文档。例如，当你定义了一个关键方程并打上标签后，在后续段落中只需引用该标签，即可自动显示对应的编号；若你在中间插入新公式，后续所有引用会自动更新，无需手动调整。此外，它支持类似 `5.1.10` 的层级编号，方便在长篇文档中按章节管理公式序列，让引用关系清晰且始终同步。

相比其他依赖手动输入 `\tag` 或简单脚本的方案，Equation Ordinal 的特色在于其智能的计数器机制和严格的错误反馈。它支持通过 `[N]` 参数重置计数器以适配章节编号，且当出现标签重复或引用错误时，会在公式处直接显示错误码而非静默失败，帮助快速定位问题。这种设计避免了因一处笔误导致后续所有编号错位的风险，提升了维护大型数学笔记的稳定性。

需要注意的是，该插件仅支持单篇笔记内的引用，不支持跨文件引用；在多窗口分屏时，非活动窗口的编号可能暂时不准确。此外，它仅处理行间公式，行内公式无法使用 `\label`。如果你需要复杂的跨文档引用功能，或希望插件直接修改文件内容以生成静态编号，此插件可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


