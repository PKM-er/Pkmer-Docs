---
uid: 1786577083252002
title: 'Obsidian 插件：TodoApp Blocks'
tags: ['任务管理', '第三方工具集成', '效率工具', '编辑工具', 'obsidian插件']
description: '在任意Obsidian笔记里嵌入一个类似Todoist的本地优先任务应用。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TodoApp Blocks

> [!Note] 插件名片
> - 插件名称：TodoApp Blocks
> - 插件作者：Max Dvorkin
> - 插件说明：在任意Obsidian笔记里嵌入一个类似Todoist的本地优先任务应用。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['任务管理', '第三方工具集成', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kaiso12/todoapp)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?todoapp)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kaiso12/todoapp/master/README.md)



## 概述

### 主要功能
在任意Obsidian笔记中嵌入类似Todoist的本地任务管理应用，可通过代码块创建多个独立任务空间，支持项目管理、多视图查看、任务优先级设置、内联编辑、任务完成标记、任务备注等功能。

### 适用场景
适合想要在Obsidian中方便管理任务，同时又希望数据私密、本地存储的用户，避免了复杂的任务管理设置。

### 核心特色
- 无需模板、Dataview查询和外部账户，简单代码块即可创建任务管理应用。
- 本地优先，任务数据以JSON格式存储在保险库中，任务备注以Markdown文件形式保存。
- 提供类似Todoist的简洁工作流程。

### 使用建议
在Obsidian笔记中添加代码块 ````markdown
```todoapp
id: [自定义名称]
```
```` ，在阅读模式下即可开始添加任务。可通过更改 `id` 创建多个独立任务应用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


