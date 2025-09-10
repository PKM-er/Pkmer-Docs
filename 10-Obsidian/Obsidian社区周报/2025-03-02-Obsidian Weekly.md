---
uid: 20250305005302
title: Obsidian Weekly 2025-03-02：Obsidian v1.8.9 前瞻！多样化的笔记浏览视图与文本粘贴方式
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-03-02：Obsidian v1.8.9 前瞻！多样化的笔记浏览视图与文本粘贴方式
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250305092533
---

# Obsidian Weekly 2025-03-02：Obsidian v1.8.9 前瞻！多样化的笔记浏览视图与文本粘贴方式

> [!Abstract]
> **统计时间**：2025-02-23 21:00 ~ 2025-03-02 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian 桌面端 v1.8.9 现已发布

#### 桌面端

##### 改进

- 更新了翻译内容。
- 当树状视图（例如文件资源管理器）显示大量项目时，提升了应用性能。
- 更新了应用设置，以反映商业许可的变更。
- 列表自动编号现保留自定义的起始数字。
- Obsidian Sync：如果库已由第三方同步服务管理（可能导致冲突），连接远程库前会显示警告。
- 当禁用“智能缩进列表”时，编辑器不再自动重新编号列表。

##### 问题修复

- 修复了一个回归问题：大型库加载和保存缓存所需时间显著增加（Electron 33 起的 bug）。
- 实时预览现能正确将 `- - -` 渲染为水平线。
- 损坏折叠信息的笔记现可打开。
- 嵌入内容内的表格现会全宽显示。
- 松散列表中的核对项现已正确缩进。
- 点击 PDF 视图内的内容现会聚焦该视图。
- 在阅读模式下折叠的列表项在切换到编辑模式时现能保持折叠状态。
- 若属性处于隐藏状态，从内联标题按下 `↓` 键会聚焦编辑器。
- 通过“快速开始”按钮创建新库时，现会打开 `welcome.md` 文件。
- 链接建议现包括由插件注册的扩展名文件。
- 应用打开后不久所做的文件更改现能正确保存到文件恢复中。
- 修复了有序列表嵌套在无序列表中时编号不正确的问题。
- 在阅读模式下点击堆叠标签页时，现会正确滚动使该标签页显示在视图中。

#### 移动端

