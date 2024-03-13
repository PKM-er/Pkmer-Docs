---
uid: 2024031219295916
title: Obsidian 插件：【Readme】Canvas Link Optimizer
tags: ['obsidian插件', 'readme']
description: 优化Canvas链接，通过显示页面缩略图。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Canvas Link Optimizer

> [!Note] 插件名片
> - 插件名称：Canvas Link Optimizer
> - 插件作者：khaelar
> - 插件说明：优化 Canvas 链接，通过显示页面缩略图。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/khaelar/obsidian-canvas-link-optimizer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-link-optimizer)

## 概述

优化 Canvas 链接，通过显示页面缩略图。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/khaelar/obsidian-canvas-link-optimizer/master/README.md)

---

## Readme(翻译）

下面是 [[canvas-link-optimizer]] 插件的自述翻译

【机翻】

# 黑曜石画布链接优化插件

这是一个轻量级的黑曜石插件，旨在增强用户与画布链接节点的体验。默认情况下，黑曜石画布中的链接节点在视图中出现时会加载网页内容。该插件通过显示预览缩略图来修改这种行为，这显著减少了资源消耗。用户仍然可以通过点击缩略图来访问完整的网页，以获取更详细的信息。

这是黑曜石中链接节点的默认行为：

![](https://cdn.pkmer.cn/covers/canvas-link-optimizer_2_0.gif!pkmer)

启用了 Canvas Link Optimizer 插件后，效果如下：

![](https://cdn.pkmer.cn/covers/canvas-link-optimizer_2_1.gif!pkmer)

该插件不会修改您的保险库数据。所有缩略图都会被缓存在 `.obsidian/plugins/canvas-link-optimizer/data` 目录中，如果需要的话可以安全地清除。

## 牢记

要生成页面缩略图，插件首先执行标准页面加载。因此，它不会立即优化现有的链接节点以及新创建的节点。

## 为什么使用这个插件？

链接节点提供了方便的链接内容预览，而无需打开链接本身。然而，自动加载功能也有其缺点，包括：

- **性能影响**：自动加载类似于打开额外的浏览器标签，这可能会显著增加 CPU 和 RAM 的使用量。这可能会导致性能问题，特别是在性能较弱的设备上。
- **安全问题**：自动加载页面可能会无意中加载恶意内容，可能会带来潜在风险，如加密货币挖矿或沙盒逃逸尝试。
- **视觉干扰**：链接的自动加载可能会导致闪烁和其他视觉干扰，打断您的工作流程和注意力。
- **加载延迟**：完整页面加载可能会很慢，特别是在网络连接较慢的情况下，导致体验不够流畅。
- **意外自动播放**：自动加载的页面，如 YouTube 频道主页，可能包含自动播放内容，如果在浏览画布时突然开始播放音频，可能会造成干扰。



