---
uid: 2024052908533961
title: Obsidian 插件：Geocoding Properties
tags: ['地图与位置', '第三方工具集成', '数据处理', 'obsidian插件']
description: 将地理编码API的地址/位置数据插入为Obsidian属性。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Geocoding Properties

> [!Note] 插件名片
> - 插件名称：Geocoding Properties
> - 插件作者：Jose Elias Alvarez
> - 插件说明：将地理编码 API 的地址/位置数据插入为 Obsidian 属性。
> - 插件分类：[' 地图与位置 ', ' 第三方工具集成 ', ' 数据处理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/jose-elias-alvarez/obsidian-geocoding-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?geocoding-properties)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jose-elias-alvarez/obsidian-geocoding-properties/master/README.md)

## 概述

Obsidian Geocoding Properties 是一个 Obsidian 插件，可以通过地理编码 API 将地址/位置数据插入 Obsidian 属性中。插件在活动笔记上操作，使用以下搜索项之一查询配置的地理编码 API，优先级如下：当前笔记的 `address` 属性（如果设置）、当前笔记的 `title` 属性（如果设置）、当前笔记的名称。在提交搜索项之前，您将被提示编辑搜索项。如果搜索项过于宽泛，API 可能会返回太多结果或零结果，因此通常在提交之前添加额外信息（城市、州、国家）会有所帮助。选择结果后，活动笔记的正文将使用插件设置中指定的属性进行更新。插件的设置包括各个属性的启用/禁用以及自定义键的指定。API 设置包括 API 提供商和 API 密钥（如果使用 Google Geocoding API）。此插件适用于需要将地址/位置数据插入 Obsidian 属性的用户。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



