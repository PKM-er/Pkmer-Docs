---
uid: 1793625610944001
title: "Obsidian 插件：Clip2MD Desktop Tools"
tags: ["第三方工具集成", "多媒体", "效率工具", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Clip2MD Desktop Tools

> [!Note] 插件名片
> - 插件名称：Clip2MD Desktop Tools
> - 插件作者：Clip2MD
> - 插件说明：
> - 插件分类：['第三方工具集成', '多媒体', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/clip2md/clip2md-desktop-tools)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?clipmd-desktop-tools)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/clip2md/clip2md-desktop-tools/master/README.md)



## 概述

Clip2MD Desktop Tools 是 Clip2MD 生态中的桌面端本地剪藏扩展，它依赖主插件运行，核心作用是为已同步到 Obsidian 的剪藏笔记补充深度元信息。当云端完成基础内容提取后，该扩展会在本地进一步抓取原站的正文细节、来源属性、视频音频、字幕、图片以及评论，并将这些素材直接保存至当前知识库，从而让笔记从简单的链接记录转变为包含完整上下文的结构化知识。

典型使用场景包括处理视频类内容或需要保留互动信息的网页。例如，当你剪藏一篇包含视频的文章时，该插件可以自动下载视频文件并提取字幕，确保即使原站失效，你也能在本地离线观看和检索；又如，对于社交媒体帖子，它能抓取原站可见的评论样本，帮助你保留发布时的社区反馈语境，而不仅仅是正文文字。

相比仅依赖云端同步的方案，该插件的特色在于“本地深度解析”能力。它不上传原始媒体文件或原站 Cookie，而是利用本地工具链（如 FFmpeg、yt-dlp 等）在用户设备上完成素材提取，既保护了隐私，又突破了云端对媒体类型或额度的限制。此外，它支持对历史笔记进行批量补充，并能针对 B站、小红书等平台进行收藏导入，提供了比纯云端服务更灵活、更完整的素材归档体验。

使用前需注意，该插件仅支持 macOS 和 Windows x64 桌面端，且需要手动安装 FFmpeg、yt-dlp 等外部依赖工具，配置门槛较高。它不适合移动端用户，也不适合希望“零配置”开箱即用的场景。此外，由于依赖原站权限，部分受 DRM 保护或严格反爬的媒体可能无法获取，评论也仅为原站可获取的样本而非全量数据。若你主要使用手机或仅需要简单的文本剪藏，主插件或纯云端方案可能更合适。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


