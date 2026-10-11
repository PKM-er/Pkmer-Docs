---
uid: 1791709368723000
title: 'Obsidian 插件：Move Tab to Group'
tags: ['界面优化', '效率工具', '导航与状态栏', 'obsidian插件']
description: 'Move the active tab into the tab group on its left or right. If there is no group on that side, a new one is split off for it. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Move Tab to Group

> [!Note] 插件名片
> - 插件名称：Move Tab to Group
> - 插件作者：Changhun Han
> - 插件说明：Move the active tab into the tab group on its left or right. If there is no group on that side, a new one is split off for it. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '效率工具', '导航与状态栏', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hanchanghun/move-tab-to-group)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?move-tab-to-group)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hanchanghun/move-tab-to-group/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户通过单一命令，将当前活动标签页直接移动到左侧或右侧的标签组中。若目标侧无现有组，则自动拆分出新组。核心机制是“移动”而非“复制”，原标签页离开原组并保留浏览历史。

**2. 适用场景**
适用于桌面端 Obsidian 用户，特别是多标签页工作流中需要频繁重组窗口布局的场景。支持嵌套布局及弹出窗口，但不影响侧边栏。

**3. 核心特色**
- **保留历史**：与内置拆分命令不同，移动后标签页保持原有状态，不丢失上下文。
- **智能定位**：在嵌套布局中自动定位最近的目标组；若目标侧垂直堆叠，则进入顶部组。
- **逻辑严谨**：若标签页独占一组，则不执行移动以避免布局无变化；仅支持左右移动。
- **无默认快捷键**：需用户自行在设置中绑定（推荐 `Ctrl+Alt+←/→`）。

**4. 使用建议**
- 安装后请在“设置 → 快捷键”中搜索 "Move tab to" 并绑定常用按键。
- Windows/Linux 用户注意：默认快捷键可能与系统“前进/后退”冲突，需先解除原有绑定。
- 仅支持桌面端，移动端不可用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


