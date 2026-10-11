---
uid: 1791709365784000
title: 'Obsidian 插件：Canvas Bili Player'
tags: ['第三方工具集成', '多媒体', '界面优化', 'obsidian插件']
description: 'Convert Bilibili video URLs in Canvas to embedded player URLs (player.bilibili.com), auto-fit node size to 16:9 and set the real video title as node label. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas Bili Player

> [!Note] 插件名片
> - 插件名称：Canvas Bili Player
> - 插件作者：Nory
> - 插件说明：Convert Bilibili video URLs in Canvas to embedded player URLs (player.bilibili.com), auto-fit node size to 16:9 and set the real video title as node label. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '多媒体', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nory-x/obsidian-canvas-bili-player)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-bili-player)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nory-x/obsidian-canvas-bili-player/master/README.md)



## 概述

**Canvas Bili Player** 是一款专为 Obsidian Canvas 设计的 Bilibili 视频增强插件。

**主要功能**
它自动将 Canvas 中的 B 站视频链接重写为官方嵌入式播放器地址（player.bilibili.com），替代默认加载的完整网页。同时，插件会调用 API 获取真实视频标题作为节点标签，并强制节点尺寸适配 16:9 比例（最小宽度 480px），确保标签始终可见而非仅悬停显示。

**适用场景**
适用于在 Obsidian Canvas 中整理 B 站视频资源、构建视频知识库或进行视觉化笔记的用户，特别是希望摆脱默认 400x400 小窗口和冗长默认标题的场景。

**核心特色**
1. **原生嵌入**：直接加载纯净播放器，无多余 UI 干扰。
2. **智能适配**：自动调整 16:9 比例，保留用户手动调整的宽度。
3. **标题缓存**：本地缓存视频标题，重启后无需重复请求网络。
4. **历史兼容**：支持对 Canvas 中已存在的旧链接进行自动修复。
5. **双命令支持**：提供“仅整理链接/标题”和“强制 16:9”两种命令，方便精细控制。

**使用建议**
直接拖入或粘贴 B 站链接即可自动转换。若需批量处理现有 Canvas，可通过命令面板搜索“B站嵌入”，选择是否强制调整尺寸，以保护手动布局。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


