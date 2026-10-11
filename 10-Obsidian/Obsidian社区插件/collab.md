---
uid: 1791709366142000
title: 'Obsidian 插件：Collab'
tags: ['编辑工具', '安全与隐私', '社交与社区', '效率工具', 'obsidian插件']
description: 'Real-time, end-to-end encrypted, peer-to-peer, collaborative editing across vaults for files and folders. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Collab

> [!Note] 插件名片
> - 插件名称：Collab
> - 插件作者：filipesilva
> - 插件说明：Real-time, end-to-end encrypted, peer-to-peer, collaborative editing across vaults for files and folders. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '安全与隐私', '社交与社区', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/filipesilva/obsidian-collab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?collab)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/filipesilva/obsidian-collab/master/README.md)



## 概述

**1. 主要功能**
Collab 是一款基于点对点（P2P）技术的 Obsidian 插件，支持跨库的实时协作编辑。它允许用户分享文件或文件夹，通过 URL 邀请他人共同编辑，实现多设备、多用户间的实时同步。

**2. 适用场景**
适用于需要远程团队协作文档、共享知识库或多人共同维护笔记的场景。特别适合对数据隐私要求高，希望避免数据经过第三方服务器明文传输的用户。

**3. 核心特色**
- **端到端加密**：服务器仅协助节点发现，无法查看文件内容，保障隐私安全。
- **开放协议**：基于开放协议构建，支持自托管信令服务器，无遥测数据。
- **灵活同步**：支持断线重连后的增量同步，可单独分享文件或整个文件夹。
- **隐私优先**：服务器仅见 IP 和加密连接信息，不存储文件数据。

**4. 使用建议**
- 初次使用请设置显示名称，避免显示为“Anonymous”。
- 通过 `Collab: Share file` 生成链接并私密发送给协作者。
- 若连接失败，运行 `Collab: Check network` 诊断，必要时配置 TURN 服务器。
- 建议配合核心插件“File Recovery”使用，以便在协作冲突时恢复历史版本。
- 协作结束后使用 `Disconnect file` 断开连接，停止分享时执行 `Stop sharing file`。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


