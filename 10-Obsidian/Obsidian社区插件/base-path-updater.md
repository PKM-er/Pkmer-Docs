---
uid: 1791709365533000
title: 'Obsidian 插件：Base Path Updater'
tags: ['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Automatically update paths in Bases when folders are renamed or moved, with reviewable undo history. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Base Path Updater

> [!Note] 插件名片
> - 插件名称：Base Path Updater
> - 插件作者：Eric
> - 插件说明：Automatically update paths in Bases when folders are renamed or moved, with reviewable undo history. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xeric7/obsidian-base-path-updater)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?base-path-updater)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xeric7/obsidian-base-path-updater/master/README.md)



## 概述

**主要功能**
Base Path Updater 是一款自动路径同步插件。当文件夹被重命名或移动时，它会自动更新 Obsidian Bases（数据库视图）中引用的旧路径，包括全局过滤器、视图特定过滤器及公式中的引用，确保数据链接不断裂。

**适用场景**
适用于使用 Obsidian Bases 插件构建结构化笔记库的用户。特别是当你的知识库涉及大量文件夹整理、归档或重构，且 Bases 查询中依赖特定文件夹路径时，该插件能极大减少手动维护成本。

**核心特色**
1. **自动同步**：响应文件夹重命名/移动，自动更新主文件夹及其子文件夹、文件的路径引用。
2. **可审查的撤销历史**：提供详细的“变更前/后”对比记录，支持一键撤销某次完整的文件夹操作，降低误操作风险。
3. **轻量高效**：非定时扫描，仅在文件夹移动时触发路径重写；Markdown 笔记索引仅在开启嵌入更新后运行，资源占用极低。

**使用建议**
- 需 Obsidian 1.9.0+ 及内置 Bases 插件。
- 目前需手动安装：将 `dist` 文件夹放入 `.obsidian/plugins/`，重启后在设置中启用。
- 操作后建议通过侧边栏图标或命令面板查看更新历史，确认路径变更无误后再进行其他操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


