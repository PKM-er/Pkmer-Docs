---
uid: 1793625620019000
title: "Obsidian 插件：PDF Zathura Keys"
tags: ["图片与PDF", "快捷键", "导航与状态栏", "界面优化", "obsidian插件"]
description: "Zathura's keys in the PDF view: J/K pages, gg/G, zoom, marks, search, dark recolor, a status bar and last-page memory. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Zathura Keys

> [!Note] 插件名片
> - 插件名称：PDF Zathura Keys
> - 插件作者：confuserdotcom
> - 插件说明：Zathura's keys in the PDF view: J/K pages, gg/G, zoom, marks, search, dark recolor, a status bar and last-page memory. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '快捷键', '导航与状态栏', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/confuserdotcom/obsidian-pdf-zathura)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-zathura)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/confuserdotcom/obsidian-pdf-zathura/master/README.md)



## 概述

PDF Zathura Keys 将 Zathura 阅读器的键盘操作逻辑引入 Obsidian 的 PDF 视图，旨在解决阅读长文档时频繁使用鼠标翻页的低效问题。它支持通过 J/K 键快速翻页、gg/G 跳转至首尾页或指定页码，以及使用数字前缀（如 5G）进行精确控制。此外，插件还集成了深色重着色功能，能在保持色彩色调的同时将页面背景转为深色，并配备状态栏显示当前页码与进度，让阅读体验更贴近终端用户的习惯。

典型使用场景包括沉浸式阅读与笔记整理。例如，在研读学术文献时，你可以开启“学习分屏”模式，将 PDF 与笔记并排显示，通过快捷键在两者间切换，无需移动鼠标即可在原文与笔记间快速跳转。另一个场景是夜间阅读，按下 i 键即可一键切换深色模式，减少屏幕蓝光对眼睛的刺激，同时利用 m 键设置书签，方便下次继续阅读时快速定位。

相比其他 PDF 插件，该插件的核心特色在于对 Vim 风格键位的高度还原与兼容性。它不仅支持独立的键盘操作，还能与 Obsidian 的 Vim 模式或 Vim Motions 插件无缝协作，确保在 PDF 聚焦时执行 Zathura 键位，而在笔记编辑时保留原有 Vim 操作。此外，插件具备“最后阅读页记忆”功能，重新打开 PDF 时会自动定位到上次停止的位置，且这些状态数据按设备独立存储，避免了多设备同步时的冲突。

使用前需注意，该插件仅支持桌面端（Windows/macOS/Linux），移动端用户无法使用。如果你主要依赖触控操作，或者习惯使用 Obsidian 原生 PDF 视图的鼠标交互，此插件可能并不适合你。此外，虽然插件提供了外部程序调用功能，但默认配置下仍依赖 Obsidian 内置视图，若你更倾向于使用系统级 PDF 阅读器，需手动配置外部程序路径及参数。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


