---
uid: 20260404142121
title: Obsidian Weekly 2026-04-03：聚焦 AI 交互效率、本地写作分析与生态安全加固
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-04-03：聚焦 AI 交互效率、本地写作分析与生态安全加固
author: 熊猫别熬夜,PKMer
type: other
draft: false
editable: false
modified: 20260404142210
---

# Obsidian Weekly 2026-04-03：聚焦 AI 交互效率、本地写作分析与生态安全加固

> [!tip]
> 统计时间：2026-03-27 12:00 ~ 2026-04-03 12:00
> 声明：本栏目灵感来源于 Eleanor Konik 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 GitHub 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 🤖 AI 与智能助手类

大模型对话、智能检索、自动化写作等 AI 增强插件

---

[YOLO](obsidian://show-plugin?id=yolo) By Lapis0x0

> **1.5.4 上下文效率与架构优化 🧊**
>
> - 🧠 **上下文工程与压缩能力**
>   - **✂️ 上下文裁剪**：新增 `context_prune_tool_results` 功能，自动裁剪历史工具执行结果
>   - **📦 对话压缩工具**：新增 **Compact Context** 压缩工具及 `/compact` 指令，支持历史记录摘要
>   - **📑 @文件 注入优化**：提供带行号的 Markdown 标题骨架，支持轻量/全量注入模式切换
>   - **📖 `fs_read` 增强**：支持全文读取与按行范围读取，前端卡片直观显示读取行数
> - 🛠️ **工具调用与流式稳定性**
>   - **⚡ 流式参数解析优化**：重构工具参数解析逻辑，嵌套 JSON 参数在流结束后累积验证
>   - **🛑 可靠「停止生成」**：修复点击停止后 UI 卡住的问题，优化收敛逻辑
> - ⚙️ **性能与架构**
>   - **📉 精简包体积**：将 PGlite 运行时资源与主包解耦，降低初始加载体积

[Smart Templates](obsidian://show-plugin?id=smart-templates) By 🌴 Brian Petro

> **2.1.0**
>
> - ⚙️ **改进/优化**
>   - Smart Templates Core v2.1：精炼「上下文优先」模板工作流
>   - 全套件范围的 Smart Environment 改进，提升插件协同体验

[Smart Connections](obsidian://show-plugin?id=smart-connections) By Brian Petro

> **4.3.0**
>
> - ✨ **新功能/特性**
>   - 连接列表支持以图谱视图打开，可视化探索笔记关系
>   - 连接视图的打开位置可配置，灵活适配不同工作流
> - ⚙️ **改进/优化**
>   - 块嵌入功能在重启后可更可靠地恢复中断的处理

[Smart ChatGPT](obsidian://show-plugin?id=smart-chatgpt) By 🌴 Brian

> **1.3.0**
>
> - 🐛 **修复**
>   - 移除代码块边距，修复聊天代码块后按↑键时的异常行为
> - ⚙️ **改进/优化**
>   - 小幅布局优化，提升笔记内嵌聊天的流畅体验

[Smart Context](obsidian://show-plugin?id=smart-context) By 🌴 Brian

> **3.1.0**
>
> - ✨ **新功能/特性**
>   - 上下文代码块集成至 Smart Context Core 核心功能
>   - 命名上下文可直接从上下文代码块中调用，复用更便捷
>   - 新增功能区图标，快速打开构建器或复制带深度选择的当前笔记上下文
> - ⚙️ **改进/优化**
>   - 新增「已保存」状态指示器，命名上下文存储后反馈更清晰

[Local GPT](obsidian://show-plugin?id=local-gpt) By Pavel Frankov

> **4.2.0**
>
> - ✨ **新功能/特性**
>   - 操作面板现在可在会话间记住选中的 `/system` 提示词
>   - 支持直接从 `/system` 菜单清除当前系统提示词
>   - 操作现在拥有生成的内部 ID，提升稳定性

[SystemSculpt AI](obsidian://show-plugin?id=systemsculpt-ai) By SystemSculpt.com

> **5.3.3**
>
> - 🐛 **修复**
>   - 修复 ChatView 中推理、工具调用、内容在流式响应时的顺序错乱问题
>   - 修复托管工具调用 ID 重复时导致最终答案丢失的问题
> - ⚙️ **改进/优化**
>   - 聊天持久化现在可正确往返保存交织的助手片段，重开时顺序一致
>   - 托管续传请求为重复的上游工具 ID 分配唯一 API 工具调用 ID

[Vault LLM Assistant](obsidian://show-plugin?id=vault-llm-assistant) By Brians Tjipto

> **1.0.11**
>
> - ✨ **新功能/特性**
>   - 新增模型支持，移除已弃用模型
>   - 新增模型验证功能，提升配置可靠性

[Proofreader](obsidian://show-plugin?id=proofreader) By pseudometa (aka Chris Grieser)

> **1.8.0**
>
> - ✨ **新功能/特性**
>   - 新增对 Mistral 和 OpenRouter 的支持（#21），扩展 AI 校对模型选择

[Attachments MD Indexer](obsidian://show-plugin?id=attachments-md-indexer) By Ian Inkov

> **2.1.4**
>
> - ✨ **新功能/特性**
>   - **🚀 新 AI 模型**：切换至 `gemini-3.1-flash-lite-preview`，实现高吞吐量、低延迟索引
>   - **🛠 冲突修复**：不同文件夹中同名文件不再冲突，使用创建时间戳作为唯一后缀
>   - **🛡 限流保护**：文件间新增 3.5 秒基础延迟 + 指数退避策略 + 24 小时暂停机制
>   - **🔄 自动恢复**：每小时检查配额是否重置，自动从中断处恢复索引

[Nova](obsidian://show-plugin?id=nova) By Shawn Duggan

> **1.4.0**
>
> - ✨ **新功能/特性**
>   - **写作分析面板**（本地运行，无需 AI 调用）：
>     - 可读性等级：Flesch-Kincaid 年级水平 + 通俗标签
>     - 内联高亮：长句、被动语态、副词等在编辑器中直接下划线标出
>     - 统计概览：字数、句数、阅读时间、被动语态占比等
>     - Frontmatter 排除：添加 `nova-writing: false` 可禁用分析
> - ⚙️ **改进/优化**
>   - **自动上下文增强**：添加/移除 `[[维基链接]]` 时，上下文面板自动更新
>   - **移动端优化**：写作面板适配触控目标、可读字体大小与滚动行为
> - 🐛 **修复**
>   - 修复撤销/重做未触发写作分析更新的问题
>   - 修复弱强调词被同时高亮为副词与强调词的问题

### 🔗 外部服务集成类

豆瓣/知乎/微信读书/圣经等第三方平台集成插件

---

[Douban](obsidian://show-plugin?id=douban) By Wanxp

> **2.3.2**
>
> - 🐛 **修复**
>   - 修复：所有搜索类型 403 错误、未定义角色崩溃，以及启动时懒加载登录逻辑
>   - 修复：豆瓣图片上传至 PicGo 时添加 Referer 头，避免防盗链拦截

[Zhihu](obsidian://show-plugin?id=zhihu) By dgg

> **0.3.12**
>
> - 🐛 **修复**
>   - 修复知乎 App 卡片模式下，表格前存在大量空行的问题（#132）
>   - 修复 Cookie 失效时，点击侧栏会出现大量刷新窗口的问题（#137）
> - ✨ **新功能/特性**
>   - 新增自定义选项：可选择默认保存文件夹（#134）

[Weread Plugin](obsidian://show-plugin?id=weread-plugin) By hank zhao

> **0.17.1**
>
> - 🐛 **修复**
>   - **修复：支持标题含特殊字符的书籍**
>   - 问题：标题含冒号的书籍因冒号在系统中为非法文件夹字符，导致同步失败
>   - 解决方案：在 `getSubFolderPath()` 中对文件夹名应用 `sanitizeTitle()` 函数

[Todoist Context Bridge](obsidian://show-plugin?id=todoist-context-bridge) By wenlzhang

> **1.1.1**
>
> - 🐛 **修复**
>   - 新增重试逻辑、分页保护，并为 SDK v6 添加 skipLibCheck
> - ⚙️ **改进/优化**
>   - 迁移 Todoist SDK 从 v3 至 v6，提升 API 兼容性与稳定性

[GitHub Stars](obsidian://show-plugin?id=github-stars) By Flying Nobita

> **1.5.1**
>
> - ⚙️ **改进/优化**
>   - 对齐官方 Obsidian 示例插件的包管理工具配置
>   - 仓库标准化使用 pnpm，移除 package-lock.json
>   - 固定 CodeMirror 包至 Obsidian 对等版本

[Github Issues](obsidian://show-plugin?id=github-issues) By LonoxX

> **1.9.2**
>
> - ⚙️ **改进/优化**
>   - 自动化发布流程优化

[JW Library Linker](obsidian://show-plugin?id=jw-library-linker) By Martin Sakowski

> **0.12.2**
>
> - 🐛 **修复**
>   - 添加圣经引用识别的负向测试用例，避免时间戳/符号误匹配
>   - 修复 Windows 兼容性：重命名 locale 模拟文件并添加 moduleNameMapper 配置
> - ✨ **新功能/特性**
>   - 新增越南语本地化支持

[Quran Helper](obsidian://show-plugin?id=quran-helper) By Ammar Alakkad

> **1.11.0**
>
> - ✨ **新功能/特性**
>   - 支持使用阿拉伯数字查找章/节
>   - 使用属性存储 Surah 的维基链接，便于引用与跳转

[My Bible](obsidian://show-plugin?id=my-bible) By GsLogimaker

> **1.3.5**
>
> - ✨ **新功能/特性**
>   - 新增 `{book_short}` 和 `{book_full}` 替换令牌，支持更灵活的圣经引用格式化
> - 🐛 **修复**
>   - 修复缩写名称冲突问题

[Bible Reference](obsidian://show-plugin?id=bible-reference) By tim-hub

> **26.03.28**
>
> - ✨ **新功能/特性**
>   - 新增：支持自定义书籍/章节标签的格式化

[MTG Card Links](obsidian://show-plugin?id=mtg-card-links) By Aedan Smith

> **1.2.0**
>
> - 🐛 **修复**
>   - 修复因缺少请求头导致 scryfal 返回 400 错误的问题

[Tencent COS for Imgur](obsidian://show-plugin?id=tencent-cos-for-imgur) By bobostudio

> **1.2.7**
>
> - ✨ **新功能/特性**
>   - 支持上传 PDF、MP3、MOV、WREM 等多格式文件至 COS，扩展图床应用场景

### 📊 任务与项目管理类

待办事项、日程规划、日记回顾、任务追踪等效率插件

---

[TaskNotes](obsidian://show-plugin?id=tasknotes) By Callum Alpass

> **4.5.1**
>
> - 🐛 **修复**
>   - 修复 MCP 时间摘要工具中自定义日期范围的 `from`/`to` 参数行为（#1672）
>   - 修复日历周/日视图中时间刻度左对齐问题，避免向内漂移（#1742）

[TODOseq](obsidian://show-plugin?id=todoseq) By Stephen Cross

> **0.12.2**
>
> - ✨ **新功能/特性**
>   - 新增可选参数 `show-scheduled-date:` 和 `show-deadline-date:`，控制嵌入式任务列表中是否显示计划/截止日期徽章

[Journal Review](obsidian://show-plugin?id=journal-review) By Kageetai

> **3.0.2**
>
> - 📦 **依赖更新**
>   - 升级 knip、preact、flatted 等开发/生产依赖，修复安全漏洞

[Steward](obsidian://show-plugin?id=steward) By Dang Nguyen

> **2.5.1**
>
> - ✨ **新功能/特性**
>   - 在创建待办列表工具调用前添加用户消息，提升交互清晰度
> - 🐛 **修复**
>   - 修复命令输入：最后一行按↓键换行、按 Backspace 合并续行的行为

[Disciples Journal](obsidian://show-plugin?id=disciples-journal) By Scott Tomaszewski (Xentis)

> **0.12.0**
>
> - ✨ **新功能/特性**
>   - 为段落笔记添加 `cssclasses: hide-dj-passage-properties`，隐藏冗余属性显示，提升阅读体验

### 📝 笔记编辑与格式化类

文本编辑增强、语法高亮、格式转换、警告块等编辑体验插件

---

[Easy Typing](obsidian://show-plugin?id=easy-typing) By yaozhuwa

> **6.0.7**
>
> - ⚙️ **改进/优化**
>   - 自动格式化与规则行为调整
>   - 新增全局设置：可在自定义正则区域阻止自动用户规则触发（#340）
>   - 调整内置软空格符号的默认分组，修复左右软空格判断策略（#345）
>   - 默认关闭「CJK 字符后半角标点转全角」内置规则
>   - 修复粘贴内容时仍可能误触发输入转换规则的问题（#342）

[Admonition](obsidian://show-plugin?id=admonition) By Jeremy Valentine

> **11.0.3**
>
> - 🐛 **修复**
>   - 修复：在实时预览（LP）模式下，点击事件可穿透至交互式元素（#361）

[Inline Admonitions](obsidian://show-plugin?id=inline-admonitions) By Scott Tomaszewski

> **1.10.0**
>
> - ✨ **新功能/特性**
>   - 新增对正则表达式内联注释的支持，提升警告块编写灵活性

[Quarto Exporter](obsidian://show-plugin?id=quarto-exporter) By Andreas Varotsis

> **1.1.0**
>
> - 🐛 **修复**
>   - 修复 Frontmatter 合并时会误删非标签 YAML 列表的问题
>   - 修复 YAML 列表格式化：单引号 JSON 数组与多行列表统一转换为 Quarto 期望格式
>   - 修复图片转换时误处理嵌入笔记的问题
>   - 修复 Windows 换行符处理：文件开头统一规范化行尾
> - ✨ **新功能/特性**
>   - 维基链接转换：`[[页面名称]]` 转换为标准 Markdown 链接，空格自动 URL 编码
>   - 高亮语法转换：`==高亮文本==` 转换为 `<mark>` 标签，兼容 HTML 与 PDF 输出
>   - 显示数学公式格式化：单行 `$$…$$` 块自动拆分为多行格式

[Custom Slides](obsidian://show-plugin?id=custom-slides) By David V. Kimball

> **1.1.6**
>
> - 📚 **文档/其他**
>   - 移除带有 AI 风格的表述语言，保持文档专业性

[Insta TOC](obsidian://show-plugin?id=insta-toc) By Nick C.

> **7.0.0**
>
> - ⚙️ **改进/优化**
>   - 自动化发布流程优化

[Codeblock Customizer](obsidian://show-plugin?id=codeblock-customizer) By mugiwara

> **1.4.5**
>
> - ✨ **新功能/特性**
>   - 新增选项：可为自定义语言定义 PrismJS 语法高亮规则

[CSS Editor](obsidian://show-plugin?id=css-editor) By Zachatoo

> **1.13.3**
>
> - 🐛 **修复**
>   - 修复删除代码片段前误显示通知的问题，避免干扰用户体验

[Modal forms](obsidian://show-plugin?id=modal-forms) By Danielo Rodriguez

> **1.64.4**
>
> - 📚 **文档/其他**
>   - 文档：添加自包含表单指南的交叉链接
>   - 文档：完善会议笔记示例，补充模板输出说明
>   - 文档：新增 Templater 模板中自包含表单的使用指南

### 🗂️ 文件管理与导航类

文件跳转、快速切换、主页设置、路径管理等导航增强插件

---

[Another Quick Switcher](obsidian://show-plugin?id=another-quick-switcher) By tadashi-aikawa

> **14.6.0**
>
> - ✨ **新功能/特性**
>   - 查询中新增 `@key:value` 语法，支持按属性搜索，提升笔记检索精度

[Folder Links](obsidian://show-plugin?id=folder-links) By Stefan Rausch

> **1.2.3**
>
> - ✨ **新功能/特性**
>   - 新增设置：在定位时自动展开文件夹

[Homepage](obsidian://show-plugin?id=homepage) By mirnovov

> **4.4.0**
>
> - ✨ **新功能/特性**
>   - 为 Obsidian 新增命令行接口添加两条命令：
>     - `homepage`：在 Obsidian 中打开主页
>     - `homepage:read`：将主页文件内容打印至 `stdout`
> - 🐛 **修复**
>   - 修复历史记录偶尔无法保存的问题（#135 部分修复）

[File Title Updater](obsidian://show-plugin?id=file-title-updater) By wenlzhang

> **0.6.1**
>
> - ✨ **新功能/特性**
>   - 新增：跳过为默认「Untitled」文件名添加别名，避免冗余元数据

[Open Tab Settings](obsidian://show-plugin?id=open-tab-settings) By jesse-r-s-hines

> **2.0.1**
>
> - 🐛 **修复**
>   - 修复在标签组间去重时导致选中标签意外切换的 Bug

[Startpage](obsidian://show-plugin?id=startpage) By kuzzh

> **0.3.6**
>
> - ⚙️ **改进/优化**
>   - 新增备份设置功能，并重构文件排除逻辑，提升配置可靠性

[Custom Commands](obsidian://show-plugin?id=custom-commands) By Staaaaaaaaaan

> **1.0.7**
>
> - 🐛 **修复**
>   - 修复在子文件夹中创建笔记时文件名含非法字符的问题
>   - 修复包含 `{{time}}` 的创建命令路径中文件名含非法字符的问题

[Vault Changelog](obsidian://show-plugin?id=vault-changelog) By Badr Bouslikhin

> **1.3.0**
>
> - ⚙️ **改进/优化**
>   - 重构：将纯变更日志逻辑提取至 `src/changelog.ts`，移除 Obsidian 依赖，便于单元测试
> - 🐛 **修复**
>   - 消除切换自动更新时的事件监听器泄漏（#97）
>   - 移除手动样式加载，避免与 Obsidian 内置样式重复（#99）
>   - 保存与加载时规范化排除文件夹路径（#100）
>   - 排除文件夹匹配时强制添加尾部斜杠，防止前缀误匹配（#101）

### 🔐 安全与加密类

笔记加密、内容清洗、依赖漏洞修复等安全增强插件

---

[Eccirian Encrypt](obsidian://show-plugin?id=eccirian-encrypt) By Entropiex

> **1.0.11**
>
> - ⚙️ **改进/优化**
>   - 改进非 Markdown 文件的转换/解密流程：始终从容器元数据恢复原始扩展名
>   - 改进非 Markdown 文件加密后的导航行为：保持文件在当前活动叶中打开
> - 🐛 **修复**
>   - 修复临时非 Markdown 解锁路径中，原始加密源文件在某些视图切换场景下未被删除的问题
>   - 修复关键竞态条件：在 IME 输入组合期间切换页面时，可能将加密 JSON 内容写入错误笔记

[APIRequest](obsidian://show-plugin?id=apirequest) By rooyca

> **2.1.0**
>
> - 🛡️ **安全更新**
>   - 迁移至 `sanitize-html` 库，增强 HTML 内容清洗安全性，防止 XSS 注入

[Copy Metadata](obsidian://show-plugin?id=copy-metadata) By wenlzhang

> **0.0.4**
>
> - 🛡️ **安全更新**
>   - 更新 `flatted` 3.2.7 → 3.4.2（修复 CVE-2026-32141：parse() 中无界递归导致的拒绝服务）
>   - 更新 `minimatch` 3.1.2 → 3.1.5（修复 CVE-2026-26996：精心构造的 glob 模式导致的 ReDoS）

[Related Notes](obsidian://show-plugin?id=related-notes) By Oluwasanya Awe

> **4.1.1**
>
> - 🛡️ **安全更新**
>   - 修复 9 项依赖漏洞（4 高危、3 中危、2 低危），包括 rollup、minimatch、flatted、js-yaml 等

[Wayback Archiver](obsidian://show-plugin?id=wayback-archiver) By ISHIZUE

> **1.1.5**
>
> - 🛡️ **安全更新**
>   - 依赖加固：移除冗余包，通过 pnpm overrides 强制使用已修复版本，解决传递依赖中的高/中危漏洞
> - ⚙️ **改进/优化**
>   - 大规模依赖审计：移除 rollup、minimatch、jsdom、eslint 相关工具等不必要包
>   - 工具链升级：更新 typescript、vitest、oxlint、vite 至最新版

[Timestamp Link](obsidian://show-plugin?id=timestamp-link) By wenlzhang

> **0.1.1**
>
> - 📦 **依赖更新**
>   - 移除过时的 yarn.lock
>   - 升级 rollup 至 v4，修复安全漏洞并提升构建性能

[Tick Tones](obsidian://show-plugin?id=tick-tones) By DontBlameMe

> **1.6.6**
>
> - 📦 **依赖更新**
>   - 升级 flatted、pnpm/action-setup、eslint、typescript-eslint、picomatch、handlebars、brace-expansion 等开发依赖，修复安全漏洞

### 🎨 媒体与资源处理类

图片上传、附件索引、3D 嵌入、文本提取等资源管理插件

---

[Pasterly](obsidian://show-plugin?id=pasterly) By easternkite

> **v1.3.0**
>
> - 🐛 **修复**
>   - 修复 GCS CDN URL 中缺失的 https 协议，确保资源加载安全

[OCR Extractor](obsidian://show-plugin?id=ocr-extractor) By Johnathan Ritzi

> **2.1.0**
>
> - ✨ **新功能/特性**
>   - 新增设置：添加附件到笔记时自动提取文本，提升知识录入效率
> - ⚙️ **改进/优化**
>   - 避免尝试提取 Obsidian 原生文件类型（Markdown、Canvas、Base）的文本
>   - 在部分通知开头添加插件名称，便于识别来源

[Embed 3D](obsidian://show-plugin?id=embed-3d) By Jesse Strijker

> **1.1.5**
>
> - ✨ **新功能/特性**
>   - 为每个 3D 嵌入叠加层新增快照导出按钮（相机图标）
>     - 捕获当前渲染帧并保存为 PNG 至仓库
>     - 文件名格式：`3D-Embed-thumbnail-{模型名}-{时间戳}.png`
> - ⚙️ **改进/优化**
>   - 快照文件夹：指定导出快照的仓库文件夹，若文件夹不存在则中止导出并提示
>   - 自动写入快照属性：导出时自动将 `3D Embed-thumbnail` 维基链接属性写入笔记 Frontmatter
>   - 覆盖现有快照：导出新快照前先删除之前引用的快照，保持仓库整洁

[Initiative Tracker](obsidian://show-plugin?id=initiative-tracker) By Jeremy Valentine

> **13.0.19**
>
> - 🐛 **修复**
>   - 修复：注册悬停预览功能，提升 RPG 战斗追踪体验

[Notemd](obsidian://show-plugin?id=notemd) By Jacob

> **1.7.14**
>
> - ✨ **新功能/特性**
>   - 侧边栏 CTA（彩色行动按钮）色彩映射收敛至单文件动作
>   - 工作流 CTA 判定上线：仅由单文件步骤组成的工作流可为 CTA，混合/批量工作流为非 CTA
> - 🐛 **修复**
>   - 修复批量动作在视觉上被误识别为彩色主 CTA 的问题

[Tag Tactician](obsidian://show-plugin?id=tag-tactician) By Scott Tomaszewski

> **0.9.3**
>
> - ⚙️ **改进/优化**
>   - 尝试在更新后重新打开视图，确保界面状态同步

[Tag Group Manager](obsidian://show-plugin?id=tag-group-manager) By Stargazer-cc

> **1.8.7**
>
> - 🐛 **修复**
>   - 修复新版插件无法读取旧版标签颜色数据，导致「应用标签于正文」功能失效的问题
> - ⚙️ **改进/优化**
>   - 优化控制台输出内容，更简洁
>   - 优化开启正文标签样式后，预览与编辑视图下的渲染表现，更加稳定

[Dataview Serializer](obsidian://show-plugin?id=dataview-serializer) By Sébastien Dubois

> **2.6.0**
>
> - ✨ **新功能/特性**
>   - 修复链接格式设置的 Bug（f1fe8f3）

[UseSemaLogic](obsidian://show-plugin?id=usesemalogic) By SemaLogic UG

> **2.3.2**
>
> - ✨ **新功能/特性**
>   - 新增 Android 平台快捷按钮，扩展移动端操作入口

[aDHL](obsidian://show-plugin?id=adhl) By tine-schreibt

> **1.2.6**
>
> - 💄 **UI/UX 细节优化**
>   - 小幅界面修复，提升表单交互体验

[Dynbedded](obsidian://show-plugin?id=dynbedded) By Marcus Breiden

> **1.2.1**
>
> - 🐛 **修复**
>   - 修复生产构建输出中遗漏 manifest.json 与 styles.css 的问题，确保插件正常加载

[Node Factor](obsidian://show-plugin?id=node-factor) By CalfMoon

> **3.0.0**
>
> - ✨ **新功能/特性**
>   - 现在支持手动为任意文件添加权重，灵活控制知识图谱节点重要性

[Hardcover](obsidian://show-plugin?id=hardcover) By aliceinwaterdeep

> **2.0.1**
>
> - ⚙️ **改进/优化**
>   - 优化设置界面中的说明文字，提升可读性与配置清晰度

[Booksidian](obsidian://show-plugin?id=booksidian) By Micha Brugger

> **0.10.1**
>
> - 🐛 **修复**
>   - 若书籍位于「已读」书架但缺少 readDate，则自动分配至「已读」书架（@husjon）

[Learnie](obsidian://show-plugin?id=learnie) By tankh99

> **1.5.2**
>
> - 🐛 **修复**
>   - 修复导致笔记差异无法显示的 Bug，确保复习对比功能正常

[Continuous Mode](obsidian://show-plugin?id=continuous-mode) By Michael Schrauzer

> **3.6.8**
>
> - ⚙️ **改进/优化**
>   - 仅更新版本号，代码无其他变更（维护性发布）

### 🔄 同步与备份类

云端同步、版本控制、数字花园发布等数据同步插件

---

[KeepSidian](obsidian://show-plugin?id=keepsidian) By lc0rp

> **2.0.10**
>
> - ✨ **新功能/特性**
>   - **同步中心**：新增手动同步主界面，可在执行前预览并调整下载/上传/双向同步计划
>   - **路径设置增强**：支持模板化笔记路径、自定义文件名模式、实时路径预览
>   - **新筛选控件**：支持者专享筛选器，支持按笔记颜色、置顶状态、归档状态、自定义开始日期筛选
> - ⚙️ **改进/优化**
>   - 提升同步可靠性与速度，尤其针对大导入、分页、取消处理、Keep 获取限流等场景
>   - 统一手动同步命令、功能区操作与状态栏入口，围绕同步中心流程提供一致体验

[Sync Vault CE](obsidian://show-plugin?id=sync-vault-ce) By Camus Qiu

> **1.12.8**
>
> - ✨ **新功能/特性**
>   - 新增 3 个百度网盘 MCP 工具：语义搜索、文件共享、通过 URL 上传
>   - 视频笔记支持点击时间戳跳转至对应视频位置
> - ⚙️ **改进/优化**
>   - 优化实时同步的控制流程与界面交互

[Quartz Syncer](obsidian://show-plugin?id=quartz-syncer) By Emile Bangma

> **1.12.0**
>
> - ✨ **新功能/特性**
>   - 新增 Quartz 升级检查与应用内升级支持：
>     - 可配置更新检查策略：「版本比对」或「提交哈希比对」
>     - 检测上游最新提交是否存在于用户仓库历史中
>     - 「立即升级」按钮可直接在 Obsidian 内合并上游变更，无需外部工具
>     - 自动解决 `quartz.lock.json` 的常见合并冲突
>     - 支持移动端：使用 `isomorphic-git` 执行所有 Git 操作，无需外部 Git
> - 🗑️ **移除功能**
>   - 移除已废弃设置：`applyEmbeds` 与 `pathRewriteRules`

[Digital Garden](obsidian://show-plugin?id=digital-garden) By Ole Eskild Steensen

> **2.74.1**
>
> - ⚙️ **改进/优化**
>   - 若花园设置已远程配置，则自动同步镜像至 Obsidian 本地设置，减少重复配置

### 📈 统计与可视化类

习惯追踪、阅读统计、关系图谱等数据可视化插件

---

[Heatmap Tracker](obsidian://show-plugin?id=heatmap-tracker) By Maksim Rubanau

> **2.2.0**
>
> - ✨ **新功能/特性**
>   - 新增月度布局模式，支持自定义日期范围显示，灵活追踪习惯养成

[RSS Dashboard](obsidian://show-plugin?id=rss-dashboard) By Aditya Amatya

> **2.2.0-beta.9**
>
> - ✨ **新功能/特性**
>   - **侧边栏水平滚动**：支持通过鼠标滚轮/触控拖拽在侧边栏标题工具栏中水平滚动
>   - **XML 支持**：导入 OPML 窗口现在支持 XML 文件名
>   - **订阅源视图**：新增社交媒体风格的单列布局，支持英雄图、文本摘要截断、集成操作工具栏
>   - **自动备份**：插件卸载时自动备份 data.json、OPML 与 userdata
> - 🐛 **修复**
>   - 修复分页：切换视图筛选器时仪表板绕过分页限制显示全部文章的问题
>   - 修复滚动恢复：打开阅读面板或调整窗口大小时仪表板重置到顶部的问题

[Node Factor](obsidian://show-plugin?id=node-factor) By CalfMoon

> **3.0.0**
>
> - ✨ **新功能/特性**
>   - 现在支持手动为任意文件添加权重，灵活控制知识图谱节点重要性

### 🎮 创意与游戏类

RPG 工具、交互式叙事、卡牌游戏等创意娱乐插件

---

[Solo RPG Toolkit](obsidian://show-plugin?id=solo-rpg-toolkit) By Alex Kurowski

> **0.7.14**
>
> - ✨ **新功能/特性**
>   - 新增内联骰子支持优势/劣势选项：使用 `2d6/a` 或 `2d6/d` 语法（感谢 @jakub-wojciech！）
>   - 新增选项：使进度框统一样式，不再用不同颜色标记每第 5 个框

[Ink Player](obsidian://show-plugin?id=ink-player) By Uglyboy

> **2.0.1**
>
> - ✨ **新功能/特性**
>   - 实现自动保存与恢复功能
>   - 新增命令系统
>   - 添加 InkWeave 组件
> - 🐛 **修复**
>   - 修复发布脚本中的分支名称错误
>   - 修复 CI 工作流：升级 Node.js 至 22.x
> - ⚙️ **改进/优化**
>   - 重构 InkWeave 组件、工具函数、编译器、设置系统、样式模块
>   - 迁移至 @inkweave 工具库与插件架构
> - 📦 **依赖更新**
>   - 用 biome 替换 eslint；从 esbuild 迁移至 vite 构建

### 📚 阅读与知识管理类

思维导图、阅读笔记、书籍管理、知识卡片等学习增强插件

---

[Markmind](obsidian://show-plugin?id=markmind) By Mark

> **3.4.7**
>
> - ✨ **新功能/特性**
>   - 支持在 Rich 模式下通过 HTML 渲染调整节点尺寸
>   - 命令面板中新增节点尺寸相关命令：设置节点尺寸框 / 恢复默认尺寸

[Booksidian](obsidian://show-plugin?id=booksidian) By Micha Brugger

> **0.10.1**
>
> - 🐛 **修复**
>   - 若书籍位于「已读」书架但缺少 readDate，则自动分配至「已读」书架（@husjon）

[Quran Helper](obsidian://show-plugin?id=quran-helper) By Ammar Alakkad

> **1.11.0**
>
> - ✨ **新功能/特性**
>   - 支持使用阿拉伯数字查找章/节
>   - 使用属性存储 Surah 的维基链接，便于引用与跳转

[My Bible](obsidian://show-plugin?id=my-bible) By GsLogimaker

> **1.3.5**
>
> - ✨ **新功能/特性**
>   - 新增 `{book_short}` 和 `{book_full}` 替换令牌，支持更灵活的圣经引用格式化

[Bible Reference](obsidian://show-plugin?id=bible-reference) By tim-hub

> **26.03.28**
>
> - ✨ **新功能/特性**
>   - 新增：支持自定义书籍/章节标签的格式化（@j-w-brown）

[Learnie](obsidian://show-plugin?id=learnie) By tankh99

> **1.5.2**
>
> - 🐛 **修复**
>   - 修复导致笔记差异无法显示的 Bug，确保复习对比功能正常
