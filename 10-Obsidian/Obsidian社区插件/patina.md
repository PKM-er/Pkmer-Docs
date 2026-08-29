---
uid: 1786577081282002
title: 'Obsidian 插件：Patina'
tags: ['数据分析', '效率工具', '文件管理', '学习与教育', 'obsidian插件']
description: '根据笔记的编辑次数、打开次数和入站链接情况，给每篇笔记的“陈旧度”打分，然后按照“陈旧度”排名，处理待复习的笔记队列。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Patina

> [!Note] 插件名片
> - 插件名称：Patina
> - 插件作者：saiken
> - 插件说明：根据笔记的编辑次数、打开次数和入站链接情况，给每篇笔记的“陈旧度”打分，然后按照“陈旧度”排名，处理待复习的笔记队列。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['数据分析', '效率工具', '文件管理', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/israerusan/patina)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?patina)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/israerusan/patina/master/README.md)



## 概述

### Patina插件总结
1. **主要功能**：通过编辑、打开记录和入站链接等四个信号为每个笔记的陈旧度打分，对笔记进行排名并生成待审查清单。
2. **适用场景**：适用于笔记数量较多的Obsidian库，帮助用户找出可能过时的笔记。
3. **核心特色**：
    - 采用半衰期机制计算分数，分数区间为0 - 100，分为新鲜、老化、陈旧、腐朽四个等级。
    - 自动记录笔记的最后打开时间。
    - 无入站链接的笔记不会受惩罚，权重会根据实际存在的信号重新归一化。
    - 不会编辑用户笔记，仅在用户明确操作时在笔记前言中写入`decay:`行。
4. **使用建议**：可根据笔记的时效性，在笔记前言中设置不同的半衰期配置文件，如`fast`（14天半衰期，适用于会议记录等）、`slow`（90天半衰期，默认配置），以便更精准地评估笔记陈旧度。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


