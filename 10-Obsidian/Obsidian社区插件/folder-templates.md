---
uid: 1791709367159000
title: 'Obsidian 插件：Folder Templates'
tags: ['模板与链接处理', '文件管理', '自动化与AI', 'obsidian插件']
description: 'Automatically apply templates to notes based on their paths. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Folder Templates

> [!Note] 插件名片
> - 插件名称：Folder Templates
> - 插件作者：imbalet
> - 插件说明：Automatically apply templates to notes based on their paths. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/imbalet/folder-templates)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?folder-templates)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/imbalet/folder-templates/master/README.md)



## 概述

**1. 主要功能**
该插件能根据笔记在库中的相对路径，自动或手动将指定模板内容插入到 Markdown 笔记中。支持在新建笔记时自动触发，也可手动应用于现有笔记、文件夹或整个库。

**2. 适用场景**
适用于需要结构化笔记管理的场景，如课程笔记、项目文档或日常记录。当不同目录下的笔记需要不同的标准格式（如标题结构、元数据字段）时，可避免手动重复输入。

**3. 核心特色**
*   **灵活匹配**：支持正则表达式（Regex）和通配符（Glob）两种模式，可通过捕获组动态生成模板路径。
*   **变量替换**：模板内支持 `{{title}}`、`{{date}}`、`{{time}}` 等变量自动填充。
*   **智能控制**：可配置“跳过非空文件”防止覆盖，支持按规则顺序应用首个或所有匹配模板。

**4. 使用建议**
建议先规划好文件夹结构与模板的对应关系，利用正则捕获组实现动态路径映射。对于已有内容的笔记，务必开启“跳过非空文件”选项以防数据丢失。规则按从上到下的顺序检查，请合理排列优先级。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


