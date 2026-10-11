---
uid: 1791709369527000
title: "Obsidian 插件：Recursive Board"
tags: ['任务管理', '图表与可视化', '界面优化', 'obsidian插件']
description: "Renders a work item's children as a board or a checklist, from frontmatter alone. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Recursive Board

> [!Note] 插件名片
> - 插件名称：Recursive Board
> - 插件作者：Victor Ciobanu
> - 插件说明：Renders a work item's children as a board or a checklist, from frontmatter alone. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '图表与可视化', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vic-cio/recursive-board)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?recursive-board)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vic-cio/recursive-board/master/README.md)



## 概述

**1. 主要功能**
Recursive Board 将 Obsidian 库中的 Markdown 文件转化为层级式工作看板。它通过解析文件 Frontmatter 中的字段（如 `type`、`id`、`status` 及父级链接），将分散的笔记自动渲染为看板或检查列表视图。

**2. 适用场景**
适用于需要以 Markdown 为唯一数据源（Canonical Source）的项目管理、任务追踪或个人工作流。特别适合使用 Obsidian Sync 进行多设备同步的团队或个人，以及需要结合脚本进行自动化处理的场景。

**3. 核心特色**
*   **纯 Markdown 驱动**：插件仅作为视图层，不修改数据库，所有数据存储在标准 Markdown 文件中，确保数据可移植性。
*   **递归层级结构**：基于父级链接自动构建无限层级的任务树。
*   **双端支持**：既提供 Obsidian 插件进行可视化编辑，也提供 `wi` 命令行工具支持无头环境（Headless）下的脚本自动化操作。

**4. 使用建议**
安装后，请在 `Boards/` 文件夹（可自定义）中创建文件，并确保 Frontmatter 包含 `type: work-item` 及唯一 `id`。利用父级链接定义任务归属，即可在看板中实时查看状态。若需批量操作或自动化，建议配合 Node.js 环境安装 `wi` CLI 工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
