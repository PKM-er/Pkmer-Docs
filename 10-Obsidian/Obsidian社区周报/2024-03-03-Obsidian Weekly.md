---
uid: 20240303221237
title: 2024-03-03：番茄时钟 +AI+Ob，今天你拥有效率拉满的工作流了吗？
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-03-03：番茄时钟 +AI+Ob，今天你拥有效率拉满的工作流了吗？
author: 淡水鱼,PKMer
type: awesome
draft: false
editable: false
modified: 20240429000551
---

# Obsidian Weekly  2024-03-03：番茄时钟 +AI+Ob，今天你拥有效率拉满的工作流了吗？

> [!Abstract]
> **统计时间**：2024-02-24 00:00 ~ 2024-03-03 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

> [!Tip]
> **‌‌‌‌这些插件已经通过了代码审查，现在可以在 Obsidian 插件列表中获取。** 完整列表请查看 [插件统计页面](https://obsidian-plugin-stats.vercel.app/new?ref=eleanorkonik.com)。

#### 新增

[MemoryLane](https://github.com/bangca85/obsidian-memorylane-plugin) by _BangCa_

> 在个人互动时间轴上重温并庆祝您人生的里程碑。通过周年纪念提醒和珍贵回忆，回顾您的历史的怀旧之旅。

![2024-03-03-ch-Pasted image 20240302160108.png|900](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240302160108.png!pkmer)

[Copy as source](https://github.com/gapmiss/copy-as-source) by _@gapmiss_

> 在阅读视图中选择并复制源 HTML。

![2024-03-03-copy-as-source.gif](https://cdn.pkmer.cn/images/2024-03-03-copy-as-source.gif!pkmer)

[Alfonso Money Manager](https://github.com/smartlife-gpt/alfonso-money-manager-obsidian/releases/tag/1.0.0) by _SmartLifeGPT Innovation_

> Alfonso Money Manager 数据查看器和财务分析工具
> Alfonso Money Manager 是一款综合性移动应用程序，旨在管理个人财务和预算。它为用户提供了一个强大的平台，可以轻松跟踪他们的支出、收入和预算目标。该应用程序具有一个可以与黑曜石库同步的本地数据库，允许通过使用专门的查询语言来增强数据可视化和分析。

![2024-03-03-ch-Pasted image 20240302180311.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240302180311.png!pkmer)

[PDF++](https://github.com/RyotaUshio/obsidian-pdf-plus) by _Ryota Ushio_

> 有史以来最黑曜石原生的 PDF 注释工具。
> PDF++ 使 Obsidian 成为独立的 PDF 注释工具。您可以使用 Obsidian 丰富的 Markdown 编辑器无缝注释 PDF，而无需在 Obsidian 和 Zotero 或 Marginnote 等外部应用程序之间切换。单个 PDF 的注释不再局限于单个文件，可以分布在整个库中。它建立了一种新颖的、黑曜石式的 PDF 注释方式。

[Go Up](https://github.com/JinMuGo/obsidian-go-up) by _JinMu Go_

> 该插件允许用户通过利用页面前面的自定义属性来快速导航到指定的“父”页面。

[Format with Prettier](https://github.com/alexgavrusev/obsidian-format-with-prettier) by _Alex Gavrusev_

> 使用 Prettier 格式化 Vault 中的文件。

[Image Magician](https://github.com/luxmargos/obsidian-image-magician-plugin) by _luxmargos_

> 支持使用 ImageMagick 查看和导出各种图像格式。

[Graphs](https://github.com/DylanHojnoski/obsidian-graphs) by _Dylan Hojnoski_

> 通过编写 YAML 创建交互式图表

![2024-03-03-ch-sinRiemannsum.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-sinRiemannsum.gif!pkmer)

[Simple Image Inserter](https://github.com/jdholtz/obsidian-image-inserter) by _Joey Holtzman_

> 通过内置文件选择器将文件系统中的图像添加到笔记中。

[Graph Link Types](https://github.com/natefrisch01/Graph-Link-Types) by _natefrisch01_

> 此插件通过动态渲染链接类型来增强图形视图。该插件利用 Dataview API 和 PIXI.js 创建信息更丰富、交互性更强的图形体验。通过显示笔记之间的链接类型，它可以让您更清楚地了解黑曜石库内的关系。

![2024-03-03-ch-dbc52780-48fc-45d8-b87a-2f7d58eb903e.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-dbc52780-48fc-45d8-b87a-2f7d58eb903e.gif!pkmer)

[Fix Require Modules](https://github.com/mnaoumov/obsidian-fix-require-modules) by _mnaoumov_

> 修复内置模块的 `require()` 调用。
> 这些内置模块可以在插件开发期间进行导入，但如果您尝试从 `DevTools` 控制台、`Templater` 脚本、`dataviewjs` 脚本等地方使用 `require ()`，则会显示 `Uncaught Error: Cannot find module` 错误。当前插件修复了此问题并使以下 `require()` 调用正常工作：

```
require("obsidian");
require("@codemirror/autocomplete");
require("@codemirror/collab");
require("@codemirror/commands");
require("@codemirror/language");
require("@codemirror/lint");
require("@codemirror/search");
require("@codemirror/state");
require("@codemirror/text");
require("@codemirror/view");
require("@lezer/common");
require("@lezer/lr");
require("@lezer/highlight");
```

[Auto Definition Link](https://github.com/nmcarp99/obsidian-auto-definition-link) by _Nolan Carpenter_

> 自动创建指向您仓库中的块链接。

[Chord Sheets](https://github.com/olvidalo/obsidian-chord-sheets) by _Marcel Schaeben_

> 在您的库中渲染和使用和弦表（歌词上的和弦）。该插件为 Obsidian 带来了类似 UltimateGuitar 的功能，包括和弦图、对吉他和四弦琴的支持、变调和自动滚动。在编辑/实时预览和阅读模式下无缝工作。它与您的主题颜色集成，并可根据您的需求进行定制。

![2024-03-03-ch-Pasted image 20240302185118.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240302185118.png!pkmer)

![2024-03-03-ch-diagram-popups.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-diagram-popups.gif!pkmer)

[Enhanced tables](https://github.com/pistacchio/obsidian-enhanced-tables) by _pistacchio_

> 将可编程控件添加到选定的表格。

![2024-03-03-ch-example.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-example.gif!pkmer)

[Folders to Graph](https://github.com/Ratibus11/folders2graph) by _Ratibus11_

> 在图表中显示您的 Vault 文件夹结构。

![2024-03-03-ch-Pasted image 20240303002836.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303002836.png!pkmer)

[Lean Syntax Highlight](https://github.com/tomaz1502/lean-syntax-highlight) by _tomaz1502_

> 为精益编程语言提供实时语法突出显示

[AI Tagger](https://github.com/lucagrippa/obsidian-ai-tagger) by _Luca Grippa_

> 简化标记。一键即时分析和标记您的文档，以实现高效的笔记组织。需要 OpenAI API 密钥。

[Quiz Generator](https://github.com/ECuiDev/obsidian-quiz-generator) by _Edward Cui_

使用 OpenAI 的 GPT-3.5 和 GPT-4 模型根据您的笔记生成交互式测验。

[Goban SGF](https://github.com/StinsonZhao/obsidian-plugin-goban-sgf) by _Stinson_

> 录制围棋棋局（SGF 格式）。

[Display Relative Path Img](https://github.com/dyc2424748461/obsidian-display-relative-path-img) by _Dyc_

> 显示带有 `<img>` 标签的图像

[Metadata Icon](https://github.com/Benature/obsidian-metadata-icon) by _Benature_

> 为您的属性设置自定义图标。

[AI File Organizer 2000](https://github.com/different-ai/file-organizer-2000) by _Benjamin Ashgan Shafii_

> 使用 AI 自动整理笔记、为照片和音频添加注释。

[Spotify API](https://github.com/Darren-project/obsidian-spotify) by _Darren-project_

> Obsidian 的 Spotify 插件允许您将 Spotify 功能集成到您的 Obsidian 笔记中。使用此插件，您可以访问您的 Spotify 帐户，搜索歌曲、专辑和艺术家，并检索有关播放列表、曲目等的信息。立即开始使用 Spotify 插件，通过音乐集成增强您的笔记体验！

[PF2e Statblocks](https://github.com/pixley/pf2e-statblock-for-obsidian) by _Tyler Pixley_

> 仅使用基于 Markdown 的语法干净地渲染 Pathfinder 2e statblocks。

[Canvas Link Optimizer](https://github.com/khaelar/obsidian-canvas-link-optimizer) by _khaela_

> 这是一个轻量级的 Obsidian 插件，旨在增强画布链接节点的用户体验。默认情况下，Obsidian 画布中的链接节点会在网页内容进入视图时加载它们。该插件通过显示预览缩略图来修改此行为，从而显著减少资源消耗。如果用户需要更详细的信息，他们仍然可以通过单击缩略图来访问完整的网页。

![2024-03-03-ch-showcase-with-plugin.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-showcase-with-plugin.gif!pkmer)

[Inline Admonitions](https://github.com/scottTomaszewski/obsidian-inline-admonitions) by _Scott Tomaszewski_

> 该插件将允许您格式化内联代码块，以更好地在页面上脱颖而出。例如，您可能希望所有以“IMPORTANT”开头的内联代码块都具有像这样的红色背景：

![2024-03-03-ch-Pasted image 20240303154440.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303154440.png!pkmer)

[Filtered Opener](https://github.com/scottTomaszewski/obsidian-inline-admonitions) by _Roman Kubiv_

> 从过滤器定义的集合中选择性打开笔记和文件夹。可以在此插件的设置中创建、删除和配置过滤器集。所有过滤器都支持使用特殊字符和正则表达式。

[Todoist Review](https://github.com/imcauley/todoist-review) by _Isaac McAuley_

> 这是一个用于审查和分类 Todoist 逾期任务的插件。

[Image to text OCR](https://github.com/dario-baumberger/obsidian-image-to-text-ocr) by _Dario Baumberger_

> 识别笔记中图像上的文本。识别的文本将依据所选命令附加到您的图像或将替换您的图像。

![2024-03-03-ch-loremipsum.gif|900](https://cdn.pkmer.cn/images/2024-03-03-ch-loremipsum.gif!pkmer)

[Tiff Viewer](https://github.com/ullmannJan/obsidian-tiff-viewer) by _Jan Ullmann_

> 该插件创建当前打开文件中所有 `.tif(f)` 文件的副本，并将它们转换为 `.tif(f).png` （无论它们保存在何处）。这允许 `tif(f)` 图像在 Obsidian 中显示。

[Seafile](https://github.com/conql/obsidian-seafile) by _conql_

> 使用 Seafile 在设备之间同步笔记。
> 	[Seafile](https://www.seafile.com/) 是一个类似 Git 的开源自托管文件同步和共享解决方案，具有高性能和可靠性。它支持通过增量下载和上传进行高效同步。并提供用户友好的 Web UI 和跨多个操作系统的出色同步客户端。

[Select & Complete](https://github.com/macro21KGB/select-and-complete) by _Mario De Luca_

> 选择一些内容，让 AI 为您完成。

[PDF break page](https://github.com/corentin-godefroy/Obsidian-BreakPage) by _CG_

> 为您的 pdf 导出添加空白页。

[Plugin Reloader](https://github.com/Benature/obsidian-plugin-reloader) by _Benature_

> 通过命令选项板或热键手动重新加载插件。

[Track-a-Lot](https://github.com/revolter/obsidian-track-a-lot-plugin) by _Iulian Onofrei_

> 这是 Obsidian (<https://obsidian.md>) 的跟踪器插件。抓取不同的网页，将项目构建为 Markdown 表格的列表，并允许您跟踪它们的状态。

![2024-03-03-ch-Pasted image 20240303162526.png|900](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303162526.png!pkmer)

[Ego Rock](https://github.com/echo-bravo-yahoo/ego-rock) by _Ashton Eby_

> 一个基础的 Taskwarrior 用户界面，用于列出和修改任务。

[Augmented Canvas](https://github.com/MetaCorp/obsidian-augmented-canvas) by _Léopold Szabatura_

> 使用 AI 功能增强画布。该插件向画布视图中的注释菜单添加了三个操作。
> 1. 询问 GPT 特定笔记，笔记内容将用作提示。注释可以是文本注释、md 文件或 PDF 文件。将在包含 AI 响应的提示注释下方创建一个新注释。
> 2. 询问有关注释的问题。也使得 GPT 生成一个新的笔记，问题放在两个笔记之间的链接上。
> 3. 使用 GPT 生成有关特定笔记的问题。生成的问题可帮助您轻松进一步深入了解笔记的主题。

[Prompt ChatGPT](https://github.com/Coduhuey/ChatGPT-Prompt-Plugin-For-Obsidian) by _Coduhuey_

> 打开文件时将模板化提示发送到 ChatGPT。

[Canvas Mindmap Helper](https://github.com/tim-smart/obsidian-canvas-mindmap) by _Tim Smart_

> 让白板像思维导图一样工作。

![2024-03-03-ch-Pasted image 20240303164350.png|900](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303164350.png!pkmer)

[Advanced Canvas](https://github.com/Developer-Mike/obsidian-advanced-canvas) by _Developer-Mike_

> 增强您的白板体验。创建演示文稿、流程图等。

[Quadro](https://github.com/chrisgrieser/obsidian-quadro) by _Chris Grieser (aka pseudometa)_

> 社会科学家的定性数据分析 (QDA)。 MAXQDA 和 atlas.ti 的开放替代方案，使用 Markdown 存储数据和研究代码。

[Enhanced Annotations](https://github.com/ycnmhd/obsidian-enhanced-annotations) by _ycnmhd_

> 扩展评论和高亮的功能。

![2024-03-03-ch-Pasted image 20240303173033.png|900](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303173033.png!pkmer)

[Pomodoro Widget](https://github.com/bitegw/obsidian-pomodoro-widget) by _bitegw_

> 提供基于番茄工作法的厨房计时器小部件。它设计为具有触觉反馈，有持续的滴答声和可以切换的警报声。

![2024-03-03-ch-Pasted image 20240303173344.png|600](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303173344.png!pkmer)

[Yesterday](https://github.com/dominikmayer/obsidian-yesterday) by _Dominik Mayer_

> 该插件可让您在 Obsidian 中创建和编辑昨天的日记。

[Gitlab Wiki Exporter](https://github.com/jrabmer/obsidian-to-gitlab-wiki) by _Josef Rabmer_

> 该插件用于将整个黑曜石库导出为 Gitlab Wiki。

[Text Focus](https://github.com/usysrc/obsidian-text-focus-plugin) by _usysrc_

> 创建新笔记时聚焦文本区域。

[MBlog Publish](https://github.com/kingwrcy/obsidian-mblog) by _Jerry_

> 通过 Obsidian 发布文章到 MBlog 平台。

[Tab Shifter](https://github.com/jsrozner/obsidian-tab-shifter) by _Joshua Rozner_

> 允许在不同选项卡拆分之间切换选项卡。选项卡可以移动到上一个或下一个“选项卡组”。

[Alias Management](https://github.com/WithMarcel/alias-management) by _WithMarcel_

> 根据相似的别名和文件名识别重复的笔记。

[historica](https://github.com/nhannht/obsidian-historica) by _Nhan Nguyen_

> 根据您的内容智能生成时间线。

![2024-03-03-ch-Pasted image 20240303181143.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303181143.png!pkmer)

![2024-03-03-ch-Pasted image 20240303181312.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303181312.png!pkmer)

[Date Inserter](https://github.com/namikaze-40p/obsidian-date-inserter) by _namikaze-40p_

> 使用日历在光标位置插入日期。

![2024-03-03-ch-ecc2f4e2-bf4f-421b-8217-c4352baf8e90.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-ecc2f4e2-bf4f-421b-8217-c4352baf8e90.gif!pkmer)

[MantouAI](https://github.com/ravenSanstete/Obsidian-MantouAI) by _Morino Pan_

> 担任翻译、润色、一般问答、总结的私人助理，利用大型语言模型的力量。
> 内置万能提问、常见学术功能、角色扮演、全文观点提炼，可对任意选中文字（1000 字以内较好）进行中译英、英译中、中文润色、要点归纳、段落精读……
> **亮点：中文友好！**
> **注意：当前版本接入通义大模型，需联网（过于敏感的数据请勿使用）**

[Pomodoro Planner](https://github.com/onesvat/obsidian-pomodoro-planner) by _Onur Nesvat_

> 基于番茄工作法生成每日计划，并与 Obsidian Day Planner 插件兼容。

[BookFusion](https://github.com/BookFusion/obsidian-plugin) by _BookFusion_

> 将 BookFusion 高亮和注释导入到您的库中。

[Tekken Notation](https://github.com/OpTi9/obsidian-tekken-notation) by _OpTi9_

> 在 Obsidian 中渲染 [《铁拳》](https://tekken.fandom.com/wiki/Move_Terminology) 符号图。

![2024-03-03-ch-68747470733a2f2f692e696d6775722e636f6d2f684365504537772e676966.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-68747470733a2f2f692e696d6775722e636f6d2f684365504537772e676966.gif!pkmer)

[Mxmind Mindmap](https://github.com/webceoboy/mxmind-obsidian) by _mxmind_

> 将 Markdown 文件转换为思维导图，思维导图编辑器。

![2024-03-03-ch-Pasted image 20240303192017.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303192017.png!pkmer)

[Contextual Sidecar](https://github.com/matthewturk/obsidian-sidecar-panel) by _Matthew Turk_

> 添加上下文相关的边栏面板。这使您能够使用 obsidian-meta-bind 等插件来创建绑定到父级而不是面板源本身的 `INPUT` 字段。

[Differential ZIP Backup](https://github.com/vrtmrz/diffzip) by _vorotamoroz_

> 这是 Obsidian 库的备份插件。我们可以将所有已修改的文件存储到 ZIP 文件中。

[Media Notes](https://github.com/jemstelos/obsidian-media-notes) by _jemstelos_

> 使用媒体控件和时间戳记录 YouTube 视频和播客笔记。

[Contextual note templating](https://github.com/Balibaloo/obsidian-local-template-configuration) by _Roman Kubiv_

> 提示输入值和模板以创建注释。

[Cooklang](https://github.com/rveciana/obsidian-cooklang) by _Roger Veciana i Rovira_

> 显示和编辑以 Cooklang 格式编写的食谱。

[Vault Transfer](https://github.com/ImaginaryProgramming/obsidian-vault-transfer) by _ImaginaryProgramming_

> 将所选注释的内容传输到另一个仓库，然后从原始注释链接到它。

![2024-03-03-ch-212498180-34ed6ddf-9800-4904-b5a8-209be067e992.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-212498180-34ed6ddf-9800-4904-b5a8-209be067e992.gif!pkmer)

[Movie Search](https://github.com/Gubchik123/obsidian-movie-search-plugin) by _Gubchik123_

> 帮助您查找电影和创建笔记。

[Notification Controller](https://github.com/juan-miii/obsidian-notice-plugin) by _juan-miii_

> 管理启动时的通知。它主要用于自动删除社区插件的**调试启动时间**通知。

[Calendarium](https://github.com/javalent/calendarium) by _Jeremy Valentine_

> 制作稀奇古怪的奇幻和科幻风格日历。

[Confluence Sync](https://github.com/kerry/obsidian-confluence-sync) by _Prateek Grover_

> 用于将黑曜石笔记同步到 [Confluence](https://www.atlassian.com/software/confluence ) 的插件。

[Daily Note Navbar](https://github.com/karstenpedersen/obsidian-daily-note-navbar) by _Karsten Finderup Pedersen_

> 在每日笔记的顶部添加一个栏，以便在它们之间快速导航。

![2024-03-03-ch-Pasted image 20240303205406.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303205406.png!pkmer)

![2024-03-03-ch-Pasted image 20240303205411.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303205411.png!pkmer)

[Orion Publish](https://github.com/seanrcollings/orion-publish-plugin) by _Sean Collings_

> 使用 Orion Publish 快速轻松地将您的笔记发布到网络上。该网站托管在 orion.seancollings.dev。

[Gistr](https://github.com/Aetherinox/obsidian-gistr) by _Aetherinox_

> Gistr 允许您嵌入从两个不同服务创建的 Gists：_OpenGist_ 和 _Github gist_

[Things3 Today](https://github.com/wudanyang6/obsidian-things3-today) by _wudanyang6_

> Things3 Today 插件允许您直接在 Obsidian 窗格中从 Things3 应用程序查看和管理今天的任务。

#### 更新

> [!TIP]
> **如果您想要本周更新的插件的完整列表，请查看 Ganesh Kumar 的 [插件更新索引](https://obsidian-plugin-stats.vercel.app/updates?ref=eleanorkonik.com)。**

[Journals v1.1.0](https://github.com/srg-kostyrko/obsidian-journal/releases/tag/1.1.0) by _Sergii Kostyrko_

> - 下一个/上一个笔记命令（与打开下一个/上一个现有日记笔记的每日笔记插件命令类似）
> - 日历视图 - 类似于日历插件侧边栏视图，可以更轻松地浏览期刊
> - 自定义间隔导航代码块外观的设置

[Various Complements v9.4.0](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/releases/tag/9.4.0) by _tadashi-aikawa_

> 在数学块选项中添加禁用建议

![2024-03-03-ch-Pasted image 20240302150958.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240302150958.png!pkmer)

[Linter v1.23.1](https://github.com/platers/obsidian-linter/releases/tag/1.23.1) by _Victor Tao_

> - **特征**
> 	- 新增了一个规则，用于去重 YAML 数组值
> 	- 新增了一个规则，用于排序 YAML 数组值
> - **错误**
> 	- 修复了转义的 `|` 值如果出现在表格行中，会干扰表识格别的错误
> 	- 修复了数学块指示器从单行意外变为多行时，在不处于引用或块引用中被错误地拆分到下一行开头的问题
> 	- 修复了 `Re-Index Footnotes` 在 Markdown 链接作为值时存在的问题
> 	- 修复了在 `Bottom=False` 的情况下，如果标题前一行有标签，则 `Heading Blank Lines` 功能无法在标题前添加空行的问题
> 	- 修复了 YAML 数组的排序和去重功能不工作的问题，这是因为它们被错误地列为了特殊规则，而实际上不应该是
> 	- 修复去重和排序功能未执行的问题

[GitHub Link v0.4.0](https://github.com/nathonius/obsidian-github-link/releases/tag/0.4.0) by _Nathonius_

> - **变更**
> 	- 默认页面大小设置为 10，并且可以在设置中配置
> 	- 表格包含刷新按钮
> 	- 用于调试的日志级别设置
> - **修复**
> 	- 当非默认账户时，私有仓库的搜索查询有效
> 	- 列名现在不区分大小写
> 	- 表格在适当的时候水平滚动
> 	- 在 markdown 链接内的 GitHub 链接不会被转换成标签

[Waypoint v2.0.0](https://github.com/IdreesInc/Waypoint/releases/tag/2.0.0) by _ldrees Hassan_

> - **新功能**
> 	- 地标！
> 		- 它们就像航路点，但父航路点将通过它们链接而不是停止！
> 	- 标注！
> 		- 如果您喜欢语法 `> %% Waypoint %%`，请在标注中添加航路点
> 	- 正则表达式忽略列表！
> 		- 忽略带有正则表达式的文件或文件夹！
> 	- 空间！
> 		- 使用空格而不是制表符缩进并可自定义大小！
> 	- 寻找父航路点的新命令！

[View Count v0.6.2](https://github.com/trey-wallis/obsidian-view-count/releases/tag/0.6.2) by _Trey Wallis_

> - **特征**
> 	- 添加在 `property` 和 `file` 存储方法之间选择观看次数的功能
> 	- 将视图计数窗格添加到侧边栏以跟踪查看次数最多的 20 个文件
> 	- 将 `last-view-time` 存储为 frontmatter 中的 `date` 类型
> 	- 将 `last-view-time` 重命名为 `view-date
> 	- 添加日志系统
> 	- 添加调试语句 `
> - **重构**
> 	- 将侧边栏窗格重命名为“查看计数”
> 	- 将 `last-view-time` 重命名为 `view-date`
> 	- 禁用 console. Log 语句
> 	- 在存储设置下方强调重启通知
> 	- 更新属性设置的说明
> - **修复**
> 	- 将节点 `normalize` 替换为从 Obsidian 公开的 `normalizePath
> 	- 仅当 `pluginVersion` 为空时迁移
> 	- 解决选择 `File` 存储时视图计数始终递增的问题（回归 0.5.0）
> 	- 修复 styles. Css 未作为发布资产上传的问题
> - **测试**
> 	- 添加更多调试语句

[Feeds v0.0.9](https://github.com/lukemt/obsidian-feeds/releases/tag/0.0.9) by _LukeMT, pashashocky, madx_

> - **新功能**
> 	- 此更新添加了急需的分页系统，使您的提要能够处理更多项目，而不会减慢 Obsidian 的速度。
> 	- 由于采用了新设置（在提要块中以 `pageLength` 形式提供或通过全局插件设置 UI 提供），每页的项目数是可调的（从 5 到 30 个项目）。
> - **其他变化**
> 	- 将所有依赖项更新到最新版本

[RTL Support v1.2.0](https://github.com/esm7/obsidian-rtl/releases/tag/1.2.0) by _esm_

> 新的 1.2.0 版本 **Obsidian RTL** 添加了对表格的广泛支持，允许表格混合 LTR、RTL，并根据第一个单元格动态决定其方向。
>
> 此外，首次安装插件时，自动方向现在是默认设置，因为这是大多数用户所期望的，但许多人不知道它的存在。

[Quick plugin switcher v7.4.0](https://github.com/1C0D/obsidian-quick-plugin-switcher/releases/tag/7.4.0) by _1C0D_

> - **新功能**
> 	- 使用 (s) 或在移动设备的上下文菜单中查看每个社区插件的下载统计信息
> 	- 通过命令切换插件。通过命令/快捷方式快速切换任何插件（启用/禁用）非常有用
> 	- 重新打开窗口时，下拉菜单现在保留其状态（设置中的选项）。
> 	- 新的过滤器仅查看社区插件上添加的注释

[Metadata Menu v0.8.4](https://github.com/mdelobelle/metadatamenu/releases/tag/0.8.4) by _mdelobelle_

> - **新的**
> 	- 在 dataviewjs 代码块中使用带有嵌套属性的“fielModifier”，可以直接从 dataview 表修改嵌套属性。感谢 WhiskeyJack96 的贡献。 [演示](https://youtu.be/C8KKu3upk-M)
> - **改进**
> 	- 对象列表字段模态中更好的导航
> 	- 输入字段中具有无效 Yaml 语法的字符串用双引号引起来，以防止 frontmatter 被破坏

[Image Collector v1.0.1](https://github.com/tdaykin/obsidian_image_collector/releases/tag/1.0.1) by _tdaykin_

> 现在，您只需运行命令即可生成一个包含所有笔记图像的文件夹，以便您可以将其拖到其他项目目录中。

[Advanced Canvas v2.5.1](https://github.com/Developer-Mike/obsidian-advanced-canvas/releases/tag/2.5.1) by _Developer-Mike_

> - 添加了边缘路径样式（默认、直接、A*)
> - 修复了与门户节点的交互
> - 修复了门户大小调整错误
> - 修复了非图像文件上可见的贴纸弹出选项
> - 将默认文本节点大小设置为 260x60 (从 250x60) 以与默认网格对齐
> - 提高性能
> - 添加了更多画布事件
> - 添加了调试助手
> - 将 `advanced-canvas:nodes-changed` 事件更改为 `advanced-canvas:node-changed`
> - 添加了向弹出菜单调色板添加自定义颜色的功能

### PKMer 出品

> [!INFO]
> [PKMer](https://pkmer.cn/) 旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Media Extended v3.4.0](https://github.com/PKM-er/media-extended/releases/tag/3.0.4) 已发布

- 修复（注意）：修复 iframe 在阅读模式下不起作用
- 构建：修复最低黑曜石版本

### 未上架插件

> [!Caution]
> **注意：社区列表中尚未提供所有新插件，因为它们需要先经过代码审查。您可以使用 [Beta Reviewer 的自动更新工具](https://github.com/TfTHacker/obsidian42-brat?ref=eleanorkonik.com) 手动安装社区列表中尚未包含的插件。但请注意，这并不像等待它们通过代码审查那么安全。**
`

[Better Daily Notes](https://github.com/showaykerker/better-daily-notes-obsidian-plugin) by _showaykerker_

> - **更好的日常笔记**插件，旨在增强您的日常笔记体验！主要特点如下：
> 	- **结构化每日笔记**：使用结构化文件夹格式轻松组织您的每日笔记。
> 	- **文件管理**：无缝处理笔记中的图像、PDF 和 ZIP 文件，重命名并将它们移动到子目录中。它是可选的，因此您仍然可以使用自动图像上传插件！
> 	- **假设同一天的某个时间之前**：对于那些熬夜的人来说，可以方便地考虑同一天午夜后指定时间之前的时间！
> 	- **从模板创建每日笔记**：从预定义模板轻松创建每日笔记。
> 	- **便捷导航**：轻松快速访问今天、昨天、明天的每日笔记。

## 外观

[mono black (monochrome, charcoal)](https://github.com/ZeChArtiahSaher/obsidian-mono-black) by _ZeChArtiahSaher_

![2024-03-03-ch-Pasted image 20240303161653.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303161653.png!pkmer)

# 2024-03-03：Pomodoro Timer+AI+OB, Did you have an efficient workflow at full capacity today?

> [!Abstract]
> **Statistical time**: 2024-02-24 21:00 ~ 2024-03-03 21:00

## Plugin News

### Produced by PKMer

> [!INFO]
> [PKMer](https://pkmer.cn/) aims to create a powerful knowledge management community in the Eastern Hemisphere. "PKM" stands for Personal Knowledge Management, and the "er" suffix represents individuals. Anyone who is focused on and enjoys personal knowledge management work, and who seeks efficiency, can be included in this category. We hope the community can bring together more people like this.

#### [Media Extended v3.4.0](https://github.com/PKM-er/media-extended/releases/tag/3.0.4) has been pubished

- Fix(note): fix iframe in reading mode not working
- Build: fix min obsidian ver

### Community Plugins

> [!Tip]
> **These plugins went through code review and are now available in Obsidian's plugin list.** For the full list, check out the [**plugin stats page**](https://obsidian-plugin-stats.vercel.app/new?ref=eleanorkonik.com).

#### New

[MemoryLane](https://github.com/bangca85/obsidian-memorylane-plugin) by _BangCa_

> Relive and celebrate your life's milestones on a personal, interactive timeline. A nostalgic journey through your history with anniversary reminders and cherished memories.

![2024-03-03-ch-Pasted image 20240302160108.png|900](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240302160108.png!pkmer)

[Copy as source](https://github.com/gapmiss/copy-as-source) by _@gapmiss_

> Select and copy source HTML in reading view.

![2024-03-03-copy-as-source.gif](https://cdn.pkmer.cn/images/2024-03-03-copy-as-source.gif!pkmer)

[Alfonso Money Manager](https://github.com/smartlife-gpt/alfonso-money-manager-obsidian/releases/tag/1.0.0) by _SmartLifeGPT Innovation_

> Alfonso Money Manager data viewer and financial analytics tool
> Alfonso Money Manager is a comprehensive mobile application designed for managing personal finances and budgets. It provides a robust platform for users to track their expenses, income, and budgeting goals with ease. The app features a local database that can be synchronized with an Obsidian vault, allowing for enhanced data visualization and analysis through the use of a specialized query language.

![2024-03-03-ch-Pasted image 20240302180311.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240302180311.png!pkmer)

[PDF++](https://github.com/RyotaUshio/obsidian-pdf-plus) by _Ryota Ushio_

> The most Obsidian-native PDF annotation tool ever.
> PDF++ makes Obsidian work as **a stand-alone PDF annotation tool**. You can seamlessly annotate your PDFs using Obsidian's rich markdown editor without switching between Obsidian and an external app like Zotero or Marginnote. Annotations for a single PDF are no longer confined to a single file and **can be distributed across the whole vault**. It establishes a novel, _Obsidianic_ way of PDF annotation.

[Go Up](https://github.com/JinMuGo/obsidian-go-up) by _JinMu Go_

> This plugin allows users to quickly navigate to a specified "parent" page by utilizing a custom property in the page's front matter.

[Format with Prettier](https://github.com/alexgavrusev/obsidian-format-with-prettier) by _Alex Gavrusev_

> Format files in your vault using Prettier.

[Image Magician](https://github.com/luxmargos/obsidian-image-magician-plugin) by _luxmargos_

> Supports viewing and exporting various image formats using ImageMagick.

[Graphs](https://github.com/DylanHojnoski/obsidian-graphs) by _Dylan Hojnoski_

> Create interactive graphs by writing YAML

![2024-03-03-ch-sinRiemannsum.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-sinRiemannsum.gif!pkmer)

[Simple Image Inserter](https://github.com/jdholtz/obsidian-image-inserter) by _Joey Holtzman_

> Add images from the file system into notes through a built-in file picker.

[Graph Link Types](https://github.com/natefrisch01/Graph-Link-Types) by _natefrisch01_

> This plugin enhances the graph-view by rendering link types dynamically. This plugin leverages the Dataview API and PIXI.js to create a more informative and interactive graph experience. By displaying the types of links between notes, it provides a clearer understanding of the relationships within your Obsidian vault.

![2024-03-03-ch-dbc52780-48fc-45d8-b87a-2f7d58eb903e.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-dbc52780-48fc-45d8-b87a-2f7d58eb903e.gif!pkmer)

[Fix Require Modules](https://github.com/mnaoumov/obsidian-fix-require-modules) by _mnaoumov_

> Fixes `require()` calls for the built-in modules.
> Those built-in modules are available for import during the Plugin development but shows `Uncaught Error: Cannot find module` error if you try to `require()` them from the `DevTools Console`, `Templater` scripts, `dataviewjs` scripts etc. The current plugin fixes this problem and make the following `require()` calls working properly.

[Auto Definition Link](https://github.com/nmcarp99/obsidian-auto-definition-link) by _Nolan Carpenter_

> Automatically create links to blocks in your vault.

[Chord Sheets](https://github.com/olvidalo/obsidian-chord-sheets) by _Marcel Schaeben_

> Render and work with chord sheets (**chords over lyrics**) in your vault. This plugin brings UltimateGuitar-like functionality into Obsidian, featuring **chord diagrams**, support for **guitar** and **ukulele**, **transposition**, and **autoscroll**. Works seamlessly in **edit / live preview** and **reading** mode. It integrates with your **theme colors** and is **customizable** to your needs.

![2024-03-03-ch-Pasted image 20240302185118.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240302185118.png!pkmer)

![2024-03-03-ch-diagram-popups.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-diagram-popups.gif!pkmer)

[Enhanced tables](https://github.com/pistacchio/obsidian-enhanced-tables) by _pistacchio_

> Add programmable controls to selected tables.

![2024-03-03-ch-example.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-example.gif!pkmer)

[Folders to Graph](https://github.com/Ratibus11/folders2graph) by _Ratibus11_

> Display your vault folder structure into your graphs.

![2024-03-03-ch-Pasted image 20240303002836.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303002836.png!pkmer)

[Lean Syntax Highlight](https://github.com/tomaz1502/lean-syntax-highlight) by _tomaz1502_

> Provides live syntax highlight for the Lean programming language

[AI Tagger](https://github.com/lucagrippa/obsidian-ai-tagger) by _Luca Grippa_

> Simplify tagging. Instantly analyze and tag your document with one click for efficient note organization. OpenAI API key required.

[Quiz Generator](https://github.com/ECuiDev/obsidian-quiz-generator) by _Edward Cui_

> Generate interactive quizzes from your notes using OpenAI's GPT-3.5 and GPT-4 models.

[Goban SGF](https://github.com/StinsonZhao/obsidian-plugin-goban-sgf) by _Stinson_

> Record Go games (SGF format goban).

[Display Relative Path Img](https://github.com/dyc2424748461/obsidian-display-relative-path-img) by _Dyc_

> Display the image of the `<img>` tag

[Metadata Icon](https://github.com/Benature/obsidian-metadata-icon) by _Benature_

> Set custom icons for your properties.

[AI File Organizer 2000](https://github.com/different-ai/file-organizer-2000) by _Benjamin Ashgan Shafii_

> Automatically organize notes, annotate photos and audio using AI.

[Spotify API](https://github.com/Darren-project/obsidian-spotify) by _Darren-project_

> The Spotify Plugin for Obsidian allows you to integrate Spotify functionality into your Obsidian notes. With this plugin, you can access your Spotify account, search for songs, albums, and artists, and retrieve information about playlists, tracks, and more. Start using the Spotify Plugin today and enhance your note-taking experience with music integration!

[PF2e Statblocks](https://github.com/pixley/pf2e-statblock-for-obsidian) by _Tyler Pixley_

> Render Pathfinder 2e statblocks cleanly, using only Markdown-based syntax.

[Canvas Link Optimizer](https://github.com/khaelar/obsidian-canvas-link-optimizer) by _khaela_

> This is a lightweight Obsidian plugin designed to enhance the user experience with canvas link nodes. By default, link nodes in Obsidian canvas load the web page content as they come into view. The plugin modifies this behavior by displaying a preview thumbnail instead, which significantly reduces resource consumption. Users can still access the full web page by clicking on the thumbnail if they need more detailed information.

![2024-03-03-ch-showcase-with-plugin.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-showcase-with-plugin.gif!pkmer)

[Inline Admonitions](https://github.com/scottTomaszewski/obsidian-inline-admonitions) by _Scott Tomaszewski_

> This plugin will allow you to format inline codeblocks to better stand out on the page. For example, you may want to have all inline codeblocks that start with "IMPORTANT" to have a red background like this:

![2024-03-03-ch-Pasted image 20240303154440.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303154440.png!pkmer)

[Filtered Opener](https://github.com/scottTomaszewski/obsidian-inline-admonitions) by _Roman Kubiv_

> Open notes and folders, chose from sets defined by filters. Filter sets can be created, deleted and configured in the settings of this plugin. All filters support using special characters and regular expressions.

[Todoist Review](https://github.com/imcauley/todoist-review) by _Isaac McAuley_

> This is a plugin to review and triage overdue tasks from Todoist.

[Image to text OCR](https://github.com/dario-baumberger/obsidian-image-to-text-ocr) by _Dario Baumberger_

> Recognize Text on images in your notes. The recognized text will be appended to your image or will replace your image - depending on the command.

![2024-03-03-ch-loremipsum.gif|900](https://cdn.pkmer.cn/images/2024-03-03-ch-loremipsum.gif!pkmer)

[Tiff Viewer](https://github.com/ullmannJan/obsidian-tiff-viewer) by _Jan Ullmann_

> This plugin creates copies of all `.tif(f)` files in the currently opened file and converts them to `.tif(f).png` wherever they are saved. This allows for `tif(f)` images to be displayed in Obsidian.

[Seafile](https://github.com/conql/obsidian-seafile) by _conql_

> Sync notes across devices using Seafile.
> 	[Seafile](https://www.seafile.com/) is a Git like, open source, self-hosted file sync and share solution with high performance and reliability. It supports efficient synchronization through delta downloads and uploads. And provide user-friendly web UI and excellent syncing clients across multiple operating systems.

[Select & Complete](https://github.com/macro21KGB/select-and-complete) by _Mario De Luca_

> Select something and let the AI complete it for you.

[PDF break page](https://github.com/corentin-godefroy/Obsidian-BreakPage) by _CG_

> Add a break page for your pdf exports.

[Plugin Reloader](https://github.com/Benature/obsidian-plugin-reloader) by _Benature_

> Manually reload plugins on command palette or hotkey.

[Track-a-Lot](https://github.com/revolter/obsidian-track-a-lot-plugin) by _Iulian Onofrei_

> This is a tracker plugin for Obsidian (<https://obsidian.md/>).Scrapes different webpages, builds lists with the items as Markdown tables, and allows you to track their status.

![2024-03-03-ch-Pasted image 20240303162526.png|700](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303162526.png!pkmer)

[Ego Rock](https://github.com/echo-bravo-yahoo/ego-rock) by _Ashton Eby_

> A basic taskwarrior UI for listing and modifying tasks.

[Augmented Canvas](https://github.com/MetaCorp/obsidian-augmented-canvas) by _Léopold Szabatura_

> Augment Canvas with AI features. This plugin adds three actions to the Menu of a note in the Canvas View.
> 1. Ask GPT on a specific note, the note content will be used as prompt. The note can be a text note, a md file or a PDF file. A new note will be created underneath the prompt note containing the AI response.
> 2. Ask question about a note. Also makes GPT generate a new note, the question is placed on the link between the two notes.
> 3. Generate questions on a specific note using GPT. The generated questions help you easily dig further into the subject of the note.

[Prompt ChatGPT](https://github.com/Coduhuey/ChatGPT-Prompt-Plugin-For-Obsidian) by _Coduhuey_

> Send templated prompts to ChatGPT when you open a file.

[Canvas Mindmap Helper](https://github.com/tim-smart/obsidian-canvas-mindmap) by _Tim Smart_

> Make the Canvas work like a mindmap.

![2024-03-03-ch-Pasted image 20240303164350.png|900](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303164350.png!pkmer)

[Advanced Canvas](https://github.com/Developer-Mike/obsidian-advanced-canvas) by _Developer-Mike_

> Supercharge your canvas experience. Create presentations, flowcharts and more.

[Quadro](https://github.com/chrisgrieser/obsidian-quadro) by _Chris Grieser (aka pseudometa)_

> Qualitative Data Analysis (QDA) for Social Scientists. An open alternative to MAXQDA and atlas.ti, using Markdown to store data and research codes.

[Enhanced Annotations](https://github.com/ycnmhd/obsidian-enhanced-annotations) by _ycnmhd_

> Extends the functionality of comments and highlights.

![2024-03-03-ch-Pasted image 20240303173033.png|900](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303173033.png!pkmer)

[Pomodoro Widget](https://github.com/bitegw/obsidian-pomodoro-widget) by _bitegw_

> Provides a widget based on a pomodoro kitchen timer. It's designed to be haptic, and has a constant ticking sound, and an alarm sound that can be toggled.

![2024-03-03-ch-Pasted image 20240303173344.png|600](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303173344.png!pkmer)

[Yesterday](https://github.com/dominikmayer/obsidian-yesterday) by _Dominik Mayer_

> This plugin lets you create and edit a Yesterday journal in Obsidian.

[Gitlab Wiki Exporter](https://github.com/jrabmer/obsidian-to-gitlab-wiki) by _Josef Rabmer_

> This plugin is used to export your entire obsidian vault as a Gitlab Wiki.

[Text Focus](https://github.com/usysrc/obsidian-text-focus-plugin) by _usysrc_

> Focus the text area when creating new notes

[MBlog Publish](https://github.com/kingwrcy/obsidian-mblog) by _Jerry_

> Enables shifting tabs between different tab splits.

[Tab Shifter](https://github.com/jsrozner/obsidian-tab-shifter) by _Joshua Rozner_

> Enables shifting tabs between different tab splits. Tabs can be either moved to the previous or to the next "tab group".

[Alias Management](https://github.com/WithMarcel/alias-management) by _WithMarcel_

> Identify duplicate notes based on similar aliases and filenames.

[historica](https://github.com/nhannht/obsidian-historica) by _Nhan Nguyen_

> Intelligently generates timeline from your content.

![2024-03-03-ch-Pasted image 20240303181143.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303181143.png!pkmer)

![2024-03-03-ch-Pasted image 20240303181312.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303181312.png!pkmer)

[Date Inserter](https://github.com/namikaze-40p/obsidian-date-inserter) by _namikaze-40p_

> nsert a date at the cursor position using a calendar.

![2024-03-03-ch-ecc2f4e2-bf4f-421b-8217-c4352baf8e90.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-ecc2f4e2-bf4f-421b-8217-c4352baf8e90.gif!pkmer)

[MantouAI](https://github.com/ravenSanstete/Obsidian-MantouAI) by _Morino Pan_

> Work as a personal assistant for translation, writing polish, general Q&A, summarizing, using the power of large language models.
> Built-in universal questioning, common academic functions, role-playing, comprehensive viewpoint extraction, capable of translating, proofreading, summarizing key points, and carefully reading any selected text (preferably under 1000 words) in Chinese to English, English to Chinese, and refining Chinese text, summarizing key points, and carefully reading paragraphs.
> **Highlight: Chinese-friendly!**
> **Notes: The current version integrates with the Tong-Yi Large model and requires an internet connection (please do not use for overly sensitive data).**

[Pomodoro Planner](https://github.com/onesvat/obsidian-pomodoro-planner) by _Onur Nesvat_

> generates a daily plan based on the pomodoro technique with compatible with the Obsidian Day Planner plugin.

[BookFusion](https://github.com/BookFusion/obsidian-plugin) by _BookFusion_

> Import your BookFusion highlights & annotations into your vault.

[Tekken Notation](https://github.com/OpTi9/obsidian-tekken-notation) by _OpTi9_

> Render [Tekken Notation](https://tekken.fandom.com/wiki/Move_Terminology) Diagrams in Obsidian.

![2024-03-03-ch-68747470733a2f2f692e696d6775722e636f6d2f684365504537772e676966.gif](https://cdn.pkmer.cn/images/2024-03-03-ch-68747470733a2f2f692e696d6775722e636f6d2f684365504537772e676966.gif!pkmer)

[Mxmind Mindmap](https://github.com/webceoboy/mxmind-obsidian) by _mxmind_

> Convert Markdown files to a mind map, mind map editor.

![2024-03-03-ch-Pasted image 20240303192017.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303192017.png!pkmer)

[Contextual Sidecar](https://github.com/matthewturk/obsidian-sidecar-panel) by _Matthew Turk_

> Add a context-dependent sidecar panel. This enables you to use plugins such as obsidian-meta-bind to create `INPUT` fields that bind to the parent, rather than to the panel source itself.

[Differential ZIP Backup](https://github.com/vrtmrz/diffzip) by _vorotamoroz_

> This is a vault backup plugin for Obsidian. We can store all the files which have been modified, into a ZIP file.

[Media Notes](https://github.com/jemstelos/obsidian-media-notes) by _jemstelos_

> Take notes on YouTube videos and podcasts with media controls and timestamps.

[Contextual note templating](https://github.com/Balibaloo/obsidian-local-template-configuration) by _Roman Kubiv_

> Prompts for values and templates to create notes.

[Cooklang](https://github.com/rveciana/obsidian-cooklang) by _Roger Veciana i Rovira_

> Display and edit recipes written in the Cooklang format.

[Vault Transfer](https://github.com/ImaginaryProgramming/obsidian-vault-transfer) by _ImaginaryProgramming_

> Transfers the contents of the selected note to another vault, then links to it from the original note.

![2024-03-03-ch-212498180-34ed6ddf-9800-4904-b5a8-209be067e992.gif|900](https://cdn.pkmer.cn/images/2024-03-03-ch-212498180-34ed6ddf-9800-4904-b5a8-209be067e992.gif!pkmer)

[Movie Search](https://github.com/Gubchik123/obsidian-movie-search-plugin) by _Gubchik123_

> Helps you find movies and create notes.

[Notification Controller](https://github.com/juan-miii/obsidian-notice-plugin) by _juan-miii_

> Manages notifications at startup. It is primarily used to automatically remove **Debug startup time** notices for community plugins.

[Calendarium](https://github.com/javalent/calendarium) by _Jeremy Valentine_

> Craft mind-bending fantasy and sci-fi calendars.

[Confluence Sync](https://github.com/kerry/obsidian-confluence-sync) by _Prateek Grover_

> A plugin to sync obsidian notes to [Confluence](https://www.atlassian.com/software/confluence).

[Daily Note Navbar](https://github.com/karstenpedersen/obsidian-daily-note-navbar) by _Karsten Finderup Pedersen_

> Adds a bar at the top of daily notes to quickly navigate between them.

![2024-03-03-ch-Pasted image 20240303205406.png|700](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303205406.png!pkmer)

![2024-03-03-ch-Pasted image 20240303205411.png|900](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303205411.png!pkmer)

[Orion Publish](https://github.com/seanrcollings/orion-publish-plugin) by _Sean Collings_

> Quickly and easily publish your notes to the web with Orion Publish. The site is hosted at [orion.seancollings.dev](https://orion.seancollings.dev/).

[Gistr](https://github.com/Aetherinox/obsidian-gistr) by _Aetherinox_

> Gistr allows you to embed gists that have been created from two different services: _OpenGist_ and _Github gist_

[Things3 Today](https://github.com/wudanyang6/obsidian-things3-today) by _wudanyang6_

> The Things3 Today Plugin allows you to view and manage your today's tasks from the Things3 app directly within an Obsidian pane.

#### Updates

>[!Tip]
>**If you want a comprehensive list of what plugins updated this week, check out this [plugin updates index](https://obsidian-plugin-stats.vercel.app/updates?ref=eleanorkonik.com) by Ganessh Kumar.**

[Journals v1.1.0](https://github.com/srg-kostyrko/obsidian-journal/releases/tag/1.1.0) by _Sergii Kostyrko_

> - Next/prev note command (that works similar to Daily note plugin commands opening next/prev existing journal note)
> - Calendar view - similar to calendar plugin sidebar view for easier navigation through journals
> - Settings to customize interval-nav code block appearance

[Various Complements v9.4.0](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/releases/tag/9.4.0) by _tadashi-aikawa_

> Add a **Disable suggestion in the Math block** option

![2024-03-03-ch-Pasted image 20240302150958.png](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240302150958.png!pkmer)

[Linter v1.23.1](https://github.com/platers/obsidian-linter/releases/tag/1.23.1) by _Victor Tao_

> - **Features**
> 	- Added a rule for dedupe YAML array values
> 	- Added a rule for sorting YAML array values
> - **Bugs**
> 	- Fixed a bug where escaped `|` values were messing up table recognition if it was in a table row
> 	- Fixed an issue with math block indicators that went from a single line to multiple accidentally getting the start of the line erroneously added to the next line when it got broken apart when not in a callout or blockquote
> 	- Fixed `Re-Index Footnotes` having an issue with Markdown Links as the values
> 	- Fixed an issue with `Heading Blank Lines` not working for for adding a blank line before a heading when `Bottom=False` and there was a tag on the line before a heading
> 	- Fixes sorting and deduping YAML arrays not working since they were listed as special rules when they were not supposed to be
> 	- Fix Dedepe and Sort not Running

[GitHub Link v0.4.0](https://github.com/nathonius/obsidian-github-link/releases/tag/0.4.0) by _Nathonius_

> - **Changed**
> 	- Default page size set to 10, and configurable in settings
> 	- Tables include a refresh button
> 	- Log level setting for debugging
> - **Fixed**
> 	- Search queries for private repos work when not the default account
> 	- Column names are now case-insensitive
> 	- Tables horizontally scroll when appropriate
> 	- GitHub links within markdown links are not transformed into tags

[Waypoint v2.0.0](https://github.com/IdreesInc/Waypoint/releases/tag/2.0.0) by _ldrees Hassan_

> - **New Features**
> 	- Landmarks!
> 		- They're like waypoints, but parent waypoints will link _through_ them rather than stopping!
> 	- Callouts!
> 		- Add waypoints in callouts if that's your vibe with the syntax `> %% Waypoint %%`
> 	- Regex ignore lists!
> 		- Ignore files or folders with regular expressions!
> 	- Spaces!
> 		- Indent with spaces instead of tabs with customizable size!
> 	- New command to find the parent waypoint!

[View Count v0.6.2](https://github.com/trey-wallis/obsidian-view-count/releases/tag/0.6.2) by _Trey Wallis_

> - **Feature**
> 	- Add ability to choose between `property` and `file` storage methods for view count
> 	- Add view count pane to sidebar to track the 20 most viewed files
> 	- Store `last-view-time` as `date` type in frontmatter
> 	- Rename `last-view-time` to `view-date`
> 	- Add logging system
> 	- Add debug statements
> - **Refactor**
> 	- Rename sidebar pane to "View count"
> 	- Rename `last-view-time` to `view-date`
> 	- Disable console. Log statements
> 	- Emphasize restart notice below storage setting
> 	- Update descriptions for property settings
> - **Fix**
> 	- Replace Node `normalize` with `normalizePath` exposed from Obsidian
> 	- Only migrate if `pluginVersion` is empty
> 	- Resolve view count always incrementing when `File` storage is selected (Regression 0.5.0)
> 	- Fix styles. Css not uploading as a release asset
> - **Test**
> 	- Add more debug statements

[Feeds v0.0.9](https://github.com/lukemt/obsidian-feeds/releases/tag/0.0.9) by _LukeMT, pashashocky, madx_

> - **New feature**
> 	- This update adds a much needed pagination system to make your feeds capable of handling more items without slowing down Obsidian.
> 	- Item count per page is tunable (from 5 to 30 items) thanks to a new setting (available in feed blocks as `pageLength` or through the global plugin settings UI).
> - **Other changes**
> 	- Updated all dependencies to their latest versions

[RTL Support v1.2.0](https://github.com/esm7/obsidian-rtl/releases/tag/1.2.0) by _esm_

> The new 1.2.0 version of **Obsidian RTL** adds pretty extensive support for tables, allowing tables to mix LTR, RTL, and dynamically decide on their direction based on the first cell.
>
> Also, auto direction is now the default when the plugin is first installed, as that's what most users expect and yet many didn't know it's there.

[Quick plugin switcher v7.4.0](https://github.com/1C0D/obsidian-quick-plugin-switcher/releases/tag/7.4.0) by _1C0D_

> - **New features**
> 	- see downloads stats for each community plugin using (s) or in the context menu on mobile
> 	- switch a plugin via command. Can be useful to quickly switch any plugin (enable/disable) via a command/shortcut
> 	- Dropdown menus now retain their state when the window is reopened (option in settings).
> 	- new filter to see only notes added on community plugins

[Metadata Menu v0.8.4](https://github.com/mdelobelle/metadatamenu/releases/tag/0.8.4) by _mdelobelle_

> - **New**
> 	- Use `fielModifier` with nested properties in dataviewjs codeblock to modify your nested properties directly from a dataview table. Thank you WhiskeyJack96 for your contribution. [demo](https://youtu.be/C8KKu3upk-M)
> - **Improvements**
> 	- Better navigation in Object List fields modals
> 	- Strings with invalid Yaml syntax are surrounded with double quotes in Input field to prevent the frontmatter from being broken

[Image Collector v1.0.1](https://github.com/tdaykin/obsidian_image_collector/releases/tag/1.0.1) by _tdaykin_

> You can now just run a command to generate a folder that contains all of your note's images so you can drag into other project directories.

[Advanced Canvas v2.5.1](https://github.com/Developer-Mike/obsidian-advanced-canvas/releases/tag/2.5.1) by _Developer-Mike_

> - Added Edge Path Styles (Default, Direct, A*)
> - Fixed Interaction With Nodes From Portals
> - Fixed Portals Resizing Buggy
> - Fixed Sticker Popup Option Visible On Non-Image Files
> - Set Default Text Node Size To 260x60 (From 250x60) To Align With The Grid
> - Improved Performance
> - Added More Canvas Events
> - Added Debug Helper
> - Changed `advanced-canvas:nodes-changed` Event To `advanced-canvas:node-changed`
> - Added Ability To Add Custom Colors To The Popup Menu Palette

### Pending

> [!Caution]
> **Note: Not all new plugins are available in the community list yet, as they need to go through code review first. You can manually install plugins that aren't in the community list yet by using the [Beta Reviewer's Auto-update Tool](https://github.com/TfTHacker/obsidian42-brat?ref=eleanorkonik.com). Note, though, that this is not as safe as waiting for them to go through code review.**

[Better Daily Notes](https://github.com/showaykerker/better-daily-notes-obsidian-plugin) by _showaykerker_

> - A **Better Daily Notes** plugin, aim at enhancing your daily note-taking experience! Here are the main features:
> 	- **Structured Daily Notes**: Organize your daily notes effortlessly with a structured folder format.
> 	- **Files Management**: Seamlessly handle images, PDFs, and ZIP files within your notes, rename and move them into subdirectories. It's optional, so you can still use your automatic image upload plugins!
> 	- **Assume Same Day Before Hour**: Conveniently consider the same day before a specified hour after midnight for those who burn the midnight oil!
> 	- **Create Daily Note From Template**: Easily create daily notes from pre-defined templates.
> 	- **Convenient Navigation**: Quickly access today's, yesterday's, and tomorrow's daily notes with ease.

## Appearance

[mono black (monochrome, charcoal)](https://github.com/ZeChArtiahSaher/obsidian-mono-black) by _ZeChArtiahSaher_

![2024-03-03-ch-Pasted image 20240303161653.png|900](https://cdn.pkmer.cn/images/2024-03-03-ch-Pasted%20image%2020240303161653.png!pkmer)
