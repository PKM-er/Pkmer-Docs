---
uid: 1791709367157000
title: 'Obsidian 插件：Folder Tags'
tags: ['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Automatically apply tags to notes based on their paths. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Folder Tags

> [!Note] 插件名片
> - 插件名称：Folder Tags
> - 插件作者：imbalet
> - 插件说明：Automatically apply tags to notes based on their paths. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/imbalet/folder-tags)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?folder-tags)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/imbalet/folder-tags/master/README.md)



## 概述

**主要功能**
Folder Tags 插件能根据笔记在库中的相对路径，自动向 Markdown 文件的 YAML 前置元数据中添加标签。支持在新建笔记时自动应用，或手动对单篇笔记、文件夹及整个库执行。

**适用场景**
适用于需要严格层级结构的知识库，如课程资料、项目文档或按分类归档的笔记库。特别适合希望利用路径结构自动实现多维标签分类，以便后续检索和关联的用户。

**核心特色**
1. **灵活匹配**：同时支持正则表达式（含命名/位置捕获组）和 Glob 通配符模式，规则可高度定制。
2. **智能合并**：自动将标签合并至现有元数据，保留手动标签，去重且安全，重复执行不会产生冗余。
3. **动态生成**：标签值可引用路径中的特定部分（如课程名、主题名），实现从路径到标签的自动化映射。

**使用建议**
建议先通过“Apply automatically”设置确定自动触发时机。配置规则时，优先使用 Glob 模式处理简单层级，使用正则处理复杂路径提取。注意规则是累积应用的，多规则匹配会叠加标签，请合理规划规则顺序以避免标签冲突。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


