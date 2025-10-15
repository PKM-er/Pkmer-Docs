---
uid: 20251014234506
title: Obsidian Weekly 2025-10-12：Obsidian v1.9.14 公开版、v1.10.0 内测版已发布！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-10-12：Obsidian v1.9.14 公开版、v1.10.0 内测版已发布
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20251014234617
---

# Obsidian Weekly 2025-10-12：Obsidian v1.9.14 公开版、v1.10.0 内测版已发布

> [!Abstract]
> **统计时间**：2025-09-28 21:00 ~ 2025-10-12 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.9.14 公开版已发布

#### 桌面版

##### 问题修复

- 使用最新的 Obsidian 1.9 安装程序（基于 Electron v35+）时，打开**快速切换窗口**和**命令面板**的性能得到了提升。
- 修复了**全局搜索**报告结果数量不准确的问题。
- **数据库**：当焦点在数据库文件上时，状态栏中的**字数统计**将被隐藏。
- **数据库**：修复了调整**表格列宽**时出现的延迟问题。
- **数据库**：`file.hasTag('#tag')` 现在**不区分大小写**。`file.hasTag('test')` 和 `file.hasTag('TEST')` 会返回相同结果。
- **数据库**：`contains` 函数现在能正确处理**嵌套标签**。例如，`tags.contains("A")` 现在会返回包含 `#A` 和 `#A/B` 的结果。
- **数据库**：如果数据库文件被嵌入到**白板**中，使用 `this` 的公式现在可以正常工作。
- **数据库**：如果数据库既不在侧边栏中也未被嵌入，使用 `this` 的公式现在会解析为 `null`。
- 桌面版：修复了退出应用后，**弹出窗口**无法重新打开的问题。

##### 开发者更新

