---
uid: 20230803204925
title: Obsidian 插件：【Readme】Todoist Sync Plugin
tags: ['第三方工具集成', '任务管理', 'obsidian插件', 'readme']
description: 让 Obsidian 和你的 Todoist 任务列表联动，你可以在 Obsidian 中操作对应的任务列表。
author: jamiebrynes7
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Todoist Sync Plugin

> [!Note] 插件名片
> - 插件名称：Todoist Sync Plugin
> - 插件作者：jamiebrynes7
> - 插件说明：让 Obsidian 和你的 Todoist 任务列表联动，你可以在 Obsidian 中操作对应的任务列表。
> - 插件分类：['第三方工具集成', '任务管理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jamiebrynes7/obsidian-todoist-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?todoist-sync-plugin)

## 概述

让 Obsidian 和你的 Todoist 任务列表联动，你可以在 Obsidian 中操作对应的任务列表。

![Todoist Sync Plugin](https://cdn.pkmer.cn/covers/todoist-sync-plugin.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jamiebrynes7/obsidian-todoist-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[todoist-sync-plugin]] 插件的自述翻译


# Obsidian x Todoist 插件

![GitHub Workflow 状态](https://img.shields.io/github/actions/workflow/status/jamiebrynes7/obsidian-todoist-plugin/premerge.yml?branch=develop&style=for-the-badge) ![GitHub 发布版本 (最新 SemVer)](https://img.shields.io/github/v/release/jamiebrynes7/obsidian-todoist-plugin?style=for-the-badge)

一个 [Obsidian](https://obsidian.md/) 插件，用于在 Obsidian 笔记中实现 [Todoist](https://todoist.com/) 任务列表的可视化。

![示例动画](./assets/obsidian-todoist-sync.gif)

## 使用方法

1. 通过 Obsidian 的插件浏览器安装插件。
2. 在 Obsidian 中启用插件。
3. 您应该会收到一个提示，要求您输入 [Todoist API 令牌](https://todoist.com/prefs/integrations)。（如果没有，您可以在设置中输入此令牌）。
4. 在任何笔记中放置一个类似以下的代码块：
   ````markdown
   ```todoist
   name: My Tasks
   filter: "today | overdue"
   ```
   ````
5. 切换到预览模式，插件应该会用该筛选器的结果替换此代码块。

> 如果您正在同步您的 vault，出于安全原因，我建议明确忽略 `.obsidian/todoist-token` 文件，如果可能的话。

## 输入

查询以YAML格式定义，并接受以下键：

| 名称          | 必需     | 描述                                                                                                                                            | 类型     | 默认值 |
| ------------- | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------- |
| `name`        |    ✓     | 查询的标题。您可以使用`{task_count}`模板，它将被查询返回的任务数量替换。     | 字符串   |         |
| `filter`      |    ✓     | 一个有效的[Todoist过滤器](https://get.todoist.help/hc/en-us/articles/205248842-Filters)<sup>[1](#footnote-1)</sup>                                      | 字符串   |         |
| `autorefresh` |          | 自动刷新之间的秒数。如果省略，查询将使用默认的全局设置。                                                  | 数字   | null    |
| `sorting`     |          | 描述如何对查询中的任务进行排序。可以是'priority'、'dateAscending'（别名为'date'）、'dateDescending'或这些的组合。 | 字符串数组 | []      |
| `group`       |          | 表示此查询是否应该按项目和部分对其任务进行分组。                                                                          | 布尔值     | false   |

## 示例

显示当前和过期的任务，按日期和优先级排序，最后按项目和部分分组。

````markdown
```todoist
name: 最高优先级和日期
filter: "today | overdue"
sorting: 
   - date
   - priority
group: true
```
````

仅显示收件箱。

````
```todoist
name: 收件箱
filter: "#Inbox"
```
````

## 命令

插件中还包含了一些命令：

1. '刷新元数据'

   此命令会刷新所有Todoist任务的元数据（项目、部分和标签）。这在启动时完成。

2. '添加Todoist任务'

   此命令会打开一个模态框，用于在Todoist中创建任务。您可以通过此模态框设置项目/部分、标签、优先级和截止日期。执行此命令时选择的任何文本都将被用作任务内容。

3. '添加带有当前页面的Todoist任务'

   类似于前一个命令，此命令还会将当前活动页面的链接附加到任务输入中。

## CSS

该插件附带了默认的CSS，适用于默认的Obsidian主题。

我还维护了一个Obsidian主题，该主题直接支持该插件，如果想查看该插件的完整CSS示例，请查看[源代码](https://github.com/jamiebrynes7/moonlight-obsidian-theme/blob/master/src/modules/extensions/todoist.scss)。

---

: Todoist API中有一些例外情况。有关详细信息，请查看[此问题](https://github.com/jamiebrynes7/obsidian-todoist-plugin/issues/34)。



