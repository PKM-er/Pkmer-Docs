---
uid: 1793625620085001
title: "Obsidian 插件：Pin Indicator"
tags: ["界面优化", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Show a lock icon in the note's more options button while the note is pinned. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pin Indicator

> [!Note] 插件名片
> - 插件名称：Pin Indicator
> - 插件作者：nicholaskj
> - 插件说明：Show a lock icon in the note's more options button while the note is pinned. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nicholaskj/pin-indicator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pin-indicator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nicholaskj/pin-indicator/master/README.md)



## 概述

Pin Indicator 旨在解决 Obsidian 原生“固定”功能在移动端缺乏直观视觉反馈的问题。当笔记标签页被固定时，插件会将笔记右上角的“更多选项”按钮（通常为三个点）替换为红色的锁形图标。这一设计让用户无需查看狭窄且难以辨认的标签栏，仅通过笔记头部即可一眼确认当前笔记是否处于固定状态，从而避免误操作关闭重要页面。

典型使用场景主要发生在移动端阅读或编辑时。例如，当你正在手机上查阅一份长篇文档或进行多任务切换时，可能忘记当前笔记是否已固定。此时，红色的锁形图标能立即提供明确的状态提示。另一个场景是快速浏览多个笔记时，通过观察头部按钮颜色，你可以迅速区分哪些笔记是临时打开的，哪些是已固定保留的，从而更高效地管理阅读流。

与市面上其他处理固定标签的插件不同，Pin Indicator 不维护独立的固定列表，也不改变标签栏的外观，而是直接读取 Obsidian 原生的固定状态并映射到笔记视图内。它没有设置项，不存储任何数据，也不依赖网络或文件系统，完全基于 Obsidian 内部事件实时响应。这种轻量级设计确保了它与原生行为完全同步，既不会因重启丢失状态，也不会像某些插件那样因维护独立列表而导致状态不同步。

需要注意的是，该插件仅用于视觉指示，不具备防止标签页被意外关闭的功能，这一保护机制仍由 Obsidian 原生行为提供。此外，它不适用于那些希望自定义标签栏样式、或将笔记固定到侧边栏/文件列表顶部的用户，因为那些需求需要其他专门针对标签栏美化或独立固定列表的插件来解决。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


