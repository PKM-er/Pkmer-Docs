---
uid: 1793625620015000
title: "Obsidian 插件：PDF Sync Scroll"
tags: ["图片与PDF", "界面优化", "效率工具", "obsidian插件"]
description: "Synchronize scrolling across selected PDF panes and popout windows, with page alignment, reading progress, and manual offsets. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Sync Scroll

> [!Note] 插件名片
> - 插件名称：PDF Sync Scroll
> - 插件作者：chmod777h
> - 插件说明：Synchronize scrolling across selected PDF panes and popout windows, with page alignment, reading progress, and manual offsets. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chmod777h/pdf-sync-scroll)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-sync-scroll)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chmod777h/pdf-sync-scroll/master/README.md)



## 概述

PDF Sync Scroll 旨在解决在 Obsidian 中同时阅读多份 PDF 文档时，各窗口滚动位置不同步的痛点。其核心功能是让选定的两个或多个 PDF 面板（包括弹出窗口）保持同步滚动。插件支持两种对齐模式：一种是精确匹配页码及页内位置，另一种是匹配整体阅读进度百分比。无论 PDF 的页面尺寸或缩放级别如何差异，插件都能确保你在滚动任意一个面板时，其他选定面板能跟随移动，从而维持视觉上的对齐。

典型使用场景包括对比阅读两份不同版本的合同或论文，以及同时查阅教材与参考手册。例如，当你打开两份关于同一主题的 PDF 时，只需滚动其中一份，另一份便会自动跳转到对应的页码或进度位置。如果两份文档的封面或前置页数量不同，你可以暂停同步，手动将两份文档滚动到相同的内容位置，然后执行“在当前位置对齐”命令，插件便会记住这个相对偏移量，后续滚动时保持内容对应。

相比其他同类插件，PDF Sync Scroll 的特色在于支持显式的面板选择机制，允许用户从多个打开的 PDF 中指定任意子集进行同步，甚至可以将同一文件的不同面板分别选中。此外，它支持弹出窗口作为驱动源，且完全离线运行，不收集任何数据，也不读取 PDF 文本内容，仅处理布局与滚动位置，隐私安全性高。插件界面跟随 Obsidian 语言设置，中文环境下显示简体中文。

使用前需注意，该插件仅支持桌面端（macOS 已验证，Windows/Linux 未完全测试），且要求 PDF 查看器设置为垂直连续滚动模式，不支持双页展开或网格视图。它无法智能识别文本内容的增删或分页差异，若文档结构差异巨大，需依赖手动对齐或进度模式。此外，手动设置的偏移量是临时的，切换模式、重新选择面板或重启应用后会被清除。如果你需要跨不同 Obsidian 实例或不同库同步，或者需要基于文本语义的复杂对齐，此插件并不适合。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


