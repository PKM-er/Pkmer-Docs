---
uid: 1786577076976000
title: 'Obsidian 插件：Code Graph'
tags: ['图表与可视化', '编程与脚本', '图谱', '效率工具', 'obsidian插件']
description: '把你的代码文件之间的关联——像导入、调用、继承、实现、注释链接、架构决策记录（ADRs）以及测试等——以交互式图表的形式和笔记一起直观呈现出来。 - 这个插件还未经Obsidian官方人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Code Graph

> [!Note] 插件名片
> - 插件名称：Code Graph
> - 插件作者：Joshua Williams
> - 插件说明：把你的代码文件之间的关联——像导入、调用、继承、实现、注释链接、架构决策记录（ADRs）以及测试等——以交互式图表的形式和笔记一起直观呈现出来。 - 这个插件还未经Obsidian官方人员手动审核。
> - 插件分类：['图表与可视化', '编程与脚本', '图谱', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mrjw717/obsidian-code-graph)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-graph)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mrjw717/obsidian-code-graph/master/README.md)



## 概述

### Code Graph插件总结
1. **主要功能**：将代码文件间的连接关系（如导入、调用、继承等）以交互式图形的形式展示在笔记旁，把Obsidian库转换为代码库的可导航知识图谱。能解析源文件，提取关系并以力导向图呈现，支持探索、过滤和深入查看。
2. **适用场景**：适用于开发者在Obsidian中管理代码项目，梳理代码文件间的关系，查看代码结构和依赖。
3. **核心特色**：
    - 支持多种语言，对部分语言进行AST解析提取关系，部分语言基于正则提取导入关系。
    - 可将函数、类等作为图节点展示。
    - 能直观显示含`TODO`和`FIXME`注释的文件。
4. **使用建议**：开发者在使用Obsidian管理代码项目时，可开启该插件，通过图形化展示快速掌握代码文件间的关联，利用过滤和深入查看功能聚焦特定代码关系，同时关注`TODO`和`FIXME`文件以处理技术债务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


