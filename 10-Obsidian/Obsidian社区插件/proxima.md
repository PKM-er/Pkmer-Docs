---
uid: 1791709369352000
title: 'Obsidian 插件：Proxima'
tags: ['搜索与排序', '图表与可视化', '自动化与AI', 'obsidian插件']
description: 'Local-first semantic search: related notes, interactive proximity graph, and concept search, all on-device. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Proxima

> [!Note] 插件名片
> - 插件名称：Proxima
> - 插件作者：santhoshsram
> - 插件说明：Local-first semantic search: related notes, interactive proximity graph, and concept search, all on-device. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '图表与可视化', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/santhoshsram/obsidian-proxima)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?proxima)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/santhoshsram/obsidian-proxima/master/README.md)



## 概述

**1. 主要功能**
Proxima 是一款本地优先的语义搜索插件。它能根据当前笔记的内容，自动发现语义上最相关的其他笔记，并提供基于概念而非关键词的搜索能力。

**2. 适用场景**
适用于需要深入知识关联管理的用户，特别是希望打破“链接孤岛”，在撰写或阅读时快速发现隐性知识联系、构建个人知识网络的研究者或笔记爱好者。

**3. 核心特色**
*   **本地隐私安全**：100% 在设备端运行（WebGPU/WASM），无云端依赖，零数据上传。
*   **高精度检索**：采用“两阶段漏斗”机制，结合密集向量检索与本地交叉编码器重排序，确保结果精准。
*   **智能分块**：基于 Markdown 结构和句子边界进行语义感知分块，避免随机窗口切割导致的语义断裂。
*   **可视化交互**：提供交互式邻近图（Proxima Graph）和侧边栏相关笔记视图，支持悬停预览，并将显式 Wiki 链接与语义匹配叠加显示。

**4. 使用建议**
建议先在设置中根据设备性能选择合适的嵌入和重排序模型。利用“相关笔记侧边栏”辅助写作时的灵感发散，或通过“Proxima 图”直观梳理概念集群。注意调整相似度阈值以平衡结果数量与精准度。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


