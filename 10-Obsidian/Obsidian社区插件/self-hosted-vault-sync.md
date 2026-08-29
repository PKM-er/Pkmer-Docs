---
uid: 1786577082449005
title: 'Obsidian 插件：Self-Hosted Vault Sync'
tags: ['文件管理', '效率工具', '备份与恢复', '第三方工具集成', 'obsidian插件']
description: '通过自建服务器实现快速、可靠的仓库同步——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Self-Hosted Vault Sync

> [!Note] 插件名片
> - 插件名称：Self-Hosted Vault Sync
> - 插件作者：Valentin Britvich
> - 插件说明：通过自建服务器实现快速、可靠的仓库同步——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['文件管理', '效率工具', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/peoneer/self-hosted-vault-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?self-hosted-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/peoneer/self-hosted-vault-sync/master/README.md)



## 概述

### Self-Hosted Vault Sync插件总结
1. **主要功能**：借助自建服务器实现Obsidian库的快速可靠同步。支持文件变更自动推送、启动时及定时拉取更新，桌面端实时推送，采用增量同步，能安全处理冲突写入，还可设置排除规则。
2. **适用场景**：适用于需要在多设备间同步Obsidian库，且希望摆脱第三方同步服务限制，自行掌控数据存储和同步的用户。
3. **核心特色**：无需依赖第三方，无供应商锁定和库大小限制；仅传输变更文件，节省带宽；冲突写入时保存冲突副本，避免覆盖新内容；支持通过二维码快速配对新设备。
4. **使用建议**：先部署同步服务器，获取引导令牌；在首台设备安装并启用插件，在设置中填入服务器URL、认证令牌、同步间隔和排除规则，启动初始同步；后续添加设备可通过已配置设备生成二维码扫描完成配对。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


