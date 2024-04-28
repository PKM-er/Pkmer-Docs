---
uid: 20240113102303
title: Obsidian Weekly 2024-01-13：老骥伏枥，朽木生花；百尺竿头，新硎初发
tags: [Obsidian, Weekly]
description: Obsidian Weekly 2024-01-13：老骥伏枥，朽木生花；百尺竿头，新硎初发
author: 淡水鱼,PKMer
type: awesome
draft: false
editable: false
modified: 20240429000705
---

# Obsidian Weekly 2024-01-13：老骥伏枥，朽木生花；百尺竿头，新硎初发

> [!Abstract]
> **统计时间**：2024-01-05 21:00 ~ 2024-01-12 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方更新

### 2023 年度宝石奖投票开始

点击链接参与投票。以下是今年的奖项类别——请提交尽可能多的选票。投票时间截止 **1 月 22 日**。

- [最佳新插件](https://discord.com/channels/686053708261228577/702717892533157999/1193993954346139729)
- [最佳新主题](https://discord.com/channels/686053708261228577/702717892533157999/1193994654241267823)
- [最佳现有插件](https://discord.com/channels/686053708261228577/702717892533157999/1193994845673496626)
- [最佳工具](https://discord.com/channels/686053708261228577/702717892533157999/1193995467600711730)
- [最佳模板](https://discord.com/channels/686053708261228577/702717892533157999/1193995725542006814)
- [最佳内容](https://discord.com/channels/686053708261228577/702717892533157999/1193995983219064862)

### Obsidian 已通过安全公司 Cure53 的独立审查

您可以在 Obsidian 页面上找到该报告。阅读更多： <https://obsidian.md/blog/cure53-security-audit/>

## 插件新闻

### 社区插件

> [!Tip]
> **‌‌‌‌这些插件已经通过了代码审查，现在可以在 Obsidian 插件列表中获取。** 完整列表请查看 [插件统计页面](https://obsidian-plugin-stats.vercel.app/new?ref=eleanorkonik.com)。

#### 新增

[Latex OCR](https://github.com/lucasvanmol/obsidian-latex-ocr) by _Lucas Van Mol_ 可从库内的图像和屏幕截图生成 Latex 方程式。

[Object Writer](https://github.com/IagoGrah/obsidian-object-writer) by _Iago Grah_ 添加功能区按钮以创建对象写作的快速笔记，提供随机单词。

[Task Status](https://github.com/vburzynski/obsidian-task-status) by _Valerie Burzynski_ 帮助您快速更改复选框和任务状态标记。该插件力求键盘驱动，支持模糊查找和自定义样式配置，适用于各种类型的文本选择。

[Repeat Last Command(s)](https://github.com/1C0D/obsidian-repeat-last-commands) by _1C0D_ 顾名思义，用于重复最后一个或多个命令。可使用选项卡切换按 TAB 键的固定命令。

[Strip Internal Links](https://github.com/adiron/obsidian-strip-internal-links) by _Adi Ron_ 一个简单但非常实用的插件，用于从文件中删除内部链接并将结果复制到剪贴板。

[Git File Explorer](https://github.com/MateusMolina/obsidian-git-file-explorer) by _Mateus Molina_ 将 Obsidian 的文件资源管理器与 Git 集成在一起。启用插件后，您将在文件资源管理器的保管库中找到的 git 存储库旁边看到相关的 git 信息。

#### 更新

> [!TIP]
> **如果您想要本周更新的插件的完整列表，请查看 Ganesh Kumar 的 [插件更新索引](https://obsidian-plugin-stats.vercel.app/updates?ref=eleanorkonik.com)。**

[Github Publisher v6.13.1](https://github.com/ObsidianPublisher/obsidian-github-publisher/releases/tag/6.13.1) by _Mara-Li_ 添加了两个新功能：

- **支持 Excalidraw**：现在，直接处理 `.excalidraw` 文件并在文件传输过程中将其转换为 SVG。
- **每个文件独立库设置**：如果您使用该插件注册了多个存储库，则每个文件设置的所有 key 现在都可以在前面加上 smartkey，从而允许每个存储库进行多个设置。两个不同存储库中的同一文件也可以具有不同的路径和附件路径，像这样编写：`smartkey. <key>` 即可使用。目前，不支持 smartkey 对象（因为新的 Obsidian 属性无法正确处理它们）。
通过这些更新，开发者添加了以下新 key 来覆盖默认值：
- `category`：它将从插件设置中获取配置的类别键。如果您通常不使用属性键行为，则可以设置它并切换设置。仅当类型设置为 YAML 时它才有效。
- `rootFolder`：与根文件夹设置相同。
- `defaultName`: 接收文件的默认文件夹名称，与全局相同。
- `type`：更改 `YAML`、`fixed` 和 `Obsidian` 之间的行为。 YAML 对应 Property key 设置。
- `path`：将跳过所有其他选项并覆盖所有可能的设置。例如，允许您将文件直接发送到存储库的根目录。

[Metadata Menu v0.7.7](https://github.com/mdelobelle/metadatamenu/releases/tag/0.7.7) by _mdelobelle_ 已支持**时间**和**日期时间**类型，包括：

- 原生日期选择器
- 新的日期时间字段类型
- 新的时间字段类型

[Folder notes v1.7.3](https://github.com/LostPaul/obsidian-folder-notes/releases/tag/1.7.3) by _Lost Paul_ 在交互方面做了许多改进，如：

- 仅使用 ctrl/alt 打开文件夹注释并通过正常单击折叠的选项
- 单击鼠标中键在新选项卡中打开文件夹注释或一个文件
- 直接创建具有不同文件类型的文件夹注释（在上下文菜单中创建 {type} 文件夹注释）
- 路径和文件资源管理器中文件夹名称的粗体/草书样式选项
- 排除文件夹功能的默认设置
- [HelpMate 插件支持](https://github.com/TfTHacker/obsidian42-HelpMate)
此外，该插件的 [说明文档](https://lostpaul.github.io/obsidian-folder-notes/) 已更新几乎所有主要功能。

**[Remotely Save v0.3.34](https://github.com/remotely-save/remotely-save/releases/tag/0.3.34) by _fyears_ 携大量超重磅更新回归！** 包括但不限于：

- Webdav 兼容性改进！
- S3 自定义前缀！现在用户可以将多个文件库存储在同一个存储桶中。
- `.obsidian` 删除可被跟踪！
- 允许通过正则表达式忽略路径！
- 允许将设置删除移至系统回收站或 `.trash` 。
- 默认忽略一些特别烦人的操作系统文件。
- 默认减少提示，除非设置调试级别。

[Excalidraw v2.0.17](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.0.17) by _Zsolt Viczian_ 修复了一系列问题，新增：

- 在 Excalidraw、Canvas 和 Markdown 中裁剪和蒙版图像
- 在图像周围绘制元数据（导出时隐藏）
- 图像裁剪现已支持深色模式
- 通过右键菜单将 SVG 转换为 Excalidraw 笔画
- 更新了中文翻译

[Mononote v1.1.1](https://github.com/czottmann/obsidian-mononote/releases/tag/1.1.1) by _Carlo Zottmann_ 选项卡处理已完全重新设计以使其更加强大可靠；该插件现在支持多窗口/窗格，多余的选项卡只会在活动窗格或窗口中关闭；如果 Mononote 遇到重复项，它现在将优先支持现有选项卡而不是新选项卡，保留撤消历史记录；为不触发黑曜石 `file-open` 事件的文件添加了解决方法，这意味着 Mononote 现在将处理非笔记的文件，例如 PDF 或图像。请参阅 [自述文件](https://github.com/czottmann/obsidian-mononote)，了解有关更新行为的信息以及预期内容；添加了对锚链接的支持：如果注释 A 已在选项卡 1 中打开，并且您尝试在选项卡 2 中打开注释 A，但使用锚链接（引用标题或块），则选项卡 2 将关闭，而选项卡 1 将聚焦锚点链接。

[Tasks v5.6.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/5.6.0) by _Martin Schenck and Clare Macrae_ 将 `today` 和 `tomorrow` 添加到 Postpone 右键菜单。

[Open Gate v1.10.8](https://github.com/nguyenvanduocit/obsidian-open-gate/releases/tag/1.10.8) by _DuocNV_ 当打开居中位置的新 Gate 时，它​​现在将在新选项卡中优雅地启动，使您的当前页面不受干扰。

[Quick plugin switcher v5.1.0](https://github.com/1C0D/obsidian-quick-plugin-switcher/releases/tag/5.1.0) by _1C0D_ 社区插件过滤器更新 (类似黑曜石)。

[Close Similar Tabs v2.3.7](https://github.com/1C0D/Obsidian-Close-Similar-Tabs/releases/tag/2.3.7) by _1C0D_ 修复了 hover editor 的所有模式。

## 其他新闻

[Qualitative Analysis of Social Media Posts - A Workflow from OCR to Obsidian](https://carleton.ca/xlab/2023/qualitative-analysis-of-social-media-posts-a-workflow-from-ocr-to-obsidian/) 一个对社交媒体帖子进行定性分析的工作流分享。

----

# 2024-01-13：Revitalizing Classics: Advancements in Time-Tested Plugins and the Dawn of Comprehensive New Tools

> [!Abstract]
> **Statistical time**: 2024-0121:00 ~ 2024-0121:00

## Official Updates

### Voting for the Gems of the Year 2023 awards is open

Click the poll link to vote. Here are this year's categories — submit as many votes as you want. Voting ends on **January 22nd**.

- [Best new plugin](https://discord.com/channels/686053708261228577/702717892533157999/1193993954346139729)
- [Best new theme](https://discord.com/channels/686053708261228577/702717892533157999/1193994654241267823)
- [Best existing plugin](https://discord.com/channels/686053708261228577/702717892533157999/1193994845673496626)
- [Best tool](https://discord.com/channels/686053708261228577/702717892533157999/1193995467600711730)
- [Best template](https://discord.com/channels/686053708261228577/702717892533157999/1193995725542006814)
- [Best content](https://discord.com/channels/686053708261228577/702717892533157999/1193995983219064862)

### Obsidian has been independently audited by the security firm Cure53

You can find the report on our new /security page. Read more: <https://obsidian.md/blog/cure53-security-audit/>

## Plugin News

### Community Plugins

> [!Tip]
> **These plugins went through code review and are now available in Obsidian's plugin list.** For the full list, check out the [**plugin stats page**](https://obsidian-plugin-stats.vercel.app/new?ref=eleanorkonik.com).

#### New

[Latex OCR](https://github.com/lucasvanmol/obsidian-latex-ocr) by _Lucas Van Mol_ generates Latex equations from images and screenshots inside your vault.

[Object Writer](https://github.com/IagoGrah/obsidian-object-writer) by _Iago Grah_ adds a ribbon button to create a quick note for object writing, providing a random word.

[Task Status](https://github.com/vburzynski/obsidian-task-status) by _Valerie Burzynski_ help you to quickly change checkbox and task status markers.The plugin strives to be keyboard-driven, supports fuzzy finder and custom style configuration, and is suitable for various types of text selection.

[Repeat Last Command(s)](https://github.com/1C0D/obsidian-repeat-last-commands) by _1C0D_ as the name suggests, is used to repeat the last command or commands. You can toggle pinned command pressing TAB.

[Strip Internal Links](https://github.com/adiron/obsidian-strip-internal-links) by _Adi Ron_ is a simple but useful plugin to strip internal links from files and copies the result to the clipboard.

[Git File Explorer](https://github.com/MateusMolina/obsidian-git-file-explorer) by _Mateus Molina_ integrates Obsidian's file explorer with Git. Once the plugin is enabled, you will see relevant git information next to git repositories found in your vault in the file explorer.

#### Updates

>[!Tip]
>**If you want a comprehensive list of what plugins updated this week, check out this [plugin updates index](https://obsidian-plugin-stats.vercel.app/updates?ref=eleanorkonik.com) by Ganessh Kumar.**

[Github Publisher v6.13.1](https://github.com/ObsidianPublisher/obsidian-github-publisher/releases/tag/6.13.1) by _Mara-Li_ added two new features:

- **Support for Excalidraw**: Now, `.excalidraw` files are handled directly and converted into SVG during the file transfer.
- **Per-file-per-repo settings**: If you had registered multiple repositories with the plugin, all keys for per-file settings can now be prepended with the smartkey, allowing for multiple settings for each repository. In fact, the same file in two different repositories can now have different paths and attachment paths. To use this, you need to write it like this: `smartkey.<key>`. At the moment, objects for smartkey are not supported (because the new Obsidian properties don't handle them correctly).
With these updates, the developer has added new keys for overriding the default:
- `category`: It will take the configured category key from the plugin settings. You can set it and switch the settings if you don't usually use the property key behavior. It only works if the type is set to YAML.
- `rootFolder`: The same as the root folder settings.
- `defaultName`: Default folder name for receiving files, same as global.
- `type`: Changes the behavior between `YAML`, `fixed`, and `Obsidian`. YAML corresponds to the Property key setting.
- `path`: Will skip all other options and override all possible settings. Allows you to send a file directly to the root of the repository, for example.

[Metadata Menu v0.7.7](https://github.com/mdelobelle/metadatamenu/releases/tag/0.7.7) by _mdelobelle_ has supported **Time** and **Datetime** types, including:

- Native date picker
- New Datetime field type
- New Time field type

[Folder notes v1.7.3](https://github.com/LostPaul/obsidian-folder-notes/releases/tag/1.7.3) by _Lost Paul_ maked many improvements in interaction, such as:

- Option to open folder notes with ctrl/alt only and collapse with the normal click
- Open folder notes or a file in a new tab with the middle mouse click
- Directly create folder notes with a different file type (create {type} folder note [in the context menu])
- Bold/cursive style options for the folder names in the path and file explorer
- Default settings for the excluded folders feature
- [HelpMate plugin support](https://github.com/TfTHacker/obsidian42-HelpMate)
In addition, the plugin's [documentation](https://lostpaul.github.io/obsidian-folder-notes/) has been updated for almost all major features.

**[Remotely Save v0.3.34](https://github.com/remotely-save/remotely-save/releases/tag/0.3.34) by _fyears_ is back to the party with lots of awesome updates!** including but not limited to:

- Webdav compatibility has got some improvements!
- S3 custom prefix! So users can store multiple vaults in a same bucket.
- `.obsidian` deletions are tracked!
- Allows paths to be ignored via regexes!
- Allows setting deletions moved to system trash or `.trash`.
- Ignores some special annoying OS files by default.
- Reduces hints by default unless you set the debugging level.

[Excalidraw v2.0.17](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.0.17) by _Zsolt Viczian_ fixed a series of issues, added:

- Crop and mask images in Excalidraw, Canvas, and Markdown
- Draw metadata around the image (hidden when exporting)
- Image cropping now supports dark mode
- Convert SVG to Excalidraw strokes via the context menu action
- Updated the Chinese translation

[Mononote v1.1.1](https://github.com/czottmann/obsidian-mononote/releases/tag/1.1.1) by _Carlo Zottmann_ Tab handling has been entirely reworked to be more robust and reliable. The plugin now respects pane & window boundaries as it should, superfluous tabs will only be closed in the active pane or window. If Mononote encounters a duplicate, it'll now favor the existing tab, and close the new one. This prevents losing undo history. Workaround for files which don't trigger Obsidian's `file-open` event has been added, meaning Mononote will now work with files which aren't notes, such as PDFs or images. See the [README](https://github.com/czottmann/obsidian-mononote) for information on the updated behavior, and what to expect. The new version has also added support for anchor links: If note A is already open in a tab 1, and you attempt to open note A in a tab 2, but with an anchor link (reference to a headline or block), tab 2 will be closed, while tab 1 will focus the anchor link.

[Tasks v5.6.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/5.6.0) by _Martin Schenck and Clare Macrae_ added `today` and `tomorrow` to Postpone context menu.

[Open Gate v1.10.8](https://github.com/nguyenvanduocit/obsidian-open-gate/releases/tag/1.10.8) by _DuocNV_ When opening a new Gate with a centered position, it will now gracefully launch in a new tab, leaving your current page undisturbed.

[Quick plugin switcher v5.1.0](https://github.com/1C0D/obsidian-quick-plugin-switcher/releases/tag/5.1.0) by _1C0D_ community plugins filter updated (obsidian like).

[Close Similar Tabs v2.3.7](https://github.com/1C0D/Obsidian-Close-Similar-Tabs/releases/tag/2.3.7) by _1C0D_ fixed hover editor all modes.

## Other News

[Qualitative Analysis of Social Media Posts - A Workflow from OCR to Obsidian](https://carleton.ca/xlab/2023/qualitative-analysis-of-social-media-posts-a-workflow-from-ocr-to-obsidian/) A workflow sharing for qualitative analysis of social media posts.