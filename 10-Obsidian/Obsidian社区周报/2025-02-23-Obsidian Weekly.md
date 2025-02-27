---
uid: 20250226220534
title: Obsidian Weekly 2025-02-23：Obsidian v1.8.7 已公开发布！外部交互与智能化更进一步！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-02-23：Obsidian v1.8.7 已公开发布！外部交互与智能化更进一步！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250226220838
---

# Obsidian Weekly 2025-02-23：Obsidian v1.8.7 已公开发布！外部交互与智能化更进一步

> [!Abstract]
> **统计时间**：2025-02-16 21:00 ~ 2025-02-23 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.8.7 现已发布

#### 桌面端

##### 改进

- 改进了“插入分隔线”命令，使其在非空行上使用时更加直观。
- 标题栏现已可在应用加载期间显示，允许在 Windows 和 Linux 上进行拖动窗口以及最小化、最大化和关闭操作。
- 外部链接：右键点击链接现会显示文件菜单。

##### 问题修复

- 修复了相邻有序列表被误认为同一列表并应用错误序号的问题。
- 修复了列表中使用 `Shift-Enter` 未能增加正确缩进的问题。
- 修复了 Mermaid 图表中自定义字体所需 CSS 变量 `--font-mermaid` 缺失的问题。
- Web viewer：在编辑器设置中关闭“Always focus new tabs”时，点击网页历史视图中的结果将在后台打开。
- Web viewer：修复了“Clear web viewer data”未能完全删除存储的会话数据的问题。
- Web viewer：修复了内置广告拦截器未能正确捕获网络请求的问题。
- Web viewer：修复了“Save to vault”失败却未显示错误的 bug。
- 书签：默认情况下，点击书签链接会在外部浏览器中打开，除非你已配置 Web viewer 以打开外部链接。
- 修复了 Mermaid 在窗口缩放比例非 100% 时导致部分文字被截断的回归问题。
- 修复了使用图谱视图后按 `Command/Ctrl` 导致页面预览意外出现的问题。
- 修复了将文件拖拽到属性字段时旧值重新出现的问题。
- 修复了右键点击历史导航按钮时无意中触发导航的问题。
- 修复了从弹出窗口打开页面预览时预览会立即隐藏的 bug。
- 设置：修复了附件文件夹字段不显示所选文件夹名称的问题。
- 修复了关闭带有弹出窗口的库后，重新启动 Obsidian 时不能重新将其打开的问题。
- 大纲：修复了启用“自动显示当前部分”后快速点击不同标题导致滚动位置异常的问题。
- 修复了 `Option-Shift-M` 快捷键失效的问题。
- 修复了阅读模式下打开文件时标题未能正确折叠的问题。
- 修复了折叠 API 的变更导致部分插件功能异常的问题。
- 修复了在新分屏或新窗口中打开文件时编辑器未能获得焦点的问题。
- 从标签菜单中选择标签页现会正确聚焦该标签页。
- 所有属性：修复了使用 `Alt`（macOS 上为 `Option`）选中属性时，“重命名”菜单项不可用的问题。

#### 移动端

