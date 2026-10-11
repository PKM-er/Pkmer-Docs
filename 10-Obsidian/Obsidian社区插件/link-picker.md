---
uid: 1791709368048000
title: 'Obsidian 插件：Link Picker'
tags: ['模板与链接处理', '文件管理', '自定义命令', 'obsidian插件']
description: 'Pick a note by navigating folders and insert a link to it, from a command or from your own scripts. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Link Picker

> [!Note] 插件名片
> - 插件名称：Link Picker
> - 插件作者：Michael Naumov
> - 插件说明：Pick a note by navigating folders and insert a link to it, from a command or from your own scripts. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-link-picker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-picker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-link-picker/master/README.md)



## 概述

**1. 主要功能**
Link Picker 是一款用于 Obsidian 的链接选择插件。它允许用户通过导航文件夹结构来精准定位笔记并插入链接，支持从命令面板或自定义脚本中调用，最终返回一个字符串链接。

**2. 适用场景**
适用于用户明确知道目标笔记所在文件夹，且希望避免 Obsidian 默认模糊搜索带来的不确定性排序的情况。特别适合在模板或脚本中需要自动获取特定路径下笔记链接的场景。

**3. 核心特色**
*   **确定性排序**：摒弃模糊匹配，采用严格优先级排序：完全匹配 > 前缀匹配 > 路径匹配 > 分散词匹配，确保每次选择结果一致。
*   **文件夹导航**：支持像文件管理器一样进入子文件夹或返回上级（`..`），直观高效。
*   **可编程接口**：作为可调用组件，能直接返回链接字符串，便于嵌入属性值或自动化工作流。

**4. 使用建议**
建议在需要精确引用特定目录下笔记时使用，而非依赖全局搜索。开发者可利用其字符串返回特性，在 Templater 等插件中编写脚本，实现动态链接插入，提升笔记管理的自动化与准确性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


