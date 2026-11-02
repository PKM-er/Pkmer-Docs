---
uid: 1793625622131001
title: "Obsidian 插件：Task search"
tags: ["任务管理", "搜索与排序", "效率工具", "obsidian插件"]
description: "Lists tasks from notes whose properties match a query, grouped by frontmatter title, with live filters by text, tag and task status. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Task search

> [!Note] 插件名片
> - 插件名称：Task search
> - 插件作者：Laszlo Sarandi
> - 插件说明：Lists tasks from notes whose properties match a query, grouped by frontmatter title, with live filters by text, tag and task status. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '搜索与排序', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sarandil/obsidian-tasksearch)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-search)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sarandil/obsidian-tasksearch/master/README.md)



## 概述

Task search 插件旨在解决跨笔记任务分散、难以统一查看的问题。它通过解析笔记的属性（Properties）来匹配查询条件，将符合条件的笔记中的任务汇总到当前笔记中。与直接按文件名分组不同，该插件依据笔记 Frontmatter 中的 `title` 字段进行分组展示，使任务列表更具语义化。此外，它支持实时过滤，允许用户根据文本、标签及任务状态动态筛选结果，并支持在汇总视图中直接更新任务状态，变更会同步写回源笔记。

典型使用场景包括项目进度追踪与特定客户任务梳理。例如，你可以创建一个“客户 X 待办”笔记，在代码块中设置 `query: client-x` 和 `source: Work/`，即可自动列出工作文件夹下所有关联该客户的未完成任务。另一个场景是全局任务看板，通过设置 `status: todo, question`，你可以快速掌握整个库中所有待办和疑问状态的任务，无需逐个打开笔记检查。

相比同类任务管理插件，Task search 的核心特色在于其基于属性（Properties）的精准检索能力。它允许用户指定搜索哪些属性字段（如 `project` 或 `client`），而非仅依赖全文搜索，这提高了匹配的准确性。同时，它提供了丰富的交互细节，如右键菜单可设置多种任务状态（包括重要、星标等），且支持嵌套任务的缩进显示。所有操作均基于本地元数据缓存运行，无网络请求，确保了数据隐私与响应速度。

使用前需注意，该插件依赖笔记 Frontmatter 中的 `title` 字段作为分组标题，若笔记未设置该属性，将回退显示文件名。它不适合需要复杂任务依赖关系管理或甘特图视图的用户，因为其核心功能是列表聚合与状态同步。此外，虽然支持多种状态筛选，但主要面向标准的 Markdown 任务格式，对于非标准任务标记的支持有限。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