包含了直至 [Obsidian 桌面端 v1.8.7](https://obsidian.md/changelog/2025-02-18-desktop-v1.8.7/) 的所有新功能和错误修复。

##### 问题修复

- Android：初始引导流程现增加了使用现有文件夹作为库的选项。
- 修复了 iOS 锁定模式下文件恢复和同步崩溃的问题。
- “切换左侧边栏”和“切换右侧边栏”命令现已在手机上可用。
- 修复了平板设备上侧边栏固定功能不可用的问题。
- 修复了全局搜索和反向链接中长按结果时不显示菜单的 bug。

## 插件新闻

### 社区插件

#### 新增

[Automatic Linker](https://obsidian.md/plugins?id=automatic-linker) By _Kodai Nakamura_

> 自动将纯文本文件引用转换为 wiki 链接。

[Note ID](https://obsidian.md/plugins?id=note-id) By _Dominik Mayer_

> 根据笔记的 ID 显示笔记，从而为手稿或 Zettelkasten（“Folgezettel”）构建结构化序列。

[Forms](https://obsidian.md/plugins?id=forms) By _Sorin Mircea_

> 发布精美的表单，并将结果直接发送到你的 Obsidian 库中。

![Weekly-2025-02-23-Pasted image 20250226204317|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250226204317.png!pkmer)

[SQLSeal Charts](https://obsidian.md/plugins?id=sqlseal-charts) By _hypersphere_

> 从数据中生成图表。支持折线图、饼图、散点图等多种图表类型。
> 由 [ECharts](https://echarts.apache.org/en/index.html) 提供支持。查看其文档以获取更多使用示例。

[Attachments MD Indexer](https://obsidian.md/plugins?id=attachments-md-indexer) By _Ian Inkov_

> 为白板文件创建元数据笔记，增强图谱视图的可见性并提高插件兼容性。

![Weekly-2025-02-23-Pasted image 20250226203525|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250226203525.png!pkmer)

[Pseudo Mica](https://obsidian.md/plugins?id=pseudo-mica) By _Alexis C_

> 为 Windows 上的 Obsidian 添加类似云母的背景效果，使用您的壁纸作为背景。

[Task Board](https://obsidian.md/plugins?id=task-board) By _Atmanand Gauns_

> 在一个单一的面板中管理整个库的所有任务，并提供更多功能……

![Weekly-2025-02-23-Pasted image 20250226185731|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250226185731.png!pkmer)

[Emoji Picker](https://obsidian.md/plugins?id=emoji-picker) By _Ali Faraji_

> 此插件在编辑器工具栏中添加一个按钮，点击后会打开一个带有搜索功能的表情符号选择器弹窗。点击表情符号后，它将被插入到编辑器的光标位置。

![Weekly-2025-02-23-output|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-output.gif!pkmer)

[Media Link to HTML](https://obsidian.md/plugins?id=media-link-to-html) By _C.Y. Park_

> 将媒体链接转换为 HTML 元素。

[Inkporter](https://obsidian.md/plugins?id=inkporter) By _Ayush Kumar Saroj_

> 通过智能墨迹分离、自适应主题和自动化工作流，将手写笔记数字化。

[Every Day Calendar](https://obsidian.md/plugins?id=every-day-calendar) By _QuBe_

> 通过 [Dataviewjs](https://blacksmithgu.github.io/obsidian-dataview/api/intro/) 创建习惯跟踪器！

![Weekly-2025-02-23-Pasted image 20250226155738|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250226155738.png!pkmer)

[Papyrus](https://obsidian.md/plugins?id=papyrus) By _André Silva, Daniel Guerra, Diogo Ferreira, Eduardo Barrancos_

> 改进您的文档语法或查找结构缺陷，并通过创建一个临时文件进行修正。该文件以“分屏”方式打开，并在右侧栏提供按钮，供您接受或拒绝更改。

![Weekly-2025-02-23-Pasted image 20250226153652|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250226153652.png!pkmer)

[EUpload](https://obsidian.md/plugins?id=e-upload) By _Appleex_

> 用于上传文件到存储仓库。目前支持 Lskypro（兰空图床），后续有需求会引入其它存储方式，如：Github/Gitee 等等。

[NerdFont Icon Picker](https://obsidian.md/plugins?id=nerdfont-icon-picker) By _Xaver Wenhart_

> 搜索并插入 Nerd Font 图标。

[Runsh](https://obsidian.md/plugins?id=runsh) By _Ddone_

> 创建按钮以在笔记中执行 Shell 命令。

[Inline Checkbox Groups](https://obsidian.md/plugins?id=inline-checkbox-groups) By _Bradley Wyatt_

> 在单行内创建多个复选框，使用可自定义的分隔符（默认为 '|'），并可选择在该行所有复选框勾选完毕后自动划掉文本。

![Weekly-2025-02-23-f7f06482-5922-4408-9d34-8ae98cab2fc4|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-f7f06482-5922-4408-9d34-8ae98cab2fc4.gif!pkmer)

[Hotstrings](https://obsidian.md/plugins?id=hotstrings) By _wakywayne_

> 允许你设置自定义的文本扩展（热字符串），在输入时自动扩展为对应的文本。

[Organized daily notes](https://obsidian.md/plugins?id=organized-daily-notes) By _duchangkim_

> 自动将你的每日笔记整理到可自定义的文件夹结构（年/月/周）中，实现系统化的笔记管理。

[Autofit Tabs](https://obsidian.md/plugins?id=autofit-tabs) By _Bradley Wyatt_

> 自动调整标签标题宽度，以完全适合每个标题的标题内容，同时保持干净的无缝接口界面，以防止尴尬的文本截断并确保文档标题的最佳可读性。

![Weekly-2025-02-23-69b452d4-79c1-4593-ba4e-534495c9a2ae|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-69b452d4-79c1-4593-ba4e-534495c9a2ae.gif!pkmer)

[Combo Colors](https://obsidian.md/plugins?id=combo-colors) By _Kevin Bowen_

> 自动为格斗游戏连招符号应用颜色。

![Weekly-2025-02-23-Pasted image 20250226141421|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250226141421.png!pkmer)

[Fold Properties By Default](https://obsidian.md/plugins?id=fold-properties-by-default) By _Tommy Bergeron_

> 默认始终折叠编辑器/元数据属性。

[Age Encrypt](https://obsidian.md/plugins?id=age-encrypt) By _Metin Ur_

> 使用 age 加密库进行安全内容加密。

[Minote Sync](https://obsidian.md/plugins?id=minote-sync) By _Emac Shen_

> 将 [小米笔记](https://i.mi.com/note/h5#/) 转换为 Markdown 格式保存到 Obsidian 指定的文件夹中。
> ⚠️ 本插件是覆盖式更新，请不要在同步的文件里修改内容。

![Weekly-2025-02-23-Pasted image 20250226140925|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250226140925.png!pkmer)

[CAO](https://obsidian.md/plugins?id=cao) By _Godot_

> 在笔记中集成 Claude AI 以进行聊天。

[Confluence Converter](https://obsidian.md/plugins?id=confluence-converter) By _Addo Zhang_

> 将 Markdown 转换为 Confluence Wiki 标记语言。

[Glasp](https://obsidian.md/plugins?id=glasp) By _Glasp_

> 将你的 Glasp 高亮和笔记导入你的库。

[Hanzi Writer](https://obsidian.md/plugins?id=hanzi-writer) By _Nikita Smirnov_

> 一个 Obsidian 插件，利用 [Hanzi Writer](https://hanziwriter.org/) 添加交互式汉字书写块。此插件让你能够直接在 Obsidian 笔记中创建交互式模块，方便练习汉字书写。

[AI integration Hub](https://obsidian.md/plugins?id=ai-hub) By _Hishmat Salehi_

> 与 AI 模型集成（目前仅支持谷歌的 Gemini），以便快速生成并完善笔记。

[Memodack](https://obsidian.md/plugins?id=memodack) By _Pavlo Kobyliatskyi_

> 记忆单词或短语，类似于 [Quizlet](https://quizlet.com/)、[Readlang](https://readlang.com/) 或免费版 [Anki](https://apps.ankiweb.net/)，但更为简易。

![Weekly-2025-02-23-Pasted image 20250226135735|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250226135735.png!pkmer)

[Mastodon Threading](https://obsidian.md/plugins?id=mastodon-threading) By _El Pamplina de Cai_

> 撰写并发布讨论记录到 Mastodon。

[External File Linker](https://obsidian.md/plugins?id=pathlinker) By _Kay606_

> 将外部文件嵌入到你的笔记中。
> 该插件可以链接到 Obsidian 能处理的任何文件类型，包括 md、pdf、png、jpg、mp3 和 mp4。

[Sankey](https://obsidian.md/plugins?id=sankey) By _Finn Romaneessen_

> 在笔记中创建 Sankey 图。

![Weekly-2025-02-23-Pasted image 20250226135054|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250226135054.png!pkmer)]

[Lancaster University Week Format](https://obsidian.md/plugins?id=lancaster-university-week) By _IMB11_

> 此插件扩展了 Obsidian 内置的 Moment.js 功能，提供了一个名为 **LUW** 的自定义日期标记。当你在每日笔记（或其他 Obsidian 日期格式设置中）包含 "LUW" 时，它将被替换为以下内容之一：
> - **Week X**（其中 X 表示兰开斯特大学 2024/2025 学年的周次编号），或
> - **VACATION**（如果该日期不在定义的学期周内）

[Callout Copy Buttons](https://obsidian.md/plugins?id=callout-copy-buttons) By _Aly Thobani_

> 为笔记中的 Callout 块添加复制按钮。

![Weekly-2025-02-23-Pasted image 20250225235521|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250225235521.png!pkmer)

[Duplicate Detector](https://obsidian.md/plugins?id=duplicate-detector) By _David Alcalde_

> 在当前打开的笔记中高亮重复的行。将鼠标悬停在高亮的行上时，会显示一个工具提示，显示该行重复出现的行号。

![Weekly-2025-02-23-Pasted image 20250225235355|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250225235355.png!pkmer)

[Feedly Annotations Sync](https://obsidian.md/plugins?id=feedly-annotations) By _Nick Felker_

> 将 Feedly 的高亮和批注同步到用户库中的一个文件夹。

[Vector Search](https://obsidian.md/plugins?id=vector-search) By _Ashwin A Murali_

> 通过 Ollama 和 nomic-embed-text 嵌入技术，为你的笔记实现语义搜索。需要先安装 Ollama。

[Varinote](https://obsidian.md/plugins?id=varinote) By _Giorgos Sarigiannidis_

> 在模板中添加变量，并在创建笔记时即时设置它们的值。

![Weekly-2025-02-23-varinote-bon-appetit|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-varinote-bon-appetit.gif!pkmer)

[Enhanced Canvas](https://obsidian.md/plugins?id=enhanced-canvas) By _RobertttBS_

> 将白板节点连接与笔记中的属性同步，实现文档关系管理的自动化。

![Weekly-2025-02-23-Enhanced Canvas|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Enhanced%20Canvas.gif!pkmer)

[WHISPERER.md](https://obsidian.md/plugins?id=whisperer) By _Falcion_

> 在你的库中播放氛围音乐，通过元数据为文件分配音频，支持本地音频（来自库）以及 URL 音频版本（例如 Youtube、Soundcloud）：适用于移动端库。

[Folder overview](https://obsidian.md/plugins?id=folder-overview) By _Lost Paul_

> 以代码块格式提供对库或文件夹的动态概览。

![Weekly-2025-02-23-407789095-f86b9f92-8a72-41b6-8936-266527b94971|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-407789095-f86b9f92-8a72-41b6-8936-266527b94971.gif!pkmer)

[AI Providers](https://obsidian.md/plugins?id=ai-providers) By _Pavel Frankov_

> 一个统一配置 AI 提供商（如 OpenAI 类、Ollama 等）的中心。

![Weekly-2025-02-23-415326379-09b6313d-726c-440b-9201-1b2f2e839fa7|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-415326379-09b6313d-726c-440b-9201-1b2f2e839fa7.gif!pkmer)

[MCP Tools](https://obsidian.md/plugins?id=mcp-tools) By _Jack Steam_

> 安全地将 Claude Desktop 与你的库连接，提供语义搜索、模板和文件管理功能。

[Pixel Perfect Image](https://obsidian.md/plugins?id=pixel-perfect-image) By _Johan Sanneblad_

> 像素级完美的 100% 图片重设大小，支持复制到剪贴板、在 Finder/Explorer 中显示图片、在外部编辑器中编辑图片等多种功能。

[Readeck Importer](https://obsidian.md/plugins?id=readeck-importer) By _Makebit_

> 从 Readeck 导入书签。

[Explorer Colors](https://obsidian.md/plugins?id=explorer-colors) By _Scott Van der Zwet_

> 为文件和文件夹设置级联颜色。

![Pasted image 20250225000236|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250225000236.png!pkmer)

## 外观

[**Serif** Theme](https://github.com/GodlyMan-bit/Serif) By _agodlyman_

![Weekly-2025-02-23-Pasted image 20250226165315|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250226165315.png!pkmer)

[**Material 3** Theme](https://github.com/HarmfulBreeze/obsidian-material-3-theme) By _HarmfulBreeze_

![Weekly-2025-02-23-Pasted image 20250225231929|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250225231929.png!pkmer)

> _由于限制，此主题在 Android 上不支持动态颜色。_ 因此，此主题的配色方案是基于 Obsidian 的品牌色生成的。

[**Old World** Theme](https://github.com/double-tilde/old-world-obsidian) By _Double Tilde_

![Weekly-2025-02-23-Pasted image 20250225231728|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250225231728.png!pkmer)

> 基于 dgox16 为 Neovim 开发的 [Old World](https://github.com/dgox16/oldworld.nvim) 主题。
> 设计采用轻松护眼的配色方案。

[**Composer** Theme](https://github.com/vran-dev/obsidian-composer) By _vran_

![Weekly-2025-02-23-Pasted image 20250225230406|650](https://cdn.pkmer.cn/images/Weekly-2025-02-23-Pasted%20image%2020250225230406.png!pkmer)

> 一个开箱即用的 obsidian 主题，为更舒适的阅读与写作体验设计。
