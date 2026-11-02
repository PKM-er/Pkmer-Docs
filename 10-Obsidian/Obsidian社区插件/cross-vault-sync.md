---
uid: 1793625611408000
title: "Obsidian 插件：Cross-Vault Sync"
tags: ["文件管理", "备份与恢复", "效率工具", "obsidian插件"]
description: "Keep notes synchronized across multiple vaults using the sync_targets frontmatter property. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cross-Vault Sync

> [!Note] 插件名片
> - 插件名称：Cross-Vault Sync
> - 插件作者：Einar Aleksejev
> - 插件说明：Keep notes synchronized across multiple vaults using the sync_targets frontmatter property. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ealeksejev/cross-vault-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cross-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ealeksejev/cross-vault-sync/master/README.md)



## 概述

Cross-Vault Sync 旨在解决多库笔记内容不一致的痛点，通过 frontmatter 中的 `sync_targets` 属性，实现不同 Obsidian 库之间笔记的双向自动同步。它摒弃了易失效的系统级硬链接或符号链接，改为在每个库中维护独立的真实 Markdown 文件，并在后台实时比对内容。无论笔记在哪个库被编辑，插件都能确保所有副本保持完全一致，彻底避免了因文件系统限制或云同步冲突导致的笔记版本分裂问题。

典型场景适用于工作库与个人知识库并存的用户。例如，你希望将一份“项目规范”同时保存在工作库的 `Projects` 文件夹和个人库的 `Notes` 文件夹中。只需在笔记头部配置两个目标路径，插件便会自动处理同步。即使你在两个库中分别对笔记进行了不同位置的修改，插件也能智能识别最新变更，将旧版本保存为冲突备份，确保数据不丢失且始终可用最新内容。

相比其他同步方案，该插件的核心特色在于其无中心化的状态管理机制。每个笔记副本都在 frontmatter 中独立记录同步版本、哈希值及已知目标列表，不依赖外部数据库或中心服务器。这意味着即使在不同电脑、不同文件夹路径下使用，只要库名一致，同步逻辑依然有效。此外，它完美兼容 Obsidian Sync，既支持本地实时同步，也能通过云同步服务在设备间传递变更，且能自动检测后台或关闭状态下的外部修改。

使用前需注意，删除操作不会自动传播，若需恢复被删副本需手动触发同步；同时，目标文件夹若不存在则会被跳过，插件不会自动创建目录。该插件不适合需要频繁重命名笔记且希望所有库同步改名的场景，因为各库副本可独立命名。此外，请勿在同步的库中同时使用会频繁重写笔记元数据的插件，以免引发无限冲突循环。所有参与同步的库必须安装相同版本的插件，且建议将 OneDrive 同步文件夹设置为“始终保留在此设备上”以优化性能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


