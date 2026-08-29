---
uid: 1786577076021001
title: 'Obsidian 插件：Aliyun Drive Sync'
tags: ['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: '把Obsidian仓库同步到选定的阿里云盘云文件夹。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Aliyun Drive Sync

> [!Note] 插件名片
> - 插件名称：Aliyun Drive Sync
> - 插件作者：Wjiajie
> - 插件说明：把Obsidian仓库同步到选定的阿里云盘云文件夹。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wjiajie/obsidian-aliyun-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?aliyun-drive-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wjiajie/obsidian-aliyun-sync/master/README.md)



## 概述

### 插件名称
Aliyun Drive Sync

### 主要功能
将 Obsidian 知识库双向同步到阿里云盘指定云端文件夹，支持多设备同步。可基于本地、云端状态及同步历史进行增量同步，用 SHA-1 内容 hash 校验文件变化。具备自动同步功能，在启动时、定期及文件变更后延迟同步。

### 适用场景
适用于多设备使用 Obsidian 且需保持知识库同步的用户，可将本地知识及时备份到云端，也能获取其他设备的更新。

### 核心特色
不依赖阿里云盘桌面客户端和本地镜像文件夹，通过开放接口读写云端文件；同步各阶段有进度反馈；可配置并行传输并对网络或速率限制错误重试；有冲突处理、删除保护和重复文件夹保护机制；刷新令牌仅存于本地插件数据。

### 使用建议
首次使用前备份重要 vault ，每个 vault 使用专用远程文件夹；安全要求高时，自建 OpenList APIPages 续期接口。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


