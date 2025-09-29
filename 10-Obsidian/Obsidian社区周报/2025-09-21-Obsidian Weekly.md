---
uid: 20250924000247
title: Obsidian Weekly 2025-09-21：Obsidian v1.9.13 内测版抢先看&双面板文件管理器及引用增强
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-09-21：Obsidian v1.9.13 内测版抢先看&双面板文件管理器及引用增强
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250924000346
---

# Obsidian Weekly 2025-09-21：Obsidian v1.9.13 内测版抢先看&双面板文件管理器及引用增强

> [!Abstract]
> **统计时间**：2025-09-07 21:00 ~ 2025-09-21 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.9.13 内测版已发布！

#### 桌面版

##### 问题修复

-   提升了在使用最新的 Obsidian 1.9 安装程序（基于 Electron v35+）时，打开快速切换窗口和命令面板的性能。
-   修复了全局搜索结果数量不准确的问题。
-   **数据库**：当焦点在数据库文件上时，状态栏中的字数统计现在会被隐藏。
-   **数据库**：修复了调整表格列宽时出现的延迟问题。

#### 移动版

-   包含桌面版 v1.9.13 的所有新功能与问题修复。

##### 问题修复

-   **iPadOS 26**：修复了切换应用后屏幕显示区域异常缩小的问题。
-   **iPadOS 26**：修复了工具栏定位错误的问题。
-   **Android**：修复了在 Android 10 及以下系统上工具栏和导航栏定位错误的问题。

##### 开发者更新

-   修复了手机尺寸屏幕上 `Modal`（模态框）的默认布局，现在默认始终固定在屏幕底部。
-   修复了 `Modal` 实例上关闭按钮失效的问题。

## 插件新闻

### 社区插件
 
#### 新增

