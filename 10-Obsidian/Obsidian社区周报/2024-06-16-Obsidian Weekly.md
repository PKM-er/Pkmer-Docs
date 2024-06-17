---
uid: 20240602235333
title: Obsidian Weekly 2024-06-16：一目了然，收放自如
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-06-16：一目了然，收放自如
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240617233115
---

# Obsidian Weekly 2024-06-16：一目了然，收放自如

> [!Abstract]
> **统计时间**：2024-06-09 21:00 ~ 2024-06-16 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[Checklist Progress](https://obsidian.md/plugins?id=checklist-progress) By _acidghost_

> 通过提供子列表中已完成任务的分数/百分比，自动更新任务列表的进度。

[MIDI Logger](https://obsidian.md/plugins?id=midi-logger) By _@maybehelloworld_

> 该插件使用 Web MIDI API 来收听 MIDI 消息并将解析的按下音符插入编辑器。

![2024-06-16-0c50b7f0-4f0b-46f0-9a80-6e5ea2b1f16d.gif](https://cdn.pkmer.cn/images/2024-06-16-0c50b7f0-4f0b-46f0-9a80-6e5ea2b1f16d.gif!pkmer)

[Svelte Syntax Highlighter](https://obsidian.md/plugins?id=svelte-syntax-highlighter) By _Typhoon-Kim_

> 此插件为 Obsidian 中的 [`Svelte`](https://svelte.dev/) 代码块提供语法高亮显示。

[Pinned Notes](https://obsidian.md/plugins?id=pinned-notes) By _vasilcoin002_

> 此插件允许您将最常使用的笔记固定到功能区操作上，以便捷地访问它们。

![2024-06-16-Pasted image 20240616230626.png](https://cdn.pkmer.cn/images/2024-06-16-Pasted%20image%2020240616230626.png!pkmer)

[Prettier](https://obsidian.md/plugins?id=prettier) By _GoodbyeNJN_

> 使用 Prettier 和自定义格式选项来格式化您的笔记。
> - **功能**
> 	- 多语言支持，目前提供简体中文和英文。
> 	- 支持 Markdown 和 MDX 格式。
> 	- 格式化整个内容或仅格式化选定的内容。
> 	- 在保存文件时自动格式化内容。
> 	- 格式化嵌入的代码块。目前支持 js(x)、ts(x)、css、scss、less、html、json 和 yaml。
> 	- 可选地移除格式化列表项中的多余空格。
> 	- 可选地添加格式化后移除的尾随空格。这确保了在实时预览模式下正确渲染。
> 	- 可配置的 Prettier 格式化选项。
> 	- 支持在 frontmatter 中单独启用或禁用当前文件的格式化。如果未设置，默认启用。

[Smart Connections Visualizer](https://obsidian.md/plugins?id=smart-connections-visualizer) By _Evan Moscoso_

> 以可视化格式查看您的智能连接。此插件与智能连接工具无缝集成，提供了一种高级且交互的方式来可视化笔记之间的连接。
> - **功能**
> 	- **动态力导向图：** 将连接以力导向图的形式展示，其中节点代表笔记或其特定摘录，边则表示连接关系。
> 	- **轻松查看更多相关连接：** 节点与中心节点（当前查看的笔记）之间的距离与连接的相关性成正比。距离主节点越近，连接的相关性越高。您还可以调整链接的最小和最大宽度，以便根据相关性更好地区分这些笔记/区块。
> 	- **可调节的可视化设置：** 自定义节点大小、标签大小和文本淡入距离等，根据您的喜好定制可视化效果。
> 	- **预览笔记：** 当鼠标悬停在节点上时，可以在可视化视图中查看笔记预览。
> 	- **可定制的力：** 调整排斥力、链接力和中心力，以实现更个性化的布局。

![2024-06-16-d9d94e50-fbdc-4706-b605-0b3f6f1360c8.gif](https://cdn.pkmer.cn/images/2024-06-16-d9d94e50-fbdc-4706-b605-0b3f6f1360c8.gif!pkmer)

[Medium Importer](https://obsidian.md/plugins?id=medium-importer) By _David Zachariae_

> 将 Medium 帖子导入您的库。

[Headings in Explorer](https://obsidian.md/plugins?id=headings-in-explorer) By _Patrick Chiang_

> 在文件资源管理器中显示文档的标题，便于访问。这旨在将核心大纲插件的仅查看功能直接集成到文件资源管理器中。
> 由于依赖于一些现有的核心插件，它**只能在桌面版**的 Obsidian 上运行。

![2024-06-16-Pasted image 20240616104435.png](https://cdn.pkmer.cn/images/2024-06-16-Pasted%20image%2020240616104435.png!pkmer)

[Explorer Hider](https://obsidian.md/plugins?id=explorer-hider) By _Mara-Li_

> 隐藏一些你不想看到的文件。
> 内置以下隐藏属性：
> - Exact
> 	- 与字符串完全匹配
> - Contains
> 	- 包含字符串
> - Ends with
> 	- 以字符串（后缀）结尾
> - Starts with
> 	- 以字符串（前缀）开头
> - List
> 	- 字符串是以空格分隔的单词列表，其中一个单词完全匹配
> - Text followed by hiphen
> 	- 匹配项可以正好位于值上，也可以以值开头，紧跟连字符 （ `-` ）
> _编者按：相比另一款拥有同样功能的插件 [File Explorer++](https://obsidian.md/plugins?id=file-explorer-plus) 使用门槛更低，尤其推荐不熟悉正则但又希望设置灵活隐藏规则的用户使用。_

[Simple Prompt](https://obsidian.md/plugins?id=simple-prompt) By _David Zachariae_

> Simple Prompt 允许您使用大型语言模型在笔记中生成内容。它提供了一个简单的界面，可以根据您提供的提示生成内容、重写选择或整个笔记。
> _目前仅支持 OpenAI 模型。_

[Relative Timestamps](https://obsidian.md/plugins?id=relative-timestamps) By _Charles Young_

> 跟踪日志条目之间的时间。

![Pasted image 20240616000913.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240616000913.png!pkmer)

[AudioPen Sync](https://obsidian.md/plugins?id=audiopen-sync) By _Jonas Haefele_

> 从 AudioPen 同步笔记。

[Infostacker Note Publish](https://obsidian.md/plugins?id=infostacker) By _Taskscape LTD, Patryk Nowak, Kacper Pabianiak_

> Infostacker Note Publish 插件使用户能够将笔记发送到服务器、在 Obsidian 程序中直接编辑和删除它们。此外，它允许用户通过生成的链接与他人分享笔记。该插件支持附件，拥有链接的用户可以以 HTML 格式查看笔记及其附件。数据免费存储在开发者的服务器上，包括存储 PDF、图像等文件。每天有 100 篇发布笔记的限制。

[Substitutions](https://obsidian.md/plugins?id=substitutions) By _BambusControl_

> 自动将文本片段替换为符号或其他文本。

[Vault Name](https://obsidian.md/plugins?id=vault-name) By _@gapmiss_

> 在侧面导航文件资源管理器中显示和自定义保管库名称（标题）。

![Pasted image 20240615221144.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240615221144.png!pkmer)

#### 更新

[Note Definitions v0.11.0](https://github.com/dominiclet/obsidian-note-definitions/releases/tag/0.11.0) By _Dominic Let_

> - 添加配置分隔符语法的选项，用于定义文件。
> - 定义弹出窗口的动态大小调整。

[PDF++ v0.40.8](https://github.com/RyotaUshio/obsidian-pdf-plus/releases/tag/0.40.8) By _Ryota Ushio_

> - **新功能**
> 	- 添加了一个新的模板变量 `comment`。
> - **改进**
> 	- 在某些 Obsidian 原生算法失败的情况下，PDF++ 现在可以提取注释文本：详情请参见 [论坛上的这个错误报告](https://forum.obsidian.md/t/annotation-feature-in-obsidian-base-is-not-pulling-annotations-in-all-cases/83603)。
> 	- 如果 "Hover (+Ctrl/Cmd) on a citation link to show…" 选项（在 "Citations in PDF" 部分下）设置为 " 与其他内部链接相同 "，则不会再解析书目信息，这可能会提高 PDF 文件初次加载时的性能。
> 	- 改善了书目信息提取的性能（如果 "Hover (+Ctrl/Cmd) on a citation link to show…" 选项设置为 "PDF++'s custom bibliography popover" 或 "Google Scholar popover"，每次在查看器中加载 PDF 文件时都会进行这种提取）。
> 	- 对于 Obsidian 安装程序版本低于 1.5.8 的用户，每次打开 PDF++ 设置选项卡时都会重新显示 "Obsidian 安装程序已过时 " 的模式窗口。
> - **错误修复**
> 	- 修复了在嵌入 PDF 时 "Show outline"、"Zoom in" 和 "Zoom out" 命令无法按预期工作的问题。

[Numerals v1.5](https://github.com/gtg922r/obsidian-numerals/releases/tag/1.5.0) By _RyanC_

> 史上最大更新！包括一些最受欢迎的功能，如：
> - 使用 `@sum` 或 `@total` 汇总前几行
> - 引用笔记前置属性
> - 在块之间使用全局变量
> - 将计算结果直接插入到笔记中
> - 希腊字母自动补全
> - 自定义货币支持

![2024-06-16-Pasted image 20240616105614.png](https://cdn.pkmer.cn/images/2024-06-16-Pasted%20image%2020240616105614.png!pkmer)

[Vault Explorer v1.7.3](https://github.com/decaf-dev/obsidian-vault-explorer/releases/tag/1.7.3) By _DecafDev_

> - **特性**
> 	- 支持基于属性的创建日期和修改日期
> 	- 在插件设置更改时刷新视图
> 	- 在 Vault Explorer 视图中添加设置按钮
> 	- 添加打开视图的命令
> - **重构**
> 	- 重命名为 `createdDate`
> 	- 在字符串中使用 `includes` 而不是 `contains`
> - **修复**
> 	- 支持 `YYYY-MM-DDTHH:mm` 日期格式
> 	- 在控制台中显示警告而不是在属性 `date` 或 `datetime` 格式不受支持时崩溃
> 	- 修复按 `list` 属性过滤时的崩溃问题

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Note Toolbar v1.8.0-beta-14 (Pre-release)](https://github.com/chrisgurney/obsidian-note-toolbar/releases/tag/1.8.0-beta-14) By _Chris Gurney_

> v1.8 测试版主要是关于设置的用户体验改进，添加了拖放功能以重新排列文件夹映射和工具栏项目，对于管理大量工具栏的用户来说，这应该会非常有帮助！[阅读更多…](https://github.com/chrisgurney/obsidian-note-toolbar/discussions/86)

![338659955-735cdfa7-0706-4588-bab2-bfd4d5721c7a.gif](https://cdn.pkmer.cn/images/338659955-735cdfa7-0706-4588-bab2-bfd4d5721c7a.gif!pkmer)

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### 新插件—— [Search in Canvas](https://github.com/Quorafind/Obsidian-Search-In-Canvas) 和 [Backlink for Canvas](https://github.com/Quorafind/Obsidian-Backlink-For-Canvas) By _Boninall_

> [Search in Canvas](https://github.com/Quorafind/Obsidian-Search-In-Canvas) 允许您直接在 Canvas 中搜索文本，包括文本节点、嵌入注释和嵌入网页。
> - **特性**
> 	- 搜索画布中的所有文本，包括文本节点、**边缘文本**、文件节点、组节点以及**网页节点中的文本。**
> 	- 热键：
> 		- `Ctrl+g` 和 `Ctrl+Shift+g` 到下一个/上一个节点
> 	- 突出显示匹配的节点。

![Pasted image 20240615000506.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240615000506.png!pkmer)

> [Backlink for Canvas](https://github.com/Quorafind/Obsidian-Backlink-For-Canvas) 则可在笔记中显示来自 Canvas 的反向链接，并在图表中显示 Canvas 节点（反向链接节点）。当然，它也可以在 Markdown 笔记中显示指向 Canvas 的外部链接（您需要先启用 **显示附件**）。

![Pasted image 20240616001354.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240616001354.png!pkmer)

## 外观

[**Dynamic Color** Theme](https://github.com/rodydavis/obsidian-dynamic-color) By _Rody Davis_

> 受 [Material Design](https://material.io/) 启发的主题，根据用户当前选择的 [强调色](https://docs.obsidian.md/Reference/CSS+variables/Foundations/Colors#Accent+color) 创建 [动态颜色](https://codepen.io/Rody-Davis/pen/LYojpXB?editors=1111) 调色板。支持浅色和深色模式。

![2024-06-16-Pasted image 20240616234919.png](https://cdn.pkmer.cn/images/2024-06-16-Pasted%20image%2020240616234919.png!pkmer)

[**Creme brulee** Theme](https://github.com/anareaty/creme-brulee-obsidian-theme) By _Anareaty_

> 这个主题设计得简约而舒适，具有柔和的色彩和许多小调整。

![2024-06-16-Pasted image 20240616233840.png](https://cdn.pkmer.cn/images/2024-06-16-Pasted%20image%2020240616233840.png!pkmer)

[**Pale** Theme](https://github.com/Elhary/obsidian-Pale) By _Elhary_

> 该主题具有干净、优雅的布局，旨在提供一个令人愉悦且具有视觉吸引力的工作空间，提供浅色和深色模式。

![Pasted image 20240615001133.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240615001133.png!pkmer)

## PKM 相关知识推荐

## 其他新闻

# Obsidian Weekly 2024-0-：Clear and concise, easy to manage

> [!Abstract]
> **Statistical time**: 2024-06-09 21:00 ~ 2024-06-16 21:00
> **Statement**: This column is inspired by a series of [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) articles written and published by Ms. _Eleanor Konik_ from April 2021 to June 2023. Those interested may follow the original author's personal website [Obsidian Iceberg](https://www.eleanorkonik.com/). The section's content is sourced from the official Obsidian Discord channel and information on corresponding projects on Github or there independent websites. Descriptions may have been modified based on personal interpretation, and corrections are welcome if there are any inaccuracies. Thank you to the Obsidian team for bringing us such excellent software.

## Plugin News

### Community Plugins

#### New

[Checklist Progress](https://obsidian.md/plugins?id=checklist-progress) By _acidghost_

> Automatically update the progress in a list of tasks by providing the fraction / percentage of completed tasks in a sub-list..

[MIDI Logger](https://obsidian.md/plugins?id=midi-logger) By _@maybehelloworld_

> This is a plugin that uses the Web MIDI API to listen to MIDI messages and insert parsed pressed notes into the editor.

![2024-06-16-0c50b7f0-4f0b-46f0-9a80-6e5ea2b1f16d.gif](https://cdn.pkmer.cn/images/2024-06-16-0c50b7f0-4f0b-46f0-9a80-6e5ea2b1f16d.gif!pkmer)

[Svelte Syntax Highlighter](https://obsidian.md/plugins?id=svelte-syntax-highlighter) By _Typhoon-Kim_

> This plug-in provides syntax highlighting for the [`Svelte`](https://svelte.dev/) code block in Obsidian.

[Pinned Notes](https://obsidian.md/plugins?id=pinned-notes) By _vasilcoin002_

> This plugin allows you to pin the most often used notes on Ribbon actions to access them conveniently.

![2024-06-16-Pasted image 20240616230626.png](https://cdn.pkmer.cn/images/2024-06-16-Pasted%20image%2020240616230626.png!pkmer)

[Prettier](https://obsidian.md/plugins?id=prettier) By _GoodbyeNJN_

> Format your notes with Prettier and custom formatting options.
> - **Features**
> 	- Multi language support, currently available in Simplified Chinese and English.
> 	- Supports Markdown and MDX formats.
> 	- Format the entire content or only the selected content.
> 	- Automatically format the content when saving the file.
> 	- Format embedded code blocks. Currently supports js(x), ts(x), css, scss, less, html, json, and yaml.
> 	- Optionally remove extra spaces in formatted list items.
> 	- Optionally add trailing spaces that are removed after formatting. This ensures correct rendering in live preview mode.
> 	- Configurable Prettier formatting options.
> 	- Supports enabling or disabling formatting for the current file separately in frontmatter. Enabled by default when not set.

[Smart Connections Visualizer](https://obsidian.md/plugins?id=smart-connections-visualizer) By _Evan Moscoso_

> View your Smart Connections in a visualized format. This plugin integrates seamlessly with the Smart Connections tool, offering an advanced, interactive way to visualize connections between your notes.
> - **Features**
> 	- **Dynamic Force-Directed Graph:** Visualize connections as a force-directed graph where nodes represent notes or specific excerpts from them and edges represent connections.
> 	- **Easily view more relevant connections:** The distances between nodes and the central node (currently viewed note) are proportional to the relevance of the connections. The closer the distance to the main node, the more relevant the connection is. You can also adjust min and mx width of links to better distinguish these notes/blocks based on relevance.
> 	- **Adjustable Visualization Settings:** Customize node size, label size, and text fade distance and more to tailor the visualization to your preferences.
> 	- **Previewing Notes:** Ability to see note previews in the visualization view when hovering over a node.
> 	- **Customizable Forces:** Adjust the repel force, link force, and center force for a more personalized layout.

![2024-06-16-d9d94e50-fbdc-4706-b605-0b3f6f1360c8.gif](https://cdn.pkmer.cn/images/2024-06-16-d9d94e50-fbdc-4706-b605-0b3f6f1360c8.gif!pkmer)

[Medium Importer](https://obsidian.md/plugins?id=medium-importer) By _David Zachariae_

> Import Medium posts into your vault.

[Headings in Explorer](https://obsidian.md/plugins?id=headings-in-explorer) By _Patrick Chiang_

> Displays headings under documents in the file explorer for easier access. This is intended to combine the view-only features of the core outline plugin directly into the file explorer.
> Since it relies on some existing core plugins, it will **only work on desktop** versions of Obsidian.

![2024-06-16-Pasted image 20240616104435.png](https://cdn.pkmer.cn/images/2024-06-16-Pasted%20image%2020240616104435.png!pkmer)

[Explorer Hider](https://obsidian.md/plugins?id=explorer-hider) By _Mara-Li_

> Hiding some files you don't want to see.
> Includes the following hidden attributes:
> - Exact
> 	- Exact match with the string
> - Contains|
> 	- Contains the string
> - Ends with
> 	- Ends with the string (suffixe)
> - Starts with
> 	- Starts with (prefix)
> - List
> 	- String is a whitespace separated list of words, one of which match exactly
> - Text followed by hiphen
> 	- The match can be on exactly the value or can begin with value immediately followed by a hyphen (`-`)
> _Editor's Note: Compared to another plugin with the same functionality, [File Explorer++](https://obsidian.md/plugins?id=file-explorer-plus), this one has a lower usage threshold. It is especially recommended for users who are not familiar with regex but still wish to set flexible hiding rules._

[Simple Prompt](https://obsidian.md/plugins?id=simple-prompt) By _David Zachariae_

> Simple Prompt allows you generate content in your notes using Large Language Models. It provides a simple interface to generate content, rewrite selection or whole notes based on a prompt you provide.
> _Currently, only OpenAI models are supported_

[Relative Timestamps](https://obsidian.md/plugins?id=relative-timestamps) By _Charles Young_

> Track the time between log entries.

![Pasted image 20240616000913.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240616000913.png!pkmer)

[AudioPen Sync](https://obsidian.md/plugins?id=audiopen-sync) By _Jonas Haefele_

> Sync notes from AudioPen.

[Infostacker Note Publish](https://obsidian.md/plugins?id=infostacker) By _Taskscape LTD, Patryk Nowak, Kacper Pabianiak_

> The Infostacker Note Publish plugin enables users to send notes to a server, edit them, and delete them directly within the Obsidian program. Additionally, it allows users to share notes with others via a generated link. The plugin supports attachments, and users with the link can view the note along with its attachments in HTML format. The data is stored on developers' server for free, including storing files like pdfs, images etc. There is a daily limit of 100 published notes.

[Substitutions](https://obsidian.md/plugins?id=substitutions) By _BambusControl_

> Automatically substitute text fragments with symbols or different text.

[Vault Name](https://obsidian.md/plugins?id=vault-name) By _@gapmiss_

> Display and customize the vault name (title) in the side navigation file explorer.

![Pasted image 20240615221144.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240615221144.png!pkmer)

#### Updates

[Note Definitions v0.11.0](https://github.com/dominiclet/obsidian-note-definitions/releases/tag/0.11.0) By _Dominic Let_

> - Add option to configure divider syntax for definition file
> - Dynamic sizing for definition popover

[PDF++ v0.40.8](https://github.com/RyotaUshio/obsidian-pdf-plus/releases/tag/0.40.8) By _Ryota Ushio_

> - **New feature**
> 	- Added a new template variable `comment`.
> - **Improvement**
> 	- PDF++ can now extract annotated text in some cases where Obsidian's native algorithm fails: see [this bug report on the forum](https://forum.obsidian.md/t/annotation-feature-in-obsidian-base-is-not-pulling-annotations-in-all-cases/83603) for the details.
> 	- If the "Hover(+Ctrl/Cmd) on a citation link to show…" option (under the "Citations in PDF" section) is set to "Same as other internal links", bibliography information will no longer be parsed, which might improve performance while the initial loading of a PDF file.
> 	- Improved the performance of bibliography information extraction (this happens every time a PDF file is loaded in the viewer if the "Hover(+Ctrl/Cmd) on a citation link to show…" option is set to "PDF++'s custom bibliography popover" or "Google Scholar popover").
> 	- For those with an older version of the Obsidian installer than 1.5.8, the "Outdated Obsidian installer" modal will be redisplayed every time the PDF++ setting tab is opened.
> - **Bugfix**
> 	- Fixed the "Show outline", "Zoom in" & "Zoom out" commands not working as expected in the case of PDF embeds.

[Numerals v1.5](https://github.com/gtg922r/obsidian-numerals/releases/tag/1.5.0) By _RyanC_

> Biggest Update Yet! Some of the most requested features including the ability to:
> - Sum previous lines with `@sum` or `@total`
> - Reference note frontmatter properties
> - Use global variables between blocks
> - Insert calculation results directly into your notes
> - Greek letter auto-completion
> - Custom currency support

![2024-06-16-Pasted image 20240616105614.png](https://cdn.pkmer.cn/images/2024-06-16-Pasted%20image%2020240616105614.png!pkmer)

[Vault Explorer v1.7.3](https://github.com/decaf-dev/obsidian-vault-explorer/releases/tag/1.7.3) By _DecafDev_

> - **Feature**
> 	- support property based creation date and modified date
> 	- refresh view when a plugin setting is changed
> 	- add settings button to Vault Explorer View
> 	- add command to open view
> - **Refactor**
> 	- rename to `createdDate`
> 	- use `includes` instead of `contains` on strings
> - **Fix**
> 	- support `YYYY-MM-DDTHH:mm` date format
> 	- show warning in console instead of crashing when property `date` or `datetime` format is unsupported
> 	- fix crash when filtering by `list` property

### Pending

> [!Caution]
> **Notice**: The following plugins have not yet passed code scrutiny and therefore have not been added to the _Community Plugins_. Before installing, please make sure you have fully understood and accepted the potential security risks involved.

[Note Toolbar v1.8.0-beta-14 (Pre-release)](https://github.com/chrisgurney/obsidian-note-toolbar/releases/tag/1.8.0-beta-14) By _Chris Gurney_

> The v1.8 BETA is primarily about settings quality-of-life improvements, adding drag and drop to reorder folder mappings and toolbar items, which should be helpful for those of you managing a lot of toolbars! [Read more…](https://github.com/chrisgurney/obsidian-note-toolbar/discussions/86)

![338659955-735cdfa7-0706-4588-bab2-bfd4d5721c7a.gif](https://cdn.pkmer.cn/images/338659955-735cdfa7-0706-4588-bab2-bfd4d5721c7a.gif!pkmer)

### Produced by PKMer

> [!INFO]
> **PKMer** ([PKMer.cn](https://pkmer.cn/), [PKMer.net](https://pkmer.net/)) aims to create a powerful knowledge management community in the Eastern Hemisphere. "PKM" stands for Personal Knowledge Management, and the "er" suffix represents individuals. Anyone who is focused on and enjoys personal knowledge management work, and who seeks efficiency, can be included in this category. We hope the community can bring together more people like this.

#### New Plugin - [Search in Canvas](https://github.com/Quorafind/Obsidian-Search-In-Canvas) and [Backlink for Canvas](https://github.com/Quorafind/Obsidian-Backlink-For-Canvas) By _Boninall_

> [Search in Canvas](https://github.com/Quorafind/Obsidian-Search-In-Canvas) allows you to search for text directly in Canvas, including text nodes, embedded notes, and embedded web pages.
> - **Features**
> 	- Search all text in canvas, including text node, **text in edges**, file node, group node and also **text in web page node.**
> 	- Hotkey:
> 		- `Ctrl+g` and `Ctrl+Shift+g` to next/prev node
> 	- Highlight matched nodes.

![Pasted image 20240615000506.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240615000506.png!pkmer)

> [Backlink for Canvas](https://github.com/Quorafind/Obsidian-Backlink-For-Canvas) displays backlinks from Canvas in the notes, and shows Canvas nodes in the graph (backlink nodes). Of course, it can also display outgoing links to Canvas in the markdown notes (You need to enable **Show attachment** first).

![Pasted image 20240616001354.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240616001354.png!pkmer)

## Appearance

[**Dynamic Color** Theme](https://github.com/rodydavis/obsidian-dynamic-color) By _Rody Davis_

![2024-06-16-Pasted image 20240616234919.png](https://cdn.pkmer.cn/images/2024-06-16-Pasted%20image%2020240616234919.png!pkmer)

> [Material Design](https://material.io/) inspired theme that creates [dynamic color](https://codepen.io/Rody-Davis/pen/LYojpXB?editors=1111) palettes based on the current user selected [accent color](https://docs.obsidian.md/Reference/CSS+variables/Foundations/Colors#Accent+color). Supports light and dark mode.

[**Creme brulee** Theme](https://github.com/anareaty/creme-brulee-obsidian-theme) By _Anareaty_

![2024-06-16-Pasted image 20240616233840.png](https://cdn.pkmer.cn/images/2024-06-16-Pasted%20image%2020240616233840.png!pkmer)

> This theme was designed to look minimalistic, but cozy, with soft colors and many little adjustments.

[**Pale** Theme](https://github.com/Elhary/obsidian-Pale) By _Elhary_

![Pasted image 20240615001133.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240615001133.png!pkmer)

> This theme features a clean, elegant layout designed to provide a pleasant and visually appealing workspace, offering both light and dark modes.