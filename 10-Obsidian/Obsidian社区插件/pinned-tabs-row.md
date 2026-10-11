---
uid: 1791709369218000
title: 'Obsidian 插件：Pinned Tabs Row'
tags: ['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
description: 'Shows pinned tabs in a separate row above the tab bar, like VS Code and IntelliJ. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pinned Tabs Row

> [!Note] 插件名片
> - 插件名称：Pinned Tabs Row
> - 插件作者：tnmyk
> - 插件说明：Shows pinned tabs in a separate row above the tab bar, like VS Code and IntelliJ. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tnmyk/pinned-tabs-row)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pinned-tabs-row)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tnmyk/pinned-tabs-row/master/README.md)



## 概述

**主要功能**
该插件将固定（Pinned）标签页独立显示在普通标签栏上方的单独一行，模仿 VS Code 和 IntelliJ 的界面布局。支持通过命令快速固定/取消固定当前标签，或一键清除所有固定标签。

**适用场景**
适合需要频繁切换核心文档、希望保持常用笔记始终可见且不被大量临时打开的文件干扰的用户，尤其适用于桌面端及移动端多标签页管理场景。

**核心特色**
1. **纯 CSS 实现**：利用 `:has()` 选择器和 CSS Grid 布局，不移动 DOM 节点，彻底避免闪烁、标签消失或与拖拽排序冲突的问题。
2. **紧凑模式**：可选开启“紧凑固定标签”，将固定栏收缩为仅显示图标的条带，极致节省空间。
3. **稳定无副作用**：固定与未固定行独立水平滚动，无布局抖动，兼容 Obsidian 1.13.0+。

**使用建议**
安装启用后，右键点击标签选择“Pin”即可将其移至上方固定行。建议开启“紧凑固定标签”设置以最大化工作区空间。若需快速操作，可绑定快捷键执行“Pin or unpin current tab”命令，无需鼠标交互。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


