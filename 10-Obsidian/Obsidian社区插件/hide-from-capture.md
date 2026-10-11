---
uid: 1791709367492000
title: 'Obsidian 插件：Hide From Screen Capture'
tags: ['安全与隐私', '界面优化', '效率工具', 'obsidian插件']
description: 'Excludes all Obsidian windows from screen-share/recording capture on Windows (SetWindowDisplayAffinity). - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hide From Screen Capture

> [!Note] 插件名片
> - 插件名称：Hide From Screen Capture
> - 插件作者：Sergei Chistokhin
> - 插件说明：Excludes all Obsidian windows from screen-share/recording capture on Windows (SetWindowDisplayAffinity). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chistokhinsv/obsidian-hide-from-capture)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hide-from-capture)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chistokhinsv/obsidian-hide-from-capture/master/README.md)



## 概述

**1. 主要功能**
该插件利用 Windows API（`SetWindowDisplayAffinity`）将 Obsidian 的所有窗口（包括主窗口和弹出面板）从屏幕共享或录屏中排除。开启后，他人无法通过截屏或录屏软件看到你的笔记内容，实现视觉上的“隐身”。

**2. 适用场景**
- **隐私保护**：在公共场合或远程会议中，防止敏感笔记、密码或个人信息被意外泄露。
- **专注工作**：在屏幕共享演示时，隐藏后台运行的 Obsidian 窗口，避免干扰观众视线。
- **安全协作**：在共享屏幕讨论时，仅展示特定内容，同时保护其他未共享的笔记隐私。

**3. 核心特色**
- **一键切换**：通过左侧边栏的图标（眼睛/闭眼）快速开关保护状态，状态持久化保存。
- **默认开启**：安装后默认启用保护，提供即时的安全感。
- **全面覆盖**：自动保护主窗口及所有弹出的独立标签页窗口。
- **平台限制**：仅支持 Windows 系统，其他平台下按钮无效但不报错。

**4. 使用建议**
- 安装后请确认左侧边栏图标状态，确保保护已开启。
- 可通过 `Win+Shift+S` 截图测试，若 Obsidian 窗口显示为黑色或不可见，则说明功能正常。
- 如需临时共享屏幕内容，请手动关闭保护；卸载插件后保护功能自动解除。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


