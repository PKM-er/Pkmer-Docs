---
uid: 20230803231105
title: Obsidian 插件：Buttons
tags: ['自动化', '效率', 'obsidian插件', 'readme']
description: 在 Obsidian 笔记中创建按钮，以运行命令。命令按钮的样式可以有你或者你的主题自定义。命令的内容可以是 OB 默认的，也可以是插件提供的。甚至你可以自己通过它拉执行 JS命令。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232613
---

# Obsidian 插件：Buttons

> [!Note] 插件名片
> - 插件名称：Buttons
> - 插件作者：Sam Morrison
> - 插件说明：在 Obsidian 笔记中创建按钮，以运行命令。命令按钮的样式可以有你或者你的主题自定义。命令的内容可以是 OB 默认的，也可以是插件提供的。甚至你可以自己通过它拉执行 JS 命令。
> - 插件分类：[' 自动化 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/shabegom/buttons)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?buttons)

## 概述

在 Obsidian 笔记中创建按钮，以运行命令。命令按钮的样式可以有你或者你的主题自定义。命令的内容可以是 OB 默认的，也可以是插件提供的。甚至你可以自己通过它拉执行 JS 命令。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/shabegom/buttons/main/README.md)
>

---

## Readme(翻译）

下面是 [[buttons]] 插件的自述翻译

# 黑曜石按钮

通过点击✨按钮✨来运行命令和打开链接

## 这个插件正在寻找人来维护它。[如果你有兴趣，请回复这个问题](https://github.com/shabegom/buttons/issues/179)

安装

您可以在社区插件列表中找到按钮！

## 用法

开始使用按钮的最快方法是使用按钮制作器。您可以从命令面板中打开按钮制作器。以下是按钮制作器选项的概述。

- **名称：**您的按钮的名称。
- **按钮类型：**选择要创建的按钮类型，选项如下：
    - **命令：**单击按钮以从命令面板运行命令。
    - **链接：**单击按钮以打开 URL 或 URI。
    - **计算：**单击按钮以运行数学计算。计算按钮可以引用笔记中的行。
    - **模板：**单击按钮以在模板笔记中添加、追加、插入或创建新的笔记。
    - **文本：**单击按钮以在指定文本中添加、追加、插入或创建新的笔记。
    - **交换：**交换按钮是一种特殊类型的内联按钮。使用交换按钮，您可以在每次单击时运行不同类型的按钮。
- **操作：**根据您选择的**按钮类型**，您将选择要执行的操作：
    - **命令：**选择要运行的命令面板命令。
    - **链接：**编写 URL 或 URI。
    - **计算：**编写数学方程。
    - **模板：**选择要使用的模板的前置、追加、新建笔记或行：
        - **前置模板：**单击按钮以将模板前置到当前笔记中。
        - **追加模板：**单击按钮以将模板追加到当前笔记中。
        - **在行处添加模板：**单击按钮以将模板添加到当前笔记的指定行处。
        - **从模板创建新笔记：**选择模板，编写新笔记的名称，选择新笔记是否应在拆分窗格中打开。
    - **文本：**选择要使用的前置、追加、新建笔记或行的文本：
        - **前置模板：**单击按钮以将文本前置到当前笔记中。
        - **追加模板：**单击按钮以将文本追加到当前笔记中。
        - **在行处添加模板：**单击按钮以将文本添加到当前笔记的指定行处。
        - **从模板创建新笔记：**编写新笔记的名称，选择新笔记是否应在拆分窗格中打开。
    - **交换：**编写交换按钮在每次单击时将出现的按钮块 ID，例如 `[id1, id2]`（有关交换按钮的更多信息，请参见下文）。
- **删除：**您可以在单击按钮后删除按钮。您还可以通过提供按钮块 ID 数组（例如 `[id1, id2]`）来删除笔记中的其他按钮。
- **替换：**您可以删除现有笔记中的行，然后使用**追加模板**或**前置模板**按钮类型进行替换。编写一个包含起始行号和结束行号的数组，例如 `[起始行号，结束行号]`。
- **继承：**通过添加另一个按钮的按钮块 ID，您正在制作的按钮可以继承参数。
- **模板引擎：**如果模板引擎参数为 `true`，则可以在按钮中包含模板引擎命令。单击按钮时，该命令将转换为其值，并在单击后转换回命令。这不能与内联按钮一起使用。
- **自定义类：**提供自定义 CSS 类来为您的按钮设置样式。
- **颜色：**选择按钮的颜色。

