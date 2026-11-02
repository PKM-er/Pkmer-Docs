---
uid: 1793625613394001
title: "Obsidian 插件：Gnosis"
tags: ["搜索与排序", "效率工具", "数据处理", "obsidian插件"]
description: "Search your vault with gnosis's retrieval pipeline, from a portable index built on your own machine. No server, no API key. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Gnosis

> [!Note] 插件名片
> - 插件名称：Gnosis
> - 插件作者：Paul
> - 插件说明：Search your vault with gnosis's retrieval pipeline, from a portable index built on your own machine. No server, no API key. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ptsouchlos/obsidian-gnosis)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gnosis)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ptsouchlos/obsidian-gnosis/master/README.md)



## 概述

Gnosis 插件旨在解决 Obsidian 笔记库中检索效率低下的问题，核心功能是提供基于本地索引的高级搜索体验。它直接读取在用户设备上构建的可移植索引，无需依赖外部服务器或 API 密钥，确保所有数据均保留在本地。插件集成了 gnosis 的检索管道，支持从纯关键词匹配到混合语义搜索的多种模式，让用户能够更精准地定位笔记内容，同时保持对数据隐私的绝对掌控。

典型使用场景包括快速查找特定概念或发现笔记间的隐性关联。例如，当你正在撰写一篇关于“水合”的文章时，即使笔记中未直接链接，插件也能通过向量相似度找出其他提及该主题的笔记，并以可视化地图展示它们与当前笔记的距离。此外，若你输入了拼写错误的单词，如“hydraton”，插件也能通过模糊匹配找到正确的“hydration”，确保搜索结果的准确性。

相比同类插件，Gnosis 的最大特色在于其完全复用了 gnosis CLI 的排名代码，通过 WebAssembly 编译嵌入，确保了与命令行工具一致的检索精度和参数逻辑。它支持在插件内直接构建和增量更新索引，且具备断点续传功能，避免重复计算。此外，它还支持图像搜索，允许通过文本查询找到相关的图片内容，这在纯文本搜索插件中较为少见。

使用前需注意，该插件仅支持桌面端，且启用语义搜索或图像搜索时需下载数百 MB 的模型文件，首次加载会有延迟。它不适合需要频繁在移动端同步搜索结果的场景，也不适合希望完全离线且不愿下载任何额外模型文件的用户。此外，PDF 文件仅能通过 CLI 索引，插件内无法直接处理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


