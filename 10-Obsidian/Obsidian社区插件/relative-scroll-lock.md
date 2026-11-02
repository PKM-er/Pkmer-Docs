---
uid: 1793625620722001
title: "Obsidian 插件：Relative Scroll Lock"
tags: ["界面优化", "效率工具", "编辑工具", "obsidian插件"]
description: "Position two Markdown panes independently, then lock relative scrolling without jumping. Hold Alt to adjust one pane. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Relative Scroll Lock

> [!Note] 插件名片
> - 插件名称：Relative Scroll Lock
> - 插件作者：v-49
> - 插件说明：Position two Markdown panes independently, then lock relative scrolling without jumping. Hold Alt to adjust one pane. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/v-49/obsidian-relative-scroll-lock)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?relative-scroll-lock)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/v-49/obsidian-relative-scroll-lock/master/README.md)



## 概述

Relative Scroll Lock 专为解决双栏阅读时位置同步难题而设计。它允许用户将两个 Markdown 面板独立滚动至任意起始位置，随后锁定相对滚动状态。一旦锁定，滚动任一面板时，另一面板会以相同的垂直像素距离同步移动，确保两个视图始终保持相对位置不变，彻底避免了传统同步方式中常见的“跳转”或“对齐错误”问题。

典型场景包括在同一篇长笔记中对比不同章节，或同时查看两篇不同的笔记。例如，当你需要对照原文与修订版时，可以先将两个面板分别滚动到对应的段落，点击状态栏的锁定按钮。此后，无论你在哪个面板滚动，另一个面板都会跟随移动相同的距离，让你能流畅地保持上下文的相对对应关系，无需反复手动调整位置。

与 Obsidian 原生的链接标签页不同，该插件不依赖文本匹配、行号或百分比对齐，而是基于像素位移进行同步。这意味着它可以保留任意起始偏移量，即使两段内容长度不同也能正常工作。此外，按住 Alt 键滚动可单独调整当前面板位置，松开后从新位置继续同步，提供了极大的灵活性。

使用前请注意，该插件仅支持桌面端，且要求主工作区恰好有两个水平相邻的 Markdown 面板。它不支持 PDF、Canvas、移动端或垂直堆叠布局。若两个面板已原生链接，启用本插件会移除原生链接，且解锁后不会自动恢复。由于基于像素同步，字体大小、缩放或图片加载变化可能导致视觉对齐偏差，此时需使用 Alt 键或解锁重新调整。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


