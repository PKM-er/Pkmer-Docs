---
uid: 20260313204800
title: Obsidian Weekly 2026-03-13：Obsidian CLI 命令行利器上线，图像拖拽调整大小，附件自动清理新体验
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-03-13：Obsidian CLI 命令行利器上线，图像拖拽调整大小，附件自动清理新体验
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20260313204831
---

# Obsidian Weekly 2026-03-13：Obsidian CLI 命令行利器上线，图像拖拽调整大小，附件自动清理新体验

> [!tip]+
> 统计时间：2026-02-23 21:00 ~ 2026-03-13 21:00
> 声明：本栏目灵感来源于 Eleanor Konik 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 GitHub 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### 版本 v1.12.5

#### 改进

##### Obsidian CLI

- 为在终端界面 (TUI) 中使用 `id=` 参数时的 Obsidian 命令添加了自动补全功能。

#### 错误修复

- 修复了在未选中文本时进行复制、剪切和粘贴的若干问题。
- 复制和粘贴一行时，光标不再放置在错误的位置。
- 在表格中，未选中内容时进行复制或剪切，现在只会正确地复制单元格内容。
- 当多光标选中文本时粘贴 URL，现在会将每个选中部分包裹为 Markdown 链接（`[选中的文本](url)`）。

Obsidian Sync 现在支持使用 [`obsidian-headless`](https://www.npmjs.com/package/obsidian-headless) 客户端进行无头模式运行。了解更多关请结合 [Obsidian Headless 与 Sync](https://help.obsidian.md/sync/headless) 的信息。

### 版本 v1.12.4

#### 新增功能

- **iOS**: 新增分享扩展功能，无需打开 Obsidian 即可从其他应用（如 Safari、社交网络）将内容保存到你的知识库。
- **iOS**: 新的快捷指令操作“添加书签链接”，用于将 URL 保存为 Obsidian 书签。

#### 改进

- 应用现在默认使用系统语言，并在新用户引导过程中增加了语言选择器。
- 新增了“独立笔记”App 快捷操作（长按应用图标时显示的菜单）。
- 改进了对平板电脑上指针设备（如 Magic Trackpad）的支持：
    - 子菜单现在在悬停时展开。
    - 在属性编辑器中，右键点击会显示上下文菜单。

#### 已修复问题

- 从文件删除提示中移除了“删除且不再询问”选项。
- **Obsidian 同步**: 修复了如果在 Obsidian 保存最新的同步状态前关闭应用，文件可能会被覆盖的问题。
- **iOS**: 修复了与边栏项目交互后，工具提示有时会出现的问题。
- **iOS**: 修复了导致“每日笔记”和“书签”快捷指令无法工作的问题。
- **iOS**: 修复了“查看笔记”小组件无法立即刷新的问题。
- **幻灯片**: 修复了在移动端状态栏上关闭按钮的位置问题。

### 版本 v1.12.3

#### 新增功能

##### Obsidian CLI

此版本引入了 Obsidian CLI，这是一个 [命令行界面](https://help.obsidian.md/cli)，让你能够从终端控制 Obsidian，用于脚本编写、自动化和与外部工具的集成。

<video controls width="600"><source src="https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/attachmentss/video/obsidian-cli.mp4" type="video/mp4"></video>

有关安装帮助，请查看 [故障排除部分](https://help.obsidian.md/cli#Troubleshooting) 以获取特定平台的信息。

##### 图像大小调整

实时预览中的图像现在可以通过拖拽角来调整大小。双击角可以重置图像大小。

![|650](https://cdn.pkmer.cn/images/34782502dbb690c0ac64f229b852ec57.gif!pkmer)

##### 自动附件清理

删除文件时，会弹出一个提示，询问你是否也想要删除其附件。在“文件与链接”设置中新增了一个选项，允许你配置此行为（选择“总是”、“每次询问”或“从不”）。

![|650](https://cdn.pkmer.cn/images/6e6a9acb33ff5b20f681a44bc29286d5.png!pkmer)

#### 改进

##### 数据库

- 添加了搜索工具栏按钮以筛选查询结果。
- 增加了通过拖放将文件导入数据库的功能。
- 在表格视图中右键单击单行，现在会显示与该文件相关的上下文菜单项。

##### 文件管理器

- 现在支持使用 `Ctrl-C`/`Ctrl-V`（在 macOS 上为 `Cmd-C`/`Cmd-V`）进行复制和粘贴操作。

##### 编辑器

- 当你在编辑器旁边的空白区域右键点击时，新增了菜单项：
    - 切换行号
    - 切换内联标题
- 修复了块引用后缺少空格的问题。
- 修复了粗体链接的样式问题。
- 拖拽链接时，图像大小不再被视为显示文本。

##### 其他

- 增加了对画板文件中反向链接的检测。它们现在会显示在“反向链接”视图中，并在“关系图”视图中被计为链接。
- “更换知识库...”已重命名为“管理知识库”。
- 新增了一个“更换知识库...”命令，以便通过键盘快速在知识库间切换。
- 新增了一个“打开知识库...”命令，以便通过键盘打开一个已有的知识库，同时保持当前知识库开启。
- 在文件管理器中按住 Alt 键点击文件，现在会将上一个活动项添加到选择中。
- **快速切换器**: 现在支持拖拽结果。
- 在图像上右键点击时，新增了“复制图像”菜单项。
- 从编辑器复制文本时，现在会包含 HTML 格式，使得粘贴到 Google Docs 等应用时更加方便。
- **Obsidian 同步** 现在会记录因文件过大而被跳过的日志。
- 改进了当查询包含空格时的模糊搜索结果。
- 为了增加安全性，在外部应用中打开文件现在会显示一个确认对话框。
- 增加了尝试打开可执行文件时的警告。
- 添加了新的应用翻译。

#### 已修复问题

##### 其他

- **钥匙串**: 增加了对某些 Linux 机器上加密功能不可用时的处理。
- 修复了关闭应用时布局并非总能保存的问题。
- 修复了在链接或标签附近选择文本会错误触发链接或标签标记的问题。
- 修复了关闭包含活动通知的弹窗窗口时，会导致这些通知移动到主窗口且永不消失的问题。
- 新增了一个 `unique` [URI 操作](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI)。
- 修复了在打字时大纲视图闪烁的问题。
- 修复了在数据库表格视图中更改行高后滚动位置不更新的问题。
- 修复了在弹窗窗口中点击“...”按钮时，“更多选项”菜单不关闭的问题。
- 修复了在列表项内右键点击链接时，上下文菜单中列表属性不显示编辑和移除选项的问题。
- **文件管理器**: 修复了当复制名称中包含“.”的文件夹时，“复制”菜单项生成的文件夹名称不完整的问题。

#### 开发者

- 安装程序已更新为使用 Electron v39.7.0（需要下载最新的安装程序）。
- 我们更新了翻译文件的创建和与应用打包的方式。对于翻译人员，请查看我们翻译仓库中的更新说明。
- 增加了使用 `corner-shape` CSS 属性为角部形状提供主题支持。替换了 `-electron-corner-smoothing`。需要 Chromium 139 和 Obsidian 1.11 或更高版本。
- **macOS**: 新增了 `--traffic-lights-offset-x` 和 `--traffic-lights-offset-y` CSS 变量，用于配置窗口框架中交通灯按钮的显示位置。这些偏移量现在会在应用加载时立即应用。
- 我们对 `BaseOption#shouldHide` 引入了一个破坏性 API 变更。此函数不再接收 `config` 作为参数。应改为从 `BasesViewRegistration.options` 访问选项。

    ```typescript
    registerView('my-view-id', {
            name: 'View Name',
            icon: 'my-icon',
            factory: () => new MyView(),
            options: (config: BasesViewConfig) => ({
                // 在此处 ^
            })
    });
    ```

- 向 `vault` 和 `adapter` API 添加了 `appendBinary` 方法。

#### 已修复问题

- **幻灯片**: 修复了在移动端状态栏上关闭按钮的位置问题。

#### 已修复问题

##### CLI

- 修复了 CLI 在 Windows 上无法被正确检测到的问题（在 Obsidian 1.12.3 中引入）。
- 当从过时的安装程序运行 CLI 时，添加了警告信息。

##### Windows

- 修复了打开包含编码反斜杠字符 (`%5C`) 的外部链接时的错误。

#### 已修复问题

- **iOS**: 修复了导致“每日笔记”和“书签”快捷指令无法工作的问题。
- **iOS**: 修复了“查看笔记”小组件无法立即刷新的问题。

#### 已修复问题

- 修复了复制粘贴时将链接和标注转换为标准 Markdown 的问题。
- **文件管理器**: 修复了当复制名称中包含“.”的文件夹时，“复制”菜单项生成的文件夹名称不完整的问题。
- 修复了在打开文件夹（如代码片段文件夹）时，“可执行文件”警告错误出现的问题。
- **CLI**: 修复了 CLI 在某些较长内容时挂起的问题。

#### 开发者

- 向 `vault` 和 `adapter` API 添加了 `appendBinary` 方法。

### 版本 v1.12.2

#### 新增功能

- **iOS**: 增加了原生分享表单支持。
- **iOS**: 新的快捷指令操作“添加书签链接”，用于将 URL 保存为 Obsidian 书签。

#### 改进

- 改进了对平板电脑上指针设备（如 Magic Trackpad）的支持：
    - 子菜单现在在悬停时展开。
    - 在属性编辑器中，右键点击会显示上下文菜单。

#### 已修复问题

- **iOS**: 修复了与边栏项目交互后，工具提示有时会出现的问题。

#### 改进

##### CLI

- 添加了 `help <command>` 以获取特定命令的帮助。
- 添加了 `--help` 作为 `help` 命令的别名。
- 添加了 `daily:path` 命令以获取预期的每日笔记路径。
- 添加了 `rename` 命令。
- 将 `search` 命令拆分为 `search` 和 `search:context`。
- 在帮助输出中为过滤器参数添加了描述。
- CLI 命令现在默认静默运行，并且默认不期望存在活动文件。
    - `all` 参数已被 `active` 替代（用于定位活动文件）。
    - `silent` 参数已被 `open` 替代，用于打开目标。
- CLI 现在会忽略以 `--` 开头的未识别标志。
- 将 CLI 设置取消按钮更改为“跳过”，以表明该步骤是可选的。

##### 数据库

- 增加了通过拖放将文件导入数据库的功能。
- `file.linksTo()` 现在将画板内嵌入的文件视为链接。

##### 其他

- 在图像上右键点击时，新增了“复制图像”菜单项。
- 从编辑器复制文本时，现在会包含 HTML 格式，使得粘贴到 Google Docs 等应用时更加方便。
- **Obsidian 同步** 现在会记录因文件过大而被跳过的日志。
- 改进了当查询包含空格时的模糊搜索结果。
- 为了增加安全性，在外部应用中打开文件现在会显示一个确认对话框。
- 增加了尝试打开可执行文件时的警告。

#### 已修复问题

- 修复了通知在关闭后不再出现的错误。
- 修复了在打字时大纲视图闪烁的问题。
- 修复了在数据库表格视图中更改行高后滚动位置不更新的问题。
- **数据库**: 修复了如果输入文本过长，搜索输入框与结果计数重叠的问题。
- 修复了在弹窗窗口中点击“...”按钮时，“更多选项”菜单不关闭的问题。
- 修复了应用重启有时会使应用处于损坏的退出状态的问题。
- 修复了如果 CLI 未启用，`obsidian://` URI 无法工作的问题。
- 修复了在列表项内右键点击链接时，上下文菜单中列表属性不显示编辑和移除选项的问题。
- **CLI**: 修复了命令无法处理 Unicode 字符的问题。
- **CLI**: 修复了粘贴问题。
- **CLI**: 修复了工作区加载完成前命令就运行的问题。
- **CLI**: 修复了当指定的知识库未找到时，错误地对当前知识库进行操作的问题。
- **CLI**: 修复了在 Windows 上包含冒号的参数无法被正确处理的问题。
- **macOS**: 在 CLI 调用期间，程序坞图标不再显示。

#### 开发者

- 如果你的主题或代码片段使用新的 CSS 变量更新了 macOS 交通灯按钮的位置，这些偏移量现在会在应用加载时立即应用。

#### 改进

- 应用现在默认使用系统语言，并在新用户引导过程中增加了语言选择器。
- 新增了“独立笔记”App 快捷操作（长按应用图标时显示的菜单）。

#### 已修复问题

- 从文件删除提示中移除了“删除且不再询问”选项。
- **Obsidian 同步**: 修复了如果在 Obsidian 保存最新的同步状态前关闭应用，文件可能会被覆盖的问题。

#### 已修复问题

- 修复了如果设备语言不是英语，语言选择器不允许你选择“英语”的问题。
- **CLI**: 如果包含知识库参数，它必须是第一个参数。
- 尝试打开应用的第二个实例（例如从 Windows 任务栏）现在将再次打开知识库启动器。
- **实时预览**: 修复了 SVG 无法渲染的问题。
- `daily:prepend` CLI 命令现在将内容插入到 frontmatter 之后，而不是文件的起始位置。

## 插件新闻

### 新增

[Capitaliser](obsidian://show-plugin?id=capitaliser) By Emanuel Oliveira

![|650](https://cdn.pkmer.cn/images/e8279b48e7da92810850d6e3126cc717.png!pkmer)

> 通过快捷键循环切换所选文本的大小写格式，在全小写、单词首字母大写和全大写之间快速切换。

[Double-Click Image Opener](obsidian://show-plugin?id=double-click-image-opener) By atman

![|650](https://cdn.pkmer.cn/images/bd30b1217260e56aeb01eb7cd716ac47.png!pkmer)

> 在预览模式下双击图片，即可调用系统默认图片查看器打开原图，适合放大查看或交给专业图像工具继续编辑。

[Role Switch](obsidian://show-plugin?id=role-switch) By Zafrem

![|650](https://cdn.pkmer.cn/images/4554a6ae9a4f6fbf6e91533d9c4ec4ea.gif!pkmer)

> 为不同“工作角色”（如开发者、写作者、研究者等）创建独立的工作状态视图，在切换角色时进行有意识的过渡，并记录会话与专注时间，帮助管理多角色、多项目的上下文切换成本。

[Bluesky](obsidian://show-plugin?id=bluesky) By eharris128

> 在侧边栏提供 Bluesky 面板与“扩音器”图标，可直接在 Obsidian 内撰写并发布 Bluesky 帖子或长线程，支持使用 Bluesky App Password 登录，在笔记与社交分享之间无缝切换。

### 更新

#### 🤖 AI 与自动化

- [YOLO](obsidian://show-plugin?id=yolo) By Lapis0x0
  **Agent 与工具链稳定性**：为 Chat 模式新增“打开技能”与“读取文件”权限，扩展能力边界；减少工具调用时的页面闪动；优化 Agent 模式下工具调用的前端识别与渲染速度；深度优化 Agent 文件工具的调用链路，降低参数解析失败概率。
  **智能上下文与 `@` 引用**：在 `@` 一级菜单中新增“当前文件”选项；优化对 `@文件/@文件夹` 的引用逻辑，默认仅传递路径信息，需要时通过只读工具按需读取内容，大幅降低上下文 Token 消耗。
  **编辑与渲染精度**：统一工具调用显示文本；修复从 Obsidian 块复制的文本与渲染预览不匹配的问题；优化高亮选择样式，修复与系统选择重叠时的“重影”问题；增强 Obsidian 格式编辑稳定性，精确替换失败时采用模糊匹配（阈值 0.95）查找高相似块，自动拒绝歧义候选。
- [QuickAdd](obsidian://show-plugin?id=quickadd) By Christian B. B. Houmann
  **.base 模板成为可重用的 QuickAdd 构建块**：
    - 可将实时 Base 驱动的部分插入现有 Markdown 笔记（如 MOC、仪表盘、项目中心）。
    - 在 Capture 格式中使用 `{{TEMPLATE:...}}` 重用 `.base` 模板，将 Base 内容插入活动笔记。
    - 直接从 Template 选择创建真正的 `.base` 文件。
  **直接捕获到 Canvas 卡片**：
    - 支持两种 Canvas 捕获工作流：捕获到指定 `.canvas` 文件中的特定节点；捕获到活动 Canvas 中选中的一张卡片。
- [SystemSculpt AI](obsidian://show-plugin?id=systemsculpt-ai) By SystemSculpt.com
  **错误提示改进**：纯文本 `413`（上传过大）错误现在直接展示，而不是被错误地包装为“JSON 解析失败”。
  **上传分片策略改进**：音频上传的分片决策改为基于估算的 multipart 请求大小，更好避免接近大小上限的录音被拒绝。
  **移动端转写对齐**：移动端转写改用 hosted jobs pipeline，与桌面端更接近一致。
- [Large Language Models](obsidian://show-plugin?id=large-language-models) By eharris128, r-mahoney, & jsmorabito
  **新模型支持**：新增 Mistral AI 远程提供方；新增 Ollama 本地 LLM 支持；新增 OpenAI 模型 GPT-4o-mini、GPT-4.1、o3、o4-mini、gpt-image-1；新增 Claude 4.5/4.6 模型 Sonnet 4.6、Opus 4.6、Haiku 4.5。
  **图像生成**：简化图像质量验证；修复 gpt-image-1 的 b64_json 处理，图片现在能正确渲染；用 gpt-image-1 替代 DALL-E 2/3。
  **其他**：添加功能区图标切换设置；用户可选的空白新聊天头像 SVG。
- [Copilot](obsidian://show-plugin?id=copilot) By Logan Yang
  聊天历史记录现在渐进加载，支持无限滚动。
  Miyo 改进：支持自定义服务器 URL（远程部署），启用前增加确认对话框，更顺畅的启用流程。
  修复了 Copilot Plus 用户的“连接错误”（TLS 证书问题）。
  修复了 Gemini 的流式崩溃和代理循环中途停止的问题。
  移动端和 UI 修复：移动端浮层正确关闭；聊天中表格正确渲染；过时的选中文本不再渗入后续消息。
- [AI Tagger Universe](obsidian://show-plugin?id=ai-tagger-universe) By Hu Nie
  改进 LM Studio 错误信息，HTTP 502/503 错误显示可操作的故障排查提示；新增“保留现有标签”选项，启用后 AI 标签与现有标签合并而非替换；可配置请求超时时间，默认从 30 秒增加到 60 秒，现在可在 15–300 秒间调节。
- [Canvas LLM](obsidian://show-plugin?id=canvas-llm) By Mike Farlenkov
  为 `Text input` 节点新增“阅读模式”。
- [AI Agent](obsidian://show-plugin?id=ai-agent) By Manuel Magaña López
  新增 3.1 Gemini 模型；`open-agent-sidebar` 热键改为 `toggle-agent-sidebar`，允许用户关闭已打开的侧边栏；作者将恢复项目开发，计划新增除 Google 外的模型提供商。
- [Github Copilot](obsidian://show-plugin?id=github-copilot) By Vasseur Pierre-Adrien
  允许用户选择是否在启动时自动打开聊天。
- [Steward](obsidian://show-plugin?id=steward) By Dang Nguyen
  **工具**：新增在命令流中直接切换 Agent 容量的工具。
  **Guardrails**：增加 Guardrails 支持，通过基于规则的防护限制文件和文件夹访问。
  **对话压缩**：添加对话压缩功能，保持长聊天性能的同时保留完整消息召回。
  **UI**：更新思考块渲染，对长响应应用最大高度以提高可读性。

- [Auto Note Importer](obsidian://show-plugin?id=auto-note-importer) By uppinote
  RateLimiter 现在自动检测 429（请求过多）响应，并根据服务器指定的延迟重试，默认最大重试次数 3，后备延迟 30 秒。
- [Nexus AI Chat Importer](obsidian://show-plugin?id=nexus-ai-chat-importer) By Superkikim
  自动识别所选 ZIP 的提供方（provider），多提供方混选时忽略不匹配的压缩包。
  **拆分导入报告**为 3 份交叉链接的报告：移动端轻量浏览索引、完整逐会话列表、全局统计与压缩包级状态汇总。
  **统一 ZIP 处理模型**：桌面与移动端统一策略，先检查 central directory，再仅读取必要条目。
  **移动端导入稳定性**：支持补齐/更新缺失或变更的笔记；支持“重新处理并重建全部笔记”；一次只处理一个 ZIP 以控制内存占用。
  **首次安装引导**：欢迎对话框点击 Get Started 直接打开插件设置，便于首次导入前配置目录。

#### 📋 任务与项目管理

- [Task List Kanban](obsidian://show-plugin?id=task-list-kanban) By Chris Kerr, Erika Rice Scherpelz
  限制“添加新文件”的范围仅为看板文件夹；（可能）修复了安卓平板设置齿轮不显示的问题；（可能）修复了水平流动模式下垂直滚动不工作的问题；修复了标签过滤器选择状态未正确重新计算的问题。
- [Tag Timer](obsidian://show-plugin?id=tag-timer) By quantavil
  **完全重新设计**：从头使用现代 TypeScript 和 CodeMirror 6 重建。
  **高效渲染**：使用 CodeMirror 6 `ViewPlugin` 和 `WidgetType`，在实时预览和阅读视图中实现非破坏性、高性能的 UI 叠加。
  **零依赖**：无外部库，占用极小，稳定性高。
  **计时功能**：热键 Alt+D 删除定时器，Alt+C 切换倒计时，Alt+S 切换秒表。
  **可靠性**：每行自动确保只有一个计时器；跨所有库文件的运行中计时器稳健跟踪；退出时自动暂停，重启时无缝恢复。
  **手动时间输入**：流畅的模态框，可精确设置或调整计时器值（支持 `mm:ss`、`hh:mm:ss` 或分钟）。
  **设计**：全新项目品牌横幅；活动计时器视觉提示（⌛/⏳）；完美适配 Obsidian 亮/暗主题；交互式徽章，点击切换，右键菜单丰富。
  **数据持久化**：计时器以轻量级 Markdown 标签形式内联存储，完全可搜索，面向未来。
- [TickTick Quick Add Task](obsidian://show-plugin?id=ticktick-quickadd-task) By Muxin Li
  新增标签位置设置：可选择将 `#ticktick` 追加在末尾或前置到开头；新增选择模式设置：可在“捕获当前行”与“捕获整个段落”之间切换。

#### ✍️ 写作与创作

- [Storyteller Suite](obsidian://show-plugin?id=storyteller-suite) By Maws
  **战役与 DnD 模式**：新增完整战役会话管理（队伍状态、物品栏、生命值、状态、标记、已揭示设定、阵营声望）；新增战役命令（打开会话、继续最近会话、从当前场景开始、记录游玩日志）；强化场景分支逻辑，分支可对物品、标记、设定解锁、阵营声望变化作出反应；新增更高级的物品效果，例如生命值变化、状态变化、场景移动、设定揭示、阵营声望变化等。
  **角色卡预设**：新增 DnD 主题角色卡预设；新增基于 Markdown 与 Callout 的“Obsidian 风格”预设；改进角色卡预览与保存流程。
  **时间线与甘特图体验重做**：重做时间线/甘特图，更干净、更稳定；改进分组泳道、进度渲染、里程碑过滤、依赖箭头与依赖关系持久化。
  **地图与战役看板**：将图片地图作为“可交互看板”接入战役流程；改进密集地图下的图钉、弹窗与标记交互；新增 SVG 支持两种模式（大 SVG 栅格化分块、轻量 SVG 直接叠加）。
  **编译与写作流程**：扩展编译工作流，支持自定义编译步骤；改进手稿输出的草稿与工作流处理；优化新建文件与草稿提示相关的场景/草稿行为。
  **实体系统与笔记同步**：分组笔记以“真正的、由笔记支撑的实体”方式工作；改进笔记与插件状态之间的同步；改进 WikiLink 属性，使链接实体在属性面板/图谱中显示更正确；统一实体弹窗中大量自定义字段的行为。
  **图库**：新增多图上传；改进图库文件夹同步与托管文件夹发现；优化图库渲染与选择器行为。
  **移动端、引导与文档**：新增真正的首次启动上手指南；新增应用内“更新亮点”弹窗；更新文档与教程以匹配当前功能集；改进移动端仪表盘行为并清理拥挤的界面细节。
- [Note to MP](obsidian://show-plugin?id=note-to-mp) By Sun Booshi
  支持使用 LESS 定义文章样式，可完全自定义文章样式（新增“自定义”主题）；优化超宽表格显示（横向滚动）。
  **工作流支持**：可与 n8n、Coze 等工作流平台联动，支持发布前/后自动执行额外动作，支持 AI 自动生成内容。
  **会员功能**：更安全获取公众号 AccessToken 的专用接口；在笔记中插入 `workflow` 代码块，发布前/后自动调用外部工作流；工作流参数支持动态引用当前笔记属性、笔记内容、仓库文件。
  **会员功能**：支持将 Obsidian 笔记发布为 𝕏（推特）长文章（需配合浏览器插件「文兔兔助手」）。
- [Custom Slides](obsidian://show-plugin?id=custom-slides) By David V. Kimball
  **自动缩放**：添加可选的自动缩放开关，自动缩小溢出的垂直幻灯片内容以适配视口。
  **幻灯片编号**：可选显示幻灯片编号，位置可选左下或右下。
  **页脚文本**：在所有非标题幻灯片上显示可配置的页脚文本。

#### 🧠 卡片笔记

- [Decks](obsidian://show-plugin?id=decks) By Xherdi Lika
  **设置**：更改牌组标签时会自动迁移个人资料 - 标签映射以使用新标签。
  **解析**：牌组标签现在可在插件设置中配置（解析部分）。新安装默认为 `#decks`，现有用户保留 `#flashcards` 直到手动更改。
  **UI**：筛选占位符和空状态帮助文本现在反映配置的牌组标签。
- [Spaced Repetition](obsidian://show-plugin?id=obsidian-spaced-repetition) By Stephen Mwangi
  实现可自定义的一天开始时间；实现当复习序列只有一个牌组时，直接打开闪卡视图；添加一个按钮，可跳转到笔记中的当前复习项。
- [Text Autocomplete](obsidian://show-plugin?id=text-autocomplete) By Christ Degni
  支持从文本文件导入词典（必须是 `.txt` 文件，每行一个单词）；调整了默认词典的过滤。
- [Note Definitions](obsidian://show-plugin?id=note-definitions) By Dominic Let
  添加“区分大小写”选项。
- [Yanki](obsidian://show-plugin?id=yanki) By Eric Mika
  在文件浏览器上下文菜单中添加项目，可将文件夹添加/移除 Anki 闪卡文件夹列表。

#### 🎨 界面与外观

- [Pixel Banner](obsidian://show-plugin?id=pexels-banner) By Justin Parker
  修复了当笔记包含 frontmatter 并使用文件夹组横幅时，每次按键都闪烁的问题；修复了更改设置后内容起始位置未正确应用的问题；修复了普通路径对视频文件 (`.mp4`, `.mov`) 无效的问题；修复了 `.webp` 图片不显示的问题；新增对 AI 图像生成模型 `Seedream 4`、`Nano Banana` 的多图像引用支持；修复了“Pixel Banner Plus Server” URL 错误的问题。
- [Codeblock Customizer](obsidian://show-plugin?id=codeblock-customizer) By mugiwara
  可在编辑器模式下使用 PrismJS 进行语法高亮，使更多语言获得高亮，并让编辑/阅读模式的高亮更一致。
- [Custom Note Width](obsidian://show-plugin?id=custom-note-width) By 0skater0
  **单位扩展**：支持 %、px 和 ch，每个单位有用户可配置的最小/最大范围。
  **代码块宽度**：独立于编辑器宽度的代码块宽度控制，每个模式（阅读、源码、实时预览）可单独切换。
  **国际化**：支持英语、德语和 en-GB，自动检测语言。
  **UI 改进**：设置界面重新设计，分为语言、宽度、代码块和每笔记部分。
  **性能优化**：滑块交互使用 250ms 防抖写入 YAML；直接从元数据缓存同步读取宽度；双 CSS 策略防止标签切换时闪烁。
  **YAML 向后兼容**：旧版纯数字值被解释为百分比。
- [Mouse Navigation](obsidian://show-plugin?id=mouse-navigation) By HoBeomJeon
  新增手势引擎设置，有两个选项：`legacy-v1` 和 `modern-v2`。如果升级后行为异常，可切换回 legacy-v1。

#### 🔗 文件与链接

- [Notebook Navigator](obsidian://show-plugin?id=notebook-navigator) By Johan Sanneblad
  **新 API 2.0**：添加 whenReady()、标签集合助手、属性节点助手、新的标签和属性上下文菜单钩子等。
  **新命令**：切换双窗格方向（水平/垂直）。
  **新设置**：列表 > 笔记 > 将属性药丸链接到 URL（点击打开 URL）；将属性药丸链接到笔记（点击打开文件）。
  **新设置**：列表 > 笔记 > 特色图像像素大小（缩略图最大宽度可调至 512 像素）；特色图像显示大小（列表窗格中最大垂直尺寸可调至 128 像素）。
  **新设置**：列表 > 笔记 > 未完成任务背景色，便于在列表窗格中快速找到未完成任务。
  可在菜单或 frontmatter 中为文件设置背景色。
  **彩虹色**：可为快捷方式、最近文件、文件夹、标签或属性设置单独的彩虹色，可选色轮或 RGB 混合。
  **改进**：快捷键行在快捷键徽章为“无”时不再预留尾部徽章空间；可在“属性键可见性模态框”中直接点击属性键快速在三个位置（导航窗格、列表窗格、文件菜单）切换可见性。
  **更改**：更新 fontawesome 图标 7.1→7.2，simple-icons 15.20→16.11（注意：simple-icons 移除了 44 个图标，如 canva、openai、slack，需重新分配）。
  **修复**：修复了当导航窗格中无可见属性且“显示属性文件夹”禁用时，属性文件夹仍显示的问题；修复了禁用“显示快捷方式和最近项图标”时也禁用了属性根虚拟文件夹图标的问题；修复了删除活动笔记时可能触发 Linter“文件未找到”错误的问题。
- [Neighbouring Files](obsidian://show-plugin?id=neighbouring-files) By Fabian Untermoser
  新增基于文件夹的导航命令；新增跨文件夹导航。
- [Media Viewer](obsidian://show-plugin?id=mediaviewer) By Devon22
  在上下文菜单中添加重命名选项；音乐文件也可以使用 img 参数设置缩略图。
- [Diagram Zoom Drag](obsidian://show-plugin?id=diagram-zoom-drag) By ChenPengyuan
  改进 SVG 图表导出：内联所有 CSS 样式，做到“屏幕所见即导出/复制所得”；新增：通过图片右键菜单复制完成后给出通知；调整：将 SVG 图片（图表等）恢复为在 Popup 模式中打开（beta）。
- [Folder Links](obsidian://show-plugin?id=folder-links) By Stefan Rausch
  新增对移动端的支持。
- [File Ignore](obsidian://show-plugin?id=file-ignore) By Feng
  更清晰的产品说明：文档明确说明 File Ignore 通过重命名磁盘上的文件/文件夹工作。
  **恢复支持**：持久化最近批次状态，可从设置页面撤销中断的运行。
  **更安全的批处理执行**：自动跳过受保护路径、目标冲突、重复目标以及当父目录已在重命名时的嵌套子条目。
  **执行前计划**：隐藏/显示现在在执行前计算重命名计划。

#### 📊 数据与同步

- [Google Contacts](obsidian://show-plugin?id=google-contacts) By aleksejs1
  新增设置项：同步时可保留邮箱/电话/地址的类型标签（home/work/mobile）。
- [Data Fetcher](obsidian://show-plugin?id=data-fetcher) By qf3l3k
  **导入支持两种 JSON 结构**：完整导出载荷 `{ version, exportedAt, endpoints }` 或纯 endpoints 数组 JSON。
  **设置中新增 Endpoint 导入/导出**，用于在设备间迁移别名配置。
  **Endpoint 导入新增两种模式**：合并（按 alias 更新并追加新增项）或替换（覆盖当前全部 endpoints）。
- [NotePix](obsidian://show-plugin?id=notepix) By Ayush Parkara
  添加了 mtime 安全的迁移写入，避免覆盖较新的编辑；添加了源笔记感知的替换回退，避免活动编辑器时机错过；添加了仓库候选限制和冷却时间，避免重复检查并减少延迟；添加了基于令牌的相同用户仓库发现，用于旧版图片解析；添加了安全的旧版链接迁移（从 `obsidian://notepix/<path>` 到 v2 格式），仅在成功解析仓库后执行。
- [Instapaper](obsidian://show-plugin?id=instapaper) By Instapaper
  可自定义笔记模板：使用 Mustache 模板完全控制高亮内容写入笔记的格式；可自定义文章属性：选择要写入的属性，并可重命名字段；为高亮生成块标识：使用 Obsidian 块引用语法 (`^h{highlight_id}`)；最低 Obsidian 版本要求提升至 1.11.0。

### 💡PKMer 出品

- [Floating Search](obsidian://show-plugin?id=float-search) By Boninall
  **CMDK 快速搜索模态框**：通过 `chooser.addSuggestion()` 批量渲染建议项，提升 UI 流畅度；支持文件名/路径的模糊匹配 + 标题模糊匹配；使用 Obsidian `metadataCache` 做渐进式标题搜索（零 I/O、即时结果）；支持双击 Shift（可配置）唤起快速搜索，并实时预览文件。
  **新增设置**：双击间隔灵敏度（150ms–600ms）；快速搜索触发键可选 Double Shift / Ctrl / Alt / Meta，或禁用。
  使用 `setViewState` 实现更可靠的文件导航，并支持 heading 子路径。
  在 FloatSearchModal 中使用方向键导航时支持自动预览。
  **配图**：暂无官方配图。
- [Easy Typing](obsidian://show-plugin?id=easy-typing-obsidian) By yaozhuwa
  切换规则存储路径后：自动重新加载规则引擎，并即时刷新设置面板；设置面板新增：文件夹选择器（基于 AbstractInputSuggest）与迁移按钮；新增：支持自定义规则文件存储路径，可将规则文件存放在库内任意文件夹中，提升与 Obsidian Sync 的兼容性。

## PKMer 相关知识推荐

### 🎉Obsidian CLI 正式版推送，如何启用？ - 小红书

> [🎉Obsidian CLI正式版推送，如何启用？ - 小红书](https://www.xiaohongshu.com/explore/69a253c6000000001502158d?xsec_token=ABZ5yLBTWCNBQ5P_eGKmXA6F1z5Z6ZD_b8SiO6-GbX-4U=&xsec_source=pc_user)

![|650](https://cdn.pkmer.cn/images/edc52ebaacfceb41a2f5d5d9d38f7c5e.png!pkmer)

- 💻 Obsidian CLI 是一个命令行界面，有了这个神器，我们就可以在命令行与终端中直接控制 Obsidian，就像官方宣传的那样："Anything you can do in Obsidian you can do from the command line."
- 👆🏻 这时候就会有朋友发问了，我为什么要在命令行中控制 Obsidian 呢？
- 🦾 在命令中控制 Obsidian，就可以更方便地与很多具有自动化的外部工具集成起来——比如 CC
- 🔥 那么我们要怎么启用 Obsidian CLI 呢？
- ⚙️ 首先确保 Obsidian 的 Installer Version 为最新版（1.12），然后在设置 - 关于界面底部，找到「命令行界面」，勾选开启并选择注册即可（P2 & P3）
- ⌨️ 接下来保持 Obsidian 在后台运行，打开电脑的终端，输入 obsidian 即可召唤 Obsidian CLI！
- 💥 Obsidian CLI 的功能不仅囊括了日记、阅读、创建笔记、搜索、Bases、书签等日常操作，甚至还包括了开发者功能——例如调试工具中的重新加载插件（热加载）、界面截图、运行 JavaScript 代码等
- ✍🏻 在 CC 中安装 Obsidian 官方发布的 Obsidian Skills，即可让 CC 学会调用 Obsidian CLI 来处理笔记！
- ✨ 虽然在 Obsidian CLI 出现以前，就已经有很多对 CC 控制 Obsidian 的尝试，但 Obsidian CLI 毫无疑问更具优势——更加精确的功能，以及对 CC 来说可以用更少的 token 达到相同甚至更优的 AI 自动化效果

### 终于等到 Zotero 8 正式版!重构&主题全新上线 - 小红书

> [终于等到Zotero 8正式版!重构&amp;主题全新上线 - 小红书](https://www.xiaohongshu.com/explore/69743cd2000000001a024197?xsec_token=AB4NRUnXSItiRAHmkgG3RJIFYqG7S2nzOIWR7NIzD1IYM=&xsec_source=pc_user)

![|650](https://cdn.pkmer.cn/images/4e3045fe6c32a75d2f65d32c667d70a6.png!pkmer)

- 💎 沉寂了将近一年多，Zotero 正式版终于又有大动作了！一起来看看本次 8.0 大版本的更新内容汇总吧！
- 🔥 首先说大家最关注的：相比从 6.0 升级到 7.0，本次从 7.0 升级到 8.0 的过程中几乎没有什么阻力：如果电脑上已经安装了 7.0 大版本的 Zotero，在软件内“帮助”菜单选择“检查更新”即可直接更新到 8.0 大版本
- 🦾 而且 8.0 版本的很多特性都在测试版中已经推出了很久，因此经过插件作者们的充分测试，现在大家的大部分常用插件应该都已适配完毕，相比去年从 6.0 升级到 7.0 简单了很多~
- 📝 本次 8.0 大版本更新的主要内容如下：
- 🎨 重新设计的引用对话框（P2、P3）取代了旧的红色工具栏与经典引用对话框，并在这个统一的 UI 下同时提供列表模式与文库模式两种引用模式（可通过右下角单击自由切换），新的文献引用器会自动在顶部显示当前在 Zotero 中选中的文献与已打开的文献，便于直接选取
- 🖌️ 条目列表（PDF、EPUB 与网页快照）可以显示与检索批注内容（P4）：现在既可以在文献库中按照标签检索批注，也可以通过批注内容反向搜索到文献条目，丝滑体验谁懂！
- 👁 阅读器护眼主题（P1）：这个功能在移动端已经上线很久，而且除了内置的羊皮纸色外还可以由用户自定义背景色，适用于 PDF、EPUB 与网页快照
- ✍🏻 条目笔记现在可以通过标签页的方式，在 Zotero 中全宽展示阅读！
- 🖥 网页快照会被重新排版、移除不必要的页面元素以提升阅读体验，行高可调
