---
uid: 2025060517163620
title: 'Obsidian 插件：Byte Field Diagrams'
tags: ['图表与可视化', '数据处理', '编程与脚本', 'obsidian插件']
description: '添加图表，展示结构在内存或网络中的布局方式。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Byte Field Diagrams

> [!Note] 插件名片
> - 插件名称：Byte Field Diagrams
> - 插件作者：natri0
> - 插件说明：添加图表，展示结构在内存或网络中的布局方式。
> - 插件分类：['图表与可视化', '数据处理', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/natri0/obsidian-bytefield)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bytefield)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/natri0/obsidian-bytefield/main/readme.md)



## 概述

bytefield 是一个简单的 Obsidian 插件，用于在笔记中创建字节字段图，直观展示数据结构（如网络数据包）在内存或网络中的布局。用户只需在代码块中按“字段名: 字节长度”格式输入字段（例如 `field1: 3`），插件会自动生成带有偏移量标注的表格化图表，支持自定义起始偏移量（如 `!curOffset: 7`）、跨行字段换行以及匿名填充字段（如 `: 1` 表示1字节空白）。该插件适用于协议分析、二进制数据格式文档编写等场景，帮助开发者或技术作者清晰呈现结构化数据的字节级分布，简化传统绘图工具的繁琐操作。项目基于 Bun 构建，依赖极简。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



