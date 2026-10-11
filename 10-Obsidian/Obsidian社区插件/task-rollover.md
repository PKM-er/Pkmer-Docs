---
uid: "1791709370320000"
title: "Obsidian 插件：Task Rollover"
tags: ['任务管理', '效率工具', '自动化与AI', 'obsidian插件']
description: "Move the unfinished tasks of your last daily note into today's note when it is created, under a heading you choose, with undo, nested items and no duplicates. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Task Rollover

> [!Note] 插件名片
> - 插件名称：Task Rollover
> - 插件作者：siulved54
> - 插件说明：Move the unfinished tasks of your last daily note into today's note when it is created, under a heading you choose, with undo, nested items and no duplicates. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/perezamadorluisenrique-gif/task-rollover)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-rollover)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/perezamadorluisenrique-gif/task-rollover/master/README.md)



## 概述

**Task Rollover** 是一款自动处理每日笔记未完成任务的 Obsidian 插件。

1.  **主要功能**：当创建新的每日笔记时，自动将昨日笔记中未勾选的任务（包括自定义状态如 `[/]`）迁移至今日笔记的指定标题下，并支持撤销操作。
2.  **适用场景**：适用于依赖 Daily Notes 或 Periodic Notes 插件进行日常记录的用户，特别是需要每日跟进任务进度、避免手动复制粘贴遗漏任务的个人知识管理或项目管理场景。
3.  **核心特色**：
    *   **防重复与安全性**：自动检测已存在任务，防止重复添加；若前一日笔记被修改，会重新校验任务状态，避免误删。
    *   **结构保持**：完整保留任务的嵌套层级结构，且忽略代码块内的复选框。
    *   **智能等待**：能等待 Templater 等模板插件执行完毕后再插入任务，确保内容完整。
    *   **跨平台**：支持桌面端和移动端。
4.  **使用建议**：需配合核心 Daily Notes 或 Periodic Notes 插件使用。建议在设置中指定目标标题（如“Tasks”），以便任务归档到固定位置。若使用 Templater，无需额外配置，插件会自动等待模板加载完成。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

