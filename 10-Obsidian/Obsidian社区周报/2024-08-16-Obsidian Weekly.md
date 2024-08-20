---
uid: 20240820221124
title: Obsidian Weekly 2024-08-16：更多样式与自动执行
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-08-16：更多样式与自动执行
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240820221228
---

# Obsidian Weekly 2024-08-16：更多样式与自动执行

> [!Abstract]
> **统计时间**：2024-08-09 21:00 ~ 2024-08-16 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[Geulo](https://obsidian.md/plugins?id=geulo-youtube-liked-video) By _Junyoung Bang_

> 获取你点赞的所有 YouTube 视频，使用多种排序选项进行搜索和排序，并将它们添加到你的每日笔记中。

[Harper](https://obsidian.md/plugins?id=harper) By _Elijah Potter_

> 为所有人打造的语法检查工具。
> 与 Obsidian 上其他语法检查工具不同，Harper 完全在你的设备上运行，无需额外设置。只需启用它，你就能立即获得出色、私密且开源的语法检查。

![Weekly-2024-08-16-Pasted image 20240820200610|650](https://cdn.pkmer.cn/images/Weekly-2024-08-16-Pasted%20image%2020240820200610.png!pkmer)

#### 更新

[Timelines v2.3.0](https://github.com/seanlowe/obsidian-timelines/releases/tag/2.3.0) By _seanlowe_

> 43 种多类型时间线。

[Any Block v3.0.5-beta6](https://github.com/LincZero/obsidian-any-block/releases/tag/3.0.5-beta) By _LincZero_

> - **添加**
>     - 仿列表的 列表格/二列表格/多叉表格
>     - 发布更小体积的 min 版本
>         （区别：去除 markmap、plantuml 功能，而 mermaid 功能使用 ob 的而非内置的模块）
>         （使用方法：将 main-min.js 重命名为 main.js 并替换掉 main.js）
>         （注意：由于懒，在 beta 版本的迭代中不会更新 min 版本，只有在正式版本才会更新）
> - **修复**
>     - 在阅读模式下选择器头部没有正确隐藏
>     - 误选大写的 `[TOC]`
>     - plantuml 图时，使用多空格缩进会造成问题
>     - 使用 card/col/tabs 时：项的内容中的 list 层次失效
>     - 使用 card/col/tabs 时：缩进单位可以为 2 空格/4 空格/tab 了
>     - 标签过多时样式存在问题
> - **增强**
>     - 设置面板调整、翻译
>     - 卡片的瀑布流样式

[List Modified v3.0.0-alpha](https://github.com/franciskafieh/obsidian-list-modified/releases/tag/3.0.0-alpha) By _Francis Kafieh_

> **此更新包含重大更改。**
> 主要更改是插件现在使用分隔符而不是标题作为放置列表的占位符。
> 请阅读 [wiki](https://github.com/franciskafieh/obsidian-list-modified/wiki) 以了解更改和配置。
> 由于这是一个 Alpha 版本，可能会出现错误。如需安装该插件的 Alpha 版本，请参阅 [BRAT 指南](https://tfthacker.com/brat-quick-guide)。

[Tasks v7.8.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.8.0) By _Clare Macrae and Ilyas Landikov (created by Martin Schenck_

> - **“完成时”动作**
> 	- 如果你曾希望 Tasks 在你完成任务时**自动执行某些操作**（特别是在使用会积累在笔记中的重复任务时），那么全新的 [**“完成时”**](https://publish.obsidian.md/tasks/Getting+Started/On+Completion) 功能可能正是你的答案！
> 	- 新增“完成时”字段，支持删除自动操作
> 	- 为“完成时”功能添加“保留”选项
> 	- 教 Auto Suggest 支持“完成时”功能
> - **修复**
> 	- 在阅读视图中渲染编号的子任务和列表项
> 	- 多项关于 Auto-Suggest 光标位置的改进
> 	- 改善了 Auto-Suggest 中日期的 dataview 空格和光标表现

[Linter v1.26.0-rc-2](https://github.com/platers/obsidian-linter/releases/tag/1.26.0-rc-2) By _Victor Tao_

> 此版本是 BRAT 的测试版本，包含多个 Linter 修复，同时还新增了将自定义拼写错误添加到自动更正列表的功能，并支持将范围忽略设为 Obsidian 注释以及 HTML 注释。
> - **功能**
> 	- 增加了将自定义拼写错误添加到自动更正词汇表的功能
> 	- 允许用户使用 Obsidian 注释进行范围忽略，而不仅限于 HTML 注释
> - **错误修复**
> 	- 修复了另一个边缘情况，即 Live Preview 更新会破坏 YAML frontmatter 的问题
> 	- 修复了部分情况下无法正确识别 CJK 符号的问题
> 	- 修复了标题移动到 YAML 后才生效大写的问题，这导致需要多次校验才能使 YAML 标题与标题匹配

[Vertical Tabs v0.6.3](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.6.3) By _oxdc_

> - 修复了可能导致崩溃或中断原生功能的错误。
> - 添加了关闭或创建标签页的快捷键。
> - 提升了拖放的速度和响应性。
> - 现在可以重新排序分组。
> - 将标签页拖动到末尾时会自动创建一个新分组。
> - 优化了移动端的拖放体验，使其更加流畅。
> - 修复了一些小错误。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Media Extended v3.2.6](https://github.com/PKM-er/media-extended/releases/tag/3.2.6) 已发布

- 修复 (Web)：修复了 YouTube 字幕加载问题。

