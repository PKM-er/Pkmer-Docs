---
uid: 1786577082780005
title: 'Obsidian 插件：Standing Questions'
tags: ['搜索与排序', '效率工具', '学习与教育', '白板学术与科研', 'obsidian插件']
description: '追踪你仓库里未解决的问题，还能找出可能解答这些问题的新笔记。——Obsidian团队尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Standing Questions

> [!Note] 插件名片
> - 插件名称：Standing Questions
> - 插件作者：saiken
> - 插件说明：追踪你仓库里未解决的问题，还能找出可能解答这些问题的新笔记。——Obsidian团队尚未对该插件进行人工审核。
> - 插件分类：['搜索与排序', '效率工具', '学习与教育', '白板学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/israerusan/standing-questions)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?standing-questions)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/israerusan/standing-questions/master/README.md)



## 概述

### 主要功能
Standing Questions 可追踪 Obsidian 库中的未解决问题，自动匹配可能解答问题的新笔记。能将问题设为一等对象，有状态、子问题，还能自动监测答案。

### 适用场景
适用于在 Obsidian 中记录问题，且后续笔记可能解答这些问题的场景，如项目决策讨论、流程规划等场景下记录的疑问。

### 核心特色
- 不主动编辑用户笔记，默认仅通知可能的答案，由用户自主点击查看。
- 可设置问题的父子关系，子问题状态变化会向上影响父问题状态。
- 仅在子问题全部解答时，会在问题的前置元数据中写入 `status:` 行，且此功能可关闭。

### 使用建议
在笔记中添加 `type: question` 和 `status: open` 两行，将其设为问题，该问题会显示在问题板上。若有子问题，可在前置元数据或行内设置 `parent` 指向父问题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


