---
uid: 1793625613366001
title: "Obsidian 插件：GitHub Sync - Zev"
tags: ["第三方工具集成", "文件管理", "备份与恢复", "obsidian插件"]
description: "Connect GitHub folders, sync notes offline, and save standalone vaults with linked Markdown reading views. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitHub Sync - Zev

> [!Note] 插件名片
> - 插件名称：GitHub Sync - Zev
> - 插件作者：Zev
> - 插件说明：Connect GitHub folders, sync notes offline, and save standalone vaults with linked Markdown reading views. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/princewth/Obsidian-GitHub_Sync_Zev)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-sync-zev)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/princewth/Obsidian-GitHub_Sync_Zev/master/README.md)



## 概述

GitHub Sync - Zev 允许用户在不安装 Git 客户端的情况下，直接连接 GitHub 仓库的特定文件夹到 Obsidian 库中。它通过下载远程子树中的支持文件到本地，实现笔记的离线编辑与同步。核心功能包括自动拉取远程更新、手动或自动批量提交更改，以及处理文本合并冲突。这意味着你可以像使用本地文件一样管理云端笔记，同时保留 Obsidian 原生的链接、反向链接和图谱索引功能，无需依赖复杂的版本控制工具。

典型场景包括团队协作或跨设备同步。例如，你可以将团队共享的 GitHub 仓库中的 `docs` 文件夹连接到本地 Obsidian，在离线状态下编辑笔记，联网后自动同步更改；或者将个人博客的 Markdown 源文件同步到 GitHub，利用插件的冲突解决机制处理多人编辑时的重叠修改。另一个场景是保存独立库快照，将当前库的笔记和附件打包到新的 GitHub 目录，生成带有可点击链接的阅读视图，方便他人浏览或备份。

相比其他同步插件，该工具的特色在于无需虚拟文件系统或完整克隆仓库，仅物化选定的子树文件，从而保持本地库的整洁。它提供直观的冲突审查界面，支持非重叠文本自动合并，并允许用户选择保留本地、远程或手动合并的结果，避免在笔记中插入冲突标记。此外，它支持多文件夹连接、只读模式以及暂停特定工作区，适合需要精细控制同步范围的用户。

使用前需注意，该插件仅支持特定文件类型（如 .md, .png, .pdf 等），且默认单文件限制为 10 MB，总大小限制为 100 MB。它不会同步隐藏文件、密钥或 `.obsidian` 配置，因此不适合需要完整备份应用设置或处理超大二进制文件的场景。如果仓库包含大量不支持的文件类型或复杂目录结构，建议先预览连接以确认兼容性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


