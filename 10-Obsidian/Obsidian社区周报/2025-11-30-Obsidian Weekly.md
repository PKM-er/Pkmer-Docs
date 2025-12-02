---
uid: 20251203000834
title: Obsidian Weekly 2025-11-30：Obsidian v1.10.6 发布！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-11-30：Obsidian v1.10.6 发布
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20251203000915
---

# Obsidian Weekly 2025-11-30：Obsidian v1.10.6 发布

> [!Abstract]
> **统计时间**：2025-11-16 21:00 ~ 2025-11-30 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.10.6 公共版现已发布

#### 桌面版

##### 问题修复

- 修复属性编辑器中外部链接溢出的问题。
- 从右至左书写语言：修复点击行尾时光标定位错误的问题；同时修复了界面中的几处回归问题，包括日期输入框上日历图标的位置。
- **数据库**：修复表格视图中 Shift 点击有时创建错误选区的问题。
- **数据库**：修复公式建议被截断的问题。
- **数据库**：表格视图现在支持将单列数据（例如从 Excel 或 Google Sheets）粘贴到多个选中的行中。
- **数据库**：修复在定义等式过滤器（例如 `x 是 y`）时，筛选菜单中显示错误属性类型的问题。
- **数据库**：修复使用 Shift 点击创建选区后，表格视图对点击无响应的问题。
- **数据库**：修复拖拽重新排序时，排序菜单中的项目显示不正确的问题。
- **数据库**：修复当筛选条件包含长文本属性或长列表属性值时，筛选菜单超出屏幕的问题。
- **数据库**：修复筛选菜单中公式自动补全结果被截断的问题。
- **数据库**：修复弹出窗口中公式编辑器无法工作的问题。
- **数据库**：修复使用“+”创建新笔记时，未自动添加“具有属性”筛选器中定义的属性的问题。
- **数据库**：修复公式编辑器内存泄漏的问题。
- **白板**：修复 YouTube 嵌入内容无法加载的问题。

#### 移动版

- 包含截至 Obsidian 桌面版 v1.10.6 的所有新功能与问题修复。

## 插件新闻

### 社区插件

#### 更新

