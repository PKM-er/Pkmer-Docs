---
uid: 20251217000519
title: Obsidian Weekly 2025-12-14：Obsidian v1.11.1 内测版前瞻
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-12-14：Obsidian v1.11.1 内测版前瞻
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20260114235251
---

# Obsidian Weekly 2025-12-14：Obsidian v1.11.1 内测版前瞻

> [!Abstract]
> **统计时间**：2025-12-01 21:00 ~ 2025-12-14 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.11.1 内测版已发布

#### V1.11.0 桌面端

##### 改进

- 为设置页面各部分添加图标。
- **文本和列表属性**现支持 Markdown 链接。当目标文件被移动或重命名时，内部链接会自动更新。
- **每日笔记**：每日笔记的日期格式可从预设列表中选择。
- 尝试将文件重命名为包含不安全字符（如 `#` 或 `]`）时，现在仅会发出警告。
- 导入文件时（例如通过拖放），Obsidian 现在会自动清除文件名中的无效字符。
- 在文件上下文菜单中添加了“**复制路径**”子菜单。
- **macOS**：开关和滑块的样式现在与其原生样式保持一致。
- 新增设置项 **文件与链接 → 启动时打开的文件**。可在“上次打开的笔记”、“新建笔记”、“特定笔记”或“每日笔记”之间选择。如果您之前使用“启动时打开每日笔记”选项，请务必更新您的库设置以改用此新选项。
- 新增用于存储插件密钥的“**钥匙串**”设置部分。插件 API 即将推出。

##### 问题修复

- 修复参考链接中链接定义前不允许有空格的问题。
- 修复在笔记间导航时，属性列表出现/消失有时会导致界面闪烁的问题。

##### 开发者更新

- Obsidian 现在捆绑 **Inter Variable** 字体以替代 Inter。Inter Variable 支持可变字重。
- 在 API 中新增 `SettingGroup`。设置现在可以组织到带有可选标题的逻辑分组中，这为设置组织提供了更标准化的设计语言。

#### V1.11.0 移动端

##### 亮点功能

###### IOS

- **锁屏和控件中心小组件**：可快速**新建笔记**、**打开特定笔记**、**打开每日笔记**、**打开搜索**或**打开 Obsidian 应用**。
- **主屏幕小组件**：可**创建笔记**、**查看笔记**或**打开您的每日笔记**。
- **快捷指令**：支持**打开笔记**、**打开每日笔记**、**捕获内容到笔记**。捕获快捷指令允许您在不打开 Obsidian 应用的情况下，向笔记追加或前置文本。
- **Siri 集成**：例如“使用 Obsidian 捕获”、“捕获到 Obsidian”、“在 Obsidian 中打开我的每日笔记”、“在 Obsidian 中搜索”。
- 在 Spotlight 中搜索 Obsidian 会显示额外操作：新建笔记、搜索和每日笔记。

###### Android

- **新小组件**：**打开笔记**、**新建笔记**、**搜索**、**每日笔记**、**打开 Obsidian 应用**。您可以添加多个相同类型的小组件以打开不同文件或触发不同搜索查询，通过长按小组件进行配置。
- **快速设置磁贴**（需要 Android 7.0+）。
- **新快捷方式**（需要 Android 7.1+）：打开笔记、每日笔记。可通过长按应用图标、将快捷方式图标拖到主屏幕，或（对于大多数设备厂商）通过启动器搜索栏访问。目前尚不可配置。

##### 改进

- 插件开发者现在可以请求用户位置（例如用于地图类插件）。
- **整个界面已重新设计**，以改善编辑和阅读体验。
- 在笔记中向下滚动时，导航栏会自动隐藏以最大化阅读屏幕空间。点击或稍微向上滚动即可再次显示导航栏。
- 新的侧边栏导航，用于切换侧边栏标签页和执行操作，为符合人体工学将其对齐到底部。
- 切换到搜索视图时会立即聚焦到搜索输入框。
- 为开关和复选框添加了触觉反馈。
- 添加双击操作以将笔记从阅读模式切换到编辑模式。

