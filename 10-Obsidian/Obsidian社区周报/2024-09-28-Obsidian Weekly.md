---
uid: 20240930134836
title: Obsidian Weekly 2024-09-28：可以直接在 Ob 中查看 Xmind 、各种乐谱以及自由缩放图表啦！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-09-28：可以直接在 Ob 中查看 Xmind 、各种乐谱以及自由缩放图表啦！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240930134902
---

# Obsidian Weekly 2024-09-28：可以直接在 Ob 中查看 Xmind 、各种乐谱以及自由缩放图表啦

> [!Abstract]
> **统计时间**：2024-09-21 21:00 ~ 2024-09-28 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### 官方浏览器剪藏插件已更新至 [v0.8.1](https://github.com/obsidianmd/obsidian-clipper/releases/tag/0.8.1)

#### 新增

- 添加了 `{{site}}` 变量以获取网站名称或发布者。
- 添加了变量列表面板的搜索功能，可以通过点击 `…` 访问。
- 添加了 `selectorHtml:` 前缀的变量。它的工作方式与 `selector:` 相同，但提取 HTML 而非文本内容，适用于使用 `remove_html`、`strip_tags`、`strip_attr` 和 `markdown` 过滤器处理内容。
- 为 Chromium 浏览器增加了侧边面板模式，使您更方便地处理页面上的活跃内容。可以通过页面中的上下文菜单或工具栏图标打开。
	- ![Weekly-2024-09-28-Pasted image 20240930133311|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-Pasted%20image%2020240930133311.png!pkmer)
- 增加了“遗留模式”设置，以便在支持的浏览器和操作系统上使用 Obsidian URI 复制内容。
- 支持 macOS、iOS 和 iPadOS 上的 Safari — 注意这是第一个版本，仍需优化。

#### 改进

- 更好地支持将表格转换为 Markdown。
- 改进了预设变量的准确性，包括 `author`、`image`、`title`、`description`、`published`。
- 在某些浏览器上更可靠的弹出窗口大小。
- 如果 Readability 失败，则更优雅的回退。
- 修复了在 Firefox 中打开上下文菜单的问题。
- 修复了模板中未保存路径的问题。
- 修复了锚链接剥离意外删除某些标题的问题。
- `{{author}}` 变量现在如果有多个作者将返回以逗号分隔的列表。请注意，这意味着默认模板更新为 `{{author|split:", "|wikilink|join}}`，如果您想对作者进行 wikilink。
- 改进了 Markdown 表格的转换，并在表格包含合并单元格时回退到 HTML 表格。
- 改进了 `lower`、`upper` 和 `titlecase` 在不同语言和数组中的处理。
- 改进了脚注引用的处理。
- 不再覆盖 `date` 和 `datetime` 属性中的 `date` 过滤器。
- `srcset` 属性中的相对 URL 现在被正确重写。
- `title` 过滤器在处理数组和对象时效果更佳。
- 各种性能改进。
- 修复了 `selector` 变量未检测属性的问题 — 语法现已更改为使用 `?` 而非 `:`，以避免与伪类（如 `:first-child`）冲突。您现在应该使用 `{{selector:cssSelector?attribute}}`，例如：`{{selector:img?src}}`。

## 插件新闻

### 社区插件

#### 新增

