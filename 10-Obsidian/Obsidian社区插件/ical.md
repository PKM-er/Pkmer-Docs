---
uid: 2024052908534246
title: Obsidian 插件：iCal
tags: ['文件管理', '日历与时间', '移动端优化', 'obsidian插件']
description: 扫描您的保险库以查找包含日期的任务。创建一个iCal文件并将其存储在您的保险库或Gist上。然后，您可以在任何兼容iCal的客户端（如Outlook、Google Calendar、Apple Calendar等）中显示此日历。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：iCal

> [!Note] 插件名片
> - 插件名称：iCal
> - 插件作者：Andrew Brereton
> - 插件说明：扫描您的保险库以查找包含日期的任务。创建一个 iCal 文件并将其存储在您的保险库或 Gist 上。然后，您可以在任何兼容 iCal 的客户端（如 Outlook、Google Calendar、Apple Calendar 等）中显示此日历。
> - 插件分类：[' 文件管理 ', ' 日历与时间 ', ' 移动端优化 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/andrewbrereton/obsidian-to-ical-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ical)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/andrewbrereton/obsidian-to-ical-plugin/main/README.md)

## 概述

Obsidian to iCal 插件扫描您的 Vault，查找包含日期的任务，并生成 iCal 格式的日历文件，可导入到 Outlook、Google Calendar、Apple Calendar 等 iCal 兼容的客户端中。插件会定期执行以下操作：1.查找 Vault 中所有任务（有效任务是包含格式为 YYYY-MM-DD 的日期的 Markdown 复选框），2.生成包含所有任务的 iCal 日历文件，3.任务后附带表情符号以快速查看状态（✅已完成，🔲待办，🏃进行中，🚫已取消），4.可选择将日历保存到文件系统和/或 GitHub Gist。支持 Obsidian 任务表情符号格式。兼容的日历包括 Google Calendar、Apple Calendar、Microsoft Outlook 等。Vault 将定期扫描任务变化，保持日历更新。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



