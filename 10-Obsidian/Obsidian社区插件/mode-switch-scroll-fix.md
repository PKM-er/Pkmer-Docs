---
uid: 1791709368691000
title: 'Obsidian 插件：Mode Switch Scroll Fix'
tags: ['界面优化', '编辑工具', '效率工具', 'obsidian插件']
description: 'Seamlessly preserves exact scroll position when switching between Edit and Reading modes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mode Switch Scroll Fix

> [!Note] 插件名片
> - 插件名称：Mode Switch Scroll Fix
> - 插件作者：Code-Sub
> - 插件说明：Seamlessly preserves exact scroll position when switching between Edit and Reading modes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/code-sub/obsidian-mode-switch-scroll-fix)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mode-switch-scroll-fix)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/code-sub/obsidian-mode-switch-scroll-fix/master/README.md)



## 概述

**1. 主要功能**
该插件旨在解决 Obsidian 在“编辑模式”与“阅读模式”之间切换时，滚动位置意外重置（如跳回顶部）的问题。它能无缝保留用户在切换视图时的精确滚动位置，确保阅读或编辑体验的连续性。

**2. 适用场景**
特别适用于处理包含长文档、大型表格、代码块或复杂 Callout 的笔记。当用户频繁使用 `Ctrl + E` 切换视图，且希望保持当前阅读或编辑焦点不丢失时，该插件尤为有效。

**3. 核心特色**
*   **无感同步**：通过拦截模式切换事件并触发微小的 DOM 滚动刷新，强制 Obsidian 和 CodeMirror 的虚拟视口缓存保持同步。
*   **零视觉干扰**：刷新过程不可见，无视觉抖动（Jitter），实现真正的“无缝”体验。
*   **轻量级**：专注于解决单一痛点，不增加额外负担。

**4. 使用建议**
*   **安装方式**：由于插件尚未通过官方手动审核，需通过 BRAT 插件添加仓库地址 `https://github.com/Code-Sub/obsidian-mode-switch-scroll-fix`，或手动下载 `main.js` 和 `manifest.json` 至插件文件夹。
*   **注意事项**：安装后无需额外配置，启用即可生效。建议在使用长文档时测试其效果，确保滚动位置精准锁定。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


