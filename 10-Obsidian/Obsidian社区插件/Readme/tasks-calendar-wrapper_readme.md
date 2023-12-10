---
uid: 2023120719441952
title: Obsidian 插件：【Readme】Tasks Calendar Wrapper
tags: ['obsidian插件', 'readme']
description: 这是Obsidian-Tasks-Calendar（https://github.com/702573N/Obsidian-Tasks-Calendar）和Obsidian-Tasks-Timeline（https://github.com/702573N/Obsidian-Tasks-Timeline）的简单封装。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Tasks Calendar Wrapper

> [!Note] 插件名片
> - 插件名称：Tasks Calendar Wrapper
> - 插件作者：zhuwenq
> - 插件说明：这是 Obsidian-Tasks-Calendar（<https://github.com/702573N/Obsidian-Tasks-Calendar）和 Obsidian-Tasks-Timeline（https://github.com/702573N/Obsidian-Tasks-Timeline）的简单封装。>
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Leonezz/obsidian-tasks-calendar-wrapper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tasks-calendar-wrapper)

## 概述

这是 Obsidian-Tasks-Calendar（<https://github.com/702573N/Obsidian-Tasks-Calendar）和 Obsidian-Tasks-Timeline（https://github.com/702573N/Obsidian-Tasks-Timeline）的简单封装。>

