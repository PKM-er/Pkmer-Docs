---
uid: 20241028001816
title: Obsidian Weekly 2024-10-26：非常实用的输入和管理类更新
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-10-26：非常实用的输入和管理类更新
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241028111614
---

# Obsidian Weekly 2024-10-26：非常实用的输入和管理类更新

> [!Abstract]
> **统计时间**：2024-10-19 21:00 ~ 2024-10-26 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 更新

[Recent Files v1.7.0](https://github.com/tgrosinger/recent-files-obsidian/releases/tag/1.7.0) By _Tony Grosinger_

> 添加由于 frontmatter 标签而忽略最近文件的功能。

[Iconize v2.14.4](https://github.com/FlorianWoelki/obsidian-iconize/releases/tag/2.14.4) By _FlorianWoelki_

> - **修复**
> 	- 解决在 >1.7.2 中加载 Obsidian 的问题
> 	- 修复带有代码块的提示框中的图标显示问题

[Hotkey Helper v0.3.20](https://github.com/pjeby/hotkey-helper/releases/tag/0.3.20) By _PJ Eby_

> - **杂项错误修复**
> 	- 某些 HH 命令无法正常工作
> 	- 命令面板的指令在较新的 Obsidian 版本中未正确显示

[Tasks v7.12.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.12.0) By _Clare Macrae and Ilyas Landikov (created by Martin Schenck)_

> - **功能**
> 	- **使用 `show tree` 指令以缩进方式显示任务！**
> - **修复**
> 	- 在夏令时开始时正确循环
> 	- “完成时”删除现在在实时预览中正确渲染

![Weekly-2024-10-26-Pasted image 20241027234058|650](https://cdn.pkmer.cn/images/Weekly-2024-10-26-Pasted%20image%2020241027234058.png!pkmer)

[Vertical Tabs v0.9.0](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.9.0) By _oxdc_

> - 改进了拖放体验，使交互更加顺畅。
> - 添加了一个便捷按钮用于轻松创建新组。
> - 当只有一个组时，**垂直标签页**将显示一个简单的列表，而不是冗余的树状结构。
> - 标签页排序将不再影响侧边栏中的标签页。
> - 组的顺序现在在重启后会保留。
> - 已添加书签的组名称会自动重新加载。
> - 书签现在完全支持延迟视图。
> - 修复了在某些情况下书签可能无法保存的问题。
> - 修正了书签中的顺序。
> - 同名文件的书签现在会显示完整路径。

![Weekly-2024-10-26-Pasted image 20241027232136|650](https://cdn.pkmer.cn/images/Weekly-2024-10-26-Pasted%20image%2020241027232136.png!pkmer)

[Advanced Canvas v3.1.3](https://github.com/Developer-Mike/obsidian-advanced-canvas/releases/tag/3.1.3) By _Developer-Mike_

> - 修复了移动折叠组导致画布历史记录损坏的问题
> - 新增默认连线方向设置
> - 新增门户的热重载功能
> - 修复了克隆节点命令

[Easy Typing v5.5.4](https://github.com/Yaozhuwa/easy-typing-obsidian/releases/tag/5.5.4) By _yaozhuwa_

> - 重构文档，使文档更简洁清晰
> - 增强删除功能添加功能开关，默认开启，可以到设置中关闭。
> - 增强删除功能：删除有序列表时，更新后续列表序号
> - 严格换行两次：支持代码块后回车换行两次。
> - 修复了代码块内删除空行时，删除列表代码块的 Bug
> - 增加了几个新的提升编辑体验的功能
>     - 优化了空的列表项和引用项的删除功能，可以自行体验。
>     - 添加了快捷键命令：跳转到新建行，默认快捷方式是 CMD/Ctrl+Enter，会与 Obsidian 快捷键冲突，需要自己设置
>     - 优化了代码块的粘贴功能，去除了冗余的智能缩进
>     - 增加了切换注释命令（CMD/Ctrl+/），可以切换代码块和普通文本的注释（目前支持部分常用语言的代码块的注释），与 Obsidian 内置的注释功能快捷键冲突，需要自己设置快捷键。
>         - 目前支持如下语言：
>             - 'js': '//',
>             - 'javascript': '//',
>             - 'ts': '//',
>             - 'typescript': '//',
>             - 'py': '#',
>             - 'python': '#',
>             - 'rb': '#',
>             - 'ruby': '#',
>             - 'java': '//',
>             - 'c': '//',
>             - 'cpp': '//',
>             - 'cs': '//',
>             - 'go': '//',
>             - 'rust': '//',
>             - 'swift': '//',
>             - 'kotlin': '//',
>             - 'php': '//',
>             - 'css': '//',
>             - 'scss': '//',
>             - 'sql': '--',
>             - 'shell': '#',
>             - 'bash': '#',
>             - 'powershell': '#',

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Weaver v1.0.0 (Pre-release)](https://github.com/vasilecampeanu/obsidian-weaver/releases/tag/1.0.0) By _Vasile Campeanu_

> 将类似 ChatGPT 的界面直接集成到编辑器中。
> 原作者时隔一年回归，发布了完全重写之后的预发行版本，目前缺少一些以前的功能。
> - **主题兼容性：** Weave 目前是基于 Minimal 主题开发的，这意味着在使用其他主题时可能会存在兼容性问题。
> - **移动端支持：** 尚不支持移动版本。
> - **自定义注意：** 请暂时避免使用 CSS 类自定义聊天界面，因为在公开发布之前，一些类可能会发生变更。

![Weekly-2024-10-26-Pasted image 20241027232950|650](https://cdn.pkmer.cn/images/Weekly-2024-10-26-Pasted%20image%2020241027232950.png!pkmer)

## 外观

[**SimplyColorful** Theme v0.2.0](https://github.com/LorenzoPegorari/SimplyColorful/releases/tag/v0.2.0) By _Lorenzo Pegorari_

> - 添加了对 `Style Settings` 社区插件的支持
> - 缩小和压缩 CSS 以加快加载速度
> - 修复了标题折叠指示器

## 其他新闻

### [fireSeqSearch v0.2.1](https://github.com/Endle/fireSeqSearch/releases/tag/0.2.1) 已发布

> [fireSeqSearch](https://github.com/Endle/fireSeqSearch) 的灵感来自 [Evernote](https://evernote.com/) 的浏览器扩展 - 如果我们在 Google 中搜索一个术语，例如 `softmax` ， [fireSeqSearch](https://github.com/Endle/fireSeqSearch) 也会在我们的个人笔记本中搜索，并将匹配结果附加到 Google 结果中。

- **新功能：使用本地大语言模型进行笔记摘要。**
	- 本地处理，本地存储。您的笔记将被传送到本地语言模型（Mistral-7B）进行摘要处理，并基于摘要生成搜索引擎结果。
