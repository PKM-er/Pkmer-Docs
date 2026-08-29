---
uid: 1786577076913005
title: 'Obsidian 插件：Cloud WebDAV Sync'
tags: ['第三方工具集成', '备份与恢复', '效率工具', '文件管理', 'obsidian插件']
description: '云端WebDAV同步是一款实验性的WebDAV同步插件，具备内容寻址存储、提交快照、功能检查、安全更新、同步历史记录、诊断功能，还能解决本地/远程冲突。不过，这款插件尚未经过Obsidian官方人员的人工审核哦。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cloud WebDAV Sync

> [!Note] 插件名片
> - 插件名称：Cloud WebDAV Sync
> - 插件作者：SEVENTEEN
> - 插件说明：云端WebDAV同步是一款实验性的WebDAV同步插件，具备内容寻址存储、提交快照、功能检查、安全更新、同步历史记录、诊断功能，还能解决本地/远程冲突。不过，这款插件尚未经过Obsidian官方人员的人工审核哦。
> - 插件分类：['第三方工具集成', '备份与恢复', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/seventeen-tan/cloud-webdav-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloud-webdav-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/seventeen-tan/cloud-webdav-sync/master/README.md)



## 概述

### 主要功能
Cloud WebDAV Sync是一款实验性WebDAV同步插件，可将笔记和附件存储在WebDAV支持的仓库中。支持手动和自动同步检查、本地变更队列合并、状态显示、冲突解决、日志记录等功能。

### 适用场景
适用于需要将Obsidian笔记和附件同步到WebDAV存储的用户，在多设备间使用笔记时保持数据一致。

### 核心特色
- 采用内容寻址存储、验证提交快照等技术，减少意外覆盖。
- 根据WebDAV服务器能力选择远程HEAD更新策略。
- 提供冲突解决工作区，支持文件版本选择和冲突预览。
- 密码通过应用的SecretStorage API存储，增强安全性。

### 使用建议
- 版本0.9.9默认仅为规划模式，需在设置中显式启用真实同步。
- 修改URL、远程文件夹、用户名或密码时，缓存的WebDAV能力报告将失效。
- 利用同步中心的各功能区查看同步信息和处理冲突。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