![Tasks Calendar Wrapper](https://cdn.pkmer.cn/covers/tasks-calendar-wrapper.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Leonezz/obsidian-tasks-calendar-wrapper/master/README.md)
>

---

## Readme(翻译）

下面是 [[tasks-calendar-wrapper]] 插件的自述翻译

# 任务日历包装器

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22tasks-calendar-wrapper%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

该插件目前提供了一个时间线视图，用于显示来自您的 [Obsidian](https://obsidian.md/) 存储库的任务，具有可自定义的过滤器和渲染选项。

## 概述

[ExampleValut](https://github.com/Leonezz/obsidian-tasks-calendar-wrapper/tree/master/ExampleVault) 提供了一个使用此插件的示例，使用 [Blue-Topaz](https://github.com/whyt-byte/Blue-Topaz_Obsidian-css) 轻主题的屏幕截图如下：

![](https://cdn.pkmer.cn/covers/tasks-calendar-wrapper_2_0.png!pkmer)

## 特点

- 在时间轴视图中组织任务
- 可自定义选项
- 用于新项目和筛选的快速输入面板

关于

这是 Obsidian-Tasks-Calendar（<https://github.com/702573N/Obsidian-Tasks-Calendar）和 Obsidian-Tasks-Timeline（https://github.com/702573N/Obsidian-Tasks-Timeline）的简单包装器。>

该插件为 [702573N](https://github.com/702573N) 的出色工作提供设置页面和更新支持，有关选项的详细信息，请参阅 [Obsidian-Tasks-Calendar](https://github.com/702573N/Obsidian-Tasks-Calendar) 和 [Obsidian-Tasks-Timeline](https://github.com/702573N/Obsidian-Tasks-Timeline)。

## 使用方法

转到命令面板，找到“Tasks Calendar Wrapper: Open Tasks Timeline View”，选择该命令，视图将显示出来。

### 日期格式

对于一个项目的日期，如果该项目属于一个日记笔记，那么该日记笔记的日期将被设置为该项目的创建日期。此外，如果没有提供开始日期和计划日期，那么它们也将被设置为日记笔记的日期。

对于一般的日期格式，建议使用 [Tasks插件](https://github.com/obsidian-tasks-group/obsidian-tasks) 的表情符号格式或 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 的格式。这两种格式都在该插件中支持。

例如，一个以 2023-06-03 作为开始日期的项目可以是：

- [ ] 在 2023-06-03 开始的任务 🛫 2023-06-03

或者：

- [ ] 在 2023-06-03 开始的任务 [start::2023-06-03]

或者在日期为 2023-06-03 的日记笔记中：

- [ ] 在 2023-06-03 开始的任务

## 安装

此插件可在社区市场上获得。

## 组件

时间轴视图主要由两个组件组成，即快速输入面板和内容视图。

### 快速输入

快速输入面板提供了四个按钮和一个输入框。

![](https://cdn.pkmer.cn/covers/tasks-calendar-wrapper_2_1.png!pkmer)

#### 按钮

这四个按钮分别是：关注今天、待办事项、过期和未计划。启用“关注今天”按钮后，只会显示属于“今天”部分的任务项，而其他三个按钮则会使用相应的选项“关注”或“筛选”具有特定状态的任务。

使用输入行，您可以将新的任务项附加到选定文件中的预定义部分，例如，您可以将新任务附加到您的“收件箱”文件中：

![](https://cdn.pkmer.cn/covers/tasks-calendar-wrapper_2_2.png!pkmer)

为了使输入更加简单，您可以在面板中输入一些 [Tasks-Plugin](https://github.com/obsidian-tasks-group/obsidian-tasks) 定义的表情符号格式的日期，例如，您可以输入单词“due”和一个空格，表情符号📅将替换单词“due”。现在可用的单词 - 表情符号对如下：

- due: 📅（截止日期）
- start: 🛫（开始日期）
- scheduled: ⏳（计划日期）
- done: ✅（完成日期）
- highest: 🔺（最高优先级）
- high: ⏫（高优先级）
- medium: 🔼（中优先级）
- low: 🔽（低优先级）
- lowest: ⏬（最低优先级）
- repeat: 🔁（重复）
- recurring: 🔁（与 repeat 相同）

此外，还支持一些自然语言日期：

- today/tomorrow/yesterday: 扩展为今天/明天/昨天的日期

输入行提供的另一个功能是快速过滤器，目前支持基于日期范围和优先级的过滤器，希望很快能添加基于标签的过滤器！

![](https://cdn.pkmer.cn/covers/tasks-calendar-wrapper_2_3.png!pkmer)

### 内容

内容组件是基于日期的，具体来说，任务项是根据它们的日期进行组织的。对于每个日期，可能会有一个日期标题，并且每年可能会有一个年份标题。

![](https://cdn.pkmer.cn/covers/tasks-calendar-wrapper_2_4.png!pkmer)

#### 任务项组件

对于特定的任务项，此视图显示项目内容、状态、优先级、日期、文件名和部分（如果存在），以及标签。此外，还有一个带有铅笔图标的按钮，用于调用 [任务插件](https://github.com/obsidian-tasks-group/obsidian-tasks) 的任务编辑模态框进行编辑。

状态以图标形式显示，其他元数据以图标和徽章显示。

![](https://cdn.pkmer.cn/covers/tasks-calendar-wrapper_2_5.png!pkmer)

自 v0.2.1 起，现在您可以从内置图标切换到主题定义的状态和图标！

以下是使用主题 [AnuPpuccin](https://github.com/AnubisNekhet/AnuPpuccin) 的屏幕截图。

![](https://cdn.pkmer.cn/covers/tasks-calendar-wrapper_2_6.png!pkmer)

## 选项

- **使用内置样式**：启用插件定义的任务状态图标，或禁用它们并使用您喜欢的主题定义的图标。
- **启用计数器和筛选面板**：在快速输入面板上使用计数器/筛选器或不使用，如果未启用此选项，则不会显示计数器/筛选器。
- **计数器和筛选面板的行为**：控制计数器/筛选器按钮的效果，可用选项有：
  - 焦点：突出显示相应的项目。
  - 筛选：隐藏其他项目。
- **启用快速输入面板**：如果未启用此选项，则不会显示快速输入面板。
- **快速输入面板位置**：设置您希望显示快速输入面板的位置。可用选项有：
  - 顶部：在所有日期中的第一个日期上
  - 今天：在今天的部分上
  - 底部：在所有日期中的最后一个日期上
- **任务文件**：在快速输入面板的文件选择中显示的文件名，用逗号分隔。
- **收件箱**：设置一个文件名作为您的“收件箱”，您可以从快速输入面板快速添加新任务到其中。
- **新任务的部分**：指定新任务应追加到哪个部分。
- **每日笔记文件夹**：指定您的每日笔记文件夹。
- **每日笔记格式**：指定每日笔记文件的格式。输入应为有效的 moment 格式，请参阅 [moment.js 文档](https://momentjs.com/docs/#/displaying/format/) 了解更多详情。
- **启用年份标题**：在每年之前显示一个年份标题或不显示。
- **隐藏特定状态的任务**：如果您不想在视图中看到具有特定状态的任务，请在此处列出以逗号分隔的标记。所有标记都可用，但请注意，如果您想隐藏空标记的任务，请使用 `[ ]` 而不是 ` `。
- **从过去转发任务**：如果启用，所有未计划和过期的任务将显示在今天的部分，并从其原始日期中删除。如果禁用，则所有过期的任务将保留在其原始日期上，但所有未计划的任务将消失。
- **加载时聚焦今天**：在加载时启用“今天”聚焦按钮或不启用。
- **加载时激活筛选器**：选择要在加载时启用的计数器/筛选器按钮。可用选项有：
  - 无筛选器
  - 待办事项
  - 过期
  - 未计划
- **使用相对日期**：如果启用，日期将被替换为相对于今天的描述。
- **使用重复**：显示项目的重复信息或不显示。
- **使用优先级**：显示项目的优先级或不显示。
- **使用标签**：如果启用，将显示项目的标签，还可以为不同的标签设置颜色调色板。如果禁用，将不显示标签。
- **隐藏标签**：指定您不想在此视图中看到的标签。
- **使用文件名**：显示项目的文件名或不显示。
- **使用部分**：显示项目的部分或不显示。
- **日期格式**：指定您最喜欢的日期格式，此视图中可见的日期将按此格式进行格式化。请注意，此处的输入应为有效的 [moment](https://momentjs.com/docs/#/displaying/format/) 格式。
- **排序方式**：指定相同日期的任务项目应如何排序。可用选项有：
  - （我相信这里的所有选项文本都可以解释清楚）
- **使用包含标签**：如果启用，您可以指定不应显示任务的标签。
  - **任务包含筛选器**：不应显示任何这些标签的任务。
  - **文件包含标签**：不应显示没有这些标签的文件的任务。
- **使用排除标签**：如果启用，您可以指定不应显示具有这些标签的任务。
  - **任务排除标签**：不应显示具有任何这些标签的任务。
  - **文件排除标签**：不应显示具有任何这些标签的文件的任务。
- **排除路径**：指定不应计入任务的项目路径。在大多数情况下，您的模板文件夹路径应包含在此处。
- **筛选空任务**：如果启用，将不显示内容为空的任务。如果禁用，将显示内容为空的任务的原始文本。

# 许可证

MIT。
