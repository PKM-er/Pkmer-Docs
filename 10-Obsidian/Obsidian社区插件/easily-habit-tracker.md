---
uid: 20250811195425
title: Obsidian 插件：Easily Habit Tracker 无代码的高自定义习惯追踪插件
tags: [' 习惯记录 ', ' 效率工具 ', 'obsidian 插件 ']
description: 告别繁琐的JS代码编辑，在周期日记里轻松记录并追踪个人习惯
author: YodaLiu
type: auto
draft: false
editable: false
modified: 20250812212133
---

# Obsidian 插件：Easily Habit Tracker 无代码的高自定义习惯追踪插件

## 概述

一款能在周期笔记中轻松记录、追踪并以多种可视化视图（如日历、列表等）复盘个人习惯的 Obsidian 插件

> [!Note] 插件名片
> - 插件名称：Easily Habit Tracker
> - 插件作者：YodaLiu
> - 插件说明：告别繁琐的 JS 代码编辑，在周期日记里轻松记录并追踪个人习惯
> - 插件分类：[' 习惯记录 ', ' 效率工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/yodaliu0414/obsidian-easily-habit-tracker)
> - 国内下载地址：[下载安装](暂无)
> - 自述文件：[Readme](https://github.com/yodaliu0414/obsidian-easily-habit-tracker/blob/main/README.md)

> [!Warning]
> 注意：目前插件还未被官方插件商城收录，还在审核中，提前尝鲜请去 github 自行下载试用。

## 功能特点

- **💡 零代码，纯交互操作**：本插件最大的优势在于其易用性。用户**无需了解任何代码**，所有习惯的设置、插入和可视化图表的生成，都可通过直观的弹窗设置界面完成。
- **📝 纯文本存储，无缝集成**：所有习惯数据都以纯文本形式保存，用户可轻松利用 **Templater** 等插件来自动化每日习惯的插入，或在周报/月报中自动生成复盘视图。
- **⚙️ 高度可定制化**：
	- **图标与颜色**：您可以在每个习惯的专属笔记中，通过页面属性定义其在图表中的颜色和完成/未完成图标（已完成），以及其缩写或 emoji（开发中）
	- **视图交互**：在可视化页面中，可以随时点击按钮切换图标形状（圆形/方形）或调整布局，所有更改都会自动保存到代码块中。
	- **全局设置**：插件设置中提供了丰富的全局默认选项，满足您的个性化需求。
- **🎨 强大的可视化视图**：通过简单的弹窗选择，即可自动抓取习惯数据，并生成精美的可视化图表，目前支持：
	- **月视图**：以紧凑的日历形式展示每个习惯的月度完成情况。
	    ![7ngzc](https://cdn.pkmer.cn/images/202508122125799.png!pkmer)
	- **年视图**：以类似 Heatmap 的形式，展示整年的习惯坚持情况。
	    ![shn31](https://cdn.pkmer.cn/images/202508122125801.png!pkmer)
	- **周/月列表视图**：以清晰的列表形式，逐行对比多个习惯的完成度。
		![vd99q](https://cdn.pkmer.cn/images/202508122125802.png!pkmer)	- **更多视图**：开发中

## 使用

使用本插件主要分为三步：**设置习惯 → 每日记录 → 可视化复盘**。

1. **基本设置**：
    - 在插件设置中，指定一个文件夹作为您的“习惯库”（例如 `Habits/`）。
	   ![nsnky](https://cdn.pkmer.cn/images/202508122125803.png!pkmer)
    - 在“习惯库”中，为每一个您想追踪的习惯创建一个独立的笔记（例如 `阅读.md`，`锻炼.md`）。
     ![dneoh](https://cdn.pkmer.cn/images/202508122125804.png!pkmer)

    - （可选）在每个习惯笔记的开头，通过属性添加自定义的颜色或图表图标。
      ![6lsjq](https://cdn.pkmer.cn/images/202508122125805.png!pkmer)
2. **每日记录**：
    - 在 Daily Notes（或其他周期性笔记）中，找到记录习惯的专属标题（需在插件设置中定义，如 `我的习惯`）。

       ![dnadd](https://cdn.pkmer.cn/images/202508122125806.png!pkmer)

    - 在 Daily Notes 该标题下，输入 `[[习惯笔记的链接]]`，例如 `[[阅读]]`。并在同一行，通过右键菜单或命令面板（`Ctrl/Cmd + P`）选择并插入一个习惯记录器（如“插入习惯：计数”）。

       ![foek9](https://cdn.pkmer.cn/images/202508122125807.png!pkmer)

    - 根据您的选择，将自动弹出下列四种不同类型的弹窗，填写并点击“Insert" 即可完成编辑

       ![viii6](https://cdn.pkmer.cn/images/202508122125808.png!pkmer)
      ![qsq97](https://cdn.pkmer.cn/images/202508122125809.png!pkmer)
      ![r0zp2](https://cdn.pkmer.cn/images/202508122125810.png!pkmer)      ![ch94w](https://cdn.pkmer.cn/images/202508122125811.png!pkmer)

    - 您的记录会像这样：`[[阅读]]: {{number:15,50,页,T:id123...}}`，它会在预览模式下渲染成一个可交互的输入框。(在 `[[习惯]]` 和 `{{}}` 之间，可任意插入您喜欢的符号，或者什么都不插入)

        ![mrchj](https://cdn.pkmer.cn/images/202508122125812.png!pkmer)
3. **可视化复盘**：
    - 在任何您想回顾习惯的页面（如周记、月记或专门的复盘页面），通过 Ctrl+P 运行“Insert Habit Tracker Block”，或点击右侧菜单栏图标。
    - 在弹出的设置窗口中，选择您想看的数据来源（如“DailyNotes”,"WeeklyNotes"、“MonthlyNotes"(后两者待开发））、时间范围（如 Week "2025 W31", “Month 2025-07”, "Year 2025"）和视图样式（如“Calendar Tight”, "List Row"）,选择初始的形状”Circle"/"Square", 每行最多显示的习惯数量等。
        ![2kxuy](https://cdn.pkmer.cn/images/202508122125813.png!pkmer)
    - 插件会自动插入一个代码块，并将其渲染成一个精美的、可交互的习惯日历图表。

## 彩蛋

本插件除了用于习惯记录外，还有一个有趣的小用法：当您在插入习惯记录器（如 `Checks` 、 `Rating`、`Number`、 `Progress`）时，**关闭 "Warn if not found" 选项**，就可以在不关联任何 `[[习惯笔记]]` 的情况下，单独插入一个可交互的 Emoji 或图标。这可以作为一个简易的、无需代码的行内交互元素生成器。

## 致谢

这是作者开发的第一个 Obsidian 插件，在功能和代码上可能还有很多考虑不周的地方。如果您在使用过程中遇到任何问题，或有任何好的想法与建议，都非常欢迎您到 [GitHub Issues](https://github.com/yodaliu0414/obsidian-easily-habit-tracker/issues) 中提出。作者会尽力完善这个插件，非常感谢大家的帮助与支持！


