---
uid: 1786577081724002
title: 'Obsidian 插件：Qdrant Sync'
tags: ['第三方工具集成', '搜索与排序', '数据处理', '自动化与AI', '效率工具', 'obsidian插件']
description: '把这个仓库同步到自建的Qdrant集合里，而不是用Obsidian Sync或者CouchDB来同步——每篇笔记都会嵌入数据，这样也能从代理工具进行语义搜索。 - 这款插件还没经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Qdrant Sync

> [!Note] 插件名片
> - 插件名称：Qdrant Sync
> - 插件作者：lanjak
> - 插件说明：把这个仓库同步到自建的Qdrant集合里，而不是用Obsidian Sync或者CouchDB来同步——每篇笔记都会嵌入数据，这样也能从代理工具进行语义搜索。 - 这款插件还没经过Obsidian官方人员的手动审核。
> - 插件分类：['第三方工具集成', '搜索与排序', '数据处理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lanjak/obsidian-qdrant-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?qdrant-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lanjak/obsidian-qdrant-sync/master/README.md)



## 概述

### Qdrant Sync插件总结
1. **主要功能**：可将Obsidian笔记库同步至自建的Qdrant实例，替代Obsidian Sync、iCloud或CouchDB等方式。同时对每篇笔记进行嵌入处理，使该集合可作为语义搜索索引，支持在Obsidian外部查询。
2. **适用场景**：适用于希望摆脱官方同步服务，使用自建服务进行笔记库多设备同步，且有语义搜索需求的用户。
3. **核心特色**：直接通过HTTP或HTTPS与Qdrant通信，支持桌面和移动设备。无需依赖Obsidian Sync、CouchDB等，可利用自建Qdrant实例和嵌入服务器实现同步与语义搜索。
4. **使用建议**：需准备可访问的Qdrant实例、支持llama.cpp `/embedding` 端点的嵌入服务器及提前创建好的Qdrant集合。可在Obsidian社区插件浏览器搜索安装，也可手动安装。设置时在各设备填写Qdrant地址、API密钥、嵌入服务器地址和集合名称，新设备首次同步需运行“Pull changes from Qdrant now”命令。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


