---
uid: 20240512232655
title: Obsidian Weekly 2024-05-12：新版本即将到来！可视化操作颠覆性突破
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-05-12：新版本即将到来！可视化操作颠覆性突破！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240513110327
---

# Obsidian Weekly 2024-05-12：新版本即将到来！可视化操作颠覆性突破

> [!Abstract]
> **统计时间**：2024-05-05 21:00 ~ 2024-05-12 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。



## 视频教程

<iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=1904703019&bvid=BV1XU411f7SG&cid=1544884651&p=1&p=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>

## 官方资讯

### v1.6.0 桌面版已开启抢先内测

#### 新功能

- 当应用设置为 RTL 语言时，界面方向现在会镜像显示。
- 更新了左侧边栏布局。库切换器现在显示在底部。应用程序工具栏现在可以在设置中隐藏，或者通过右键单击工具栏并选择“隐藏工具栏”来隐藏。
- 字符和单词计数现在将基于当前选中文本实时计算。
- `Tab` 现在可以补全快速切换和“移动文件”窗口中所选定的路径。

#### 改进

- 工作区初始化加载时间有所改善。
- “更多选项”菜单已重新组织以便浏览定位所需项。
- 添加了“Add alias”（添加别名）命令。
- 添加了“Create new folder”（创建新文件夹）命令。
- 如果在 Obsidian 外部修改了设置，快捷键和属性类型现在会自动重新加载。
- 改进了编辑器解析性能。
- 在添加显示文本到链接时，现在会显示自定义说明和结果。

##### 属性

- 当合并两个属性时，新属性名称现在会在全局属性列表中闪烁。
- 现在可以双击属性列表项进行编辑。

##### 页面预览

- 悬停在脚注 ID 上会显示相应脚注的弹出窗口。
- 预览窗口的大小和位置将更加一致。

##### 同步改进

- 在设置同步时更新了默认的选择性同步。现在，默认情况下，同步将同步：
    - 主要设置
    - 外观设置
    - 快捷键
    - 核心插件
    - 核心插件设置
    - 视频、图像、PDF 和音频
- 插件文件夹中的文件将不再全部被官方同步跟踪，而仅会跟踪以下文件：
    - data.json
    - main.js
    - styles.css
    - manifest.json
- 如果存储空间超过 95%，将会显示“Purge（清理）”按钮。
- 添加了打开活动日志的命令。
- 改进了状态栏菜单的样式。
- 单击状态栏项目现在始终显示同步菜单，而非打开活动日志。
- 调整了设置中“断开连接”按钮的外观。
- 提升了处理待同步更改的同步速度。
- 当主窗口最小化或处于后台时，不再进行限速。
- 改进了同步连接到远程库的加载体验。
- 改进了邀请同步协作者加入库的界面。
- 修复了“查看版本历史”在文件未被同步跟踪时不起作用的问题。

#### 问题修复

- 修复了编辑器中脚注的解析和渲染问题。
- 不再索引大于 2MB 的 Markdown 文件。这应该可以防止程序生成的 Markdown 文件在启动时导致 Obsidian 卡顿。
- 修复了 macOS 应用菜单中“重做”按钮无法生效的问题。
- 属性现在继承了页面预览的设置，无论处于任何视图模式。
- 更新了“移至新窗口”和“在新窗口中打开”图标。
- 在书签视图中更新了右键菜单图标，使其与应用程序的其余部分保持一致。
- 修复了在选择某一标签页后工作区布局无法保存的问题。
- 尝试打开无效的 URL 现在会显示提示，而不是静默失败。
- 当使用“适应系统”的颜色方式时，不再显示“仅限浅色主题”。
- 修复了拖动光标至折叠文本时 vim 模式崩溃的问题。
- 当存在备选建议时，不再显示空文本。
- 允许在引用块内部的行首单击。
- 修复了在 PDF 中点击滚动条旁边位置会滚动的问题。
- 修复了最小化主窗口不能适应系统主题更改的问题。
- 改善了命令面板重新排序时的拖放体验。
- 修复了点击“全部折叠”有时需要点击两次才能生效的问题。
- 修复了反向链接列表无法显示空状态的问题。
- 修复了切换核心插件时无法立即显示“齿轮”图标的问题。
- 修复了单击复选框时展开列表的问题。
- 修复了实时预览中列表折叠按钮会影响文本的问题。
- 修复了鼠标悬停预览中呼出图像被裁剪的问题。
- 改进了重命名时树状项的样式。
- 修复了禁用“破坏性”选项时的外观问题。

