---
uid: 20241204001333
title: Obsidian Weekly 2024-12-01：任务管理类目大爆发&梦寐已久的可交互时间轴！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-12-01：任务管理类目大爆发&梦寐已久的可交互时间轴！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241204001647
---

# Obsidian Weekly 2024-12-01：任务管理类目大爆发&梦寐已久的可交互时间轴！

> [!Abstract]
> **统计时间**：2024-11-23 21:00 ~ 2024-12-01 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### 官方浏览器剪藏插件 Obsidian Web Clipper 已更新至 [v0.10.0](https://github.com/obsidianmd/obsidian-clipper/releases/tag/0.10.0)

#### 新增

- 增加了 [Interpreter](https://help.obsidian.md/web-clipper/interpreter) 功能，使用自然语言提取内容，语法为 `{{"a summary of the page"}}`（引号必不可少）。需在 Web Clipper 设置中启用并配置。
- 新增 `length` 过滤器，用于返回项目或字符的数量。
- 新增 `calc` 过滤器，支持基本数学运算，例如 `{{number|calc:"/2"}}` 可与 `length` 过滤器结合使用，统计单词数量或估算阅读时间，例如 `{{content|split:" "|length|calc:"/200"|round}} minutes`。
- 添加了巴西葡萄牙语、印度尼西亚语、韩语和繁体中文翻译。

#### 改进

- 修复了日文字体问题。
- 修复了 `{{publish}}` 变量有时返回多个日期的问题。
- **导出所有设置** 现在可以解压模板，以便人类阅读；**导入所有设置** 会重新压缩模板，以最大限度减少同步存储空间占用。

## 插件新闻

### 社区插件

#### 新增

[Image Uploader For Note](https://obsidian.md/plugins?id=image-uploader-for-note) By _Yunfi_

> 一款用于上传笔记中图片的 Obsidian 插件！
> 它将笔记中的本地图片上传到 S3（或兼容 S3 的服务），将图片链接替换为 S3 链接。如果图片仅在该笔记中使用，则从库中删除图片（可选）。

[Visual Crossing Weather](https://obsidian.md/plugins?id=visual-crossing-weather) By _willasm_

> 为您的笔记提供 Visual Crossing Weather API 集成

![Weekly-2024-12-01-Pasted image 20241203234342|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-Pasted%20image%2020241203234342.png!pkmer)

[Heatmap Tracker](https://obsidian.md/plugins?id=heatmap-tracker) By _Maksim Rubanau_

> 可视化您的活动并跟踪目标、进度、习惯、任务、锻炼、财务等——所有这些都在一个交互式热图中！

![Weekly-2024-12-01-Pasted image 20241203234056|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-Pasted%20image%2020241203234056.png!pkmer)

[Discord Timestamps](https://obsidian.md/plugins?id=discord-timestamps) By _Erika Gozar_

> 在阅读模式下显示 Discord 时间戳，就像它们出现在 Discord 中一样。

[Todoist Context Bridge](https://obsidian.md/plugins?id=todoist-context-bridge) By _wenlzhang_

> 将您的 Obsidian 笔记与 Todoist 任务连接起来，同时保留丰富的上下文，帮助您突出显示重要任务并保持两个平台之间的无缝工作流程。

[LLM workspace](https://obsidian.md/plugins?id=llm-workspace) By _Olivér Falvai_

> 使用基于笔记的大型语言模型。

[Abbrlink](https://obsidian.md/plugins?id=abbrlink) By _Q78KG_

> 自动为您的 Markdown 文件生成永久短链接。
> - **功能特点**
> 	- 为 Markdown 文件生成唯一链接
> 	- 支持自动和手动两种生成模式
> 	- 可配置的哈希长度 (4-32 位)
> 	- 支持检测并避免哈希冲突
> 	- 可选的随机哈希生成模式
> 	- 支持跳过已有 abbrlink 的文件
> 	- 分步任务构建机制，高效处理大量文件

[Mass Create](https://obsidian.md/plugins?id=mass-create) By _vellikhor_

> 一次轻松创建大量笔记。
> - **功能**
>    - **批量文件创建**：轻松在选定的文件夹中创建多个文件。
>    - **文件夹创建**：在批量创建过程中添加额外的文件夹。
>    - **模板选项**：使用现有文件作为所有新文件的模板，轻松复制文件结构和内容。

![Weekly-2024-12-01-mass-create-runthrough|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-mass-create-runthrough.gif)

[Setlist.fm Sync](https://obsidian.md/plugins?id=setlist-fm-sync) By _Nick Felker_

> 同步您参加过的 setlist.fm 音乐会。

[Auto File Organizer](https://obsidian.md/plugins?id=auto-file-organizer) By _mofukuru_

> 根据文件扩展名自动将文件分类到指定文件夹中。

[Folder Links](https://obsidian.md/plugins?id=folder-links) By _Stefan Rausch_

> 增加了链接到文件夹的功能。
> - 在常规内部链接末尾添加 `/`，如果文件夹存在，它将在导航中显示

[Simple Quiz](https://obsidian.md/plugins?id=simple-quiz) By _Ivan Kalmar_

> 轻松创建抽认卡组以供重复学习。
> 目前仅支持手动输入的抽认卡。

![Weekly-2024-12-01-Pasted image 20241203113721|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-Pasted%20image%2020241203113721.png!pkmer)

[Post Webhook](https://obsidian.md/plugins?id=post-webhook) By _MasterB1234_

> 将您的 Obsidian 笔记发送到任何 Webhook 端点，支持 YAML 前置数据和附件处理。非常适合自动化笔记工作流并与外部服务集成。

[Clear Todos](https://obsidian.md/plugins?id=clear-todos) By _Joshua Gawenda_

> 添加一个命令，用于清除当前选中的所有已完成的待办事项；如果没有选择，则清除整个文档的已完成待办事项。

[Chronos Timeline](https://obsidian.md/plugins?id=chronos) By _Claire Froelich_

> 通过简单的 Markdown 在 Obsidian 笔记中渲染**交互式时间轴**。

![Weekly-2024-12-01-ex-main-demo|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-ex-main-demo.gif!pkmer)

[Friday](https://obsidian.md/plugins?id=mdfriday) By _sunwei_

> 在几分钟内将您的 Markdown 文档转化为专业的多语言网站页面。

![Weekly-2024-12-01-ac184b00-b297-499d-a40c-067ad9e9466f|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-ac184b00-b297-499d-a40c-067ad9e9466f.gif!pkmer)

[Weekly Goal Tracker](https://obsidian.md/plugins?id=weekly-goal-tracker) By _George Gorman_

> 向状态栏添加按钮，以便您跟踪不同的每周目标并轻松更新它们。

![Weekly-2024-12-01-Pasted image 20241203105429|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-Pasted%20image%2020241203105429.png!pkmer)

[Simple Todo](https://obsidian.md/plugins?id=simple-todo) By _elliotxx_

> 一个极简的、基于文本的 Todo 管理器（Text-Based GTD）插件，帮助你在 Obsidian 中高效管理任务。

![5ace88cd-4bcf-4c23-9a3c-6833ecb33fed|650](https://cdn.pkmer.cn/images/5ace88cd-4bcf-4c23-9a3c-6833ecb33fed.gif!pkmer)

[Snippetsaurus](https://obsidian.md/plugins?id=obsnippets) By _Christian Humbert_

> 创建、管理片段并将其插入笔记中。代码片段可以是文本或代码，对于代码片段，您可以指定编程语言。

![Weekly-2024-12-01-Pasted image 20241202234532|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-Pasted%20image%2020241202234532.png!pkmer)

#### 更新

[Easy Typing v5.5.10](https://github.com/Yaozhuwa/easy-typing-obsidian/releases/tag/5.5.10) By _Yaozhuwa_

> - CMD/Ctrl+A 增强功能支持 quote/callout，第一次选中当前引用行内容，第二次选中当前的整个引用
> - 切换代码块注释命令
>      - 修复对 CSS 代码块注释错误的问题
>      - 增加了对 HTML、Markdown、Matlab 代码块注释的支持
>      - 优化该命令在空的代码行的表现
> - 修复 MD 链接内部有小括号时会被错误格式化的问题

[Pixel Banner v2.11.0](https://github.com/jparkerweb/pixel-banner/releases/tag/2.11.0) By _Justin Parker_

> - **新增**
>    - 支持 📌 固定 URL 横幅
> 	    - 当找到适用于 Pixel Banner 的图片 URL 时，可以快速保存，添加 URL 后即可“固定”。

[Discord Timestamps v1.0.14](https://github.com/Erallie/discord-timestamps/releases/tag/1.0.14) By _Erika Gozar_

> - 为时间戳添加背景颜色。
> - 鼠标悬停时，时间戳会显示完整时间，与 Discord 一致。
> - 修复了最后一个时间戳后面的文字被截断的问题。
> - 在移动端点击时间戳时，新增功能以通知方式显示完整时间戳。
> - 更新了移动端的事件监听，从 `onClickEvent` 改为 `ontouchend`，更加适配移动端环境。
> - 新增设置以禁用代码块中的时间戳转换功能。
> - 新增从命令面板或编辑器上下文菜单插入时间戳的命令。
> - 为移动端重新格式化了插入时间戳的弹窗。
> - 尝试再次修复移动端的 `styles.css`。
> - 修复了移动端插入时间戳弹窗的 `styles.css`。
> - 新增设置以覆盖 Markdown 代码块中时间戳的格式。
> - 修复了 Markdown 代码块中某些时间戳未被覆盖的问题。
> - 修复了当启用 **转换代码块** 时，**覆盖 Markdown 代码块** 无法正常工作的问题。
> - 小更新：在运行插入时间戳命令前，选中的文本会被新时间戳替换。

[Callout Toggles v1.1.0](https://github.com/alythobani/obsidian-callout-toggles/releases/tag/1.1.0) By _Aly Thobani_

> 新增设置选项：
> - 显式或隐式的引用标题
> - 引用 ID 的大小写：小写、大写、句首大写或标题大写
> - 可折叠的引用（不可折叠、默认展开的可折叠、默认折叠的可折叠）

[Strange New Worlds v2.2.1](https://github.com/TfTHacker/obsidian42-strange-new-worlds/releases/tag/2.2.1) By _TfTHacker_

> 提高引用计数系统的性能和准确性。
> 添加了次要功能：引用计数现在显示在 _文件属性_ 侧栏中

![Weekly-2024-12-01-Pasted image 20241203134316|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-Pasted%20image%2020241203134316.png!pkmer)

[Rich Foot v1.9.0](https://github.com/jparkerweb/rich-foot/releases/tag/1.9.0) By _Justin Parker_

> - **新增**
>     - 增加了 `Custom Created/Modified Date Property` 字段，允许用户为日期指定自定义前置文件属性，适用于文件系统日期受到同步过程影响且需要单独追踪的情况。
>     - 如果使用自定义的创建/修改日期属性，日期将以 " 月 日, 年 " 格式显示（如果格式正确），否则显示原始前置元数据字段的字符串值。
>     - 增加了 `Date Display Format` 选项，允许用户指定自定义日期格式。
>     - 支持 `Page Preview` 核心插件的 `Outlinks` 和 `Backlinks`。
>     - 选项可以将 `Outlinks` 和 `Backlinks` 合并为一个名为 `Links` 的视图。
>     - 为 `Links` 添加了方向箭头。
>     - 为 `footnote` 内部链接添加了 `Outlinks`。
> - **修复**
>     - 画布中的笔记嵌入现在具有正确的高度。
>     - 设置中重复的 " 显示日期 " 选项。
>     - 如果时间戳包含在自定义创建/修改日期属性中，日期未正确格式化。
>     - `Page Preview` 在 `编辑模式` 中未正确显示。

[simple-sketch v1.0.9](https://github.com/Yohh/obsidian-simple-sketch/releases/tag/1.0.9) By _Yoh_

> - **显示**
>     - 在主视图中以新标签页打开 simple-sketch
>     - 将草图大小设置为全应用视口
> - **控制**
>     - 使用 ctrl + z 撤销
>     - 使用 ctrl + shift + z 重做
>     - 使用 ctrl + shift + g 切换网格
> - **新特性**
>     - 在 simple-sketch 中使用文件菜单打开现有图像
>     - 打开一个模态框，允许在特定文件夹中保存并指定文件名

[Tasks v7.14.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.14.0) By _Clare Macrae and llyas Landikov (created by Martin Schenck)_

> - **功能**
> 	- 为阅读模式和任务查询结果添加日期选择器
> 	- 查看 [文档](https://publish.obsidian.md/tasks/Editing/Editing+Dates)
> - **修复**
> 	- 对齐状态栏与其他日期
> 	- 允许在 onCompletion 表情符号后添加多个空格
> 	- 处理所有表情符号中隐藏的任意 VS16 字符

![Pasted image 20241202145616|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241202145616.png!pkmer)

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Lexicanter Glass](https://github.com/saturnine-softworks/lexicanter-glass) By _Saturnine_

> Obsidian 的官方 Lexicanter 集成。允许您查看库内的 .lexc 文件。
> 了解更多：[ https://lexicanter.com/](https://lexicanter.com/)

![Pasted image 20241203104818|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241203104818.png!pkmer)

## 外观

[**Mulled Wine** Theme](https://github.com/incantatem2/Obsidian-mulled-wine) By _incantatem2_

![Weekly-2024-12-01-Pasted image 20241202233926|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-Pasted%20image%2020241202233926.png!pkmer)

![Weekly-2024-12-01-Pasted image 20241202234033|650](https://cdn.pkmer.cn/images/Weekly-2024-12-01-Pasted%20image%2020241202234033.png!pkmer)

> 渐变主题，在深色和浅色模式下具有空灵的色彩。

[**Glass Robo** Theme](https://github.com/lorens-osman-dev/Glass-Robo) By _Lorens Osman_

![Pasted image 20241202145930|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241202145930.png!pkmer)

> - **主要功能**
>    - 玻璃质感设计：现代且简洁的界面，提升您的 Obsidian 使用体验。
>    - 自定义字体。
>    - 为笔记属性添加了新图标。
>    - 文件和文件夹的整洁图标。
>    - 更新了 callouts 的样式。
>    - 自定义复选框。
>    - 两种标题颜色方案。
> - **附加功能**
>    - 星星背景，带来如同进入太空般的沉浸感。
>    - 与 [style settings](https://github.com/mgmeyers/obsidian-style-settings) 插件集成，可以控制主题中的部分功能。
>        - 可以设置背景颜色。
>        - 可以选择标题的颜色方案。
>        - 可以启用/禁用自定义字体。
>    - 单个反引号代码块的动态背景颜色。
>    - 笔记标题渐变色。
>    - 为 [Cluster](https://obsidian.md/plugins?id=cluster) 插件提供图标。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

