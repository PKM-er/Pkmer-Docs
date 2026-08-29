---
uid: 1786577081109004
title: 'Obsidian 插件：OneDrive Bidirectional Sync'
tags: ['文件管理', '第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
description: '通过私人OneDrive应用文件夹在不同设备间同步仓库文件。——此插件尚未经过Obsidian工作人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OneDrive Bidirectional Sync

> [!Note] 插件名片
> - 插件名称：OneDrive Bidirectional Sync
> - 插件作者：naipi11
> - 插件说明：通过私人OneDrive应用文件夹在不同设备间同步仓库文件。——此插件尚未经过Obsidian工作人员的人工审核。
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/naipi11/onedrive-bidirectional-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?onedrive-bidirectional-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/naipi11/onedrive-bidirectional-sync/master/README.md)



## 概述

### 插件名称
OneDrive Bidirectional Sync

### 主要功能
通过OneDrive私有应用文件夹，在Windows、Linux、macOS、iOS和Android等多设备间双向同步Obsidian库文件。可上传和下载文件更改、双向传播文件删除，支持按配置间隔自动同步，还能在文件冲突时保留本地副本。

### 适用场景
适用于需要在不同设备间同步Obsidian笔记的用户，方便在多平台随时访问和编辑笔记。

### 核心特色
- 仅使用最小权限的Microsoft Graph `Files.ReadWrite.AppFolder`权限，保障数据安全。
- 无需OneDrive桌面客户端，直接与Microsoft Graph通信。
- 默认排除`.obsidian`文件夹，避免同步特定设备设置和插件认证数据。

### 使用建议
- 该插件为早期版本，首次同步前备份库文件。
- 避免同时在多设备编辑同一文件。
- 认证令牌存储在本地Obsidian数据文件中，切勿分享该文件。
- 需在Microsoft Entra管理中心创建应用注册，并在插件设置中输入应用客户端ID，所有设备要使用相同的客户端ID、微软账户和库ID。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


