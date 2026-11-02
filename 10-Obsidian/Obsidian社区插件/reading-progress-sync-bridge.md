---
uid: 1793625620608001
title: "Obsidian 插件：Reading Progress Sync Bridge"
tags: ["第三方工具集成", "效率工具", "导航与状态栏", "obsidian插件"]
description: "Sync and verify reading positions through Remember Cursor Position and Remotely Save. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Reading Progress Sync Bridge

> [!Note] 插件名片
> - 插件名称：Reading Progress Sync Bridge
> - 插件作者：LIngfengDu
> - 插件说明：Sync and verify reading positions through Remember Cursor Position and Remotely Save. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '导航与状态栏', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dlf2001/reading-progress-sync-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reading-progress-sync-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dlf2001/reading-progress-sync-bridge/master/README.md)



## 概述

Reading Progress Sync Bridge 旨在解决多设备间 Obsidian 阅读进度不同步的痛点。它通过连接 Remember Cursor Position 和 Remotely Save，实现阅读位置的云端交换与合并。核心机制是依据“最后阅读更新时间”而非“阅读最远位置”来判定进度，确保即使你在某台电脑上向前翻阅，换机后也能准确回到最新阅读点，而非被旧进度覆盖。

典型场景如：你在办公室电脑上读到长文第 50 页，回家后在个人电脑上继续，插件会自动同步并恢复至第 50 页；若你在个人电脑上回翻到第 30 页，下次同步时，办公室电脑会识别到这是更晚的操作，从而将进度更新为第 30 页，实现真正的阅读接力。

相比单纯的文件同步，该插件具备智能冲突处理能力。当两台设备时间戳相同但位置不同时，它会暂停自动覆盖并提示人工选择；若检测到设备时间异常超前，也会拦截以防错误覆盖。此外，它在导入前自动备份本机进度，且同步失败时不会污染本地数据，保障了阅读记录的安全性。

使用前需注意，所有设备必须安装并启用这三个插件，且 Remotely Save 需配置为双向同步。该插件仅支持桌面版 Markdown 笔记，不支持 PDF 或手机端。若你仅使用单台电脑，或不需要跨设备同步阅读位置，则无需安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


