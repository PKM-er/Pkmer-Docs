---
uid: 1791709367314000
title: 'Obsidian 插件：Glassine Sync'
tags: ['第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
description: 'Sync selected notes with a self-hosted Glassine instance over its REST sync API - no git required, works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Glassine Sync

> [!Note] 插件名片
> - 插件名称：Glassine Sync
> - 插件作者：yoav6
> - 插件说明：Sync selected notes with a self-hosted Glassine instance over its REST sync API - no git required, works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yoav6/obsidian-glassine-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?glassine-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yoav6/obsidian-glassine-sync/master/README.md)



## 概述

**1. 主要功能**
Glassine Sync 是一款 Obsidian 插件，通过 REST API 将选定的笔记与自托管的 Glassine 实例进行同步。它无需依赖 Git，支持桌面端和移动端，是 `obsidian-git` 的替代方案。

**2. 适用场景**
适用于希望使用自托管服务（Glassine）而非传统 Git 仓库来同步笔记的用户，特别是需要跨设备（手机/电脑）无缝协作，且不想配置复杂 Git 环境的场景。

**3. 核心特色**
*   **标记同步**：通过添加 frontmatter 属性（默认 `glassine`）标记需同步的笔记。
*   **实时同步**：停止输入后自动推送，打开笔记或定时拉取更新。
*   **多库配对**：支持多个 Vault 独立配对，可在 Glassine 后台单独撤销。
*   **图片同步**：双向同步嵌入图片，智能处理 Obsidian 的 `![[wiki-style]]` 语法与路径重写，保持本地文件不变。
*   **冲突处理**：采用“最后写入获胜”策略，简化冲突解决。

**4. 使用建议**
*   需先部署并运行 Glassine 服务器，并在插件设置中填入正确的服务器 URL。
*   仅对需要共享的笔记添加同步标记，避免全库同步造成负担。
*   注意图片同步仅针对 Obsidian 风格的嵌入语法，普通 Markdown 图片链接不会被上传。
*   由于无复杂冲突合并，建议保持编辑节奏，减少多人同时修改同一笔记的情况。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


