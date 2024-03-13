---
uid: 2024022121285613
title: Obsidian 插件：【Readme】Task list
tags: ['obsidian插件', 'readme']
description: Enable better task management via lists.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Task list

> [!Note] 插件名片
> - 插件名称：Task list
> - 插件作者：Ted Marozzi
> - 插件说明：Enable better task management via lists.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ted-marozzi/task-list)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-list)

## 概述

Enable better task management via lists.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ted-marozzi/task-list/master/README.md)

---

## Readme(翻译）

下面是 [[task-list]] 插件的自述翻译

# 任务列表

一个简单的黑曜石插件，通过列表实现更好的任务管理。

# 特点

- [x] 创建带有任务状态的列表

  - 只需开始一个有序或无序列表，然后添加以下指令之一，:to-do, :doing, :paused, :done

  ```md
  - 支持的任务状态
    - :to-do 我需要完成
    - :doing 我正在进行
    - :paused 我已暂停
    - :done 我已完成
  ```

  这将呈现指令作为交互式任务状态框，如下所示

  <img src="./assets/supported-task-states.png" alt="Supported task states" width=200 />

- [x] 根据状态对列表进行排序
  - 可通过 "Sort lists" 命令触发排序，也可通过任务状态框的上下文菜单（<kbd>Option</kbd> + 单击或右键单击）或编辑器上的上下文菜单触发
  - 列表将根据此排序顺序进行排序
    - :doing 首先，因为需要您的注意
    - :paused 其次，因为您可能需要复查
    - :to-do 第三，因为您可以在上述完成后处理此事项
    - :done 最后，因为不需要您的注意
- [x] 更改任务列表项的状态
  - 单击任务状态框以循环到下一个状态
  - 使用任务状态框上的上下文菜单标记不同的状态
- [x] 专注于性能，非常注意确保任务列表不会减慢 obsidian 的速度
- [x] 扩展 markdown 但不破坏它，您的文档仍将在此插件之外呈现，具有可读的任务状态和易于记忆的指令

# 安装

## 从源代码构建

1. 将此存储库克隆到 `./vault/.obsidian/plugins`
2. 运行 `npm run build`
3. 启动 Obsidian
4. 转到设置 > 社区插件
5. 启用 "Task list" 插件

# 赞助我

[如果您喜欢这个软件，请考虑在这里赞助我 ❤️](https://github.com/sponsors/ted-marozzi)
