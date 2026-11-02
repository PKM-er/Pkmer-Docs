---
uid: 1793625620414000
title: "Obsidian 插件：QMD Search"
tags: ["搜索与排序", "文件管理", "效率工具", "obsidian插件"]
description: "Local QMD search, related notes, and autosync for your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：QMD Search

> [!Note] 插件名片
> - 插件名称：QMD Search
> - 插件作者：xia-ataraxia
> - 插件说明：Local QMD search, related notes, and autosync for your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xia-ataraxia/obsidian-qmd)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?qmd)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xia-ataraxia/obsidian-qmd/master/README.md)



## 概述

QMD Search 旨在解决 Obsidian 本地笔记库中搜索不够智能的问题，核心功能是提供基于 QMD 引擎的本地化搜索体验。它支持关键词匹配、语义向量搜索及混合模式，能在弹窗中快速定位笔记并高亮显示相关片段。此外，插件还具备自动同步机制，当笔记内容发生变化时会自动重新索引，并在状态栏显示进度，确保搜索结果始终与最新内容保持一致。

典型使用场景包括日常快速检索和知识关联。例如，当你输入“咖啡”或“马拉松”时，插件能立即返回包含这些关键词的笔记，并高亮匹配部分，比传统全文搜索更直观。另一个场景是浏览当前笔记时，通过侧边栏查看“相关笔记”，系统会基于语义相似度推荐内容相近的其他笔记，帮助你发现潜在的知识联系，而无需手动回忆或搜索。

相比同类插件，QMD Search 的最大特色在于完全本地化运行且无网络依赖。它调用本地的 QMD 命令行程序进行索引和搜索，笔记数据不会上传至云端，隐私安全性高。同时，它提供了将搜索结果直接插入为 Wiki 链接的功能，支持右键菜单或快捷键操作，方便在笔记间建立双向链接。这种“搜索即链接”的工作流，使得知识管理更加流畅，无需离开搜索界面即可完成笔记间的关联。

使用前需注意，该插件仅支持桌面端，且必须预先安装 QMD CLI 并配置好指向 Vault 的集合。它不适合移动端用户，也不适合希望完全零配置、开箱即用的场景，因为需要手动设置 QMD 路径或确保其在系统 PATH 中。此外，虽然插件本身不直接读取文件系统，但 QMD 程序会在 Vault 外部维护索引文件，用户需了解这一机制。如果你主要依赖移动端同步或不需要语义搜索功能，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


