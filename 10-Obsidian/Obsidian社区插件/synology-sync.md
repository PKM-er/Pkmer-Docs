---
uid: 1791709370214000
title: 'Obsidian 插件：Synology Sync'
tags: ['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
description: 'Sync your Obsidian vault with Synology NAS via WebAPI/WebDAV. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Synology Sync

> [!Note] 插件名片
> - 插件名称：Synology Sync
> - 插件作者：my3rs
> - 插件说明：Sync your Obsidian vault with Synology NAS via WebAPI/WebDAV. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/my3rs/obsidian-synology-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?synology-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/my3rs/obsidian-synology-sync/master/README.md)



## 概述

**Synology Sync 插件总结**

1. **主要功能**
该插件通过 Synology 官方 WebAPI/WebDAV 接口，实现 Obsidian 笔记库与群晖 NAS 的直接同步。支持双向同步、仅上传及仅下载三种模式，确保数据在本地与私有云之间高效流转。

2. **适用场景**
适合拥有群晖 NAS 且注重数据隐私的用户。适用于希望摆脱第三方云服务依赖，将个人知识库、工作文档或学习笔记备份至私有服务器，实现离线访问与长期归档的场景。

3. **核心特色**
- **原生安全**：直接调用 Synology 官方 API，凭证仅与用户 NAS 通信，无第三方服务器中转，安全性高。
- **灵活同步**：支持双向、单向上传或下载，满足不同备份策略需求。
- **多语言支持**：内置中英文界面，配置简单，只需输入 NAS 地址及账号密码即可连接。

4. **使用建议**
- 首次使用前，请在设置中仔细填写 NAS 的 URL（如 `https://IP:5001`）及账号密码，并务必点击“测试连接”确保连通性。
- 建议定期查看同步日志，确认同步状态。
- 注意：该插件为社区独立开发项目，非 Synology 官方出品。虽然代码开源，但使用前建议阅读免责声明，并养成重要数据多重备份的习惯，以防同步冲突或意外丢失。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


