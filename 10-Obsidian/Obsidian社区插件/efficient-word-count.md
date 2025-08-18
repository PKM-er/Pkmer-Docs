---
uid: 2025081220015016
title: 'Obsidian 插件：Efficient Word Count'
tags: ['文字处理', '数据处理', '效率工具', 'obsidian插件']
description: '能高效计算并缓存笔记的字数，还能排除特定文件夹。借助缓存机制，无需对未改动的笔记重新计算字数。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Efficient Word Count

> [!Note] 插件名片
> - 插件名称：Efficient Word Count
> - 插件作者：Blue Heron
> - 插件说明：能高效计算并缓存笔记的字数，还能排除特定文件夹。借助缓存机制，无需对未改动的笔记重新计算字数。
> - 插件分类：['文字处理', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/blueheron786/obsidian-efficient-word-count)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?efficient-word-count)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/blueheron786/obsidian-efficient-word-count/master/README.md)



## 概述

### 主要功能
该插件能高效计算并缓存Obsidian库中所有Markdown文件的字数，支持排除指定文件夹，实时响应文件的创建、修改、删除和重命名事件更新缓存，还提供全局API获取特定文件或全部文件的字数。

### 适用场景
适用于需要统计Markdown笔记字数、进行写作量统计的场景，尤其在笔记数量较多时，能快速获取字数信息。

### 核心特色
- 自动构建并缓存字数，避免对未更改文件重复计算。
- 支持自定义排除文件夹，默认排除 `Templates` 和 `.trash`。
- 缓存数据持久化到磁盘，加快启动速度。

### 使用建议
- 可通过社区插件浏览器安装，也能手动安装。安装后等待几秒让缓存构建完成。
- 在DataviewJS脚本或自定义脚本中，通过全局对象 `window.wordCountCache` 调用 `get(path)` 和 `total()` 方法获取字数。
- 可在插件设置中配置要排除的文件或文件夹。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


