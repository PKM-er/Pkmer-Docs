---
uid: 1786577078111003
title: 'Obsidian 插件：Grafily'
tags: ['图表与可视化', '图谱', '效率工具', 'obsidian插件']
description: '用于绘制家族图谱（家谱）的Obsidian插件 —— 此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Grafily

> [!Note] 插件名片
> - 插件名称：Grafily
> - 插件作者：Pavlo Myroniuk
> - 插件说明：用于绘制家族图谱（家谱）的Obsidian插件 —— 此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['图表与可视化', '图谱', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/thebesttvarynka/grafily)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?grafily)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/thebesttvarynka/grafily/master/README.md)



## 概述

### Grafily插件总结
1. **主要功能**：这是一款用于Obsidian的插件，可渲染家族图谱（家谱），借助reactflow库进行渲染，并采用自定义布局算法放置图节点。
2. **适用场景**：适用于家族历史/族谱研究、追踪家族成员等场景。
3. **核心特色**：提供两种可视化算法。Reingold - Tilford是基于树的算法，能仅展示所选人物的直系祖先和/或后代，优势是完美居中；Brandes - Köpf是基于图的通用算法，可处理任何复杂度的家族图，缺点是节点不能完美居中。
4. **使用建议**：插件要求每个家族成员对应一个页面，会扫描指定目录（可配置）下的所有页面，并提取人物元数据（具体格式见使用说明）。在使用时，可根据实际需求选择合适的可视化算法，若注重节点居中效果，可优先考虑Reingold - Tilford算法。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


