---
uid: 20250610003642
title: Obsidian Weekly 2025-06-08：Obsidian v1.9.2 内测版已发布！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-06-08：Obsidian v1.9.2 内测版已发布！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250610003723
---

# Obsidian Weekly 2025-06-08：Obsidian v1.9.2 内测版已发布！

> [!Abstract]
> **统计时间**：2025-06-01 21:00 ~ 2025-06-08 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.9.2 内测版已发布！

#### 重大变更

本次更新对 Bases 插件进行重大语法重构，公式语法与文件格式全面升级以实现更强大的表达能力。

##### 全新公式语法

新语法更灵活易用且具备高度可扩展性（类 JavaScript 风格），完整函数说明见 [文档](https://help.obsidian.md/bases/functions)：

- **面向对象函数**：
  `contains(file.name, "Books")` → `file.name.contains("Books")`
- **链式调用**：
  `property.split(' ').sort()[0].lower()`
- **属性引用简化**：
  特殊属性名改用 `note["属性名"]` 格式（不再需反引号）
- **类型系统增强**：
  新增 `link` / `date` / `list` 类型转换函数
- **文件属性扩展**：
  `file.path`、`file.links`（文件内链列表）、`file.tags`（含 Frontmatter 的标签列表）
- **运算符替代函数**：
  `dateBefore(date1, date2)` → `date1 < date2`
- **日期运算优化**：
  `dateModify(date, string)` → `date + "1 year"`

迁移指南详见 [论坛](https://forum.obsidian.md/t/bases-migration-quick-start-guide/101571)。

##### 文件格式升级

`.base` 文件格式重构增强扩展性：

- 新增 `properties` 区块集中管理属性配置（如 `displayName`）
- 完整语法参考 [文档](https://help.obsidian.md/bases/syntax)

> **同步提示**：多设备用户请同时升级，避免语法差异导致同步冲突

#### 功能优化

- Bases 视图显示当前结果数量
- Bases 过滤器运算符下拉框支持搜索
- Bases 表格长文本选中时自动展开全文

#### 问题修复

- 标签视图：修复嵌套标签显示全名问题（如 `#parent/child`）
- 文件管理器：右键菜单恢复「移动文件夹」选项
- Bases：修复删除文件后视图未关闭问题
- Bases：修复启用「Tab 缩进」时代码块渲染异常

## 插件新闻

### 社区插件

#### 新增

[Note Sync](https://obsidian.md/plugins?id=note-sync) By _ZigHolding_

>在库间同步笔记或插件。

[Book Smith](https://obsidian.md/plugins?id=book-smith) By _Yeban_

>Book Smith 是一个专为 Obsidian 设计的写作管理插件。它能帮助作者更好地组织和管理他们的写作项目。

![Pasted image 20250609230301|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250609230301.png!pkmer)

[Notemd](https://obsidian.md/plugins?id=notemd) By _Jacob_

> 通过与各种大型语言模型 (LLM) 集成来处理您的笔记、自动​​生成关键概念的 wiki 链接、创建相应的概念笔记、执行网络研究等，从而增强您的 Obsidian 工作流。

[YAML Table](https://obsidian.md/plugins?id=yaml-table) By _dainakai_

>将 YAML 代码块转换为 HTML 表格，以实现更好的可视化。

[Daily Task Auto Generator](https://obsidian.md/plugins?id=daily-task-auto-generator) By _maigamo_

>在 windows 上自动生成每日任务。

![Daily Task Auto Generator-windows|650](https://cdn.pkmer.cn/images/Daily%20Task%20Auto%20Generator-windows.gif!pkmer)

#### 更新

[HiNote v0.4.0](https://github.com/CatMuse/HiNote/releases/tag/0.4.0) By _Kai_

> _重要提示 ：如有重要的数据请先做好 data. json 文件的备份，此版本进行了功能的重构，可能会影响插件原有数据_
> - 【HiCard】重构闪卡功能，现在根据创建的学习分组来管理卡片；
> - 【HiCard】闪卡的更新和删除与高亮卡片保持同步
> - 【HiCard】挖空支持，高亮内容中包含 {{符号}} ，则会转换成挖空卡片
> - 【HiCard】增加热力图学习统计
> - 【HiCard】增加从高亮卡片批量创建闪卡
> - 【HiCard】直接使用 ts-fsrs 5.0 依赖库
> - 高亮卡片增加框选功能，可对卡片批量导出和创建闪卡
> - 高亮卡片支持解析双向链接
> - 高亮卡片增加复制高亮功能
> - 导出为图片支持显示批注内容
> - 优化主视图下不再依赖必须有激活文档才能正确获取全部高亮
> - 优化模糊匹配规则，解决高亮与批注匹配错误问题
> - 优化设置菜单加载速度慢的问题
> - 优化设置菜单自定义表达式功能，现在可以逐条添加自定义规则
> - 修复高亮中包含换行时无法提取的问题

[Csv Lite v1.0.2](https://github.com/LIUBINfighter/csv-lite/releases/tag/1.0.2) By _Jay Bridge_

> - 本次更新专注于大幅提升宽大 CSV 文件（多列）的处理性能，并包含多项可用性改进。
> 	- **修复**: 优化了超长、超宽 CSV 文件的性能，确保滚动时如丝般顺滑。
> 	- **功能**: 新增当前行列序号和高亮功能，便于追踪数据，告别看错。
> 	- **功能**: 加入全局搜索，可快速查找并定位到任意单元格。
> - **后续计划**
> 	- 探索工具栏的 UI/UX 优化方案，以改善其日渐拥挤的布局。
> 	- 启动移动端适配的开发工作流。

[Any Block v3.3.1](https://github.com/any-block/any-block/releases/tag/3.3.1) By _LincZero_

> - **破坏性修改**
>     - 处理器列表命令 `info` 与 `callout info` 冲突，更名为 `info_converter`
>     - 横向滚动正则优化：`/^scroll(\((\d+)\))?(T)?$/` -> `/^scroll(X)?(\((\d+)\))?$/`
> - **功能**
>     - 使用新处理器 mdit2code 解决 markdown-it-container 嵌套问题的案例
> - **增强**
>     - mdit2code 会处理 @ 符为 h1
>     - 不再使用 markdown 方式渲染 dir/dt 处理器的文件名 (因为 `01. 文件名` 这样的文件名会变成块元素: 列表)
> - **修复**
>     - `listtable|fold` 的特殊组合失效 (上版本修改引起)
>     - dir/dt 处理器的文件夹名后面有空格时，尾 `/` 无法被正常识别
>     - `2table|width` 的组合，后者失效 (无法识别到 ab 转换过来的表格) [#161](https://github.com/any-block/any-block/issues/161)
>     - `callout __` 处理器的 `+-` 符识别存在问题
>     - fix activityDiagram [@J0HN50N133](https://github.com/J0HN50N133)
>     - 上版本新增的刷新增强功能失效
> - **样式**
>     - tabs 处理器的悬浮光标
> - **重构**
>     - 重构了 cm 装饰集部分代码，**光标进出 anyblock 块时，减少了重渲染部分，提升了性能**
>     - 优化了 mermaid 的依赖，减少了非 min 版的插件体积
>     - 新的处理器组别: 代码文本类
>     - 重构 app/markdown-it 版的 markdown-it-container 选择器
>         - 使用黑白名单机制
>         - 允许嵌套

[Advanced Progress Bars v1.1.1](https://github.com/cactuzhead/Advanced-Progress-Bars/releases/tag/1.1.1) By _cactuzhead_

> - **新功能**
> 	- 新增 Unicode 支持，修复非英语语言标签跟踪失效问题，现全面支持：é, ñ, ü, ç 等特殊字符，以及拉丁文、希腊文、西里尔文、希伯来文、阿拉伯文、印地文、日文、中文等全球语言文字，包含表情符号。
> - **文档更新**
> 	- 任务页面新增 Unicode 标签说明，详解多语言支持机制。

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Animated Cursor](https://github.com/kotaindah55/animated-cursor) By _kotaindah55_

> 为光标添加简洁流畅的移动动画。灵感源自 Microsoft Office 和 VSCode 的平滑光标效果。

## PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

### Task Genius 已更新至 [v8.10.1](https://github.com/Quorafind/Obsidian-Task-Genius/releases/tag/8.10.1)

#### 闪亮新功能

##### 行内任务编辑器

- **行内编辑器**：你可以点击任务的元数据进行编辑，也可以编辑任务内容。

详见：[内联编辑器](https://taskgenius.md/docs/task-view/inline-editor)

#### 功能

- **拖放操作**：日历视图支持基本的拖放功能。

#### 改进

- **表格视图性能**：在任务较多的情况下，提升了 [表格视图](https://taskgenius.md/docs/task-view/table-view) 的性能。
- **优先级和日期选择器**：现在 [优先级选择器](https://taskgenius.md/docs/date-priority) 和 [日期选择器](https://taskgenius.md/docs/date-priority#date-picker) 更加稳定。

#### 修复

- **表格视图内存泄漏**：修复了 [表格视图](https://taskgenius.md/docs/task-view/table-view) 中的内存泄漏问题。
- **CJK 标签**：生成重复任务时的 CJK 标签重复问题。
- **内联编辑器**：使用内联编辑器编辑内容时，blur 事件未正确触发的问题。
- **样式冲突**：影响 Obsidian 默认 CSS 的问题。

### [Bases Toolbox](https://bases-toolbox.boninall.com/#dataview-converter) 已更新至 v0.2.0

- 支持 Obsidian 1.9.2。
- 新增 **Bases Updater** 视图以支持从 1.9.0 升级到 1.9.2 的迁移。

![Pasted image 20250609235845|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250609235845.png!pkmer)

### Thino 已更新至 [v2.7.14](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.7.14)

- **功能**：支持自定义分享 Thino 图片的背景，自定义字体以及字号

## 外观

[**Duality** Theme](https://github.com/CascadeThemes/Duality) By _Duality_

![Pasted image 20250609213545|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250609213545.png!pkmer)

> 它的明暗双模式契合你创作过程的起伏，让你在神圣国度的灵光乍现与哥特幽界的原始张力之间自由切换。
