---
uid: 20250327002603
title: Obsidian Weekly 2025-03-23：进化的“附件”与任务管理
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-03-23：进化的“附件”与任务管理
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250327003608
---

# Obsidian Weekly 2025-03-23：进化的“附件”与任务管理

> [!Abstract]
> **统计时间**：2025-03-16 21:00 ~ 2025-03-23 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian Web Clipper 已更新至 [v0.11.2](https://github.com/obsidianmd/obsidian-clipper/releases/tag/0.11.2)

- **新增**
    - 添加了 `{{words}}` 预设变量用于统计字数。
- **改进**
    - 修复了侧边栏模式下主按钮无法触发的问题。
    - 升级至 Defuddle 0.3.3，优化页面内容提取的准确性，特别是代码块和数学公式的处理。
    - 修复了嵌套列表项的缩进问题。

## 插件新闻

### 社区插件



#### 新增

[File Title Updater](https://obsidian.md/plugins?id=file-title-updater) By _wenlzhang_

> 实现文件名、Frontmatter 与笔记首个标题之间的标题同步。

[Annotate Audio](https://obsidian.md/plugins?id=annotate-audio) By _VidE_

> 听音频并添加批注。

![Weekly-2025-03-23-Annotate Audio|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-Annotate%20Audio.gif)

[Smooth Cursor](https://obsidian.md/plugins?id=smooth-cursor) By _Busyo_

> 让你的光标平滑地移动，而不是突然跳跃到目标位置。
> 该插件支持光标拖尾，在光标移动的时候显示移动的轨迹。

![Weekly-2025-03-23-SmoothCursor|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-SmoothCursor.gif)

[Paper Clipper](https://obsidian.md/plugins?id=paper-clipper) By _ras0q_

> 捕获并管理学术论文。

![Weekly-2025-03-23-thumbnail|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-thumbnail.gif!pkmer)

[Idealogs Annotator](https://obsidian.md/plugins?id=idealogs-annotator) By _Idealogical Foundation_

> 用于查看和链接 Idealogs 文章。

[Attachments Cache](https://obsidian.md/plugins?id=attachments-cache) By _luisbs_

> 将远程附件（目前仅支持图片）存储到库中。
> 笔记本身**不会**被修改，因此即使在库外，附件也能通过远程 URL 正常使用。
> 当笔记中渲染附件时，会使用本地版本作为缓存，而不是直接加载远程文件。

[Tagvis](https://obsidian.md/plugins?id=d3-tagvis) By _Mason Bryant_

> 将你的标签以可配置的旭日图形式进行可视化。

![Weekly-2025-03-23-Pasted image 20250326225914|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-Pasted%20image%2020250326225914.png!pkmer)

[Dropbox Photo Grid](https://obsidian.md/plugins?id=dropbox-photo-grid) By _Ali Moeeny_

> 根据特定日期嵌入 Dropbox 帐户中的照片网格。它非常适合显示 Obsidian 库中的日常照片、回忆或任何基于日期的照片集。

[Bookshelf](https://obsidian.md/plugins?id=bookshelf) By _Philip Weinke_

> Obsidian 中的个人书架。在一个地方访问所有读书笔记，跟踪阅读进度，并通过精美的图表深入了解您的阅读习惯。

![Weekly-2025-03-23-screenshots|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-screenshots.gif!pkmer)

[CSV All-in-One](https://obsidian.md/plugins?id=csv-allinone) By _hihangeol_

> 用于创建 `.csv` 文件、修改其数据、保存它们以及执行各种与 CSV 相关的操作的插件。

![Weekly-2025-03-23-create_csv_table|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-create_csv_table.gif!pkmer)

[Note Favicon](https://obsidian.md/plugins?id=note-favicon) By _mdklab_

> 从笔记的前置信息中提取 URL，并在文件树中显示与笔记标题关联的 favicon 图标。支持标准 URL 和 base64 编码的图像。

![Weekly-2025-03-23-Pasted image 20250326225207|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-Pasted%20image%2020250326225207.png!pkmer)

[Image Picker](https://obsidian.md/plugins?id=image-picker) By _ari. The. Elk_

> 在你的库中以闪电般的速度浏览、搜索并嵌入图片。它 **性能极佳**，会自动生成缩略图，并在后台对库进行索引，从而获得即时的搜索结果。

![Weekly-2025-03-23-Image Picker|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-Image%20Picker.gif!pkmer)

[InfoFlow](https://obsidian.md/plugins?id=infoflow) By _RockieStar Inc._

> 将您保存的 InfoFlow.app 文章和高亮内容同步，功能类似于 ReadWise 和 Omnivore。

#### 更新

[NetClip v1.3.4](https://github.com/Elhary/Obsidian-NetClip/releases/tag/1.3.4) By _Elhary_

> - **新功能**
> 	- **默认快速保存位置**：现在可以设置默认文件夹，以便在未选择特定类别时进行快速保存。
> 	- **域名特定的保存位置**：自动将特定网站的剪辑内容保存到指定文件夹：
> 		- 可为不同域名配置自定义保存位置（例如，reddit.com → Reddit 文件夹）
> 		- 每个域名都可以有自己的专属保存位置
> 		- 剪辑内容会根据网站域名自动存入正确的文件夹
> 	- **AI 剪辑**：NetClip 现在支持 AI 驱动的剪辑！可通过自定义提示词快速转换剪辑内容，支持翻译、摘要、笔记格式化，或创建自己的转换方式。[点击此处了解如何创建提示词](https://github.com/Elhary/Obsidian-NetClip/blob/main/AI_PROMPTS.md)。

[PDF++ 0.40.28]( https://github.com/RyotaUshio/obsidian-pdf-plus/releases/tag/0.40.28 ) By _RyotaUshio_

> - **改进**
>     - 针对 [Obsidian 的一个 Bug](https://forum.obsidian.md/t/pdf-view-loses-focus-after-closing-command-palette-causing-some-commands-to-fail-to-run/97973/7) 添加了临时解决方案，以确保某些 PDF++ 命令能从命令面板成功执行。
>     - 针对 [Obsidian 的一个 Bug](https://forum.obsidian.md/t/double-clicking-a-word-line-in-a-pdf-does-not-highlight-it/96760) 添加了临时解决方案，以修复双击无法正确选中单词的问题。
>     - 现在，在 Android 设备上运行 " 复制调试信息 " 命令时，会包含 Android System WebView 版本信息。
> - **其他**
>     - 添加了以下功能的弃用警告：
>         - " 修剪选区/注释嵌入 " 选项
>         - 模板变量 `linkedFile`、`linkedFileProperties`
>         - 使用 Dataview 内联字段将 Markdown 文件与 PDF 关联（请改用 Obsidian 内置属性）
>     - 更新了依赖项。
>     - 现在 PDF++ 采用 `pnpm` 作为包管理器。

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Simple Colored Folder](https://github.com/Mara-Li/obsidian-simple-colored-folder) By _Mara-Li_

> 自动为根文件夹添加颜色，并使用样式设置对其进行自定义。
> 支持明暗主题

![Weekly-2025-03-23-Pasted image 20250326233750|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-Pasted%20image%2020250326233750.png!pkmer)

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Task Progress Bar 已完全重构并更名为 [Task Genius](https://obsidian.md/plugins?id=obsidian-task-progress-bar)

##### Task Genius 的主要改进

###### 远比之前全面的任务状态管理

如果说原先的 Task Progress Bar 是基于任务的完成与否，那么 Task Genius 则是基于任务的状态。它支持进行中、计划中、放弃和自定义状态，并且支持状态主题支持，且适配了 Tasks 插件的大部份功能。

这次更新中，给 Task Progress Bar 带来了最显著的进化：从简单的任务完成的进度显示转向更全面的任务状态管理：

- **可自定义的任务状态**：除了完成/未完成外，Task Genius 现在支持进行中、计划中、放弃和自定义状态
- **状态主题支持**：预定义的状态集合，与流行的任务管理系统保持一致，你可以通过下拉框直接选择来自 **Minimal**、**Border** 等主题的支持的对应的状态标记
- **视觉状态指示器**：直观展示不同状态的自定义任务标记
    - 例如支持以 `TODO`, `IN-PROGRESS`, `DONE` 等作为任务标记，而不是原始的方框
- **任务状态切换器**：通过单击循环切换任务状态，例如从 `TODO` 切换到 `IN-PROGRESS`，再切换到 `DONE`
    - 完全兼容 Obsidian 的所有命令
    - 支持子任务的状态变更触发父任务的状态变更
    - 支持任务状态的键盘快捷键切换

详见文章 [《从任务进度条到任务管理：一个任务管理工具的进化》](https://boninall.com/blog/tool-for-task?lang=zh)。

![Weekly-2025-03-23-Pasted image 20250326234659|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-Pasted%20image%2020250326234659.png!pkmer)

#### Editing Toolbar 已更新至 [v3.1.8](https://github.com/PKM-er/obsidian-editing-toolbar/releases/tag/3.1.8)

- 新增功能：支持工具栏主题和图标尺寸！
- 多配置下，状态栏切换位置也可以初始化工具栏
- 移动端设备开启 following 时屏蔽系统菜单
- 优化 following 工具栏位置展示
- 解决移动端选中文本无法触发 following 样式
- 修复
	- 移动端固定模式失效
	- 兼容 Excalidraw

![Weekly-2025-03-23-Pasted image 20250325220913|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-Pasted%20image%2020250325220913.png!pkmer)

#### Floating Toc 已更新至 [v2.5.3](https://github.com/PKM-er/obsidian-floating-toc-plugin/releases/tag/2.5.3)

- 优化大文档下性能表现
- 样式上一些调整，颜色使用主题变量
- 增加 bold 样式

## 外观

[**Minimal-Dark-Coder** Theme](https://github.com/Krishna-Sen-Programming-World/Minimal-Dark-Coder) By _Krishna Sen_

![Weekly-2025-03-23-Pasted image 20250326231213|650](https://cdn.pkmer.cn/images/Weekly-2025-03-23-Pasted%20image%2020250326231213.png!pkmer)

> 适用于 Obsidian 的极简黑暗编码器主题，与 Obsidian v1.8.9 兼容。
