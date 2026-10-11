---
uid: 1791709367930000
title: 'Obsidian 插件：Kinopoisk Film Enricher'
tags: ['第三方工具集成', '数据处理', '图片与PDF', 'obsidian插件']
description: 'Enrich film notes with data from Kinopoisk (description, rating, poster, link). Flexible field-to-property mapping, dynamic API keys, configurable overwrite behavior. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kinopoisk Film Enricher

> [!Note] 插件名片
> - 插件名称：Kinopoisk Film Enricher
> - 插件作者：Andrei
> - 插件说明：Enrich film notes with data from Kinopoisk (description, rating, poster, link). Flexible field-to-property mapping, dynamic API keys, configurable overwrite behavior. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '图片与PDF', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/viz6411/Obsidian-Kinopoisk-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kinopoisk-enricher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/viz6411/Obsidian-Kinopoisk-plugin/master/README.md)



## 概述

**1. 主要功能**
该插件通过 Kinopoisk 非官方 API，为电影和电视剧笔记自动补充描述、评分、海报及链接。支持按标题搜索，并智能匹配电影或剧集类型。

**2. 适用场景**
适用于在 Obsidian 中管理影视库的用户，特别是需要批量整理电影和剧集元数据、建立结构化影视笔记系统的场景。

**3. 核心特色**
*   **类型区分**：电影与剧集拥有独立的字段映射配置，互不干扰。
*   **智能匹配**：优先精确匹配，多结果时弹窗供用户选择。
*   **资源本地化**：自动下载海报至本地指定文件夹，避免外部链接失效。
*   **配额管理**：支持多 API Key 轮换及本地 JSON 缓存，有效节省 API 配额。
*   **剧集增强**：自动计算并记录已播出及未播出的季数信息。

**4. 使用建议**
*   需在设置中配置有效的 Kinopoisk API Key，建议添加多个 Key 以应对配额限制。
*   明确配置笔记识别规则（如 `type: film`），以便插件正确区分电影与剧集。
*   利用“批量丰富”功能一次性更新所有笔记，注意插件会跳过已处理的笔记以节省资源。
*   定期检查 API 配额状态，避免频繁调用导致 Key 失效。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


