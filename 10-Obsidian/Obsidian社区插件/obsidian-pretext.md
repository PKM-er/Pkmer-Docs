---
uid: 1786577081598003
title: 'Obsidian 插件：Pretext Optimizer'
tags: ['第三方工具集成', '界面优化', '效率工具', '数据处理', 'obsidian插件']
description: '集成 Pretext 库以减少 Obsidian 渲染流程中的 DOM 测量开销，提升大文档的性能。——此插件尚未经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pretext Optimizer

> [!Note] 插件名片
> - 插件名称：Pretext Optimizer
> - 插件作者：wuyifan-code
> - 插件说明：集成 Pretext 库以减少 Obsidian 渲染流程中的 DOM 测量开销，提升大文档的性能。——此插件尚未经过 Obsidian 官方人员的人工审核。
> - 插件分类：['第三方工具集成', '界面优化', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wuyifan-code/Obsidian-pretext)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-pretext)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wuyifan-code/Obsidian-pretext/master/README.md)



## 概述

### Pretext Optimizer插件总结
1. **主要功能**：集成Pretext库，减少Obsidian渲染过程中的DOM测量开销，提升大文档的渲染性能。
2. **适用场景**：适用于包含大量内容（如引用、块引用、表格）的大文档。
3. **核心特色**：
    - 提前计算高度并设置 `min-height`，让浏览器跳过测量，加快长文档首屏渲染速度，减少滚动时的回流。
    - 采用智能缓存，相同文本和字体的计算结果会被缓存，避免重复计算。
    - 进行多项性能优化，如仅扫描可见内容区域、通过 `requestAnimationFrame` 限制DOM突变触发、使用 `requestIdleCallback` 进行批量处理。
4. **使用建议**：可在Obsidian社区插件中搜索安装（需审核通过），也可使用BRAT插件添加测试版，或手动下载最新版本解压到指定目录后重启Obsidian启用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


