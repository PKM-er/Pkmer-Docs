---
uid: 20240312193744
title: Obsidian 插件：【Readme】Ego Rock
tags: ['obsidian插件', 'readme']
description: A basic taskwarrior UI for listing and modifying tasks.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Ego Rock

> [!Note] 插件名片
> - 插件名称：Ego Rock
> - 插件作者：Ashton Eby
> - 插件说明：A basic taskwarrior UI for listing and modifying tasks.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/echo-bravo-yahoo/ego-rock)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ego-rock)

## 概述

A basic taskwarrior UI for listing and modifying tasks.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/echo-bravo-yahoo/ego-rock/main/README.md)

---

## Readme(翻译）

下面是 [[ego-rock]] 插件的自述翻译

# 自我摇滚

这是一个 [Obsidian](https://obsidian.md) 插件，允许在 Obsidian 的阅读视图中查看 [taskwarrior](https://taskwarrior.org/) 任务。该插件需要一个功能正常的、外部安装的 taskwarrior 安装。

## 任务表格

要包含一个任务表格，使用 `task-table` 代码块。代码块内的文本被解析为 YAML；包括一个名为 `command` 的键，其中包含应该执行以生成表格的 taskwarrior 命令。这个语法与 taskwarrior CLI 语法完全相同，只是：

- 报告名称必须是最后一个标记，如果未提供，则不会默认。例如，`task +nonsense list` 是合法的，但 `task list +nonsense` 和 `task +nonsense` 不是。
- 提供了一些覆盖，以便将生成的 ascii 表格解析为 HTML 表格；`rc.detection` 设置为 `off`，`rc.defaultWidth` 设置为 `1000`。

一个基本的用例可能如下所示：

````
```task-table
command: task list
```
````

您可以使用 [自定义报告](https://taskwarrior.org/docs/report/#custom-reports) 以及 taskwarrior 的所有 [过滤表达式](https://taskwarrior.org/docs/filter/)：

````
```task-table
command: task custom-report /.*ing$/ or +work
```
````

您还可以提供 [命令行覆盖](https://taskwarrior.org/docs/configuration/#command-line-override)；这些通常用于在 Obsidian 中为报告设置上下文或修改报告的呈现方式（但不是通过命令行）：

````
```task-table
command: task list rc.context:home rc.report.list.filter:"status:pending"
```
````

## 开发者指南

### 发布新版本

- 使用一个有用的提交消息提交您的更改，不要提及版本号。
- 运行 `npm version <patch|minor|major>`。
- 运行 `git push && git push $VERSION_TAG`。

### 使用 eslint 改善代码质量（可选）

- [ESLint](https://eslint.org/) 是一个分析您的代码以快速发现问题的工具。您可以运行 ESLint 来检查您的插件，找出常见的错误和改进代码的方法。
- 要在此项目中使用 eslint，请确保从终端安装 eslint：
  - `npm install -g eslint`
- 使用 eslint 分析此项目，请使用以下命令：
  - `eslint main.ts`
  - eslint 将会生成一个报告，其中包含文件和行号的代码改进建议。
- 如果您的源代码在一个文件夹中，比如 `src`，您可以使用以下命令使用 eslint 来分析该文件夹中的所有文件：
  - `eslint .\src\`



