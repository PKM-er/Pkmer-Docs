---
uid: 2025081220015032
title: 'Obsidian 插件：Related Notes by Tag'
tags: ['搜索与排序', '导航与状态栏', '效率工具', 'obsidian插件']
description: '在侧边栏显示与当前激活笔记有相同标签的笔记列表。'
author: OS
type: other
draft: false
editable: false
modified: 20251017161500
---

# Obsidian 插件：Related Notes by Tag 显示当前笔记的标签和标签关联的笔记

## 概述

通过基于标签的连接发现 Obsidian 仓库中的相关内容。该插件显示与当前活动笔记中，标签相关的笔记，帮助您找到相关笔记并建立更牢固的知识联系。如果您是重度标签用户，此插件会使标签更加有用。

> [!Note] 插件名片
> - 插件名称：Related Notes by Tag
> - 插件作者：Chris Howard
> - 插件说明：在侧边栏显示与当前激活笔记有相同标签的笔记列表。
> - 插件分类：['搜索与排序', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chrishoward-projects/related-notes-by-tag)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?related-notes-by-tag)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrishoward-projects/related-notes-by-tag/master/README.md)
## 效果&特性

![Related Notes by Tag|800](https://cdn.pkmer.cn/covers/related-notes-by-tag_internal_1.png!pkmer)

1. **主要功能**：通过标签关联，在侧边栏展示与当前活动笔记有相同标签的笔记列表。具备自动发现、实时更新、标签匹配等核心功能，还有灵活排序、标签过滤、显示匹配标签等智能控制选项
2. **适用场景**：适合频繁使用标签管理笔记的用户，帮助他们在Obsidian库中发现相关内容，构建更强大的知识连接
3. **核心特色**：界面简洁；支持灵活排序和过滤；可按标签分组，方便查看；具备快速导航、新标签打开和内容预览等功能

## 使用

1. 需要通过安装使用，通过 obsidian 或者 pkmer 或者 其他手动安装方式
2. 安装后默认会在 右侧栏，顶部生成一个新的 tab 图标，点击即可看到插件主要功能
3. 尝试在笔记中输入一个 tag，如下图，你会看到这个插件ba当前的笔记中包含的标签，和标签关联的笔记都列举出来了

![Related Notes by Tag|400](https://cdn.pkmer.cn/images/20251017160615863.png!pkmer)

> [!note] 注意
> 当 tag 是第一次出现在你仓库里面时，当前插件版本是不支持显示的

- **自动发现**：当您打开任何标记的笔记时立即显示相关笔记
- **实时更新**：当您在笔记之间切换时自动刷新
- **基于标签的匹配**：查找与当前笔记共享一个或多个标签的笔记
- **灵活排序**：按名称、修改日期或创建日期对相关笔记进行排序
- **标签过滤**：设置最低标签匹配要求，同时满足几个标签（1、2 或 3+ 个匹配标签）
- **匹配标签显示**：切换以显示笔记之间共享的特定标签
- **可折叠组**：按标签组织结果，并带有可展开/可折叠的部分
- **文件夹排除**：从特定文件夹中排除文件，对子文件夹进行精细控制

## 设置

1. 可以控制多个标签分组下，是否默认展开
2. 可以设置不做统计的标签
3. 可以设置只查找固定目录下笔记中的标签