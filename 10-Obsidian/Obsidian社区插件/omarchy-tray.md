---
uid: 1791709368948000
title: 'Obsidian 插件：Omarchy Tray'
tags: ['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
description: 'Keep Obsidian in the system tray with an icon that auto-adapts to your Omarchy theme. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Omarchy Tray

> [!Note] 插件名片
> - 插件名称：Omarchy Tray
> - 插件作者：Juanma López
> - 插件说明：Keep Obsidian in the system tray with an icon that auto-adapts to your Omarchy theme. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lopezjuanma96/omarchy-tray)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?omarchy-tray)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lopezjuanma96/omarchy-tray/master/README.md)



## 概述

**1. 主要功能**
Omarchy Tray 是一款桌面端插件，允许用户关闭 Obsidian 窗口时将其最小化至系统托盘而非退出。其核心亮点在于托盘图标颜色能自动适配 Omarchy 主题，实时同步状态栏文本颜色，确保视觉一致性。

**2. 适用场景**
主要面向使用 Linux (Wayland/SNI) 且搭配 Omarchy 主题的用户。Windows 和 macOS 用户也可使用，但主题自动检测功能仅针对 Omarchy 优化。适合追求桌面环境美观统一、希望常驻后台使用 Obsidian 的用户。

**3. 核心特色**
*   **动态主题适配**：读取 `shell.toml` 配置，在切换主题时 500ms 内自动更新图标颜色，无需重启。
*   **交互便捷**：左键点击切换显示/隐藏，右键菜单提供库名、重启及退出选项。
*   **单实例聚焦**：再次启动时直接恢复现有窗口，避免重复打开库选择器。
*   **灵活配置**：支持自定义图标路径，关闭插件即可完全恢复默认行为。

**4. 使用建议**
*   安装前请确保已安装 `rsvg-convert` 以支持图标生成。
*   若需个性化，可在设置中指定 `trayIconPath` 覆盖自动检测逻辑。
*   该插件为社区开发，未经官方人工审核，建议通过 BRAT 或手动方式安装并关注后续更新。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


