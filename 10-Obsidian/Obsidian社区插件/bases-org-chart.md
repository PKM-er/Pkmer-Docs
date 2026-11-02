---
uid: 1793625607843001
title: "Obsidian 插件：Bases Org Chart"
tags: ["图表与可视化", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Shows notes as an interactive org chart in Bases, linking each note to its manager through a property. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Org Chart

> [!Note] 插件名片
> - 插件名称：Bases Org Chart
> - 插件作者：Tiago "Salvador" Souza
> - 插件说明：Shows notes as an interactive org chart in Bases, linking each note to its manager through a property. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tssalvador/obsidian-bases-org-chart)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-org-chart)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tssalvador/obsidian-bases-org-chart/master/README.md)



## 概述

Bases Org Chart 将笔记转化为可视化的交互式组织架构图，核心在于通过 frontmatter 属性（如 `reports_to`）建立上下级链接。它能在 Bases 视图中渲染出清晰的层级关系，支持实线表示主要汇报关系，虚线表示次要或跨部门汇报，让原本分散的笔记瞬间变成结构化的团队或项目全景图。

典型场景包括管理团队成员或梳理复杂项目结构。例如，你可以为每位同事创建笔记并设置 `reports_to` 指向其直属上级，在 Bases 中打开 Org Chart 视图，即可直观看到整个团队的汇报链条。若某位员工同时向两位经理汇报，只需在属性中添加第二个值，图表会自动以虚线连接，清晰区分主次关系，无需手动绘制连线。

相比静态图表，该插件最大的特色是深度交互与数据同步。你可以直接拖拽卡片到新的经理名下，系统会自动更新笔记属性并保留其他汇报关系，且支持撤销操作。此外，它支持折叠团队、搜索高亮、显示无汇报关系的人员及历史成员，还能通过右键菜单快速添加虚线经理或处理人员离职时的汇报关系转移，所有修改均通过 Obsidian 原生 API 安全写入。

需要注意的是，该插件目前仅支持桌面端，手机和平板暂不可用。它依赖于笔记间明确的属性链接，因此不适合用于没有层级关系或无法通过属性定义上下级的扁平化笔记集合。如果你需要的是简单的标签云或无层级结构的列表展示，此插件并非最佳选择；它专为具有明确“父-子”逻辑的层级数据设计。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


