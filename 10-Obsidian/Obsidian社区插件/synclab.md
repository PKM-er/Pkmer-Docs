---
uid: 1791709370207000
title: 'Obsidian 插件：SyncLab'
tags: ['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
description: 'Review your changes and sync your vault with a GitLab repository in one press. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：SyncLab

> [!Note] 插件名片
> - 插件名称：SyncLab
> - 插件作者：strider-ape
> - 插件说明：Review your changes and sync your vault with a GitLab repository in one press. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/strider-ape/SyncLab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?synclab)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/strider-ape/SyncLab/master/README.md)



## 概述

**1. 主要功能**
SyncLab 允许用户通过单次点击，审查变更并将 Obsidian 笔记库（或指定文件夹）与 GitLab 仓库同步。它直接调用 GitLab API，无需安装 Git、SSH 密钥或命令行工具，支持桌面端和移动端。

**2. 适用场景**
适用于希望将笔记库备份至 GitLab 的用户，特别是那些希望避免配置本地 Git 环境、寻求跨设备（含手机）无缝同步体验，且需要直观可视化差异审查的笔记管理者。

**3. 核心特色**
- **零依赖同步**：无需本地 Git 环境，直接通过 API 交互。
- **可视化审查**：侧边栏类似源代码控制面板，可逐文件对比版本，并手动勾选参与同步的文件。
- **智能冲突处理**：遇到双端修改时不自动猜测，提供“保留我的”、“保留他们的”或“两者并存”三种明确选项，确保数据不丢失。
- **一键提交**：拉取远程变更后，将本地修改作为单次提交推送，支持自定义或自动生成提交信息。

**4. 使用建议**
- 需 Obsidian 1.11.4 及以上版本及 GitLab 账号。
- 当前需通过 BRAT 插件从 GitHub 安装（待官方目录收录后可直接搜索安装）。
- 同步前务必在侧边栏仔细审查差异，特别是处理冲突时，明确选择保留策略以避免误删。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


