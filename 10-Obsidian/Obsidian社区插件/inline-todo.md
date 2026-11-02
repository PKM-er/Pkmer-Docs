---
uid: 1793625614261000
title: "Obsidian 插件：Inline Todo"
tags: ["任务管理", "编辑工具", "效率工具", "obsidian插件"]
description: "Inline todos anywhere in a line: []text/ and [x]text/. Multi-line content, native Markdown inside, click to toggle, source reveals on cursor, skipped in code, JS API for other plugins. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inline Todo

> [!Note] 插件名片
> - 插件名称：Inline Todo
> - 插件作者：冰块
> - 插件说明：Inline todos anywhere in a line: []text/ and [x]text/. Multi-line content, native Markdown inside, click to toggle, source reveals on cursor, skipped in code, JS API for other plugins. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/icecode825/inline-todo)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-todo)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/icecode825/inline-todo/master/README.md)



## 概述

Inline Todo 打破了 Obsidian 中待办事项必须位于列表项开头的限制，允许你在任意文本行内的任意位置插入可勾选的待办。通过简单的 `[]文字/` 和 `[x]文字/` 语法，你可以将待办嵌入段落中间或句子内部，实现更灵活的笔记排版。该插件不仅支持单行待办，还允许待办内容跨越同一段落内的多个软换行，直到遇到结束斜杠为止，极大地提升了非结构化笔记中任务管理的便捷性。

想象一下，你在撰写一篇长文或会议记录时，需要标记几个关键行动点。你可以直接在句子中间写下“记得[]提交报告/”，而不必打断行文去新建一个列表项。另一个典型场景是整理购物清单或日常琐事，你可以将多个短任务紧凑地排列在一行中，例如“买菜[]牛奶 /[]面包 /”，既节省垂直空间，又保持视觉上的连贯性，让笔记看起来更像一篇流畅的文章而非枯燥的列表。

相比其他待办插件，Inline Todo 的最大特色在于其对原生 Markdown 语法的完美兼容。待办内部的加粗、链接、代码等格式均按 Obsidian 原生规则渲染，插件仅负责绘制复选框和完成样式，互不干扰。此外，它提供了“标准任务横排”功能，允许你在保持源文件 100% 标准任务格式（兼容 Tasks、Dataview 等统计插件）的前提下，通过行尾加 `/` 将连续任务合并为一行显示，兼顾了数据兼容性与视觉紧凑性。

使用前需注意，该插件仅在实时预览和阅读模式下渲染，源码模式始终显示原始语法。行内代码块中的标记会被忽略，未闭合的 `[]` 也不会渲染，保证了安全性。然而，如果你依赖复杂的嵌套列表结构，或者需要待办事项跨越不同段落进行关联，此插件可能无法满足需求。此外，横排显示时的空行处理规则（N 个空行显示为 N-1 个）可能会影响你对文档间距的精确控制，建议根据实际排版需求谨慎使用横排功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


