---
uid: 1793625612322001
title: "Obsidian 插件：Drawio Preview"
tags: ["图表与可视化", "第三方工具集成", "图片与PDF", "obsidian插件"]
description: "Preview .drawio diagrams inline as read-only SVGs, with zoom, pan, and multi-page support. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Drawio Preview

> [!Note] 插件名片
> - 插件名称：Drawio Preview
> - 插件作者：OLanO
> - 插件说明：Preview .drawio diagrams inline as read-only SVGs, with zoom, pan, and multi-page support. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '第三方工具集成', '图片与PDF', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nnq7/obsidian-drawio-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?drawio-preview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nnq7/obsidian-drawio-preview/master/README.md)



## 概述

Drawio Preview 让 Obsidian 用户无需打开外部编辑器，即可在笔记中直接预览 `.drawio` 图表。它通过内置的 drawio 查看器将图表渲染为 SVG，支持内联嵌入和独立文件视图。核心功能包括只读预览、缩放、平移以及多页支持，让图表像普通图片一样融入笔记流，同时保持编辑工作流在桌面端 drawio 应用中完成。

典型场景包括在技术文档中嵌入系统架构图，或在项目笔记中展示流程图。例如，你可以使用 `![[Diagram.drawio|400]]` 语法固定图表宽度，使其适应笔记布局；对于多页图表，点击预览后可通过左右箭头切换页面，并点击固定按钮将当前页码写入链接，确保笔记重载后仍显示指定页面。

相比其他插件，Drawio Preview 强调离线隐私与性能优化。它完全离线运行，无网络请求、无遥测数据，且首次渲染后会将 SVG 缓存至本地，后续打开几乎即时。此外，它提供三种外观模式（浅色、深色、透明）以自动匹配 Obsidian 主题，并支持通过命令、侧边栏按钮或文件夹右键菜单快速创建新图表文件，位置可自定义。

使用前需注意，该插件仅支持只读预览，编辑需依赖本地安装的 drawio 桌面应用，若未关联默认程序，“编辑”按钮将无效。移动端仅显示静态预览，无交互功能。首次打开图表时因加载查看器可能稍慢，但缓存机制可缓解此问题。不适合需要直接在 Obsidian 内编辑图表或依赖在线协作功能的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


