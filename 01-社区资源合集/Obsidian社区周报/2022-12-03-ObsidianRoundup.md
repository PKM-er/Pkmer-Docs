---
uid: 20230329102645
title: Obsidian 周报
description: 
tags: []
author: 
type: other
draft: false
editable: false
modified: 20230401230259
aliases: []
---

# Obsidian 周报

以下是由 `@oldtowneast` 维护并在新的 [pkm.social](https://pkm.social/) mastodon 实例上分享的 [360 多个与 Obsidian 有关的书签](https://pkm.social/@oldtowneast/109431696194437578) 列表。

## Obsidian 更新

距离上次 Obsidian 的更新已经有一段时间了，因此有一些人担心官方已经停止更新了，Obsidian 已经死掉了之类的。虽然但是，我想在这里提醒一句——移动端和实时预览上线之前，更新之间也有一两个月的间隔。（译注：本文翻译的时候 Obsidian 已经开始内测 1.1.0 了，带来了 Canvas 和元数据增强）

如果你对正在进行的工作感到好奇，你可以查看 [路线图](https://trello.com/b/Psqfqp7I/obsidian-roadmap) - 看起来 Frontmatter 和 Canvas 插件是下一个值得期待的大事情。

# 插件新闻

这些插件通过了代码审查，现在可以在插件市场可以下载了。对于全部的通过列表，请查看 [插件统计页面](https://obsidian-plugin-stats.vercel.app/new)。

- `@scambier` 开发的 [Omnisearch](https://github.com/scambier/obsidian-omnisearch) 是一个使用了智能权重算法来展示更多相关结果的插件。
- `@valteriomon` 开发的 [Rapid Notes](https://github.com/valteriomon/obsidian-rapid-notes) 可以让用户快速输入内容且根据自定义的前缀来生成文件到指定的文件夹中。

## 还未审核的插件（截止到上周五）

**也不是所有的插件都会立马上架插件市场，因为它们需要先经过代码审核。你可以使用 [Beta Reviewer's Auto-update Tool](https://github.com/TfTHacker/obsidian42-brat) 来手动下载那些还没上架的插件。当然这也意味着他们还不够稳定和安全，因为它们还没被代码审核过。**（译注：有些时候存在重复的条目的原因是因为对应的作者因为某些原因重开了 PR，导致会重复出现在更新内容中。）

- 由 `@berniexie` 开发的 [D2](https://github.com/terrastruct/d2-obsidian) 增加了 D2 图表脚本语言的渲染功能，支持更多类型的图表，类似 Mermaid。
- 由 `@tgrosinger` 开发的 [Crumbs](https://github.com/tgrosinger/crumbs-obsidian) 是 [Breadcrumbs](https://github.com/SkepticMystic/breadcrumbs) 的一个新替代品，似乎更注重 Dendron （译注：这是一款软件） 风格的点状层次。
- 由 `@juliuszfedyk` 开发的 [Copy Note URL](https://github.com/juliuszfedyk/obsidian-copy-note-url-plugin) 让用户根据预定义的 URL 域名和文件扩展名来复制一个笔记的 URL ，一般适用于你发布以后快速复制链接，而不需要去到网站后复制链接。
- 由 `@zk4` 开发的 [Evergreen](https://github.com/zk4/obsidian-evergreen) 与 "no dupe leaves " 插件类似，它用于 Stack tabs 模式下，打开文件时，如果该文件已经打开过，会将自动将焦点切换到打开的面板，而不是再打开一次。
- 由 `@nevernotmove` 开发的 [Chord Lyrics](https://github.com/nevernotmove/obsidian-chordlyrics) 允许你渲染歌词时在其上边显示和弦名称。
- 由 `@Boninall` 开发的 [Surfing](https://github.com/Quorafind/Obsidian-Surfing) 是一款让你可以在 Obsidian 的内部浏览网页的插件，支持了拷贝网页中选中后高亮链接的功能等。
- 由 `@conneroisu` 开发的 [Text Dataset Aid Plugin](https://github.com/conneroisu/Text-Dataset-Aid-Plugin) 是一款用于 fine tune 属于你的文本生成模型的工具插件。
- 由 `@ixth` 开发的 [Obsidian Stylist](https://github.com/ixth/obsidian-stylist) 可以让你在 markdown 块更方便地添加类和样式。

## 已上架插件的更新

如果你想了解本周的全部插件更新列表，请查看 Ganessh Kumar 的 [插件更新索引](https://obsidian-plugin-stats.vercel.app/updates) 。

- [Tasks](https://obsidian-tasks-group.github.io/obsidian-tasks/queries/explaining-queries/) 现在能实时解释你的 TASKS Query 的意思。
- [CardBoard](https://obsidian.md/plugins?id=card-board) 现在支持 RTL 编辑器，同时提供了一些和标签相关的改进。
- [Commander](https://github.com/phibr0/obsidian-commander) 现在支持了启动命令，用于在启动时运行命令，同时提供了颜色调整，你可以给命令 icon 修改颜色了。
- [RPG Manager](https://github.com/carlonicora/obsidian-rpg-manager/releases/tag/3.4.0) v3.4 改变了 Elements 的识别方式，允许通过简单的拖放来重新组织场景/行为/会话/冒险。它还将所有的双链关系保存在笔记的底部，这有助于在 Obsidian 的 Graph 视图中查看联系。
- [Database folder](https://github.com/RafaelGB/obsidian-db-folder/releases/tag/3.0.0) 3.0.0 更新了设计，可配置的快捷命令、更进一步的展示选项，以及移动端的翻页功能。

# 工具

- 以下是如何使用 [ Callouts 使得它呈现出 infoboxes 或 capacity-like sidebars 一样的展示效果](https://gist.github.com/AnubisNekhet/33ceb77eb450d78b2833e77cdb8e3394)

# 指南

- 这里是一个新的 [使用 Obsidian 玩角色扮演游戏的初学者指南](https://www.patreon.com/posts/75382566?pr=true)。
- 这里是一个关于 [当输入`“` 的时候，可以获得`"` 的教程](https://pkm.social/@ellane/109422797766690784)，在新的 pkm.social mastodon 实例中分享。
- 这是一个附带了一些有用的图标的 [每周回顾模板](https://miscellaneplans.gumroad.com/l/plusminusnext)，仿照 [Plus Minus Next](https://nesslabs.com/plus-minus-next) 的方法，为一整年的工作做了设置。它除了内容非常详实以外，界面看起来也很可爱。

# 讨论

- 这是关于 [你应该备份你的笔记](https://www.reddit.com/r/ObsidianMD/comments/z57zo1/if_my_computer_dies_are_all_the_obsidian_notes/) 的讨论。
- Reddit 举办了一场关于 [保存书中的名言并组织以不同的方法来组织它们的优秀讨论](https://www.reddit.com/r/ObsidianMD/comments/z5u1hc/how_do_you_save_quotes_from_book_as_individual/)。
- 许多人发现 [每天写日记很有价值](https://www.reddit.com/r/ObsidianMD/comments/z6xsz9/is_a_daily_journal_in_obsidian_worth_it/)。

## 展示

- Danny Hatcher 主持了 `@pseudometa` 在 youtube 上的 [Obsidian 库的展示](https://www.youtube.com/watch?v=DzJOJxDgQKc)，具体是作为学术用途，其包括了 Recent Files、Dataview、Breadcrumbs 以及大纲面板插件。
- Juanchi Parra 在 Discord 中展示了 [Full Calendar 插件的 List 视图模式的用途](https://discord.com/channels/686053708261228577/744933215063638183/1047285011558170754)。
- Discord 中的 `@Thomsen` 也分享了一个非常好的 [电影项目 Dashboard](https://discord.com/channels/686053708261228577/805952223124520961/1047953933118734446)。
- 我也非常喜欢这个使用 Dataview & Buttons 创建 [科学家索引 的例子](https://discord.com/channels/686053708261228577/744933215063638183/1047387531639005244)。
- 这是一个很好由 Reddit 上的 `u/Abides1948` 展示的 [媒体工作流程](https://www.reddit.com/r/ObsidianMD/comments/z7cm82/inspired_by_uleejee_heres_my_current_obsidian/) 的图表。
- 这里有一个如何使用 [Excalidraw 来作为人物关系展示的](https://pkm.social/@nicole/109426212900974041)。的例子
- [py-obsidianmd](https://github.com/selimrbd/py-obsidianmd) 是一个 python 库，可以让你批量改变笔记元数据，并在 YAML 和内联样式之间移动元数据。有一个 [视频解释](https://www.youtube.com/watch?v=gRPBAKiu37Y)，以及 [例子](https://selimrbd.github.io/py-obsidianmd/examples/)。

# 致谢

- `Eleanor` 的授权：[Obsidian Roundup](https://www.obsidianroundup.org/)
- `Fred Lai` 的初翻：[Fred Lai - YouTube](https://www.youtube.com/c/FredLai)。
