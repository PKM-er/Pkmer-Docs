---
uid: 1793625622592000
title: "Obsidian 插件：Telegram Backup"
tags: ["备份与恢复", "第三方工具集成", "文件管理", "效率工具", "obsidian插件"]
description: "Back up notes, folders and your whole vault to a Telegram channel or chat with your own bot. Type a trigger in a note to send it instantly. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Telegram Backup

> [!Note] 插件名片
> - 插件名称：Telegram Backup
> - 插件作者：Soheil Shiravi
> - 插件说明：Back up notes, folders and your whole vault to a Telegram channel or chat with your own bot. Type a trigger in a note to send it instantly. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/soheilshiravi/Obsidian-Telegram-Backup)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?telegram-backup)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/soheilshiravi/Obsidian-Telegram-Backup/master/README.md)



## 概述

Telegram Backup 将你的 Obsidian 笔记库无缝同步至 Telegram，利用其免费且无限的云端存储特性，构建快速、可搜索的备份历史。核心功能包括一键备份当前笔记、在笔记内输入 `;;backup` 即时推送，以及按小时、天或周自动备份整个库。它支持将笔记转换为保留格式的 Telegram 消息或原始 Markdown 文件，并允许从 Telegram 直接恢复旧版本笔记，实现真正的双向数据管理。

典型场景包括日常写作与紧急数据保护。例如，当你完成一篇重要文章时，只需在编辑器中运行命令或输入触发词，笔记即刻上传至你的私有频道；若担心本地文件丢失，可随时在 Obsidian 中选取频道里的历史版本进行恢复。此外，对于临时灵感，使用 `;;send` 可将单行文本快速发送，既作为提醒又作为轻量级备份，无需手动整理文件。

相比传统本地备份或网盘同步，该插件的特色在于深度集成与增量效率。它支持增量备份，仅传输自上次备份后变更的文件，大幅节省流量与时间。附件如图片和 PDF 会随笔记自动发送，且未变更的附件不会重复上传。此外，Obsidian 标签会自动转换为 Telegram 话题标签，方便在频道内通过标签搜索历史内容。Bot Token 存储在设备密钥链中，确保安全性，且支持桌面与移动端多语言环境。

使用前需注意，你需要自行创建 Telegram Bot 并配置私有频道，设置过程约需五分钟。该插件依赖 Telegram 服务，若你所在地区网络受限或无法访问 Telegram，则无法使用。它不适合对数据隐私有极高要求、禁止使用第三方云服务的场景，也不适合需要完全离线备份的用户。若你主要依赖本地硬盘或企业级云存储，且对 Telegram 的生态无需求，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


