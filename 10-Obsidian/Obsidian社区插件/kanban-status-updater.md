---
uid: 2025042920501893
title: Obsidian 插件：Kanban Status Updater
tags: ['任务管理', '自动化与AI', '编辑工具', 'obsidian插件']
description: 当笔记对应的卡片在看板上移动时，自动更新笔记中的“状态”属性。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kanban Status Updater

> [!Note] 插件名片
> - 插件名称：Kanban Status Updater
> - 插件作者：Ankit Kapur
> - 插件说明：当笔记对应的卡片在看板上移动时，自动更新笔记中的“状态”属性。
> - 插件分类：['任务管理', '自动化与AI', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ankit-kapur/obsidian-kanban-status-updater-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kanban-status-updater)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ankit-kapur/obsidian-kanban-status-updater-plugin/main/README.md)

![Kanban Status Updater](https://cdn.pkmer.cn/covers/kanban-status-updater_2_0.gif!pkmer)

## 概述

Kanban Status Updater 是一款专为 Obsidian Kanban 看板设计的轻量级插件，主要功能是在移动看板卡片时自动更新对应笔记的 frontmatter 属性（默认为 "status"），使其与当前列名同步。该插件解决了手动更新状态属性的繁琐问题，并优化性能仅监控当前活跃看板，支持自定义属性名、更新可视化反馈及调试模式。适用于需要跨看板统一管理任务状态的场景（如通过 Dataview 查询所有未完成任务），相比 MetaEdit 插件更快速稳定。安装需配合 Obsidian Kanban 插件使用，卡片必须包含笔记内部链接（如 `[[Note Title]]`），基础功能无需配置即可运行，支持在设置中调整状态属性名称、通知开关等。插件通过限制监控范围、断开非活跃视图观察者等方式确保性能，若遇问题可检查卡片链接有效性或启用调试模式排查。兼容 Obsidian v1.1.0 和 Kanban 插件 v1.3.0 及以上版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



