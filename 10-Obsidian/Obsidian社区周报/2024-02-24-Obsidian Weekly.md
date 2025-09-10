---
uid: 20240225171940
title: Obsidian Weekly 2024-02-25：你的下一个音视频播放器，何必非得是播放器？
tags: [Weekly, Obsidian]
description: Obsidian-Weekly 2024-02-25：你的下一个音视频播放器，何必非得是播放器？
author: 淡水鱼,PKMer
type: awesome
draft: false
editable: false
modified: 20240429181027
---

# Obsidian Weekly 2024-02-25：你的下一个音视频播放器，何必非得是播放器？

> [!Abstract]
> **统计时间**：2024-02-17 17:00 ~ 2024-02-24 0:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方更新

### Obsidian v1.5.8 现已在桌面和移动设备上可用

#### 高亮

- 新的表格编辑器现在终于可以在移动设备上使用了！
- 现在，表格会在您键入时进行格式化，这意味着当您切换到源模式时，列将对齐。
- 对于开发人员来说，我们在 API 中添加了一些急需的改进。有关详细信息，请参阅 [变更日志](https://github.com/obsidianmd/obsidian-api/blob/master/CHANGELOG.md#v157)。

#### 发行说明

- 桌面版： <https://obsidian.md/changelog/2024-02-22-desktop-v1.5.8/>
- 移动端： <https://obsidian.md/changelog/2024-02-22-mobile-v1.5.8/>

## 插件新闻

### PKMer 出品

> [!INFO]
> [PKMer](https://pkmer.cn/) 旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Thino](https://pkmer.cn/products/thino/) v2.2.4 现已发布

##### 新增

- 支持日记同步
    - 现在支持 Obsidian 核心插件 - 日记插件的同步模式
    - 支持在不同端设置对应的同步文件存储方式，推荐多端保持统一
    - 细节参考 [Thino 同步](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/thino/03_thino-web%E6%9C%8D%E5%8A%A1/thino-%E5%90%8C%E6%AD%A5/)

##### 调整

- 所有行内标记符（指代删除、同步、归档的标识符），在所见即所得模式下都已经被修正成一个单独图标，当选中时可以展示原文；
- 同步按钮增加微动画，用于提升用户点击时候的正向反馈
- 多语言支持：目前所有界面可见文案，已经都有中文对应展示

##### 修复

- 修复 iOS（包括 iPhone、iPad）几个端同步的异常问题
- 修复编辑器全屏模式在移动端无法收起的问题
- 修复编辑器在移动端列表底部 UI 异常
- 修复之前同步的时候并不会同步 pin 状态的问题
- 修复保存白板、单文件的时候， .thino.canvas / .thino.md 等不会保存有后缀名的文件名，例如，输入 abcd 文件名的话，并不会附带上 .thino.canvas 或者 .thino.md

#### Media Extended 更新至 v3.0.2

- **新增**：
	- 实时预览
	- 内联字段
	- 多窗口支持
	- 网页播放器
		- 现在，除了对 YouTube、Vimeo 和 Bilibili 等平台的专门支持之外，您还可以大胆尝试，将来自几乎任何 URL 的媒体嵌入到您的笔记中！ （某些 URL 可能不起作用。）
	- ……

[Github](https://github.com/PKM-er/media-extended/releases/tag/3.0.2) 或官方社区均可下载！请查看 [https://mx.pkmer.net/](https://mx.pkmer.net/) 获取 v3+ 版本的详细信息（尚在施工 ing……）

### 社区插件

> [!Tip]
> **‌‌‌‌这些插件已经通过了代码审查，现在可以在 Obsidian 插件列表中获取。** 完整列表请查看 [插件统计页面](https://obsidian-plugin-stats.vercel.app/new?ref=eleanorkonik.com)。

#### 新增

[Image Inline](https://github.com/ZackaryW/obsidian-image-inline) by _Zackary W_

> 粘贴不带附件文件的图像。该插件通过允许您将图像转换为 Base64 编码字符串并将其直接嵌入到您的笔记中来满足这一需求。

[Share My Plugin List](https://github.com/Benature/obsidian-share-my-plugin-list) by _Benature_

> 以列表/表格格式共享已启用的插件。帮助您向其他人分享/推荐您正在使用的插件。

[GPG Encrypt](https://github.com/lajg-dev/obsidian-plugin-gpg-inline-encrypt) by _Luis Jaramillo_

> 使用热键对内联文本进行 GPG 加密。可以使用在线加密或全文档加密。

[Smart Second Brain](https://github.com/your-papa/obsidian-Smart2Brain) by _Leo310, nicobrauchtgit_

> 利用 Ollama 或 OpenAI 与您注重隐私的助手互动，让您的第二大脑更加智能。

[GitHub Sync](https://github.com/kevinmkchin/Obsidian-GitHub-Sync) by _Kevin Chin_

> 将库同步到个人 GitHub 以便跨设备同步。

![2024-02-24-Pasted image 20240225004758.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240225004758.png!pkmer)

[Kindle Highlights Importer](https://github.com/l2xu/kindle_html_importer) by _MovingMillennial_

> 将 HTML 文件（从 Kindle 应用程序获取）中的 Kindle 亮点导入到笔记中。Kindle HTML 文件将转换为 Markdown 文件并保存到您指定的位置。

[Tag Formatter](https://github.com/snsvrno/snsvrno-short-tags) by _snsvrno_

> 一个可配置的黑曜石插件，可更改标签在预览模式下的显示方式，目前已支持：
> - 隐藏标签上的“#”
> - 隐藏所有嵌套标签的父级
> - 隐藏所有父标签
> - 根据模式隐藏部分标签
> - 为每个缩短的标签添加 CSS class（根据定义）
> - 根据父级为每个标签添加 CSS class
> - 为所有标签添加 CSS class

[Journalyst](https://github.com/Justin-Arnold/Journalyst) by _Justin Arnold_

> 此插件可以轻松跟踪您的每日日记，并提供一种简单的方法来为每天创建新条目。例如，您可以为个人生活写一本日记，为工作生活写一本日记，为睡眠跟踪写一本日记，等等。

![2024-02-24-Pasted image 20240225005329.png|250](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240225005329.png!pkmer)

[Wypst](https://github.com/0xpapercut/obsidian-wypst) by _0xpapercut_

> 该插件会覆盖常规的数学块（ `$<...>$` 和 `$$<...>$$` ），使它们呈现为 Typst 数学。

![2024-02-24-Pasted image 20240225005447.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240225005447.png!pkmer)

[TV tracker](https://github.com/Shreshth-mehra/Obsidian-TV-Tracker) by _Shreshth Mehra_

> 一个简单的电影和电视节目库，用于跟踪最喜欢的电影和节目。每个电影和电视节目都以 Markdown 文件形式保存在您选择的文件夹中（在设置中指定）。每个文件都有 YAML 内容，用于显示、过滤和排序内容。
>
> 本产品使用 TMDB API，但未经 TMDB 认可或认证。

![2024-02-24-Pasted image 20240225010150.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240225010150.png!pkmer)

[Autogen](https://github.com/AidanTilgner/AutogenObsidianPlugin) by _Aidan Tilgner_

> 使用 OpenAI 模型根据笔记中的提示自动生成内容。

[Broken Links](https://github.com/ipshing/obsidian-broken-links) by _ipshing_

> 在您的库中查找未连接到笔记的损坏链接。支持多种视图，文件夹视图模仿文件浏览器布局，允许您在有组织的列表中查找损坏的链接并显示损坏链接的计数。

![2024-02-24-Pasted image 20240225012902.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240225012902.png!pkmer)

[Image Collector](https://github.com/tdaykin/obsidian_image_collector) by _tdaykin_

> 用一个命令收集当前笔记中的所有图像并将其保存到新文件夹中，而不必在做完笔记后再查找所有图像，或者事先创建特定于每个项目的文件夹来存储图像。

[Set View Mode per Note](https://github.com/AlexDavies8/obsidian-frontmatter-viewmode) by _Alex Davies_

> 使用 YAML frontmatter 指定每个笔记的查看模式。

[WordWise](https://github.com/ckt1031/obsidian-wordwise-plugin) by _ckt1031_

> AI 内容生成的写作伴侣。该插件旨在通过集成人工智能驱动的提示、集成工具和命令来简化您的工作流程、提高工作效率并提供无缝的用户体验。

[Git Integration](https://github.com/noradroid/obsidian-git-integration) by _noradroid_

> 轻松备份远程存储库上的库。
>
> 该插件适用于 Windows 10+，需要在本地系统中安装 Git。

[GitHub Link](https://github.com/nathonius/obsidian-github-link) by _Nathonius_

> 为定期使用 github issues 和 pull requests 的开发人员提供的全新插件。它从 GitHub 的 API 中提取 github 链接的信息，并支持呈现动态问题表和拉取请求。

[Simple File Push](https://github.com/huedaya/obsidian-simple-file-push) by _Kim Hudaya_

> 将 Markdown 文件推送到 API 端点。

[Paste transform](https://github.com/rekby/obsidian-paste-transform) by _Timofey Koolin_

> 通过正则表达式规则修改剪贴板中的文本。

[Wikipedia Search v2.4.1](https://github.com/StrangeGirlMurph/obsidian-wikipedia-search/releases/tag/2.4.1) by _StrangeGirlMurph_

> 修复了模板仍然使用指定模板文件而不创建注释的错误。
> 改进了自动清理功能，还可以解析 Wikipedia 文章介绍的 LaTeX。

#### 更新

> [!TIP]
> **如果您想要本周更新的插件的完整列表，请查看 Ganesh Kumar 的 [插件更新索引](https://obsidian-plugin-stats.vercel.app/updates?ref=eleanorkonik.com)。**

[Metadata Menu v0.8.3](https://github.com/mdelobelle/metadatamenu/releases/tag/0.8.3) by _mdelobelle_

> - **新功能**
> 	- 在表格视图和 mdm 代码块中，一次性轻松**批量编辑多个笔记的字段**（属性）
> 	- 自定义对象、对象列表和对象列表项的显示（在数据视图表和字段模式中）
> - **一些修复**
> 	- 管理字段名称中的括号（仅限 frontmatter）
> 	- 修复：文件类名称中的空格会破坏字段模式
> 	- 修复：布尔字段值从 true 变为 false 时清空的问题
> 	- 防止迁移清除文件类中的字段设置
> - **文档和标签的小改进**

[Beautitab v1.4.1](https://github.com/andrewmcgivery/obsidian-beautitab/releases/tag/1.4.1) by _Andrew McGivery_

> - 设置屏幕重新设计，以便将来实现更多组织和更多功能
> - 添加了对 12 小时或 24 小时制的支持
> - 添加了在问候语文本中使用 {{greeting}} 占位符来根据一天中的时间添加文本的功能（例如早上好）
> - 增加了显示 5 个书签的功能，无论是来自所有书签还是来自特定书签组
> - 添加了自定义引语。在设置中，您可以将插件配置为使用内置引语、自定义引语或两者的组合。
> - Bug：Obsidian 的内部书签插件保留了对已删除文件的引用，导致 Beautitab 在尝试创建这些书签的链接时崩溃。添加了应该解决此问题的安全检查。

![2024-02-24-Pasted image 20240224153538.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240224153538.png!pkmer)

[Soundscapes v1.2.0](https://github.com/andrewmcgivery/obsidian-soundscapes/releases/tag/1.2.0) by _Andrew McGivery_

> - **我的音乐 - 本地音乐库**
> 	- “我的音乐”音景允许您使用本地 MP3 音乐文件在 Obsidian 中获得完整的音乐播放器体验。选择本地音乐文件夹后，该插件将为您的音乐建立索引，并偶尔在后台重新索引。
> 	- 一旦选择“我的音乐”音景，“我的音乐”支持使用状态栏中的迷你播放器进行播放，以及新的专用“我的音乐”视图，功能区侧边栏上会显示一个新图标。您可以关闭此视图，音乐将继续播放。
> 	- 在“我的音乐”视图中，您可以播放、暂停、下一个、上一个、查找、随机播放和搜索。
> - 其他变化
> 	- 添加吸血鬼：假面舞会 – 血统氛围，作者：@ThomasEricB

![2024-02-24-Pasted image 20240224153354.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240224153354.png!pkmer)

[Various Complements v9.3.0](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/releases/tag/9.3.0) by _various-complements_

> 高亮新增：**[使用自定义别名](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/3.%20Commands/3.1.%20pop-up%20commands/%F0%9F%97%A8%EF%B8%8Fselect%20with%20custom%20alias/) 的选择弹出命令**
>
> 此命令将插入选定的建议以及自定义别名。可以在执行命令后出现的对话框中输入别名。
>
> 此功能仅适用于内部链接补充。

[Webpage HTML Export v1.8.0](https://github.com/KosmosisDire/obsidian-webpage-export/releases/tag/1.8.0) by _Nathan George_

> - **特点**
> 	- 全文搜索！
> 	- 可调整大小的侧边栏！
> 	- 文件和文件夹图标（Iconize 插件和 MAKE.md 支持）
> 	- 自定义文件标题（例如将 index.html 显示为“Home”）
> 	- 自定义头部内容
> 	- 选择自定义图标
> 	- 列表现在可以折叠
> 	- 添加了 RSS 支持/生成
> 	- 社交链接预览支持
> - **变化**
> 	- 侧边栏重新设计！
> 	- 文件选择器中的“全选”
> 	- 改进增量导出。
> 	- 新的设置组织
> 	- 允许使用“~/Folder”表示法作为文件路径（即使在 Windows 上）
> 	- 许多微小的生活质量改善需要几页纸才能列出。
> 	- 添加了新的 Markdown 渲染 API，最终目标是允许该插件被其他插件使用
> 	- 导出的 html 现在所有 Lighthouse 指标的得分均超过 90！
> - 错误修复
> 	- 修复了独立出口极其缓慢且庞大的问题
> 	- 修复了标题折叠图标的奇怪位置
> 	- 修复了 92 个 GitHub 问题！如果您想查看完整列表，请查看最近关闭的问题。

### 未上架插件

> [!Caution]
> **注意：社区列表中尚未提供所有新插件，因为它们需要先经过代码审查。您可以使用 [Beta Reviewer 的自动更新工具](https://github.com/TfTHacker/obsidian42-brat?ref=eleanorkonik.com) 手动安装社区列表中尚未包含的插件。但请注意，这并不像等待它们通过代码审查那么安全。**

[View Count](https://github.com/trey-wallis/obsidian-view-count) by _Trey Wallis_

> 该插件将跟踪您的库中每个文件的查看次数并在您的笔记上增加 `view-count` 属性。

[Command Block List](https://github.com/RyotaUshio/obsidian-command-block-list) by _RyotaUshio_

> 用于从命令面板隐藏不需要的命令。
> 只需转到插件设置，单击“+”按钮，然后添加您不想显示的命令。

[Link Keeper](https://github.com/RyotaUshio/obsidian-link-keeper) by _RyotaUshio_

> 自动更新链接，即使在 Obsidian 之外重命名或移动文件。

![2024-02-24-305870770-6b0ed1df-191f-483c-a62b-67c1d47681c3.gif](https://cdn.pkmer.cn/images/2024-02-24-305870770-6b0ed1df-191f-483c-a62b-67c1d47681c3.gif!pkmer)

[Better Daily Notes](https://github.com/showaykerker/better-daily-notes-obsidian-plugin/tree/master) by _showaykerker_

> - 主要特征
> 	- 立即生成每日笔记和文件夹，只需单击一下即可按年和月整齐地组织它们。另外，还可以自定义每日笔记格式以满足您的需求。
> 	- 通过定义午夜后的特定时间窗口（将其算作前一天）来定制您的体验 - 对于那些熬夜的人来说是理想的选择！
> 	- 告别图像混乱！ Better Daily Notes 会自动重命名您添加到每日笔记中的图像并将其存储在每个月目录中的专用文件夹中。如果您想要更多控制，可以根据自己的喜好自定义图像显示大小并压缩文件（可选）。

# 2024-02-25：Why does your next audio-video player have to be a player?

> [!Abstract]
> **Statistical time**: 2024-02-17 17:00 ~ 2024-02-24 00:00

## Official Updates

### Obsidian v1.5.8 is now available on desktop and mobile

#### Highlights

- The new table editor is now finally available on mobile!
- Tables are now formatted as you type, meaning columns will be aligned when you switch to source mode.
- For developers, we've added some much needed improvements to the API. See the [changelog](https://github.com/obsidianmd/obsidian-api/blob/master/CHANGELOG.md#v157) for details.

#### Release notes

- Desktop: <https://obsidian.md/changelog/2024-02-22-desktop-v1.5.8/>
- Mobile: <https://obsidian.md/changelog/2024-02-22-mobile-v1.5.8/>

## Plugin News

### Produced by PKMer

> [!INFO]
> [PKMer](https://pkmer.cn/) aims to create a powerful knowledge management community in the Eastern Hemisphere. "PKM" stands for Personal Knowledge Management, and the "er" suffix represents individuals. Anyone who is focused on and enjoys personal knowledge management work, and who seeks efficiency, can be included in this category. We hope the community can bring together more people like this.

#### [Thino](https://pkmer.cn/products/thino/) v2.2.4 has been realeased

##### New Features

- Added support for diary synchronization:
    - Now supports Obsidian Core Plugin - Diary plugin synchronization mode.
    - Supports setting corresponding synchronization file storage methods on different ends, recommending consistent settings across multiple ends.
    - For more details, refer to [Thino Synchronization](https://thino.pkmer.net/thino/03_thino-web%E6%9C%8D%E5%8A%A1/thino%20%E5%90%8C%E6%AD%A5).

##### Adjustments

- All inline markers (indicating deletion, synchronization, and archiving) have been corrected to a single icon in WYSIWYG mode, which can display the original text when selected.
- Synchronization button added with a micro-animation to provide positive feedback when clicked.
- Multilingual support: All visible interface texts now have corresponding Chinese displays.

##### Bug Fixes

- Fixed synchronization issues on iOS (including iPhone, iPad) clients.
- Fixed the issue where the full-screen mode in the editor could not be collapsed on mobile devices.
- Fixed UI abnormalities at the bottom of the list in the editor on mobile devices.
- Fixed the issue where the pin status was not synchronized during previous synchronizations.
- Fixed the issue where when saving a whiteboard or single file, filenames with extensions such as .thino. Canvas or .thino. Md were not saved; for example, entering "abcd" as the filename did not append .thino. Canvas or .thino. Md.

#### Media Extended has been updated to version 3.0.2

- **New**:
	- Live Preview
	- Inline field
	- Multi-window support
	- Webpage player
		- Now, in addition to dedicated support for platforms like YouTube, Vimeo, and Bilibili, you can venture beyond and embed media from virtually any URL into your notes! (some URLs might not play ball)
	- ...

You can download it from [Github](https://github.com/PKM-er/media-extended/releases/tag/3.0.2) or the official community! Check out [https://mx.pkmer.net/](https://mx.pkmer.net/) for detailed information on v3+(still under construction...)

### Community Plugins

> [!Tip]
> **These plugins went through code review and are now available in Obsidian's plugin list.** For the full list, check out the [**plugin stats page**](https://obsidian-plugin-stats.vercel.app/new?ref=eleanorkonik.com).

#### New

[Image Inline](https://github.com/ZackaryW/obsidian-image-inline) by _Zackary W_

> Paste your image without attachment files. This plugin addresses that need by allowing you to convert images into base64 encoded strings and embed them directly within your notes.

[Share My Plugin List](https://github.com/Benature/obsidian-share-my-plugin-list) by _Benature_

> Share the enabled plugins in list/table format. Help you to share/recommend the plugins you are using to others.

[GPG Encrypt](https://github.com/lajg-dev/obsidian-plugin-gpg-inline-encrypt) by _Luis Jaramillo_

> GPG encrypt inline text using hotkeys.  You can use online encryption or full document encryption.

[Smart Second Brain](https://github.com/your-papa/obsidian-Smart2Brain) by _Leo310, nicobrauchtgit_

> Interact with your privacy focused assistant by leveraging Ollama or OpenAI and making your second brain even smarter.

[GitHub Sync](https://github.com/kevinmkchin/Obsidian-GitHub-Sync) by _Kevin Chin_

> Sync vault to personal GitHub for syncing across devices.

![2024-02-24-Pasted image 20240225004758.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240225004758.png!pkmer)

[Kindle Highlights Importer](https://github.com/l2xu/kindle_html_importer) by _MovingMillennial_

> Imports the kindle highlights from the html file (you get from the kindle app) into a note. The Kindle HTML file will be converted into a Markdown file and saved to your specified location.

[Tag Formatter](https://github.com/snsvrno/snsvrno-short-tags) by _snsvrno_

> A configurable obsidian plugin that changes the way tags are displayed in preview mode. Currently supported:
> - - Hide the "#" on tags.
> - Hide parents for all nested tags.
> - Hide all parent tags.
> - Hide portions of tags based on a pattern.
> - Add CSS class for every shortened tag (per definitons).
> - Add CSS class for every tag based on parents.
> - Add CSS class for all tags.

[Journalyst](https://github.com/Justin-Arnold/Journalyst) by _Justin Arnold_

> This plugin allows for easy tracking of your daily journaling, and provides a simple way to create new entries for each day. You could for example have a journal for your personal life, and another for your work life, another for sleep tracking and so on.

![2024-02-24-Pasted image 20240225005329.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240225005329.png!pkmer)

[Wypst](https://github.com/0xpapercut/obsidian-wypst) by _0xpapercut_

> This plugin overrides regular math blocks (`$<...>$` and `$$<...>$$`), so that they're rendered as Typst math.

![2024-02-24-Pasted image 20240225005447.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240225005447.png!pkmer)

[TV tracker](https://github.com/Shreshth-mehra/Obsidian-TV-Tracker) by _Shreshth Mehra_

> A simple Movie and TV show library to keep track of favourite movies and shows. Each Movie and TV show is saved as a markdown file in a folder of your choice (Specified in the settings). Each file has YAML content which is used to Display, filter and sort content. This product uses the TMDB API but is not endorsed or certified by TMDB.
>
> This product uses the TMDB API but is not endorsed or certified by TMDB.

![2024-02-24-Pasted image 20240225010150.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240225010150.png!pkmer)

[Autogen](https://github.com/AidanTilgner/AutogenObsidianPlugin) by _Aidan Tilgner_

> In place autogeneration of content based on prompts within notes using OpenAI's models.

[Broken Links](https://github.com/ipshing/obsidian-broken-links) by _ipshing_

> Find broken links in your repository, those not connected to any notes. Supports multiple views, with folder view mimicking a file browser layout, allowing you to locate broken links in an organized list and display a count of broken links.

![2024-02-24-Pasted image 20240225012902.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240225012902.png!pkmer)

[Image Collector](https://github.com/tdaykin/obsidian_image_collector) by _tdaykin_

> Use a command to collect all images from current note and saves them to a new folder, rather than having to either find all of the images after you have made your note or beforehand create folders specific to each project to store images.

[Set View Mode per Note](https://github.com/AlexDavies8/obsidian-frontmatter-viewmode) by _Alex Davies_

> Use YAML frontmatter to specify a view mode per note.

[WordWise](https://github.com/ckt1031/obsidian-wordwise-plugin) by _ckt1031_

> Writing companion for AI content generation. This plugin aims to simplify your workflow, boost productivity, and provide a seamless user experience by integrating **AI-powered prompts, integrated tools and commands**.

[Git Integration](https://github.com/noradroid/obsidian-git-integration) by _noradroid_

> Easily backup vault on a remote repository.
>
> This plugin works on Windows 10+ and requires Git to be installed in the local system.

[GitHub Link](https://github.com/nathonius/obsidian-github-link) by _Nathonius_

> Brand new plugin for devs who use github issues and pull requests regularly. It pulls info from GitHub's APIs for github links and supports rendering a dynamic table of issues and pull requests.

[Simple File Push](https://github.com/huedaya/obsidian-simple-file-push) by _Kim Hudaya_

> Push Markdown file to API endpoint.

[Paste transform](https://github.com/rekby/obsidian-paste-transform) by _Timofey Koolin_

> Modify text from the clipboard by regexp rules..

#### Updates

>[!Tip]
>**If you want a comprehensive list of what plugins updated this week, check out this [plugin updates index](https://obsidian-plugin-stats.vercel.app/updates?ref=eleanorkonik.com) by Ganessh Kumar.**

[Metadata Menu v0.8.3](https://github.com/mdelobelle/metadatamenu/releases/tag/0.8.3) by _mdelobelle_

> - **New features**
> 	- Easy **bulk edit fields** (properties) **in multiple notes** at once from tableviews and mdm code blocks
> 	- Customize the display of Object, ObjectList and ObjectListItems (in dataview tables and fields modal)
> - **Some fix**
> 	- Manage parenthesis in the name of fields (frontmatter only)
> 	- Fix: Space in fileclass name breaks fields modal
> 	- Fix: Boolean field value emptied when changing from true to false
> 	- Prevent migrations from clearing fields settings in fileclasses
> - **Doc & labels small improvements**

[Beautitab v1.4.1](https://github.com/andrewmcgivery/obsidian-beautitab/releases/tag/1.4.1) by _Andrew McGivery_

> - Settings screen redesign to allow for more organization and more features in the future
> - Added support for 12-hour or 24-hour clock
> - Added ability to use {{greeting}} placeholder in greeting text to add text based on the time of the day (e.g. good morning)
> - Added ability to show 5 bookmarks, either from all bookmarks or from a specific group
> - Adds custom quotes. In settings, you can configure the plugin to use the built in quotes, your custom quotes, or a mix of both.
> - Bug: Obsidian's internal bookmarks plugin was holding onto references to deleted files causing Beautitab to crash when trying to create links to those bookmarks. Added a safety check that should fix this issue.

![[2024-02-24-Pasted image 20240224153538.png]]

[Soundscapes v1.2.0](https://github.com/andrewmcgivery/obsidian-soundscapes/releases/tag/1.2.0) by _Andrew McGivery_

> - **My Music - Local Music Library**
> 	- The "My Music" soundscape allows you to have a full music player experience right within Obsidian using your local MP3 music files. Upon selecting your local music folder, the plugin will index your music and occasionally re-index it in the background.
> 	- My Music supports playing with the mini-player in the status bar as well as a new dedicated My Music view with a new icon on the Ribbon sidebar once the "My Music" soundscape is selected. You can close this view and the music will continue playing.
> 	- Within the My Music view, you can play, pause, next, previous, seek, shuffle, and search.
> - Other Changes
> 	- Add Vampire: The Masquerade – Bloodlines ambience by @ThomasEricB

![2024-02-24-Pasted image 20240224153354.png](https://cdn.pkmer.cn/images/2024-02-24-Pasted%20image%2020240224153354.png!pkmer)

[Various Complements v9.3.0](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/releases/tag/9.3.0) by _various-complements_

> Shiny New Things: [Select with custom alias](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/3.%20Commands/3.1.%20pop-up%20commands/%F0%9F%97%A8%EF%B8%8Fselect%20with%20custom%20alias/) pop-up command
>
> This command inserts the selected suggestion along with a custom alias. The alias can be entered in a dialog that appears after the command is executed.
>
> This feature is only available with Internal link complement.

[Webpage HTML Export v1.8.0](https://github.com/KosmosisDire/obsidian-webpage-export/releases/tag/1.8.0) by _Nathan George_

> - **Features**
> 	- Full text search!
> 	- Resizable sidebars!
> 	- File and folder icons (Iconize plugin and MAKE.md support)
> 	- Custom file titles (for example to display index.html as "Home")
> 	- Custom head content
> 	- Choose a custom favicon
> 	- Lists are now foldable
> 	- Added RSS support / generation
> 	- Social link preview support
> - **Changes**
> 	- Sidebar redesign!
> 	- "Select All" in the file picker
> 	- Improved incremental export.
> 	- New settings organization
> 	- Allow using `~/Folder` notation is file paths (even on windows)
> 	- Lots of tiny quality of life improvements that would take pages to list.
> 	- Added a new markdown rendering API, with the eventual goal of allowing the plugin to be used by other plugins
> 	- Exported html now scores above 90 across all lighthouse metrics!
> - **Bug fixes**
> 	- Fixed self contained exports being extremely slow and large
> 	- Fixed weird positioning of heading collapse icons
> 	- Fixed 92 GitHub issues!! If you'd like to see a full list look at the recently closed issues.

[Code Styler Version v1.1.7](https://github.com/mayurankv/Obsidian-Code-Styler/releases/tag/1.1.7) by _Mayuran Visakan_

> - **Added**
> 	- Reference codeblocks for referencing local and external files
> 		- Markdown links, local links and html links
> 		- Syntax Highlighting
> 	- YAML frontmatter Syntax Highlighting in source mode
> - **Changed**
> 	- URLs can now be linked in codeblock title references

[Wikipedia Search v2.4.1](https://github.com/StrangeGirlMurph/obsidian-wikipedia-search/releases/tag/2.4.1) by _StrangeGirlMurph_

> Fixes a bug where a template still uses the specified template file without creating a note.
> Improves the auto-cleanup feature to also parse the LaTeX of a Wikipedia articles intro.

### Pending

> [!Caution]
> **Note: Not all new plugins are available in the community list yet, as they need to go through code review first. You can manually install plugins that aren't in the community list yet by using the [Beta Reviewer's Auto-update Tool](https://github.com/TfTHacker/obsidian42-brat?ref=eleanorkonik.com). Note, though, that this is not as safe as waiting for them to go through code review.**

[View Count](https://github.com/trey-wallis/obsidian-view-count) by _Trey Wallis_

> This plugin will track the view count for each file in your vault and and add a `view-count` property on your notes.

[Command Block List](https://github.com/RyotaUshio/obsidian-command-block-list) by _RyotaUshio_

> Hide unwanted commands from the command palette.
> Just go to the plugin settings, click the "+" button, and add the commands that you don't want to show up.

[Link Keeper](https://github.com/RyotaUshio/obsidian-link-keeper) by _RyotaUshio_

> Auto-update links even when renaming or moving files outside of Obsidian.

![2024-02-24-305870770-6b0ed1df-191f-483c-a62b-67c1d47681c3.gif](https://cdn.pkmer.cn/images/2024-02-24-305870770-6b0ed1df-191f-483c-a62b-67c1d47681c3.gif!pkmer)

[Better Daily Notes](https://github.com/showaykerker/better-daily-notes-obsidian-plugin/tree/master) by _showaykerker_

> - Main features
> 	- Instantly generate daily notes and folders, organizing them neatly by year and month with a single click. Plus, customize the daily note format to suit your needs.
> 	- Tailor your experience by defining a specific window of hours after midnight to count as the previous day—ideal for those burning the midnight oil!
> 	- Say goodbye to image clutter! Better Daily Notes automatically renames and stores images you add to your daily notes in a dedicated folder within each month's directory. And if you want more control, customize image display sizes and compress files to your liking (optional).

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

