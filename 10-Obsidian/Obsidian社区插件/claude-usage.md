---
uid: 1791709366041000
title: 'Obsidian 插件：Claude Usage'
tags: ['导航与状态栏', '第三方工具集成', '自动化与AI', 'obsidian插件']
description: 'Shows your Claude subscription usage (5-hour and weekly windows) in the status bar. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Claude Usage

> [!Note] 插件名片
> - 插件名称：Claude Usage
> - 插件作者：Alexander Herrmann
> - 插件说明：Shows your Claude subscription usage (5-hour and weekly windows) in the status bar. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['导航与状态栏', '第三方工具集成', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/eightk1ll/obsidian-claude-usage)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?claude-usage)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/eightk1ll/obsidian-claude-usage/master/README.md)



## 概述

**1. 主要功能**
在 Obsidian 状态栏实时显示 Claude 订阅的使用量，包括 5 小时窗口、每周窗口及顶级模型窗口。通过读取本地 OAuth 令牌查询用量，直观展示剩余百分比及重置倒计时。

**2. 适用场景**
适用于重度使用 Claude Code 或 API 的开发者，需监控配额以避免因用量耗尽导致服务中断，特别适合桌面端（Windows/macOS/Linux）用户。

**3. 核心特色**
*   **直观可视化**：采用环形进度条展示，支持颜色预警（默认 75% 变黄，90% 变红并显示警告图标），不依赖单一颜色识别。
*   **安全只读**：仅读取 Claude Code 的凭证文件或 macOS 钥匙串，绝不写入或刷新令牌，确保数据安全。
*   **交互友好**：悬停显示详细重置时间，点击弹出通知，信息获取便捷。

**4. 使用建议**
*   **前置条件**：必须安装并登录 Claude Code，且令牌需包含 `user:profile` 权限（`setup-token` 生成的令牌无效）。
*   **系统要求**：仅支持 Obsidian 1.13.0+ 桌面版。macOS 用户首次运行需授权钥匙串访问权限。
*   **风险提示**：插件依赖未公开的 API 端点，未来可能失效，请做好备用方案。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


