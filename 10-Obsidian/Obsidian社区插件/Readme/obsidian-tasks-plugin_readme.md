---
uid: 2023080322275496
title: Obsidian 插件：Tasks
tags: ['任务管理', '自动化', 'obsidian插件', 'readme']
description: Obsidian 增强任务管理，为任务增加优先级，计划日期，完成日期等自动化和图形化操作界面。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Tasks

> [!Note] 插件名片
> - 插件名称：Tasks
> - 插件作者：Martin Schenck and Clare Macrae
> - 插件说明：Obsidian 增强任务管理，为任务增加优先级，计划日期，完成日期等自动化和图形化操作界面。
> - 插件分类：[' 任务管理 ', ' 自动化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/obsidian-tasks-group/obsidian-tasks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tasks-plugin)

## 概述

Obsidian 增强任务管理，为任务增加优先级，计划日期，完成日期等自动化和图形化操作界面。

![Tasks](https://cdn.pkmer.cn/covers/obsidian-tasks-plugin.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/obsidian-tasks-group/obsidian-tasks/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-tasks-plugin]] 插件的自述翻译

<h1 align="center">Obsidian 任务</h1>

<p align="center">为 知识库提供任务管理。</p>

<p align="center"></p>

跟踪整个 vault 中的任务。在任何位置查询并标记任务为已完成。支持截止日期、重复任务、完成日期、子任务清单项和筛选。

_您可以在任何视图或查询中切换任务状态，它将更新源文件。_

---

有关每个版本的更改，请查看发布页面：<https://github.com/obsidian-tasks-group/obsidian-tasks/releases>

---

## 截图

- _所有截图都假设 [全局过滤器](https://publish.obsidian.md/tasks/Getting+Started/Global+Filter)`#task`，默认情况下未设置（另请参阅 [安装](https://publish.obsidian.md/tasks/Installation/Installation)）。_
- _主题是默认的 Obsidian 主题。_

![ACME任务](https://github.com/obsidian-tasks-group/obsidian-tasks/raw/gh-pages/docs/images/acme.png)

`ACME` 笔记中有一些任务。

![重要项目任务](https://github.com/obsidian-tasks-group/obsidian-tasks/raw/gh-pages/docs/images/important_project.png)

`重要项目` 笔记中也有一些任务。

![任务查询](https://github.com/obsidian-tasks-group/obsidian-tasks/raw/gh-pages/docs/images/tasks_queries.png)

`任务` 笔记从存储库中收集所有任务，并使用查询显示它们。

![创建或编辑模态框](https://github.com/obsidian-tasks-group/obsidian-tasks/raw/gh-pages/docs/images/modal.png)

`任务：创建或编辑` 命令在编辑任务时帮助您。

## 安装

按照以下步骤安装 Tasks 插件。

1. 在 Obsidian 的社区插件浏览器中搜索 "Tasks"。
2. 在 Obsidian 设置中启用插件（在 "Community plugins" 下找到 "Tasks"）。
3. 检查设置。建议您尽早设置全局过滤器（如果需要）。
4. 将 " 切换复选框状态 " 热键替换为 "Tasks: Toggle Done"。
    - 我建议您删除原始的切换热键，并将 "Tasks" 切换设置为 `Ctrl + Enter`（或在 Mac 上为 `Cmd + Enter`）。

开始使用

### 编写一些任务

在你的笔记库中的一个 Markdown 笔记中创建一些任务。例如：

```html
- [ ] 一些不重要的事情，没有日期
- [ ] 记得做那个重要的事情 - 带有截止日期 📅 2022-12-17
- [ ] 给Kate寄生日卡 - 带有计划日期 🔁 每年1月4日 ⏳ 2023-01-04
```

在 [入门指南](https://publish.obsidian.md/tasks/Getting+Started/Getting+Started) 及其子章节中了解更多信息。

创建您的第一个任务搜索

然后在 Obsidian vault 中的某个地方编写一个任务搜索块，以查找有趣的任务。

以下是一个示例，展示了一些不同的功能。在阅读或实时预览模式下查看结果。

````html
```tasks

# 只有未完成的任务，即以以下方式开始的任务（但不包括引号）：

'- [ ] ' 或者

'* [ ] ' 或

1. [ ]

缩进的任务是支持的，但只支持单行任务。未完成

今天或之前到期的任务：在明天之前到期

限制最多100个任务。

如果您要求任务显示数百或数千个任务，

Obsidian的编辑性能真的变慢了。
限制100

# 分组并排序输出：
按文件名分组
按截止日期倒序排序
按描述排序

# 可选地，询问Tasks如何解释这个查询：
解释
```
````

在 [Queries](https://publish.obsidian.md/tasks/Queries/Queries) 及其子部分中了解更多信息。

## 文档

有关用户文档，请查看 [https://publish.obsidian.md/tasks/](https://publish.obsidian.md/tasks/)。

## 开发

克隆仓库，运行 `yarn` 安装依赖，然后运行 `yarn dev` 编译插件并监听文件变化。

然后查看 [贡献指南](https://publish.obsidian.md/tasks-contributing)。

捐赠

该插件完全免费使用，自 2022 年 5 月以来，由 Clare Macrae 非常乐意开发和支持。

如果您在使用 Tasks 插件时得到了特别的帮助，并希望支持它，请查看以下链接。

- <https://github.com/sponsors/claremacrae>

捐赠将用于支付我的计算成本和我用于提高工作效率的开发工具的许可证费用。

谢谢 🙏。
