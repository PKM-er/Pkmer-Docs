---
uid: 20250117170119
title: Obsidian Weekly 2025-01-12：Obsidian v1.8.1 前瞻，全方位集成更进 N 步！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-01-12：Obsidian v1.8.1 前瞻，全方位集成更进 N 步！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250117171618
---

# Obsidian Weekly 2025-01-12：Obsidian v1.8.1 前瞻，全方位集成更进 N 步！

> [!Abstract]
> **统计时间**：2024-12-29 21:00 ~ 2024-01-12 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.8.1 内测版现已发布

#### 桌面端

##### 改进

- 具有相对 `src` 路径的 `<img>`、`<video>` 和 `<audio>` 标签的现在可以在实时预览和阅读模式中渲染。
- “显示功能区”设置现在保存在 `appearance.json` 而非 `app.json` 中。
- 增加了专用的上下文菜单选项，可在 Web viewer 中打开外部链接。
- 笔记和附件的标签页标题中新增页面预览功能。
- 大纲视图新增选项：“Auto-scroll to current section（自动滚动到当前部分）”。
- 发布：新增命令“在实时站点中打开”，可打开笔记的当前在线版本。
- Web viewer：新增命令“Save to vault”，可将当前网页转换为 Markdown 并保存到库中。
- Web viewer：新增加载进度条。
- “下载附件”命令现在支持 `data:` Base64 URI。
- 改进了连接同步远程库时的界面体验。
- 为提高可见性，同步插件现在默认启用，并新增命令“同步：设置同步”。
- 文件资源管理器：将文件移动到折叠文件夹后会自动取消选中状态。

##### 修复

- 修复了 Web viewer 中某些页面加载失败的问题。
- 属性值输入框现在会遵循拼写检查设置。
- 修复了 Web viewer 无法加载区分大小写的网页的问题。
- 修复了页面仍在加载时在 Web viewer 中导航时产生的控制台错误。
- 搜索：修复了使用“在所有文件中搜索”命令后搜索有时会忘记排序顺序的问题。
- 修复了“下载附件”命令对 SVG 图像类型识别错误的问题。
- 修复了从嵌入中触发“重命名标题”和“重命名块 ID”命令无效的问题。
- 修复了“排除文件”模式未正确保存的问题。
- 修复了旧安装程序中“复制”菜单项无效的问题。
- 更新了“Tab 缩进大小”的描述，以更准确反映其行为。
- 修复了从页面预览编辑嵌入标题（例如 `[[file#heading]]`）导致标题文本被错误修改的问题。
- 修复了嵌入标题中 Mathjax 无法渲染的问题。
- 修复了从 Markdown 视图导航到非 Markdown 视图时命令无法按预期工作的问题，例如 `Control/Command+F` 有时在 PDF 查看器中不起作用。
- 修复了 PDF 查看器“复制到选区的链接”有时会将选区放置在错误文本节点上的问题。

#### 移动版

