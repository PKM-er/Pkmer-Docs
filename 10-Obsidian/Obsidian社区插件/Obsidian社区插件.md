---
uid: 20230329145807
title: Obsidian 社区插件
tags: [Obsidian, 社区插件]
description: Obsidian 社区插件推荐，优秀插件介绍和使用方法
author: OS
type: awesome
draft: false
editable: false
modified: 20240116114822
---

# Obsidian 社区插件

Obsidian 允许其他开发者编写第三方插件来扩展 Obsidian 的功能。你可以把这点理解清楚 Chrome 或者 Edge 浏览器一样的扩展。

Obsidian 最强大的地方在于插件系统，即使是官方的一些功能，也是通过插件来实现的。因此插件可以按维护者分为核心插件和社区插件两类。核心插件由官方维护，随着 Obsidian 本体进行发行，社区插件由社区插件开发者维护，通过 Obsidian 插件市场进行发布。

插件机制提供了极大的自由度，用户可以随意搭配使用，开启或关闭，社区插件可以不安装，甚至可以延迟加载，按需加载。这充分考虑到了不同的人有不同的需求，保证每个人使用 Obsidian 都是定制化，轻量化的。带来自由度的同时，需要自己控制功能的复杂度，并不是插件越多越好，功能越多越好，按需使用在无限制的自由度中才能获得真正的自由。社区相当多的贡献者提供开箱即用库，插件测评，教程文档等分享，适度交流可能会有比较大的收益。

## 用户相关

### 安全模式

默认情况下，Obsidian 将打开安全模式，以保护用户免受潜在的伤害。在安全模式下，Obsidian 不会运行任何第三方插件。