- 安装程序已更新至使用 **Electron v37.6.0**（需要下载 [最新安装包](https://obsidian.md/)）。对于使用 **macOS Tahoe** 的用户，这可能会提升应用性能。

#### 移动版

- 包含截至 Obsidian 桌面版 v1.9.14 的所有新功能与问题修复。

##### 问题修复

- **iPadOS 26**：修复了切换应用后屏幕显示区域异常缩小的问题。
- **iPadOS 26**：修复了工具栏定位错误的问题。
- **Android**：修复了在 Android 10 及以下系统上**工具栏**和**导航栏**定位错误的问题。

##### 开发者更新

- 修复了手机尺寸屏幕上 **`Modal`（模态框）** 的默认布局问题。
- 修复了 **`Modal` 实例**上关闭按钮失效的问题。

### Obsidian v1.10.0 内测版已发布

#### 桌面版

##### 破坏性变更

- 移除了“使用浅色模式”和“使用深色模式”命令，新增“**切换浅色/深色模式**”命令，请记得更新你的快捷键设置。

#### 数据库重大更新

此版本为数据库引入了大量新功能和改进，并包含了 **Bases API 的初始版本**。

###### 新增功能

- **分组**：在“排序菜单”中新增“**分组**”功能，可按指定属性对数据分组。
- **表格汇总**：右键点击表格列并选择“汇总…”，可使用内置汇总函数或编写自定义公式。
- **列表视图**：新增**列表视图**，以项目符号或编号列表形式显示文件，支持多行内容和嵌套属性。
- **Bases API**：发布了初始版本的 [Bases API](https://github.com/obsidianmd/obsidian-api/commit/359ffc30309077aa45954b9203fd30e5ac3da837)。
- **地图插件**：新的**地图插件**可在地图上可视化数据库条目，这是一个 [官方开源插件](https://github.com/obsidianmd/obsidian-maps)，也为开发者如何为数据库实现新视图类型提供了示例。
- **表格选择**：新增**表格选择**功能。
- **键盘导航**：支持**完整的键盘导航**。
- **复制/粘贴**：支持**复制/粘贴**。
- **编辑历史**：通过 `Cmd/Ctrl-Z` 和 `Cmd/Ctrl-Shift-Z` 支持**基本编辑历史**（撤销和重做）。

###### 改进

- 为列表新增 `reduce()` 函数。
- 新增 `html()` 函数，用于渲染自定义 HTML。
- 新增 `random()` 函数，可用于创建自定义排序公式。
- 在 ISO 8601 日期时间解析中新增对**时区偏移量**的支持。
- 视图会定期刷新 `file.backlinks` 及其他可能导致数据过时的公式结果。
- 使用修饰键点击功能区项目可在新标签页 (`Ctrl/Cmd`)、新拆分 (`Ctrl/Cmd-Shift`) 或新窗口 (`Ctrl/Cmd-Alt-Shift`) 中打开文件。
- 值不确定的复选框（值为 `null`）现在与 `false` 值一同排序。
- 改进了“新建项”的文件创建行为和属性值推断。
- “更改视图”命令已重命名为“**切换视图…**”。

###### 表格快捷键

- `Ctrl/Cmd-C`, `Ctrl/Cmd-V`：复制和粘贴选中的单元格。
- `Ctrl/Cmd-z`, `Ctrl/Cmd-Shift-Z`：撤销和重做编辑属性时所做的更改。
- `Ctrl/Cmd-A`：选择当前组中的所有单元格。
- `Ctrl/Cmd-Shift-方向键`：选择指定方向的所有单元格。
- `ctrl-Space`：选择整列。
- `Shift-Space`：选择整行。
- `Enter`：聚焦当前单元格（对于复选框，此操作会切换状态；对于公式，则会打开公式编辑器）。
- `Home` / `End`：跳至第一列/最后一列。
- `Pageup` / `Pagedown`：按视觉页面高度导航。
- `Esc`：清除当前单元格选择。
- `Backspace`：清除当前单元格内容。
- `Tab` / `Shift-tab`：跳至下一个/上一个单元格。

###### 其他表格快捷操作

- `Shift-点击`：创建单元格选择范围。
- 在选中的单元格上**右键点击**：唤出针对文件的上下文菜单。

##### 其他改进与修复

- 所选**主题**会在 `appearance.json` 文件变更时重新加载。
- 关闭标签页时，将**激活右侧标签页**（此前为激活左侧）。
- 修复当焦点在弹出层或嵌入的 Markdown 文件上时，“全部折叠”和“全部展开”命令无效的问题。
- **文件管理器**：更改排序后保存布局。
- **文件管理器**：使用 `Ctrl/Cmd + 方向键` 切换文件时会触发侧边栏响应新打开的文件。
- **图谱视图**：从命令面板打开图谱时支持修饰键。
- **属性**：列表属性现在**允许重复值**。
- **属性**：如果没有输入文本，则不会自动选中第一个建议结果。
- **全局属性视图**：可以删除所有笔记中的某个属性（右键点击属性并选择“删除”）。
- “增加缩进”和“减少缩进”命令现已在桌面端可用。
- **阅读模式**：如果未选中任何文本，`Ctrl/Cmd-C` 会将**整个笔记的源代码**复制到剪贴板。

##### 开发者更新

- `FileManager#generateMarkdownLink` 不再为附件链接前置 "!"。
- 当用户触发“跟随光标下链接”命令时，会在活动元素上触发新的 `open-link` 事件。

#### 移动版

- 包含截至 Obsidian **桌面版 v1.10.0** 的所有新功能与问题修复。
- 在 iOS 和 Android 上新增“**摇动以调试**”菜单，提供重置库的快速操作，适用于调试导致工作空间无法使用的插件或主题。

## 插件新闻

### 社区插件

#### 新增

[Google Calendar Importer](https://obsidian.md/plugins?id=google-calendar-importer) By _Fan Li_

> 一款简单轻量的 Google 日历导入工具，可自动将每日事件/任务注入到每日笔记中，或通过命令将其导入到任意位置。

![Weekly-2025-10-12-Pasted image 20251014160925|650](https://cdn.pkmer.cn/images/Weekly-2025-10-12-Pasted%20image%2020251014160925.png!pkmer)

[Tasks Map](https://obsidian.md/plugins?id=tasks-map) By _NicoKNL_

> 将您的 `- [ ] 任务` 可视化为交互式图谱。

![Weekly-2025-10-12-Pasted image 20251014160311|650](https://cdn.pkmer.cn/images/Weekly-2025-10-12-Pasted%20image%2020251014160311.png!pkmer)

[Radial timeline](https://obsidian.md/plugins?id=radial-timeline) By _Eric Rhys Taylor_

> 专为创意小说写作设计的径向时间线，通过幕次、支线情节与数字序号组织场景，为项目提供全景可视化呈现。

![Weekly-2025-10-12-Pasted image 20251014155845|650](https://cdn.pkmer.cn/images/Weekly-2025-10-12-Pasted%20image%2020251014155845.png!pkmer)

#### 更新

[QuickAdd v2.5.0](https://github.com/chhoumann/quickadd/releases/tag/2.5.0) By _Christian B. B. Houmann_

> - **版本亮点**
> 	- 本次是**重大功能更新**，对 QuickAdd 能力进行了显著增强：
> 		- **🎨 原生 YAML 属性类型（测试版）** - 可在脚本中直接使用 JavaScript 数组和对象，并自动格式化为标准 Obsidian 属性
> 		- **🛑 宏中止控制** - 新增 `params.abort()` 方法，支持在出错/取消时自动停止执行
> 		- **🔍 可搜索多选输入框** - 为单页输入新增支持搜索与多选功能的建议字段类型
> 		- **🐛 重要错误修复** - 修复了脚本提供标题、代码输入中的转义序列及属性类型处理等问题
> - ⚠️ **破坏性行为变更**
> 	**现在当您按下 Esc 键或遇到错误时，宏执行将立即停止。** 此前按下 Esc 会继续执行后续流程（返回 `undefined` 值），容易引发令人困惑的连锁错误。
> 	- **新行为：**
> 		- 按下 Esc → 宏立即终止
> 		- 脚本报错 → 宏停止并显示明确错误信息
> 		- 调用 `params.abort()` → 宏停止并输出自定义提示信息
>
> 这将带来**更优、更可控的使用体验**。若您的原有工作流依赖旧版行为，请参阅 [迁移指南](https://github.com/chhoumann/quickadd/releases/tag/2.5.0#:~:text=migration%20guide%20below.-,Features,-%F0%9F%8E%A8%20Native%20YAML%20Front)。

[Manual Sorting v2.5.0](https://github.com/kh4f/manual-sorting/releases/tag/2.5.0) By _kh4f_

> - **功能**
> 	- 当插件设置被外部修改时，**文件管理器现可立即更新**
> 	- 新增**设置选项卡**，包含 `调试模式` 开关以便于故障排查
> 	- 在设置选项卡中添加 `新建项位置` 选项，用于**默认选择新笔记的创建位置**

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Media Extended](https://mx.aidenlx.site/) 已更新至 v4.1.2

##### 新功能

###### 从文件获取媒体元数据

Media Extended 现在可直接从本地和远程媒体文件加载元数据：

- **音乐播放器** 显示来自嵌入式文件元数据的标题和封面艺术
- **自动导入元数据** 当添加媒体至您的媒体库时，包括：
  - 基础信息：`标题`、`时长`、`宽高比`、`描述`、`日期`
  - 音乐信息：`创作者`、`专辑`、`专辑艺术家`、`音轨编号`、`总音轨数`、`碟片编号`、`总碟片数`、`流派`、`注释`

###### 哈希属性编辑器

通过交互式表单编辑哈希属性和媒体元数据，可通过以下方式访问：

- 链接上下文菜单
- 命令面板

编辑媒体文件的 Markdown 链接或维基链接时，**智能自动补全** 功能现已可用。

###### 嵌入式媒体的延迟加载

您现在可为嵌入式媒体启用延迟加载，这将推迟播放开始前的媒体内容加载，以改善包含多个媒体文件的笔记性能。启用方式：在设置中为嵌入式媒体配置默认加载策略，或通过在每个嵌入链接中添加 `load=` 哈希属性进行配置。

###### 新增 " 清除 YouTube Cookies" 命令

##### 错误修复

- 新增禁用 iframe/视频嵌入处理的设置选项
- 修复插入笔记的 YouTube 时间戳链接缺失原生查询参数的问题
- 修复编辑器（实时预览和源码模式）中的损坏链接处理

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [Task Genius新UI，火热测试中！](https://www.xiaohongshu.com/explore/68dbc1610000000004007820?xsec_token=ABQgeyLaLBR3lKrLC61HSuF8jv9wX84hc6NJjzQ0coI1k=&xsec_source=pc_user)

Task Genius 是由 PKMer 核心贡献者 [@Boninall](https://www.xiaohongshu.com/user/profile/62e211ee000000001f0160b0?xsec_token=ABNzvrFMxvPxf6X6oqmo5kdvyV2STVIGbgcVDDN9AFKGg%3D&xsec_source=pc_note) 开发的一款广受好评的任务管理插件。

目前插件包含的功能包括：

- 可视化任务进度条
- 高级任务状态和任务循环
- 日期和任务优先级管理
- 任务移动存档
- 任务快速捕捉面板
- 专用跨保险库任务视图
- 可定制的工作流
- ……

![Weekly-2025-10-12-Pasted image 20251014233512|650](https://cdn.pkmer.cn/images/Weekly-2025-10-12-Pasted%20image%2020251014233512.png!pkmer)

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
