---
uid: 1793625607840000
title: "Obsidian 插件：Bases Manual Order"
tags: ["表格", "搜索与排序", "数据处理", "obsidian插件"]
description: "Drag rows into a lasting order stored in a numeric note property. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Manual Order

> [!Note] 插件名片
> - 插件名称：Bases Manual Order
> - 插件作者：theluckystrike
> - 插件说明：Drag rows into a lasting order stored in a numeric note property. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '搜索与排序', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-manual-order)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-manual-order)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-manual-order/master/README.md)



## 概述

Bases Manual Order 为 Obsidian 的 Bases 视图提供了手动排序功能，允许用户通过拖拽行手柄或点击移动按钮，将笔记按照个人意愿进行排列。该插件将排序结果以数字形式直接写入笔记的属性中，而非依赖日期或标题等自动字段。这种机制解决了在写作队列、阅读列表或项目管理中，需要表达主观优先级或特定逻辑顺序，而常规排序方式无法准确呈现的问题。

典型场景包括管理写作任务或规划阅读顺序。例如，在整理章节草稿时，你可以将“研究笔记”拖拽到“初稿”之前，以明确先调研后写作的流程；或者在维护阅读清单时，将即将阅读的书籍排在最前。无论是表格布局还是紧凑列表布局，操作都直观简单，且支持键盘和触摸屏操作，方便在不同设备上调整顺序。

相比其他排序插件，其核心特色在于排序数据持久化存储在笔记属性中，且严格遵循 Bases 的分组逻辑。拖拽操作仅限于当前分组内，不会意外改变笔记的状态或项目属性，确保了数据的安全性。此外，它提供了免费的表格和列表两种布局，且核心排序功能无行数限制。Pro 版本则允许为不同视图设置独立的排序属性，实现多队列并行管理，但基础功能已足够满足大多数单队列需求。

使用前需注意，该插件仅适用于 Markdown 笔记，附件无法排序。由于排序涉及修改笔记的 frontmatter，Obsidian 可能会重新序列化 YAML 格式，导致注释或排版微调，但笔记正文内容保持不变。它不具备看板功能，不能移动卡片或编辑状态属性，也不提供撤销历史，建议依赖常规备份。若需同时管理多个独立排序队列，需购买 Pro 版本；若仅用于单一队列排序，免费版即可完全胜任。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


