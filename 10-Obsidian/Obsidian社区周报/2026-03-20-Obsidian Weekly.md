---
uid: 20260320210629
title: Obsidian Weekly 2026-03-20：附件内容寻址去重，Bases 看板视图上线
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-03-20：附件内容寻址去重，Bases 看板视图上线
author: 熊猫别熬夜,PKMer
type: other
draft: false
editable: false
modified: 20260320210641
---

# Obsidian Weekly 2026-03-20：附件内容寻址去重，Bases 看板视图上线

> [!tip]
> 统计时间：2026-03-13 21:00 ~ 2026-03-20 11:00
> 声明：本栏目灵感来源于 Eleanor Konik 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 GitHub 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### 版本 v1.12.6

**包含截至 [Obsidian Desktop v1.12.6](https://obsidian.md/changelog/2026-03-18-desktop-v1.12.6/) 的所有新功能和错误修复。**

如果你之前安装了 Obsidian 1.12.5 安装程序，需要升级到新的 1.12.6 安装程序才能使 Obsidian CLI 正常工作。

#### 错误修复

##### CLI

- 修复了 Obsidian CLI 在 macOS 上错误检查 Linux 特定目录的问题。
- 将 CLI 套接字文件更改为 macOS 和 Linux 上的隐藏点文件。

##### 编辑器

- 修复了 1.12.4 中引入的一些编辑器回归问题。
- 修复了标注内的图像在阅读模式下显示不需要的滚动条的问题。
- 修复了在实时预览中双击图像无法重置其大小的问题。

## 插件新闻

### 新增

[Content-Addressed Attachments](obsidian://show-plugin?id=content-addressed-attachments) by NateScarlet

> 基于内容寻址的附件存储，可实现自动去重。完全本地运行；也可选择使用 GitHub 私有仓库进行托管。实现附件的地址存储，提供类似于 IPFS 的功能，支持本地和外部网关/文件托管。

[Kanban Bases View](obsidian://show-plugin?id=kanban-bases-view) by I. Welch Canavan

![2026-03-13-Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/File-20260320102411200.gif)

> 为 Obsidian Bases 提供看板风格的拖放自定义视图。支持动态列生成、平滑的拖放动画、列排序持久化以及未分类条目的自动分组，方便用户根据任何属性（如状态、优先级）直观组织笔记。

[Banners Reloaded](obsidian://show-plugin?id=banners-reloaded) by Dani García

![2026-03-13-Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/File-20260320100630975.gif!pkmer)

> 提供了一种简单、快速且轻量的方式，为你的 Obsidian 笔记添加美观且可自定义的横幅。它专为提升性能而设计，通过直观的界面让你能够灵活控制笔记库的外观。你可以全局设置横幅、按标签设置横幅，也可以在任何单个笔记上覆盖已有的横幅设置。

[Negative Heading](obsidian://show-plugin?id=negative-heading) by Ashan Devine

![2026-03-13-Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/File-20260320101811607.gif!pkmer)

> 在阅读视图和编辑器中渲染 Discord 风格的 `-# 标题` 为紧凑、静音的标题（即 7 级标题）。适用于在所有视图模式中组织内容而不产生传统标题的视觉重量，支持智能切换命令、列表项渲染及主题集成。

[Auto Math](obsidian://show-plugin?id=auto-math) by Vladislav Sorokin

> 自动扩展 LaTeX 数学片段。提供即时片段扩展（如 `\frac`、`\sqrt ` 等）、多行模板支持、自定义规则编辑器及实时重载功能。旨在让用户像思考一样快速编写公式，无需学习复杂的快捷键。

[Smart Export](obsidian://show-plugin?id=smart-export) by Iván Sotillo

> 智能导出插件。从根笔记开始跟随链接构建笔记树，并以适合人类和 LLM 的格式导出。支持双重深度控制、文件夹/标签/属性排除规则、多种输出格式（XML、Markdown、LLM-ready 等）以及令牌估算显示。

[LongtimeDiary](obsidian://show-plugin?id=longtime-diary) by sawamaru

![2026-03-13-Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/File-20260320101257456.png!pkmer)

> 显示往年同一天的过往每日笔记。

[WebDAV Explorer](obsidian://show-plugin?id=webdav-explorer) by 蓝星晓夜

![2026-03-13-Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/File-20260320101451734.gif)

> WebDAV 浏览器：连接 WebDAV 服务器，直接在网页视图中预览文件，并通过简单拖放生成链接。

[Archivist Importer](obsidian://show-plugin?id=archivist-importer) by Archivist AI

> 将选中的仓库文件导入 Archivist 活动中。

[Card Forge](obsidian://show-plugin?id=card-forge) by Carl Sverre

![2026-03-13-Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/File-20260320101526459.png!pkmer)

> 将笔记转换为可打印的卡片。

[Frontmatter to HTML Attributes](obsidian://show-plugin?id=frontmatter-to-html-attributes) by Tarek Saier

![2026-03-13-Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/File-20260320101637063.gif!pkmer)

> 将 YAML 前置元数据作为 `data-*` 属性暴露在 HTML 中，从而支持基于元数据的 CSS 样式。

[TikToker](obsidian://show-plugin?id=tiktoker) by ameyxd

> 在 Obsidian 中保存和审查 TikTok 内容的工作流程，将 TikTok 视频保存为 markdown 笔记，包含嵌入内容和元数据提取。

### 更新

#### AI 工具

[YOLO](obsidian://show-plugin?id=yolo) By Lapis0x0

> - **Quick Ask 增强**：UI 重构，图标文字对齐，高度优化，避免被侧栏遮挡；支持已发送消息二次编辑。
> - **技术优化**：优化 Provider 删除策略（无关联向量模型时不触发冗余流程）；修复 LaTeX、路径、代码块中的反斜杠处理；工具调用改为内部结构化参数，避免 JSON 序列化损坏；为 Anthropic 添加跨域支持及自动回退；对话保存逻辑迁移至侧边栏，提高历史记录可靠性。
> - **编辑精度**：重构语法识别，提升文本匹配与修改准确率。

[Note Companion AI](obsidian://show-plugin?id=fileorganizer2000) By Benjamin Ashgan Shafii

> - **AI 链接工具**：新增“创建链接”工具，可从 AI 聊天界面在笔记间创建链接（支持别名，防重复）。
> - **UI 更新**：整体样式现代化，侧边栏和组织者标签页更新，提升可访问性。

[Large Language Models](obsidian://show-plugin?id=large-language-models) By eharris128, r-mahoney, & jsmorabito

> - **模型更新**：添加 Claude Sonnet 4.6、Opus 4.6、Haiku 4.5 模型。
> - **界面**：更新忍者猫图标；标题栏重新设计。
> - **Ollama 集成**：模型刷新后全局注册，支持请求超时。

#### 卡片笔记

[Spaced Repetition](obsidian://show-plugin?id=obsidian-spaced-repetition) By Stephen Mwangi

> - **同天复习**：新增“再次”按钮，总是将卡片安排到同一天。
> - **本地化**：改进本地化系统，易于添加新文本。
> - **删除计划**：将删除计划按钮细分为卡片和笔记分离。
> - **开发**：添加 postcss 改善 UI 开发；新增开发新闻部分。

#### 文件&文件夹相关

[Notebook Navigator](obsidian://show-plugin?id=notebook-navigator) By Johan Sanneblad

> - **新设置**：列表预览回退到笔记内容；日历功能开关；彩虹色分离深浅色模式；亮度一致选项。
> - **日历**：月历显示特色图片（可手动设置）。
> - **属性树**：支持 `null` 和布尔值显示。
> - **交互**：Option+ 点击 chevrons 可折叠/展开所有同级标签/属性；折叠全部现在到根项；选中日历日加边框。

[NoteMover shortcut](obsidian://show-plugin?id=note-mover-shortcut) By Lars Bücker

> - **模板目标**：目标输入支持 `{{tag.*}}` 和 `{{property.*}}` 占位符补全，根据笔记元数据动态构建文件夹。
> - **界面**：更新日志渲染支持 Markdown；规则编辑器优化提示和示例。

#### 白板画板

[Tldraw](obsidian://show-plugin?id=tldraw) By Sam Alhaqab

> - **更新**：升级至 tldraw 4.4.1，带来主题集成、页面管理和视口持久化。

#### 代码块渲染

[Inline Local Graph](obsidian://show-plugin?id=inline-local-graph) By TKOxff

> - **节点样式**：可自定义标签截断（最大长度）、节点字体大小、节点形状（椭圆/方框/圆/点/仅文本）。
> - **设置面板**：重组为“图形”和“节点样式”两部分。

[MathLive in Editor Mode](obsidian://show-plugin?id=mathlive-in-editor-mode) By MizarZh

> - **公式限制**：MathLive 行内公式最大长度限制。
> - **导航**：添加“箭头键在 MathLive 与编辑器之间导航”设置。
> - **界面**：虚拟键盘所有标签页显示折叠按钮；“隐藏原始公式”不再隐藏 callout 中的公式。

#### 笔记导入

[Markitdown File Converter](obsidian://show-plugin?id=markitdown) By Ethan Troy

> - **安全重写**：消除 shell 注入漏洞，路径遍历防护，错误消息清理绝对路径。
> - **新功能**：实时 Python 路径刷新；自动检测 `python3`；批量转换进度条；设置向导；文件右键菜单“转换为 Markdown”；插件参数编辑器；PDF/EPUB 图片提取至子文件夹。
> - **架构**：拆分为 12 个模块，使用异步 I/O，Unicode 支持。

[Messager](obsidian://show-plugin?id=messager) By Rainyluo

> - **内容源**：支持获取微信公众号内容。

[Smart Templates](obsidian://show-plugin?id=smart-templates) By 🌴 Brian Petro

> - **v2.0.0 大版本**：
>   - **上下文优先**：编辑器选中文本覆盖当前笔记作为上下文；从命令面板或丝带图标打开。
>   - **共享模板模态框**：添加指令，选择多个模板合并，左侧构建上下文。
>   - **兼容现有模板**：通过 `template_headings`、`template_name`、frontmatter 标志等。
>   - **内置默认模板**：Mermaid、图表、研究论文、摘要、标签。
>   - **Pro 扩展**：可选择生成模型，在 Obsidian 内生成并插入笔记。

### PKMer 出品

[Floating Search](obsidian://show-plugin?id=float-search) By Boninall

> - **内容搜索**：添加内容搜索功能，预览支持滚动到指定位置。

[Easy Typing](obsidian://show-plugin?id=easy-typing-obsidian) By yaozhuwa

> - **粘贴与符号**：优化无格式粘贴判断逻辑；调整软空格符号默认处理。
> - **代码作用域**：代码作用域可细分语言，规则列表添加作用域标签，支持多选作用域。
> - **自定义规则**：新增正则标志支持（`i`、`m`、`u`）。
> - **界面**：改进规则编辑弹窗焦点问题，优化编辑面板样式。
