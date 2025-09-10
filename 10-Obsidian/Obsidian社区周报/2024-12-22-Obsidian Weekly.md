---
uid: 20241225221919
title: Obsidian Weekly 2024-12-22：Obsidian v1.8.0 前瞻 & 全文导出为 LaTeX
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-12-22：Obsidian v1.8.0 前瞻 & 全文导出为 LaTeX
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241225221951
---

# Obsidian Weekly 2024-12-22：Obsidian v1.8.0 前瞻 & 全文导出为 LaTeX

> [!Abstract]
> **统计时间**：2024-12-08 21:00 ~ 2024-12-22 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.8.0 内测版现已发布

#### 桌面版

##### 新增

- **网页查看器**：全新的核心插件，允许您在 Obsidian 内打开外部链接。这使得无需离开应用即可阅读链接内容，从而简化了多任务处理和网络研究项目的操作。该插件默认关闭，需要在设置中手动启用。
- **隐藏更改**：添加了“隐藏我的更改”按钮，可在共享 Obsidian Sync 库的同步视图中隐藏您自己的文件更改。

##### 改进

- **下载附件**：新增“下载当前文件附件”命令，能下载所有外部嵌入的图片，并将外部链接替换为内部嵌入。
- **复制属性值**：您现在可以通过右键菜单或 `Command/Ctrl + C` 从列表属性中复制单个值。
- **属性菜单**：右键单击本地属性视图中的任意位置现在会显示属性菜单。
- **文件资源管理器优化**：
    - 右键单击文件树视图任意位置会显示右键菜单。
    - 新增菜单选项：创建包含所选条目的新文件夹。
    - 将文件拖动到折叠的文件夹上时，文件夹会自动展开。
- 在属性菜单中新增排序选项。
- 标签页太小时会隐藏关闭按钮。
- 在 Obsidian Sync 版本历史视图中，单击活动条目将展开其内容。
- Callout 右键菜单现在包含删除 Callout 格式的选项。
- “在文档中显示反向链接”首选项现在按文件保存。

##### 修复

- 实时预览现在可以正确呈现参考样式链接。
- 制表符大小设置现在控制制表符/缩进的视觉宽度。
- 修复了重命名标题和块 ID 时显示的修改文件数不正确的问题。
- 图形视图不再将白板文件视为“附件”。
- 修复了搜索排序偏好设置不总是被保存的问题。
- 现在，在退出 Obsidian 之前，布局和配置更改将始终保存。
- 修复了当光标位于文件开头且模板以水平线开始时，“插入模板”功能失效的问题。
- 修复了当属性名称为空时右键不允许单击属性图标的问题。
- 修复了 `Alt-Enter` 在光标与嵌入开始 `![[` 重叠时无效的问题。
- 修复了移除非活动主题后应用程序切换回默认主题的问题。
- 现在，当选择多个文件卡时，Canvas 会显示附加的上下文菜单选项。
- 修复了嵌入内代码块和引用块缺少边距的问题。
- 修复了当侧边栏视图处于活动状态时，“重命名文件”功能失效的问题。
- 当没有结果与当前输入匹配时，媒体选择提示不再允许创建文件。
- 文本属性中的 Shift-Enter 输入 Enter 应使用当前输入文本值。
- 修复文件名以希腊字符结尾时的链接解析。
- 脚注 ID 现在不区分大小写。
- 修复了 PDF 文本选择时的闪烁问题。
- 修复了嵌入标题中的 Markdown 未正确渲染的问题（如 `## *Hello*, World`）。
- 提升代码块颜色对比度，并为代码块边框添加 CSS 变量。
- 修复了单击引用中的“复制”按钮切换至源代码模式的问题。
- 添加“重试”按钮，解决因网络连接差导致无法加载远程仓库的问题。
- 修复了某些日文字符在默认字体下渲染不正确的问题。
- 修复了弹出窗口中的 REM 单位与主窗口不匹配的问题。
- 修复了内联脚注不总是被元数据缓存处理的问题。
- 修复了任务复选框在可编辑行中的位置与源模式下的渲染复选框冲突的问题。

##### 第三方库更新

- 升级 prism.js 至 1.29.0。
- 升级 Turndown 至 7.2.0。
- 升级 Mermaid 至 11.3.0。
- 升级 Codemirror 至最新版本。

#### 移动端

