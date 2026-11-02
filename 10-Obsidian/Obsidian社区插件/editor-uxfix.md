---
uid: 1793625612470000
title: "Obsidian 插件：Editor UX Fix"
tags: ["编辑工具", "界面优化", "移动端优化", "obsidian插件"]
description: "Fold and unfold lines with long-press, clicks, and the mouse wheel, keeping the line under the mouse in place. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Editor UX Fix

> [!Note] 插件名片
> - 插件名称：Editor UX Fix
> - 插件作者：Hyunyoung Park
> - 插件说明：Fold and unfold lines with long-press, clicks, and the mouse wheel, keeping the line under the mouse in place. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '界面优化', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lugglory/obsidian-editor-uxfix)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?editor-uxfix)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lugglory/obsidian-editor-uxfix/master/README.md)



## 概述

Editor UX Fix 旨在优化 Obsidian 编辑器的折叠体验，核心功能是允许用户通过长按、点击或鼠标滚轮来折叠与展开行。它解决了传统折叠操作需要精确点击小箭头或依赖键盘快捷键的繁琐问题，让层级结构的收放更加直观。插件确保在操作过程中，鼠标下方的行保持在屏幕同一高度，避免了因折叠导致视图剧烈跳动，从而维持了视觉上的稳定性。

典型场景包括快速浏览长文档的大纲结构。例如，当你想隐藏某个章节下的所有细节时，只需将鼠标悬停在行首左侧并向下滚动滚轮，即可逐层折叠；若需展开，向上滚动即可。另一个场景是处理复杂的嵌套列表，长按某一行可以折叠其父级项目，即使该行的第一行已滚动出视野，也能快速收起整个代码块或列表项，无需反复寻找折叠图标。

相比同类插件，其特色在于对“文本左侧”区域的精细交互定义。滚轮和点击操作严格限定在缩进、列表标记或复选框区域，不会误触正文。此外，它提供了视图头部的“全部折叠/展开”按钮，能一次性处理所有层级，且隐藏了阅读模式下的干扰。所有行为均可在设置中独立开关，长按时长也可自定义，兼顾了不同用户的操作习惯。

使用前需注意，该插件仅支持桌面端，且必须开启 Obsidian 设置中的“折叠缩进”和“折叠标题”选项才能正常工作。它不适合移动端用户，也不适合那些习惯完全依赖键盘快捷键进行折叠操作、认为鼠标交互多余的用户。若你主要使用阅读模式或不需要频繁调整文档层级结构，此插件可能并非必需。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


