---
uid: 1791709369976000
title: "Obsidian 插件：Simple Meeting Sidebar"
tags: ['日历与时间', '任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: "Shows today's Apple Calendar events in a simple sidebar and turns them into tasks or meeting notes. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Simple Meeting Sidebar

> [!Note] 插件名片
> - 插件名称：Simple Meeting Sidebar
> - 插件作者：Wren
> - 插件说明：Shows today's Apple Calendar events in a simple sidebar and turns them into tasks or meeting notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/turnipsforme/simple-meeting-sidebar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?simple-meeting-sidebar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/turnipsforme/simple-meeting-sidebar/master/README.md)



## 概述

**1. 主要功能**
该插件在 Obsidian 右侧边栏及每日笔记中展示今日 Apple Calendar 事件。用户可一键将日程转化为待办任务或创建会议笔记，实现日历与笔记的无缝衔接。

**2. 适用场景**
主要适用于 Mac 用户，通过读取本地日历简化会议管理。同时支持多设备协同，Mac 发布数据快照，iPhone、iPad、Android、Windows 及 Linux 设备可通过同步读取该快照，实现跨平台日程查看。

**3. 核心特色**
*   **极简主义**：无需复杂配置，仅需授权日历访问权限并选择日历即可。
*   **只读安全**：仅读取日历数据，绝不写入 Apple Calendar，确保数据源安全。
*   **多端同步**：基于 `events.json` 文件同步机制，支持多 Mac 发布及多平台消费，自动处理时间戳冲突，确保数据最新。

**4. 使用建议**
*   确保 Obsidian 版本不低于 1.8.7。
*   首次使用时允许 macOS 日历访问权限。
*   多设备用户需保持设备时钟自动同步，并确认 Obsidian Sync 设置中未排除 `Meetings/_calendar` 路径，且启用“同步其他所有类型”。
*   若侧边栏消失，可通过命令面板运行“Toggle meetings sidebar”恢复。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
