---
uid: 1793625614563000
title: "Obsidian 插件：Klaar"
tags: ["任务管理", "日历与时间", "效率工具", "obsidian插件"]
description: "Tasks and periodic notes for Obsidian: schedule plain Markdown tasks into day, week, month, quarter and year notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Klaar

> [!Note] 插件名片
> - 插件名称：Klaar
> - 插件作者：Fran
> - 插件说明：Tasks and periodic notes for Obsidian: schedule plain Markdown tasks into day, week, month, quarter and year notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '日历与时间', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/i-am-fran/obsidian-klaar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?klaar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/i-am-fran/obsidian-klaar/master/README.md)



## 概述

Klaar 是一款专为 Obsidian 设计的轻量级任务管理工具，旨在将普通 Markdown 复选框转化为结构化的日程任务。它允许你在任何笔记中通过简单的 `>` 符号，将任务分配至日、周、月、季或年维度的日志笔记中。核心机制在于保持数据的纯粹性：任务始终保留为你原始输入的 Markdown 格式，插件仅在打开对应日志时动态展示列表，不修改文件底层结构。这种设计确保了即使未来停止使用插件，你的笔记内容依然完整且可读，仅会留下少量指向时间周期的链接。

典型的使用场景包括项目规划与日常回顾。例如，你可以在会议记录中写下“发送季度报告”，输入 `>` 并选择“第 43 周”，该任务便会自动出现在周日志中。当你打开当天的笔记时，Klaar 会聚合展示今日到期、本周未结以及所有逾期任务，并支持在日志中直接勾选完成，状态会同步回原笔记。此外，侧边栏的日历视图提供了直观的月度概览，你可以通过拖拽任务卡片到特定日期来快速调整计划，圆环和勾选标记则清晰指示了每日任务的完成进度。

相比其他任务插件，Klaar 的特色在于其极致的“原生感”与对 Obsidian Bases 的深度集成。它不发明新的查询语言，而是直接利用 Bases 提供表格和看板视图，让你能像管理数据库一样管理任务，支持按状态、优先级或自定义标签（如 `#p1`）进行多维筛选。插件还扩展了标准复选框语义，支持“进行中”、“下一步”、“稍后”等状态标记，并允许用户自定义标签颜色。这种设计让 Klaar 感觉像是 Obsidian 的一部分，而非嵌入其中的独立应用，极大地降低了学习成本。

使用前需注意，Klaar 依赖于你建立规范的日志笔记结构（如 `Daily/2026-W43.md`），若你的笔记库缺乏这种层级结构，配置初期可能需要额外整理。它不适合需要复杂依赖关系、甘特图或跨库同步的重度项目管理需求，因为其核心优势在于个人化、轻量级的日程梳理。此外，虽然插件免费，但部分高级主题适配可能仍在完善中，若你依赖非默认主题，建议先测试显示效果。总体而言，它适合追求简洁、希望任务与笔记无缝融合的 Obsidian 用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


