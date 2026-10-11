---
uid: 1791709371074000
title: 'Obsidian 插件：Wiki.js Maintainer'
tags: ['第三方工具集成', '发布工具', '文件管理', 'obsidian插件']
description: 'Publish and sync notes from a folder of your vault to a Wiki.js 2.x instance over GraphQL, with drift detection before every push. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Wiki.js Maintainer

> [!Note] 插件名片
> - 插件名称：Wiki.js Maintainer
> - 插件作者：Johannes Kaindl
> - 插件说明：Publish and sync notes from a folder of your vault to a Wiki.js 2.x instance over GraphQL, with drift detection before every push. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johannes-kaindl/wikijs-maintainer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wikijs-maintainer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johannes-kaindl/wikijs-maintainer/master/README.md)



## 概述

**1. 主要功能**
该插件通过 GraphQL API 将 Obsidian 库中指定文件夹的笔记同步并发布到 Wiki.js 2.x 实例。它支持双向同步，能将本地笔记转换为 Wiki 页面，同时允许从 Wiki 拉取新内容回本地。

**2. 适用场景**
适用于希望将个人知识库或团队文档从 Obsidian 无缝发布到自建 Wiki.js 服务器的用户。特别适合需要维护结构化文档、且希望保持“单一数据源”工作流的团队或个人开发者。

**3. 核心特色**
*   **移动即发布**：笔记移入指定文件夹即视为发布，文件夹结构直接映射为 Wiki 路径。
*   **漂移检测与安全机制**：每次推送前自动检查远程时间戳，若发生冲突则展示行级差异供用户决策，绝不静默覆盖。
*   **智能格式转换**：自动将 Obsidian 特有的 Wikilinks 和 Callouts 转换为 Wiki.js 兼容格式，并将未发布笔记的链接降级为纯文本，避免死链。
*   **非破坏性删除**：删除笔记时默认执行“取消发布”而非直接删除，操作可逆。

**4. 使用建议**
建议将需要发布的笔记统一存放于独立文件夹（如 `_published`），利用文件夹结构规划 Wiki 站点层级。在同步前务必仔细审查插件提供的冲突警告和差异报告，确保内容一致性。注意该插件尚未经过 Obsidian 官方人工审核，使用前请备份数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


