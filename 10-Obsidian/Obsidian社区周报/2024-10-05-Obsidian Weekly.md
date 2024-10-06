---
uid: 20241007011158
title: Obsidian Weekly 2024-10-05：鼠标悬停开关侧边栏与沉浸式翻译
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-10-05：鼠标悬停开关侧边栏与沉浸式翻译
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241007011222
---

# Obsidian Weekly 2024-10-05：鼠标悬停开关侧边栏与沉浸式翻译

> [!Abstract]
> **统计时间**：2024-09-28 21:00 ~ 2024-10-05 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[Open Sidebar on Hover](https://obsidian.md/plugins?id=open-sidebar-on-hover) By _AnAngryRaven_

> 能够通过将鼠标悬停在侧边栏上来打开侧边栏。

![94a3cc83-d292-4ab4-8985-85d45a25ff6b|650](https://cdn.pkmer.cn/images/94a3cc83-d292-4ab4-8985-85d45a25ff6b.gif!pkmer)

[Scripture Indexer](https://obsidian.md/plugins?id=scripture-indexer) By_ jdrbrn_

> 在笔记中索引对经文的引用。

[Immersive Translate](https://obsidian.md/plugins?id=immersive-translate) By _imfenghuang_

> 一款用于外语 Markdown 文件的免费翻译服务。它基于 [沉浸式翻译](https://immersivetranslate.com/)。

![358581931-f031508a-4d44-4aca-bb0d-8d3ef570ea8e|650](https://cdn.pkmer.cn/images/358581931-f031508a-4d44-4aca-bb0d-8d3ef570ea8e.gif)

#### 更新

[Meta Bind v1.2.1](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/releases/tag/1.2.1) By _Moritz Jung_

> - **新功能**
> 	- 运行 JS 的按钮操作现在可以通过 `context.buttonContext` 获取更多关于按钮的上下文信息
> 	- 创建笔记的按钮操作现在可以选择在文件已存在时打开该文件
> 	- 改进了 meta bind 嵌入的错误信息
> - **修复**
> 	- 打开链接的按钮操作现在会遵循链接片段参数（`#` 后面的内容）
> 	- 修复了当笔记包含一个 ID 已存在于按钮模板中的按钮时，笔记在阅读模式下无法正确渲染的问题
> 	- 删除了不必要的日志记录
> 	- 修复了日期选择器输入字段未始终遵循设置中设定的日期格式的问题
> 	- 修复了通过 `placeholder` 参数设置的占位符在数字输入字段中未正确显示的问题
> 	- 修复了在添加新按钮或输入字段模板后，UI 没有及时更新的问题
> - **其他**
> 	- 迁移至 Svelte 5
> 	- 在 [O_O 2024 插件自我评估清单](https://docs.obsidian.md/oo24/plugin) 上取得了一些初步进展

[Linter v1.27.0-rc-1](https://github.com/platers/obsidian-linter/releases/tag/1.27.0-rc-1) By _Victor Tao_

> - **功能**
> 	- 进行了样式更改，使部分 Linter 设置更加简洁，并与 Obsidian 中其他部分的风格更加一致
> 	- 增加了一个选项，用于自动纠正常见拼写错误，允许忽略首字母以外带有大写字母的单词
> 	- 增加了从设置页面刷新 Linter 识别的自定义自动纠错文件内容的功能
> 	- 增加了在编辑器中进行更改后 x 秒内运行 YAML 时间戳的功能
> 	- 增加了忽略文件系统中修改日期的功能，优先在 Linter 或用户在编辑器中进行更改时更新该值
> - **修复**
> 	- 修复了 Linter 在自动纠正常见拼写错误时对自定义自动纠错文件的操作，避免擦除这些自定义文件配置值
> 	- 修复了粘贴 URL 时不一致的问题
> 	- 修复了某些情况下文件更新时实时预览无法正常工作的问题（希望这能彻底解决这些问题）
> - **更新内容**
> 	- 修复：粘贴 URL 时不一致的问题
> 	- 发布准备 & 修复 UT 内存使用问题
> 	- 增加和更新集成测试
> 	- 修复：实时预览编辑器更新问题
> 	- 更新文档、部分组件格式化以及自动纠正常见拼写错误的功能
> 	- 新功能：`Auto-Correct Common Mispellings` 允许用户忽略带有多个大写字母的单词
> 	- 任务：添加用于手动插件安装的 Zip 文件至发布工作流
> 	- 任务：从已弃用的 `MarkdownRender.renderMarkdown` 切换至 `MarkdownRender.render`
> 	- 新功能：在编辑器内容更改时更新修改日期 & 杂项样式和 YAML 时间戳更新
> 	- 自动发布测试版 1.27.0-rc-1

[Time Ruler v2.5.1](https://github.com/j-palindrome/obsidian-time-ruler/releases/tag/2.5.1) By _Joshua Tazman Reinier_

> - **新增**
> 	- 添加了 [剩余天数](https://github.com/joshuatazrein/obsidian-time-ruler/issues/112) 的设置
> 	- 添加了对 [ICS 日历重复事件](https://github.com/joshuatazrein/obsidian-time-ruler/issues/50) 的支持
> - **修复**
> 	- 修复了此错误：[当时间标尺移动到另一个窗口时界面为空/被清除 · Issue #102 · joshuatazrein/obsidian-time-ruler · GitHub](https://github.com/joshuatazrein/obsidian-time-ruler/issues/102?notification_referrer_id=NT_kwDOBQ8O87M5ODYzNDc1MzMyOjg0ODcyOTQ3)
> 	- [由时间标尺标记的已完成任务已带有时间标记 · Issue #114 · j-palindrome/obsidian-time-ruler · GitHub](https://github.com/j-palindrome/obsidian-time-ruler/issues/114)
> 	- 全天事件溢出到下一天的事件上
> - 删除了控制台日志

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Obsidian Python Bridge](https://github.com/mathe00/obsidian-plugin-python-bridge) By _mathe00_

> 该插件允许用户使用 **Python** 为 Obsidian 创建插件。这可能是第一个允许您直接将**Python 脚本**集成到 Obsidian 中以与笔记交互、检索元数据、显示通知等等的插件！
