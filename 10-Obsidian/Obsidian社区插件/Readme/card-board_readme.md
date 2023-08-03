---
uid: 2023080322153912
title: Obsidian 插件：CardBoard
tags: ['界面相关', '任务管理', '日期相关', '笔记文件处理', '美化', 'obsidian插件', 'readme']
description: 根据 tag 或者 任务生成对应的看板，能够自定义看板的时间维度，或者筛选对应的tag
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：CardBoard

> [!Note] 插件名片
> - 插件名称：CardBoard
> - 插件作者：roovo
> - 插件说明：根据 tag 或者 任务生成对应的看板，能够自定义看板的时间维度，或者筛选对应的 tag
> - 插件分类：[' 界面相关 ', ' 任务管理 ', ' 日期相关 ', ' 笔记文件处理 ', ' 美化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/roovo/obsidian-card-board)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?card-board)

## 概述

根据 tag 或者 任务生成对应的看板，能够自定义看板的时间维度，或者筛选对应的 tag

![CardBoard](https://cdn.pkmer.cn/covers/card-board.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/roovo/obsidian-card-board/main/README.md)
>

---

## Readme(翻译）

下面是 [[card-board]] 插件的自述翻译

# Obsidian CardBoard 插件

![许可证](https://img.shields.io/github/license/roovo/obsidian-card-board)

![GitHub发布（按日期排序）](https://img.shields.io/github/v/release/roovo/obsidian-card-board?style=flat-square)

![Obsidian下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22card-board%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

一个 [Obsidian](https://obsidian.md/) 插件，使任务处理变得愉快（希望如此）。

- 在您的存储库中使用常规任务/子任务。
- 在看板样式的面板上显示它们。
- 支持两种面板类型：
  - 基于日期的（支持每日/周期性笔记）。
  - 基于标签的（使用 `#标签` 来定义您的面板）。

## 新增

- 添加了一个全局设置，可以禁用将每日笔记日期用作任务的截止日期。
- 现在，如果您想在每日笔记页面上关闭特定任务的截止日期，可以在任务行中添加@due(none)。
- 修复了一个问题，即如果将 CardBoard 窗口拆分到右侧或下方，卡片上将显示没有文本。
![基于日期的看板截图](/images/dateBoard.png?raw=true)

## 安装

请通过 Obsidian 中的常规社区插件设置选项卡进行安装。

使用方法

安装后，您可以启动插件：

- 使用应用程序功能区中的图标（见下文），或
- 使用命令面板命令（允许您打开特定的看板）。

![应用程序功能区图标](/images/ribbonIcon.png?raw=true)

如果您没有定义看板，您应该会收到一个对话框，要求您添加一个新的看板。有两种类型的看板：

- **基于日期**：看起来像上面的主要截图。
- **基于标签**：使用标签来定义列（您需要在任务中包含标签或在前置事项中包含标签才能使用此功能）。

命名和配置您的看板，然后您就可以开始使用了。

## 卡片

您保险库中的任何任务都可以显示为看板上的一列卡片。为了实现这一点，它必须满足以下条件：

- 必须是一个 Markdown 文件。
- 不能有缩进。
- 使用 commonmark 支持的无序列表格式之一：
  - `- [ ] 任务标题`
  - `* [ ] 任务标题`
  - `+ [ ] 任务标题`

卡片上显示的内容取决于任务的样式：

- 任务下缩进的任何内容都会显示在任务的正文中。
  - 缩进的任务将显示为子任务（所有子任务将被分组在一起）。
  - 缩进的文本将显示为备注。
- 前置元数据或任务（或任何子任务）所在行的 `#标签` 将显示在卡片顶部。
- 截止日期（如果有）将显示在卡片底部。

因此，如果您在其中一个 Markdown 文件中有以下内容：

```
- [ ] 跑腿 @due(2022-12-02)
  - [x] 做购物 #城镇
  - [ ] 洗车 #家/外面
  - [ ] 做晚餐 #家/厨房

  也许我应该先查一下一些[[example_tasks/recipes|食谱]]

  - [ ] 做一个标题很长的事情，当显示时会被截断
  - [ ] 去睡觉
```

它在您的看板上的卡片上会看起来像这样：

![示例卡片](/images/card.png?raw=true)

#### 将任务标记为已完成

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

### 删除任务

您可以使用卡片上的垃圾桶图标来删除任务。这实际上不会从您的保险库中删除任务，而是将其用 markdown 的 `<del>` 标签包围起来：

```
<del>- [x] 任务标题</del>
```

点击编辑图标以打开包含任务的文件。在 Windows 上按下 Cmd（或 Ctrl）键，将鼠标悬停在图标上以查看 Obsidian 的正常悬停预览。

### 在列中的卡片排序

目前不同列的行为是：

- **已完成**：最近完成的卡片位于顶部（假设它们是通过面板上的复选框标记为完成的）。
- **未来**、**今天**、**标签**：按照截止日期排序，然后按字母顺序排序。
- 其他列按字母顺序排序。

我不确定这是否是最佳策略，所以在将来的版本中可能会有所改变。

### 自定义标签

我强烈推荐使用令人惊叹的 [Colorful Tag](https://obsidian.md/plugins?id=obsidian-colorful-tag) 插件，因为它可以让你在你的 Markdown 页面和 CardBoard 中自定义标签样式。

如果你想要 " 自己动手 "，你可以使用一个包含以下内容的 CSS 代码片段：

```css
.card-board-view a.tag[href="#foo/bar"] {
  background-color: HotPink;
  color: DimGrey;
}
```

这将使用你最喜欢的颜色（HotPink）来为 CardBoard 视图中出现的 `#foo/bar` 标签进行样式设置，foo/bar 只需要是 HotPink 即可 :)

日期板

如果您使用（核心）Daily Notes 或（社区）Periodic Notes 插件，您将从中获得最佳效果，因为您在每日笔记上放置的任何任务都将分配给该笔记的日期。如果您不希望出现这种行为，您可以在全局设置窗格中关闭它，然后每日笔记页面上的任务将不会有截止日期，除非特别指定。

![filters](/images/ignoreFileNameDatesSetting.png?raw=true)

您可以使用以下格式为任何任务指定日期：

```
- [ ] 我的任务 @due(2021-10-31)
```

Cardboard 还可以理解 Dataview 和 Tasks 使用的格式：

```
- [ ] 我的任务 [due:: 2021-10-31]
- [ ] 我的任务 📅 2021-10-31
```

在任务行上指定的截止日期将覆盖从每日笔记页面中派生的任何日期。

您可以在每日笔记页面上关闭特定任务的截止日期：

```
- [ ] 我的任务 @due(none)
```

### 逾期任务

这些任务将显示在“今天”栏的任何实际到期任务之上。

这个想法是，如果你有很多未完成的任务，从前几天开始，看到你计划今天要做的事情会变得越来越烦人，（希望）鼓励你采取一些行动；比如完成它们或将它们移到将来的日期，如果你想安排它们。

### 已完成的任务

如果您选择在日期板上显示已完成的任务，您只会看到已完成的任务，除非启用了“无日期”列。

## 标签板

如果你给你的任务添加了标签，你可以使用这些标签来设置一个标签板。所以，如果你有标签 `#status/backlog`、`#status/triaged`、`status/blocked`、`#status/doing`，你可以定义一个显示带有这些标签的任务的分列板：

![tag board settingx](/images/tagBoardSettings.png?raw=true)

### 子任务

具有匹配标签的子任务也会显示在看板上。

### 子标签

如果您指定一个带有尾部斜杠的标签，那么该列将包含该标签的所有子标签。

### 前置标签

如果您想给页面上的所有任务都添加相同的标签，可以将其放在页面的前置标签中：

```
---
tags: [ project1 ]
---

# 项目1

- [ ] 这个任务将自动拥有项目1标签
```

### 隐藏标签

如果您不想看到用于配置板的列的标签，

您可以在设置中显示/隐藏它们。如果您选择不显示列标签，

这将在板上的所有卡片上隐藏设置中使用的所有标签。

只有与设置中使用的标签完全匹配的标签将被隐藏。

### 已完成的任务

当一个任务由于子任务上的标签而显示在某一列中时，只有当这些子任务未完成时，该任务才会显示在该列中。因此，以下任务仅在 Barney 列中显示，因为 Wilma 子任务已完成：

![wilma_barney](/images/wilma_barney.png?raw=true)

这意味着即使顶层任务未完成，卡片也可以出现在标签板的已完成列中，例如上面的示例，如果将 barney 任务标记为完成，卡片将移动到已完成列：

![wilma_barney_completed](/images/wilma_barney_completed.png?raw=true)

板块配置定义了哪些任务将出现在标签板上，对于已完成的列也是如此；只有当所有任务和子任务都标记为未完成时，才能在已完成列中出现任务。

## 看板筛选器

您可以在看板设置中筛选出每个看板上显示的任务。有三种类型的筛选器可供使用：文件、路径和#标签（包括前置标签）。您可以在每个看板上使用任意组合的这些筛选器。

您还可以：

- 选择将筛选器用作允许列表或拒绝列表。
- 选择是否要在看板上的卡片上显示或隐藏指定为筛选器的任何标签。

任务放置到看板上之前会应用筛选器：

![filters](/images/filters.png?raw=true)

## 设置

插件设置可以从插件视图本身访问，通过位于选项卡左侧的面板上方的设置图标。您可以：

- 创建新的看板（使用 _BOARDS_ 旁边的 + 图标）。
- 配置您的看板。
- 自定义内置列的名称。
- 删除您不再需要的任何看板。
- 选择是否使用 Cardboard、Dataview 或 Tasks 格式来标记任务完成。
- 选择不使用每日笔记文件的日期作为任务的截止日期。

您的看板设置保存在您的保险库中的

```
.obsidian/plugins/card-board/data.json
```

文件中。您可能还会在其中看到一些旧版本（例如 data.0.5.0.json）。这些在内部设置文件的版本更新时保存，以防出现问题！如果您想确保您永远不会丢失 CardBoard 设置，请确保备份.obsidian 目录。

其他插件兼容性

Cardboard 与 [Tasks](https://obsidian-tasks-group.github.io/obsidian-tasks/) 和 [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) 中使用的*Due*和*Completion*日期格式兼容。这两个插件的日期都可以直接识别，无需配置。

在标记任务为完成时，您可以通过 CardBoard 的全局设置选择要使用的格式：

![任务完成格式设置面板](/images/taskCompletionFormatSetting.png?raw=true)

您还可以将此值设置为*None*，如果您不希望在完成任务时添加任何完成日期或时间戳。**这不是推荐的做法**，因为如果这样做，当您将任务标记为完成时，该任务可能不会出现在您的看板上的任何已完成列的顶部（或附近）。CardBoard 使用此时间或日期来确定最近完成的任务，以便将其显示在列的顶部。

### Dataview 插件

```
- [ ] 在Dataview格式中的待办事项 [due:: 2021-10-30] [completion:: 2021-10-29]
```

将被解读为一个截止日期为 2021 年 10 月 30 日的任务，提前一天完成。

Cardboard 将遵循 Dataview 中与任务相关的设置，因此如果您设置 Dataview 使用表情符号完成或不同的“完成”字符串（如“done”），那么 CardBoard 将反映这一点。

### 任务插件

```
- [ ] 在任务格式中的待办事项 📅 2021年10月30日 ✅ 2021年10月29日
```

将被解读为一个截止日期为 2021 年 10 月 30 日的任务，提前一天完成。

#### 重复任务

**CardBoard 不支持理解重复任务**，即使您已经设置它使用任务格式来标记任务完成。从 CardBoard 看板视图中勾选一个重复任务会在任务格式中添加完成日期，但**不会生成新的重复任务实例**。

要获得重复任务的正确行为，请点击卡片上的编辑图标，进入任务所在的文件，然后使用 *"Tasks: Toggle Done"* 命令或从那里点击复选框。

缩放板块文本和列大小

使用以下 CSS 片段自定义它们：

```css
.card-board-view {
  font-size: 1em;
}

.card-board-view .card-board-column {
  width: 20em;
}
```

您可以通过更改字体大小来更改卡片内容的一般大小，

并/或通过更改宽度设置来设置列的宽度。

## 限制

- 在大型保险库上可能效果不佳（因为它在启动时解析所有的 Markdown 文件）。
- 在大型文件上可能效果不佳（因为它解析所有的 Markdown 文件，并且不使用任何形式的缓存）。
- 在移动设备上可能效果不佳（参见前述，再加上我还没有特别努力地使界面适应移动设备）。

## 其他选择

如果这种方式对你来说不适用，Obsidian 中还有很多其他出色的插件可以用于任务管理，例如：

[Checklist](https://github.com/delashum/obsidian-checklist-plugin),

[Kanban](https://github.com/mgmeyers/obsidian-kanban),

[Reminder](https://github.com/uphy/obsidian-reminder),

[Tasks](https://github.com/schemar/obsidian-tasks),

[Projects](https://github.com/marcusolsson/obsidian-projects)，以及

[Tasks Calendar snippet](https://github.com/702573N/Obsidian-Tasks-Calendar)。

还有其他的插件，可以参考

[Obsidian Plugin Stats site](https://obsidian-plugin-stats.vercel.app)。

## 贡献

目前我正在独自开发这个项目，这是我在有空的时候做一些编码的项目。然而，如果你想在代码上做些尝试，可以查看 [贡献文档](CONTRIBUTING.md) 以获取更多关于如何设置和运行开发环境的信息。

如果你有任何想法、建议、错误等等：

- **错误/建议/功能请求** - [GitHub问题](https://github.com/roovo/obsidian-card-board/issues)。
- **正在进行和即将进行的工作** - [CardBoard开发](https://github.com/users/roovo/projects/4)
- **问题/讨论** - [GitHub讨论](https://github.com/roovo/obsidian-card-board/discussions)



