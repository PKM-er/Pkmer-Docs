---
uid: 20230901084916
title: Obsidian 插件：【Readme】ICS
tags: ['obsidian插件', 'readme']
description: 根据当前打开的每日笔记，将从网络上发布的日历ics中的事件添加到每日笔记中。从当前打开的每日笔记中获取要搜索事件的日期。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】ICS

> [!Note] 插件名片
> - 插件名称：ICS
> - 插件作者：muness
> - 插件说明：根据当前打开的每日笔记，将从网络上发布的日历 ics 中的事件添加到每日笔记中。从当前打开的每日笔记中获取要搜索事件的日期。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/muness/obsidian-ics)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ics)

## 概述

根据当前打开的每日笔记，将从网络上发布的日历 ics 中的事件添加到每日笔记中。从当前打开的每日笔记中获取要搜索事件的日期。

![ICS](https://cdn.pkmer.cn/covers/ics.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/muness/obsidian-ics/master/README.md)

---

## Readme(翻译）

下面是 [[ics]] 插件的自述翻译

# Obsidian ICS 插件

这是一个为 [Obsidian](https://obsidian.md) 设计的插件。它可以根据需要将 Google 日历 ICS 链接中的事件添加到你的每日笔记中。

这个插件只能与每日笔记或 [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes) 插件一起使用：具体来说，它会从当前打开的每日笔记中获取要搜索事件的日期。

开发状态

这个功能已经可以使用，尽管我最近修复了一些时区偏移和缺失重复事件的问题。一旦我有几天时间确认这些修复，我就会开始将其提交到 Obsidian 社区插件市场。欢迎提交 PR 和其他帮助！

## 安装

手动安装

1. 从 [releases](https://github.com/muness/obsidian-ics/releases) 下载最新的 `obsidian-ics-[version].zip` 文件。
2. 解压文件。它应该创建一个 `obsidian-ics` 文件夹。
3. 将文件夹放置在您的 `.obsidian/plugins` 目录中。
4. 重新加载插件。
5. 激活 `ICS` 插件。

## 使用方法

1. 从 Google 日历中，在左侧边栏中找到日历，点击垂直的…菜单，选择“设置和共享”，选择“集成日历”，复制 iCal 格式的秘密地址。
2. 将该 URL 输入到设置中，并设置一个日历名称。
3. 转到每日笔记，使用“ICS: 导入事件”命令。

![设置截图](https://github.com/muness/obsidian-ics/blob/master/docs/2021-08-11-22-18-21.png?raw=true)

## 支持

如果你想支持我的工作，你可以 [给我买杯咖啡](https://www.buymeacoffee.com/muness)。

## 贡献

- 来自 @zakkolar 的 [DST修复](https://github.com/muness/obsidian-ics/pull/17)
- 来自 @fcwheat 的 [Readme改进和发布脚本清理](https://github.com/muness/obsidian-ics/pull/22)
- 来自 @bvolkmer 的 [导出事件获取函数](https://github.com/muness/obsidian-ics/pull/33)
- 来自 @TopherMan 的 [允许插件在移动设备上运行](https://github.com/muness/obsidian-ics/pull/46)



