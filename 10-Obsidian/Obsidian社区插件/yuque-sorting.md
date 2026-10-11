---
uid: 1791709371228000
title: 'Obsidian 插件：yuque-sorting'
tags: ['搜索与排序', '文件管理', '第三方工具集成', 'obsidian插件']
description: 'Use stable guid identities and a per-folder order list to reproduce Yuque-style document ordering. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：yuque-sorting

> [!Note] 插件名片
> - 插件名称：yuque-sorting
> - 插件作者：CyrusGPF
> - 插件说明：Use stable guid identities and a per-folder order list to reproduce Yuque-style document ordering. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '文件管理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cyrusgpf/yuque-sorting)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?yuque-sorting)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cyrusgpf/yuque-sorting/master/README.md)



## 概述

**1. 主要功能**
该插件专为 Obsidian 桌面端设计，用于恢复和管理从语雀（YuqueOut）导出的知识库目录顺序。它通过稳定的 GUID 标识符和文件夹排序列表，精确复现语雀原有的文档排列结构。

**2. 适用场景**
适用于将语雀知识库迁移至 Obsidian 的用户，特别是需要保持原有目录层级和文档阅读顺序的场景。

**3. 核心特色**
*   **精准拖拽**：支持基于鼠标位置（上/中/下30%区域）的精确插入或移动，并提供视觉反馈。
*   **安全撤销**：支持最多50步的拖拽操作撤销，无超时限制。
*   **稳定标识**：使用64位或72位 GUID 确保文件与文件夹身份唯一，兼容旧版标识。
*   **数据同步**：自动检测外部 `data.json` 变更并重新加载，支持本地初始化与同步检查。

**4. 使用建议**
1.  先在 YuqueOut 导出知识库，生成 Markdown 及 `_yuque_order.json`。
2.  将文件复制到 Obsidian 库中，安装并启用插件。
3.  若缺失 `data.json`，请先同步或手动运行“初始化本地目录顺序”。
4.  运行“恢复原语雀目录顺序”以应用初始顺序。
5.  建议为“撤销上一次语雀拖拽”绑定快捷键，以便快速修正误操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


