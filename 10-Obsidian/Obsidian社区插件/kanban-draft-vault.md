---
uid: 1793625614465000
title: "Obsidian 插件：Kanban Draft Vault"
tags: ["任务管理", "备份与恢复", "编辑工具", "obsidian插件"]
description: "Recover lost text of new Kanban cards when a click outside or Escape closes the form. Keep each draft, open the recovery list and copy the text back. Needs Kanban. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kanban Draft Vault

> [!Note] 插件名片
> - 插件名称：Kanban Draft Vault
> - 插件作者：theluckystrike
> - 插件说明：Recover lost text of new Kanban cards when a click outside or Escape closes the form. Keep each draft, open the recovery list and copy the text back. Needs Kanban. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '备份与恢复', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/kanban-draft-vault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kanban-draft-vault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/kanban-draft-vault/master/README.md)



## 概述

Kanban Draft Vault 专为解决 Obsidian 中 Kanban 插件的文本丢失痛点而设计。当你在新建卡片时，若因误触外部区域或按下 Escape 键导致表单意外关闭，已输入的内容通常会直接消失。该插件会在你输入过程中实时捕获非空文本，将其保存为本地草稿，确保即使表单关闭，你也能随时找回刚才写下的任务描述，避免重复劳动。

想象一下，你正在规划项目看板，刚在“待办”列输入了一段详细的需求描述，却不小心点击了空白处导致编辑框消失。此时，你只需通过命令面板打开“草稿恢复”列表，即可看到刚才的文本、所属看板路径及泳道标签。确认无误后，点击复制按钮，将内容粘贴回新建的卡片中。这种机制让长文本的录入变得安全，不再担心手滑造成的数据丢失。

与仅依赖系统剪贴板的方案不同，该插件提供独立的本地存储机制，草稿在插件重载后依然保留，且不会修改原始看板文件。它还能区分不同泳道中同名标签的记录，确保来源清晰。此外，Pro 版本支持查看历史快照、跨看板搜索以及设置保留期限，帮助用户管理大量草稿。核心功能完全免费，无需账号即可使用，且所有数据仅存储在本地，不上传至任何服务器。

需要注意的是，该插件必须配合 Kanban 社区插件使用，且目前主要经过桌面端测试，移动端及特定系统环境可能存在兼容性问题。它仅负责保存和复制文本，不会自动将草稿插入看板，因此你需要手动检查看板以避免重复创建卡片。如果你不需要保存未提交的草稿，或者主要使用移动端进行看板管理，这款插件可能并非必需。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


