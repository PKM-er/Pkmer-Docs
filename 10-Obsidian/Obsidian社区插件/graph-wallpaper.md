---
uid: 1793625613484001
title: "Obsidian 插件：Graph Wallpaper"
tags: ["图谱", "界面优化", "样式与美化", "obsidian插件"]
description: "Show the live graph view as your desktop wallpaper, slowly rotating, on Windows and Linux (X11). - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Graph Wallpaper

> [!Note] 插件名片
> - 插件名称：Graph Wallpaper
> - 插件作者：Kibeom Lee
> - 插件说明：Show the live graph view as your desktop wallpaper, slowly rotating, on Windows and Linux (X11). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图谱', '界面优化', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kbeom9307/obsidian-graph-wallpaper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?graph-wallpaper)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kbeom9307/obsidian-graph-wallpaper/master/README.md)



## 概述

Graph Wallpaper 将 Obsidian 的实时图谱视图转化为动态桌面壁纸，让知识网络成为你屏幕的背景。它并非静态图片，而是真正“活”的图谱：当你新建笔记或添加链接时，节点和连线会即时出现。插件支持缓慢旋转、漂移和呼吸般的缩放效果，让静止的桌面充满生机，同时保持图谱的核心交互能力。

想象一下，当你打开电脑准备写作时，桌面上正缓缓旋转着你过去一年的知识脉络；或者在长时间阅读后，看着图谱随时间轻轻“呼吸”，缓解视觉疲劳。它特别适合喜欢沉浸式工作环境的用户，将抽象的知识结构具象化为视觉背景，既美观又具有提示作用，无需切换窗口即可瞥见笔记间的关联。

相比其他壁纸工具，该插件的最大特色是“实时性”与“原生集成”。它直接驱动 Obsidian 核心图谱渲染器，而非截图，因此能完美同步你的最新编辑。此外，它支持选择核心图谱或 Advanced Graph View 插件作为源，并具备智能暂停机制：当你手动调整视角后，动效会暂停几秒，待你操作结束后再从新视角继续，避免了干扰。

需要注意的是，该插件仅支持 Windows 10/11 和 Linux (X11) 系统，macOS 和 Linux Wayland 会话暂不支持。在 Windows 上，由于桌面图标层占据鼠标事件，壁纸仅用于展示，无法直接点击交互。此外，插件会启动本地辅助进程（Python 或 PowerShell）来管理窗口层级，虽无网络请求且数据本地化，但需确保系统已安装相应运行环境。如果你追求极致的系统资源占用或需要跨平台一致性，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


