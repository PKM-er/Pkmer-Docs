---
uid: 20251104231814
title: Obsidian Weekly 2025-11-02：重磅！国内用户即将也可直接访问官方插件与主题市场！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-11-02：重磅！国内用户即将也可直接访问官方插件与主题市场！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20251104231951
---

# Obsidian Weekly 2025-11-02：重磅！国内用户即将也可直接访问官方插件与主题市场

> [!Abstract]
> **统计时间**：2025-10-26 21:00 ~ 2025-11-02 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.10.2 内测版已发布

#### 桌面版

##### 改进

- 重命名数据库视图后，指向该视图的链接和嵌入内容将自动更新
- 恢复在当前数据库文件获得焦点时公式中 `this` 不再返回 null 值
- 优化 " 链接与文件 " 部分的设置项结构布局
- 现可在 GitHub 被屏蔽的环境下正常访问插件与主题仓库
- 提升 macOS 触控板捏合手势在白板中的缩放响应速度

##### 问题修复

- 修复 Mermaid 图表导出 PDF 时的渲染错误
- 修复公式错误导致列表视图崩溃的问题
- 修复在元数据编辑器修改日期后，导航操作可能覆盖新文件元数据的问题
- 修复缩进列表后方未缩进文本无法正确解析的问题
- 修复编辑多行文本时可能误删相邻内容块的问题
- 尝试在可能情况下修复 YouTube 嵌入错误 153

##### 开发者更新

- 数据库视图现支持 `data-view-name` 属性（便于样式定义）
- 新增数据库视图 API：
    - `BasesView.createFileForView` 可为当前视图唤出 " 新建笔记 " 菜单
    - `BasesViewConfig.getEvaluatedFormula` 支持将配置作为公式并在当前数据库文件内求值
    - 新增 `FormulaOption`、`FileOption` 与 `FolderOption` 作为基础视图选项类型
    - `BaseOption.shouldHide` 为可选回调，支持根据其他选项动态隐藏特定选项

#### 移动版

- 包含截至 Obsidian 桌面版 v1.10.2 的所有新功能与问题修复

## 插件新闻

### 社区插件

#### 新增

