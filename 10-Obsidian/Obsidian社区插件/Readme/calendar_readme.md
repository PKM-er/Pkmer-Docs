---
uid: 2023120719240565
title: Obsidian 插件：【Readme】Calendar
tags: ['导航工具', '日志类', '日期相关', '效率', 'obsidian插件', 'readme']
description: 为 Obsidian 添加日历功能，可以在日历中跳转和查看自己的是否有待办未完成，也可以跳转到对应的日记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Calendar

> [!Note] 插件名片
> - 插件名称：Calendar
> - 插件作者：Liam Cain
> - 插件说明：为 Obsidian 添加日历功能，可以在日历中跳转和查看自己的是否有待办未完成，也可以跳转到对应的日记。
> - 插件分类：[' 导航工具 ', ' 日志类 ', ' 日期相关 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/liamcain/obsidian-calendar-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?calendar)

## 概述

为 Obsidian 添加日历功能，可以在日历中跳转和查看自己的是否有待办未完成，也可以跳转到对应的日记。

![Calendar](https://cdn.pkmer.cn/covers/calendar.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/liamcain/obsidian-calendar-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[calendar]] 插件的自述翻译

# 黑曜石日历插件

这个插件为 [Obsidian](https://obsidian.md/) 创建了一个简单的日历视图，用于可视化和导航你的日记笔记。

![screenshot-full](https://cdn.pkmer.cn/covers/calendar_1_0.png!pkmer)

使用方法

在设置菜单中启用插件后，您应该会在右侧边栏中看到日历视图出现。

插件会读取您的每日笔记设置，以了解您的日期格式、每日笔记模板位置以及它创建的新每日笔记的位置。

## 特点

- 轻松跳转到任何**每日笔记**。
- 为没有笔记的日期创建新的每日笔记。（这对于需要补充旧笔记或者提前计划未来笔记非常有帮助！这将使用您当前的**每日笔记**模板！）
- 可视化您的写作。每天都包括一个近似您当天写了多少的仪表盘。
- 使用**周记**作为额外的组织层级！它们的使用方式与每日笔记相同，但具有自己的自定义选项。

## 设置

- **开始周的日期 [默认：地区设置]**：配置日历视图以显示星期日或星期一作为一周的第一天。选择“地区设置”将根据您选择的地区设置（`设置 > 关于 > 语言`）将开始日期设置为默认值。
- **每个点的字数 [默认：250]**：从版本 1.3 开始，点的数量反映了您文件的字数。默认情况下，每个点代表 250 个字，您可以将该值更改为任何您想要的值。将其设置为 `0` 以完全禁用字数统计。**注意：**最多只能有 5 个点，以防止视图过大！
- **在创建新笔记之前确认 [默认：开启]**：如果您不喜欢在创建新的每日笔记之前弹出的模态框，可以关闭它。
- **显示周数 [默认：关闭]**：启用此选项，将在日历视图中添加一个新的列，显示 [周数](https://en.wikipedia.org/wiki/Week#Week_numbering)。单击这些单元格将打开您的**周记**。

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

### 主题创建者注意事项

如果你在日历上使用“检查元素”，你会发现 CSS 类名非常难以辨认。例如：`.task.svelte-1lgyrog.svelte-1lgyrog`。这是怎么回事？以 `svelte-` 开头的类名是自动生成的，用于避免日历样式影响应用中的其他元素。也就是说：**忽略它们！**这些 CSS 类名可能会在每个版本中发生变化，你的覆盖样式可能会失效。只需针对类名中可读的部分进行覆盖。所以要覆盖 `task.svelte-1lgyrog.svelte-1lgyrog`，你应该使用 `#calendar-container .task { ... }`。

兼容性

`obsidian-calendar-plugin` 目前需要 Obsidian v0.9.11 或更高版本才能正常工作。

## 安装

您可以通过 Obsidian 中的 Community Plugins 选项卡安装插件。只需搜索 "Calendar" 即可。

常见问题解答

点的含义是什么？

每个实心点代表你每日笔记中的 250 个单词。所以 4 个点意味着你在那一天写了一千个单词！如果你想改变这个阈值，你可以在日历设置中设置不同的“每个点的单词数”。

另一方面，空心点表示该天有未完成的任务。（**注意：**无论剩余任务的数量如何，特定的一天只会有一个空心点）

如何更改日历的样式？

默认情况下，日历应无缝地与您的主题相匹配，但如果您想进一步自定义它，您可以在您的 `obsidian.css` 文件（位于您的保险库内）中配置样式。

在设置中，您可以启用“显示周数”选项，将“周数”列添加到日历中。单击周数即可打开“每周笔记”。

如何在不禁用插件的情况下隐藏日历插件？

就像其他侧边栏视图（例如反向链接、大纲）一样，可以通过右键单击视图图标来关闭日历视图。

![如何关闭](https://cdn.pkmer.cn/covers/calendar_2_0.png!pkmer)

我不小心关闭了日历。如何重新打开它？

如果您关闭了日历小部件（右键单击面板导航并单击关闭），您可以通过命令面板重新打开视图。只需搜索“Calendar: Open view”。

![how-to-reopen](https://cdn.pkmer.cn/covers/calendar_2_1.png!pkmer)

如何让日历从星期一开始？

您可以在设置菜单中切换“从星期一开始”。

如果您希望每周笔记的格式中包含一个单词（例如 "2020 年第 21 周 "），您可以使用 `[]` 括号将单词括起来。这会告诉 [moment](https://momentjs.com/docs/#/displaying/format/) 忽略这些单词。因此，对于上面的示例，您可以将格式设置为 `[Week] ww [of Year] gggg`。

我不喜欢显示周数，但我仍然想使用每周笔记。我还能使用它们吗？

您可以通过在命令面板中搜索“Calendar: Open weekly Note”来打开当前的每周笔记。这将打开当前周的每周笔记。

要配置“格式”、“文件夹”和“模板”，您需要暂时切换到设置中的“显示周数”，但如果您切换回关闭状态，您的设置将保持不变。

## 专业技巧

将整个星期嵌入到每周笔记中

如果您将以下代码片段添加到每周笔记模板中，您可以通过单击一次无缝地查看您的整个星期。

```md

## 一周概览

![[{{星期日:gggg-MM-DD}}]]
![[{{星期一:gggg-MM-DD}}]]
![[{{星期二:gggg-MM-DD}}]]
![[{{星期三:gggg-MM-DD}}]]
![[{{星期四:gggg-MM-DD}}]]
![[{{星期五:gggg-MM-DD}}]]
![[{{星期六:gggg-MM-DD}}]]
```

### 悬停预览

就像 Obsidian 的图形和内部链接一样，日历支持对您的日常笔记进行页面预览。只需在键盘上按住 `Ctrl/Cmd` 键，然后将鼠标悬停在单元格上即可！

日历可以移动（并固定！）到任何位置

尽管日历出现在右侧边栏中，但并不意味着它必须留在那里。随意将其拖动到左侧边栏，或者（如果屏幕空间足够）拖动到主内容区域。如果将其移出边栏，甚至可以固定视图；非常适合更高级的平铺布局！

![如何固定](https://cdn.pkmer.cn/covers/calendar_2_2.png!pkmer)

### 在新的分割窗口中打开每日笔记

如果你在日历中 `Ctrl/Command`- 点击一个笔记，它将在一个新的分割窗口中打开每日笔记。如果你想要连续打开一系列的每日笔记（尤其是如果你启用了**滑动窗格**插件），这将非常有用！

### 在日历上显示打开的笔记

如果你打开了一个来自不同月份的笔记，你可能希望在日历视图中看到它。为了实现这一点，你可以从命令面板中运行命令 `Calendar: Reveal open note`。

### 为周末添加自定义样式

如果您想要将周末与工作日区分开来进行样式设置，您可以将 `var(--color-background-weekend)` 设置为您想要的任何颜色。

![how-to-weekend](https://cdn.pkmer.cn/covers/calendar_2_3.png!pkmer)

每周笔记（已弃用）

每周笔记功能已经拆分为一个全新的插件。将来，这个功能将从日历插件中移除；所以如果你目前正在使用每周笔记，我鼓励你进行切换。不用担心，行为功能上完全相同，并且仍然与日历视图集成！

这个拆分受到了“一件事情做好”的哲学的启发。插件应该是模块化的。有些用户可能想要每周笔记，而对日历视图没有任何用处。反之亦然。

如果你目前在日历插件中使用每周笔记，新的周期性笔记插件将自动迁移你的设置。

### 用法

您可以通过两种方式打开**每周笔记**：在命令面板中搜索“Calendar: open weekly note”或点击周数。可以从日历设置中配置每周笔记。有三个设置项：

- **文件夹：**每周笔记所在的文件夹。它可以与您的日常笔记相同或不同。默认情况下，它们放在您的存储库根目录中。
- **模板：**为每周笔记配置一个模板。每周笔记的模板标签与日常笔记略有不同。请参阅此处支持的 [每周笔记模板标签](#template-tags) 列表。

> 注意：这里的路径不会自动补全，您需要输入完整路径。

- **格式：**每周笔记文件名的日期格式。默认为 `"gggg-[W]ww`。如果在周格式中使用 `DD`，则这将指的是一周的第一天（星期日或星期一，取决于您的设置）。

#### 模板标签

| 标签                                                                                    | 描述                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday` | 因为每周标签是指主要的日期，你可以像这样引用单个日期 `{{sunday:gggg-MM-DD}}` 来自动插入该特定日期的日期。注意，你必须指定日期格式！ |
| `title`                                                                                | 与每日笔记的 `{{title}}` 相同。它将插入笔记的标题                                                                                                                           |
| `date`, `time`                                                                         | 与每日笔记的 `{{date}}` 和 `{{time}}` 相同。它将插入本周第一天的日期和时间。用于创建标题很有用（例如 `# # {{date:gggg [Week] ww}}`）。               |

## 在实际操作中查看

- [Nick Milo提供了一个很好的插件演示](https://www.youtube.com/watch?v=X61wRmfZU8Y&t=1099s)
- [Santi Younger演示了如何使用日历+周期性笔记进行每周回顾](https://www.youtube.com/watch?v=T9y8JABS9_Q)
- [Filipe Donadio使用日历来计划他的一天](https://www.youtube.com/watch?v=hxf3_dXIcqc)

## 表达感谢 🙏

如果你喜欢这个插件并想请我喝杯咖啡，你可以！

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/liamcain)

喜欢我的工作并想看到更多类似的内容？你可以赞助我。

[![GitHub Sponsors](https://img.shields.io/github/sponsors/liamcain?style=social)](https://github.com/sponsors/liamcain)
