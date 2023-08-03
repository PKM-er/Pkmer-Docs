---
uid: 20230803231105
title: Obsidian 插件：Archiver
tags: ['任务管理', '文件重构', 'obsidian插件', 'readme']
description: 将已完成的任务移动到带有日期树的存档中
author: AI
type: readme
draft: false
editable: false
modified: 20230803232447
---

# Obsidian 插件：Archiver

> [!Note] 插件名片
> - 插件名称：Archiver
> - 插件作者：ivan-lednev
> - 插件说明：将已完成的任务移动到带有日期树的存档中
> - 插件分类：[' 任务管理 ', ' 文件重构 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ivan-lednev/obsidian-task-archiver)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-task-archiver)

## 概述

将已完成的任务移动到带有日期树的存档中

![Archiver](https://cdn.pkmer.cn/covers/obsidian-task-archiver.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ivan-lednev/obsidian-task-archiver/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-task-archiver]] 插件的自述翻译

这个插件是一个用于处理你的 Markdown 文件中已完成任务的工具箱。它将一些 [org-mode](https://orgmode.org/) 的功能引入到 Obsidian 中。

- [贡献](#contribution)
- [命令](#commands-)
- [设置](#settings)
    - [占位符](#placeholders)
    - [归档文件路径](#archive-file-path)
    - [归档前替换文本](#replacing-text-before-archiving)
    - [归档前追加内容](#append-stuff-before-archiving)
    - [检测已完成任务的额外模式](#additional-patterns-to-detect-completed-tasks)
    - [标题和列表层级](#heading--list-hierarchies)
    - [规则](#rules)
- [使用方法](#usage)
- [致谢](#acknowledgements)
    - [贡献者](#contributors)
- [开发](#development)

## 贡献

如果你发现了一个 bug 或者有一些改进插件的想法，欢迎创建一个 issue：<https://github.com/ivan-lednev/obsidian-task-archiver/issues。>

也欢迎提交 pull-requests！如果你想要贡献但不知道从何开始，你可以创建一个 issue 或者给我写封邮件：bishop1860@gmail.com。

你也可以通过给我买杯咖啡来支持我：

## 命令

<details>
<summary>将任务归档到此文件中</summary>

这是它的样子：

```md
-   [ ] 这个我还没做
-   [x] 给狗浇水
    -   一些任务细节
-   [x] 给植物浇水
```

变成了：

```md
-   [ ] 这个我还没做
```

# 存档

- [x] 给狗浇水
    - 一些任务细节
- [x] 给植物喂食

```

或者，启用日期树：

```md
-   [ ] 这个我还没做完
```

# 存档

- [[2021-09-W-38]]
    - [[2021-09-16]]
        - [x] 给狗浇水
            - 一些任务细节
        - [x] 给植物浇水

```


</details>
<details>
<summary>在此文件中存档包括嵌套任务在内的任务</summary>

与简单存档相同，只是现在已完成的嵌套任务也会被存档，包括它们的子项。

这样：

```markdown
-   [ ] 未完成的任务
    -   [x] 已完成的子任务
        -   任务细节
    -   [ ] 未完成的子任务
```

变成：

```markdown
-   [ ] 未完成的任务
    -   [ ] 未完成的子任务
```

# 存档

- [x] 完成子任务
    - 任务详情

```

</details>

<details>
<summary>删除此文件中的任务</summary>

这与“存档此文件中的任务”相同，只是任务被丢弃。

</details>

<details>
<summary>存档光标下的标题</summary>

获取光标下的整个部分，包括所有子部分，并将其移动到存档中。

这样：

```markdown
一些顶级文本
```

# H1 标题

一些文本

## H2 标题

更多文本

```

转化为：

```markdown
一些顶级文本
```

# 存档

## H1 标题

一些文本

### H2 标题

更多文本

```

</details>

<details>
<summary>在光标下的列表中对任务进行排序</summary>

抓取光标下的整个列表，并**递归地**根据完成情况重新排序所有项目：

1. 首先是普通列表项
2. 然后是未完成的任务
3. 最后是已完成的任务

这个列表：

```markdown
-   [x] 任务
-   项目
-   [ ] 未完成
    -   [x] 任务
    -   项目 更多注释
    -   [ ] 未完成
-   项目 2
-   [ ] 未完成 2
    -   [x] 任务
    -   项目
    -   [x] 任务 2
```

变成了：

```markdown
-   项目
-   项目 2
-   [ ] 未完成
    -   项目 更多注释
    -   [ ] 未完成
    -   [x] 任务
-   [ ] 未完成 2
    -   项目
    -   [x] 任务
    -   [x] 任务 2
-   [x] 任务
```

</details>

<details>
<summary>将此级别及以上的列表项转换为标题</summary>

抓取光标下的列表，并将光标所在项目及其上方级别的每个列表项转换为标题。

这个：

```markdown
-   li 1
    -   li 2 | <- cursor
        -   li 3
```

变成了：

```markdown

# li 1

## li 2

-   li 3
```

</details>

<details>
<summary>切换光标下的任务状态为已完成并归档</summary>

当光标位于一个任务上时，该命令会将任务标记为已完成并立即归档。

## 设置

有很多设置可以帮助您构建适合的工作流程。

### 占位符

您可以在设置中使用多个占位符来构建酷炫的工作流程。当您运行存档工具时，这些占位符将被解析为不同的值：

- `{{date}}`
  - 指向今天的日期
- `{{obsidianTasksCompletedDate}}`
  - 指向任务的完成日期（✅ 2023-03-29）。这样，您可以将使用 `obsidian-tasks` 插件创建的任务归档到它们应该在的位置
- `{{sourceFileName}}`
  - 解析为您所在文件的基本名称
- `{{sourceFilePath}}`
  - 解析为从存储库根目录到您所在文件的路径
- `{{heading}}`
  - 指向任务上方的标题
- `{{headingChain}}`
  - 从任务上方的标题创建一个链。例如 `项目1 > 团队2`

### 存档文件路径

您可以将任务发送到同一个文件中，也可以发送到一个单独的文件中，比如每日笔记，或者基于您所在文件的名称的某个路径。

在归档之前替换任务内容的正则表达式；如果您想要从归档的任务中删除标签，这将非常有用。

### 在归档之前添加内容

如果您想要查看自己一天的成就，这可能会很有用：

![](metadata-demo.png)

### 用于检测已完成任务的附加模式

这样，您可以仅归档与某个模式匹配的任务，而将其他任务保持不变。比如说，您只想归档使用 `obsidian-tasks` 插件的全局过滤器（比如标签 `#task`）的任务。

### 标题和列表层次结构

您可以使用标题和列表项的占位符创建任意层次结构。新的归档任务将合并到现有的树中。

您可以使用此功能在归档中创建一个日期树：

![](tree-demo.png)

或者您可以创建一个包含指向来源的链接的单个归档文件：

![](tree-demo-big-archive.png)

### 规则

规则允许您自定义如何处理符合特定条件的任务：

![](rule-demo.png)

潜在地，规则可以为符合特定条件的任何一组任务指定任何自定义工作流程。如果您希望在此处看到一些其他功能，请随时创建一个功能请求！

## 用法

打开命令面板并运行其中一个存档器 [命令](#commands)。

## 致谢

该插件是对 Emacs 的 [org-mode](https://orgmode.org/) 的一些功能的实现。

此外，我还依赖于以下优秀插件的代码：

- [obsidian-kanban](https://github.com/mgmeyers/obsidian-kanban)
- [obsidian-outliner](https://github.com/vslinko/obsidian-outliner)。该插件在架构和代码质量方面非常出色
- [obsidian-commander](https://github.com/phibr0/obsidian-commander)。帮助我弄清楚如何使用响应式框架构建设置页面

### 贡献者

- Richard Cook (wealthychef@gmail.com)
- [Solid.js](https://www.solidjs.com/) 用于设置页面。



