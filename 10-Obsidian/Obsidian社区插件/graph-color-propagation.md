---
uid: 1786577078127002
title: 'Obsidian 插件：Graph Color Propagation'
tags: ['图表与可视化', '数据处理', '图谱', '自动化与AI', 'obsidian插件']
description: '根据节点间的连接关系，将图节点的颜色应用到未上色的节点上。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Graph Color Propagation

> [!Note] 插件名片
> - 插件名称：Graph Color Propagation
> - 插件作者：Tacitustus
> - 插件说明：根据节点间的连接关系，将图节点的颜色应用到未上色的节点上。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['图表与可视化', '数据处理', '图谱', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tacitustus/obsidian-graph-color-propagation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?graph-color-propagation)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tacitustus/obsidian-graph-color-propagation/master/README.md)



## 概述

### Graph Color Propagation插件总结
1. **主要功能**：基于笔记间的连接，将图谱节点颜色传播到未着色节点。读取Obsidian内置图谱视图中定义的颜色组，自动为无所属组的相邻笔记上色。
2. **适用场景**：适用于使用Obsidian图谱视图管理笔记，希望通过颜色直观展示笔记关联的用户。
3. **核心特色**：
    - 自动颜色传播：无匹配组的笔记根据连接距离和路径数量继承关联笔记的混合颜色。
    - 实时同步：图谱视图颜色组设置更改时，插件自动重新应用颜色。
    - 可调节传播：通过衰减因子、最大跳数和最小影响设置控制颜色传播范围和效果强度。
    - 手动控制：提供多种手动触发颜色传播的方式。
4. **使用建议**：先在Obsidian图谱视图的“Groups”面板中定义颜色组，再根据需求调整颜色传播的相关设置。若想立即应用颜色，可使用手动控制功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


