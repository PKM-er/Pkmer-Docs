---
uid: 20250504230106
title: Obsidian 插件：About Blank 自定义增强 Obsidian 空白页
tags: ['视图', '自定义', 'Obsidian插件']
description: Obsidian 插件：About Blank 自定义增强 Obsidian 空白页
author: OS
type: other
draft: false
editable: false
modified: 20250504231747
---

# Obsidian 插件：About Blank 自定义增强 Obsidian 空白页

## 概述

通过该插件，你可以为空文件视图（或者叫新选项卡视图），增强相关功能，而不是单纯使用 Obisidian 默认的功能

> [!Note] 插件名片
> - 插件名称：About Blank
> - 插件作者：Ai-Jani
> - 插件说明：可以为空文件视图（或者叫新选项卡视图），增强相关功能，而不是单纯使用 Obisidian 默认的功能
> - 插件分类： [' 视图 ', ' 自定义 ', 'Obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/Ai-Jani/about-blank)
> - 国内下载地址：[下载安装](<https://pkmer.cn/products/plugin/pluginMarket/?about-blank>)

> [!Note] 注意
> 空文件视图 （新选项卡） 功能依赖于未记录的 Obsidian 行为，并且可能会在未来版本中停止工作。但是，与命令相关的功能应该仍然可用，因为它是独立设计的。
> 请参阅 [MaintenanceReport](https://github.com/Ai-Jani/about-blank/blob/main/docs/MaintenanceReport.md) 以了解与 Obsidian 版本的兼容性。

## 效果 & 特性

![image.png](https://cdn.pkmer.cn/images/20250504230529.png!pkmer)

- 通过添加 Actions 来稍微自定义空文件视图（新选项卡）本身：
	- 命令
	- 打开文件
	- 分组作
- 支持对这些自定义功能：
	- “设置”图标
	- 执行前询问
	- 注册为新命令

## 设置

### Actions

可以配置为执行你指定的现有“命令”或“打开文件”。您可以将多个作分组到一个作中。

分组作

- 分组作包含多个作，这些作也可以包含其他分组作。
- 触发后，此分组作将显示一个建议器，其中包含所有包含的作的列表，允许您选择要执行的特定作。
- 此功能旨在防止空文件视图与 “Actions” 杂乱无章。

![image.png](https://cdn.pkmer.cn/images/20250504230647.png!pkmer)

### 每个作的设置

- 设置 - 设置图标
	- 设置自定义图标以使作更易于识别。
	- 图标会被展现在在空文件视图、移动工具栏等中。
- 设置 - 执行前询问
	- 在执行作之前显示确认对话框
	- 这有助于防止在错误执行作时发生异常。

![image.png](https://cdn.pkmer.cn/images/20250504230824.png!pkmer)

### 设置 - 注册为命令

- 在 Obsidian 中将作注册为新命令。
- 除了将“打开文件”和“分组作”注册为命令外，您还可以通过稍作修改（例如，重命名、设置图标、执行前询问来注册现有命令。

### 设置 - 显示

- 是否在空文件视图中显示作。
- 这对应于您希望将其注册为纯命令而不在空文件视图中显示它的情况。

### 快速作

- 此功能将添加到空文件视图中的作作为建议器进行分组，并将它们注册为新命令。`About Blank: Quick actions`
    - 这意味着空文件视图作将转换为并注册为命令
- 您可以在不访问空文件视图的情况下调用这些作。