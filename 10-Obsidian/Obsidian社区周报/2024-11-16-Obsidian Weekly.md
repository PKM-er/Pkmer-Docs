---
uid: 20241118191833
title: Obsidian Weekly 2024-11-16：Obsidian v1.7.6 与官方网页剪藏插件已正式发布
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-11-16：Obsidian v1.7.6 与官方网页剪藏插件已正式发布
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241118191917
---

# Obsidian Weekly 2024-11-16：Obsidian v1.7.6 与官方网页剪藏插件已正式发布

> [!Abstract]
> **统计时间**：2024-11-09 21:00 ~ 2024-11-16 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.7.6 版本已发布

#### 桌面端

##### 修复

- 修复了平移时媒体文件会重新挂载的白板性能问题。
- 修复了属性编辑器中属性名称与属性值重叠的问题。
- 点击页面预览中的链接时，不再将预览切换为编辑模式。
- 修复了 Obsidian URI 使目标窗口最小化的回归问题。
- 修复了解析器在解析较大的 Markdown 文件时占用过多内存的问题。该问题可能导致 Obsidian 打开非常大的 Markdown 文件时崩溃。
- 修复了文件资源管理器在初始加载时未高亮显示活动文件的问题。

#### 移动端

包含了 [Obsidian Desktop v1.7.6](https://obsidian.md/changelog/2024-11-12-desktop-v1.7.6/) 的所有新功能和问题修复。

##### 修复

- 修复了阅读模式中折叠指示器位置错误的问题。
- 修复了拖动光标时 Markdown 视图菜单显示的问题。
- 修复了 iOS 上大纲视图在切换文件后未立即更新的问题。

---

_编者按_：此版本带来了多项重要的稳定性与性能改进，尤其是针对大文件解析和白板的优化，推荐及时更新以获得更好的使用体验！

### Obsidian Web Clipper 官方网页剪藏插件正式发布！最新版本 v0.9.7

> - Obsidian Web Clipper 已在 [Chrome Web Store](https://chromewebstore.google.com/detail/obsidian-web-clipper/cnjifjpddelmedmihgijeibhnjfabmlf)（适用于 Chrome、Brave、Edge、Arc、Orion 和其他基于 Chromium 的浏览器）、[Firefox Add-Ons](https://addons.mozilla.org/en-US/firefox/addon/web-clipper-obsidian/) 、[‎Safari Extensions](https://apps.apple.com/us/app/obsidian-web-clipper/id6720708363) 三大主流浏览器插件市场上架，可点击上方链接或自行搜索下载安装。
> - 点击 [官方简介](https://obsidian.md/blog/save-the-web/) 了解其功能特性。
> - 点击 [官方帮助文档](https://help.obsidian.md/web-clipper) 查看详细教程。

#### 本周更新内容（v0.9.5-v0.9.7）

##### 新增

- 增加对 schema.org 数据中 `@graph` 格式的支持
- 增加对本地文件剪藏的支持
- 在扩展弹窗中新增保存文件、分享和复制的选项（具体选项视操作系统和浏览器而定）
- 增加法语、西班牙语、中文和日语本地化支持，可通过 GitHub 仓库提交更多翻译

##### 改进

- 为 Linux 系统添加剪贴板权限支持
- 修复创建绝对 URL 的问题，优化相对链接结构解析
- 删除文件名清理时的 Obsidian 特定字符
- 改进部分网站上的高亮工具菜单显示
- 修复块级与内联数学公式的冲突问题
- 修正段落首句高亮显示的问题
- 在 Firefox 上更改高亮模式快捷键以减少冲突
- 添加波斯语（Farsi）和俄语的本地化支持
- 移除对 `downloads` 权限的需求
- 修复 macOS 上 Safari 扩展弹窗中按钮重叠的问题
- 修复 `safe_name` 过滤器的问题
- 在设置中添加帮助链接

## 插件新闻

### 社区插件

#### 新增

[Automatic Renumbering](https://obsidian.md/plugins?id=automatic-renumbering) By _Omri Levi_

> 自动更新编号列表以保持它们按顺序排列。具有实时更新、智能粘贴和手动控制选项。

[IOC Lens](https://obsidian.md/plugins?id=ioc-lens) By _Aaron Gabbert_

> 提取并显示与安全相关的指标，例如 IP 地址、域和文件哈希值，以增强您的网络安全笔记过程。

[Typezen](https://obsidian.md/plugins?id=type-zen-mode) By _Ilgam Gabdullin_

> 该插件可让您在打字时消除所有干扰

![Weekly-2024-11-16-how_to_use|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-how_to_use.gif!pkmer)

[Daily Random Note](https://obsidian.md/plugins?id=daily-random-note) By _Alexandre Silva_

> 根据您的喜好自动打开每日随机笔记。

[Perplexity Converter](https://obsidian.md/plugins?id=perplexity-converter) By _Henrik Seidel_

> 修复从 Perplexity 粘贴的文本中的引用及其超链接。

[Check and Delete](https://obsidian.md/plugins?id=check-and-delete) By _Danitiate_

> 通过按按钮删除已完成的列表项。该插件非常适合那些喜欢使用任务列表但发现自己在完成后花费太多时间手动删除项目的人——特别是在移动设备上。

[Markdown Timeline](https://obsidian.md/plugins?id=markdown-timeline) By _Jiaheng Zhang_

> 将 Markdown 内容转换为可视化时间轴。
> 事件按时间顺序自动排序

![Weekly-2024-11-16-Pasted image 20241118164758|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-Pasted%20image%2020241118164758.png!pkmer)

[Brain Dump Mode](https://obsidian.md/plugins?id=brain-dump-mode) By _yesjinu_

> 完成胜于完美。先完成你的初稿，然后再让它变得完美。您的删除键将被禁用，您所能做的就是烧毁您的键盘

![Weekly-2024-11-16-Pasted image 20241118164624|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-Pasted%20image%2020241118164624.png!pkmer)

[Activity Heatmap](https://obsidian.md/plugins?id=activity-heatmap) By _Zak Hijaouy_

> 跟踪并可视化应用程序活动，类似于 GitHub 的贡献图表。

![Weekly-2024-11-16-Pasted image 20241118164507|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-Pasted%20image%2020241118164507.png!pkmer)

[Textgrams](https://obsidian.md/plugins?id=textgrams) By _Akop Kesheshyan_

> 在笔记中创建和存储 ASCII 图形。它可用于在技术文档中定义图表、流程图、复杂表格、甘特图等，这些在预览模式下将呈现为漂亮的 SVG 图形。

![Weekly-2024-11-16-595389c3-5e54-4eea-92cf-1d5688c1be9f|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-595389c3-5e54-4eea-92cf-1d5688c1be9f.gif!pkmer)

[Edge TTS](https://obsidian.md/plugins?id=edge-tts) By _Travis_

> 使用 Microsoft Edge 的“朗读”API（免费且高质量的文本转语音功能）朗读笔记内容。

[Daily notes calendar](https://obsidian.md/plugins?id=daily-note-calendar) By _bartkessels_

> **每日笔记日历插件** 的主要功能是提供一个日历视图，用于访问或创建每日或每周笔记。这让您无需在文件树中搜索，就能快速导航到您的笔记。
> 当前支持以下类型的周期性笔记：
> - **每日笔记**
>   - 点击具体日期即可访问
> - **每周笔记**
>   - 点击周数即可访问
> - **每月笔记**
>   - 点击月份名称即可访问
> - **每季度笔记**
>   - 点击左上角的季度名称即可访问
> - **每年笔记**
>   - 点击年份数字即可访问
>
> 此插件还支持使用 [`date-fns`](https://date-fns.org/v4.1.0/docs/format) 的日期格式化规则，自定义您的每日和每周笔记的格式。

![Weekly-2024-11-16-Pasted image 20241118163126|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-Pasted%20image%2020241118163126.png!pkmer)

[Featured Image](https://obsidian.md/plugins?id=featured-image) By _Johan Sanneblad_

> Featured Image 会根据文档中找到的首个图像、YouTube 链接或 Auto Card Link 图像，自动设置笔记的特色图像属性。这使您能够使用 Folder Notes 和 Dataview 创建丰富的笔记图库。

![Weekly-2024-11-16-Pasted image 20241118162620|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-Pasted%20image%2020241118162620.png!pkmer)

[Masking Type](https://obsidian.md/plugins?id=masking-type) By _Telehakke_

> 遮盖加粗、斜体和高亮内容，使其可以像记忆卡片一样使用。

![Weekly-2024-11-16-Pasted image 20241118161248|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-Pasted%20image%2020241118161248.png!pkmer)

[Todos sort](https://obsidian.md/plugins?id=todos-sort) By _Jiri Sifalda_

> 按完成状态对当前笔记中的 TODO（复选框）进行排序

![Weekly-2024-11-16-5cce0e42-d2f1-4c44-883a-46356ef46536|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-5cce0e42-d2f1-4c44-883a-46356ef46536.gif!pkmer)

[NeuroVox](https://obsidian.md/plugins?id=neurovox) By _Synaptic Labs_

> 通过语音转录和 AI 功能增强您的笔记记录能力。

[Superstition](https://obsidian.md/plugins?id=superstition) By _Jeffry_

> 使用传统日历中的“宜/忌”概念来管理日常活动。
> **工作原理：**
> 	  1. 在设置中定义你的活动。
> 	  2. 设置这些活动的“许可”频率（例如，每 7 天一次）。
> 	  3. 每天查看适合你的“宜”（推荐）和“忌”（禁止）。

[Superstition](https://obsidian.md/plugins?id=superstition) By _Jeffry_

> 用宜/忌的传统历法概念来管理日常事务。

[Workout Tracker](https://obsidian.md/plugins?id=workout-tracker) By _wanabeunique_

> 记录锻炼、跟踪进度并查看锻炼统计数据。

[SVG Style Editor](https://obsidian.md/plugins?id=svg-styler) By _ARGOSTA_

> 直接在编辑器中轻松修改 SVG 图像的样式属性。使用此插件，您可以自定义颜色、边框、不透明度等属性。支持的可绘制标签包括： `path` 、 `line` 、 `rect` 、 `circle` 、 `ellipse` 和 `polygon` 。

![Weekly-2024-11-16-Pasted image 20241118154131|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-Pasted%20image%2020241118154131.png!pkmer)

[Text Finder](https://obsidian.md/plugins?id=text-finder) By _hafuhafu_

> 在编辑模式下提供支持搜索、替换、正则表达式和区分大小写的搜索栏，类似于 VSCode。

![Weekly-2024-11-16-Text Finder|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-Text%20Finder.gif)

[Hexo Toolkit](https://obsidian.md/plugins?id=hexo-toolkit) By _Xiangru_

> 帮助用户管理他们的 [Hexo](https://hexo.io/) 帖子，包括将笔记转换为 Hexo 兼容的 Markdown 格式。

[Tree Search](https://obsidian.md/plugins?id=tree-search) By _catacgc_

> 帮助导航随输入构建的笔记层级与连接，并在笔记的反向链接和关系中提供增强型搜索功能。

![Pasted image 20241118135603|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241118135603.png!pkmer)

#### 更新

[Easy Typing v5.5.6](https://github.com/Yaozhuwa/easy-typing-obsidian/releases/tag/5.5.6) By _yaozhuwa_

> - 增加了 Ctrl/Cmd+A 增强功能，第一次选中当前行，第二次选中当前文本块，第三次选中全文
>     - (目前仅在纯文本块中生效，不包括引用和列表)
>     - 需要再设置 - 实验性功能中打开该功能选项后生效

[Tokei v0.8.0](https://github.com/ms3056/Tokei/releases/tag/0.8.0) By _HiroMike_

> CPU 消耗大大减少。

[Modified v3.2.1](https://github.com/franciskafieh/obsidian-list-modified/releases/tag/3.2.1) By _Francis Kafieh_

> - 修复了标签排除不起作用的问题
> - 移动设备同步问题的潜在修复

[Vertical Tabs v0.11.1](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.11.1) By _oxdc_

> 新功能：享受性能改进和错误修复，以获得更流畅、更可靠的体验！

[Pixel Banner v2.10.1](https://github.com/jparkerweb/pixel-banner/releases/tag/2.10.1) By _Justin Parker_

> - **新增**
> 	- 增加选项：隐藏像素横幅（Pixel Banner）属性字段在阅读模式下的显示
> 	- 增加选项：如果属性部分仅包含像素横幅字段，则隐藏其在阅读模式下的显示
> 	- 增加颜色选择器功能，用于设置内嵌标题颜色
> 		- 仅在 Obsidian 设置中启用内嵌标题时生效：
> 			- `Appearance` > `Show inline title`
> 		- 可在“通用”、“自定义字段名”和“文件夹图片”选项卡中定义颜色
> 	- 为文件夹图片选项卡增加颜色选择器重置按钮（仅在 Obsidian 设置中启用内嵌标题时适用）
> - **修复**
> 	- 修复编辑器内容更改时横幅 API 过于频繁刷新的问题
> 	- 修复 Pexels API 密钥测试功能
> 	- 修正内嵌标题颜色选择器在重置时显示的颜色错误

## 外观

[Simply Colorful v0.4.0](https://github.com/LorenzoPegorari/SimplyColorful/releases/tag/v0.4.0) By _Lorenzo Pegorari_

> - 全新的**大纲部分**：现在会回忆笔记中标题的外观（带有悬停和激活动画）。
> 	- 请注意，目前无法知道大纲中的树状项目具体对应笔记的哪个标题级别，因此无法将树状项目的颜色与其指向的标题颜色匹配。
> - 更好的颜色设计，符合 [WCAG 对比度指南](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)，文本更加**醒目易读**。
> - 优化**实时预览模式**下标题的背景色。
> - 调整标题大小，使其略小一些。
> - 修改反向链接的字体粗细。
> - 提升标题背景的透明度。
> - 优化标签背景设计。

![Weekly-2024-11-16-Pasted image 20241118183747|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-Pasted%20image%2020241118183747.png!pkmer)

[**Orange** Theme](https://github.com/afrangi/Obsidian-Theme-Orange) By _Alex F_

![Weekly-2024-11-16-Pasted image 20241118183121|650](https://cdn.pkmer.cn/images/Weekly-2024-11-16-Pasted%20image%2020241118183121.png!pkmer)

> 一个定制主题，采用橙色与深色风格，旨在提升可读性并简化用户界面元素。主题包含巧妙的设计优化，以改善用户体验，同时保留 Obsidian 应用的核心功能。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

