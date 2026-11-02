---
uid: 1793625624586000
title: "Obsidian 插件：Windows Startup and Tray"
tags: ["效率工具", "界面优化", "文件管理", "obsidian插件"]
description: "Start Obsidian with Windows and optionally keep each vault in the system tray. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Windows Startup and Tray

> [!Note] 插件名片
> - 插件名称：Windows Startup and Tray
> - 插件作者：Matt MOOre
> - 插件说明：Start Obsidian with Windows and optionally keep each vault in the system tray. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '界面优化', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/the-matt-moo/obsidian-windows-startup)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?windows-startup-tray)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/the-matt-moo/obsidian-windows-startup/master/README.md)



## 概述

Windows Startup and Tray 专为 Windows 桌面用户设计，旨在解决 Obsidian 启动繁琐及窗口管理不便的问题。其核心功能包括让 Obsidian 随系统登录自动启动，并支持将指定库（Vault）隐藏至系统托盘。通过精细化的启动配置，你可以选择让应用以最小化或后台托盘模式运行，甚至设定启动延迟和默认打开的库，从而在保持后台常驻的同时，避免任务栏被多个窗口占据，实现更整洁的桌面环境。

典型使用场景包括“无感启动”与“多库后台管理”。例如，你可以设置 Obsidian 在开机后延迟 30 秒启动，并直接以托盘模式运行你的“工作笔记”库，这样既避免了开机瞬间的资源抢占，又能在需要时通过托盘图标快速唤起。另一个场景是当你关闭“个人笔记”库的主窗口时，若开启了“关闭至托盘”功能，该库不会真正退出，而是转入后台，方便你随时通过托盘切换回该库，无需重新加载数据。

相比同类插件，该工具在权限使用上更为克制且透明。它仅通过 Electron 原生接口和有限的系统命令（如 `reg.exe`）来管理自身的启动项，不读取笔记内容，也不依赖外部二进制文件。其特色在于对 Squirrel 安装路径的兼容处理，以及通过生成本地辅助脚本实现启动延迟，从而规避 Windows 注册表命令长度限制。此外，它明确区分了“启动行为”与“关闭行为”，确保托盘状态与最小化状态的逻辑清晰，不会相互干扰。

使用前需注意，该插件仅适用于 Windows 10/11 桌面版，且要求 Obsidian 版本不低于 1.13.0。它需要用户授予“文件系统”和“子进程”的高级权限，尽管实际调用范围狭窄，但敏感用户应知悉此点。此外，启动设置是基于 Windows 用户账户而非单个库，若你使用便携版 Obsidian，移动安装目录后需重新配置启动项。如果你需要跨平台（如 macOS 或 Linux）的类似功能，或希望完全避免任何系统级权限请求，此插件可能不适合你。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


