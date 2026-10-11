---
uid: 1791709370372000
title: 'Obsidian 插件：Template Derive'
tags: ['模板与链接处理', '文件管理', '自动化与AI', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Template Derive

> [!Note] 插件名片
> - 插件名称：Template Derive
> - 插件作者：江边雁
> - 插件说明：
> - 插件分类：['模板与链接处理', '文件管理', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jiangbianyan-gif/obsidian-template-derive)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?template-derive)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jiangbianyan-gif/obsidian-template-derive/master/README.md)



## 概述

**1. 主要功能**
Template Derive 是一款自动化内容分发插件。它允许用户定义自定义规则，监控指定文件夹中源笔记的特定段落。当该段落有内容时，插件会自动将其渲染并生成到目标路径的新文件中；若段落为空，则不生成。

**2. 适用场景**
适用于需要将“流水账”与“累积记录”分离的场景。典型如日记管理：将每日的反思、阅读记录或成长轨迹从日常日记中自动提取，按日期归档至独立文件夹，形成可检索的时间序列，避免手动复制的繁琐与遗忘。

**3. 核心特色**
- **按需生成**：严格遵循“写了才生成”原则，无内容不创建文件。
- **安全隔离**：产物文件通过特殊标记包裹，标记外的用户手动编辑内容永不被覆盖。
- **原子写入**：采用临时文件+重命名机制，确保数据写入的稳定性与安全性。
- **高度可配**：支持自定义源文件夹、触发段落、目标路径及模板，预设日记规则可自由修改或删除。

**4. 使用建议**
仅支持桌面端（依赖 fs 模块）。安装后需关闭安全模式。建议先利用预设的日记规则体验，再根据需求在设置中新增自定义规则。注意源文件与产物文件为一对一映射关系，确保规则逻辑清晰，避免冲突。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


