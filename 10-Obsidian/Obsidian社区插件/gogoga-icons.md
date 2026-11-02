---
uid: 1793625613423001
title: "Obsidian 插件：gogoga icons"
tags: ["样式与美化", "界面优化", "obsidian插件"]
description: "Companion plugin for the gogoga theme: replaces Obsidian's built-in Lucide icons with Phosphor icons (the set used by Tolaria). - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：gogoga icons

> [!Note] 插件名片
> - 插件名称：gogoga icons
> - 插件作者：jackweigogoga
> - 插件说明：Companion plugin for the gogoga theme: replaces Obsidian's built-in Lucide icons with Phosphor icons (the set used by Tolaria). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jackweigogoga/gogoga-icons)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gogoga-icons)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jackweigogoga/gogoga-icons/master/README.md)



## 概述

gogoga icons 是一款专为 gogoga 主题设计的配套插件，其核心功能是替换 Obsidian 界面中约 110 个内置的 Lucide 图标。它利用 Obsidian 的 API 机制，将这些图标统一替换为 Phosphor Icons 中的 Regular 权重样式。这一改动旨在让界面视觉风格与 gogoga 主题保持高度一致，消除原生图标与主题设计之间的割裂感，从而提供更统一、更精致的视觉体验。

想象一下，当你使用 gogoga 主题时，侧边栏、设置菜单及工具栏中的图标不再是默认的线性风格，而是呈现出 Phosphor 特有的圆润质感。例如，在浏览笔记列表或操作文件树时，你会看到与 Tolaria 应用相同风格的图标，这种细节上的统一能显著提升长时间使用 Obsidian 时的视觉舒适度，让界面看起来更加协调和专业。

相比其他仅修改 CSS 或提供有限图标替换的插件，gogoga icons 的优势在于其完整的映射表和标准化的尺寸处理。它通过生成器脚本自动将 Phosphor 图标从 256 网格重缩放至 Obsidian 的 100 网格，确保图标在不同分辨率下依然清晰且比例正确。此外，它同时注册了带和不带 `lucide-` 前缀的图标 ID，保证了替换的全面性和兼容性，无需用户手动配置复杂的映射关系。

需要注意的是，该插件主要服务于 gogoga 主题用户，若你未使用该主题，替换图标可能与其他主题风格冲突。另外，由于 Obsidian 的 `addIcon` API 缺乏注销功能，禁用插件后需重启应用才能恢复原始图标。如果你追求极简主义或希望保留 Obsidian 原生 Lucide 图标风格，或者对 Phosphor 图标风格不感兴趣，则不建议安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


