---
uid: 1791709365810000
title: 'Obsidian 插件：Canvas Image LOD'
tags: ['界面优化', '图片与PDF', '效率工具', 'obsidian插件']
description: 'Swaps large canvas images for downscaled proxies based on zoom level, removing zoom lag on image-heavy boards. Originals are never modified. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas Image LOD

> [!Note] 插件名片
> - 插件名称：Canvas Image LOD
> - 插件作者：Ilia Gorbunov
> - 插件说明：Swaps large canvas images for downscaled proxies based on zoom level, removing zoom lag on image-heavy boards. Originals are never modified. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/seadhe/obsidian-canvas-image-lod)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-image-lod)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/seadhe/obsidian-canvas-image-lod/master/README.md)



## 概述

**插件名称**：Canvas Image LOD

**1. 主要功能**
该插件通过根据当前缩放级别动态替换Canvas画布中的图像，解决大图导致的卡顿问题。它利用预生成的降采样代理图（Proxies）替代原图进行渲染，当放大时自动切回原图，确保在保持视觉清晰度的同时大幅降低GPU负载。

**2. 适用场景**
特别适用于包含大量高分辨率图片（如超过100张或总像素极高）的Obsidian Canvas白板。对于在普通设备上打开重型图像板时出现明显缩放延迟或掉帧的用户尤为有效。

**3. 核心特色**
*   **非破坏性**：绝不修改原始图片文件，仅在内存中处理。
*   **极致性能**：实测可将重栅格化像素量降低20倍以上，消除缩放时的卡顿。
*   **智能分级**：采用链式降采样（如4800→1600→768...），比直接大幅缩小更清晰且高效。
*   **稳健兼容**：通过读取CSS变换矩阵获取缩放状态，而非依赖内部API，确保Obsidian更新后插件依然稳定工作。

**4. 使用建议**
安装后无需复杂配置即可生效。建议在图片密集的白板中启用，以体验流畅的缩放体验。由于原图仅在停止缩放200毫秒后重新加载，快速缩放时主要展示低分辨率代理图，这是正常的性能优化策略。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


