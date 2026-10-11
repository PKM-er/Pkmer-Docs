---
uid: 1791709366510000
title: 'Obsidian 插件：Device Selective Sync'
tags: ['文件管理', '备份与恢复', '移动端优化', 'obsidian插件']
description: 'Choose plugin sync per device, with installation-based defaults and optional recoverable local cleanup. Requires Obsidian Sync. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Device Selective Sync

> [!Note] 插件名片
> - 插件名称：Device Selective Sync
> - 插件作者：LK
> - 插件说明：Choose plugin sync per device, with installation-based defaults and optional recoverable local cleanup. Requires Obsidian Sync. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lywooye/obsidian-device-plugin-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?device-plugin-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lywooye/obsidian-device-plugin-sync/master/README.md)



## 概述

**插件名称**：Device Selective Sync

**主要功能**：该插件允许用户按设备（电脑、手机、iPad）独立选择哪些 Obsidian 插件参与同步。它基于安装来源设定默认同步策略，并提供可选的本地清理功能。需注意，此插件依赖官方 Obsidian Sync 服务，且当前版本（0.3.5）为实验性版本，仅兼容 Obsidian 1.13.7。

**适用场景**：适用于使用 Obsidian Sync 的多设备用户，特别是希望在不同设备上运行不同插件组合的场景。例如，在手机上仅同步轻量级插件，而在电脑上同步所有插件，以优化移动端性能或存储空间。

**核心特色**：
1. **细粒度控制**：支持逐设备、逐插件的同步开关，勾选表示允许同步，取消勾选则阻止该设备上的上传和下载（但不删除本地文件）。
2. **智能默认值**：新建同步列表时，电脑默认全选，手机和 iPad 默认不选，符合常规使用习惯。
3. **基于安装来源**：v0.3.0 起支持根据插件是在哪个设备上安装的，自动设定其同步范围。

**使用建议**：
1. **谨慎测试**：由于是实验性版本且真实手机/iPad 同步未完全验证，强烈建议先在测试库（Test Vault）中试用。
2. **前置条件**：必须拥有 Obsidian 账户并订阅付费的 Obsidian Sync 服务。
3. **管理入口**：建议在主要管理电脑上创建同步列表，统一配置各设备的插件策略。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


