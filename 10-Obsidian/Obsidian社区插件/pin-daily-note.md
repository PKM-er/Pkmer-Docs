---
uid: 1793625620084001
title: "Obsidian 插件：Pin Daily Note"
tags: ["日历与时间", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Keeps one pinned tab on today's daily note and moves it to the new note when the day changes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pin Daily Note

> [!Note] 插件名片
> - 插件名称：Pin Daily Note
> - 插件作者：Philip Linden
> - 插件说明：Keeps one pinned tab on today's daily note and moves it to the new note when the day changes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/philiplinden/obsidian-pin-daily-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pin-daily-note)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/philiplinden/obsidian-pin-daily-note/master/README.md)



## 概述

Pin Daily Note 旨在解决手动固定每日笔记标签页后，次日仍停留在旧日期的尴尬问题。它通过自动追踪日期变化，确保始终有一个固定的标签页指向当天的笔记。当日期更替时，插件会无缝将该标签页的内容更新为新一天的笔记，同时保持焦点不转移，让你无需每天手动重新固定或查找文件，实现“今日笔记”的常驻可见。

想象一下，你习惯在 Obsidian 中保持一个标签页始终显示当天的日记。使用此插件后，早晨打开软件时，那个固定的标签页会自动从昨天的记录跳转到今天的空白页或已有内容。另一个场景是，当你从其他笔记链接跳转回每日笔记时，插件提供的“打开今日每日笔记”命令会直接复用那个固定的标签页，避免产生多余的重复标签，保持工作区整洁。

与仅依赖核心功能或手动操作不同，该插件具备智能检测机制，能自动识别并适配 Periodic Notes、Notebook Navigator 或核心每日笔记插件的设置。它严格限制只有一个每日笔记标签页处于固定状态，若发现其他固定的每日笔记标签页会自动取消固定，确保逻辑清晰。此外，它会在文件打开、每 60 秒及窗口获得焦点时进行检查，确保状态同步的及时性。

需要注意的是，该插件仅保护每日笔记标签页，其他未固定的标签页在点击链接时仍会被替换。它依赖源插件的模板，仅支持基础变量替换，不支持 Templater 等复杂语法。如果你需要固定多个不同日期的笔记，或者对模板渲染有极高要求，此插件可能无法满足需求。此外，若自动检测失效，需手动配置自定义路径和日期格式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


