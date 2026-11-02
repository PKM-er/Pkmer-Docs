---
uid: 1793625612835001
title: "Obsidian 插件：Figure Layouts"
tags: ["图片与PDF", "样式与美化", "界面优化", "obsidian插件"]
description: "Captioned figures, side-by-side image rows and [!gallery|N] grids, in reading view and Live Preview. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Figure Layouts

> [!Note] 插件名片
> - 插件名称：Figure Layouts
> - 插件作者：bluebeard63
> - 插件说明：Captioned figures, side-by-side image rows and [!gallery|N] grids, in reading view and Live Preview. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '样式与美化', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bluebeard63/obsidian-figure-layouts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?figure-layouts)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bluebeard63/obsidian-figure-layouts/master/README.md)



## 概述

Figure Layouts 旨在解决 Obsidian 中图片排版单一的问题，让笔记在预览模式下呈现出类似专业文档或作品集的视觉效果。它支持四种核心布局：单图自动添加底部说明文字；多张图并排显示为等宽行；通过 `[!gallery]` 调用块创建自定义列数的网格；以及利用 `[!aside]` 调用块实现图文左右分栏。这些布局在实时预览和阅读视图中均能正常渲染，无需额外配置即可生效。

典型场景包括撰写技术文档或项目复盘时，需要展示“修改前/修改后”的对比效果，此时可使用画廊网格整齐排列多张截图；或者在撰写教程时，希望将关键截图与详细解释文字并排展示，以便读者对照阅读，此时 aside 布局能完美实现图文互不干扰的阅读体验。此外，对于包含大量步骤截图的操作指南，并排布局能让页面更加紧凑，减少垂直滚动距离。

相比其他图片插件，Figure Layouts 的最大特色是“纯 Markdown 底层”。它不改变笔记的原始结构，所有布局均基于标准 Markdown 语法和 Obsidian 原生调用块实现。这意味着即使卸载插件，笔记内容依然完整保留，只是失去特殊排版效果。此外，它原生支持视频文件（如 mp4、webm），并能自动处理移动端适配，在手机端智能调整网格列数，确保小屏幕下的可读性。

使用前需注意，该插件主要服务于视觉呈现，若你的工作流依赖复杂的图片元数据管理或高级裁剪功能，它可能无法满足需求。另外，行和网格布局会将图片强制裁剪为 4:3 比例，若你的图片宽高比差异极大，可能会产生较多留白或裁剪。对于仅需简单插入图片、不需要复杂排版结构的用户，此插件可能显得功能过剩。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


