---
uid: 1793625623795001
title: "Obsidian 插件：Tuopan"
tags: ["效率工具", "界面优化", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tuopan

> [!Note] 插件名片
> - 插件名称：Tuopan
> - 插件作者：张一鸣
> - 插件说明：
> - 插件分类：['效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/incredible404-rgb/tuopan)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tuopan)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/incredible404-rgb/tuopan/master/README.md)



## 概述

Tuopan 旨在解决 Obsidian 在 Windows 系统下频繁重启或关闭后需重新选择库的繁琐问题。它让 Obsidian 常驻系统托盘，支持开机时隐藏启动，并在关闭窗口时仅最小化至托盘而非彻底退出。再次打开时，插件会自动恢复现有窗口，跳过库选择界面，实现无缝衔接。

典型场景包括：当你习惯将 Obsidian 作为后台常驻应用时，点击关闭按钮后程序不会消失，而是静默运行在托盘，随时可通过图标唤出；或者在开机后，Obsidian 自动在后台启动并隐藏，不打扰你的其他工作，直到你需要时再调出。此外，它提供全局快捷键，可快速呼出或隐藏窗口，甚至直接打开当天的快速笔记，无需切换焦点。

相比其他托盘插件，Tuopan 的特色在于其图标清晰度与启动逻辑的优化。它会在首次运行时根据系统显示比例生成多尺寸图标，避免模糊。在自启动方面，它仅写入必要的登录项，并主动清理其他插件遗留的重复启动项，防止应用被启动两次。此外，其快速笔记功能会在新标签页打开今日笔记，不会覆盖你当前正在阅读的内容。

使用前请注意，该插件仅在 Windows 系统上生效，其他系统下保持非活动状态。若你已安装其他托盘类插件，需先禁用它们，以免快捷键或关闭行为冲突。它不适合需要彻底退出 Obsidian 以释放内存的用户，因为“关闭”默认是隐藏；若需真正退出，必须通过托盘菜单选择“彻底退出”。此外，它不包含网络功能或遥测，仅本地运行。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


