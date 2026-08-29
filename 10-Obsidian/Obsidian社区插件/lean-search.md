---
uid: 1786577079468001
title: 'Obsidian 插件：Lean Search'
tags: ['搜索与排序', '效率工具', '自定义命令', 'obsidian插件']
description: '能通过精准匹配和频次新鲜度排序快速搜索你的仓库，更倾向于展示近期和频繁打开的笔记。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lean Search

> [!Note] 插件名片
> - 插件名称：Lean Search
> - 插件作者：felixleopold
> - 插件说明：能通过精准匹配和频次新鲜度排序快速搜索你的仓库，更倾向于展示近期和频繁打开的笔记。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['搜索与排序', '效率工具', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/felixleopold/lean-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lean-search)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/felixleopold/lean-search/master/README.md)



## 概述

### Lean Search插件总结
1. **主要功能**：为Obsidian提供快速搜索功能，基于精确匹配和“frecency”（结合最近和频繁打开因素）排序，能精准呈现所需笔记。
2. **适用场景**：适用于Obsidian用户在知识宝库中快速查找笔记，尤其是笔记数量较多的大型库。
3. **核心特色**：相比旧搜索方式，内存占用小，仅保留轻量级元数据和一个倒排索引；采用版本化的插件本地缓存，有验证、原子替换和安全重建回退机制；先恢复先前索引，再在后台刷新有变化的笔记；使用“frecency”排序，近期或频繁打开的笔记优先；对标题/标题子串匹配有明确加分，标题匹配结果更易置顶。
4. **使用建议**：默认模糊匹配关闭以保证结果可预测性，若需可自行开启；可根据自身使用习惯调整“recency”和“edit”相关权重参数，以优化搜索排序结果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


