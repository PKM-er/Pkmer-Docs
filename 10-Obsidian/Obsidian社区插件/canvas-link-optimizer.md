---
uid: 2024052909143661
title: Obsidian 插件：Canvas Link Optimizer
tags: ['第三方工具集成', '界面美化', '链接', '白板', 'obsidian插件']
description: 优化Canvas链接，通过显示页面缩略图。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas Link Optimizer

> [!Note] 插件名片
> - 插件名称：Canvas Link Optimizer
> - 插件作者：khaelar
> - 插件说明：优化 Canvas 链接，通过显示页面缩略图。
> - 插件分类：[' 第三方工具集成 ', ' 界面美化 ', ' 链接 ', ' 白板 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/khaelar/obsidian-canvas-link-optimizer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-link-optimizer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/khaelar/obsidian-canvas-link-optimizer/master/README.md)

![Canvas Link Optimizer](https://cdn.pkmer.cn/covers/canvas-link-optimizer.gif!pkmer)

## 概述

Obsidian Canvas Link Optimizer 插件是一个轻量级的 Obsidian 插件，旨在优化 Canvas 链接节点的用户体验。默认情况下，Obsidian 中的链接节点在进入视图时加载网页内容。该插件通过显示预览缩略图来修改此行为，从而显著减少资源消耗。如果用户需要更详细的信息，仍然可以通过点击缩略图访问完整的网页内容。

该插件不会修改您的存储数据。所有缩略图都会在本地缓存到 `.obsidian/plugins/canvas-link-optimizer/data` 目录中，如果需要可以安全地清除缓存。

使用此插件的原因包括：

- **性能影响**：自动加载类似于打开额外的浏览器标签，这可能会显著增加 CPU 和 RAM 的使用量。这可能导致性能问题，特别是在性能较差的设备上。
- **安全问题**：自动加载页面可能会无意间加载恶意内容，可能存在加密货币挖矿或沙箱逃逸等潜在风险。
- **视觉干扰**：链接的自动加载会产生闪烁和其他视觉干扰，打断您的工作流程和注意力。
- **加载延迟**：完整页面加载可能会很慢，特别是在网络连接较慢的情况下，这会导致体验不流畅。
- **意外自动播放**：自动加载的页面（例如 YouTube 频道主页）可能包含自动播放的内容，如果在导航画布时意外播放音频，可能会造成干扰。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



