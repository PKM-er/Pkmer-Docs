---
uid: 1793625612675000
title: "Obsidian 插件：Explorer Details"
tags: ["文件管理", "界面优化", "效率工具", "obsidian插件"]
description: "Show modification times, note properties, and custom details in the native File Explorer. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Explorer Details

> [!Note] 插件名片
> - 插件名称：Explorer Details
> - 插件作者：Curelove
> - 插件说明：Show modification times, note properties, and custom details in the native File Explorer. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/curelove/file-list-details)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-list-details)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/curelove/file-list-details/master/README.md)



## 概述

Explorer Details 旨在解决 Obsidian 原生文件列表信息单一的问题，它允许你在不替换原有文件树的前提下，直接在笔记名称旁展示修改时间、YAML 属性值或自定义备注。该插件通过读取笔记的元数据，将原本隐藏在属性面板中的关键信息可视化，让你无需打开笔记即可快速掌握其状态或最后更新时间，从而提升浏览和检索效率。

典型的使用场景包括项目管理和内容追踪。例如，你可以配置插件显示每篇笔记的 `status` 属性，当看到文件列表中出现“进行中”或“已完成”的标签时，能迅速判断哪些任务需要跟进。另一个例子是结合修改时间显示，在整理大量笔记时，通过查看每篇笔记下方的最后修改日期，快速识别出近期活跃或长期未动的内容，辅助进行归档或清理。

相比其他需要替换文件树或仅支持单一信息展示的插件，Explorer Details 的特色在于其高度的灵活性与非侵入性。它支持四种显示模式，包括单独显示时间、单独显示属性、组合显示，以及使用 `{name}`、`{date}` 等占位符构建完全自定义的文本模板。此外，其智能排版功能能根据侧边栏宽度自动调整位置，避免长标题挤压，并支持按属性条件过滤显示，确保文件树在保持整洁的同时提供必要信息。

使用前请注意，该插件仅读取元数据，不会修改任何笔记正文或 YAML 属性，且完全本地运行，无网络请求，安全性高。但它不适合需要实时同步云端状态或复杂数据库交互的需求，也不适合希望彻底改变文件树交互逻辑（如拖拽排序、自定义图标）的用户。如果你的需求仅是查看基础文件信息，原生功能可能已足够；若需深度定制文件树外观，此插件可能无法满足。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


