---
uid: 20260328001734
title: Obsidian Weekly 2026-03-27：CLI 终端优化、Bases 日历视图、AI 重构三连发
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-03-27：CLI 终端优化、Bases 日历视图、AI 重构三连发
author: 熊猫别熬夜,PKMer
type: other
draft: false
editable: false
modified: 20260328001830
---

# Obsidian Weekly 2026-03-27：CLI 终端优化、Bases 日历视图、AI 重构三连发

> [!tip]
> 统计时间：2026-03-20 12:00 ~ 2026-03-27 12:00
> 声明：本栏目灵感来源于 Eleanor Konik 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 GitHub 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### 1.12.7 版本说明

1.12.7 移动端已包含截至 [Obsidian Desktop v1.12.7](https://obsidian/changelog/2026-03-23-desktop-v1.12.7/) 的所有新功能和错误修复。

#### 改进

##### Obsidian CLI

- Obsidian Installer 现在捆绑了一个新的二进制文件用于 CLI。此新方法取代了调用 Electron 二进制文件的旧方法，显著提升了终端交互速度。需要下载最新的安装程序。
- 在使用 `id=` 参数时，为终端界面 (TUI) 添加了 Obsidian 命令的自动补全功能。

#### Bug 修复

##### Obsidian CLI

- 修复了 Obsidian CLI 在 macOS 上错误检查 Linux 特定目录的问题。
- 将 macOS 和 Linux 上的 CLI socket 文件更改为隐藏的 dotfile。

##### 编辑器

- 修复了未选中文本时进行复制、剪切和粘贴的几个问题。
- 复制并粘贴一行时，光标不再处于错误位置。
- 在表格中，未选中文本时进行复制或剪切，现在能正确仅复制单元格内容。
- 当有文本跨多个光标被选中时粘贴 URL，现在会将每个选中的内容包裹为 Markdown 链接（`[selected text](url)`）。
- 修复了阅读模式下，callout 内的图片显示不必要滚动条的问题。
- 修复了在实时预览中双击图片无法重置其大小的问题。

##### 开发者

- 安装程序已更新为使用 Electron v39.8.3（需要下载最新的安装程序）。

## 插件新闻

### 新增

[Calendar Bases](obsidian://show-plugin?id=calendar-bases) by Edrick Leong

![2026-03-27_Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/Pasted%20image%2020260327095507.png!pkmer)

> Calendar Bases 插件可将 Obsidian Bases 的结果转换为日历，这样带有日期属性的笔记就能在月视图中显示在其对应的位置。该插件专注于已包含开始日期的条目，当某条目持续多天时，还能处理结束日期。你可以在日历上移动项目来重新安排时间，插件会更新笔记的前置元数据以与之匹配，这使得该视图不仅可用于查看 Vault 中已有的内容，还能用于规划。它还支持直接从日历打开条目，并可使用上下文菜单执行相关操作。

[Graphic Organizer](obsidian://show-plugin?id=graphic-organizer) by Nick Le Guillou - Superhuman Curiosity

![2026-03-27_Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/Pasted%20image%2020260327100610.png!pkmer)

> Graphic Organizer 插件能将存储库转换为可视化树状结构，在可缩放的画布上显示文件夹和文件。它帮助人们更快理解大型结构，无需停留在文件资源管理器中就能移动内容。点击即可打开文件，文件夹可按需展开，存储库中的更改会实时显示。你可以将文件或文件夹拖入其他文件夹，使用右键菜单创建或删除项目，并通过清晰的图标识别不同的文件类型。该视图还添加了大型文件夹警告、可配置的间距、缩放限制和可选的平滑动画，这让存储库变得杂乱时的导航更加轻松。

[Synaptic View](obsidian://show-plugin?id=synaptic-view) by Yongmin

![2026-03-27_Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/Pasted%20image%2020260327095702.png!pkmer)

> Synaptic View 插件能将一条笔记转变为可配置的仪表盘，无需手动构建主页，就能打开你最需要的文件、网页、日志和日历视图。它添加了笔记、URL、定期笔记和基于日期的导航的快速访问按钮，还可以替代新标签页视图，让仪表盘随时触手可及。每日按钮和日历按钮能显示未完成任务的数量，这使得日常工作一目了然，便于查看。按住 Ctrl 或 Cmd 键点击，可在侧边窗格中以编辑模式打开受支持的项目，这在你想同时进行读写操作时非常有用。设置界面还包含图标选择、排序、可见性、默认视图以及一些显示清理功能。

[LighterPack importer](obsidian://show-plugin?id=lighterpack-importer) by Nicola Siniscalchi

![2026-03-27_Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/File-20260327095303629.gif)

> LighterPack 导入插件可将 lighterpack.com 上的公开打包清单导入你的知识库，并将其转换为一组简洁的 Markdown 笔记。它会为不同类别创建文件夹，为每个物品添加笔记，并生成一个汇总页面，其中包含总计、类别细分和重量分布图表。这使得旅行或徒步装备清单在导入后更易于浏览、链接和编辑，即使在离线状态下也是如此。导入流程简单，通过功能区操作和命令面板条目即可完成，只需输入共享清单的 URL 即可。

[LskyPro Upload V2](obsidian://show-plugin?id=lskypro-upload-v2) by 3kk0

> Obsidian 的自动图片上传插件，LskyPro Upload V2 插件会将笔记中的本地图片发送到自建的 LskyPro 服务器，并将其替换为托管链接，这样图片处理就不会占用笔记库空间。该插件兼容 V1 和 V2 版本的 API，支持人们常用的文件插入方式，包括粘贴、拖放、右键操作以及基于命令的批量处理。此外，该插件还能上传当前笔记中的所有本地图片，也可在需要时将远程图片下载回来。相关设置涵盖网络图片处理、路径修复、可选的源文件删除、图片处理以及上传并发等功能。

### 更新

#### AI 增强与智能助手

[YOLO](obsidian://show-plugin?id=yolo) By Lapis0x0

> **1.5.3 多窗口联动与底层架构重构 🚀**
>
> - 🪟 多窗口支持与编辑器联动
>   - **🌐 原生多窗口 Chat**：现在支持在侧栏、新标签页或独立窗口中同时打开多个 Chat 窗口，互不干扰。
>   - **🎯 精准路由联动**：重构了编辑器与对话框的通信逻辑。选区引用、文件添加、续写参数等操作现在可以准确地路由到目标 Chat 窗口。
>   - **⚡ 新标签页入口**：在 Obsidian 空白“新标签页”中新增了直接打开 YOLO 聊天的快捷入口，并支持右侧分屏打开。
>   - **📍 悬浮窗体验优化**：
>     - 优化了 Cursor Chat 触发的 Quick Ask 弹窗定位，默认显示在**选区下方**，避免遮挡原文。
>     - 进入选区改写模式时，Quick Ask 状态位将明确显示为“改写”，消除歧义。
> - ⚙️ 底层架构与 Provider 增强
>   - **🧩 协议与 Provider 解耦**：正式将 Provider 类型与底层 API 协议拆分。现在支持在 Provider 级别自由切换 **API 类型**（OpenAI Compatible / OpenAI Responses / Gemini / Anthropic）。
>   - **🔐 ChatGPT OAuth 支持**：
>     - 支持通过 ChatGPT OAuth 登录并作为自定义 Provider 使用。
>     - 支持更多 OAuth 渠道模型，并部分修复了思维链（CoT）摘要获取不到的问题。
>   - **🛡️ 安全与清理**：
>     - 为删除 Provider 操作增加了**二次确认机制**，防止误删。
>     - 移除了已过时的 base 模型相关冗余逻辑。
> - 🔍 搜索与 AI 工具
>   - **🌐 内置联网搜索 (OpenAI)**：新增 GPT 工具类型并内置 Web Search 开关。OpenAI 官方及兼容协议模型无需手填参数即可直接启用联网搜索。
>   - **🐞 引用来源修复**：修复了 GPT 模型开启 Web Search 后 Source（来源）不可见的 Bug。`
> - 💄 UI/UX 细节优化
>   - **📏 输入框高度调整**：支持通过拖拽直接调整输入框高度。
>   - **🎨 设置面板优化**：整体优化了“模型设置”分区的样式，内容呈现更加清晰、符合逻辑。
>   - **🛠️ 独立窗口适配**：
>     - 修复了独立窗口下宽/窄顶栏样式无法切换的 Bug。
>     - 优化了对话间的间距与图表文字尺寸，视觉效果更统一。

> **1.5.3.1 后台 Agent 与基础设施完善**
>
> - 🤖 后台 Agent 与多任务处理
>   - **⛓️ 后台挂机能力**：Agent 现支持在后台运行，长任务执行期间你可以切换到其他文档或窗口，无需原地等待。
>   - **🔔 任务通知提醒**：新增 Agent 任务通知系统，包括工具调用审批提醒与任务完成提醒
>   - **📊 状态栏交互**：
>     - Obsidian 右下角状态栏现会实时显示运行中的 Agent 数量及审批状态。
>     - **快速导航**：点击状态栏图标可弹出当前活跃会话列表，并支持一键在右侧分屏打开。
> - 🌐 网络连接与协议重构
>   - **🚀 Node Fetch 传输**：重构了 OpenAI/Anthropic 等渠道的请求链路，通过 Node.js 层进行转发，有效解决了部分渠道（如 Nvidia/NIM）在 Obsidian 环境下的跨域（CORS）限制，并提供更完整的流式支持。
>   - **🔗 远程 MCP 代理**：新增远程 MCP HTTP/SSE 代理支持，自动兼容 `HTTP_PROXY` 等系统环境变量。
>   - **🔐 OAuth 交互优化**：在配置 ChatGPT OAuth 提供商时，自动隐藏不适用的 API Key 和 Base URL 输入框。
> - 💄 交互体验与智能增强
>   - **📏 输入框高度记忆**：手动调整后的输入框高度会自动保存，并在侧边栏、新标签页、新窗口中保持同步。
>   - **🏷️ 标题实时同步**：Chat 标签页/窗口的标题现会跟随对话标题自动更新，便于多开时快速识别。
>   - **✍️ 回复片段引用**：支持选中 AI 回复的某一部分，以 Mention 形式引用到输入框中参与后续对话。
>   - **📅 时间变量支持**：系统提示词现支持引用当前日期、小时和分钟等时间变量，增强 Agent 的时间感知。
>   - **🎯 聊天命名优化**：
>     - 原“工具模型”更名为更准确的“对话命名模型”。
>     - 对话命名触发点提早至用户首次输入阶段，避免 Agent 运行期间长时间显示“未命名”。
>     - 优化重命名交互：点击编辑标题后，编辑图标直接切换为确认图标，点击即可保存。
> - 🐞 Bug 修复与细节优化
>   - **📜 滚动逻辑修复**：修复了聊天记录在鼠标 Hover 时可能产生的异常滚动问题。
>   - **✨ 自动滚动策略**：优化了生成时的自动滚动算法，修复了停止生成按钮可能横向遮挡内容的 UI 问题。
>   - **🏗️ 品牌统一**：统一了控制台日志命名，前缀现已全部规范化为 `YOLO`。
>   - **⌨️ 新增命令**：新增 Obsidian 命令，支持在当前 YOLO 视图中直接新建对话。

[Copilot](obsidian://show-plugin?id=copilot) By Logan Yang

> **3.2.5 版本亮点**
>
> - Composer V2：`editFile` 工具替换 `replaceInFile`，实现更可靠精确的文件编辑
> - 从 Copilot 聊天面板拖拽笔记和源文件到编辑器，即时插入 Wiki 链接
> - Azure OpenAI 和 Azure Foundry 统一为单一 Azure Provider
> - Obsidian Bases 支持：`base:create` 命令、`.base` 活动笔记支持、只读 `obsidianBases` CLI 工具
> - LM Studio：支持 Responses API 并复用 KV 缓存，本地模型对话更快更高效
> - Gemini Embedding 2 预览支持
> - GitHub Copilot Chat 支持工具调用
> - 自动重命名文件以匹配主题标题
> - OpenRouter 提示缓存支持
> - Miyo：可自定义库名称、远程后端移动端重新索引、许可证认证头
> - CLI 工具升级：每日/随机阅读工具、推理摘要、增强指令、每日笔记模板修复
> - Agent 和搜索修复：内联引用、查询去重、答案源优先级、扩展搜索限制
> - UI/UX 打磨：Quick Ask 面板定位、LaTeX 渲染、Ollama numCtx、“None” 系统提示选项
> - 本地模型修复：剥离泄露的特殊 token，agent 工具路径中的 `vault.read`
> - YouTube 转录修复：支持经典和现代 DOM 结构
> - Tiktoken CDN 超时深度防御修复

[Khoj](obsidian://show-plugin?id=khoj) By Debanjum Singh Solanky

> - 修复禁用记忆后使用 Web 应用时，从未设置聊天模型的用户遇到的问题
> - 修复 Khoj 云端过时横幅显示问题

[Notemd](obsidian://show-plugin?id=notemd) By Jacob

> **核心亮点**
>
> - 将所有 Mermaid 图表生成/改写/批量任务链路统一接入自动修复，显著减少图表渲染失败和人工返工
> - 侧边栏升级为可自定义的一键工作流按钮系统，支持内置动作自由组装，内置默认 One-Click Extract 工作流
> **破坏性更新**
> - Mermaid 自动修复默认开启且触发范围扩大（Process、Generate from title、批量生成、研究总结、Mermaid 摘要、翻译等），若需旧行为请在设置中关闭
> **新特性**
> - 所有 Mermaid 相关任务完成后自动执行修复
> - 可视化 Workflow Builder，无需手写 DSL 即可创建/编辑自定义工作流
> - 工作流错误策略支持 stop_on_error 与 continue_on_error
> - 侧边栏按功能分组（核心/生成/翻译/知识/工具），增加快捷工作流、进度和日志区域
> **Bug 修复**
> - 修复 Mermaid 修复仅在部分生成功能中生效的问题，现统一对目标文件/目录执行
> - 修复批量生成场景下 Mermaid 修复目标目录解析分散的问题
> - 修复自定义工作流 DSL 配置异常导致按钮不可用的问题，配置错误时回退到默认工作流并提示警告

[Vault LLM Assistant](obsidian://show-plugin?id=vault-llm-assistant) By Brians Tjipto

> **新功能**
>
> - 支持通过直接 API 集成 Anthropic Claude 模型
> - 支持在请求中包含 Markdown 图像（库内图像）到 OpenAI、Gemini 和 Claude 视觉模型
> **改进**
> - 更新预定义模型列表，包含 Claude 3 和 Claude 3.5 系列

[Note Companion AI](obsidian://show-plugin?id=note-companion-ai) By Benjamin Ashgan Shafii

> **新功能**
>
> - 新增命令和上下文菜单：将选中文本提取到新笔记，自动替换为 Wiki 链接
> - AI 聊天界面集成提取功能，支持斜杠命令 `/extract to new note`
> - 实现编辑器选择跟踪机制，即使在聊天界面获得焦点时也能可靠提取
> **技术改进**
> - 大幅改进 CSS 可访问性、视觉清晰度，侧边栏和聊天界面样式统一
> - 增强聊天斜杠命令系统，支持编辑器上下文，执行后可靠移除触发文本

[Pure Chat LLM](obsidian://show-plugin?id=pure-chat-llm) By Justice Vellacott

> **依赖更新与常量修改**
>
> - 更新 eslint、typescript-eslint 等依赖
> - 在常量中添加 `think` 属性
> - 注释掉 LLMService.ts 中的 requestUrl 调用

[Steward](obsidian://show-plugin?id=steward) By Dang Nguyen

> **新增**
>
> - 回退多个操作
> - SubAgent 系统：生成具有特定能力的专用代理
> - SPAWN_SUBAGENT 工具
> - 通过 frontmatter 中的 `conversation_title` 更新嵌入标题
> **变更**
> - 技能系统：用 `read_content` 替换 `use_skills`，按路径按需读取
> - 命令输入显示当前模型和 Provider
> - 将 grep 工具处理移至单独工具 `vaultExists`
> - 历史视图 UI 改进，不显示子代理笔记
> - VaultCreate 可创建空文件夹
> - VaultList 渲染和搜索行为改进
> - 优雅处理 `no_stool_error`
> - 编辑审查更新为通用用途
> - 帮助视图显示禁用的规则和技能
> **修复**
> - 修复使用 DOM 事件而非文件内容导致的对话指示器问题

[Daily News Briefing](obsidian://show-plugin?id=daily-news-briefing) By Adam Chen

> **1.11.5**
>
> - 修复每日新闻内容缓存：仅在新闻生成成功时缓存
> - 移除重复通知，添加更多失败信息
> - 添加计划时间

#### 内容创作与编辑增强

[Nova](obsidian://show-plugin?id=nova) By Shawn Duggan

> **1.4.0 更新内容**
>
> - **写作分析面板**（本地运行，无需 AI）：
>   - 可读性等级（Flesch-Kincaid 年级水平 + 通俗标签）
>   - 编辑器内下划线高亮：长句、被动语态、副词、弱强调词，按严重程度分色
>   - 可折叠面板显示：字数、句数、阅读时间、被动语态比例、副词密度、强调词数量
>   - 手动分析按钮，支持 frontmatter 中 `nova-writing: false` 禁用
>   - 可自定义长句阈值
> - **自动上下文改进**：增删 `[[wikilinks]]` 时自动更新上下文面板
> - **移动端优化**：写作面板触摸适配、字体大小、滚动；隐私指示器左对齐
> - **Bug 修复**：修复撤销/重做不触发分析更新；弱强调词重复高亮；Ollama 末尾斜杠导致连接失败；降低副词和强调词误报阈值；token 预算条在用量极小时隐藏，改为显示百分比

[Sheet Plus](obsidian://show-plugin?id=sheet-plus) By ljcoder

> **2.8.8 (2026-03-26)**
>
> - 更新 univer 版本至 0.18.0
> - 优化嵌入式表格渲染逻辑

[Continuous Mode](obsidian://show-plugin?id=continuous-mode) By Michael Schrauzer

> - 修复：打字机滚动仅在箭头导航时工作，实际输入时无效的问题

[Inline Admonitions](obsidian://show-plugin?id=inline-admonitions) By Scott Tomaszewski

> - 支持正则表达式 Inline Admonitions 块

[Codeblock Customizer](obsidian://show-plugin?id=codeblock-customizer) By mugiwara

> **修改**
>
> - 增加 Mac 修饰键支持
> **Bug 修复**
> - 修复编辑模式下表格中内联代码在 PDF 打印未启用时不渲染的问题
> - 修复编辑模式下未换行代码块滚动无效的问题
> - 修复 PDF 打印时排除所有使用 MarkdownPreviewRenderer 的代码块
> - 修复“启用 PDF 打印”开关无效的问题

[Automatic Renumbering](obsidian://show-plugin?id=automatic-renumbering) By Omri Levi

> **改进**
>
> - 更新依赖以解决安全漏洞（ajv、minimatch、flatted）

[Image Converter](obsidian://show-plugin?id=image-converter) By xRyul

> **新选项：恢复 Obsidian 1.12 之前的图像点击行为**
>
> - 新增“禁用 Obsidian 图像点击选择”选项，点击图像直接显示链接，隐藏编辑块图标、图像轮廓和角落调整
> - 光标位置可设置：点击图像后光标置于链接前或后（复用现有设置）
> **新选项：处理当前笔记时跳过文件夹**
> - 支持普通文件夹路径、glob 模式和正则匹配，包含文件夹建议/自动完成
> **其他**
> - 改进图像标注撤销行为：箭头绘制创建单次撤销步骤
> - 新安装默认设置：全局预设 Webp 75，标题默认禁用，拖拽时锁定宽高比默认开启

[HiWords](obsidian://show-plugin?id=hiwords) By Kai

> **新增单词释义 Tab 展示功能**
>
> - 可在单词文件中使用 `---` 分隔不同内容块，用标题作为段名称，HiWords 在侧边栏单词卡和悬停释义弹窗中渲染为可切换的 Tab
> - 适合整理为“释义/例句/笔记”等多分区内容

[Line Arrange](obsidian://show-plugin?id=line-arrange) By Chitwan Singh

> **修复有序列表在行和块操作中的行为**
>
> - 排序、随机打乱或反转后，有序列表现在能正确重新编号（之前保留原编号导致渲染错误）
> - 当选区为完整有序列表时自动修复编号
> **空行处理更一致**
> - 块操作完全忽略空行，不再将其视为列表项
> - 关闭“保留空行”的行操作干净地丢弃空行，而非收集到输出顶部

[Featured Image](obsidian://show-plugin?id=featured-image) By Johan Sanneblad

> **新增**
> - 新设置：编辑时自动运行（默认开启），笔记更改时自动更新特色图像
> - 新命令：更新当前文件中的特色图像，从命令面板刷新

[Pixel Perfect Image](obsidian://show-plugin?id=pixel-perfect-image) By Johan Sanneblad

> **修复**
> - 修复 Obsidian 1.12 及更高版本中图像上的重复上下文菜单
> - 修复当多个文件夹包含相同文件名时，本地文件操作打开错误图像的问题
> - 修复插件窗口内的点击不再触发 Pixel Perfect Image 操作

[Excalidraw](obsidian://show-plugin?id=excalidraw) By Zsolt Viczian

> **修复**
> - 修复新 ExcalidrawAutomate 函数 `ea.parseText()` 在文本是嵌入图像或 PDF 文档时中断，导致 MindMap Builder 粘贴问题
> - 修复自定义笔刷粗糙度未保存到模板绘图的问题

[Markitdown File Converter](obsidian://show-plugin?id=markitdown) By Ethan Troy

> **安全**
> - 消除 shell 注入漏洞：使用 `spawn()` 替代 `exec()`，参数数组且 `shell: false`
> - 打包的 Python 包装脚本使用 `argparse`，无用户输入字符串插值
> - 输出文件夹、图像目录和图像格式处理中的路径遍历防护
> - 插件参数中的原型污染防护
> - 错误消息在显示前剥离绝对路径
> **新增**
> - 从 PDF 和 EPUB 提取图像：base64 数据 URI 解码到 `{filename}-images/` 子文件夹
> - 插件参数编辑器：设置中为第三方 Markitdown 插件提供键值对 UI
> - 上下文菜单：文件资源管理器中支持的文件类型右键“转换为 Markdown”
> - 设置向导：Python 检测和 Markitdown 安装的引导模态框
> - 批量进度条：文件夹转换的视觉进度指示器
> - Python 路径回退：macOS/Linux 上 `python` 不可用时自动检测 `python3`
> - 实时设置刷新：更改 Python 路径后立即重新检查依赖
> **变更**
> - 将单体 `main.ts`（735 行）分解为 12 个模块
> - 通过 `PYTHONUTF8=1` 环境变量支持 Unicode
> - 模态框中使用异步文件 I/O
> - 构建目标更新为 ES2020，TypeScript 5.x 严格模式
> - 最低 Obsidian 版本保持 0.15.0
> **移除**
> - 移除 Docling 转换器（推迟到单独插件）
> - 代码库中不再使用 `child_process.exec()`

[Time Bullet](obsidian://show-plugin?id=time-bullet) By pedrogdn

> **修复**
> - 修复窗口移动后的键处理，添加回归测试
> - 添加切换时间子弹命令及测试

#### 库管理、导航与同步

[Sync Vault CE](obsidian://show-plugin?id=sync-vault-ce) By Camus Qiu

> - 修复受控模式面板打开失败
> - 修复自动同步结束后看板同步状态未刷新

[Weread Plugin](obsidian://show-plugin?id=weread-plugin) By hank zhao

> **Bug 修复**
> - 修复标题含特殊字符（如冒号）的书籍同步失败问题：对文件夹名称应用 sanitizeTitle() 函数，移除特殊字符

[Homepage](obsidian://show-plugin?id=homepage) By mirnovov

> - 为 Obsidian 新命令行界面增加两个命令：`homepage` 打开首页，`homepage:read` 打印首页内容到 stdout
> - 修复历史记录偶尔不保存的问题
> - 命令需要 Obsidian 1.12.0+，但此版本在 1.11.x 上仍可工作

[Custom Commands](obsidian://show-plugin?id=custom-commands) By Staaaaaaaaaan

> **修复**
> - 修复创建命令时路径中包含 `{{time}}` 导致文件名非法字符的问题

[Note Toolbar](obsidian://show-plugin?id=note-toolbar) By Chris Gurney

> **新功能**
>
> - 手机上可选择隐藏 Obsidian 顶部导航栏
> - 手机端自动隐藏样式：工具栏在顶部固定时可过渡隐藏
>
> **改进**
> - 增加“将项目移动到工具栏”选项
> - 设置项按平台显示，上下文菜单重命名“标签栏”为“顶部导航”
> - 手机端按钮样式默认使用浮动导航样式
>
> **修复**
> - 手机端顶部/底部工具栏位置修正、非 Markdown 文件顶部工具栏不再产生额外间距、浮动按钮动画一致
> - 修复空标签页项目阴影被裁剪、手机端工具提示遮挡、iOS 卡片左边框不渲染、无可见项目时不显示文本工具栏等
>
> **API**
> - `ntb.suggester()` 增加 `prefixes` 选项，支持前缀触发建议（如 `#` 触发标签建议，`[[` 触发文件建议）

[Quartz Syncer](obsidian://show-plugin?id=quartz-syncer) By Emile Bangma

> - 编译器管道从基于正则的转换迁移到基于 AST 的转换（使用 remark-obsidian）
>   - Obsidian 注释通过 AST 剥离，正确处理代码块内的注释
>   - 链接和图像的库路径剥离通过 AST 节点访问器处理
>   - 表格行内的 Wiki 链接管道符自动转义
>   - 提示语法正确保留
> - 渲染转换委托给 Quartz v5 构建管道（Wiki 链接解析、嵌入展开、SVG 内联、高亮语法、标签渲染）
> - 修复图像嵌入在与其他内容相邻时混叠的问题
> - 移除嵌入和 SVG 嵌入逻辑（现由 Quartz v5 处理）、发布文件缓存系统、无用设置
> - 简化 Excalidraw 集成为仅推送文件，移除 SVG 转换、SCSS 样式和 ExcalidrawAutomate 依赖
> - 拆分 Git 连接状态为读/写独立检查
> - 修复 canvas 提取资源链接时仅收集资产文件而非所有文件节点的问题

[Datacore](obsidian://show-plugin?id=datacore) By Michael Brenan

> **0.1.29**
>
> - 使 cleantext 适用于带 id 的列表项
> - 支持指定查询函数返回的类型
> - 将文档和注释中的 `row` 重命名为 `$row`
> - 为列表块的第二遍处理添加空值检查
> - 安全访问可能缺失的画布索引和缓存
> - 更新 manifest.json

[Startpage](obsidian://show-plugin?id=start-page) By kuzzh

> - 增强笔记元数据、搜索排除和 UI 模态框

[Folder notes](obsidian://show-plugin?id=folder-notes) By Lost Paul

> - 增加选项：打开文件夹笔记时，在路径中隐藏文件夹笔记名称，仅显示文件夹名

[Notebook Navigator](obsidian://show-plugin?id=notebook-navigator) By Johan Sanneblad

> **改进**
>
> - 右侧窗格日历始终显示 6 周
> - 列表窗格属性药丸支持自定义 URI 方案（如 `zotero://`、`file://`）
>
> **修复**
> - 布尔和数字属性现显示为列表窗格中的属性药丸
> - 元数据清理现在移除过时的属性键选择

[TODOseq](obsidian://show-plugin?id=todoseq) By Stephen Cross

> - 修复任务行无内容时导致受影响页面任务列表无结果的问题
> - 修复点击状态栏任务计数触发的搜索筛选器未进行精确文件匹配的问题

[Task List Kanban](obsidian://show-plugin?id=task-list-kanban) By Chris Kerr

> **Bug 修复**
>
> - 使用 Obsidian 字体大小设置作为看板内容，使看板尊重用户配置的文本大小
> - 支持原生 Obsidian 链接修饰键行为（ctrl/cmd+ 点击）
> - 抑制构建输出中已知的 svelte-select 编译器警告

[Quick Switcher++](obsidian://show-plugin?id=quick-switcher-plus-plus) By darlal

> - 修复标准模式下启用“恢复之前输入”时显示 null 的问题

[Current View](obsidian://show-plugin?id=current-view) By Lucas Ostmann

> **1.5.0 (2026-03-21)**
>
> - 增加按标签自动切换视图模式的规则

[Bookmarks Caller](obsidian://show-plugin?id=bookmarks-caller) By namikaze-40p

> **改进**
>
> - 原生高亮：建议列表中匹配文本加粗显示
> - 安全更新：更新内部依赖以解决报告的安全漏洞

[Tab Selector](obsidian://show-plugin?id=tab-selector) By namikaze-40p

> **改进**
>
> - 智能搜索排序：精确字符串匹配优先于分散的模糊匹配
> - 原生高亮：建议列表中匹配文本加粗显示
> - 安全更新：更新内部依赖以解决报告的安全漏洞

[Note Status](obsidian://show-plugin?id=note-status) By Aleix Soler

> **变更**
>
> - 实现插件设置的多设备同步
> - 修复新 Obsidian 版本中的 UI 问题
> - 支持新笔记的默认状态
> - 模板市场、预定义模板、模板特征化
> - 改进状态选择器模态框
> - 集成 Notebook Navigator + 修复文件重命名
> - 改进状态组 UI

[Self-hosted LiveSync](obsidian://show-plugin?id=self-hosted-livesync) By vorotamoroz

> **0.25.54 (2026-03-18)**
> **修复**
>
> - 远程存储大小检查现在再次正常工作
> - 设置对话框中的一些按钮现在再次正确响应
>
> **重构**
> - P2P 复制器重构，更健壮且更易理解
> - 删除不再使用的可能导致潜在问题的项目
>
> **CLI**
> - 修复帮助消息显示乱码的问题
> - 移除一些不必要的代码
> **WebApp**
> - 修复日志窗格中未应用详细级别的问题
> - 弹出窗口现在显示
> - 添加测试覆盖
> - Web 应用中同样显示弹出窗口

[File Ignore](obsidian://show-plugin?id=file-ignore) By Feng

> **Bug 修复和安全更新**
>
> - 防止显示/恢复重命名原本以点开头的文件（除非被插件隐藏）
> - 对单文件恢复和批量计划应用相同的保护
> - 更新 minimatch 至 5.1.8，esbuild 至 0.27.4
> - 验证：npm audit 结果为 0 漏洞

[Day Planner (OG)](obsidian://show-plugin?id=day-planner-og) By James Lynch (continued by Erin Schnabel)

> **0.7.3 (2026-03-17)**
>
> - 改进模式变更处理
> - 启用插件时记录当前计划

#### 实用工具与 UI 优化

[RSS Dashboard](obsidian://show-plugin?id=rss-dashboard) By Aditya Amatya

> **2.2.0-beta.8 (2026-03-24)**
> **新功能**
>
> - 侧边栏自定义排序（拖拽）、自定义工具栏图标（显示/隐藏、排序）
> - 侧边栏标签过滤：AND/OR/NOT 逻辑，内联添加标签与颜色选择器
> - 播客播放器睡眠定时器（5-120 分钟）
> - 播客“在浏览器中打开”改进：解析网站 URL，降级到 RSS 链接，下拉菜单包含音频文件链接
> - Pocket Casts 导入支持，多代理降级解析播客源，iTunes Search API 备用发现
> - 添加/编辑 Feed 时检查 CORS 代理状态并给出警告
> - OPML 导入菜单重构，视图筛选器状态持久化，启动时可应用多个筛选器
>
> **修复**
> - 阅读器标签菜单与仪表板卡片统一，保存按钮点击后直接打开已保存 Markdown 文件
> - 改进 X/Twitter (Nitter) 源在阅读器中的渲染
> - 修复因全局 CSS 未限定作用域导致的 Obsidian 属性类型错误
> - 设置迁移（filters → rules），向后兼容
> - 修复因 GUID 变化导致的重复文章问题（如 BBC），自动去重
> - 修复切换视图时分页控件不更新，新增“全部”选项，分页设置同步
>
> **开发**
> - 添加 CSS 作用域检查，设置面板重构为模块化（9 个专用渲染模块），Feed 管理器重构，ReaderView 重构

[Tag Group Manager](obsidian://show-plugin?id=tag-group-manager) By Stargazer-cc

> **Bug 修复**：
> - 修复新版插件无法读取旧版标签颜色数据，导致“应用标签于正文”功能失效的问题。现可在设置中手动快捷导入旧版颜色数据。
>
> **其他改进**：
> - 精简控制台输出内容
> - 优化开启正文标签样式后，预览和编辑视图下的渲染稳定性

[Edit in Neovim](obsidian://show-plugin?id=edit-in-neovim) By Theseus

> **依赖更新**
> - 升级 esbuild、minimatch、flatted 等依赖版本

[Github Issues](obsidian://show-plugin?id=github-issues) By LonoxX

> **修复与更新**
> - 修复文件与文件夹操作时仓库缓存同步问题
> - 修复 YAML 列表变量中单引号转义问题
> - 升级 TypeScript 至 6.0.2

[Disciples Journal](obsidian://show-plugin?id=disciples-journal) By Scott Tomaszewski (Xentis)

> - 为 passage 笔记增加 `cssclasses: hide-dj-passage-properties` 以隐藏干扰属性

[Ink Player](obsidian://show-plugin?id=ink-player) By Uglyboy

> **修复**
>
> - 解决 ink 故事激活间歇性失败的问题
> **新功能**
> - 添加波兰语本地化，重新设计选项样式，修复本地化问题

[Shell Path Copy](obsidian://show-plugin?id=shell-path-copy) By Charles Kelsoe (ckelsoe)

> **修复**
>
> - Windows 上绝对路径复制现在可用（替换了不可用的内部 API）
> - Windows `file://` URL 不再对驱动器冒号进行编码
> **移除**
> - 放弃使用文件资源管理器 DOM 查询进行命令面板文件检测（依赖内部 CSS 类名，可能随 Obsidian 更新而中断），命令面板命令现在要求打开一个文件，否则显示明确提示
> **技术**
> - 将路径格式化逻辑提取为纯函数（无 Obsidian 依赖），添加 37 个单元测试，CI 运行测试和检查废弃 API 使用，发布前运行测试

[Pixel Pets](obsidian://show-plugin?id=pixel-pets) By Lucas Jin

> **修复**
> - 修复名字反向问题
> - 修复抛球卡在顶部的问题
> - 修复抚摸宠物时的闪烁/切换效果问题
> **新功能**
> - 可通过将鼠标变为猫玩具与猫玩耍
> - 可将宠物游乐场从模态框改为整个 Obsidian 库（使用透明覆盖层，完全保留正常功能）

[Data Fetcher](obsidian://show-plugin?id=data-fetcher) By qf3l3k

> **1.1.4 (2026-03-21)**
> **新增**
>
> - 缓存浏览器条目显示别名感知标签
> - 缓存浏览器筛选匹配别名、哈希、类型和 URL
> **变更**
> - 端点编辑器对话框为长端点提供更多水平空间
> - 缓存浏览器列表和预览窗格使用更多对话框空间
> - 新缓存条目存储轻量查询元数据，使标签更易理解

[Tick Tones](obsidian://show-plugin?id=tick-tones) By DontBlameMe

> **依赖更新**
>
> - 升级多个开发依赖（@types/node、typescript-eslint、@eslint/js、eslint、minimatch、obsidian、esbuild、jest 等）

[Messager](obsidian://show-plugin?id=messager) By Rainyluo

> - 公众号内容获取改为生成新文件

[EasyLink](obsidian://show-plugin?id=easylink) By isitwho

> **Bug 修复**
>
> - 修复因未去除标点导致搜索结果缺失的问题（如 “word.” 未匹配 “word”）
> - 修复“仅标题”开关与关闭按钮重叠的问题
> - 修复“仅标题”模式下 Cmd+Enter 打开错误笔记的问题
> **改进**
> - 重复结果去重从 O(n²) 优化为 O(n)

[GitHub Stars](obsidian://show-plugin?id=github-stars) By Flying Nobita

> **主要变更**
>
> - 即使缓存条目仍然有效，也可从 GitHub 刷新当前笔记
> - 更新嵌入的星标文本而不嵌入普通链接
> - 在阅读视图和实时预览刷新路径中，当设置启用时更新现有嵌入星标
> - 添加刷新令牌警告控制和刷新失败时的更安全回退行为
> - 添加覆盖缓存绕过和嵌入星标刷新回归的单元测试

[GridExplorer](obsidian://show-plugin?id=gridexplorer) By Devon22

> - 修复：搜索标签时中文输入法意外被截断的问题

### PKMer 出品

[Easy Typing](obsidian://show-plugin?id=easy-typing) By yaozhuwa

> **6.0.6 (2026-03-20)**
>
> - **规则编辑与列表优化**：修复正则规则编辑时反斜杠重复转义、内置规则描述显示异常、类型与触发模式按钮颜色问题，优化规则列表预览
> - **设置面板与响应式适配**：优化间距与文案，删除失效链接，改进窄宽度自适应布局和移动端排版
> - **Bug 修复**：修复删除空白行时误删引用与列表间空行的问题，修复 IME 取消输入时误触发转换规则的问题

## PKM 相关知识推荐

> [!tip]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

[Obsidian 插件：Reader Highlighter Tags 在阅读模式下增加高亮、脚注或标签](https://mp.weixin.qq.com/s/xk7pDg77WA28XMt1yoQu3Q)

![2026-03-27_Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/Pasted%20image%2020260327111718.png!pkmer)

Reader Highlighter Tags 插件能在 Obsidian 阅读模式下实现类似 Medium 博客的批注模式，支持为文本添加高亮、批注（实际为脚注）、标签，也可一键移除当前文件所有高亮，还能在侧边栏查看笔记内全部高亮内容。

![2026-03-27_Obsidian Weekly 中文版](https://cdn.pkmer.cn/images/Pasted%20image%2020260327111729.png!pkmer)

提供多维度可配置选项，涵盖悬浮工具栏位置、高亮颜色（支持 RGB/HSL/HEX 代码，可启用五色调色板并绑定专属标签）、标签相关（默认前缀、智能建议）、引文模板自定义，还可开启 / 关闭批注、阅读进度记录、移动端振动反馈、按钮提示等功能，也能自主选择悬浮工具栏显示的功能按钮。
