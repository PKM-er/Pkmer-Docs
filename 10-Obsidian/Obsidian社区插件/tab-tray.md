---
uid: 1793625621997000
title: "Obsidian 插件：Tab Tray"
tags: ["界面优化", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Browser-style tab groups you can open and collapse in one click, plus a compact pinned row. Built so groups never disappear after a restart. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tab Tray

> [!Note] 插件名片
> - 插件名称：Tab Tray
> - 插件作者：iceblyte
> - 插件说明：Browser-style tab groups you can open and collapse in one click, plus a compact pinned row. Built so groups never disappear after a restart. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/iceblyte/tab-tray)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tab-tray)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/iceblyte/tab-tray/master/README.md)



## 概述

Tab Tray 旨在解决 Obsidian 桌面端标签页过多导致的混乱问题，提供类似浏览器的标签分组功能。它允许用户创建命名且带颜色的组，通过单击即可展开或折叠，从而将杂乱的标签栏整理为清晰的逻辑区块。其核心设计目标不仅是分组本身，更在于确保这些分组在软件重启后依然完整保留，避免每次启动都要重新整理标签的麻烦。

典型场景适用于同时处理多个项目或进行深度研究时。例如，当你同时打开“论文阅读”和“代码调试”两组文件时，可以将它们分别归入不同颜色的组中。需要切换工作时，只需点击对应组名，当前窗口的标签页就会替换为该组内容；若按住 Ctrl/Cmd 键点击，则可将新组追加到现有标签后。此外，侧边栏面板能清晰展示已固定、未分组及外部文件的数量，方便快速定位。

相比其他标签插件，Tab Tray 的特色在于极致的数据持久化与安全性。所有更改均通过原子写入和防抖机制保存，并自动轮换备份文件，即使主数据文件损坏也能从备份恢复，确保分组永不丢失。界面设计上，它采用单一列表展示固定、未分组、外部及分组区域，且固定标签会缩小为图标以节省空间，同时保留原生点击行为，不干扰日常操作。

需要注意的是，该插件仅支持 Obsidian 桌面版，移动端因缺乏标签栏架构而无法使用。此外，固定标签一旦从组中移出，取消固定后不会自动回归原组，需手动重新添加。如果你主要使用移动端，或不需要跨重启保留分组状态，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