[Weread v0.15.0](https://github.com/zhaohongxuan/obsidian-weread-plugin/releases/tag/0.15.0) By _hank zhao_

> v0.15.0 版本主要实现了 **Nunjucks 模板的实时预览功能**，以及优化模板编辑体验。此版本使用新的模态窗口设计，提供三栏布局（说明 + 编辑器 + 预览），让用户能够在编辑模板时立即看到渲染效果。
> - **新功能**
> 	- 模板编辑器实时预览
> 		- **实时渲染**：在模板编辑器中实时渲染预览（300ms 防抖）
> 		- **双模式预览**：
> 		    - **Markdown 渲染模式**：使用 Obsidian 的 Markdown 渲染器展示格式化内容
> 		    - **源码模式**：显示原始渲染文本，便于调试
> 		- **即时反馈**：模板语法错误时实时显示红色错误提示
> 	- trimBlocks 自动去空白开关
> 		- 新增 **✂️ 自动去空白** 功能开关
> 		- 启用后自动移除 Nunjucks 模板标签（`{% %}`）前后的换行和空格
> 		- 生成更干净、缩进更清晰的 Markdown 代码
> 		- 设置项自动保存到插件配置
> 	- 增强的模板编辑界面
> 		- **三栏布局**：
> 		    - 左侧：Nunjucks 模板语法说明（可滚动）
> 		    - 中间：代码编辑器（支持代码高亮、多行编辑）
> 		    - 右侧：实时预览面板
> 		- **改进的 UX**：
> 		    - 清晰的面板标题和功能说明
> 		    - 平滑的样式过渡和交互反馈
> 		    - 深色主题完全适配
> - **错误修复**
> 	- 修复设置页面中模板编辑 textarea 编辑体验不佳的问题
> 	- 修复 " 打开微信读书 " 命令的重复 ID 导致只有一个命令生效的问题
> - **使用说明**
> 	- 编辑模板
> 		1. 打开 Obsidian 设置 → **Weread** 插件
> 		2. 找到 **" 笔记模板设置 "** 部分
> 		3. 点击 **" 编辑模板 "** 按钮打开新的模板编辑器
> 		4. 在中间面板编辑 Nunjucks 模板代码
> 		5. 在右侧实时预览渲染效果
> 		6. 点击 **" 保存 "** 按钮保存模板
> 	- 使用新功能
> 		- **✂️ 自动去空白**：勾选此选项后，模板标签前后的空格和换行会自动移除，生成更清晰的输出
> 		- **📝 Markdown 渲染**：勾选此选项后预览会显示格式化的 Markdown；取消勾选显示原始文本便于调试
> 	- 示例模板
> 		- 左侧面板提供完整的 Nunjucks 语法说明
> 		- 右侧预览使用《中国哲学简史》数据，包含实际的书籍元数据、高亮、书评等
> - **相关资源**
> 	- **模板文档**：[Weread Template Usage](https://github.com/zhaohongxuan/obsidian-weread-plugin/wiki/Weread-obsidian-plugin-markdown-template-usage)
> 	- **模板编辑器详解**：`docs/template-editor-window.md`
> 	- **Nunjucks 官方文档**：[Mozilla Nunjucks](https://mozilla.github.io/nunjucks/)

![Weekly-2025-11-30-Pasted image 20251202220050|650](https://cdn.pkmer.cn/images/Weekly-2025-11-30-Pasted%20image%2020251202220050.png!pkmer)

[Text Finder v0.3.0](https://github.com/nyable/obsidian-text-finder/releases/tag/0.3.0) By _hafuhafu_

> 增加了搜索历史记录相关功能。
> 1. 记录按下回车或匹配按钮时的搜索关键字
> 2. 通过方向键上或方向键下可以切换历史记录
> 3. 增加了一个命令用于显示管理历史记录
> 4. 插件设置中增加历史记录的相关设置

[Paste Reformatter v1.3.0](https://github.com/keathmilligan/obsidian-paste-reformatter/releases/tag/1.3.0) By _Keath Milligan_

> - **功能**：新增单倍行距转换器选项
> - **修复**：处理替换字符串中的特殊字符

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Task Genius 已更新至 [v9.12.2](https://github.com/taskgenius/taskgenius-plugin/releases/tag/9.12.2)

##### 新增

- **看板**：添加周期选择器及用于未匹配任务的“其他”列
- **看板**：禁止将任务拖拽至“其他”列
- **状态**：新增支持基于优先级选择的多周期状态系统
- **状态**：将多周期支持扩展至所有任务切换场景
- **日历**：添加可配置选项的自定义日历视图
- **日期**：为任务日期添加时间组件支持
- **快速捕获**：新增仅日期输入模式切换
- **快速捕获**：添加任务日期的本地日期时间支持
- **发布**：在更新日志输出中包含提交正文
- **时间解析**：改进基于表情符号的日期类型检测与时间保留
- **数据库**：增强元数据映射与前沿元数据更新
- **MCP**：新增元工具与字段筛选以减少令牌使用量

##### 错误修复

- **编辑器**：修正状态周期循环中事务过滤器的执行顺序
- 为习惯操作添加异步/等待支持并将标记参数加入状态配置
- **日历**：集成 @taskgenius/calendar 并修复日期处理
- **日历**：保留全天属性并修复上下文菜单的任务查找功能

#### Thino 已更新至 v2.8.10

##### 2.8.4~2.8.10

###### 新增

- 新增（Flow）：UI 更新，提升响应速度
- 新增（列表）：添加 Memo 选择功能，支持批量操作

###### 性能

- 性能（列表）：优化 Memo 列表渲染性能
- 性能（筛选）：添加实时 Memo 操作的快速更新方法

###### 修复

- 修复（聊天）：加载历史记录时保持滚动位置
- 修复（滚动）：恢复 Memo 列表的滚动功能
- 修复（日历）：移除日历建议的移动端平台限制
- 修复（筛选）：改进标签筛选和类型检查逻辑
- 修复（筛选）：校正筛选时长区间有效性检查逻辑
- 修复（列表）：切换到聊天视图时避免意外滚动重置
- 修复（Moments 视图）：修复样式与图标渲染问题
- 修复（虚拟列表）：解决渲染问题并提升滚动稳定性

###### 重构

- 重构（Flow）：使用基于 Hooks 的方式简化编辑器实现
- 重构（列表）：移除虚拟列表并添加选择功能
- 重构：移除虚拟列表实现并更新依赖
- 重构：优化虚拟列表性能并移除文档文件

###### 构建

- 构建：迁移至 rolldown-vite 并添加 Node polyfills

###### 样式

- 样式：提升界面响应性与滚动条体验

## 外观

[**Tech001** Theme](https://github.com/volodinroman/obsidian-tech001-theme) By _Roman Volodin_

![Weekly-2025-11-30-Pasted image 20251201205556|650](https://cdn.pkmer.cn/images/Weekly-2025-11-30-Pasted%20image%2020251201205556.png!pkmer)

> **Tech001** 是一个现代、高对比度的主题，专为开发者、技术写作者和极简主义者设计。它将谷歌最新设计系统中简洁、聚焦的美学带入 Obsidian。

[**Base16 Default Dark** Theme](https://github.com/flowing-abyss/obsidian-base16-default-dark) By _flowing-abyss_

![Weekly-2025-11-30-Pasted image 20251201205003|650](https://cdn.pkmer.cn/images/Weekly-2025-11-30-Pasted%20image%2020251201205003.png!pkmer)

> 一款基于 [Base16 Default Dark](https://github.com/chriskempson/base16) 配色方案的简洁 Obsidian 主题。

[**Planetz Roller** Theme](https://github.com/monoooki/obsidian-planetz-roller-theme) By _monoooki_

![Weekly-2025-11-30-Pasted image 20251201202505|650](https://cdn.pkmer.cn/images/Weekly-2025-11-30-Pasted%20image%2020251201202505.png!pkmer)

> **Planetz Roller** 是一款色彩丰富、色调柔和的主题，整个界面呈现扁平化的手绘风格。其名称来源于《斯普拉遁 3》中的滚筒类武器—— [_Planetz Big Swig Roller_](https://splatoonwiki.org/wiki/Planetz_Big_Swig_Roller)。

[Neo Sploosh for Obsidian](https://github.com/monoooki/obsidian-neo-sploosh-theme) By _monoooki_

![Weekly-2025-11-30-Pasted image 20251201201643|650](https://cdn.pkmer.cn/images/Weekly-2025-11-30-Pasted%20image%2020251201201643.png!pkmer)

> **Neo Sploosh** 是一款简约主题，融合冷调蓝色、柔和灰色和亮黄色点缀，营造出简洁明快的视觉感受。

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [Obsidian 插件：RSS Dashboard 在 Obsidian 中阅读 RSS 文章]( https://pkmer.cn/show/7833 )

> `RSS Dashboard` 插件可在 `Obsidian` 内部创建面板以查看 RSS 文章，除此之外，它还内置了 YouTube 以及播客播放器。自带的阅读器可抓取文章完整内容，并设置模板将其转化为 Markdown 格式。可通过文件夹和标签两套系统来管理信息源和文章。

本文内含 RSS Dashboard 插件的设置项详解，非常适合想要尝试该聚合阅读方式的新用户参考入门。

![RSS Dashboard教程-图1.png](https://forum-zh.obsidian.md/uploads/default/original/3X/3/3/3342e5c571cf2bc27a3b3a7e8a201e988e517301.png)

#### [基于 Bases 的黑胶唱片架 ](https://forum.pkmer.net/t/topic/7026)

受到 Kepano Bases 书架片段的启发，作者使用 AI 辅助撰写了这个 CSS Snippet，它可以为 bases 中的 cover 加上一个黑胶唱片动效：当你的鼠标悬浮在专辑封面上时，黑胶唱片便会滚动。

![Bases参数设置](https://cdn.pkmer.cn/original/1X/cc406a46020b651529b5a04d474912542a8fa621.webp)

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
