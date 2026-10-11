---
uid: 1791709365167000
title: 'Obsidian 插件：Account Card Manager'
tags: ['安全与隐私', '效率工具', '数据处理', 'obsidian插件']
description: '卡片式账号密码管理器，采用 AES-GCM-256 加密存储，支持一键复制用户名和密码。 - 此插件尚未由 Obsidian 官方团队进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Account Card Manager

> [!Note] 插件名片
> - 插件名称：Account Card Manager
> - 插件作者：youyc
> - 插件说明：卡片式账号密码管理器，采用 AES-GCM-256 加密存储，支持一键复制用户名和密码。 - 此插件尚未由 Obsidian 官方团队进行人工审核。
> - 插件分类：['安全与隐私', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yyc0704/obsidian-account-card-manager)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?account-card-manager)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yyc0704/obsidian-account-card-manager/master/README.md)



## 概述

**主要功能**
Account Card Manager 是一款轻量级卡片式账号密码管理器。它将网站凭证（标题、URL、用户名、密码）以卡片形式展示，支持一键复制各字段。所有数据均通过 AES-GCM-256 算法本地加密，密钥由主密码经 PBKDF2 派生，确保磁盘上无明文存储。

**适用场景**
适合需要管理少量常用网站账号、且偏好将敏感信息整合在 Obsidian 工作区内的用户。特别适合注重隐私、不希望将凭证同步至公共云存储，或希望快速访问特定服务登录信息的个人用户。

**核心特色**
1. **高强度加密**：采用 AES-GCM-256 加密，主密码仅用于内存中派生密钥，绝不落盘。
2. **便捷交互**：卡片视图清晰直观，支持密码可见性切换及 URL/用户名/密码的一键复制。
3. **灵活解锁**：可选“保持解锁”模式，缓存派生密钥以跳过每次解锁提示，提升操作效率。
4. **完全本地化**：数据仅存储在本地 `data.json` 中，不依赖外部服务。

**使用建议**
1. **务必修改默认主密码**：初始密码为 `root`，请在设置中立即更改为高强度复杂密码。
2. **谨慎开启“保持解锁”**：若操作系统账户与他人共享，请关闭此选项以防密钥被他人利用。
3. **避免云端同步**：尽管数据已加密，但仍建议避免将 Vault 同步至公共云存储，以防潜在风险。
4. **牢记主密码**：若遗忘主密码，数据将无法恢复，只能重置 Vault。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


