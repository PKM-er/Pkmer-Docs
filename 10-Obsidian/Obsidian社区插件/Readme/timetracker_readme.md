---
uid: 2023102611084159
title: Obsidian 插件：【Readme】Timetracker
tags: ['obsidian插件', 'readme']
description: 添加一个秒表，其值可以通过热键插入到编辑器中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Timetracker

> [!Note] 插件名片
> - 插件名称：Timetracker
> - 插件作者：Nils Dammenhayn
> - 插件说明：添加一个秒表，其值可以通过热键插入到编辑器中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/hedgehog1833/obsidian-timetracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?timetracker)

## 概述

添加一个秒表，其值可以通过热键插入到编辑器中。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/hedgehog1833/obsidian-timetracker/main/README.md)
> 

---

## Readme(翻译）

下面是 [[timetracker]] 插件的自述翻译


# Obsidian计时器插件

这个Obsidian插件添加了一个秒表来追踪某个事物的时间。通过热键，可以将秒表的当前值插入到编辑器中，以便记录此刻的时间。
秒表功能是对https://github.com/tokuhirom/obsidian-stopwatch-plugin的完全重写克隆。
配置
### 刷新间隔

秒表的刷新速率，以毫秒为单位。默认值为`100`。有效值范围为1至1000毫秒。
### 时间格式

打印秒表当前值的格式。默认为 `HH:mm:ss.SSS`。更多格式请参见[这里](https://github.com/jsmreese/moment-duration-format#template-string)。
修剪

允许去除前导零，如果给定的格式允许的话。启用此设置后，`mm:ss.SSS` 将不会在秒表达到一分钟之前显示分钟。



