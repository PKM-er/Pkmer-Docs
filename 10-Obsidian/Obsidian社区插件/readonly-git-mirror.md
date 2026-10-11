---
uid: 1791709366434000
title: 'Obsidian 插件：Data Transmission'
tags: ['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Receive items from a personal inbox server into your vault. Link with a one-time setup code; syncs every 10 seconds, only adds files, and never deletes or overwrites your notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Data Transmission

> [!Note] 插件名片
> - 插件名称：Data Transmission
> - 插件作者：wangru
> - 插件说明：Receive items from a personal inbox server into your vault. Link with a one-time setup code; syncs every 10 seconds, only adds files, and never deletes or overwrites your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yomicoding/Obs-readonly-git-mirror)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?readonly-git-mirror)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yomicoding/Obs-readonly-git-mirror/master/README.md)



## 概述

**1. 主要功能**
接收个人收件服务器推送的笔记及附件（图片、PDF等）至Obsidian库。支持可选的共享知识库镜像同步，实现多设备间的内容分发与协作。

**2. 适用场景**
适合需要跨设备无缝接收整理好的笔记、资料归档，或参与团队共享知识库协作的用户。

**3. 核心特色**
*   **安全只增**：收件箱模式仅新增文件，绝不删除或覆盖本地笔记，确保数据绝对安全。
*   **高效同步**：每10秒自动轮询，采用SHA-256校验保证文件完整性，支持断点续传。
*   **智能协作**：共享库镜像采用ETag增量同步，仅同步未修改文件；本地修改过的文件自动转为私有笔记，避免冲突。
*   **灵活管理**：支持一次性配置码绑定，可单独解除设备绑定；删除共享页面需服务端确认，防止误删。

**4. 使用建议**
首次使用请妥善保管一次性配置码。若从镜像模式切换而来，请留意插件对未修改镜像文件的清理提示。在共享库中，若需删除内容，请直接在Obsidian中删除页面以触发服务端申请，避免仅删除引用文件导致同步异常。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


