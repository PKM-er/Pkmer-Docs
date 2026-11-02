---
uid: 1793625618343000
title: "Obsidian 插件：Nextcloud Collectives Sync"
tags: ["第三方工具集成", "文件管理", "备份与恢复", "obsidian插件"]
description: "Synchronize all Nextcloud Collectives of a server bidirectionally with your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nextcloud Collectives Sync

> [!Note] 插件名片
> - 插件名称：Nextcloud Collectives Sync
> - 插件作者：Martin Schumacher
> - 插件说明：Synchronize all Nextcloud Collectives of a server bidirectionally with your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/keineantwort/obsidian-nextcloud-collectives)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nextcloud-collectives)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/keineantwort/obsidian-nextcloud-collectives/master/README.md)



## 概述

Nextcloud Collectives Sync 实现了 Obsidian 笔记库与 Nextcloud 服务器端 Collectives 应用的双向同步。它将服务器上的每个集体（Collective）映射为库中的一个顶级文件夹，页面则对应具体的笔记文件。你可以在桌面或手机上通过 Obsidian 编辑内容，而同事们在浏览器中继续工作，双方修改会自动同步。该插件支持页面层级结构、Emoji 标签、内部链接以及附件的双向传输，确保本地笔记与云端协作内容保持一致。

典型场景适用于需要混合使用本地深度编辑与云端轻量协作的团队。例如，你可以将 Obsidian 作为个人知识库的主编辑环境，同时利用 Nextcloud 的网页端与同事共享项目文档。当你在 Obsidian 中重命名或移动笔记时，服务器端会同步更新；反之，同事在网页端新建的页面也会自动出现在你的库中。这种模式消除了手动导出导入的繁琐，让知识管理在本地与云端之间无缝流转。

相比其他同步工具，该插件的核心特色在于其冲突处理机制。当同一页面在两端同时被修改时，它不会静默覆盖任何一方的内容，而是保留两个版本并弹出对话框供用户选择保留哪一版。此外，删除操作具有保护机制：在服务器端删除页面需用户确认，且删除后的内容会进入 Collectives 回收站而非直接消失。这种设计极大降低了数据误删或意外覆盖的风险，适合对数据完整性要求较高的用户。

使用前请务必注意，该插件会双向写入数据，存在潜在风险。强烈建议在首次同步前对 Obsidian 库和 Nextcloud 服务器上的重要集体进行独立备份，并建议使用全新的空库进行初始同步以避免数据合并混乱。该插件不适合需要多账号或多服务器同时同步的场景，因为一个库仅绑定一个服务器和一个账号。若你主要依赖浏览器端编辑且极少使用本地 Obsidian，或不需要复杂的冲突解决逻辑，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


