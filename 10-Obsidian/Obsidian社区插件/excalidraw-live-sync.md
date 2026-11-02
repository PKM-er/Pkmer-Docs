---
uid: 1793625612641000
title: "Obsidian 插件：Excalidraw Live Sync"
tags: ["白板", "图表与可视化", "效率工具", "obsidian插件"]
description: "Co-edit Excalidraw drawings in real time with live cursors over a LAN or a virtual LAN such as Radmin VPN, Hamachi, ZeroTier or Tailscale. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Excalidraw Live Sync

> [!Note] 插件名片
> - 插件名称：Excalidraw Live Sync
> - 插件作者：shenid
> - 插件说明：Co-edit Excalidraw drawings in real time with live cursors over a LAN or a virtual LAN such as Radmin VPN, Hamachi, ZeroTier or Tailscale. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['白板', '图表与可视化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/shenid1/excalidraw-live-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?excalidraw-live-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/shenid1/excalidraw-live-sync/master/README.md)



## 概述

Excalidraw Live Sync 专为 Obsidian 用户打造，旨在解决多人实时协作绘图的需求。它允许团队成员在同一块画板上同步绘制，并实时看到彼此的鼠标光标和激光笔轨迹。该插件采用点对点直连架构，无需依赖任何云端服务器，只需通过局域网或虚拟局域网（如 Tailscale、ZeroTier）建立连接，即可实现低延迟的实时同步体验。

典型使用场景包括远程团队进行头脑风暴或架构设计。例如，你可以作为主机开启会话，同事通过 Tailscale 地址加入，大家直接在各自的 Obsidian 中编辑同一张图；或者在办公室内，通过 Wi-Fi 快速分享白板内容，无需切换至其他协作软件。每位参与者都在本地保存副本，断开连接后文件自动保留在本地库中，方便后续独立修改。

相比依赖第三方服务的协作工具，该插件最大的特色是数据隐私与安全性。它不收集任何遥测数据，所有绘图内容仅在同会话参与者间传输。若设置密码，通信将使用 AES-256-GCM 加密，且密码验证过程不传输明文，有效防止网络窃听。此外，它深度集成 Excalidraw 插件，支持合并或替换当前画布内容，操作逻辑符合 Obsidian 原生习惯。

使用前需注意，该插件仅支持桌面端，移动端因缺乏网络 API 无法使用。所有参与者必须安装相同版本的插件，且需确保 Excalidraw 插件已启用。若未设置密码，网络流量未加密，不适合在不可信的公共网络中使用。此外，若主机断开连接，整个会话将立即终止，需手动重新连接。它不适合需要长期持久化云端同步或移动端随时接入的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


