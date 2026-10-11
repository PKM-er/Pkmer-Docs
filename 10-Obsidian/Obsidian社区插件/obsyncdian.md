---
uid: 1791709370197000
title: 'Obsidian 插件：Sync Setup'
tags: ['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Carry your community plugin setup between devices using a profile in your synced vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sync Setup

> [!Note] 插件名片
> - 插件名称：Sync Setup
> - 插件作者：Greg Poggiali
> - 插件说明：Carry your community plugin setup between devices using a profile in your synced vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/2tallgreg/Sync-Setup)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsyncdian)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/2tallgreg/Sync-Setup/master/README.md)



## 概述

**1. 主要功能**
Sync Setup 通过在你的同步库中生成可读的 JSON 配置文件，实现 Obsidian 社区插件列表及设备启用状态在不同设备间的同步。它记录已安装插件、启用状态及适用平台（桌面/移动/当前设备），并对比当前设备与共享配置，展示匹配、缺失或差异项。

**2. 适用场景**
适用于使用 Obsidian Sync 或第三方同步服务（如 iCloud、Dropbox）的用户，需要在多台设备（如电脑与手机）间保持插件环境一致，且希望避免手动逐个安装和配置插件的情况。

**3. 核心特色**
*   **轻量无账号**：不运行独立同步服务，不要求账号，仅依赖现有库同步机制。
*   **安全审查**：提供预览界面，安装或更改启用状态前需用户确认，且**绝不自动卸载**插件。
*   **智能兼容**：自动跳过移动端不支持的桌面专用插件，并在安装前检查兼容性。
*   **隐私保护**：配置文件仅包含插件列表和状态，**不包含**插件具体设置或凭证。

**4. 使用建议**
*   **源设备设置**：先在主力设备上选择“Use this device as source”生成配置文件，确保 `sync-setup-profile.json` 未被同步服务排除。
*   **目标设备恢复**：在新设备上安装插件后，选择“Preview restore”，仔细审查拟安装和启用的插件，仅应用所需变更。
*   **注意限制**：当前版本不同步插件内部设置，需手动调整各插件的具体参数。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


