---
uid: 1791709370307000
title: 'Obsidian 插件：Task Checker'
tags: ['任务管理', '搜索与排序', '效率工具', 'obsidian插件']
description: 'Finds notes containing incomplete tasks and writes a dated list of links. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Task Checker

> [!Note] 插件名片
> - 插件名称：Task Checker
> - 插件作者：Dwight Ivany
> - 插件说明：Finds notes containing incomplete tasks and writes a dated list of links. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '搜索与排序', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dwightivany/task-checker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?my-task-checker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dwightivany/task-checker/master/README.md)



## 概述

**1. 主要功能**
Task Checker 插件用于扫描 Obsidian 库中所有包含未完成待办事项（`- [ ]`）的笔记。它会自动生成一份带有日期的 Markdown 文件（如 `todo-files-YYYY-MM-DD.md`），其中列出所有含未完成任务的笔记链接，并在侧边栏显示任务数量通知。

**2. 适用场景**
适用于遵循“Getting Things Done”（GTD）方法论的用户。特别适合需要定期（如每周）审查行动项，防止待办事项散落在参考材料或项目文件夹中而遗漏的场景。

**3. 核心特色**
- **智能排除**：支持在设置中排除特定文件夹或文件（如日常笔记、项目库），仅检查其他区域的潜在遗漏任务。
- **一键生成**：通过点击侧边栏图标或执行命令，快速生成待办文件清单。
- **设置搜索**：基于 Obsidian 声明式设置 API，支持在设置中快速搜索排除项（需 Obsidian 1.13.0+）。

**4. 使用建议**
- 建议将主要记录待办事项的文件夹（如 Projects、Daily）加入“排除列表”，以便插件聚焦于其他可能隐藏任务的区域。
- 养成定期（如每周）点击插件图标进行扫描的习惯，及时将分散的任务移动至主待办列表或执行，保持行动项与参考资料的分离。
- 安装时需手动下载 `main.js` 和 `manifest.json` 至插件目录。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


