---
uid: 20241126230503
title: Obsidian Weekly 2024-11-23：Obsidian v1.7.7 & 助力专注——多种定制视图与快捷操作
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-11-23：Obsidian v1.7.7 & 助力专注——多种定制视图与快捷操作
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241126230540
---

# Obsidian Weekly 2024-11-23：Obsidian v1.7.7 & 助力专注——多种定制视图与快捷操作

> [!Abstract]
> **统计时间**：2024-11-16 21:00 ~ 2024-11-23 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.7.7 公共版已发布

#### 桌面端

##### 修复

- 修正了阅读模式下折叠指示器的位置。

##### 开发者

- [安装程序](https://obsidian.md/download) 已更新至 Electron 32.2.5，包括修复开发者工具无法记住深色模式的问题。

#### 移动端

包括 [Obsidian 桌面版 v1.7.7](https://obsidian.md/changelog/2024-11-18-desktop-v1.7.7/) 的所有新功能及问题修复。

##### 修复

- 修复了 iOS 18 上共享扩展无法正常工作的问题。
- 修复了文件资源管理器和大纲视图中拖放操作在 iOS 上失效的问题。
- 修复了在折叠侧边栏时滚动位置丢失的问题。

### Obsidian Web Clipper 已更新至 [v0.9.8](https://github.com/obsidianmd/obsidian-clipper/releases/tag/0.9.8)

#### 新增

- 现在可以通过进入 **设置** → **高亮工具** 将高亮内容保存为内联格式。
- 用户界面已针对从右到左书写的语言进行了镜像调整。
- 新增对阿拉伯语和德语的翻译支持。
- 在预设变量中新增 `{{favicon}}`，可用于获取网站图标 URL。

#### 改进

- 修复了某些情况下 `{{published}}` 和 `{{author}}` 变量的问题。

## 插件新闻

### 社区插件

#### 新增

[Password Audit](https://obsidian.md/plugins?id=password-audit) By Sai _Prashanth Pulisetti_

> **分析密码强度**、检查安全漏洞并轻松**生成安全密码**。

[Insta TOC](https://obsidian.md/plugins?id=insta-toc) By _Nick C._

> 实时动态生成和维护目录。

![Weekly-2024-11-23-ba525471-6fdc-470f-af6a-addd5bd216e3|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-ba525471-6fdc-470f-af6a-addd5bd216e3.gif!pkmer)

[Link Preview](https://obsidian.md/plugins?id=link-preview) By _Felipe Tappata_

> 将鼠标悬停在外部链接上时显示外部链接的预览。

![Weekly-2024-11-23-f179d3d6-c7df-4277-9666-c31d1bb4d0bb|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-f179d3d6-c7df-4277-9666-c31d1bb4d0bb.gif!pkmer)

[Blur Mode](https://obsidian.md/plugins?id=aqu-blur-mode) By _dangehub_

> 模糊您想要隐私保护的任何内容。

![Weekly-2024-11-23-how-to-use-blur-mode|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-how-to-use-blur-mode.gif)

[Ridian](https://obsidian.md/plugins?id=ridian) By _Michel Nivard_

> 使用 Quarto 执行 R 代码块并显示输出、绘图和渲染文档。

![Weekly-2024-11-23-Pasted image 20241126195236|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241126195236.png!pkmer)

[Folder Canvas](https://obsidian.md/plugins?id=foldercanvas) By _Nancy Lee_

> 生成文件夹结构的画布视图。

![Weekly-2024-11-23-Pasted image 20241126190427|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241126190427.png!pkmer)

[Instant Above Divider](https://obsidian.md/plugins?id=instant-above-divider) By _SedationH_

> 在笔记的开头快速插入分隔线。

[Markdown Tags](https://obsidian.md/plugins?id=markdown-tags) By _John Smith III_

> 用标签和箭头标签增强您的文档。使用预定义或自定义标签、可自定义颜色和箭头指示器来直观地跟踪任务和状态。

![Weekly-2024-11-23-Pasted image 20241126185546|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241126185546.png!pkmer)

[Folder Tabulation](https://obsidian.md/plugins?id=folder-tabulation) By _SpeedaRJ_

> 允许通过快捷键和命令在文件夹中的文件之间导航。

[AI bot](https://obsidian.md/plugins?id=ai-bot) By _kuzzh_

> 使用人工智能润色、总结、翻译、分析和解释代码。

[Bluesky](https://obsidian.md/plugins?id=bluesky) By _eharris128_

> 发布到 Bluesky。

[Auto switch themes between dark/light mode](https://obsidian.md/plugins?id=double-switch) By _Robert Storlind_

> 该插件可让您将不同的主题与浅色和深色模式相关联。
> 切换浅色或深色模式会自动切换主题。

[Google Drive Sync](https://obsidian.md/plugins?id=google-drive-sync) By _Richard Xiong_

> 将保管库同步到 Google Drive 以便跨平台使用（适用于 iOS）。

[Proletarian Wizard Task Manager](https://obsidian.md/plugins?id=proletarian-wizard) By _Charles Feval_

> 通过工作区中的所有笔记跟踪您的任务。安排好你的一天。计划你的工作。

[Simple Focus](https://obsidian.md/plugins?id=simple-focus) By _Lin Qing_

> 允许您专注于特定文件或文件夹
> 用法：右键单击某个文件，可以看到一个名为“焦点”的菜单项。单击后，可以隐藏文件列表中的其他文件。

![Weekly-2024-11-23-3b0792da-6059-441d-8cc9-83c39f661b4a|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-3b0792da-6059-441d-8cc9-83c39f661b4a.gif!pkmer)

[StandardForm](https://obsidian.md/plugins?id=standardform) By _Phil Baum_

> 将使用标准形式逻辑语法的代码块转换为简洁、美观的渲染效果。
> 非常适合哲学、逻辑和论证重构。

![Weekly-2024-11-23-Pasted image 20241125235533|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241125235533.png!pkmer)

[File Manager](https://obsidian.md/plugins?id=file-manager) By _Juan Sicilia_

> 该插件通过引入基本的文件管理功能来增强 Obsidian 文件资源管理器。它添加了几个与 `File Explorer` 交互的新命令，允许用户绑定快捷键以进行高效的仅键盘文件管理。具有以下功能：
> - 打开方式：使用自定义命令打开文件或文件夹。
> - 转到文件/文件夹：在文件资源管理器中找到并关注文件或文件夹。
> - pathexplorer codeblock：显示指定路径中的文件和文件夹并使用自定义命令打开它们。
> - 创建子文件夹：在当前文件夹中创建子文件夹。
> - 创建文件夹：创建同级文件夹。
> - 创建便笺：在当前文件夹中创建一个空便笺。
> - 重复：重复的文件或文件夹。
> - 移动：将选定的文件或文件夹移动到新位置。
> - 复制：将选定的文件或文件夹复制到新位置。
> - 复制、剪切、粘贴：将选定的文件或文件夹复制或剪切到剪贴板并粘贴。
> - 清除剪贴板：清除剪贴板内容。
> - 切换选择：切换文件或文件夹的选择。
> - 全选：选择所有文件和文件夹。
> - 反转选择：反转当前选择。
> - 取消全选：清除所有选择。
> - 重命名：重命名文件或文件夹。

![Weekly-2024-11-23-Pasted image 20241125234830|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241125234830.png!pkmer)

[Quick Share Note to gist](https://obsidian.md/plugins?id=quick-share-note-to-gist) By _Por Chainarong Tangsurakit_

> 通过将图像上传到 Imgur，快速发布和共享注释到 GitHub Gist 及其图像。

[Trakt.tv Sync](https://obsidian.md/plugins?id=trakt-tv) By _Nick Felker_

> 将您观看的 Trakt.tv 节目同步到文件。

[BlazeJump](https://obsidian.md/plugins?id=blaze-jump) By _henryco_

> 使文本导航变得非常快。
> **BlazeJump** 提供五种导航模式。
> **您可以单独绑定每种模式，或者仅使用 `toggle-and-jump` 模式循环切换**：
> - 跳转到单词开头
> - 跳转到单词末尾
> - 跳转到行首
> - 跳转到行尾
> - 跳转到**任意**字符

![Weekly-2024-11-23-99b1ab2b-9118-4308-9822-578f21954274|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-99b1ab2b-9118-4308-9822-578f21954274.gif!pkmer)

[Beautiful Contact Cards](https://obsidian.md/plugins?id=beautiful-contact-cards) By _Seth Tenembaum_

> 呈现“联系人”代码块，其中包含电话、社交媒体等的可点击链接。

![Weekly-2024-11-23-Pasted image 20241125233923|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241125233923.png!pkmer)

[History Today](https://obsidian.md/plugins?id=history-today) By _Yaob1990_

> 一个 Obsidian 插件，用于显示“历史上的今天”事件。
> - 获取关于当天历史事件的笔记
> - 支持可配置的文件夹过滤

[Task Director](https://obsidian.md/plugins?id=task-director) By _Cybertramp_

> 立即切换所选页面中所有任务的状态。

![Weekly-2024-11-23-Pasted image 20241125212933|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241125212933.png!pkmer)

[Auto Tasks](https://obsidian.md/plugins?id=auto-tasks) By _Jamie Hurst_

> 将周期性笔记与标签和任务结合，自动管理您的每日、每周及项目待办事项清单。
> 专为 [Obsidian](https://obsidian.md/) 设计，需安装 [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes) 插件。可选支持 [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) 和 [Kanban](https://github.com/mgmeyers/obsidian-kanban) 插件。
> 此插件与 [Auto Periodic Notes](https://github.com/jamiefdhurst/obsidian-auto-periodic-notes) 插件配合使用效果更佳。

[Daily Summary](https://obsidian.md/plugins?id=daily-summary) By _Luke_

> 一个自动生成每日摘要的黑曜石插件。它收集当天的笔记并使用 LLM 生成简明的每日报告。

[Gemini Scribe](https://obsidian.md/plugins?id=gemini-scribe) By _Allen Hutchison_

> 该插件将 Google 的 Gemini AI 与 Obsidian 集成，为记笔记和内容生成提供智能帮助。

[Image Tools](https://obsidian.md/plugins?id=image-tools) By _Andrey Serov_

> 使用此插件，您可以：
> - 通过拖动光标轻松调整页面上的图像大小
> - 轻松调整图像对齐方式（左对齐、居中、右对齐）
> - 全屏打开图像以获得更好的查看体验

![Weekly-2024-11-23-34260d72-1ac8-49ff-80a9-84744c9b16dd|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-34260d72-1ac8-49ff-80a9-84744c9b16dd.gif!pkmer)

[Recently Added Files](https://obsidian.md/plugins?id=recently-added-files) By _Lemon695_

> 此插件会在侧边栏显示最近添加文件的列表，方便处理这些文档。例如：添加图片后，可以快速找到并重命名它们。
> 您可以选择性地排除某些文件路径，使其不显示在列表中。

![Weekly-2024-11-23-Pasted image 20241125165715|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241125165715.png!pkmer)

[Bottom to Top](https://obsidian.md/plugins?id=bottom-to-top) By _Henry Gustafson_

> 使文本从左到右、从下到上排列。

[Three Noun Prompts](https://obsidian.md/plugins?id=three-noun-prompts) By _jamespeachh_

> 这是一个旨在为您和/或您的朋友生成相同随机创意写作提示的插件。
> - 添加功能按钮，用于创建或打开提示笔记。
> - 生成三个单词的创意写作提示。
> **仅限桌面端使用，无法在移动端运行。**

#### 更新

[Easy Typing v5.5.9](https://github.com/Yaozhuwa/easy-typing-obsidian/releases/tag/5.5.9) By _Yaozhuwa_

> - 严格换行模式支持三种模式（两次换行，两次空格 + 换行，混合模式）
>     - 双空格模式：回车会变成两次空格 + 换行
>     - 混合模式是在引用块中使用两次空格 + 换行，在其他地方使用两次换行
> - 修复了列表中代码块结尾回车时，触发两次换行的问题
> - 增加了选中当前文本块的快捷键命令
> - 修改了选中文本块的逻辑，目前不需要严格换行模式也把相邻的文本行作为同一文本块的内容

[Epub Importer v0.6.0](https://github.com/aoout/obsidian-epub-importer/releases/tag/0.6.0) By _aoout_

> - **功能更新**
> 	- 增加对 Booknav 插件的兼容性
> 	- 新增解析非标准 EPUB 格式的功能
> 	- 添加在线图片 URL 的解析支持
> 	- 自动提升标题级别，直至出现一级标题
> - **问题修复**
> 	- 处理解析过程中 NCX navpoint 标签中出现的空文本节点
> - **重构**
> 	- 改善代码结构和错误处理机制
> 	- 将 HTML 转 Markdown 的转换从正则表达式切换至 Turndown
> 	- 使用 HTML 解析器替代正则表达式进行章节分割

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Discord Timestamps](https://github.com/Erallie/discord-timestamps) By _Erallie_

> 在**阅读模式**下显示 **Discord 时间戳**（例如 `<t:1734818400:D>` ），就像在 Discord 中显示的方式一样。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Thino v2.4.59](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.4.59) 已发布

- 支持在 thino 中打开每日/定期注释设置

#### [Zotlit v1.1.9](https://github.com/PKM-er/obsidian-zotlit/releases/tag/1.1.9) 已发布

- Electron 版本更新

## 外观

[**Neutral Academia** Theme](https://github.com/incantatem2/Obsidian-neutral-academia) By _incantatem2_

![Weekly-2024-11-23-Pasted image 20241125130002|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241125130002.png!pkmer)

![Weekly-2024-11-23-Pasted image 20241125130104|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241125130104.png!pkmer)

> 极简优雅的主题，符合深色和浅色的学院派审美。
> 使用的字体：Cormorant Semibold 用于标题和其他元素，Inter 用于文件夹，Manrope 用于笔记文本。

[**Consolas** Theme](https://github.com/pinei/obsidian-consolas-theme) By _Pinei_

![Weekly-2024-11-23-Pasted image 20241125125813|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241125125813.png!pkmer)

> 适合清醒的人的黑暗主题。

[**Winter Spices** Theme](https://github.com/incantatem2/Obsidian-winter-spices) By _incantatem2_

![Weekly-2024-11-23-Pasted image 20241125125637|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241125125637.png!pkmer)

> 一个简单、极简且舒适的主题。
> 非常适合长篇写作和日记记录。
> 使用的字体：Georgia、YU Gothic。
> 主题在浅色模式和深色模式下外观一致，但在浅色模式下效果最佳。

## 其他新闻

### Obsidian Fractal 新款周边 T 恤和连帽衫开售

下单链接：[Obsidian Softwear — Store](https://obsidian.md/softwear)

详见 [Obsidian Softwear：全新 Fractal T 恤和连帽衫](https://obsidian.md/blog/fractal-softwear/)

![Weekly-2024-11-23-Pasted image 20241124175857|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241124175857.png!pkmer)

![Weekly-2024-11-23-Pasted image 20241124175911|650](https://cdn.pkmer.cn/images/Weekly-2024-11-23-Pasted%20image%2020241124175911.png!pkmer)
