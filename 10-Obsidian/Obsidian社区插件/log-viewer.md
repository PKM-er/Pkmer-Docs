---
uid: 1786577079688002
title: 'Obsidian 插件：Log Viewer'
tags: ['搜索与排序', '文件管理', '效率工具', '数据处理', 'obsidian插件']
description: '用过滤器、时间戳、严重程度标识和原始源数据，以只读查看器的方式打开 .log 文件。 - 此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Log Viewer

> [!Note] 插件名片
> - 插件名称：Log Viewer
> - 插件作者：Viggo Meesters
> - 插件说明：用过滤器、时间戳、严重程度标识和原始源数据，以只读查看器的方式打开 .log 文件。 - 此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['搜索与排序', '文件管理', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/viggomeesters/obsidian-log-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?log-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/viggomeesters/obsidian-log-viewer/master/README.md)



## 概述

### Log Viewer插件总结
1. **主要功能**：这是一个只读插件，用于在Obsidian中浏览`.log`文件。可在专用视图打开文件，默认显示结构化日志表，能检测常见时间戳和严重程度标签，支持按文本、严重程度和时间戳过滤可见行，保留带行号和轻量级高亮的原始源视图，显示各类统计信息。
2. **适用场景**：适用于查看AI输出、代理日志、构建日志、本地自动化输出等纯文本日志，方便在不离开Obsidian库的情况下快速检查。
3. **核心特色**：本地解析文件，应用10000行渲染上限以保持响应速度，设计为只读模式不写回日志文件，可保留非结构化行和堆栈跟踪。
4. **使用建议**：当处理大文件时，因插件仅渲染前10000行，额外行数会在警告区域显示，可按需查看统计信息辅助分析日志。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


