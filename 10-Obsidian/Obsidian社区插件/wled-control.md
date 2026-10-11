---
uid: 1791709371091000
title: 'Obsidian 插件：WLED Control'
tags: ['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Control WLED LED controllers on your local network: color, brightness, presets, and on/off, with automatic device discovery. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：WLED Control

> [!Note] 插件名片
> - 插件名称：WLED Control
> - 插件作者：modularidea
> - 插件说明：Control WLED LED controllers on your local network: color, brightness, presets, and on/off, with automatic device discovery. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/modularidea/wled-control)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wled-control)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/modularidea/wled-control/master/README.md)



## 概述

**WLED Control** 是一款用于在 Obsidian 中直接控制局域网内 WLED LED 控制器的插件。

**主要功能**：支持自动发现或手动添加设备，通过 WebSocket 实时同步控制颜色、亮度、预设效果及开关状态。提供侧边栏控制面板、Ribbon 图标快捷切换、状态栏显示，并支持打开设备 Web 仪表盘。

**适用场景**：适合希望将智能灯光融入个人知识管理或笔记工作流的极客用户，特别是在需要快速切换灯光氛围或进行自动化演示时。

**核心特色**：
1. **自动发现**：通过 HTTP 扫描和 mDNS 自动识别局域网设备。
2. **实时交互**：基于 WebSocket 的即时反馈，操作响应迅速。
3. **代码块集成**：支持在笔记中通过 `wled-effect` 代码块定义自定义状态或序列，实现文档与灯光的联动。

**使用建议**：
1. **手动安装**：目前未上架社区插件列表，需从 Release 下载文件至 `.obsidian/plugins/wled-control/` 目录。
2. **风险警示**：插件处于 Beta 阶段，未经广泛测试，可能影响 Vault 数据，使用前请务必**备份 Vault**。
3. **网络要求**：确保 Obsidian 与 LED 控制器处于同一局域网子网。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