### 按钮块 ID

按钮块 ID 是一个位于按钮代码块直接下方的块 ID，以 `button` 开头，例如 `^button-id`。按钮块 ID 可用于：

- 创建内联按钮（有关内联按钮的详细信息，请参见下文）`button-button1`
- 在内联交换按钮中选择要使用的按钮：`swap [button1, button2]`
- 从另一个按钮继承参数：`id button1`
- 使用 `remove [button1, button2]` 参数删除多个按钮

### 内联按钮

内联按钮可以与其他文本或其他按钮一起创建。内联按钮实质上是将现有按钮代码块放置在一行内的副本。要创建内联按钮：

1. 使用按钮生成器或手写按钮代码块创建一个常规按钮。
2. 确保您的按钮具有唯一的按钮块 ID。
3. 转到您想要内联按钮的笔记，并运行插入内联按钮命令，或者在反引号之间写入按钮块 ID，例如 `button-id`。

内联按钮必须以 `button` 开头，而按钮块 ID 的其他用法只需要 ID 即可。

### 交换按钮

交换按钮是一种特殊类型的内联按钮。当您点击交换按钮时，它会循环显示多个其他按钮。使用交换按钮可以通过一个按钮运行一系列操作。创建交换按钮的步骤如下：

1. 创建执行您希望交换按钮执行的操作的按钮。确保每个按钮都有唯一的按钮块 ID。
2. 创建一个交换按钮，并提供其他按钮的按钮块 ID，例如 `swap [id1, id2, id3]`。确保交换按钮具有唯一的按钮块 ID。
3. 使用插入内联按钮命令将交换按钮插入为内联按钮。

目前，交换按钮只能用作内联按钮。

### 继承按钮参数

如果您在许多笔记中使用相同（或相似）的按钮，您可以创建一个父按钮，并让其他按钮从父按钮继承。

1. 创建一个带有您希望继承的参数的父按钮。确保父按钮具有唯一的 button-block-id。
2. 创建子按钮并提供父按钮的 button-block-id `id parentButton`。

子按钮也可以有自己的参数。子按钮上提供的任何参数都会覆盖父按钮的参数。

### 模板按钮

Templater 参数允许您在按钮内部提供一个 Templater 命令。当按钮被点击时，该命令会被转换为其值，然后再转换回 Templater 命令以供下次点击使用。这在使用 New Note 按钮类型时效果最佳。

一个带有这个命令的按钮...

    ```button
    name Make an Hourly Note
    type note(<% tp.date.now("HH:MM") %>) template
    action Log Template Note
    templater true
    ```

...当被点击时会转换为：

    ```button
    name Make an Hourly Note
    type note(16:20) template
    action Log Template Note
    templater true
    ```

然后 `09` 会变回 `<% tp.date.now("HH:MM") %>`。

Templater 参数也适用于文本按钮类型：

    ```button
    name Add Current Time
    type line(1) text
    action <% tp.date.now("HH:mm:ss") %>
    replace [1,1]
    templater true
    ```

这将在笔记的第一行插入当前时间，替换该行上的任何现有文本，然后转换回 Templater 命令以供将来使用。

### 按钮样式化

#### 样式设置

安装样式设置插件，可以轻松更改默认按钮样式。

#### 自定义类

如果您想要一个真正自定义的样式，或者想要具有多种不同样式的按钮，您可以在按钮中添加一个 `class` 参数，并使用 css 代码片段来进行样式设置。

### 在命令执行后删除按钮

如果你有一个按钮只需要运行一次，然后可以从笔记中删除（适用于在每日笔记中插入提示），你可以在按钮中添加一个 `remove true` 参数。

如果你在一个笔记中有多个按钮，并且想要在点击一个按钮时将它们全部删除，你可以将按钮块的 id 数组提供给 `remove` 参数，例如 `remove [id1, id2, id3]`。

### 替换部分内容

