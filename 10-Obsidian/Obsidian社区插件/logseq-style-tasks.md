---
uid: 1793625615116000
title: "Obsidian 插件：Logseq Style Tasks"
tags: ["任务管理", "快捷键", "效率工具", "样式与美化", "obsidian插件"]
description: "Keyword tasks for Logseq-style journals: todos: blocks, priority shorthand, keyword cycle groups with their own hotkeys, animated keyword icons and task sounds. A fork of TODOseq. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Logseq Style Tasks

> [!Note] 插件名片
> - 插件名称：Logseq Style Tasks
> - 插件作者：马自立
> - 插件说明：Keyword tasks for Logseq-style journals: todos: blocks, priority shorthand, keyword cycle groups with their own hotkeys, animated keyword icons and task sounds. A fork of TODOseq. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '快捷键', '效率工具', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matsurimw/logseq-style-tasks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?logseq-style-tasks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matsurimw/logseq-style-tasks/master/README.md)



## 概述

Logseq Style Tasks 是一款专为 Obsidian 打造的日志任务管理插件，它继承了 TODOseq 的核心能力，如使用纯文本关键词替代复选框、全局任务列表及自然语言日期解析。在此基础上，它深度适配了 Logseq 风格的工作流，允许用户将任务直接写在每日笔记的 `todos:` 块中，无需手动添加关键词即可识别。插件支持通过键盘快捷键快速切换任务状态，并引入了优先级简写、自定义关键词循环组等功能，让任务管理更贴合高频键盘操作的习惯，同时提供了动画图标和状态变更音效，使日常记录更具互动感。

典型场景包括在每日笔记中快速记录待办事项。例如，输入 `todos:` 后直接列出子项，插件会自动将其识别为待办任务；当你需要标记任务完成时，只需按下预设的热键，状态便会从 `TODO` 变为 `DONE`，并伴随轻微的音效反馈。另一个场景是处理复杂决策，你可以定义 `MAYBE → YES → NO` 的关键词循环组，通过独立的热键快速在三种状态间切换，无需手动修改文本，极大提升了整理思路的效率。

相比原版 TODOseq，该插件的特色在于对“日志化”体验的增强。它支持优先级简写，输入 `todoa` 会自动转换为 `TODO [#A]`，简化了输入负担。此外，它提供了更丰富的视觉反馈，如低饱和度的关键词配色、一次性播放的图标动画，以及根据状态变化方向（上升或下降）合成的提示音。这些细节设计旨在让任务管理过程更流畅、更有趣，且所有功能均可在设置中独立开关，不影响基础使用。

使用前请注意，该插件与 TODOseq 读取相同的关键词和代码块，两者不能同时启用。如果你从 TODOseq 迁移，需先禁用旧插件并复制配置文件，且需重新设置快捷键，因为快捷键是按插件 ID 存储的。此外，该插件目前尚未进入 Obsidian 官方社区插件目录，需通过 GitHub Release 或 BRAT 手动安装。如果你不需要音效、动画或 `todos:` 块等特定功能，直接使用原版 TODOseq 可能更为简洁。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


