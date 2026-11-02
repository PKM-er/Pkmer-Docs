---
uid: 1793625612329000
title: "Obsidian 插件：Drive View"
tags: ["文件管理", "第三方工具集成", "移动端优化", "obsidian插件"]
description: "Use a Google Drive folder as your vault, with a local cache for fast access on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Drive View

> [!Note] 插件名片
> - 插件名称：Drive View
> - 插件作者：alex-sherman
> - 插件说明：Use a Google Drive folder as your vault, with a local cache for fast access on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alex-sherman/obsidian-drive-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?drive-view)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alex-sherman/obsidian-drive-view/master/README.md)



## 概述

Drive View 允许你将 Google Drive 中的指定文件夹直接作为 Obsidian 库使用，无需在本地存储大量笔记文件。它通过替换底层数据适配器，将云端文件映射为虚拟库后端，并配合内存与 IndexedDB 缓存机制，确保在桌面和移动端都能获得接近本地文件的快速访问体验。

想象你是一名经常在不同设备间切换的写作者，只需在本地保留极小的 `.obsidian` 配置目录，所有笔记内容均实时同步至 Google Drive。例如，在手机上快速记录灵感时，插件会立即更新缓存并合并上传；而在电脑上打开库时，远程的最新变更会通过轮询机制自动同步到当前打开的编辑器中，实现无缝的多端协作。

相比传统同步方案，该插件的核心特色在于其“零本地文件”架构。除了配置目录外，本地磁盘不存储任何笔记内容，嵌入的图片、音频和 PDF 均通过内存 Blob URL 直接渲染，避免了文件落盘。此外，它具备智能的防抖上传功能，将高频自动保存合并为单次上传，既减轻了网络负担，又保证了数据一致性。

需要注意的是，该插件依赖 Google Drive v3 API，因此需要稳定的网络连接才能正常同步，离线状态下仅能访问已缓存内容。它不适合对离线编辑有极高要求、或希望完全脱离 Google 生态的用户。此外，由于涉及云端数据替换，建议定期备份本地配置，以防云端数据意外丢失。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


