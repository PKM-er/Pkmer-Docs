---
uid: 1791709368814000
title: 'Obsidian 插件：NextSync'
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'Sync your vault with a Nextcloud folder over WebDAV, with conflict copies and deletion safeguards. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：NextSync

> [!Note] 插件名片
> - 插件名称：NextSync
> - 插件作者：Klippel
> - 插件说明：Sync your vault with a Nextcloud folder over WebDAV, with conflict copies and deletion safeguards. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/miqueiasklippel/obsinext)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nextsync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/miqueiasklippel/obsinext/master/README.md)



## 概述

**NextSync 插件中文总结**

1. **主要功能**：通过 WebDAV 协议实现 Obsidian 仓库与 Nextcloud 文件夹的双向同步。支持手动、定时及启动时自动同步，仅传输变更文件以优化效率。

2. **适用场景**：适用于希望使用 Nextcloud 进行私有云备份或跨设备（Windows、macOS、Linux、Android、iOS）同步笔记的用户，特别适合注重数据隐私且拥有 Nextcloud 账号的场景。

3. **核心特色**：
   - **冲突保护**：双向修改时自动保留服务器版本为副本，避免数据丢失。
   - **删除安全**：提供删除前确认、单次删除数量限制及空文件夹检测，防止误删。
   - **安全存储**：应用密码存储在 Obsidian 秘密存储中，而非明文配置文件。

4. **使用建议**：
   - 确保 Obsidian 版本不低于 1.13.1。
   - 需在 Nextcloud 设置中生成“应用密码”（App Password）并填入插件。
   - 服务器地址仅填写根域名（如 `https://cloud.example.com`）。
   - 注意：当前插件界面为巴西葡萄牙语，需参考葡语文档或自行汉化。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


