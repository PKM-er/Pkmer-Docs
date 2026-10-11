---
uid: 1791709368820000
title: 'Obsidian 插件：Nimbus vault Sync'
tags: ['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
description: 'Real-time bidirectional synchronization with self-hosted Nimbus Server for Obsidian. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nimbus vault Sync

> [!Note] 插件名片
> - 插件名称：Nimbus vault Sync
> - 插件作者：lengedliu
> - 插件说明：Real-time bidirectional synchronization with self-hosted Nimbus Server for Obsidian. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lengedliu/obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nimbus-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lengedliu/obsidian-plugin/master/README.md)



## 概述

**1. 主要功能**
Nimbus Sync 是一款专为自托管 Nimbus Server 设计的 Obsidian 插件，提供基于 WebSocket 的实时双向同步。支持笔记及图片等附件的秒级新建、修改、重命名与删除同步，并具备断网自动重连与心跳保活机制。

**2. 适用场景**
适用于拥有自托管服务器、追求数据隐私与低延迟同步的用户。特别适合需要在多设备间实时协作编辑，或对同步速度有极高要求的专业笔记工作流。

**3. 核心特色**
*   **极速双向同步**：WebSocket 连接实现毫秒级响应，优于传统轮询方式。
*   **智能冲突保护**：并发编辑时自动生成冲突副本，防止数据覆盖丢失。
*   **全文件支持**：不仅同步 Markdown，还完整支持二进制文件与图片附件。
*   **便捷管理**：支持在设置面板直接切换或新建远程 Vault，并提供“一键导入”配置功能，大幅降低部署门槛。

**4. 使用建议**
*   **安装**：推荐使用 BRAT 插件通过 GitHub 仓库地址一键安装，兼容桌面端与移动端。
*   **配置**：优先使用 Nimbus Web 控制台生成的 `data.json` 进行一键导入，避免手动填写 Token 等复杂配置。
*   **注意**：该插件未经过 Obsidian 官方人工审核，使用前请确保服务器环境安全，并建议定期备份数据以防意外。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


