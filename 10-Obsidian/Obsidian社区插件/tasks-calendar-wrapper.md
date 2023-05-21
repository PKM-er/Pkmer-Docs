---
uid: 20230508145808
title: Obsidian 插件：Tasks-calendar-wrapper 快速生成没关的任务的时间线及日历视图
tags: [Obsidian, 插件, Tasks-calendar-wrapper, 任务, 时间线, 任务日历]
description: Obsidian 插件：Tasks-calendar-wrapper 快速生成没关的任务的时间线及日历视图
author: Simen_Chen
type: other
draft: false
editable: false
modified: 20230515233928
---

# Obsidian 插件：Tasks-calendar-wrapper 支持快捷输入与时间线/日历视图的任务面板展示插件

## 概述

很多时候我们希望通过 Obsidian 管理自己的待办，并且希望能够通过时间和月历多种维度，来管理追踪任务的进度。虽然 [[dataview]] 可以很好解决这样的问题，但是我们每个人对于编程和学习复杂的语法能力不同。

那么有没有一个插件，能够让我们快速基于笔记中的任务，生成美观好看，动态的任务跟踪效果呢？Tasks-calendar-wrapper 就是基于此目的，提供给很多初学者，快速实现多种美观的任务管理样式。该插件基于 [Obsidian-Tasks-Calendar](https://github.com/702573N/Obsidian-Tasks-Calendar) 和 [Obsidian-Tasks-Timeline ]([https://github.com/702573N/Obsidian-Tasks-Timeline](https://github.com/702573N/Obsidian-Tasks-Timeline)) 进行打包和二次开发的插件，提供了设置页面和更新支持，插件选项的详细信息，请参阅以上两个项目。

> [!Note] 插件名片
> - 插件名称：Tasks calendar wrapper
> - 插件作者：Leonezz
> - 插件说明：Obsidian 任务的时间线及日历视图。
> - 插件项目地址：[点我跳转](https://github.com/Leonezz/obsidian-tasks-calendar-wrapper)

> [!Warning]
> 2023.05.14
> 1、开发者正在解决使用filter筛选任务后的取消与热重载问题，目前，个人测试的解决办法，是打开 inbox.md 或配置的日记文件，或继续输入文字，可激活插件任务列表的刷新。
> 2、Obsidian 的开发者面板，此插件还有一些不影响使用的报错。

## 效果&特性

### 任务时间线效果

![image.png](https://cdn.pkmer.cn/images/20230514232452.png!pkmer)

### 任务日历效果

![image.png](https://cdn.pkmer.cn/images/20230514232511.png!pkmer)

- 该插件为 Github 开发者 [702573N](https://github.com/702573N) 开发的 [Obsidian-Tasks-Calendar](https://github.com/702573N/Obsidian-Tasks-Calendar) 和 [Obsidian-Tasks-Timeline](https://github.com/702573N/Obsidian-Tasks-Timeline) 提供了设置页面和更新支持；
- 点击任务列表，可打开对应文件，快速跳转。
- 能够按照任务状态，对当天的任务计数，以及基于时间段和优先级对任务进行筛选，按任务类型与紧急程度进行展示；
- 该插件能够在自定义单文件，快捷输入任务，支持配置不同文件，并且在侧边插件面板中，快速切换，进行任务的输入；
- 能够与 Obsidian 日记功能，配合使用；

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Tasks calendar wrapper
3. 安装
4. 开启插件

## 使用

`Ctrl`+`P` 或者点击按钮，呼出命令面板，输入或找到“Tasks Calendar Wrapper: Open Tasks Timeline View”，选择命令，Obsidian 库中任务的 timeline 视图，将显示在界面右侧窗口。

![Pasted image 20230514205016](https://cdn.pkmer.cn/images/Pasted%20image%2020230514205016.png!pkmer)

## 插件的设置

obsidian-tasks-calendar-wrapper 版本 0.1.8 的配置面板：

![Pasted image 20230514205149](https://cdn.pkmer.cn/images/Pasted%20image%2020230514205149.png!pkmer)

## UI 设置

### 启用计数器和筛选器面板

是否在 “today（今天）”面板上，使用基于任务完成状态的计数器和过滤器。点击以下三个按钮，可基于任务状态，进行任务的过滤。

![Pasted image 20230509134126](https://cdn.pkmer.cn/images/Pasted%20image%2020230509134126.png!pkmer)

注意事项

- 插入的任务，未配置时间的任务，会自动归入 Unplanned 未计划中。

### 启用快速输入面板

是否使用快速输入面板。

![Pasted image 20230514212156](https://cdn.pkmer.cn/images/Pasted%20image%2020230514212156.png!pkmer)

用法：

- 选择 `New Task`，然后，点击后面文件名，呼出下拉菜单，选择预先配置的 `Tasks Files` 中文件，快捷输入任务。

### 任务文件

为快速输入面板，显式指定记录任务的文件。确保路径由用 `,` 分割文件路径。

在插件设置面板，添加快速输入的目标任务文件路径。

![Pasted image 20230509134606](https://cdn.pkmer.cn/images/Pasted%20image%2020230509134606.png!pkmer)

将显示在快速面板，下拉菜单：

![Pasted image 20230509134257](https://cdn.pkmer.cn/images/Pasted%20image%2020230509134257.png!pkmer)

用法举例：

- 支持多个文件，可在插件面板的快速输入功能区的下拉菜单，选择切换输入 task 的文件，例如，支持以不同文件管理不同紧急程度的任务，基于工作区的 GTD 四象限的任务管理；
- 与 projects 插件的不同项目进行联用，快速切换不同项目的任务文件，添加任务；

### 收件箱

将文件设置为 `Inbox.md`，用于快速输入面板中的任务项。可自定义文件，此文件选项，将在快速输入面板的下拉文件列表中，显示为首位。

![Pasted image 20230508222325](https://cdn.pkmer.cn/images/Pasted%20image%2020230508222325.png!pkmer)

### 新键任务的存放位置

指定新任务项，在记录任务文件中，存放的对应标题层级： `## Tasks`

![Pasted image 20230514213304](https://cdn.pkmer.cn/images/Pasted%20image%2020230514213304.png!pkmer)

### 日记文件夹

指定保存日记的文件夹。读取符合预设时间格式命名的日记文件，自动加载当天日记文件，到快捷输入面板。如果没有创建当天日记文件，会提示按照本插件设置的文件名命名格式，创建。

![Pasted image 20230514215824](https://cdn.pkmer.cn/images/Pasted%20image%2020230514215824.png!pkmer)

用法举例

- 与日记功能，设置成同一个文件夹，根据统一的日记文件名的格式，自动读取。

### 日记文件名的时间格式

设置日记文件名的格式。格式应该是 moment 格式，更多细节参考 [doc of moment.js](https://momentjs.com/docs/#/displaying/format/)

用法举例

- 如果 obsidian，已经设置了日记功能，如果使用本插件快捷输入，日记的文件名命名规则需要统一。

### 启用年份题头

在面板中，未聚焦今天任务时，任务列表是否显示年份，进行区分。

### 显示已完成的任务

是否显示已完成的任务。

### 从过去转发任务

是否转发过去的任务，并将其显示在当天的聚焦面板上。

### 启动时聚焦今日任务

勾选 `Today Focus On Load`，设置启动时，默认聚焦今日任务。点击 `Today`，也可锁定当天任务列表界面，进行聚焦。不点击，顶部会列出之前所有的任务，可在插件设置中

![Pasted image 20230509141022](https://cdn.pkmer.cn/images/Pasted%20image%2020230509141022.png!pkmer)

### 加载今日任务时，激活筛选器

是否激活筛选器，选项有，1、无筛选，2、todo（今日待做任务），3、overdue（超期任务），4、unplanned（无时间设置的未计划任务）。

## 任务项可视化设置

### 使用相对日期

是否使用相对日期来描述任务日期，例如：明天 00:00

![Pasted image 20230514222815](https://cdn.pkmer.cn/images/Pasted%20image%2020230514222815.png!pkmer)

### 使用循环

是否显示循环任务的循环设置信息

### 使用优先级

显示或不显示任务的优先级信息

### 使用标签

是否显示任务的标签。可使用调色板，为标签自定义颜色!

![Pasted image 20230514221849](https://cdn.pkmer.cn/images/Pasted%20image%2020230514221849.png!pkmer)

### 隐藏标签

指定哪些标签，不需要与标签一起显示，请注意，默认情况下，所有标签文本都将从显示的项目文本中隐藏，还要注意的是标签只是隐藏，而不是从文本中移除。

![Pasted image 20230514221936](https://cdn.pkmer.cn/images/Pasted%20image%2020230514221936.png!pkmer)

### 使用文件名

是否显示任务的来源文件。

### 使用标题层级

是否显示任务在来源文件中的 markdown 标题层级。

## 其他设置

### 日期格式

指定面板中，任务展示列表的日期使用的格式，请注意，格式应该是 moment 格式，更多细节，请参阅 [doc of moment.js](https://momentjs.com/docs/#/displaying/format/)。如：`yyy,MMM, D`

![Pasted image 20230514222744](https://cdn.pkmer.cn/images/Pasted%20image%2020230514222744.png!pkmer)

### 排序方式（待后续完善教程）

指定一个 callable{a lambda，a function and etc }来进行任务项的排序，注意这个设置，必须是一个 JavaScript callable 定义一种类型，例如：（arg1: TaskDataModel, arg2: TaskDataModel）=>number（数字格式）

可以根据 任务的 status，text，start time，due time，tags，按照升序或降序排序后，在插件面板展示。

**请特别注意更改此选项的安全问题，因为这里输入的变量在 JavaScript 代码具有特殊定义？。**

### 使用选定标签筛选

是否使用标签，来**选取**有特定标签或没有特定标签的任务或文件

#### 包含特定标签的任务筛选器

添加标签，进行任务的选取与展示

#### 包含特定标签的文件筛选器

添加标签，进行文件的任务读取与展示

### 使用排除标签筛选

是否使用标签，来**排除**有特定标签或没有特定标签的任务或文件

#### 排除特定标签的任务筛选器

添加标签，进行特定任务的排除

#### 排除特定标签的文件筛选器

添加标签，进行特定文件的排除

#### 排除特定路径

排除匹配的特定文件夹、文件中的任务

注意：1、使用 `,` 分割路径；2、使用顶头无 `/` 的无根路径形式。

### 过滤空任务

是否过滤未填写具体信息的 `空任务`。如果不过滤，将显示原始文本