> [!Tip] 提示
> 第三方插件可以访问你电脑上的文件，连接互联网，甚至安装额外的程序。了解更多关于插件安全性的信息，请阅读 [[#插件安全性|此部分]]。

为了安装第三方插件，你需要在 `设置` -> `第三方插件` -> `安全模式` 中关闭安全模式。

### 浏览与安装第三方插件

禁用安全模式后，你可以在 `设置` -> `第三方插件` -> `社区插件` -> `浏览` 中打开第三方插件列表页面，从而找到由社区成员开发的第三方插件。

插件安装后，你可以在 `设置` -> `第三方插件` 下找到已安装的插件。插件需要启用才能生效。当然，你也可以在那里卸载它们。

> [!Warning] 无法访问安装第三方插件
> - 可以使用 PKMer 社区提供的 [[pkmer]] 插件

### 插件安全性

Obsidian 非常重视你的数据安全，这使得我们非常重视安全问题，第三方插件的安全性也包括在内。

由于框架的技术原因，Obsidian 官方 和 PKMer 都无法限制插件的权限或访问级别。同时，由于 Obsidian 是一个免费软件，目前我们仍没有精力人工审查每个插件。

值得庆幸的是，Obsidian 拥有一个氛围良好的社区，因此我们可以依靠社区信任来确保第三方插件的安全性。

一般来说，你可以信任在社区中流行的大多数插件。为了进一步确保插件的安全性，我们要求所有社区插件在 GitHub 上开源。**但是，如果你正在处理重要的数据，我们仍建议你在安装插件前检查插件代码，从而更好地保证数据安全。**你可以在插件的详细信息页面找到插件的 Github 仓库地址。

如果你发现第三方插件有安全漏洞，你可以通过在 GitHub 上添加问题来告知插件作者。如果你认为某个插件是恶意的，请联系我们，让我们调查并删除这个插件。

## 社区使用技巧

来自社区各个达人的使用技巧 [[Obsidian使用技巧]]

## 插件列表

无论是初入江湖的软件新手，还是经验丰富的江湖老手，面对一个全新的软件时，都难免会遇到一些问题。我们深知，Obsidian 插件日新月异，每个插件有其独特的特点和使用方法。

遇到问题时，我们也为您提供了一些简单又实用的描述，帮助您高效地解决问题。我们相信，无论您是新手还是老手，在经过一些练习和摸索后，都能够掌握使用该软件所需的技能和技巧，并在其中体验到乐趣和便捷。

## 插件安装

- [[pkmer]]：PKMer 不需要魔法，完美解决 Obsidian 无法加载第三方插件
- [[obsidian42-brat]]：让你可以安装未上架的插件、主题

### 编辑增强

这些插件可直接优化或提升 Obsidian 笔记编辑的用户体验。它们一般会直接应用于笔记编辑窗口，使 Obsidian 的操作界面更加直观、可视化，从而提升用户的使用体验。许多插件中还集成了 callout、可视化操作及浮动目录等功能，让你更容易地浏览、查看和编辑笔记内容。所有这些特性的集成对于 Obsidian 用户来说，可以让用户的操作过程变得更为简单、直观，同时也增加了对用户的使用体验的提升。

- [[obsidian-global-search-and-replace]]：给 Obsidian 全库进行文本替换
- [[easy-typing-obsidian]]：包含编辑时自动格式化文本和符号编辑增强。自动格式化文本对文档的格式进行规范化，并且美化文档的观感，强优化用户的编辑体验
- [[obsidian-latex-suite]]：通过片段、文本扩展和编辑器增强功能，使排版 LaTeX 数学与手写一样快
- [[obsidian-dynamic-highlights]]：根据正则表达式，为笔记内容增加高亮和样式；另外也有一篇文章分享了 [[Dynamic-Highlights 插件的几种使用场景]]
- [[remember-cursor-position]]：记住每个文件光标和滚动位置
- [[obsidian-remember-file-state]]：
- [[cm-typewriter-scroll-obsidian]]：打字机风格的滚动，使视图保持在编辑器的中心
- [[typewriter-mode]]：使光标所在行始终处于屏幕某处，降低用 Obsidian 写中长文时用鼠标滚动调整页面的频繁
- [[number-headings-obsidian]]：给笔记中的标题自动编号，以及动态目录
- [[longform]]：一款专为写作者和写作团队而设计的插件。它可以帮助用户创建和管理大型文学项目，例如书籍、小说、论文等。它可以将大文本拆分成更小的部分，例如章节、段落和场景，并提供基本编辑和组织工具。
- [[weather-fetcher]]：来获取和插入当前的天气到笔记编辑器的插件
- [[obsidian-chat-view-qq]]：保存 QQ 消息到 Obsidian 中，并保持 QQ 的会话格式
- [[cm-show-whitespace-obsidian]]：在编辑器中显示空白和制表符
- [[fantasy-name]]：插入一个随机组合出来的人名
- [[html-tabs]]：在笔记中创建和渲染选项卡和标签面板
- [[slash-commander]]：定制 slash 命令列表。

### 格式化

描述格式化是指通过使用不同的格式技巧和标点符号排版等方式来提高文本的可读性和视觉效果，使得文本更清晰易读、更美观易懂，同时也提高了文本质量和可读性。在 Obsidian 中，有多种插件可以帮助用户对文本进行描述格式化。

这些插件提供了不同的描述格式化功能，使用户能够更方便地将文本进行结构化、清晰化、排版美化等操作，提高文本质量和可读性。

- [[obsidian-pangu]]：快速格式化文档
- [[obsidian-regex-pipeline]]：让用户用自定义的正则表达式进行格式化文本的插件
- [[easy-typing-obsidian]]：自动格式化你的中英文标点输入格式

### 文字样式

- [[editing-toolbar]]：添加一个浮动编辑栏，增强 Obsidian 的可视化编辑体验。
- [[obsidian-comments]]：为笔记增加批注或评论。
- [[highlightr-plugin]]：将小而美的高亮菜单添加到了 Obsidian 中，通过所见即所得的方式，为笔记内容中文本增加高亮颜色。
- [[style-text]]：自定义 CSS 样式应用于笔记中的选定文本
- [[cmenu-plugin]]：提供一个 mini 工具栏，以获得更流畅的写作/编辑体验✍🏽
- [[Obsidian样式-特殊标签-让Markdown的文本多彩多色]]
- [[control-characters]]：显示隐藏的字符

### Callout 相关

- [[Obsidian如何制作多栏布局]]
- [[Obsidian能像其他笔记样分栏嘛]]
- [[obsidian-columns]]：支持多种方式来设定分栏目
- [[multi-column-markdown]]：在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档
- [[Obsidian样式-MCL Multi Column]]

### 标题增强

- [[creases]]：给 Obsidian 的标题增加折叠和展开的功能。
- [[lapel]]：在标题旁边显示标题等级
- [[number-headings-obsidian]]：给笔记中的标题自动编号，以及动态目录

### 图像&图表

这些插件致力于大幅强化 Obsidian 笔记中图片的操作体验，并提供诸多实用功能，例如方便地查看和管理笔记中的图片，将网络图片集成到本地，等等。这些插件都极大地丰富了 Obsidian 用户的图片使用体验，使用户可以更加方便地在笔记中插入、编辑和排序图片，并提高他们的使用效率。此外，它们还提供了许多高级功能和实用性的工具，例如图片大小调整、编辑、居中、旋转，以及自动生成文件名等。每一个细节都经过了认真优化，让用户可以获得更为舒适顺畅的图片使用体验。

- [[obsidian-image-toolkit]]：提供笔记中查看图片的基本操作
- [[awesome-image]]：提供笔记中查看图片的基本操作
- [[obsidian-charts]]：为 Obsidian 中的笔记增加一个图表功能
- [[Copy-Image-and-URL-context-menu]]：为图片增加右键菜单，并提供了一些新功能，包括复制图像，复制网址等。
- [[obsidian-image-captions]]：给图片增加说明题注，更新，功能更多
- [[obsidian-image-caption]]：给图片增加说明题注
- [[obsidian-local-images-plus]]：将你粘贴的网络图片，自定下载到本地并插入到你粘贴的位置
- [[obsidian-file-link]]：可以很容易地将文件链接添加到笔记中，提供界面化的选择文件
- [[mousewheel-image-zoom]]： 能够通过按住可配置键（默认为左 alt），在编辑/阅读模式下通过滚轮来调节图像的大小
- [[obsidian-image-caption]]：为你笔记中的图片添加标题、说明
- [[在Obsidian中为图片添加注释]]：社区实践多种方法解决图片注释问题
- [[Copy-Image-and-URL-context-menu]]：使得图像可以在阅读模式直接复制
- [[obsidian-camera]]：给你的笔记增加照相记录功能
- [[Obsidian如何生成和美化目录]]

### 目录和大纲类

这些插件和大纲、目录有关，它们提供了：快速生成大纲、目录；快速定位目录；快速修改挪动不同笔记标题下内容的能力。活用这些插件，有助于我们更好的组织和梳理自己笔记的核心脉络。

如果你对大纲和目录希望快速了解是否适合你，可以看这篇横向对比 [[Obsidian如何生成和美化目录]]

- [[obsidian-dynamic-toc]]：帮助你在笔记中生成对应的目录
- [[obsidian-plugin-toc]]：帮助你在笔记中生成对应的目录
- [[any-block]]：个简易而又强大的块编辑器，您可以通过某种方式灵活地创建一个“块”。它还提供了一些有用的功能，比如 `列表转表格`
- [[floating-toc]]：在笔记一侧生成悬浮目录，效果近似你在其他在线文档中看到的一样
- [[obsidian-quiet-outline]]：增强大纲插件，按需自动展开大纲
- [[obsidian-outliner]]：为 Obsidian 的大纲添加快捷操作
- [[obsidian-list-callouts]]：在大纲列表上，通过设定的字符符号，生成对应的强化图标和强调高亮色
- [[oin-gotoheading]]：提供在笔记标题之间快速跳转的操作
- [[obsidian-zoom]]：通过快捷键，快速聚焦到大纲。并在笔记顶部生成标题的面包屑导航，该面包屑可以交互来定位大纲内容
- [[automatic-list-styles]]：不借用主题和 css 片段前提下。来实现有序列表，增加不同的层级的前缀符号样式
- [[list-style]]：在文本行内通过标准的 list style typs，来实现有序列表的多种不同的层级、样式的前缀符号样式
- [[obsidian-tracker]]：将笔记中的变化收集起来，并且提供不同预设的图形分析模板
- [[order-list]]：添加“排序选定列表”命令，以按末尾的数字对所选列表进行排序。
- [[obsidian-party]]：Obsidian 上的 party.js 实现。在您的笔记中创建五彩纸屑、火花，甚至自定义效果！

### 任务类&提醒

这些 Obsidian 插件为用户提供了丰富的功能和工具，其中包括添加简单日历视图管理、多视图项目管理、提醒待办事项、自然语言插入时间戳、基于进度条的任务管理、看板制作、日程规划、任务归类和可视化最后编辑时间等。这些插件的功能差异明显，可以根据个人或组织需求灵活选择使用，让你的事务管理事半功倍。

- [[obsidian-thino]]：memos 全新版本~tada~
- [[obsidian-memos]]：提供一个简易轻巧的笔记和灵感收集方式
- [[card-board]]：看板任务管理插件，不需要你特别维护看板数据，而是自动收集所有笔记中的任务
- [[calendar]]：为 Obsidian 添加一个简单日历功能
- [[obsidian-projects]]：提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求
- [[obsidian-reminder-plugin]]：为 Markdown 中的待办事项，添加提醒管理。
- [[obsidian-tasks-plugin]]：Obsidian 增强任务管理，为任务增加优先级，计划日期，完成日期等自动化和图形化操作界面。
- [[obsidian-checklist-plugin]]：将所有笔记待办清单合并到一个视图中，你可以在这个视图种管理和完成相关的任务
- [[progressbar]]：主要作用是将 progressbar 格式的代码块渲染为基于时间或手动的进度条
- [[obsidian-task-progress-bar]]： 简洁易用的任务统计和完成查看工具
- [[obsidian-kanban]]：在 Obsidian 制作看板，可以连接你的笔记
- [[obsidian-day-planner]]：用于从 Markdown 笔记中的任务列表中规划和管理番茄钟计时器
- [[checkbox-reorder]]：针对任务列表的完成情况重新排序
- [[obsidian-badge]]：可以自定义一个进度样式，方便你传入任何地方。需要了解下简单的语法规则。
- [[obsidian-task-archiver]]：帮你快速归类待办任务
- [[completed-task-display]]：提供控件来显示或隐藏已完成的任务。
- [[obsidian-last-modified-timestamp-in-status-bar]]：在状态栏可视化你的最后编辑时间
- [[tasks-calendar-wrapper]]：完美的时间线/日历视图的任务面板展示

### 日期&时间

- [[calendar]]：添加一个简单的日历视图，用于可视化日记和在不同日记间跳转。
- [[nldates-obsidian]]：使用自然语言插入时间戳，并链接对应笔记中
- [[obsidian-last-modified-timestamp-in-status-bar]]：在状态栏可视化你的最后编辑时间
- [[tokei]]：将一个数字时钟，放到笔记中

### 代码域

- [[cm-editor-syntax-highlight-obsidian]]：允许在 Obsidian 的代码块中针对编程语言显示预设的高亮配色方案
- [[obsidian-codemirror-options]]：强化代码输入和编辑体验
- [[code-block-copy]]：在阅读模式中，为代码块右上角添加一个复制按钮，点击后自动复制代码块内容到剪贴板
- [[obsidian-code-copy]]：为代码块添加一个复制按钮。该功能官方已经提供
- [[code-styler]]：在阅读视图和编辑视图中对代码块和内联代码进行样式设置。
- [[obsidian-better-codeblock]]：在阅读视图中为代码块添加标题、行号和折叠按钮
- [[codeblock-tabs]]：将连续的 CodeBlocks 创建标签组样式
- [[obsidian-code-tab]]：创造类似 leetcode 样式的混合代码块，且不仅限于代码块
	- [[code-tab还能这么玩]]：codetab 插件的活用文章

### 搜索

对于那些每天需要处理大量信息和笔记的用户来说，搜索是一个不可或缺的工具。为了满足用户不同的需求，在 Obsidian 中推出了多个强大的搜索插件，方便用户快速、准确地查找和管理笔记。这些插件操作简单、功能多样，可以根据关键字、标签、时间戳等多种方式进行搜索，快速定位笔记。此外，某些插件还支持高级搜索、全文搜索、模糊搜索等功能，让你更加轻松地处理大量信息和笔记。

- [[float-search]]：给 Obsidian 增加悬浮搜索功能
- [[fuzzy-chinese-pinyin]]：基于汉语拼音进行模糊搜索
- [[search-on-internet]]：快速在搜索引擎中搜索笔记内容
- [[search-obsidian-in-google]]：让你在谷歌搜索中搜索 Obsidian 中的笔记
- [[obsidian-better-command-palette]]：为命令面板添加了一个更用户友好、功能更丰富的强化
- [[smart-connections]]：该插件增强了核心插件 - 笔记漫游的功能

### 脚注&引用

- [[better-fn]]：为 Obsidian 脚注增加悬浮展示功能，鼠标指向后，脚注的解释会出现在对应位置
- [[obsidian-footnotes]]：方便你增加脚注更加方便，可以通过快捷键快速在脚注和脚注解释内容之间快速切换。
- [[obsidian-tidy-footnotes]]：可以将所有脚注都合并到一个地方，也能给脚注重新排序

### 链接类

在 Obsidian 中，链接是笔记之间和笔记与外部资源之间重要的互动方式，链接的使用体验影响着用户在查找、组织和浏览笔记时的效率和舒适度。为了增强链接的使用体验，Obsidian 提供了多种链接管理插件。这些插件可以帮助用户进行链接的猜测和提取、显示链接对应的网站图标、提高链接的美观性和可读性。

- [[obsidian-advanced-uri]]：Obsidian URI 的功能增强
- [[obsidian-advanced-uri-青年与禅师的技术尬聊]]
- [[Cubox 通过 Advanced Uri 插件导入 Obsidian]]
- [[supercharged-links-obsidian]]：可帮助您根据笔记元数据（例如标签或 YAML 前言属性）设置保管库中链接的样式。可以自动向链接添加颜色、表情符号或其他样式，使其更醒目的进行导航。
- [[obsidian-auto-link-title]]：自动在粘贴时，提取网页链接标题，创建一个 Markdown 链接形式与正确的标题
- [[url-into-selection]]：使用常规 Ctrl/Cmd+V 将链接（URL）插入到选定的文本中。也可以反过来，通过命令面板/快捷键将文本插入到选定的链接（URL）中
- [[external-favicon]]：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标
- [[link-favicon]]：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标
- [[obsidian-rich-links]]：为你笔记中的链接，增加美化样式
- [[obsidian-link-embed]]：帮你将网页 URL 转换为嵌入预览卡片样式
- [[auto-card-link]]：自动将链接变成卡片样式
- [[links]]：各种链接形式的相互转换

### 关系图谱

- [[graph-analysis]]：将图形分析能力添加到 Obsidian，此插件实现了一套算法，可以计算仓库中的笔记之间的关联关系
- [[obsidian-relation-pane]]：显示一个总结笔记间关系的面板

### 导出&分享&发布

- [[obsidian-export-image]]：轻松将笔记转换为图片
- [[pandoc 插件导出 word 格式 正确识别本地图片]]
- [[html-server]]：帮你把 Obsidian 仓库作为一个 web 服务器，同时保持你的主题，并确保你的图像和文件链接的工作
- [[obsidian-to-notion]]：一键把 Obsidian 中的文件传输到 Notion 中
- [[easy-bake]]：轻松将许多 Obsidian 笔记编译成单个文件

### 阅读和 PDF

- [[obsidian-booknote-plugin]]：让你在 Obsidian 中阅读标注 PDF
- [[obsidian-weread-plugin]]：让 Obsidian 和你的微信阅读联动
- [[better-comment-toggle]]：改进了注释的切换功能

### 标签类

标签是一种简洁、灵活、直观的文档组织工具，可以帮助用户快速以及准确地对文档进行分类、归档和筛选。不同于传统的文件夹和目录管理方式，标签可以根据不同的主题和关键词进行动态分类和重组，方便进行多维度的筛选和查找。标签的使用不仅能加速文档的查找，快速定位到需要的文档内容，而且还能帮助用户更好地归档和组织自己的文档内容，从而提高文档的管理质量和效率。在数字化信息管理领域，标签已成为一种不可或缺的重要元素。

在 Obsidian 中，有多种标签管理插件可以帮助用户更好地管理标签，并提高标签的使用效率。

- [[tag-wrangler]]：增强的标签管理体验，从标签面板中重命名、合并、切换和搜索标签面面俱到
- [[tag-buddy]]：简单易用的添加标签汇总、编辑工具
- [[obsidian-tagfolder]]：通过笔记中的标签，重新组织所有的笔记
- [[obsidian-frontmatter-tag-suggest]]：很好解决记忆标签和快速输入的问题，提供标签自动建议的方法，让你可以键入简单字母来快速联想出来对应的标签
- [[multi-tag]]：一次向多个笔记添加标签。右键单击文件夹，或者选择多个笔记并右键单击所选内容
- [[tag-word-cloud]]：展示你的标签/词/链接的词云图
- [[obsidian-basetag]]：这个插件在预览模式下渲染标签的缩略名称
- [[colored-tags-wrangler]]：一个简单而又强大的标签色彩样式整理器
- [[auto-tag]]：基于 AI 来为笔记生成标签

### 表格类

鉴于 Obsidian 以 Markdown 为基础，表格编辑一直以来都是用户反馈的难点。 不过，以下列出的插件，将会帮助你解决这些问题，提高你在表格编辑方面的灵活性和操作性。这些插件以其巧妙的设计和出色的功能加以解决了 Obsidian 表格体验中的许多问题，使得 Obsidian 用户能够更加轻松地编辑和管理表格，并大幅提升你使用 Obsidian 时的效率和愉悦感。

- [[obsidian-sortable]]：提供搜索 Obsidian 设置和插件设置选项的能力
- [[table-editor-obsidian]]：改进了表格导航、格式和操作
- [[obsidian-excel-to-markdown-table]]：可以将来自 Microsoft Excel、Google Sheets、Apple Numbers 和 LibreOffice Calc 的数据粘贴为 Obsidian 编辑器中的 Markdown 表格。
- [[obsidian-echarts]]：一个可以在 obsidian 里运行 echarts 的插件，具体可以参考官方示例库代码。插件需要依赖 dataview 插件
- [[table-extended]]：为表格增加合并列和行和省略表头的功能

### 白板（canvas）和脑图

- [[canvas-presentation]]：帮助你根据顺序演示白板中的卡片
- [[optimize-canvas-connections]]：优化 Canvas 中的连接线
- [[obsidian-mindmap-nextgen]]：用于将笔记预览为 Markmap 思维导图
- [[obsidian-enhancing-mindmap]]：让你在 Osidian 中绘制思维导图、大纲和 PDF 文件标注工具。包括多种模式，包括导图模式，表格模式，类白板模式。

### 绘图

在 Obsidian 中，您可以使用多种绘图工具，例如 Excalidraw 和 mermaid，来完成流程图、UML 图等专业图表的绘制，以辅助表达您的笔记内容。

- [[obsidian-excalidraw-plugin]]：在 Obsidian 中 使用 Excalidraw 绘图
	- [[Excalidraw脚本-Slideshow完美实现画板幻灯片演示的脚本]]
	- [[Excalidraw局部嵌入Obsidian]]
	- [[自定义Excalidraw脚本-画板局部或者全局播放动画]]
	- [[自定义Excalidraw脚本-实现Zotero与Excalidraw的拖拽联动]]
	- [[自定义Excalidraw脚本-建立库外Eagle素材库的连接]]
- [[mermaid-tools]]：提供一个包含常见 mermaid 语法模板的面板，并且可以自定义

### 窗口&视图模式

窗口：在日常工作和学习中，我们需要通过窗口和界面布局来提高工作效率和信息管理的质量。在 Obsidian 中，有多种插件可以帮助用户更方便地窗口和界面布局。

这些插件可以根据用户的需要进行个性化布局和设置，提高工作效率和文档管理质量，是 Obsidian 的重要辅助工具。

而也有一些插件，提供了提供的多种视图模式有关，让你更加灵活的使用不同的视图模式，比如专注模式等。

- [[obsidian-projects]]：提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求
- [[workspaces-plus]]：快速管理不同工作区不同布局对应不同工作流
- [[obsidian-view-mode-by-frontmatter]]：自定义每个笔记的视图
- [[obsidian-fullscreen-plugin]]：让笔记编辑器变为聚焦模式，或说全屏化
- [[obsidian-focus-mode]]：为 Obsidian 带来了专注模式
- [[zen]]：帮你聚焦，让你的 Obsidian 进入到禅模式
- [[editor-width-slider]]：允许你在状态栏中使用滑块来快速调整编辑器的行宽/栏宽
- [[image-window]]：允许在 Obsidian 中使用新窗口中打开图像和笔记
- [[obsidian-fullscreen-plugin]]：让笔记编辑器变为聚焦模式，或说全屏化
- [[obsidian-focus-mode]]：为 Obsidian 带来了专注模式
- [[easy-toggle-sidebars]]：通过自定义按键和手势，达成快速开关侧边栏
- [[obsidian-hide-sidebars-when-narrow]]：自动根据宽度隐藏侧边栏
- [[obsidian-auto-hide]]：可以更轻松地折叠（和展开）侧边栏
- [[easy-toggle-sidebars]]：便捷的控制侧边栏
- [[obsidian-sidebar-toggler]]：Obsidian 侧边栏的更精细的控制。用于外部窗口管理器。
- [[Tab-Switcher]]：使用 Ctrl + Tab 按最近使用的顺序切换选项卡，就像在浏览器中一样
- [[Vertical-Tabs-View]]：供垂直选项卡视图选项卡可以排序，但更改不会与原始选项卡同步

### Property&Front-matter

在 Obsidian 中，我们可以使用 frontmatter 这个元数据区域来添加笔记的一些额外信息，例如别名、标签等等。这些信息可以帮助我们更好地组织笔记和查找笔记。而且 Obsidian 还有一些插件可以帮助我们更好地管理 frontmatter，这里介绍几种常用的插件：

- [[frontmatter-alias-display]]：让你的笔记名下直接看到别名
- [[obsidian-metatable]]：美化 frontmatter 的显示样式
- [[obsidian-view-mode-by-frontmatter]]：自定义每个笔记的视图
- [[metaedit]]：帮你快捷管理 Obsidian 的元数据，可以预设 YAML 区域的值
- [[obsidian-meta-bind-plugin]]：让你的笔记具有交互性，通过各种控件修改笔记信息
- [[metadata-menu]]：图形化方便修改 YAML 值的一个工具
- [[obsidian-state-switcher]]：Yaml Manager 避免直接修改 Yaml 区字段，让 frontmatter 修改变得简单
- [[frontmatter-alias-display]]：让你在文件名下直接看到别名
- [[obsidian-metacopy]]：让你快速复制当前笔记的 Front-matter 的值。

### 自动化&效率

Obsidian 最具吸引力的特点之一，就是它拥有一个丰富的、逐渐壮大起来的插件生态圈。这些卓越的插件不仅增强了 Obsidian 的功能，而且可以在很大程度上提高你的工作和学习效率，让你从繁琐，重复的码字过程中解脱出来。相信这些插件能够帮助你更高效、便捷地管理和利用笔记，让你的学习、工作和生活更加舒适顺畅。相信下面这些插件能帮到你：

- [[templater-obsidian]]：可以替代核心模板插件的效率神器
	- [[Templater实现关键词自动化套用模板]]
- [[quickadd]]：组合 Obsidian 里所有操作，低阶使操作可视化自动化，高阶使用可编写脚本实现万物互联
- [[dataview]]：高性能的索引 md 文件，并创建复杂的查询视图，如表格，列表，任务，日历视图
	- [[Dataview语法参考库]]
	- [[Dataview基本语法|开篇-Dataview基本语法]]
	- [[Dataview语法实战|进阶-Dataview语法实战]]
	- [[Dataview社区实践经验|应用-Dataview社区实践经验]]
- [[various-complements]]：这个 Obsidian 插件让你能够自动完成完成单词，和自定义内容的输入。
- [[cmdr]]：给 Obsidian 的不同功能区增加自定义快捷按钮
- [[obsidian-completr]]：为 LaTeX, Frontmatter，callout 提供了自动补全功能，你还可以提供文件作为联想的文字。
- [[auto-note-mover]]：可以自动将笔记根据规则，移动到各自的文件夹中
- [[obsidian-auto-template-prompt]]：在创建文件时自动打开一个命令窗口让你插入模板。
- [[obs-text-wrapper]]：给选中文本加上 HTML 标签
- [[obsidian-wrap-with-shortcuts]]：给选中文本加上自定义前后缀标签
- [[obsidian-dice-roller]]：在文档任意地方生成需要随机的内容，这些随机的候选项可以你来定义
- [[obsidian-markdown-formatting-assistant-plugin]]：提供笔记编辑器中 快速输入 Markdown 语法的方式，此外还提供了一个命令行界面。该命令行界面平铺展示 OB 常用和所有命令提高工作效率。
- [[text-extractor_readme]]：：在编辑器中扩展文本快捷键，运行 shell 命令和 python 脚本
- [[obsidian-text-expander]]：在编辑器中扩展文本快捷键，运行 shell 命令和 python 脚本

### 图标类

图标和表情符号在现代通信和数字产业发展中已经成为必需的元素，它们可以使文本信息更生动、更具有表现力和个性化。在 Obsidian 中，用户可以通过安装插件来优化图标和表情符号的使用。

这些插件使得图标和表情符号的使用变得更加便捷、灵活和个性化，使文本信息传递更加生动、有趣，同时也丰富了用户心情和情感表达。

- [[obsidian-icons-plugin]]：提供插入图标符号的功能。
- [[obsidian-icon-shortcodes]]：通过键入 emoji 对应的短代码方式，快速筛选和输入。并支持自定义图标集合
- [[emoji-shortcodes]]：通过键入 emoji 对应的短代码方式，快速筛选和输入
- [[obsidian-emoji-toolbar]]：快速搜索表情符号并将其插入到您的编辑器中
- [[emoji-titler]]：为笔记标题快速增加 emoji
- [[obsidian-icon-swapper]]：替换默认内置图标集合准备的，可以批量替换，也可以针对某个单一图标进行替换
- [[emoji-magic]]：允许使用关键字搜索 emoji 表情符号，轻松添加到笔记中

### 美化

对于那些对于审美有着极高追求的你来说，这些插件将会成为你 Obsidian 学习和管理的不可或缺的个性化增强工具。虽然这些插件看似只是小小的工具，但它们却有着强大而独特的功能，能够显著提升 Obsidian UI 和设计中的个性化要素。通过本身定制化的特点和某些极具创意的功能，这些插件将使 Obsidian 更加个性化和符合你的审美标准。

- [[obsidian-banners]]：为文档页面添加头图和图标
- [[obsidian-style-settings]]：给主题，插件，css 片段提供样式设置的插件
- [[obsidian-file-color]]：让你文件管理多姿多彩
- [[obsidian-icon-folder]]：允许你添加任何自定义图标 (类型为.svg) 或从图标包中添加到您的文件夹或文件
- [[custom-state-for-task-list]]：优化你的任务样式
- [[badges]]：一个简易插件，通过内置的样式来在 Obsidian 中获得简易的徽章效果
- [[heading-level-indent]]：能根据标题级别缩进内容，用于创建视觉层次结构，使文档的结构和组织更容易理解
- [[obsidian-hider]]：自定义隐藏界面元素、信息
- [[optimize-canvas-connections]]：优化 Canvas 中的连接线
- [[obsidian-day-and-night]]：根据设定的时间自动切换浅色和深色主题
- [[obsidian-dynamic-background]]：为 Obsidian 添加动态背景
- [[obsidian-minimal-settings]]：为你 Minimal 主题提供自定义选项
- [[obsidian-chat-view-qq]]：chat-view-qq 保存 QQ 消息到 Obsidian 中

### 恢复&备份

- [[show-diff]]：在 Obsidian 文件中呈现 Git 差异
- [[obsidian-version-history-diff]]：比较同步和文件恢复插件以及当前文件的 Git 版本历史。添加一个命令来打开同步插件的版本历史。

### 文件管理/文件夹管理

善于使用优秀的 Obsidian 插件，能够提高你的笔记管理效率和科学性。下面是一些实用的插件：它们提供了增强型文件管理器、面包屑导航、文件字数展示、窗格历史记录等多种功能，让你可以更高效地组织笔记、轻松浏览笔记目录，实现科学的笔记管理。此外，这些插件还支持多种文件夹展开和统计功能，让你更方便地管理笔记。优秀的笔记管理插件，将为你带来更加便捷、高效的学习和工作体验。

 - [[file-tree-alternative]]：提供了一个全新的增强型文件管理器
 - [[quick-explorer]]：在应用标题栏和笔记标题栏增加面包屑导航功能，提供了笔记和目录快速切换的能力
 - [[novel-word-count]]：在 Obsidian 的文件资源管理器窗格中显示每个文件、文件夹和保险库的字数，以及更多其他信息。
 - [[file-order]]：允许你快速给文件夹和文件排序并添加数字编号
 - [[auto-archive]]：自动按照时间跨度归档你的笔记
 - [[obsidian-collapse-all-plugin]]：单击对应图标或者使用命令，展开或关闭文件管理器中的文件夹
 - [[pane-relief]]：每个窗格的历史记录、用于窗格移动和导航的快捷键等
 - [[recent-files-obsidian]]：显示最近打开的文件列表
 - [[obsidian-tagfolder]]：通过笔记中的标签，重新组织所有的笔记
 - [[chronology]]：按照月历模式导航，轻松了解编辑修改锅的笔记内容。
 - [[hidden-folder-obsidian]]：在文件管理器中快速隐藏文件夹
 - [[obsidian-show-file-path]]：显示正在编辑的文件所在的路径
 - [[hidden-folder-obsidian]]：快速隐藏文件夹
 - [[obsidian-trash-explorer]]：让你可以管理 Obsidian 的 .trash 文件夹（也叫软件回收站），从中恢复和删除文件
 - [[edit-history]]：保留您的笔记的自动编辑历史记录，可以查看历史记录，与之对比或恢复以前的编辑
 - [[file-explorer-markdown-titles]]：在文件资源管理器中显示笔记的第一个 markdown 标题

### 附件管理工具/图片管理

- [[attachment-management]]：可以基于一些建议规则，自动化归类你笔记中的附件内容
- [[obsidian-gallery]]：让你的笔记变成画廊
- [[obsidian-image-layouts]]：在您的笔记中添加美丽的图像布局
- [[find-unlinked-files]]：遍历整个仓库，搜索没有反向链接的文件。它将创建一个文件，其中包含指向这些未链接文件的链接列表
- [[settings-search]]：提供搜索 Obsidian 设置和插件设置选项的能力
- [[obsidian-file-link]]：可以很容易地将文件链接添加到笔记中，提供界面化的选择文件
- [[nl-fast-image-cleaner]]：快速删除笔记中图片和引用链接
- [[oz-clear-unused-images]]：清除笔记中不再使用的图像以节省空间
- [[obsidian-regex-pipeline]]：让用户用自定义的正则表达式进行格式化文本的插件，相比 Obsidian 自带的搜索替换，Regex Pipeline 利用正则表达式这个强大的文本处理技术可以执行更复杂的文本操作
- [[open-with]]：允许你通过在 Obsidian 中使用其他软件，打开笔记中常见格式文件

### 学习&语言

许多学习者选择使用笔记应用程序以替代传统的纸笔笔记方式。尤其是 Obsidian 这类高效而强大的工具，不仅提供了优秀的笔记编写和管理功能，还有许多插件可供选择，能够满足用户多样化的需求，下面这些你不容错过：

- [[obsidian-language-learner]]：事半功倍，辅助你在 Obsidian 英语学习，提供查词，生词等功能
- [[obsidian-spaced-repetition]]：利用遗忘曲线间隔重复复习笔记中的内容
- [[blindfold-obsidian]]：实现了不依赖主题，和示例库的方法，来制作答案的隐藏和展示
- [[外语书阅读工作流]]：介绍了阅读和学习工作流外，配合 Spaced Repetition Recall 插件的使用方法
- [[obsidian-markdown-furigana]]：日文学习如何增加假名
- [[japanese-word-splitter]]：添加支持日语分词

### 统计类

- [[novel-word-count]]：在 Obsidian 的文件资源管理器窗格中显示每个文件、文件夹和保险库的字数，以及更多其他信息
- [[better-word-count]]：自定义统计全库字数，文件数等统计数据
- [[file-explorer-note-count]]：增加文件数量统计功能
- [[obsidian-daily-stats]]：自动统计笔记更新修改的热力图
- [[obsidian-tracker]]：将笔记中的变化收集起来，并且提供不同预设的图形分析模板
- [[size-history]]：用一个简单图表来展示查看仓库中笔记的增长曲线
- [[typing-speed]]：在状态栏显示你的输入速度

### 标签页管理

为了让你更加高效地管理学习和工作中的海量笔记，这里向你推荐几款优秀的 Obsidian 插件，它们为 Obsidian 带来全新的标签页操作方式，提升笔记分类和定位的便捷性。这些插件不仅简单易用、操作方便，还可以让你在使用 Obsidian 时省去不必要的繁琐步骤。无论你是在寻找更高效的笔记组织方式还是提高工作效率，这些插件都会给你带来不同程度的改进和便利。

- [[obsidian-tabs]]：为 Obsidian 增加标签页功能
- [[cycle-through-panes]]：使用 `ctrl + Tab` 循环浏览你打开的 tab，就像在浏览器中浏览标签页一样
- [[close-similar-tabs]]：自动关闭重复打开的标签页，防止标签栏拥挤和冲突
- [[double-click-tab]]：双击标签标题时修改默认行为的插件，比如关闭标签
- [[obsidian-opener]]：提升打开标签页的体验

### 管理工具

- [[obsidian-plugin-groups]]：帮你轻松地分组和管理 Obsidian 第三方插件，启动关闭，加载插件
- [[quick-plugin-switcher]]：更轻松的管理插件的启用
- [[obsidian-tray]]：让 Obsidian 关闭窗口时，可以自动缩小到系统托盘
- [[obsidian-hover-editor]]：通过将悬停弹窗变成一个功能齐全的编辑器，来增强核心的“页面预览”原有的功能
- [[customizable-menu]]：右键菜单增强，可以自定义右键菜单绑定的命令，鼠标党福音
- [[bartender]]：Bartender 提供了拖拽排序文件夹功能，允许重新排列状态栏和侧边栏中的元素
- [[css-editor]]：在 Obsidian 中像笔记一样编辑 CSS 代码片段文件

### 插入预览

 - [[surfing]]：允许你在 Obsidian 的标签页中浏览任意网页
 - [[convert-url-to-iframe]]：将任何 URL 转换为网页预览插入到笔记中
 - [[simple-embeds]]：把 Twitter 和 YouTube 网页链接嵌入当前笔记中预览
 - [[search-obsidian-in-google]]：让你在谷歌搜索中搜索 Obsidian 中的笔记
 - [[obsidian-file-link]]：可以很容易地将文件链接添加到笔记中，提供界面化的选择文件

### 第三方集成和联动

- [[10-Obsidian/Obsidian社区插件/zotlit]]：最完美的 Zotero 和 Obsidian 联动插件
- [[obsidian-zotero-desktop-connector]]
- [[obsidian-custom-frames]]：让你在 Obsidian 中以 iframe 方式将 web 应用程序变成标签页
- [[obsidian-douban-plugin]]：给 Obsidian 增加和豆瓣信息同步的能力
- [[obsidian-weread-plugin]]：让 Obsidian 和你的微信阅读联动
- [[obsidian-to-anki-plugin]]：使用 AnkiConnect 来接收 Obsidian 的闪卡（Flashcards）数据
- [[open-weather]]：该插件以可配置的字符串格式返回 OpenWeather 的当前天气
- [[rss-reader]]：让你的 Obsidian 秒变 RSS 阅读器
- [[obsidian-leaflet-plugin_readme]]：在笔记中插入交互式地图，此地图基于 Leaflet.js。添加需要通过使用特定语法。
	- [[obsidian-leaflet-plugin]]：活用方法

### AI 相关

- [[obsidian-textgenerator-plugin]]：使用 OpenAI 的模型进行文本生成
- [[copilot]]：一个能像 chatGPT 网页版对话的 Obsidian AI 插件
- [[smart-connections]]：基于 OpenAI 提供的 api 查询本地库，推荐笔记链接，分析笔记相关性
- [[companion]]：以类似微软 Copilot 的交互方式，基于文本生成 AI 进行文本自动补全
- [[auto-tag]]：基于 AI 来为笔记生成标签

### 移动端

这里汇集了 Obsidian 中为移动端专门设计，或者主要功能是为了支持移动端的插件。

- [[android-nomedia]]：不让仓库图片出现在你的手机相册中
