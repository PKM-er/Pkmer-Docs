---
uid: 1793625613734000
title: "Obsidian 插件：Hierarchy Navigator"
tags: ["导航与状态栏", "文件管理", "界面优化", "obsidian插件"]
description: "Render a parent / siblings / children navigation block at the top of any note. Inspired by SiYuan's hierarchyNavigate plugin. Source files are never modified — the block is injected at render time. Works with the AidenLX Folder Note plugin. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hierarchy Navigator

> [!Note] 插件名片
> - 插件名称：Hierarchy Navigator
> - 插件作者：ButCool
> - 插件说明：Render a parent / siblings / children navigation block at the top of any note. Inspired by SiYuan's hierarchyNavigate plugin. Source files are never modified — the block is injected at render time. Works with the AidenLX Folder Note plugin. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['导航与状态栏', '文件管理', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/butfool/obsidian-hierarchy-navigator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hierarchy-navigator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/butfool/obsidian-hierarchy-navigator/master/README.md)



## 概述

Hierarchy Navigator 旨在解决 Obsidian 中笔记层级关系不直观的问题，通过在笔记顶部动态渲染导航块，清晰展示当前笔记的父文件夹、同级文件及子项。它基于 AidenLX Folder Note 插件的语义构建，灵感源自思源笔记的层级导航功能。该插件在渲染时注入内容，绝不修改原始 Markdown 文件，确保数据源的安全与纯净，让你无需切换文件浏览器即可快速定位笔记在库中的位置。

典型场景包括快速浏览文件夹结构或管理子笔记。例如，当你打开一篇长文时，顶部导航块会列出其所在文件夹及同级笔记，方便横向对比；若该笔记是 Folder Note，正文区域还会显示子项索引，让你一眼看清内部包含哪些文件。这种设计特别适合需要频繁在层级间跳转、或希望直观查看文件夹内容的用户，减少了在文件树中反复点击的操作成本。

相比同类插件，Hierarchy Navigator 的特色在于对文件类型的精细化区分与视觉优化。它通过 Obsidian 视图注册表过滤文件，仅显示应用可打开的内容，并按自然顺序排序（如 9 在 10 前）。导航胶囊根据文件类型（笔记、Canvas、PDF、音视频等）着色，Folder Note 拥有专属图标。此外，它支持在正文中渲染子项索引，并提供创建新笔记、Folder Note 或文件夹的对话框，支持预览目录结构，且创建过程通过 Obsidian 原生 API 执行，避免覆盖现有路径。

使用前需注意，该插件依赖 Folder Note 插件以实现文件夹导航语义，若未安装 Folder Note，部分功能可能受限。它主要服务于层级导航需求，若你仅需要简单的文件列表或标签导航，此插件可能显得冗余。此外，虽然插件支持只读模式，但默认包含创建功能，若希望严格只读，需在设置中关闭创建按钮。对于不习惯顶部额外信息块或偏好极简界面的用户，可能会觉得视觉干扰较大，建议先通过设置调整显示项以适配个人习惯。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


