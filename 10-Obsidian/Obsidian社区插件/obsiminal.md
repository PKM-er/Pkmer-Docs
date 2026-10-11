---
uid: 1791709370872000
title: 'Obsidian 插件：Vault Shell'
tags: ['编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Open an interactive terminal inside your Obsidian workspace. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Shell

> [!Note] 插件名片
> - 插件名称：Vault Shell
> - 插件作者：Nhat Duy Mai
> - 插件说明：Open an interactive terminal inside your Obsidian workspace. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mainhatduy/obsiminal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsiminal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mainhatduy/obsiminal/master/README.md)



## 概述

**主要功能**：在 Obsidian 工作区内嵌入真实的 PTY 交互式终端，支持打开、切换及关闭多个会话，并允许分屏显示。

**适用场景**：适合需要在笔记旁直接执行命令行操作、运行脚本或管理本地 Vault 文件的用户。支持 macOS、Windows 及 glibc Linux 桌面端，不支持移动端。

**核心特色**：
1. **会话持久化**：关闭面板后后台进程继续运行，重新打开即可重连。
2. **灵活布局**：可停靠、分屏及拖拽调整大小，自动适配 Obsidian 明暗主题。
3. **智能管理**：自动识别系统 Shell，支持自定义配置；标签页随前台进程动态更新。
4. **完整体验**：支持 ANSI 颜色、Ctrl+C 中断及 5000 行回滚，默认启动于 Vault 根目录。

**使用建议**：
1. 确保使用本地文件系统 Vault，远程或移动端无法使用。
2. 利用垂直管理器快速切换不同任务会话，避免频繁重启进程。
3. 若需特定环境，请在设置中配置自定义 Shell 路径及参数。
4. 注意 Linux 用户需基于 glibc 系统（如 Ubuntu），Alpine 等 musl 系统不支持。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


