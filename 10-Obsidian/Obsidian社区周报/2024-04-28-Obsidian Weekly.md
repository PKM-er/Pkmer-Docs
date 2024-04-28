---
uid: 20240428222159
title: 2024-04-28：大道至简，专注本心！脑力简单重复劳动也是简单重复劳动
tags: [Roundup, Obsidian]
description: 大道至简，专注本心！脑力简单重复劳动也是简单重复劳动！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240428222351
---

# 2024-04-28：大道至简，专注本心！脑力简单重复劳动也是简单重复劳动

> [!Abstract]
> **统计时间**：2024-04-22 21:00 ~ 2024-04-28 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[Tab Navigator](https://obsidian.md/plugins?id=tab-navigator) By _o02c_

> TabNavigator 是 Obsidian 的一个简单的选项卡切换器。
> 	- **快速选项卡导航**：使用键盘快捷键或切换器界面轻松切换打开的选项卡。(tab-navigator: search-tabs)
> 	- **删除重复的选项卡**：从切换器界面（或命令）中删除重复的选项卡，以有效管理您的工作区。(tab-navigator: delete-duplicate-tabs)
> 	- **显示选项卡列表**：在使用 ctrl+tab (或 ctrl+shift+tab) 切换选项卡时，按住 ctrl 将显示一个选项卡列表。此功能可以在选项中启用或禁用（默认关闭）。

[LinkMagic](https://obsidian.md/plugins?id=link-magic) By _AndyReifman_

> 自动添加到已定义的正则表达式的链接。

![2024-04-28-Pasted image 20240428203227](https://cdn.pkmer.cn/images/2024-04-28-Pasted%20image%2020240428203227.png!pkmer)

[Bookmarks Caller](https://obsidian.md/plugins?id=bookmarks-caller) By _namikaze-40p_

> 无需离开键盘起始位置即可轻松打开书签。

[Custom new file name](https://obsidian.md/plugins?id=custom-new-file-name) By _homu-konamilk_

> 允许使用自定义格式名称（包括动态日期时间戳）创建新笔记。

[Generate Hash](https://obsidian.md/plugins?id=generate-hash) By _zigahertz_

> 一个小插件，用于使用 [`crypto.randomBytes`](https://nodejs.org/api/crypto.html#cryptorandombytessize-callback) 生成一个加密的强伪随机哈希值。对于生成唯一 ID 很有用。

[Simple Citations](https://obsidian.md/plugins?id=simple-citations) By _masaki39_

> 这是一个与 [Citations 插件](https://github.com/hans/obsidian-citation-plugin) 兼容的 Obsidian 插件。它支持从 Zotero 导入文献笔记。该插件的主要特点是**使用简单**；它需要的**设置时间很少**，并且允许您**一次性添加或更新文献笔记**。

#### 更新

[Multiple Notes Outline v0.6.2](https://github.com/iiz00/obsidian-multiple-notes-outline/releases/tag/0.6.2) By _iiz_

> - **重要修复**
> 	- 修复了在某些情况下视图不显示的问题。
> - **变化**
> 	- 修改了标题级别显示设置，从单独切换每个级别的显示或隐藏，改为指定要显示的最大级别。
> - **小改进**
> 	- 添加了选择带编号的标题图标的选项。

[Projects v1.17.3](https://github.com/marcusolsson/obsidian-projects/releases/tag/1.17.3) By _Marcus Olsson_

> - **表格视图**
> 	- 冻结选定的列，以防止水平滚动
> - **看板视图**
> 	- 立即添加、重命名、删除列
> 	- 将列固定以使其独立于笔记而持续存在
> 	- 折叠列以节省空间
> 	- 在卡片上加上复选框，自定义卡片标题
> - **过滤**
> 	- 引入 `or` 连接词
> - **画廊视图**
> 	- 支持更多类型的封面图片链接提取，[详情](https://github.com/marcusolsson/obsidian-projects/pull/822)
> 此外，还对弹出窗口支持进行了多项改进，并修复了文件系统事件处理方面的问题。

[Aloud TTS v0.3.0](https://github.com/adrianlyjak/obsidian-aloud-tts/releases/tag/0.3.0) By _Adrian Lyjak_

> - 添加了音频缓存配置选项：您现在可以在设备本地缓存或基于库的文件缓存之间进行选择，并配置缓存持续时间。
> - 改进了移动端的可用性。

[Note Toolbar v1.6.2](https://github.com/chrisgurney/obsidian-note-toolbar/releases/tag/1.6.2) By _Chris Gurney_

> **注意**：Note Toolbar v1.6 在链接渲染方式上进行了根本性的改变（从 `a` 标签变为 `span` 标签），_这可能会破坏诸如 `Focus` 命令及整体的可访问性。_
> - **迁移说明**
> 	- 为了启用以下用例，插入到 URI 中的 [变量](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Variables) 不再进行编码。
> 		- 现在，您可以在属性中放入一个完整格式的 URL（即包含协议的），通过 [变量](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Variables) 在 URI 项中引用它，并能够让它毫无问题地打开网站。
> - **新功能**
> 	- 将笔记的 `notetoolbar` 属性设置为 `none`，可以完全从该笔记中删除工具栏
> - **改进**
> 	- [文件夹映射](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Defining-where-to-show-toolbars#folder-mappings)：将 `*` 和 `/` 的建议添加到文件夹下拉列表中
> 	- [样式设置插件](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Style-Settings-plugin-support)：现在您可以覆盖字体和图标大小。
> - **修复**
> 	- 修复了 Android 上链接崩溃的问题（阅读模式）
> 	- 修复了在新窗口中打开笔记时工具栏显示不正确的问题
> 	- 对设置键盘导航进行了修复（例如，退格键 = 删除）

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Link Nodes in Canvas](https://obsidian.md/plugins?id=link-nodes-in-canvas) 更新至 v0.1.1

- **特性**
	- 当链接到其他文件节点时，会在起始节点生成一个 Markdown 链接
- **修复**
	- 当没有边时无法正确生成边

#### [Table Toolset v0.1.1](https://github.com/Quorafind/Obsidian-Table-Toolset/releases/tag/0.1.1) 已发布

- **特性**
	- 允许您在表格单元格中呈现多行文本 （使用 shift+enter 创建换行符）
	- 支持切换复选框
	- 支持实时预览模式和阅读模式
	- 支持基本计算
	- 支持特殊文件 cssclass：`columns-table`，将表格变成列卡
- **修复**
	- 修复无法粘贴到单元格的问题

![2024-04-28-Pasted image 20240428160908](https://cdn.pkmer.cn/images/2024-04-28-Pasted%20image%2020240428160908.png!pkmer)

#### [Surfing v0.9.10](https://github.com/PKM-er/Obsidian-Surfing/releases) 已发布

- 修复了补丁页面预览导致核心插件被清除的问题
- 特性/内联 URL 预览

## 外观

[CyberGlow v1.3.2](https://github.com/ArtexJay/Obsidian-CyberGlow/releases/tag/v1.3.2) By _ArtexJay_

> - 修复了活动行突出显示的填充，以防止其超出所选区域
> - 为新行/列按钮添加了主题按钮
> - 新的按钮设计，看起来不那么笨重
> - 将迷你标题标志移到了边线上，以提高可读性

[Aura v2.3.1](https://github.com/ashwinjadhav818/obsidian-aura/releases/tag/2.3.1) By _ashwinjadhav818_

> - 新增
> 	- 可在自述文件中预览图片
> - 修复
> 	- 卡片布局侧边栏底部边距
> 	- 原始颜色方案的错误
> 	- 彩色框架透明度滑块
> 	- 修改器悬停颜色
> 	- 在左侧标签卡中添加操作图标
> 	- 工作区背景预设图像导入

![2024-04-28-Pasted image 20240428151903](https://cdn.pkmer.cn/images/2024-04-28-Pasted%20image%2020240428151903.png!pkmer)

## PKM 相关知识推荐

[Obsidian 插件：Longform——如何使用 Obsidian 完成一本自己的小说创作](https://pkmer.cn/show/20230601235029)

> Obsidian 插件——Longform，是一款专为写作者和写作团队而设计的插件。它可以帮助用户创建和管理大型文学项目，例如书籍、小说、论文等。它可以将大文本拆分成更小的部分，例如章节、段落和场景，并提供基本编辑和组织工具。
> 作者在本文中详细介绍了他使用 Markdown 文件进行草稿撰写的“最佳实践”工作流，非常值得长文创作者参考。

[Obsidian 插件：用 Obsidian 进行 Anki 制卡]( https://pkmer.cn/show/20240426233011 )

> Anki 是全球闻名的辅助记忆工具。本文以实例手把手教授了如何利用 Export to Anki 插件打通 Obsidian 与 Anki，使笔记的记录和记忆无缝衔接，实现高效学习。
