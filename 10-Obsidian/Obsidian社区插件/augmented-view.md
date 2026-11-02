---
uid: 1793625606400000
title: "Obsidian 插件：Augmented View"
tags: ["自动化与AI", "样式与美化", "文字处理", "obsidian插件"]
description: "Colour each sentence of a note by the role it plays using machine intelligence. The note itself is never changed. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Augmented View

> [!Note] 插件名片
> - 插件名称：Augmented View
> - 插件作者：megatron
> - 插件说明：Colour each sentence of a note by the role it plays using machine intelligence. The note itself is never changed. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '样式与美化', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gameboard-dev/obsidian-augmented-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?augmented-view)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gameboard-dev/obsidian-augmented-view/master/README.md)



## 概述

Augmented View 利用本地运行的机器智能模型，为笔记中的句子和关键短语自动着色，以辅助快速浏览。它根据文本在段落中扮演的角色（如论点、发现、局限性或路标）分配颜色，并高亮术语、定义、引用和方法等关键短语。这种视觉增强直接叠加在文本之上，不会修改笔记原始内容，支持在实时预览、源码模式和阅读视图中使用，让你无需通读全文即可快速把握文章结构。

典型场景包括快速审阅学术文献或研究笔记。例如，当你阅读一篇论文时，插件可以将“方法”部分标记为一种颜色，“结果”标记为另一种，而“局限性”则用醒目的颜色标出，帮助你迅速定位核心信息。另一个场景是整理个人知识库，通过自定义颜色代码，你可以将“待办事项”或“重要结论”高亮显示，从而在大量笔记中更高效地检索关键内容。

与依赖云端 API 的同类插件不同，Augmented View 完全在本地运行，确保数据隐私且无需联网。它提供可编辑的“颜色代码”，允许用户自定义颜色含义，并支持通过规则强制或禁止特定颜色，优先级高于模型判断。此外，插件具备灵敏度滑块，让用户在“仅显示最确定的颜色”和“显示所有发现”之间灵活调整，且结果按段落缓存，未变更的内容不会重复计算，兼顾了速度与准确性。

使用前需注意，该插件需要下载约 8.5 GB 的模型文件，并推荐配备拥有 4 GB 空闲显存的 NVIDIA GPU 以获得最佳性能；若无 GPU，CPU 运行速度会显著变慢且占用约 5 GB 内存。它仅支持桌面版 Obsidian，移动端无法启动服务器。如果你不需要复杂的语义分析，或硬件资源有限，此插件可能显得过于沉重；它不适合需要实时协作或依赖云端大模型处理超长文档的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


