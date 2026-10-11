---
uid: 1791709370942000
title: 'Obsidian 插件：Vim Mode Per Device'
tags: ['移动端优化', '快捷键', '编辑工具', 'obsidian插件']
description: 'Turn vim key bindings on or off depending on whether you are on desktop or mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vim Mode Per Device

> [!Note] 插件名片
> - 插件名称：Vim Mode Per Device
> - 插件作者：hugoh
> - 插件说明：Turn vim key bindings on or off depending on whether you are on desktop or mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['移动端优化', '快捷键', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hugoh/obsidian-vim-mode-per-device)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vim-mode-per-device)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hugoh/obsidian-vim-mode-per-device/master/README.md)



## 概述

**主要功能**
该插件根据当前设备类型（桌面或移动设备）自动启用或禁用 Obsidian 的 Vim 键位绑定。它解决了通过 iCloud、Git 等同步工具时，桌面端开启 Vim 模式会强制同步到手机端，导致触屏操作困难的问题。

**适用场景**
适用于在多个设备间同步 Obsidian 库的用户，特别是那些在电脑上习惯使用 Vim 键位，但在手机或平板上希望使用常规触控操作的用户。

**核心特色**
1. **智能切换**：默认桌面端开启 Vim 模式，移动端关闭，也可自定义配置。
2. **同步友好**：仅在设置不一致时写入配置，避免同步设备间频繁重写 `app.json` 造成冲突。
3. **轻量安全**：无网络访问、无遥测数据，仅修改 Obsidian 自身配置文件。

**使用建议**
安装并启用插件后，它会在每次启动 Obsidian 时自动应用对应设备的设置。若需更改行为，请在插件设置中调整“桌面端”或“移动端”的开关状态。更改对当前设备立即生效，其他设备将在下次启动时生效。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


