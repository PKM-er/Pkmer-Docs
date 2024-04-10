---
uid: 20240325183111
title: 2024-03-24：随时随地，沉浸式笔记
tags: [Roundup, Obsidian]
description: 
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240409161526
---

# 2024-03-24：随时随地，沉浸式笔记

> [!Abstract]
> **统计时间**：2024-03-24 21:00 ~ 2024-03-24 23:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.5.11 现已在桌面和移动端上发布

**亮点**

- 移动端大量逾期修复和性能改进。
- 对表格编辑器进行了更多修复，包括支持拖放操作以及一次对齐多行和多列。
- 改进了工作区核心插件，新增了一个新的“保存布局”命令。

**发布说明**

桌面版：[点击查看](https://obsidian.md/changelog/2024-03-19-desktop-v1.5.11)

移动版：[点击查看](https://obsidian.md/changelog/2024-03-19-mobile-v1.5.11/)

### Obsidian Sync 现在的新标准计划起价为每月 4 美元

以下是新的标准计划与现有的 Plus 计划的比较，按年计费：

|          | 标准    | Plus   |
| -------- | ----- | ------ |
| 价格       | 每月 $4 | 每月 $8  |
| 同步的库数量   | 1     | 10     |
| 单个文件最大大小 | 5 MB  | 200 MB |
| 总存储空间    | 1 GB  | 10 GB  |
| 修订历史     | 1 个月  | 12 个月  |
| 设备数量     | 无限    | 无限     |
| 共享库      | 是     | 是      |

了解更多信息，请访问官方博客： <https://obsidian.md/blog/standard-plan/>

### 双重认证现在可以生成恢复代码

如果您在 Obsidian 账户上启用了双重认证，现在可以生成恢复代码。

操作步骤如下：[点击查看](https://help.obsidian.md/Obsidian/2-factor+authentication#Generate+your+recovery+code)

## 插件新闻

### 社区插件

#### 新增

[AI Zhipu](https://obsidian.md/plugins?id=ai-zhipu) By _Tarslab_

> 通过 API 密钥使用智普 AI。

[Sticky Headings](https://obsidian.md/plugins?id=sticky-heading) By _Shen Shen_

> 粘性标题并显示标题级别

![2024-03-24-bf395c63-fb98-41aa-ac7d-226f7af960f8.gif](https://cdn.pkmer.cn/images/2024-03-24-bf395c63-fb98-41aa-ac7d-226f7af960f8.gif!pkmer)

[PARA Workflower](https://obsidian.md/plugins?id=para-workflower) By _KevTheDevX_

> 为使用 PARA 方法开始和在您的库中工作提供了有用的命令。

[Semantic Canvas](https://obsidian.md/plugins?id=semantic-canvas) By _Aaron Gillespie_

> 使画布能够直观地编辑文件属性。

[Moulinette Search for TTRPG](https://obsidian.md/plugins?id=moulinette) By _Moulinette_

> 从 Moulinette Cloud 搜索、浏览和下载 TTRPG（桌面角色扮演游戏）内容。

[Editor full screen](https://obsidian.md/plugins?id=editor-full-screen) By _1C0D_

> 全屏模式（用于演示）或 Zen 模式（专注写作）。您可以使用调整大小的操作系统窗口，它将适合窗口。

[Password Protect](https://obsidian.md/plugins?id=password-protect) By _Aspharmyx_

> 使用此插件，您可以为不同的笔记和文件夹设置密码。

[SwiftLaTeX Render](https://obsidian.md/plugins?id=swiftlatex-render) By _gboyd068_

> 将代码块中的 LaTeX 渲染为 PDF，无需单独安装 LaTeX。

[Cards View](https://obsidian.md/plugins?id=cards-view) By _Maud Royer_

>  显示笔记的卡片视图。

![2024-03-24-Pasted image 20240324221206.png](https://cdn.pkmer.cn/images/2024-03-24-Pasted%20image%2020240324221206.png!pkmer)

#### 更新

[Open Gate v1.11.6](https://github.com/nguyenvanduocit/obsidian-open-gate/releases/tag/1.11.6) By _DuocNV_

> **更新问题修复**：我们解决了一个冲突，该冲突导致插件更新无法正确工作。现在 Open Gate 插件应该可以正常更新了。

[Collapse All v2.1.0](https://github.com/nathonius/obsidian-collapse-all/releases/tag/2.1.0) By _Nathonius_

> - Features
> 	- 书签视图支持所有三种命令选项
> - 修复
> - 恢复了所有提供者的功能
> 	- 标签面板不再支持折叠和展开命令，仅支持切换
> 	    - 这是以前的一个 bug，折叠和展开命令不可靠。

[Linter v1.23.3-rc-1](https://github.com/platers/obsidian-linter/releases/tag/1.23.3-rc-1) By _Victor Tao_

> 这个版本是 Linter 的首个测试版本。它旨在允许对刚刚进行的 Live Preview 更改进行早期测试，以便在 Live Preview 和 Source 模式中保留编辑器折叠。Beta 版本可能存在 bug，但允许对更改进行早期反馈。我计划通过 BRAT 使用 beta 版本，但请自行决定是否使用 beta 版本是正确的方法。
>
> - 文档
> 	- 为 `Header Blank Lines` 添加了额外的警告，让用户了解可以使用自定义正则替换来防止在 `Bottom` 为 false 时标题和后续段落之间存在空行。
> - Bug 修复
> 	- 修复在 Live Preview 和 Source 模式下进行更改时未保留折叠的问题
> 	- 修复 URL 正则表达式，允许在路径中包含 '@'
> - 变更
> 	- 为发布添加了版本变更信息
> 	- 修复：在更改后未保留折叠的问题
> 	- 杂务：更新版本并确保测试库中的测试未使用
> 	- 修复：修复 URL 正则表达式，允许在路径中包含 '@'
> 	- 修复：Live Preview 在不存在时插入 Frontmatter 的问题
> 	- 添加一个关于标题和段落之间意外换行的警告

[Projects v1.17.2](https://github.com/marcusolsson/obsidian-projects/releases/tag/1.17.2) By _Marcus Olsson_

> - 新功能
> 	- 添加自定义卡片排序功能
> - 改进
> 	- 从只读项目中删除添加字段按钮
> 	- 引入新的 `render` 方法
> 	- 允许对列表标签进行富文本渲染
> 	- 优化看板：处理标题溢出、列顺序和清理列配置
> - Bug 修复
> 	- 修复数字过滤器与零比较的问题
> 	- 修复基于标签的项目中添加模板笔记时空 `tags` 字段的问题
> 	- 处理基于文件夹的项目中的文件移出操作
> 	- 修复表格行中链接的悬停问题
> 	- 在表格视图中解耦字段操作
> - 开发
> 	- 新功能：添加 Fink 本地化编辑器
> - ……

[Grappling Hook v1.1.1](https://github.com/chrisgrieser/grappling-hook/releases/tag/1.1.1) By _pseudometa_

> - 新命令
> 	- **在分割视图中循环选项卡**：类似于 Obsidian 内置命令 `Go to next tab`，但包括其他分割视图中的选项卡，这意味着您可以使用一个快捷键循环浏览所有打开的选项卡。（类似于 vim 的 `<C-w>w`）
> 	- **在当前文件夹中切换到下一个/上一个文件**：按照字母顺序循环浏览当前文件夹中的所有文件。
> 	- **打开文件中的第一个 URL**：打开文件中找到的第一个 URL（外部链接）。这包括正文信息。
> - **备选笔记** 改进：如果备选文件已经在另一个选项卡中打开，则切换到该选项卡。如果没有，则在当前选项卡中打开备选文件。
> - **书签循环器**：修复了很多特殊情况下的错误（例如特殊文件类型的打开等）。
> - **新设置**：在 Obsidian 启动时打开最后修改的书签。

![2024-03-24-Pasted image 20240325001100.png](https://cdn.pkmer.cn/images/2024-03-24-Pasted%20image%2020240325001100.png!pkmer)

[Sticky Headings](https://obsidian.md/plugins?id=sticky-heading) By _Shen Shen_

> 粘性标题并显示标题级别

![2024-03-24-bf395c63-fb98-41aa-ac7d-226f7af960f8.gif](https://cdn.pkmer.cn/images/2024-03-24-bf395c63-fb98-41aa-ac7d-226f7af960f8.gif!pkmer)

[Quick File Name](https://obsidian.md/plugins?id=quick-file-name) By _Wapply_

> 生成一个以随机字符串作为名称的注释。

[Multilingual](https://obsidian.md/plugins?id=multilingual) By leolazou

> 通过自动将笔记名称的翻译添加到别名中，简化跨多种语言链接笔记。专为多语言用户设计。

![2024-03-24-32876920-b5c9-4131-ae1c-f4014fde18a9.gif](https://cdn.pkmer.cn/images/2024-03-24-32876920-b5c9-4131-ae1c-f4014fde18a9.gif!pkmer)

[Kinopoisk search](https://obsidian.md/plugins?id=unofficial-kinopoisk) By _Alintor_

> 帮助您通过 Kinopoisk 查找电影和电视节目并创建笔记。

[Lavadocs](https://obsidian.md/plugins?id=lavadocs) By _Saalik Lokhandwala_

> 该插件将您的 ObsidianVault 与 Lavadocs 集成在一起，因此您可以在需要时轻松共享一次性文档。

[Automatic Tags V1.1.0](https://github.com/Jamalam360/obsidian-automatic-tags/releases/tag/1.1.0) By _Jamalam_

> 添加了一个命令，根据您的设置为现有文件打上标签。

[Typst Renderer 0.10.0](https://github.com/fenjalien/obsidian-typst/releases/tag/0.10.0) By _fenjalien_

> 升级到 Typst 0.11.0
> 更新字体以匹配 Typst 0.11

[Graph Link Types v0.3.1](https://github.com/natefrisch01/Graph-Link-Types/releases/tag/0.3.1) By _natefrisch01_

> 链接现在可以按其 _ 类型 _ 着色！

[Supercharged Links v0.12.1](https://github.com/mdelobelle/obsidian_supercharged_links/releases/tag/0.12.1) By _mdelobelle_

> - 修复
>   - 实时预览未显示强化颜色
>   - 滚动时未更新
> - 功能
>   - 实时预览超级链接的增量更新，提高性能
>   - 支持将数据链接作为内联图片的 URL

[Tasks v6.2.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/6.2.0) By _Martin Schenck and Clare Macrae_

> "explain" 显示过滤器的延续和占位符。

[Fit v1.1.1](https://github.com/joshuakto/fit) By _joshuakto_

> - 添加了自动同步功能
> - 改进了文件更改和冲突显示的通知系统
> - 添加了设置选项，可以选择通知的详细程度
> - 修复了远程更改未被拉取的情况
> 有关如何使用它的更多信息，请参阅： <https://medium.com/>@joshuakto/introducing-fit-file-git-an-obsidian-plugin-to-sync-your-vault-5c21af046826

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Obsidian Slides Extended v2.0.5](https://github.com/ebullient/obsidian-slides-extended/releases/tag/2.0.5) By _ebullient_

> - Advanced Slides 的分支
> - 自定义 CSS 存储在您的库中
> - 核心更新（**reveal. Js 5. X**，使用 **fastify** 替代 express）
> - 一些内容简化，将继续进行。

[Remotely Save v0.4.8 (pre-release)](https://github.com/remotely-save/remotely-save/releases/tag/0.4.8) By _fyears_

> 第三方同步插件 Remotely Save 在同步算法方面进行了重大更新。如果你还不了解它，它支持将你的 vault 同步到 s3、dropbox、onedrive 和 webdav。 目前它处于测试阶段，需要通过 BRAT 安装。
>
> - 更强大的删除同步
> - 最小化冲突处理
> - 不再上传元数据
> - 删除/修改保护
> - 备份模式
> - ...

 [Breadcrumbs v4.0.46-beta (pre-release)](https://github.com/SkepticMystic/breadcrumbs/releases/tag/4.0.46-beta) By _SkepticMystic_

> V4 是该插件的完全重写版本。现在解决了许多长期存在的问题，并且大部分功能已重新引入。您可以阅读此说明了解更多关于这些变化的信息： <https://github.com/SkepticMystic/breadcrumbs/blob/master/V4.md>
> V4 仍然处于测试阶段，只能通过 BRAT 插件访问。如果您是 Breadcrumbs 的**现有**用户，请确保您已通过阅读上述链接和查看存储库中的最新问题（名称中带有“V4”）了解其中的不同之处。但在大多数情况下，向后兼容性都得到了保留。如果您是**新**用户，现在就是开始的最佳时机！

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Thino v2.3.21](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.3.21) 现已发布

- **功能**
	- PRO 验证码现在基于平台验证，而不是库；
	- 密码保护功能；
	- 在每日 Thino 对话框中添加基础搜索栏；
	- 支持通过命令锁定；
	- 移动视图时可切换聊天或列表模式；
	- 在所有视图中（过滤后）支持批量删除/归档/恢复/复制；
	- 聊天视图模式；
	- 在归档/回收站视图中添加过滤器；
	- 在归档/回收站视图中添加搜索栏；
	- 右键点击表头时，可分享日程视图的图片；
	- 点击日程的日期/时间表头时，可调整排序顺序；
	- 支持自动添加标签
	- 过滤时支持 thino 列表中的批量标签操作
	- 支持聊天视图的新样式
	- 支持动态视图
	- 更新聊天视图以提高性能
- **修复**
	- 无法正确复制注册 ID；
	- 在 Obsidian 1.5.11 之后无法编辑内容；
	- 在 Obsidian 1.5.11 之后无法正确编辑 Thino；
	- 与 Obsidian 1.5.6 之前的版本存在兼容问题；
	- 禁用密码保护时，不应显示锁定 Thino 的命令；
	- 当密码为空时，不显示密码保护模态框；
	- 下拉菜单无法正确删除 Thino；
	- 不应在 Thino 列表中获取已归档的 Thino；
	- 正确显示当天的列表和任务计数；
	- 右上角菜单的删除按钮不应受到最后更改的影响。
	- 编辑器位于页面底部时的样式
	- 使用日期菜单时无法选择时间
	- 显示错误的翻译
	- 打开设置时不应销毁编辑器
	- 更新或创建 thino 不应跳转到页面顶部
- **样式更新**
	- 修复与聊天视图相关的一些问题；
	- 移除页面包装器中的 translateX；
	- 时间戳现在显示在消息附近；
	- 更新聊天视图的样式；
	- 更新默认切换列表按钮的样式，选择列表类型时显示列表图标；
	- 时间戳现在显示在消息附近
	- 将专业类名称添加到专业功能条目
	- 隐藏基本用户的专业功能
	- 移动视图标题样式
	- 导航到存档/回收站视图时隐藏标题

 ![2024-03-24-Pasted image 20240324232718.png](https://cdn.pkmer.cn/images/2024-03-24-Pasted%20image%2020240324232718.png!pkmer)

#### [Media Extended v3.1.1-beta.0](https://github.com/PKM-er/media-extended/releases/tag/3.1.1-beta.0) 开启测试

- **特性（webview）：**
	- 增加了对哔哩哔哩字幕的支持。增加了对 YouTube 字幕的支持。
- **修复：**
	- （字幕）：修复了远程字幕的默认检测问题。
	- （截图）：解决了未处理的 webview 中的 CORS 错误。
	- （Webview）：修复了在结束时进行跳转播放重置的问题。
- **重构：**
	- （播放器）：实现了远程轨道的获取
	- （Webview）：更新了 webview 插件 API 以获取文本轨道。

## 外观

[Aura v2.2.4](https://github.com/ashwinjadhav818/obsidian-aura/releases/tag/2.2.4) By _ashwinjadhav818_

> - 新功能
> 	- 新增了霓虹列表功能
> 	- 新增了滑动选项卡
> - 移除
> 	- 半透明窗口
> 	- 由于 Obsidian 中半透明窗口的 Windows API 实现较为复杂，因此不得不移除了半透明窗口功能。
> - 修复
> 	- 卡片布局
> 	    - 修复了窗口底部的填充问题
> 	    - 修复了右侧侧边栏的右侧填充问题
> 	- 原始布局
> 		- 更新了原始主题 - [原始主题](https://github.com/Bluemoondragon07/Obsidian-Origin)
> 	- 彩虹文件夹
> 		- 添加了文件夹周围的边框以突出显示
> 		- 修复了文件资源管理器中文件名的错位问题
> 	- 文本
> 		- 修复了首次使用主题时粗体和斜体颜色未应用的问题
> 		- 在未选择原始布局时，标题栏隐藏/悬停工作正常。
> 		- 卡片布局中工作区背景的一些问题已修复。

[Focus Theme](https://github.com/mProjectsCode/obsidian-focus-theme) By _Moritz Jung_

> 这是 Obsidian 的纯黑色主题，重点关注笔记的重要部分。

![2024-03-24-Pasted image 20240324222539.png](https://cdn.pkmer.cn/images/2024-03-24-Pasted%20image%2020240324222539.png!pkmer)

# 2024-03-24：Anywhere, anytime, immersive note-taking

> [!Abstract]
> **Statistical time**: 2024-03-24 21:00 ~ 2024-03-24 23:00
> **Statement**: This column is inspired by a series of [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) articles written and published by Ms. _Eleanor Konik_ from April 2021 to June 2023. Those interested may follow the original author's personal website [Obsidian Iceberg](https://www.eleanorkonik.com/). The section's content is sourced from the official Obsidian Discord channel and information on corresponding projects on Github or there independent websites. Descriptions may have been modified based on personal interpretation, and corrections are welcome if there are any inaccuracies. Thank you to the Obsidian team for bringing us such excellent software.

## Official News

### Obsidian v1.5.11 is now available on desktop and mobile

**Highlights**

- Lots of overdue fixes and performance improvements for mobile.
- More fixes for the table editor, including drag and drop support as well as aligning multiple rows and columns at once.
- Improved the Workspaces core plugin, added a new "Save layout" command.

**Release notes**

Desktop: <https://obsidian.md/changelog/2024-03-19-desktop-v1.5.11>

Mobile: <https://obsidian.md/changelog/2024-03-19-mobile-v1.5.11/>

### Obsidian Sync now starts at $4 per month with the new Standard plan

Below is a comparison between the new Standard plan and the existing Plus plan, billed annually:

|                   | Standard     | Plus         |
| ----------------- | ------------ | ------------ |
| Price             | $4 per month | $8 per month |
| Synced vaults     | 1            | 10           |
| Maximum file size | 5 MB         | 200 MB       |
| Total storage     | 1 GB         | 10 GB       |
| Revision history  | 1 month      | 12 months    |
| Devices           | Unlimited    | Unlimited    |
| Shared vaults     | Yes          | Yes          |

Learn more on official blog: <https://obsidian.md/blog/standard-plan/>

### 2FA now supports the generation of recovery codes

If you have 2FA enabled on your Obsidian account you can now generate recovery codes.

Here's how: <https://help.obsidian.md/Obsidian/2-factor+authentication#Generate+your+recovery+code>

## Plugin News

### Community Plugins

#### New

[AI Zhipu](https://obsidian.md/plugins?id=ai-zhipu) By _Tarslab_

> Using Zhipu AI by API key.

[Sticky Headings](https://obsidian.md/plugins?id=sticky-heading) By _Shen Shen_

> Sticky headings and shows the heading level.

![2024-03-24-bf395c63-fb98-41aa-ac7d-226f7af960f8.gif](https://cdn.pkmer.cn/images/2024-03-24-bf395c63-fb98-41aa-ac7d-226f7af960f8.gif!pkmer)

[Quick File Name](https://obsidian.md/plugins?id=quick-file-name) By _Wapply_

> Generates a note with a random string as its name.

[Multilingual](https://obsidian.md/plugins?id=multilingual) By leolazou

> Simplify linking notes across multiple languages by automatically adding translations of note names into aliases. Designed for multilingual users.

![2024-03-24-32876920-b5c9-4131-ae1c-f4014fde18a9.gif](https://cdn.pkmer.cn/images/2024-03-24-32876920-b5c9-4131-ae1c-f4014fde18a9.gif!pkmer)

[Kinopoisk search](https://obsidian.md/plugins?id=unofficial-kinopoisk) By _Alintor_

> Helps you find movies and tv shows via Kinopoisk and create notes.

[Lavadocs](https://obsidian.md/plugins?id=lavadocs) By _Saalik Lokhandwala_

> This plugin integrates your Obsidian vault with Lavadocs, so it's easy to share one-off documents, whenever you need to.

[PARA Workflower](https://obsidian.md/plugins?id=para-workflower) By _KevTheDevX_

> Helpful commands for starting and working in your vault with the PARA method.

[Semantic Canvas](https://obsidian.md/plugins?id=semantic-canvas) By _Aaron Gillespie_

> Gives canvases the power to edit file properties visually.

[Moulinette Search for TTRPG](https://obsidian.md/plugins?id=moulinette) By _Moulinette_

> Search, browse and download TTRPG (tabletop role-playing game) content from Moulinette Cloud.

[Editor full screen](https://obsidian.md/plugins?id=editor-full-screen) By _1C0D_

> Full screen mode (for presentations) or Zen mode (focused writing). You can use resized OS windows, it will fit to the window.

[Password Protect](https://obsidian.md/plugins?id=password-protect) By _Aspharmyx_

> With this plugin you can set password to different notes and folders.

[SwiftLaTeX Render](https://obsidian.md/plugins?id=swiftlatex-render) By _gboyd068_

> Render LaTeX in codeblocks into a PDF, without needing to install LaTeX separately.

[Cards View](https://obsidian.md/plugins?id=cards-view) By _Maud Royer_

> Displays a card view of your notes.

![2024-03-24-Pasted image 20240324221206.png](https://cdn.pkmer.cn/images/2024-03-24-Pasted%20image%2020240324221206.png!pkmer)

#### Updates

[Open Gate v1.11.6](https://github.com/nguyenvanduocit/obsidian-open-gate/releases/tag/1.11.6) By _DuocNV_

> **Update Issue Fix**: We've resolved a conflict that was preventing plugin updates from working correctly. Open Gate plugins should now update as expected.

[Collapse All v2.1.0](https://github.com/nathonius/obsidian-collapse-all/releases/tag/2.1.0) By _Nathonius_

> - Features
> 	- Bookmarks view supports all three command options
> - Fixes
> 	- Restored functionality of all providers
> 	- Tag pane no longer supports collapse and expand commands, only toggle
> 		- This was a bug previously, the collapse and expand commands were not reliable.

[Linter v1.23.3-rc-1](https://github.com/platers/obsidian-linter/releases/tag/1.23.3-rc-1) By _Victor Tao_

> This release is the first ever beta release for the Linter. It is meant to allow for early testing of the Live Preview changes that were just made to allow for the retention of editor folds in both Live Preview and Source mode. Beta releases are likely to be buggy, but allow for early feedback on changes. I plan to use the beta releases through BRAT, but please decide yourself whether or not using the beta releases is the right approach for you.
>
> - Docs
> 	- An additional warning was added for `Header Blank Lines` to let users know about a custom regex replacement that can be used in order to prevent a blank line from being present between a header and a paragraph that follows it when `Bottom` is false.
> - Bugs
> 	- Fixes folds not being retained on Lint when changes were made in Live Preview and Source mode
> 	- Fixes URL regex to allow '@' in the path for URLs
> - What's Changed
> 	- Added Version Changes for Release
> 	- Fix: Folds not Being Retained on Lint when Changes Made
> 	- Chore: Update Versions and Make Sure Tests in Test Vault Are Not Used
> 	- Fix: Fix URL regex to allow '@' in the path
> 	- Fix: Live Preview Inserting Frontmatter when It Does Not Exist Already
> 	- Add a warning about unexpected line-break between heading and paragraph

[Projects v1.17.2](https://github.com/marcusolsson/obsidian-projects/releases/tag/1.17.2) By _Marcus Olsson_

> - New Features
> 	- Add board custom card order
> - Improvements
> 	- Remove add field button from readonly project
> 	- Introduce the new `render` method
> 	- Allow rich text rendering for list tags
> 	- Board: header overflow, column orders, and clean up column configs
> - Bug Fixes
> 	- Fix number filter for comparison with zero
> 	- Fix add templated note with empty `tags` field in tag based project
> 	- Handle move file out for folder based projects
> 	- Fix hover on link in a table row
> 	- Decouple field operations in Table view
> - Developments
> 	- feat: add fink localization editor
> - …

[Grappling Hook v1.1.1](https://github.com/chrisgrieser/grappling-hook/releases/tag/1.1.1) By _pseudometa_

> - new command
> 	- **cycle tabs across splits**: Like the Obsidian built-in command `Go to next tab`, but includes tabs in other splits, meaning you can cycle through all open tabs with one hotkey. (similar to vim's `<C-w>w`)
> 	- **Next/previous file in current folder**: Cycles through all files in the current folder, in alphabetical order.
> 	- **Open first URL in file**: Opens the first URL (external link) found in the file. This includes the frontmatter.
> - **alternate note** improvement: If the alternate file is already open in another tab, it switches to that tab. If not, the alternate file is opened in the current tab.
> - **bookmark-cycler**: a lot of bugs for edge cases (special filetypes being open, etc.) have been fixed.
> - **new setting**: to open last modified bookmark on Obsidian startup

![2024-03-24-Pasted image 20240325001100.png](https://cdn.pkmer.cn/images/2024-03-24-Pasted%20image%2020240325001100.png!pkmer)

[Automatic Tags V1.1.0](https://github.com/Jamalam360/obsidian-automatic-tags/releases/tag/1.1.0) By _Jamalam_

> Adds a command to tag existing files according to your settings.

[Typst Renderer 0.10.0](https://github.com/fenjalien/obsidian-typst/releases/tag/0.10.0) By _fenjalien_

> Upgrade to Typst 0.11.0
> Update fonts to be equal with Typst 0.11

[Graph Link Types v0.3.1](https://github.com/natefrisch01/Graph-Link-Types/releases/tag/0.3.1) By _natefrisch01_

> Links can now be colored by their_type_!

[Supercharged Links v0.12.1](https://github.com/mdelobelle/obsidian_supercharged_links/releases/tag/0.12.1) By _mdelobelle_

> - Fix
> 	- Live preview not showing supercharged colours
> 	- No update on scroll
> - Feat
> 	- Incremental updates of live preview supercharged links for increased performance
> 	- Support data links as URLs for inline images

[Tasks v6.2.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/6.2.0) By _Martin Schenck and Clare Macrae_

> 'explain' shows Continuations & Placeholders for filters.

[Fit v1.1.1](https://github.com/joshuakto/fit) By _joshuakto_

> - Added auto-sync capability
> - Improved notification system for file changes and conflicts display
> - Added setting options to choose verbosity of notifications
> - Fixed cases where remote changes are not pulled
> For more on how to use it: <https://medium.com/>@joshuakto/introducing-fit-file-git-an-obsidian-plugin-to-sync-your-vault-5c21af046826

### Pending

> [!Caution]
> **Notice**: The following plugins have not yet passed code scrutiny and therefore have not been added to the _Community Plugins_. Before installing, please make sure you have fully understood and accepted the potential security risks involved.

[Obsidian Slides Extended v2.0.5](https://github.com/ebullient/obsidian-slides-extended/releases/tag/2.0.5) By _ebullient_

> - Fork of Advanced Slides
> - Custom CSS is stored in your vault
> - Guts updated (**reveal.js 5.x**, **fastify** instead of express)
> - Some content simplification, which will continue.

[Remotely Save v0.4.8 (pre-release)](https://github.com/remotely-save/remotely-save/releases/tag/0.4.8) By _fyears_

> The third-party sync plugin Remotely Save gets huge updates on the sync algorithm. In case you don’t know it, it supports syncing your vault to s3, dropbox, onedrive, webdav.
> Currently it’s in beta and requires BRAT to install.
>
> - More robust deletion sync
> - minimal conflict handling
> - no meta data uploaded any more,
> - deletion / modification protection,
> - backup mode
> - ...

 [Breadcrumbs v4.0.46-beta (pre-release)](https://github.com/SkepticMystic/breadcrumbs/releases/tag/4.0.46-beta) By _SkepticMystic_

> V4 is a complete rewrite of the plugin. Many long-standing issues are now resolved, and most functionality has been reintroduced. You can read this note for more info on the changes: <https://github.com/SkepticMystic/breadcrumbs/blob/master/V4.md>
> V4 is still in beta, and only accessible via the BRAT plugin. If you're an **existing** Breadcrumbs user, make sure you understand what's different by reading the link above, and checking the latest issues on the repo (with "V4" in their name). But for the most part, backwards-compatibility has been preserved. If you're **new** to Breadcrumbs, there's never been a better time to get started!

### Produced by PKMer

> [!INFO]
> **PKMer** ([PKMer.cn](https://pkmer.cn/), [PKMer.net](https://pkmer.net/)) aims to create a powerful knowledge management community in the Eastern Hemisphere. "PKM" stands for Personal Knowledge Management, and the "er" suffix represents individuals. Anyone who is focused on and enjoys personal knowledge management work, and who seeks efficiency, can be included in this category. We hope the community can bring together more people like this.

#### [Thino v2.3.21](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.3.21) has been released

- **Features**
	- - Password protection;
	- Basic search bar in daily thinos dialog;
	- Support lock via command;
	- Enable switch chat or list mode when is mobile view;
	- Bulk delete/archive/restore/copy in all view(after filter);
	- Chat view mode;
	- Filter in archive/recycle bin view;
	- Search bar in archive/recycle bin view;
	- Share image of agenda view when right-click on the table header.
	- Sort order when click on date/time header of agenda;
	- support automatically add tags
	- support bulk tag operation in thino list when filtering
	- support new style for chat view
	- support moments view
	- update chat view to improve performance
- **Fixes**
	- cannot copy id correctly;
	- cannot edit content after obsidian 1.5.11;
	- cannot edit thino correctly after obsidian 1.5.11;
	- compatibility issue with before obsidian 1.5.6;
	- command to lock thino should not show when disabled password protection;
	- don't show password protection modal when password is empty;
	- dropdown menu cannot delete thino correctly;
	- should not get archived thino in the thino list;
	- show day's list and task count correctly;
	- top-right menu delete button should not be influenced by last changed.
	- style when editor is at the bottom of page
	- cannot select time when using date menu
	- show wrong translation
	- should not destroy editor when open settings
	- update or create thino should not jump to top of the page
- **Style Updates**
	- fix some issue related to chat view;
	- remove translatex in page wrapper;
	- time stamp show near the message now;
	- update chat view style;
	- update chat view style;
	- update the style of default toggle list button, show list icon when select list type;
	- time stamp show near the message now
	- add pro class name to pro features entry
	- hide pro features for basic users
	- mobile view header style
	- hide header when navigate to archive/trash view

 ![2024-03-24-Pasted image 20240324232718.png](https://cdn.pkmer.cn/images/2024-03-24-Pasted%20image%2020240324232718.png!pkmer)

#### [Media Extended v3.1.1-beta.0](https://github.com/PKM-er/media-extended/releases/tag/3.1.1-beta.0) testing is now open

- **Feature (webview):**
    - Added support for Bilibili captions.
    - Added support for YouTube captions.
- **Fixes:**
	- (Subtitle): Fixed default subtitle detection on remote captions.
	- (Screenshot): Resolved CORS error from unhandled webview.
	- (Webview): Fixed playback reset when seeking on ended.
- **Refactor:**
	- (Player): Implemented remote tracks fetching.
	- (Webview): Updated webview plugin API to retrieve textTracks.

## Appearance

[Aura v2.2.4](https://github.com/ashwinjadhav818/obsidian-aura/releases/tag/2.2.4) By _ashwinjadhav818_

> - New
> 	- Neon list feature
> 	- Sliding Tabs
> - Removal
> 	- Translucent Window
> 	- Due to the complication of the Windows api for translucent window in Obsidian, the translucent window feature had to be removed.
> - Fixes
> 	- Card Layout
> 		- Fixed the bottom padding the window
> 		- Fixed the right padding of right sidebar
> 	- Origin Layout
> 		- Updated the Origin from the original theme - [Origin Theme](https://github.com/Bluemoondragon07/Obsidian-Origin)
> 	- Rainbow Folders
> 		- Added a border around the folder to highlight it more
> 			- Fixed the misalignment of file names in the file explorer
> 	- Text
> 		- Fix issue where the bold and italic colors would not be applied when using the theme for the first time
> 	- The titlebar hide/hover work without Origin Layout is selected.
> 	- Workspace background glitches in card layout.

[Focus Theme](https://github.com/mProjectsCode/obsidian-focus-theme) By _Moritz Jung_

> This is a dark only theme for Obsidian, focusing on the important parts of your notes.

![2024-03-24-Pasted image 20240324222539.png](https://cdn.pkmer.cn/images/2024-03-24-Pasted%20image%2020240324222539.png!pkmer)
