---
uid: 1786577076913003
title: 'Obsidian 插件：Clippings Dedupe'
tags: ['数据处理', '编辑工具', '效率工具', 'obsidian插件']
description: '合并网页剪辑器在重新剪辑页面时添加的重复高亮内容，同时保留你在每段引用内容下所写的评论。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Clippings Dedupe

> [!Note] 插件名片
> - 插件名称：Clippings Dedupe
> - 插件作者：Soma Sekimoto
> - 插件说明：合并网页剪辑器在重新剪辑页面时添加的重复高亮内容，同时保留你在每段引用内容下所写的评论。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['数据处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/somasekimoto/obsidian-clippings-dedupe)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?clippings-dedupe)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/somasekimoto/obsidian-clippings-dedupe/master/README.md)



## 概述

### 主要功能
Clippings Dedupe 是一款 Obsidian 插件，用于合并官方 Obsidian Web Clipper 重复添加的高亮内容，同时保留每条引用下的评论。当剪藏文件夹内的笔记有更改时，它会合并引用相同高亮的块，保留评论，将追加的部分合并到主高亮部分，并在重写前备份笔记。

### 适用场景
适用于多次阅读同一文章并多次剪藏，导致笔记中出现重复高亮内容的场景。

### 核心特色
- 以引用文本本身作为标识进行合并，无需 ID 或哈希值。
- 确保不丢失用户撰写的评论，不同评论都会保留。
- 自动将追加部分合并到主高亮部分，保持笔记结构清晰。
- 重写前备份笔记，默认保留最近 30 个备份。

### 使用建议
插件会在剪藏完成 2 秒后自动运行，启动时扫描所有剪藏，也可通过命令面板手动触发。可在设置中配置文件夹、评论标签和章节标题等。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