##### 问题修复

- 修复了指定 `vault` 并指向 iCloud 库的 URI 会静默失败的问题。
- 如果您的库存储在 iCloud 中，我们会检查是否有配置文件需要从 iCloud 重新下载。文件下载完成后，您将看到提示要求重新加载应用。
- 修复了点击屏幕时光标会定位到上次光标位置而非点击位置的问题。
- 在平板电脑上，工具栏现在居中对齐。
- 改进了滑动手势的行为，开始滑动时内容将不再滚动（例如在设置中滑动返回）。
- 修复了键盘关闭时滚动位置丢失的问题。
- **数据库**：汇总行不再被导航栏遮挡。

#### V1.11.1 桌面版

##### 问题修复

- 修复了文本和列表属性中的外部链接（例如 `[链接](http://example.com)`）无法在浏览器中打开的问题。
- 修复了应用中“Inter”字体无法被识别的问题。
- 修复了嵌入式数据库文件周围的边框和间距问题。
- **从右至左书写语言**：修复了属性编辑器的布局问题。

#### V1.11.1 移动版

##### 改进

- 使用每日笔记小组件时，如果您尝试在未启用“每日笔记”核心插件的情况下打开每日笔记，将会出现警告。
- **Android** 现在在可用时使用“Google Sans Flex”字体。
- 更新了我们的提示消息设计。在手机上，提示现在将显示在屏幕顶部而非底部。
- 导航栏隐藏时，减少了屏幕边缘的文本淡出效果。
- 在平板电脑上，对话框现在具有更小的边框半径。

##### 问题修复

- 修复了搜索栏在顶部被截断的问题。
- 修复了在平板电脑上，侧边栏固定时文本溢入主区域的问题。

## 插件新闻

### 社区插件

#### 新增

