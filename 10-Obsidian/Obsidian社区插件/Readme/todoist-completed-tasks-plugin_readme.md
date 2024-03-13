---
uid: 2023080322282779
title: Obsidian 插件：Todoist completed tasks
tags: ['obsidian插件', 'readme']
description: 将已完成的Todoist任务添加到Obsidian笔记中
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Todoist completed tasks

> [!Note] 插件名片
> - 插件名称：Todoist completed tasks
> - 插件作者：Andrey Kulishov
> - 插件说明：将已完成的 Todoist 任务添加到 Obsidian 笔记中
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Ledaryy/obsidian-todoist-completed-tasks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?todoist-completed-tasks-plugin)

## 概述

将已完成的 Todoist 任务添加到 Obsidian 笔记中

![Todoist completed tasks](https://cdn.pkmer.cn/covers/todoist-completed-tasks-plugin.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Ledaryy/obsidian-todoist-completed-tasks/master/README.md)

---

## Readme(翻译）

下面是 [[todoist-completed-tasks-plugin]] 插件的自述翻译

# Todoist 已完成任务 - Obsidian 插件

这个 Obsidian 插件从 Todoist 中获取您已完成的任务，并将它们添加到您的 Obsidian 笔记中。

![演示](https://raw.githubusercontent.com/Ledaryy/obsidian-todoist-completed-tasks/master/static/gif/plugin_preview_v1.2.0.gif)

# 文档

1. [功能计划](https://github.com/Ledaryy/obsidian-todoist-completed-tasks/blob/master/docs/FEATURES.md)
2. [已知问题](https://github.com/Ledaryy/obsidian-todoist-completed-tasks/blob/master/docs/KNOWN_BUGS.md)
3. [高级用法](https://github.com/Ledaryy/obsidian-todoist-completed-tasks/blob/master/docs/ADVANCED.md)

# 使用方法

1. 通过 Obsidian 安装并**启用**此插件（Todoist Completed Tasks）
2. 在插件设置中输入您的 Todoist API 令牌。
    - 可在 [此处](https://github.com/Ledaryy/obsidian-todoist-completed-tasks/blob/master/docs/API_KEY_INSTALLATION.md) 找到**安全风险**和**API 令牌安装指南**
3. 在您的笔记中放置起始段和结束段
    - **起始段**是一行包含 `%% COMPLETED_TODOIST_TASKS_START %%` 的内容
    - **结束段**是一行包含 `%% COMPLETED_TODOIST_TASKS_END %%` 的内容
4. 运行插件
    - 通过点击左侧边栏的🔄按钮
    - 通过执行 `(Ctrl+P > Todoist Completed Tasks: Fetch today's completed tasks)`
5. 完成！还可以查看插件的 [高级用法](https://github.com/Ledaryy/obsidian-todoist-completed-tasks/blob/master/docs/ADVANCED.md)。它有许多很酷的功能！

## 特性

- 获取今天已完成的任务
- 获取过去 N 小时内已完成的任务
- 使用片段中的日期获取已完成的任务（支持 [Templater](https://github.com/SilentVoid13/Templater)）
- 为每个任务自定义前缀和后缀（支持 [Obsidian Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)）

如果你喜欢这个插件，并想请我喝杯咖啡，你可以！

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/ledaryy)

归因

该插件受到 [Todoist Text](https://github.com/wesmoncrief/obsidian-todoist-text) 插件的很大影响。
