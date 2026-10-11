---
uid: 1791709370626000
title: 'Obsidian 插件：UltiSync'
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'Synchronize selected vault files with a GitHub repository using the GitHub REST API. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：UltiSync

> [!Note] 插件名片
> - 插件名称：UltiSync
> - 插件作者：Sachet Sangamesh Mulimani
> - 插件说明：Synchronize selected vault files with a GitHub repository using the GitHub REST API. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/msachet5/obsidian-ultisync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ultisync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/msachet5/obsidian-ultisync/master/README.md)



## 概述

**UltiSync** 是一款支持桌面端和移动端的 Obsidian 插件，通过 GitHub REST API 将指定库文件同步至单一 GitHub 仓库。

**主要功能**：无需本地 Git 环境，直接调用 API 实现文件同步。支持按需同步、自动推送、应用激活时拉取，以及首次运行的初始拉取。

**适用场景**：适合希望跨设备（特别是 iOS 与桌面）备份笔记，且不愿在移动设备上安装 Git 二进制文件的用户。

**核心特色**：
1. **隐私安全**：无遥测、无分析，数据仅传输至 GitHub，使用细粒度个人访问令牌。
2. **智能合并**：支持基于内容的重命名检测、Markdown 三方合并，冲突时提供保留本地/远程选项及冲突副本。
3. **灵活控制**：可独立配置拉取/推送过滤器，支持路径忽略，且绝不强制推送。

**使用建议**：
1. **测试先行**：务必使用一次性测试库和仓库验证行为，确认无误后再用于正式笔记。
2. **配置令牌**：需创建具有细粒度权限的 GitHub Personal Access Token。
3. **环境要求**：构建需 Node.js 18+；GitHub 仓库需至少有一个提交。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


