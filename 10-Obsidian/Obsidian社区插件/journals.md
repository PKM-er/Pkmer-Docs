---
uid: 2024052909081003
title: Obsidian 插件：Journals
tags: ['日历与时间', '笔记与日志', '导航与状态栏', 'obsidian插件']
description: 管理您的日志。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Journals

> [!Note] 插件名片
> - 插件名称：Journals
> - 插件作者：Sergii Kostyrko
> - 插件说明：管理您的日志。
> - 插件分类：[' 日历与时间 ', ' 笔记与日志 ', ' 导航与状态栏 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/srg-kostyrko/obsidian-journal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?journals)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/srg-kostyrko/obsidian-journal/main/README.md)

![Journals](https://cdn.pkmer.cn/covers/journals.png!pkmer)

## 概述

Obsidian 插件“Journals”可帮助您管理 [Obsidian](https://obsidian.md/) 知识库中的日志。

- 基于日历的日志（日常、每周、每月、每季度和每年的笔记）
- 基于间隔的日志（如财政季度或冲刺）
- 您可以根据需要配置许多不同的日志
- 每种类型的笔记都可以单独配置（存储路径、模板等）
- 可以将日志相关数据插入路径/笔记名称/模板内容的变量
- 在打开 Vault 时创建当前日志笔记
- 在启动时打开日志笔记
- 为日志笔记提供代码块，以便更轻松地导航

安装步骤：

1. 在 Obsidian 的社区插件浏览器中搜索“Journals”
2. 在 Obsidian 设置中启用插件（在“社区插件”下找到“Journals”）
3. 检查设置。配置您需要的日志。

支持的变量：

- `{{journal_name}}` - 日志笔记名称
- `{{note_name}}` - 笔记名称
- `{{start_date}}` - 周、月、季度、年或间隔的第一天，使用日期格式设置，格式可以使用 Moment.js 格式规则进行覆盖
- `{{end_date}}` - 周、月、季度、年或间隔的最后一天，格式规则与 `{{start_date}}` 相同
- `{{date}}` - `{{start_date}}` 的别名
- `{{index}}` - 适用于间隔型日志，表示间隔的索引

支持的代码块：

插件提供可插入笔记内容的代码块，以便更轻松地导航。

插件功能强大，适用于个人和团队的知识管理和笔记记录。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



