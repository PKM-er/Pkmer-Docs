---
uid: 1793625620213000
title: "Obsidian 插件：Precise Line Sync"
tags: ["编辑工具", "文字处理", "效率工具", "obsidian插件"]
description: "Align and sync two files line by line, most useful for translators. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Precise Line Sync

> [!Note] 插件名片
> - 插件名称：Precise Line Sync
> - 插件作者：Hamirdreza Zamanian
> - 插件说明：Align and sync two files line by line, most useful for translators. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zmn-hamid/Precise-Line-Sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?precise-line-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zmn-hamid/Precise-Line-Sync/master/README.md)



## 概述

Precise Line Sync 专为解决双栏笔记阅读时行对不齐的痛点而设计，核心功能是将两个水平相邻的 Markdown 实时预览面板中的逻辑行进行精确对齐。当左右两栏因文本换行或高度差异导致视觉错位时，插件会在较矮的一侧插入仅用于视图的空白占位符，确保第 1 行始终对应第 1 行，第 2 行对应第 2 行，从而维持阅读节奏的一致性。

对于从事翻译工作的用户，该插件能显著提升效率。例如，在左侧查看英文原文、右侧撰写中文译文时，即使某段英文因单词较长而换行，插件也能自动调整右侧空白，使译文始终紧跟在对应的原文下方。此外，在对照阅读双语教材或法律条文时，它能保证滚动同步，避免频繁手动调整窗口位置以寻找对应内容。

与普通的分屏插件不同，Precise Line Sync 专注于“逻辑行”而非物理像素的对齐，能够智能处理不同长度的文本换行问题。它仅在视图层添加装饰性间隙，绝不修改 Markdown 源文件，确保数据安全性。插件支持通过命令面板快速开关，并在状态栏实时显示同步状态，且在编辑、窗口缩放或面板替换后能自动重新计算对齐，适应性强。

需要注意的是，该插件仅支持桌面端的实时预览模式，不支持阅读视图、移动端或弹出窗口。其对齐机制基于源文件行号，若插入或删除行会导致后续所有对应关系偏移，因此不适合频繁增删行的场景。此外，表格、嵌入块、折叠章节及数学公式等会合并多行源内容的元素，可能无法保持精确的行对应，建议主要用于普通散文、标题及换行文本的对照阅读。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


