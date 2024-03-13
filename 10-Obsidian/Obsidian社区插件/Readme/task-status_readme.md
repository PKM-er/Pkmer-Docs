---
uid: 2024022121291630
title: Obsidian 插件：【Readme】Task Status
tags: ['obsidian插件', 'readme']
description: Quickly change checkbox and task status markers.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Task Status

> [!Note] 插件名片
> - 插件名称：Task Status
> - 插件作者：Valerie Burzynski
> - 插件说明：Quickly change checkbox and task status markers.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vburzynski/obsidian-task-status)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-status)

## 概述

Quickly change checkbox and task status markers.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vburzynski/obsidian-task-status/main/README.md)

---

## Readme(翻译）

下面是 [[task-status]] 插件的自述翻译

【机翻】

# 黑曜石任务状态

在您的黑曜石笔记中快速更改任何任务状态。可搜索的模态框在您需要更改复选框标记时提供更动态和不加区别的工作流程。

![插件演示](https://cdn.pkmer.cn/covers/task-status_2_0.gif!pkmer)

## 指示

使用光标或选择范围选择一行或多行文本。然后打开命令面板，选择 `任务状态：更改任务状态` 命令，以显示一个语义可搜索的快速菜单，用于导航和应用多个自定义任务状态标记之一。应用任务状态标记将交换现有任务标记并将非任务内容转换为任务。这些自定义状态可以通过插件设置进行配置和自定义。如果您想设置一个快捷键，您可以在 Mac 上使用 `⌘ + Shift + L`，在 Windows 上使用 `CTRL + Shift + L`。我发现这与“切换复选框状态”的快捷键配合得很好。

请注意，此插件假定您已安装了包含自定义任务状态样式（如 Things 或 Minimal）的 Obsidian 主题，或者您已创建并应用了自己的 CSS 代码片段来样式化任务。

## 为什么选择这个插件？

- 键盘驱动
  - 设计力求让您的双手保持在键盘上
  - 您的双手不应该需要在键盘和鼠标/轨迹球/触控板之间跳来跳去
- 语义可搜索的快速菜单
  - 有了模糊查找器，您不必记住哪个文本字符对应哪个任务状态
  - 有助于快速且不加选择地在任何复选框状态之间跳转
  - 选项的呈现使您能够快速线性扫描选项列表
- 最小配置
  - 预先配置了在 Obsidian 主题中常用的复选框样式标记
  - 设置菜单允许您配置自己的状态标记。
  - *(您的 Obsidian 主题或自定义 CSS 将需要提供样式)*
- 目标是为了补充其他与任务相关的插件

## 行为概述

- 适用于各种类型的文本选择：
  - 单个光标放置
  - 跨越一个或多个行的选择范围
  - 多个光标
  - 多个选择范围
- 一般的转换行为：
  - 标题将被忽略并且不会被转换
  - 水平线（主题分隔符）将被忽略
  - 缩进将被保留
  - 块引用将被保留
  - 引用块或嵌套引用块内的内容可以被转换
  - 支持在 obsidian callout 中选择文本
  - 空行...
    - 在空行上的光标选择将其转换为任务
    - 在选择范围内的空行将被忽略

## 已知限制

- **标题**
  - 插件目前支持 ATX 标题（带有 `#` 前缀）
  - Setext 标题被解析为单独的文本行
- **代码块**
  - 代码块未被检测到
  - 选择代码块的任何部分都将在前面附加任务标记
  - 目前，在应用任务状态时，请避免选择代码块的任何部分
- **Obsidian 注释**
  - 如果注释是您选择范围的一部分，则这些行也将在行的前面附加复选框标记（就像它们只是文本内容而不是注释一样）。
  - 目前，请避免选择注释。

## 参与贡献

- 请遵循 [约定式提交指南](https://www.conventionalcommits.org/)



