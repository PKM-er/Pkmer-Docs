---
uid: 1786577082685001
title: 'Obsidian 插件：Smart Git Sync'
tags: ['第三方工具集成', '自动化与AI', '效率工具', '备份与恢复', 'obsidian插件']
description: '自动Git同步 — 每次保存时自动提交并推送 - 此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Smart Git Sync

> [!Note] 插件名片
> - 插件名称：Smart Git Sync
> - 插件作者：lkmavi
> - 插件说明：自动Git同步 — 每次保存时自动提交并推送 - 此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '自动化与AI', '效率工具', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lkmavi/smart-git-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lkmavi-smart-git-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lkmavi/smart-git-sync/master/README.md)



## 概述

### Smart Git Sync插件总结
1. **主要功能**：实现Obsidian库与Git远程仓库自动同步，每次保存触发提交和推送，可配置间隔自动拉取远程更改，也能通过本地Webhook按需触发；还提供快速操作菜单，支持暂停同步。
2. **适用场景**：适用于使用Obsidian且需将笔记库与Git远程仓库同步的用户，方便多设备间笔记数据的更新与共享。
3. **核心特色**：自动同步且有去抖处理，推送前自动合并远程更改避免冲突；可设置拉取间隔，支持Webhook触发拉取；操作菜单便捷，能灵活暂停同步。
4. **使用建议**：该插件仅支持桌面端，需确保`git`在`$PATH`中。安装时将文件复制到指定目录并在社区插件中启用。首次使用若库非Git仓库，按指引完成初始化、配置`.gitignore`、设置远程仓库等操作，最后开启自动同步。可按需调整自动同步、启动拉取等设置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


