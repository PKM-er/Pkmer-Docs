---
uid: 1793625612533001
title: "Obsidian 插件：Embedded Text Finder"
tags: ["搜索与排序", "效率工具", "文字处理", "obsidian插件"]
description: "Find containing notes by text in their Markdown embeds. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Embedded Text Finder

> [!Note] 插件名片
> - 插件名称：Embedded Text Finder
> - 插件作者：theluckystrike
> - 插件说明：Find containing notes by text in their Markdown embeds. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '效率工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/embedded-text-finder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?embedded-text-finder)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/embedded-text-finder/master/README.md)



## 概述

Embedded Text Finder 专为解决 Obsidian 中“嵌入内容无法被常规搜索命中”的痛点而设计。它不仅能检索笔记正文，还能深入解析 Markdown 嵌入链接，定位包含特定文本的笔记及其原始来源。无论是直接嵌入的整篇笔记，还是仅引用了特定标题或代码块的片段，该插件都能精准追踪，并在结果中同时展示容器笔记与源文件路径，让你快速厘清文本归属。

想象一下，你的每日回顾笔记中嵌入了一篇鸟类观察记录，你只想找到提到“蓝鸟”的那篇回顾。常规搜索只会显示观察记录本身，而 Embedded Text Finder 会直接指出是哪篇回顾包含了该嵌入，并高亮显示匹配片段。此外，如果你正在编辑一篇包含大量嵌入的月度总结，还可以使用“仅搜索当前笔记及其嵌入”功能，快速定位当前打开笔记中引用的具体内容，无需在庞大的库中盲目翻找。

相比同类插件，其核心优势在于对嵌套嵌入的深度解析能力。它支持追踪两层嵌套关系，即容器笔记嵌入中转笔记，中转笔记再嵌入最终源文件，并能准确报告深度限制。同时，它严格区分标题嵌入与块嵌入，确保搜索结果仅对应指定的章节或代码块，而非整个文件。对于高级用户，Pro 版本还提供了预设保存、本地增量索引加速搜索以及将结果导出为 Markdown 笔记的功能，极大提升了重复性检索的效率。

需要注意的是，该插件仅处理静态 Markdown 文本，不支持 Dataview 动态输出、HTML 渲染、PDF 内容或 Canvas 画布中的文本。搜索是区分大小写的，且方括号和星号被视为普通字符而非正则表达式。如果你依赖复杂的动态查询或需要搜索非 Markdown 格式的文件，此插件可能无法满足需求。此外，虽然基础功能免费，但预设和导出等高级特性需订阅 Pro 服务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


