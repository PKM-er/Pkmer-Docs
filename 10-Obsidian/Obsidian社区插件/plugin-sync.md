---
uid: 1791709370136000
title: 'Obsidian 插件：StoreSync'
tags: ['社交与社区', '文件管理', '效率工具', 'obsidian插件']
description: 'Share Obsidian community plugins across all your vaults through a single shared store. New vaults connect automatically. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：StoreSync

> [!Note] 插件名片
> - 插件名称：StoreSync
> - 插件作者：likangjie
> - 插件说明：Share Obsidian community plugins across all your vaults through a single shared store. New vaults connect automatically. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['社交与社区', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/likangjie110/obsidian-plugin-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plugin-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/likangjie110/obsidian-plugin-sync/master/README.md)



## 概述

**1. 主要功能**
StoreSync 通过符号链接机制，将 Obsidian 所有仓库的插件目录指向同一个本地共享存储（默认位于 `~/.obsidian-plugin-store`）。实现“一次安装，全库共享”，消除重复下载，新仓库自动接入。

**2. 适用场景**
- 同一台电脑上拥有多个 Obsidian 仓库的用户。
- 频繁创建新仓库或切换工作区，希望插件配置无缝跟随的场景。
- 需要跨机器或移动端迁移插件清单（Manifest 模式）的用户。

**3. 核心特色**
- **零重复存储**：磁盘上仅保留一份插件文件，节省空间。
- **自动同步**：新仓库创建后秒级自动连接，无需手动配置。
- **即时生效**：任一仓库安装/更新插件，其他仓库立即可用。
- **灵活切换**：支持随时“取消链接”恢复独立插件目录；仅限桌面端使用。

**4. 使用建议**
- 安装后需在设置中关闭“受限模式”并启用插件。
- 首次使用请在主仓库点击“Link to shared store”初始化共享目录。
- 注意网络权限：仅在使用“清单模式”导出/导入插件列表时访问网络（GitHub API），本地同步过程完全离线。
- 建议定期备份共享插件目录，以防数据丢失。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