包含所有 [Obsidian 桌面端 v1.8.1](https://obsidian.md/changelog/2025-01-07-desktop-v1.8.1/) 的新功能和问题修复。

##### 全新功能

首次安装应用时新增引导体验，帮助新移动用户创建知识库，并根据需求了解如何在所有设备间同步笔记。

##### 修复

- 在标签切换器中长按标签时，不会再拖动标签预览图片。
- iOS：修复了一个罕见问题，即文件夹创建后未被 Obsidian 检测到，直到重启应用后才显示。

## 插件新闻

### 社区插件

#### 新增

[Better Plugins Manager](https://obsidian.md/plugins?id=better-plugins-manager) By _zero_

> 打造您的极致插件管理体验，让插件管理变得更加直观、高效，同时提升您的工作流程和个性化设置。

![Weekly-2025-01-12-Pasted image 20250117150855|650](https://cdn.pkmer.cn/images/Weekly-2025-01-12-Pasted%20image%2020250117150855.png!pkmer)

[Open Editors](https://obsidian.md/plugins?id=open-editors) By _4Source_

> 添加一个视图，显示打开的窗口、组、选项卡和其中的编辑器。使管理打开的编辑器变得更容易。

![Weekly-2025-01-12-Pasted image 20250117150013|650](https://cdn.pkmer.cn/images/Weekly-2025-01-12-Pasted%20image%2020250117150013.png!pkmer)

[Easy Timeline](https://obsidian.md/plugins?id=easy-timeline) By _Romeliun_

> 简化了使用日期和元数据从文本创建可视化时间线。

![Weekly-2025-01-12-Pasted image 20250116225311|650](https://cdn.pkmer.cn/images/Weekly-2025-01-12-Pasted%20image%2020250116225311.png!pkmer)

[Photopea Editor](https://obsidian.md/plugins?id=photopea-editor) By _KarmaToast40340_

> 将强大的在线图像编辑器 [Photopea](https://www.photopea.com/) 直接集成到 Obsidian 中，允许用户在应用程序中无缝编辑 PNG 和 JPG 图像。

[External File Embed and Link](https://obsidian.md/plugins?id=external-file-embed-and-link) By _oylbin_

> 使用相对路径嵌入和链接库外部的本地文件，以实现跨设备和多平台兼容。

[Jira Issue managing](https://obsidian.md/plugins?id=jira-issue-managing) By _Amplia_

> 直接更新和创建 Jira 问题。

[Atomizer](https://obsidian.md/plugins?id=note-atomizer) By _Zac Bagley_

> 该插件使用 OpenAI API 帮助将大笔记分解为更小的、“原子”风格的笔记和想法。

[Structured Copy: Files & Folders](https://obsidian.md/plugins?id=copy-recursive-content) By _SchmidA_

> 以结构化 JSON 格式复制文件和文件夹的内容。

![Weekly-2025-01-12-Pasted image 20250116213731|650](https://cdn.pkmer.cn/images/Weekly-2025-01-12-Pasted%20image%2020250116213731.png!pkmer)

[BetaX NAS Sync](https://obsidian.md/plugins?id=ons) By _Skye_

> 这是一项 `Obsidian Vault` 同步服务, 可让您将 `Obsidian Vault` 与家庭内联网 NAS 同步。
> 适合家中有 NAS 并将其用作存储中心的用户。

[Replicate](https://obsidian.md/plugins?id=replicate) By _Sébastien Dubois_

> Replicate. Com 集成。使用 AI 生成图像。

![Weekly-2025-01-12-Replicate|650](https://cdn.pkmer.cn/images/Weekly-2025-01-12-Replicate.gif!pkmer)

[Smart Link Alias](https://obsidian.md/plugins?id=smart-link-alias) By _Victor Perez-Cano_

> 通过动态别名自定义增强您的内部链接管理。轻松显示笔记的简短、完整或组合标题。

![Weekly-2025-01-12-Smart Link Alias|650](https://cdn.pkmer.cn/images/Weekly-2025-01-12-Smart%20Link%20Alias.gif!pkmer)

[Insert Multiple Attachments](https://obsidian.md/plugins?id=insert-multiple-attachments) By _mnaoumov_

> 允许一次插入多个附件。

[Theme Controller](https://obsidian.md/plugins?id=bin-theme-controller) By _Binaris_

> 设置主题显示的时间和方式。
> - **功能**
> 	- **颜色切换器：** 使用状态栏图标在浅色模式和深色模式之间切换。
> 	- **路径特定主题：** 根据活动笔记的路径自动应用特定主题和颜色。
> 	- **标签特定主题：** 为活动笔记中的任意标签设置独特的主题和颜色。
> 	- **默认主题：** 在没有保存特定路径或标签配置时，定义默认主题和颜色（默认禁用）。

[Smart Context](https://obsidian.md/plugins?id=smart-context) By _🌴 Brian_

> 帮助您将文件夹内容、打开的文件、多个选定的笔记，甚至外部文件路径复制到剪贴板，并提供高级配置功能——例如排除特定标题部分或通过 `.gitignore` 或 `.scignore` 忽略整个文件。这在使用 ChatGPT 等 AI 工具时特别有用，可将大量项目笔记、研究资料或文档作为“上下文”输入，以改进 AI 的响应和准确性。

[Cursor Position on Title Enter](https://obsidian.md/plugins?id=cursor-position-on-title-enter) By _Por Chainarong Tangsurakit_

> - 选择在笔记标题按下 Enter 键后光标的位置：
> 	- 上次光标位置（默认）
> 	- 笔记开头
> 	- 笔记末行

[Project Tasks](https://obsidian.md/plugins?id=project-tasks) By _Paul Paterson_

> 允许您通过管理任务 ID 和依赖关系，轻松为项目创建关联任务。
> 该插件需要 [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) 插件。项目特定视图还需要 [Dataviews](https://github.com/blacksmithgu/obsidian-dataview) 插件（可选）。

[Send Note](https://obsidian.md/plugins?id=send-note) By _jvsteiner_

> 使用 AWS S3 作为交换媒介，快速共享/发布笔记。笔记以 Markdown 格式共享，并默认加密。此项目要求/允许您提供自己的基于 S3 的存储。当笔记被共享时，它会被上传到 AWS S3 并生成一个链接。接收链接的其他用户可以在 Obsidian 中打开该链接，笔记将被添加到他们的知识库中。这种方式为用户提供了一种快速简便的笔记传输方法，只要双方都安装了此插件即可。共享笔记时会使用加密，密钥嵌入在链接中。用户还可以直接从 Obsidian 中删除 S3 后端的笔记。

[NodeFlow](https://obsidian.md/plugins?id=node-flow) By _LincZero_

> 渲染节点流，像 `ComfyUi`, `UE`, `Houdini`, `Blender` 等，使其易于编写相关笔记。
> 允许使用轻量语法或从上述软件导出的 Json 描绘图表，该插件在 Obsidian 与 VuePress 博客中均可使用

![Weekly-2025-01-12-Pasted image 20250114220747|650](https://cdn.pkmer.cn/images/Weekly-2025-01-12-Pasted%20image%2020250114220747.png!pkmer)

[Export to HTML](https://obsidian.md/plugins?id=export-to-html) By _kalvn_

> 将 Markdown 笔记直接导出为 HTML、导入剪贴板中或生成独立文件。
> 导出时，图像将以 Base 64 格式复制。

#### 更新

[Weekly Goal Tracker v1.5.0](https://github.com/GitGorman/weekly-goal-tracker/releases/tag/1.5.1) By _George Gorman_

> - **新增功能**
> 	- **任务集成**
> 		- 现在可以将任务附加到特定目标上。
> 		- 当任务完成时，该目标的进度会增加。
> 		- 您可以选择设置该任务的分值（可选）。
> 	- **每日目标**
> 		- 现在可以创建每日目标以及每周目标。
> 		- 其工作方式与每周目标相同：
> 			- 数据存储在当前每日笔记的属性中。

[Task Board v1.2.1](https://github.com/tu2-atmanand/Task-Board/releases/tag/1.2.1) By _roovo_

> - **v1.2.0**
> 	- **新功能**
> 		- **性能优化**：显著优化了 UI 渲染，大幅提升插件性能。
> 		- **流畅动画**：为任务卡片和描述部分添加无缝动画，同时保持高性能。
> 		- **启动时自动打开任务板**：新增功能，可在 Obsidian 启动时自动打开任务板。
> 	- **问题修复**
> 		- 修复了影响任务功能的严重错误。
> 		- 解决了 TaskItem 组件的性能相关问题。
> 		- **修复截止日期问题**：自动添加截止日期功能现已正常工作，修复了在任务编辑弹窗中更改截止日期时错误设置为当天的问题。
> 		- **修复新增列窗口样式**：解决了新增列窗口样式失真的问题。
> 	- **其他更改**
> 		- **React 记忆化**：在代码库中应用记忆化技术以提升性能。
> 		- **代码组织**：重新组织代码库，将组件和功能移至新的结构化文件中。
> 		- **列数据格式更新**：更改存储列数据的格式，以提高一致性和可扩展性。
> 		- **减少 React Dispatch 依赖**：优化状态管理，减少对 React Dispatch 的依赖。
> 		- **UI 增强**：使任务卡片的边框更细，以减少干扰并改善整体 UI 美观性。
> 		- **属性优化**：移除不必要的属性，并优化组件树以提高渲染效率。
> 		- **Obsidian 组件修复**：用正确的 ItemView 集成替换了错误使用的 `new Component`。
> 		- **移除 SessionStorage**：删除了对 `sessionStorage` 的依赖，所有数据现在直接写入磁盘并更新。
> 		- **语言翻译改进**：
> 			- 将自动语言翻译的 Python 脚本移动到根目录。
> 			- 将语言翻译文件中的键从数字改为字符串，以提高可读性和易用性。
> 		- **预定义任务板更新**：调整了默认任务板和列配置，以提升用户体验。
> - **v1.2.1**
> 	- **问题修复**
> 		- 修复了任务编辑弹窗中优先级下拉菜单文字混乱的问题。

[Pixel Banner v2.19.2](https://github.com/jparkerweb/pixel-banner/releases/tag/2.19.2) By _Justin Parker_

> - **v2.17.0**
> 	- **新增**
> 		- 横幅图片选择窗口新增排序和分页控件
> （非常适合在包含大量图片的库中查找图片）
> - **v2.18.0**
> 	- **新增**
> 		- 新增设置，可调整横幅与窗口边缘的间距（0-50 像素）。
> 		- 选择横幅图片时切换为内部图片引用格式。
> 		- 新增选项，可使用 `short paths` 引用图片
> （例如 `[[forest.jpg]]` 而非 `[[path/forest.jpg]]`）。
> 	- **更新**
> 		- 改进了横幅图片选择窗口的 UI。
> - **v2.18.1**
> 	- **更新**
> 		- 改善了横幅图片选择窗口在移动端的布局。
> 		- 从横幅图片选择窗口插入横幅图片时，将路径加上引号。
> - **v2.18.2**
> 	- **新增**
> 		- 支持 SVG 图片。
> 	- **更新**
> 		- 固定横幅图片时现在使用内部链接格式（类似于选择横幅图片模式）。
> 		- 为横幅图片选择窗口设置了最大宽度（1100px）。
> 	- **修复**
> 		- “Cleaned Orphaned Pins”按钮现在可以正确评估内部链接以及普通路径。
> - **v2.19.0**
> 	- **新增**
> 		- 新增水平图像定位功能，包含 X 轴位置滑块。
> 		- X 轴位置支持已添加到常规设置、文件夹图像和笔记属性设置中。
> - **v2.19.1**
> 	- **新增**
> 		- 在“自定义字段名称”设置标签中显示每个字段的笔记属性示例值。
> 	- **更新**
> 		- 更新了 CSS 以解决与 `Bread Crumbs` 和 `Typwriter Mode` 插件的内边距问题。
> - **v2.19.2**
> 	- **修复**
> 		- 修复了常规设置中内容起始位置未正确应用的问题。

[Codescript Toolkit v8.6.0](https://github.com/mnaoumov/obsidian-codescript-toolkit/releases/tag/8.6.0) By _mnaoumov_

> - **v8.0.0**
> 	- 添加渲染 Markdown 的功能
> 	- 添加控制台输出禁用功能
> 	- 支持传递容器参数
> 	- 添加自动运行功能
> 	- 记录最后的运行值
> 	- 处理控制台功能
> 	- 提供更详细的堆栈跟踪信息
> 	- 处理系统根目录问题
> 	- 添加异步加载模块的支持
> 	- 支持嵌套控制台调用、动态代码执行和新函数创建
> 	- 修复缓存问题
> 	- 添加数据验证功能
> 	- 添加移动设备监视器
> - **v8.0.1**
> 	- 暴露内置模块名称到窗口对象
> 	- 应用品牌重塑
> - **v8.0.2**
> 	- 修复初始脚本加载问题
> - **v8.1.0**
> 	- 替换暴露的内置模块名称接口为模块化调用
> - **v8.2.0**
> 	- 添加自动输出控制选项
> - **v8.3.0**
> 	- 增强对私有模块的支持
> 	- 检查路径后缀的完整性
> - **v8.4.0**
> 	- 重构代码块追加功能，支持更灵活的 HTML 元素
> 	- 修复多次初始化的问题
> 	- 解决入口点加载问题
> 	- 增加对循环依赖的支持
> 	- 支持未导出节点的嵌套路径
> 	- 改进作用域模块的处理逻辑
> 	- 为相对路径添加后缀支持
> - **v8.5.0**
> 	- 添加调试成功执行的日志记录功能
> 	- 允许禁用系统消息输出
> 	- 避免缓存空模块
> - **v8.6.0**
> 	- 避免生成误导性警告信息

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Routines](https://github.com/bcwilsondotcom/obsidian-routines-plugin) By _bcwilsondotcom_

> 帮助您在库中直接管理和跟进日常事务。此插件为日常安排提供计时器、日志记录以及分步指导功能。

![Weekly-2025-01-12-Pasted image 20250116162213|650](https://cdn.pkmer.cn/images/Weekly-2025-01-12-Pasted%20image%2020250116162213.png!pkmer)

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

[Settings Management v1.0.6](https://github.com/xhuajin/obsidian-settings-management/releases/tag/1.0.6)

> 更改了网格布局的样式。

## 外观

[**Playground** Theme](https://github.com/benjaminezequiel/playground-theme) By _Ezben_

![Weekly-2025-01-12-Pasted image 20250116212942|650](https://cdn.pkmer.cn/images/Weekly-2025-01-12-Pasted%20image%2020250116212942.png!pkmer)

![Weekly-2025-01-12-Pasted image 20250116213024|650](https://cdn.pkmer.cn/images/Weekly-2025-01-12-Pasted%20image%2020250116213024.png!pkmer)

> 一个现代而有趣的 Obsidian 主题，专注于视觉层次和简洁的排版。特色包括鲜艳的标题颜色、增强的提示框以及精心对齐的列表，提供井然有序的笔记体验。非常适合偏好简洁界面且喜欢适度色彩点缀的浅色和深色模式用户。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

