---
uid: 20261001123036
title: Obsidian Weekly 2026-09-30：8 月下半月~9 月汇总
tags: 
description: 
author: 
type: other
draft: false
editable: false
modified: 20261001123305
---

# Obsidian Weekly 2026-09-30：8 月下半月~9 月汇总

> [!Abstract]
> **统计时间**：2026-08-17 21:00 ~ 2026-09-30 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.14.3 内测版现已发布

#### V1.14.3 桌面版

##### 新增

- 为 macOS 上的 Markdown 文件添加了 Quick Look 预览（需要最新安装程序）。
- 为 macOS 和 Windows 上的 `.md`、`.base` 和 `.canvas` 添加了文档图标。
- 数据库：在工具栏中添加了“分组”菜单，用于选择分组依据的属性。可用它在任意视图类型中重新排序、隐藏和手动添加分组。
- 重新设计了空状态，并在启用相应插件时添加了“新建数据库”和“新建白板”。

##### 改进

- 添加了“增大字体大小”和“减小字体大小”命令。
- 当有更新的安装程序可用时，在“设置 → 通用”中添加了更新提示。
- 数据库：改进了分组标题和只读布局（例如卡片、看板）中日期和时间的渲染方式。
- 数据库：嵌入的看板不再具有固定高度。
- 改进了快速切换器和建议中的模糊搜索：字母作为单词开头的匹配项现在排名更高，并且在大型库中搜索更快。
- 打开不受信任的库时，只要“你是否信任此库的作者”对话框显示在屏幕上，主题和片段将被暂时禁用。
- 改进了书签、大纲、标签和同步视图中的搜索。匹配项内的所有内容现在都会保持可见。没有内容可显示的分组会被隐藏。
- 在源码模式下，在笔记第一行按 ArrowUp 现在会将光标移动到内联标题，就像在实时预览中一样。

##### 修复

- 修复了在相邻项目之间移动时工具提示短暂消失的问题。
- 修复了看板列计数缺少千位分隔符的问题。
- 数据库：修复了筛选规则中过长的属性名将运算符和值挤出视图的问题。
- 数据库：修复了“全部隐藏”导致属性菜单渲染不正确的问题。
- 修复了 Slides 插件中潜在的 iframe 注入问题。
- 修复了页面预览显示在数据库工具栏菜单后面的问题。
- 修复了从右到左语言中 Home 和 End 键的编辑器问题。
- 修复了在所有笔记中搜索标题（`[[##`）时导致大型库卡死的问题。
- 修复了在嵌入笔记（例如从数据库新建的笔记）中对无效标题按 Enter 会还原标题并将焦点移出标题的问题。现在标题会保持焦点，以便你修正名称。
- 白板：修复了将卡片缩小到某个标题或块后，使用“交换文件…”选择同一文件时仍显示该部分的问题。

##### 开发者

- 为工具提示、通知、快捷键和标签页添加了 CSS 变量，使用前缀 `--tooltip-`、`--notice-`、`--hotkey`、`--tab-inner-` 和 `--tab-container-`。

#### V1.14.3 移动版

包含截至 Obsidian 桌面版 1.14.3 的所有新功能和错误修复。

##### 新增

- iOS：当“快速捕捉”的行为设置为每日笔记或选定笔记时，为其添加了模板支持。

##### 修复

- iOS：修复了在 iOS 17 及更早版本上启动应用时崩溃的问题。
- iOS：修复了选择库根目录时，“快速捕捉”将新笔记保存到当前文件所在文件夹的问题。
- iOS：修复了“快速捕捉”位置表单与当前配色方案不匹配的问题。
- iOS：修复了在输入韩语时音节有时会消失的问题。
- 修复了登录过期后，库选择器屏幕上的“设置 Obsidian 同步”一直加载的问题。

#### V1.14.2 桌面版 (2026-09-15)

##### 新增

- 你现在可以在 Obsidian 中打开库外部的文件。文件会在当前窗口中打开（仅桌面版）。
- 添加了“从库外部打开文件…”命令。选择你电脑上的任意文件并在应用中查看。
- Obsidian 现在会出现在操作系统的“打开方式”菜单中，你可以将其设置为 Markdown 文件的默认应用（需要下载最新安装程序）。

##### 改进

- 所有应用内链接现在都会带你前往 Obsidian 网站的本地化版本。
- 基础字体大小不再保存到 `appearance.json`。现在存储在设备的本地存储中，因此不再通过 Obsidian 同步。
- 改进了看板布局和文件浏览器中的拖放。在边缘附近拖动时，视图现在会平滑滚动。
- 编辑器链接建议（例如 `[[`）和快速切换器在文件数超过 10,000 的库中不再切换到简化算法。现在始终使用模糊匹配。
- 格式转换器：从转换器插件中移除了旧格式。

###### 数据库

- 看板：当按 `file.folder` 分组时，卡片现在可以在文件夹列之间移动。
- 看板：当按 `file.folder` 分组时，在列中创建笔记现在会将其放入相应文件夹。
- 看板：当移动卡片失败时（例如笔记属性无效或目标文件夹缺失）添加了错误反馈。

##### 修复

- 编辑器：修复了 Markdown 格式字符在电子邮件周围无法正确解析的问题（例如 `*Some email: random@example.com*`）。
- 编辑器：修复了点击折叠的引用式链接（例如 `[link][]`）会跳转到错误目标的问题。
- 数据库：修复了预览看板视图时页面预览显示错误高度的问题。
- 修复了高棉语使用了错误语言代码的问题。

#### V1.14.2 移动版 (2026-09-15)

包含截至 Obsidian 桌面版 1.14.2 的所有新功能和错误修复。

##### 新增

- iOS 27：添加了对新的超大号“快速捕捉”和“查看笔记”小组件的支持。

##### 改进

- iOS：“快速捕捉”的配色方案现在与当前库的配色方案匹配。

##### 修复

- 数据库：修复了将视图导出为 CSV 文件的问题。
- 修复了库切换器不总是显示深色键盘的问题。
- iOS：修复了“快速捕捉”不总是具有初始输入焦点的问题。
- iOS：修复了库较大时，关闭应用后“快速捕捉”在几秒钟内不可用的问题。
- iOS：修复了启动期间进度条短暂闪烁的问题。
- iOS：修复了分享表单为 Instagram 帖子生成无效文件名的问题。
- Android：修复了启动画面渲染不正确的问题。
- Android：修复了“拍照”导航栏项目不总是提供直接从应用拍照选项的问题。
- 平板：修复了调试对话框中的布局回归问题。

#### V1.14.1 桌面版 (2026-09-08)

##### 改进

- 数学渲染现在使用 `MathJax 4.1.3`，取代了 `MathJax 3` 和 `Temml`。
- 数据库：为表格视图添加了从右到左（RTL）支持，包括键盘导航、选择和水平滚动。

##### 修复

- 修复了默认打开文件选项不工作的问题。
- 修复了从操作系统菜单打开最近库不工作的问题。
- Vim：修复了删除并粘贴编号列表项时插入空行和空编号项的问题。
- 修复了快速切换器和命令面板中的输入悬停样式。
- RTL：修复了从右到左语言中的加载动画。

#### V1.14.1 移动版 (2026-09-08)

包含截至 Obsidian 桌面版 1.14.1 的所有新功能和错误修复。

##### 新增

- iOS 26：添加了可配置的“快速捕捉”主屏幕小组件。添加快捷方式以直接捕捉到不同位置。

##### 改进

- 文本和界面元素现在会随系统首选文本大小缩放，包括更大的辅助功能尺寸。
- iOS：锁定屏幕和控制中心中的“快速捕捉”小组件现在可以配置为打开特定位置。
- iOS：快捷指令中的“快速捕捉”操作现在支持位置参数。
- iOS：“快速捕捉”模板现在支持 `{{openStreetMapLink}}`，用于插入指向你当前位置的 OpenStreetMap 链接。
- iOS：改进了展开的灵动岛中“快速捕捉”实时活动的布局。

##### 修复

- 修复了从右到左语言中后退和前进滑动手势被反转的问题。
- iPad：修复了在分屏视图或台前调度中调整窗口大小时应用和状态栏尺寸不正确的问题。

##### 开发者

- 对于应遵循系统首选文本大小的文本，请使用 `--font-preferred-size`。在移动端，它会将 `--font-text-size` 与 `--preferred-text-scale` 乘数结合使用。

#### V1.14.0 桌面版 (2026-09-02)

##### 新增

###### 编辑器

- 添加了颜色高亮。在高亮开头添加颜色表情符号（🔴、🟠、🟢、🔵、🟣）以更改其颜色，或从新的格式子菜单中选择颜色。
- 在编辑器中输入 `==` 现在会建议高亮颜色。
- 实时预览：当光标与高亮重叠时，现在会出现一个内联色块。点击它可以快速更改高亮颜色。

###### 数据库

- 添加了新的看板布局，以按有序列显示文件。使用“分组依据”定义列，然后拖放以重新排序。
- 分组现在可以在表格、卡片和列表布局中折叠。

##### 改进

- 当 Obsidian 设置为从右到左（RTL）语言时，整个工作区（包括侧边栏）现在会翻转。命令保持不变，因此“切换左侧边栏”现在指的是视觉上的左侧边栏，即使界面已翻转。
- 关闭弹出窗口（例如设置）现在快得多。
- 编辑器：将列表项粘贴到已包含列表标记（例如 `- [ ]`）的行上不再重复该标记。
- 编辑器：改进了内联格式命令。例如，对以下行执行“切换粗体”：

    ```
    some **bold |text** on the line|
    ```

    现在结果为：

    ```
    some **bold text on the line**
    ```

##### 修复

- 修复了大型库中因属性在后台重新计算而导致的周期性输入延迟。
- 修复了弹出窗口中的复制和粘贴无法正常工作的问题，包括在白板中复制和粘贴笔记。
- 网页查看器：修复了 Google 登录失败的问题。
- 数据库：修复了“+”按钮无法为未解析链接生成正确前言的问题，例如 `file.hasLink("[[unresolved]]")`。
- 编辑器：修复了 `OptionShift↑` 和 `OptionShift↓` 在 macOS 长段落中无法一致工作的问题，有时滚动位置会重置且文本选择不正确。
- 编辑器：修复了一个解析器问题，其中 `![](` 会导致文档中后续所有文本都被视为图像的一部分。
- 编辑器：修复了将光标移动到带有多个格式标记的行尾时（例如 `**__text__**`）光标位置不正确的问题。
- 编辑器：修复了在没有属性时，`↑` 无法从编辑器移动到内联标题的问题。
- 笔记合成器：修复了当章节与下一个标题之间只有一个换行时，“提取此标题”不保留换行的问题。

##### 开发者

- 用 Temml 替换 MathJax，以在实时预览和阅读模式中渲染数学公式。
- 编辑器：数学块（`$$`）的每一行现在都具有 `.HyperMD-math` 类。
- 设置：添加了可选的 `SettingDefinitionItem#id`，用于为单个设置设置唯一 ID。可以将其想象为 React 中的 `<div key={key} />`。用它来区分共享同一名称的兄弟设置，或在设置或设置页面重命名时保持稳定引用。

#### V1.14.0 移动版 (2026-09-02)

包含截至 Obsidian 桌面版 v1.14.0 的所有新功能和错误修复。

##### 改进

- 设置现在显示在应用上方的可关闭表单中。在任意位置滑动即可关闭。

###### iOS

- iOS 26 上的原生快速捕捉。无需等待库加载，即可从锁定屏幕、控制中心或快捷指令捕捉笔记。编辑时，你的捕捉内容仍可通过锁定屏幕和灵动岛上的实时活动访问。
- 快速捕捉：创建位置，以捕捉到新笔记、今天的每日笔记、书签笔记或你选择的任意笔记。
- 快速捕捉：模板支持变量，例如 `{{latitude}}` 和 `{{longitude}}`，用于表示你当前的位置。
- 分享表单现在使用库的强调色。

###### Android

- “打开笔记”小组件会在小组件中显示笔记名称。
- “插入附件”移动工具栏按钮现在允许直接拍照。

##### 修复

- “配置工具栏”按钮现在会直接带你到移动工具栏设置页面（以前会带你到“界面”）。
- 修复了快捷键设置溢出并导致页面水平滚动的问题。
- 修复了在命令面板中点击“x”按钮时缺少关闭动画的问题。

###### 从右到左语言（RTL）

- 设置：向后滑动手势现在已翻转。
- 页面动画现在已翻转。

#### V1.13.8 移动版 (2026-08-20)

- Android：修复了滚动时编辑器意外从阅读模式切换到编辑模式的错误。

## 插件新闻

### 社区插件

#### 新增

