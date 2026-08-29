---
uid: 1786577080114004
title: 'Obsidian 插件：MEGA Sync'
tags: ['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: '受“Remotely Save”启发，实现你的Obsidian仓库与MEGA.nz云之间的双向同步。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MEGA Sync

> [!Note] 插件名片
> - 插件名称：MEGA Sync
> - 插件作者：Thomas 
> - 插件说明：受“Remotely Save”启发，实现你的Obsidian仓库与MEGA.nz云之间的双向同步。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ledokter/obsidian-mega-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mega-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ledokter/obsidian-mega-sync/master/README.md)



## 概述

### MEGA Sync插件总结
1. **主要功能**：实现Obsidian库与MEGA.nz账户文件夹的双向同步，采用三方合并（本地、远程、上次同步快照），支持多种同步方向、触发方式，有自动引导、内容哈希变更检测、同步报告等功能。
2. **适用场景**：适用于需要在多设备间同步Obsidian笔记，且使用MEGA.nz云存储的用户，在移动设备（iOS/Android）上也可实验性使用。
3. **核心特色**：仅支持MEGA.nz作为后端，通过三方合并让多设备状态一致；内容哈希检测优先于修改时间，更准确判断文件变化；有详细的同步报告记录。
4. **使用建议**：首次使用时，若一方为空一方有内容，会自动单向镜像，之后转为双向；可根据需求配置同步方向、触发方式、远程文件夹、过滤规则等；使用时需提供MEGA账户的邮箱、密码及可选的2FA代码。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


