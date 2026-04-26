---
uid: 20260426165613
title: Obsidian Weekly 2026-04-25：Deck 革新卡片复习，微信阅读主题系统上线
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-04-25：Deck 革新卡片复习，微信阅读主题系统上线
author: 熊猫别熬夜,淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20260426180150
---

# Obsidian Weekly 2026-04-25：Deck 革新卡片复习，微信阅读主题系统上线

> [!tip]+
> 统计时间：2026-04-18 21:00 ~ 2026-04-25 21:00
> 声明：本栏目灵感来源于 Eleanor Konik 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 GitHub 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件更新

#### 🧩Anki 卡片、卡片复习

[Decks](obsidian://show-plugin?id=decks) 作者：Xherdi Lika

> **1.6.3**
> 基于标签页的复习和浏览模式
>
> - 复习和浏览会话现在可以在新标签页中打开，而不是模态覆盖层
> - 标签页可以拖动到侧边栏、底部面板或独立窗口，以实现灵活定位
> - 一次只能有一个复习标签页——点击另一个牌组会重用现有标签页
> - 标签页标题动态更新以显示牌组名称和模式（复习或浏览）
> 设置
> - 在用户界面下添加了 " 复习显示模式 " 设置，用于在模态覆盖层和新标签页之间切换

[Simple Anki Sync](obsidian://show-plugin?id=simple-anki-sync) 作者：Lukas Mayr

> **1.6.0**
> 此版本在同步管道中添加了两种新的媒体类型，并清理了一个长期存在的编辑器问题。
> **✨ 新增功能**
>
> - 🔊 音频嵌入 → Anki 声音标签
> - 支持所有 Obsidian 识别的音频格式：`flac`, `m4a`, `mp3`, `ogg`, `wav`, `webm`, `3gp`。
>
> **🎨 部分 Excalidraw 嵌入**
>
> - 支持的片段语法：
>   - `![[drawing.excalidraw.md#^group=<id>]]`
>   - `![[drawing.excalidraw.md#^area=<id>]]`

[Better Recall](obsidian://show-plugin?id=better-recall) 作者：FlorianWoelki

> **0.0.4**
> 用户可见的变更
>
> - feat: 添加对 FSRS 实现的支持 ()
> - feat: 添加在设置中更改调度算法的能力
> - feat: 如果数据中没有牌组，则添加默认牌组 ()
> - refactor: 调换 " 困难 " 和 " 一般 " 按钮的位置
> - fix(ui): 复习视图中边框颜色的问题
> - fix(ui): 模态框中文本收缩的问题 ()
> - fix: 删除卡片时更新学习和到期卡片计数的问题

#### 📚 阅读、书架与导入

[Weread Plugin](obsidian://show-plugin?id=obsidian-weread-plugin) 作者：hank zhao

> **1.4.0**
>
> **主题管理功能上线**
> 微信读书插件 v1.4.0 正式发布，本次更新带来了全新的主题管理功能，让笔记模板更灵活可控。
>
> **新增功能**
> **主题管理系统**
>
> - 内置三种主题模板：合并式模板（划线与想法 inline 展示）、分离式模板（划线与笔记分离）、微信官方笔记主题（详细元数据）
> - 支持创建自定义主题，复制内置主题后自由编辑
> - 支持导入/导出主题，可从本地文件或 URL 导入社区主题
> - 自动检测并迁移现有用户的自定义模板为「旧模板」主题
>
> **书架体验优化**
>
> - 新增「默认书架状态」设置，可预设初次打开书架时的筛选条件（全部/已同步/仅远程/仅本地）
> - 未登录用户打开书架时显示引导提示
>
> **桌面端功能增强**
>
> - 设置页面新增「Copy Cookie」按钮，一键复制当前 Cookie 便于调试

[Notebook Navigator](obsidian://show-plugin?id=notebook-navigator) 作者：Johan Sanneblad

> **2.6.1**
> **新增**
>
> - 列表窗格中标题和预览文本的可变行高！如果您为标题或预览选择了 2 行或更多行，但内容较少，笔记现在将显示时不留空白间距。
> - 新样式设置：日历 > 活动日轮廓粗细。
> - 新设置：常规 > 主页 > 如果缺失则创建笔记。启用后，如果启动时缺少每日、每周、每月、每季度或每年笔记，将自动创建。
>
> **改进**
>
> - 导航树现在在多选标签和属性时（使用 command 或 shift + command）显示 AND/OR 图标。
> - 您现在可以选择在列表窗格中显示最多 3 行标题。

[KoReader Highlight Importer](obsidian://show-plugin?id=koreader-highlights-importer) 作者：Tahsin Kocaman

> **1.4.5**
> **新增**
>
> - 添加了从备份恢复笔记的功能。
> - 您现在可以从以下位置恢复高亮笔记（适用于您配置的高亮文件夹内的文件）：
> - 文件上下文菜单（恢复 KOReader 备份），
> - 编辑器菜单，或
> - 命令面板（KOReader：从备份恢复笔记）。
> - 添加了一个恢复对话框，包含：
> - 备份选择列表，

#### 🗓️ 日历视图与时间线

[Sheet Plus](obsidian://show-plugin?id=sheet-plus) 作者：ljcoder

> **2.10.0**
> **新增功能** 日历视图
> ![2026-04-25-Obsidian Weekly](https://cdn.pkmer.cn/images/File-20260426125346257.png!pkmer)

[Persian Calendar](obsidian://show-plugin?id=persian-calendar) 作者：Hossein Maleknejad

> **4.5.1**
>
> - 您可以在脚本中使用波斯日历插件的专用 API。
> - 您可以将插件语言更改为波斯语或英语（默认为英语）
> - 现在您可以使用日期选择器 (datepicker) 在笔记中选择波斯历日期。
> - 现在波斯日历的事件库比以往任何时候都更丰富。
> - 为逊尼派用户提供了逊尼派事件以及将回历日期更改为乌姆·库拉历的可能性。
> - 用户可以通过设置，将回历日期基于沙特阿拉伯的乌姆·库拉历或伊朗的 Estelal 中心。
> - 改进了日历事件标题的文本

[Easy Timeline](obsidian://show-plugin?id=easy-timeline) 作者：Romeliun

> **2.2.1**
> **🐛 问题修复**
>
> - 阅读视图 & 嵌入：修复了当设置在阅读视图或嵌入笔记中查看时间线时，直接放置在代码块语言行上的设置（例如，` ```timeline sort:desc `）被忽略的问题。
> - 缩进的代码块：修复了时间线块在缩进时（例如，放置在列表、块引用或 callout 中）无法正确渲染或解析的问题。

[Radial timeline](obsidian://show-plugin?id=radial-timeline) 作者：Eric Rhys Taylor

> **6.0.0**
> Radial Timeline 6.0.0
> 这是一个从 `5.0.2` 到 `6.0.0` 的重大汇总版本。
>
> **亮点**
>
> - 添加了 Inquiry，这是继时间线之后的第二个主要视图，用于跨书籍或传奇故事进行大局手稿分析，包含字形、小地图、语料库控件和结构化提示工作流。
> - 添加了作者进度报告 (APR) 系统，用于无剧透的进度图表，具有自定义样式、导出控件、揭示选项和专业版活动工作流。
> - 扩展了故事结构和笔记管理，包括场景、节拍和背景属性编辑器，自定义节拍系统，保存的节拍集，背景和微背景环。
> - 扩展并改进了几个核心的面向作者的模式对话框和引导式工作流，包括书籍设计器、创建笔记…、管理副线情节和手稿导出。
> - 在叙事模式中添加了拖放排序功能，带有可选的涟漪式重命名、最近移动的叠加层和持久的移动历史日志，使结构编辑更易于跟踪和审计。

#### 🏷️ 标签、片段与附件整理

[Tag Timer](obsidian://show-plugin?id=tag-timer) 作者：quantavil

> **2.2.0**
> 更新日志: Tag Timer v2.2.0
> 🔴 可靠性 & 问题修复
>
> - 失效的上下文菜单操作：修复了如果在菜单打开时文件被编辑，上下文菜单操作（开始/停止/移除）使用过时行位置的关键错误。现在在点击时动态重新解析行。
> - 图标准确性：将插件图标与文档对齐。
> - `⌛` (流动的沙漏) 用于运行中
> - `⏳` (固定的沙漏) 用于已暂停
> - `⏹️` (停止方块) 用于已停止
> - 设置 UI 布局：修复了旧版的 `.setHeading()` 用法；现在使用标准 DOM 元素以获得更清晰的设置选项卡。

[Tag Group Manager](obsidian://show-plugin?id=tag-group-manager) 作者：Stargazer-cc

> **1.8.12**
> 🎯 重大改进：标签重命名与删除功能全面升级
>
> - 新增批量删除标签功能：新标签名留空即可执行删除操作
> - 自动检测子标签：智能识别是否存在子标签
> - 两种删除模式：
>   - 级联删除（推荐）：同时删除所有子标签，保持结构完整
>   - 仅删除此标签：保留子标签（会显示孤儿标签警告）

[Snippets Manager](obsidian://show-plugin?id=snippets-manager) 作者：Venkatraman Dhamodaran

> **1.1.7**
> ✨ 新增内容
>
> - 多个片段位置：您现在可以在插件设置中提供逗号分隔的文件夹或文件列表。该插件将聚合所有活动位置的片段，允许您将片段拆分为不同的工作区！
> - 标签支持：引入了新的 `片段标签` 设置。输入逗号分隔的标签（例如 `#snippet, #templates`），插件将动态发现您 vault 中包含这些标签的任何 Markdown 文件，并获取其片段。
> - 路径前缀切换：添加了 `显示完整文件夹路径作为前缀` 设置。您现在可以选择在搜索模态框中从片段名称中去除长目录路径，只留下清晰的文件名。
> 🧹 维护与清理
> - 移除了 ChatGPT 提示同步功能：删除了 " 同步 Awesome ChatGPT 提示 " 命令，以精简插件并严格专注于核心的文本扩展功能。
> - 更新了文档：`README.md` 已彻底修改，以解释新的多路径语法和标签结构。
> - 非常感谢社区对这些功能的讨论和反馈！\*

[Unique attachments](obsidian://show-plugin?id=unique-attachments) 作者：Dmitry Savosh

> **1.0.4**
> 新功能：仅重命名活动附件

#### 🤖 AI 与自动化

[YOLO](obsidian://show-plugin?id=yolo) 作者：Lapis0x0

> **1.5.5.9**
>
> ** DeepSeek V4 支持 & Agent 工作区 🚀**
> - DeepSeek V4 支持：完全适配 DeepSeek V4 的思维模式。统一的推理努力级别现在能正确映射到 V4 的 `reasoning_effort` 和 `thinking` 参数。
> - Anthropic 提示缓存：为 Anthropic 提示缓存添加了一个开关。您现在还可以看到直接在消息信息栏中显示的缓存命中输入令牌。
> - Agent 工作区范围 ()：为 Agents 添加了 " 工作区 " 配置，允许您将 Agent 的文件读写活动限制在特定文件夹内。
> - 模型输入模态 ()：修复了非视觉模型在读取包含图像的 Markdown 文档时失败的 400 错误。在模型设置中添加了输入模态切换（文本 / 图像），以进行精确的能力声明。
>
> **✨ UI & UX 改进**
> - 快速提问自动聚焦：修复了从文本选择（例如，使用 " 自定义提示 "）触发快速提问时，输入字段未自动聚焦的问题，该问题需要额外的点击才能开始输入。

[Nova](obsidian://show-plugin?id=nova) 作者：Shawn Duggan

> **1.5.4**
>
> **问题修复**
> - Claude Opus 4.7 现在可以正常工作了。1.5.3 版本将 Opus 4.7 添加到了模型选择器中，但 Anthropic 取消了对此模型的 `temperature` 参数支持，因此每个请求都返回 400 错误。Nova 现在对 Opus 4.7 的请求会忽略 `temperature`，同时为其他所有模型保留它。
> - 从选择器中移除了 GPT-5.5。它在 1.5.3 中被列出以预期发布，但 OpenAI 尚未通过 API 提供该模型。当该模型发布时，它将重新添加。

[deepseek-ai-assistant](obsidian://show-plugin?id=deepseek-ai-assistant) 作者：algernon

> **2.3.0**
>
> 1. 基于 v2.2.0 中新增的：使用 @ 来引用当天问出的内容作为提问上下文，在 v2.3.0 中又新增了 Follow-up 卡片，可以在 ai 回答内容中选择文本，基于选中的文本继续 " 追问 "
> 2. 优化了 UI 和布局：新增顶部面包屑导航栏等

[Note Companion AI](obsidian://show-plugin?id=fileorganizer2000) 作者：Benjamin Ashgan Shafii

> **3.6.17**
>
> 精炼的界面呈现 & 更智能的 YouTube 导入
> 技术变更
>
> - 大幅扩展和优化了插件的 CSS，引入了数百个用于布局、间距、颜色、排版和可访问性的新工具类。这使得整个侧边栏和组织器标签页的 UI 更加精美、一致且响应迅速。
> - 通过新的 .sr-only 和 focus/hover/disabled 状态样式改进了可访问性，使插件更易于所有人使用。
> - YouTube 视频笔记导入逻辑现在会提取并在笔记 frontmatter 和笔记正文中新的 '## 频道 ' 部分显示频道/上传者名称，确保频道信息始终可见且一致。
> - 如果 YouTube 视频缺少频道信息，笔记现在会清楚地指出这一点或省略该部分，以减少混淆和杂乱。
> - 对导入的 YouTube 笔记的结构和清晰度进行了全面改进，包括更好地处理频道和日期元数据。
> SHA-256 校验和

[Steward](obsidian://show-plugin?id=steward) 作者：Dang Nguyen

> **2.7.2**
>
> 改进嵌入重新挂载时的 xterm 状态保留
> 使用 @xterm/addon-serialize 替换了 ptyScrollback，实现正确的 xterm 序列化。
> 这捕获了完整的终端状态（屏幕内容、光标位置、滚动偏移），
> 而不仅仅是原始 PTY 输出，在导航离开并返回交互式 CLI 嵌入时提供了更好的用户体验。
> 完整更新记录: <https://github.com/googlicius/obsidian-steward/compare/2.7.1...2.7.2>

#### ✅ 任务、复习与看板

[Task Board](obsidian://show-plugin?id=task-board) 作者：Atmanand Gauns

> **1.10.2**
> **增强 ⭐**
>
> - 看板配置模态框中列配置字段的用户体验得到了极大增强，提供了更好的工具提示、占位符和指示符，由 @CrazyTim71 完成。
>
> **问题修复 🛠**
>
> - Frontmatter 标签继承功能未按预期工作。| 已修复 ✅
> - 任务卡片 UI 中子任务的缩进在新的 vault 中不显示，并且对于任务笔记来说不正确。
> - 标签在看板泳道功能中未被视为不区分大小写。

[Tag Timer](obsidian://show-plugin?id=tag-timer) 作者：quantavil

> **2.2.0**
> 更新日志: Tag Timer v2.2.0
> 🔴 可靠性 & 问题修复
>
> - 失效的上下文菜单操作：修复了如果在菜单打开时文件被编辑，上下文菜单操作（开始/停止/移除）使用过时行位置的关键错误。现在在点击时动态重新解析行。
> - 图标准确性：将插件图标与文档对齐。
> - `⌛` (流动的沙漏) 用于运行中
> - `⏳` (固定的沙漏) 用于已暂停
> - `⏹️` (停止方块) 用于已停止
> - 设置 UI 布局：修复了旧版的 `.setHeading()` 用法；现在使用标准 DOM 元素以获得更清晰的设置选项卡。

#### ✏️ 编辑、格式化与链接

[Easy Copy](obsidian://show-plugin?id=easy-copy) 作者：Moy

> **1.5.3**
> **变更**
> ✨ 新增功能
>
> - 在链接简化设置下添加了 " 严格标题匹配 " 选项。禁用时（默认），文件名包含标题作为子字符串也将被简化（例如 "260422_note" → "note"）。启用时，只有精确匹配才会被简化。
> - 标题链接现在能正确处理特殊字符 (`# | ^ : %% [[ ]]`) —— 与 Obsidian 的自动补全行为一致
> - 修复了当文件名包含标题作为子字符串时（例如 "JavaScript" + "Java"），笔记链接被误简化的误报情况
> ♻️ 重构
> - 将链接构建逻辑提取到纯函数中，以获得更好的可测试性

[Pandoc Extended Markdown](obsidian://show-plugin?id=pandoc-extended-markdown) 作者：ErrorTzy

> **1.6.0**
> 自 1.5.0 以来的变更:
>
> - 添加了 Obsidian ESLint 集成和一个文档化的预提交 lint 检查。
> - 重新组织了设置部分，并添加了列表功能切换。
> - 添加了有序列表标记循环和无序列表标记顺序设置。
> - 改进了无序标记的渲染和循环行为。
> - 修复了一个 Lua 过滤器错误。

[Formatto](obsidian://show-plugin?id=formatto-format) 作者：Deca

> **1.3.2**
>
> - 您现在可以使用 " 格式化当前文件夹中的笔记 " 功能区操作和命令来格式化整个文件夹及其子文件夹中的文档。

[Hoarder Sync](obsidian://show-plugin?id=hoarder-sync) 作者：Jordan Hofker

> **2.0.0**
> **概述**
>
> - 自定义笔记模板 — 完整的 Eta 模板引擎支持，用于自定义书签笔记布局（frontmatter 字段、正文部分、排序）。默认模板是先前硬编码格式化程序的直接替代品（零破坏性更改）。
> - CodeMirror 6 模板编辑器 — 在设置中使用 Obsidian 已捆绑的 CM6（零捆绑开销）进行语法高亮模板编辑。高亮 Eta 标签、YAML 键和 Markdown 标题。
> - 语义同步比较 — 文件重写不再因仅格式更改（空白字符、字段重新排序）而触发。Frontmatter 被逐键解析和比较；仅当内容实际不同时才更新 mtime。关闭。
> - 正确的附件扩展名 — 资源文件扩展名现在根据 HTTP Content-Type 标头（优先）、资源标签、然后是 URL 来解析。每种类型的下载开关，用于横幅、屏幕截图、PDF 档案和全页档案。关闭。

[Smart Link Formatter](obsidian://show-plugin?id=smart-link-formatter) 作者：ccmdi

> **1.4.3**
>
> - 添加 " 格式化所有链接 " 命令，默认格式化文件中的所有链接，如果该文件中有任何选中的内容，则格式化所有选中的链接
> - 当找不到占位符时，不再完全丢弃粘贴的链接，而是优先粘贴到用户光标处

[Canvas2Document](obsidian://show-plugin?id=canvas2document) 作者：slnsys

> **1.3.2**
> 转换模式 - 部分画布
>
> - 修复了选择文件节点时画布检测中的错误

[Print](obsidian://show-plugin?id=print) 作者：Marijn Bent

> **0.5.3**
>
> - 修复了当渲染的文档基于画布时的 PDF 打印问题。
> - 在打印 iframe 和调试预览中保留了渲染的页面。

#### 🔐 加密、同步与备份

[Eccirian Encrypt](obsidian://show-plugin?id=eccirian) 作者：Entropiex

> **1.0.13**
>
> - 为加密目标添加了覆盖确认和同名检查。
> - 改进了永久加密编辑器锁定/解锁的用户体验。
> - " 切换文件扩展名 " 默认隐藏。
> - 改进了设置中 " 查看 Github 仓库 " 模态框的布局。
> - 扩展了命令、通知、锁定屏幕文本、冲突对话框和设置模态操作的国际语言（i18n）覆盖范围。
> - 优化了加密视图激活和 Markdown 视图回退的工作区叶子路由。
> - 将覆盖确认 UI 统一到一个共享的模态组件中，用于转换/解密流程。

[Sync Vault CE](obsidian://show-plugin?id=sync-vault-ce) 作者：Camus Qiu

> **1.13.0**
>
> - 新增：为 Obsidian CLI 自动化添加了 Sync Vault CLI 命令 (`sync-vault:help/list/search/read/info/doctor`)。
> - 新增：`search` 现在支持分页 (`limit/offset`) 和过滤器 (`path/type`)，并带有 `hasMore/nextOffset` 用于继续。
> - 新增：`list` 现在支持分页、类型过滤器、最小大小、修改时间过滤器和递归列出。
> - 新增：添加了 `doctor` 命令，包含结构化诊断（同步状态、最近的错误、健康评分）。
> - 改进：`info` 现在返回标准化字段 (`schemaVersion/ok/statusCode/warnings`)，供脚本和代理使用。
> - 改进：优化了用于 search/list 的 MCP ToolHandler 输出，以提高跨云的可观察性和自动化程度。
> - 修复：`search help=true` 不再因必需参数验证而失败。
> - 修复：修复了在空关键字情况下阿里云类别搜索查询构建的问题（避免了来自 `name match ''` 的错误空结果）。

[Hoarder Sync](obsidian://show-plugin?id=hoarder-sync) 作者：Jordan Hofker

> **2.0.0**
> **概述**
>
> - 自定义笔记模板 — 完整的 Eta 模板引擎支持，用于自定义书签笔记布局（frontmatter 字段、正文部分、排序）。默认模板是先前硬编码格式化程序的直接替代品（零破坏性更改）。
> - CodeMirror 6 模板编辑器 — 在设置中使用 Obsidian 已捆绑的 CM6（零捆绑开销）进行语法高亮模板编辑。高亮 Eta 标签、YAML 键和 Markdown 标题。
> - 语义同步比较 — 文件重写不再因仅格式更改（空白字符、字段重新排序）而触发。Frontmatter 被逐键解析和比较；仅当内容实际不同时才更新 mtime。关闭。
> - 正确的附件扩展名 — 资源文件扩展名现在根据 HTTP Content-Type 标头（优先）、资源标签、然后是 URL 来解析。每种类型的下载开关，用于横幅、屏幕截图、PDF 档案和全页档案。关闭。

#### 🎛️ 导航、界面调整

[Nav Link Header](obsidian://show-plugin?id=nav-link-header) 作者：ahts4962

> **2.8.0**
> **改进**
>
> - 重新设计了设置 UI 以提高可读性（@Moyf）。
> - 添加了中文 (zh-CN) 本地化（@Moyf）。
>
> **Bug 修复**
>
> - 修复了当存在重复字符串时，导航标题中未显示置顶笔记内容的问题。

[Custom Note Width](obsidian://show-plugin?id=custom-note-width) 作者：0skater0

> **2.1.0**
> **新增**
>
> - 药丸控制模式 — 状态栏中滑块的替代方案。三个可配置的预设按钮，用于即时宽度切换 ()。
> - 药丸命令 — `应用药丸预设 1/2/3`，可通过 设置 → 快捷键 绑定。仅在启用药丸模式时有效。
> - 活动预设高亮 — 与当前应用宽度匹配的药丸在视觉上处于活动状态，并在切换笔记时自动同步。
> - `CONTRIBUTING.md`, `CHANGELOG.md`, Pull Request 模板, `FUNDING.yml` 用于更结构化的贡献工作流。
> **变更**
> - 控制模式可在 _设置 → 自定义笔记宽度 → 控制模式_ 下选择。默认值为 _滑块_ — 现有用户在未选择前不会看到可见变化。
> - 在药丸模式下，文本字段和单位选择器会被隐藏，因为预设自带单位。

#### 🖼️ 媒体与资源处理

[Inkporter](obsidian://show-plugin?id=inkporter) 作者：Ayush Kumar Saroj

> **3.0.0**
> 重大新增功能
>
> - 交互式服务器仪表板：一个新的控制面板已直接添加到插件设置中。您现在可以实时监控后台 API 服务器，并拥有显式控件来启动、停止或重启引擎，而无需重启 Obsidian 本身。
> - 矢量化处理（大幅加速）：我们重写了核心图像提取算法。神经网络现在以并行批次的方式处理图像块，而不是一次分析一个图像块。仅此一项改变，就将处理一张图像所需的时间从大约 7 秒减少到平均不到 2 秒。
> 系统管理
> - 硬件自动检测：安装程序现在会自动在后台检查 NVIDIA 图形驱动程序。如果未找到，安装程序会自动回退到轻量级、CPU 优化的 PyTorch 版本，避免您不必要地下载 2.5GB 不兼容的数据。
> - 全局依赖链接：安装程序现在使用 --system-site-packages 标志创建您的虚拟环境。如果您已在计算机上全局安装了包含 PyTorch 的 Python 环境，Inkporter 将识别并重用它们，而不是从头开始重新下载所有内容。
> - 内存管理：添加了一个全局清理监听器。后台服务器进程现在与 Obsidian 的生命周期紧密集成，这意味着 Python 引擎将在您关闭应用程序时安全地自行终止，防止孤立进程逗留在您计算机的后台内存中。

#### ✨ 有趣的插件

[Pixel Pets](obsidian://show-plugin?id=pixel-pets) 作者：Lucas Jin

> **1.5.1**
>
> - 修复了名称反向 + 宠物月球漫步的问题（在 Windows 中将 --scale 和 --scale-x 注册为数字以进行正确构建）
> - 修复了宠物视图与其他视图（例如搜索视图）相交的问题
> - 修复了在调整视图大小时宠物不重新渲染并卡在原位的问题
> - 修复了启用覆盖层时的拖动问题

[Chessboard Viewer](obsidian://show-plugin?id=obsidian-chessboard) 作者：Davide Aversa

> **0.16.0**
> **新增**
>
> - ⭐ 为 PGN 图表添加 `orientation` 参数。类似于 FEN 棋盘，您现在可以翻转棋盘的视角。感谢 Mario Mui (@mariomui) 提交的此 PR。
> **修复**
> - 修复了使用共享设置渲染棋盘时可能出现的竞争条件。
> - 添加了保护措施以更优雅地处理格式错误的内容。

## PKMer 出品

[Media Extended](obsidian://show-plugin?id=media-extended) By AidenLx

> - **亮点**
>     - 媒体库 — 在基于 Bases 的库视图中浏览所有媒体笔记，支持搜索、过滤，并从 YouTube 自动填充元数据。
>     - 网页查看器 — YouTube、Vimeo、Coursera、bilibili 和百度网盘现可在 Obsidian 内运行，提供完整的时间戳、截图、转录下载控件。
>     - 转录段落模式 — 可读的段落视图，具有自动滚动、搜索和每个选项卡独立的切换选项。
> - **重大变更**
>     - Electron 与守护进程：需要 Obsidian 安装程序 1.11.4+，主守护进程现已独立分发。
>     - 命令与操作栏重命名：多项命令已重命名（原有快捷键保留）。
>         - `Insert screenshot to note` → `Insert timestamped screenshot to note`
>         - `Insert clipped screenshot to note` → `Clip and insert timestamped screenshot to note`
>         - `Take timestamp` → `Insert timestamp snippet to note`
>         - `Copy clipped screenshot` → `Clip and copy screenshot`
>         - `Save clipped screenshot` → `Clip and save screenshot`
>         - `Set clipped screenshot as media cover` → `Clip and set screenshot as media cover`
>         - `Open related media` → `Open linked media`
>         - `Add to media library` → `Add media note to library`
>     - 模板设置重组：设置名称已围绕纯/时间戳划分进行重命名（原值保留）。新增 `Screenshot embed text` 设置控制纯截图嵌入别名。每个设置描述现在明确指出其对应命令。
>     - 转录默认布局：字幕选项卡现默认以转录（段落）模式打开（可在 设置 > 转录 > 字幕选项卡默认视图 中改回）。
>     - 纯与带时间戳插入分离：插入命令分为两种。_ 带时间戳插入 _ 生成带注释的包装块，始终换行显示。_ 纯文本插入 _ 仅插入链接/嵌入，内联显示，遵循插入位置设置，并保留选中文本。
> - **媒体库**
>     - 在一个可搜索、可过滤的库视图中浏览所有媒体笔记。
>     - 从 YouTube 嵌入创建媒体笔记时，自动填充标题、描述、创作者、时长、封面、标签、观看次数等元数据。
>     - 修复了移动/重命名媒体笔记后封面图片偶尔错误的问题。
>     - 修复了从库视图打开媒体时忽略链接点击偏好的问题；修饰键和 Alt+ 点击现遵循您的链接行为设置。
> - **网页查看器**
>     - YouTube、Vimeo、Coursera、bilibili 和百度网盘现可在 Obsidian 内运行，并支持完整控件。
>     - 登录命令在网页查看器可用后立即显示。
>     - 修复了部分设备上网页查看器集成失败的问题。
>     - 修复了页面加载缓慢时 YouTube 嵌入播放偶发失败的问题。
> - **转录**
>     - 段落模式将字幕合并为流式段落，支持自动滚动、可点击时间戳，以及每选项卡独立的切换（转录/字幕模式、时间戳栏、高亮当前词）。
>     - 在聚焦转录选项卡时按 Ctrl/Cmd+F 或使用窗格菜单进行搜索；搜索期间自动滚动暂停。
>     - 点击未同步的转录选项卡中的时间戳，将打开关联媒体并跳转。
>     - 转录模式现为字幕选项卡的默认布局（可更改）。
>     - 修复了切换媒体源后播放器标题/布局显示旧信息的问题。
> - **时间戳与截图插入**
>     - 命令已拆分为纯和带时间戳两种（见重大变更）。
>     - 新增纯插入命令：`Add timestamp link to note`、`Add screenshot to note` ——保留选中内容，遵循插入位置。
>     - 带时间戳截图模板新增 `{{SCREENSHOT_LINK}}` 占位符，点击图片可跳转到截图时刻。
>     - 编辑器右键菜单（媒体）可快速访问时间戳链接、截图嵌入、剪辑截图及其带时间戳版本。
> - **复制时间戳格式**
>     - “复制带时间戳的 URL”改为 **复制时间戳为** 子菜单，提供七种格式：仅时间、URL、富文本链接、Markdown，每种都有“（在 Obsidian 中打开）”变体，使用 `obsidian://` 链接。
> - **媒体笔记管理**
>     - `打开媒体笔记` 命令始终在媒体视图窗格菜单中可见。
>     - 无笔记打开时进行时间戳/截图嵌入，会自动打开（或创建）关联媒体笔记并插入。
>     - `添加媒体笔记到库` 及快速切换器中的 `Shift+Enter` 默认在侧分栏中打开笔记。
>     - 修复了元数据字段为空时创建媒体笔记会挂起的问题。
>     - 修复了移动/重命名媒体笔记后库封面偶尔错误的问题。
> - **链接行为与导航**
>     - 新增窗格拆分选项：**在顶部新建窗格** 和 **在左侧新建窗格**。
>     - 从浏览器扩展打开媒体 URL 时，会重用显示相同媒体的现有选项卡，显示更清晰的标签（如“YouTube: dQw4w9WgXcQ”）并显示时间戳。
>     - 点击未同步转录选项卡中的时间戳，将按您的点击/Alt+ 点击设置打开关联媒体。
> - **编辑器上下文菜单**
>     - 打开媒体视图时在编辑器中右键，可显示 **媒体** 子菜单，提供时间戳链接、截图嵌入、剪辑截图及其带时间戳版本。
> - **日志**
>     - 可在日志设置中将插件日志写入文件，以便调试。
> - **其他改进**
>     - 新增 `清除媒体历史` 命令，设置中增加媒体历史部分及对应按钮。
>     - 更智能的选项卡复用：从浏览器打开媒体时会复用已有相同媒体的选项卡。
>     - 笔记模板设置描述更清晰一致，标明了对应命令。
>     - 修复了菜单弹出窗口与触发按钮错位的问题。
> - **错误修复**
>     - 切换媒体源后播放器标题/布局显示旧信息。
>     - 移动/重命名媒体笔记后库封面错误。
>     - 元数据字段为空时创建媒体笔记挂起。
>     - 菜单弹出窗口错位。
>     - 网页查看器登录命令在修补完成前不显示。
>     - 部分设备上网页查看器集成失败。
>     - YouTube 嵌入播放因页面加载缓慢而失败。
>     - 从媒体库打开时链接点击偏好被忽略。
>     - 无效剪辑范围导致媒体 URL 包含 `Infinity` / `NaN`。
>     - 重命名两个截图模板设置（“…text” → “…alias”）以与其他设置一致。

[Editing Toolbar](obsidian://show-plugin?id=editing-toolbar) By Cuman

> **4.0.7**
> - 按 Tab 接受自动补全，首次提示
> - 优化 canvas 布局连线规则
> - canvas 右键菜单增加 AI
> - 建议框增加快捷键支持
> - 增加画板整理布局指令
> - 优化 AI 运行动画
> - canvas 下无法使用撤销按钮修复
> - 在 canvas 视图下，增强 AI 功能

## 主题新闻

[RIFT](https://github.com/rifts-obsidian-laboratory/rift) by noahboos

![2026-04-25-Obsidian Weekly](https://cdn.pkmer.cn/images/File-20260425115212254.png!pkmer)

> Rift 是一款为 Obsidian 打造的轻量化自定义主题，由开发者在业余时间打造，主打贴合个人使用习惯的界面与阅读体验，支持标题渐变色彩等细节美化，简洁舒适、易用耐看。

[Xscriptor](https://github.com/xscriptor/obsidian) by Xscriptor

![2026-04-25-Obsidian Weekly](https://cdn.pkmer.cn/images/File-20260425115631538.png!pkmer)

> 一个为程序员和作家设计的优雅 Obsidian 主题，拥有精美的 EB Garamond 字体排版和灵活的自定义功能。
