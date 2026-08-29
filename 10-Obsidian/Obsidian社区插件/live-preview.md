---
uid: 1786577078868001
title: 'Obsidian 插件：HTML Preview'
tags: ['编程与脚本', '效率工具', '发布工具', '第三方工具集成', 'obsidian插件']
description: '借助本地HTTP服务器实现实时HTML预览，还能自动刷新，就像VSCode的实时预览功能一样。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：HTML Preview

> [!Note] 插件名片
> - 插件名称：HTML Preview
> - 插件作者：HxGuang
> - 插件说明：借助本地HTTP服务器实现实时HTML预览，还能自动刷新，就像VSCode的实时预览功能一样。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编程与脚本', '效率工具', '发布工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hxwguang/obsidian-live-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?live-preview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hxwguang/obsidian-live-preview/master/README.md)



## 概述

### 插件名称
HTML Preview

### 主要功能
启动本地 HTTP 服务器，对 HTML 文件提供实时预览，支持保存自动刷新，可在 Obsidian 内嵌入预览面板，也能在系统浏览器打开。

### 适用场景
适合在 Obsidian 中编写和调试 HTML 文件，无论是简单页面还是包含 CSS、JS、字体和图像的复杂页面都适用。

### 核心特色
- 本地服务器确保相对路径资源正常加载。
- 利用 WebSocket 实现约 300ms 内自动刷新。
- 提供嵌入预览面板，可一键切换预览和源码视图。
- 具备路径遍历保护，保障文件安全。
- 端口自动递增，避免端口冲突。

### 使用建议
可通过 Obsidian 社区插件搜索安装，也能手动下载文件安装，还可借助 BRAT 插件安装。在编写 HTML 文件时，利用自动刷新和切换视图功能提高开发效率，若需全面查看效果可在系统浏览器打开预览。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


