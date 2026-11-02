---
uid: 1793625612519000
title: "Obsidian 插件：Embed Google Docs"
tags: ["第三方工具集成", "效率工具", "文字处理", "obsidian插件"]
description: "Embed live Google Docs, Sheets and Slides in notes from their sharing links, signed in with your Google account, with drag-to-resize. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Embed Google Docs

> [!Note] 插件名片
> - 插件名称：Embed Google Docs
> - 插件作者：czjeff1995
> - 插件说明：Embed live Google Docs, Sheets and Slides in notes from their sharing links, signed in with your Google account, with drag-to-resize. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jeff1995/embed-google-docs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?embed-google-docs)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jeff1995/embed-google-docs/master/README.md)



## 概述

Embed Google Docs 允许将 Google 文档、表格和幻灯片以实时交互的形式嵌入 Obsidian 笔记中。只需粘贴分享链接，即可在笔记内直接滚动、阅读、编辑和评论，无需切换窗口。该插件支持通过拖拽调整嵌入区域的大小，并将尺寸参数自动写入链接，方便后续复用。

典型场景包括在个人知识库中引用团队共享的 Google 文档进行批注，或在项目笔记中嵌入实时更新的 Google Sheets 数据表。例如，你可以将一份产品需求文档嵌入到 Obsidian 中，直接在笔记里修改内容并添加评论，所有更改会同步回 Google 云端，保持数据一致性。

相比其他仅支持静态截图或只读预览的插件，本插件的核心优势在于“完全交互式”和“原生登录体验”。它通过独立的会话机制绕过 Obsidian 内置浏览器的限制，确保 Google 登录状态稳定持久。此外，它提供了多种嵌入模式（完整编辑器、无工具栏编辑器、只读预览），并允许用户自定义默认高度和用户代理，以应对不同网络环境下的登录兼容性问题。

需要注意的是，该插件仅支持桌面端，且每个嵌入项都是一个完整的浏览器页面，滚动离开视口后会自动卸载，重新进入时需重新加载，这可能会带来短暂的等待。如果你只需要查看公开文档，无需登录即可使用；但若涉及私有文档的编辑，必须登录 Google 账号。不适合需要离线访问或频繁在移动端同步编辑 Google 文档的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


