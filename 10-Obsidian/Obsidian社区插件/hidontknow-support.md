---
uid: 1793625613730000
title: "Obsidian 插件：Hidontknow Support"
tags: ["样式与美化", "界面优化", "编辑工具", "obsidian插件"]
description: "Companion for the Hidontknow theme: makes Live Preview match Reading view for lists in quotes, code blocks in lists, footnotes, %% comments, ordered list numbering and code highlighting. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hidontknow Support

> [!Note] 插件名片
> - 插件名称：Hidontknow Support
> - 插件作者：hidontknow
> - 插件说明：Companion for the Hidontknow theme: makes Live Preview match Reading view for lists in quotes, code blocks in lists, footnotes, %% comments, ordered list numbering and code highlighting. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hidontknow/obsidian-theme-hidontknow-support)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hidontknow-support)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hidontknow/obsidian-theme-hidontknow-support/master/README.md)



## 概述

Hidontknow Support 专为 Hidontknow 主题设计，旨在解决 Obsidian 实时预览模式下与阅读视图在排版细节上的差异。它通过 JavaScript 逻辑弥补纯 CSS 无法处理的 Markdown 解析问题，确保列表、代码块、脚注及注释在编辑时呈现出与阅读模式完全一致的视觉效果，同时保持源码模式不受影响。

典型场景包括在引用块中编辑列表，插件会自动将纯文本标记转换为带间距的项目符号或复选框，并支持嵌套结构；或者在列表内编写代码块时，插件会将整个代码框缩进至列表文本对齐，避免代码块左边缘突兀。此外，它还能将脚注引用渲染为上标，并在文末生成带有分隔线和返回链接的脚注区域，让编辑体验更接近最终阅读效果。

相比其他仅调整样式的插件，该插件具备动态重编号能力。当你在有序列表中修改数字或改变列表层级时，插件会实时重写源码中的数字以匹配显示效果，例如输入 `7.` 会自动修正为 `3.`，且支持撤销操作。它还能区分 `-`、`*`、`+` 等不同列表标记的样式，并精确控制换行对齐，确保多行任务项的后续行与首行文字严格对齐，细节还原度极高。

需要注意的是，该插件深度绑定 Hidontknow 主题，搭配其他主题可能导致间距不匹配。对于极长笔记或包含数百行代码的文件，由于每次修改都会重新扫描全文，可能会感到轻微延迟。此外，它不处理笔记中间定义的脚注位置移动，也不支持 Prism 未收录语言的代码高亮，因此不适合追求极致性能或混合使用多种主题的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


