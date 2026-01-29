---
uid: 20260128010655
title: Obsidian Weekly 2026-01-25：Obsidian v1.11.5 正式发布&RSS 订阅与目标追踪
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-01-25：Obsidian v1.11.5 正式发布&RSS 订阅与目标追踪
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20260128011408
---

# Obsidian Weekly 2026-01-25：Obsidian v1.11.5 正式发布&RSS 订阅与目标追踪

> [!Abstract]
> **统计时间**：2026-01-18 21:00 ~ 2026-01-25 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.11.5 公共版现已发布

#### 桌面端

##### 已改进

* **钥匙串存储**现在已启用静态加密。
* **每日笔记**：文件夹路径现已标准化。
* **每日笔记**：如果你之前使用了“启动时打开每日笔记”选项，系统将自动迁移以使用新的“文件与链接 › 默认打开的文件”设置。

##### 已修复

* 修复了当配置的文件路径省略文件扩展名时，**默认打开的文件**设置无效的问题。
* 修复了当路径以开头 `/` 或使用 `\` 作为路径分隔符时，每日笔记无法打开的问题。
* 恢复了在链接文本中包含文件夹时插入链接的默认显示文本（例如，`[[a/b/file]]` 将自动插入为 `[[a/b/file|file]]`）。

##### 开发者相关

* CSS 变量 `--blur-translucency-s` 和 `--blur-translucency-m` 已重命名为 `--blur-opacity-s` 和 `--blur-opacity-m`。

#### 移动端

##### 已改进

* 改进了钥匙串设置的布局。
* 禁用了密钥 ID 输入框的自动首字母大写功能。
* 为显示属性名称增加了更多空间。
* **Android**：由于旧硬件的性能限制，侧边栏现在恢复使用旧的滑出叠加效果。

##### 已修复

* **Android**：修复了在没有 Google Play 服务的设备上无法打开应用的问题。
* 修复了标签页切换器未更新以反映当前活动标签页的问题。
* 修复了在某些旧设备上标题栏按钮和工具栏位置不正确的问题。
* 修复了在库中重命名文件后，右侧边栏中的文件名会显示错误文本的问题。

##### 数据基座

* 修复了列表属性值被过早截断的问题。
* 修复了编辑时数据基座视图底部出现多余空间的问题。
* 修复了在数据基座工具栏内编辑项目时出现额外空间的问题。

## 插件新闻

### 社区插件



#### 新增

[AI Transcriber](https://obsidian.md/plugins?id=ai-transcriber) By _Musashino Software_

> 使用 OpenAI GPT-4o 和 Whisper API 的 AI 语音转文本转录。

[Workout Planner](https://obsidian.md/plugins?id=workout-planner) By _Rares Spatariu_

> 利用交互式图表和高级搜索功能可视化训练数据。此插件能将您的训练日志文件转换为精美的可视化图表，并提供工具来跟踪您长期的健身进度。

[Colorful Note Background](https://obsidian.md/plugins?id=colorful-note-background) By _andresgongora_

> 根据文件位置或前置元数据设置笔记背景。

![Weekly-2026-01-25-preview 1|650](https://cdn.pkmer.cn/images/Weekly-2026-01-25-preview%201.gif!pkmer)

[My SVGs](https://obsidian.md/plugins?id=my-svgs) By _Omar Badawy_

> 将您自定义的 SVG 图标注册到全局图标库，以便其他插件调用或按需自由使用。

[Easy Tracker](https://obsidian.md/plugins?id=easy-tracker) By _Hunter Ji_

> 在单个笔记中极简追踪目标或习惯，每天一键打卡，无需复杂系统。
> 只需插入预设模块，即可在任意笔记中开始记录进展。无需搭建体系，所有功能一条命令即可集成，支持自由增删模块。

![Weekly-2026-01-25-Pasted image 20260127213337|650](https://cdn.pkmer.cn/images/Weekly-2026-01-25-Pasted%20image%2020260127213337.png!pkmer)

[Japanese Manuscript Counter](https://obsidian.md/plugins?id=japanese-manuscript-counter) By _Yo Fujii_

> 实时显示 400 字稿纸上的日文字符数及其对应的字数。计数准确，已考虑换行符、段落和字符分隔符。

[Connections](https://obsidian.md/plugins?id=connections) By _Eric Van Cleve_

> 定义并查看笔记之间的命名连接 。

![Weekly-2026-01-25-017ec634-5a28-4486-abbb-ade1f80fc9f7|650](https://cdn.pkmer.cn/images/Weekly-2026-01-25-017ec634-5a28-4486-abbb-ade1f80fc9f7.gif!pkmer)

[YOLO](https://obsidian.md/plugins?id=yolo) By _Lapis0x0_

> 智能、响应迅速且支持多语言的 AI 助手。
> _本周正式上线官方插件市场，可参照作者文章 [[YOLO——可能是目前最棒的 Obsidian AI 插件？]] 进一步了解。_

[RSS Dashboard](https://obsidian.md/plugins?id=rss-dashboard) By _Aditya Amatya_

> 一个用于组织和使用 RSS 订阅源、YouTube 频道与播客的控制面板，具备智能标签、媒体播放和无缝内容流功能。

![Weekly-2026-01-25-Pasted image 20260126224342|650](https://cdn.pkmer.cn/images/Weekly-2026-01-25-Pasted%20image%2020260126224342.png!pkmer)

#### 更新

[Substitutions v0.5.0](https://github.com/BambusControl/obsidian-substitutions/releases/tag/0.5.0) By _BambusControl_

> 现在你可以使用正则表达式，通过高级模式而非纯文本片段来定义更智能的替换规则。
> 同时修复了通过命令添加替换时，保存数据行为异常的问题。
> - 修复：通过模态窗口创建的新替换记录不再消失。
> - 正则表达式与版本化保存数据

[Startpage v0.3.4](https://github.com/kuzzh/obsidian-startpage/releases/tag/0.3.4) By _kuzzh_

> 为置顶笔记和最近笔记添加可自定义样式…

[Auto Keyword Linker v3.1.0](https://github.com/danrhodes/AutoKeywordLinker/releases/tag/3.1.0) By _Daniel Rhodes_

> - 引入了简化的“快速添加关键词”模态窗口，支持从选中文本快速添加关键词，并集成了笔记搜索与创建功能。新增编辑器右键菜单选项，用于快速添加关键词和直接访问设置。
> - 更新了设置标签页，使其能滚动至并高亮显示新添加的关键词，并为模态窗口和高亮动画添加了相关样式。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Floating TOC 更新至 [v2.7.1](https://github.com/PKM-er/obsidian-floating-toc-plugin/releases/tag/2.7.1)

- 消除抖动，增加拖拽标题排序
- 增加可以拖拽大纲
- 增加当钉住目录的时候笔记是否偏移选项

## 外观

[**FlatCap** Theme](https://github.com/cheycron/flatcap-obsidian) By _cheycron_

> 一套专为应用程序界面、代码编辑器和数据密集型仪表板打造的设计体系与色彩方案。其灵感源自 **Nord 主题**，秉承平静、简洁的美学原则，采用柔和的低饱和度色调，旨在缓解长时间编码或管理工作带来的视觉疲劳。

[**Qlean** Theme](https://github.com/froq0/Qlean) By _froq0_

![Weekly-2026-01-25-Pasted image 20260128000437|650](https://cdn.pkmer.cn/images/Weekly-2026-01-25-Pasted%20image%2020260128000437.png!pkmer)

[**Obsidian Boom** Theme](https://github.com/sainadhx/obsidian-boom) By _sainadhx_

![Weekly-2026-01-25-Pasted image 20260128000009|650](https://cdn.pkmer.cn/images/Weekly-2026-01-25-Pasted%20image%2020260128000009.png!pkmer)

> 灵感来源于 Roam Research。
> _仅支持浅色主题。_

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [数据库文档暂译01-数据库简介](https://forum.pkmer.net/t/topic/7244)

数据库文档非官方翻译，此链接为系列首篇，欢迎对数据库用法有所疑惑的小伙伴按需食用。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
