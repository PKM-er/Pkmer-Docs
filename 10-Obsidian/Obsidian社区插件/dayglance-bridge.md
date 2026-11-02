---
uid: 1793625611912001
title: "Obsidian 插件：dayGLANCE Bridge"
tags: ["任务管理", "日历与时间", "界面优化", "效率工具", "obsidian插件"]
description: "Show your dayGLANCE agenda in the sidebar and keep tasks in daily notes, chosen folders and project notes in step with the planner. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：dayGLANCE Bridge

> [!Note] 插件名片
> - 插件名称：dayGLANCE Bridge
> - 插件作者：Jason Krellner
> - 插件说明：Show your dayGLANCE agenda in the sidebar and keep tasks in daily notes, chosen folders and project notes in step with the planner. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '日历与时间', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/glance-apps/dayglance-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dayglance-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/glance-apps/dayglance-bridge/master/README.md)



## 概述

dayGLANCE Bridge 将 Obsidian 库与隐私优先的日程规划工具 dayGLANCE 深度连接。它不仅在侧边栏展示包含月度日历、当日任务、重复事项及日历事件的完整议程，还能让 Obsidian 中的日常笔记、指定文件夹及项目笔记中的任务与规划器保持实时同步。即使 dayGLANCE 应用未运行，插件也能在 Obsidian 内部独立处理任务状态，确保你的笔记与计划始终一致。

典型场景包括：在侧边栏查看今日安排，直接勾选任务即可在 dayGLANCE 中完成标记；或者将特定文件夹设为任务源，其中未完成的待办事项会自动同步至规划器。此外，你可以将笔记链接到 dayGLANCE 的项目或目标，任务会直接写入笔记的 `## Tasks` 部分，并自动更新 frontmatter 状态，方便通过 Dataview 进行查询。

相比仅通过文件夹同步的默认方式，该插件运行在 Obsidian 内部，支持更复杂的任务来源配置，如按标签筛选笔记。它具备“整洁编辑器”功能，可隐藏任务行末尾的 ID 及已完成任务，仅改变显示而不修改文件内容。在多设备环境下，插件通过 Obsidian Sync 协调写入权限，确保只有一台设备执行写入，其他设备接收结果，避免冲突。所有数据交换均使用 AES-256-GCM 加密，且插件不收集任何遥测数据。

使用前需确保已部署自托管的 GLANCEvault 服务器，并拥有 dayGLANCE 账户。该插件不适合希望完全离线使用、或不愿维护自托管服务器的用户。此外，它依赖 Obsidian 1.7.2 及以上版本，移动端每 30 秒检查一次更新，桌面端则保持持久连接。若你不需要将笔记任务与外部规划器双向同步，或仅使用 Obsidian 原生任务管理，此插件可能并非必需。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


