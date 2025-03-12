---
uid: 20250312230651
title: Obsidian Weekly 2025-03-09：Obsidian v1.8.9 正式发布！手动拖放排序&任务自动整合
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-03-09：Obsidian v1.8.9 正式发布！手动拖放排序&任务自动整合
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250313002200
---

# Obsidian Weekly 2025-03-09：Obsidian v1.8.9 正式发布！手动拖放排序&任务自动整合

> [!Abstract]
> **统计时间**：2025-03-02 21:00 ~ 2025-03-09 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.8.9 公共版现已发布

#### 桌面端

##### 改进

- 更新了应用内翻译。
- 当树状视图（例如文件资源管理器）显示大量项目时，提升了应用性能。
- 更新了应用设置，以反映商业许可证的变更。
- 列表自动编号现在保留自定义的起始数字。
- 当禁用“智能缩进列表”功能时，编辑器不再自动重新编号列表。
- Obsidian Sync：如果库已由第三方同步服务管理（可能引发冲突），连接远程库前会显示警告。

##### 问题修复

- 修复了导致大型保险库需要更长时间才能加载和保存缓存的回归问题（自 Electron 33 以来的错误）。
- 实时预览现能将 `- - -` 正确渲染为水平线。
- 折叠信息损坏的笔记现可被打开。
- 嵌入内容内的表格现会全宽显示。
- 松散列表中的清单项现已正确缩进。
- 点击 PDF 视图内的内容现会聚焦该视图。
- 在阅读视图下折叠的列表项在切换到编辑视图时现能保持折叠状态。
- 如果属性被隐藏，在页内标题处按下 `↓` 键即可聚焦编辑器。
- 通过“快速开始”按钮创建新库时，现会打开 `welcome.md` 文件。
- 链接建议现包括插件注册的扩展名文件。
- 修复了嵌套在无序列表中的有序列表编号不正确的问题。
- 在阅读视图下点击堆叠标签页时，现能正确地将标签页滚动到视图中。

##### 第三方库

- 安装程序已更新至 Electron 34.3.0，修复包括在 macOS 上右键单击时菜单无法正确显示的问题。

#### 移动端