- **文件管理器右键菜单改进**：
    - 显示文件夹的文件和文件夹计数。
    - 显示文件的创建时间和修改时间。
- **配置同步优化**：不再等待 iCloud 完成同步配置文件。卸载的配置文件将重新下载，同步完成后会提示重新加载应用。
- **标签页切换器改进**：
    - 活动文件始终在标签页切换器中高亮显示。
    - 新增“打开标签页切换器”命令，可绑定至下拉操作。
- **问题修复**：
    - 修复了关闭侧边栏视图时活动文件未重置的问题。
    - 在 iOS 上，点击状态栏现在始终滚动至活动文件顶部。如果侧边栏处于活动状态，则滚动至侧边栏顶部。

## 插件新闻

### 社区插件

#### 新增

[Link Maintainer](https://obsidian.md/plugins?id=link-maintainer) By _wenlzhang_

> 拆分或重新组织笔记时保留笔记链接。

[Import Todoist tasks](https://obsidian.md/plugins?id=import-todoist) By _Duke_

> 将您的所有任务从 Todoist 导入到 Obsidian。

[kkh](https://obsidian.md/plugins?id=kkh) By _奈幾乃 (uakms)_

> 使用 kkh 字典将旧式日文汉字和假名转换为现代写法。

[WonderBox](https://obsidian.md/plugins?id=wonderbox) By _Christian HUMBERT_

> 可将自定义文本块转换为风格化的框，以更好地组织和突出显示您的笔记。使用此插件，您可以创建具有特定视觉样式的 **note** 、 **Tip** 、 **info** 、 **warning** 或 **anger** 块。

![Weekly-2024-12-22-Pasted image 20241224181935|650](https://cdn.pkmer.cn/images/Weekly-2024-12-22-Pasted%20image%2020241224181935.png!pkmer)

[Custom Image Auto Uploader](https://obsidian.md/plugins?id=custom-image-auto-uploader) By _HaierKeys_

> 批量下载桌面端、iOS 和 Android 平台的笔记中的图片，并将其批量上传并保存到远程服务器、家庭 NAS 或云存储（如阿里云 OSS、Amazon S3、Cloudflare R2）。此外，您还可以拉伸、裁剪和调整图片大小。

[Scribe](https://obsidian.md/plugins?id=scribe) By _Mike Alicea_

> 不仅能够录制您的语音并进行转录，还能利用 AI 的力量总结和丰富笔记。沉浸在无缝体验中，您的口语可以轻松转换为结构化、易于导航的知识库。

[Latex Exporter](https://obsidian.md/plugins?id=latex-exporter) By _Matthew S. Scott_

> 直接用 Obsidian 写论文！将 Obsidian 笔记导出为完整的 LaTeX 论文，包括嵌入的内容、LaTeX 环境、引文、参考文献、LaTeX 部分、图表等。所有在 Obsidian 中可见的内容都将包含在导出中！

[Note From Form](https://obsidian.md/plugins?id=note-from-form) By _Sergei Kosivchenko_

> 定义动态输入表单并用于创建笔记。

![Pasted image 20241223003109|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241223003109.png!pkmer)

[Force Read Mode](https://obsidian.md/plugins?id=force-read-mode) By _al3xw_

> 强制指定文件夹中的 Markdown 文件以只读模式打开。

#### 更新

[Easy Typing v5.5.11](https://github.com/Yaozhuwa/easy-typing-obsidian/releases/tag/5.5.11) By _Yaozhuwa_

> - 基础编辑增强：支持粘贴多行内容到列表或者引用块时，自动添加列表或者引用前缀
> - 基础编辑增强：支持粘贴多级列表项内容到列表
> - 修复：修复 CMD+Enter 新建多级引用行时错误添加空格的问题

![Weekly-2024-12-22-397477425-b82e17d7-3cb4-470f-977e-0efd98948854|650](https://cdn.pkmer.cn/images/Weekly-2024-12-22-397477425-b82e17d7-3cb4-470f-977e-0efd98948854.gif)

[Quiet Outline 0.3.38](https://github.com/guopenghui/obsidian-quiet-outline/releases/tag/0.3.38) By _the_tree_

> 增加快捷键以跳转到相对于当前光标位置的上一个/下一个标题。

[List Modified v3.3.0](https://github.com/franciskafieh/obsidian-list-modified/releases/tag/3.3.0) By _Francis Kafieh_

> - 修复了分隔符前后存在空格时无法识别的问题。
> - 新增本地禁用插件设置，解决了许多用户的同步问题。
> - 修复了当天第一个修改的笔记有时会被记录为“创建”而非“修改”的问题。
> - 优化用户体验：移动或重命名文件后会立即重新检查是否符合条件，而无需编辑文件。

[PDF++ v0.40.17](https://github.com/RyotaUshio/obsidian-pdf-plus/releases/tag/0.40.17) By _Ryota Ushio_

> - **v0.40.14**
>     - **适配 Obsidian v1.8.0**
>     - 新增“页面内滚动”选项，允许一次专注于单个页面。目前需使用键盘或在页面编号框中输入数字以切换页面。计划添加上一页/下一页按钮，以便启用该功能时使用更加便捷。
>     - 优化了文本高亮算法，可能会缓解之前报告的性能问题。
>     - 修复了复制链接命令生成的链接文本缺少文本选择参数的错误。
> - **v0.40.15**
>     - 修复了在 Obsidian 1.8.0 中自动复制功能无法正常工作的问题。
>     - 新增高级选项“引用 ID 模式”，允许根据目标名称自定义哪些链接被视为引用链接。
> - **v0.40.16**
>     - 修复了在 Obsidian 1.8 中矩形选择工具无法正常工作的问题。
> - **v0.40.17**
>     - 修复了由于 Electron 的破坏性更新导致从 Finder 拖放文件时创建临时文件失败的错误。

[Pixel Banner v2.15.2](https://github.com/jparkerweb/pixel-banner/releases/tag/2.15.2) By _Justin Parker_

> - **v2.13.0**
>     - 新增
>         - 新增查看图片按钮图标选项，可在全屏模式中打开横幅图片
>             （支持与 image toolkit 等插件配合使用）
> - **v2.13.1**
>     - 更新
>         - 窗口大小调整时横幅宽度将自动更新
>         - 横幅宽度现已兼容流行的 `minimal` 主题
> - **v2.13.2**
>     - 更新
>         - 调整了横幅位置、内边距和滚动条宽度的动态 CSS 计算
> - **v2.14.0**
>     - 新增
>         - 新增设置，用于隐藏嵌入笔记的标题
> - **v2.15.0**
>     - 新增
>         - 新增 `Select Image` 按钮图标，可通过图片搜索模式简化横幅图片选择流程（默认启用）
>         - 默认路径设置，可预先过滤图片搜索模式以定位到笔记库中的特定文件夹
>         - 新的命令面板选项，可快速打开图片搜索/选择模式
>         - 这些改进使应用 Pixel Banners 到笔记变得更加简单直观
> - **v2.15.1**
>     - 新增
>         - 使用 `Select Image` 按钮时，可从文件系统中选择/上传图片的选项
> - **v2.15.2**
>     - 修复
>         - 修复了使用 `Select Image` 按钮选择带有 `[` 字符的文件名图片时出现的问题

[Excalidraw v2.7.2](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.7.2) By _Zsolt Viczian_

> - **v2.7.0**
>     - **修复**
>         - 各种 Markdown 可嵌入内容的“模糊性”问题：
>             - 修复在启用单击编辑时出现的外观设置和编辑模式切换问题。
>             - 确保嵌入文件的编辑不再意外中断。
>         - **悬停预览**：禁用背景笔记卡片的悬停预览以减少干扰。
>         - **设置保存**：修复插件设置在每次启动时不必要保存的问题。
>     - **新功能**
>         - **图像裁剪对齐对象**：启用场景中的对齐功能后，图像裁剪现在会对齐到附近的对象。
>         - **笔模式会话持久性**：在同一会话中的绘图之间切换时，Excalidraw 会记住最后的笔模式。
>     - **重构**
>         - **Mermaid 图表**：Excalidraw 现在使用其自己的 Mermaid 包，打破了对 Obsidian Mermaid 更新的未来依赖。这确保了稳定性，并包括自 2024 年 2 月以来对 Excalidraw Mermaid 所做的所有修复和改进。插件文件大小略有增加，但此更改显著提高了可维护性，同时对用户来说是不可见的。
>         - **MathJax 优化**：MathJax（LaTeX 方程式 SVG 图像生成）现在按需加载并尽可能压缩，以最大程度地减小包含 Mermaid 对启动和文件大小的影响。
>         - **按需语言加载**：非英语语言文件现在被压缩，并在需要时加载，以平衡由于 Mermaid 导致的文件大小增加，同时提高加载速度。
>         - **代码库重构**：通过移除大量 `//@ts-ignore` 指令和增强模块化改进了类型安全性。引入了新的管理类：**CommandManager**、**EventManager**、**PluginFileManager**、**ObserverManager** 和 **PackageManager**。计划在未来的版本中进一步重构以提高可维护性和稳定性。
> - **v2.7.1**
>     - **修复**
>         - 从文件系统中删除 Excalidraw 文件，而该文件正在 Obsidian 的全屏模式下打开，会导致 Obsidian 卡在全屏视图中。
>         - LaTeX 语句中的中文字体无法渲染。
>         - 自 Electron 32（新版 Obsidian 桌面安装程序）以来，从 Finder 或操作系统文件浏览器拖放链接不起作用，现已修复。
>         - 解决切换 Obsidian 窗口时不必要的图像重新加载问题。
> - **v2.7.2**
>     - **修复**
>         - 插件无法在 **iOS 16 及更早版本**上加载。
>         - 在 `# Excalidraw Data` 和 `## Text Elements` 之间添加空行，以遵循 **正确的 Markdown 格式化**。
>         - 向视图中添加 **可嵌入内容** 未遵循插件设置中配置的元素背景和笔触颜色。
>         - **分解选定元素脚本** 未复制从 Obsidian 外部嵌入的图像的 URL 和 URI。请从脚本库更新您的脚本。
>         - 当 **重新排列 Obsidian 标签页**（如将两个标签页并排放置，然后移动其中一个到另一个位置）时，如果标签页是 Excalidraw 标签，在移动后该标签页会显示为无响应状态，直到调整标签页大小。
>     - **源码重构**
>         - 更新了项目中的文件名、文件位置和文件名大小写。
>         - 将 onDrop、onDragover 等处理程序提取到 ExcalidrawView 中的 DropManager。

[Vertical Tabs v0.12.4 · oxdc/obsidian-vertical-tabs · GitHub](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.12.4) By _oxdc_

> - **v12.2**
>     - **引入后台模式**
>         - Vertical Tabs 现在可以在后台无缝运行，而无需显示垂直的标签列表。非常适合喜欢水平标签但仍想使用高级功能（如每个标签页的缩放和更智能的标签导航）的用户。
>     - **新增**
>         - **更智能的标签页导航算法：** 增强了稳定性和边缘案例的覆盖范围，提供更可靠的导航体验。
>         - **临时标签页改进：** 现在的行为更接近 VSCode，当您拖动、双击、编辑或固定标签时，标签将变为非临时标签。
>         - **新命令：** 一键将所有临时标签页转换为非临时标签页。
>         - **初始化改进：** Vertical Tabs 现在会智能减少临时标签页的数量，以实现更流畅的启动。
>         - **精细定制：** 提供更细致的选项，让您可以更精细地定制自己的标签页导航策略。
>         - **持久化分组状态：** 分组的折叠状态现在会在重启后保持不变。
>         - **支持 Obsidian 悬停编辑器：** Vertical Tabs 现在与 Hover Editor 完美集成。
>         - **错误修复：** 多项修复，为您带来更流畅、更可靠的使用体验。
> - **v12.3**
>     - **新功能与改进**
>         - 新设置：为工具栏添加更多控制按钮。
>         - 新设置：自动展开活动分组。
>         - 新操作按钮：显示活动标签页 —— 快速定位并高亮当前活动的标签页。
>     - **错误修复**
>         - 修复了一个导致侧边栏标签页（如搜索和文件重命名）不可用的严重问题。
>         - 修复了全局折叠状态未正确同步的问题。
> - **v12.4**
>     - 支持 Obsidian v1.8

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Image Picker](https://github.com/AriTheElk/obsidian-image-picker) By _AriTheElk_

> 此插件可以在 Obsidian 库中以 _极其快_ 的速度浏览和查找媒体文件。它**性能卓越**，可自动生成缩略图，并在后台为您的库建立索引以获得即时搜索结果。

![Weekly-2024-12-22-preview|650](https://cdn.pkmer.cn/images/Weekly-2024-12-22-preview.gif!pkmer)
> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