##### 搜索

- 在输入带引号的字符串时取消建议。
- 如果下一个字符不是空格，则不会打开建议。
- 单击“清除”按钮将不再导致搜索输入字段失去焦点。

##### 本地化

- 现在将挪威语映射到 Bokmål 区域设置。

##### 表格

- 单击表格右侧的空白区域现在会聚焦编辑器。
- 修复了 Shift + 箭头键无响应的问题。
- 确保主编辑器中的单元格更新时正确更新单元格偏移量。
- 修复了表格单元格内的数学块的解析问题。

#### 开发者

- 我们已经发布了一篇 [指南](https://docs.obsidian.md/Plugins/User+interface/Right-to-left)，指导您如何调整您的主题或插件以支持 RTL 界面。

##### 主题

- 在 Windows 上，默认的等宽字体现在改为 Cascadia Mono，而不再是 Cascadia Code。
- 现在粗体基于当前文本权重计算，因此标题内的粗体仍然会显示为粗体。
- 添加了 `--caret-color` CSS 变量，使得在桌面和移动端都更容易地设置光标颜色。
- 添加了新的 `--link-weight` 变量。
- 用户所设置的界面语言会添加到 `html` 元素上的 `lang` 属性中，这允许给特定语言设置不同的 CSS。
- 当用户的界面语言为 RTL 时，会在 `body` 元素上添加 `.mod-rtl` 类。

##### 插件

- 修复了移除所有属性时 `processFrontmatter` 无法处理文件的问题。
- 改进了对外部配置更改的检测。
- 我们对 `app.emulateMobile` 的行为进行了几项改进，这应该使得测试插件是否兼容于移动端更加容易。尝试运行 NodeJS 库将会显示提示。拖放将更准确地模拟移动端上的行为。应用程序将默认设置 `safe-area-inset` 属性，以便视图正确计算移动设备窗口中的偏移量（例如 iPhone 的灵动岛）。
- 裸模态框现在默认遵循 `safe-area-insets`。
- 对某些进行远程请求的设置按钮添加了加载状态。
- 全局 `app` 已完全从 API 规范中删除（之前标记为已弃用）。

原文见 [Obsidian 1.6.0 Desktop (Early access) - Obsidian](https://obsidian.md/changelog/2024-05-09-desktop-v1.6.0/)

## 插件新闻

### 社区插件

#### 新增

[Canvas Blocks](https://obsidian.md/plugins?id=canvasblocks) By _Kay606_

> 从白板执行 python 脚本。
![2024-05-12-063b6244-05a8-4b70-9a08-6d2b8bae343a](https://cdn.pkmer.cn/images/2024-05-12-063b6244-05a8-4b70-9a08-6d2b8bae343a.gif!pkmer)

#### 更新

[Widgets v0.0.8](https://github.com/rafaelveiga/obsidian-widgets/releases/tag/0.0.8) By _Rafael Veiga_

> 此版本包括：
> - 能够将时钟小部件更改为 12 小时制格式
> - 新的文档介绍如何使用 CSS 片段自定义小部件样式
> - **新小部件**：计数器！在您的笔记中添加一个计数器
[GitHub Publisher v7.2.4](https://github.com/ObsidianPublisher/obsidian-github-publisher/releases/tag/7.2.4) By _Mara-Li_

> **- 错误修复**
> 	- 解决了代码中的拼写错误导致附件和正则替换路径功能失效的问题。
> 	- 解决了此前被忽视的某些嵌入内容未被共享的问题。
> 	- 修复了使用 Obsidian 路径覆盖附件路径时未应用的情况。
> 	- 纠正了在特定条件下存储库未出现在模态框中的问题。现在，模态框正确显示所有存储库，包括设置为快捷方式的存储库。
> 	- 修复了空前置信息或缺少某些键可能导致空值或未定义值，从而引发意外错误的情况。
> - **重构**
> 	- 消除了冗余的控制台日志，以提高开发日志的清晰度。
> 	- 为读取前置信息提供了优化，并调整了路径选项。
> 	- 通过分离接口并为每个键和类添加注释，实施了代码的重构。此外，还纠正了不准确的接口名称。
> 	- 修订了对多个已注册存储库的通知，只在必要时进行有效性检查。
> - **新功能**
> 	- 实现了将 Obsidian 不支持的文件作为附件发送的功能，使用扩展名列表或正则表达式。用户现在可以发送 Python 文件及其描述！
> 	- 启用了通过简单链接附加的文件传输，类似于嵌入内容，无需使用 DataView 键或前置信息。
> 	- 引入了 `Set` 功能，允许前置信息和存储库之间的连接。这使得当使用前置信息修改附件路径时，可以启用自动清理附件等功能。
> 		- 注意：当通过笔记前置信息或非存储库集合编辑路径时，附件的自动清理将持续进行。对于需要自动清理的修改，应使用覆盖附件路径设置，特别是对于根据笔记名称重命名附件的插件。
> 		- **重要提示**：存储库集合不会自动更新。它们在插件（或 Obsidian）重新加载或初始注册时刷新。已添加两个文件重新加载命令：`(Other Repositories) Reload Registered Set` 用于重新加载当前打开的集合或所有已注册的集合。
[Excalidraw v2.1.7](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.1.7) By _Zsolt Viczian_

> - Excalidraw. Com 的更新
> 	- 改进了撤销管理。
> 	- 改进了侧面缩放图像的处理。
> 	- 更改了箭头绑定行为。
> 	- 许多其他次要修复和改进。
> - **新增**
> 	- 为场景中的嵌套（嵌入）Excalidraw 绘图引入了图像缓存。此增强功能应该会缩短场景加载时间，特别是在处理大量嵌入的 Excalidraw 绘图时。
> 	- 添加了新的 OCR 命令面板操作。用户现在可以重新运行 OCR 并对选定的元素运行 OCR。
> - **修复**
> 	- 修复了在 Excalidraw 场景中裁剪可嵌入 PDF 框架导致基于可嵌入元素长宽比的失真的问题。
> 	- 在添加“笔记卡片背面”时，移除了 `# Embedded files` 部分的列表。
> 	- 解决了使用手机键盘隐藏按钮关闭屏幕键盘时，未在 Excalidraw 场景的其他位置点击而未正确调整场景大小的问题。
> 	- 修复了将文本元素粘贴为文本到 markdown 中时，将文本不正确地粘贴到 MD 笔记末尾，并在 Excalidraw 屏幕上呈现换行符的问题。还解决了将图像元素粘贴为图像导致其被粘贴到文档末尾的问题。
> 	- 纠正了当将主题从浅色更改为深色、然后从深色再次更改为浅色、然后再次从浅色更改为深色时，嵌入图像的颜色反转问题。
> 	- 解决了在解锁和旋转裁剪器中裁剪图像时未反映旋转的问题。请注意，旋转图像在裁剪器中需要切换到 markdown 查看模式，将 "locked": true 属性更改为 false，然后再切换回 Excalidraw 模式。这个问题可能只影响了极少数的高级用户。
> 随着该版本发布并庆祝 Excalidraw 下载量突破 200 万次，作者制作了 1 段 17 分钟的视频，以每分钟 3 个功能的速度全面介绍了 Excalidraw 在 Obsidian 中的用途，链接：[The Excalidraw-Obsidian Showcase: 57 key features in just 17 minutes - YouTube](https://youtu.be/P_Q6avJGoWI)
[Note Toolbar v1.7.22](https://github.com/chrisgurney/obsidian-note-toolbar/releases/tag/1.7.22) By _cheznine_

> - **新功能**
> 	- 位置
> 		- 按平台定位工具栏：桌面或移动端
> 		- 选择 `Open toolbar settings` 位置（仅限移动端）以：
> 			- 在编辑器底部添加 `left` 或 `right` 按钮
> 			- 点击后，它将打开您的工具栏作为“菜单工具栏”
> 			- 选择您自己的图标（参见下面的新设置）
> 			- 通过 Style Settings 插件自定义外观
> 		- 新的位置选项 = `Hidden` 完全隐藏了工具栏，这在您只想从导航栏访问工具栏时很有用（参见下文）。
> 			  - ![mobile_floating_button](https://cdn.pkmer.cn/images/mobile_floating_button.gif!pkmer)
> 		- 从导航栏访问工具栏（仅限移动端）
> 			- 在移动端，转到 Obsidian 设置：`外观 > 顶部菜单 > 管理` 并选择 `笔记工具栏`（或从顶部菜单中选择）以将其添加到您的导航栏
> 			- 选择您自己的图标（参见下面的新设置）
> 				- ![Pasted image 20240511200347](https://cdn.pkmer.cn/images/Pasted%20image%2020240511200347.png!pkmer)
> 		  - 右键单击工具栏后在 `Top (fixed)` 和 `Below Properties` 位置之间快速切换
> 			- ![2024-05-12-Pasted image 20240512134529](https://cdn.pkmer.cn/images/2024-05-12-Pasted%20image%2020240512134529.png!pkmer)
> 	- 新的仅限移动端设置（在文件夹映射部分下方）可
> 		- 更改导航栏 / 浮动按钮中的图标
> 		- 在菜单工具栏中切换“编辑工具栏”链接，以方便操作
> 	- 可见性
> 		- 在添加工具栏项目时，设置图标和/或标签是否在桌面或移动端显示（或两者都不显示）
> 		- 如果未设置标签，则菜单工具栏显示图标和标签，或使用工具提示。
> 	- 命令
> 		- 新的 `Open toolbar settings` 命令，可打开当前笔记的工具栏设置
> 	- Style Settings 插件
> 		- 在子标题下重新组织样式，希望更易于找到：颜色、定位、大小和间距以及样式
> 		- 添加设置以调整工具栏和项目间距
> - **改进**
> 	- 应该减少在笔记之间移动时经历的闪烁，如果您的工具栏在顶部位置。
> - **修复**
> 	- 移除了 ITS 主题 添加的项目的符号和链接装饰。

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。
[Stardown](https://github.com/wheelercj/Stardown) By _chris_

> 一键点击复制当前网站的 Markdown 链接。
![2024-05-12-Stardown](https://cdn.pkmer.cn/images/2024-05-12-Stardown.gif!pkmer)

[Grafika](https://github.com/anteloc/obsidian-grafika-plugin?tab=readme-ov-file) By _anteloc_

> 一个用于在 Obsidian 笔记中创建带有交互式可视化的仪表板的插件。
> - 特点
> 	- **创建** Markdown 笔记，并嵌入不同类型的可视化。
> 	- **构建和分享仪表板**，其中包括**交互式**和**实时**的图表、图形和绘图。
> 	- **OpenAI 分析**
> 		- 需要 **OpenAI 账户** 和 **API 密钥**，以及通过 **OpenAI API** 访问 **gpt-4-turbo 模型**。
![2024-05-12-ac3b2ddd-cc61-4567-beb2-6979ecb40d89](https://cdn.pkmer.cn/images/2024-05-12-ac3b2ddd-cc61-4567-beb2-6979ecb40d89.gif!pkmer)

![2024-05-12-1eb73765-83eb-454e-90f9-53b939c36642](https://cdn.pkmer.cn/images/2024-05-12-1eb73765-83eb-454e-90f9-53b939c36642.gif!pkmer)

![2024-05-12-a45775a0-6109-46e6-bb73-bec1ee0cc4c2](https://cdn.pkmer.cn/images/2024-05-12-a45775a0-6109-46e6-bb73-bec1ee0cc4c2.gif!pkmer)

![2024-05-12-b97f1aa1-b25c-4f4c-8cf8-c1cd3a5b84b0](https://cdn.pkmer.cn/images/2024-05-12-b97f1aa1-b25c-4f4c-8cf8-c1cd3a5b84b0.gif!pkmer)

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Outliner View](https://github.com/Quorafind/Outliner-View) 更新至 v0.0.11，终于可以在 Obsidian 中直接编辑反链了

- **新功能**
	- **支持块嵌入编辑**
		- ![](https://cdn.pkmer.cn/images/7e1b4c21-9e16-4f8b-b7ac-124937ae6f8d.gif)
	- 支持内联嵌入
		- 现在完全支持**部分嵌入功能**，大纲视图允许您选择注释中的文本，然后右键单击以复制内联嵌入。此操作用两个 `%%%%` 注释标记包裹所选文本。因此，您可以嵌入注释的特定部分，例如标题块或行中的一段，等等。此外，您可以将这些块嵌入到任何位置并在任何位置对其进行编辑。
		- 另外：这些功能在实时预览和阅读模式下均可用。
		- ![](https://cdn.pkmer.cn/images/3e03b9e3-08ad-444f-911a-e5070fd02a51.gif)

#### [Media Extended v3.2.0](https://github.com/PKM-er/media-extended/releases/tag/3.2.0) 已发布

- **新功能**
    - **字幕视图：** 将 `.srt`、`.vtt`、`.ass` 字幕文件作为连续的字幕展示，与您的媒体同步。可搜索关键词、跳转至特定帧，并轻松复制或拖拽时间戳链接至您的笔记中。
    - **字幕下载：** 直接从 YouTube 和 Bilibili 下载字幕。下载的字幕将保存为本地 WebVTT 文件，并通过媒体笔记的前置材料自动链接至您的媒体文件，与播放期间的媒体字幕列表无缝整合。

![2024-05-12-357f76fc-f915-4b67-8b7c-3efab0f1d698](https://cdn.pkmer.cn/images/2024-05-12-357f76fc-f915-4b67-8b7c-3efab0f1d698.gif!pkmer)

![2024-05-12-5daa7133-a003-48b6-b9db-a909181677c1](https://cdn.pkmer.cn/images/2024-05-12-5daa7133-a003-48b6-b9db-a909181677c1.gif!pkmer)

![2024-05-12-de509182-3659-4864-889b-0588b216c279](https://cdn.pkmer.cn/images/2024-05-12-de509182-3659-4864-889b-0588b216c279.gif!pkmer)

![2024-05-12-8befe830-88b5-4f56-b615-db04b75e0cc7](https://cdn.pkmer.cn/images/2024-05-12-8befe830-88b5-4f56-b615-db04b75e0cc7.gif!pkmer)

## 外观

[**Cobalt Peacock** Theme](https://github.com/dpavaoman/cobalt-peacock-obmd) By _dpavaoman_

![2024-05-12-screenshot](https://cdn.pkmer.cn/images/2024-05-12-screenshot.png!pkmer)

> 基于各种编辑器的 Cobalt 代码主题。
[Prism Theme v3.5.1](https://github.com/damiankorcz/Prism-Theme/releases/tag/3.5.1) By _Damian Korcz_

> - **重要提示**
> 	- 此版本要求 App 版本为 1.6.0+。尚未查看从右至左 (RTL) 的更改。移动端存在一些退步。将在后续更新中解决。
> - **修复**
> 	- 彩色文件夹现在可以正常使用了。
> 	- 将自定义保险库横幅修复到新位置。
> 	- 移除了自定义保险库横幅的冗余样式设置选项。
[Midnight Theme](https://github.com/SemiCirkle/Midnight-obsidian-theme) By _SemiCirkle_

![2024-05-12-Pasted image 20240512200054](https://cdn.pkmer.cn/images/2024-05-12-Pasted%20image%2020240512200054.png!pkmer)

> Theme Midnight 是一个带有一些独特风格的深色主题。**具有自定义标签、自定义脚注、带有文本滚动的嵌入式内容、自定义项目符号列表等等！**