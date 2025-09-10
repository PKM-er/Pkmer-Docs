---
uid: 20250617014921
title: Obsidian Weekly 2025-06-15：越是躁动的季节 ，越需学习与自律
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-06-15：越是躁动的季节 ，越需学习与自律
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250617015003
---

# Obsidian Weekly 2025-06-15：越是躁动的季节 ，越需学习与自律

> [!Abstract]
> **统计时间**：2025-06-08 21:00 ~ 2025-06-15 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[Course Module Loader](https://obsidian.md/plugins?id=course-module-loader) By _Sebastian Kamilli_

> 从 URL 下载课程材料 zip 文件并解压至指定库文件夹，自动跳过已存在文件。

[OpenWords](https://obsidian.md/plugins?id=openwords) By _insile_

> **OpenWords** 是一个用于背单词和单词管理的 Obsidian 插件，与 [OpenText](https://opentext.net.cn/) 单词库配套设计，安装后插件入口是左侧工具栏上的一个按钮再加上两个绑定命令，主要功能有生成索引、背单词、默写单词、添加双链等，其中单词文件使用 OpenText 中的单词库，而背单词的核心逻辑是 SuperMemo 2 间隔重复算法。
>
> 本插件完全依赖单词文件及其属性，没有外部存储文件没有记录回答历史 (考虑中)，所以不能做一些记忆曲线拟合，单词调度看起来很简单朴素，仅依靠上次回答记录。
> 插件启动时会读取所有单词缓存，更改时会即时写入相应的单词文件并更新缓存。
> 插件没有设计过多的搜索功能，提倡使用 Obsidian 内置的搜索功能。

![Pasted image 20250617005335|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250617005335.png!pkmer)

[Pure Chat LLM](https://obsidian.md/plugins?id=pure-chat-llm) By _Justice Vellacott_

> 使用 chatGPT 将笔记变成对话。

[Vim Marker Sharpener](https://obsidian.md/plugins?id=vim-marker-sharpener) By _Artem Dvoryadkin_

> Vim 模式下的文本格式化命令。支持应用样式（粗体、斜体等）。在编辑视图下对选中文本可正确执行。

![e8edd4a9-ae19-49fa-96fb-7394cb3a1484|650](https://cdn.pkmer.cn/images/e8edd4a9-ae19-49fa-96fb-7394cb3a1484.gif!pkmer)

[Template Filename](https://obsidian.md/plugins?id=template-filename) By _Callum Alpass_

> 创建具有可模板化文件名的笔记，支持日期/时间格式、随机字符串及自定义基数编号系统。

[Yearly Glance](https://obsidian.md/plugins?id=yearly-glance) By _Moy & RavenHogWarts_

> 提供可定制的年度事件可视化总览，助您高效规划、回顾与管理全年重要日期。

![Pasted image 20250617001052|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250617001052.png!pkmer)

[Macros](https://obsidian.md/plugins?id=macros) By _James Clifford Spratt_

> 在笔记中追踪并可视化每日宏量营养素、餐食及营养摄入数据。

![Live-Search|650](https://cdn.pkmer.cn/images/Live-Search.gif!pkmer)

[NoteMover shortcut  NoteMover](https://obsidian.md/plugins?id=note-mover-shortcut) By _Lars Bücker_

> **NoteMover Shortcut 插件** 优化 Obsidian 笔记管理流程，提供以下快捷操作：
> - **移动单笔记**：将当前打开笔记快速迁移至指定目标文件夹
> - **批量迁移笔记**：根据标签自动将「收件箱」文件夹中的笔记归类至对应目标文件夹

[Timelive](https://obsidian.md/plugins?id=timelive) By _aNNiMON_

> 将日期列表变成时间线。
> 与其他时间线插件的主要区别在于 Timelive 不使用代码块。设置日期事件的格式、提供链接或代码块、添加图片或视频等操作都更加便捷。

![Pasted image 20250616234851|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250616234851.png!pkmer)

[Countdown To](https://obsidian.md/plugins?id=countdown-to) By _Gui Cattani_

> 通过可视化进度指示器追踪重要截止期限、事件节点与关键里程碑的倒计时。

![Pasted image 20250616234712|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250616234712.png!pkmer)

#### 更新

[Highlight active folder section v1.4.0](https://github.com/justanotherjurastudent/highlight-active-folder-section/releases/tag/1.4.0) By _Lukas Collier_

> - 切换或打开文件时折叠其他文件夹（可在设置中启用）
> - 重构代码

[PDF++ v0.40.30](https://github.com/RyotaUshio/obsidian-pdf-plus/releases/tag/0.40.30) By _Ryota Ushio_

> - 修复了三击文本选择的一个小问题。
> 	- **引入临时方案以缓解 Obsidian v1.9 中出现的问题。** 若此更改引发问题，可在 **设置 → PDF++ → 杂项 → 修复 Obsidian 1.9 文本选择错误** 中禁用该方案（链接：`obsidian://pdf-plus?setting=fixObsidianTextSelectionBug`）。

[Brat v1.1.7](https://github.com/TfTHacker/obsidian42-brat/releases) By _TfTHacker_

> - **功能更新**
> 	- 实现全面的按库令牌验证 ([61eae40](https://github.com/TfTHacker/obsidian42-brat/commit/61eae40396ac5eab7b9007dc98ab4020a2ab9996))
> 	- 协议处理器新增 `version` 参数支持 ([39bbd58](https://github.com/TfTHacker/obsidian42-brat/commit/39bbd5826a0db9d758589041a794ce493b215b06))
> 	- 添加全局令牌验证机制 ([597245e](https://github.com/TfTHacker/obsidian42-brat/commit/597245ed7b563fa4d8e220118b91f606d6776e56))
> - **问题修复**
> 	- 🐛 修复插件添加/更新时的 `minAppVersion` 检查逻辑 ([92eee3b](https://github.com/TfTHacker/obsidian42-brat/commit/92eee3b668851b64f641f6926d18254320e96ac0))

## 外观

[**Dashboard** Theme](https://github.com/incantatem2/Obsidian-dashboard) By _incantatem2_

![Pasted image 20250616233528|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250616233528.png!pkmer)

> 柔彩多纹主题，融合丰富色彩与图案，呈现手账风格的视觉体验。
> **仅限浅色模式。**

[**Minimalists Paradise** Theme](https://github.com/BelleBasso/MinimalistsParadise) By _Isabelle Basso_

![Pasted image 20250616232834|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250616232834.png!pkmer)

> 极简，却不失简洁。灵感源自 [AnuPpuccin](https://github.com/AnubisNekhet/AnuPpuccin) 和 [Border](https://github.com/Akifyss/obsidian-border) ，Minimalists Paradise 的主要亮点在于其卡片式布局，并可通过 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 插件进行自定义。Safari 标签页（灵感源自 [此代码片段](https://github.com/gavinmn/obsidian-theme/blob/main/safaritabs.css) ）也与您的配色相得益彰，让您时刻保持风格统一！

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

