---
uid: 1791709370953000
title: "Obsidian 插件：Vinyle"
tags: ['多媒体', '界面优化', '导航与状态栏', '第三方工具集成', 'obsidian插件']
description: "Un tourne-disque dans Obsidian : la pochette de la musique Apple Music en cours tourne sur un vinyle, dans un volet déplaçable et dans la barre d'état. macOS, sans clé API. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vinyle

> [!Note] 插件名片
> - 插件名称：Vinyle
> - 插件作者：liotou
> - 插件说明：Un tourne-disque dans Obsidian : la pochette de la musique Apple Music en cours tourne sur un vinyle, dans un volet déplaçable et dans la barre d'état. macOS, sans clé API. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '界面优化', '导航与状态栏', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/liotou/obsidian-vinyle)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vinyle)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/liotou/obsidian-vinyle/master/README.md)



## 概述

**1. 主要功能**
Vinyle 是一款专为 macOS 设计的 Obsidian 插件，它将 Apple Music 正在播放的歌曲封面以黑胶唱片的形式呈现。支持在可移动侧边栏、浮动面板或状态栏中显示，并模拟真实的唱臂交互。

**2. 适用场景**
适用于 macOS 用户，特别是 Apple Music 的重度使用者。适合希望在阅读笔记或工作时，以视觉化、沉浸式的方式监控音乐播放状态，并享受复古黑胶美学体验的场景。

**3. 核心特色**
*   **纯本地运行**：通过 AppleScript 与 Music.app 通信，无需 API 密钥、网络连接或开发者证书，隐私安全。
*   **交互式唱臂**：唱臂不仅用于装饰，还作为控制元件——拖动唱臂可快进/后退，抬起唱臂可暂停播放。
*   **轻量化实现**：单文件 `main.js`，无外部依赖，唱片和唱臂均由 CSS 和 SVG 绘制，性能高效。
*   **多视图支持**：支持拖拽调整位置，提供侧边栏、浮动窗口及状态栏三种显示模式。

**4. 使用建议**
*   **权限授权**：首次使用时，macOS 会弹窗询问是否允许 Obsidian 控制 Music.app，务必点击“允许”，否则插件无法获取播放信息。
*   **系统限制**：仅支持 macOS 和 Apple Music，其他音乐平台或操作系统不适用。
*   **故障排查**：若功能失效，请检查系统设置中的“隐私与安全性”中“自动化”权限是否已开启。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
