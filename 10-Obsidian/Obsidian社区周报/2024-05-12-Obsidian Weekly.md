---
uid: 20240505234749
title: Obsidian Weekly 2024-05-05：交互与数据筛选——任务管理大利好
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-05-05：交互与数据筛选——任务管理大利好！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240513000907
---

# Obsidian Weekly 2024-05-05：交互与数据筛选——任务管理大利好

> [!Abstract]
> **统计时间**：2024-04-28 21:00 ~ 2024-05-05 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[zettelkasten navigation](https://obsidian.md/plugins?id=zettelkasten-navigation) By _terrychenzw_

> 该插件提供了 2 个自定义视图，用于使用 Luhmann 风格的 ID 和关键词索引来导航 zettelkasten。

![12f18896-68a2-4d27-8e18-e4c308327da7](https://cdn.pkmer.cn/images/12f18896-68a2-4d27-8e18-e4c308327da7.gif!pkmer)

[Checkbox Sounds](https://obsidian.md/plugins?id=checkbox-sounds) By _yasd251_

> 勾选时为复选框添加美妙的完成声音。

[TinyChart](https://obsidian.md/plugins?id=tinychart) By _Alin Coop_

> 生成简单的 ASCII 图表。

![Pasted image 20240505222356](https://cdn.pkmer.cn/images/Pasted%20image%2020240505222356.png!pkmer)

[ruby.wasm](https://obsidian.md/plugins?id=ruby-wasm) By _geeknees_

> 使用 WebAssembly 在笔记中运行 ruby​​ 代码。

![Pasted image 20240505222137](https://cdn.pkmer.cn/images/Pasted%20image%2020240505222137.png!pkmer)

[Text2Audio](https://obsidian.md/plugins?id=text2audio) By _Haifeng Lu_

> 将文本转换为语音。
> 在开始使用此插件之前，您需要申请 [微软的文本转语音服务](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/index-text-to-speech)。

[Local LLM Helper](https://obsidian.md/plugins?id=local-llm-helper) By _Mani Mohan_

> 该插件将本地大型语言模型（LLM）服务与 Obsidian 集成，用于摘要和转换文本。
> - **功能**
> 	- 在您的 Markdown 笔记中对所选文本进行摘要。
> 	- 重述以使所选文本听起来更专业
> 	- 使用所选文本作为提示生成文本
> 	- 通过一个功能栏图标访问各种 LLM 功能。

[AI Chat](https://obsidian.md/plugins?id=arenasys-ai-chat) By _arenasys_

> 与 AI 讨论您的笔记。
> 支持的 API：OpenAI、Anthropic、Cohere、OpenRouter、TogetherAI。

![Pasted image 20240505220548](https://cdn.pkmer.cn/images/Pasted%20image%2020240505220548.png!pkmer)

[Azure DevOps Linker](https://obsidian.md/plugins?id=azure-linker) By _Steven Zilberberg_

> 快速将 Azure DevOps 问题标签格式化为 Azure DevOps 实例的链接。

[Draft Indicator](https://obsidian.md/plugins?id=draft-indicator) By _Brian Boucheron_

> 更新文件资源管理器，在任何具有前置元数据中的 `draft: true` 的笔记旁边显示一个小小的 ✎ 铅笔图标。它还会使笔记名称变为斜体。

![Pasted image 20240505201425](https://cdn.pkmer.cn/images/Pasted%20image%2020240505201425.png!pkmer)

[Day One Importer](https://obsidian.md/plugins?id=day-one-importer) By _Marc Donald_

> 将您的 Day One 日记轻松转换为 Obsidian markdown。

#### 更新

[Various Complements v10.0.0](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/releases/tag/10.0.0) By _tadashi-aikawa_

> - **全新功能**
> 	- 添加“回退链接化”功能
> 		- “回退链接化”功能在找不到适当的候选项时（特别是在“内部链接”中），放宽了“匹配策略”或建议创建新的“内部链接”。
> - **新增内容**
> 	- 为 ['当前文件补充'](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/4.%20Options/4.4.%20Current%20file%20complement/%E2%9A%99%EF%B8%8F%20Exclude%20word%20patterns%20for%20indexing%20%28Current%20file%20complement%29/) 和 ['当前库补充'](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/4.%20Options/4.5.%20Current%20vault%20complement/%E2%9A%99%EF%B8%8F%20Exclude%20word%20patterns%20for%20indexing%20%28Current%20vault%20complement%29/) 添加了“排除用于索引的词模式”设置
> - **重大变更**
> 	- 主要
> 		- 清除了 ['完成后插入空格'](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/4.%20Options/4.1.%20Main/%E2%9A%99%EF%B8%8F%20Insert%20space%20after%20completion/) 设置，并将默认值更改为**`false`**
> 	- 外观
> 		- 将 ['显示匹配策略'](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/4.%20Options/4.2.%20Appearance/%E2%9A%99%EF%B8%8F%20Show%20Match%20strategy/)、['自动显示补充'](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/4.%20Options/4.2.%20Appearance/%E2%9A%99%EF%B8%8F%20Show%20Complement%20automatically/) 和 ['显示索引状态'](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/4.%20Options/4.2.%20Appearance/%E2%9A%99%EF%B8%8F%20Show%20Indexing%20status/) 的默认设置更改为**`false`**
> 	- 前置元数据补充
> 		- 将 ['启用前置元数据补充'](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/4.%20Options/4.8.%20Front%20matter%20complement/%E2%9A%99%EF%B8%8F%20Enable%20Front%20matter%20complement/) 的默认设置更改为**`false`**

[Another Quick Switcher v11.4.0](https://github.com/tadashi-aikawa/obsidian-another-quick-switcher/releases/tag/11.4.0) By _tadashi-aikawa_

> - **新增内容**
> 	- 添加“将别名显示为标题”的选项
> - **重大变更**
> 	- 将“在顶部显示别名”选项重命名为“在关键词匹配时将别名显示为标题”

[Tasks v7.1.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.1.0) By _Martin Schenck and Clare Macrae_

> **编辑任务弹窗的易用性改进**
> - 为“已创建”、“已完成”和“已取消”添加快捷键
> - 改善编辑任务弹窗的空间利用

![Pasted image 20240505200954](https://cdn.pkmer.cn/images/Pasted%20image%2020240505200954.png!pkmer)

[Linter v1.24.0](https://github.com/platers/obsidian-linter/releases/tag/1.24.0) By _Victor Tao_

> 这个版本进行了一些功能性变更以及一些错误修复。**此次更新解决了之前仅在测试版中存在的折叠功能丢失的问题，现在所有用户都能受益。** 同时，还对设置和用户界面文本的中文翻译进行了更新，以使其与最近的一些变更保持一致。
> - **功能性改进**
> 	- 用户现在可以指定一个键来跟踪之前文件标题的更改，适用于 `YAML Title Alias`
> 	- 用户现在可以选择在两个空格之间使用哪种换行方式，包括 `\` 和换行符 html/xml
> 	- 用户现在可以自定义哪些内容被视为英文标点和符号（除了 `_`），以便在 CJK 和英文字符周围添加空格
> - **错误修复**
> 	- 修复了 `Blockquote Style` 在代码块中移除空格的问题
> 	- 修复了自定义命令只有空白时尝试运行的问题
> 	- 修复了 Linter 将 ``` 误判为标签的问题
> 欲了解更多已修复和变更的内容，请查阅 [发布说明](https://github.com/platers/obsidian-linter/releases/tag/1.24.0) 以及 [项目看板中的已发布列](https://github.com/users/platers/projects/1)。

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Vault Explorer v0.5.4](https://github.com/trey-wallis/obsidian-vault-explorer/releases/tag/0.5.4) By _Trey Wallis_

> - **功能**
> 	- 为所有 Obsidian 属性类型添加属性过滤器选项
> 		- _注意：这将清除所有属性过滤器组以支持新格式_
> 	- 更新属性过滤器应用程序 UI 以提高可访问性
> - **修复**
> 	- 如果是第一个组，则在添加时启用属性过滤器组
> 	- 减少属性过滤器名称输入和属性过滤器之间的边框厚度
> 	- 将属性过滤器值大小增加到 125 像素
> 	- 将属性过滤器条件名称改为小写
> 	- 在多个属性过滤器之间使用 "and"
> 	- 修复在 Obsidian 重新加载时设置被擦除的问题

![22b892f8-4f71-4142-ac88-3e2c5454fcdb](https://cdn.pkmer.cn/images/22b892f8-4f71-4142-ac88-3e2c5454fcdb.gif!pkmer)

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Outliner View](https://github.com/Quorafind/Outliner-View) 已在开发中！欢迎参与测试

该插件旨在将过往增强无序列表功能的插件进行集成，并添加更多特定功能，包括：

- 全局过滤功能——允许您全局过滤，并直接在过滤视图中开始编辑，无需来回跳转。
- 在每个项目行旁边添加一个菜单按钮，用于快速操作。
- 任务过滤功能——可隐藏所有已完成任务。
- 任务组件使用 Dataview 索引所有标记为 `#now` 的任务，允许直接编辑这些任务。

> 注意：您需要安装 `Obsidian Zoom` 、 `Obsidian Outliner` 和 `Obsidian Dataview` 插件才能更好地使用此插件。

![Pasted image 20240505232338](https://cdn.pkmer.cn/images/Pasted%20image%2020240505232338.png!pkmer)

![Pasted image 20240505232343](https://cdn.pkmer.cn/images/Pasted%20image%2020240505232343.png!pkmer)

#### [Thino v2.4.36](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.4.36) 已发布

- **新功能**
	- 支持了 thino 编辑器按钮
- **修复**
	- 修复了标签获取问题

## 外观

[Spectrum Blue Theme](https://github.com/ryanjrman/Spectrum-Blue) By _ryanjrman_

> 基于 Spectrum 和 Obsidianotion 主题，但颜色调色板更多地偏向蓝色。

![Pasted image 20240505223858](https://cdn.pkmer.cn/images/Pasted%20image%2020240505223858.png!pkmer)

[Sanctum reborn Theme](https://github.com/antoKeinanen/obsidian-sanctum-reborn) By _Anto Keinänen_

> Sanctum 是一个极简主题，旨在创造一个宁静的休憩空间，供思考和不间断的工作。

![Pasted image 20240505172133](https://cdn.pkmer.cn/images/Pasted%20image%2020240505172133.png!pkmer)

[W95 Theme](https://github.com/phchang/W95) By _phchnag_

![Pasted image 20240505171537](https://cdn.pkmer.cn/images/Pasted%20image%2020240505171537.png!pkmer)

> 该主题的灵感来自于华盛顿州雷蒙德市一家公司于 1995 年发布的操作系统。
