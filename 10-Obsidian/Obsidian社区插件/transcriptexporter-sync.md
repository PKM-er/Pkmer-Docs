---
uid: 1791709370530000
title: 'Obsidian 插件：TranscriptExporter Sync'
tags: ['第三方工具集成', '文件管理', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Receives meeting notes from the TranscriptExporter Chrome extensions (for Granola, Fathom, and Fireflies) and writes them into your vault automatically, minutes after each call. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TranscriptExporter Sync

> [!Note] 插件名片
> - 插件名称：TranscriptExporter Sync
> - 插件作者：TranscriptExporter
> - 插件说明：Receives meeting notes from the TranscriptExporter Chrome extensions (for Granola, Fathom, and Fireflies) and writes them into your vault automatically, minutes after each call. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/transcriptexporter/transcriptexporter-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?transcriptexporter-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/transcriptexporter/transcriptexporter-sync/master/README.md)



## 概述

**1. 主要功能**
该插件是 TranscriptExporter Chrome 扩展（支持 Granola、Fathom、Fireflies）的配套组件。它能在会议结束后几分钟内，自动将会议笔记和转录内容以 Markdown 格式写入 Obsidian 库，实现“零点击”自动化归档。

**2. 适用场景**
适用于频繁使用在线会议工具且希望将会议记录集中管理在 Obsidian 中的用户。特别适合需要长期积累会议知识、且对数据隐私有较高要求的知识工作者。

**3. 核心特色**
*   **本地化隐私**：仅通过本机回环地址（127.0.0.1）传输数据，无外部网络请求，无遥测，数据完全留在本地。
*   **安全机制**：采用配对密钥认证，防止未授权访问；仅接受 Markdown 格式并过滤路径遍历风险。
*   **非覆盖写入**：自动按来源（如 Granola/）分文件夹存储，且绝不修改或覆盖用户已存在的笔记，保护手动编辑内容。

**4. 使用建议**
*   安装后需在插件设置中复制“配对密钥”，并粘贴到对应的 Chrome 扩展设置中完成连接。
*   若端口 27125 被占用，需同时修改插件和扩展端的端口设置。
*   定期重新生成密钥可撤销旧连接，增强安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


