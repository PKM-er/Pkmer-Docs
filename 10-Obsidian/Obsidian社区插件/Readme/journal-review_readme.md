---
uid: 2023080322204851
title: Obsidian 插件：Journal Review
tags: ['obsidian插件', 'readme']
description: 回顾你每天的笔记，比如“去年的今天发生了什么”。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Journal Review

> [!Note] 插件名片
> - 插件名称：Journal Review
> - 插件作者：Kageetai
> - 插件说明：回顾你每天的笔记，比如“去年的今天发生了什么”。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Kageetai/obsidian-plugin-journal-review)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?journal-review)

## 概述

回顾你每天的笔记，比如“去年的今天发生了什么”。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Kageetai/obsidian-plugin-journal-review/master/README.md)

---

## Readme(翻译）

下面是 [[journal-review]] 插件的自述翻译

# Obsidian 插件日志回顾

这是一个插件，帮助您在纪念日时“回顾”您的日常笔记。

它从您的所有日常笔记中提取（如果有 Periodic Notes 插件，则还使用其设置），并以视图的形式呈现以前时间段中同一天的笔记，可以通过功能区按钮或命令面板激活。

## 安装

1. 在 Obsidian 的社区插件列表中找到 "Journal Review"
2. 点击 " 安装 " 和 " 启用 "
3. 根据您的喜好配置 " 选项 "

使用方法

通过功能区图标或命令面板打开“当天”视图，它将显示以前每日笔记的摘录。

当创建新的每日笔记或接近午夜时，视图将刷新以反映更改。

选项

时间跨度

要审查的时间跨度，每行一个，格式为 " 数字 单位 "，其中单位可以是 "days"、"weeks"、"months" 或 "years" 之一，更多信息请参见此处：<https://momentjs.com/docs/#/durations/>

```
1个月
6个月
1年
2年
3年
```

查找边距

在检查日期之前和之后包括的天数

`0`

### 预览长度

每个笔记显示的预览文本长度

`200`
