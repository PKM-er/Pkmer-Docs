---
uid: 20250722013153
title: Obsidian Weekly 2025-07-20：Obsidian v1.9.6 内测版已发布！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-07-20：Obsidian v1.9.6 内测版已发布！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250722013232
---

# Obsidian Weekly 2025-07-20：Obsidian v1.9.6 内测版已发布

> [!Abstract]
> **统计时间**：2025-07-13 21:00 ~ 2025-07-20 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.9.6 内测版已发布

#### v1.9.5 桌面端

##### 新增亮点

- Bases 新增公式编辑器，支持语法高亮、自动补全，并显示当前表达式文档说明

##### 改进

- " 下载当前文件附件 " 命令现同时下载笔记正文和文件属性中的附件
- 白板：可为嵌入的 Base 固定特定视图（右键点击选择「固定视图…」）
- 优化 Markdown 解析器处理大型表格和标注的性能（加载耗时略有增加，但渲染瞬时完成）

###### Bases

- 历史记录前进/后退时自动恢复滚动位置
- 卡片视图现支持无属性卡片显示（适用于仅需展示封面图时）
- 公式属性和文件属性中的日期时间现按操作系统区域设置显示
- 非交互属性（公式属性/卡片视图属性）的复选框取消悬停效果
- 新增命令：「Bases: 添加条目」「Bases: 添加视图」
- 表格标题右键菜单新增「编辑公式…」
- 表格标题右键菜单新增「清除排序」

###### 函数

- **重大变更**：移除 `String#icon()`，改用全局函数 `icon()`
- 新增 `List#filter` 和 `List#map` 函数
- `file.links` 现包含嵌入内容
- `link()` 现支持非 HTTP 协议 URL
- 新增 `date == datetime` 支持。比较日期和日期时间时，时间部分将被忽略。

##### 问题修复

- 属性现在行内嵌入（`![[文件]]`）中隐藏
- 修复点击 MathJax 块（`$数学公式$`）时内部高亮错误选项问题
- 图谱视图：应用已保存的筛选器时不再出现节点闪烁
- 修复 Base 进入视图时未更新问题（如移动画布卡片时）
- 表格排序现保持稳定（编辑属性后行序不再异常变动）
- 修复高行距下的表格样式异常
- 修复清空输入框时日期/时间属性未保存问题

#### v1.9.5 移动版

包含桌面版 v1.9.5 所有新功能与问题修复

##### 问题修复

- iOS：长按实时预览链接现可唤出上下文菜单
- Android：返回键退出应用改为最小化（非强制关闭）

#### v1.9.6 桌面版

##### 问题修复

- 修复日期与字符串比较异常（如 `date > "2025-07-18"`）
- 修复公式逻辑运算符失效问题（`a && b`）
- 优化无效公式检测机制
- 筛选器菜单查询生成器现正确更新运算符
- 公式编辑器布局优化：增加初始高度，添加无效公式状态提示
- 修复含空格 URL 的 `link()` 失效问题
- 属性菜单现同时筛选显示名称与属性名
- 修复图片属性偶发不显示选定值问题
- 修复历史记录返回时卡片视图滚动位置错误
- 修复含空格属性的筛选菜单输入类型显示错误

#### v1.9.6 移动版

包含桌面版 v1.9.6 所有新功能与问题修复

##### 改进

- 平板设备：连接外接键盘时自动聚焦搜索框

##### 问题修复

- 优化源码模式的「跟随链接」提示框：打开链接更稳定，显隐逻辑更一致
- 修复卡片视图外部链接失效问题
- 修复小屏设备不显示结果计数问题
- 修复卡片尺寸设置未生效问题
- Android：修复编辑器未聚焦时实时预览链接打开失效问题

## 插件新闻

### 社区插件

#### 新增

[Object Oriented Thinking](https://obsidian.md/plugins?id=object-oriented-thinking) By _Tiago Jacinto_

> 为笔记添加类似继承的行为。

[Food Tracker](https://obsidian.md/plugins?id=food-tracker) By _Forketyfork_

> 跟踪你的食物摄入量（卡路里、常量营养素）和营养信息

![Pasted image 20250721183705|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250721183705.png!pkmer)

[deepseek-ai-assistant](https://obsidian.md/plugins?id=deepseek-ai-assistant) By _algernon_

> 在 Obsidian 中方便地向 Deepseek AI 问问题。
> 另外，本插件能够统计并显示近三个月每天你提出的问题，方便你回顾。

![plugin_example|650](https://cdn.pkmer.cn/images/plugin_example.gif)

[Blueprint Renderer](https://obsidian.md/plugins?id=blueprint-renderer) By _goderyu_

> 使用 BlueprintUE 渲染引擎将虚幻引擎蓝图节点渲染为交互式可视化图表

![18d5a653-911f-4e96-87ef-e6c1d2a4bb71|650](https://cdn.pkmer.cn/images/18d5a653-911f-4e96-87ef-e6c1d2a4bb71.gif!pkmer)

#### 更新

[Excalidraw v2.13.2](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.13.2) By _Zsolt Viczian_

> - **新增**
> 	- Excalidraw 现已完整支持从 Bases 拖放 Obsidian 链接
> 	- ExcalidrawAutomate 公开新类：`FloatingModal`（基于 Obsidian.Modal 修改，支持屏幕拖动且不遮挡背景，可创建行为类似 Obsidian 模态框但更灵活的自定义对话框）

[Sidebar Highlights v1.17.0](https://github.com/trevware/obsidian-sidebar-highlights/releases/tag/1.17.0) By _trevware_

> - 新增 HTML 高亮支持并修复脚注定位问题 (1.17.0)
> 	- 支持 HTML 高亮语法：`<font color>`, `<span style="background">`, `<mark>`
> 	- 支持十六进制颜色、命名颜色及不区分大小写匹配
> 	- HTML 高亮默认使用背景色显示，若仅指定字体颜色则采用字体颜色
> 	- HTML 高亮为只读（无颜色选择器），类同原生注释
> 	- 在搜索与筛选功能中包含 HTML 高亮

[About Blank v1.2.0](https://github.com/Ai-Jani/about-blank/releases/tag/1.2.0) By _Ai-Jani_

> - **功能**
> 	- 新增外观设置：支持垂直居中选项
> 	- 默认隐藏「清理设置」选项
> 	- 修改「在空白文件视图（新标签页）添加操作项」设置时发送通知
> 	- 图标建议器中显示已设为占位符的图标名称
> - **修复**
> 	- 修复拼写错误（集成 cspell）

## 外观

[**RedShift: OLED Blue Light Filter** Theme](https://github.com/norderan/RedShift-obsidian-theme) By _Yazan Abu Queider_

![Pasted image 20250721183240|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250721183240.png!pkmer)

> 无蓝光夜间主题，助您睡眠更佳（适用于 OLED 屏幕）
