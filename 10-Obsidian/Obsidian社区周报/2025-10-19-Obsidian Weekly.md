---
uid: 20251021004321
title: Obsidian Weekly 2025-10-19：任务跟踪增强与 Notion 风格水平并列块
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-10-19：任务跟踪增强与 Notion 风格水平并列块
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20251021004400
---

# Obsidian Weekly 2025-10-19：任务跟踪增强与 Notion 风格水平并列块

> [!Abstract]
> **统计时间**：2025-10-12 21:00 ~ 2025-10-19 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[Tezcat](https://obsidian.md/plugins?id=tezcat) By _Max Margenot_

> Tezcat 是一款用于构建思想索引的 Obsidian 插件。它通过人工智能嵌入向量技术，在您写作时主动呈现相关内容片段与笔记，以 [记忆代理](https://www.bradleyrhodes.com/Papers/remembrance.html) 的方式增强创作记忆。搜索结果可同时呈现笔记层级与块层级（Obsidian 中的段落）内容，支持插入源链接、直接插入内容本身或打开内容来源的父级页面。
>
> 当前搜索实现提供两种模式：基础**向量搜索**与**混合搜索**——后者结合向量相似性与全文检索，在保留算法推断的同时纳入更多文本匹配结果。

[Granola Sync](https://obsidian.md/plugins?id=granola-sync) By _Tom Elliot_

> 该插件允许您将 Granola （[https://granola.ai](https://granola.ai/)） 中的笔记和成绩单直接同步到您的 Obsidian 保管库中。它从 Granola 获取文档，将它们从 ProseMirror JSON 格式转换为 Markdown，并将它们保存为 `.md` 文件。

[Chatty](https://obsidian.md/plugins?id=chatty) By _Sadnan Saquif_

> 允许您使用文本转语音收听笔记。
> 没有外部 API，只需使用浏览器的内置语音合成功能和默认系统语音。
>
>> 该插件仅在 Windows 上进行了测试。

![Weekly-2025-10-19-Pasted image 20251021002127|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251021002127.png!pkmer)

[Local RSS](https://obsidian.md/plugins?id=local-rss) By _onikun94_

> 将 RSS 提要中的文章保存为本地 Markdown 文件。

[Personal Development Plan](https://obsidian.md/plugins?id=personal-development-plan) By _Artem Korsakov_

> 一个全面的生产力 Obsidian 插件，可帮助您组织和跟踪个人/专业发展任务。

![Weekly-2025-10-19-Pasted image 20251021001148|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251021001148.png!pkmer)

[TODOseq](https://obsidian.md/plugins?id=todoseq) By _Stephen Cross_

> TODOseq（发音同 "to-do-seek"）是一款基于关键词的轻量级 Obsidian 任务追踪工具。它会在您的知识库中扫描以简单状态关键词（如 TODO、DOING、DONE）开头的任务行，并将其呈现在专属任务视图中。该工具会保留原始 Markdown 格式，且无需使用复选框语法，设计灵感源自 [Logseq Tasks](https://docs.logseq.com/#/page/tasks)。
>
> TODOseq 兼容 Logseq 任务格式，支持在 Logseq 与 Obsidian 之间实现任务管理流程的双向使用或无缝迁移。

![Weekly-2025-10-19-Pasted image 20251021000801|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251021000801.png!pkmer)

[Horizontal Blocks](https://obsidian.md/plugins?id=horizontal-blocks) By _iCodeAlchemy_

> 引入 Notion 风格的布局，并排块、可调整大小的 Markdown 块，支持完整的 Obsidian 语法，包括图像、嵌入和内部链接。

![Weekly-2025-10-19-Pasted image 20251021000535|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251021000535.png!pkmer)

[HiWords](https://obsidian.md/plugins?id=hi-words) By _Kai_

> 通过自动突出显示和翻译不熟悉的单词，在阅读时轻松增加词汇量。

![Weekly-2025-10-19-Pasted image 20251021000230|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251021000230.png!pkmer)

#### 更新

[QuickAdd v2.6.0](https://github.com/chhoumann/quickadd/releases/tag/2.6.0) By _Christian B.B.Houmann_

> **版本亮点**
> 本次是**功能丰富的重大更新**，包含强大的新功能和重要错误修复：
> - **🔀 条件宏命令** - 无需编写 JavaScript 即可为宏添加 IF/ELSE 逻辑
> - **📦 配置包导出/导入** - 支持共享包含脚本与模板的完整自动化工作流
> - **🎯 增强格式化语法** - 新增 `{{FILENAMECURRENT}}` 令牌及 `|custom` 修饰符，实现灵活输入
> - **⚙️ 改进输入验证** - 配备自动补全的实时模板路径验证
> - **🔗 优化 Obsidian 集成** - 遵循链接格式与默认位置设置
> - **🐛 重要错误修复** - 修复设置初始化、链接生成及界面显示问题
> - ……
>
> 详情可点击上方原文链接查看。

[QueryDash v2.0.3](https://github.com/liufree/obsidian-querydash/releases/tag/2.0.3) By _lwx_

> 特性：支持 MermoryCard 视图

## 外观

[**True Black** Theme](https://github.com/kraasch/true-black) By _Alex Kraasch_

![Weekly-2025-10-19-Pasted image 20251021001441|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251021001441.png!pkmer)

> 一款真正的纯黑色背景 Obsidian 主题，采用基于 Atom 深色主题的简洁合理配色方案。
> 为喜爱夜晚、愿拥抱黑暗的用户而生。
> 本主题**不包含**任何浅色版本。

[**Blur** Theme](https://github.com/Jawuj/Blur-Theme) By _Jawuj_

![Weekly-2025-10-19-Pasted image 20251021001252|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251021001252.png!pkmer)

> 带有自定义壁纸的模糊主题黑曜石。
>
>> 此主题不提供云母效果。

[**Monokai Ristretto** Theme](https://github.com/vinitkumar/monokai-ristretto-obsidian) By _Vinit Kumar_

![Weekly-2025-10-19-Pasted image 20251021000122|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251021000122.png!pkmer)

> 黑曜石的暖色深色主题，移植自 [Monokai Pro Ristretto](https://github.com/vinitkumar/monokai-pro-vim) vim 配色方案。

[**Dedication** Theme](https://github.com/modigaphemelo/Dedication-obsidian-theme) By _Phemelo Modiga_

![Weekly-2025-10-19-Pasted image 20251021000018|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251021000018.png!pkmer)

![Weekly-2025-10-19-Pasted image 20251021000036|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251021000036.png!pkmer)

[**Universitario** Theme](https://github.com/wulflo/obsidian-3Sumaq) By _wulflo_

![Weekly-2025-10-19-Pasted image 20251020235926|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020235926.png!pkmer)

> 专为色彩爱好者打造的主题。 **选择您想要的颜色和合适的亮度** ，仅此而已。

[**Minimalist Studio** Theme](https://github.com/david-troyer/obsidian-theme-minimalist-studio) By _David Troyer_

![Weekly-2025-10-19-Pasted image 20251020235246|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020235246.png!pkmer)

> 本主题致力于优化**标注**、**块引用**及列表的视觉样式，辅以细节微调实现整体美化，同时保留 Obsidian 的经典设计风格。

[**Oscura** Theme](https://github.com/vinitkumar/oscura-obsidian) By _Vinit Kumar_

![Weekly-2025-10-19-Pasted image 20251020234252|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020234252.png!pkmer)

> 黑曜石的黑暗、优雅主题，移植自 [oscura-vim](https://github.com/vinitkumar/oscura-vim) 配色方案。

[**Hidden Grotto** Theme](https://github.com/HotAndCold245/Hidden-Grotto) By _HotAndCold_

![Weekly-2025-10-19-Pasted image 20251020233234|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020233234.png!pkmer)

> 该主题主要供个人使用。底色板的灵感来自口袋妖怪 Clobbopus。

[**Desserts** Theme](https://github.com/incantatem2/Obsidian-desserts) By _incantatem2_

![Weekly-2025-10-19-Pasted image 20251020233127|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020233127.png!pkmer)

![Weekly-2025-10-19-Pasted image 20251020233131|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020233131.png!pkmer)

[**Antique Flowers** Theme](https://github.com/incantatem2/Obsidian-antique-flowers) By _incantatem2_

![Weekly-2025-10-19-Pasted image 20251020233001|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020233001.png!pkmer)

![Weekly-2025-10-19-Pasted image 20251020233036|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020233036.png!pkmer)

[**Nightly Wolf** Theme](https://github.com/codejota/NightlyWolf_ObsidianTheme) By _jotacode_

![Weekly-2025-10-19-Pasted image 20251020232924|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020232924.png!pkmer)

> 将作者另一款主题 [Nightly Wolf Theme for VS Code](https://marketplace.visualstudio.com/items?itemName=jotacode.nightly-wolf-theme) 的精髓——精炼且无干扰的编码体验——引入您的个人知识库。

[**Museifu Basic** Theme](https://github.com/account-not-relevant/museifu-basic-theme) By _NorelDev_

![Weekly-2025-10-19-Pasted image 20251020212517|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020212517.png!pkmer)

> [Museifu 主题](https://github.com/account-not-relevant/museifu-theme) 的简化版本，模块化程度较低，外观更固定。

[**Xscriptor** Theme](https://github.com/xscriptordev/obsidian) By _Xscriptor_

![Weekly-2025-10-19-Pasted image 20251020180210|650](https://cdn.pkmer.cn/images/Weekly-2025-10-19-Pasted%20image%2020251020180210.png!pkmer)

> 一款优雅的 Obsidian 主题，面向程序员与写作者，采用精美的 EB Garamond 字体排版，支持灵活自定义。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
