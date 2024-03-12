---
uid: 20231220112631
title: Obsidian 插件：【Readme】Obsidian TODO | Text-based GTD
tags: ['任务管理', 'obsidian插件', 'readme']
description: Obsidian中基于文本的GTD。从您的保险库中收集所有未完成的TODO，并在今天、计划、收件箱和某天/也许列表中呈现它们。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Obsidian TODO | Text-based GTD

> [!Note] 插件名片
> - 插件名称：Obsidian TODO | Text-based GTD
> - 插件作者：Lars Lockefeer
> - 插件说明：Obsidian 中基于文本的 GTD。从您的保险库中收集所有未完成的 TODO，并在今天、计划、收件箱和某天/也许列表中呈现它们。
> - 插件分类：[' 任务管理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/larslockefeer/obsidian-plugin-todo)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plugin-todo)

## 概述

Obsidian 中基于文本的 GTD。从您的保险库中收集所有未完成的 TODO，并在今天、计划、收件箱和某天/也许列表中呈现它们。

![Obsidian TODO | Text-based GTD](https://cdn.pkmer.cn/covers/obsidian-plugin-todo.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/larslockefeer/obsidian-plugin-todo/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-plugin-todo]] 插件的自述翻译

## Obsidian TODO 插件

在 Obsidian 中进行基于文本的 GTD（Getting Things Done）。

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/larslockefeer)

### 特点

- 将所有未完成的待办事项汇总到您的存储库中，并在单个视图中列出它们
- 按类型拆分待办事项（" 今天 "、" 已安排 "、" 收件箱 " 和 " 有一天/或许 "）
- 通过添加标签将待办事项安排到特定日期
- 通过添加标签 #someday 将待办事项标记为 " 有一天/或许 "
- 从列表视图中完成待办事项
- 从列表视图快速跳转到包含待办事项的文件
- 与 Daily Notes 插件集成：没有截止日期的待办事项将继承每日笔记的日期作为截止日期

### 设置

**日期标签格式**：自定义您用于添加任务到期日期的格式。默认为 `#%date%`。

**日期格式**：自定义日期格式。在幕后使用 luxon。有关支持的标记，请参阅 [它们的文档](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)。默认为 `yyyy-MM-dd`。

**在新标签页中打开文件**：启用后，从插件内部打开的文件将在新标签页中打开，而不是替换当前打开的文件。

### 截图

![](https://cdn.pkmer.cn/covers/obsidian-plugin-todo_2_0.png!pkmer)

![](https://cdn.pkmer.cn/covers/obsidian-plugin-todo_2_1.png!pkmer)

![](https://cdn.pkmer.cn/covers/obsidian-plugin-todo_2_2.png!pkmer)

![](https://cdn.pkmer.cn/covers/obsidian-plugin-todo_2_3.png!pkmer)

### 路线图

- [ ] 从列表视图跳转时，滚动到文件的正确行
- [ ] 从列表视图中重新安排待办事项的计划
- [ ] 持久化缓存，在重新打开 Obsidian 时只重新索引自关闭以来发生变化的文件
- [ ] 通过标签/自由搜索来过滤项目列表视图
- [ ] 改进用户界面和主题化能力