[GH Links Shortener](https://obsidian.md/plugins?id=gh-links-shortener) By _David Barnett_

> 修改粘贴的 GitHub 链接，以使用简短的 GitHub 引用文本作为链接标题。

[MrDoc](https://obsidian.md/plugins?id=mrdoc) By _zmister_

> 在库和 MrDoc 之间同步文档。

[Card Viewer](https://obsidian.md/plugins?id=card-viewer) By _vsme_

> 为电影、电视剧、书籍及音乐提供带封面与元数据的卡片视图展示。

![Weekly-2025-11-02-Pasted image 20251104220547|650](https://cdn.pkmer.cn/images/Weekly-2025-11-02-Pasted%20image%2020251104220547.png!pkmer)

[Mobile Sidebar Notes](https://obsidian.md/plugins?id=mobile-sidebar-notes) By _Chris Kephart_

> 在移动端应用中，支持在侧边栏打开笔记或新建标签页。保持完整的编辑器功能，兼容包括白板在内的所有编辑器类型！

[Cliplet](https://obsidian.md/plugins?id=cliplet) By _namikaze-40p_

> 剪贴板和代码片段管理器 — 您自己的，独立于作系统剪贴板。

[Sync-safe file names](https://obsidian.md/plugins?id=sync-safe-file-names) By _j-maas_

> 本插件通过将所有不安全字符替换为连字符 `-`，帮助您将文件名统一重命名为仅包含安全字符的格式，从而确保所有文件均能在不同平台间顺利同步。

[Steward](https://obsidian.md/plugins?id=steward) By _Dang Nguyen_

> Steward 是一款利用大型语言模型与您的 Obsidian 知识库进行交互的插件。它提供 `搜索`、`移动`、`复制`、`创建` 等基础指令作为构建模块，支持您为特定任务创建复杂命令、实现提示链与自动化流程。

#### 更新

[Sidebar Highlights v1.31.0](https://github.com/trevware/obsidian-sidebar-highlights/releases/tag/1.31.0) By _trevware_

> - **新增**
> 	- **智能日期分组**：基于日期的任务智能分组系统，配备上下文标签
> 	    - 近 7 天（当天至 6 天后）：独立日期分组并标注描述性名称（今天、明天、周三等）
> 	    - 当月剩余时间：单分组显示日期范围（如 "11 月 11-30 日 "）
> 	    - 后续 4 个月：按月名分组（12 月、1 月、2 月、3 月）
> 	    - 后续年份：按年份分组（2026 年、2027 年等）
> 	    - 始终优先显示最近日期，优化任务优先级展示
> 	- **任务文本高亮**：点击侧边栏任务可在编辑器中高亮对应文本
> 	    - 提供清晰的任务点击视觉反馈
> 	    - 自动选中任务文本（不含复选框）并滚动至可视区域
> - **增强**
> 	- **简化日期分组**：移除倒序日期显示选项（始终优先显示最近日期）
> 	    - " 截止日期 " 分组选项整合替代原有的 " 截止日期↑" 与 " 截止日期↓"
> 	- **智能日期徽章显示**：根据分组类型动态控制日期徽章显隐
> 	    - 单日分组隐藏日期徽章（今天、周二等场景下日期信息冗余）
> 	    - 月/年分组显示日期徽章（12 月、2026 年等场景需保留具体日期）
> 	    - 日期徽章格式由 "MMM DD" 改为 "MM-DD"（如 "07-23"）
> 	- **分区排序**：无标题任务现优先显示在各分组顶部
> 	    - 后续按标题名称字母序排列
> - **修复**
> 	- **批量操作**：修复批量删除/添加文件时重复显示空状态消息的问题
> 	    - 为文件创建/删除/重命名事件添加 300 毫秒防抖处理
> 	    - 避免多重并发渲染导致的显示异常
> 	- **排除设置**：修复从排除列表移除目录后任务视图未更新的问题
> 	    - 排除设置变更后侧边栏自动刷新
> 	    - 新增文件夹任务无需手动刷新即可显示
> 	- **标题变更**：修复删除或修改 Markdown 标题后任务标题未同步更新的问题
> 	    - 任务变更检测机制新增标题追踪功能
> 	    - 任务上方标题修改后侧边栏自动刷新

[HTML Reader v1.0.13](https://github.com/nuthrash/obsidian-html-plugin/releases/tag/1.0.13) By _Nuthrash_

> - **新增**
> 	- 新增支持 MHTML 文件格式
> 	- 支持通过 CTRL+ 点击 在其他标签页打开库内链接
> 	- 支持使用 F5 键刷新已打开的 HTML 文件视图
> - **变更**
> 	- 更新部分视觉效果、图标及文本，以保持与当前 Obsidian 风格的统一性

[Chronos Timeline v2.0.5](https://github.com/clairefro/obsidian-plugin-chronos/releases/tag/2.0.5) By _Claire Froelich_

> 修复移动视图以防止滑动时间线时侧边栏干扰。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Task Genius 已更新至 [v9.9.5](https://github.com/Quorafind/Obsidian-Task-Genius/releases/tag/9.9.5)

##### 新增功能

- 为“repeat”添加“recurrence”的键值映射

##### 代码重构

- **编辑器**：优化日期选择器的稳定性与架构设计

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [【笔记组织方法】类目、标签以及文件夹](https://mp.weixin.qq.com/s/nfvTeSTE__7YwfcoqlvmcA)

_Moy_ 大佬对“类目、标签、文件夹”这三种结构组织方式的思考沉淀，推荐所有曾经或正在苦恼笔记分类法的小伙伴参考学习。

### [Bases 新增视图：📊统计视图](https://www.xiaohongshu.com/discovery/item/69048fd3000000000402b55a?source=webshare&xhsshare=pc_web&xsec_token=ABrVZeUyDmffmsR9SBv0Lo7HEnPPIG8DGITEX0YfP4xSg=&xsec_source=pc_share)

傻瓜级 Bases 新功能上手指南，有图表需求的小伙伴速速用起来！

![Weekly-2025-11-02-Pasted image 20251104230354|650](https://cdn.pkmer.cn/images/Weekly-2025-11-02-Pasted%20image%2020251104230354.png!pkmer)

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
