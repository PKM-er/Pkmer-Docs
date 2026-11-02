---
uid: 1793625622110000
title: "Obsidian 插件：Task Field Labels"
tags: ["任务管理", "界面优化", "样式与美化", "obsidian插件"]
description: "Show text labels for dates, priority, and recurrence in rendered tasks. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Task Field Labels

> [!Note] 插件名片
> - 插件名称：Task Field Labels
> - 插件作者：theluckystrike
> - 插件说明：Show text labels for dates, priority, and recurrence in rendered tasks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '界面优化', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/task-field-labels)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-field-labels)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/task-field-labels/master/README.md)



## 概述

Task Field Labels 专为搭配 Tasks 插件使用，旨在解决任务字段图标含义晦涩的问题。它通过渲染层将日期、优先级和重复规则等字段的 Emoji 图标替换为直观的英文文本标签，例如将 `📅 2026-10-15` 显示为 `Due: 2026-10-15`。这一转换仅作用于阅读视图的显示效果，不会修改笔记的 Markdown 源代码，确保你在编辑时依然保留原始格式，而在阅读时能清晰理解每个字段的含义。

典型场景包括处理包含多种日期类型的复杂报告，或查看带有重复规则的任务列表。例如，当一条任务同时包含截止日期、开始日期和每周重复规则时，插件会分别显示 `Due`、`Start` 和 `Repeat` 标签，让你无需对照图标说明即可快速掌握任务状态。对于使用 Tasks 查询生成的报告，插件也能在结果中自动应用这些标签，提升信息密度较高的文档可读性。

相比其他仅改变样式的插件，Task Field Labels 的核心特色在于“非侵入性”。它只修改识别到的字段文本节点，完整保留 Tasks 插件原有的交互功能，如点击日期打开编辑器、右键菜单及复选框操作。此外，插件具备智能识别能力，仅处理标准字段结构，任务描述中偶然出现的类似图标（如 `Call 📅 team`）不会被误改。Pro 版本还额外提供自定义标签、显示预设及文件夹规则，允许用户根据需求调整显示风格。

使用前请注意，该插件依赖 Tasks 8.5.0 版本，且主要适配桌面端环境，移动端及 Linux/Windows 桌面端未经充分测试。它仅支持固定的英文标签（免费版）或自定义英文标签（Pro 版），不提供中文本地化支持。如果你需要直接修改笔记源码中的图标，或依赖非标准字段结构，此插件并不适用。此外，Pro 功能需通过 GitHub Sponsors 订阅，且部分高级显示选项在退出登录后会重置为默认状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


