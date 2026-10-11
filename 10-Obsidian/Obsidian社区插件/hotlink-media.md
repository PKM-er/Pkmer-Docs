---
uid: 1791709367536000
title: 'Obsidian 插件：Hotlink Media'
tags: ['多媒体', '第三方工具集成', '图片与PDF', 'obsidian插件']
description: 'Play hotlink-protected videos, audio and images in notes by fetching them with the headers the source site expects. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hotlink Media

> [!Note] 插件名片
> - 插件名称：Hotlink Media
> - 插件作者：semsevens
> - 插件说明：Play hotlink-protected videos, audio and images in notes by fetching them with the headers the source site expects. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '第三方工具集成', '图片与PDF', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/semsevens/obsidian-hotlink-media)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hotlink-media)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/semsevens/obsidian-hotlink-media/master/README.md)



## 概述

**主要功能**
该插件解决 Obsidian 中因 Referer 校验导致的热链媒体（视频、音频、图片）无法播放或显示的问题。它通过拦截特定域名的媒体请求，自动携带源网站所需的请求头（如 Referer、User-Agent）进行后台获取，并将文件以 Blob 形式注入页面，从而绕过 HTTP 403 限制。

**适用场景**
适用于将微信公众号文章、其他受版权保护或防盗链限制的网页内容剪藏到 Obsidian 笔记中，且希望直接预览原始媒体资源而不需手动下载或修改 Markdown 源文件的场景。

**核心特色**
1. **智能拦截**：仅处理匹配规则（如微信 `mpvideo.qpic.cn`）的媒体，不修改 Markdown 源码，不向 Vault 写入文件，资源仅驻留内存。
2. **动态重试**：若链接失效，能自动重新抓取源页面获取最新有效 URL 并重试。
3. **双视图支持**：在阅读视图和实时预览模式下均有效。
4. **优雅降级**：若最终加载失败，会在媒体下方显示提示及原文链接，避免黑屏。

**使用建议**
建议用于日常知识管理中的网页剪藏工作流。注意该插件未通过 Obsidian 官方人工审核，使用前请确认其安全性。对于非匹配规则的媒体，插件不会介入，保持原有行为。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


