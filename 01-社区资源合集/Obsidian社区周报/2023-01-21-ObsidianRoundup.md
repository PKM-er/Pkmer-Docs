---
uid: 20230329102645
title: 🌠 更多 LLM 集成和烹饪、锻炼等的样本笔记
description: 
author: Bon
type: other
draft: false
editable: false
modified: 20230401230258
aliases:
---

[🌠 More LLM Integrations & Sample Notes for Cooking, Workouts, etc.](https://www.eleanorkonik.com/2023-01-21/)

# 🌠 更多 LLM 集成和烹饪、锻炼等的样本笔记

Obsidian 在 2022 的 Product Hunt 的生产力类别金猫奖中被提名；

# 社区消息

- Obsidian 在 2022 的 Product Hunt 的生产力类别 [金猫奖](https://www.producthunt.com/golden-kitty-awards/productivity) 中被提名；

## 新上架的插件

这些插件通过了代码审查，现在可以在插件市场可以下载了；对于全部的通过列表，请查看 [插件统计页面](https://obsidian-plugin-stats.vercel.app/new)；

- 由 `@wenlzhang` 开发的 [任务标记](https://github.com/wenlzhang/obsidian-task-marker) 通过快捷键和上下文菜单更容易改变任务状态，例如完成、取消或标记任务，也可以在选定的任务状态中循环。
- 由 `@ulisesantana` 开发的 [Pending notes](https://github.com/ulisesantana/obsidian-pending-notes) 使你更容易搜索你的库中没有处理的链接（我想你也可以用 Dataview 做这个，但这个插件可以更轻一点）。
- 由 `@joleaf` 开发的 [电子邮件代码块](https://github.com/joleaf/obsidian-email-block-plugin) 提供了电子邮件代码块的渲染能力，而且提供了一些自定义字符串的额外功能。
- 由 `@lizard-heart` 开发的 [Order List](https://github.com/lizard-heart/obsidian-order-list-plugin) 让用户在行末按数字排列列表。
- 由 `@jmilldotdev` 开发的 [Obsidian GPT](https://github.com/jmilldotdev/obsidian-gpt) 通过 OpenAI API 在 Obsidian 编辑器中实现 GPT 使用。

## 还未审核的插件 （截止到上周五）

也不是所有的插件都会立马上架插件市场，因为它们需要先经过代码审核；你可以使用 [Beta Reviewer's Auto-update Tool](https://github.com/TfTHacker/obsidian42-brat) 来手动下载那些还没上架的插件；当然这也意味着他们还不够稳定和安全，因为它们还没被代码审核过；**（译注：有些时候存在重复的条目的原因是因为对应的作者因为某些原因重开了 PR，导致会重复出现在更新内容中；）**

- 由 `@smx0` 开发的 [文本包装器](https://github.com/smx0/obs-text-wrapper) 使其更容易通过快捷键或者命令列表快速添加成对的 HTML 标签。
- 由 `@joleaf` 开发的 [DMN 评估插件](https://github.com/joleaf/obsidian-dmn-eval-plugin) 实现评估/执行 DMN。
- 由 `@OwenKruse` 开发的 [Chat-GPT Assistant](https://github.com/owenkruse/gpt-helper) 将 Chat-GPT 文本补全功能整合到黑曜石中。
- 由 `@kxxt` 开发的 [Advanced Paste](https://github.com/kxxt/obsidian-advanced-paste) 为 Obsidian 提供了几个高级粘贴命令。
- 由 `@ohm-en` 开发的 [Obsidian Plugin Manager](https://github.com/ohm-en/obsidian-plugin-manager) 允许懒惰加载插件，使 Obsidian 启动更快，并通过快捷键或者命令列表来切换插件。
- 由 `@ycnmhd` 开发的 [Graph Presets](https://github.com/ycnmhd/obsidian-graph-presets) 带来了基于 markdown 的图表控制功能，你可以在这些图表之间切换。
- 由 `@LordGrimmauld` 开发的 [ActivityWatch](https://github.com/LordGrimmauld/aw-watcher-obsidian) 增加了 ActivityWatch 和 Obsidian 之间的兼容性。
- 由 `@AstralTomate` 开发的 [Obsidian Graph Search Hotkey](https://github.com/AstralTomate/obsidian-graph-search-hotkey) 允许用户设置一个热键来将焦点切换到图谱视图中的搜索栏。
- 由 `@ImaginaryProgramming` 开发的 [Vault Transfer](https://github.com/ImaginaryProgramming/obsidian-vault-transfer) 允许你复制一个笔记并将其粘贴到另一个 vault 。
- 由 `@brianpetro` 开发的 [Smart Prompts](https://github.com/brianpetro/obsidian-smart-prompts) 的（ChatGPT）提示模板工具，旨在让用户可以更方便地与 OpenAI 的 ChatGPT 等语言界面互动。
- 由 `@BambusControl` 开发的 [Unicode Search](https://github.com/BambusControl/obsidian-unicode-search) ，使搜索和插入 Unicode 字符到你的编辑器更容易。
- 由 `@AwesomeDog` 开发的 [Awesome Image](https://github.com/AwesomeDog/obsidian-awesome-image) 改进了图像管理，特别是本地保存和自动处理。

## 已上架插件的更新

如果你想了解本周的全部插件更新列表，请查看 Ganessh Kumar 的 [插件更新索引](https://obsidian-plugin-stats.vercel.app/updates)；

- [AVA](https://github.com/louis030195/obsidian-ava) 的开发者要求所有用户更新到最新的版本，因为此前的一个插件错误导致他们的成本上升。最新版本带有更快的启动时间，改进了对链接的控制，显示最常用的改写，以及一个新的教程。这个插件可以让用户用 ChatGPT 快速格式化你的笔记；我发现它很方便，可以把我的语音笔记的转译文本变得更连贯。
- [editor-shortcuts](https://github.com/timhor/obsidian-editor-shortcuts/releases) 现在包括 Toggle Case 插件的所有功能。
- [sentence-navigator](https://github.com/timhor/obsidian-sentence-navigator/releases) 增加了允许用户选择句子开始和结束的功能。它还改进了与 Outliner 的兼容性。
- [Omnisearch 1.10](https://github.com/scambier/obsidian-omnisearch/releases/tag/1.10.0) 增加了对 Canvas 的支持，以及 Text Extractor。
- [CardBoard v0.7.0](https://github.com/roovo/obsidian-card-board/releases/tag/0.7.0) 修复了一个讨厌的罕见错误，现在支持所有有效的 CommonMark 无序列表标记 `(-, +, *)`。
- [Front Matter Title](https://github.com/Snezhig/obsidian-front-matter-title/tree/2.9.0) 2.9.0 改进了别名处理的效果。
- [Auto Link Title](https://github.com/zolrath/obsidian-auto-link-title/releases/tag/1.3.0) 1.3.0 支持画布，能够将网站列入黑名单，为正常粘贴提供快捷键，并进行了一些修正。
- [Another Quick Switcher 8.4.0](https://github.com/tadashi-aikawa/obsidian-another-quick-switcher/releases/tag/8.4.0) 增加了在默认应用中打开的选项。
- [Excalidraw 1.8.10](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/1.8.10) 提升了一些体验。这里有一个 [视频版](https://www.youtube.com/watch?v=wTtaXmRJ7wg) 的发布说明。

## 测试插件

注意：这些插件尚未提交代码审查，主要用于测试目的。

- [Canvas MOC](https://github.com/Feel-ix-343/obsidian-canvas-moc) 可以更容易地将内容地图和复杂的索引转为 Canvas 文件列。

## 对于开发者

- 这里有 [一个使测试库更容易制作的插件](https://github.com/pedersen/obsidian-testing-vault)，它的命令可以让你制作（和销毁）一堆随机的笔记。
- 如果有人想要做一个 Obsidian 插件，你可以看一下这里：[让用户指定文件夹来提取文本](https://github.com/scambier/obsidian-text-extractor/issues/3)。

# 外观

- 由 `@clbn` 设计的 [Dracula Gemini](https://github.com/clbn/dracula-gemini) 是 Dracula 暗色类型主题。
- 由 `@lnbgc` 设计的 [Jotter](https://github.com/lnbgc/obsidian-jotter) 是一个新的无干扰主题。
- 由 `@tazpellegrini` 设计的 [Abyssal](https://github.com/tazpellegrini/abyssalobsidian) 是一个新的主题，侧重于可访问性和排版。
- [Cyber Glow v7.6.3](https://github.com/ArtexJay/Obsidian-CyberGlow) 有很多改进，现在支持更多的插件，以及堆叠式标签。
- [AnuPpuccin v1.2.8](https://github.com/AnubisNekhet/AnuPpuccin/releases/tag/v1.2.8) 改进了类似 Notion 的 Kanbans，Notion 式的颜色方案，还提供了其他一些改进。
- [Encore](https://github.com/Maldonacho/obsidian-encore-theme) 进行了一次大规模的重写，实现了一系列可通过样式设置访问的新的颜色方案，以及对 RGB 主题的支持。

# 辅助脚本

- 这里有一个模板代码，它将拉入 [YouTube 视频的元数据](https://discord.com/channels/686053708261228577/875720842443649045/1063963964700102696)。
- 这是一个 DataviewJS 片段，用于 [在时间表中显示当前文件中的 todo 项目](https://www.reddit.com/r/ObsidianMD/comments/10ded5s/ive_made_a_quick_snippet_in_dataviewjs_to_show/)，类似于 Day Planner 插件。

# 指南

- 这是一份关于如何在桌面角色扮演中使用 [高级表格插件](https://www.patreon.com/posts/obsidian-working-77265860?utm_content=join_link) 的好教程。
- 这里有一个在 Obsidian 中使用 zettelkasten 系统的 [cross-pollinate ideas](https://twitter.com/kinginmotion/status/1614971744334258179) 的方法。

# 讨论

- Nicole van der Hoeven 接受了关于 [ Obsidian 和创作者的生产力](https://www.youtube.com/watch?v=K7cbhuJ3Beo) 的采访。
- 下面是一些人如何使用 [Obsidian 进行烹饪](https://www.reddit.com/r/ObsidianMD/comments/10befcz/anyone_ever_use_obsidian_for_cooking/)；更具体地说，一些人使用 [看板进行膳食计划](https://twitter.com/MartineGuernsey/status/1616479269453979648)。

# 案例展示

- 这里有一个关于 [8 种不同的 Obsidian 使用方法](https://twitter.com/Siv_uk/status/1615998071560704003) 的很好的概述，还有一些例子。
- 这里有一个很好的方法来构建专属于你的 [ Obsidian 中的锻炼表](https://discord.com/channels/686053708261228577/744933215063638183/1062474328131764315) ——你需要在 Discord 中滚动一些信息来找到也许适合你的 [使其看起来很好的片段](https://discord.com/channels/686053708261228577/744933215063638183/1062464434280341616)。Reddit 也有一个关于如何使用 [Obsidian 作为健身房日志](https://www.reddit.com/r/ObsidianMD/comments/10fk6dp/obsidian_as_a_gym_log/) 的精彩展示。
- 这里有一个 Markdown 格式的 [George Carlin 资源的全面收集](https://discord.com/channels/686053708261228577/744933215063638183/1062006070781952070)，还有一张在 Obsidian 中显示的可爱截图。
- 同样地，这里有一些关于一些 [models of therapy](https://discord.com/channels/686053708261228577/744933215063638183/1062261596681932910) 的介绍。
- 这是一个可爱的 Discord 截图，说明如何配置使得 [ Obsidian 主题与 Discord、Spotify 和 neovim 等不同的应用程序相协调](https://discord.com/channels/686053708261228577/744933215063638183/1062480922932428890)，以便所有的应用程序在视觉上保持一致。
- 这是一个非常整洁的 [生态学家的说明](https://discord.com/channels/686053708261228577/744933215063638183/1062909677710618734)，其从事森林恢复和气候复原的工作，随后是类似领域的人们的精彩讨论，以及他们如何使用 Obsidian 。
- 这里有一个拥抱 [Atom Folder](https://discord.com/channels/686053708261228577/710585052769157141/1065995831171371028) 概念的巧妙演示 。
- 以下是 Canvas 如何帮助 [分析和参与类似《道德经》的东西](https://twitter.com/ungatedcreative/status/1614653925239705600?s=20&t=w4QOO4E929cxrZmeR_xq-A)。
- 这里有一个围绕 [文化研究库](https://www.reddit.com/r/ObsidianMD/comments/10fjyo6/my_masters_degree_started_in_october_and_i_just/) 的很好讨论 ，讨论的重点是你在攻读硕士学位时且在 Obsidian 中拥有了超过一万个链接时，如何重新审视和重新发现有用的笔记。
- 这里有一个工具可以帮助 [从你的终端打开、创建和更新 Obsidian 笔记](https://github.com/Yakitrak/obsidian-cli)。
