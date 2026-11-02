---
uid: 1793625620092001
title: "Obsidian 插件：Pinned Tab Bar"
tags: ["界面优化", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Move pinned tabs into a separate sidebar strip and control each one independently: keep it in the strip, send it back to the tab bar, or shrink it to a small badge. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pinned Tab Bar

> [!Note] 插件名片
> - 插件名称：Pinned Tab Bar
> - 插件作者：ren yi
> - 插件说明：Move pinned tabs into a separate sidebar strip and control each one independently: keep it in the strip, send it back to the tab bar, or shrink it to a small badge. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zych2023/Pinned-Tab-Bar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pinned-tab-bar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zych2023/Pinned-Tab-Bar/master/README.md)



## 概述

Pinned Tab Bar 旨在解决 Obsidian 标签栏空间被固定标签过度占用导致切换不便的问题。该插件将固定标签从顶部标签栏移至侧边栏专用区域，从而释放横向空间供常用文件使用。核心功能在于提供独立的布局控制，允许用户针对每个固定标签单独选择显示位置：保留在侧边栏、恢复至标签栏显示完整标题，或压缩为小徽章。插件仅改变标签的显示位置，不会取消固定状态，确保工作流不受干扰。

典型场景包括管理大量参考文档或长期项目笔记。例如，当你固定了五个项目文档时，可以将其中三个设为侧边栏徽章以节省空间，保留一个完整标题在标签栏以便快速识别，另一个设为紧凑徽章。这种混合布局让你既能一眼看到所有固定项，又不会让标签栏变得拥挤。通过双击标签栏中的固定项即可将其移回侧边栏，操作直观且无需记忆复杂命令。

相比同类插件，Pinned Tab Bar 的特色在于“逐标签独立配置”和“视觉区分”。它不采用全局开关，而是允许四个固定标签同时处于不同状态。此外，侧边栏徽章默认显示文件名前几个字符及基于路径生成的颜色，有效区分了图标相同的 Markdown 文件。用户还可通过 Frontmatter 自定义徽章文字和颜色。插件完全本地运行，无网络请求、无遥测，不读取文件内容，仅处理文件名和路径，隐私安全性高。

使用前需注意，该插件会占用左侧丝带或状态栏空间，若侧边栏已折叠则无法显示。它不适合需要频繁重命名固定标签的用户，因为双击手势被用于移动标签，重命名需通过右键菜单完成。若你习惯所有固定标签都显示完整标题，或侧边栏空间极度紧张，此插件可能并非最佳选择。禁用插件可立即恢复 Obsidian 默认行为，配置数据仅存储在本地 JSON 文件中。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


