---
uid: 1786577076065008
title: 'Obsidian 插件：Archive Viewer'
tags: ['搜索与排序', '文件管理', '安全与隐私', '效率工具', 'obsidian插件']
description: '以只读元数据树的形式查看 .zip 存档内容，还能进行搜索并给出安全警告。——此插件尚未经过 Obsidian 工作人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Archive Viewer

> [!Note] 插件名片
> - 插件名称：Archive Viewer
> - 插件作者：Viggo Meesters
> - 插件说明：以只读元数据树的形式查看 .zip 存档内容，还能进行搜索并给出安全警告。——此插件尚未经过 Obsidian 工作人员的人工审核。
> - 插件分类：['搜索与排序', '文件管理', '安全与隐私', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/viggomeesters/obsidian-archive-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?archive-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/viggomeesters/obsidian-archive-viewer/master/README.md)



## 概述

### Archive Viewer插件总结
1. **主要功能**：该插件用于查看Obsidian库内的 `.zip` 压缩包内容，以只读模式展示。能将ZIP中央目录元数据以内容树和表格形式呈现，无需解压文件，还可显示条目元数据、压缩包摘要，支持按路径文本或扩展名过滤。
2. **适用场景**：适用于需要查看 `.zip` 压缩包内文件信息，又不想解压的场景，如快速了解压缩包内文件结构和基本信息。
3. **核心特色**：提供安全警告，能提醒如路径遍历、绝对路径等潜在风险；外部文件变化后可刷新元数据；为保证视图响应性，将渲染列表限制在2000条。
4. **使用建议**：当前版本仅支持 `.zip` 文件，对于其他类型压缩包需等待后续更新。因是只读插件，不能用于解压、归档等操作。在查看大型压缩包时，受渲染条目数量限制，部分内容可能无法展示。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


