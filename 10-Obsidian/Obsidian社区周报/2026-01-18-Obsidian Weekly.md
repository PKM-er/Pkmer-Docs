---
uid: 20260122013926
title: Obsidian Weekly 2026-01-18：Obsidian v1.11.5 内测版前瞻&链接编辑增强
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-01-18：Obsidian v1.11.5 内测版前瞻&链接编辑增强
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20260122014002
---

# Obsidian Weekly 2026-01-18：Obsidian v1.11.5 内测版前瞻&链接编辑增强

> [!Abstract]
> **统计时间**：2026-01-12 21:00 ~ 2026-01-18 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.11.5 内测版已发布

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

###### 数据库

* 修复了列表属性值被过早截断的问题。
* 修复了编辑时数据基座视图底部出现多余空间的问题。
* 修复了在数据基座工具栏内编辑项目时出现额外空间的问题。

## 插件新闻

### 社区插件



#### 新增

[GoBoard](https://obsidian.md/plugins?id=goboard) By _Dmitry I. Sokolov_

> 从 Markdown 代码块渲染围棋棋谱图。

![Weekly-2026-01-18-Pasted image 20260120000310|650](https://cdn.pkmer.cn/images/Weekly-2026-01-18-Pasted%20image%2020260120000310.png!pkmer)

[Next TOC](https://obsidian.md/plugins?id=next-toc) By _RavenHogWarts_

> 浮动面板显示当前文档的阅读进度、目录和导航辅助信息。

![Weekly-2026-01-18-Pasted image 20260122013729|650](https://cdn.pkmer.cn/images/Weekly-2026-01-18-Pasted%20image%2020260122013729.png!pkmer)

[Better Link Clicker](https://obsidian.md/plugins?id=better-link-clicker) By _Eniverz_

> 将链接的点击行为更改为：单击进行编辑，按住 Ctrl 键单击进行导航。

[Edit Link Alias](https://obsidian.md/plugins?id=edit-link-alias) By _mnaoumov_

> 新增编辑链接别名命令。

![Weekly-2026-01-18-Pasted image 20260119234402|650](https://cdn.pkmer.cn/images/Weekly-2026-01-18-Pasted%20image%2020260119234402.png!pkmer)

#### 更新

[Xiaohongshu Importer v1.1.3](https://github.com/bnchiang96/xiaohongshu-importer/releases/tag/1.1.3) By _bnchiang96_

> - 新增对小红书 `explore` 网址的支持，将其转换为规范的 `discovery/item` 链接以便导入。
> - 更新了 README 文件，包含有关支持的链接格式的信息。

[OCR Extractor v1.2.0](https://github.com/jritzi/ocr-extractor/releases/tag/1.2.0) By _Johnathan Ritzi_

> - 新增对基于 Tesseract 的本地 OCR 的支持
> - 改进了架构，便于未来添加其他服务
> - 更好地处理 Mistral 服务错误
> - 改进状态处理与消息提示
> - 改进 OCR 服务文档

[Excalidraw v2.19.2](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.19.2) By _Zsolt Viczian_

> - **已修复**
> 	- 对链接自动补全功能进行了细微修复：
> 	    - 链接建议器“占用文本”的问题
> 	    - `!` 过早触发链接建议器的问题
> 	    - `[[` 现在将自动补全为 `[[]]`。注意，此功能目前在思维导图构建器中不可用。
> - **新增**
> 	- 当通过脚本商店更新持久性 Excalidraw 脚本时，它将自动重新加载，以便新脚本立即生效。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Editing Toolbar 更新至 [v3.2.7](https://github.com/PKM-er/obsidian-editing-toolbar/releases)

修复 移动端顶部有空白

## 外观

[**Aura** Theme](https://github.com/shadowash8/obsidian-aura) By _ashwinjadhav818_

![Weekly-2026-01-18-Pasted image 20260120225735|650](https://cdn.pkmer.cn/images/Weekly-2026-01-18-Pasted%20image%2020260120225735.png!pkmer)

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [Vault 交互式全景看板：笔记热力图与回忆仪表盘]( https://pkmer.cn/show/20260117172950 )

![Activities_dashboard](https://cdn.pkmer.cn/images/Activities_dashboard.gif)

包括：

#### 1.1 Activity Heatmaps 活动热力图

- GitHub 风格的热力图，分类可自定义
- 统计指标：平均值、标准差、高产日、峰度和平均间隔
	- 平均值：每日创建笔记的平均数量
	- 标准差：衡量每日产量的一致性，数值越低表示越稳定
	- 高产日：一周中最有效率的一天
	- 峰度：创作节奏，数值越小表示越稳定（好比是细水长流，还是火山喷发）
	- 平均间隔：活跃日之间的平均间隔
- 交互式趋势图表，提供周线和月线视图
- 六个月的历史数据跟踪（时间跨度可修改）

#### 1.2 Memories 回忆

- 自动检索过去相应日期的笔记
- 可配置的时间窗口（一周、一个月、三个月、六个月）
- 年度回顾，展示往年同一天的笔记
- 从多个数据源进行智能日期和时间解析

### [可视化年度日历：日记分类自动高亮，一览所有重要日子]( https://pkmer.cn/show/20260117172550 )

这是一个**年度视角的日记日历**，自动追踪指定目录的日记记录，把全年日记记录展示在一张日历视图中，可以直观地看到：

一年中，哪些日子写过日记，哪些日子被重点标记。

![年度日记日历](https://cdn.pkmer.cn/images/%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B9%B4%E5%BA%A6%E6%97%A5%E5%8E%86.png!pkmer)

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
