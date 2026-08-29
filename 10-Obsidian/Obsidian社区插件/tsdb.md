---
uid: 1786577083427006
title: 'Obsidian 插件：TSDB'
tags: ['数据处理', '图表与可视化', '数据分析', 'obsidian插件']
description: '用于存储你插件指标数据的本地时间序列数据库。通过PromQL把实时图表嵌入到你的笔记里。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TSDB

> [!Note] 插件名片
> - 插件名称：TSDB
> - 插件作者：Daniel Grossmann-Kavanagh
> - 插件说明：用于存储你插件指标数据的本地时间序列数据库。通过PromQL把实时图表嵌入到你的笔记里。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['数据处理', '图表与可视化', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dtkav/obsidian-tsdb)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tsdb)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dtkav/obsidian-tsdb/master/README.md)



## 概述

### TSDB插件总结
1. **主要功能**：TSDB是Obsidian的本地时间序列数据库，可记录来自本库、其他插件的指标数据，存储于SQLite支持的浏览器存储中，还能根据笔记里的PromQL代码块渲染实时图表。
2. **适用场景**：适用于需要收集本地指标、查询本地数据库、分析数据并制作仪表盘的Obsidian用户。
3. **核心特色**：
    - 工作流全在Obsidian内完成，可将仪表盘保存为Markdown笔记。
    - 数据来源广泛，包括库指标、性能指标、插件指标及可选的外部端点。
    - 图表、仪表盘和HTTP API都查询同一本地数据库。
    - 数据存储在OPFS，与插件文件分离，有默认30天的数据保留机制。
4. **使用建议**：点击丝带图标或运行“Open metrics dashboard”查看内置仪表盘，选“Edit in my vault”创建可编辑的Markdown仪表盘笔记。在笔记中添加`promql`代码块即可渲染实时图表。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


