---
uid: 1791709370812000
title: 'Obsidian 插件：Vault Canary'
tags: ['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: 'Warns when your vault unexpectedly loses files, Markdown notes, or storage size. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Canary

> [!Note] 插件名片
> - 插件名称：Vault Canary
> - 插件作者：nyonyataro
> - 插件说明：Warns when your vault unexpectedly loses files, Markdown notes, or storage size. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nyonyataro/obsidian-vault-canary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-canary)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nyonyataro/obsidian-vault-canary/master/README.md)



## 概述

**Vault Canary** 是一款本地优先的 Obsidian 插件，旨在监控库内容异常缩减，防止文件意外丢失。

**主要功能**：通过记录文件总数、Markdown 笔记数及总大小建立基准线，并在启动、定期或文件变动后检测当前状态。若检测到文件大量消失（如减少 50 个以上或 10% 以上）或体积骤减（20% 以上），即发出警告。

**适用场景**：适用于依赖同步工具、自动化脚本或第三方软件管理笔记的用户，用于捕捉同步错误、自动化故障或意外批量删除等隐蔽问题。

**核心特色**：
1. **安全机制**：警告不会自动更新基准线，防止误删成为“新常态”，需用户确认恢复或手动重置基准。
2. **灵活配置**：所有阈值均可自定义，支持日文/英文界面，默认跟随 Obsidian 语言。
3. **轻量高效**：仅监控聚合指标，不扫描具体文件内容，减少性能开销。

**使用建议**：该插件仅为“早期预警信号”，**非备份工具**。请务必配合独立备份或版本历史使用，以便在警报触发后恢复文件。确认缩减为预期操作后，再手动设置新基准。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


