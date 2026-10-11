---
uid: 1791709368534000
title: 'Obsidian 插件：md2hd'
tags: ['思维导图', '图表与可视化', '模板与链接处理', '图谱', 'obsidian插件']
description: 'Open a note or folder as an md2hd map. Frontmatter becomes nodes, wikilinks become edges. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：md2hd

> [!Note] 插件名片
> - 插件名称：md2hd
> - 插件作者：Evan Steinhilb
> - 插件说明：Open a note or folder as an md2hd map. Frontmatter becomes nodes, wikilinks become edges. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['思维导图', '图表与可视化', '模板与链接处理', '图谱', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/evan-steinhilb/md2hd-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?md-hd)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/evan-steinhilb/md2hd-obsidian/master/README.md)



## 概述

**1. 主要功能**
md2hd 是一款将 Obsidian 笔记或文件夹可视化为关系图的插件。它自动将 Frontmatter 转换为带类型的节点，将 Wikilinks 及 `rel:` 字段转换为带标签的有向边，实时反映笔记结构。

**2. 适用场景**
适用于需要清晰展示复杂关系的场景，如组织架构图、服务依赖图、调查线索梳理或小说情节大纲。它比原生图谱视图更强调链接的“语义”而非仅仅是“存在”。

**3. 核心特色**
- **语义化映射**：节点承载自定义类型（如 org、person），链接具有方向性和具体含义（如“雇佣”与“任职于”双向视角）。
- **动态交互**：支持“聚焦模式”，点击节点可展开其上下游关系，并支持 1-3 度关联遍历。
- **实时同步**：作为只读视图，编辑笔记后地图自动重绘，无需手动刷新。
- **本地隐私**：完全在本地渲染，无服务器、无网络请求、无遥测，数据不出库。

**4. 使用建议**
通过右键菜单选择“Open as md2hd map”，或使用命令面板映射当前文件夹/整个库。建议在 Frontmatter 中规范定义节点类型，并在链接中明确使用 `rel:` 字段描述关系，以获得最佳可视化效果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


