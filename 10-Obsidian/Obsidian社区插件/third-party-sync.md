---
uid: 1786577083176001
title: 'Obsidian 插件：Third-party Sync'
tags: ['第三方工具集成', '安全与隐私', '备份与恢复', '效率工具', 'obsidian插件']
description: '这个远程保存的非官方插件有安全和功能更新啦，它能让用户在本地设备和云服务之间同步笔记哦。不过它不向后兼容哈。还有哈，Obsidian官方人员还没对这个插件进行人工审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Third-party Sync

> [!Note] 插件名片
> - 插件名称：Third-party Sync
> - 插件作者：nightfall
> - 插件说明：这个远程保存的非官方插件有安全和功能更新啦，它能让用户在本地设备和云服务之间同步笔记哦。不过它不向后兼容哈。还有哈，Obsidian官方人员还没对这个插件进行人工审核呢。
> - 插件分类：['第三方工具集成', '安全与隐私', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nightfall-yl/obsidian-third-party-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?third-party-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nightfall-yl/obsidian-third-party-sync/master/README.md)



## 概述

### 1. 主要功能
该插件是 Remotely Save 的非官方分支，聚焦安全升级，允许用户在本地设备与云服务间同步笔记。

### 2. 适用场景
适用于需要在本地和云服务间同步 Obsidian 笔记，且注重数据安全的用户。

### 3. 核心特色
- **安全升级**：采用更安全的 AES - 256 - GCM 加密算法，内置 GCM AuthTag 验证完整性，每文件随机生成初始化向量，盐长度增加到 16 字节，使用纯浏览器原生 `window.crypto.subtle` API 加密。
- **架构简化**：将支持的存储服务从 13 个减少到 S3、WebDAV、OneDrive 这 3 个主流服务。

### 4. 使用建议
- 此插件与 Remotely Save 不兼容，切换前务必备份保险库。
- 这并非 Obsidian 官方同步服务，使用前始终备份保险库。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


