---
uid: 1791709367307000
title: 'Obsidian 插件：GitSync Portal'
tags: ['第三方工具集成', '备份与恢复', '移动端优化', '搜索与排序', '效率工具', 'obsidian插件']
description: 'Sync your vault through GitHub across mobile and desktop, with a multilingual dashboard, search, favorites, history, and quizzes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitSync Portal

> [!Note] 插件名片
> - 插件名称：GitSync Portal
> - 插件作者：Kai Liu
> - 插件说明：Sync your vault through GitHub across mobile and desktop, with a multilingual dashboard, search, favorites, history, and quizzes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '移动端优化', '搜索与排序', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kaleido1/GitSync-Portal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gitsync-portal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kaleido1/GitSync-Portal/master/README.md)



## 概述

**GitSync Portal** 是一款原生 Obsidian 插件，旨在通过 GitHub 实现跨平台（Android/iOS/Windows/macOS/Linux）的 Vault 同步，并集成多功能仪表盘。

**主要功能**：
无需系统 Git 或 Node.js，利用 Obsidian HTTP API 实现双向同步。提供多语言仪表盘，支持文件与正文搜索、收藏管理、阅读历史及互动测验。

**适用场景**：
适合需要在移动端和桌面端无缝切换笔记的用户，特别是希望摆脱复杂命令行配置，追求开箱即用同步体验的个人知识管理者。

**核心特色**：
1. **原生跨平台**：所有平台行为一致，无需额外环境依赖。
2. **智能冲突处理**：采用“新版本优先”策略，旧版本自动保留为 `.conflict-…` 文件，防止数据丢失。
3. **安全与稳定**：Token 加密存储于 SecretStorage；具备同步队列机制避免并发竞争，并包含大规模删除保护及自动重试机制。
4. **丰富交互**：仪表盘提供面包屑导航、IME 安全搜索及当前笔记大纲视图。

**使用建议**：
1. 在 GitHub 创建仅限单仓库、具备“Contents: Read and write”权限的细粒度个人访问令牌。
2. 在插件设置中填入令牌、仓库路径（owner/repository）及分支。
3. 务必先点击“测试连接”并手动同步一次以验证配置。
4. 确认无误后，可根据需求开启启动时、保存触发或定期自动同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


