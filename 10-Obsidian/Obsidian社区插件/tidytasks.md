---
uid: 1793625623119000
title: "Obsidian 插件：TidyTasks"
tags: ["任务管理", "编辑工具", "效率工具", "obsidian插件"]
description: "Automatically move completed tasks to the bottom of each Markdown task list, keeping subtasks attached and surrounding text in place. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TidyTasks

> [!Note] 插件名片
> - 插件名称：TidyTasks
> - 插件作者：Finn-Christopher Krause
> - 插件说明：Automatically move completed tasks to the bottom of each Markdown task list, keeping subtasks attached and surrounding text in place. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/finnxwz/tidytasks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tidytasks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/finnxwz/tidytasks/master/README.md)



## 概述

TidyTasks 旨在解决 Markdown 任务列表中已完成事项杂乱无章的问题，其核心功能是自动将已勾选的任务移动至列表底部。插件遵循“未开始任务在前、进行中任务居中、已完成任务在后”的逻辑进行排序，且在已完成组内，最近完成的任务会排在最前。这种机制确保了子任务始终跟随父任务，同时保持列表周围的普通文本位置不变，让笔记结构在动态更新中依然保持整洁有序。

想象一下你正在维护一份项目进度笔记，随着工作推进，不断有任务被勾选。如果没有 TidyTasks，列表会变得冗长且难以快速定位待办事项。安装后，当你勾选一个任务时，它会自动滑落到列表末尾，而新的待办事项始终醒目地停留在顶部。另一个场景是回顾旧笔记，即使列表在安装插件前已存在，只要再次修改任务状态，列表就会立即重新整理，无需手动拖拽。

相比其他仅支持手动排序或简单重排的插件，TidyTasks 的最大特色在于其“无感”的自动化体验。它引入了可配置的“输入延迟”机制，默认等待 500 毫秒无编辑操作后再执行排序，这有效避免了在快速连续勾选多个任务时出现的排序冲突或卡顿。此外，插件提供了精细化的控制选项，允许用户全局关闭自动排序，或针对特定笔记单独禁用，甚至可以通过右键菜单将某些笔记永久排除在自动排序之外，兼顾了灵活性与稳定性。

需要注意的是，TidyTasks 专注于任务列表内部的顺序调整，它不会改变笔记的整体结构或移动非任务文本。如果你需要的是跨笔记的任务汇总、复杂的看板视图，或者对列表周围大段文字进行重新排版，这款插件可能无法满足需求。此外，由于它依赖任务状态的变更来触发排序，对于完全静态、不再更新的历史归档笔记，除非手动触发一次状态切换，否则不会自动整理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


