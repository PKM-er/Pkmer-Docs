---
uid: 1786577077733008
title: 'Obsidian 插件：Find in Note'
tags: ['搜索与排序', '编辑工具', '文字处理', '效率工具', 'obsidian插件']
description: '在当前笔记里进行搜索，并把所有匹配项当场高亮显示，而且不会让表格、标注框或者其他块元素的渲染失效。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Find in Note

> [!Note] 插件名片
> - 插件名称：Find in Note
> - 插件作者：mikagosz
> - 插件说明：在当前笔记里进行搜索，并把所有匹配项当场高亮显示，而且不会让表格、标注框或者其他块元素的渲染失效。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['搜索与排序', '编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mikagosz/obsidian-find-in-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?find-in-note)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mikagosz/obsidian-find-in-note/master/README.md)



## 概述

### 插件主要功能
“Find in Note”插件用于搜索当前笔记，在不改变笔记原有样式的情况下，高亮显示所有匹配内容。支持使用快捷键（Cmd+F 或 Ctrl+F）打开搜索栏，输入内容时实时高亮匹配项，当前匹配项高亮更明显，可通过 Enter、Shift+Enter 或搜索栏箭头前后切换匹配项，Esc 键关闭搜索栏并清除高亮。

### 适用场景
适用于在包含表格、引用块等复杂格式的笔记中进行搜索，避免因使用 Obsidian 内置搜索导致表格等块元素样式被破坏。

### 核心特色
对渲染后的笔记进行搜索，利用 CSS 自定义高亮 API 高亮匹配内容，不触碰 DOM 节点，不会触发重新渲染和重排，保证表格等元素样式不变。

### 使用建议
首次使用需在“Settings → Hotkeys”中清除 Obsidian 内置搜索的 Cmd+F 快捷键绑定，让插件的搜索快捷键生效。编辑状态下打开搜索，笔记会切换到阅读视图，关闭搜索栏后恢复原模式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


