---
uid: 20250415132613
title: Obsidian 插件：View Count 跟踪记录仓库内文件的查看次数
tags: ['数据处理', '搜索与排序', '编辑工具', 'obsidian插件']
description: 跟踪每个保险库文件的查看次数。
author: OS
type: other
draft: false
editable: false
modified: 20250415132613
---

# Obsidian 插件：View Count 跟踪记录仓库内文件的查看次数

## 概述

在知识管理和回顾过程中，有同学希望能够知道哪些自己记录的知识，其实自己并不常回顾，自动为查看的内容增加一个查看次数。用户可以通过属性或者状态栏底部查看浏览次数，可以根据插件配置进行设置。

运作原理：插件默认会在每个打开的文件中保存浏览次数，并且每天会自动增加一次【一天内多次打开是不重复计算的】。用户可以通过侧边栏的眼睛图标查看浏览次数最多的 20 个笔记，适用于需要追踪和统计笔记浏览次数的场景。

> [!Note] 插件名片
> - 插件名称：View Count
> - 插件作者：Trey Wallis
> - 插件说明：跟踪每个保险库文件的查看次数。
> - 插件分类：[' 数据处理 ', ' 搜索与排序 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/trey-wallis/obsidian-view-count)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?view-count)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/decaf-dev/obsidian-view-count/master/README.md)

## 效果&特性

![View Count](https://cdn.pkmer.cn/covers/view-count.gif!pkmer)

## 使用

默认情况下，该插件将在侧边栏中添加一个名为“视图计数”的视图。用户可以通过打开侧边栏并单击眼睛图标来访问此视图。如果视图未打开，可以从命令选项板运行“打开视图计数视图”。

视图计数中有两个不同的列表：

- 按降序排列的 vault 中查看次数最多的笔记列表。点击眼睛图标查看此列表。
- 按降序排列的趋势权重最高的笔记列表。点击趋势图标查看此列表。

插件提供了两种存储方式：

- 属性存储和文件存储，每种方式都有其优缺点。属性存储将浏览次数信息存储在每个笔记的 frontmatter 中
- 文件存储则将浏览次数存储在一个名为 `view-count.json` 的 JSON 文件中。用户可以根据自己的需求选择合适的存储方式。

## 进阶使用

查询视图计数使用 DataView，需要你启用属性（FrontMatter）的同步视图计数方式，则可以从每个音符的前材中查询视图计数属性。

````
```dataview
TABLE view-count AS "View Count" SORT view-count DESC LIMIT 10
```
````

最近 7 天使用 DataviewJS 的趋势笔记

````
```dataviewjs
const plugin = this.app.plugins.plugins["view-count"];
const cache = plugin.viewCountCache;

const TIME_PERIOD = "7-days";

dv.table(["Name", "Trending Weight"],
    dv.pages().sort(p => cache.getTrendingWeight(p.file, TIME_PERIOD), "desc")
        .map(p => [p.file.name, cache.getTrendingWeight(p.file, TIME_PERIOD)])
	        .slice(0,10)
);
```
````