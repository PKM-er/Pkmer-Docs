---
uid: 20250701005637
title: Obsidian Weekly 2025-06-29：Obsidian v1.9.4 抢先看！Bases 卡片视图堂堂来袭！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-06-29：Obsidian v1.9.4 抢先看！Bases 卡片视图堂堂来袭！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250701005732
---

# Obsidian Weekly 2025-06-29：Obsidian v1.9.4 抢先看！Bases 卡片视图堂堂来袭

> [!Abstract]
> **统计时间**：2025-06-22 21:00 ~ 2025-06-29 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.9.4 内测版已发布

#### v1.9.3 桌面端

##### 功能优化

- `cssclasses`/`aliases`/`tags` 属性变更：
	- 无效值不再在 Bases 和属性编辑器中隐藏
	- 现接受字符串值作为这些属性的有效值。（如 `tags: 'my-tag'` 不再标记为无效）
	- 无效格式值（如 `tags: 'tag1, tag2'`）现会在属性编辑器中显示并标记。
	- “格式转换器（Format converter）”核心插件新增选项：自动修复无效的 `aliases`/`tags`/`cssclasses`，并迁移旧属性 `alias`/`tag`/`cssclass`
- 现可在页面预览和白板中使用属性编辑器
- 在文件标题栏右键单击文件夹时，显示文件夹的右键菜单
- 优化“未知标签页”显示，新增“关闭所有未知标签页”选项
- 页面预览：新增“在当前标签页打开预览”按钮
- 标题栏空间不足时自动截断路径（保留文件名完整）

###### Bases

- 新增“卡片（Cards）”视图布局：网格化展示文件，支持为文件设置封面图
- 新增“新建条目（New item）”工具栏按钮：自动创建符合当前视图筛选条件的文件
- 新增“排序（Sort）”工具栏菜单：支持按当前视图未显示的属性排序
- 新增“时长（duration）”类型：可用于显示日期差值（如 `note.release_date - today()`）
- 新增 `Date#relative()` ，可显示特定日期与当前时间的差值
- `date()` 现支持 `YYYYMMDD` 和 `YYYYMMDDHHmm` 时间戳格式
- 公式：修复连续除法失效的问题（如 `10 / 5 / 2`）
- 公式现支持字符串的不等式比较（如 `date > "YYYY-MM-DD"`）
- 公式：`link()` 现可用于外部链接
- 公式：修复 `hasLink()` 无法解析带子路径的链接（如 `file#heading`）
- 无限符号 ∞ 现能正确渲染
- 修复属性名大小写不一致导致的读写问题（如 `Property` vs `property`）
- Bases 现遵守“排除文件（Excluded files）”设置
- 表格：修复排序箭头方向错误的问题。
- 表格：优化了对右到左语言的支持
- 表格：改进了链接／URL／时长／日期的排序逻辑
- 表格：文件名右键菜单新增“删除文件”选项
- `group_by` 更名为 `groupBy`（为后续分组功能预留）

##### 问题修复

- 搜索：修复当“tags”属性名含大写字母时（如“Tags”）“tag:”搜索失效的问题
- PDF：修复部分文本选中后无法复制的回归问题
- 修复属性编辑器将未知属性值显示为“文本”属性的问题
- 修复了在鼠标悬停于“链接”图标时关闭标签页，链接高亮残留的问题
- 白板：修复“新建分组”默认未选中标签文本
- 深色模式下“导出为 PDF”不再引发屏幕白屏闪烁
- 优化了引用块内代码块的渲染效果

#### v1.9.3 移动端

包含截至 Obsidian 桌面端 v1.9.3 的所有新功能与问题修复。

- 图谱视图（Graph view）：拖动力学滑块不再触发侧边栏展开

#### v1.9.4 桌面端

##### 功能优化

###### Bases

- 卡片视图：视图选项新增“卡片尺寸（Card size）”滑块
- 表格：视图选项新增“行高（Card size）”选择器
- 新增 `file.embeds` 属性：返回文件内所有嵌入项列表（即 `![[file]]`）
- 布尔值现统一渲染为复选框（移除 `checkbox()` 函数）
- 所有视图格式均支持“复制到剪贴板（Copy to clipboard）”和“导出 CSV（Export CSV）”
- 新增行内图片渲染函数 `image()`

##### 问题修复

