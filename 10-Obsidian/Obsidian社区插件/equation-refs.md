---
uid: 1793625612609000
title: "Obsidian 插件：Equation Refs"
tags: ["学术与科研", "文字处理", "模板与链接处理", "obsidian插件"]
description: "Number display equations only when they are linked, and show those links as equation numbers in reading view, live preview, and PDF export. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Equation Refs

> [!Note] 插件名片
> - 插件名称：Equation Refs
> - 插件作者：dingzy53
> - 插件说明：Number display equations only when they are linked, and show those links as equation numbers in reading view, live preview, and PDF export. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '文字处理', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dingzy53/equation-refs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?equation-refs)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dingzy53/equation-refs/master/README.md)



## 概述

Equation Refs 为 Obsidian 中的数学公式提供智能编号与引用功能，其核心逻辑是“按需显示”。只有当你通过链接引用某个公式时，该公式才会显示编号，未引用的公式则保持无编号状态。这种机制模仿了 LaTeX 的 `\eqref` 行为，让文档中的公式编号始终紧凑且相关，避免了传统自动编号中大量无关公式占据编号空间的冗余问题。

典型使用场景包括撰写技术文档或论文时，需要在正文中频繁引用特定公式。例如，你可以为高斯定律公式添加块 ID，然后在后文通过 `[[#^gauss]]` 进行引用，阅读视图会自动将其渲染为“By (1)”。若引用其他笔记中的公式，如 `[[Maxwell#^gauss]]`，则会显示为“See Maxwell (1)”。这种引用方式不仅清晰，还支持别名链接，保持原文可读性。

相比同类插件，Equation Refs 的最大特色在于完全依赖 Obsidian 原生的块链接语法，无需引入新的 LaTeX 标签或修改笔记内容。它没有运行时依赖，不强制安装 MathLinks 等辅助插件，且编号通过 CSS 绘制，避免了 MathJax 在输入或滚动时的重渲染卡顿。此外，它尊重 `\tag` 和 `\notag` 指令，允许用户手动控制特定公式的编号逻辑。

需要注意的是，该插件仅对顶层 `$$` 块生效，Callout、引用块或列表内的公式不会被编号。编号在每个笔记内独立重置，不支持跨笔记的连续编号或章节前缀。如果你需要复杂的跨文档连续编号，或者依赖 Canvas 文件中的链接计数，此插件可能无法满足需求。此外，它不处理 `align` 环境中的逐行编号，需手动使用 `\tag` 替代。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


