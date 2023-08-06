---
uid: 2023080322283330
title: Obsidian 插件：【Readme】Toggl Track
tags: ['第三方工具集成', '任务管理', 'obsidian插件', 'readme']
description: 添加与 Toggl Track API 的集成，以在Obsidian内管理计时器。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Toggl Track

> [!Note] 插件名片
> - 插件名称：Toggl Track
> - 插件作者：Maxime Cannoodt
> - 插件说明：添加与 Toggl Track API 的集成，以在 Obsidian 内管理计时器。
> - 插件分类：[' 第三方工具集成 ', ' 任务管理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mcndt/obsidian-toggl-integration)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-toggl-integration)

## 概述

添加与 Toggl Track API 的集成，以在 Obsidian 内管理计时器。

![Toggl Track](https://cdn.pkmer.cn/covers/obsidian-toggl-integration.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mcndt/obsidian-toggl-integration/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-toggl-integration]] 插件的自述翻译

[![GitHub标签（按日期最新）](https://img.shields.io/github/v/tag/mcndt/obsidian-toggl-integration)](https://github.com/mcndt/obsidian-toggl-integration/releases) ![GitHub所有发布](https://img.shields.io/github/downloads/mcndt/obsidian-toggl-integration/total)

在 Obsidian 中添加与 Toggl Track API 的集成，以管理您的计时器。

## 功能

- ✨ **新功能**：**使用代码块在笔记中生成时间跟踪报告**
- 在状态栏中查看当前计时器及其运行时间
- 在侧边栏中获取一天的摘要
- 使用命令面板创建、启动和停止新的计时器，或重新启动最近的计时器

![](https://raw.githubusercontent.com/mcndt/obsidian-toggl-integration/master/demo2.gif)

在 Obsidian 笔记中，使用简单的代码块可以渲染时间跟踪报告。例如，

````
```toggl
SUMMARY
PAST 7 DAYS
```
````

将会得到如下结果：

![example-summary-report](https://user-images.githubusercontent.com/23149353/148293946-4e70ede9-0a9f-401e-af4b-f954caaeed84.png)

您可以在 [插件维基](<https://github.com/mcndt/obsidian-toggl-integration/wiki/Toggl-Query-Language-(TQL)-Reference>) 中找到有关渲染时间报告的完整教程和参考资料。

## 设置

配置此插件需要您首先从 Toggl 请求一个 API 令牌。有关如何执行此操作的更多信息，请 [点击此处](https://support.toggl.com/en/articles/3116844-where-is-my-api-token-located)。

要设置此插件，只需在设置选项卡中输入您的 API 令牌，然后点击连接并选择您希望使用的 Toggl 工作区。

![settings](https://raw.githubusercontent.com/mcndt/obsidian-toggl-integration/master/settings.png)

与其他插件一起使用：

### QuickAdd

QuickAdd 插件的开发者使用 QuickAdd 创建了一个预设菜单来设置定时器。可以在 [这里](https://github.com/chhoumann/quickadd/blob/master/docs/docs/Examples/Macro_TogglManager.md) 找到使用说明，并且你可以在 Obsidian Discord 服务器上了解他是如何做到的（[消息链接](https://discord.com/channels/686053708261228577/707816848615407697/876069796553293835)）。

路线图

您可以在此页面上查看我对此插件的更详细的路线图：[开发路线图](https://github.com/mcndt/obsidian-toggl-integration/projects/1)。我尽量保持每个列中的卡片按优先级排序。

## 功能请求

请在 GitHub 的讨论标签中提出功能请求：[点击这里](https://github.com/mcndt/obsidian-toggl-integration/discussions/categories/feature-requests)

如果你想直接与我讨论插件，你可以在 Obsidian 的 Discord 服务器中找到我，我的用户名是 `Maximio#6460`。随时@我！

## 依赖项

目前，我依赖于这个仓库来提供与 Toggl Track API 的 JavaScript 接口：<https://github.com/saintedlama/toggl-client>

然而，将来我可能会对其进行分支，以便重构为使用移动友好的 API（例如使用 Obsidian 自己的请求 API）。

## 支持

如果你喜欢这个插件并想支持我，你可以通过「给我买杯咖啡」来支持我：
