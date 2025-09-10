---
uid: 20230329102649
title: Obsidian 周报
tags: [Obsidian]
description: 
author: Bon
type: other
draft: false
editable: false
modified: 20230621183151
---

# Obsidian 周报

让我们来做点有趣的事情——如果你愿意接下来的几周每周都花 1 到 2 个小时来协助我们维护或改进 Obsidian Hub 的 Python 代码，使它能够自动更新现有的 Obsidian Hub 页面并且自动创建新的页面（译注：更新匹配规则以及实现自动更新等）——如果你对结对编程以及希望来帮忙改进 Obsidian Hub 的 Python 代码的话，你可以在 Discord 的 [hub-website](https://discord.com/channels/686053708261228577/915679988118863933/1042825618938658876) 频道联系我们。注意：这事情不止有趣，对社区的发展也将起到重大的作用，例如我们的 [Obsidian 周报也将并入 Obsidian Hub](https://publish.obsidian.md/hub/01+-+Community/Obsidian+Roundup/%F0%9F%97%82%EF%B8%8F+Obsidian+Roundup) 来方便用户检索以及搜索引擎索引。

# 插件新闻

这些插件通过了代码审查，现在可以在插件市场可以下载了。对于全部的通过列表，请查看 [插件统计页面](https://obsidian-plugin-stats.vercel.app/new)。

- 来自 `@mvdkwast` 的 [Copy document as HTML](https://github.com/mvdkwast/obsidian-copy-as-html) 允许你将当前的文档以 HTML 格式复制到剪贴板，包括图片。
- 来自 `@MMoMM-org` 的 [Dynbedded](https://github.com/MMoMM-org/obsidian-dynbedded) 允许在笔记执行基于当前笔记的上下文来利用例如 Dataview 动态检索，以及日期动态插入。
- 来自 `@tokenshift` 的 [Page Gallery](https://github.com/tokenshift/obsidian-page-gallery) 允许你根据你选择的页面内容来创建 Gallery（画廊） 视图。
- 来自 `@TfTHacker` 的 [Obsidian42 - Strange New Worlds](https://github.com/TfTHacker/obsidian42-strange-new-worlds) 方便你更容易看到笔记之间的联系。

## 还未审核的插件（截止到上周五）

**也不是所有的插件都会立马上架插件市场，因为它们需要先经过代码审核。你可以使用 [Beta Reviewer's Auto-update Tool](https://github.com/TfTHacker/obsidian42-brat) 来手动下载那些还没上架的插件。当然这也意味着他们还不够稳定和安全，因为它们还没被代码审核过。**（译注：有些时候存在重复的条目的原因是因为对应的作者因为某些原因重开了 PR，导致会重复出现在更新内容中。）

- 来自 `@Boninall` 的 [Obsidian Daily Notes Editor](https://github.com/Quorafind/Obsidian-Daily-Notes-Editor) 让你可以在同一个页面中实时编辑多个日记，你可以参考 Roam Research 的默认的每日笔记视图。尽管我没有在用 Daily Note，但我认为已经有不少人等了这个功能很久，真高兴见到它的出现。
- 来自 `@luckman212` 的 [Split Pane View Helper](https://github.com/luckman212/obsidian-split-pane-view) 让用户通过快捷键或工具条快速新建打开当前页面的源码或预览视图。
- 来自 `@dvargas92495` 的 [SlamePage]( <https://github.com/samepage-network/obsidian-samepag> 是一个 inter-TFT-protocol 的客户端。
- 来自 `@bingryan` [Obsidian markdown export]( <https://github.com/bingryan/obsidian-markdown-export-plugin> 是一款 markdown export 插件。
- 来自 `@twibiral` 的 [obsidian-doom](https://github.com/twibiral/ObsiDOOM) 可以让你在 Obsidian 应用程序中玩著名的 FPS 游戏 DOOM。你还可以玩《波斯王子》、《真人快打》、《GTA》、《模拟城市》和《极品飞车》。我很惊讶这么久才有人做这个 😂。
- 来自 `@noonesimg` 的 [Audio Player](https://github.com/noonesimg/obsidian-audio-player) 允许你可以在后台播放，标记书签和可视化音波，而不是默认的 html5 音频。
- 来自 `@gtg922r` 的 [Numerals](https://github.com/gtg922r/obsidian-numerals) 允许你在代码块中进行计算，其中代码块的每一行的数学公式或者单位或者变量都可以被整个代码块共享（类似局部变量），包括单位、货币和可选的 TeX 渲染。
- 来自 `@djmango` 的 [Transcription](https://github.com/djmango/obsidian-transcription) 让你可以将 Markdown 笔记链接的音频文件转译成对应的文本文件。
- 来自 `@leenattress` 的 [AWS DynamoDb For Obsidian](https://github.com/leenattress/obsidian-plugin-dynamodb) 允许你实时查询 AWS DynamoDb 并在文档中渲染表格。
- 来自 `@Boninall` 的 [Mini Toolbar](https://github.com/Quorafind/Obsidian-Mini-Toolbar) 允许你选中文本后出现工具条来控制样式。
- 来自 `@vertis` 的 [Image Layouts](https://github.com/vertis/obsidian-image-layouts) 允许你为图片添加好看的布局。
- 来自 `@joleaf` 的 [BPMN 插件](https://github.com/joleaf/obsidian-bpmn-plugin) 让你可以使用 bpmn-js 查看 BPMN 图。
- 来自 `@kemayo` 的 [Smart Links](https://github.com/kemayo/obsidian-smart-links) 允许用户自定义链接格式。
- 来自 `@ennioitaliano` 的 [Auto Glossary](https://github.com/ennioitaliano/obsidian-auto-glossary) 使自动创建带有索引和/或词汇的文件更加容易。
- 来自 `@KosmosisDire` 的 [Webpage HTML Export](https://github.com/KosmosisDire/obsidian-webpage-export) 允许你将 Obsidian 的笔记导出为 HTML 文档/网页/网站（你没看错）。导出的网页还内嵌交互式的暗色/亮色主题切换，以及文档大纲。

## 已上架插件的更新

如果你想了解本周的全部插件更新列表，请查看 Ganessh Kumar 的 [插件更新索引](https://obsidian-plugin-stats.vercel.app/updates) 。

- [Another Quick Switcher](https://github.com/tadashi-aikawa/obsidian-another-quick-switcher/releases/tag/7.4.0) 7.3 和 7.4 版本在搜索中改进了 frontmatter 的检索效果。
- [Divide & Conquer](https://github.com/chrisgrieser/obsidian-divide-and-conquer/releases/tag/1.0.0) 在 1.0 版本有了一个新的维护者；你现在在插件和主题界面中有了新的 UI 按钮来方便你快速找到问题插件。
- [Full Calendar 0.8.0](https://github.com/davish/obsidian-full-calendar/releases/tag/0.8.0) 增加了任务事件；你可以在事件中添加复选框，并在日历中勾选完成，它将在 front matter 更新完成的时间。
- [Colorful Tag 1.2.2](https://github.com/rien7/obsidian-colorful-tag/releases/tag/1.2.2) 支持嵌套标签，隐藏 hashtags 和标签名称。
- [Omnisearch 1.8.0](https://github.com/scambier/obsidian-omnisearch/releases/tag/1.8.0) 增加 URI 来方便你调用，以及增加了图片的 OCR。

# 功能请求

- 这是一个新的 SmartOutline 插件的 [概念视频](https://www.youtube.com/watch?v=J0EuJF2kf3E)；其想法是帮助用户快速、直观地操作他们的库，提取他们需要的东西，并对其进行组织，同时自动插入反向链接以防止丢失连接。安德鲁正在寻求社区的反馈，以帮助完善这一想法。
- 以下是 " 超级功能请求 "，即如何 [为 Obsidian 增加笔记类型系统和类似数据库的视图](https://forum.obsidian.md/t/super-fr-enhance-obsidian-with-a-type-system-for-notes-and-database-like-views-metadata/46444)

# 外观

- [Prism v3.0.0](https://github.com/damiankorcz/Prism-Theme/releases/tag/3.0.0) 完全重写了，兼容了 Obsidian 1.0.0 。你如果正在用它，请查看更新说明。
- 由 `@efemkay` 发布的 [Listive](https://github.com/efemkay/obsidian-listive-theme) 是一个新的主题，用于以大纲为中心的写作，以及具有区分度的标题。

# 教程

- 社区中的一个长达两个小时的视频教程 [Everything you need to know to use Obsidian as a Second Brain](https://www.youtube.com/watch?v=WqKluXIra70)，很多人似乎非常喜欢它。
- 这里有一个 [在黑曜石安装 AI 的步骤指南](https://uxplanet.org/installing-ai-in-obsidian-step-by-step-guide-92b47a850a21)。这里有一个 [使用它的人的展示](https://www.reddit.com/r/ObsidianMD/comments/yv3i76/using_the_gpt3_ai_writer_inside_obsidianthis_is/)。
- 这里有一个如何创建 [漂亮的主页的教程](https://github.com/faroukx/obsidian-homepage)。
- 这里是一个如何用 [黑曜石项目插件创建一个类似 Notion 的内容日历的教程](https://www.youtube.com/watch?v=ny8lksaQ5A8)。
- 这里是一个 [如何在 Obsidian 中建立一个 zettelkasten 的教程](https://mattgiaro.com/obsidian-zettelkasten/)，教程表示对于那些寻找一个组织和存储信息的系统的人来说，重点是使用反向链接而不是文件夹和标签。
- 这里是一个 [如何将 Glasp 的高亮作为卡片嵌入到笔记应用的教程](https://medium.com/glasp/how-to-embed-glasp-highlights-on-note-taking-apps-websites-23db1381901e)。
- 这里是一个如何使用 Influx 和 Strange New Worlds 插件来 [加强你的反向链接的体验的教程](https://www.youtube.com/watch?v=nDjlMBu-HSk)。

# 讨论

- Licat 和一些插件开发者讨论了如何 [为 YAML 修改提供一个稳定的 API，而不是专门针对某个插件](https://discord.com/channels/686053708261228577/840286264964022302/1040912541758541985)
- 在 pkm.social 上有一个关于 [每日笔记与主题日志](https://pkm.social/@erankatz/109331203302863544) 以及如何实现两者的讨论。

# 展示

- Andrew Roddick 在麦克马斯特大学的数字学术中心做了一个演讲—— [从 Info-Glut 到 Connected Notes: Obsidian 和学术界的数字笔记](https://scds.github.io/dmds-22-23/Obsidian.html) 。他介绍了他用于教学和文献 Review 的库。
- 终于到来的——你可以用 [黑曜石来控制智能家居](https://www.youtube.com/watch?v=UaCzRBJCdYg)；黑曜石甚至可以冲泡咖啡（译注：这个梗请参考 Emacs 的煮咖啡梗）
- 这是 [一个相当酷的图书仪表板](https://talk.macpowerusers.com/t/book-dashboard-and-notetaking-in-obsidian/31359)。

# 思考食粮

- 这篇关于 [无利可图的软件公司的泡沫正在破灭](https://world.hey.com/dhh/the-bubble-has-popped-for-unprofitable-software-companies-2a0a5f57) 的文章确实发人深省，让我庆幸的是，我的绝大多数笔记都并不依赖于特殊格式。
- 这里有一篇 [大笔记思维和小笔记思维的比较](https://www.obsidianroundup.org/one-size-fits-all-how-to-take-big-notes-and-how-to-take-small-notes/)，以及它们为何需要不同类型的插件。如果有人想写几篇一次性的文章，又不想和 Medium 或其他什么东西打交道，请告诉我，我很乐意给你建立一个贡献者账户。
- 有谁听过 [安德鲁-休伯曼的播客](https://hubermanlab.com/)？他是一个神经科学的研究者，同时在播客中有很多生产力方面的建议；我不听播客，但由一些听播客的人推荐他的这个播客节目。我很想知道其他人的想法。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

