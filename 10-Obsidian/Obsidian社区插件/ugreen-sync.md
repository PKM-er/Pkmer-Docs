---
uid: 1786577083474000
title: 'Obsidian 插件：UGREEN NAS Sync'
tags: ['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: '将仓库与绿联（UGREEN）网络附属存储设备（NAS）同步。——此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：UGREEN NAS Sync

> [!Note] 插件名片
> - 插件名称：UGREEN NAS Sync
> - 插件作者：tsfreddie
> - 插件说明：将仓库与绿联（UGREEN）网络附属存储设备（NAS）同步。——此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tsfreddie/obsidian-ugreen-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ugreen-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tsfreddie/obsidian-ugreen-sync/master/README.md)



## 概述

### UGREEN NAS Sync插件总结
1. **主要功能**：该插件用于在Obsidian中实现与运行UGOS Pro的UGREEN NAS进行保险库文件同步。支持通过直接UGOS URL或UGREENlink ID登录，可从状态栏、命令面板或设置选项卡进行双向同步，还能设置1 - 60分钟的自动同步间隔，且始终同步整个保险库。
2. **适用场景**：适用于使用UGREEN NAS存储Obsidian笔记文件，希望在本地和NAS之间方便快捷同步数据的用户。
3. **核心特色**：首次同步不会将缺失文件视为删除；后续同步利用本地同步历史检测删除情况；远程删除采用UGOS回收站操作，而非永久删除；若本地和远程内容均有更改，会在下载远程文件前保存本地冲突副本。
4. **使用建议**：该插件仅支持UGREEN NAS，不支持加密、多供应商、OAuth、S3、WebDAV或OneDrive等。使用前需了解其功能范围，根据自身需求设置自动同步间隔。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


