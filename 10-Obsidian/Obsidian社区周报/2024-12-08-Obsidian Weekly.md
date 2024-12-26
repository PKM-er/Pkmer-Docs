---
uid: 20241210224109
title: Obsidian Weekly 2024-12-08：更优雅的管理与分享，更直观的组织与查看
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-12-08：更优雅的管理与分享，更直观的组织与查看
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241210224148
---

# Obsidian Weekly 2024-12-08：更优雅的管理与分享，更直观的组织与查看

> [!Abstract]
> **统计时间**：2024-12-01 21:00 ~ 2024-12-08 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### 官方浏览器剪藏插件 Obsidian Web Clipper 已更新至 [v0.10.4](https://github.com/obsidianmd/obsidian-clipper/releases/tag/0.10.4)

#### V0.10.4

##### 改进

- 修复了 `replace` 过滤器的问题，支持使用 `\n`、`\r`、`\t` 作为替换值。
- 修正了 Google Gemini 的基础 URL。
- 更新了默认模型。
---
#### V0.10.3

一个新的实验性方法已被引入，以改进默认模板的结果。[Extractors](https://github.com/obsidianmd/obsidian-clipper/tree/main/src/utils/extractors)（提取器）会针对一些 Readability 表现不佳的热门网站进行覆盖优化。这将为 `{{content}}` 和 `{{contentHtml}}` 提供更有用的内容。目前支持 **Twitter (X)** 和 **Reddit**，欢迎对其他站点提交 PR。

##### 新增功能

- 新增 `unique` 过滤器，用于返回去重后的数组或对象。[查看文档](https://help.obsidian.md/web-clipper/filters#%60unique%60)。
- 新增 `remove_tags` 和 `remove_attr` 过滤器，仅移除特定 HTML 标签或属性。[查看文档](https://help.obsidian.md/web-clipper/filters#%60remove_attr%60)。
- 新增 Google Gemini 预设提供程序（**注意**：基础 URL 错误，请改用 `https://generativelanguage.googleapis.com/v1beta/chat/completions`，将在 0.10.4 中修复）。

##### 改进

- `replace` 过滤器现支持正则表达式。[查看文档](https://help.obsidian.md/web-clipper/filters#%60replace%60)。
- `split` 过滤器在未提供参数时会按字母拆分字符串。
- 修复了 `strip` 过滤器的语法不一致问题。
- 修复了 Ollama 的回归问题。
- “保存”功能现会保存为 `.md` 文件而非 `.txt`。
- 修复了 Windows 上深色模式中的模板选择问题。
- 改进了移动端设置页面的用户体验。
---
#### V0.10.2

##### 改进

- 解析器中新增“重置模型”选项。
- 修复了 Safari 上检查版本的错误。
- 修复了 Azure 模型相关问题。
- 改善了向新提供程序设置的迁移过程。
- 改进了德语和波兰语翻译。
- 修复了检测中文和葡萄牙语区域设置的问题。
---
#### V0.10.1

⚠️ **重要说明**：此更新更改了解析器（Interpreter）提供程序的存储方式，以便更灵活地支持多种提供程序。现有配置应会自动迁移。如果未自动迁移，您可能需要手动更新到新格式。

##### 新增功能

- 解析器设置中新增**提供程序**部分，支持预设的提供程序配置。
- **通用设置**中显示当前版本号。
- 新增语言选项：**波兰语**、**荷兰语**、**意大利语**。
- 新增 `replace_tags` 过滤器，例如：`{{contentHtml|replace_tags:"strong":"h2"}}` 将所有 `<strong>` 标签替换为 `<h2>`。

##### 改进

- 修复了某些切换选项的问题。
- 修复了启用和删除模型时的多个问题。
- 提升对 Azure OpenAI 模型的支持。
- 修复了界面中多个文本的本地化问题。

## 插件新闻

### 社区插件
 
#### 新增

[create folder notes with dropdown](https://obsidian.md/plugins?id=create-folder-notes-with-dropdown) By _Sturdy Shawn_

> 帮助用户快速创建和组织 Markdown 文件。使用此插件，用户可以根据黑曜石库中指定的文件名和文件夹层次结构轻松创建新的 Markdown 文件。如果指定的文件夹路径不存在，插件会智能创建所需的文件夹，以确保文件能够根据用户的意图正确分类和存储。

![Pasted image 20241210202021|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241210202021.png!pkmer)

[Usher](https://obsidian.md/plugins?id=usher) By _vorotamoroz_

> 有效管理多个 .obsidian 目录。

![Pasted image 20241210193325|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241210193325.png!pkmer)

[Class Relation Visualization](https://obsidian.md/plugins?id=class-relation-visualization) By _Yong_

> 可视化您的类及其继承、组合、聚合关系。

![Pasted image 20241210193155|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241210193155.png!pkmer)

[Embed 3D](https://obsidian.md/plugins?id=3d_embeds) By _Jesse Strijker_

> 在 Markdown 笔记中嵌入 3D 模型。
> - 目前仅支持在一张笔记中同时嵌入两个 3D
> - 大模型可能会出现延迟，因为 Obsidian 的内存容量有限且无法更改。

![Pasted image 20241210184230|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241210184230.png!pkmer)

[Share as ZIP](https://obsidian.md/plugins?id=share-as-zip) By _Till Friebe_

> 以 zip 文件夹的形式共享笔记及其链接。

[Tab Limiter](https://obsidian.md/plugins?id=tab-limit) By _Henry Gustafson_

> 限制可以打开的选项卡数量。

[Magiedit](https://obsidian.md/plugins?id=magiedit) By _Matteo Gassend_

> 与 [Magiedit](https://magiedit.magitools.app/) 交互的官方插件。

[Zen Mode](https://obsidian.md/plugins?id=zenmode) By _paperbenni_

> 该插件使您能够隐藏大多数黑曜石 UI，以便能够专注于内容。
> - 在移动设备上，查看 PDF 会导致 PDF 使用的屏幕面积不足 40%。_Zen Mode_ 可隐藏除当前文本文件或文档之外的所有 UI 元素，剩下的只是一个恢复所有 UI 的按钮
> - 在桌面上，问题不太严重，但仍然无法快速从编辑友好的体验切换到查看友好的体验。除了隐藏所有 UI 之外，_Zen Mode_ 还会在切换时折叠并恢复侧边栏。

![Pasted image 20241210174705|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241210174705.png!pkmer)

#### 更新

[Excalidraw v2.6.8](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.8) By _Zsolt Viczian_

> - **新增**
> 	- **用户体验改进**：
> 		- 元素链接编辑器中新增 Obsidian 链接搜索按钮。
> 		- “添加任意文件”现在支持搜索文件别名。
> 		- 文件搜索模态框的美化（显示路径，展示文件类型图标）。
> 		- 文本元素的光标颜色与文本颜色匹配。
> - **修复**
> 	- **功能区菜单中的 Excalidraw 图标**在每次重新打开 Obsidian 时反复出现的问题。
> 	- 在启用**单指平移**的笔模式下，Excalidraw 应仍然允许**使用鼠标执行操作**。
> 	- 当**分屏模式下编辑绘图**（一侧是绘图，一侧是 Markdown 视图）时，编辑 Markdown 笔记会导致绘图重新缩放并跳离选定区域的问题。
> 	- 解决与 Hover-Editor 的兼容性问题。
> 	- `ExcalidrawAutomate.create()` 现在会正确地在 YAML 前言和 Excalidraw 数据之间的模板中包含 Markdown 文本，同时修复了**“分解选定元素”脚本中的相同问题**。

[Image Converter v1.2.14](https://github.com/xRyul/obsidian-image-converter/releases/tag/1.2.14) By _xRyul_

> 新功能：注释工具：能够设置自定义背景颜色、调整其不透明度并保存到可重复使用的预设中。

[Vertical Tabs v0.11.3](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.11.3) By _oxdc_

> - 使用本机文件浏览器拖放文件时，_垂直选项卡_ 将不再更新其状态。
> - 修复了可能导致性能显着下降的 CSS 问题。

[Image Converter v1.2.13](https://github.com/xRyul/obsidian-image-converter/releases/tag/1.2.13) By _xRyul_

> **新功能：裁剪/翻转/旋转工具**
> 在 Obsidian 内旋转、裁剪、翻转原始图像的简单选项
> - 顺时针旋转90度
> - 逆时针旋转90度
> - 垂直翻转
> - 水平翻转
> - 纵横比：手绘、1:1、16:9、4:3、自定义

[Timelines (Revamped) v2.4.0](https://github.com/seanlowe/obsidian-timelines/releases/tag/2.4.0) By _Sean Lowe_

> - **更改内容**
> 	- 日期格式化优化
> 	- 时间轴箭头调整
> 	- 实现分组功能

[Pixel Banner v2.12.0 ](https://github.com/jparkerweb/pixel-banner/releases/tag/2.12.0) By _Justin Parker_

> - **新增**
> 	- 🔀 随机图片切换功能
> 	- **文件夹图片**：您可以在设置中启用从指定文件夹随机选择图片的功能。
> 	- **前置字段支持**：在前置字段中使用 `banner-shuffle` 指定一个文件夹路径，以便从中随机选择图片。
> 	- 每次打开笔记时都会随机选择图片。
> 	- 此功能非常适合使用本地图片以最小设置为您的笔记增添多样性。

[Rich Foot v1.9.2](https://github.com/jparkerweb/rich-foot/releases/tag/1.9.2) By _Justin Parker_

> - **1.9.2**
> 	- **修复**
> 		- 解决了动态 `CSS` 在**阅读模式**下干扰浮动元素（如 ITS 标注）的文档布局问题。
> 		- **编辑模式**新增 `updateRichFoot` 防抖功能（可设置延迟时间，单位为毫秒）。
> - **1.9.1**
> 	- **修复**
> 		- 解决了前置字段中定义的 `链接` 未显示的问题。
> - **v1.9.0**
> 	- **新增**
> 		- 增加将 `出链` 和 `反链` 合并为一个视图（称为 `链接`）的选项。
> 		- 为 `链接` 添加了方向箭头。
> 		- 为脚注中的内部链接增加出链支持。
> 	- **修复**
> 		- 解决了**编辑模式**下 `页面预览` 显示异常的问题。

[KeepSidian v1.0.14](https://github.com/lc0rp/KeepSidian/releases/tag/1.0.14) By _lc0rp_

> - **新增功能**
>     - 此版本引入了首批由生成式 AI 增强的 KeepSidian Premium 高级功能：
> 		- **智能标题**：从笔记内容中自动建议标题。
> 		- **自动标签**：标签生成与管理功能。
> 		- **高级过滤**：仅同步您需要的内容。
>     - **注意**：这些功能需要订阅以覆盖生成式 AI 的成本，但它们是可选的，您仍然可以免费使用 KeepSidian，而无需启用这些功能。
> - **即将推出**
> 	- 动态间隔的自动同步功能
> 	- 同步笔记归档功能
> 	- 谷歌日历支持

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在_社区插件市场_上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Frontmatter Markdown Links](https://github.com/mnaoumov/obsidian-frontmatter-markdown-links) By _mnaoumov_

> 增加了对 frontmatter 中 markdown 链接的支持。

[Link Maintainer](https://github.com/wenlzhang/obsidian-link-maintainer) By _wenlzhang_

> 帮助您在拆分或重新组织笔记时维护块引用，专注于安全性和可靠性。有了这个插件，您可以：
> 1. 选择包含块 ID 的行
> 2. 执行一个命令
> 3. 让插件自动更新所有引用——包括 Markdown 笔记和画布文件中的引用
> 
> 再也不用手动搜索和替换了。再也不会有损坏的引用了。只需平稳、可靠的链接维护，让您专注于以自己想要的方式组织知识。

## 外观

[**OverCast** Theme](https://github.com/IxBlazarxI/Obsidian-Theme-OverCast) By _IxBlazarxI_

![Pasted image 20241210202841|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241210202841.png!pkmer)

> - 美丽的雨景壁纸图像随着亮度的降低会轻微模糊，呈现出宁静而专注的美感。目前该主题仅提供暗色版本。
> 	- 定制雨景壁纸，调整亮度和模糊度，呈现更加简洁且富有氛围感的外观
> 	- 微妙的暗色主题，提升可读性和专注度
> 	- 简约清爽的设计
> 	- 针对移动设备优化：侧边栏不再与壁纸融合，而是拥有独立的模糊效果

[**Kanagawa Paper** Theme](https://github.com/sspaeti/obsidian_kanagawa_paper) By _sspaeti_

![Pasted image 20241210174405|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241210174405.png!pkmer)

![Pasted image 20241210174438|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241210174438.png!pkmer)

[**Vortex** Theme](https://github.com/abhimangs/obsidian-vortex) By _abhimangs_

![Weekly-2024-12-08-Pasted image 20241210130549|650](https://cdn.pkmer.cn/images/Weekly-2024-12-08-Pasted%20image%2020241210130549.png!pkmer)

> - **功能**
> 	- 无限自定义强调色。
> 	- 标题下划线支持霓虹光效和渐变效果。
> 	- 链接拥有平滑动画效果。
> 	- 独特的自定义标注，附带图标。
