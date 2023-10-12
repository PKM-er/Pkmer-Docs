---
uid: 20231012004506
title: Obsidian 插件：Size History 用一个简单图表来展示查看仓库中笔记的增长曲线
tags: [关系图谱, 美化, obsidian插件]
description: Obsidian 插件：Size History 用一个简单图表来展示查看仓库中笔记的增长曲线
author: OS
type: basic
draft: false
editable: false
modified: 20231012005952
---

# Obsidian 插件：Size History 用一个简单图表来展示查看仓库中笔记的增长曲线

## 概述

通过一个简单图表来表示仓库笔记数量的增长曲线

> [!Note] 插件名片
> - 插件名称：Size History
> - 插件作者：Piotr Borowski
> - 插件说明：用“手绘”图表来展示 Obsidian 仓库中文件的增长曲线
> - 插件分类：[' 统计 ', ' 图标 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/pbrw/obsidian-size-history)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?size-history)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20231012004828.png!pkmer)

## 使用

- 安装后，通过点击 Ribbon 区域的图标即可。
- 点击后会弹出一个独立对话框，展示对应的图表
	- 图表的横坐标轴为时间
	- 纵坐标轴为仓库中文件数量

### 设置

如果你没有特殊要求，那么保持默认设置即可，并不会影响图标的展示

- Maximum number of edits：要保留的最大编辑数，设置为 0 表示没有限制。旧的编辑将在下一次更新中从历史记录中删除，以减少历史记录为代价减少编辑历史文件的大小。
- Maximum age of edits：以秒为单位保存的最老编辑，例如设置为 3600 以删除超过一小时的编辑，设置为 0 表示没有限制。旧的编辑将在下一次更新中从历史记录中删除，以减少历史记录为代价减少编辑历史记录文件的大小。
- Maximum size of the history file(KB)：记录历史文件最大限制，默认设置 0，便是不限制。
- File extension whitelist：白名单机制，在此加入的后缀名会计入统计。

![image.png](https://cdn.pkmer.cn/images/20231012005016.png!pkmer)
