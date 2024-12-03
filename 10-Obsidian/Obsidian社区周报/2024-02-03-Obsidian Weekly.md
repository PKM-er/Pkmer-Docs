---
uid: 20240206160144
title: 2024-02-03：区域同步服务器上线！Buttons 回归
tags: [Obsidian, Weekly]
description: Obsidian Weekly 2024-02-03：区域同步服务器上线！Buttons 回归
author: 淡水鱼,PKMer
type: awesome
draft: false
editable: false
modified: 20240206171617
---

# Obsidian Weekly 2024-02-03：区域同步服务器上线！Buttons 回归

> [!Abstract]
> **统计时间**：2024-01-26 21:00 ~ 2024-02-03 02:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方更新

### 官方同步新增区域服务器

我们向 Obsidian Sync 添加了新的区域服务器。现在，您可以通过选择靠近您的区域来更快地同步。

选项包括北美、欧洲、亚洲和大洋洲。所有内容均采用最强加密标准 AES-256 进行保护。

以前所有库都位于我们的北美地区。如果您想将现有仓库迁移到其他区域，您将需要创建一个新的远程仓库。

更多信息请点击这里： [https://help.obsidian.md/Obsidian+Sync/Set+up+Obsidian+Sync#Regional+sync+servers](https://help.obsidian.md/Obsidian+Sync/Set+up+Obsidian+Sync#Regional+sync+servers "https://help.obsidian.md/Obsidian+Sync/Set+up+Obsidian+Sync#Regional+sync+servers")

## 插件新闻

### 社区插件

> [!Tip]
> **‌‌‌‌这些插件已经通过了代码审查，现在可以在 Obsidian 插件列表中获取。** 完整列表请查看 [插件统计页面](https://obsidian-plugin-stats.vercel.app/new?ref=eleanorkonik.com)。

#### 新增

[YouTube Template](https://github.com/sundevista/youtube-template) by _sundevista_

> 该插件可帮助您使用可配置模板在 YouTube 视频上做笔记。它有一个命令，可以获取 YouTube 视频 URL 并从中创建注释。您可以选择模板文件夹、模板以及章节和主题标签的格式。

[Extended Task Lists](https://github.com/joeriddles/extended-task-lists) by _joeriddles_

> 扩展了对任务列表的阅读器视图支持，包括正在进行的和不会执行的任务项。

![2024-02-03-Pasted image 20240203024606.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203024606.png!pkmer)

#### 更新

> [!TIP]
> **如果您想要本周更新的插件的完整列表，请查看 Ganesh Kumar 的 [插件更新索引](https://obsidian-plugin-stats.vercel.app/updates?ref=eleanorkonik.com)。**

[Emoji Autocomplete v1.1.2](https://github.com/KraXen72/obsidian-emoji-autocomplete/releases/tag/1.1.2) by _KraXen72_

> 该版本修复了一个错误，该错误导致很难在不触发建议器的情况下输入“HH: MM”时间戳。

[Quick Plugin switcher v5.2.6](https://github.com/1C0D/obsidian-quick-plugin-switcher/releases/tag/5.2.6) by _1C0D_

> 插件更新改进并集成在模式中。

[Jump to link v0.5.2](https://github.com/mrjackphil/obsidian-jump-to-link/releases/tag/0.5.2) by _MrJackphil_

> 1. 添加了对实时预览和数据查看的支持
> 2. 修复了一些外部和内部链接识别正则表达式
> 3. 删除未使用的模态文件
> 4. 添加一个选项来切换是否跳转到页面中仅一个链接

[Buttons v0.5.0](https://github.com/shabegom/buttons/releases/tag/0.5.0) by _Sam Morrison_

> 增强功能：转向更可靠的模板处理器
> 错误修复：当 Obsidian 启动时，按钮现在以实时预览模式呈现
> 错误修复：提高模板选项的可靠性
> 增强功能：提高删除选项的速度
> 功能：添加默认文件夹并提示名称设置
> 功能：“将文本复制到剪贴板”的按钮类型副本，以及按钮背景和 tex 的自定义颜色
> 功能：为按钮添加隐藏属性
> 增强功能：如果新笔记不存在，则为新笔记创建文件夹
> 错误修复：修复带有“/”前缀的文件夹的模板搜索
> 功能：创建新文件时打开新选项卡
> 更新自述文件：模板中的新注释

还有更多变化，详见 [It's aliiiive](https://github.com/shabegom/buttons/releases/tag/0.5.0)。

### 未上架插件

> [!Caution]
> **注意：社区列表中尚未提供所有新插件，因为它们需要先经过代码审查。您可以使用 [Beta Reviewer 的自动更新工具](https://github.com/TfTHacker/obsidian42-brat?ref=eleanorkonik.com) 手动安装社区列表中尚未包含的插件。但请注意，这并不像等待它们通过代码审查那么安全。**

[Spotify v1.0.9](https://github.com/Darren-project/obsidian-spotify/releases/tag/1.0.9) by _darrennotfound_

> 此版本修复了控制台垃圾邮件和从电脑睡眠状态返回时令牌不更新的问题，发布了修复安全漏洞和更多控制的新功能。您现在无法使用以前的身份验证请求来重新身份验证，可以使用命令触发登录和注销。

[Augmented Canvas](https://github.com/MetaCorp/obsidian-augmented-canvas) by _Meta_

> 该插件向画布视图中的注释菜单添加了三个操作：
> 1. 询问 GPT 特定笔记，笔记内容将作为提示。注释可以是文本注释、md 文件或 PDF 文件。将在包含 AI 响应的提示注释下方创建一个新注释。
> 2. 询问有关笔记的问题。也使得 GPT 生成一个新的笔记，问题放在两个笔记之间的链接上。
> 3. 使用 GPT 生成有关特定笔记的问题。生成的问题可帮助您轻松进一步深入了解笔记的主题。

[Advanced Canvas](https://github.com/Developer-Mike/obsidian-advanced-canvas) by _Developer-Mike_

> **大大增强**您的画布体验！创建演示文稿、流程图等！
> - 创建独立于节点的组
> - （流程图）节点形状
    - 工艺形状
    - 端子形状
    - 决策形状
    - 输入/输出形状
    - 页面参考形状
    - 预定义的工艺形状
    - 文档形状
    - 数据库形状
> - 演示模式
    - 通过用箭头连接节点来创建演示文稿

## 外观

[Prime Theme](https://github.com/rivea0/obsidian-prime) by _Eda_

> 一个简单的主题，只添加一些颜色调整，而不引入修改元素位置、字体样式等的巨大调整。

![2024-02-03-Pasted image 20240203021829.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203021829.png!pkmer)

![2024-02-03-Pasted image 20240203021905.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203021905.png!pkmer)

![2024-02-03-Pasted image 20240203021916.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203021916.png!pkmer)

![2024-02-03-Pasted image 20240203021927.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203021927.png!pkmer)

![2024-02-03-Pasted image 20240203021934.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203021934.png!pkmer)

[Arcane Theme](https://github.com/xRyul/obsidian-arcane-theme) by _xRyul_

> 一个轻量且适合移动设备的主题，以一种柔和的青色 `#88c0d4` 为固定色。

![2024-02-03-Pasted image 20240203022957.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203022957.png!pkmer)

![2024-02-03-Pasted image 20240203023005.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023005.png!pkmer)

![2024-02-03-Pasted image 20240203023010.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023010.png!pkmer)

![2024-02-03-Pasted image 20240203023016.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023016.png!pkmer)

[MistyMauve Theme](https://github.com/RaveSplash/obsidian-misty-mauve) by _RaveSplash_

> 色彩搭配以细腻而柔和的色调为特点，融合了 Timberwolf 和 Bright Gray 的淡灰色调，同时搭配了 Tulip 的温暖色调，使你在做笔记时感受到一种冷静的氛围。

![2024-02-03-Pasted image 20240203023426.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023426.png!pkmer)

![2024-02-03-Pasted image 20240203023432.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023432.png!pkmer)

[Sea Glass Theme](https://github.com/KStew1017/obsidian-sea-glass-theme) by _Kyle Stewart_

> 与来自同作者的 [同名 VSCode 主题](https://marketplace.visualstudio.com/items?itemName=KyleStewart.sea-glass-color-theme) 非常相似。该主题仅适用于深色模式

![2024-02-03-Pasted image 20240203023939.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023939.png!pkmer)

[DarkNebula Theme](https://github.com/HW9636/DarkNebulaObsidianTheme) by _9636Dev_

![2024-02-03-Pasted image 20240203024153.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203024153.png!pkmer)

# 2024-02-03：Regional Sync Servers Launched! Buttons Returned

> [!Abstract]
> **Statistical time**: 2024-01-26 21:00 ~ 2024-02-03 02:00

## Official Updates

### Introduction of New Regional Sync Servers

We added new regional servers to Obsidian Sync. You can now sync faster by selecting a region close to you.

Options include North America, Europe, Asia, and Oceania. All are secured with AES‑256, the strongest encryption standard.

Previously all vaults were on our North America region. If you want to migrate your existing vault to a different region you will need to create a new remote vault.

More information here:[https://help.obsidian.md/Obsidian+Sync/Set+up+Obsidian+Sync#Regional+sync+servers](https://help.obsidian.md/Obsidian+Sync/Set+up+Obsidian+Sync#Regional+sync+servers "https://help.obsidian.md/Obsidian+Sync/Set+up+Obsidian+Sync#Regional+sync+servers")_

## Plugin News

### Community Plugins

> [!Tip]
> **These plugins went through code review and are now available in Obsidian's plugin list.** For the full list, check out the [**plugin stats page**](https://obsidian-plugin-stats.vercel.app/new?ref=eleanorkonik.com).

#### New

[YouTube Template](https://github.com/sundevista/youtube-template) by _sundevista_

> A plugin that will help you take notes on YouTube videos using a configurable template. It has a single command that takes a YouTube video URL and creates a note from it. You can choose the template folder, template, and format for chapters and hashtags.

[Extended Task Lists](https://github.com/joeriddles/extended-task-lists) by _joeriddles_

> Extended reader view support for task lists, including in-progress and won't do task items.

![2024-02-03-Pasted image 20240203024606.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203024606.png!pkmer)

#### Updates

>[!Tip]
>**If you want a comprehensive list of what plugins updated this week, check out this [plugin updates index](https://obsidian-plugin-stats.vercel.app/updates?ref=eleanorkonik.com) by Ganessh Kumar.**

[Emoji Autocomplete v1.1.2](https://github.com/KraXen72/obsidian-emoji-autocomplete/releases/tag/1.1.2) by _KraXen72_

> This release fixed a bug which made it difficult to enter `HH:MM` timestamps without triggering the suggester.

[Quick Plugin switcher v5.2.6](https://github.com/1C0D/obsidian-quick-plugin-switcher/releases/tag/5.2.6) by _1C0D_

> Plugins update improved and integrated in the modal.

[Jump to link v0.5.2](https://github.com/mrjackphil/obsidian-jump-to-link/releases/tag/0.5.2) by _MrJackphil_

> 1. Added support for live preview and dataview
> 2. Fixed some external and internal link recognition regexp (by the same amazing
> 3. Removed unused modal file
> 4. Added an option to toggle if jump to link only one link in page

[Buttons v0.5.0](https://github.com/shabegom/buttons/releases/tag/0.5.0) by _Sam Morrison_

> Enhancement: Moved to more reliable templater processor
> Bugfix: buttons now render in Live Preview mode when Obsidian starts
> Bugfix: improve reliability of templater option
> Enhancement: improve speed of remove option
> Feature: Add default folder and prompt for name settings
> Features: Button type copy for "copy text to clipboard", and custom color for button background and tex
> Feature: adds hidden attribute to buttons
> Enhancement: Create folder for new note if it doesn't exist
> Bugfix: fix template search with folders having "/prefixed
> Feature: Open new tab when creating new file
> Update Readme: new note from template

There are more changes, see [It's aliiiive](https://github.com/shabegom/buttons/releases/tag/0.5.0) for details.

### Pending

> [!Caution]
> **Note: Not all new plugins are available in the community list yet, as they need to go through code review first. You can manually install plugins that aren't in the community list yet by using the [Beta Reviewer's Auto-update Tool](https://github.com/TfTHacker/obsidian42-brat?ref=eleanorkonik.com). Note, though, that this is not as safe as waiting for them to go through code review.**

[Spotify v1.0.9](https://github.com/Darren-project/obsidian-spotify/releases/tag/1.0.9) by _darrennotfound_

> This release fixed console spam and token not updating when returning from pc sleep, released new features that closed security holes and more controls. You now cannot use a previous auth request to reauth but can use commands to trigger login and logout.

[Augmented Canvas](https://github.com/MetaCorp/obsidian-augmented-canvas) by _Meta_

> This plugin adds three actions to the Menu of a note in the Canvas View.
> 1. Ask GPT on a specific note, the note content will be used as prompt. The note can be a text note, a md file or a PDF file. A new note will be created underneath the prompt note containing the AI response.
> 2. Ask question about a note. Also makes GPT generate a new note, the question is placed on the link between the two notes.
> 3. Generate questions on a specific note using GPT. The generated questions help you easily dig further into the subject of the note.

[Advanced Canvas](https://github.com/Developer-Mike/obsidian-advanced-canvas) by _Developer-Mike_

> **Supercharge** your canvas experience! Create presentations, flowcharts and more!
> - Create groups independently of the nodes
> - (Flowchart) Node shapes
> 	- Process shape
> 	- Terminal shape
> 	- Decision shape
> 	- Input/Output shape
> 	- On-page Reference shape
> 	- Predefined Process shape
> 	- Document shape*
> 	- Database shape*
> - Presentation mode
> 	- Create presentations by connecting nodes with arrows

## Appearance

[Prime Theme](https://github.com/rivea0/obsidian-prime) by _Eda_

> A simple theme that only adds some color tweaks instead of introducing huge changes that modify the positioning of elements, font styles, etc.

![2024-02-03-Pasted image 20240203021829.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203021829.png!pkmer)

![2024-02-03-Pasted image 20240203021905.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203021905.png!pkmer)

![2024-02-03-Pasted image 20240203021916.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203021916.png!pkmer)

![2024-02-03-Pasted image 20240203021927.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203021927.png!pkmer)

![2024-02-03-Pasted image 20240203021934.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203021934.png!pkmer)

[Arcane Theme](https://github.com/xRyul/obsidian-arcane-theme) by _xRyul_

> A lightweight and mobile-friendly theme with a soft cyan `#88c0d4` as a permanent fixture color.

![2024-02-03-Pasted image 20240203022957.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203022957.png!pkmer)

![2024-02-03-Pasted image 20240203023005.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023005.png!pkmer)

![2024-02-03-Pasted image 20240203023010.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023010.png!pkmer)

![2024-02-03-Pasted image 20240203023016.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023016.png!pkmer)

[MistyMauve Theme](https://github.com/RaveSplash/obsidian-misty-mauve) by _RaveSplash_

> The color palette is characterized by subtle and muted tones, blending the gentle grays of Timberwolf and Bright Gray with the delicate warmth of Tulip giving a chill vibes when you are making your notes.

![2024-02-03-Pasted image 20240203023426.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023426.png!pkmer)

![2024-02-03-Pasted image 20240203023432.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023432.png!pkmer)

[Sea Glass Theme](https://github.com/KStew1017/obsidian-sea-glass-theme) by _Kyle Stewart_

> It is very similar to [the theme of the same name from the same author in VSCode](https://marketplace.visualstudio.com/items?itemName=KyleStewart.sea-glass-color-theme). This theme is soley for dark mode.

![2024-02-03-Pasted image 20240203023939.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203023939.png!pkmer)

[DarkNebula Theme](https://github.com/HW9636/DarkNebulaObsidianTheme) by _9636Dev_

![2024-02-03-Pasted image 20240203024153.png](https://cdn.pkmer.cn/images/2024-02-03-Pasted%20image%2020240203024153.png!pkmer)
