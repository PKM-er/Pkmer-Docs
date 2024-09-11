---
uid: 20240902011618
title: Obsidian Weekly 2024-08-30：自动建议、溯源与快速启动
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-08-30：自动建议、溯源与快速启动
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240902011707
---

# Obsidian Weekly 2024-08-30：自动建议、溯源与快速启动

> [!Abstract]
> **统计时间**：2024-08-23 21:00 ~ 2024-08-30 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### [Obsidian 同步和发布状态](https://status.obsidian.md/) 现已上线

Obsidian 同步和发布的正常运行时间指标现在可以在新的系统状态页面上查看，任何故障或计划中的停机时间都将在那里报告。

![Weekly-2024-08-30-Pasted image 20240831164052|650](https://cdn.pkmer.cn/images/Weekly-2024-08-30-Pasted%20image%2020240831164052.png!pkmer)

## 插件新闻

### 社区插件

#### 新增

[Virus Total Enrichment](https://obsidian.md/plugins?id=virustotal-enrich) By _ytisf_

> 使用 VirusTotal 的信息丰富您的笔记。

[Battery Indicator](https://obsidian.md/plugins?id=battery-indicator) By _Kacper Darowski_

> 在状态栏中显示当前电池电量。

[Lazy Plugin Loader](https://obsidian.md/plugins?id=lazy-plugins) By _Alan Grainger_

> 在启动时延迟加载插件，以便您可以将应用程序启动时间缩短到亚秒级。
> **请注意**，如果这是您第一次使用本插件，则可能需要重启 Obsidian 最多 2 次才能看到全速提升。此问题只会在第一次安装时出现。

[Canvas Explorer](https://obsidian.md/plugins?id=canvas-explorer) By _Henri Jamet_

> 通过迭代添加或忽略链接的笔记来探索您的保管库，最终生成可自定义的画布，直观地表示保留的笔记及其连接

[File Share](https://obsidian.md/plugins?id=file-share) By _muckmuck_

> 通过套接字服务器在仓库之间实现端到端加密文件共享。

![Weekly-2024-08-30-ObsidianFileShareShowCase|650](https://cdn.pkmer.cn/images/Weekly-2024-08-30-ObsidianFileShareShowCase.gif)

[Suggest Notes](https://obsidian.md/plugins?id=suggest-notes) By _Doggy-Footprint_

> 该插件旨在为用户提供在写笔记时链接笔记的更好体验。Obsidian 需要写 `[[` 才能将笔记连接到笔记，这在写作时非常耗时且分散注意力。
> 此插件允许用户定义路径和要跟踪的标签，以便用户可以获得跟踪笔记的建议。

[KeepSidian](https://obsidian.md/plugins?id=keepsidian) By _lc0rp_

> 将 Google Keep 笔记同步到 Obsidian。

[Vitepress Publisher](https://obsidian.md/plugins?id=vitepress-publisher) By _mistj_

> 使用 vitepress 方便地预览和发布 Markdown 文件。

![Weekly-2024-08-30-Pasted image 20240902003417|650](https://cdn.pkmer.cn/images/Weekly-2024-08-30-Pasted%20image%2020240902003417.png!pkmer)

[External File Card](https://obsidian.md/plugins?id=external-file-card) By _James-Yu_

> 此插件添加了两种 Markdown 代码块语言 `ef` 和 `extfile`，它们是等效的。当提供文件名或部分文件路径时，此插件将尝试在文件系统中找到给定的文件，从此插件设置中给定的路径生成 root。如果找到文件，此插件将呈现一个卡片 UI，其中包含其文件名、修改和创建时间，并包含文件夹路径。文件名和包含文件夹路径都是可单击的，使用 OS 默认应用程序打开文件和文件夹。

![Weekly-2024-08-30-Pasted%20image%2020240902003159.png!pkmer|650](https://cdn.pkmer.cn/images/Weekly-2024-08-30-Pasted%20image%2020240902003159.png!pkmer)

[Mahjong Renderer](https://obsidian.md/plugins?id=mahjong-renderer) By _hypersphere_

> 使用 MPSZ 表示法渲染麻将牌（立直麻将）

![Weekly-2024-08-30-Pasted image 20240902002950|650](https://cdn.pkmer.cn/images/Weekly-2024-08-30-Pasted%20image%2020240902002950.png!pkmer)

[Abbreviations and Acronyms](https://obsidian.md/plugins?id=abbreviations-mark) By _dragonish_

> 实现缩写和首字母缩略词（术语）的自动标记。
> 通过读取笔记属性（元数据）中的指定字段获取缩写，并自动在笔记内容中渲染这些缩写。

![Weekly-2024-08-30-Pasted image 20240902002833|650](https://cdn.pkmer.cn/images/Weekly-2024-08-30-Pasted%20image%2020240902002833.png!pkmer)

[Note Reviewer](https://obsidian.md/plugins?id=note-reviewer) By _Travis Linkey_

> 该插件旨在通过根据标签筛选和获取笔记来帮助保留知识。
> 启用后，该插件将在 Obsidian 侧边栏中创建一个图标。点击 "Note Reviewer" 图标以审阅您的笔记。

[Serendipity](https://obsidian.md/plugins?id=serendipity) By _Gaurav Ramesh_

> 每次打开应用程序时，通过显示保险库中的随机笔记，强制触发意外发现。

[Listen Up!](https://obsidian.md/plugins?id=listen-up) By _Tejas H_

> 将文本转换为自然语音音频，本地化 - 听好了！

[AI LaTeX Generator](https://obsidian.md/plugins?id=ai-latex-generator) By _Aayush Shah_

> 使用本地 LLM 将自然语言转换为 LaTeX 方程。

[Emera](https://obsidian.md/plugins?id=emera) By _OlegWock_

> 使您能够直接在笔记中使用 React 组件和内联 JavaScript。有点像 MDX。

![Weekly-2024-08-30-Pasted image 20240901184526|650](https://cdn.pkmer.cn/images/Weekly-2024-08-30-Pasted%20image%2020240901184526.png!pkmer)

[Recursive Copy](https://obsidian.md/plugins?id=recursive-copy) By _datawitch_

> 当右键单击文件夹时，此插件会在导航面板中添加一个上下文菜单项，允许您复制该文件夹中的所有 markdown 文件，将它们连接起来，并将它们放置在剪贴板中。递归复制可以通过热键（默认：unbound）激活，在这种情况下，将复制活动文件的父文件夹中的所有内容。

[Todoist Project sync](https://obsidian.md/plugins?id=todoistprojectsync) By _Jonas Dam_

> 同步 Todoist 中的项目，为每个项目创建一个笔记。

#### 更新

[Timeline view v1.3.1](https://github.com/b-camphart/timeline-view/releases/tag/1.3.1) By _b.camphart_

> - **错误修复：** 解决了组颜色无法可靠更新的问题。
> - **上下文菜单选项：** 新增了从文件夹、标签和搜索结果的上下文菜单直接打开时间轴视图的功能。这简化了基于特定选择创建聚焦时间轴的过程。
> - **重新打开时间轴命令：** 新增命令，允许用户在其之前的状态下重新打开时间轴，并可选择自动打开最后配置的时间轴。
> - **代码清理：** 进行了轻微的代码重构，包括修正代码格式问题和增强错误处理。

[Another Quick Switcher v11.6.0](https://github.com/tadashi-aikawa/obsidian-another-quick-switcher/releases/tag/11.6.0) By _tadashi-aikawa_

> - **新功能**
> 	- 现在会在查询与别名之间进行匹配，以确定“插入到编辑器”命令的合适链接字符串
> - **改进**
> 	- CSS：修复了前端值数组中缺少分隔符的问题
> - **修复问题**
> 	- 修复了空值导致属性显示异常的问题

[Quick Select v1.1.2](https://github.com/itsonlyjames/obsidian-quick-select/releases/tag/1.1.2) By _James Alexandre_

> - 特征
> 	- 从“快速打开”更名为“快速选择”，以更好地反映新功能；
> 	- **现在适用于所有模态框**，包括：快速切换器、命令面板（包括所有后续模态）、斜杠命令、搜索，甚至标签和别名！

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Shortcut Edit Mode](https://github.com/Mara-Li/obsidian-edit-shortcut) By _Mara-Li_

> 在编辑模式下的文件头中添加一个按钮，以在源码视图和实时预览之间切换。

[Journaling](https://github.com/Ordeeper/obsidian-journaling-plugin) By _Ordeeper_

> 以类似日记的格式查看每日笔记，类似于 Logseq。
> - 主要特点：
> 	- **日记视图**：无缝浏览您的日常笔记，就像翻阅日记一样。
> 	- **可自定义的日期格式**：轻松调整插件以匹配您喜欢的日期格式（例如，YYYY-MM-DD、MM-DD-YYYY）。
> 	- **多路径支持**：跨多个目录管理和查看每日笔记。
> 	- **按日期排序和过滤**：根据您的喜好，按最新或最旧的顺序组织您的笔记。
> 	- **自动更新**：该插件将以可配置的时间间隔刷新您的日记视图，以确保它反映笔记中的最新更改。

![Weekly-2024-08-30-Pasted image 20240901210847|650](https://cdn.pkmer.cn/images/Weekly-2024-08-30-Pasted%20image%2020240901210847.png!pkmer)

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Thino 更新至 v2.4.53

- 功能
	- 引导指南可以通过点击关闭按钮关闭；
- 修复
	- 不应该影响 tailwindcss 的默认样式；

## 外观

[Kiwi Mono](https://github.com/c-sooyoung/kiwi-mono-obsidian-theme) By _c-sooyoung_

![Weekly-2024-08-30-Pasted image 20240901211918|650](https://cdn.pkmer.cn/images/Weekly-2024-08-30-Pasted%20image%2020240901211918.png!pkmer)

> 等宽字体统治纯文本！
> - **主要特性**
> 	- 编辑模式使用等宽字体。
> 	- 单一强调色统治全局
> - **次要元素**
> 	- 标题的边距更小（三级及以上标题无边距）
> 	- 引用块和提示框的外观更相似
> 	- 阅读模式适配任何字体；我更喜欢 [Mona Sans](https://github.com/github/mona-sans) 或 [CMU Serif](https://sourceforge.net/projects/cm-unicode/)
> 	- 更扁平的 UI（侧边栏和标签栏颜色与编辑器一致；更少的分隔线）
> 	- 对 [Pandoc Reference List](https://github.com/mgmeyers/obsidian-pandoc-reference-list) 进行了一些轻微的主题化
