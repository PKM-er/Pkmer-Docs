---
uid: 1786577077402005
title: 'Obsidian 插件：DingTalk Minutes Sync'
tags: ['第三方工具集成', '自动化与AI', '数据处理', '效率工具', 'obsidian插件']
description: '用本地认证的 dws 命令行工具把钉钉 AI 会议纪要同步成 Markdown 格式。——Obsidian 官方人员尚未手动审核此插件。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DingTalk Minutes Sync

> [!Note] 插件名片
> - 插件名称：DingTalk Minutes Sync
> - 插件作者：lingang yan
> - 插件说明：用本地认证的 dws 命令行工具把钉钉 AI 会议纪要同步成 Markdown 格式。——Obsidian 官方人员尚未手动审核此插件。
> - 插件分类：['第三方工具集成', '自动化与AI', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ylgkger/dingtalk-minutes-to-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dingtalk-minutes-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ylgkger/dingtalk-minutes-to-obsidian/master/README.md)



## 概述

### 插件名称
钉钉会议纪要同步（DingTalk Minutes Sync）

### 主要功能
使用本地认证的 dws CLI 将钉钉 AI 会议纪要同步为 Markdown 笔记，可导入 AI 总结、关键词、行动项和可选的会议记录。

### 适用场景
适用于在 Obsidian 中管理和查看钉钉会议纪要，方便知识整理和回顾。

### 核心特色
- 以会议实际开始日期命名笔记，而非同步日期。
- 支持 7 天、30 天和一年的初始同步范围。
- 提供手动同步、启动时同步和定时同步三种方式。
- 钉钉会议记录 API 不可用时保留现有笔记，且不存储钉钉密码、cookie 或 AppSecret。

### 使用建议
- 需安装 Obsidian 桌面版 1.5.0 及以上版本，并在同一台电脑安装并认证 DingTalk Workspace CLI。
- 按步骤从 GitHub 下载文件并放入指定文件夹，重启 Obsidian 后启用插件。
- 在设置中配置 dws 路径、同步范围、初始日期范围等，然后点击“立即同步”。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


