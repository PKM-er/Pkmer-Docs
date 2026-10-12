---
uid: 1780392511074000
title: 'Obsidian 插件：Embedding'
tags: ['搜索与排序', '数据分析', '自动化与AI', '学习与教育', '学术与科研', 'obsidian插件']
description: '它可以利用嵌入技术实现笔记的语义相似度分析。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Embedding

> [!Note] 插件名片
> - 插件名称：Embedding
> - 插件作者：shuxueshuxue
> - 插件说明：它可以利用嵌入技术实现笔记的语义相似度分析。
> - 插件分类：['搜索与排序', '数据分析', '自动化与AI', '学习与教育', '白板学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/shuxueshuxue/obsidian-embedding-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?embedding)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/shuxueshuxue/obsidian-embedding-plugin/master/README.md)

![Embedding](https://cdn.pkmer.cn/covers/embedding_internal_0.jpeg!pkmer)

## 概述

### 插件名称
Embedding

### 主要功能
该插件为笔记构建嵌入向量，实现基于语义的键盘优先导航，通过弹出面板展示相关笔记，还支持批量更新笔记嵌入向量。

### 适用场景
适用于需要快速查找笔记关联、进行知识关联探索的场景，提升笔记导航效率。

### 核心特色
1. 浮动的相似笔记面板，按 ESC 可关闭。
2. 单字母热键导航，操作便捷。
3. 支持批量更新笔记嵌入向量，可选择启动时自动更新。
4. 可配置模型、维度、API 等参数。
5. 可选启用 MCP JSON - RPC 服务器，支持语义搜索。

### 使用建议
1. 手动安装时，将文件夹复制到指定路径，执行 `npm install` 和 `npm run build` 后在 Obsidian 中启用。
2. 在设置中配置 API 密钥。
3. 运行 `Update all note vectors` 生成 `embeddings.json`。
4. 运行 `See connections for current note` 打开弹出面板。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


