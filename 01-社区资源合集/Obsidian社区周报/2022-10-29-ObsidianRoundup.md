---
uid: 20230329102645
title: Obsidian 更新
description: 
author: 
type: other
draft: false
editable: false
modified: 20230401230259
---

# Obsidian 更新

- Obsidian 的 [v1.0.3](https://forum.obsidian.md/t/obsidian-release-v1-0-3/46219) 修复了大量的 Bug，如果你更新了 1.0.0 后遇到了和本体相关的 Bug，可以考虑更新。译注：同时你也应该及时更新你的主题和插件，因为他们可能会适配最新的更新，同时带来更好的稳定性修复。
- Mobile 也迎来了相关的更新，现在它的版本是 [v1.4.1](https://forum.obsidian.md/t/obsidian-mobile-v1-4-1/46216)。

# 插件新闻

## 还未审核的插件（截止到上周五）

**也不是所有的插件都会立马上架插件市场，因为它们需要先经过代码审核。你可以使用 [Beta Reviewer's Auto-update Tool](https://github.com/TfTHacker/obsidian42-brat) 来手动下载那些还没上架的插件。当然这也意味着他们还不够稳定和安全，因为它们还没被代码审核过**

- 由 `@GRONADE457` 开发的 [Mentions in Status Bar](https://github.com/GRONADE457/obsidian-mentions-in-status-bar) 可以在状态栏中显示所有的链接提醒。
- 由 `@nqthqn` 开发的 [Wordy](https://github.com/nqthqn/obsidian-wordy) 可以使用 Datamuse API 作为词库并且查询词典等。
- 由 `@Quorafind` 开发的 [New Bullet With Time](https://github.com/Quorafind/Obisidna-New-Bullet-With-Time) 可以让你在新建列表项的时候自动插入当前的时间。
- 由 `@sandrofigo` 开发的 [Pretty BibTeX](https://github.com/sandrofigo/obsidian-pretty-bibtex) 可以让你用更漂亮的方式显示 BibTeX 的条目。
- 由 `@romantic-black` 开发的 [Vika Sync](https://github.com/romantic-black/obsidain-vika-sync) 可以让你的笔记库同步到 Vika 数据库，类似 Airtable 的数据库。
- 由 `@cloudhao1999` 开发的 [Scroll to Top Plugin](https://github.com/cloudhao1999/obsidian-scroll-to-top-plugin) 添加了一个按钮来让你快速滑动到顶部。
- 由 `@MeepTech` 开发的 [Custom File Extensions Plugin](https://github.com/MeepTech/obsidian-custom-file-extensions-plugin) 支持你将自定义视图和对应的扩展名关联起来。
- 由 `@Basil-Mori` 开发的 [Edit Gemini](https://github.com/Basil-Mori/obsidian-edit-gemini) 允许你创建并编辑 `gmi` 文件，这似乎是一个 `HTTPS` 替代的网络协议。
- 由 `@rien7` 开发的 [Colorful Tag](https://github.com/rien7/obsidian-colorful-tag) 可以让你更方便地更改标签的样式，包括但不限于在标签的前边加上图标、后边加上图标以及更改背景色等。
- 由 `@iiz00` 开发的 [Daily Note Outline](https://github.com/iiz00/obsidian-daily-note-outline) 提供了一个自定义的大纲视图，可以从标题、标签以及列表等几个层次去查看每天的日记的缩略内容。
- 由 `@AwesomeDog` 开发的 [Awesome Flashcard](https://github.com/AwesomeDog/obsidian-awesome-flashcard) 是另一款提供的 ANKI 联用的插件。
- 由 `@ShockThunder` 开发的 [Improved Random Note](https://github.com/ShockThunder/improved-random-note) 为随机漫游功能提供了一些高级选项。
- 由 `@proog` 开发的 [Trash Explorer](https://github.com/proog/obsidian-trash-explorer) 允许你更方便地去删除或者恢复 Obsidian 的 `.trash 中的回收站中的笔记。
- 由 `@erykwalder` 开发的 [Ordered List Style](https://github.com/erykwalder/obsidian-list-style) 允许你快速设定列表的前缀样式，包括数字列表以及大纲列表。

## 已上架插件的更新

如果你想了解本周的全部插件更新列表，请查看 Ganessh Kumar 的 [插件更新索引](https://obsidian-plugin-stats.vercel.app/updates) 。

- 当前在 Obsidian 的论坛上有一个 [关于类似 Tana 应用的 "Super tag"的实现可行性的讨论](https://forum.obsidian.md/t/supertags-in-obsidian/)。如果你在这个贴子往下看，你可以看到 Metadata Menu 插件的作者正在在 Obsidian 中实现类似的功能。这里有一个 [演示](https://www.youtube.com/watch?v=I73uW8fqOZ8) 关于如何实现类似的功能，同时还有一个 [文档](https://mdelobelle.github.io/metadatamenu/) 介绍了该功能的使用方式。
- [Omnisearch 1.7.6](https://github.com/scambier/obsidian-omnisearch/compare/1.6.4...1.7.6) 增加了 PDF 的索引功能，而且优化了缓存方案，提高了性能，使索引和检索更快了。
- [Obsidian Linter v1.7.0](https://github.com/platers/obsidian-linter/releases/tag/1.7.0) 支持设定默认的 YAML 值以及可以对其它东西进行格式化，例如数学。
- [Obsidian OCR v1.3.1](https://github.com/MohrJonas/obsidian-ocr/releases/tag/1.3.1) 增加了一个进度条、一个新的转译模板以及一些搜索体验上的提升。[v1.4.0](https://github.com/MohrJonas/obsidian-ocr/releases/tag/1.4.0) 则更大幅度地提升了性能。
- Tasks [v1.16.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/1.16.0) 现在支持了 [寻找无效日期的功能](https://obsidian-tasks-group.github.io/obsidian-tasks/queries/filters/#finding-tasks-with-invalid-dates)，[编辑任务时更方便选择优先级的功能](https://obsidian-tasks-group.github.io/obsidian-tasks/getting-started/create-or-edit-task/#introduction)。
- [CardBoard v0.6.0](https://github.com/roovo/obsidian-card-board) (这是一款任务/看板插件) 现在支持 TASKS 插件的截止期限格式以及完成时间格式了。

## Beta 插件

注意：这些插件还没有提交官方进行审核，或者正在进行内部测试。

- 有一个新的 [Zotero 整合](https://obzt.aidenlx.top/getting-started/install/) （开发者是 `@AidenLx`，是 Media Extended 以及 Table Extended 作者）插件允许你直接从 Zotero 数据中直接读取数据，不再需要先导出成文本类型格式的数据。同时，它支持模板、支持完全的 Zotero 数据读取功能、支持标注视图，有几乎一切的功能。
- [Strange New Worlds](https://github.com/TfTHacker/obsidian42-strange-new-worlds)（最近我终于安装了这个插件，同时被它能够用一个很漂亮的视窗显示所有的引用文献的功能所震惊），最近也支持了平板以及手机端，还加强了预览功能。下面是 [关于这个插件如何工作的两分钟教程](https://youtu.be/i08ksJ-nK9c) 。

# 外觀

- [Cyber Glow v7.2](https://github.com/ArtexJay/Obsidian-CyberGlow/releases/tag/v7.2) 提供了一个行高亮的设置项，你可以更方便地高亮当前行了。[7.4](https://github.com/ArtexJay/Obsidian-CyberGlow/releases/tag/v7.4) 改进了移动端的支持，还有其它的一些方面。
- [AnuPpuccin](https://github.com/anubisnekhet/anuppuccin) v1.0.2 - 1.1.1 增加了一个自定义的深色咖啡主題和一个可选的卡片形式主题风格。v1.0.7 全面修改了 Style settings 的设置，支持了一系列颜色主题还有 Callout 形式。
- [Ebullientworks](https://github.com/ebullient/obsidian-theme-ebullientworks) v0.6.0 迎来了大量的更新，应该更好地适配 1.0 了。
- [GitHub 主題](https://github.com/krios2146/obsidian-github) 由 `@krios2146` 制作，是一个类 Github 的配色方案。
- [Ultra Lobster](https://github.com/7368697661/Ultra-Lobster) 由 `@7368697661` 制作，名字听起来好像很夸张（因为名字是超级龙虾），但实际上在字体和排版方面都选用得很好，所以非常精致。

## 教程

- 关于如何 [使用 git 和 a-shell 在 iOS 上免费同步的有趣教程](< https://forum.obsidian.md/t/mobile-automatic-sync-with-github-on-ios-for-free-via-a-shell/46150>)。
- 关于如何 [用 Flowershow（自我）发布你的数字花园的教程](https://flowershow.app/docs/publish-tutorial)
- 关于 [如何在 Obsidian 中使用 Vscode server 的教程](https://www.reddit.com/r/ObsidianMD/comments/yfxdlb/vs_codeserver_in_obsidian/)。
- 来自 Marcus Olsson 的 [如何创建自定义视图以及在状态栏中显示数据的 Obsidian 开发教程](https://youtu.be/zR86pftlOsg)————译注：已经搬运到 Bilibili 上啦~。
- 与 Maxime Cannoodt 在线讨论 [如何使用 Svelte 进行简单快速有效 UI 开发](https://youtu.be/mCF80HBfUWA)。Maxime Cannoodt 教 Marcus 如何使用 Svelte 开始快速的 UI 开发（译注：已经搬运到 Bilibili 上啦~）。
- 这篇文章介紹了 [如何在网上阅读时候记笔记](https://beingpax.medium.com/a-better-web-highlighter-for-obsidian-82428c634a24)，并且提到了一个名为 Eloquent 的 Chrome 浏览器 [高亮插件](https://eloquent.works/)，它可以和 Obsidian 兼容，支持列表、双链以及标签等。它还专注于提升键盘体验，为的是快速记录想法。
- 这里有一个 [Obsidian 运算符的介绍图表](https://twitter.com/heymichellemac/status/1585980871248867328)。
- 使用 Obsidian 的视频教程—— [如何做概念性笔记](https://www.youtube.com/watch?v=PuqGjNJMiZQ)，目的是提高笔记在课堂后的利用率。
- 还有一个关于如何 [使用 Dataview 和 Templater 设置在学校中使用的库](https://www.youtube.com/watch?v=0UTzpIdLbVo) 的分步指南。

# 展示

- 社区中还发生了一件很鼓舞人心的事情——关于 [Obsidian 如何帮助一名用户逐步戒掉成瘾品](https://www.reddit.com/r/ObsidianMD/comments/yakp6u/in_a_way_my_experience_with_pkm_and_obsidian_has/)，其中有相关的规划说明以及来自社区用户的鼓励。从他的笔记中可以看到有些时候，笔记可以是简单的，不需要很复杂的工作流。
- 社区中展示了一个 [管理与人相关的模板](https://dannb.org/blog/2022/obsidian-people-note-template/)，解释了如何使用 Dataview、Templater 和 QuickAdd。
- [基本 dataview 查询生成器](https://s-blu.github.io/basic-dataview-query-builder/) 现在用起来可以更快构建 Dataview 检索式了。

# 个人事项

我最近写了一篇文章，解释了 [我需要休整我的 newsletter，並重新考虑我的发布时限的相关事项](https://newsletter.eleanorkonik.com/state-of-the-eleanor-01/)，其中概述了各种原因。

这对 Obsidian 周报的影响是——很快会迎来更多的内容 soon™ 。你不必担心太多，同时我想要在这里分享一下我的想法，一旦我能够在“需要请一名开发者来帮助我完成这个任务”前解决这个问题，你就会看到很大的改变！简而言之，自从我开始做 Obsidian 周报以来，Newsletter（包括我的生活）都发生了很多变化，为了我自己的一些心智健康，我需要开始利用其中的一些变化。
