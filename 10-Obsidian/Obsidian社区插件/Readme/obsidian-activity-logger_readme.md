---
uid: 20230803211906
title: Obsidian 插件：【Readme】Activity Logger
tags: ['文件历史', 'obsidian插件', 'readme']
description: 记录你的活动，如创建笔记、修改笔记、删除笔记等等。该功能可能在1.0.0 之后的版本使用异常。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Activity Logger

> [!Note] 插件名片
> - 插件名称：Activity Logger
> - 插件作者：Creling
> - 插件说明：记录你的活动，如创建笔记、修改笔记、删除笔记等等。该功能可能在1.0.0 之后的版本使用异常。
> - 插件分类：['文件历史', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Creling/obsidian-activity-logger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-activity-logger)

## 概述

记录你的活动，如创建笔记、修改笔记、删除笔记等等。该功能可能在1.0.0 之后的版本使用异常。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Creling/obsidian-activity-logger/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-activity-logger]] 插件的自述翻译



<!--
 * @作者：Creling
 * @日期：2021年08月03日 10:04:10
 * @最后编辑者：Creling
 * @最后编辑时间：2021年08月04日 16:06:31
 * @描述：文件内容
-->
# 活动记录器

记录您的活动，如创建笔记、修改笔记、删除笔记等等。

## 特点

- 幂等性，这意味着您可以多次执行命令，而不会插入重复的日志，而是更新现有的日志。

- 模板支持，这意味着您可以定义自己的输出。

开始使用

### 设置

**开始行**: 在此行之后，日志将被插入。请**勿**将其留空。

**结束行**: 在此行之前，日志将被插入。请**勿**将其留空。

如果当前笔记中存在`开始行`和`结束行`，插件将在它们之间插入日志，否则将在光标后插入`开始行`、日志和`结束行`。

**模板**: 一个包含三个特殊变量(`$createdFiles`、`$deletedFiles`和`$modifiedFiles`)的代码片段。

与这三个变量在同一行上的任何字符以及变量本身组成一个占位符。在插入日志时，这些变量将被替换为文件路径，并保留附加字符。也就是说，`- $createdFiles`将获得一个无序列表，其中包含今天创建的文件，而`- [[$createdFiles]]`将获得一个类似的列表，但所有项目都是Obsidian内部链接。

### 技巧

`开始行`和`结束行`有点丑陋，但我们可以将它们纳入我们的Obsidian模板中。假设我们有一个像这样的模板：

# YYYY-MM-DD

日常活动

## 每日计划
……………………
```
我们可以将“开始行”设置为“## 每日活动”，将“结束行”设置为“## 每日计划”。然后日志将插入在这两个标题之间，没有任何丑陋的标记！。



