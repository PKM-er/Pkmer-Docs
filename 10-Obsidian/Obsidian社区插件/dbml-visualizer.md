---
uid: 1786577077339006
title: 'Obsidian 插件：DBML Visualizer'
tags: ['图表与可视化', '编程与脚本', '数据处理', '效率工具', 'obsidian插件']
description: '把修改后的DBML代码块渲染成交互式的实体关系图（ERD）。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DBML Visualizer

> [!Note] 插件名片
> - 插件名称：DBML Visualizer
> - 插件作者：Mayeenul Islam
> - 插件说明：把修改后的DBML代码块渲染成交互式的实体关系图（ERD）。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['图表与可视化', '编程与脚本', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mayeenulislam/obsidian-dbml-visualizer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dbml-visualizer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mayeenulislam/obsidian-dbml-visualizer/master/README.md)



## 概述

### DBML Visualizer 插件总结
1. **主要功能**：将 Obsidian 中 `dbml` 代码块渲染为交互式的实体关系图（ERD），支持平移、缩放，可拖动表节点进行自定义布局。
2. **适用场景**：适用于数据库设计、数据建模等场景，方便用户在 Obsidian 笔记中直观呈现数据库表及其关系。
3. **核心特色**
    - 支持将 `dbml`/`DBML` 代码块渲染为 SVG 格式的 ERD。
    - 自动布局，带有连接线和箭头。
    - 可对图表进行平移、缩放和拖动操作。
    - 可通过代码围栏信息字符串设置可选标题元数据。
4. **使用建议**
    - 安装方式推荐通过 Obsidian 的社区插件界面进行安装，也可手动下载文件安装。
    - 在笔记中添加 `dbml` 代码块即可生成 ERD 图表。
    - 关系使用 `users.id <> orders.user_id` 样式（支持 `>`, `<`, `<>`）。
    - 可通过在代码围栏信息中传入 `title` 为图表添加标题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


