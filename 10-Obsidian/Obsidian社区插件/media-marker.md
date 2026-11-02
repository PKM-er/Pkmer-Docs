---
uid: 1793625616162001
title: "Obsidian 插件：Media Marker"
tags: ["多媒体", "快捷键", "界面优化", "obsidian插件"]
description: "Click timestamps in transcription documents to seek and play the embedded audio/video, with a fully custom player, sticky media, subtitles, and keyboard shortcuts. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Media Marker

> [!Note] 插件名片
> - 插件名称：Media Marker
> - 插件作者：Blontern
> - 插件说明：Click timestamps in transcription documents to seek and play the embedded audio/video, with a fully custom player, sticky media, subtitles, and keyboard shortcuts. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '快捷键', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/blontern/obsidian-media-marker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?media-marker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/blontern/obsidian-media-marker/master/README.md)



## 概述

Media Marker 专为解决转录文档中音视频定位繁琐的痛点而设计。它允许用户直接点击笔记中 `[HH:mm:ss]` 格式的文本，即可让嵌入的媒体跳转到对应位置并播放。插件将原生媒体替换为功能丰富的自定义播放器，支持播放、暂停、进度拖拽、音量调节、倍速播放（0.5x-2x）以及画中画和全屏功能，让媒体交互更加直观高效。

在整理会议记录或视频笔记时，你可以直接在时间戳旁添加 `[loop] 00:10 -> 00:20` 来循环播放特定片段，便于反复听清关键内容。此外，当滚动长文档时，播放器会自动吸附在视图顶部跟随滚动，直到到达下一个媒体块或当前时间戳段落结束，确保你在阅读文字时始终能听到对应的音频，无需频繁上下查找播放器。

相比普通嵌入，该插件支持精细的视频步进（帧/关键帧/5秒），并允许通过单一操作将当前播放位置按时间顺序插入笔记。若媒体文件旁存在同名的 `.vtt`、`.srt` 或 `.lrc` 文件，视频将显示字幕，音频则切换为滚动歌词视图，甚至支持显示同名封面图。所有播放设置如循环模式、视频比例等均可实时调整，且键盘快捷键完全可自定义。

需要注意的是，该插件主要服务于带有时间戳标记的转录场景，若仅需简单播放视频或音频，其功能可能显得冗余。此外，循环播放同一时间仅支持一个区间，且字幕功能依赖外部文件命名规范。对于不需要精细时间定位或歌词同步的用户，此插件并非必需。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


