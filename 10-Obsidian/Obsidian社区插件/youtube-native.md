---
uid: 1793625624933000
title: "Obsidian 插件：YouTube Native"
tags: ["多媒体", "第三方工具集成", "搜索与排序", "obsidian插件"]
description: "Play YouTube links in notes with a native player, search YouTube from a side panel, and keep offline copies in your vault. Uses yt-dlp. Not affiliated with YouTube. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：YouTube Native

> [!Note] 插件名片
> - 插件名称：YouTube Native
> - 插件作者：encomjp
> - 插件说明：Play YouTube links in notes with a native player, search YouTube from a side panel, and keep offline copies in your vault. Uses yt-dlp. Not affiliated with YouTube. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '第三方工具集成', '搜索与排序', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/encomjp/obsidian-youtube)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?youtube-native)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/encomjp/obsidian-youtube/master/README.md)



## 概述

YouTube Native 旨在解决在 Obsidian 笔记中直接播放 YouTube 视频的痛点。它通过解析视频直连流，将笔记中的链接转化为原生播放器，彻底避免了加载 YouTube 官方 iframe 带来的隐私泄露和性能开销。核心功能包括在侧边栏搜索视频、在笔记中嵌入播放器，以及将视频离线保存至本地库，让你无需依赖网络即可随时回顾内容。

想象一下，你在撰写文献综述时，可以直接在笔记中嵌入一段讲解视频，点击即可播放，无需切换浏览器窗口。或者，当你需要离线查阅某段教程时，只需在插件面板中点击“保存离线”，视频和音频便会自动下载并关联到笔记中。即使断网，你依然能流畅播放这些本地副本，且支持倍速、全屏和画中画等完整控制功能。

相比其他依赖外部脚本或 iframe 的插件，YouTube Native 内置了独立的流媒体引擎，开箱即用，无需安装 ffmpeg 或配置复杂的环境。它支持自动填充视频真实标题，并允许用户选择使用内置引擎或已有的 yt-dlp 工具。这种设计既保证了使用的便捷性，又为高级用户提供了通过 yt-dlp 获取更高质量流或处理特殊视频的灵活性，同时严格遵循隐私原则，不收集任何用户数据。

需要注意的是，该插件仅支持桌面端，且由于 YouTube 接口频繁变动，部分受限、直播或超长视频可能无法解析或仅能获取低画质。此外，离线保存会占用本地存储空间，且视频与音频为分离文件。如果你主要使用移动端，或需要处理大量受版权严格保护的内容，此插件可能无法满足需求。建议定期更新插件以适配 YouTube 的最新变化。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