> [!Tip]
> 由于 AI 审核的引入，近期上架插件数量出现爆炸式增长，编者目前精力有限，故仅能选择性收录并简单介绍，详情可前往新版插件页面 [Obsidian Community](https://community.obsidian.md/) 获取。
> 本期插件收录截止到 2026-09-13。

##### AI 与 LLM

[AI Flashcard Generator](https://obsidian.md/plugins?id=ai-flashcard-generator) By _tajk19_

> 使用 Gemini 从笔记生成可定制的间隔重复闪卡。

[TaskNotes AI Reporter](https://obsidian.md/plugins?id=tasknotes-aireporter) By _telecomshy_

> 使用自定义模板和任意 OpenAI 兼容模型，从 TaskNotes 任务生成周报、月报、年报或自定义报告。

[Ask AI](https://obsidian.md/plugins?id=ask-ai) By _albibenni_

> 在新的消费级 AI 聊天中打开所选文本或整篇笔记。

[Note Improver](https://obsidian.md/plugins?id=note-improver) By _nuye_

> 使用 Groq 或本地 Ollama，通过可审查的 AI 编辑改进活动笔记。

[Asyntai AI Chatbot](https://obsidian.md/plugins?id=asyntai-ai-chatbot) By _asyntai_

> 将笔记发送到 Asyntai AI 聊天机器人知识库，向其提问，并阅读网站聊天和线索。

[FirstRecall](https://obsidian.md/plugins?id=first-recall) By _swartzrock_

> 在不修改笔记的情况下创建主动回忆笔记简报和章节学习卡片。

[Claude Usage](https://obsidian.md/plugins?id=claude-usage) By _eightk1ll_

> 在状态栏显示你的 Claude 订阅用量（5 小时和每周窗口）。

[Chatting with AI Plus](https://obsidian.md/plugins?id=chatting-with-ai-plus) By _o1xhack, nagisa525_

> 与 Anthropic、OpenAI 或你的 ChatGPT 账户聊天，管理命名会话，附加图片，并使用 Markdown 笔记。

[PKM Assistant](https://obsidian.md/plugins?id=pkm-assistant) By _jdhole_

> 构建住在库中的 AI 代理：持久记忆、技能、子代理和 MCP 工具。支持本地模型（Ollama、LM Studio）或云提供方。

[Sidecar AI](https://obsidian.md/plugins?id=sidecar-ai) By _andrey-eremin-de_

> 原生 AI 聊天侧边栏，支持 Google Antigravity、GitHub Copilot 和本地 AI CLI 提供方，无需 API token。

[Gemma 4 E4B LLM Wiki](https://obsidian.md/plugins?id=gemma-litert-wiki) By _itsyuimorii_

> 免费的 Gemma 4 E4B 本地 AI。将笔记/库变成活的 Karpathy LLM wiki。与库聊天、连接想法、发现空白、生成测验和闪卡——无需 API 密钥、Ollama 或服务器。
![Gemma 4 E4B LLM Wiki](https://raw.githubusercontent.com/itsyuimorii/obsidian-gemma4-litert-wiki/master/assets/poster/poster-p03.png)

[Agent LLMs](https://obsidian.md/plugins?id=agent-llms) By _teinam_

> 代理式 LLM 侧边栏，带四个后端（AWS Bedrock、Google Gemini、OpenAI、Ollama）。包括聊天、Graph RAG 库搜索、第二大脑层、待办管理、网页剪藏和 MCP 服务器集成。

[Aider](https://obsidian.md/plugins?id=aider) By _vimbackground_

> 与 AI 模型聊天，使用零配置原生工具和库知识检索来读取、写入和探索笔记。

[Niplex Research AI](https://obsidian.md/plugins?id=niplex-agentic-research) By _aj-niplex, niplex-foundation_

> 自主、移动优先的 Obsidian 研究 AI，具有受限库上下文、透明提示和经批准的编辑。

[Claudian Mobile](https://obsidian.md/plugins?id=claudian-mobile) By _charlesxiaomi_

> 用于库的极简 AI 写作和知识代理。直接调用 Anthropic API，因此在移动端和桌面端均可使用。

[AI Organizer](https://obsidian.md/plugins?id=ai-organizer) By _pitkil_

> 一体化 AI 插件：智能笔记格式化、一键图片整理、多模型聊天（OpenAI/Claude/Gemini）、AI 元数据、收件箱自动排序、链接建议、批处理和翻译。

[DeepHarness](https://obsidian.md/plugins?id=deepharness) By _jingshuaichen_

> 在库中与 DeepSeek Harness 代理聊天：它运行 bash、编辑文件并搜索网络来处理你的笔记。

[AI Vault Assistant](https://obsidian.md/plugins?id=ai-vault-assistant) By _1716775457damn_

> 接入 cc-switch 本地代理使用 AI：对话整理库、构建相互关联的笔记、列出插件与命令、内置 Skills、开放 MCP 服务供 Codex 等外部 Agent 接入、推荐并安装社区插件、经确认后修改插件配置。

[Claudian Session Sync](https://obsidian.md/plugins?id=claudian-session-sync) By _powoct_

> 在机器之间同步 Claudian 支持的代理 CLI（Claude Code 等）的会话文件，以便在其他地方恢复对话。

[Agent Comments](https://obsidian.md/plugins?id=inline-comments) By _ivyyang1999_

> 飞书风格的行内评论，直接存储在 Markdown 中。高亮文本、留下笔记、@ AI 编码会话来回复。
![Agent Comments](https://raw.githubusercontent.com/ivyyang1999/obsidian-inline-comments/master/docs/demo-en.gif)

[Gemini Universal Summarizer](https://obsidian.md/plugins?id=gemini-universal-summarizer) By _my-credits_

> 使用 Google Gemini API 为 YouTube、Reddit 和网页链接提供快速、直接的 AI 摘要，输出为简单的 Target/Words/Summary 格式。

[AI Scheduler](https://obsidian.md/plugins?id=ai-scheduler) By _racstan_

> Claudian 的自主 AI 助手层，具有 AI 规划、定时工作、自言自语、夜间库审查和通知。

[AI Reading Companion](https://obsidian.md/plugins?id=ai-reading-companion) By _antsally9-dev_

> 与 AI 聊所选 Markdown，并仅保存你确认的摘录。

[Local Agent Assistant](https://obsidian.md/plugins?id=local-agent-assistant) By _fwacjo81_

> 向本地 AI 代理询问有关 Markdown 库的问题，引用证据并添加审查笔记。

[Niplex Skills Helper](https://obsidian.md/plugins?id=niplex-skills-helper) By _niplex_

> 通过五字符市场代码安全查找并安装仅指令的 Niplex 技能。

[WorkBuddy AI](https://obsidian.md/plugins?id=workbuddy-ai) By _bigbay957-sudo_

> 在 Obsidian 侧边栏访问 WorkBuddy AI：多任务聊天、强引用、来源追踪、快速选区操作和工作模板。

[TaskNotes Task Colors](https://obsidian.md/plugins?id=tasknotes-task-colors) By _neclor_

> 通过颜色名称 frontmatter 属性或标签，在日历、议程、看板、列表和小部件视图中为 TaskNotes 任务着色。

[AI Advice](https://obsidian.md/plugins?id=ai-advice) By _doryyan_

> 使用 DeepSeek 分析当前笔记，然后复制或插入建议。

[Beyond Words](https://obsidian.md/plugins?id=beyond-words) By _jgxdb_

> 使用 LLM 将词汇表转化为分级英语段落——目标词在上下文中高亮，带翻译和短语库。帮助语言学习者通过真实使用而非死记硬背掌握单词。

[Explicit Formula - The Loop](https://obsidian.md/plugins?id=explicit-formula-loop) By _travisbergen2_

> 头脑风暴。看看 AI 实际听到了什么。锁定正确的行，重做其余部分，然后发送一个有效的提示。解释通过 explicitformula.com 服务运行（网络使用在 README 中披露）。

[Sideband Comments](https://obsidian.md/plugins?id=sideband-comments) By _insung_

> 基于文档的 AI 协作，在 Obsidian 和 VS Code 之间共享评论。

[CMDS Achmage](https://obsidian.md/plugins?id=cmds-achmage) By _cmdspace-dev_

> 隔离的 AI 聊天、Plan 图像生成、并行行内和文档级编辑，以及安全的 MCP 连接。

[Familiar](https://obsidian.md/plugins?id=familiar) By _bardicus-kilgore_

> 可以读取和写入笔记的 AI 助手。自带模型——OpenAI、Anthropic、Ollama 或任何 OpenAI 兼容端点。

[Review Comments AI](https://obsidian.md/plugins?id=review-comments-ai) By _mikegafert_

> 为与你的 AI 编码助手配合而构建的审查评论：线程以 CriticMarkup 形式存在于笔记中，因此 Claude Code 或本地代理可以阅读讨论、编辑文本并就地回复。

[Pi Teacher](https://obsidian.md/plugins?id=pi-teacher) By _franciszekamateu_

> 由 pi 代理工具驱动的 Obsidian 一对一 AI 导师。探查你所知道的，将课程规划为依赖图，并通过测验一步步引导你。使用你的 OpenAI/ChatGPT 订阅。

[AI Work Review](https://obsidian.md/plugins?id=ai-work-review) By _monday-cat_

> 审查并批准 AI 在 Markdown 库上的工作：规则检查、AI 报告摄取、带确认替换的提案差异。

[Contradiction Finder](https://obsidian.md/plugins?id=contradiction-finder) By _aguilaaa_

> 使用嵌入加 LLM 验证器查找声明相互冲突的笔记。

[Ambient Backlinks](https://obsidian.md/plugins?id=ambient-backlinks) By _aguilaaa_

> 每篇反向链接笔记与当前笔记关系的一行 AI 摘要。

[Niplex Research Brain](https://obsidian.md/plugins?id=niplex-research-brain) By _niplex_

> 隐私优先的库连接索引，带可选的 Gemini 嵌入和聚焦研究地图。

[Niplex Writing Insights](https://obsidian.md/plugins?id=niplex-writing-insights) By _niplex_

> 私有本地写作活动热力图、连续记录和可选的用户控制反思提示。

[AI Knowledge Workflow](https://obsidian.md/plugins?id=ai-knowledge-workflow) By _kellynovax_

> 组织项目知识、追踪任务，并为 AI 编码代理准备结构化上下文。

[AI PM Tool](https://obsidian.md/plugins?id=ai-pm-tool) By _caesarloo_

> 将需求笔记转化为实时项目概览：解析 frontmatter、同步 SVN 快照、通过 AI 提醒追踪里程碑进度，并发送里程碑邮件。

[Claude Notes](https://obsidian.md/plugins?id=claude-notes) By _jeffersongoncalves_

> 由 Claude Code obsidian-notes CLI 写入此库的 Markdown 笔记的侧边栏、生成笔记命令和实时刷新。

[DeepShian](https://obsidian.md/plugins?id=deepshian) By _zhenghaoyang24_

> 由本地 DeepSeek Harness (dsh) 驱动的侧边栏 AI 聊天：流式回复、工具调用和真实的库文件编辑。

##### 任务与项目管理

[Simple Reminder](https://obsidian.md/plugins?id=simple-reminder) By _angus123_

> 带系统通知的提醒列表。支持间隔、单次和定时类型。

[Kanbase](https://obsidian.md/plugins?id=kanbase) By _lucio_

> 使用数据库和 frontmatter 属性将笔记组织到看板中。
![Kanbase](https://raw.githubusercontent.com/luciopaiva/obsidian-kanbase/master/demo.gif)

[Daily Overview](https://obsidian.md/plugins?id=today-board) By _xiaoyihr_

> 右侧面板，显示今天到期、逾期、已完成和即将到来的任务以及实时项目进度——全部直接从 Markdown 笔记读取，无需等待索引。

[Card Table](https://obsidian.md/plugins?id=card-table) By _jiajiunwu_

> 将一篇 Markdown 笔记作为任务卡表格读取。灵感来自看板表工作方式，但日期、负责人、图钉、评论和重复都保留为笔记内的纯文本。
![Card Table](https://github.com/user-attachments/assets/3d8e6c49-bd63-4588-aecd-7e027b003af5)

[Checklist Flow](https://obsidian.md/plugins?id=checklist-flow) By _hemashishi12_

> 将已完成的清单项下移，并在编辑器内拖放重新排序清单项。

[Canvas Inbox Sync](https://obsidian.md/plugins?id=canvas-inbox-sync) By _torus211_

> 将 Obsidian 白板卡片中未勾选的任务收集到收件箱卡片中。

[Tasks Companion](https://obsidian.md/plugins?id=task-rollover-companion) By _i-am-rudi_

> 从你在笔记中任何位置放置的代码块，将未完成的带标签任务滚动前进、停放在收集笔记中或安排它们。

[CoffeeCatKanBan](https://obsidian.md/plugins?id=coffeecat-kanban) By _thecoffeecat_

> 原生 Markdown 任务板，带受保护的任务操作、拖动排序和搜索过滤器

[Daily Tasks](https://obsidian.md/plugins?id=daily-tasks) By _devicals_

> 用于日记/周期笔记的酷任务管理！！
![Daily Tasks](https://raw.githubusercontent.com/devicals/Daily-Tasks/master/images/Progress.png)

[Checklist Timer](https://obsidian.md/plugins?id=checklist-timer) By _anandsie_

> 计时每个清单项完成所需的时间。

[TASKquence](https://obsidian.md/plugins?id=taskquence) By _congzi_

> 使用日历、看板、番茄钟、时间追踪和 TASKquence iOS 生活事件同步来规划任务。

[Integrated Task Manager](https://obsidian.md/plugins?id=integrated-task-manager) By _kuberrr05_

> Markdown 原生的收件箱、今日、即将到来、所有任务和项目视图。

[Calm Tasks](https://obsidian.md/plugins?id=calm-tasks) By _sungi-kim_

> 干净的任务工作区，带嵌套任务、议程、分组和已保存过滤器。
![Calm Tasks](https://raw.githubusercontent.com/sungikim/Calm-Tasks/master/docs/assets/all-workspace.png)

[My Tasks](https://obsidian.md/plugins?id=my-tasks) By _sa1fer_

> 带看板、日历和树视图的任务追踪器

[Task Wheel](https://obsidian.md/plugins?id=task-wheel) By _maxonamission_

> 有目的地一次查看每个未完成任务。Task Wheel 可视化你的所有任务以帮助你管理它们：每个任务是你转动轮盘上的一站，因此没有什么会隐藏在长待办列表的底部。

[Task Cascade](https://obsidian.md/plugins?id=task-cascade) By _nikvoronin_

> 使用可配置规则保持父复选框与其子项状态同步。

[Task Sorter](https://obsidian.md/plugins?id=task-sorter) By _artem98_

> 按优先级和截止日期在笔记中物理（就地）重新排序清单任务。

[Task Calendar](https://obsidian.md/plugins?id=task-calendar) By _spencer-frame_

> 将任务笔记从数据库拖到日/周规划网格上。Frontmatter 是唯一真实来源——无需复选框行。

[Rollover Plus](https://obsidian.md/plugins?id=rollover-plus) By _turnipsforme_

> 将未完成任务滚动到今天或明天，或将当前选区移到明天。基于 lumoe 的 Rollover Daily Todos。

[Journals Aware Rollover Todos](https://obsidian.md/plugins?id=journals-aware-rollover-todos) By _asef-hossain-khan_

> 将未完成的待办事项滚动到 Journals 插件创建的笔记中。通过 journal-date frontmatter 而非日记路径查找上一篇笔记，因此适用于 Journals 的嵌套、日期模板文件夹。

[Daily Flow](https://obsidian.md/plugins?id=daily-flow) By _partanskiy_

> 在笔记和待办列表之间移动日常任务，并具体化预定的例程。

[Daily Task Mover](https://obsidian.md/plugins?id=daily-task-mover) By _moziar_

> 将任务移动到前一天或后一天的同标题下。

[Todo Sidebar](https://obsidian.md/plugins?id=todo-sidebar) By _andriyor_

> 在侧边栏面板中列出当前打开笔记中的每个复选框。切换任务或跳转到其行。

[TaskTap](https://obsidian.md/plugins?id=tap-toggle-task) By _rprudchenko_

> 在移动端通过点击任务文本切换任务。在编辑视图中点击文本后放置光标。

[Boardwalk](https://obsidian.md/plugins?id=boardwalk) By _zeiosmb_

> Markdown 看板，带每张卡片的移动历史。拖放卡片和泳道、多选、标签、截止日期、撤销、搜索和归档——完全兼容 Kanban 板文件格式。

[Kanux](https://obsidian.md/plugins?id=kanux) By _jasonqg26_

> Trello 风格任务板，带卡片、标签、日期和高度可定制的 Markdown 格式清单。

[Action Kanban](https://obsidian.md/plugins?id=action-kanban) By _spinechoarcanist_

> 在轻量级、frontmatter 驱动的看板上管理 Action 笔记——无需 Dataview。拖放卡片、自定义状态和优先级、截止日期追踪和状态持续天数，独立或嵌入行内。

[Chicago](https://obsidian.md/plugins?id=chicago) By _desynkd_

> 有主见的项目仪表板，带硬性 WIP 限制、一键小时记录和收件箱分拣，用于将零散想法变成完成的项目。
![Chicago](https://raw.githubusercontent.com/desynkd/chicago/master/docs/screenshots/board.png)

[Vertex Flow](https://obsidian.md/plugins?id=vertex-flow) By _allanleonardjr_

> 完全以 Markdown 存储的键盘优先任务管理器：项目、任务、看板、日历、时间线、图表仪表板、已保存视图和离线帮助系统。

[Project Tracker](https://obsidian.md/plugins?id=project-tracker) By _dev-cadet_

> 受 Atlassian 和 GitHub 自身项目工具启发的项目追踪器。显示看板和表格视图。兼容 Obsidian Sync，插件与本地笔记配合使用。

[Project Planner](https://obsidian.md/plugins?id=project-planner) By _harrison-milburn_

> 从你的 Markdown 任务规划项目，带依赖图、关键路径甘特图、看板和成本追踪。

[Task Vault](https://obsidian.md/plugins?id=task-vault) By _guancyxx_

> 每个任务一个文件，带 UUID 标识、7 状态机、执行日志、AI 代理委托和钩子。

[Sprint](https://obsidian.md/plugins?id=sprint) By _shijimi-soup_

> 自动冲刺规划、滚动、项目板和数据库视图。

[Vault Issues](https://obsidian.md/plugins?id=vault-issues) By _albertaizic_

> 受 GitHub Issues 启发的追踪器，带看板、标签、优先级和笔记到笔记链接。

[Job Application Tracker](https://obsidian.md/plugins?id=job-application-tracker) By _cruisencode_

> 使用看板、表格、列表和桑基分析仪表板追踪求职申请、联系人和面试。

[Project Manager Enhanced](https://obsidian.md/plugins?id=project-manager-enhanced) By _fzk177_

> 增强的项目管理，带禅道字段、虚拟化视图和可组合过滤器。
![Project Manager Enhanced](https://github.com/user-attachments/assets/ca6bc67f-e656-45be-b93a-17410555ec1a)

[Project Manager Insights](https://obsidian.md/plugins?id=project-manager-insights) By _coffeecheese_

> Project Manager 的只读分析层，添加跨项目工作量、交付进度、数据质量和进度风险洞察。

[Story Map](https://obsidian.md/plugins?id=story-map) By _prohui_

> 使用活动、任务、故事、角色和里程碑规划用户旅程，链接笔记，并导出到 XMind。

[Tasks Dashboard Enhancer](https://obsidian.md/plugins?id=tasks-dashboard-enhancer) By _fzk177_

> 将 Tasks 查询结果转化为紧急仪表板，带摘要、过滤器、可折叠详情、笔记和依赖链接。

[Weekfit](https://obsidian.md/plugins?id=weekfit) By _thequetx_

> 按一个按钮，看看本周的工作适合哪里。将你未安排的任务安排到你的承诺之间的空隙中。

[Tempo](https://obsidian.md/plugins?id=tempo) By _ellpeck, parhamf6_

> 住在笔记中并在重启后存活的时间追踪——然后按你选择的任何文件、文件夹或日期切分统计。

[Depthinker Timer](https://obsidian.md/plugins?id=depthinker-timer) By _depthinker925_

> 番茄钟和秒表计时，带作为笔记存储在库中的日历专注日志。

[Regen](https://obsidian.md/plugins?id=regen) By _loopman90_

> 用于 Obsidian 的本地、游戏化工作节奏 HUD：工作、恢复、继续。

[Always-on-Top Tasks](https://obsidian.md/plugins?id=tasks-for-focus-adhd) By _n23eos_

> 将笔记固定为始终置顶的专注覆盖层，带每任务秒表和 emoji 状态。

[Task Base](https://obsidian.md/plugins?id=task-base) By _tteschon_

> 创建和管理每任务一笔记的记录，带 RRULE 重复，由数据库任务库支持。
![Task Base](https://raw.githubusercontent.com/tteschon/obsidian-task-base/master/docs/screenshots/task-pane.png)

[Tasks NL](https://obsidian.md/plugins?id=tasks-nl) By _hulhec_

> 自然语言任务捕获和用于 Obsidian 的 GTD 工作区。

[Daily Note Flow](https://obsidian.md/plugins?id=daily-note-flow) By _zhimahuzzz_

> 将日常任务、待办、时间分类记录和摘要捕获到纯 Markdown 笔记中。

[Local Meeting Notes](https://obsidian.md/plugins?id=local-meeting-notes) By _readystack_

> 用一个命令创建结构化会议笔记，然后将库中每个未完成的行动项收集到一个列表中。完全本地——无账户、无 API、无同步服务。

[Todo Note](https://obsidian.md/plugins?id=todo-note) By _onefishman_

> 将库笔记作为带完成复选框的待办笔记树浏览。

[ToDoList](https://obsidian.md/plugins?id=to-do-list-manager) By _sasunhuevich_

> 管理待办的插件。

[PlanFlow](https://obsidian.md/plugins?id=planflow) By _yezhangdeng01_

> 基于 Obsidian 的计划自动拆解行动系统：年度计划自动拆解，量化任务自动流转，每日行动打卡/周/月/年度目标/看板/甘特六视图目标追踪，自统计徽章激励系统。

[Mengshi Cockpit](https://obsidian.md/plugins?id=mengshi-workbench) By _spenf710_

> 猛士驾驶舱 — 日历、项目、待办、甘特、飞书、会话集成工作台

[ResearchFlow](https://obsidian.md/plugins?id=research-flow) By _nikolai_

> 用于 Obsidian 的 Markdown 优先研究和项目操作系统。连接项目、任务、日常工作、想法、阅读和职业机会。

##### 笔记编辑与格式化

[Native Search Replace](https://obsidian.md/plugins?id=native-search-replace) By _humoumou_

> 将替换控件直接添加到 Obsidian 内置搜索中，并使用原生搜索结果模型精确定位文件和结果行。

[Fileclass Meta Bind](https://obsidian.md/plugins?id=fileclass-meta-bind) By _humoumou_

> 将 Fileclass 字段渲染为 Meta Bind 控件，使用 FCMB[field]，并带原生风格的持久多选提示。

[List Callouts Improved](https://obsidian.md/plugins?id=list-callouts-improved) By _danyim_

> 在列表中创建简单的标注。
![List Callouts Improved](https://raw.githubusercontent.com/danyim/obsidian-list-callouts-improved/master/screenshots/callout-characters.png)

[Adjustable Media](https://obsidian.md/plugins?id=adjustable-media) By _yi-luo-hua_

> 将图片和视频并排排列，然后拖动重新排序和调整大小。笔记保留普通嵌入加 HTML 注释，因此即使没有插件也可读。
![Adjustable Media](https://raw.githubusercontent.com/yi-luo-hua/obsidian-adjustable-media/master/assets/demo.jpg)

[Codeblock Copy Always](https://obsidian.md/plugins?id=codeblock-copy-always) By _yuru7_

> 在实时预览中编辑围栏代码块时显示复制按钮。

[QuillStone](https://obsidian.md/plugins?id=quillstone) By _marijanstajic_

> 手写纸：用触控笔或鼠标绘图，并在笔记中实时预览。

[Insert Path for Agents](https://obsidian.md/plugins?id=insert-path-for-agents) By _mit-bach_

> 在光标处插入活动笔记的绝对文件系统路径，以便 AI 代理可以逐字打开和读取该文件。不使用剪贴板。

[Linksmith Pro](https://obsidian.md/plugins?id=linksmith-pro) By _tiwe_

> 在你输入时建议指向笔记和标题的链接，然后通过审查优先的批量工具查找缺失链接。

[Simple Writing](https://obsidian.md/plugins?id=simple-writing) By _alictias_

> 用于 Obsidian 的简单写作聚焦编辑器，旨在减少格式干扰和意外 Markdown 快捷方式。

[Code Block Char Count](https://obsidian.md/plugins?id=code-block-char-count) By _power-ioi_

> 在代码块右下角显示字符数量统计，支持阅读视图与实时预览。

[InkSlash](https://obsidian.md/plugins?id=inkslash) By _jeffshancha_

> 使用中文斜杠菜单、模糊搜索、固定命令和标注图标插入内容并运行可用命令。

[LaTeX Complete](https://obsidian.md/plugins?id=latex-complete) By _yetchill_

> 在数学表达式中自动补全 LaTeX 命令，带中英文描述和可配置补全键。

[Markdown Heading Links](https://obsidian.md/plugins?id=markdown-heading-links) By _zmn-hamid_

> 在 Obsidian 中预览并创建指向标题的标准 Markdown 链接。

[Simple Badge](https://obsidian.md/plugins?id=simple-badge) By _meowdichlorian_

> 选择、创建和管理彩色徽章，然后按你选择的顺序插入。

[Format Convert Copy](https://obsidian.md/plugins?id=format-convert-copy) By _shallow1992_

> 将所选 Markdown 文本或活动笔记转换为 Slack、Discord 和 WhatsApp 格式，或一键复制为原始 Markdown。

[XU Number Headings](https://obsidian.md/plugins?id=xu-number-headings) By _xcloud-ai_

> 标题编号：为标题生成多级数字编号，层级区间可选，支持 frontmatter 按文档覆盖与自动重新编号.

[Mode Switch Scroll Fix](https://obsidian.md/plugins?id=mode-switch-scroll-fix) By _code-sub_

> 在编辑和阅读模式之间切换时无缝保留精确滚动位置。

[Write Tweet Thread](https://obsidian.md/plugins?id=write-tweet-thread) By _thehumaneclub_

> 从 Markdown 笔记撰写社交线程，带实时 Chirr 风格预览、词感知 280 字符切片、计数器和手动分割标记。

[Windows Path Links](https://obsidian.md/plugins?id=windows-path-links) By _codetrek_

> 将粘贴的 Windows 路径转换为 Markdown 链接，用默认文件夹处理程序打开文件夹链接，并创建基于笔记的文件夹链接。

[Kalendae](https://obsidian.md/plugins?id=kalendae) By _unpreditable_

> 通过从日历中选择来更改笔记中的现有日期，而不是重新输入。

[Editor Breadcrumbs](https://obsidian.md/plugins?id=editor-breadcrumbs) By _xyls184_

> 编辑器顶部的 VS Code 风格面包屑轨迹（文件夹、文件、标题），跟随光标。点击任意面包屑跳转。

[Headings](https://obsidian.md/plugins?id=headings) By _cycsd_

> 导航、复制、选择、对齐和移动 Markdown 标题。

[In-place Diff View](https://obsidian.md/plugins?id=inplace-diff-view) By _glechic_

> 渲染 {old | new} 和 {note|...} 更正标记，带悬停提示以接受、拒绝或删除它们。

[LLM Text Assistant](https://obsidian.md/plugins?id=llm-text-assistant) By _s1t5_

> 直接在编辑器中使用任何 OpenAI 兼容 LLM 处理、翻译和润色所选文本。

[Page Lock](https://obsidian.md/plugins?id=page-lock) By _robert-fleming_

> 锁定笔记防止编辑，直到解锁，带 frontmatter 同步锁，阻止编辑器和其他插件。

[Quick Notes Board](https://obsidian.md/plugins?id=quick-notes-board) By _avettorel71_

> 用于创建、组织和管理快速 Markdown 笔记的桌面板——类别、分组、标签、闹钟等——全部保存在单个文件中。

[Any Table Sort](https://obsidian.md/plugins?id=any-table-sort) By _drshajul_

> 对任何类型的 Obsidian 表格排序，包括 Dataview 渲染的表格。

[Paste Table](https://obsidian.md/plugins?id=easy-paste-table) By _jyqqs_

> 把 AI 对话（豆包/DeepSeek 等）复制的 Tab/空格纯文本一键转成标准 Markdown 表格，支持可选的数字排序列

[Stay Folded](https://obsidian.md/plugins?id=stay-folded) By _crayonzgrim_

> 保持折叠部分折叠，直到你明确展开它们。

[Tidy YAML](https://obsidian.md/plugins?id=frontmatter-visibility) By _nameiskyro_

> 通过显示、折叠或隐藏 frontmatter 来保持 YAML 整洁。

[Punctilious](https://obsidian.md/plugins?id=punctilious) By _mrelvin_

> 统一 Markdown 标点格式：中文标点转英文标点，并在中英文与数字之间自动补空格，链接 URL 自动豁免。

[Awesome Format Bar](https://obsidian.md/plugins?id=awesome-format-bar) By _awesomedog_

> Word 风格 Markdown 格式工具栏，用于 Obsidian——粗体、下划线、高亮、颜色、标题、表格、标注、表情选择器和 100+ 一键命令。
![Awesome Format Bar](https://raw.githubusercontent.com/awesomedog/obsidian-awesome-format-bar/master/docs/img/light.png)

[Georgian Script Switcher](https://obsidian.md/plugins?id=georgian-script-switcher) By _arigurj_

> 在格鲁吉亚语、拉丁语和西里尔语脚本之间转换所选文本。

[Math Paste Bridge](https://obsidian.md/plugins?id=math-paste-bridge) By _hlyang1992_

> 转换粘贴的 LaTeX 分隔符，并从富文本中恢复精确数学源，同时保留 Markdown 格式。

[Highlight Migrator](https://obsidian.md/plugins?id=highlight-migrator) By _grub-basket_

> 扫描旧 HTML 高亮，将每种颜色映射到原生高亮颜色，备份受影响的笔记，然后转换它们——带完整还原。

[Better Editor](https://obsidian.md/plugins?id=better-editor) By _turnipsforme_

> 通过用于组织笔记、格式化选区、管理任务和标签页以及安全删除链接文件的工具改进编辑。

[LToolkit](https://obsidian.md/plugins?id=ltoolkit) By _lee112358_

> 一捆小型编辑、附件和外观调整：Notion 风格渐进选择、每笔记附件文件夹、未使用附件清理、代码块上的文件名和滚动位置记忆。每个功能独立切换。
![LToolkit](https://raw.githubusercontent.com/lee112358/ltoolkit/master/docs/settings-en.svg)

[Image Annotator](https://obsidian.md/plugins?id=image-annotator) By _adlinz_

> 用矩形、箭头、文本和手绘标记注释库中的图片，然后将结果保存为 PNG。

[Sentence Case and Dash Autocorrect](https://obsidian.md/plugins?id=sentence-capitalizer) By _kosperun_

> 在你输入时自动更正句子大小写、两个首字母大写拼写错误和连字符转为破折号。

[Aware Line Capitalizer](https://obsidian.md/plugins?id=aware-line-capitalizer) By _ehrentheman_

> 在你输入时自动将每行首字母大写，带上下文感知和覆盖支持。

[TidyPaste](https://obsidian.md/plugins?id=tidy-paste) By _k-tech-studio_

> 将从 Word、网页选择或 PDF 副本粘贴的文本清理为可读 Markdown。保留标题和列表；不打开 Office 或 PDF 文件。

[MD Toolbox](https://obsidian.md/plugins?id=ob-toolbox) By _knowckx_

> 直接在编辑器中转置 Markdown 表格。

[Custom Context](https://obsidian.md/plugins?id=custom-context) By _grmglib_

> 通过隐藏项和添加命令自定义编辑器右键上下文菜单。

[Drag and Drop Lists](https://obsidian.md/plugins?id=drag-and-drop-lists) By _benhancock_

> 通过拖动标记重新排序列表项，带动画预览和移动端任务状态控件。

[ListSheet](https://obsidian.md/plugins?id=listsheet) By _abdur-nur-porag_

> 将 Markdown 列表变成实时电子表格——即时求和、预算、清单和计算器式公式（数学、条件、sin/sqrt），完全支持孟加拉语。

[Link Hover Reveal](https://obsidian.md/plugins?id=link-hover-reveal) By _mat-paradela_

> 在实时预览中将 Markdown 链接保持折叠为仅标题，因此在行之间用箭头移动不会展开它们。仅当光标严格放在其中时才显示原始 [text](url)。

[Compress Image (WebP)](https://obsidian.md/plugins?id=compress-image-webp) By _bjornclauw_

> 在粘贴、拖放和上传时自动压缩图片并转换为 WebP。

[PML Syntax Highlighting](https://obsidian.md/plugins?id=syd-pml-highlight) By _ml9373_

> 为 AVEVA PML/PML2 代码提供语法高亮：笔记中的 ```pml 块，以及直接打开的原始 .pml、.pmlobj、.pmlfnc、.pmlfrm、.pmlmac、.pmlcmd 文件。

[TableTune](https://obsidian.md/plugins?id=table-tune) By _niizhou_

> 在编辑模式下拖动边框调整表格列和行的大小；阅读视图自动镜像相同布局。每个表格记住大小。

[Image Copy and Reveal](https://obsidian.md/plugins?id=image-copy-reveal) By _rainajia716_

> 从内置图片工具栏将图片按笔记重命名、转换为 WebP、在 Finder 或资源管理器中显示，或复制到剪贴板。

[Sectionals](https://obsidian.md/plugins?id=sectionals) By _cmptr_

> 轻松处理整个 Markdown 章节

[Angle Guard](https://obsidian.md/plugins?id=angle-guard) By _yuriy144_

> 捕获并包裹粘贴文本中的 HTML 标签，以免破坏笔记格式。

[Inline Commands](https://obsidian.md/plugins?id=inline-cmd) By _simon-th_

> 执行命令并插入行内内容的插件

[Month Folder Order](https://obsidian.md/plugins?id=month-folder-order) By _ellimist-afk_

> 在文件资源管理器中按日历顺序（一月到十二月）显示以月份命名的文件夹，而非字母顺序。无需配置。

[Latex Paste Cleaner](https://obsidian.md/plugins?id=latex-paste-cleaner) By _zych2023_

> 自动清理从网页或 AI 聊天粘贴的 LaTeX 公式，保留文本格式。

[Markdown Easy Editor](https://obsidian.md/plugins?id=markdown-easy-editor) By _chizmo-byte_

> 一键 Markdown 工具栏——无需记忆语法。即时插入 Markdown 元素，并清理凌乱的 AI 粘贴文本。
![Markdown Easy Editor](https://raw.githubusercontent.com/chizmo-byte/obsidian-markdown-easy-editor/master/screenshots/toolbar-panel.png)

[Image Order Reverser](https://obsidian.md/plugins?id=image-order-reverser) By _leegent_

> 一键反转活动笔记中的所有图片嵌入。再次点击恢复原始顺序。
![Image Order Reverser](https://raw.githubusercontent.com/leegent/obsidian-image-order-reverser/master/path)

[Table Style Tweaks](https://obsidian.md/plugins?id=table-style-tweaks) By _rix_

> 自定义表格样式：换行前最小列宽、将表格移出可读行宽、居中或对齐表格，以及水平滚动宽表格。

[Structural Tables](https://obsidian.md/plugins?id=structural-tables) By _zyx_

> 合并单元格、多行表头和行表头，用于可读的 Markdown 表格。

[Highlight Pen](https://obsidian.md/plugins?id=highlight-pen) By _afterlaughter_

> 将光标变成笔：选择一次样式，你所做的每个选区都会高亮、加粗、斜体、下划线、删除线或着色。

[Count Block](https://obsidian.md/plugins?id=count-block) By _lee-jongwoo_

> 添加可编辑文本块，下方带实时计数。支持可定制指标，包括 NEIS 字节！

[Insert Callout](https://obsidian.md/plugins?id=insert-callout) By _nonkuri_

> 通过类型选择对话框插入标注，或在引用块中输入 [! 自动补全。将光标行或选区转为标注，并可移除标注及其引用标记。

[Japanese Novel Tool](https://obsidian.md/plugins?id=japanese-novel-tool) By _nonkuri_

> 日语小说助手，用于缩进、注音/着重号和字符计数。

[Side-by-Side Diff](https://obsidian.md/plugins?id=side-by-side-diff) By _nblum_

> 在并排视图中比较、审查和选择性合并两个文本文件。

[Key Value Replace](https://obsidian.md/plugins?id=keyvaluereplace) By _familygithub000_

> 在实时预览中将 ${key} 标记替换为配置值。

[Markdown Formatter](https://obsidian.md/plugins?id=anotherflower-markdown-formatter) By _anotherflower_

> 保守地本地修复常见 Markdown 格式错误，带预览和恢复。

[Folder Color System](https://obsidian.md/plugins?id=folder-color-system) By _dudethatserin_

> 可自定义的文件资源管理器文件夹颜色、递归继承、调色板和 Lucide 风格图标，由 Style Settings 驱动。

[JustFTables](https://obsidian.md/plugins?id=justftables) By _codeforge11_

> 一个极简扩展，修复一个非常烦人的限制：表格的无缝列和行合并
![JustFTables](https://raw.githubusercontent.com/codeforge11/JustFTables/master/imgs/without.png)

[Notion Table](https://obsidian.md/plugins?id=notion-table) By _black-lattice_

> 直接在 Markdown 笔记中创建可编辑的 Notion 风格表格。

[Nested Markdown Renderer](https://obsidian.md/plugins?id=nested-markdown-renderer) By _joechen2me_

> 在实时预览中渲染嵌套 GFM 表格并修复缩进标注。

[Copy with Footnotes](https://obsidian.md/plugins?id=copy-with-footnotes) By _systina12_

> 复制所选 Markdown 及其引用的脚注定义。

[Property Suggester Enhanced](https://obsidian.md/plugins?id=property-suggester-enhanced) By _eternalsoap_

> 通过自定义规则增强 Obsidian 属性建议。带一些额外样式选项。
![Property Suggester Enhanced](https://raw.githubusercontent.com/arjanseijs/obsidian-properties-autocomplete/master/banner.png)

[Nested Frontmatter Properties](https://obsidian.md/plugins?id=nested-frontmatter-properties) By _copperbox_

> 直接在属性面板中查看和编辑嵌套 frontmatter 属性，例如对象数组。

[Compact Empty Properties](https://obsidian.md/plugins?id=compact-empty-properties) By _allberry_

> 在 Markdown 编辑视图中隐藏空属性行，而不更改笔记数据。

[Table Resize](https://obsidian.md/plugins?id=table-resize) By _lishuai1993_

> 拖动调整 Markdown 表格列宽

[Fold Rage](https://obsidian.md/plugins?id=fold-rage) By _silentcoffee0_

> 修复实时预览折叠范围超出其 Markdown 结构并隐藏无关内容的问题。

[Heading Keeper](https://obsidian.md/plugins?id=heading-keeper) By _nestealin_

> 通过保守、可恢复的更新保持标题编号和标题片段链接一致。
![Heading Keeper](https://raw.githubusercontent.com/nestealin/obsidian-heading-keeper/master/assets/readme/heading-keeper-demo.gif)

[Auto Heading Numbers](https://obsidian.md/plugins?id=auto-heading-numbers) By _gaofeng_

> 自动为 Obsidian 文档中的标题编号或重新编号

[Number Suite](https://obsidian.md/plugins?id=number-suite) By _zyx_

> 显示或管理标题、图表、脚注、尾注和引用编号，而不会意外更改 Markdown。

[HeadNumatic](https://obsidian.md/plugins?id=headnumatic) By _kicsifercsi_

> 根据文件夹结构和可配置格式自动为笔记中的标题编号。

[Loud Outline](https://obsidian.md/plugins?id=loud-outline) By _danrfletcher_

> 像 Quiet Outline，但更大声！在文件资源管理器中直接将每篇笔记的标题、任务和列表显示为可展开节点——无需单独的大纲窗格。
![Loud Outline](https://raw.githubusercontent.com/danrfletcher/obsidian-loud-outline/master/images/screenshot.png)

[Mixed Outline](https://obsidian.md/plugins?id=mixed-outline) By _hemashishi12_

> 在可导航大纲中同时显示标题和编号 Markdown 列表项。

[Bullet List Outline](https://obsidian.md/plugins?id=bullet-list-outline) By _yyldps_

> 为项目符号列表生成专用侧边栏大纲。

[List Tree Indentation Guides](https://obsidian.md/plugins?id=list-tree-indentation-guides) By _obsidiest_

> 在编辑器和阅读模式中渲染树状列表引导线，以及可选的 Logseq 风格悬停线程。

[ICOR for Life - Outliner](https://obsidian.md/plugins?id=icor-for-life-outliner) By _paperless-movement, thomas-roedl_

> 行为像大纲的列表：缩进、反缩进和移动项目符号及其下所有内容，知道子项的 Enter，留在项目符号外的光标，以及向上攀升的全选。ICOR for Life 套件的一部分。

[Nested Ordered Numbering](https://obsidian.md/plugins?id=nested-ordered-numbering) By _spark_

> 在每个深度创建和维护带尾随句点的层级纯文本编号。
![Nested Ordered Numbering](https://raw.githubusercontent.com/spark00000/NestedOrderedNumbering/master/docs/assets/banner.png)

[Auto Equation Numbering](https://obsidian.md/plugins?id=auto-equation-numbering) By _wolframscs_

> 按文档手动切换和更新显示方程编号，并对重复方程复用第一个编号。

[LaTeX Inline Block Toggle](https://obsidian.md/plugins?id=latex-inline-block-toggle) By _frank-smith_

> 在行内和显示块之间切换 LaTeX 数学，并合并连续块公式。

[Typesetter](https://obsidian.md/plugins?id=typesetter) By _ichenh_

> 在散文中渲染出版级排版而不更改 Markdown 源，带对技术内容的语法感知保护。

[Chinese Writing Layout](https://obsidian.md/plugins?id=chinese-writing-layout) By _idoncar2_

> 为中文长文提供多主题纸张、自定义背景、高级文本整理和多格式导出.

[A3 Problem-Solving](https://obsidian.md/plugins?id=athree-problem-solving) By _fabriceb_

> 将 Markdown 笔记渲染为丰田风格 A3 问题解决报告：42cm x 29.7cm 双栏页面，适配屏幕，带 Mermaid 图表。

[Colsdown](https://obsidian.md/plugins?id=colsdown) By _grafanakibana_

> 创建适应可用空间的响应式 Markdown 列和堆栈。

[Advanced Markdown Blocks](https://obsidian.md/plugins?id=fenced-blocks) By _hpuntu_

> 使用简单的围栏 Markdown 创建、定制和样式化视觉块。
![Advanced Markdown Blocks](https://raw.githubusercontent.com/hpuntu/advanced-obsidian-blocks/master/assets/advanced_markdown_blocks.png)

[Tabbed](https://obsidian.md/plugins?id=tabbed) By _flowing-abyss_

> 在笔记中创建延迟加载选项卡。

[Markdown Chat Blocks](https://obsidian.md/plugins?id=markdown-chat-blocks) By _peterczegledy_

> 用于 Markdown 的聊天风格块

[Ugougo Moji](https://obsidian.md/plugins?id=ugougo-moji) By _yumizu_

> 将 ugougo 代码块中的文本渲染为摇晃的复古电视风格图形。（ウゴウゴ・ぶるぶると小刻みに動く文字アニメーションを実現します）

[Terminalogue](https://obsidian.md/plugins?id=terminalogue) By _yumizu_

> 将 termlogue 代码块转化为动画终端会话。命令永不执行。
![Terminalogue](https://raw.githubusercontent.com/yumizu11/Terminalogue/master/docs/images/terminalogue.gif)

[Terminalogue Presenter](https://obsidian.md/plugins?id=terminalogue-presenter) By _yumizu_

> 将 Marp 笔记转化为带动画 Terminalogue 终端的 HTML 演示文稿，并在默认浏览器中打开。

##### 文件与附件

[Rustdocs](https://obsidian.md/plugins?id=rustdocs) By _laptapk_

> 从本地 Cargo 项目生成带链接的 Rust API 文档为 Markdown。

[Upgit](https://obsidian.md/plugins?id=upgit) By _ewigmidori_

> 使用 Upgit CLI 从文件资源管理器或编辑器上下文菜单上传图片。
![Upgit](https://raw.githubusercontent.com/ewigmidori/upgit-obsidian/master/image.png)

[Vault Shelf](https://obsidian.md/plugins?id=vault-shelf) By _luke321_

> 将库作为可浏览图书馆：由标题、日期、人物、标签、文件夹或任何笔记属性构建的书架，以双页展开阅读。一篇笔记可以同时放在六个书架上——文件永不移动。
![Vault Shelf](https://raw.githubusercontent.com/luke321/vault-shelf/master/assets/demo.webp)

[Vault in Vault](https://obsidian.md/plugins?id=vault-in-vault) By _feifangit_

> 加密所选文件，并在不活动、标签页关闭或按需后锁定明文。
![Vault in Vault](https://raw.githubusercontent.com/feifangit/obsidian-vault-in-vault/master/docs/images/encrypted-files.png)

[Add Attachment](https://obsidian.md/plugins?id=add-attachment) By _olegg90_

> 一次将多个附件文件添加到笔记中，自动插入链接，可选重命名和图片调整大小。支持桌面和移动端。

[HTML Direct Reader](https://obsidian.md/plugins?id=html-direct-reader) By _xiaoyihr_

> 通过内联 CSS/图片/脚本绕过跨域限制，在 Obsidian 中渲染库内 .html。库内 .html/.md 链接拦截，带后退/前进、页内搜索、缩放、大纲、全屏、滚动恢复。桌面和移动端。

[Books and Comics Tracker](https://obsidian.md/plugins?id=colecao-livros-quadrinhos) By _ph-ramos_

> 通过搜索 ISBN 或标题在库中编目书籍和漫画，构建你自己的个人图书馆。

[Mica WebP Optimizer](https://obsidian.md/plugins?id=mica-webp-optimizer) By _tutivsoft-com_

> 在本地将 PNG 和 JPEG 媒体优化为已验证的 WebP 文件，而不破坏 Obsidian 链接。

[Photo Slimmer](https://obsidian.md/plugins?id=photo-slimmer) By _rainajia716_

> 一次性将库中过大的图片转换为 WebP，为你更新每个链接，包括代码块内写入的链接。

[On-Demand Cache](https://obsidian.md/plugins?id=on-demand-cache) By _czhhbp_

> 按需缓存远程附件。仅在你打开笔记时下载文件，然后提供本地副本而非网络文件，同时保持原始链接不变。

[File System View](https://obsidian.md/plugins?id=fsview) By _zakin_

> 在任意笔记中将本地文件系统作为交互式、可折叠树浏览和查询。

[Image Lens](https://obsidian.md/plugins?id=image-lens) By _lizhengnacl_

> 预览、缩放、平移、旋转和下载图片而不更改原始文件。
![Image Lens](https://raw.githubusercontent.com/lizhengnacl/obsidian-image-lens/master/assets/image.webp)

[Media Importer](https://obsidian.md/plugins?id=media-importer) By _git-akihakune_

> 下载笔记中引用的远程媒体，并将其存储在本地或远程后端（WebDAV、S3）。

[Attachment Link Rules](https://obsidian.md/plugins?id=attachment-link-rules) By _viggomeesters_

> 按文件扩展名为拖放的附件选择链接或嵌入语法。
![Attachment Link Rules](https://raw.githubusercontent.com/viggomeesters/obsidian-attachment-link-rules/master/assets/hero.svg)

[Image Curator](https://obsidian.md/plugins?id=image-curator) By _giacer_

> 用于轻松组织和探索图片资产的 Obsidian 插件。右键图片创建嵌入笔记，通过简单 GUI 分类，并在可视画廊中浏览你精选的图片，无需编写代码或查询。

[Attachment Steward](https://obsidian.md/plugins?id=attachment-steward) By _miroff_

> 将附件组织到模板化文件夹和文件名中——永不丢失原始文件名，永不破坏其他地方的链接，并在批量导入（例如从 Apple Notes）落地时立即捕获。

[Office Attachment Viewer](https://obsidian.md/plugins?id=maic-for-office) By _aqu-210l-maic_

> 直接在 Obsidian 中预览 Word (.docx)、PowerPoint (.pptx) 和 Excel (.xlsx) 附件。完全本地、只读。

[Media Recorder](https://obsidian.md/plugins?id=media-recorder) By _jackshell_

> 可停靠的媒体录制器，用于将摄像头、屏幕和音频直接捕获到笔记中。

[Image Scroll Gallery](https://obsidian.md/plugins?id=image-scroll-gallery) By _rainajia716_

> 将一组图片渲染为一条水平滚动条，而不是高大的垂直堆栈，带上传、粘贴、拖动重新排序和全屏查看器。
![Image Scroll Gallery](https://raw.githubusercontent.com/rainajia716/obsidian-image-scroll-gallery/master/path)

[HTML Gallery](https://obsidian.md/plugins?id=html-gallery) By _kagayakii_

> 将库中的 HTML 文件作为实时缩略图网格浏览，按标题和内容搜索，并打开链接到它们的笔记。PDF、SVG 和图片也可以显示。
![HTML Gallery](https://raw.githubusercontent.com/violetyk/obsidian-html-gallery/master/docs/gallery.png)

[Local Web Page Viewer](https://obsidian.md/plugins?id=local-web-page-viewer) By _miroff_

> 将本地 .html 文件作为真实渲染页面打开，CSS、图片和视频正常工作——包括缩放、书签和滚动记忆，桌面和移动端均可。

[Image Relinker](https://obsidian.md/plugins?id=image-relinker) By _keyoneway_

> 安全预览并修复活动 Obsidian 笔记的损坏图片链接。

[Clear Unused Assets](https://obsidian.md/plugins?id=clear-unused-assets) By _quincy-leo_

> 检测并删除不再被附加的未使用资产。允许选择删除哪些和保留哪些。

[Remove Empty Assets](https://obsidian.md/plugins?id=remove-empty-assets) By _xzhi_

> 中文: 删除附件目录中的空目录，支持桌面端与移动端。附件目录路径支持绝对路径、相对每个笔记目录（./）、相对仓库根三种写法；删除 md 笔记或附件时自动定点扫描，支持定时扫描，删除方式可选回收站或永久删除，中英文界面 | EN: Remove empty folders inside attachment directories, desktop & mobile. Configurable path (absolute, per-note, vault-root), auto-scan on note/attachment deletion, scheduled scan, trash/permanent delete, bilingual UI.
![Remove Empty Assets](https://raw.githubusercontent.com/github-xzhi/obsidian-remove-empty-assets/master/assets/README/è®¾ç½®é¢è§-ä¸­æ.png)

[Attachment Audit](https://obsidian.md/plugins?id=attachment-audit) By _saiken_

> 审计附件中的真正孤立项、重复项、超大文件、不良名称和错位文件，然后安全清理。

[File Timestamp](https://obsidian.md/plugins?id=file-timestamp) By _elginas_

> 创建带时间戳的文件

[Create Nested Note](https://obsidian.md/plugins?id=create-nested-note) By _dwesolowski_

> 从文件资源管理器上下文菜单创建文件夹和同名笔记。

[Auto Move File](https://obsidian.md/plugins?id=auto-move-file) By _lsywk25_

> 根据 frontmatter 属性或文件名自动将笔记移动或复制到目标文件夹，带灵活规则和精确或模糊匹配。

[Copy On Demand](https://obsidian.md/plugins?id=copy-on-demand) By _verygood2024_

> 一键将当前文件复制到其目标路径。每个文件的目标路径可以单独设置。

[Advanced Rename and Delete Handler](https://obsidian.md/plugins?id=advanced-rename-and-delete-handler) By _mnaoumov_

> 在一个地方处理整个库的重命名和删除：更新链接、移动附件文件和文件夹，并清理删除留下的内容。

[Quiet Tree](https://obsidian.md/plugins?id=quiet-tree) By _elfmedy_

> 通过有意的拖动、清晰的树放置目标和可编辑的 JSON 排序来排列原生文件资源管理器。
![Quiet Tree](https://raw.githubusercontent.com/elfmedy/quiet-tree/master/docs/assets/drag-preview.png)

[Menu Hider](https://obsidian.md/plugins?id=menu-hider) By _icycat_

> 隐藏、重新排序和提升上下文菜单项，并从文件资源管理器复制绝对文件路径。

[Branch Note](https://obsidian.md/plugins?id=branch-note) By _elfmedy_

> 使用普通文件夹和匹配的 Markdown 主页笔记，将笔记扩展为带子项的页面。

[Folder Homepage](https://obsidian.md/plugins?id=obshomepages) By _mcollard0_

> 当文件夹在文件资源管理器中展开时自动打开主页/自述文件。支持自动创建笔记。

[Unseen Changes Dot](https://obsidian.md/plugins?id=unseen-changes-dot) By _mightycrumbs_

> 在新笔记和已更改笔记旁显示点。

[Native File Copy](https://obsidian.md/plugins?id=native-file-copy) By _javatoai_

> 将文件资源管理器中选择的文件和文件夹作为 Windows 文件对象复制。

[Data Autocomplete](https://obsidian.md/plugins?id=data-autocomplete) By _phoenixyun_

> Obsidian 内完全本地运行的数据自动补全引擎：直接解析库内 Excel/CSV，按报告上下文从真实数据检索候选数值并强制溯源；无外部服务、无 LLM。支持占位符补全、指标缺值波浪线 + 下拉/Tab 补全、语义兜底、手动搜索、备份恢复。

##### 同步与备份

[CF Sync](https://obsidian.md/plugins?id=cf-sync) By _shun-shobon_

> 通过你的 Cloudflare 账户同步个人库并协作编辑 Markdown。

[Snapshot Relay](https://obsidian.md/plugins?id=snapshot-relay) By _muchenhen_

> 通过自托管 HTTP 服务器进行手动、基于确认的库快照。

[Self Hosted Private Sync](https://obsidian.md/plugins?id=obsync-private-sync) By _snaraj_

> 为你自己的 obsync 服务器提供自托管、端到端加密的实时同步。

[Sync Assets](https://obsidian.md/plugins?id=sync-assets) By _hasanyilmaz_

> 检测并修复被 Obsidian Sync 跳过的超大社区插件资产。

[SyncGit](https://obsidian.md/plugins?id=sync-git) By _bhoopeshrk_

> 使用 GitHub 的 REST API 跨设备同步库，无需本地 Git。

[pCloud Sync](https://obsidian.md/plugins?id=pcloud-vault-clone) By _laszlorepassy_

> 将库同步到 pCloud 文件夹，作为普通、未加密文件。在两台设备上编辑的笔记按段落合并，就在笔记中，没有单独的冲突文件。

[Pickpen Sync](https://obsidian.md/plugins?id=pickpen) By _recurengine-dev_

> 通过云快照、冲突副本和版本历史跨设备同步笔记。

[Read-only Git Mirror](https://obsidian.md/plugins?id=readonly-git-mirror) By _yomicoding_

> 将 Git 仓库单向、只读地镜像到库中。永不提交、永不推送、永不触碰未跟踪文件。

[Git Sync Desktop](https://obsidian.md/plugins?id=git-sync-desktop) By _robert-fleming_

> 适用于 macOS、Windows 和 Linux 的桌面 Git 同步：保存、合并、上传和验证。支持 Git LFS 和 VaultBridge。

[UltiSync](https://obsidian.md/plugins?id=ultisync) By _msachet5_

> 使用 GitHub REST API 将选定的库文件与 GitHub 仓库同步。支持桌面和移动端。

[Nextcloud sync YANC](https://obsidian.md/plugins?id=nextcloud-sync-yanc) By _rosswang_

> 双向库 Nextcloud 同步，带智能/强制模式、分块上传，并内置排除隐藏文件和点文件夹（YANC 分支）。

[Synology Sync](https://obsidian.md/plugins?id=synology-sync) By _my3rs_

> 通过 WebAPI/WebDAV 将 Obsidian 库与 Synology NAS 同步。

[Filen Sync](https://obsidian.md/plugins?id=filen-sync) By _neddy3z_

> 将库与 Filen 端到端加密云存储同步。

[Gitee Sync Better](https://obsidian.md/plugins?id=gitee-sync-better) By _memoryl7_

> 将库同步到 Gitee 或 GitHub 仓库。增强文件夹同步支持。

[Ray Vault Sync](https://obsidian.md/plugins?id=ray-vault-sync) By _raylabs_

> 简单、免费、跨设备的 GitHub 库同步，带三路合并和零静默数据丢失。桌面和移动端无缝工作。

[Halyard Fetch](https://obsidian.md/plugins?id=halyard-fetch) By _timrs2998_

> 按计划将 GitLab 包或 GitHub 发布产物镜像到库文件夹。只读，无需 Git，支持桌面和移动端。

[Halyard Sync](https://obsidian.md/plugins?id=halyard-sync) By _timrs2998_

> 在桌面和移动端将库与 Git 仓库（GitHub、GitLab、Bitbucket、Gitea/Forgejo、Azure DevOps 或任何 HTTPS 主机）同步。无需原生 Git。

[Git Pad](https://obsidian.md/plugins?id=git-pad) By _albibenni_

> 将 Obsidian 库文件夹中的 Markdown 文件与 GitHub 仓库同步。

[Run in Background](https://obsidian.md/plugins?id=run-in-background) By _gabrielbacha_

> 保持库在后台运行，以便快速访问和持续 Obsidian Sync。

[Syncidian](https://obsidian.md/plugins?id=syncidian) By _shravzdev_

> 通过自托管 Syncidian 服务器跨设备同步库，可选 GitHub 备份和用于 AI 工具的 MCP。
![Syncidian](https://raw.githubusercontent.com/shangeethsivan/Syncidian/master/syncidian.png)

[Havemind](https://obsidian.md/plugins?id=havemind-sync) By _mikolajsapek_

> 在你自己托管的服务器上，跨桌面和移动端实时同步共享库。完整作者归属，无静默覆盖。

[ATProto Sync](https://obsidian.md/plugins?id=atproto-sync) By _thats-it-dev_

> 将库同步到你的 ATProto PDS（Bluesky、Blacksky、Eurosky、自托管）。端到端加密，带每笔记发布。

[OSS Sync and Share](https://obsidian.md/plugins?id=oss-sync) By _helantianshen_

> 面向 Obsidian 的自托管同步和共享：Markdown + 附件 + .obsidian 配置、基于 LWW 的多设备同步、轻量博客发布和协作编辑。

[mybrain.ai](https://obsidian.md/plugins?id=mybrain-ai) By _mybrain_

> 将 Obsidian 库同步到 mybrain.ai。笔记和链接成为可搜索、持久的个人知识资产，你可以查询和构建。

[LLM Wiki Sync](https://obsidian.md/plugins?id=llm-wiki-sync) By _jiho-0629_

> 双向 Obsidian 和 Notion 同步，带显式冲突保护。

[Google Calendar Sync](https://obsidian.md/plugins?id=gcal-sync) By _mcuste_

> 同步库笔记中声明的 Google 日历事件。

[Trello Vault Sync](https://obsidian.md/plugins?id=trello-vault-sync) By _aznan-triks_

> 双向 Trello 同步（笔记、库和文件夹范围）、链接审计和用于世界观库的卡片匹配。

[Mood Collab](https://obsidian.md/plugins?id=moodstudios-collab) By _mood-studios-llc_

> 通过共享编辑、评论、在线状态和自托管同步实时协作 Markdown 笔记。

[Simple Backup](https://obsidian.md/plugins?id=simple-backup) By _laszlorepassy_

> 将库备份到你选择的文件夹，按日期和时间版本化，在后台运行而不阻塞界面，带自动日/周/月保留。
![Simple Backup](https://raw.githubusercontent.com/laszlorepassy/obsidian-simple-backup/master/screenshot.png)

[Daily Note Snapshot](https://obsidian.md/plugins?id=daily-note-snapshot) By _seiichi1101_

> 在预定时间将日记复制到快照文件夹，以快照日期命名。

[Conflict Resolver](https://obsidian.md/plugins?id=conflict-resolver) By _toropanov_

> 查找同步冲突副本并安全解决库中的重复项。

[CopyGuard](https://obsidian.md/plugins?id=copy-guard) By _k-tech-studio_

> 查找同步冲突副本（Proton Drive、官方 Sync -conflict- 名称、Dropbox 等）、空文件和残留临时文件。审查它们并只移动你批准的内容。

[Poppy](https://obsidian.md/plugins?id=poppy) By _opa-oz_

> Poppy：用于 Obsidian 的本地插件注册管理器。将插件同步到 S3 兼容存储，并在其他库中恢复它们。

[StoreSync](https://obsidian.md/plugins?id=plugin-sync) By _likangjie_

> 通过单个共享商店在所有库之间共享 Obsidian 社区插件。新库自动连接。

[Vault Force Sync](https://obsidian.md/plugins?id=vault-force-sync) By _rosswang_

> 强制/增量同步库数据到可配置的 GitHub 远程（Git 路径可配置），跳过大于 100MB 的文件并继续；将结果记录到可查看日志。

[Not Submodules](https://obsidian.md/plugins?id=not-submodules) By _danrfletcher_

> 用普通嵌套 Git 仓库替换 Git 子模块，通过 .gitignore 忽略并通过文件夹笔记 frontmatter 跟踪。

[GitUS](https://obsidian.md/plugins?id=gitus) By _howell-shinji_

> 从 Obsidian 管理 Git 仓库，带 VS Code 风格源代码管理、块暂存、冲突解决和嵌套仓库检测。

[Git Graph](https://obsidian.md/plugins?id=git-graph) By _luis85_

> VS Code 的源代码管理图作为侧边窗格：库 Git 仓库的泳道、引用和提交详情。

[Oldeng Team Core](https://obsidian.md/plugins?id=team-core) By _zhewana_

> 使用 Git 历史和 S3 附件同步共享 Markdown 知识库。

[GitHub Vault Relay](https://obsidian.md/plugins?id=github-vault-relay) By _ankhang0704_

> 面向 Obsidian 移动端的保守 GitHub 桥——无需在手机上运行 Git。

[PQC WebDAV Sync](https://obsidian.md/plugins?id=post-quantum-webdav) By _normanify_

> 使用后量子密码学（ML-DSA/ML-KEM）加密库，并同步到任何 WebDAV 服务器（Nextcloud 等），带分块传输和多设备冲突解决。

[Safe Vault](https://obsidian.md/plugins?id=safe-vault) By _eghosa_

> 将库备份为存档，可选加密和 Git 版本控制。

[Filen Cloud Sync](https://obsidian.md/plugins?id=filen-cloud-sync) By _real-fruit-snacks_

> 在你的库和 Filen（零知识端到端加密云存储）之间双向同步。支持桌面和移动端。

[Lockstep Sync](https://obsidian.md/plugins?id=lockstep-sync) By _stephansergeev_

> 通过你自己的服务器在桌面、iOS 和 Android 之间同步 Obsidian 库。自托管、端到端加密、免费开源：无云、无订阅。

[MinIO Vault Sync](https://obsidian.md/plugins?id=minio-vault-sync) By _calirko_

> 将库文件同步到 MinIO（S3 兼容）存储桶，以便跨设备共享。

[Google Calendar Tasks Sync](https://obsidian.md/plugins?id=google-cal-sync) By _pubcyberry_

> 代码块中的双向 Google 日历，以及镜像到 Google Tasks 的任务笔记。

[DayDAV](https://obsidian.md/plugins?id=daydav) By _haoenz_

> 在日记中创建和编辑日程，在任意笔记中插入日程链接，并通过 Full Calendar Remastered 与 CalDAV 双向同步。

##### 可视化与图谱

[Vault Shelf](https://obsidian.md/plugins?id=vault-shelf) By _luke321_

> 将库作为可浏览图书馆：由标题、日期、人物、标签、文件夹或任何笔记属性构建的书架，以双页展开阅读。一篇笔记可以同时放在六个书架上——文件永不移动。
![Vault Shelf](https://raw.githubusercontent.com/luke321/vault-shelf/master/assets/demo.webp)

[Visual Feed](https://obsidian.md/plugins?id=visual-feed) By _noctis_

> 将散落在笔记中的照片和视频变成 Instagram 风格信息流：单列帖子或砖石网格、轮播、全屏灯箱和发布流程。仅本地；从不复制文件或编辑笔记。
![Visual Feed](https://raw.githubusercontent.com/noctisvexx/obsidian-visual-feed/master/...)

[Canvas Branch Manager](https://obsidian.md/plugins?id=canvas-branch-manager) By _heixizhu_

> 用于 Obsidian 白板的显式层级、分支移动、聚焦和折叠工具。

[Grape Clusters](https://obsidian.md/plugins?id=grape-clusters) By _creativemindrito_

> 按文件夹将图谱视图分组，使每个文件夹成为自己的簇，像藤上的葡萄。所有链接保留，文件夹之间的链接只是画得更淡。

[MemVector Knowledge Engine](https://obsidian.md/plugins?id=memvector-knowledge-engine) By _kevinkaupert_

> 用于 Obsidian 的本地优先 2D 向量空间图、SQLite 图引擎和混合 GraphRAG AI 副驾驶——由 Ollama、Anthropic Claude、OpenAI 或 DeepSeek 驱动。

[Excalidraw Mirror](https://obsidian.md/plugins?id=excalidraw-mirror) By _zoroaster1x_

> Excalidraw Mirror 和 Guidlines 补充，用于轻松镜像绘图

[Merlay](https://obsidian.md/plugins?id=merlay) By _dev-hashemi_

> Mermaid 图表的可视覆盖编辑器。Mermaid，按你的方式。

[Timeline Canvas](https://obsidian.md/plugins?id=timeline-canvas) By _pengd0t_

> 在单个有序自定义时间线上创建多个时间线事件流，以揭示它们之间的上下文。

[Samind 3D Graph](https://obsidian.md/plugins?id=samind-graph) By _sbangslund_

> 带 AI 驱动主题聚类和差距洞察分析的 3D 力导向图。

[Release Timeline Base View](https://obsidian.md/plugins?id=release-timeline-base-view) By _jarbochov_

> 从数据库渲染发布风格时间线。

[Vault Sunburst - Disk Usage](https://obsidian.md/plugins?id=vault-sunburst) By _n23eos_

> 库的交互式旭日图。一目了然地查看磁盘上的文件夹大小、字数和文件数，带动画缩放和 13 种语言。
![Vault Sunburst - Disk Usage](https://raw.githubusercontent.com/n23eos/obsidian-vault-sunburst/master/screenshot.png)

[Solar Graph](https://obsidian.md/plugins?id=solar-graph) By _cardozodiegob_

> 像太阳系一样构建的 3D 图谱视图：笔记围绕它们所属的笔记运行，带真实光照、阴影和日食。

[Armillary](https://obsidian.md/plugins?id=armillary) By _duskengservices_

> 库的 3D 图谱视图。环绕、过滤、分组和冻结——使用与核心图谱相同的过滤器、组、显示和力控制。

[CosmoGraph 3D](https://obsidian.md/plugins?id=cosmograph) By _n1ghtmare-dev_

> 将库作为沉浸式 3D 知识星球探索，带笔记、链接、聚类和程序化地形。
![CosmoGraph 3D](https://raw.githubusercontent.com/n1ghtmare-dev/obsidian-cosmograph/master/docs/assets/cosmograph-hero.jpg)

[Constella](https://obsidian.md/plugins?id=constella) By _loopman90_

> 将你的 Obsidian 库图谱变成活的、可配置的知识可视化。
![Constella](https://raw.githubusercontent.com/loopman90/constella-obsidian-plugin/master/docs/media/constella-preview.svg)

[Emberly Maps](https://obsidian.md/plugins?id=emberly-maps) By _seagnu_

> 将 Markdown 笔记作为可视 Emberly 风格思维导图打开。

[FlyMind](https://obsidian.md/plugins?id=flymind) By _fairyang_

> 一个 Markdown 思维导图和思维导图插件，将笔记转换为交互式、可折叠思维导图，带分屏预览、同标签页切换、可拖动节点、滚动详情和缩放控制。

[Canvas Mind Map](https://obsidian.md/plugins?id=canvas-mind-map) By _zenolzx_

> 从 Markdown 创建可折叠白板思维导图，带七种布局。

[Living Mindmap](https://obsidian.md/plugins?id=living-mindmap) By _chansocheat-tieng_

> 将 Markdown 标题和列表转换为精美、可直接编辑的思维导图。

[Rich Mindmap](https://obsidian.md/plugins?id=rich-mindmap) By _younianc_

> 由纯 Markdown 列表支持的可编辑思维导图——优先级、进度和旗帜标记，拖动重新组织。
![Rich Mindmap](https://raw.githubusercontent.com/younianc/obsidian-rich-mindmap/master/docs/images/screenshot.png)

[Canvas Folding](https://obsidian.md/plugins?id=canvas-folding) By _hkohlhoff_

> 折叠和展开 Obsidian 白板中的层级分支。

[Vault Graph](https://obsidian.md/plugins?id=vault-graph) By _luke321_

> 整个库作为一个圆盘：笔记按文件夹楔形填充在固定格点上，按链接大小，带增长热力图、时间线、搜索和每文件夹过滤器。确定性，非力导向——同一个库总是画出同一幅图。

[NosyGraph](https://obsidian.md/plugins?id=nosygraph) By _janb987_

> 从笔记构建和探索结构化、可扩展图谱。
![NosyGraph](https://raw.githubusercontent.com/janb987/NosyGraph/master/docs/images/nosygraph-lenses-overview.png)

[Mosaic](https://obsidian.md/plugins?id=mosaic) By _gilbertzzzzz_

> 笔记的声明式内容块：来自行内 CSV、JSON 或数据集文件的图表、数据表、时间线、指标卡、决策记录和流程图。

[Flint Chart](https://obsidian.md/plugins?id=flint-chart) By _yut0takagi_

> 在笔记中渲染 Flint 语义图表规范。声明你的数据意味着什么以及你想要哪个图表；比例尺、轴、布局和颜色为你推导。37 种图表类型。

[GoodCharts](https://obsidian.md/plugins?id=goodcharts) By _times0_

> 使用 TanStack Charts 从 YAML 渲染简单、主题感知的良好图表。

[Pocket Blocks Render](https://obsidian.md/plugins?id=pocket-blocks-render) By _temperatio_

> 在笔记中离线渲染 Pocket 时间线、图表和流程图块。

[StrataBoard](https://obsidian.md/plugins?id=strataboard) By _lichliar_

> 将金融数据卡插入白板：报价、宏观系列、覆盖层和小部件
![StrataBoard](https://raw.githubusercontent.com/lichliar/strataboard/master/docs/ç½æ¿ç»å.png)

[Graphviz View](https://obsidian.md/plugins?id=graphviz) By _jw0785_

> 添加 graphviz 支持

[isokit](https://obsidian.md/plugins?id=isokit) By _zeiosmb_

> 将 isokit YAML 代码块渲染为等距架构图（自包含 SVG）。

[ChemRender3D](https://obsidian.md/plugins?id=chemrender) By _ruzx_

> 化学和分子 3D 查看器。可视化来自 PDB、CIF、MOL、SDF、XYZ 和其他格式的蛋白质、分子和化学结构。
![ChemRender3D](https://github.com/user-attachments/assets/62d7cec3-1d4e-4330-a980-5836fa31b229)

[ChemSpec](https://obsidian.md/plugins?id=chemspec) By _ruzx_

> 直接在电子实验笔记本中交互式、离线查看 NMR、FT-IR 和分析化学光谱。
![ChemSpec](https://github.com/user-attachments/assets/63ef2ed3-6bb9-4804-acd6-c313f3450138)

[Vault Dashboard X](https://obsidian.md/plugins?id=vault-dashboard-x) By _shayherchen_

> 带活动热力图、文件夹分布和可配置可视文件夹快速链接的库仪表板。

[Astra](https://obsidian.md/plugins?id=astral-trek) By _nightfall_

> 用于任务、知识图谱、插件、库健康和写作活动的交互式 Obsidian 主页仪表板。

[Xove Dashboard](https://obsidian.md/plugins?id=xove-dashboard) By _ty_

> 将主页标签页变成可定制仪表板，用于捕获任务、追踪项目和审查笔记活动。

[Homepage Dashboard](https://obsidian.md/plugins?id=homepage-dashboard) By _pengze369-stack_

> 主题感知主页，带用于笔记、任务、日记和项目的可重排小部件。

[Bloom](https://obsidian.md/plugins?id=bloom) By _shuixiande_

> 用于库的柔和、粉彩日记仪表板——仪表板、任务、日历和追踪器尽在一个平静视图中。
![Bloom](https://raw.githubusercontent.com/shuixiande/bloom-obsidian-plugin/master/screenshots/home.png)

[Digital Desk](https://obsidian.md/plugins?id=digital-desk) By _zhangkaiming2579-dev_

> 从一个平静的仪表板开始工作：创建笔记和项目、重新打开最近文件、追踪活动工作，并可选同步微信读书高亮。

[Alex OS](https://obsidian.md/plugins?id=alex-os) By _alex-slovakia_

> 由 Markdown 和可选只读 Google 日历驱动的多彩、本地优先指挥中心。
![Alex OS](https://raw.githubusercontent.com/alex-slovakia/alex-os/master/docs/assets/dashboard-preview.svg)

[Lite Atlas](https://obsidian.md/plugins?id=lite-atlas) By _nikoleta_

> 用于笔记、项目和常用内容的可定制可视仪表板。

[MindTrace](https://obsidian.md/plugins?id=obstracker) By _yinxuhao_

> 本地优先注意力分析：自动追踪每篇笔记花费的时间和写作，然后可视化你的注意力如何在主题和小时之间流动。

[Chronobars](https://obsidian.md/plugins?id=chronobars) By _dojje_

> 创建基于时间的进度条。

[Doneut](https://obsidian.md/plugins?id=doneut) By _prajwal-56_

> 在包含复选框的标题旁显示实时进度环。完全可定制：颜色、大小、描边、动画速度等。

[Streak Heatmap](https://obsidian.md/plugins?id=streak-heatmap) By _v1n1-03_

> 可点击的 GitHub 风格连续热力图。点击一天标记或取消标记——无需习惯追踪依赖。

[Tally](https://obsidian.md/plugins?id=tally) By _virus7976_

> 从笔记追踪日常习惯。读取和写入普通 frontmatter 和 Dataview 行内字段，绘制年度热力图和连续记录，并专为在手机上单手点击而构建。
![Tally](https://raw.githubusercontent.com/virus7976/2026-09-02_school_habit-tracker_v1/master/docs/images/mobile-dark.png)

[Nexusnote](https://obsidian.md/plugins?id=nexusnote) By _shuixiande_

> 用于在库中追踪 AI 代理工作流、会话和输出的仪表板。

##### 界面与主题

[Icon Fairy](https://obsidian.md/plugins?id=icon-fairy) By _t1seo_

> 使用你自己的图片作为文件、文件夹、标签页、笔记标题和行内文本的图标，带本地图标库和 Markdown 注释。
![Icon Fairy](https://raw.githubusercontent.com/t1seo/icon-fairy/master/assets/icon-fairy-overview.png)

[Dev Lab](https://obsidian.md/plugins?id=plugin-lab) By _real-fruit-snacks_

> 针对官方 linter 和社区审查规则进行飞行前检查，命令和设置清单，以及每个已安装主题下的 UI 截图。
![Dev Lab](https://raw.githubusercontent.com/real-fruit-snacks/obsidian-plugin-lab/master/docs/assets/hero.png)

[Theme Lab](https://obsidian.md/plugins?id=theme-lab) By _real-fruit-snacks_

> 从应用内部构建主题：检查哪条 CSS 规则胜出，将截图矩阵捕获到联系表，并编写 lint、对比度和变量报告。
![Theme Lab](https://raw.githubusercontent.com/real-fruit-snacks/obsidian-theme-lab/master/docs/assets/hero.png)

[Latch](https://obsidian.md/plugins?id=latch) By _fourthform_

> 保持固定标签页打开，直到你明确取消固定。

[Window Title](https://obsidian.md/plugins?id=window-title) By _igorhajduk_

> 使用可视化构建器、文本模板和 frontmatter 属性组合窗口标题。

[New Note Button](https://obsidian.md/plugins?id=new-note-button) By _prtta_

> 在 iOS 上使用浮动按钮创建新笔记。

[Vault Switcher](https://obsidian.md/plugins?id=vault-switcher) By _bluegreenmagick_

> 一键切换库

[Sidebar Layouts](https://obsidian.md/plugins?id=sidebar-layouts) By _mrkhachaturov_

> 侧边栏变化时保持文档打开。一键在面板堆栈和全高聊天之间切换。为左侧和右侧边栏保存独立布局。

[Link Button Sidebar](https://obsidian.md/plugins?id=link-button-sidebar) By _dmi-kud_

> 从可配置的分组侧边栏按钮插入常用 wiki 链接。

[Context Focus](https://obsidian.md/plugins?id=context-focus) By _bagoftips_

> 聚焦悬停的列表分支或段落，同时调暗附近内容。

[Quick Switch Sidebar](https://obsidian.md/plugins?id=quick-switch-sidebar) By _travisluong_

> 浏览文件夹并立即打开所选笔记，无需离开侧边栏。

[Open Ribbon Groups](https://obsidian.md/plugins?id=ribbon-groups) By _aione314159_

> 将左侧功能区按钮分组为带标签、颜色编码的区块，并通过拖动重新排序。

[Tab Candy](https://obsidian.md/plugins?id=tabcandy) By _mara-li, andrewmcgivery, lvnacy-notes_

> 创建可定制的新标签页视图，带背景、引言、搜索等。

[GooglyEyes](https://obsidian.md/plugins?id=googly-eyes) By _loopman90_

> 在 Obsidian 中放置活的动动眼。

[Digital Rain Background](https://obsidian.md/plugins?id=digital-rain-background) By _mssoftjp_

> 添加动画 Matrix 风格雨，并调整主题的颜色和透明度以匹配。

[Style Tweaker](https://obsidian.md/plugins?id=style-tweaker) By _tracingorigins_

> 通过细粒度样式调整自定义应用外观。

[Style Tuner](https://obsidian.md/plugins?id=style-tuner) By _dyse-sofqi_

> 使用可配置控件微调主题、插件和片段 CSS 变量。
![Style Tuner](https://raw.githubusercontent.com/Dyse-Sofqi/obsidian-style-tuner/main/screenshots/example01.png)

[Button Sets](https://obsidian.md/plugins?id=button-sets) By _monapdx_

> 使用上传的动画图标创建自定义样式按钮。
![Button Sets](https://raw.githubusercontent.com/monapdx/Button-Sets/refs/heads/main/screenshots/email-buttons.gif)

[Lock Drag and Drop](https://obsidian.md/plugins?id=lock-drag-and-drop) By _bluegreenmagick_

> 防止侧边栏中的意外拖放
![Lock Drag and Drop](https://raw.githubusercontent.com/bluegreenmagick/obsidian-lock-drag-and-drop/master/resources/screenshot.png)

[Vault Badge](https://obsidian.md/plugins?id=vault-badge) By _meadow-field_

> 在库上方显示徽章/覆盖层以区分它们。

[Material Icon Theme](https://obsidian.md/plugins?id=material-icon-theme) By _gilbertzzzzz_

> 用于文件资源管理器的 Material Design 图标，按文件名、扩展名和文件夹名匹配。

[Explorer Icon Studio](https://obsidian.md/plugins?id=explorer-icon-studio) By _sprintzerzz_

> 替换 Obsidian 文件资源管理器中的文件和文件夹图标。

[Folder Toolkit](https://obsidian.md/plugins?id=folder-toolkit) By _gabrielbacha_

> 在文件资源管理器中为文件夹着色、组织、隐藏和临时聚焦。

[Explorer Categories](https://obsidian.md/plugins?id=explorer-categories) By _arpman_

> 为文件夹和文件分配类别，并按类别为文件资源管理器着色。类别携带颜色、标记和图标，其中的一切随之。

[Immersive Folder](https://obsidian.md/plugins?id=immersive-folder) By _iblinkq_

> 一键隐藏除你正在处理的文件夹之外的一切。将文件夹拖成你自己的顺序，而不是将它们命名为 01_Inbox、02_Projects 来排列。

[Quiet Desk](https://obsidian.md/plugins?id=an-tou) By _wrngo_

> 打开玻璃卡片桌面而不是文件树。将文件夹映射到房间，然后点击进入笔记。

[Ledge](https://obsidian.md/plugins?id=ledge) By _lunarch_

> 添加可配置的边缘停靠，带自定义位置、图标、颜色、显示时机和拖放排序。

[Sectioned Sidebar](https://obsidian.md/plugins?id=sectioned-sidebar) By _blank247d_

> 创建由真实文件夹和笔记支持的自定义侧边栏区块。
![Sectioned Sidebar](https://raw.githubusercontent.com/blank247d/sectioned-sidebar/master/assets/sectioned-sidebar-overview.png)

[Plainpage Settings](https://obsidian.md/plugins?id=plainpage-settings) By _pgyogesh_

> Plainpage 主题的伴侣。通过命令、热键和设置标签页切换专注模式、无边框 UI、全宽页面、紧凑密度、浮动窗格和调暗非活动窗格。

[Folder Space](https://obsidian.md/plugins?id=folder-space) By _matheuszarkov_

> 聚焦文件资源管理器中的文件夹，或将任何文件夹变成保存的空间，在左侧边栏作为自己的标签页打开。

[Root Books Tabs](https://obsidian.md/plugins?id=scope-tabs) By _vinggit_

> 聚焦一级文件夹书籍，并管理它们的标签页、组、颜色和弹出窗口。

[Grid Tab Switcher](https://obsidian.md/plugins?id=grid-tab-switcher) By _sharfaroz_

> 从 3x3 网格轻松切换到任何最近打开的文件，网格在前方中央打开，选择文件后即移开

[Tab Cleaner](https://obsidian.md/plugins?id=tab-cleaner) By _caijyii_

> 可视化查找、审查和安全关闭 Obsidian 标签页组。
![Tab Cleaner](https://raw.githubusercontent.com/caijyii/obsidian-tab-cleaner/master/assets/tab-cleaner-demo-en.gif)

[Slightly Better Tab Commands](https://obsidian.md/plugins?id=main-tab-commands) By _jimmycushnie_

> 添加比原生稍好的笔记标签页管理命令。
![Slightly Better Tab Commands](https://raw.githubusercontent.com/jimmycushnie/Slightly-Better-Tab-Commands/master/img/focus-setting.png)

[Tidy Tabs](https://obsidian.md/plugins?id=tidy-tabs) By _masked-knight02_

> 只保留当前标签页，关闭所有拆分窗格中的其他标签页。

[Cycle Latest Tab](https://obsidian.md/plugins?id=cycle-latest-tab) By _axelreaeklund_

> 将标签页导航更改为循环浏览最近使用的标签页。

[Focus Tab Groups](https://obsidian.md/plugins?id=focus-tab-groups) By _raykotarou_

> 使用可配置热键按编号聚焦编辑器标签组。

[Goto Position](https://obsidian.md/plugins?id=goto-position) By _wanten_

> 通过命令、功能区按钮或浮动按钮跳转到当前笔记的顶部或底部。

[Heading View](https://obsidian.md/plugins?id=heading-view) By _yin-ori_

> 在文件资源管理器中显示 Markdown 笔记的第一个标题而不是文件名。文件永不重命名。

[Star Favorites](https://obsidian.md/plugins?id=star-favorites) By _bugrasitemkar_

> 从右键菜单收藏你最喜欢的笔记和文件夹，并从专用收藏窗格跳转到它们。

[Unseen Changes Dot](https://obsidian.md/plugins?id=unseen-changes-dot) By _mightycrumbs_

> 在新笔记和已更改笔记旁显示点。

[Locate in Explorer](https://obsidian.md/plugins?id=locate-in-explorer) By _groupiesm_

> 像 IDEA 的 'Scroll from Source'——一键在文件资源管理器侧边栏中显示、滚动到中心并高亮活动笔记。

[Mix Folders and Files](https://obsidian.md/plugins?id=mixed-explorer-sort) By _mit-bach_

> 在文件资源管理器中按修改时间、创建时间或名称将文件和文件夹一起排序。文件夹与文件混合，而不是先列出。

[CN Natural Sort](https://obsidian.md/plugins?id=cn-natsort) By _liu-li-huan-ying_

> 让文件浏览器按「第一章 / 第二章 / 第十章」的中文数字自然排序。不改文件名、不改内容、零配置，直接接管 Obsidian 自身的排序逻辑。

[Folder Info](https://obsidian.md/plugins?id=folder-info) By _stagars-m_

> 在原生文件资源管理器中显示文件夹旁分开的文件和文件夹计数。

[Full File Extensions](https://obsidian.md/plugins?id=full-file-extensions) By _stagars-m_

> 在原生文件资源管理器中显示完整文件名，包括扩展名。

[Menu Hider](https://obsidian.md/plugins?id=menu-hider) By _icycat_

> 隐藏、重新排序和提升上下文菜单项，并从文件资源管理器复制绝对文件路径。

##### 集成与外部服务

[PubMed Article Fetcher](https://obsidian.md/plugins?id=pubmed-fetcher) By _gundestrup_

> 从 PubMed ID 或 DOI 链接获取文章元数据。

[WLED Control](https://obsidian.md/plugins?id=wled-control) By _modularidea_

> 控制本地网络上的 WLED LED 控制器：颜色、亮度、预设和开关，带自动设备发现。

[Japanese Holiday Calendar](https://obsidian.md/plugins?id=japanese-holiday-calendar) By _e8dev-note_

> 侧边栏日历，显示日本公共假日和日本年号。选择日期以打开其日记。
![Japanese Holiday Calendar](https://raw.githubusercontent.com/e8dev-note/japanese-holiday-calendar/master/docs/screenshot-light.png)

[Open in VSCode](https://obsidian.md/plugins?id=open-in-vscode) By _steelan9199_

> 在 VS Code 中打开当前笔记，跳转到光标行，或将整个库作为文件夹打开。

[TubeNote](https://obsidian.md/plugins?id=tubenote) By _zektor_

> 在库名称上方添加紧凑的 YouTube 直播控制器。

[Annotex](https://obsidian.md/plugins?id=annotex-publish) By _epipolarstudios, deqdon_

> 将当前笔记发布到自托管 Annotex 服务器，以便受邀同事阅读并留下行内锚定评论。

[Selection to Dida](https://obsidian.md/plugins?id=selection-to-dida-task) By _divaliu1408_

> 右键编辑器中的所选文本，将其添加为 Dida365/TickTick 任务，复用 DidaSync 插件连接。

[Scriben](https://obsidian.md/plugins?id=scriben) By _agampandeyy_

> 将 Scriben 会议笔记同步到此库，并让 Scriben 读取你选择共享回去的笔记。

[Clippings Official](https://obsidian.md/plugins?id=clippings) By _clippings-app_

> 将你用 Clippings 保存的转录和要点同步到库中，可控制文件夹、文件名和笔记模板。

[Canvas Sync Bridge](https://obsidian.md/plugins?id=canvas-sync-bridge) By _sixfivemil_

> 从浏览器扩展接收白板数据并同步到库中。

[Stockr Sync](https://obsidian.md/plugins?id=stockr-sync) By _builditinc_

> 将笔记中的见解发送到 Stockr（一个反思日记应用），并将最近反思拉取到日记中。

[Google Calendar Sync](https://obsidian.md/plugins?id=gcal-sync) By _mcuste_

> 同步库笔记中声明的 Google 日历事件。

[Google Calendar Tasks Sync](https://obsidian.md/plugins?id=google-cal-sync) By _pubcyberry_

> 代码块中的双向 Google 日历，以及镜像到 Google Tasks 的任务笔记。

[Outlook to Day Planner Sync](https://obsidian.md/plugins?id=outlook-sync) By _rocinante_

> 将 Outlook 日历事件同步到日记的 Day Planner 部分，按笔记的 frontmatter Date 过滤。

[Feishu Diary](https://obsidian.md/plugins?id=feishu-diary) By _yourtion_

> 与飞书机器人对话，它会作为日记落入你的库。

[Feishu Lark Sync](https://obsidian.md/plugins?id=feishu-lark-sync) By _zktww_

> 将飞书和 Lark 文档同步到本地库。

[Tencent Docs Publisher](https://obsidian.md/plugins?id=tencent-docs-publisher) By _poli_

> 手动将 Obsidian 笔记和链接笔记树发布到现有的腾讯文档页面。

[CSDN Draft Publisher](https://obsidian.md/plugins?id=csdn-draft-publisher) By _ncepuee_

> 通过本地 Playwright 桥将 Markdown 笔记同步到 CSDN 博客草稿，支持多账号、草稿管理和写回编辑。

[Gutenberg Publisher](https://obsidian.md/plugins?id=gutenberg-publisher) By _insdel-lab_

> 将 Obsidian Markdown 转换为 Gutenberg 块，并一键发布到 WordPress。

[Hugo Exporter](https://obsidian.md/plugins?id=hugo-exporter) By _miles-ya_

> 使用 AI 审查 Obsidian 笔记中的敏感内容和隐私风险，然后将批准的 Markdown 和图片导出为 Hugo 页面包。
![Hugo Exporter](https://raw.githubusercontent.com/miles-ya/ObsidianHugoExporter/master/a3f29c8d92e1b472.png)

[Nekote Blog](https://obsidian.md/plugins?id=nekote-blog) By _ddryo_

> 将笔记及其引用的资产从库发布到 Nekote Blog 站点。

[OnceMarked](https://obsidian.md/plugins?id=oncemarked) By _ovspianist_

> 将笔记和链接文章发布到你的 OnceMarked 博客。

[Tomos Publisher](https://obsidian.md/plugins?id=tomos-publisher) By _tomosweb_

> 从 Obsidian 桌面和移动端发送 Markdown 到 Tomos。

[Blog Outbox](https://obsidian.md/plugins?id=blog-outbox) By _supralune_

> 将选定的 Markdown 笔记和本地附件发布到可配置的本地博客项目。

[mininote](https://obsidian.md/plugins?id=mininote) By _toyz_

> 通过 mininote 发布和分享笔记：推送一篇笔记，获得一个公共链接。你的库仍是真实来源。

[Outcrop](https://obsidian.md/plugins?id=outcrop) By _sanketsaurav_

> 通过自托管 Outcrop 服务器在你自己的域名上公开分享单篇笔记。

[CMDS Share](https://obsidian.md/plugins?id=cmds-share) By _johnfkoo951_

> 立即将笔记分享到网络。可自托管或托管后端（CMDSPACE、Synology NAS、GitHub Pages、Supabase、Convex），带查看计数、过期、撤销和可选的端到端加密。

[Share MD](https://obsidian.md/plugins?id=share-md) By _gaozhengjie_

> 将 Obsidian Markdown 笔记发布到自托管分享页面。

[NoteLAN](https://obsidian.md/plugins?id=local-note-share) By _olivierlb_

> 将选定的 Obsidian 笔记或文件夹作为只读网页在局域网上共享。

[MarkPress](https://obsidian.md/plugins?id=markpress) By _kong_

> 将 Markdown 笔记格式化为微信公众号和 X 文章，带实时预览、主题和一键复制。
![MarkPress](https://raw.githubusercontent.com/kong0xyz/markpress/master/images/preview-wechat.png)

[Dou Publish for WeChat](https://obsidian.md/plugins?id=dou-publish-preview) By _miracle0828_

> 使用微信友好格式预览 Markdown，并复制带托管图片的富文本。

[WeChat Workbench](https://obsidian.md/plugins?id=wechat-workbench) By _anightmonarch_

> 用于微信公众号草稿的可验证发布工作台。

[DGS WeChat Publisher](https://obsidian.md/plugins?id=dgs-wechat-publisher) By _d0u9_

> 从当前 Markdown 笔记创建微信公众号草稿。

[Bloomtype Publisher](https://obsidian.md/plugins?id=bloomtype-publisher) By _0flowerocean0_

> 在 Bloomtype 中预览 Markdown 笔记并将样式化内容复制到微信。
![Bloomtype Publisher](https://raw.githubusercontent.com/0flowerocean0/bloomtype-obsidian/master/obsidian-split-preview.jpeg)

[WeChat Publish Preview](https://obsidian.md/plugins?id=wechat-publish-preview) By _ianchen_

> 使用微信就绪样式和双向滚动同步预览 Markdown。将本地图片转换为 Base64 并将富文本复制到微信草稿编辑器——无需图床。

[Journal Sync](https://obsidian.md/plugins?id=journal-sync-bridge) By _linyunerr_

> 在 Obsidian 中记录日记并发布到 flomo、Telegram、Mastodon、Misskey 和 Notion，无需额外后端服务。

[Mobile-Translate](https://obsidian.md/plugins?id=mobiletranslate) By _kfirgum_

> 选择文本并点击按钮翻译，使用 Google Translate（无需 API）

[TranslateNote](https://obsidian.md/plugins?id=translate-note) By _dmagg_

> 使用任何 OpenAI 兼容 LLM 翻译选区或整篇笔记。翻译在侧边面板中打开以供审查，因此只有插入时笔记才会更改。YAML front-matter 保持不变。

[Parallel Translator](https://obsidian.md/plugins?id=parallel-translator) By _llbbaagg66_

> 科学 Markdown 翻译、阅读辅助和最小双语源同步。
![Parallel Translator](https://raw.githubusercontent.com/llbbaagg66/parallel-translator/master/assets/parallel-translator-overview.png)

[Vietnamese AI RSS](https://obsidian.md/plugins?id=vietnam-ai-rss) By _tonyxbase_

> 阅读个人 RSS 和 Atom 源，将中文文章翻译为越南语，并将链接保存到日记。

[Formatted Chinese](https://obsidian.md/plugins?id=formatted-chinese) By _formattedchinese_

> 罗马化和翻译笔记中的中文文本：Jyutping、Yale 或拼音，带格式化双语布局。通过 FormattedChinese.com 支持粤语和普通话。

[Qiniu Image](https://obsidian.md/plugins?id=qiniu-image) By _chenxuan520_

> 将粘贴或拖放的图片上传到七牛对象存储，并插入 CDN 链接而不是本地附件。
![Qiniu Image](http://your-cdn/xxx.png)

[anbing-image-upload](https://obsidian.md/plugins?id=anbing-image-upload) By _cuianbing_

> 将图片上传到 S3 兼容存储

[GitHub Image Host](https://obsidian.md/plugins?id=github-image-host) By _rocky_

> 将粘贴或拖放的图片上传到 GitHub 仓库，并将公共链接插入笔记。

[Weather Bar](https://obsidian.md/plugins?id=weather-bar) By _mrrepac_

> 在状态栏显示你所在城市的当前温度和天空。

[Metronome + Tuner](https://obsidian.md/plugins?id=metronome-tuner) By _patrick-eff_

> 在 Obsidian 内精确的节拍器和半音调音器。
![Metronome + Tuner](https://raw.githubusercontent.com/patrickfanella/obsidian-plugin-metronome-tuner/master/docs/metronome-view.png)

[Vinyle](https://obsidian.md/plugins?id=vinyle) By _liotou_

> Obsidian 中的黑胶唱机：当前 Apple Music 音乐封面在可移动窗格和状态栏中的黑胶上旋转。macOS，无需 API 密钥。
![Vinyle](https://raw.githubusercontent.com/liotou/obsidian-vinyle/master/docs/vinyle.gif)

[Hevy Sync](https://obsidian.md/plugins?id=hevy-sync) By _adigorn_

> 与 Hevy 同步数据。

[Grimmory Sync](https://obsidian.md/plugins?id=grimmory-sync) By _medusero_

> 从自托管 Grimmory 实例同步书籍高亮和笔记到库中。

[Meetily Sync](https://obsidian.md/plugins?id=meetily-sync) By _sahil1_

> 将本地 Meetily 会议录制器的摘要和转录同步到库中。完全在设备上，无云。

[Ruune Sync](https://obsidian.md/plugins?id=ruune-sync) By _joe-ruune_

> 自动将你的 Ruune 笔记、摘要和转录同步到 Obsidian 库。

[UCT Notebook Sync](https://obsidian.md/plugins?id=uct-notebook-sync) By _unchartedterritory5995-cyber_

> 将此库的 Markdown 笔记单向同步到你的 UCT Intelligence Notebook（Journal 2.0）。

[Streamient Sync](https://obsidian.md/plugins?id=streamient-sync) By _nitai, streamient_

> 将库内容与你的 Streamient 知识项目同步。

[Ribs Memos Sync](https://obsidian.md/plugins?id=ribs-memos-sync) By _cuteribs_

> 通过 REST API 将文件夹中的笔记与 Memos 服务器 (usememos.com) 同步。

[MemVault](https://obsidian.md/plugins?id=memvault) By _dreamor_

> 将 Obsidian 连接到 MemVault——浏览、搜索和捕获 Agent 记忆；保持 Markdown 笔记文件夹与服务器同步。

[YouSpot](https://obsidian.md/plugins?id=youspot) By _youspot-obsidian_

> 在库文件夹和你的 YouSpot Brain 之间双向同步。

[LabTab Markdown Sync](https://obsidian.md/plugins?id=labtab-markdown-sync) By _labtab_

> 在 Obsidian 库中保留选定 LabTab wiki 和会议笔记的只读副本。

[OmniSync GDrive](https://obsidian.md/plugins?id=gdrive-bisync) By _donespeak_

> 将库与 Google Drive 同步

[Twine](https://obsidian.md/plugins?id=twine) By _twine_

> 将库同步到你自己的 S3 兼容对象存储（如 Cloudflare R2 或 Backblaze B2），端到端加密，无需服务器。

[Pumice](https://obsidian.md/plugins?id=pumice) By _search5_

> 通过你自己的自托管服务器同步、版本化、发布和共享库。

##### 开发者工具

[Hot Reload](https://obsidian.md/plugins?id=hot-reload) By _pjeby_

> 当开发中的插件文件更改时自动重新加载

[Dev Lab](https://obsidian.md/plugins?id=plugin-lab) By _real-fruit-snacks_

> 针对官方 linter 和社区审查规则进行飞行前检查，命令和设置清单，以及每个已安装主题下的 UI 截图。
![Dev Lab](https://raw.githubusercontent.com/real-fruit-snacks/obsidian-plugin-lab/master/docs/assets/hero.png)

[Theme Lab](https://obsidian.md/plugins?id=theme-lab) By _real-fruit-snacks_

> 从应用内部构建主题：检查哪条 CSS 规则胜出，将截图矩阵捕获到联系表，并编写 lint、对比度和变量报告。
![Theme Lab](https://raw.githubusercontent.com/real-fruit-snacks/obsidian-theme-lab/master/docs/assets/hero.png)

[Starter Packs](https://obsidian.md/plugins?id=starter-packs) By _grub-basket_

> 创建和分享精选的社区插件合集。以链接或代码分享合集；接收者可预览合集并几次点击即可安装全部。

[Canary Edge](https://obsidian.md/plugins?id=canary-edge) By _yuichi-aragi_

> 用于插件测试和版本管理的现代、高级 BRAT 替代品。具有发布选择、变更日志审计、兼容性检查和细粒度每插件覆盖。

[China BRAT](https://obsidian.md/plugins?id=chinabrat) By _cdnbrat_

> 粘贴一个插件文件地址即可安装，内置三个示例地址，解决网络慢导致的插件无法安装问题。装 shoujidiannao（shouji diannao）插件就用这个

[OpenPlug](https://obsidian.md/plugins?id=openplug) By _jiaoyingxing_

> 通过国内镜像加速安装官方 Obsidian 社区插件，无需 VPN。

[K-Tech Update Guard](https://obsidian.md/plugins?id=k-tech-update-guard) By _k-tech-studio_

> 按需检查社区插件和主题更新，然后仅安装你选择的那些。

[App Update Notifier](https://obsidian.md/plugins?id=app-update-notifier) By _mnaoumov_

> 通知你新的应用、测试版和安装程序发布——而非插件更新——即使自动更新已禁用。它从不安装任何东西。
![App Update Notifier](https://raw.githubusercontent.com/mnaoumov/obsidian-app-update-notifier/master/images/screenshots/screenshot-desktop-1.png)

[Dev-Prod Switcher](https://obsidian.md/plugins?id=dev-prod-plugin-switcher) By _danrfletcher_

> 注册已安装的插件，将每个链接到本地开发构建，并在开发构建和实时版本之间热重载。仅桌面，需要 Hot Reload。

[Rustdocs](https://obsidian.md/plugins?id=rustdocs) By _laptapk_

> 从本地 Cargo 项目生成带链接的 Rust API 文档为 Markdown。

[Code Runner](https://obsidian.md/plugins?id=code-runner) By _chujiu-dev_

> 在 Obsidian 中交互式运行代码块，支持 stdin 输入，可在桌面、iOS 和 Android 上使用。支持 Python、C、C++、Java、Go、JavaScript、TypeScript、Rust、Kotlin 等。

[Runnable Code Blocks](https://obsidian.md/plugins?id=runnable-code-blocks) By _woonyong-choi_

> 在 Obsidian 笔记中编辑和运行代码，带行内结果和可选的本地或远程运行时。

[Python Editor](https://obsidian.md/plugins?id=python-editor) By _issac404_

> 使用 Lezer 驱动的结构、高亮、搜索和自动保存来浏览和编辑 Python 文件。

[marimo notes](https://obsidian.md/plugins?id=marimo-notes) By _kirangadhave_

> 在笔记中作为实时、响应式 Python 单元运行 marimo 笔记本。Python 通过 Pyodide 在浏览器内运行。

[Marimo Notebooks](https://obsidian.md/plugins?id=marimo) By _kammmran_

> 在 Obsidian 内编辑和运行 marimo 响应式 Python 笔记本。

[Onyx](https://obsidian.md/plugins?id=onyx) By _biehenjia_

> 使用 CodeMirror 6 和语言服务器编辑源文件，无需离开应用。

[Import Code](https://obsidian.md/plugins?id=import-code) By _yu4n2h1_

> 使用 ![[file.ext]] 语法将本地或远程代码文件导入并嵌入笔记，带语法高亮、符号和行提取以及自动刷新。

[Code Diff](https://obsidian.md/plugins?id=code-diff) By _izquiratops_

> 在笔记中间渲染嵌入的代码差异，来自粘贴的补丁或 Git 仓库。

[Code Linker](https://obsidian.md/plugins?id=code-linker) By _max-fluff_

> 将笔记深度链接到源代码。自动补全符号并跳转到 IDE（VS Code、JetBrains）或 GitHub/GitLab 永久链接中的精确行。嵌入实时代码片段。

[Dev Runner](https://obsidian.md/plugins?id=dev-runner) By _nblum_

> 在后台运行和管理包脚本和 README shell 命令。

[Startup Metrics Logger](https://obsidian.md/plugins?id=startup-metrics-logger) By _hannesdelbeke_

> 追踪启动时间和每插件加载分解，编写结构化 JSON 和 Markdown 日志以供 AI 分析和优化。

[Ferusnet Security Audit](https://obsidian.md/plugins?id=ferus-plugin-auditor) By _ferusnet_

> 对已安装的社区插件进行静态分析安全审计。标记危险 API，对照 GitHub 验证发布哈希，并对插件风险评分。完全本地——无数据离开库。

[MADR Author](https://obsidian.md/plugins?id=madr) By _vanerp_

> 直接在库中编写 Markdown 架构决策记录

[Decision Ledger](https://obsidian.md/plugins?id=decision-ledger) By _din-es_

> 将决策绑定到其治理的代码，并查看代码何时漂移。

[GitLab Merge Request](https://obsidian.md/plugins?id=gitlab-mr) By _risadams_

> 在行内或代码块中引用 GitLab 合并请求，并直接在笔记中查看其实时状态。

[PML Syntax Highlighting](https://obsidian.md/plugins?id=syd-pml-highlight) By _ml9373_

> 为 AVEVA PML/PML2 代码提供语法高亮：笔记中的 ```pml 块，以及直接打开的原始 .pml、.pmlobj、.pmlfnc、.pmlfrm、.pmlmac、.pmlcmd 文件。

[ABAP Syntax Highlight](https://obsidian.md/plugins?id=abap-syntax-highlight) By _laurinsorgend_

> 在阅读视图和编辑时为围栏 abap 代码块添加 ABAP 语法高亮。

[Sugar High](https://obsidian.md/plugins?id=sugar-high) By _ankitchouhan1020_

> 使用 Sugar High 的轻量语义语法颜色高亮渲染的代码块。

[Materin Ctx](https://obsidian.md/plugins?id=materin-ctx) By _leapord_

> 在原生感觉的编辑器视图中打开 JSON / YAML 文件，带格式化、折叠和搜索。

[Materin View](https://obsidian.md/plugins?id=materin-view) By _leapord_

> 读取 OpenAPI/Swagger 规范并渲染 knife4j 风格文档视图，带请求调试。

[AsyncAPI Renderer](https://obsidian.md/plugins?id=asyncapi-renderer) By _vladzz, grancar_

> 使用源编辑器渲染 AsyncAPI 规范文件（2.x 和 3.x）。

[API Database Schema Tools](https://obsidian.md/plugins?id=api-db-schema-tools) By _humoumou_

> 使用可编辑网格、JSON/DDL 导入、行内引用、电子表格工作流和可逆的一键演示入门流程来管理 API 和数据库模式。

[Worktree Viewer](https://obsidian.md/plugins?id=worktree-viewer) By _sjwinkler19_

> 从库中实时查看 Git 工作树：代理存在点、每工作树差异和预览、一键提交和拉取请求创建。

[Docker Connector](https://obsidian.md/plugins?id=docker-connector) By _anthonyfitzpatrick_

> 桌面 Docker 环境仪表板，带安全的本地、Context、SSH 和双向 TLS 连接。

[Uncommon Terminal](https://obsidian.md/plugins?id=uncommon-terminal) By _uncommonengineer_

> 在窗格中运行真实 shell，由 Ghostty 的终端解析器渲染。鼠标感知的 TUI 正确滚动。macOS 和 Linux。

[Open Terminal Panel](https://obsidian.md/plugins?id=open-terminal-panel) By _aione314159_

> 编辑器下方的真实终端：选项卡中的多个 shell，每个都有真实 TTY，以及一键 cd 到库或你正在编辑的笔记文件夹。

[Folder Terminal](https://obsidian.md/plugins?id=folder-terminal) By _firstkang_

> 悬停文件资源管理器中的文件夹以显示终端图标；点击它以在底部打开以该文件夹为根的真实 shell (PTY)。

[Terminal Commands](https://obsidian.md/plugins?id=terminal-commands) By _issac404_

> 在终端中打开库并启动可配置的 shell 命令。

[Vault Shell](https://obsidian.md/plugins?id=obsiminal) By _mainhatduy_

> 在 Obsidian 工作区内打开交互式终端。
![Vault Shell](https://raw.githubusercontent.com/mainhatduy/obsiminal/master/images/demo.png)

[ICOR for Life - Terminal](https://obsidian.md/plugins?id=icor-for-life-terminal) By _paperless-movement, thomas-roedl_

> 库中的真实终端。你的登录 shell 在标签页或拆分中，键盘捕获仍让 Obsidian 保留其调色板，以及库文件夹中 Claude Code 的一命令启动器。

[PakCLI Suite](https://obsidian.md/plugins?id=pakcli-suite) By _pakcli_

> 一体化套件：符号链接管理器、资源路由器、树图、SQLSeal 和 Tablite CSV 编辑器，以及 Leaflet 数据库。

[PakCLI Panel](https://obsidian.md/plugins?id=pakcli-table) By _pakcli_

> 可视表格、交互式 SQL 数据库浏览器、ASCII 白板绘图和交互式 Leaflet 地图。

[PakCLI Local](https://obsidian.md/plugins?id=pakcli-local) By _pakcli_

> 桌面 OS 桥和电源实用程序：PowerShell 脚本运行器、符号链接管理器和 yt-dlp 媒体捕获。

[Netron Viewer](https://obsidian.md/plugins?id=netron-viewer) By _nicolaswidynski_

> 使用捆绑的 Netron 副本，通过本地回环 HTTP 服务器，在笔记中行内渲染 ONNX / TFLite / Core ML / PyTorch / Keras 模型架构图。

[Wireloom](https://obsidian.md/plugins?id=wireloom) By _weakingwang_

> 在笔记中渲染 AI 生成的 UI 线框图。将纯文本输入转化为自包含 SVG，无需外部工具。

[Vault MCP Connector](https://obsidian.md/plugins?id=vault-mcp-connector) By _tristanedu, vault-mcp_

> 通过显式访问控制将批准的库上下文和直接本地文件工具连接到 MCP 客户端。

[TC Bridge](https://obsidian.md/plugins?id=tc-bridge) By _suavecito_

> The 40 Thieves 的库访问 MCP 服务器的伴侣桥插件。使用命令调度和插件火力桥扩展 Local REST API。
![TC Bridge](https://cursor.com/deeplink/mcp-install-dark.svg)

[Agent MCP](https://obsidian.md/plugins?id=agent-mcp) By _rospaans_

> 在 Obsidian 内运行编码代理（Claude Code、Codex、Ollama）。附带内置终端，并通过 MCP 暴露活动选区和打开的编辑器。

[Note API](https://obsidian.md/plugins?id=note-api) By _fengshuzi_

> 暴露受 API 密钥保护的本地 HTTP API 以查看、创建、编辑和删除库笔记。

[Vault Toolkit Bridge](https://obsidian.md/plugins?id=vault-toolkit) By _pavel-litvinov_

> 创建、查找、读取和更新笔记、标签、frontmatter 和库元数据。

[Config Sync](https://obsidian.md/plugins?id=config-sync) By _xooooooooox_

> 跨设备和库选择性按需分发库配置（片段、热键、插件设置）。

##### 语言与学习

[Grammalecte](https://obsidian.md/plugins?id=grammalecte) By _unurled_

> 使用 Grammalecte 的法语语法和拼写检查，支持本地服务器、远程服务器或完全离线引擎。

[Uzbek Writing Suite](https://obsidian.md/plugins?id=uzbek-writing-suite) By _arigurj_

> 乌兹别克语写作全套工具：带词典的拼写检查器、脚本转换器（拉丁/西里尔/音标）、每日语录。

[Uzbek Script Switcher](https://obsidian.md/plugins?id=uzbek-script-switcher) By _arigurj_

> 在乌兹别克语拉丁和西里尔脚本之间转换所选文本——一键修复错误脚本。

[Georgian Script Switcher](https://obsidian.md/plugins?id=georgian-script-switcher) By _arigurj_

> 在格鲁吉亚语、拉丁语和西里尔语脚本之间转换所选文本。

[Layout Switcher (RU-EN)](https://obsidian.md/plugins?id=layout-switcher) By _arigurj_

> 将所选文本从拉丁字母转换为西里尔字母（及反向）——修复错误布局下的“盲打”。

[Cursor Layout Indicator](https://obsidian.md/plugins?id=cursor-layout-indicator) By _bashdays_

> 在编辑器光标旁显示并更正活动的 Windows、macOS 或 Linux 键盘布局。
![Cursor Layout Indicator](https://raw.githubusercontent.com/bashdays/cursor-layout-indicator/master/docs/images/indicator-en.png)

[Formatted Chinese](https://obsidian.md/plugins?id=formatted-chinese) By _formattedchinese_

> 罗马化和翻译笔记中的中文文本：Jyutping、Yale 或拼音，带格式化双语布局。通过 FormattedChinese.com 支持粤语和普通话。

[Japanese Reading Assistant](https://obsidian.md/plugins?id=japanese-reading-assistant) By _zhangyicong_

> 本地 OCR 选定的 PDF 区域，然后使用上下文词汇和简洁、颜色链接的语法笔记翻译日语。

[WordFolio](https://obsidian.md/plugins?id=wordfolio) By _fire-university_

> 悬停任何英语单词以获取离线词典：定义、英式和美式音标及发音。繁体中文或英文，Markdown 词汇笔记本，以及 FSRS 间隔重复。

[Beyond Words](https://obsidian.md/plugins?id=beyond-words) By _jgxdb_

> 使用 LLM 将词汇表转化为分级英语段落——目标词在上下文中高亮，带翻译和短语库。帮助语言学习者通过真实使用而非死记硬背掌握单词。

[Klomimory Word Cards](https://obsidian.md/plugins?id=klomimory) By _klomix_

> 用于学习单词格式的插件：单词 - [音标] - 翻译
![Klomimory Word Cards](https://github.com/user-attachments/assets/f483e229-f588-4c7b-a087-d773279645bb)

[FleurDict](https://obsidian.md/plugins?id=fleurdict) By _gibsonchan-5_

> 优雅的英语词典插件，带单词查询、AI 翻译、词汇笔记本和闪卡复习。

[Ezdict](https://obsidian.md/plugins?id=ezdict) By _jmedzen_

> 自定义纯 Markdown 词典读取和查询引擎，制作你自己的词典并分享。自定義 Markdown 辭典查詢工具，寫出自己的詞條創建辭典，並與夥伴分享。

[Nice Korean Spell Checker](https://obsidian.md/plugins?id=nice-korean-spell-checker) By _creative781_

> 使用 Bareun.ai 或 Google Gemini API 的简单韩语拼写检查器，用于 Obsidian。

[Camel Case Spellcheck](https://obsidian.md/plugins?id=camel-case-spellcheck) By _piersong55_

> 拼写检查 camelCase、PascalCase 和 snake_case 标识符中的单个单词。

[Culebra AI Spell Correct](https://obsidian.md/plugins?id=culebra-ai-spell-correct) By _tutivsoft-com_

> 使用 OpenRouter 更正所选文本、笔记和 Markdown 文件中的拼写、语法和标点。

[Anki Exporter](https://obsidian.md/plugins?id=anki-exporter) By _erikmielke_

> 将 Obsidian Markdown 导出为 Anki 闪卡。

[Anki Bridge](https://obsidian.md/plugins?id=anki-bridge) By _aaronade0_

> 从 Markdown 创建和同步 Anki 闪卡，同时保留复习历史。

[Anki Markdown Sync](https://obsidian.md/plugins?id=anki-markdown-sync) By _justinnnnn-045_

> 通过 AnkiConnect 在 Markdown 库和 Anki 之间双向同步。编写 ````anki ` 块，同步到 Anki，在 Anki 中编辑，再同步回来。冲突安全。

[Yiji Study](https://obsidian.md/plugins?id=yiji-study) By _ziz-lg_

> 在手机上使用本地题库刷题，自动整理错题，并保存学习断点与统计数据。

[Ocard](https://obsidian.md/plugins?id=ocard) By _nanhe17_

> 选中文字一键制卡，用精美的卡片翻阅回顾。

[Mistake Notebook](https://obsidian.md/plugins?id=mistake-notebook) By _adobiz_

> 错题本（Mistake notebook）：遮盖答案（模糊/白色/马赛克/黑色），点击显示，自动将长答案拆分到链接页面，在光标处插入，问题强调，极简模式。纯 Markdown，无锁定。

[Table Cards](https://obsidian.md/plugins?id=table-cards) By _surdeddd_

> 将 Markdown 表格作为自适应、全部可见的卡片学习，带可视化布局编辑器。

[Omni Quiz](https://obsidian.md/plugins?id=omni-quiz) By _pavelpeng7_

> 从 Markdown 测验块渲染交互式单选题测验，并持久化答案进度。

[RecallFlow AI](https://obsidian.md/plugins?id=recallflow-ai) By _poopchen_

> 生成 AI 闪卡并使用 FSRS 间隔重复调度器复习。

##### TTRPG 与游戏

[Draw Steel Hero Importer](https://obsidian.md/plugins?id=drawsteel-hero-importer) By _zachhall_

> 导入 ForgeSteel .ds-hero 导出文件或填写好的 MCDM 角色表 PDF 到 Draw Steel Elements 格式笔记。

[SCVM Birther](https://obsidian.md/plugins?id=scvmbirther) By _barrowrook_

> 生成 MÖRK BORG 兼容角色为精美 Markdown 笔记。

[DNGNGEN Renderer](https://obsidian.md/plugins?id=dngngen) By _barrowrook_

> 将 DNGNGEN 复制的地牢渲染为 Mork Borg 的结构化笔记。

[Draw Steel Rule Term Linker](https://obsidian.md/plugins?id=drawsteel-rule-term-linker) By _zachhall_

> 将笔记中的 Draw Steel 规则术语反向链接到 DS Compendium 中的条目。

[Power Roll Detector](https://obsidian.md/plugins?id=power-roll-detector) By _zachhall_

> 检测 Draw Steel 属性块中的“Power Roll + N”文本，并将其变为可点击的 2d10+N 掷骰器。

[Campaignitz](https://obsidian.md/plugins?id=campaignitz) By _stormageddon37_

> 桌面角色扮演游戏的战役情节时间线可视化。

[Sheetsmith](https://obsidian.md/plugins?id=sheetsmith) By _richie735_

> 为任何桌面角色扮演游戏设计和使用的角色表。在网格上构建布局，定义自己的公式，并将每个角色保存为纯 Markdown 笔记。

[Dragon Glass](https://obsidian.md/plugins?id=dragon-glass) By _bmcclung055_

> 用于 TTRPG 库的战役管理：游戏索引、战役文件夹和带实时历史表的会话笔记。
![Dragon Glass](https://raw.githubusercontent.com/bmcclung055/obsidian-dragon-glass/master/images/game-index.png)

[DnD Character Sheet Helper](https://obsidian.md/plugins?id=dnd-character-sheet-helper) By _ionaspolitis_

> 从 frontmatter 属性渲染 D&D 5.5e 角色特性、武器和库存。

[DnD Character Sheet Tool](https://obsidian.md/plugins?id=dnd-charactersheet) By _simonzweers_

> 允许你查看角色表的插件。

[DnD Wiki](https://obsidian.md/plugins?id=dnd-wiki) By _infernomoon_

> 将 D&D wiki 内容转换为 Obsidian 中的交互式参考卡和过滤列表。

[Shadowdark Tools](https://obsidian.md/plugins?id=shadow-dark) By _p-mercury_

> 为 Shadowdark GM 提供的扩展工具包。

[VTMV5 Dice Roller](https://obsidian.md/plugins?id=vtmvfive-dice-roller) By _derell-nar_

> 用于 Vampire The Masquerade V5 TTRPG 的骰子滚动插件。

[Perhaps](https://obsidian.md/plugins?id=perhaps) By _panat, scriptwizards_

> 在笔记中掷写为纯文本的随机表。Perchance 风格语法，交互式重新掷骰，离线且移动端可用。

[Trolls Printing Press](https://obsidian.md/plugins?id=trolls-printing-press) By _daren-thomas_

> 从 Markdown 创建打印就绪的会话笔记、参考表、索引卡和小册子。

[Chronicle of Whispers - Shadow Atlas](https://obsidian.md/plugins?id=cow-shadow-atlas) By _chronicle-of-whispers_

> 运行桌面 RPG 战斗地图，带战争迷雾、图钉和网格，并通过局域网与玩家实时共享。

[BrewVault](https://obsidian.md/plugins?id=brewvault) By _luiserivaldo_

> 在 Obsidian 内将 Markdown 笔记渲染为 Homebrewery 风格、分页的 D&D 5e 文档。

[U+13080 Weather](https://obsidian.md/plugins?id=wadjet) By _alas-poor-ophelia_

> 使用随机生成而非模拟，为 TTRPG 世界观构建提供确定性、数据驱动的天气。

[Tome Connector](https://obsidian.md/plugins?id=tome-connector) By _ghatazhak, tome-vtt_

> 将属性块、地图、道具、遭遇和角色发送到 Tome 服务器，并将笔记文件夹编译为 PDF 供其参考库使用。

[Vault Arcade](https://obsidian.md/plugins?id=vault-arcade) By _hibiki_

> 在标签页中玩 Snake、2048、Blocks 和扫雷，桌面和移动端，键盘或触摸，离线。最高分随库保存。更多游戏即将到来。

[Arcade](https://obsidian.md/plugins?id=arcade) By _parvashah-create_

> 在专为 Obsidian 构建的单色街机中玩受 Atari 2600 时代启发的原创游戏。

[Screen Pet Companion](https://obsidian.md/plugins?id=screen-pet) By _yashagrawall_

> 交互式动画屏幕宠物伴侣，在你的屏幕上漫游，表达情绪，并通过番茄钟休息提醒和任务通知提醒你。

[Desktop Pet](https://obsidian.md/plugins?id=desktoppet) By _xiaosong8584_

> 笔记编辑器内可爱的 3D 卡通机器人。

##### 财务

[IHM Tracker](https://obsidian.md/plugins?id=ihm-tracker) By _modularidea_

> IHateMoney + Cospend 客户端：查看/编辑账单、自动分类、统计、PDF/Excel 导出。

[Finance Vault](https://obsidian.md/plugins?id=finance-vault) By _matheusz-nied_

> 在本地 Markdown 文件中记录收入、支出、卡片、固定支出、分期付款和缴款。

[Month Finance](https://obsidian.md/plugins?id=month-finance) By _kharbacheuski_

> 在 Markdown 表格中追踪月度收入和支出：余额、按类别支出图表和汇总仪表板。

[WorkLife Calendar](https://obsidian.md/plugins?id=worklife-calendar) By _atinss_

> 日历、任务追踪器、习惯追踪器和财务规划器——全部在一个 Obsidian 插件中。

[Goal Ledger](https://obsidian.md/plugins?id=goal-ledger) By _yg2224_

> 通过里程碑和 12 周热力图追踪个人目标收入。

[AccountingCalendar](https://obsidian.md/plugins?id=accounting-calendar) By _susiel_

> 日记的会计日历视图。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Thino](obsidian://show-plugin?id=obsidian-memos) 已更新至 v3.0.30

> - **3.0.30** (2026-08-17 至 2026-09-30 期间)：
>   - 维护：更新至 3.0.30 版本，具体变更内容未在 GitHub Release 页面详细列出，建议参考插件内置更新日志或 PKMer 社区公告。

---

#### [Simple Mind Map](obsidian://show-plugin?id=simple-mind-map) 已更新至 v0.2.10

> - **0.2.10** (2026-08-17 至 2026-09-30 期间)：
>   - 修复：
>     - 修复单个节点文本过长时编辑框高度无法完全显示的问题；
>     - 修复使用彩虹主题时部分结构（目录组织图、鱼骨图）出现连线缺失的问题；
>     - 修复移动端无法复制粘贴节点的问题。
>   - 新增：
>     - 导出弹窗文件名自动填充当前文件的文件名；
>     - 移动端移除不可用功能入口：基础样式/设置的导入导出配置功能、节点右键菜单 - 导出该节点为图片 - 下载到本地功能。
>   - 专业版：
>     - 自由节点树支持切换独立的结构（入口：自由节点树的根节点右键菜单）；
>     - 支持开启手绘风格（入口：侧边栏 - 设置）。
> - **0.2.9** (2026-08-17 至 2026-09-30 期间)：
>   - 修复：
>     - 修复选择主题列表中最后一个主题时没有选中样式的问题；
>     - 修复转换为 md、导出为 md、复制为 md 时节点文本中插入的 `[[xxx]]` 内链丢失并变成纯文本的问题；
>     - 修复打开了思维导图标签页时页面所有输入框中鼠标点击文本选中区域没有响应的问题。
>   - 新增：
>     - 支持在上方插入同级节点（快捷键 Shift+Enter，节点右键菜单）；
>     - 支持插入块级数学公式：侧边栏增加勾选框，文本编辑时输入 `$$xxx$$`。

---

#### [ZotLit](obsidian://show-plugin?id=zotlit) 已更新至 v2.2.0-beta.1

> - **2.2.0-beta.1** (2026-09-29)：
>   - 新增：
>     - PDF 阅读器：在 Obsidian 标签页中打开 Zotero 条目的 PDF，并直接显示 Zotero 高亮标注；
>     - 标注编辑：支持高亮、下划线、添加笔记、文本、图片和墨迹，可更改颜色、评论和标签，或移动标记，`Ctrl/Cmd+Z` 撤销；
>     - 标注视图：可选择多张卡片进行批量删除、重新着色（快捷键 1 至 8）或复制；
>     - 从卡片菜单插入到笔记；
>     - 图片和墨迹卡片显示缩略图；
>     - Companion：可选择从 Zotero 打开的笔记显示位置（活动标签页、新标签页、新标签组或新窗口），`obsidian://zotlit/` 链接支持 `paneType` 参数。
>   - 变更：
>     - 导出带引用笔记和原生 Pandoc 现使用笔记自身的引用样式（`zotlit-csl`、配置文件样式或默认样式）。当 Zotero 无法提供该样式时，导出停止并提示；
>     - 若自行运行 Pandoc 并使用 ZotLit 集成文件，需从此版本重新保存。
>   - 修复：
>     - Zotero 中 PDF 附件上空的 ZotLit 子菜单现已置灰；
>     - 当回收站步骤失败时保留从 2.1 转换的模板，错误消息仅列出需要编辑的文件。
>   - 破坏性变更：
>     - 引用样式行为变更：导出停止条件更严格。
> - **2.2.0-beta.0** (2026-09-15)：
>   - 新增：
>     - 图谱视图中的引用：引用现出现在 Obsidian 图谱中，笔记与其引用的每项工作之间建立边；尚无文献笔记的工作显示为暗淡的“Cited Work Node”；
>     - 图谱过滤器与显示设置：新增 6 行图谱控件，包括 Pandoc 引用、Wikilink 引用、Citation-connected only、Author and title labels、Color citation links、Citation popover；
>     - 图谱命令：`ZotLit: Open citation graph` 和 `ZotLit: Open local citation graph`，可打开排列为研究地图的图谱；
>     - Cited Work Node 操作：选中可创建其文献笔记并打开；右键可“Create literature note”、“Open in Zotero”和“Copy citation key”。
> - **2.1.4** (2026-09-12)：
>   - 修复：
>     - 修复由其他 Zotero 插件或自动化创建的 Zotero 子笔记在导入时丢失正文的问题，现可完整导入为 Markdown；
>     - 修复“Open literature note quick switcher”命令对大多数条目类型仅显示标题的问题，现所有条目类型均显示作者、年份和出处；
>     - 修复 Zotero 10.0.2 中 Zotero 条目菜单的笔记命令无响应的问题，需将 Zotero 中的 ZotLit companion 插件更新至 2.1.4。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。