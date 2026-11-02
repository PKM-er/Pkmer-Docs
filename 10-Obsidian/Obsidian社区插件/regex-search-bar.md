---
uid: 1793625620712001
title: "Obsidian 插件：Regex Search Bar"
tags: ["搜索与排序", "编辑工具", "效率工具", "obsidian插件"]
description: "Find matches in the current note using a regex or plain-text pattern, with live highlighting, next/previous navigation, and select-all-to-edit. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Regex Search Bar

> [!Note] 插件名片
> - 插件名称：Regex Search Bar
> - 插件作者：Patrick Stephens
> - 插件说明：Find matches in the current note using a regex or plain-text pattern, with live highlighting, next/previous navigation, and select-all-to-edit. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/patrick-stephens-git/regex-search-bar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?regex-search-bar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/patrick-stephens-git/regex-search-bar/master/README.md)



## 概述

Regex Search Bar 为当前笔记提供基于正则表达式或纯文本的实时搜索功能。它能在你输入时即时高亮所有匹配项，并支持通过快捷键在匹配项之间快速跳转。除了查找，该插件还具备批量编辑能力，允许你一次性选中所有匹配内容，输入新文本即可同时替换多处，极大提升了处理重复文本的效率。

典型场景包括批量修改文档中的日期格式或统一术语拼写。例如，当你需要将笔记中所有“colour”统一改为“color”时，开启正则模式输入 `colou?r`，即可同时匹配两种拼写；随后使用“全选”功能，直接输入“color”即可一次性完成所有替换。另一个例子是快速定位所有以特定符号开头的行，如使用 `^# ` 查找所有一级标题，方便快速浏览文档结构。

相比 Obsidian 内置的全库搜索，该插件专注于当前笔记的精细操作，且默认启用正则模式，无需额外配置即可使用高级匹配规则。其特色在于“边搜边改”的流畅体验：搜索栏常驻顶部，匹配计数实时显示，且若输入无效正则会自动回退为纯文本匹配并提示错误，降低了使用门槛。此外，它支持不区分大小写搜索，进一步简化了日常查找操作。

需要注意的是，该插件仅支持桌面端（macOS、Windows、Linux），移动端不可用。它仅作用于当前打开的笔记，无法跨文件搜索，因此不适合需要全库检索的场景。另外，默认未绑定快捷键，建议手动将 `Cmd/Ctrl+F` 分配给该插件以替代内置搜索，避免冲突。若你主要依赖移动端或需要跨笔记搜索，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


