---
uid: 2024052908470679
title: Obsidian 插件：Custom File Extensions and Types
tags: ['编辑工具', '数据处理', '文件管理', 'obsidian插件']
description: 这个插件允许从应用设置简单而模块化地控制哪些视图打开哪些文件扩展名。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Custom File Extensions and Types

> [!Note] 插件名片
> - 插件名称：Custom File Extensions and Types
> - 插件作者：MeepTech
> - 插件说明：这个插件允许从应用设置简单而模块化地控制哪些视图打开哪些文件扩展名。
> - 插件分类：[' 编辑工具 ', ' 数据处理 ', ' 文件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/MeepTech/obsidian-custom-file-extensions-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-custom-file-extensions-plugin)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/MeepTech/obsidian-custom-file-extensions-plugin/master/README.md)

## 概述

Obsidian Custom File Extensions 插件允许用户通过设置将文件类型扩展名与不同的应用内视图关联起来，从而实现简单且模块化的控制。

该插件的配置通过一个可解析的 json 对象字符串来完成。例如，`{"markdown": ["", "txt", "html", "js", "css", "ts", "yaml"]}` 将把 ""、"txt"、"html"、"js"、"css"、"ts" 和 "yaml" 这些扩展名与名为 `markdown` 的视图关联起来。

默认设置将 ""、"txt"、"html"、"js"、"css"、"ts" 和 "yaml" 这些扩展名分配给 Obsidian 的 `markdown` 视图。

需要注意的是：

- `markdown` 视图是 Obsidian 用于 "md" 文件的默认视图。
- 目前无法使用此插件修改 "md" 扩展名，它将始终设置为 `markdown` 视图。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



