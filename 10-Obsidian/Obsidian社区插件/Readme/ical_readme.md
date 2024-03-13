---
uid: 2023120522253180
title: Obsidian 插件：【Readme】iCal
tags: ['obsidian插件', 'readme']
description: 扫描您的保险库以查找包含日期的任务。创建一个iCal文件并将其存储在您的保险库或Gist上。然后，您可以在任何兼容iCal的客户端（如Outlook、Google Calendar、Apple Calendar等）中显示此日历。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】iCal

> [!Note] 插件名片
> - 插件名称：iCal
> - 插件作者：Andrew Brereton
> - 插件说明：扫描您的保险库以查找包含日期的任务。创建一个 iCal 文件并将其存储在您的保险库或 Gist 上。然后，您可以在任何兼容 iCal 的客户端（如 Outlook、Google Calendar、Apple Calendar 等）中显示此日历。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/andrewbrereton/obsidian-to-ical-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ical)

## 概述

扫描您的保险库以查找包含日期的任务。创建一个 iCal 文件并将其存储在您的保险库或 Gist 上。然后，您可以在任何兼容 iCal 的客户端（如 Outlook、Google Calendar、Apple Calendar 等）中显示此日历。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/andrewbrereton/obsidian-to-ical-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[ical]] 插件的自述翻译

# Obsidian 到 iCal

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，它会搜索您的 Obsidian vault 中包含日期的任务，并生成一个 iCal 格式的日历，可以导入到您喜欢的日历应用程序中。

## 工作原理

插件会定期执行以下操作：

1. 查找您的存储库中的所有任务（有效的任务是指包含格式为 YYYY-MM-DD 的日期的 Markdown 复选框，无论是否被选中），
2. 生成一个包含所有这些任务的 iCal 日历文件，
3. 任务后面会添加一个表情符号，以便快速查看其状态（✅ 已完成，🔲 待办，🏃 进行中，🚫 已取消），
4. 可选择将日历保存到您的文件系统中，和/或
5. 可选择将日历存储在 GitHub Gist 上。

如果您选择将日历存储在 Gist 上，您可以在首选的日历应用程序中使用 Gist 的 URL。

为了保持日历的最新状态，您的存储库将定期扫描任务的更改情况。

对 Obsidian 任务的支持

该插件对 [Obsidian任务表情符号格式](https://publish.obsidian.md/tasks/Reference/Task+Formats/Tasks+Emoji+Format) 具有基本的支持。

## 兼容的日历

* Google 日历
* Apple 日历
* Microsoft Outlook
* Mozilla Thunderbird 和 SeaMonkey 的 Lightning 扩展
* Yahoo!日历
* GNU Emacs
* HCL Domino（前身为 IBM Notes 和 Lotus Notes）
* GNOME Evolution
* eM Client
* Novell GroupWise
