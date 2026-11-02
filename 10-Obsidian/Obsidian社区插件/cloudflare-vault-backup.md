---
uid: 1793625610976000
title: "Obsidian 插件：Cloudflare Vault Backup"
tags: ["备份与恢复", "第三方工具集成", "安全与隐私", "obsidian插件"]
description: "Back up your vault to your own Cloudflare R2 bucket with versioned snapshots, per-note restore and optional encryption. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cloudflare Vault Backup

> [!Note] 插件名片
> - 插件名称：Cloudflare Vault Backup
> - 插件作者：Bapusaheb Patil
> - 插件说明：Back up your vault to your own Cloudflare R2 bucket with versioned snapshots, per-note restore and optional encryption. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bapspatil/cloudflare-vault-backup)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloudflare-vault-backup)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bapspatil/cloudflare-vault-backup/master/README.md)



## 概述

Cloudflare Vault Backup 将你的 Obsidian 库备份到自有的 Cloudflare R2 存储桶，提供带版本控制的快照、单篇笔记恢复及可选的客户端加密。它是一款单向备份工具，本地库始终是唯一数据源，备份过程绝不会修改本地文件，因此无法从桶中恢复已删除的内容，也不支持双向同步。

典型场景包括误删单篇笔记后的快速找回，或定期归档重要文档。例如，当你修改了某篇笔记后，插件仅上传该文件的新版本和清单，未变动的文件不会重复上传，极大节省流量和存储空间。任何历史快照都可完整还原至当时的状态，方便回溯旧版内容。

相比同类插件，其核心特色在于内容寻址存储机制，确保未变更文件只存一份，且支持加密备份。加密开启后，文件内容和清单在离开设备前即被加密，仅对象大小、快照时间等元数据可见。插件无遥测功能，仅连接你的 R2 端点，密钥存储在 Obsidian 安全存储中，隐私性较好。

使用前需注意，你需要拥有启用 R2 的 Cloudflare 账户，且超出免费额度后可能产生费用。该插件不适合需要实时双向同步、多设备自动合并编辑或从云端恢复已删除本地文件的用户。它仅作为本地数据的离线副本，不能替代 Obsidian Sync 或文件恢复功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


