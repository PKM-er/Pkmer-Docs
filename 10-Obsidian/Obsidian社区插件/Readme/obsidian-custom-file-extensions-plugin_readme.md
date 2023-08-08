---
uid: 2023080322165233
title: Obsidian 插件：【Readme】Custom File Extensions and Types
tags: ['obsidian插件', 'readme']
description: 这个插件允许从应用设置简单而模块化地控制哪些视图打开哪些文件扩展名。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Custom File Extensions and Types

> [!Note] 插件名片
> - 插件名称：Custom File Extensions and Types
> - 插件作者：MeepTech
> - 插件说明：这个插件允许从应用设置简单而模块化地控制哪些视图打开哪些文件扩展名。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/MeepTech/obsidian-custom-file-extensions-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-custom-file-extensions-plugin)

## 概述

这个插件允许从应用设置简单而模块化地控制哪些视图打开哪些文件扩展名。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MeepTech/obsidian-custom-file-extensions-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-custom-file-extensions-plugin]] 插件的自述翻译

# Obsidian 自定义文件扩展名插件

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，通过设置可以将文件类型扩展名与不同的应用内视图关联起来。

配置

配置通过一个单一的设置来完成，该设置接受一个可解析的字符串形式的 json 对象。

例如："`{"markdown": ["", "txt", "html", "js", "css", "ts", "yaml"]}`"

上面的示例将把扩展名：""，"txt"，"html"，"js"，"css"，"ts" 和 "yaml" 分配给以 `markdown` 命名的视图。

### 默认设置

默认设置将扩展名：""、"txt"、"html"、"js"、"css"、"ts"、"yaml" 分配给 Obsidian 的 `markdown` 视图。

### 注意事项

- `markdown` 视图是 Obsidian 默认用于 "md" 文件的视图。
- 目前无法使用此插件修改 "md" 扩展名，并且始终会将其设置为 `markdown` 视图。



