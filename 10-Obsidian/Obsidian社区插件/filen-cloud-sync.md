---
uid: 1791709367043000
title: 'Obsidian 插件：Filen Cloud Sync'
tags: ['文件管理', '第三方工具集成', '安全与隐私', '备份与恢复', '移动端优化', 'obsidian插件']
description: 'Two-way sync between your vault and Filen, a zero-knowledge end-to-end encrypted cloud storage. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Filen Cloud Sync

> [!Note] 插件名片
> - 插件名称：Filen Cloud Sync
> - 插件作者：Real-Fruit-Snacks
> - 插件说明：Two-way sync between your vault and Filen, a zero-knowledge end-to-end encrypted cloud storage. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '安全与隐私', '备份与恢复', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/real-fruit-snacks/obsidian-filen-cloud-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?filen-cloud-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/real-fruit-snacks/obsidian-filen-cloud-sync/master/README.md)



## 概述

**插件名称**：Filen Cloud Sync

**主要功能**
实现 Obsidian 仓库与 Filen 云存储之间的双向同步。支持编辑、删除、重命名及空文件夹的准确协调，采用零知识端到端加密，数据在设备端加密后传输，密码仅用于密钥推导且不存储。

**适用场景**
适用于需要在桌面端和移动端（iOS/Android）之间无缝同步笔记数据的用户，特别适合注重隐私安全、希望使用端到端加密云存储替代传统网盘的场景。

**核心特色**
1. **真双向同步**：基于持久化三方基准状态，精准区分删除与新文件，避免数据丢失。
2. **全平台支持**：无 Node 依赖，无需代理服务器，原生支持移动端。
3. **灵活同步模式**：默认双向，可切换为单向推送或拉取，并提供“立即同步”按钮。
4. **安全与冲突处理**：删除文件进入可恢复回收站；冲突默认保留双份副本，支持“保留较新”或“并排合并”视图，避免通知风暴。

**使用建议**
鉴于同步插件会写入和删除文件，建议首次使用前在仓库副本上测试，并保留一份该插件无法触及的本地备份。注意利用“暂停同步”功能防止意外覆盖，并定期检查冲突清理视图以解决数据差异。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


