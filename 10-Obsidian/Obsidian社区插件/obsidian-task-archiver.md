---
uid: 20230513113641
title: Obsidian 插件：Archiver 帮你快速归类待办任务
tags: [Obsidian, 插件, 存档, 归类, 已完成待办]
description: Obsidian 插件：Archiver 插件，他能将已经完成的任务归档到笔记中一个独立标题下方。
author: OS
type: other
draft: false
editable: false
modified: 20230604174547
---

# Obsidian 插件：Archiver 帮你快速归类待办任务

Obsidian 提供了轻便的待办任务体系，通过不同插件，不同主题的组合，你可以很清晰的在笔记中看到这些任务的状态和完成时间等。

但是我们有时候习惯将已完成的和未完成的进行分类显示，这时候就需要用到 Archiver 插件，他能将已经完成的任务归档到笔记中一个独立标题下方。

> [!Note] 插件名片
> - 插件名称：Archiver
> - 插件作者：Ivan Lednev
> - 插件说明：提供对任务，列表项的快捷操作
> - 插件项目地址：[点我跳转](https://github.com/kepano/obsidian-hider)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-task-archiver)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230513114459.png!pkmer)

## 使用

### 对当前笔记进行存档

- 使用 Ctrl/Cmd+ P 呼出命令面板，输入“archiver”
- 选择 `Archive tasks in this file`
- 会针对当前笔记，存档已经完成的待办/任务，到一个名为存档（Archived）标题下。

### 对当前笔记任务和子任务进行存档

- 有时候我们会使用嵌套任务/或者子任务，如

```Markdown
-   [ ] Incomplete task
    -   [x] Completed subtask
        -   Task details
    -   [ ] Incomplete subtask
```

- 使用 Ctrl/Cmd+ P 呼出命令面板，输入“archiver”
- 选择 `Archive tasks including nested tasks in this file`
- 会针对当前笔记，存档已经完成的待办/任务，到一个名为存档（Archived）标题下。
	- 且这个任务如果包含嵌套任务/子任务，也会一并挪入

### 对当前笔记任务和子任务进行存档

- 使用 Ctrl/Cmd+ P 呼出命令面板，输入“archiver”
- 选择 `Delete tasks in this file`
- 会针对当前笔记中，未存档但是已完成的任务进行删除操作。
	- 注意：此操作可以通过撤销快捷键来还原。
	- 如果是子任务标记完成，则不会删除子任务和父任务。只有让当父级任务被标记时，整个嵌套任务才会被视为完成，一并删除。

### 排序任务

- 使用 Ctrl/Cmd+ P 呼出命令面板，输入“archiver”
- 选择 `Sort tasks in list under cursor`
- 会针对当前笔记中，未存档的任务进行排序：
	- 先列出普通列表项
	- 然后是未完成的任务
	- 最后，完成任务

### 归档部分任务

- 使用 Ctrl/Cmd+ P 呼出命令面板，输入“archiver”
- 选择 `Archive heading under cursor`
- 在光标下抓取标题下的整个部分，包括所有子部分，并将其移动到存档中。

### 将列表转化为标题

- 使用 Ctrl/Cmd+ P 呼出命令面板，输入“archiver”
- 选择 `Turn list items at this level into headings`
- 将笔记中的列表转化为对应等级的标题，对应等级看你列表输入时候层级所经程度。

> [!Tip] 提示
> - 如果你有通过列表项来先书写标题大纲的习惯，这个功能能快速把列表大纲转为标题，非常方便。

### 快速归档并完成任务

- 使用 Ctrl/Cmd+ P 呼出命令面板，输入“archiver”
- 选择 `Toggle task under cursor done and archive it`
- 立即标记完成光标所在的任务，并将其归档。

## 设置

### 占位符（Placeholders）

- `{{date}}`
    - 自动填充当前日期
- `{{obsidianTasksCompletedDate}}`
    - 指向任务的完成日期 (✅ 2023-03-29). 通过这种方式，您可以将使用 obsidian-tasks 插件创建的任务存档到它们所属的位置
- `{{sourceFileName}}`
    - Resolves to the base name of the file you're in
- `{{sourceFilePath}}`
    - Resolves to the path from the root of the vault to the file you're in
- `{{heading}}`
    - Points to the heading above the task
- `{{headingChain}}`)
    - Creates a chain from headings above the task. E.g. `Project 1 > Team 2`
- 对于归档的内容：
	- 您可以创建带有占位符的任意层次结构

其中包括标题和列表项。新的存档任务将被合并到现有的树中。

可以使用此功能在存档中创建日期：

![image.png](https://cdn.pkmer.cn/images/20230513180320.png!pkmer)

> [!Tip] 相关推荐
> - [[obsidian-tasks的GTD实践]]：基于 task 插件的实战 GTD 管理
> - [[card-board]]：看板任务管理插件，不需要你特别维护看板数据，而是自动收集所有笔记中的任务
> - [[calendar]]：为 Obsidian 添加一个简单日历功能
> - [[obsidian-projects]]：提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求
> - [[obsidian-reminder-plugin]]：为 Markdown 中的待办事项，添加提醒管理。
> - [[obsidian-tasks-plugin]]：Obsidian 增强任务管理，为任务增加优先级，计划日期，完成日期等自动化和图形化操作界面。
> - [[progressbar]]：主要作用是将 progressbar 格式的代码块渲染为基于时间或手动的进度条
> - [[obsidian-kanban]]：在 Obsidian 制作看板，可以连接你的笔记
> - [[obsidian-day-planner]]：用于从 Markdown 笔记中的任务列表中规划和管理番茄钟计时器
> - [[obsidian-last-modified-timestamp-in-status-bar]]：在状态栏可视化你的最后编辑时间
> - [[tasks-calendar-wrapper]]：完美的时间线/日历视图的任务面板展示