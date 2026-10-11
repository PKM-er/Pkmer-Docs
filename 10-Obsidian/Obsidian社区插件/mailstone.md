---
uid: 1791709368269000
title: 'Obsidian 插件：Mailstone'
tags: ['第三方工具集成', '日历与时间', '文件管理', '效率工具', 'obsidian插件']
description: 'Mail as vault notes: a server-side folder decides what becomes a note. Sends iMIP invitations for calendar-notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mailstone

> [!Note] 插件名片
> - 插件名称：Mailstone
> - 插件作者：Johannes Kaindl
> - 插件说明：Mail as vault notes: a server-side folder decides what becomes a note. Sends iMIP invitations for calendar-notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '日历与时间', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johannes-kaindl/mailstone)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mailstone)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johannes-kaindl/mailstone/master/README.md)



## 概述

**插件名称：Mailstone**

**1. 主要功能**
将服务器指定 IMAP 文件夹中的邮件自动同步为 Obsidian 笔记。以 Message-ID 为唯一标识，同步生成 Markdown 笔记并保留原始 .eml 文件。支持通过 SMTP 发送邮件，并能代表 `calendar-notes` 插件发送 iMIP 日历邀请。

**2. 适用场景**
适合希望将重要邮件、会议通知或待办事项直接转化为知识库内容的用户。适用于需要跨设备（手机/Webmail/邮件规则）进行邮件分诊，并统一在 Obsidian 中管理邮件与日历的场景。

**3. 核心特色**
*   **服务端驱动**：由服务器端文件夹决定哪些邮件成为笔记，而非本地规则。
*   **非破坏性阅读**：在 Obsidian 中阅读邮件不会将其标记为已读，保持邮件客户端状态同步。
*   **数据可重建**：保留原始 .eml 文件，确保笔记内容可随时从源头重建。
*   **日历集成**：原生支持 iMIP 协议，实现邮件与日历笔记的无缝联动。

**4. 使用建议**
*   需在邮件服务器设置特定 IMAP 文件夹作为“笔记源”，通过移动邮件至该文件夹触发同步。
*   建议配合 `calendar-notes` 插件使用，以完整体验日历邀请功能。
*   注意：该插件未经 Obsidian 官方人工审核，使用前请备份数据；支持桌面端及移动端（只读）。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


