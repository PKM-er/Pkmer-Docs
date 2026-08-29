---
uid: 1786577081629000
title: 'Obsidian 插件：Private Sync'
tags: ['第三方工具集成', '备份与恢复', '效率工具', '安全与隐私', 'obsidian插件']
description: '把Obsidian仓库和私有服务器同步。——这款插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Private Sync

> [!Note] 插件名片
> - 插件名称：Private Sync
> - 插件作者：Haniewicz
> - 插件说明：把Obsidian仓库和私有服务器同步。——这款插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '备份与恢复', '效率工具', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/haniewicz/PrivateSyncPlugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?private-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/haniewicz/PrivateSyncPlugin/master/README.md)



## 概述

### Private Sync插件总结
1. **主要功能**：将Obsidian库与自托管的Private Sync Server后端进行同步。
2. **适用场景**：适用于希望将Obsidian笔记数据同步到自己搭建的服务器，而非使用默认云服务的用户。
3. **核心特色**：不使用作者提供的默认云，默认不向任何外部服务发送数据，用户可在插件设置中提供自己服务器的URL，保障数据隐私。
4. **使用建议**：
    - 需Obsidian `1.11.4` 或更高版本，有可通过HTTP或HTTPS访问的Private Sync Server，且配置好服务器密码。建议使用HTTPS，尤其在非本地网络连接时。
    - 安装时，从GitHub Releases下载相关文件，创建插件文件夹并复制文件进去，在Obsidian中启用插件，在设置里输入服务器URL等信息后点击“配对”。首次设备可能自动配对，后续设备需已配对设备批准或服务器的一次性恢复配对码。开发者可通过`npm install`和`npm run build`构建。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


