---
uid: 1791709365998000
title: 'Obsidian 插件：China BRAT'
tags: ['第三方工具集成', '效率工具', '文件管理', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：China BRAT

> [!Note] 插件名片
> - 插件名称：China BRAT
> - 插件作者：快速安装插件
> - 插件说明：
> - 插件分类：['第三方工具集成', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/notesynchelper/chinabrat)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chinabrat)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/notesynchelper/chinabrat/master/README.md)



## 概述

**主要功能**
China BRAT 是一款极简的 Obsidian 插件安装工具。它通过直接粘贴插件文件的目录 URL，从服务器获取 `manifest.json`、`main.js` 等文件并自动启用插件。该插件专为解决国内网络环境下插件安装缓慢或失败的问题而设计，无需解压 Zip 包，仅通过三次 GET 请求完成安装。

**适用场景**
适用于网络环境受限、无法顺畅访问 Obsidian 官方插件市场的用户。特别适合需要安装特定国内同步插件（如“手机电脑同步”）或加速插件的场景，是解决“网络慢导致插件无法安装”痛点的高效方案。

**核心特色**
1. **极致轻量**：构建体积仅约 3 KB，无样式文件，确保在极慢网络下也能快速完成首次安装。
2. **无解压依赖**：摒弃 Zip 归档，直接下载原始文件，代码更精简，兼容性更好。
3. **内置示例**：预置了笔记同步助手、手机电脑同步等常用插件地址，一键即可填入并安装。
4. **安全机制**：强制使用 HTTPS 协议，防止中间人攻击篡改代码。

**使用建议**
请在设置中粘贴托管插件文件的目录 URL（支持直接粘贴 manifest.json 链接，会自动识别父目录）。注意仅支持 HTTPS 地址（localhost 除外）。由于安装即执行代码，请确保 URL 来源可信，避免从不可靠的 HTTP 源安装。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


