---
uid: 20241014000658
title: Obsidian Weekly 2024-10-12：1.7.4 版本前瞻！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-10-12：1.7.4 版本前瞻！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241014000943
---

# Obsidian Weekly 2024-10-12：1.7.4 版本前瞻！

> [!Abstract]
> **统计时间**：2024-10-05 21:00 ~ 2024-10-12 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.7.4 内测版现已发布

#### 桌面版

##### 改进

- “关闭选项卡组中的所有选项卡”命令不再适用于侧边栏。

##### 修复内容

- 当标签标题获得焦点时，编辑器命令不再被触发。
- 修复了 URI 操作始终传送到主窗口，而不是活动弹出窗口的问题。
- 修复了弹出窗口处于活动状态时剪贴板 URI 操作不起作用的问题。
- 修复了固定图标在选项卡获得焦点前无法显示的问题。
- 修复了当前主题设置为适应系统时，社区主题仅显示浅色或深色主题的问题。
- 修复了侧边栏折叠后，侧边栏选项卡仍保持焦点的问题。
- 修复了编辑器中按下 `Shift-ArrowUp` 导致行内标题获得焦点的问题。

##### 开发者

- Lucide 图标已更新至 0.446.0。
- 修复了 `requestUrl` 在 URL 无法解析时无提示失败的问题。

#### 移动版

- 包含至 Obsidian 桌面版 v1.7.4 的所有新功能和错误修复。
- 安卓：修复了点击标签导致侧边栏打开并立即关闭的问题。

## 插件新闻

### 社区插件

#### 更新

[Commander v0.5.2](https://github.com/phibr0/obsidian-commander/releases/tag/0.5.2) By _jsmorabito phibro_

> 支持 Obsidian 1.7.3 之后的新图标设置。

[AnyBlock v3.1.6](https://github.com/LincZero/obsidian-any-block/releases/tag/3.1.6) By _LincZero_

> - 新增
>     - 特殊样式 `ab-super-width` (js 实现) `[addClass(ab-super-width)]`
> - 增强
>     - 优化代码块方式渲染时的结构和按钮控件
>     - 增强了与其他插件的配合兼容 (buttons 插件)
> - 样式
>     - 大幅优化了节点图的 min 模式下的样式 `[nodes|addClass(min)]`
>     - 兼容：在 BT 库中的表格渲染异常
>     - 修复：pdf 导出中误渲显示按钮
> - 修复
>     - tabs 标签多层嵌套时，切换不正常
>     - 在 c2data 类型中 (timeline/tabs/card/col)，内换行失效
>     - 在 callout 语句中不生效
>     - 阅读模式下下拉框部分选项异常
>     - mdit 选择器在阅读模式下 tabs/card/col 处理器失效

![Weekly-2024-10-12-Pasted image 20241013234229|650](https://cdn.pkmer.cn/images/Weekly-2024-10-12-Pasted%20image%2020241013234229.png!pkmer)

[Aloud v0.5.0](https://github.com/adrianlyjak/obsidian-aloud-tts/releases/tag/0.5.0) By _Adrian Lyjak_

> - 全面改进了音频系统，Aloud 现在可以与操作系统集成（播放/暂停按钮，移动设备上的后台音频）！
> - 提供了更高质量和更细致的播放速度配置
> - 新增导出到文件功能。现在还可以从剪贴板播放音频！

[Vertical Tabs v0.7.0](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.7.0)

> 为您的标签页添加书签！

![Weekly-2024-10-12-1318438f-dd10-40a0-94ac-959e27f19c48|650](https://cdn.pkmer.cn/images/Weekly-2024-10-12-1318438f-dd10-40a0-94ac-959e27f19c48.gif)

[Iconic v1.0.15](https://github.com/gfxholo/iconic/releases/tag/1.0.15) By _Holo_

> - **修复**
> 	修复了由 Obsidian 1.7 即将更新引起的一些问题，确保插件在发布当天能平稳运行。现在手机上也**完全支持**功能栏图标，包括 [快速访问按钮](https://help.obsidian.md/User+interface/Ribbon#Quick+access)（如果您设置了）。
> - **新功能**
> 	- 手机上的功能栏菜单现在支持自定义图标！
> 		- 您可以通过“设置 > 外观 > 功能栏菜单配置”编辑所有图标
> 		- 如果您更喜欢中性色的快速访问按钮，可以使用新的 `Colorless ribbon button` 设置
> 	- 对于手动安装插件的用户，现在每次新版本发布时，Iconic 都会提供一个方便的 ZIP 文件
> 		- （文件名为 `iconic-1.0.15.zip`）
> - **漏洞修复**
> 	- **仅限 1.7:** 文件夹内的文件图标现在可以正确加载
> 	- **仅限 1.7:** 后台标签页的图标现在可以正确加载
> 	- **仅限手机:** 当您更改快速访问按钮时，`Ribbon menu configuration` 中的图标不再消失
> - **视觉修复**
> 	- **图标选择器:** 对于 `en-GB` 语言用户，“Grey”现在拼写正确
> 	- **图标选择器:** 图标名称中的某些词现在更符合逻辑地大写，如 `3D`、`TV` 和 `X`
> 	- **图标选择器:** `Icons` / `Emojis` 按钮现在在点击时能立即更改其工具提示

[Tasks v7.11.1](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.11.1) By _Clare Macrae and Ilyas Landikov (created by Martin Schenck)_

> - **功能**
> 	- 添加随机排序功能，使用 `sort by random`
> - **修复**
> 	- 提高任务设置的可用性
> 	- 恢复状态设置部分的“折叠”状态

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Thino 已更新至 [v2.4.57](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.4.57)

- 改进 Thino 复习页面的样式

## 外观

[Obsidian CSS Snippets Collection](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/tree/Collection?tab=readme-ov-file#-additional-resources-and-links%EF%BC%89%EF%BC%81) By _r-u-s-h-i-k-e-s-h_

> 这是一个为 ObsidianMD 提供的 CSS 代码片段合集。这些片段来自 ObsidianMD 社区的不同成员，因此你会发现各种样式和调整。
> 这些 CSS 片段已经过测试，并与 **1.4.16** 版本的 Obsidian 兼容，且适用于**默认主题**。请注意，Obsidian 的未来更新可能会导致这些片段无法按预期工作。
