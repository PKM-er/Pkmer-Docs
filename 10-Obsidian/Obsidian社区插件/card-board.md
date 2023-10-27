---
uid: 20230613154928
title: Obsidian 插件：CardBoard 也许是最好的看板任务管理插件
tags: [Obsidian, 插件, 任务管理, 进度管理, 任务跟踪]
description: 
author: OS
type: basic
draft: false
editable: false
modified: 20230825092920
---

# Obsidian 插件：CardBoard 也许是最好的看板任务管理插件

## 概述

看板模式的优点是非常显而易见的：

- 以简单的图形化的方式呈现任务，方便用户快速了解任务进展状况，不需要进行复杂的查询和过滤，可以提高用户的工作效率，
- 特别是在快速迭代、简短的场景中，因为它可以在视觉上提供即时的反馈和清楚的信息，帮助用户更快地理解任务和进展。

Obsidian Cardboard 是一款在 Obsidian 笔记应用中实现看板模式任务管理的插件。它可以将你的笔记中的任务转换为看板卡片，每个看板都代表一个特定的项目或任务，你可以在看板上管理任务，以便更好地跟踪你的进度。

> [!Note] 插件名片
> - 插件名称：CardBoard
> - 插件版本：0.7.2
> - 插件作者：roovo
> - 插件描述：看板任务管理插件，不需要你特别维护看板数据，而是自动收集所有笔记中的任务
> - 插件分类：[' 界面相关 ', ' 任务管理 ', ' 日期相关 ', ' 笔记文件处理 ', ' 美化 ', 'obsidian 插件 '
> - 插件项目地址：[点我跳转](https://github.com/roovo/obsidian-card-board)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?card-board)

## 效果&特性

> [!Tip] 提示
> - 引用作者原话”Uses regular tasks/subtasks wherever they are in your vault“
> - 之所以这里推荐 Cardboard 插件，是因为这个插件的理念非常灵活，你可以在任意笔记中建立待办任务，然后统一到 cardboard 界面中管理。而不需要为了管理任务，去看板界面，一个个维护这个看板和笔记关系，源于作者的努力，只要你使用的是 Obsidian 的里面的待办任务格式，就可以处理。

![image.png](https://cdn.pkmer.cn/images/20230613155640.png!pkmer)

- 通过日期管理任务
- 通过任务标签来管理任务
- 通过指定路径，或者兼容 dataview 方式来管理任务

## 使用

- 安装后打开插件即可使用
	- 点击 Ribbon 区域的 CardBoard 图标，即可打开 CardBoard 界面。
	- 或者使用命令面板输入”CardBoard“

![image.png](https://cdn.pkmer.cn/images/20230613161429.png!pkmer)

- 有别于大部分插件，CardBoard 没有在 Obsidian 设置页面里面没有设置界面，而是直接集成在了插件的界面内。

![image.png](https://cdn.pkmer.cn/images/20230613160209.png!pkmer)

- 自定义看板名称，方便你管理不同的任务进度，比如项目 A 和 项目 B，当然，你也可以将 工作和生活的看板分别设立。
- 看板的组成方式：
	- 基于日期：默认模式，按照传统的日期方式管理任务进度。
	- 基于标签：使用标签来定义列
- 点击看板卡片中的任务，会直接关联到笔记的具体位置
	- 这样设置非常利于管理和追溯原理。
- 允许设置任务的过滤方式：文件夹路径（Filters -> Definitions）（即 Obsidian 中的文件夹路径），也可以支持标签来圈定。

### 在列中的卡片排序

目前不同列的行为是：

- **已完成**：最近完成的卡片位于顶部（假设它们是通过面板上的复选框标记为完成的）。
- **未来**、**今天**、**标签**：按照截止日期排序，然后按字母顺序排序。
- 其他列按字母顺序排序。

我不确定这是否是最佳策略，所以在将来的版本中可能会有所改变。

### 将任务标记为已完成

如果您在看板上将任务标记为已完成，它将在 markdown 中被标记为已完成（反之亦然）。如果您在看板上标记为已完成，将会在任务后附加一个完成时间戳：

```
- [x] 任务标题 @completed(2021-10-30T13:57:48)
```

有关如何选择与其他插件兼容的格式的详细信息，请参见 [兼容性部分](#other-plugin-compatibility)。

如果您有子任务，并且父任务被标记为“自动完成”任务，则在完成最后一个子任务时，主任务将被标记为已完成：

```
- [ ] 任务标题 @autocomplete(true)
  - [ ] 首先完成这个
  - [ ] 接下来完成这个
  - [ ] 最后完成这个，然后您就完成了
```

### 逾期任务

这些任务将显示在“今天”栏的任何实际到期任务之上。

这个想法是，如果你有很多未完成的任务，从前几天开始，看到你计划今天要做的事情会变得越来越烦人，（希望）鼓励你采取一些行动；比如完成它们或将它们移到将来的日期，如果你想安排它们。

### 已完成的任务

如果您选择在日期板上显示已完成的任务，您只会看到已完成的任务，除非启用了“无日期”列。

### 删除任务

您可以使用卡片上的垃圾桶图标来删除任务。这实际上不会从您的保险库中删除任务，而是将其用 markdown 的 `<del>` 标签包围起来：

```
<del>- [x] 任务标题</del>
```

点击编辑图标以打开包含任务的文件。在 Windows 上按下 Cmd（或 Ctrl）键，将鼠标悬停在图标上以查看 Obsidian 的正常悬停预览。

### 支持过滤

- 你可以在 CardBoard 设置中筛选每个看板上显示的任务。有三种类型的过滤器可以使用：
	- 文件（file）
	- 路径（path）
	- 标签（#tags）【包括 front-matter 标签】。
- 以上这些，你可以在每个板的基础上使用这些功能的任意组合。
- 你还可以：
	- 选择是将筛选器用作允许列表还是拒绝列表。
	- 选择是否要在板上的卡上显示或隐藏指定为过滤器的任何标签。

筛选在看板上的过滤顺序如下图所示：

- 插件优先从全库（Vault）中获取所有任务（Tasks）
- 然后通过过滤器（Filter）展示在看板上

![image.png](https://cdn.pkmer.cn/images/20230613164345.png!pkmer)

### 看板筛选器

您可以在看板设置中筛选出每个看板上显示的任务。有三种类型的筛选器可供使用：文件、路径和#标签（包括前置标签）。您可以在每个看板上使用任意组合的这些筛选器。

您还可以：

- 选择将筛选器用作允许列表或拒绝列表。
- 选择是否要在看板上的卡片上显示或隐藏指定为筛选器的任何标签。

### 支持嵌套任务

- 支持嵌套任务的展示

```markdown
- [ ] run erands @due(2022-12-02)
  - [x] do shopping #town
  - [ ] wash car #home/outside
  - [ ] cook dinner #home/kitchen
```

![image.png](https://cdn.pkmer.cn/images/20230613161717.png!pkmer)

### 设置

- 插件设置可以通过，看板页签的齿轮点击访问，你可以：
	- 创建新看板（使用布局侧边的加号图标）
	- 配置、修改你的现在看板的基础规则
	- 自定义内置列的名称
	- 删除你不再需要的看板
	- 选择是使用 Cardboard，Dataview 还是 Tasks 格式来标记任务完成
	- 选择是否使用，日记文件的日期作为任务的截止日期

## 插件兼容性

Cardboard 与 [[obsidian-tasks-plugin]] 插件和 Dataview 插件中使用的到期日期（Due）和完成日期（Completion）格式完全兼容。这两个的日期不需要特殊配置，即可被 cardboard 识别，当将任务标记为完成时，你可以通过 CardBoard 的全局设置选择使用哪种格式标记完成。

![image.png](https://cdn.pkmer.cn/images/20230613162225.png!pkmer)

- Dataview 插件

```语法
- [ ] todo in Dataview format [due:: 2021-10-30] [completion:: 2021-10-29]
```

- Tasks 插件

```语法
- [ ] todo in Tasks format 📅 2021-10-30 ✅ 2021-10-29
```

### 循环任务兼容性

CardBoard 视图中勾选完成循环任务，仍将继续以任务完成格式展示，但会变动对应的循环日期，通俗理解，不会重新生成新卡片。

### 限制和性能

- 因为插件要解析所有 Markdown 文件，并且不使用任何形式的缓存
	- 在超大仓库中可能无法正常工作。
	- 在单个笔记的超大文件上可能无法正常工作。
	- 在移动设备上可能不太好。

> [!Tip] 相关推荐
> - [[Obsidian-Tasks的GTD实践]]：基于 task 插件的实战 GTD 管理
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