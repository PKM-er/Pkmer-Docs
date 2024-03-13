---
uid: 2023080322263915
title: Obsidian 插件：Set In Obsidian
tags: ['obsidian插件', 'readme']
description: 时间规划插件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Set In Obsidian

> [!Note] 插件名片
> - 插件名称：Set In Obsidian
> - 插件作者：Sandorex
> - 插件说明：时间规划插件
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sandorex/set-in-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?set-in-obsidian)

## 概述

时间规划插件

![Set In Obsidian](https://cdn.pkmer.cn/covers/set-in-obsidian.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sandorex/set-in-obsidian-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[set-in-obsidian]] 插件的自述翻译

# 在 Obsidian 插件中设置

这是一个允许在 Obsidian 中进行时间规划的插件。

> **警告：**在 1.1.x 版本发布之前，该插件应被视为测试版软件。

_这个插件是作为 [obsidian-day-planner](https://github.com/lynchjames/obsidian-day-planner) 的简化替代品而制作的。_

## 快速使用指南

该插件在任何列表项的开头的内联代码反引号中查找以 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) 格式表示的日期，以下是一些语法示例：

```
- `2022-12-09T14:00` 整天事件（从14:00到24:00）
- `2022-12-09T14:00 PT2H` 从14:00开始，持续2小时的事件
- `2022-12-09 2022-12-11` 从12月9日24:00到12月11日24:00的事件
```

您还可以使用 [RRule](https://jakubroztocil.github.io/rrule/) 创建重复事件（iCalendar RFC 字符串将在未来版本中提供）：

```
- `2022-12-01 every 3 days` 每3天发生一次
```

在列表视图中将显示如下：

![img](screenshots/screenshot-list.png)

月视图如下 ![img](screenshots/screenshot-month.png)

### 嵌入日历

您可以使用带有 `set-in-obsidian` 作为语言的代码块将日历嵌入到您的笔记中

````markdown
```set-in-obsidian
{
	...可选的JSON选项...
}
```
````

**注意：您根本不需要 `{}`，它可以为空以使用默认选项**

有几个预定义选项

- `set-in-obsidian` 与日历视图相同
- `set-in-obsidian-custom` 与日历视图相同，但没有全局事件，使用 `events` 或 `files` 指向将被读取的文件（覆盖 `set-in-obsidian-ignore`），设置 `useThisFile` 以从源文件获取事件
- `set-in-obsidian-minimal` 最小化的用户界面，没有全局日历，基本上是空白的

要查看可用选项，请查看 [src/calendar.ts](src/calendar.ts) 中的 `EmbeddedCalendarOptions`

## 公共 API

该插件具有公共 API，目前它只公开了对 [FullCalendar API](https://fullcalendar.io/docs#toc) 的访问，这使得其他插件也可以使用日历

**任何标记为 `@public` 的函数都应被视为公共 API**

不兼容的插件

由于插件使用了 [fullcalendar](https://github.com/fullcalendar/fullcalendar)，其他使用该插件的插件可能会根据它们编写的 CSS 样式而影响日历的外观（例如 [davish/obsidian-full-calendar](https://github.com/davish/obsidian-full-calendar)）。

安装

### 在 Obsidian 内部

您可以通过以下步骤在 Obsidian 中安装此插件：

- 打开设置并转到“社区插件”
- 确保“安全模式”处于关闭状态
- 在“社区插件”下点击“浏览”
- 搜索“Set In Obsidian”并点击它
- 点击“安装”
- 完成后点击“启用”

### 手动安装

- 从 [这里](https://github.com/sandorex/set-in-obsidian-plugin/releases/latest/download/set-in-obsidian.zip) 下载最新的插件压缩包，并解压到 `.obsidian/plugin/` 目录中
- 在设置中的社区插件中启用该插件

## 特别感谢

- [fullcalendar 开发者](https://github.com/fullcalendar/fullcalendar)
- Stackoverflow
- [obsidian discord](https://discord.com/invite/obsidianmd) 上的朋友们

## 支持我

如果你觉得这个插件有用，请考虑给我一些小费，这样我的大脑就会释放一些快乐的化学物质

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C0C7GVMY1)