包含直至 [Obsidian 桌面端 v1.8.9](https://obsidian.md/changelog/2025-03-05-desktop-v1.8.9/) 的所有新功能和问题修复。

##### 问题修复

- Android：修复了导致大型库需要更长时间加载和保存缓存的回归问题（自 Chromium 130 以来的错误）。
- 初始引导：对 Obsidian Sync 中托管和自主管理密码的说明更加清晰。

## 插件新闻

### 社区插件

#### 新增

[Hârn Weather Generator](https://obsidian.md/plugins?id=harn-weather) By _Marc André Ueberall_

> HârnMaster 天气生成器：用于《Kèthîra 世界角色扮演》规则系统。

[Export Graph View](https://obsidian.md/plugins?id=export-graph-view) By _Sean McGhee_

> 将你的库的图谱视图导出为 mermaid `.mmd` 和 dot `.dot` 格式。

[Reading View j/k Scroll](https://obsidian.md/plugins?id=scroll-with-jk) By _Lukas Korotaj_

> 在阅读模式下使用类 Vim 键绑定滚动。`j` 和 `k` 进行滚动，`gg` 跳至顶部，`G` 跳至底部。

[Write Good](https://obsidian.md/plugins?id=write-good) By _Mark Hesketh_

> 集成 [write good](https://github.com/btford/write-good)，一款用于检查英文散文并改善写作风格的工具。

![Weekly-2025-03-09-Pasted image 20250310222852|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250310222852.png!pkmer)

[Tier List](https://obsidian.md/plugins?id=tier-list) By _Mox Alehin_

> 将嵌套列表渲染为视觉化的分层列表，提供一种直观的方法，通过可自定义的分层来组织、排序和展示项目。

![Weekly-2025-03-09-Pasted image 20250310221919|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250310221919.png!pkmer)

[Spaced Repetition AI](https://obsidian.md/plugins?id=spaced-repetition-ai) By _Belinda Mo, Athena Leong_

> 使用 AI 回顾、生成并为你的笔记添加抽认卡。

[Blog AI Generator](https://obsidian.md/plugins?id=ai-blog-generator) By _Gareth Ng_

> 将你的 Obsidian 笔记转换为结构良好的博客文章。它利用 OpenAI 的语言模型优化内容，支持多种语言，并处理笔记中的图片。

[Memos AI Sync](https://obsidian.md/plugins?id=memos-ai-sync) By _leoleelxh_

> 将 Memos 内容同步到 Obsidian 的插件，提供无缝集成体验。

[Chat clips](https://obsidian.md/plugins?id=chat-clips) By _sleepingraven_

> 在 _编辑视图_ 中的 markdown 列表中记录聊天，并在 _阅读视图_ 中显示类似评论的布局。

![Weekly-2025-03-09-Pasted image 20250305201518|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250305201518.png!pkmer)

[AI Tagger Universe](https://obsidian.md/plugins?id=ai-tagger-universe) By _Hu Nie_

> 自动使用 AI 分析笔记内容，并添加相关标签。

[KOI Sync](https://obsidian.md/plugins?id=koi-sync) By _Luke Miller_

> 使用 KOI-net 协议从 Slack Telescope 实例同步数据。

[ASCII Tree Generator](https://obsidian.md/plugins?id=ascii-tree-generator) By _Matěj Michálek_

> 将带有层次标记的缩进代码块转换为格式化的 ASCII 树形图。

[Manual Sorting](https://obsidian.md/plugins?id=manual-sorting) By _Kh4f_

> 通过拖放操作在文件资源管理器中进行手动排序。

![Weekly-2025-03-09-411944502-f3d164ce-2dba-4184-a781-7185b79c710f|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-411944502-f3d164ce-2dba-4184-a781-7185b79c710f.gif!pkmer)

[Content Cards](https://obsidian.md/plugins?id=content-cards) By _leo_

> 在 Markdown 中插入内容卡片，如时间轴、高亮块、目标卡、书籍信息卡、音乐信息卡、电影信息卡、相册、名片、内容子字段、倒计时等。

![Weekly-2025-03-09-Pasted image 20250305182547|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250305182547.png!pkmer)

[VaultSync](https://obsidian.md/plugins?id=vault-sync) By _Justin Bird_

> 将您的库链接到云服务供应商。目前仅支持 Dropbox。

[Asana](https://obsidian.md/plugins?id=asana) By _Ryan Bantz_

> 从选中文本或当前行创建 Asana 任务。

[Vision Recall](https://obsidian.md/plugins?id=vision-recall) By _Vision Recall_

> 利用 AI 视觉和文本分析，将屏幕截图转换为可搜索的笔记。

![Weekly-2025-03-09-Pasted image 20250305181702|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250305181702.png!pkmer)

[Cursor Position History](https://obsidian.md/plugins?id=cursor-position-history) By _Florian Gubler_

> 记住不同文件中的光标先前位置：在新文件中自动滚动到正确位置。前后浏览光标位置历史记录，且不会丢失上下文。

[Title As Link Text](https://obsidian.md/plugins?id=title-as-link-text) By _Lex Toumbourou_

> 自动将链接文本转换为从文件属性、H1 标题或文件名中找到的最佳标题。

[Task Mover](https://obsidian.md/plugins?id=task-mover) By _Mariia Nebesnaia_

> 自动查找笔记中未完成的任务，并将它们整合到一条每日笔记中。可按原始文件或主题对任务进行分组，以及收集周边信息并将其与任务一起移动。

[Infio Copilot](https://obsidian.md/plugins?id=infio-copilot) By _duanfuxiang0_

> 一个受 Cursor 启发的笔记 AI 助手，提供智能自动补全以及与所选笔记进行互动聊天的功能。

#### 更新

[Vertical Tabs v0.15.1](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.15.1) By _oxdc_

> - **新增内容**
>     - **新图标**：Vertical Tabs 全新外观！
>     - **算法改进**：优化了 “Notebook” 和 “Explorer” 导航策略。
>     - **键盘切换标签页体验增强**：水平标签页中现在会显示标签页编号。
>     - **体验更流畅**：“Open Vertical Tabs” 命令不再触发动画效果。
> - **注意**
> 	- Vertical Tabs 正在进行一次重大重构，因此 Bug 修复和新功能发布将会较慢。此次重构对于提升性能和稳定性至关重要。如果更新后遇到任何问题，请在 [GitHub](https://github.com/oxdc/obsidian-vertical-tabs/issues/new/choose) 上报告。

![Weekly-2025-03-09-Pasted image 20250312225152|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250312225152.png!pkmer)

[Task Board v1.3.0](https://github.com/tu2-atmanand/Task-Board/releases/tag/1.3.0) By _Atmanand Gauns_

> - **重大新功能**
>     - **任务状态：** 新增任务状态属性，类似于 [Tasks 插件](https://publish.obsidian.md/tasks/Getting+Started/Statuses/About+Statuses) 的实现方式。
>     - **更强的兼容性：** Task Board 现在可以兼容所有自定义任务格式，不再局限于使用管道符 (`|`) 分隔任务属性（元数据）。你可以按照自己的方式书写任务，Task Board 会保持原有格式。
>     - **确认弹窗：** 在编辑任务窗口中添加属性后，如果意外关闭窗口但未保存，将弹出确认提示。
>     - **复选框支持表情符号：** 任务状态的复选框支持表情符号，特别感谢 [@ITS-Theme](https://github.com/SlRvb/Obsidian--ITS-Theme) 提供的 [自定义复选框 CSS 代码片段](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Snippets/S%20-%20Checkboxes.css)。
>     - **优化 Tasks 插件集成：** 现在可以使用相同的选项来设置任务状态。
>     - **任务卡片优化：** 新增选项，可隐藏任务标题中的元数据，使任务卡片界面更简洁。
>     - **新增命令：** 便捷访问“扫描 Vault 窗口”。
> - **错误修复**
>     - 修复日期列无法正确分类任务的问题，导致任务日期偏移一天。
>     - 修复 [#119](https://github.com/tu2-atmanand/Task-Board/issues/119) 讨论的所有错误。
>     - 修复任务优先级检测错误。
>     - 修复 `zh-CN` 语言因语言代码映射不匹配而无法正确识别的问题。
> - **其他更新**
>     - 更改日期列范围的工作方式，不再支持无限范围。[参考文档](https://tu2-atmanand.github.io/task-board-docs/docs/Components/Types_Of_Columns/#dated)
>     - 改进任务卡片的切换按钮和描述区域。
>     - 优化复选框动画效果。
>     - 更新多个函数的属性。
>     - Task Board 现在使用 [Obsidian Typings](https://fevol.github.io/obsidian-typings/) 提供更好的 API 支持。
>     - 改进全新安装时的欢迎界面，提供更清晰的指引。
>     - 调整任务卡片边框颜色，使其更柔和。
>     - 任务到期日属性现在支持 _2025-03-07_ 和 _07-03-2025_ 两种格式。
>     - 视图加载时增加加载动画。
>     - 改进 `es.ts` 语言翻译。
>     - 改进 `zh-CN.ts` 语言翻译。

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Zettel Status Sidekick](https://github.com/Caffa/zettel-status-sidekick/tree/1.0.1) By _Caffa_

> 提供一个便捷的侧边面板，基于一系列可自定义的检查项显示当前笔记的状态。它旨在成为笔记工作流程的可视化辅助工具，特别适用于 Zettelkasten 方法。该插件会检查你定义的各种标准，例如笔记长度、标签是否存在、是否链接到其他笔记等，从而快速概览笔记的“完成度”。你可以根据自己的笔记整理流程配置这些检查项，一目了然地查看哪些笔记需要进一步完善，哪些笔记已经可以视为知识体系中的永久性内容。

![Weekly-2025-03-09-Pasted image 20250312165703|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250312165703.png!pkmer)

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Editing Toolbar 迎来大版本更新
![image.png](https://cdn.pkmer.cn/images/202503130031442.png!pkmer)
![image.png](https://cdn.pkmer.cn/images/202503130033157.png!pkmer)


##### ✨新功能

- 一键添加自定义命令到工具栏
- 自定义命令功能
- 支持 Callout 格式擦除
- Markdown 指令格式刷
- 支持 Canvas 视图
- 支持 meld-encrypted-view 视图
- 插入 Callout 弹窗
- 对 Excalidraw 的支持
- 图片解析预览
- 智能解析外部链接（图片）
- 剪贴板链接自动解析命令（Insert Link(Modal)）
- 智能解析文本中的链接、标题及别名，并转换为 Markdown 格式
- 修改字体颜色设置逻辑
##### ⚡ 优化

- 优化 Pickr 内存占用
- 设置项改版
- 移动端体验优化
- 智能解析外链图片的宽高
- 自定义命令光标定位逻辑（偏移量大于 0 时才生效）
- 更新 manifest.json 和 styles.css

##### 🛠️ 修复

- 修复编辑器光标失焦问题
- 修复部分命令报错
- 修正拼写问题

##### 🗑️ 清理

- 删除冗余文件

##### 🔨 重构

- 代码结构优化与重构

##### ⚠️ 注意事项

**更新后需点击弹窗中的“修复命令”按钮，以确保旧命令兼容性。**



## 外观

[**FastPpuccin** Theme](https://github.com/LostViking09/obsidian-fastppuccin) By _LostViking09_

![Weekly-2025-03-09-Pasted image 20250309131302|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250309131302.png!pkmer)

> FastPpuccin 是广受欢迎的 AnuPpuccin 主题的精简版，设计时充分考虑了性能。它保留了原版的美观性，同时删除了大部分功能和配置，以实现最大速度。

[**aged whisky** Theme](https://github.com/incantatem2/Obsidian-aged-whisky) By _incantatem2_

![Weekly-2025-03-09-Pasted image 20250305200941|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250305200941.png!pkmer)

> 优雅、简约的深色主题。

[**Vercel Geist** Theme](https://github.com/en3sis/vercel-obsidian) By _en3sis_

![Weekly-2025-03-09-Pasted image 20250305200846|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250305200846.png!pkmer)

> 简洁、现代的 Geist 主题，灵感来自 Vercel 的设计系统，具有暗色和亮色模式。

[**LessWrong** Theme](https://github.com/outsidetext/lesswrong-obsidian) By _henry_

![Weekly-2025-03-09-Pasted image 20250305200505|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250305200505.png!pkmer)

> 这是一款将理性主义论坛 [LessWrong 2.0](https://lesswrong.com/) 的风格带入 Obsidian 的主题。

[**Retro Windows** Theme](https://github.com/codeisconfusing/retro-windows-obsidian) By _codeisconfusing_

![Weekly-2025-03-09-Pasted image 20250305200237|650](https://cdn.pkmer.cn/images/Weekly-2025-03-09-Pasted%20image%2020250305200237.png!pkmer)

> 给你的笔记带来一段怀旧之旅，回到 1990 年代初的计算机时代。这个主题重现了经典的 Windows 3.1 美学，拥有标志性的灰色界面、3D 效果按钮以及像素风格的魅力。它提供浅色和深色两种版本，将复古的视觉吸引力与现代笔记功能相结合。非常适合热爱计算机历史或只是想要获得独特、视觉上与众不同的 Obsidian 体验的用户。