[Mermaid Popup](https://obsidian.md/plugins?id=mermaid-popup) By _ChenPengyuan_

> 在可拖动和可缩放的弹出窗口中显示来自 mermaid、plantuml、graphviz 等的图表。

![Weekly-2024-09-28-mermaid-popup-demo|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-mermaid-popup-demo.gif)

[Custom Node Size](https://obsidian.md/plugins?id=custom-node-size) By jackvonhouse

> 自定义节点大小，以增强图表的可理解性。

![Weekly-2024-09-28-Pasted image 20240930130601|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-Pasted%20image%2020240930130601.png!pkmer)

[Minimize on Close](https://obsidian.md/plugins?id=minimize-on-close) By _Andrea Alberti_

> 关闭所有打开的窗格时自动最小化 Obsidian 窗口到停靠栏或任务栏，与 macOS 应用程序行为一致。

[Hierarchy](https://obsidian.md/plugins?id=hierarchy) By _Kodai Nakamura_

> 可视化链接的层次结构。该插件允许用户查看子目录结构并根据文件路径修改文件标题在选项卡和反向链接中的显示方式。

![Weekly-2024-09-28-Pasted image 20240930004216|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-Pasted%20image%2020240930004216.png!pkmer)

[Editing Mode Hotkey](https://obsidian.md/plugins?id=editing-mode-hotkey) By _Signynt_

> 添加命令和热键来切换默认编辑模式（实时预览和源代码之间）

[Magic Mic](https://obsidian.md/plugins?id=magic-mic) By _Drew McDonald_

> 使用自定义助手将音频直接录制、转录和汇总到您的库中。

[Colorizelt](https://obsidian.md/plugins?id=colorizelt) By _Artsem Holub (WiNE-iNEFF)_

> 轻松为选定文本添加颜色或清除颜色。
> 通过简单的键盘快捷键添加任何可用颜色（您可以在 Obsidian 设置中更改键盘快捷键），或使用命令面板。

![Weekly-2024-09-28-Pasted image 20240930003706|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-Pasted%20image%2020240930003706.png!pkmer)

[Auto Strikethrough Tasks](https://obsidian.md/plugins?id=auto-strikethrough-task) By _Nomekuma_

> 自动为已完成的任务添加删除线。

[XMind Viewer](https://obsidian.md/plugins?id=xmind-viewer) By _Sentiago_

> 集成查看您的 XMind 文件。该插件处理打开 .xmind 扩展名的文件，并为该文件创建一个新的 XMind 查看器。 **请注意，该插件需要连网才能正常运行。**

[Figma Embed](https://obsidian.md/plugins?id=figma-embed) By _Kyle Kochanek_

> 将 Figma 文件嵌入为内联预览。

[Diagram Zoom Drag](https://obsidian.md/plugins?id=diagram-zoom-drag) By _ChenPengyuan_

> 为 Mermaid、Plantuml、Graphviz、Gravizo 等图表添加缩放和拖动功能。

![Weekly-2024-09-28-1d291336-2784-4d7f-9f44-22ef4f399fc9|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-1d291336-2784-4d7f-9f44-22ef4f399fc9.gif)

[Remove HTML Tag](https://obsidian.md/plugins?id=remove-html-tag) By _ChenPengyuan_

> 从 Markdown 文件中删除 HTML 标签。

[Collapse Linked Mentions](https://obsidian.md/plugins?id=collapse-linked-mentions) By _Nathan K._

> 自动折叠嵌入的反向链接提及。

[Remove Unused Block IDs](https://obsidian.md/plugins?id=remove-unused-block-ids) By _Daniel Geneta_

> 删除库中未使用的块 ID。
> - **局限性**
> 	- 如果一个块 ID 在画布卡片中被引用而没有在其他地方使用，它将被添加到未使用块 ID 列表中。
> 	- 如果一个页面有重复的块 ID，插件将无法正常工作。（它将无法区分哪些块被使用或未被使用）。

[Symlink Creator](https://obsidian.md/plugins?id=symlink-creator) By _Tobias Heidler_

> 创建指向 Vault 内部和外部的文件和文件夹的符号链接。
> 该插件仅适用于桌面模式，因此**不支持移动用户**！

[Guitar Chord](https://obsidian.md/plugins?id=guitar-chord) By _Barba828_

> 快速输入并显示吉他和弦，以及基于乐理的可选和弦。无需编写代码块，可以直接在文档中插入和编辑。

![Weekly-2024-09-28-Pasted image 20240930001251|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-Pasted%20image%2020240930001251.png!pkmer)

[Code Language Completer](https://obsidian.md/plugins?id=code-language-completer) By _Stanley Wang_

> 根据历史记录自动建议并完成代码块语言选项。

![Weekly-2024-09-28-370465080-81089651-ca9f-4d69-a709-5fb1fa4729df|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-370465080-81089651-ca9f-4d69-a709-5fb1fa4729df.gif)

[AutoPause](https://obsidian.md/plugins?id=auto-pause) By _Chris Kephart_

> 允许一次播放一个音轨，暂停或停止任何其他音轨。

[Alignment Tracker](https://obsidian.md/plugins?id=alignment-tracker) By _LittleOwl_

> 使用 3x3 网格跟踪字符对齐方式。

[Pintora](https://obsidian.md/plugins?id=pintora) By _Amias Lee_

> 使用 Pintora 生成图表。

![Weekly-2024-09-28-diagram-creation|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-diagram-creation.gif!pkmer)


[Rich Foot](https://obsidian.md/plugins?id=rich-foot) By _Justin Parker_

> 将反向链接标签和创建/修改日期添加到笔记的页脚。

![Weekly-2024-09-28-Pasted image 20240930000121|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-Pasted%20image%2020240930000121.png!pkmer)

[Pexels Banner](https://obsidian.md/plugins?id=pexels-banner) By _Justin Parker_

> 将 Pexels 中的图像作为横幅应用到您的笔记中。

![Weekly-2024-09-28-Pasted image 20240929235741|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-Pasted%20image%2020240929235741.png!pkmer)

[Epiphany](https://obsidian.md/plugins?id=epiphany) By _Epiphany_

> 将语音笔记从 Epiphany 应用直接同步到您的库。

[Poker Range](https://obsidian.md/plugins?id=poker-range) By _marplek_

> 在笔记中轻松创建、查看扑克手牌范围并与之交互。

![Weekly-2024-09-28-poker-range-grid|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-poker-range-grid.gif!pkmer)

[Spaced everything](https://obsidian.md/plugins?id=spaced-everything) By _Zach Mueller_

> 将间隔重复算法应用于库中的所有内容。
> 借鉴 Andy Matuschak 的 [笔记](https://notes.andymatuschak.org/About_these_notes?stackedNotes=zVFGpprS64TzmKGNzGxq9FiCDnAnCPwRU5T&stackedNotes=z5aJUJcSbxuQxzHr2YvaY4cX5TuvLQT7r27Dz&stackedNotes=z8aZybuJJopS5fL7TnPou2JcmCsBUJeqirbBh&stackedNotes=zJ5Yzvba2729XKXivBBZ91J&stackedNotes=zB92WZZ5baBHKZPPbWMbYEv&stackedNotes=zHwr5v9VJGX3MzHyzz4V8wt&stackedNotes=zDXBGEWk7msyonQ2Ngnrf8h&stackedNotes=zSK4LyrCbG9zDrdCWmcovUW&stackedNotes=z4KxfCZPkVEf2R8nayLJZBG) 中概述的这种实践，该插件将间隔重复的主要概念应用于写作。即，在进行间隔写作练习（SWP）时，使用 SuperMemo-2.0 算法来决定下一个需要复习的笔记。

[Enhanced Image](https://obsidian.md/plugins?id=enhanced-image) By _situ2001_

> 无缝增强图像体验。例如，上下文菜单中的图像操作、命令面板。

[Verovio Music Renderer](https://obsidian.md/plugins?id=verovio-music-renderer) By _Kornelius Paede_

> 这是一个针对 [Obsidian](https://obsidian.md/) 的插件，使用 [Verovio](https://www.verovio.org/) ——一个轻量级的开源库，用于将音乐编码倡议（MEI）音乐乐谱（以及 ABC 和 MusicXML 文件）刻录为 SVG。通过这个插件，您可以在 Obsidian 中无缝呈现乐谱，提高处理乐谱时的效率。

![Weekly-2024-09-28-Verovio-Plugin|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-Verovio-Plugin.gif)

#### 更新

[Vertical Tabs v0.6.11](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.6.11) By _oxdc_

> - **选项卡的拖放功能：** 选项卡的拖放功能现在始终启用，使工作区管理更轻松。
> - **中键点击改进：** 中键滚动不再意外触发。单击中键现在在所有情况下都能可靠地关闭选项卡。
> - **垂直选项卡的可用性：** 垂直选项卡不能再被拖动到主分区中，以防止其被隐藏。
> - **清晰的文件路径：** 对于同名文件，现在显示完整的文件路径以帮助区分它们。
> - **组管理：** 添加了一个新按钮，可以快速折叠或展开除侧边栏之外的所有组，以便更好地组织。

[List Modified v3.1.0-alpha](https://github.com/franciskafieh/obsidian-list-modified/releases/tag/3.1.0-alpha) By _francoiss_

> - 更改：
> 	- 现在您可以在输出格式中使用前置字段属性作为模板/占位符值！
> 	- 现在每个列表（创建/修改/删除）可以有不同的输出格式
> 	- 删除的输出格式现在可自定义
> 	- 有关更多详情，请参阅 [输出格式](https://github.com/franciskafieh/obsidian-list-modified/wiki/Output-Format) 维基。

[Tasks v7.10.2](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.10.2) By _ClareMacrae_

> - **修复**
> 	- 修复：使“按功能过滤”在错误消息中显示语句
> 	- 修复：推迟菜单项时在当前选定日期上打勾
> 	- 修复：推迟到当前日期时保持推迟按钮处于活动状态
> 	- 修复：在模态中保留手动添加的完成和取消日期
> 	- 修复：编辑任务模态现在保留对取消日期的编辑
> 	- 修复：提高“按状态分组”和“按状态排序”的实用性
> - **依赖**
> 	- 任务（开发依赖）：将 builtin-modules 从 3.3.0 升级到 4.0.0 [已还原]
> 	- 构建（依赖）：将 requirejs 从 2.3.6 升级到 2.3.7
> 	- 任务（开发依赖）：将 ts-jest 从 29.1.1 升级到 29.2.5
> 	- 任务（开发依赖）：将 @testing-library/jest-dom 从 6.1.6 升级到 6.5.0

[Diarian v1.2.8](https://github.com/Erallie/diarian/releases/tag/1.2.8) By _Erika Gozar_

> - 添加了一个 [日期格式转换器](https://github.com/Erallie/diarian?tab=readme-ov-file#date-format-converter)
> - 在 `import-journal.ts` 中添加了必要的 `await`
> - 在转换过程结束时，移动端添加了提示，提醒用户重新打开他们的资料库。

[Epub Importer v0.4.2-beta.1](https://github.com/aoout/obsidian-epub-importer/releases/tag/0.4.2-beta.1) By _aoout_

> 用户在解析 epub 到 markdown 时可以添加一些正则表达式来替换相应的内容。

![Weekly-2024-09-28-Pasted image 20240929235127|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-Pasted%20image%2020240929235127.png!pkmer)

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Interactive Progress Bar](https://github.com/mathe00/obsidian-progress-bar-plugin) By _Mat_

> 在笔记中添加交互式进度条，非常适合跟踪目标、习惯或在库中创建仪表板。

![Weekly-2024-09-28-Pasted image 20240929235455|650](https://cdn.pkmer.cn/images/Weekly-2024-09-28-Pasted%20image%2020240929235455.png!pkmer)

[Better Auto Linker](https://github.com/mathe00/obsidian-better-auto-linker-plugin) By _Mat_

> 该插件会扫描您的笔记，检测 Markdown 文件之间的潜在链接，并建议链接插入以提高笔记的互连性。非常适合使用 **第二大脑** 或 **Zettelkasten** 方法的任何人。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Thino 已更新至 [v2.4.56](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.4.56)

- **修复**
	- 路径过滤器无法正确清除
- **样式**
	- 改进 Thino 的现代布局样式

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

