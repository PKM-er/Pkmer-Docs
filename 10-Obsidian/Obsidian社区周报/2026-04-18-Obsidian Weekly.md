---
uid: 20260418222555
title: Obsidian Weekly 2026-04-18：AI、阅读、任务，本周 Obsidian 生态新变化
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-04-18：AI、阅读、任务，本周 Obsidian 生态新变化
author: 熊猫别熬夜,PKMer
type: other
draft: false
editable: false
modified: 20260418222612
---

# Obsidian Weekly 2026-04-18：AI、阅读、任务，本周 Obsidian 生态新变化

> [!tip]+
> 统计时间：2026-04-11 21:00 ~ 2026-04-18 21:00
> 声明：本栏目灵感来源于 Eleanor Konik 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 GitHub 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 新增

[WPM Reading Time - How Long to Read This Text](obsidian://show-plugin?id=wpm-reading-time) by Santi Younger

![|650](https://cdn.pkmer.cn/images/2c66fe91e7ff6a50f1f9c88fb2018af1.png!pkmer)

> WPM Reading Time 可按你自定义的每分钟阅读字数（WPM），为当前选中的文本计算更贴近个人习惯的阅读时长，而不是只给出粗略的平均值。它支持为默读、朗读、演讲等不同场景建立多个速度预设，并在侧边栏中同时显示预计耗时、字数与当前预设值，因此尤其适合播客脚本、视频文案、演讲稿和其他对时长敏感的写作场景。插件目前主要面向桌面端使用。

### 更新

#### 🤖 AI 与智能助手

[YOLO](obsidian://show-plugin?id=yolo) By Lapis0x0

> **1.5.5.3 PDF 支持与 Agent 能力增强**
>
> **🤖 Agent 与多模态**
>
> - **📄 PDF 解析与检索**：YOLO 现已支持 PDF 文件的解析、读取与知识库索引。PDF 的解析结果与图片一样支持全局缓存。
> - **🌐 外部图片获取**：新增“抓取外部图片链接”开关（默认关闭）。启用后，Agent 读取 Markdown 文件时会一并获取 http(s) 图床或 CDN 图片，并以多模态方式传递给模型。
> - **🔗 双链上下文感知**：现在读取 Markdown 文件时会自动解析 `双链` 并附上被引用笔记的实际路径，让 AI 能够感知笔记之间的引用关系。
>
> **🧠 知识库与工具**
>
> - **⚙️ 嵌入维度透传**：嵌入模型现在会将配置的维度参数透传给底层 API，支持 xinference 等具有可变输出维度的模型。
> - **🎯 精确检索范围**：`fs_search` 工具的范围参数现在支持精确聚焦到单个文件进行检索。
>
> **🧹 界面与功能收敛**
>
> - **🔍 搜索入口精简**：移除了聊天界面的“Vault 全库相似度搜索”独立入口（包含 @ vault 徽章、对话设置里的“启用 Vault 搜索”开关及相关结果面板）。同等检索能力已完全收敛至 Agent 的 `semantic_search` 工具中，保持了功能的专注并减少了冗余的操作路径。

[SystemSculpt AI](obsidian://show-plugin?id=systemsculpt-ai) By SystemSculpt.com

> **5.6.0**
>
> **本次重点：搜索能力更新**
>
> - Vault 内搜索弹窗开启更快。
> - 内容索引追赶时，结果保持更稳定。
> - 修复过去会丢失结果的标点、多语言与仅符号查询。
> - 空查询时可立刻显示最近笔记，编辑文件后摘要也会及时刷新。
>
> **亮点**
>
> - 搜索现在会先即时显示最近项目，并在完整内容索引完成前先返回元数据匹配结果，因此首批结果几乎可立即出现。
> - 索引刷新期间搜索结果更稳定，避免你正在查看的笔记在输入过程中频繁出现 / 消失。
> - 现在可以正确命中带标点的查询，例如 `orange-juice`、`don't`、`co-op`。
> - 改善多语言和仅符号查询的处理，包括 CJK、俄文及纯 emoji 词条。
> - 最近笔记在编辑后会立即刷新预览摘要，不再等到下一次完整搜索。
> - 搜索现在会在你修改 Obsidian“Excluded files”过滤器时立即生效，同时作用于最近项目和实时搜索结果。
> - 启用 embeddings 时，智能模式会惰性启动 embeddings 管理器，因此关闭自动处理的用户也能无需手动重载就获得语义搜索结果。
>
> **升级说明**
>
> - 无需手动操作。
> - 现有聊天、设置与搜索行为应保持不变。
> - 最低支持的 Obsidian 版本仍为 `1.4.0`。
>
> **修复与稳定性**
>
> - 修复修改“Excluded files”后仅第一次生效、后续更改要等其他 vault 事件才会生效的问题。
> - 修复后台构建索引时启动智能搜索，导致已排除文件在过滤器变更后仍可被搜索到的问题。
> - 修复短前缀查询在内容索引完成后不再返回匹配的问题。
> - 修复空查询的最近项目列表无法及时去掉新排除笔记、且修改后预览不更新的问题。
> - 修复 embeddings 已启用但管理器尚未初始化时，智能模式会静默退回纯词法搜索的问题。
>
> **验证**
>
> - 插件检查、单元测试（5301 项通过）和发布面检查已通过，CI 中 `unit` 与 `desktop-baselines` 检查均为绿色。

[Notemd](obsidian://show-plugin?id=notemd) By Jacob

> **1.8.2**
>
> **💡 核心亮点**
>
> - 本次版本补完了 `1.8.0` 与 `1.8.1` 启动的语言支持收口工作。前端设置项、侧边栏、任务 / 提供商语言配置、诊断区、概念笔记设置以及快速工作流等界面文案，现在会更稳定地跟随 Obsidian 当前语言，而不是在升级后仍局部残留英文。
> - 文档也重新与当前代码实现对齐：多语 README 现已按英文原版一次性补齐，包括语言架构、配置细节与故障排查章节。
> - 发布门禁进一步收紧：现会在发布前检查 locale 覆盖、翻译版 README 英文泄漏、硬编码 UI 文案及 `ref/**` 工具链隔离，避免未完成的语言支持进入正式版本。
>
> **🚨 破坏性更新**
>
> - **无需手动迁移**：现有安装升级后继续沿用原行为。`uiLocale: auto` 仍跟随 Obsidian，既有任务输出语言配置也无需手动调整。
>
> **✨ 新特性**
>
> - 扩展前端 UI locale 覆盖，使已支持的 Obsidian 语言在设置页、侧边栏与关键运行时文案上更少回退到英文。
> - 新增翻译版 README 英文泄漏审计，以及围绕 `ref/**` 的工具链隔离校验。
> - 新增 / 补强 provider 配置、剩余设置表面和 i18n 审计脚本配置的 locale 覆盖测试。
>
> **🐛 Bug 修复**
>
> - 修复 `1.8.0 / 1.8.1` 中升级后前端部分文案仍可能停留在英文、未随 Obsidian 语言切换的问题。
> - 补齐高级语言设置、重试与诊断控制、概念笔记输出设置、翻译设置、快速工作流等区域残留的未翻译标签。
> - 将剩余多语 README 与英文原始 README 完整对齐，补齐语言支持与故障排查等章节内容。
>
> **🛠️ 优化与重构**
>
> - 将新增 locale 文案收敛到共享 locale 扩展目录，并保持核心语言目录同步。
> - 强化 TypeScript / Jest / 审计脚本对 `ref/**` 的隔离，避免本地参考仓污染正常构建与测试范围。
> - 更新 README 版本号与多语语言支持文档，使其与当前实际发货实现一致。
>
> **🙏 致谢**
>
> - 感谢 `@Jacobinwwey` 推进本次语言覆盖补齐、README 对齐与发布验证门禁强化。

[Nova](obsidian://show-plugin?id=nova) By Shawn Duggan

> **1.5.2**
>
> **Bug 修复**
>
> - **长文档输入不再卡顿**：此前 Writing Analysis 子系统会在每次短暂停顿后扫描整篇文档，并在无上限缓存中持续积累内存；在长草稿里会引发短暂键盘无响应，甚至需要重载插件。现在缓存已限制为单条，分析防抖也从 `500ms` 提高到 `1500ms`，普通的打字停顿不再频繁触发重分析。
> - **超大文档跳过实时分析**：超过 50,000 字符的文档不再在每次按键时运行分析，从而保证书稿级长文编辑时的响应性；如需分析，可使用侧栏中的 **Analyze** 按钮手动执行。
>
> **底层改进**
>
> - 收紧 Writing Analysis 的调度路径：当编辑器尚未准备好时，会干净地跳过，而不是对未完成接线的视图调度任务。
> - 将上下文预算条上的内联样式赋值改为 CSS 自定义属性，与插件其余的 Obsidian 合规模式保持一致。

[Editing Toolbar](obsidian://show-plugin?id=editing-toolbar) By Cuman

> **4.0.5**
>
> - 增加 Ollama 模型配置。
> - 修复 。
> - 继续完善 。
> - 增加多语种翻译。

#### 📚 阅读、批注&图书管理

[Weread Plugin](obsidian://show-plugin?id=obsidian-weread-plugin) By hank zhao

> **新增功能**
>
> **同步日志**
>
> - 每次同步后自动记录同步时间、书籍数、耗时、成功 / 失败状态。
> - 在设置页“定时同步”区域底部提供“查看同步日志”按钮。
> - 同步日志弹窗支持点击跳转到对应笔记文件。
>
> **书架设置**
>
> - 新增“书架设置”设置组（位于“网页版打开方式”下方）。
> - 支持书架排序方式：时间排序 / 按标题排序。
> - 支持按年份分组：在时间排序时按阅读年份分组展示。
>
> **模板时间过滤器**
>
> - 支持在模板中把秒级时间戳转换为可读字符串：`formatDate`、`formatDateTime`、`formatTime`。
> - 现已支持在模板里自定义日期格式，例如 `YYYY年MM月DD日`。
>
> **Bug 修复**
>
> - 修复同步日志不显示笔记信息的问题。
> - 修复书架排序和年份分组设置无法持久化的问题。
>
> **模板编辑器更新**
>
> - 左侧帮助面板新增 Filter 使用说明。
> - 补充 `readInfo` 各字段说明。

[Bookshelf](obsidian://show-plugin?id=bookshelf) By Philip Weinke

> **0.20.0**
>
> **新增**
>
> - 在 gallery 视图中新增阅读状态（已读完 / 已放弃）丝带。
> - 在表格视图中新增 genre 列。
> - 在搜索中新增 tags 与 genres 支持。
> - 在统计视图中新增日均阅读页数。
> - 在统计视图中新增按状态筛选书籍的下拉框。
>
> **变更**
>
> - 进度条颜色现会反映阅读状态。
> - 将统计页中的“Tags”区域替换为“Distribution”。
> - 重新美化统计视图。
> - 改善移动端上的 gallery 视图体验。
>
> **修复**
>
> - 阅读连胜 tooltip 不再引起横向滚动。

[WuCai highlights Official](obsidian://show-plugin?id=wucai-highlights-official) By 希果壳五彩

> - 全新的五彩设置页面。
> - 支持 daily notes 追加写。

#### 📝 编辑器、输入&标签公式增强

[Note Toolbar](obsidian://show-plugin?id=note-toolbar) By Chris Gurney

> **1.30.13**
>
> _不要错过 `v1.30` 中的全部新功能；需要 Obsidian `1.11` 或更高版本。_
>
> **改进 🚀**
>
> - 在 `Gallery` 的 **Navigating the Vault** 分类中新增 **Navigate back** 与 **Navigate forward**。
>
> **修复 🛠️**
>
> - 工具栏名称变化时，其对应命令名称现在也会同步更新。
> - 浮动工具栏现在会隐藏 URI 为空的项目。
> - 开启 Debug 设置后，所有调试信息会以默认日志级别显示，无需额外开启 _Verbose_ 级别。
> - 进行了多项代码重构，以修复更严格类型检查和新增 lint 规则引发的问题。

[Continuous Mode](obsidian://show-plugin?id=continuous-mode) By Michael Schrauzer

> **3.6.9**
>
> - **改进**：重做警告机制，简化逻辑并移除“Disable warnings”设置。
> - 现在当尝试打开超出设定上限的文件数量时，会显示提示，明确展示“当前正在打开的文件数 / 总文件数”。
> - 新增选项：当替换当前标签组中的项目时显示警告（默认不警告）。
> - **改进**：优化设置页样式。

[Heading Level Indent](obsidian://show-plugin?id=heading-level-indent) By svonjoi

> **3.0.0**
>
> - 新增 PDF 导出时的标题缩进支持。
> - 引入 `FrontmatterListener`，支持通过单篇文档的 `heading-indent` frontmatter 属性启用 / 禁用缩进，而不必依赖全局设置。
> - 优化阅读视图中的标题缩进行为。

[Folder Links](obsidian://show-plugin?id=folder-links) By Stefan Rausch

> **1.2.5**
>
> - 在文件夹链接的右键菜单中新增“在系统文件管理器中显示”功能。

[Fix Math](obsidian://show-plugin?id=fix-math) By Vladislav Sorokin

> **1.0.20**
>
> - 新增“选区模式”：在执行命令前若选中了文本，则只转换选中的内容；若没有选区，则仍像以前一样处理整个文件。

[Tag Group Manager](obsidian://show-plugin?id=tag-group-manager) By Stargazer-cc

> **应用标签颜色于正文相关问题的修复**
>
> - 🐛 **修复标签删除问题**：彻底解决了开启“应用标签颜色于正文”后标签无法正常删除的问题。此前当旧文档内容变动未被正确捕捉时，可能导致光标实际定位出错，无法正常删除行末标签内容。
> - ✨ 功能优化：视觉改进 + 新增刷新功能。
> - 📊 性能提升：大文件场景下更流畅。

[Latex Suite](obsidian://show-plugin?id=obsidian-latex-suite) By artisticat1

> **1.11.5**
>
> - 修复 `priority tabout` 使用了开始分隔符而不是结束分隔符，导致其行为退化成普通 tabout 的问题。
> - 作者备注：由于尚不确定该问题会引出哪些意外 bug，因此在发现后立即发布修复版本。

[Emoji Autocomplete](obsidian://show-plugin?id=emoji-autocomplete) By KraXen72

> **1.5.2**
>
> - `1.5.2` 是一个热修复版本，用于修正错误的 Git 标签。
> - 下方延续 `1.5.1` 的主要更新内容：
>   - 新增 `:true:` ✅ 与 `:false:` ❌ 等别名 / 标签。
>   - 修复 ：提升最近使用项的排序权重。
>   - 修复 ：输入俄文字符时忽略自动补全触发。
>   - 修复 ：补充 `tooth` / `teeth` 相关别名。
>   - 修复若干类型与其他 bug。
>   - 升级依赖。
>   - 通过 GitHub Actions 自动构建和发布。
>   - 还有一些作者未逐条列出的零散改进。
> - 作者说明：插件依旧维护中，但整体已接近

#### 📅 任务、看板、月历 & 项目管理

[Task Board](obsidian://show-plugin?id=task-board) By Atmanand Gauns

> **1.10.1**
>
> **Bug 修复 🛠**
>
> - 当高级过滤器配置错误时，会破坏配置并导致 Task Board 视图无法渲染；现已修复。
> - 修复空的 inline-tasks 仍被扫描的问题。
> - 修复开启“Daily notes plugin compatibility”后，错误地把非真实日期的笔记名写入通用日期字段的问题。
>
> **更新内容 🔎**
>
> - 将“Hide specific properties in inline-tasks”设置移动到 **Inline tasks** 设置标签下。
>
> **新贡献者**
>
> - `@tryy3` 在该版本中完成首次贡献。
>
> **致谢**
>
> - 作者特别感谢 `@andylynchpe`、`@codey-badger` 以及在 Reddit / 邮件中反馈问题的用户。

[Task Collector (TC)](obsidian://show-plugin?id=obsidian-task-collector) By ebullient

> **1.1.15**
>
> - 本次更新主要为依赖升级与工程维护。
> - 升级 `jest`、`jest-environment-jsdom`、`esbuild`、`@typescript-eslint/parser`、`@biomejs/biome`、`@types/node`、`obsidian`、`flatted`、`actions/setup-node` 等依赖。
> - 将 `jest-util` 加为直接开发依赖。
> - 执行依赖审计并整理工程配置。

[TaskWarrior Task Wiki](obsidian://show-plugin?id=tw-task-wiki) By SntTGR

> **1.3.0**
>
> - 重做 description 列：支持在描述中显示链接，并增加 `oneline`、`multiline`、`count`、`truncate` 等描述列类型。
> - 新增 annotation 支持：
>   - 注释中支持链接与文件预览，行为类似 `taskopen / tasknotes`。
>   - 文件路径支持 vault 相对路径、home 相对路径与绝对路径；只有 vault 内的链接会被高亮并提供预览。
>   - 可在新的 annotations 与 modify task 弹窗中添加 / 删除备注。
> - 集成 `tasknote` 与 `taskopen`。
>
> **What's Changed**
>
> - 新增 tasknote 集成。
>
> **新贡献者**
>
> - `@oliverarkenklo-hue` 在该版本中完成首次贡献。

[Task List Kanban](obsidian://show-plugin?id=task-list-kanban) By Chris Kerr

> **1.11.0**
>
> **列设置**
>
> - 重做列配置界面，改为结构化编辑器，支持逐列设置标签、颜色、可见性与拖拽排序，让每块看板的列配置更易维护。
> - 新增显式的基于标签的列映射：列标题可以不同于真正决定任务归属的标签，并支持匹配规则变化时的迁移。
> - 支持重命名内置的 `Uncategorized` 与 `Done` 列。
> - 新增多标签 AND 语义匹配：列可要求同时具备多个标签，且在规则重叠时优先匹配最具体的列。
>
> **其他**
>
> - 改善把任务添加到其他文件时的操作提示。
> - 修复 Done 任务会错误抬高主看板总数的问题。
> - 修复 Done 列折叠后其归档操作不可用的问题。
>
> **内部改动**
>
> - 升级 Vite 以解决 Dependabot 警报。
> - 更新测试 vault。
> - 清理测试代码，减少重复初始化。

[Tasks Map](obsidian://show-plugin?id=tasks-map) By NicoKNL

> **0.28.0**
>
> **新功能：通过拖拽创建新关联任务**
>
> - 在任务图中新增“拖拽创建”交互：从节点的 source / target 句柄拖出并释放到画布后，会打开 Tasks 插件的创建任务弹窗，在 vault 中于锚点任务附近创建新任务，并按配置的链接样式自动将两者关联。
> - 从 source 句柄拖出：会在文件中锚点任务之后立即创建新任务，并让锚点任务作为传入链接目标。
> - 从 target 句柄拖出：会在文件中锚点任务之前立即创建新任务，并让新任务作为锚点的传入链接来源。
> - 如果连线最终落在另一个节点或句柄上（即普通连边），则不会打开创建弹窗。
> - 仅适用于 Dataview 风格任务；基于 note 的任务会被静默跳过。

[Tag Timer](obsidian://show-plugin?id=tag-timer) By quantavil

> **2.1.0**
>
> **版本摘要**
>
> - **模块化架构**：将“上帝对象”式的 `main.ts` 拆分为 12 个职责明确的模块。
> - **性能**：用基于索引切片的方式替换原先的 `$O(N)$` 变更逻辑，并移除脆弱的跟踪数组，改为按需扫描 vault。
> - **新功能**：新增完成通知（Obsidian Notice）以及全局“停止所有运行中计时器”命令。
> - **现代化**：兼容最新 Obsidian 与 TypeScript 6.0，并实现无闪烁 UI 动画。
> - 重构已通过 `bun run build` 验证。

[Day Planner (OG)](obsidian://show-plugin?id=day-planner-og) By James Lynch (continued by Erin Schnabel)

> **0.7.5**
>
> - 正确切换状态栏元素显示。
> - 修复 now / next 悬停区域的位置问题。
> - 移除注释。
> - 提升状态进度饼图的对比度。

[Daily notes calendar](obsidian://show-plugin?id=daily-note-calendar) By bartkessels

> **2.8.0**
>
> - 当当前月份可见时，将当前月份显示为激活月份。
> - 跨过午夜后自动更新“今天”的日期（可能会延后约 10 分钟）。
> - 新增打开月记、季记和年记的命令。

[Periodic PARA](obsidian://show-plugin?id=periodic-para) By YiBing Lin

> **1.25.0**
>
> **新内容**
>
> - 插件现已支持多语言 UI。默认跟随 Obsidian 当前语言，也可在插件设置中手动覆盖。
> - 新增英语、简体中文、繁体中文、德语、西班牙语、法语、葡萄牙语（含 pt-BR）、日语和阿拉伯语支持。
> - Create Note 视图、设置页、顶部横幅及日期 / 日历 locale 处理现已统一接入同一套 i18n 流程。
>
> **其他更新**
>
> - 在 `README.md` 与 `README-ZH.md` 中加入多语言说明。
> - 更新示例仓库链接并调整忽略规则。
>
> **使用说明**
>
> - 默认情况下插件会跟随 Obsidian 当前语言。
> - 如果希望将插件锁定为特定语言，可在插件设置里的 `Language` 中选择。
> - 重新加载插件后，现有命令名称会反映新的语言设置。

#### 🗺️ 效果演示 & 卡片导图

[Slides Extended](obsidian://show-plugin?id=slides-extended) By Erin Schnabel (original: MSzturc)

> **2.3.4**
>
> **修复**
>
> - 恢复自动补全，并修复部分属性过滤 / 重复问题。
> - 新增对音频元素的支持以及 audio-slideshow 插件支持。
> - 新增导出 / 打印命令。
>
> **提交摘要**
>
> - 更新多项依赖。
> - 简化 AGENTS / CLAUDE 说明。
> - 修复自定义分隔符属性传递问题。
> - 新增全局分隔符设置。
> - 修复背景颜色检测。
> - 精简 manifest。

[Decks](obsidian://show-plugin?id=decks) By Xherdi Lika

> **1.5.1**
>
> **卡片解析**
>
> - 新增 `Title` 模式：在配置文件中启用后，Markdown 文件名会成为单张卡片的正面，文件内容会成为背面。
> - 该模式作为配置设置里“Header level”下拉菜单的新选项提供。
>
> **发布说明**
>
> - 发布说明现在会包含当前次版本系列下的所有补丁版本，并按升序展示。

[Obsidian Mindmap Nextgen](obsidian://show-plugin?id=obsidian-mindmap-nextgen) By VeroCloud Pty Ltd (original by James Lynch)

> **1.16.0**
>
> - 新增节点级样式与折叠控制：可通过内联 HTML 注释与类 CSS 声明，为单个节点设置样式并控制其折叠状态。
>
> **新贡献者**
>
> - `@romanbarczynski` 在该版本中完成首次贡献。

#### 🪄 类型导入，格式拓展

[JupyMD](obsidian://show-plugin?id=jupymd) By Deniz Terzioglu

> **1.7.0**
>
> - 引入新的解释器选择窗口，使 JupyMD 使用的 Python 环境更容易配置和管理。
> - 弃用旧的 Quick Setup 按钮，改为在解释器选择器内置虚拟环境创建流程，现在可直接在新界面创建 venv。
> - 将 `pyenv` 环境纳入解释器发现范围。
> - 状态栏现在会显示当前使用的解释器或环境。
>
> **功能更新**
>
> - 为 kernel 发现增加 `pyenv` 支持。
> - 为 kernel 选择器加入来源徽章。
> - 精简 venv 创建选项，移除第二个 setup 标签。
> - 在上下文管理器中新增创建 venv 选项。
> - 新增用于创建虚拟环境的 modal，并与 kernel 选择器集成。
> - 状态栏显示解释器名而不是完整路径。
> - 改善 kernel 状态栏交互。
> - 新增选择 Python kernel 的命令。
> - 为 kernel 状态和建议结果增加界面样式。
> - 实现 kernel 选择弹窗和发现工具。
> - 实现当前 Python 解释器状态栏与 kernel 选择功能。
> - 调整设置页以接入新的 kernel selector 功能。
> - 缩小清除图标的描边宽度。
> - 在设置中显示解释器版本。
> - 为 venv 创建使用模糊匹配解释器选择器。
>
> **Bug 修复**
>
> - 改善设置中的文本处理。
> - 在切换解释器后静默重启 kernels。
> - 修复更换解释器后设置页显示未更新的问题。
>
> **致谢**
>
> - 感谢新贡献者 `@aribaza` 对本次版本的工作。

[VCF Contacts](obsidian://show-plugin?id=vcf-contacts) By Roland Broekema

> **2.3.2**
>
> - 作者特别感谢 `@camadkins` 与 `@schutm` 的 bug 报告以及在 cardav 集成方面的帮助；本次版本对大型 VCF 数据库的性能有显著提升。
>
> **改动**
>
> - ：开始尝试加入 GitHub 发布工作流。
> - ：为同步循环 `updateFromRemote` bug 新增首批测试。
> - 合并来自 `schutm/patch-1` 的 PR 。
> - 合并 `feature/68-performance-improvements-import` 的 PR 。
> - ：导入时减少等待文件渲染的时间。
> - 修复通过 cardav 更新时，遇到 `UID`、`PHOTO` 或空值就中断的问题。
>   功能完成态，活跃开发不会太频繁。

[Snippets Manager](obsidian://show-plugin?id=snippets-manager) By Venkatraman Dhamodaran

> **1.1.5**
>
> - 即使在阅读模式下也会显示搜索代码片段选项，但此时仅提供复制片段功能。

[Embed 3D](obsidian://show-plugin?id=3d_embeds) By Jesse Strijker

> **1.1.6**
>
> **Bug 修复**
>
> - 将保存快照的命名规则改为 `{timestamp}-{modelname}-3D-Embed-thumbnail.png`。
> - 修复 3D 嵌入放在 callout 中时 canvas 宽度异常的问题。
> - 将设置页标签重命名为更准确的名称。

#### 🔄 同步、连接 & 外部服务

[Note to MP](obsidian://show-plugin?id=note-to-mp) By Sun Booshi

> **2.1.1**
>
> - 修复若干 Bug。
> - 优化数学公式显示。
>
> **数学公式优化**
>
> - 在之前版本中，数学公式默认会缩小一号；现在默认不再缩小。
> - 若仍需缩小，可通过自定义 CSS 手动调整。
> - 如果文中公式较多，可尝试调整段落行高改善显示效果。

[Cubox](obsidian://show-plugin?id=cubox-sync) By delphi-2015

> **1.0.7**
>
> 1. Cubox 内容类型更新：`memo`、`file`、`image` 类型已合并为 `Others` 选项，详情请查看页面中的说明按钮。
> 2. 修复模态窗口中复选框显示异常的问题，现已替换为切换开关。
> 3. 新增无效或缺失 API Key 的错误提示。
> 4. 将 API Key 链接更新为最新版网页地址。

[Sync Vault CE](obsidian://show-plugin?id=sync-vault-ce) By Camus Qiu

> - 修复：视频标注缓存性能问题。
> - 新增：`video player view` 增加视频标注侧边栏。
> - 新增：设置界面增加默认视频标注目录设置。
> - 新增：设备界面提供 Cloudflare、Aliyun 信令服务。
> - 新增：`headless peer`。
> - 优化：笔记标注格式 v2，增加云盘类型和文件 id。

### PKMer 出品

[Hover Editor](obsidian://show-plugin?id=obsidian-hover-editor) By NothingIsLost

> **0.11.29**
>
> - 修复 ：忽略源码模式下的 canvas 链接。

[Editing Toolbar](obsidian://show-plugin?id=editing-toolbar) By Cuman

> **4.0.5**
>
> - 增加 Ollama 模型配置。
> - 修复 。
> - 继续完善 。
> - 增加多语种翻译。
