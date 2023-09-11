---
uid: 20230329145810
title: Obsidian 插件：Calendar 简单使用的阅历和任务管理方式
tags: [obsidian, 插件, 月历, 日历]
description: Obsidian 插件：Calendar为 Obsidian 添加一个简单日历功能
author: OS
type: basic
draft: false
editable: false
modified: 20230911010418
---

# Obsidian 插件：Calendar 简单使用的阅历和任务管理方式

## 概述

为 Obsidian 创建了一个简单的日历视图，用于在你的日常笔记之间可视化和导航。

点击时，它会以当天的日期作为文件名生成一个笔记，方便我们快速记录，同时它支持日模板及周模板定制，在点击日期时可以自动使用你定义的模板，方便作总结或读书笔记等有固定格式的场景。同时在日期上的悬浮点可以提示你是否创建过当天的日记以及通过点的数量来判断你笔记内容的多少。

> [!Note] 插件名片
> - 插件名称：Calendar
> - 插件作者：Liam Cain
> - 插件说明：为 Obsidian 添加一个简单日历功能
> - 插件分类：[' 导航工具 ', ' 日志类 ', ' 日期相关 ', ' 效率 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/liamcain/obsidian-calendar-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?calendar)

## 特性&效果

![image.png](https://cdn.pkmer.cn/images/20230429233807.png!pkmer)

- 轻松跳转到任何**每日笔记**。
- 为没有笔记的日期创建新的每日笔记。（这对于需要补充旧笔记或者提前计划未来笔记非常有帮助！这将使用您当前的**每日笔记**模板！）
- 可视化您的写作。每天都包括一个近似您当天写了多少的仪表盘。
- 使用**周记**作为额外的组织层级！它们的使用方式与每日笔记相同，但具有自己的自定义选项。

## 使用

### 日记

日历视图上单击对应的日期，在对话框中点击（create），就会显示当天的日记。

![image.png](https://cdn.pkmer.cn/images/20230507112212.png!pkmer)

#### 日记的格式

Calendar 中生成的日记，**就是按照核心插件中的日记模式生成的**。

如果你想要用 Calendar 生成日记的日期格式、存放位置，甚至是日记模板做控制，就直接在核心插件【日记】中设置即可！

![image.png](https://cdn.pkmer.cn/images/20230507112737.png!pkmer)

>[!Tip] 提示
>- Calendar 插件的一些功能迁移来核心插件【日记】

### 周记使用

“设置——插件选项——Calendar”打开 Calendar 的控制面板

- show week number：这样你的日历视图就会多出来一栏，用于显示月历中当前【周数】

![image.png](https://cdn.pkmer.cn/images/20230507114324.png!pkmer)

和日记一样，单击【周数】就可以创建属于你的周复盘啦：

#### 周记的格式

依赖：

![image.png](https://cdn.pkmer.cn/images/20230507115326.png!pkmer)

- **Weekly note format**

这个是设置【周记文件名】的，在右侧的输入框输入你的周记文件名，新建的时候就会自动命名。

**特别注意！**  也可以使用 `YYYY-WW` 的命名方式，以这周为例，会显示 `2021-34`

意为”2021 年的第 34 周“

或者说，【周复盘 -YYYY 年第 WW 周】，显示出来的就是【周复盘 -2021 年第 34 周】

- **Weekly note tmeplate**

使用周记模板，新建一个模板，然后在后面输入周记模板路径就可以。

- **Weekly note folder**

周记文件保存在哪个文件夹中，按照你自己想保存的设置即可

> [! Tip] 提示
> - 输入的文件夹名称一定要真实存在，系统不会按照你输入的文件夹名自动建立文件夹

## 自定义

以下 CSS 变量可以在您的 `obsidian.css` 文件中进行覆盖。

```css
/* obsidian-calendar-plugin */
/* https://github.com/liamcain/obsidian-calendar-plugin */

#calendar-container {
  --color-background-heading: transparent;
  --color-background-day: transparent;
  --color-background-weeknum: transparent;
  --color-background-weekend: transparent;

  --color-dot: var(--text-muted);
  --color-arrow: var(--text-muted);
  --color-button: var(--text-muted);

  --color-text-title: var(--text-normal);
  --color-text-heading: var(--text-muted);
  --color-text-day: var(--text-normal);
  --color-text-today: var(--interactive-accent);
  --color-text-weeknum: var(--text-muted);
}
```

除了 CSS 变量之外，还有一些类可以进行进一步的自定义。例如，如果您不喜欢标题的亮度，可以使用以下代码进行覆盖：

```css
#calendar-container .year {
  color: var(--text-normal);
}
```

> **注意：**在覆盖类时，特别重要的是要在前面加上 `#calendar-container` 以避免 Obsidian 内部的任何意外更改！

> [!Tip] 相关推荐
> - [[obsidian-tasks的GTD实践]]：基于 task 插件的实战 GTD 管理
> - [[card-board]]：看板任务管理插件，不需要你特别维护看板数据，而是自动收集所有笔记中的任务
> - [[obsidian-projects]]：提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求
> - [[obsidian-reminder-plugin]]：为 Markdown 中的待办事项，添加提醒管理。
> - [[obsidian-tasks-plugin]]：Obsidian 增强任务管理，为任务增加优先级，计划日期，完成日期等自动化和图形化操作界面。
> - [[progressbar]]：主要作用是将 progressbar 格式的代码块渲染为基于时间或手动的进度条
> - [[obsidian-kanban]]：在 Obsidian 制作看板，可以连接你的笔记
> - [[obsidian-day-planner]]：用于从 Markdown 笔记中的任务列表中规划和管理番茄钟计时器
> - [[obsidian-task-archiver]]：帮你快速归类待办任务
> - [[obsidian-last-modified-timestamp-in-status-bar]]：在状态栏可视化你的最后编辑时间
> - [[tasks-calendar-wrapper]]：完美的时间线/日历视图的任务面板展示