---
uid: 20240106002403
title: Obsidian Weekly 2024-01-06
tags: [Obsidian, Weekly]
description: Obsidian Weekly 2024-01-06
author: 淡水鱼,PKMer
type: awesome
draft: false
editable: false
modified: 20240429000654
---

# Obsidian Weekly 2024-01-06

> [!Abstract]
> **统计时间**：2023-12-30 21:00 ~ 2024-01-05 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

> [!Tip]
> ‌‌‌‌这些插件已经通过了代码审查，现在可以在 Obsidian 插件列表中获取。完整列表请查看 [插件统计页面](https://obsidian-plugin-stats.vercel.app/new?ref=eleanorkonik.com)。

#### 新增

[Meal Plan](https://github.com/tmayoff/obsidian-meals) by _Tyler Mayoff_ 帮助用户管理您的食谱列表以及计划一周的膳食。

[Emoji Autocomplete](https://github.com/KraXen72/obsidian-emoji-autocomplete) by _KraXen 72_ 允许用户通过简码轻松插入表情符号。**注意此插件与 [Emoji Shortcodes](https://github.com/phibr0/obsidian-emoji-shortcodes) （可完全替代）和 [Icon Shortcodes](https://github.com/aidenlx/obsidian-icon-shortcodes) 不兼容。**

[open-as-md](https://github.com/kursad-k/obsidian-openasmd) by _kursad-k_ 可让用户在 Obsidian 中编辑非 Markdown 文件。

[Ribbon Divider](https://github.com/andrewmcgivery/obsidian-ribbon-divider) by _Andrew McGivery_ 允许用户向功能区添加分隔线以分隔图标。

[Hill Charts](https://github.com/stufro/obsidian-hill-charts) by _stufro_ 用于将特性曲线图添加到笔记中。

[Canvas Card Background Remover](https://github.com/luxmargos/obsidian-canvas-card-bg-remover) by _luxmargos_ 可以使 Canvas 白板中的卡片背景变为透明。

#### 更新

> [!TIP]
> 如果您想要本周更新的插件的完整列表，请查看 Ganesh Kumar 的 [插件更新索引](https://obsidian-plugin-stats.vercel.app/updates?ref=eleanorkonik.com)。

[Imgur Plugin v2.5.0](https://github.com/gavvvr/obsidian-imgur-plugin/releases/tag/2.5.0) by _Kirill Gavrilov_ 添加了对在画布上粘贴的支持。

[ZettelFlow v2.0.0](https://github.com/RafaelGB/Obsidian-ZettelFlow/releases/tag/2.0.0) by _RafaelGB_ 重点改进了脚本，现在可以：

- 与 Dataview 和 Templater 集成
- 直接在 Obsidian 上使用 JS 编辑器
- 在画布中放置要执行的 JS 文件
- 改进了嵌入节点以允许自定义文本作为描述

[Metadata Menu v0.7.0](https://github.com/mdelobelle/metadatamenu/releases/tag/0.7.0) by _mdelobelle_ 增加了适用于管理媒体文件的新字段—— `Media` 和 `MultiMedia`，并且改进了字段选择器、文件类管理和 API 方法。具体如下：

- **新类型：媒体和多媒体**
	- 类似于 `File` 和 `MultiFile` 字段类型，但适用于非 `.md` 文件
	- 选择要搜索媒体文件的文件夹
	- 选择图像的嵌入尺寸
	- 选择媒体模式搜索的图库或列表模式
	- 请参阅 [文档](https://mdelobelle.github.io/metadatamenu/fields/#media )
- **改进的字段设置**
	- 更好的字段类型选择器
	- 更好的字段父选择器
- **文件类管理**
	- 黑曜石缓存更新后，表视图中的链接不再损坏
	- 创建后添加文件类模式只会在创建 Markdown 文件时显示
- **Api 方法**
	- `postValues`: `id` 参数已替换为 `indexedPath` 以匹配字段设置定义
	- `postNamedFieldValues` ：按名称（而不是 indexedPath) 创建或修改字段。更容易操作，但在多个字段具有相同名称的情况下不太精确。

[Shukuchi v0.4.0](https://github.com/tadashi-aikawa/shukuchi/releases/tag/0.4.0) by _tadashi-aikawa_ 添加了 `Open link in new window` 命令。

[Colored Tags Wrangler v0.16.3](https://github.com/code-of-chaos/obsidian-colored_tags_wrangler/releases/tag/0.16.3) by _AndreasSasDev_ 在标签颜色选择器旁边添加了两个按钮，允许用户按顺序移动标签。添加了一个命令，用于将标签导出为插入符号处的 JSON 代码块；两个实验命令，在调试设置中启用，允许插件（在桌面上）直接使用相同的数据覆盖 `.obsidian/graph.json` 文件。新设置的版本是版本 11，它更改了 Tags.ColorPicker 的存储方式。

[Tasks v5.5.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/5.5.0) by _Martin Schenck and Clare Macrae_ 添加了 `cancelled date` 字段用于取消日期并默认启用；改进了编辑任务模式。

[Metadata Menu v0.7.1](https://github.com/mdelobelle/metadatamenu/releases/tag/0.7.1) by _mdelobelle_ **更改了字段设置选项卡中文件类的字段顺序**以应用于：

- 缺失字段插入
- MDM 图标模式字段顺序（如果注释中已有字段，则注释中字段的顺序将比设置顺序具有更高的优先级）
- 文件类表视图列默认顺序
- MDM 代码块列默认顺序
并修复了插入时以倒序插入缺失字段的问题。

[Meta Bind v0.11.0](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/releases/tag/0.11.0) by _Moritz Jung_

- **新功能**
	- 元绑定按钮现在可以 [更新元数据](https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/guides/buttons/#update-metadata-action)
	- CSS 类现在可以添加到元绑定按钮
	- 现在可以将与标签不同的工具提示添加到元绑定按钮中
	- 建议输入字段的 `useLinks` 参数现在支持 `partial` 值
- **变化**
	- 数学视图字段的计算值现在将保存为数字（如果它是数字）
- **Bug 修复**
	- 修复了许多与卸载和按钮生成器相关的小问题

[Arcana v1.6.0](https://github.com/A-F-V/obsidian-arcana/releases/tag/1.6.0) by _A-F-V_ 新增工具 **Marco Polo**（马可·波罗），你可以：

- 要求 Polo 建议文件夹中的笔记或所有笔记的新位置。
- 给出管理设置中建议的规则。
- 可以接受和拒绝建议。

### 未上架插件

> [!Caution]
> 注意：社区列表中尚未提供所有新插件，因为它们需要先经过代码审查。您可以使用 [Beta Reviewer 的自动更新工具](https://github.com/TfTHacker/obsidian42-brat?ref=eleanorkonik.com) 手动安装社区列表中尚未包含的插件。但请注意，这并不像等待它们通过代码审查那么安全。

[Reason](https://www.reason.garden/) by _josh_ 一款旨在利用 AI 帮助用户检索、提取、分析、合成 Obsidian 笔记的插件。尚在测试中，如有兴趣可点击前方链接查看并注册。

[Obsidian Canvas Style Menu v0.0.6](https://github.com/michaellw/Obsidian-Canvas-Style-Menu/releases/tag/0.0.6) by _michaellw_ 更新了如下新功能：

- 全新的插件设置页面，现在您可以轻松自定义画布样式菜单设置。先前版本的设置将自动迁移。
- 支持导出、导入、另存为和恢复样式包。 （目前只有菜单和图标设置，CSS 文件仍然需要按照 Obsidian 方法单独导出和导入。）
- 样式包在插件目录中的“packages”文件夹中集中管理。导出包时，它将导出到“packages”文件夹中。您可以使用“Open packages folder”按钮打开该文件夹。导入包时，将包文件放入“packages”文件夹中，然后单击“重新加载包”按钮，设置就会被导入。
- 新的连接线类型：直线，肘线还需要一些工作，应该支持手动调整肘线位置。

[AI Note Suggestion](https://github.com/echo-saurav/obsidian-ai-note-suggestion) by _Saurav_ 旨在让您的笔记体验更加无缝。它利用 AI 矢量搜索的强大功能，使用 Weaviate 在您键入时建议相似且相关的注释，从而减少您对传统标记系统的依赖。您还可以按标签过滤笔记，为您提供所需的灵活性。特别适合容易忘记给笔记加标签的用户，尤其是那些经常丢失且从未打开的快速、较小的笔记。

- **特征：
	- **人工智能支持的建议：** 该插件根据您当前正在输入的内容或当前打开的笔记建议类似的笔记
	- **快速搜索：** 有一个命令调色板，可以快速搜索笔记，无需匹配排除词！您只需要搜索相关单词或概念即可！
	- **代码块：** 您还可以通过 Dataview 插件等标签过滤注释

## 外观

[Carbon Theme](https://github.com/vhbelvadi/obsidian-carbon) by _oqipo_ 一个极简风格的主题，名字来源于 IBM Carbon 设计规范，支持明暗方案。

![Obsidian theme Carbon Theme|650](https://cdn.pkmer.cn/images/2024-01-06-Pasted%20image%2020240102232340.png!pkmer)

[Garden Gnome (Adwaita, GTK) Theme](https://github.com/oqipoDev/garden-gnome-obsidian) by _oqipo_ 模仿 GTK/Adwaita 外观的黑曜石主题。

![Obsidian theme Garden Gnome (Adwaita, GTK) Theme |650](https://cdn.pkmer.cn/images/2024-01-06-Pasted%20image%2020240102232802.png!pkmer)

[Phoenix Theme](https://github.com/ryzenfromfire/obsidian-phoenix) by _RyzenFromFire_ 一个以红、橙、黄色调为主，伴少量蓝绿色的多彩主题。

![Obsidian theme Phoenix Theme | 650](https://cdn.pkmer.cn/images/2024-01-06-Pasted%20image%2020240102233446.png!pkmer)

## 其他新闻

[GetRecipe-QuickAdd](https://github.com/KleinByte/GetRecipe-QuickAdd) by _KleinByte_ 一个可用于捕获食谱的 quickadd 脚本。

# 2024-01-06

> [!Abstract]
> **Statistical time**: 2023-12-30 21:00 ~ 2024-01-05 21:00
> **Abstract**: Editorial experience optimization and more refined data management

## Plugin News

### Community Plugins

> [!Tip]
> These plugins went through code review and are now available in Obsidian's plugin list. For the full list, check out the [plugin stats page](https://obsidian-plugin-stats.vercel.app/new?ref=eleanorkonik.com).

#### New

[Meal Plan](https://github.com/tmayoff/obsidian-meals) by _Tyler Mayoff_ helps you manage your list of recipes as well as plan meals for the week.

[Emoji Autocomplete](https://github.com/KraXen72/obsidian-emoji-autocomplete) by _KraXen72_ allows you to easily insert emoji by their shortcodes. **Note that this plugin is incompatible with [Emoji Shortcodes](https://github.com/phibr0/obsidian-emoji-shortcodes) (this is a full replacement) and [Icon Shortcodes](https://github.com/aidenlx/obsidian-icon-shortcodes).**

[open-as-md](https://github.com/kursad-k/obsidian-openasmd) by _kursad-k_ lets you edit non-markdown files in Obsidian.

[Ribbon Divider](https://github.com/andrewmcgivery/obsidian-ribbon-divider) by _Andrew McGivery_ allows you to add dividers to the ribbon to space out your icons.

[Hill Charts](https://github.com/stufro/obsidian-hill-charts) by _stufro_ is used to add hill charts to your notes.

[Canvas Card Background Remover](https://github.com/luxmargos/obsidian-canvas-card-bg-remover) by _luxmargos_ can be used to make the background of cards transparent in the Canvas.

#### Updates

>[!Tip]
>If you want a comprehensive list of what plugins updated this week, check out this [plugin updates index](https://obsidian-plugin-stats.vercel.app/updates?ref=eleanorkonik.com) by Ganessh Kumar.

[Imgur plugin v2.5.0](https://github.com/gavvvr/obsidian-imgur-plugin/releases/tag/2.5.0) by _Kirill Gavrilov_ added support for pasting on canvas.

[ZettelFlow v2.0.0](https://github.com/RafaelGB/Obsidian-ZettelFlow/releases/tag/2.0.0) by _RafaelGB_ focused on improving the script, now allows:

- Integration with Dataview and Templater
- a JS editor directly on Obsidian
- DnD your JS files in your canvas to be executed
- Improved embed nodes to allow custom text as a description

[Metadata Menu v0.7.0](https://github.com/mdelobelle/metadatamenu/releases/tag/0.7.0) by _mdelobelle_ added new fields for managing Media files - `media` and `MultiMedia` and improved field selectors, fileclass management, and API methods. Details are as follows:

- **New types: Media and MultiMedia**
	- Like `File` and `MultiFile` field type but for non `.md` files
	- Select the folder to search your media files
	- Choose an embed size for images
	- Choose a gallery or list mode for Media modal search
	- See [documentation](https://mdelobelle.github.io/metadatamenu/fields/#media)
- **Improved field settings**
	- Better field type selector
	- Better field parent selector
- **Fileclass management**
	- Links in tableview not broken anymore after obsidian cache update
	- The add fileclass modal after create will only show up for markdown file creation
- **Api method**
	- `postValues`: `id` argument has been replaced by `indexedPath` to match the field setting definition
	- `postNamedFieldValues`: create or modify fields by name (instead of indexedPath). Easier to manipulate but less precise in case of multiple fields having the same name

[Shukuchi v0.4.0](https://github.com/tadashi-aikawa/shukuchi/releases/tag/0.4.0) by _tadashi-aikawa_ added an `Open link in new window` command.

[Colored Tags Wrangler v0.16.3](https://github.com/code-of-chaos/obsidian-colored_tags_wrangler/releases/tag/0.16.3) by _AndreasSasDev_ added two buttons next to the Tag Color picker which allowing users to move the tags around in the order , a command to export the tags as a JSON codeblock at the caret and two experimental commands, enabled in the debug settings, allowing the plugin (on Desktop) to directly overwrite the `.obsidian/graph.json` file with the same data. The new settings' version is version 11 and changes how the Tags.ColorPicker is stored.

[Tasks v5.5.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/5.5.0) by _Martin Schenck and Clare Macrae_ added `cancelled date` field which is enabled by default and improved Edit Task Modal.

[Metadata Menu v0.7.1](https://github.com/mdelobelle/metadatamenu/releases/tag/0.7.1) by _mdelobelle_ **changed the order of fields for fileClasses in the field settings tab** to apply on:

- Missing fields insertion
- MDM icon modal fields order (if the note has already fields in it, the order of the fields in the note will have higher priority over the settings order)
- Fileclass tableview columns default order
- MDM Code block columns default order
Also fixed the problem of inserting missing fields not inserted in reverse order.

[Meta Bind v0.11.0](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/releases/tag/0.11.0) by _Moritz Jung_

- **New Features**
	- Meta Bind Buttons can now [update metadata](https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/guides/buttons/#update-metadata-action)
	- CSS Classes can now be added to Meta Bind Buttons
	- A tooltip that is different from the label can now be added to Meta Bind Buttons
	- The `useLinks` argument for suggester like input fields now supports the `partial` value
- **Changes**
	- The computed value of math view fields will now be saved as a number if it is a number
- **Bug Fixes**
	- Fixed a multitude of small issues related to unloading and the button builder

[Arcana v1.6.0](https://github.com/A-F-V/obsidian-arcana/releases/tag/1.6.0) by _A-F-V_ added a new tool **Marco Polo**, you can:

- Ask Polo to suggest a new location for a note or all notes within a folder.
- Give rules governing suggestions in settings.
- Can accept and reject suggestions.

### Pending

> [!Caution]
> Note: Not all new plugins are available in the community list yet, as they need to go through code review first. You can manually install plugins that aren't in the community list yet by using the [Beta Reviewer's Auto-update Tool](https://github.com/TfTHacker/obsidian42-brat?ref=eleanorkonik.com). Note, though, that this is not as safe as waiting for them to go through code review.

[Reason](https://www.reason.garden/) by _josh_ is a plugin designed to use AI to help users retrieve, extract, analyze, and synthesize Obsidian notes. It is still in testing, please click the link ahead to view and register if you are interested.

[Obsidian Canvas Style Menu v0.0.6](https://github.com/michaellw/Obsidian-Canvas-Style-Menu/releases/tag/0.0.6) by _michaellw_ updated with the following new features:

- Brand new plugin settings page, now you can easily customize your canvas style menu settings. The settings from the previous version will be automatically migrated.
- Support for Export, Import, Save as, and Restore style package. (currently only menu and icon settings, CSS file still needs to be exported and imported separately according to the Obsidian method.)
- Style packages are centrally managed in the "packages" folder within the plugin directory. When you export the package, it will be exported to the "packages" folder. You can open the folder by using the "Open packages folder" button. When you import the package, put the package file in to the "packages" folder, then click the "Reload packages" button, then the settings will be imported.
- The new connection line type: straight line, and the elbow line still needs some work, shoule support manual adjustment of the elbow line positions.

[AI Note Suggestion](https://github.com/echo-saurav/obsidian-ai-note-suggestion) by _Saurav_ is designed to make your note-taking experience even more seamless. It harnesses the power of AI vector search using [Weaviate](https://weaviate.io/) to suggest similar and related notes as you type, reducing your dependency on traditional tagging systems. You can also filter notes by tags, giving you the flexibility you need. It's especially good for users who tend to forget to tag notes, especially those quick, smaller ones that often get lost and never opened.

- **Features:**
	- **AI-Powered Suggestions:** The plugin suggests similar notes based on the content you're currently typing or currently opened note
	- **Quick search:** There is a command palette to quickly search notes without matching exect words! you just need to search with related words or concept !
	- **Code Block:** You can also filter notes by tags like Dataview plugin

## Appearance

[Carbon Theme](https://github.com/vhbelvadi/obsidian-carbon) by _oqipo_ A minimal theme with light and dark schemes named after the IBM Carbon design specifications.

![Obsidian theme Carbon Theme|650](https://cdn.pkmer.cn/images/2024-01-06-Pasted%20image%2020240102232340.png!pkmer)

[Garden Gnome (Adwaita, GTK)](https://github.com/oqipoDev/garden-gnome-obsidian) by _oqipo_ An Obsidian theme that imitates the look of GTK/Adwaita.

![Obsidian theme Garden Gnome (Adwaita, GTK) Theme |650](https://cdn.pkmer.cn/images/2024-01-06-Pasted%20image%2020240102232802.png!pkmer)

[Phoenix Theme](https://github.com/ryzenfromfire/obsidian-phoenix) by _RyzenFromFire_ A colorful theme with red, orange, and yellow accents, with a dash of blue and green.

![Obsidian theme Phoenix Theme | 650](https://cdn.pkmer.cn/images/2024-01-06-Pasted%20image%2020240102233446.png!pkmer)

## Other News

[GetRecipe-QuickAdd](https://github.com/KleinByte/GetRecipe-QuickAdd) by _KleinByte_ A quickadd script that can be used to capture recipes.