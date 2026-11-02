---
uid: 1793625616084000
title: "Obsidian 插件：MDZip"
tags: ["文件管理", "图片与PDF", "编辑工具", "搜索与排序", "效率工具", "obsidian插件"]
description: "Open and edit MDZip (.mdz) files: Markdown documents and their images packed into one file. Edit, link, search and graph them like any note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MDZip

> [!Note] 插件名片
> - 插件名称：MDZip
> - 插件作者：MDZip
> - 插件说明：Open and edit MDZip (.mdz) files: Markdown documents and their images packed into one file. Edit, link, search and graph them like any note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图片与PDF', '编辑工具', '搜索与排序', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mdzip-project/mdzip-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mdzip)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mdzip-project/mdzip-obsidian/master/README.md)



## 概述

MDZip 将 Markdown 文档及其引用的图片打包为单一的 `.mdz` 文件，解决笔记分享时附件丢失或路径错乱的问题。在 Obsidian 中，你可以像编辑普通笔记一样直接打开、修改这些压缩包，粘贴的图片会自动存入文件内部而非库文件夹，编辑内容也会实时保存回 `.mdz` 中，无需额外配置。

典型场景包括分享包含大量截图的技术报告或旅行指南。例如，你可以将一份带有地图和照片的徒步指南打包成一个 `.mdz` 文件发送给同事，对方无需解压即可在 Obsidian 中直接阅读和编辑。此外，它支持将整个项目文件夹打包，通过“Archive contents”面板管理内部文档结构，移动文件时内部链接会自动更新，保持引用完整。

相比仅支持单文件打包的工具，MDZip 的特色在于深度集成 Obsidian 生态。它提供专门的“MDZip search”功能，可跨所有压缩包进行全文检索并定位到具体行；同时，压缩包内的文档会出现在 Obsidian 关系图中，允许普通笔记与压缩包内文档互相链接，实现跨文件的知识网络构建。此外，该插件完全本地运行，不发起任何网络请求，保障隐私安全。

使用前需注意，Obsidian 原生的全局搜索、快速切换器和反向链接功能无法识别压缩包内部内容，需使用插件提供的专用搜索和链接面板。另外，从普通笔记指向压缩包内部的链接，在压缩包内文件移动时不会自动更新；在压缩包内删除文件也无法通过 Obsidian 回收站恢复。因此，它不适合需要频繁跨压缩包进行复杂双向链接维护，或依赖原生全局搜索工作流的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