[Move Cursor On Startup](https://obsidian.md/plugins?id=move-cursor-on-startup) By _Jared Kelnhofer_

> 启动时短暂将光标右移然后左移 --> 首个打开的笔记。使 DataView 表达式自动“激活”，无需等待用户交互。

![Weekly-2025-09-21-Pasted image 20250922205706|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250922205706.png!pkmer)

[HOME key](https://obsidian.md/plugins?id=homekey-action) By _shichishima_

> 本插件提供模拟 HOME 键功能的命令，从而允许您将 HOME 键操作设置为热键。

[Notebook Navigator](https://obsidian.md/plugins?id=notebook-navigator) By _Johan Sanneblad_

> 以简洁的双面板界面替代默认文件管理器，功能包含文件夹树、标签浏览、文件预览、键盘导航、拖放操作、置顶笔记及可定制显示选项。

![Weekly-2025-09-21-Pasted image 20250922195206|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250922195206.png!pkmer)

[URL Formatter](https://obsidian.md/plugins?id=url-formatter) By _Thomas Snoeck_

> 自动将粘贴到笔记中的特定 URL 格式化为简洁的 Markdown 链接。

[QuickLink](https://obsidian.md/plugins?id=quicklink) By _Jamba Hailar_

> 使用 @ 触发字符快速创建文件链接，提供智能文件链接、自动扫描以及自定义补全规则功能。

[HTTP Link Maker](https://obsidian.md/plugins?id=http-link-maker) By _Kenneth Christensen_

> 为你的库文件生成使用 `https://` 方案的链接，该链接几乎可以在任何设备上识别并正常运行。

[Note Codes](https://obsidian.md/plugins?id=note-codes) By _Ezhik_

> 通过简单的 4 字符代码从任何位置引用您的笔记。

![Weekly-2025-09-21-Pasted image 20250922185817|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250922185817.png!pkmer)

[Tab File Path](https://obsidian.md/plugins?id=tab-file-path) By _John Burnett_

> 在标签页中显示文件路径。

![Weekly-2025-09-21-Pasted image 20250922175539|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250922175539.png!pkmer)

[NotePix](https://obsidian.md/plugins?id=notepix) By _Ayush Parkara_

> 自动将图片上传至您的公开或私有 GitHub 仓库，并将本地链接替换为对应的远程链接。

[Always Color Text](https://obsidian.md/plugins?id=always-color-text) By _Kazi Aidah Haque_

> 支持为特定词汇着色，并在全库范围内同步更新效果。

![Weekly-2025-09-14-Pasted image 20250918112849.png|650](https://cdn.pkmer.cn/images/Weekly-2025-09-14-Pasted%20image%2020250918112849.png!pkmer)

[Note Minimap](https://obsidian.md/plugins?id=minimap) By _Yair Segel_

> 在 Obsidian 编辑器窗格内添加迷你地图面板，提供整篇笔记的缩放视觉概览。

![Weekly-2025-09-21-Pasted image 20250917235949|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250917235949.png!pkmer)

[Ghost Text](https://obsidian.md/plugins?id=hidden-hyperlinks) By _lawrencefeng17_

> 将文本隐藏在显示文本后面并在单击时复制。

![Weekly-2025-09-21-ghost_text_demo|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-ghost_text_demo.gif!pkmer)

[SafeLearn Formatter](https://obsidian.md/plugins?id=safelearn-formatter) By _UnterrainerInformatik_

> 为 SafeLearn（一个开源项目）中特定的标签提供可视化辅助，例如片段、权限块，以及 Reveal.js 的并排布局。

[Custom Comments](https://obsidian.md/plugins?id=custom-comment) By _Jack Chronicle_

> 创建自定义快捷键，用于包裹注释内容。

[Papers](https://obsidian.md/plugins?id=papers) By _William Liang_

> 检索并导入科研论文。它会调用 arXiv API 下载 PDF，并将元数据直接保存到你的库中。

[Datacore](https://obsidian.md/plugins?id=datacore) By _Michael Brenan_

> Datacore 是对 [Dataview](https://github.com/blacksmithgu/obsidian-dataview.git) 的全新构想与重制，目前仍在开发中。它重点提升查询与渲染性能（快 2-10 倍），并支持完全可交互的视图。  
> 相关文档可在 [https://blacksmithgu.github.io/datacore/](https://blacksmithgu.github.io/datacore/) 查看。

![Weekly-2025-09-21-Pasted image 20250917163252|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250917163252.png!pkmer)

[Keyboard Formatter](https://obsidian.md/plugins?id=keyboard-formatter) By _Lauloque_

> 这个 Obsidian 插件允许你在笔记中选中文本，并通过你自定义的快捷键，自动将常见的键盘按键和鼠标按钮格式化为 HTML `<kbd>` 标签。这样可以在写作中以更直观且语义化的方式呈现用户输入指令。

[Paste as file link](https://obsidian.md/plugins?id=paste-as-file-link) By _Matthias Büge_

> 当存在同名文件时，将剪贴板内容以文件链接形式粘贴至现有笔记中。

![Weekly-2025-09-21-Pasted image 20250916231501|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250916231501.png!pkmer)

#### 更新

[Related Notes by Tag v0.4.3](https://github.com/chrishoward-projects/related-notes-by-tag/releases/tag/0.4.3) By _Chris Howard_

> 按笔记数（从高到低）对标签组进行排序。

[QuickAdd v2.4.0](https://github.com/chhoumann/quickadd/compare/2.3.0…2.4.0) By _Christian B.B. Houmann_

> - **错误修复**
> 	- 移除干扰 Obsidian 模态框的全局 CSS 样式
> - **功能新增**
> 	- 增加可选的链接追加模式
> - **可选链接配置**
> 	- 链接追加功能现提供三种模式。捕获和模板操作可选择：**启用（需有活动文件）**（传统行为）、**启用（无活动文件时跳过）**（容错性工作流）或**禁用**。
> 	- 这意味着不再出现“无活动文件”错误。若选择跳过模式，当无文件聚焦时 QuickAdd 将静默跳过链接追加而非中止捕获。此规则同样适用于模板及 `{{LINKCURRENT}}` 宏（当无链接目标时该宏将解析为空字符串）。

[Easy Copy v1.3.5](https://github.com/Moyf/easy-copy/releases/tag/1.3.5) By _Moy_

> - 改进了对 `title` 的处理
> - 对于自动提取文本生成 Block 链接的显示文本，现在支持自定义截取的文字数量

[Anchor Link Display Text v1.3.0](https://github.com/rca-umb/anchor-link-display-text/releases/tag/1.3.0) By _Robert C Arsenault_

> - **新增**  
> 	- 忽略嵌入式文件链接的选项（默认开启）  
> - **修复**  
> 	- 轻微性能优化

### PKMer 出品

> [!INFO] 
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Media Extended v4.0 发布！

##### 重要公告

- **许可证变更:** 插件从开源过渡到闭源模型。v3 版本仍保留 MIT 许可证。
- **破坏性变更:** 现有用户必须迁移媒体笔记；Coursera、Bilibili 及类似平台的直接嵌入功能暂时移除。

##### 新功能

- **重新设计的播放器:** 更自适应、更可靠，新增音频增益控制和音调保留选项。
- **截图剪辑工具:** 可捕获视频帧的特定区域，便于处理幻灯片或图表。
- **交互式字幕稿:** 支持加载字幕文件（.srt, .vtt, .ass），可点击跳转时间戳或选择文本复制带时间戳的引用。
- **属性系统改进:** 提升了对 Frontmatter 属性和链接哈希的可靠性。
- **WebDAV 支持:** 新增对受密码保护的 WebDAV 源的支持。
- **新手指引:** 添加了入门指南，帮助新用户快速上手。

##### 破坏性变更

- **媒体笔记迁移:** 现有笔记必须迁移以添加必需的 `mx-uid` 字段。
- **平台支持变化:** 暂时移除了对 Coursera、Bilibili 等平台的直接嵌入支持。YouTube 现使用更稳定的 iframe 集成。

##### 闭源决定说明

- 作为独立开发者，为确保持续维护和提升稳定性，致力于实现用户所要求的功能（AI 摘要、浏览器控制），Media Extended 自 v4.0 版本起将逐渐转为闭源。
- **承诺不变:** 用户数据仍存储在开放的 Markdown 和 WebVTT 格式中，离线优先，无供应商锁定，无跟踪。

详见 [Media Extended v4.0 Release](https://mx.pkmer.net/blog/v4-release)。

#### Task Genius [v9.8.14](https://github.com/Quorafind/Obsidian-Task-Genius/releases/tag/9.8.14) 版本已发布！

##### 新功能

-   **数据流：** 增强项目配置与元数据处理能力
-   **设置：** 新增重置所有设置的功能

##### 代码重构

-   **项目：** 使用 Obsidian API 优化弹出框创建过程
-    改进任务解析、日期管理和标签处理逻辑
-    将令牌正则表达式提取至集中位置
-    移除未使用的加号令牌正则表达式模式

##### 样式优化

-   **图标：** 增强复选框的悬停效果

## 外观

[**Blood Rush** Theme](https://github.com/incantatem2/Obsidian-blood-rush) By _incantatem2_

![Weekly-2025-09-21-Pasted image 20250918113329|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250918113329.png!pkmer)

> 受 insanejournal 的“Embiggen”布局启发的装饰性深色主题。

[**Vesnea Vibe** Theme](https://github.com/seavalanche/vesnea-obsidian-theme) By _Seavalanche_

![Weekly-2025-09-21-Pasted image 20250917160506|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250917160506.png!pkmer)

> 这是一款基于 Seavalanche 的 Project Sea Web 主题色彩 [Seavalanche 官网](https://seavalanche.github.io/projectseaweb/) 打造的 Obsidian 主题。

[**Retroma** Theme](https://github.com/emarpiee/Retroma) By _emarpiee_

![Weekly-2025-09-21-Pasted image 20250917154353|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250917154353.png!pkmer)

> Retroma 为您实现两全其美，其设计灵感源自经典怀旧的软件与网站界面，最终呈现的主题既彰显专业质感又不失精致格调。它是对旧日时光的致敬，带我们重温那个按钮栩栩如生、界面充满个性的年代。Retroma 成功唤醒了这份记忆，同时毫不牺牲可用性，也不会让您的屏幕变成 2006 年的 MySpace 个人主页——除非您执意要把它弄得一团糟。

[**Noctilux** Theme](https://github.com/RastGame/obsidian-Noctilux) By _RastGame_

![Weekly-2025-09-21-Pasted image 20250917154049|650](https://cdn.pkmer.cn/images/Weekly-2025-09-21-Pasted%20image%2020250917154049.png!pkmer)

> 黑暗极简主义主题。


> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
