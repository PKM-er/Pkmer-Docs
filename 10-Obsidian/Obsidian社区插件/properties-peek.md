---
uid: 1793625620293000
title: "Obsidian 插件：Properties Peek"
tags: ["界面优化", "快捷键", "效率工具", "obsidian插件"]
description: "Hide note properties with a single click or hotkey, or take a quick temporary peek before they hide again. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Properties Peek

> [!Note] 插件名片
> - 插件名称：Properties Peek
> - 插件作者：Anthirayas
> - 插件说明：Hide note properties with a single click or hotkey, or take a quick temporary peek before they hide again. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '快捷键', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jrayas/properties-peek)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?properties-peek)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jrayas/properties-peek/master/README.md)



## 概述

Properties Peek 旨在解决 Obsidian 中 YAML 属性块（Frontmatter）遮挡正文阅读体验的问题。它允许用户通过点击侧边栏图标或快捷键，一键隐藏所有打开笔记中的属性区域，使笔记呈现为纯净的正文视图。与直接修改文件不同，该插件仅改变视觉显示，确保底层数据完整保留，不影响 Dataview、Bases 或其他插件对元数据的读取，实现了“视觉隐藏”与“数据可用”的完美平衡。

典型场景包括日常阅读与快速查阅。例如，在专注写作时，你可以一键隐藏所有笔记的属性，消除顶部杂乱信息的干扰，获得沉浸式的阅读体验。当你需要临时确认某篇笔记的标签或日期时，无需手动切换设置，只需触发“Peek”功能，属性块会短暂显示几秒后自动隐藏，既满足了即时查看需求，又无需手动恢复隐藏状态，操作流畅且无负担。

相比 Obsidian 内置的“隐藏属性”设置，Properties Peek 提供了更灵活的交互方式。内置设置缺乏快捷切换入口，每次调整都需进入深层菜单，且无法实现临时预览。本插件不仅支持全局即时切换，还独创了“临时窥视”机制，允许用户自定义 2 至 60 秒的显示时长。此外，它支持在桌面端和移动端独立记忆显示状态，并能在阅读视图、实时预览及嵌入笔记中无缝消除布局空隙，细节处理更为人性化。

使用前需注意，该插件主要优化视觉体验，若你依赖源码模式下的原始 YAML 行进行编辑，需手动开启“在源码模式应用”选项。它不适合需要频繁修改属性内容的场景，因为隐藏状态下无法直接编辑。此外，虽然插件完全本地运行且安全，但极度自定义的主题若重写了 `.metadata-container` 样式，可能需要测试兼容性。总体而言，它是追求整洁阅读体验用户的理想辅助工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


