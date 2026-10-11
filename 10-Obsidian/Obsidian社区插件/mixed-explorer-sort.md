---
uid: 1791709368674000
title: 'Obsidian 插件：Mix Folders and Files'
tags: ['搜索与排序', '文件管理', '界面优化', 'obsidian插件']
description: 'Sort files and folders together in File Explorer by modified time, created time, or name. Folders mix with files instead of listing first. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mix Folders and Files

> [!Note] 插件名片
> - 插件名称：Mix Folders and Files
> - 插件作者：Dominik Bach
> - 插件说明：Sort files and folders together in File Explorer by modified time, created time, or name. Folders mix with files instead of listing first. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '文件管理', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mit-bach/mixed-explorer-sort)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mixed-explorer-sort)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mit-bach/mixed-explorer-sort/master/README.md)



## 概述

**1. 主要功能**
打破 Obsidian 文件浏览器中“文件夹始终排在文件前”的限制，实现文件夹与笔记混合排序。支持按修改时间、创建时间或名称进行统一排序，让最近编辑的文件夹能与最新笔记穿插显示。

**2. 适用场景**
适用于希望按时间流快速定位最近工作内容，且不希望被大量旧文件夹占据顶部视口的用户。特别适合项目结构复杂、需要频繁切换不同层级文件与文件夹的场景。

**3. 核心特色**
- **毫秒级精度**：利用文件系统时钟（`mtimeMs`/`birthtimeMs`），确保同一分钟内不同秒创建的文件也能精确排序。
- **智能文件夹时间**：提供“最新子项”、“最新直接子项”或“文件系统时间”三种模式，灵活定义文件夹的时间戳来源。
- **零配置负担**：无需 YAML 或复杂规则，仅需一个全局开关即可生效。

**4. 使用建议**
- 需 Obsidian 1.7.2 及以上版本。
- **互斥警告**：切勿与 Custom File Explorer sorting、Flexplorer 或 Folder Sort Rules 同时启用，因它们修补同一底层方法，会导致冲突。
- 建议根据习惯选择文件夹时间模式，默认“最新子项”通常最符合直觉。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


