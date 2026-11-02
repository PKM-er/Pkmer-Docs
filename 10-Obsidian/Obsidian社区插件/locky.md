---
uid: 1793625615104000
title: "Obsidian 插件：Locky"
tags: ["安全与隐私", "文件管理", "效率工具", "obsidian插件"]
description: "Encrypt note contents at rest while keeping the title visible. Lock, unlock, or permanently decrypt notes with a vault-wide password or a per-note password. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Locky

> [!Note] 插件名片
> - 插件名称：Locky
> - 插件作者：Boink!
> - 插件说明：Encrypt note contents at rest while keeping the title visible. Lock, unlock, or permanently decrypt notes with a vault-wide password or a per-note password. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/boinkdevteam/obsidian-locky)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?locky)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/boinkdevteam/obsidian-locky/master/README.md)



## 概述

Locky 旨在解决笔记内容在存储时的隐私安全问题，核心功能是对笔记正文进行加密，同时保留标题可见。它采用 AES-GCM-256 强加密算法，支持使用库级统一密码或为单篇笔记设置独立密码。加密后的笔记仍保持为标准的 Markdown 文件，能在文件浏览器、图谱和链接中正常显示，确保工作流不中断，只有正文内容被密封保护，直到你主动解锁或永久解密。

典型场景包括保护敏感的个人记录或工作机密。例如，你可以将包含银行信息的笔记用独立密码锁定，防止他人通过浏览库级笔记时窥视；或者在公共电脑上使用 Obsidian 时，利用自动锁定功能，在切换笔记或离开一段时间后自动重新加密，避免明文残留。此外，当不再需要保护某篇笔记时，可以一键永久解密，将其恢复为普通 Markdown 文件，彻底移除加密层。

相比同类插件，Locky 的特色在于其严谨的安全机制与用户友好的状态管理。它提供加密自检功能，在覆盖原文前验证密文可逆性，防止因故障导致数据丢失。状态栏会实时显示当前解锁的笔记数量，点击即可一键锁定所有明文笔记。此外，它支持批量操作，允许对文件夹或选中的多篇笔记进行锁定、解锁或永久解密，极大提升了管理大量敏感笔记的效率。

使用前需注意，Locky 不提供密码找回功能，忘记密码将导致笔记永久无法恢复，务必做好重要数据的备份。解锁状态下，笔记明文会写入磁盘，虽然插件有崩溃恢复机制，但强制退出仍可能留下明文风险。因此，它不适合对“绝对零明文残留”有极端要求的场景，也不适合那些希望完全隐藏笔记标题或文件名的用户，因为标题始终可见。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


