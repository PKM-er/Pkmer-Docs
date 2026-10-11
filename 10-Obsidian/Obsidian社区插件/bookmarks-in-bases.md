---
uid: 1791709365688000
title: 'Obsidian 插件：Bookmarks-In-Bases'
tags: ['文件管理', '数据处理', '效率工具', 'obsidian插件']
description: 'Adds Bases formula objects for bookmarks: file.bookmarks, file.hasBookmarks(), bookmark.path() and bookmark.folder(). - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bookmarks-In-Bases

> [!Note] 插件名片
> - 插件名称：Bookmarks-In-Bases
> - 插件作者：lorenbll
> - 插件说明：Adds Bases formula objects for bookmarks: file.bookmarks, file.hasBookmarks(), bookmark.path() and bookmark.folder(). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lorenbll/Bookmarks-In-Bases)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bookmarks-in-bases)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lorenbll/Bookmarks-In-Bases/master/README.md)



## 概述

**插件名称**：Bookmarks-In-Bases

**主要功能**
该插件为 Obsidian 的 Bases 视图扩展了书签相关的公式对象。它允许用户在 Bases 公式中直接访问当前文件的书签数据，提供了 `file.bookmarks` 列表，以及针对单个书签的 `bookmark.path()`（获取完整路径）和 `bookmark.folder()`（获取父级文件夹）等方法。

**适用场景**
适用于需要基于“书签归属”对笔记进行高级筛选、分组或可视化的用户。例如，当 Bases 原生功能无法直接按书签分类显示文件时，此插件能填补这一空白，实现基于书签结构的动态视图。

**核心特色**
1. **深度集成**：将书签系统无缝融入 Bases 公式引擎，支持列表操作（如 map、索引访问）。
2. **细粒度控制**：支持对单个书签对象进行独立操作，可提取完整路径或父级文件夹，便于构建复杂的过滤逻辑。
3. **自动处理**：自动对书签列表进行排序和去重，并智能处理路径中的特殊字符转义。

**使用建议**
在 Bases 公式属性中直接调用 `file.bookmarks` 获取列表。若需展示或筛选特定书签，可使用 `file.bookmarks.map(value.path())` 获取路径列表，或通过 `file.bookmarks[0].folder()` 获取首个书签的父文件夹。注意该插件未经官方人工审核，建议先在非核心库中测试兼容性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


