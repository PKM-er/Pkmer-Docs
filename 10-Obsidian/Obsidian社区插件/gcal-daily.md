---
uid: 1793625613278000
title: "Obsidian 插件：GCal Daily"
tags: ["日历与时间", "第三方工具集成", "模板与链接处理", "obsidian插件"]
description: "Insert a day's Google Calendar schedule (via gcloud credentials) into notes, e.g. from a Templater daily-note template. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GCal Daily

> [!Note] 插件名片
> - 插件名称：GCal Daily
> - 插件作者：Maggie Wang
> - 插件说明：Insert a day's Google Calendar schedule (via gcloud credentials) into notes, e.g. from a Templater daily-note template. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '第三方工具集成', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/maggiewyzw/obsidian-gcal-daily)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gcal-daily)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/maggiewyzw/obsidian-gcal-daily/master/README.md)



## 概述

GCal Daily 旨在解决每日笔记中手动整理日程的繁琐问题，核心功能是将 Google 日历中指定日期的事件自动插入到 Obsidian 笔记中。它通过读取本地 gcloud 凭证文件获取授权，调用 Google Calendar API 拉取数据，并将全天事件、具体时间段、会议链接及地点等信息，以项目符号列表或表格的形式渲染为 Markdown 文本。该插件仅执行读取操作，不会修改你的日历数据，且对事件标题中的特殊字符进行了安全转义，防止恶意 Markdown 或 HTML 注入。

典型使用场景是配合 Templater 插件的每日笔记模板。你只需在模板中添加一行代码，每次创建新的一天笔记时，当天所有的日程安排就会自动出现在笔记开头，让你一眼看清全天的安排。此外，你也可以通过命令面板手动触发插入功能，这非常适合用于补全旧笔记中缺失的日程，或在网络波动导致首次获取失败后重新尝试加载数据。

相比其他日历插件，GCal Daily 的特色在于其轻量级的“一次性快照”机制。它不建立实时同步连接，而是在插入时获取一次数据，这意味着笔记内容固定，不会因日历后续变动而自动更新，适合归档用途。插件支持合并多个日历源，并通过自定义标记（如 🏠）区分不同日历的事件，同时清晰展示 RSVP 状态（如已接受、已拒绝），让日程概览更加直观且信息密度高。

使用前需注意，该插件仅支持 Obsidian 桌面版，移动端无法使用，因为需要读取本地计算机上的 gcloud 凭证文件。此外，配置过程涉及 Google Cloud 项目设置和 gcloud 命令行工具，对纯小白用户有一定门槛。如果你需要日历事件在笔记中实时同步更新，或者希望在手机上查看日程，这款插件并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