- 页面预览内操作上下文菜单时不再隐藏预览
- 修复属性显示类型与底层数据不兼容问题
- 修复“导出 PDF”仅显示第一页的问题

###### Bases

- 修复文件路径含特殊字符（如撇号）时图片属性失效的问题
- 视图菜单和筛选菜单在屏幕空间不足时支持滚动
- 修复卡片视图隐藏所有属性时的崩溃问题
- 禁用后重新启用 Bases 插件不再报错
- “新建条目”菜单在筛选器要求属性非空时自动添加属性
- 修复公式尾部多余空格导致公式静默失败的问题
- 链接现显示标题或块 ID（如果存在）
- 卡片视图：修复点击链接失效
- 优化了结果菜单布局
- 工具栏创建的文件现遵守默认存储位置设置
- `Date.relative()` 现按时间排序

#### v1.9.4 移动端

##### 功能优化

- 优化了移动端卡片布局
- 导航栏“＋”按钮现用于打开新标签页

##### 问题修复

- 音频嵌入的时间轴拖动不再触发侧边栏展开

## 插件新闻

### 社区插件

#### 新增

[Gyazo Viewer](https://obsidian.md/plugins?id=gyazo) By _Helpfeel Inc._

> 显示您的 Gyazo 截图并将它们嵌入到笔记中。

[Quartz Syncer](https://obsidian.md/plugins?id=quartz-syncer) By _Emile Bangma_

> 管理并发布您的笔记到 Quartz，这款快速、功能齐全的静态站点生成器。

[Smart Link Formatter](https://obsidian.md/plugins?id=smart-link-formatter) By _ccmdi_

> 自动将粘贴的链接格式化为带有元数据的形式，明确支持 YouTube。

[Banyan](https://obsidian.md/plugins?id=banyan) By _ratiger_

> 一个支持多标签筛选的卡片式笔记主页，轻松实现浏览、整理与访问。

![Pasted image 20250630214252|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250630214252.png!pkmer)

[Simple Banner](https://obsidian.md/plugins?id=simple-banner) By _Sandro Ducceschi_

> 通过可定制横幅视觉增强笔记显示效果。支持图标与时间／日期显示。

![Pasted image 20250630213729|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250630213729.png!pkmer)

#### 更新

[CSV Lite v1.1.0](https://github.com/LIUBINfighter/csv-lite/releases/tag/1.1.0) By _Jay Bridge_

> - **新功能亮点**
> 	- 只需在任意单元格上右键点击，即可激活全新的上下文菜单，轻松实现：
> 		- 插入列: 在当前位置的左侧或右侧快速添加新列。
> 		- 删除列: 一键删除整列数据。
> 		- 移动列: 方便地将整列向左或向右移动，调整数据布局。
> 		- (同样支持行操作) 对数据行进行插入、删除和移动。

![Pasted image 20250701004452|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250701004452.png!pkmer)

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[FadeLine](https://github.com/Vlad3Design/FadeLine) By _Vlad3Design_

> 一款增强专注力的 Obsidian 插件，旨在帮助您专注于当前行，同时保持对周围内容的关注。非常适合作家、开发者、学生以及任何重视深度专注力的人士。

![Pasted image 20250630232732|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250630232732.png!pkmer)

[MindfulDo](https://github.com/Vlad3Design/MindfulDo/) By _Vlad3Design_

> 一款宁静优雅、功能全面的 Obsidian 待办清单，助您轻松保持井然有序。

![Pasted image 20250630214541|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250630214541.png!pkmer)

[Pretty properties](https://github.com/anareaty/pretty-properties) By _anareaty_

> 提升文件顶部元数据块的视觉表现力，支持图片与色彩渲染。
> - **封面图**
> 	- 在元数据块左侧添加图片节省笔记空间（适用于书籍笔记/人物档案等），通过 `cssclasses` 调整图片形状尺寸
> - **横幅图**
> 	- 在 `banner` 属性添加链接即可为笔记添加横幅
> - **属性隐藏**
> 	- 一键隐藏指定属性，保持界面简洁
> - **彩色列表属性**
> 	- 为列表项分配专属颜色：右键点击标签块选择色彩，"none" 设为透明背景，"reset" 恢复默认（暂仅支持基础主题色）
> - **进度条**
> 	- 为数字属性添加进度条可视化

![Pasted image 20250630001502|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250630001502.png!pkmer)

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