包含了直至 [Obsidian 桌面端 v1.8.9](https://obsidian.md/changelog/2025-02-28-desktop-v1.8.9/) 的所有新功能和问题修复。

##### 修复问题

- Android：修复了一个回归问题——大型库加载和保存缓存所需时间显著增加（Chromium 130 起的 bug）。
- 初始引导：提高了对 Obsidian Sync 中托管和自主管理密码的说明清晰度。

## 插件新闻

### 社区插件

#### 新增

[GridExplorer](https://obsidian.md/plugins?id=gridexplorer) By _Devon22_

> 以网格视图浏览笔记文件。

![Weekly-2025-03-02-Pasted image 20250304202457|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250304202457.png!pkmer)

[Media Viewer](https://obsidian.md/plugins?id=mediaviewer) By _By Devon22_

> 提供一个直观的媒体浏览器，使用户能够轻松查看笔记中的媒体文件（如图片和视频）。

![Weekly-2025-03-02-Pasted image 20250304202236|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250304202236.png!pkmer)

[My Thesaurus](https://obsidian.md/plugins?id=my-thesaurus) By _Mara-Li_

> 根据同义词库 CSV 或 Markdown 表自动添加标签。

[Paste Image Into Property](https://obsidian.md/plugins?id=paste-image-into-property) By _Nito_

> 在实时预览模式下将剪贴板中的图像添加到属性。
> 与 [paste imag rename](https://github.com/reorx/obsidian-paste-image-rename) 插件兼容。

[Extended Markdown Syntax](https://obsidian.md/plugins?id=extended-markdown-syntax) By _Kotaindah55_

> 使用分隔符而不是 HTML 标签来扩展你的 Markdown 语法，例如下划线、上标、下标、高亮和对齐。

![Weekly-2025-03-02-36926659-62d3-49b4-b945-552b86a1553c|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-36926659-62d3-49b4-b945-552b86a1553c.gif!pkmer)

[Rsync](https://obsidian.md/plugins?id=rsync) By _Ganapathy Raman_

> 使用 rsync 同步笔记和自动备份。

[YourPulse - Your Writing Activity Visualised](https://obsidian.md/plugins?id=yourpulse) By _Jiri Sifalda_

> 允许用户跟踪其库中所有笔记的每日字数统计。该插件提供了类似于 GitHub 贡献图的写作活动可视化展示，并提供公共个人资料功能，以便分享选定的笔记。

![Weekly-2025-03-02-Pasted image 20250304150713|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250304150713.png!pkmer)

[Image Size](https://obsidian.md/plugins?id=image-size) By _Jie Zhang_

>设置粘贴图像的默认大小。

[Paste Quote](https://obsidian.md/plugins?id=paste-quote) By _Jacob Williams_

> 用于帮助调整从剪贴板粘贴时的格式和引用引文。目前，引用支持仅适用于从 Kindle 应用中粘贴的引文，并专注于生成 [Pandoc 风格的引用](https://pandoc.org/chunkedhtml-demo/8.20-citation-syntax.html)。
> 该插件还包含 2 个命令，可将来自 Zotero 等的参考文献粘贴到笔记属性中的 `references` 部分，以及为参考文献部分的条目插入 Pandoc 样式的引用。

![Weekly-2025-03-02-Pasted image 20250304145715|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250304145715.png!pkmer)

[LLM Tagger](https://obsidian.md/plugins?id=llm-tagger) By _David Jayatillake_

> 使用 Ollama 利用本机运行的大型语言模型自动为你的 Obsidian 笔记添加标签。

[Daily Routine](https://obsidian.md/plugins?id=daily-routine) By _sechan100_

> 帮助您追踪和管理重复性任务 — — 无论是每天执行的任务、安排在特定工作日执行的任务，还是日常工作中的重要任务。

[FolderFile Splitter](https://obsidian.md/plugins?id=folder-file-splitter) By _Xu Quan_

> 将文件夹和文件列表拆分为独立视图，从而简化导航、提高清晰度，并使整理笔记更加直观。

![Weekly-2025-03-02-Pasted image 20250304142510|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250304142510.png!pkmer)

[Hide Commands in Menu](https://obsidian.md/plugins?id=hide-commands-in-menu) By _bomian98_

> 允许你隐藏任何命令，包括来自社区插件的命令。

![Weekly-2025-03-02-Pasted image 20250304140408|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250304140408.png!pkmer)

[PDF Paste](https://obsidian.md/plugins?id=pdf-paste) By _Cormac_

> 当从 PDF 或其他来源复制文本时，你常常会遇到糟糕的格式、不必要的换行以及带连字符的断行。PDF paste 会清理这些格式问题，使内容更适合你的笔记。

![Weekly-2025-03-02-d9184b45-4a5a-4fb4-86e3-e0be9ed9bddf|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-d9184b45-4a5a-4fb4-86e3-e0be9ed9bddf.gif)

[PDF Writer](https://obsidian.md/plugins?id=pdf-writer) By _Jobelin Kom_

> 写入并填充 PDF。

[Extended File Support](https://obsidian.md/plugins?id=extended-file-support) By _Nick de Bruin_

> 为各种文件类型添加文件支持。允许查看和嵌入这些 filetypes。包括：.kra，.psd，.obj，.glb，.gltf 等。

[Checkbox Sync](https://obsidian.md/plugins?id=checkbox-sync) By _Grol_

> 如果所有子复选框都完成，则自动勾选父复选框；否则取消勾选父复选框。

![Weekly-2025-03-02-showcase|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-showcase.gif!pkmer)

[HTML checkboxes](https://obsidian.md/plugins?id=html-checkboxes) By _Anareaty_

> 允许您快速将 HTML 复选框添加到您的笔记中并使其可点击。

![Weekly-2025-03-02-Pasted image 20250304000949|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250304000949.png!pkmer)

[Last Position](https://obsidian.md/plugins?id=last-position) By _saktawdi_

> 在打开 Markdown 文档时自动滚动到上次查看的位置。
> _编者按：可视为 [Remember cursor position](https://obsidian.md/plugins?id=remember-cursor-position) 插件进阶版。_

[Thecap cv generator](https://obsidian.md/plugins?id=thecap-cv-generator) By _Thecap_

> 在你的 Obsidian 库中直接生成 PDF 格式的简历。

![Weekly-2025-03-02-Pasted image 20250303230935|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250303230935.png!pkmer)

[Timecodes](https://obsidian.md/plugins?id=timecodes) By _Kirill Gavrilov_

> 在阅读模式下将原始时间码（`MM:SS` / `HH:MM:SS`）转换为 Obsidian 的可点击链接。

![Weekly-2025-03-02-405371349-a7b99077-1b18-42a8-a818-ebf0afe6d0f7|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-405371349-a7b99077-1b18-42a8-a818-ebf0afe6d0f7.gif!pkmer)

[Idle Monitor](https://obsidian.md/plugins?id=idle-monitor) By _alberto98fx_

> 追踪用户活动，并在你停止打字或移动鼠标时提供实时反馈。它包含可自定义选项，可显示空闲时间、调整活动监控设置，并以美丽的彩虹渐变效果展示状态文本。

[Flowcharts](https://obsidian.md/plugins?id=flowcharts) By _land0r_

> 使用 **flows.js** 在 Obsidian 中渲染流程图。

![Weekly-2025-03-02-Pasted image 20250303184255|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250303184255.png!pkmer)

[On This Day](https://obsidian.md/plugins?id=on-this-day) By _Jose Elias Alvarez_

> 在简单的面板视图中显示您当天的每日笔记。灵感来自 [Day One](https://dayoneapp.com/) 的“今日”功能。

![Pasted image 20250303160211|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250303160211.png!pkmer)

#### 更新

[PDF++ 0.40.27](https://github.com/RyotaUshio/obsidian-pdf-plus/releases/tag/0.40.27) By _Ryota Ushio_

> - **新增功能与改进**
>     - 现在你可以通过激活新选项 **Rectangular selection embeds > Follow "adapt to theme" setting** (`obsidian://pdf-plus?setting=rectFollowAdaptToTheme`) 为矩形选择嵌入启用暗色模式。
>     - 新增 **Toggle PDF sidebar** 命令。
>     - 现在你可以在右键菜单中选择复制格式时按住 `Cmd` / `Ctrl` 键，以绕过选项 **Context menu in PDF viewer > Update color palette from context menu** (`obsidian://pdf-plus?setting=updateColorPaletteStateFromContextMenu`)。
>     - 新增选项 **Misc > Do not display popups for rubber stamp annotations** (`obsidian://pdf-plus?setting=hideStampAnnotation`)。这对使用 [iOS/iPad's Markup tool](https://support.apple.com/en-us/119875) 进行手写非常有帮助。详情请参见设置标签页中的说明。
>     - 现在你可以按 `Escape` 键退出矩形选择模式。
> - **问题修复**
>     - 修复了问题 [#397](https://github.com/RyotaUshio/obsidian-pdf-plus/issues/397)：同时加载多个矩形选择嵌入会导致内存使用过高，从而使移动设备上的应用崩溃。该问题通过改进内存使用和限制嵌入渲染的并发任务数（同时执行的任务数量）得以解决。
> - **杂项**
>     - 如果你的 Obsidian 安装程序版本低于 1.6.5，PDF++ 将显示警告并提示你重新安装 Obsidian。这是因为旧版本的安装程序无法拖放外部 PDF 来创建伪文件（[#395](https://github.com/RyotaUshio/obsidian-pdf-plus/issues/395)）。
>     - 此外，对于 Obsidian 应用版本低于 1.6.5 的用户，也会显示警告，因为他们近期无法接收到 PDF++ 的更新。

[Anchor Link Display Text v1.2.0](https://github.com/rca-umb/anchor-link-display-text/releases/tag/1.2.0) By _Robert C Arsenault_

> - **新增**
>     - 显示文本建议。当光标位于带有显示文本的锚点链接之后时，会弹出建议窗口。该插件支持三种显示文本格式，每种格式各提供一条建议（分别为：不显示笔记名称、先显示笔记名称再显示标题、先显示标题再显示笔记名称）。
> - **变更**
>     - 现对标题分隔符进行验证，不允许包含破坏链接的字符 `[]|#^`。如果在分隔符字段中输入任意此类字符，该字符将被忽略，并会显示警告信息。
> - **修复**
>     - 链接到区块时，不会将 `^` 字符包含在显示文本中。
>     - 修正了一些细微的拼写错误。

## 外观

[**flexcyon** Theme](https://github.com/bladeacer/flexcyon) By _bladeacer_

![Weekly-2025-03-02-Pasted image 20250304150504|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250304150504.png!pkmer)

> 一个结合 Halcyon 和 Flexoki 配色方案的 Obsidian 主题。

[**Sad Machine Druid** Theme](https://github.com/Halftroll0/Sad-Machine-Druid) By _Halftroll0_

![Weekly-2025-03-02-Pasted image 20250304150024|650](https://cdn.pkmer.cn/images/Weekly-2025-03-02-Pasted%20image%2020250304150024.png!pkmer)

> 基于 0xGlitchbyte 的 Everforest 移植版的 Obsidian 主题。配色从红/绿调转向蓝/绿调。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

