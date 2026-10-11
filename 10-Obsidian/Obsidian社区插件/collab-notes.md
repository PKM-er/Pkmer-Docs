---
uid: 1791709366143000
title: 'Obsidian 插件：Collab Notes'
tags: ['编辑工具', '第三方工具集成', '社交与社区', 'obsidian插件']
description: 'Real-time collaborative markdown editing with live participant cursors, powered by a self-hosted CRDT service (Yjs). - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Collab Notes

> [!Note] 插件名片
> - 插件名称：Collab Notes
> - 插件作者：avtarasov210
> - 插件说明：Real-time collaborative markdown editing with live participant cursors, powered by a self-hosted CRDT service (Yjs). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '第三方工具集成', '社交与社区', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/delfinchiknakite-netizen/collab-notes-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?collab-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/delfinchiknakite-netizen/collab-notes-obsidian/master/README.md)



## 概述

**Collab Notes** 是一款基于自托管 CRDT (Yjs) 服务的 Obsidian 实时协作插件，支持桌面与移动端。

**主要功能**：实现多人实时 Markdown 编辑，显示参与者光标与选区，支持通过签名链接共享笔记，并具备断线重连及会话持久化能力。

**适用场景**：适合需要与同事、伴侣或团队进行实时文档协作的场景，如共同撰写报告、维护知识库或进行头脑风暴，且对数据隐私有较高要求。

**核心特色**：
1. **完全自托管**：无默认服务器，需自行部署 Node 服务，数据不经过第三方，隐私安全可控。
2. **类 Google Docs 体验**：实时同步光标与编辑内容，协作直观高效。
3. **灵活共享**：通过右键菜单生成链接或二维码，接收方可在 Obsidian 或浏览器中打开。

**使用建议**：
1. **部署服务器**：需先在本地或服务器运行提供的 `server/` 代码（支持 Docker），配置 `LINK_SECRET` 和 `PUBLIC_BASE` 环境变量。
2. **HTTPS 配置**：建议将服务置于 HTTPS 反向代理（如 Caddy/Nginx）之后，以确保传输安全。
3. **隐私注意**：共享访问仅通过签名链接，请妥善保管密钥，避免未授权访问。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