[DOCX Exporter](https://obsidian.md/plugins?id=docx-exporter) By _Kanshurichard_

> 支持将笔记导出为 Microsoft Word docx 文件，无需安装 Pandoc 等额外的外部工具，并可在移动设备上使用。
> - **跨平台支持**：可在 Windows、macOS、Linux、iOS 和 Android 上运行，无需额外软件。
> - **富文本导出**：支持导出包括标题、粗体、斜体、列表、超链接和代码块在内的多种 Markdown 格式。
> - **图片支持**：能够导出笔记中的本地及网络图片，并自动处理图片格式与尺寸。
> - **兼容性**：生成的 DOCX 文件与 Microsoft Word 具有良好的兼容性。

![Weekly-2025-12-14-Pasted image 20260114214803|650](https://cdn.pkmer.cn/images/Weekly-2025-12-14-Pasted%20image%2020260114214803.png!pkmer)

[Book Clipper](https://obsidian.md/plugins?id=book-clipper) By _Hossein Fardmohammadi_

> 此插件可将以下网站上的图书信息导入 Obsidian：
> - [goodreads.com](https://www.goodreads.com/)
> - [amazon.com](https://www.amazon.com/)
> - [taaghche.com](https://taaghche.com/)
> - [fidibo.com](https://fidibo.com/)

[API Designer](https://obsidian.md/plugins?id=api-designer) By _Ruveyda Yilmaz_

> 无需离开笔记，即可用可视化方式设计和记录 API 端点。

![Weekly-2025-12-14-Pasted image 20260114214239|650](https://cdn.pkmer.cn/images/Weekly-2025-12-14-Pasted%20image%2020260114214239.png!pkmer)

[Fix Math](https://obsidian.md/plugins?id=fix-math) By _Vladislav Sorokin_

> 将 ChatGPT 和 AI 助手生成的 LaTeX 公式转换为正确的 Markdown 格式：块级公式转换为数学公式，行内公式转换为行内数学公式。

[newslog](https://obsidian.md/plugins?id=newslog) By _protoavatar_

> 从您的 newslog.me 每日订阅包同步新闻简报和 Kindle 精选内容。

[Advanced Ruby](https://obsidian.md/plugins?id=advanced-ruby) By _Peter Yanase_

> 提供了复杂的、与语言无关的 Ruby 注释渲染和编辑功能。
> 虽然 Ruby 通常用于标注日语等东亚文字的读音，但它可用于注释任何类型的文本。
> 此插件支持完整的 Unicode 范围，使其不仅适用于注音，也适用于语义注释或多层标注。

![Weekly-2025-12-14-Pasted image 20260114202738|650](https://cdn.pkmer.cn/images/Weekly-2025-12-14-Pasted%20image%2020260114202738.png!pkmer)

[LaTeX Panel Helper](https://obsidian.md/plugins?id=latex-panel-helper) By _Luster_

> 提供一个便捷的面板，内含分类整理的 LaTeX 符号、实时搜索以及弹出窗口功能，从而提升你的数学笔记效率！

![Weekly-2025-12-14-495185441-e43a32e5-cc92-40ee-9757-df253fee9d66|650](https://cdn.pkmer.cn/images/Weekly-2025-12-14-495185441-e43a32e5-cc92-40ee-9757-df253fee9d66.gif!pkmer)

[SlashComplete](https://obsidian.md/plugins?id=slash-complete) By _Spiderpig86_

> 添加类似 Notion 的斜杠命令自动补全功能，支持直接从编辑器中快速、直观地插入 Markdown 块、格式化内容及执行命令。此插件是默认斜杠命令插件的直接替代品。

[Shogi KIF Viewer](https://obsidian.md/plugins?id=shogi-kif-viewer) By _Luis8492_

> 在笔记中，将 KIF 代码块渲染成交互式将棋棋盘。

[Dangerous Mode](https://obsidian.md/plugins?id=dangerous-mode) By _Vansh Kumar_

> 危险写作模式：持续键入，一旦无操作超过 5 秒，当前笔记即被清除。

[Hydrate](https://obsidian.md/plugins?id=hydrate) By _hydrateagent_

> 支持 MCP 的光标式笔记代理。
> **需付费：** 完整使用 Hydrate 功能需要付费订阅

[Quick Matrix](https://obsidian.md/plugins?id=quick-matrix) By _Charlie Flowe_

> 添加快速生成 LaTeX 矩阵的命令。

[Lark Style CountDown Timer](https://obsidian.md/plugins?id=lark-style-countdown-timer) By _Zhaoyang Yu_

> 创建飞书/Lark 风格的倒计时模块。

![Weekly-2025-12-14-Pasted image 20260114180713|650](https://cdn.pkmer.cn/images/Weekly-2025-12-14-Pasted%20image%2020260114180713.png!pkmer)

[Vault Encrypt](https://obsidian.md/plugins?id=vault-encrypt) By _Pluppen_

> 将你的库转化为一个无法识别的加密文件集合，在提供安全性与匿名性的同时，维持无缝的用户体验。
> **在 Obsidian 应用关闭后，文件将保持加密（或解密）状态。**

[Table Checkbox Renderer](https://obsidian.md/plugins?id=table-checkbox-renderer) By _Daniel Aguerrevere_

> 为 Markdown 表格添加交互式复选框。在阅读模式下切换复选框状态，即可即时更新 Markdown 文件。支持每个单元格内多个复选框以及任何表格布局。

![Weekly-2025-12-14-demo|650](https://cdn.pkmer.cn/images/Weekly-2025-12-14-demo.gif!pkmer)

[SideNote](https://obsidian.md/plugins?id=side-note) By _mofukuru_

> 为你的笔记添加注释。这些注释将显示在专用的侧边窗格中，便于集中审阅和浏览批注，而不会干扰正文。注释会在编辑器中直接高亮显示，方便快速查看。

![Weekly-2025-12-14-Pasted image 20260114173011|650](https://cdn.pkmer.cn/images/Weekly-2025-12-14-Pasted%20image%2020260114173011.png!pkmer)

[Checkbox Style Menu](https://obsidian.md/plugins?id=checkbox-style-menu) By _ReticentEclectic_

> 提供直观的菜单 ，可快速更改复选框样式 。

![Weekly-2025-12-14-474233519-99900dee-997c-443f-a554-283395572d46|650](https://cdn.pkmer.cn/images/Weekly-2025-12-14-474233519-99900dee-997c-443f-a554-283395572d46.gif!pkmer)

[Tag Group Manager](https://obsidian.md/plugins?id=tag-group-manager) By _Stargazer-cc_

> 管理和快速插入标签。它允许用户创建自定义标签组，并通过浮动窗口快速将标签插入到笔记中，提高笔记整理和分类的效率。

![Weekly-2025-12-14-Pasted image 20260110230510|650](https://cdn.pkmer.cn/images/Weekly-2025-12-14-Pasted%20image%2020260110230510.png!pkmer)

#### 更新

[Vault LLM Assistant v1.0.7](https://github.com/brianstm/obsidian-vault-llm-assistant/releases/tag/1.0.7) By _Brians Ijipto_

> - 新增 LMStudio 支持
> - 新增徽章标识与更多 AI 版本支持

[Quiet Outline v0.5.3](https://github.com/guopenghui/obsidian-quiet-outline/releases/tag/0.5.3) By _the_tree_

> 新增功能：添加了 canvas 大纲按名字排序选项及翻译。

[Open Tab Settings v2.0.0](https://github.com/jesse-r-s-hines/obsidian-open-tab-settings/releases/tag/2.0.0) By _jesse-r-s-hines_

> - 通过命令切换设置时新增通知提示
> - 新增自定义 Ctrl 点击行为的选项
> - 新增菜单项：在对侧标签页打开及在复制标签页打开
> - 修复新标签页放置位置与固定标签页相关的错误

[QuickAdd v2.9.2](https://github.com/chhoumann/quickadd/releases/tag/2.9.2) By _Christian B.B Houmann_

> - **亮点（Templater 集成全面革新）**
> 	- 本次更新使 QuickAdd 的 Templater 集成具备确定性且默认安全，解决了长期以来关于光标定位、重复执行以及在捕获过程中意外执行 `<% %>` 的报告。
> 		- 当 QuickAdd 打开目标文件时，`tp.file.cursor()` / 光标跳转现在能够可靠工作（遵循 Templater 的自动跳转设置）。
> 		- 捕获操作不再执行目标笔记中其他位置（包括围栏代码块内）无关的 `<% %>`。
> 		- 当锚点由 Templater 创建时（包含 / trigger-on-create），对新创建文件执行的“后方插入”操作更加可靠。
> 		- 通过移除不必要的整个文件渲染并锁定每个文件的整个文件处理，减少了“模板运行两次 / 重复提示”的情况。
> 		- 模板追加/前置现在仅对插入的片段运行 Templater（而非整个目标笔记）。
> - **行为变更（重要）**
> 	- 捕获到现有文件时，默认不再对整个目标文件运行 Templater。
> 		- 如果您依赖旧版行为，请在捕获选项设置中启用**捕获后在整个目标文件上运行 Templater**。
> - **错误修复**
> 	- **templater:** 为捕获和模板提供确定性的集成

[Hide Sidebars on Window Resize v1.1.1](https://github.com/NomarCub/obsidian-hide-sidebars-on-window-resize/releases/tag/1.1.1) By _NomarCub, Michael Hanson_

> 在“紧凑模式”下不自动展开侧边栏，特指 [Zen Mode 插件](https://github.com/paperbenni/obsidian-zenmode) 中的禅模式。

[Excalidraw v2.18.0](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.18.0) By _Zsolt Viczian_

> - **来自 Excalidraw. com 的新功能**
> 	- 新箭头行为支持将箭头**绑定到图形及图片内部**！
> - **新增功能**
> 	- 导出对话框中新增选项，用于在导出为 SVG 或 PDF 时**包含/排除内部链接**。
> 	    - 便于与他人分享 SVG 或 PDF 文件。
> 	    - 内部链接是指向您 Obsidian 知识库中文件的链接。
> 	    - 默认情况下，内部链接会包含在导出文件中。
> 	    - 可使用新的文档属性 `export-internal-links: false` 为单个绘图禁用内部链接导出。
> - **问题修复**
> 	- 内存泄漏问题。
> 	- 修复长时间使用 Excalidraw 后，文本元素中退格键和 Ctrl+V 可能失效的问题。
> 	- 改进了移动设备上屏幕键盘的检测（问题在 [Discord](https://discord.com/channels/1026825302900494357/1444652800360316959) 上报告）。
> 	- 修复了在移动设备上，“插入任意文件”、“插入 LaTeX”等对话框被屏幕键盘遮挡的问题。现对话框在移动设备上显示于屏幕顶部。
> - **ExcalidrawAutomate 新增功能**
> 	- **createSVG()** 函数现在公开了 `convertMarkdownLinksToObsidianURLs` 和 `includeInternalLinks` 参数。

[Epub Importer v0.8.4](https://github.com/aoout/obsidian-epub-importer/releases/tag/0.8.4) By _aoout_

> - 功能：EPUB 导入新增对日文注音的支持
> - 功能：新增多作者支持

#### Thino [v2.8.12](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.8.12) 已发布

##### 新增

- 新增（UI）：添加 ShadowRoot 组件，实现 Shadow DOM 样式隔离

##### 修复

- 修复（分享）：修复 MarkdownRenderer 生命周期管理，正确初始化和清理 Component
- 修复（Moments）：使用 Obsidian 的 setIcon API 修复编辑按钮图标渲染

##### 样式

- 样式（聊天）：改进 inline 和 fluent 样式下历史按钮的定位
- 样式（Moments）：添加 mix-blend-mode 提升编辑按钮可见性
- 样式（分享）：优化分享对话框中的标签样式

#### Task Genius [v9.13.1](https://github.com/taskgenius/taskgenius-plugin/releases/tag/9.13.1) 已发布

##### 新增功能

- **mcp**：新增元工具与字段筛选功能以减少令牌使用量
- **流畅界面**：为侧边栏项目添加拖放支持
- **看板**：新增列可见性切换功能，支持隐藏/显示列
- **快速捕获**：根据当前筛选状态自动填充元数据
- **计时器**：新增计时器统计面板与“正在处理”视图

##### 错误修复

- **快速捕获**：当输入为空时，初始化默认文件名
- **视图**：在两栏视图下，根据已筛选任务更新侧边栏列表

#### Media Extended [v4.1.5](https://github.com/aidenlx/media-extended/releases/tag/4.1.5) 已发布

- 修复了在 v1.10.6 或更高版本中，于笔记实时预览编辑器内嵌入 YouTube 视频时出现重复播放器的问题。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Media Extended v4.1.5 版本已发布

- 修复了在 v1.10.6 或更高版本中，于笔记实时预览编辑器内嵌入 YouTube 视频时出现重复播放器的问题。

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

#### [YOLO 的亮点/主要功能都有哪些？]( https://pkmer.cn/show/20251205152905 )

介绍一款容易上手、贴合原生体验的新 AI 插件——YOLO。

[「日记皮肤」每天自动换色，告别枯燥笔记]( https://pkmer.cn/show/20251205152514 )

一套 7 种主题配置的 CSS，可为日记中的每一天应用专属颜色方案。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
