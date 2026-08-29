---
uid: 1786577077481003
title: 'Obsidian 插件：DriveSync'
tags: ['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: '让你的仓库与谷歌云端硬盘实现双向同步。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DriveSync

> [!Note] 插件名片
> - 插件名称：DriveSync
> - 插件作者：lcjury
> - 插件说明：让你的仓库与谷歌云端硬盘实现双向同步。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lcjury/obsidian-drivesync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?drivesync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lcjury/obsidian-drivesync/master/README.md)



## 概述

### DriveSync插件总结
1. **主要功能**：实现Obsidian库与Google Drive的双向同步，除部分技术文件外，包括`.obsidian`文件夹都会同步。支持在启动、文件更改、远程轮询及手动操作时同步。
2. **适用场景**：适用于需要通过Google Drive同步，但不需要实时同步的Obsidian库。
3. **核心特色**：非实时同步，有多种同步触发场景；冲突解决采用新版本优先，旧版本保存为`(conflicted).md`；可使用个人GCP账户，利用自有令牌实现同步。
4. **使用建议**：设置前先备份库，首次同步可能会覆盖本地文件。需创建Google Cloud项目并启用Google Drive API，创建OAuth凭证。可在Obsidian启动时自动进行全面文件核对，编辑笔记后等待2秒默认防抖期上传更改，开启自动同步时插件会定期检查Drive更新，也可随时通过命令面板、丝带图标或状态视图手动同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


