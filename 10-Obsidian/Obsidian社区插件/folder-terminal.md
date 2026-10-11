---
uid: 1791709367160000
title: 'Obsidian 插件：Folder Terminal'
tags: ['文件管理', '编程与脚本', '第三方工具集成', 'obsidian插件']
description: 'Hover over a folder in the file explorer to reveal a terminal icon; click it to open a real shell (PTY) docked at the bottom, rooted at that folder. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Folder Terminal

> [!Note] 插件名片
> - 插件名称：Folder Terminal
> - 插件作者：First Kang
> - 插件说明：Hover over a folder in the file explorer to reveal a terminal icon; click it to open a real shell (PTY) docked at the bottom, rooted at that folder. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '编程与脚本', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/firstkang/folder-terminal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?folder-terminal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/firstkang/folder-terminal/master/README.md)



## 概述

**1. 主要功能**
在 Obsidian 文件浏览器的文件夹上悬停显示终端图标，点击即可在底部打开真实 Shell（PTY），工作目录自动设为该文件夹。

**2. 适用场景**
仅限桌面端（macOS/Linux/Windows）。适合需要频繁在特定笔记目录下执行命令、查看文件结构或进行轻量级开发操作的场景。

**3. 核心特色**
- **真实 PTY 支持**：通过嵌入式 Python 代理实现，完美支持 `vim`、`ssh`、`htop` 等交互式程序，无需原生模块。
- **多标签管理**：支持多文件夹独立会话，标签页可拖拽排序、双击重命名，且各标签页可独立配置 Shell、配色及字体。
- **体验优化**：支持跨重启恢复会话、主题自适应配色、URL 可点击，界面支持中/英/跟随系统语言。

**4. 使用建议**
- **环境依赖**：macOS 需安装 Xcode Command Line Tools 提供 `python3`；Windows 优先使用 winpty，否则回退至 `cmd.exe`。
- **操作习惯**：利用悬停出现的图标快速进入对应目录，避免手动 `cd`；善用多标签页隔离不同项目的终端环境。
- **注意**：移动端不可用，请勿在移动设备上依赖此功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


