---
uid: 1793625618862001
title: "Obsidian 插件：OE Link"
tags: ["第三方工具集成", "图片与PDF", "模板与链接处理", "obsidian插件"]
description: "Connect Eagle assets with Obsidian notes and canvases. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OE Link

> [!Note] 插件名片
> - 插件名称：OE Link
> - 插件作者：TenW
> - 插件说明：Connect Eagle assets with Obsidian notes and canvases. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '图片与PDF', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ten-w/OE-Link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?oe-link)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ten-w/OE-Link/master/README.md)



## 概述

OE Link 旨在解决 Obsidian 仓库中大量附件导致的同步负担问题，核心功能是将附件从笔记中分离并导入 Eagle 进行专业管理。它允许用户逐步将图片等附件迁移至 Eagle，同时在 Obsidian 笔记中保留可预览、可定位的引用链接。这种“文本在 Obsidian，附件在 Eagle”的工作流，既减轻了仓库体积和同步压力，又保留了 Eagle 强大的缩略图、标签及文件夹管理能力，实现了资产的高效复用。

典型场景包括处理包含大量截图或素材的写作项目。例如，在撰写长文时，你可以将引用的图片批量导入 Eagle，笔记中仅保留轻量级链接，从而保持仓库的轻量化。另一个场景是跨设备阅读，当你在手机或平板上查看笔记时，即使未安装 Eagle，也能通过云端模式加载并预览 Eagle 中的图片，确保阅读体验的连续性。

相比同类插件，OE Link 的特色在于其双模式连接机制。除了本地桌面端通过 Helper 插件与 Eagle 深度交互外，它还支持通过 OneDrive 或 WebDAV 进行云端只读访问。这意味着无需在移动设备上运行 Eagle，即可通过云同步的 Eagle 库查看资产，且支持按需加载视口附近的图片以优化性能，这是许多仅依赖本地 API 的插件所不具备的灵活性。

使用前需注意，导入操作会替换原始附件引用，且若启用自动清理，原文件将被移至回收站，因此务必提前备份仓库。此外，云端模式仅支持只读访问，无法远程修改 Eagle 中的标签或文件夹结构。该插件主要基于 Windows 和 Android 开发，macOS、Linux 及 iOS 支持尚不完善，若你依赖这些平台或需要双向同步 Eagle 资产，则可能不适合使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


