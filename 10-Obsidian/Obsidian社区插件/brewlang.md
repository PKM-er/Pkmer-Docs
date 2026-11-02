---
uid: 1793625608708000
title: "Obsidian 插件：Brewlang"
tags: ["样式与美化", "编程与脚本", "界面优化", "obsidian插件"]
description: "Show brew code blocks as coffee recipe cards, with the problems Brewlang finds in them. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Brewlang

> [!Note] 插件名片
> - 插件名称：Brewlang
> - 插件作者：Brewlang
> - 插件说明：Show brew code blocks as coffee recipe cards, with the problems Brewlang finds in them. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编程与脚本', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/brewlang/obsidian-brewlang)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?brewlang)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/brewlang/obsidian-brewlang/master/README.md)



## 概述

Brewlang 将笔记中的 Brewlang 代码块渲染为美观的咖啡配方卡片，并自动检测配方中的逻辑错误。它把枯燥的代码文本转化为包含标题、规格、比例、制作步骤和目标时间的可视化卡片，让阅读体验更直观。同时，插件会分析配方内容，指出如注水量冲突等潜在问题，并在卡片下方列出具体行号和修改建议，帮助确保配方的准确性。

典型场景适用于记录日常手冲咖啡实验。例如，你可以用 `@V60` 标记器具，输入粉量、水温及分段注水时间。在阅读视图或实时预览中，这段代码会立即变成一张清晰的卡片，展示从闷蒸到总注水的完整流程。若你在编辑时发现某一步注水总量与前一步冲突，插件会即时高亮显示问题，无需手动计算即可发现错误。

相比普通代码块插件，Brewlang 的核心特色在于其“智能校验”与“编辑辅助”。在编辑模式下，它提供语法高亮、自动补全（如器具、动作、研磨度）以及悬停提示错误详情。此外，卡片样式完全跟随 Obsidian 主题，支持自定义主题、强调色、尺寸及单位（克/盎司、摄氏度/华氏度），且仅改变显示效果，不修改原始代码，方便通过 CSS 变量进一步定制外观。

需要注意的是，Brewlang 目前处于 v0 阶段，语法规范可能随版本更新而变化，建议关注官方文档以获取最新格式说明。该插件专为使用 Brewlang 语法记录咖啡配方的用户设计，如果你不使用该特定语法，或仅需要简单的文本格式化而不需要配方逻辑校验，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


