---
uid: 2023120719261133
title: Obsidian 插件：【Readme】Custom State for Task List
tags: ['obsidian插件', 'readme']
description: 向任务列表项添加自定义状态。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Custom State for Task List

> [!Note] 插件名片
> - 插件名称：Custom State for Task List
> - 插件作者：Okami Wong
> - 插件说明：向任务列表项添加自定义状态。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/OkamiWong/obsidian-custom-state-for-task-list)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?custom-state-for-task-list)

## 概述

向任务列表项添加自定义状态。

![Custom State for Task List](https://cdn.pkmer.cn/covers/custom-state-for-task-list.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/OkamiWong/obsidian-custom-state-for-task-list/main/README.md)
>

---

## Readme(翻译）

下面是 [[custom-state-for-task-list]] 插件的自述翻译

# Obsidian 中的自定义任务列表状态

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，可以帮助您定义自己的任务列表状态！

![](https://cdn.pkmer.cn/covers/custom-state-for-task-list_2_0.gif)

如何安装

请参考 [Community plugins - Obsidian Help](https://help.obsidian.md/Extending+Obsidian/Community+plugins)。

## 如何使用

- 只需将自定义状态的名称放在任务项的方括号之间即可。
  - 例如，如果您想将以下任务标记为“进行中”
    - `- [ ] 一些任务`
  - 只需将“进行中”放在方括号中，如下所示
    - `- [进行中] 一些任务`
  - 在 Obsidian 的阅读视图中，此任务将呈现为
    - `🚧 一些任务`
- 默认状态为（`{stateName} ➡ {readingView}`）
  - `committed` ➡ 📌
    - 您决定某天要完成此任务
  - `doing` ➡ 🚧
    - 您正在进行此任务
  - `deferred` ➡ 😴
    - 此任务的完成被推迟
  - `removed` ➡ 🗑
    - 任务已被删除
- 您可以在设置中编辑默认状态并添加更多状态。

![](https://cdn.pkmer.cn/covers/custom-state-for-task-list_2_1.png!pkmer)
