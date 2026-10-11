---
uid: 1791709369954000
title: 'Obsidian 插件：Silence Git Sync'
tags: ['第三方工具集成', '备份与恢复', '自动化与AI', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Silence Git Sync

> [!Note] 插件名片
> - 插件名称：Silence Git Sync
> - 插件作者：czhhbp
> - 插件说明：
> - 插件分类：['第三方工具集成', '备份与恢复', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/czhhbp/obsidian-silence-git-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?silence-git-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/czhhbp/obsidian-silence-git-sync/master/README.md)



## 概述

**插件名称**：Silence Git Sync

**主要功能**
该插件实现了 Obsidian 笔记库到 Git 远程仓库的静默后台同步。它能在用户停止编辑后自动执行提交、合并和推送操作，全程无弹窗干扰，仅在出错时提示。支持通过粘贴 HTTPS URL 快速配置远程仓库，并自动处理 `origin` 设置。

**适用场景**
适用于需要多设备同步或版本备份的桌面端用户（Windows/macOS/Linux）。特别适合希望“无感”使用 Git 进行笔记备份、避免手动操作打断写作流程的场景。注意：因移动端沙箱限制，此插件不支持手机 Obsidian。

**核心特色**
1. **零丢失冲突处理**：发生冲突时，保留本地文本，将远程版本另存为 `.sync-remote.md` 文件，确保双方数据均被提交。
2. **安全令牌注入**：通过临时全局配置文件注入 Personal Access Token，避免直接修改 `.git/config`，提升安全性。
3. **智能忽略管理**：在设置中配置忽略路径，自动写入 `.gitignore` 并立即生效。
4. **状态反馈**：状态栏实时显示上次同步时间及结果，支持快捷键 `Ctrl/Cmd + Shift + S` 手动触发。

**使用建议**
建议优先使用 HTTPS 地址配置远程仓库，并妥善保管 Personal Access Token。若需排除特定文件（如附件），请在设置中配置忽略路径。由于仅支持桌面端，移动端用户需考虑其他同步方案或等待后续更新。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


