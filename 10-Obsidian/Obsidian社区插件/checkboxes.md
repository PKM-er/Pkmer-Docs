---
uid: 1793625609321001
title: "Obsidian 插件：Checkboxes"
tags: ["任务管理", "界面优化", "效率工具", "obsidian插件"]
description: "Checklists that aren't tasks: tick \"- ( )\" items with a progress bar and heading counts, while task plugins ignore them. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Checkboxes

> [!Note] 插件名片
> - 插件名称：Checkboxes
> - 插件作者：Agata Dalach
> - 插件说明：Checklists that aren't tasks: tick "- ( )" items with a progress bar and heading counts, while task plugins ignore them. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/adalach/obsidian-checkboxes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?checkboxes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/adalach/obsidian-checkboxes/master/README.md)



## 概述

Checkboxes 插件旨在解决 Obsidian 中非任务类清单被任务管理工具误读的问题。它引入了一种新的复选框语法 `- ( )`，与标准的任务复选框 `- [ ]` 区分开来。这种新式的清单项支持点击勾选、显示完成日期以及进度统计，但完全独立于任务系统。这意味着你的购物清单、待办事项或活动筹备列表可以拥有清晰的视觉反馈，而不会干扰你现有的任务查询、仪表盘或自动化流程，让任务视图保持纯净，只展示真正需要跟踪的任务。

想象一下你在准备周末聚会，笔记中既包含“预订蛋糕”这样的带日期的任务，也包含“购买燕麦奶”等购物清单。使用 Checkboxes 后，你可以将购物项标记为 `- ( )`，它们会在笔记内显示进度条和标题计数，但不会出现在 Tasks 插件的查询结果或 Dataview 的任务列表中。另一个场景是长期项目跟踪，你可以用 `- ( )` 记录已完成的小步骤，通过进度条直观看到整体完成度，同时确保这些步骤不会污染你的每日任务看板。

相比其他任务插件，Checkboxes 的核心特色在于其“隔离性”和“轻量级”。它不管理截止日期、优先级或重复规则，因此不会增加任务管理的复杂度。它提供了独特的进度条代码块，可以固定在笔记顶部，实时显示当前章节或指定标题下的完成比例，并支持“隐藏已勾选”功能以聚焦剩余工作。此外，它兼容所有主题，复选框样式跟随你的主题设置，且在未安装插件的设备上，这些行仍作为纯文本可读，无需担心数据丢失或格式错乱。

需要注意的是，Checkboxes 仅适用于非任务类的清单管理，不适合需要复杂任务调度、依赖关系或跨笔记任务聚合的场景。如果你依赖 Tasks 或 Dataview 进行严格的项目管理，请继续将那些事项保留为 `- [ ]` 任务。此外，在嵌入预览或悬停预览中点击复选框时，如果同一标题下存在文本完全相同的多个项目，插件会提示你直接在笔记中操作以避免歧义。建议将“切换清单项”命令绑定快捷键（如 Cmd/Ctrl+Shift+L），以便快速在任务和普通清单项之间转换。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


