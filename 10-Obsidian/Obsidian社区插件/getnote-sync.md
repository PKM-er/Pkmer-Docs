---
uid: 1791709367246000
title: 'Obsidian 插件：Getnote Sync'
tags: ['第三方工具集成', '文件管理', '自动化与AI', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Getnote Sync

> [!Note] 插件名片
> - 插件名称：Getnote Sync
> - 插件作者：AndIwei
> - 插件说明：
> - 插件分类：['第三方工具集成', '文件管理', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/weiman6139-cdr/Getnote-obsidian-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?getnote-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/weiman6139-cdr/Getnote-obsidian-sync/master/README.md)



## 概述

**1. 主要功能**
Getnote Sync 实现“得到大脑”知识库与 Obsidian 本地库的双向同步。支持将远程笔记镜像为本地 Markdown 文件，并允许通过命令面板、右键菜单或仪表盘手动将单篇/多篇笔记推送回远程。此外，它还具备浏览、搜索、创建、打标签及分类笔记的功能，并能自动下载图片附件。

**2. 适用场景**
适用于希望将“得到”中的学习内容整合进个人知识管理体系的用户。特别适合需要在移动端（得到）获取知识，并在桌面端（Obsidian）进行深度编辑、关联和长期管理的知识工作者。

**3. 核心特色**
*   **安全同步机制**：自动拉取为只读模式，写入需显式触发，防止误操作。
*   **智能冲突处理**：通过哈希对比检测变更，保留冲突副本，绝不静默覆盖本地编辑。
*   **附件管理**：专用目录存储附件，支持清理孤儿文件，保持库整洁。
*   **灵活控制**：支持启动、定时或手动触发同步，并在 Frontmatter 中记录同步元数据。

**4. 使用建议**
建议定期执行拉取同步以获取最新内容，但在修改本地笔记后，务必通过显式操作推送回“得到”，以确保数据一致性。注意检查 `_attachments` 目录以管理存储空间，并利用仪表盘高效检索和整理笔记。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


