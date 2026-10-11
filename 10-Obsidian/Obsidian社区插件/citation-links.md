---
uid: 1791709366021000
title: 'Obsidian 插件：Citation Links'
tags: ['模板与链接处理', '学术与科研', '第三方工具集成', 'obsidian插件']
description: 'Renders wikilinks to Better BibTeX citekeys as APA 7 in-text citations while keeping them clickable vault links. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Citation Links

> [!Note] 插件名片
> - 插件名称：Citation Links
> - 插件作者：Gerrit Kruse
> - 插件说明：Renders wikilinks to Better BibTeX citekeys as APA 7 in-text citations while keeping them clickable vault links. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '学术与科研', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gerritkruse/obsidian-citation-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?citation-links)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gerritkruse/obsidian-citation-links/master/README.md)



## 概述

**1. 主要功能**
该插件将指向 Better BibTeX citekey 的 Obsidian 双链自动渲染为 APA 7 格式的正文引用（如“Author et al., Year”），同时保留其作为 Vault 内部链接的可点击性，确保点击后仍能打开对应的文献笔记。

**2. 适用场景**
适用于使用 Zotero 和 Better BibTeX 管理参考文献，并希望在 Obsidian 中撰写学术笔记、论文或综述的研究者。仅支持桌面端（Obsidian 1.13.0+）。

**3. 核心特色**
*   **双向兼容**：在实时预览和阅读模式下均显示标准引用格式，且不影响图谱视图和反向链接功能。
*   **离线渲染**：直接读取本地 CSL JSON 文件，无需 Zotero 保持运行状态即可正常显示引用。
*   **自动同步**：依赖 Better BibTeX 的“Keep updated”功能，当 Zotero 库变更时自动更新引用数据。

**4. 使用建议**
*   安装后必须在插件设置中指定 CSL JSON 导出文件夹的路径，否则无法渲染。
*   需在 Zotero 中为每个引用的库（个人及群组库）配置 Better CSL JSON 格式导出，并勾选“Keep updated”。
*   若引用多个库，建议在 Better BibTeX 设置中将 citekey 唯一性设为“across all libraries”以避免冲突。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


