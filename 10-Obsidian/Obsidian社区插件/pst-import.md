---
uid: 1786577081708000
title: 'Obsidian 插件：PST Import'
tags: ['数据处理', '文件管理', '第三方工具集成', '模板与链接处理', '效率工具', 'obsidian插件']
description: '把Outlook的PST邮件归档文件导入为带有元数据、附件和Obsidian维基链接的Markdown文件。通过纯JavaScript技术，支持导入任意大小的PST文件（包括大于2GB的Unicode PST文件）。 - 此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PST Import

> [!Note] 插件名片
> - 插件名称：PST Import
> - 插件作者：wenjunzhu
> - 插件说明：把Outlook的PST邮件归档文件导入为带有元数据、附件和Obsidian维基链接的Markdown文件。通过纯JavaScript技术，支持导入任意大小的PST文件（包括大于2GB的Unicode PST文件）。 - 此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['数据处理', '文件管理', '第三方工具集成', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wenciara/obsidian-pst-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pst-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wenciara/obsidian-pst-importer/master/README.md)



## 概述

### PST Import 插件总结
1. **主要功能**：可将 Outlook 的 PST 邮件存档导入 Obsidian，转换为带元数据、附件和 Obsidian 维基链接的 Markdown 文件。支持一次性归档历史 PST 文件，也能通过维护轻量的 staging PST 持续同步新邮件。
2. **适用场景**：适用于需要将 Outlook 邮件整理成知识库，方便搜索和链接的场景；也适用于不使用 Microsoft Copilot，想接入 AI 插件（如 Claudian）处理邮件的场景。
3. **核心特色**：采用纯 JavaScript，支持任意大小的 PST 文件（包括 >2GB 的 Unicode PST）；具备增量同步功能，自动跳过已导入邮件；能保留 PST 文件夹层级结构。
4. **使用建议**：可通过 Obsidian 社区插件、BRAT 或手动方式安装该插件。若需持续同步邮件，可维护好轻量的 staging PST 文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


