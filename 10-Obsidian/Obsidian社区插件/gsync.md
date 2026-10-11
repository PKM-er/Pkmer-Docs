---
uid: 1791709367395000
title: 'Obsidian 插件：GSync'
tags: ['文件管理', '第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
description: 'Two-way sync between your vault and a Google Drive folder using the Google Drive API. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GSync

> [!Note] 插件名片
> - 插件名称：GSync
> - 插件作者：Dmitry Goncharenko
> - 插件说明：Two-way sync between your vault and a Google Drive folder using the Google Drive API. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dg0988/ObsidianGSync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gsync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dg0988/ObsidianGSync/master/README.md)



## 概述

**主要功能**：GSync 是一款基于 Google Drive API 的双向同步插件，支持将 Obsidian 仓库与 Google Drive 文件夹进行实时互传，兼容 Windows、macOS、Linux 及移动端（Android/iOS）。

**适用场景**：特别适合笔记已存储在 Google Drive 中，且希望跨设备（包括无法运行 Drive 桌面客户端的移动设备）访问的用户。它可与现有的 Drive 文件夹共存，无需清空仓库或独占同步权限。

**核心特色**：
1. **冲突安全**：双向修改时不会覆盖，本地保留原名，云端版本另存为冲突副本。
2. **安全删除**：删除文件仅移至回收站（保留30天），避免误删。
3. **隐私自主**：使用用户自建的 OAuth 凭证，无第三方服务器存储数据。
4. **智能过滤**：自动忽略 `.obsidian` 等隐藏文件夹，确保各设备独立保留插件设置。
5. **移动优化**：支持断点续传，每10个文件保存进度，适应移动端网络环境。

**使用建议**：首次同步前请确保 Drive 文件夹内容准确，插件会自动比对避免重复。建议在设置中关闭“删除同步”以增强安全性，并利用其移动友好特性在平板或手机上高效管理笔记。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


