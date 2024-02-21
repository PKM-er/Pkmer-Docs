---
uid: 2024022117272030
title: Obsidian 插件：【Readme】Daily ICalendar
tags: ['obsidian插件', 'readme']
description: 查看日历事件在每日笔记中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Daily ICalendar

> [!Note] 插件名片
> - 插件名称：Daily ICalendar
> - 插件作者：mmmykhailo
> - 插件说明：查看日历事件在每日笔记中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mmmykhailo/obsidian-daily-icalendar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daily-icalendar)

## 概述

查看日历事件在每日笔记中。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mmmykhailo/obsidian-daily-icalendar/master/README.md)
> 

---

## Readme(翻译）

下面是 [[daily-icalendar]] 插件的自述翻译

【机翻】
# 黑曜石每日 ICalendar 插件

这是一个为 Obsidian（https://obsidian.md）设计的插件。

它提供了一种在指定日期检索事件列表的方法。通过输入一个日期和一组 ICS 链接，它检索相应的日历并以列表形式显示事件。结果存储在本地存储中，以便在后续请求中快速访问。
- 将 `main.js`、`styles.css`、`manifest.json` 复制到您的 vault `VaultFolder/.obsidian/plugins/obsidian-daily-icalendar/`。
## 用法示例
~~~markdown
```icalendarList
2023-11-16
https://calendar.google.com/calendar/ical/user%40gmail.com/basic.ics
https://calendar.google.com/calendar/ical/.../basic.ics
```
~~~
将返回事件或标签，告知没有计划的事件。
![无事件截图](https://cdn.pkmer.cn/covers/daily-icalendar_2_0.png!pkmer)
![事件截图](https://cdn.pkmer.cn/covers/daily-icalendar_2_1.png!pkmer)
## 致谢
受 [obsidian-ics](https://github.com/muness/obsidian-ics) 的启发。

如果您想对插件有更多控制，可以考虑使用 obsidian-ics。

Daily ICalendar 插件是考虑到缓存和狭窄用例而制作的。



