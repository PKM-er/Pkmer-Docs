---
uid: 1793625620424000
title: "Obsidian 插件：Quake"
tags: ["多媒体", "第三方工具集成", "obsidian插件"]
description: "Play Quake 1 inside Obsidian, using the game data files from your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Quake

> [!Note] 插件名片
> - 插件名称：Quake
> - 插件作者：Haissam Makki
> - 插件说明：Play Quake 1 inside Obsidian, using the game data files from your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ha1ssam/obsidian-quake)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quake)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ha1ssam/obsidian-quake/master/README.md)



## 概述

Quake 插件允许你在 Obsidian 中直接运行《雷神之锤 1》，利用 WebQuake 引擎将游戏数据从你的仓库中读取。它支持在独立标签页或新窗口中启动游戏，并将存档、配置文件及演示录像直接保存在仓库内，实现游戏进度与笔记数据的同步管理。

典型场景包括在整理笔记间隙快速进入关卡，或通过笔记中的 `quake` 代码块直接启动特定地图。例如，你可以在笔记中嵌入 `+map e1m1` 指令，点击即可开始第一关；或者通过命令行参数加载 `hipnotic` 扩展包，体验完整的战役内容。

相比传统网页版或独立客户端，该插件的最大特色是深度集成 Obsidian 生态。游戏文件无需额外配置路径，直接读取仓库内的 `pak` 文件，且支持通过命令面板导入本地文件。此外，它支持通过命令行参数加载 Mod 和扩展包，并允许在笔记中通过代码块自定义启动参数，提供了极高的灵活性。

使用前需注意，该插件仅支持桌面端，且需要自备《雷神之锤 1》的 `pak0.pak` 文件（共享版或完整版均可）。游戏启动时会加载全部资源至内存，完整版约需 55 MB 内存。它不适合移动端用户，也不支持原生局域网多人游戏，仅能通过 WebSocket 连接特定服务器进行联机。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


