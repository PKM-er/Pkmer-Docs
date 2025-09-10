---
uid: 20250625015308
title: Obsidian Weekly 2025-06-22：以繁得简，以简驭繁
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-06-22：以繁得简，以简驭繁
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250625015425
---

# Obsidian Weekly 2025-06-22：以繁得简，以简驭繁

> [!Abstract]
> **统计时间**：2025-06-15 21:00 ~ 2025-06-22 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian Web Clipper 已更新至 [v0.11.8](https://github.com/obsidianmd/obsidian-clipper/releases/tag/0.11.8)

由于新方法存在一些问题，此更新主要恢复到旧的荧光笔行为（0.11.6 之前）。

#### 改进

- 快捷键本地化支持
- 修复编辑自定义提供程序的问题
- 修复 `remove_attr` 在属性包含空格时无法完整移除的问题
- 升级至 Defuddle 0.6.4（修复 Substack 等站点问题）
- 修复 Safari 中的区域设置错误

## 插件新闻

### 社区插件

#### 新增

[Text Autocomplete](https://obsidian.md/plugins?id=text-autocomplete) By _Christ Degni_

> 自动完成文本以更高效地输入。
> _目前仅支持英语_

[CJK Count](https://obsidian.md/plugins?id=cjk-count) By _vrabe_

> 仅统计中文、日文和韩文 (CJK) 字符的字数统计器。

[Tree Diagram](https://obsidian.md/plugins?id=tree-diagram) By _limpido_

> 将制表符缩进文本格式的目录结构转换为树形图。

![Pasted image 20250625005934|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250625005934.png!pkmer)

[Move Files](https://obsidian.md/plugins?id=move-files) By _Nitish Khurana_

> 将打开的 md 文件的所有链接文件移动到一个文件夹中，并更新 md 文件中的链接。

[Todo.txt Mode](https://obsidian.md/plugins?id=todo-txt-mode) By _rioskit_

> 支持 todo. txt 文件格式，具有语法高亮和任务管理功能。

![Pasted image 20250625002525|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250625002525.png!pkmer)

[Layout Manager](https://obsidian.md/plugins?id=layout-manager) By _Lucy Dryaeva_

> 根据上下文管理布局，让您可以根据打开的文件/路径自动拥有不同的设置。

![preview|650](https://cdn.pkmer.cn/images/preview.gif!pkmer)

[Streams](https://obsidian.md/plugins?id=streams) By _Floyd_

> 创建和管理多个每日笔记流。

![Pasted image 20250624232237|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250624232237.png!pkmer)

[Log Keeper](https://obsidian.md/plugins?id=log-keeper) By _James Sonneveld_

> 当笔记在库中内容发生更改时，会根据设置生成新的时间戳或编辑原有时间戳。然后将此日志添加到该笔记的 YAML 属性中。

![Pasted image 20250624232009|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250624232009.png!pkmer)

[LLM docs](https://obsidian.md/plugins?id=llm-docs) By _Shane Lamb_

> 使用纯 markdown 文档的简单 LLM（AI 聊天）客户端

![cf8ee4a8-f5ff-40d8-bbac-d090d8f00c50|650](https://cdn.pkmer.cn/images/cf8ee4a8-f5ff-40d8-bbac-d090d8f00c50.gif!pkmer)

[LaTeX Math](https://obsidian.md/plugins?id=latex-math) By _Zarstensen_

> 在 LaTeX 代码块中利用 Sympy 实现表达式求值、方程求解等高级数学运算。

![frontpage-demo|650](https://cdn.pkmer.cn/images/frontpage-demo.gif!pkmer)

[Google Contacts](https://obsidian.md/plugins?id=google-contacts) By _aleksejs1_

> 将 Google 通讯录同步至独立的联系人笔记。

![Pasted image 20250624015528|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250624015528.png!pkmer)

[Custom Selected Word Count](https://obsidian.md/plugins?id=custom-selected-word-count) By _banisterious_

> 提供全视图模式下选中文本的高级字数统计功能。突破基础计数限制，支持自定义路径排除等扩展功能。

[Folder Filelist](https://obsidian.md/plugins?id=folder-filelist) By _Bill Anderson_

> 创建并维护指定文件夹中文件的 wikilink 列表。

[Ace Code Editor](https://obsidian.md/plugins?id=ace-code-editor) By _RavenHogWarts_c

> 采用 Ace 编辑器实现的增强型代码编辑器，提供语法高亮、代码折叠及其他高级编辑功能。

![Pasted image 20250623220644|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250623220644.png!pkmer)

#### 更新

[Quickadd v1.15.0](https://github.com/chhoumann/quickadd/releases/tag/1.15.0) By _Christian B.B.Houmann_

> - **新功能**
>     - 增强的 VDATE 变量，可重用日期
>         - 现在可以输入一次日期，并以多种不同方式格式化！这非常适合创建层次化的文件夹结构或在模板中以不同格式使用相同日期。
>     - 画布模板支持
>         - QuickAdd 现在完全支持画布模板！使用 QuickAdd 的格式系统强大功能从画布模板创建新的画布文件。
>             - 设置画布模板路径（例如：`Templates/canvas-template.canvas`）
>             - 新文件自动获取 `.canvas` 扩展名
>     - VALUE 变量的默认值
>         - 为用户通过按 Enter 接受的输入提示指定备用值。适合创建具有合理默认值的模板！
>         - **语法：** `{{VALUE:variableName|defaultValue}}`
>         - **示例：**
>             - `{{VALUE:status|draft}}` - 如果未提供输入，则使用“draft”
>             - `{{VALUE:priority|medium}}` - 默认优先级为“medium”
>             - `{{VALUE:assignee|Unassigned}}` - 回退到“Unassigned”
>     - 高级字段建议
>         - `{{FIELD}}` 语法现在支持强大的过滤选项，以提供更精确的值建议：
>             - **按位置过滤：**
>                 - `{{FIELD:status|folder:Projects}}` - 仅来自 Projects 文件夹
>                 - `{{FIELD:priority|tag:active|tag:work}}` - 仅来自同时具有两个标签的笔记
>             - **排除不需要的内容：**
>                 - `{{FIELD:category|exclude-folder:Archive}}`
>                 - `{{FIELD:type|exclude-tag:draft}}`
>             - **智能默认值：**
>                 - `{{FIELD:assignee|default:Unassigned}}`
>                 - `{{FIELD:status|default:Todo|default-always:true}}`
>             - **性能：** 与可用的 Dataview API 集成，以实现更快的查询！
>     - VDATE 格式中的逗号支持
>         流行的带逗号的日期格式现在完美支持：
>         - `{{VDATE:date,MMM D, YYYY}}` → “Jun 25, 2025”
>         - `{{VDATE:date,dddd, MMMM D, YYYY}}` → “Wednesday, June 25, 2025”
>     - 改善格式语法的实时预览
> - **错误修复**
>     - 未定义变量现在返回空字符串
>         - 之前，当 `{{VALUE}}` 变量留空时会显示文字“undefined”。现在它们正确返回空字符串，可防止“undefined”出现在笔记中。
>     - 修复双换行处理
>         - `\n\n` 转义序列现在正确生成两个换行，而不是被错误处理。
>     - VDATE 改进
>         - 修复在 VDATE 语法中输入逗号时的无限循环
>         - 在缺少 Natural Language Dates 插件时添加清晰的错误消息
>         - 改善 VDATE 处理的运行时错误处理
>         - 改进 UpdateModal 文本溢出处理
> - **开发者改进**
>     - npm 构建支持
>         - 代码库不再依赖全局 `app` 变量，可通过 npm 和 bun 构建。这为更喜欢 npm 的开发者提供了贡献机会。
>     - 文档增强
>         - 重大文档改版，内容改进、设计现代化、框架集成更好。
>             - [查看！](https://quickadd.obsidian.guide/)

[Hinote 0.4.3](https://github.com/CatMuse/HiNote/releases/tag/0.4.3) By _Kai_

> - 移动端体验优化
>     - 批注输入框增加 Enter 换行，增加保存按钮；
>     - 主视图将高亮文件列表和高亮卡片拆分；
>     - HiCard 将学习分组和闪卡进行拆分；
>     - 优化编辑器中的高亮小部件被拉伸问题；
> - 优化搜索功能，保留搜索关键词在所有文档可用；
> - 增加全局搜索，可在右侧侧边栏通过 `all:` 前缀来搜索全部内容；
> - 搜索结果可直接拖拽至文档和 AI 对话框中；

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Media Extended v4 Beta + ZotLit 状态更新

##### Media Extended v4 Beta

- **全面重构**：自适应播放器界面重新设计
- **新增功能**：
	- 截图剪辑工具
	- 交互式字幕视图（支持 .srt/.vtt/.ass 格式）
- **重大变更**：
	- **许可证变更**：v4 闭源发布（v3 保持 MIT 开源协议）
	- 弃用网站播放器（保留 YouTube iframe 支持）
- **获取途径**：通过 BRAT 安装（aidenlx/media-extended）

测试详情：[https://mx.pkmer.net/docs/v4](https://mx.pkmer.net/docs/v4)

##### ZotLit 状态

- 核心数据库重构完成
- 更稳定的 Zotero 集成即将上线
- 保持完全开源，欢迎社区贡献

#### Task genius 已更新至 [v9.0.4](https://github.com/Quorafind/Obsidian-Task-Genius/releases/tag/9.0.4)

##### 亮点功能

###### 全新项目与工作流管理

我们重构了任务、项目和上下文的底层逻辑，引入强大的工作流管理功能：

- **文件夹即项目**：直接以文件夹为单位管理项目
- **项目集中配置**：在项目设置中一站式管理所有相关配置
- **阶段化工作流**：为项目定义清晰阶段，轻松拖拽任务推进进度

![Pasted image 20250624003913|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250624003913.png!pkmer)

###### 时间线侧边栏视图

全新 **时间线视图** 登陆侧边栏，直观可视化日程规划

![Pasted image 20250624013521|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250624013521.png!pkmer)

###### 文件与画布任务索引

支持将整个笔记文件或画布作为单一任务追踪，自动索引文件元数据

###### 矩阵视图（艾森豪威尔矩阵）

新增 **四象限矩阵视图**：

1. 紧急且重要
2. 不紧急但重要
3. 紧急不重要
4. 不紧急不重要
通过象限间拖拽实现直观优先级管理

##### 功能增强

- **ICS 日历订阅**：支持 `ics` 格式外部日历订阅
- **每日笔记快速捕获**：支持快速捕获想法至每日笔记，可预览目标文件
- **日历视图隐藏周末**：日历/预测视图可选隐藏周末聚焦工作日

##### 性能优化

- **日历事件处理**：海量日历事件性能显著提升
- **设置界面重构**：全面更新设置页视觉与交互体验
- **图标更新**：采用 @jsmorabito 设计全新图标（感谢社区贡献！）
- **多语言支持**：更新完善多语言翻译

![Pasted image 20250624013626|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250624013626.png!pkmer)

##### 问题修复

- **工作流**：修复任务无法推进至下一阶段及子阶段无法完成问题
- **任务继承**：修复任务未正确继承项目元数据
- **Dataview 解析**：修复 `dataview` 键值解析异常
- **行内编辑器**：修复预测视图行内编辑器无法更新任务元数据
- **视图过滤**：修复任务视图侧边栏未正确隐藏已完成任务
- **每日习惯**：修复习惯创建日计算错误

#### Thino 已更新至 [v2.7.16](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.7.16)

- **功能**
	- 支持在画廊视图中通过颜色过滤图片
	- [Pro] 更好的 API 服务

## 外观

[**Iridium** Theme](https://github.com/kyffa/Iridium) By _kyffa_

![Pasted image 20250625001428|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250625001428.png!pkmer)

[**Radiance** Theme](https://github.com/JabariD/obsidian-radiance) By _JabariD_

![Pasted image 20250625001041|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250625001041.png!pkmer)

> 一个时尚、现代的 Obsidian 主题，灵感来源于 Raycast macOS 应用。该主题提供干净、极简的界面，精心打造的 UI 元素，以及标志性的红色强调色，为您的笔记赋予独特而专业的外观。

[**SpectrumPlus** Theme](https://github.com/anotherlusitano/SpectrumPlus) By _João Ribeiro_

![Pasted image 20250623221022|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250623221022.png!pkmer)

> [Spectrum Theme](https://github.com/wiktoriavh/Spectrum) 的一个分支，由于原作者不再维护，该分支独立维护，包含了错误修复、新特性和改进。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

