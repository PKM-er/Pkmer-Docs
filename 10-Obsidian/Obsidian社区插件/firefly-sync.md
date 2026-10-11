---
uid: 1791709367065000
title: 'Obsidian 插件：FireFly Sync'
tags: ['第三方工具集成', '发布工具', '文件管理', 'obsidian插件']
description: 'Sync Obsidian Markdown notes and images to a FireFly Astro blog through Git. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：FireFly Sync

> [!Note] 插件名片
> - 插件名称：FireFly Sync
> - 插件作者：Dean Yu
> - 插件说明：Sync Obsidian Markdown notes and images to a FireFly Astro blog through Git. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/deanyu148/firefly_sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?firefly-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/deanyu148/firefly_sync/master/README.md)



## 概述

**FireFly Sync** 是一款 Obsidian 桌面插件，旨在通过 Git 将 Markdown 笔记及引用图片同步至本地 FireFly Astro 博客仓库，并自动提交推送。

**适用场景**：适合使用 FireFly 架构搭建博客，且希望直接从 Obsidian 发布内容的用户，尤其是需要管理图片资源或处于复杂网络环境下的开发者。

**核心特色**：
1. **状态面板**：右侧边栏实时显示博客仓库的修改、新增及未跟踪文件，支持快速差异审查。
2. **灵活同步**：支持“当前笔记”模式（自动检测引用图片）和“全库”模式，提供交互式目录树选择，支持搜索与批量操作。
3. **安全确认**：同步前生成 Git Diff 预览，允许用户逐项确认或取消，防止误操作。
4. **高度可配**：自定义目标路径，并支持 HTTP/HTTPS/SOCKS 代理，解决网络推送难题。

**使用建议**：
1. 确保本地已配置好 FireFly 博客仓库及 Git 环境。
2. 首次使用建议先在“当前笔记”模式下测试，确认图片路径映射正确。
3. 若网络不稳定，务必在设置中配置正确的 Git 代理协议。
4. 同步前务必仔细检查 Diff 预览，避免意外覆盖博客内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


