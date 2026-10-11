---
uid: 1791709366174000
title: 'Obsidian 插件：Come Gither'
tags: ['第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
description: 'Sync your vault with a GitHub repository through the GitHub API. Works on mobile. No local git needed. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Come Gither

> [!Note] 插件名片
> - 插件名称：Come Gither
> - 插件作者：Raymond Kaleho
> - 插件说明：Sync your vault with a GitHub repository through the GitHub API. Works on mobile. No local git needed. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kaleho/come-gither)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?come-gither)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kaleho/come-gither/master/README.md)



## 概述

**1. 主要功能**
通过 GitHub API 实现 Obsidian 库与 GitHub 仓库的双向同步。无需本地安装 Git，支持桌面端及移动端（含 iPad）。

**2. 适用场景**
适用于需要在多设备间同步笔记，尤其是移动端用户或拥有大型仓库（含大量二进制文件）的场景。避免了传统 Git 在移动端处理大仓库时的性能瓶颈。

**3. 核心特色**
*   **轻量高效**：仅传输变更文件，同步成本取决于编辑量而非库大小。
*   **智能占位**：大型二进制文件（PDF/图片等）默认以空占位符形式存在，按需下载，节省本地空间。
*   **冲突处理**：自动合并非重叠文本编辑；重叠时保留本地版本并将服务器版本存入 `_conflicts/` 供审查。
*   **安全机制**：支持同步前预览变更、中断后恢复，且上传仅在最终提交成功后才在 GitHub 可见。

**4. 使用建议**
*   首次使用建议开启“预览同步”功能，检查即将上传和下载的变更。
*   根据网络环境调整二进制文件的下载策略（询问或立即下载）。
*   注意隐私：插件会将库内容发送至 GitHub API，请确保仓库权限设置正确。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


