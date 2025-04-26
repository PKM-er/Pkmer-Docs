---
uid: 20250426201350
title: Obsidian Weekly 2025-04-20：官方剪藏插件高亮模式重构&自动链接与聚合笔记
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-04-20：官方剪藏插件高亮模式重构&自动链接与聚合笔记
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250426201429
---

# Obsidian Weekly 2025-04-20：官方剪藏插件高亮模式重构&自动链接与聚合笔记

> [!Abstract]
> **统计时间**：2025-04-06 21:00 ~ 2025-04-20 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian Web Clipper 已更新至 [v0.11.7](https://github.com/obsidianmd/obsidian-clipper/releases/tag/0.11.7)

- **新增**
	- 解释器供应商现从 [providers.json](https://github.com/obsidianmd/obsidian-clipper/blob/main/providers.json) 动态加载，实现更便捷的供应商更新
	- 重构高亮标注模式，采用类似文本片段 URL 的健壮格式存储标注内容，显著提升稳定性
	- 高亮模式新增「分享链接」按钮，可生成包含文本片段参数的标注分享链接
- **优化**
	- 解析引擎升级至 Defuddle 0.6.2
	- 图像筛选器现支持数组输入/输出一致性
	- 修复 ChatGPT 等特定站点的内容提取异常
	- 增强网页/图像捕获能力，优化 Gemini 对话支持

## 插件新闻

### 社区插件

#### 新增

[Data Fetcher](https://obsidian.md/plugins?id=data-fetcher) By _qf3l3k_

> 从多个来源（REST API、RPC、gRPC、GraphQL）获取数据并将结果插入到笔记中。

[Jira Issue Manager](https://obsidian.md/plugins?id=jira-sync) By _Alamion_

> 获取 Jira 问题并支持创建与更新，提供问题状态及工作日志管理功能。

[Anki Integration](https://obsidian.md/plugins?id=anki-integration) By _Noah Boos AKA Rift_

> 基于笔记内容创建闪卡，提供无缝衔接的操作界面，支持结构化元数据管理，并通过 AnkiConnect 轻松同步。

[White Noise](https://obsidian.md/plugins?id=white-noise) By _Zhou Hua_

> 播放白噪音以帮助用户更好地集中注意力。

![Pasted image 20250424004618|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424004618.png!pkmer)

[Rename File to Selection](https://obsidian.md/plugins?id=rename-file-to-selection) By _Aava_

> 将文件重命名为当前选中的文本。

[Related Notes](https://obsidian.md/plugins?id=related-notes) By _Oluwasanya Awe_

> 自动使用成熟的相似性算法分析笔记内容，以发掘库中笔记之间的连接。
> - 完全本地处理，确保数据隐私
> - 一键链接相关笔记

![Pasted image 20250423215144|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250423215144.png!pkmer)

[Browser History](https://obsidian.md/plugins?id=browser-history) By _noy4_

> 将您的浏览器历史记录同步到笔记。

![Pasted image 20250423205707|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250423205707.png!pkmer)

[Smart Vault Visualizer](https://obsidian.md/plugins?id=smart-vault-visualizer) By _Evan Moscoso_

> 可视化并管理库中的智能集群及集群组。该插件灵感来自最初专注于单个笔记可视化的 [Smart Connections Visualizer 插件](https://github.com/brianpetro/obsidian-smart-connections)，而此新版可视化器将范围扩展至你拥有的**所有集群**。

![Weekly-2025-04-20-SCv2-fold-unfold|650](https://cdn.pkmer.cn/images/Weekly-2025-04-20-SCv2-fold-unfold.gif!pkmer)

[WeWrite](https://obsidian.md/plugins?id=wewrite) By _Learner Chen_

> AI 辅助撰写、渲染并发布笔记至微信平台

#### 更新

[Excalidraw v2.10.1](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.10.1) By _Zsolt Viczian_

> - **v2.10.0**
> 	- 同步 Excalidraw.com 新增功能
> 		- 套索选择工具
> 		- 为多文本元素添加容器
> 	- 同步 Excalidraw.com 修复项
> 		- 圆角菱形边缘弯折箭头 U 型路径
> 		- 橡皮擦性能优化
> 		- 保持箭头标签水平显示
> 	- ExcalidrawAutomate 修复项
> 		- 修复 `ea.AddText` 未遵循宽度参数问题
> - **v2.10.1**
> 	- 由 Excalidraw.com 修复
> 		- 橡皮擦性能优化回退问题，修复误擦锁定元素
> 	- 新增功能
> 		- 插件设置中新增网格线自定义选项（外观与行为/网格）：支持独立控制垂直/水平网格线显示，可创建非传统棋盘式网格（如仅水平线网格）
> 	- ExcalidrawAutomate 修复项
> 		- 修复 `createSVG` 方法报错问题

[Easy Typing v5.5.12](https://github.com/Yaozhuwa/easy-typing-obsidian/releases/tag/5.5.12) By _Yaozhuwa_

> 新增功能：标题折叠回车保序：折叠标题后回车不触发展开，直接添加同级标题行。默认关闭，需要在设置中打开。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Task Genius 已更新至 [v8.2.0](https://github.com/Quorafind/Obsidian-Task-Genius/releases/tag/8.2.0)

##### V7.0.0

###### 1. 可编辑自定义任务视图

- 新增 Task Genius 高级任务管理视图
- 时间线可视化预测视图（含标签/项目/回顾视图）
- 全维度任务详情面板：
    - 状态切换与更新
    - 日期管理（截止/开始/计划时间）
    - 优先级配置

![Pasted image 20250424130854|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424130854.png!pkmer)

###### 2. 全量任务索引器

- 增强型任务索引系统提升性能
- 稳定的索引方法实现可靠追踪
- 支持持久化存储数据完整性

###### 3. 智能快速捕获模态框

- 实时为条目添加日期标记
- 结果预览功能

![Pasted image 20250424130902|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424130902.png!pkmer)

###### 4. 自定义进度条

- 全新设计支持格式定制
- 完整文本格式支持

- [x] Task Genius 7.0.0
    - [x] 支持自定义进度条格式
        - [x] 支持数学公式与重复字符生成文本进度条
    - [x] 标签页头与视图头同步支持快速捕获按钮
    - [x] 优化快速捕获模态框
    - [x] 任务视图支持
        - [x] 预测视图
        - [x] 标签视图
        - [x] 项目视图
            - [x] 项目树形组件
            - [x] 多选项目管理
        - [x] 任务回顾

##### V8.0.0

###### 核心新增

- **日历视图**：多维度任务管理
    - 年/月/周/日视图及日程视图
    - 可视化任务截止与计划时间
    - 支持日历直接快速增改任务
- **看板视图**：类 Trello 看板界面
    - 按状态分栏展示任务
    - 拖拽更改任务状态
    - 任务卡片显示关键信息与标签
    - 快速添加任务至指定状态列
- **甘特图视图**：项目进度可视化
    - 时间轴形式展示任务规划
    - 支持多级时间粒度（日/周/月/年）
    - 缩放与导航功能

以上三视图均支持点击编辑等既有功能。

###### 功能增强

- **目标追踪**：父任务进度条现可基于子任务完成状态动态更新
- **智能补全**：编辑任务时提供：
    - 项目名自动补全
    - 上下文自动补全
    - 标签自动补全
- **预测视图**：展示含计划日期的任务
- **回顾视图**：加速任务回顾流程
- **状态组件**：
    - 可视化状态选择器
    - 快速变更任务状态
- **格式支持**：完整兼容 Dataview 与 Tasks 格式（注：未检测到 Dataview 格式时自动回退至 Tasks 格式）

###### 其他优化

- 性能与稳定性提升
- 大型任务库处理优化
- 多语言翻译更新
- 现有功能优化与问题修复

###### 变更

- 预测视图与快速捕获模态框的日期修复
- 实现自定义目标进度条

##### V8.2.0

###### 新增

- 通过视图配置实现双栏自定义布局（如上下文视图）
- 更新俄语/乌克兰语翻译（由 @arhidiz1 提供）

###### 修复

- 阅读视图文本标记现严格遵循原始格式
- 修复 GitHub 工作流构建问题
- 修复任务完成时标签重复问题
- 修复标签重复生成问题

![Pasted image 20250424130959|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424130959.png!pkmer)

![Pasted image 20250424131003|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424131003.png!pkmer)

![Pasted image 20250424131008|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424131008.png!pkmer)

## 外观

[**Mono High Contrast** Theme](https://github.com/manuelcoca/obsidian-mono-high-contrast-theme) By _manuelcoca_

![Pasted image 20250425211337|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250425211337.png!pkmer)

> Obsidian 的高对比度主题，灵感来自 VS Code 的默认高对比度主题。

[**deep submerge** Theme](https://github.com/incantatem2/Obsidian-deep-submerge) By _incantatem2_

![Pasted image 20250424225526|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424225526.png!pkmer)

> 适合偏爱冷色调、柔和色彩及低对比度设计的用户。
> 一款经过优雅风格调整的暗色主题。

[**Dust** Theme](https://github.com/ph17/Dust) By _ph17_

![Pasted image 20250424223254|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424223254.png!pkmer)

> [obsidian-atom](https://github.com/kognise/obsidian-atom) 的分支版本，基于作者见解进行了部分功能调整。

[**Pomme Notes** Theme](https://github.com/MrParalloid/pomme-notes) By _Paralloid_

![Pasted image 20250424105655|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424105655.png!pkmer)

> 这是一款轻量简约主题，深度适配 macOS/iOS 系统环境。
> 通过流畅动画与嵌入式 PDF/图片的平滑渐入效果，显著提升视觉愉悦度。
> 全面支持自定义强调色，将该色彩全局应用于主题元素（包括链接、复选框及 Iconize 插件的默认配色）。

[**parfait** Theme](https://github.com/incantatem2/Obsidian-parfait) By _incantatem2_

![Pasted image 20250424105537|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424105537.png!pkmer)

[**cocoa** Theme](https://github.com/incantatem2/Obsidian-cocoa) By _incantatem2_

![Pasted image 20250424105233|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424105233.png!pkmer)

> 格式设置：与作者的 aged whisky 主题类似，在阅读模式下编辑器内容左对齐。
> 此二主题仅在标签页和标签处使用固定字体，可适配您选择的任意字体。

[**Neumorphism** Theme](https://github.com/LennZone/Neumorphism) By _LennZone_

![Pasted image 20250424011735|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250424011735.png!pkmer)

> 为笔记体验注入现代触感的新拟态设计。该主题通过柔和的阴影与细腻的高光，打造兼具视觉吸引力与实用性的极简美学工作空间。
