---
uid: 1791709369767000
title: 'Obsidian 插件：Ruune Sync'
tags: ['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Automatically sync your Ruune notes, summaries, and transcripts into your Obsidian vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ruune Sync

> [!Note] 插件名片
> - 插件名称：Ruune Sync
> - 插件作者：Joe Ruune
> - 插件说明：Automatically sync your Ruune notes, summaries, and transcripts into your Obsidian vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/internet-of-humans/ruune-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ruune-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/internet-of-humans/ruune-obsidian-plugin/master/README.md)



## 概述

**1. 主要功能**
Ruune Sync 是一款自动同步插件，能将 Ruune 应用的笔记、摘要及转录文本无缝导入 Obsidian 库。它采用增量同步机制，仅拉取自上次同步以来新增或更新的内容，支持断点续传，确保数据同步的高效性与完整性。

**2. 适用场景**
适用于重度使用 Ruune 进行录音记录、会议总结或灵感捕捉，并希望将这些数据自动归档至 Obsidian 进行长期管理的用户。特别适合需要批量处理多份笔记，且希望避免手动逐条发送（如使用官方“Send to Obsidian”功能）的场景。

**3. 核心特色**
*   **后台自动同步**：支持定时、启动时或手动触发，实现真正的“免操作”同步。
*   **灵活存储结构**：每份笔记生成独立的 Markdown 文件，包含 YAML 前置属性，支持自定义文件夹路径，甚至可配置为基于日期的日记文件夹（如 `Journal/{{date}}`）。
*   **原地更新无重复**：重新同步时直接更新现有文件，不会产生重复笔记，保持库的整洁。
*   **全计划免费**：所有 Ruune 用户均可免费使用。

**4. 使用建议**
1.  **获取令牌**：在 Ruune 桌面或移动端的“设置 > 集成 > Obsidian”中生成插件令牌（Token），注意该令牌仅显示一次，请妥善保存。
2.  **安装配置**：通过 Obsidian 社区插件市场搜索安装，或在设置中粘贴令牌并测试连接。
3.  **路径规划**：建议在设置中明确指定同步目标文件夹，若希望笔记融入每日日志，可启用日期文件夹功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


