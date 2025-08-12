---
uid: 2025081220015039
title: 'Obsidian 插件：T4: Task Tree Time Totaler'
tags: ['任务管理', '数据处理', '效率工具', '自动化与AI', 'obsidian插件']
description: '在Markdown文档的任务树里，根据子任务的预估情况来计算并为任务分配预估时间。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：T4: Task Tree Time Totaler

> [!Note] 插件名片
> - 插件名称：T4: Task Tree Time Totaler
> - 插件作者：Evan Story
> - 插件说明：在Markdown文档的任务树里，根据子任务的预估情况来计算并为任务分配预估时间。
> - 插件分类：['任务管理', '数据处理', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/estory1/t4-task-tree-time-totaler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?t4-task-tree-time-totaler)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/estory1/t4-task-tree-time-totaler/master/README.md)



## 概述

### 主要功能
T4: Task Tree Time Totaler 是一款 Obsidian 笔记应用插件，可计算 Markdown 文档中任务树里分层任务的时间估算总和，并将结果更新到对应任务处。

### 适用场景
适用于管理包含多级子任务的任务集，当任务数量增多、手动计算各任务时间估算总和变得繁琐易错时，该插件能高效解决问题。

### 核心特色
- 支持可变单位求和，以最小可用单位（分钟）进行计算，最终按任务子任务中使用的最粗略单位报告总和。
- 提供多种时间单位，包括十年、年、月、周等，若未定义单位则默认按分钟计算。

### 使用建议
- 任务需按特定格式定义，通用格式为“任意缩进 - 复选框 总和字段 任务描述”，在 Markdown 中具体为“- [ ] [] 任务/子任务描述”，因为插件通过正则匹配任务行来工作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


