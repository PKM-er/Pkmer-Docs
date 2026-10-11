---
uid: 1791709367306000
title: 'Obsidian 插件：GitLine'
tags: ['第三方工具集成', '编辑工具', '效率工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitLine

> [!Note] 插件名片
> - 插件名称：GitLine
> - 插件作者：qingchuan
> - 插件说明：
> - 插件分类：['第三方工具集成', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/qingchuan-x/gitline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gitline)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/qingchuan-x/gitline/master/README.md)



## 概述

**GitLine 插件总结**

**主要功能**
GitLine 是一款 Obsidian 桌面端插件，用于在光标所在行的行尾实时显示 Git 归属信息（Blame），包括提交人、时间、消息及哈希值。它支持自定义显示格式，并能在状态栏展示当前行作者。

**适用场景**
适用于使用 Git 进行版本管理的 Obsidian 用户，特别是在多人协作、代码审查或需要追溯笔记修改历史时，能帮助用户快速了解每行内容的来源与变更背景。

**核心特色**
1. **行内显示**：信息直接渲染在行尾，不干扰阅读，支持相对或绝对时间格式。
2. **高度可配置**：通过占位符自由组装显示内容，支持忽略空白字符变更（`-w` 模式）。
3. **性能优化**：采用 LRU 缓存机制，文件保存时自动失效，避免重复调用 Git 命令，确保流畅体验。
4. **健壮性**：自动检测 Git 环境，未提交行标记为“Uncommitted”，无 Git 时提供友好提示而非报错。

**使用建议**
1. 仅限 Obsidian **桌面版**使用，需确保系统已安装 Git 且 `git` 命令在 PATH 中可用。
2. 安装后需在设置中启用社区插件。
3. 建议在“设置”中根据阅读习惯调整时间显示格式（相对/绝对）及是否显示状态栏信息，以获得最佳视觉体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


