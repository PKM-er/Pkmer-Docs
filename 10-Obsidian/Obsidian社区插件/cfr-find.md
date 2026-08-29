---
uid: 1786577076803002
title: 'Obsidian 插件：CFR Find'
tags: ['搜索与排序', '效率工具', '图片与PDF', '文件管理', 'obsidian插件']
description: '用一个由工作线程驱动的快速索引来搜索你的仓库。支持容错别字的模糊匹配、文件内搜索，还能选择对PDF、图片和办公文档建立索引。灵感源自Omnisearch。——此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CFR Find

> [!Note] 插件名片
> - 插件名称：CFR Find
> - 插件作者：cferrugem
> - 插件说明：用一个由工作线程驱动的快速索引来搜索你的仓库。支持容错别字的模糊匹配、文件内搜索，还能选择对PDF、图片和办公文档建立索引。灵感源自Omnisearch。——此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['搜索与排序', '效率工具', '图片与PDF', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cferrugem/obsidian-cfr-find)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cfr-find)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cferrugem/obsidian-cfr-find/master/README.md)



## 概述

### CFR Find插件总结
1. **主要功能**：为Obsidian提供基于Web Worker的快速全文搜索，支持库全局搜索和当前文件内搜索，具备排名、容错、前缀匹配搜索功能，还可对PDF、图像和办公文档进行索引（可选）。
2. **适用场景**：适用于在Obsidian库中快速查找各种类型文件内容的场景，尤其是大库搜索。
3. **核心特色**：受Omnisearch启发，但更注重速度。将索引和搜索放在Web Worker中进行，不阻塞UI；单次分词去重；对变音符号规范化处理更高效；不保留笔记内容副本；缓存序列化在工作线程中原子化操作；仅高亮可见结果；使用纯DOM无框架，体积小。
4. **使用建议**：若需HTTP API、公共插件API、嵌入结果或中文分词功能，建议使用Omnisearch；若追求搜索速度，CFR Find是更好的选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


