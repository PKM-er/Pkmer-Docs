---
uid: 1791709366491000
title: 'Obsidian 插件：Dependent Properties'
tags: ['模板与链接处理', '数据处理', '自动化与AI', 'obsidian插件']
description: 'Copy frontmatter from linked source notes into dependent notes. Forward and reverse sync. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dependent Properties

> [!Note] 插件名片
> - 插件名称：Dependent Properties
> - 插件作者：Dirk Osburg
> - 插件说明：Copy frontmatter from linked source notes into dependent notes. Forward and reverse sync. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '数据处理', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/borg1622/obsidian-dependent-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dependent-properties)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/borg1622/obsidian-dependent-properties/master/README.md)



## 概述

**1. 主要功能**
该插件实现 Obsidian 笔记间 Frontmatter 属性的自动同步。它允许“依赖笔记”通过属性中的链接指向“源笔记”，并自动从源笔记复制指定的属性值。支持双向同步：修改依赖笔记的链接时拉取源数据（正向同步）；修改源笔记属性时，通过反向链接更新所有关联的依赖笔记（反向同步）。

**2. 适用场景**
适用于需要数据继承且避免手动维护重复数据的场景。典型用例如：事件笔记通过 `venue` 属性链接地点笔记，自动继承地点的 `coordinates` 等属性，从而让 Bases、地图视图或查询能直接利用这些数据，无需在多个笔记中重复填写地址或坐标。

**3. 核心特色**
- **单一事实来源**：源笔记保持数据权威性，依赖笔记仅引用，减少数据冗余。
- **双向实时同步**：无论修改哪一端，插件均能自动触发更新，确保数据一致性。
- **灵活配置**：可自定义根文件夹、链接属性名及需复制的具体属性列表。

**4. 使用建议**
- 确保依赖笔记中用于链接的属性（如 `venue`）包含有效的 Wikilink 或 Markdown 链接。
- 明确指定需同步的属性列表，避免覆盖本地特有数据。
- 注意该插件未经 Obsidian 官方人工审核，建议定期备份数据以防意外冲突。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


