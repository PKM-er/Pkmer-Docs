---
uid: 20240311151852
title: Thino 日历布局
tags: [Obsidian, Obsidian插件, Thino, memos]
description: Thino 日历布局
author: Bon,PKMer,OS
type: other
draft: false
editable: false
modified: 20250122192752
id: a22dbbe164778555
---

# Thino 日历布局

> [!Note] 功能名片
> - 此功能在 Thino 2.3.0 引入
> - 此功能依赖 Thino Pro

Thino 一直以来都在找寻编辑的处理数据，展示数据的更优质方法。

如果你喜欢日历方式来管理自己记录和日程，那么新增的日历布局希望适合你

- 日历模式支持 4 种子视图模式：
	- 月视图或叫月历视图
	- 日程视图（或者叫单日视图）
	- 周视图：会议工作周和时间维度来形成表格
- 日历导航条：支持使用左上角导航条，根据当前视图模式，进行前一个月日周或后一个月日周的切换，点击导航条中间圆点，定位会当前月。

>[!Warning] 提示
>- 因为除了列表布局外，其他布局模式对宽度都有要求，所以在 Thino 窗口宽度较窄，或者移动端的情况下， 我们主动隐藏了对应的布局模式切换器。
>- 另外如果你当前正处于其他模式，当宽度变为无法展示的情况下，Thino 也会主动变为列表模式

## 月视图

以月历形式展示你的 Thino 笔记：

- 列：会以周一到周日排列展示
- 行：会按照日期方式显示
- 单元格：
	- 按住 ctrl 情况下鼠标指向对应内容，会以浮窗形式显示全部内容
	- 超过单元格展示数量内容会自动折叠收齐，并以数字形式提示
	- 点击会回自动切换到 [[Thino Calendar Layout#日视图]]

![image.png|1000](https://cdn.pkmer.cn/images/20240311172836.png!pkmer)

## 日程视图

会以当前周日程表格的样式展示你 Thino 记录

- 表格横向：以日期，具体时间，和事项（即你的 thino 记录为准）
- 表格纵向：会以当前

![image.png](https://cdn.pkmer.cn/images/20240311174244.png!pkmer)

## 周视图

会以当前周日程样式展示你 Thino 记录，这个方式很类似 Outlook

- 表格横向：以星期来排列
- 表格纵向：会以当以从 00:00~23:00 每个小时为间隔显示

![image.png](https://cdn.pkmer.cn/images/20240311174707.png!pkmer)

## 日视图

会以当前周日程样式展示你 Thino 记录，这个方式很类似 Outlook

- 表格横向：以当前日期显示，如 星期一 3 月 11
- 表格纵向：会以当以从 00:00~23:00 每个小时为间隔显示

![image.png](https://cdn.pkmer.cn/images/20240311174717.png!pkmer)
