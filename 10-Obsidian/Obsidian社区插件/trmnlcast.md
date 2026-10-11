---
uid: 1791709370568000
title: 'Obsidian 插件：TRMNLcast'
tags: ['第三方工具集成', '自动化与AI', '数据处理', 'obsidian插件']
description: 'A TRMNL Obsidian bridge: pushes your Claude Code token usage — and any other screen you write — to a TRMNL e-ink display over a private-plugin webhook. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TRMNLcast

> [!Note] 插件名片
> - 插件名称：TRMNLcast
> - 插件作者：mprazz
> - 插件说明：A TRMNL Obsidian bridge: pushes your Claude Code token usage — and any other screen you write — to a TRMNL e-ink display over a private-plugin webhook. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mprazz/trmnlcast)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?trmnlcast)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mprazz/trmnlcast/master/README.md)



## 概述

**1. 主要功能**
TRMNLcast 是一个 Obsidian 与 TRMNL 电子墨水屏的桥接插件。它允许用户将 Obsidian 中计算出的数据（如 Claude Code 的 Token 用量）通过私有 Webhook 推送到 TRMNL 设备显示。

**2. 适用场景**
适用于希望将个人工作数据、开发指标或自定义信息可视化展示在桌面电子墨水屏上的用户，特别是关注 AI 工具使用成本或需要极简主义信息展示的场景。

**3. 核心特色**
*   **可扩展框架**：提供 `Screen` 接口，用户只需编写 `collect()` 函数和模板即可快速添加新屏幕。
*   **智能调度与预算**：支持每屏幕独立定时，自动跳过未变更数据以节省 TRMNL 的每小时推送配额（12-30次/小时）。
*   **完善管理**：内置 Obsidian 设置 UI，支持凭据掩码、重复检测、超预算警告及实时字节计数，确保失败时明确报错而非静默失败。

**4. 使用建议**
建议开发者利用其框架机制，通过定义 `collect` 方法自定义数据源。注意监控状态栏中的推送预算剩余量，合理设置刷新频率（`defaultEvery`），并充分利用“未变更跳过”机制以最大化利用 TRMNL 的有限推送配额。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


