---
uid: 2025042920510208
title: Obsidian 插件：Outlook Meeting Notes
tags: ['任务管理', '日历与时间', '效率工具', 'obsidian插件']
description: 为 Outlook 日程安排和会议创建会议记录。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Outlook Meeting Notes

> [!Note] 插件名片
> - 插件名称：Outlook Meeting Notes
> - 插件作者：David Ingerslev
> - 插件说明：为 Outlook 日程安排和会议创建会议记录。
> - 插件分类：['任务管理', '日历与时间', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/davidingerslev/outlook-meeting-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?outlook-meeting-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/davidingerslev/outlook-meeting-notes/master/README.md)



## 概述

Outlook Meeting Notes 是一款 Obsidian 插件，通过拖拽 Outlook 桌面应用中的会议 .msg 文件到插件图标上，自动生成包含会议详情（如日期/时间、主题、参与人、邀请信息等）的笔记，并支持自定义模板。该插件解决了用户需手动整理会议信息的问题，特别适用于需要高效记录和管理会议笔记的场景。插件不依赖 Outlook 内部代码或 Microsoft Graph API 授权，直接解析 .msg 文件，支持自定义笔记存储路径、文件名格式（使用 Mustache 语法）及内容模板（可调用辅助函数如日期格式化、提取首字母等）。默认模板会将会议信息写入笔记的 frontmatter 中，并支持处理重复会议（但需注意日期默认使用系列首次会议的日期）。插件兼容 Outlook Classic 桌面版，适合需要在 Obsidian 中集中管理会议记录的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



