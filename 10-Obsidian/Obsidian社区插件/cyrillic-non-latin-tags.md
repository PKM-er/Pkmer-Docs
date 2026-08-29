---
uid: 1786577077244003
title: 'Obsidian 插件：Cyrillic and Non-Latin Tags'
tags: ['样式与美化', '编辑工具', '第三方工具集成', '自定义命令', 'obsidian插件']
description: '在编辑视图中，为包含任何非拉丁字母（西里尔字母、象形文字、变音符号等）的标签添加自定义 CSS 类。可以通过 CSS 代码片段和第三方插件对非拉丁标签进行样式设置。——此插件尚未经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cyrillic and Non-Latin Tags

> [!Note] 插件名片
> - 插件名称：Cyrillic and Non-Latin Tags
> - 插件作者：Kirill Chokparov
> - 插件说明：在编辑视图中，为包含任何非拉丁字母（西里尔字母、象形文字、变音符号等）的标签添加自定义 CSS 类。可以通过 CSS 代码片段和第三方插件对非拉丁标签进行样式设置。——此插件尚未经过 Obsidian 官方人员的人工审核。
> - 插件分类：['样式与美化', '编辑工具', '第三方工具集成', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/javatutor-ru/obsidian-cyrillic-non-latin-tags)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cyrillic-non-latin-tags)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/javatutor-ru/obsidian-cyrillic-non-latin-tags/master/README.md)



## 概述

### 插件名称
Cyrillic and Non-Latin Tags

### 主要功能
在编辑视图中，为包含非拉丁字母（西里尔字母、象形文字、变音符号等）的标签添加自定义 CSS 类，可通过 CSS 片段或第三方插件自定义非拉丁标签的外观。

### 适用场景
适用于使用非拉丁字母标签记录笔记，且希望对这些标签进行个性化样式设置的 Obsidian 用户。

### 核心特色
- 零配置，安装启用后通过单个开关控制。
- 仅处理包含至少一个非拉丁字母的标签，拉丁标签保持标准样式。
- 为非拉丁标签添加通用类 `cm-tag-non-latin` 和特定标签的动态类 `cm-tag-[tag_name]`，方便统一或单独设置样式。

### 使用建议
安装并在 Obsidian 设置中启用插件。可在 `.obsidian/snippets` 文件夹的 CSS 片段中使用新增的类来设置标签样式，如改变背景色、文字颜色、字体粗细等。对于嵌套标签，类名会去除斜杠。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


