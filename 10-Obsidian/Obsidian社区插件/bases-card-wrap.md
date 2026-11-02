---
uid: 1793625607819000
title: "Obsidian 插件：Bases Card Wrap"
tags: ["界面优化", "样式与美化", "效率工具", "obsidian插件"]
description: "Wraps long property values in Bases card views onto more lines, or clamps them to a set number of lines, for each base and view. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Card Wrap

> [!Note] 插件名片
> - 插件名称：Bases Card Wrap
> - 插件作者：theluckystrike
> - 插件说明：Wraps long property values in Bases card views onto more lines, or clamps them to a set number of lines, for each base and view. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '样式与美化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-card-wrap)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-card-wrap)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-card-wrap/master/README.md)



## 概述

Bases Card Wrap 旨在解决 Obsidian Bases 卡片视图中长文本被强制截断的问题。核心功能允许用户自定义每个属性在卡片上的显示行数，支持从 1 到 10 行的截断显示（带省略号），或在一个最大 10 行的滚动框内展示完整内容。该插件仅改变视觉呈现，不修改笔记内容或 .base 文件，且保持卡片高度一致，确保网格布局整齐。

典型场景包括管理包含长摘要或引用的数据库。例如，在“读书笔记”库中，你可以将“标题”设为 2 行显示，将“核心观点”设为 4 行截断，既保留关键信息又避免卡片过高；或者在“项目追踪”中，将“描述”设为完整显示模式，方便在卡片上直接阅读长文本而无需打开笔记。规则可针对每个视图独立设置，互不干扰。

相比论坛中常见的 CSS 代码片段，该插件提供了更精细的控制能力。CSS 片段通常只能全局修改标题样式，而 Bases Card Wrap 允许为每个视图、每个属性单独配置行数，并自动处理卡片高度对齐。此外，它支持在笔记中嵌入的 Bases 视图中生效，兼容阅读模式和实时预览模式，且规则会随文件重命名或移动自动迁移，无需手动维护。

使用前需注意，短文本属性下方可能出现空白，这是为了保持同一视图内卡片高度一致的设计结果，建议将长文本属性置于卡片末尾或隐藏不需要的属性。该插件不适合需要修改 .base 文件内部结构或添加新视图类型的用户。基础功能免费，但“库默认规则”等高级功能需通过 GitHub Sponsors 赞助解锁，且启用 Pro 功能需登录 GitHub 账号。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


