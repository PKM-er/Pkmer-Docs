---
uid: 1791709369198000
title: 'Obsidian 插件：Photo Row Layout'
tags: ['图片与PDF', '样式与美化', '界面优化', 'obsidian插件']
description: 'Lay images out the way a published site will: images written one after another in a paragraph become one equal-height row, with captions, optional EXIF, and grid / masonry / scroll blocks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Photo Row Layout

> [!Note] 插件名片
> - 插件名称：Photo Row Layout
> - 插件作者：harderheng
> - 插件说明：Lay images out the way a published site will: images written one after another in a paragraph become one equal-height row, with captions, optional EXIF, and grid / masonry / scroll blocks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '样式与美化', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/harderheng/photo-row-layout)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?photo-row-layout)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/harderheng/photo-row-layout/master/README.md)



## 概述

**Photo Row Layout** 是一款专为图片密集型笔记设计的 Obsidian 插件，旨在提供“所见即所得”的排版预览。

1.  **主要功能**：将同一 Markdown 段落中连续排列的图片自动渲染为等高行布局，支持混合横竖构图且无裁剪。图片标题取自 Alt 文本，可选显示 EXIF 相机数据。
2.  **适用场景**：适合摄影博客、旅行记录或任何需要大量图片展示且希望预览效果与最终发布页面一致的笔记场景。
3.  **核心特色**：
    *   **零配置排版**：遵循标准 Markdown 语法，无需额外开关。
    *   **多布局支持**：通过 `photos` 代码块可切换网格、瀑布流或水平滚动模式，并指定行宽。
    *   **性能优化**：利用真实尺寸和 `srcset` 防止图片加载时布局抖动，适配不同屏幕。
    *   **一致性**：布局规则与静态站点生成器共享，确保预览即最终效果。
4.  **使用建议**：在单段落内连续书写图片链接以生成等高行；若需独立展示，请用空行分隔。对于复杂布局，使用 `photos` 围栏块并指定参数。注意在 Live Preview 模式下，深层嵌套可能导致选项回退至默认行布局。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