当使用追加或前置模板按钮时，您可能希望删除现有笔记中将被模板替换的行。为此，请编写一个 `replace` 参数，并提供一个数组，其中包含第一行和最后一行；例如，`replace [1, 5]` 将删除第 1 行到第 5 行的内容。

例子

### 命令按钮

使用 Periodic Notes 插件打开前一天的日记：

    ```button
    name 打开前一天的日记
    type command
    action Periodic Notes: 打开前一天的日记
    ```
    ^button-previous

打开/关闭拼写检查：

    ```button
    name 切换拼写检查
    type command
    action 切换拼写检查
    color blue
    ```
    ^button-spellcheck

### 链接按钮

打开 Obsidian 论坛：

    ```button
    name 去论坛，蝙蝠侠！
    type link
    action https://forum.obsidian.md/
    ```
    ^button-forum

### 模板和行按钮

#### 追加

追加一个日志模板注释：

    ```button
    name Log
    type append template
    action Hourly Log Template Note
    ```
    ^button-log

追加当前时间：

    ```button
    name Log
    type append text
    action <% tp.date.now("HH:mm") %>
    templater true
    ```

#### 前置模板

用更新的天气替换天气模板笔记：

    ```button
    name Current Weather
    type prepend template
    action Weather Template Note
    replace [1,5]
    ```
    ^button-weather

前置一个每周待办事项列表并移除其他按钮：

    ```button
    name Monday List
    type prepend template
    action Monday Template Note
    remove [mon,tues,wed]
    ```
    ^button-mon

    ```button
    name Tuesday List
    type prepend template
    action Tuesday Template Note
    remove [mon,tues,wed]
    ```
    ^button-tues

    ```button
    name Wednesday List
    type prepend template
    action Wednesday Template Note
    remove [mon,tues,wed]
    ```
    ^button-wed

更好的是，设置这些按钮，然后将它们作为内联按钮一行添加：

    `button-mon` `button-tues` `button-wed`

### 在行中添加模板

假设你希望天气出现在笔记中一个特定的位置，而不是直接在按钮旁边：

    ```button
    name Current Weather
    type line(1) template
    action Weather Template Note
    replace [1,5]
    ```
    ^button-weatherLine

#### 从模板创建新笔记

根据会议笔记模板创建一个即将举行的会议的新笔记：

    ```button
    name 新建会议
    type note(Meeting, split) note
    action 会议笔记模板
    ```
    ^button-meeting

动态地将小时和分钟添加到笔记标题中：

    ```button
    name 新建会议
    type note(Meeting-<%tp.date.now("HH-MM") %>, split) note
    action 会议笔记模板
    templater true
    ```
    ^button-meeting2

### 计算按钮

进行一些简单的数学计算：

    ```button
    name Add Em Up
    type calculate
    action 2+2
    ```
    ^button-add

按钮外的参考数字：

    香蕉数量：5  
    丢失的香蕉：5

    ```button
    name 今天有多少香蕉？
    type calculate
    action $1-$2
    color yellow
    ```
    ^button-bananas

自然语言数学：

    5只狗加上2只猫除以2个人

    ```button
    name 谁得到了宠物？
    type calculate
    action $1
    class sad-button
    ```
    ^button-breakup

