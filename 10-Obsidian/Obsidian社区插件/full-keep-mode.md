---
uid: 1793625613245000
title: "Obsidian 插件：Full Keep Mode"
tags: ["任务管理", "界面优化", "效率工具", "obsidian插件"]
description: "Handles just like Google Keep and the import transfers all information, including the ordering of your notes, the indentations of check list items, colors, etc. Includes drag & drop, dark mode, etc. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Full Keep Mode

> [!Note] 插件名片
> - 插件名称：Full Keep Mode
> - 插件作者：Gabriel Leuenberger
> - 插件说明：Handles just like Google Keep and the import transfers all information, including the ordering of your notes, the indentations of check list items, colors, etc. Includes drag & drop, dark mode, etc. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leuenberger/obsidian-full-Keep-mode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?full-keep-mode)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leuenberger/obsidian-full-Keep-mode/master/README.md)



## 概述

Full Keep Mode 旨在为 Obsidian 用户提供与 Google Keep 高度一致的笔记体验。它复刻了 Keep 的核心交互逻辑，包括彩色卡片看板、置顶、标签、归档以及提醒功能。最显著的特点是完整还原了 Keep 的清单规则：勾选后的条目会自动移至底部，子项跟随父项移动，且支持拖拽排序与缩进。所有笔记均以纯 Markdown 文件形式存储，确保数据完全由用户掌控，同时支持离线使用，无需依赖云端服务。

对于习惯使用 Google Keep 的用户，该插件提供了无缝迁移方案。例如，你可以将 Keep 中的购物清单导入 Obsidian，在勾选“牛奶”后，该条目会自动沉底，而“有机牛奶”作为子项会紧随其后，操作逻辑与手机端 Keep 完全一致。此外，若你希望将 Keep 中的笔记与 Obsidian 其他笔记建立关联，插件支持将 Keep 内部链接转换为 Obsidian 的双向链接，方便在笔记间自由跳转。

相比其他看板类插件，Full Keep Mode 的最大优势在于其“零学习成本”与“本地极速响应”。由于所有数据存储在本地设备，看板的打开与搜索速度通常快于在线版 Keep。它严格遵循 Keep 的视觉与交互规范，包括深色模式适配、卡片悬停菜单以及手机端的侧滑缩进操作。对于从 Keep 迁移的用户，插件提供了专门的导入工具，能保留笔记顺序、颜色、标签及清单层级，甚至能将 Keep 笔记间的链接转化为 Obsidian 链接，保持信息结构的完整性。

需要注意的是，该插件主要服务于 Keep 的重度用户或追求特定交互体验的人群。如果你更倾向于 Obsidian 原生的大纲视图或复杂的数据库管理，此插件可能显得功能冗余。此外，虽然支持从 Google Takeout 导入，但通过 Takeout 获取的数据不包含笔记原始顺序和清单子项层级；若需完整保留这些细节，需使用插件提供的 Python 脚本进行导出，这对非技术用户有一定门槛。插件本身不包含云同步功能，需配合 Obsidian Sync 或其他同步工具实现多设备数据一致。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


