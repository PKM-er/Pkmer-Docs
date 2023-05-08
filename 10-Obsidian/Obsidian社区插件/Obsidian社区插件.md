---
uid: 20230329145808
title: Obsidian 社区插件
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230508180221
public: yes
---

# Obsidian 社区插件

Obsidian 允许其他开发者编写第三方插件来扩展 Obsidian 的功能。

你可以把这点理解清楚 Chrome 或者 Edge 浏览器一样的扩展。

## 用户相关

### 安全模式

默认情况下，Obsidian 将打开安全模式，以保护用户免受潜在的伤害。在安全模式下，Obsidian 不会运行任何第三方插件。

请注意，第三方插件可以访问你电脑上的文件，连接互联网，甚至安装额外的程序。了解更多关于插件安全性的信息，请阅读 [[#插件安全性|此部分]]。

为了安装第三方插件，你需要在 `设置` -> `第三方插件` -> `安全模式` 中关闭安全模式。

### 浏览与安装第三方插件

禁用安全模式后，你可以在 `设置` -> `第三方插件` -> `社区插件` -> `浏览` 中打开第三方插件列表页面，从而找到由社区成员开发的第三方插件。

在这个页面上，插件是按照流行度来排列的，你可以轻松地看到最流行的插件。当然，你也可以通过搜索来寻找特定的插件。找到你感兴趣的插件后，点击插件就可以查看插件的详细信息。在详细信息页面，你可以点击 `安装` 按钮来安装插件。

插件安装后，你可以在 `设置` -> `第三方插件` 下找到已安装的插件。插件需要启用才能生效。当然，你也可以在那里卸载它们。

### 插件安全性

Obsidian 非常重视你的数据安全，这使得我们非常重视安全问题，第三方插件的安全性也包括在内。

由于框架的技术原因，我们无法限制插件的权限或访问级别。同时，由于 Obsidian 是一个免费软件，目前我们仍没有精力人工审查每个插件。

值得庆幸的是，Obsidian 拥有一个氛围良好的社区，因此我们可以依靠社区信任来确保第三方插件的安全性。

一般来说，你可以信任在社区中流行的大多数插件。为了进一步确保插件的安全性，我们要求所有社区插件在 GitHub 上开源。**但是，如果你正在处理重要的数据，我们仍建议你在安装插件前检查插件代码，从而更好地保证数据安全。**你可以在插件的详细信息页面找到插件的 Github 仓库地址。

如果你发现第三方插件有安全漏洞，你可以通过在 GitHub 上添加问题来告知插件作者。如果你认为某个插件是恶意的，请联系我们，让我们调查并删除这个插件。

## 插件列表

### 功能增强

- [[calendar]]：添加一个简单的日历视图，用于可视化日记和在不同日记间跳转。

### 编辑增强

- [[editing-toolbar]]：添加一个浮动编辑栏，增强 Obsidian 的可视化编辑体验。
- [[floating-toc]]：在文档左侧生成一个悬浮的目录。
- [[lapel]]：在标题旁边显示标题等级，并提供快捷切换标题等级的能力
- [[easy-typing-obsidian]]：包含编辑时自动格式化文本和符号编辑增强。自动格式化文本对文档的格式进行规范化，并且美化文档的观感，强优化用户的编辑体验。
- [[cm-editor-syntax-highlight-obsidian]]：允许在 Obsidian 的代码块中针对编程语言显示预设的高亮配色方案
- [[obsidian-comments]]：为笔记增加批注或评论。
- [[code-block-copy]]：在阅读模式中，为代码块右上角添加一个复制按钮，点击后自动复制代码块内容到剪贴板。
- [[cmenu-plugin]]：提供一个 mini 工具栏，以获得更流畅的写作/编辑体验✍🏽。
- [[creases]]：给 Obsidian 的标题增加折叠和展开的功能。
- [[lapel]]：在标题旁边显示标题等级
- [[highlightr-plugin]]：将小而美的高亮菜单添加到了 Obsidian 中，通过所见即所得的方式，为笔记内容中文本增加高亮颜色。
- [[obsidian-latex-suite]]：通过片段、文本扩展和编辑器增强功能，使排版 LaTeX 数学与手写一样快
- [[obsidian-dynamic-highlights]]
- [[multi-column-markdown]]：在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档
- [[remember-cursor-position]]：记住每个文件光标和滚动位置
- [[cm-typewriter-scroll-obsidian]]：打字机风格的滚动，使视图保持在编辑器的中心
- [[number-headings-obsidian]]：给笔记中的标题自动编号，以及动态目录。

### 目录类

- [[obsidian-dynamic-toc]]：帮助你在笔记中生成对应的目录
- [[obsidian-plugin-toc]]：帮助你在笔记中生成对应的目录
- [[floating-toc]]：在笔记一侧生成悬浮目录，效果近似你在其他在线文档中看到的
- [[obsidian-quiet-outline]]：增强大纲插件，按需自动展开大纲

### 日期&提醒&任务类

- [[calendar]]：为 Obsidian 添加一个简单日历功能
- [[obsidian-reminder-plugin]]：为 Markdown 中的待办事项，添加提醒管理。
- [[nldates-obsidian]]：使用自然语言插入时间戳，并链接对应笔记中
- [[obsidian-tasks-plugin]]
- [[progressbar]]：主要作用是将 progressbar 格式的代码块渲染为基于时间或手动的进度条
- [[obsidian-task-progress-bar]]
- [[obsidian-kanban]]：在 Obsidian 制作看板，可以连接你的笔记
- [[obsidian-day-planner]]：用于从 Markdown 笔记中的任务列表中规划和管理番茄钟计时器
- [[obsidian-projects]]：提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求

### 链接类

- [[supercharged-links-obsidian]]：可帮助您根据笔记元数据（例如标签或 YAML 前言属性）设置保管库中链接的样式。可以自动向链接添加颜色、表情符号或其他样式，使其更醒目的进行导航。
- [[obsidian-auto-link-title]]：自动在粘贴时，提取网页链接标题，创建一个 Markdown 链接形式与正确的标题
- [[url-into-selection]]：使用常规 Ctrl/Cmd+V 将链接（URL）插入到选定的文本中。也可以反过来，通过命令面板/快捷键将文本插入到选定的链接（URL）中
- [[external-favicon]]：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标
- [[link-favicon]]：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标
- [[obsidian-rich-links]]：为你笔记中的链接，增加美化样式
- [[obsidian-link-embed]]：帮你将网页 URL 转换为嵌入预览卡片样式
- [[auto-card-link]]：根据你设定的规则动态高亮显示文本

### 标签类

- [[tag-wrangler]]：增强的标签管理体验，从标签面板中重命名、合并、切换和搜索标签面面俱到
- [[obsidian-tagfolder]]：通过笔记中的标签，重新组织所有的笔记

### 表格类

- [[obsidian-sortable]]：提供搜索 Obsidian 设置和插件设置选项的能力
- [[table-editor-obsidian]]：改进了表格导航、格式和操作
- [[obsidian-excel-to-markdown-table]]：可以将来自 Microsoft Excel、Google Sheets、Apple Numbers 和 LibreOffice Calc 的数据粘贴为 Obsidian 编辑器中的 Markdown 表格。

### 自动化&效率

- [[obsidian-pangu]]：提供了一个全新的增强型文件管理器
- [[cmdr]]：给 Obsidian 的不同功能区增加自定义快捷按钮
- [[QuickAdd]]
- [[weather-fetcher]]：来获取和插入当前的天气到笔记编辑器的插件

### 图标类

- [[obsidian-icons-plugin]]：提供插入图标符号的功能。
- [[obsidian-icon-shortcodes]]：通过键入 emoji 对应的段代码方式，快速筛选和输入。并支持自定义图标集合
- [[obsidian-emoji-toolbar]]：快速搜索表情符号并将其插入到您的编辑器中
- [[obsidian-icon-swapper]]：替换默认内置图标集合准备的，可以批量替换，也可以针对某个单一图标进行替换

### 统计类

- [[novel-word-count]]：在 Obsidian 的文件资源管理器窗格中显示每个文件、文件夹和保险库的字数，以及更多其他信息
- [[better-word-count]]：

### 美化

- [[Obsidian-Banners]]：为文档页面添加头图和图标
- [[heading-level-indent]]：能根据标题级别缩进内容，用于创建视觉层次结构，使文档的结构和组织更容易理解
- [[obsidian-hider]]：自定义隐藏界面元素、信息
- [[obsidian-style-settings]]：给主题，插件，css 片段提供样式设置的插件
- [[obsidian-icon-folder]]：允许你添加任何自定义图标 (类型为.svg) 或从图标包中添加到您的文件夹或文件

### 文件管理类

 - [[file-tree-alternative]]：提供了一个全新的增强型文件管理器。
 - [[quick-explorer]]：在应用标题栏和笔记标题栏增加面包屑导航功能，提供了笔记和目录快速切换的能力
 - [[novel-word-count]]：在 Obsidian 的文件资源管理器窗格中显示每个文件、文件夹和保险库的字数，以及更多其他信息。
 - [[obsidian-collapse-all-plugin]]：单击对应图标或者使用命令，展开或关闭文件管理器中的文件夹
 - [[pane-relief]]：每个窗格的历史记录、用于窗格移动和导航的快捷键等
 - [[recent-files-obsidian]]：显示最近打开的文件列表

### 工具

- [[find-unlinked-files]]：遍历整个仓库，搜索没有反向链接的文件。它将创建一个文件，其中包含指向这些未链接文件的链接列表
- [[settings-search]]：提供搜索 Obsidian 设置和插件设置选项的能力
- [[obsidian-tabs]]：为 Obsidian 增加标签页功能

### 插入预览 和 第三方集成

 - [[obsidian-custom-frames]]：让你在 Obsidian 中以 iframe 方式将 web 应用程序变成标签页
 - [[surfing]]
 - [[convert-url-to-iframe]]：将任何 URL 转换为网页预览插入到笔记中
 - [[simple-embeds]]：把 Twitter 和 YouTube 网页链接嵌入当前笔记中预览
 - [[mx-bili-plugin]]
 - [[media-extended]]

## AI 相关

[[obsidian-textgenerator-plugin]]：使用 OpenAI 的模型进行文本生成