计算按钮使用 [math-expression-evaluator](https://github.com/bugwheels94/math-expression-evaluator) ，因此应支持该库支持的任何符号。

### 交换按钮

让我们使用之前按钮的 button-block-id 创建一个交换按钮：

    ```button
    name 疯狂交换按钮
    swap [add,meeting,forum]
    ```
    ^button-swap

然后将该按钮插入行内：

    `button-swap`

1. 在第一次点击疯狂交换按钮时，我们将进行 2+2 的加法运算。
2. 在第二次点击疯狂交换按钮时，我们将创建一个新的会议笔记。
3. 在第三次点击疯狂交换按钮时，我们将前往 Obsidian 论坛。

注意：如果关闭笔记，则交换计数会被重置。

发布

### 下一个版本（尚未发布）

- Bug 修复：当 Obsidian 启动时，按钮现在可以在实时预览模式下渲染（[Lx]）

[Lx]: <https://github.com/Lx>

### 0.4.4

- Bugfix: 蓝色和紫色现在应该可以正常工作了
- Bugfix: 减小了按钮制作器在较小显示屏上的高度

### 0.4.3

- 新增行模板按钮：在当前笔记的指定行插入一个模板

### 0.4.2

- 可滚动按钮制作器
- 在按钮制作器中添加自定义按钮块 ID

### 0.4.0

- 内联按钮！您可以使用按钮块 ID（^button-id）使用此语法\`button-id\` 来添加内联按钮
- 插入内联按钮：使用命令面板中的**插入内联按钮**快速插入新的内联按钮
- 按钮生成器：从命令面板中打开按钮生成器，快速轻松地创建新的按钮
- 新的按钮参数 - `swap`：使用 `swap [id1, id2, id3]` 参数以及内联按钮来创建在每次点击时执行多个操作的按钮
- 新的按钮参数 - `templater`：templater 参数允许您在按钮内部放置一个 templater 命令。当点击按钮时，templater 命令将被转换为其值，然后再转换回 templater 命令：`note(<% tp.date.now("MM-DD") %>) template`

### 0.3.2

- 修复了在保险库中没有按钮块 ID 时引发的未捕获的类型错误
- 修复了如果不在内部版本中的位置错误

### 0.3.0

- 您可以在按钮块下方添加一个块 ID。按钮块 ID 可用于继承按钮的参数或删除多个按钮
- `remove` 现在可以是一个要删除的按钮块 ID 的数组（仍然可以是 true 以删除点击的按钮）
- `replace` 现在接受一个类似 [startLine,endLine] 的数组，用于定义要替换的起始行和结束行。
- `append`，`prepend`，`remove`，`replace` 已更新为使用按钮位置。不再需要 `name`。

### 0.2.10

- Bugfix：使用模板创建的新笔记现在可以在标题中包含 `-`、`!` 和其他字符。

### 0.2.9

- 通过使用 `note（笔记名称，split）模板`，您可以在分割窗格中打开通过模板类型按钮创建的笔记。

### 0.2.8

- 如果您使用 Templater，现在可以禁用核心 Templates 插件。您仍然需要定义一个 Templates 文件夹。

### 0.2.6

- 修复将按钮值转换为小写的错误
- 在按钮周围添加一些填充

### 0.2.4

- 添加一个命令面板命令，将按钮代码块添加到笔记中
- 使用 Style Settings 插件设置默认按钮样式

### 0.2.3：计算按钮类型

- 添加了一个 `calculate` 按钮类型，可以进行数学计算并输出结果
- `calculate` 可以通过行号引用按钮外的数字
- 修复了使用追加操作时的额外空白问题
- 修复了在向笔记添加内容时出现错误的问题，现在按钮名称在正则表达式中被转义

### 0.2.2：移除日志记录

- 移除了在上一个版本中意外包含的移动日志记录

### 0.2.1：样式更新

- 更新了默认按钮的样式

### 0.2.0：添加了 replace 参数和 note() 模板功能

- 移除了闪烁悬停效果，因为在可移动设备上看起来很糟糕
- 添加了一个 `replace` 参数，用于替换指定标题和按钮之间的内容
- 添加了一个 `note()模板` 功能，可以根据指定的模板创建一个新的笔记

### 0.1.1：发布到社区插件

- 现在可以在 Obsidian 的社区插件列表中找到 Buttons 插件。

### 0.1.0：添加模板功能

- 添加了 `template` 按钮类型
- 在笔记中添加指定的模板，可以在前面或后面添加

### 0.0.5：添加删除功能

- 添加了一个 `remove` 参数。如果 `remove true` 是按钮的最后一个参数，在按钮被点击后，按钮将从笔记中删除。

### 0.0.4：更新样式

**此版本与上一个版本（0.0.3）有一个重大变化**

- customClass 参数现在是 class
- customId 参数现在是 id
- 添加 class 参数将删除默认按钮样式。您可以通过将类名作为 class 参数的值来重新添加该样式：
`class button-default button-shine`

### 0.0.3：添加 `customId` 参数

- 添加 `customId` 以进一步自定义按钮样式

### 0.0.2：添加 `customClass` 参数

- 添加了 `customClass` 参数，用于定义自定义按钮样式的类

### 0.0.1：初始版本

- Buttons 的第一个发布！



