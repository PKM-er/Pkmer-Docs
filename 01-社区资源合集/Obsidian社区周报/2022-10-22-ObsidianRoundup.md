---
uid: 20230329102645
title: 社区新闻
description: 
author: 
type: other
draft: false
editable: false
modified: 20230401230259
---

# 社区新闻

本文对应下述的博客原文：

[Obsidian Roundup 2022-10-22](https://www.obsidianroundup.org/mobile-pdf-indexing/)

Kepano 分享了关于 AI 辅助文本生成插件的一些想法，社区上架了新的基于语言动态 RTL/LTR 文字排列方向的检测插件，此外，OCR 插件的更新也上线了。

> 每周都有相当多有趣的分享或讨论在 Discord 中传播或产生，文章中的链接往往需要你登录到 Discord 中才能查看，且一般都是登录到浏览器版本的 Discord 或者将链接贴入到 App 才能打开快速跳转——为这个麻烦提前说声抱歉！

O_O 活动第三周的直播课程视频已经发布~

- Marcus Olsson 的 [插件设置面板构建](https://www.youtube.com/watch?v=gG4HJ3RbzD4) ，你可以在我们的视频上传中看到~
- Stephan Ango (aka `@kepano`) 的 [为 Obsidian 1.0 创建一个主题](https://www.youtube.com/watch?v=tARSN_dSaaI)。

# Obsidian 更新

Obsidian 手机版 1.4.0 版本将内置 Obsidian 1.0 的所有更新，在这个版本中，手机端的界面迎来了极大的修正——新增了导航条、标签页以及长按反馈等功能。由于这次更新非常的大，请务必阅读 [发布说明](https://forum.obsidian.md/t/obsidian-mobile-1-4-0/45618)。

- 同时内部的 Insider Desktop 版本也迎来了 [v1.0.1](https://forum.obsidian.md/t/obsidian-release-v1-0-1-insider-build/45735/2) 和 [v1.0.2](https://forum.obsidian.md/t/obsidian-release-v1-0-2-insider-build/45769/2) 的相关更新，在这些更新中修复了一些 Bug，以及改进了相关的用户体验。
- 我很喜欢这个关于 [对 Obsidian 1.0 版本更新的反思](https://miscellaneplans.medium.com/obsidian-1-0-frustration-fixes-fidelity-69178347cdea) 的分享，是关于这次更新打乱了 Ellane W 作为用户的工作，但是最后她又适应了的过程

# 插件新闻

## 社区插件中的新插件

这些插件通过了代码审查，现在可以在插件市场可以下载了。对于全部的通过列表，请查看 [插件统计页面](https://obsidian-plugin-stats.vercel.app/new)。

- 由 `@jensmtg` 来发的 [Influx](https://github.com/jensmtg/influx) 是一个非常令人兴奋的用于替代原生反向链接的插件，它可以根据在笔记的大纲（例如缩进列表）中对笔记的引用，从而在对应的笔记下方显示相关上下文内容且渲染过的笔记摘录；
- 由 `@Qwyntex` 开发的 [Doubleshift](https://github.com/Qwyntex/doubleshift) 可以让你在 Obsidian 中用类似 IntelliJ 中那样按两次 Shift（或任何其他键）来打开命令面板，当然你也可以根据你的需求来创建对应的快捷方式；
- 由 `@isaaclyman` 开发的 [Novel word count](https://github.com/isaaclyman/novel-word-count-obsidian) 可以让你在文件浏览器中查看每个文件、文件夹以及整个库的字数（还有一些别的功能，你也可以自行查看）
- 由 `@mwxgaf` 开发的 [Dynamic RTL](https://github.com/mwxgaf/obsidian-dynamic-rtl) 会根据当前行使用的语言的不同，动态地改变每行/每段的 RTL/LTR 方向。
- 由 `@larsmagnus` 开发的 [Theme Toggler](https://github.com/larsmagnus/obsidian-theme-toggler) 在工作区的每个窗口中都增加了一个主题切换按钮，允许用户在每个窗口分别设置主题，同时增加了在不同编辑状态下切换主题的命令。
- 由 `@nuthrash` 开发的 [HTML Reader](https://github.com/nuthrash/obsidian-html-plugin) ，允许用户打开以 ".html " 和 ".htm " 文件为扩展名的文件。
- 由 `@rwirdemann` 开发的 [Week Planner](https://github.com/rwirdemann/obsidian-week-planner) 允许用户可以创建计划文档以及在它们之间互相迁移任务。
- 由 `@jqhoogland` 开发的 [Squiggle](https://github.com/jqhoogland/obsidian-squiggle) 开发的允许你在笔记中运行 Squiggle 代码片段。

## 正在审核的插件

**也不是所有的插件都会立马上架插件市场，因为它们需要先经过代码审核。你可以使用 [Beta Reviewer's Auto-update Tool](https://github.com/TfTHacker/obsidian42-brat) 来手动下载那些还没上架的插件。当然这也意味着他们还不够稳定和安全，因为它们还没被代码审核过**

- 由 `@mottox2` 开发的 [obsidian-relation-pane](https://github.com/mottox2/obsidian-relation-pane) 会给你一个总体查看笔记之间关系的面板。
- 由 `@Canna71` 开发的 [Mathpad](https://github.com/Canna71/obsidian-mathpad) 是一个内置计算器插件，可以在行内和侧边栏中使用。
- 由 `@royexue` 开发的 [Obsidian Things3 Sync](https://github.com/royxue/obsidian-things3-sync) 允许你在 Obsidian 和 Things3 之间进行同步，主要为创建 Todo 并同步 Todo 状态。
- 由 `@danieltomasz` 开发的 [qmd as md](https://github.com/danieltomasz/qmd-as-md-obsidian) 由提供，支持查看扩展名为.qmd 的文件。QMD 文件包含 markdown 和可执行代码，是 Quarto 开源发布系统支持的一种格式。
- 由 `@yaleiyale` 开发的 [Obsidian Github Uploader](https://github.com/yaleiyale/obsidian-github-uploader) 允许你将你剪贴板中的图片上传到 Github。
- 由 `@yesjinu` 开发的 [Status Bar Quote](https://github.com/yesjinu/StatusBarQuote) 可以在状态栏中显示一个每日佳句。
- 由 `@tadashi-aikawa` 开发的 [Old Note Admonitor](https://github.com/tadashi-aikawa/obsidian-old-note-admonitor) 会针对你长时间没有更新的笔记提供相应的警示信息，具体为在文章的头部展示对应的日期差。
- 由 `Boninall` 开发的 [Double Click Tab](https://github.com/Quorafind/Obsidian-Double-Click-Tab) 修改了你双击标签标题时的默认行为，如关闭标签。
- 由 `@hrenaud` 开发的 [Checkbox 3 states](https://github.com/hrenaud/obsidian-checkbox3states-plugin) 为复选框列表添加了第三种状态。

## 已上架插件的更新

如果你想了解本周的全部插件更新列表，请查看 Ganessh Kumar 的 [插件更新索引](https://obsidian-plugin-stats.vercel.app/updates) 。

- [Obsidian OCR v1.3.0](https://github.com/MohrJonas/obsidian-ocr/releases/tag/1.3.0) 提供了稳定性和速度的改进，并且改进了安装说明，还支持在搜索的时候预览内容等。
- [Digital Garden 2.17.0](https://notes.ole.dev/set-up-your-digital-garden/) 引入了在你发表的笔记中显示反向链接和局部图谱的选项。
- [Latex Suite 1.6.0](https://github.com/artisticat1/obsidian-latex-suite/) 现在允许你从其它的文件中加载 LaTeX Suite 的片段，这意味着你可以使用外部文本编辑器来编辑、备份和与他人分享片段。
- [obsidian-db-folder 2.7.4](https://github.com/RafaelGB/obsidian-db-folder/releases/tag/2.7.4) 现在支持嵌套的 YAML 字段，并允许你编辑标签的名称，进而更新所有的行和文件。
- [Excalidraw 1.7.23](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/1.7.23) 扩展了已经支持的图片格式（jpg、gif、png、svg），额外增加了对 webp、bmp 和 ico 图片的支持。v1.7.24 还修复了一堆 bug 和一个新的用于在画布颜色改变时改变当前绘画风格的 hook 。Excalidraw 的自动化功能非常得棒。
- Obsidian Bulk Rename, Media DB Plugin, Buttons, Obsidian Git, Advanced Slides（这里只是其中的一部分！）更新后，与 Obsidian 1.0 更新的兼容都有所改进。请经常更新插件，因为开发人员正在适应新的稳定的 API。

## Beta 插件

注意：这些插件还没有提交官方进行审核，或者正在进行内部测试。

- [Omnisearch Beta](https://github.com/scambier/obsidian-omnisearch/releases/tag/1.6.5-beta.5)（的 PDF 索引检索功能）现在可以在手机上使用了。
- 来自 `@TfTHacker` 的新插件—— [Strange New Worlds](https://forum.obsidian.md/t/obsidian-october-2022-daily-progress-and-learnings/43767/13?u=tfthacker)，旨在帮助显示笔记之间的相互联系，有点像 Block Ref Counter 插件的精神继承者。

## 主题

- ITS 主题，Wyrd 主题，CyberGlow 主题，Shimmering Focus 主题（这里只是其中的一部分！）已经更新到兼容 Obsidian 1.0 ，如果你喜欢用以上的主题，你可以更新它们了~。
- 由 `@zamsyt` 设计的 [Fusion](https://github.com/zamsyt/obsidian-fusion) ，目标是极简主义，而且有一个漂亮的蓝色色调。
- Catppuccino 配色方案（一个 " 舒缓的粉色主题，适合热情的人 "）现在可以在 `@mbeckrich` 的 [Catppuccin](https://github.com/catppuccin/obsidian)、`@AnubisNekhet` 的 [AnuPpuccin](https://github.com/AnubisNekhet/anuppuccin)，以及 `@kepano` 的 [Minimal](https://minimal.guide/) 主题中配合 Style Settings 插件选择并且使用。后两者也支持其他几种流行的颜色方案。
- `@erykwalder` 的 [Dayspring](https://github.com/erykwalder/dayspring-theme) 主题对 religious 内容来说特别好用：它允许以一种不显眼的方式将诗句编号等东西放在段落之外。
- 这里有一个 Discord 中的片段，用一个自定义的配置和一个 css 片段，[把 highlightr 插件变成一个改变文本颜色的插件](https://discord.com/channels/686053708261228577/855181471643861002/1030379180430462987) 。

## 辅助工具

- 这里有一个 MacOS 对 [内部日记条目](https://twitter.com/hstagner/status/1579804046306656258?s=20&t=oC2QljfioVCKe3ozMEa7Eg) 很有用的快捷方式，而且也有相关的介绍和视频。

## 教程

- 这是一个很好的关于如何在不使用官方发布插件的情况下将 Obsidian 作为文章的内容管理工具的教程： [Obsidian Vault 和网站目录作为同级目录](https://www.gatlin.io/content/how-i-use-obsidian-as-a-cms-for-my-website) ，采用类似的方案就更容易区分公共/私人笔记。据我所知，这是一个相当新颖的方法。
- 这里有一个很好的给 [初学者的 markdown 介绍](https://twitter.com/n_vanderhoeven/status/1583488865234345984) 的视频教程。
- 这里有一个解释 [数据库风格的查询](https://twitter.com/ThoughtfulAtlas/status/1580251417993805825) 的教程，有很多截图介绍。
- Martine Ellis 分享了一个利用 Obsidian 实现的 [想法产生、日记和文章输出的系统](https://twitter.com/MartineGuernsey/status/1581540522594045953)。
- 这里有一个教程是关于使用 Obsidian 进行 [音乐课程和合奏计划](https://www.youtube.com/watch?v=YhMVOtzcgX0)。

## 讨论

- 在 Discord 上有一个有趣的关于文件夹与标签的讨论，大家分享了一些关于 [整齐的标签和混乱的副标签的价值](https://discord.com/channels/686053708261228577/710585052769157141/1033191865228472351) 的观点。
- 很多人在 Twitter 上分享了 [会议记录模板](https://twitter.com/Federico_Presta/status/1582383574224760832?s=20&t=oC2QljfioVCKe3ozMEa7Eg)。

## 展示

- 这是一个在 Obsidian 中使用了 Advanced Tables 插件的 [订阅跟踪模板](https://www.reddit.com/r/ObsidianMD/comments/y699wi/a_basic_subscription_tracker_template_for/)。
- 这是 Zsolt（Excalidraw 插件的开发者）如何 [将时间整合到笔记中](https://www.youtube.com/watch?v=qIKg_1FNUgk) 的展示。

## 思考食粮

- Obsidian 1.0 主题开发者 `@kepano` 基于一些 Obsidian 插件分享了一些 [关于 AI 辅助写作的想法](https://stephanango.com/photoshop-for-text)，涉及了以下两个插件： [Text Generator](https://github.com/nhaouari/obsidian-textgenerator-plugin) 和 [Obsidian Ava](https://github.com/louis030195/obsidian-ava)。

---

## 贡献

- 感谢 Fred Lai 初翻
- 感谢原作者 Eleanor 的授权
