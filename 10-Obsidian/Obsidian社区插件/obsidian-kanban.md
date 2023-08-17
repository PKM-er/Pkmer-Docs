---
uid: 20230329145831
title: Obsidian 插件：Kanban 通过看板视图管理的你待办任务
tags: [Obsidian, 插件, 任务管理, 看板]
description: Obsidian 插件：Kanban 通过看板视图管理的你待办任务
author: Bon
type: other
draft: false
editable: false
modified: 20230705170724
---

# Obsidian 插件：Kanban 通过看板视图管理的你待办任务

看板可以承载笔记中的事务管理，和任务跟踪能力。如果想完善自己的任务计划，不妨使用 kanban，它能让你的流程可视化。

> [!Tip] 什么是 kanban
> kanban 是一种使用可视化管理的方式，跟踪任务在整个价值流中流经的不同阶段，最早被应用在丰田中的管理方法。

> [!Note] 插件名片
>
> - 插件名称：Kanban
> - 插件作者：mgmeyers
> - 插件说明：在 Obsidian 制作看板，可以连接你的笔记
> - 插件项目地址：[点我跳转](https://github.com/mgmeyers/obsidian-kanban)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-kanban)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230705155345.png!pkmer)

## 使用

### 创建面板

#### 方法 1

像编辑笔记一样，利用 frontmatter，新建一个 markdown 文档，然后用 yaml 语法进行 yaml 标记：

```yaml
kanban-plugin: basic
```

- 然后点击笔记上的更多按钮，在菜单上选择 打开为看板。

#### 方法 2

使用命令面板，搜索 kanban 创建新看板

### 基础使用

- 通用
	- 使用右上角的看板工具，针对当前看板进行管理，包括添加列，包括归档，搜索等
- 列管理
	- 使用列中的 `添加卡片` 新建不同的项目
	- 列的的使用可以自定义名称，和列之间的顺序，但是只能是横向的
	- 也可以按照日期和文本排列
- 卡片管理
	- 添加的卡片，可以是单纯的文字，也可以使用 `[[` 来直接关联到已经存在的笔记。
	- 卡片支持直接使用 markdown 语法
		- 链接具体笔记
		- 也可以书写有序或无序列表
		- 任务列表
- 链接
	- 将笔记链接到 kanban 卡片，可以在 kanban 视图上，复制具体卡片的链接，并粘贴到笔记中。
	- 也可以直接在卡片中

### 活用面板

与 [[obsidian-day-planner]] 是针对于某一天的日计划不同，kanban 更是针对于某一项或某一系列任务，或者长期计划而设立的管理方法。

#### 任务管理

- 这是看板类软件或者插件最基本的用途，实际生活中它最显而易见的使用方法。
- 你可以在看板中管理多项任务进度，这些任务，可能属于你一个较大的计划。并将这些加护联动到你的笔记中。
- 至于具体是否使用任务列表语法，还是链接不同笔记，来管理项目笔记细节，都可以丰俭由人。

![image.png](https://cdn.pkmer.cn/images/20230705170446.png!pkmer)

#### 时间管理

基于前面提到的任务管理，当然你也可以不受至于具体的进度，你可以将每一列当作一个时间维度来管理。

![image.png](https://cdn.pkmer.cn/images/20230705161334.png!pkmer)

#### 分类管理

kanban 既然 提供了链接笔记的能力，那么他就能很好的起到地图和索引的作用，使用 kanban 中增加修改列（column） 的能力，来创建不同的项目分组。

比如工作、购物、爱好学习，可能就是不同的列，并在 kanban 中用不同的条目去链接对应笔记。这有点类似 MOC 的管理方式，但是得益于 kanban 区块化的界面。

> [!Tip] 关联推荐
> - [[obsidian-tasks的GTD实践]]：基于 task 插件的实战 GTD 管理
> - [[card-board]]：看板任务管理插件，不需要你特别维护看板数据，而是自动收集所有笔记中的任务
> - [[calendar]]：为 Obsidian 添加一个简单日历功能
> - [[obsidian-projects]]：提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求
> - [[obsidian-reminder-plugin]]：为 Markdown 中的待办事项，添加提醒管理。
> - [[obsidian-tasks-plugin]]：Obsidian 增强任务管理，为任务增加优先级，计划日期，完成日期等自动化和图形化操作界面。
> - [[progressbar]]：主要作用是将 progressbar 格式的代码块渲染为基于时间或手动的进度条
> - [[obsidian-kanban]]：在 Obsidian 制作看板，可以连接你的笔记
> - [[obsidian-day-planner]]：用于从 Markdown 笔记中的任务列表中规划和管理番茄钟计时器
> - [[obsidian-task-archiver]]：帮你快速归类待办任务
> - [[obsidian-last-modified-timestamp-in-status-bar]]：在状态栏可视化你的最后编辑时间
> - [[tasks-calendar-wrapper]]：完美的时间线/日历视图的任务面板展示