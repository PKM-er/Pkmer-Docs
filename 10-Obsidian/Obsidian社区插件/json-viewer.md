---
uid: 1786577079246000
title: 'Obsidian 插件：JSON Viewer'
tags: ['搜索与排序', '数据处理', '图表与可视化', '编程与脚本', 'obsidian插件']
description: '以只读树状形式浏览 .json、.jsonl 和 .ndjson 文件，支持搜索、大纲导航以及语法高亮显示源文件。——此插件尚未经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：JSON Viewer

> [!Note] 插件名片
> - 插件名称：JSON Viewer
> - 插件作者：Viggo Meesters
> - 插件说明：以只读树状形式浏览 .json、.jsonl 和 .ndjson 文件，支持搜索、大纲导航以及语法高亮显示源文件。——此插件尚未经过 Obsidian 官方人员的人工审核。
> - 插件分类：['搜索与排序', '数据处理', '图表与可视化', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/viggomeesters/obsidian-json-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?json-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/viggomeesters/obsidian-json-viewer/master/README.md)



## 概述

### JSON Viewer 插件总结
1. **主要功能**：该插件为只读插件，可在 Obsidian 中打开 `.json`、`.jsonl` 和 `.ndjson` 文件，以结构化数据形式展示，能显示各类 JSON 数据类型及解析错误，支持按键、值或路径过滤树结构，提供右侧大纲用于快速导航，有展开/折叠、复制 JSON 及路径等操作按钮，还能以轻量级语法高亮和行号显示原始内容。
2. **适用场景**：适用于查看配置文件、日志、导出数据、API 负载、数据集及代理/运行时工件等，避免以纯文本形式查看的不便。
3. **核心特色**：对 JSONL/NDJSON 逐行解析并报告错误；为避免占用大量资源，渲染 JSONL 时仅展示前 1000 条有效记录；设计为只读模式，不修改原数据文件。
4. **使用建议**：当查看大型 JSONL 文件时，可借助大纲功能快速定位，利用过滤功能精准查找数据，若需获取完整内容可查看语法高亮的原文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


