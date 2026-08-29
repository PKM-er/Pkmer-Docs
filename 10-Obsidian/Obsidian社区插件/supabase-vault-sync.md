---
uid: 1786577082876005
title: 'Obsidian 插件：Supabase Vault Sync'
tags: ['第三方工具集成', '备份与恢复', '文件管理', '效率工具', 'obsidian插件']
description: '把你的Obsidian仓库笔记和附件同步到Supabase。——这款插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Supabase Vault Sync

> [!Note] 插件名片
> - 插件名称：Supabase Vault Sync
> - 插件作者：DSN
> - 插件说明：把你的Obsidian仓库笔记和附件同步到Supabase。——这款插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dsnbyte/obsidian-supabase-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?supabase-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dsnbyte/obsidian-supabase-sync/master/README.md)



## 概述

### Supabase Vault Sync插件总结
1. **主要功能**：将Obsidian笔记库中的笔记（含前置元数据）和二进制附件分别双向同步到Supabase的PostgreSQL数据库和存储中。支持多独立笔记库同步，可管理数据库中的笔记库，还能追踪连接设备。
2. **适用场景**：适用于需要在不同设备间同步Obsidian笔记和附件，且希望使用Supabase服务的用户。
3. **核心特色**：采用离线优先架构，离线时变更会安全排队，联网后自动同步；通过邮件和密码安全认证，会话持久；有严格的行级安全策略和私有存储桶隔离，保障数据安全；支持多笔记库命名空间隔离。
4. **使用建议**：安装或配置插件前，备份本地Obsidian笔记库。虽插件有防误删机制，但初始设置和测试时建议进行全新备份。需注意这是非官方同步方案，官方支持的是Obsidian Sync服务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


