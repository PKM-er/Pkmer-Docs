---
uid: 1791709365404000
title: 'Obsidian 插件：Att Meta Map'
tags: ['文件管理', '导航与状态栏', '模板与链接处理', 'obsidian插件']
description: 'Maps resource collections to index notes through the source property, with sidecar/folder layouts and a paired source view. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Att Meta Map

> [!Note] 插件名片
> - 插件名称：Att Meta Map
> - 插件作者：heptazero
> - 插件说明：Maps resource collections to index notes through the source property, with sidecar/folder layouts and a paired source view. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '导航与状态栏', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/heptazero/obsidian-attach-meta-map)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?att-meta-map)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/heptazero/obsidian-attach-meta-map/master/README.md)



## 概述

**Att Meta Map** 是一款将资源集合转化为索引笔记的 Obsidian 插件，通过 `source` 属性建立笔记与附件间的明确关联。

**主要功能**：插件利用 `source` 属性作为唯一权威，将 PDF、幻灯片等附件映射到对应的索引笔记中。它提供“配对视图”，允许在左侧显示资源、右侧复用笔记标签页，并通过侧边栏管理资源关系，支持显式解绑而不删除文件。

**适用场景**：适合需要严格管理文献、课件或项目文档的用户，特别是那些希望保持附件与笔记结构同步，且需处理多语言版本（如中英对照）或配套材料（如讲义、数据）的场景。

**核心特色**：
1. **双布局模式**：支持“Sidecar”（资源与笔记分离但结构镜像）和“Folder”（单一集合根目录，可配置附件折叠深度）两种布局。
2. **智能归并**：能识别 `cn_`、`slides_` 等前缀，自动将配套文件归入对应项目文件夹并更新 `source` 列表。
3. **模板驱动**：通过模板定义字段，映射规则决定其他元数据的来源，逻辑清晰简单。

**使用建议**：建议先确定资源存储结构（Sidecar 或 Folder），再配置模板。利用“配对视图”提升阅读效率，并定期通过侧边栏检查 `source` 关系，确保索引准确。注意该插件未经官方人工审核，建议备份数据后使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


