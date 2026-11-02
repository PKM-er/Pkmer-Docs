---
uid: 1793625624251001
title: "Obsidian 插件：Video Summary"
tags: ["多媒体", "自动化与AI", "文字处理", "效率工具", "obsidian插件"]
description: "Turn video links, local recordings and transcripts into notes with a summary, a timestamped transcript and key points, processed by a backend you run. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Video Summary

> [!Note] 插件名片
> - 插件名称：Video Summary
> - 插件作者：rexxall
> - 插件说明：Turn video links, local recordings and transcripts into notes with a summary, a timestamped transcript and key points, processed by a backend you run. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '自动化与AI', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rexxall/obsidian-video-summary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?video-summary)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rexxall/obsidian-video-summary/master/README.md)



## 概述

Video Summary 旨在解决视频内容难以转化为结构化笔记的痛点。它支持粘贴视频链接、导入本地录音或直接粘贴文稿，利用你本地运行的后端服务，自动生成包含摘要、带时间戳的完整转录文本以及核心要点的 Obsidian 笔记。无论是 YouTube、Bilibili 还是本地文件，都能被高效处理，将冗长的视频内容浓缩为可检索、可编辑的文字资产。

典型场景包括整理在线课程或技术讲座。例如，你可以将一系列教程链接批量输入，插件会自动提取关键知识点并生成带时间戳的笔记，方便日后快速回顾特定章节。另一个场景是处理访谈或会议录音，插件能识别不同说话人的观点，生成结构化的摘要和待办事项，甚至根据视频类型（如新闻、教程、会议）调整笔记的排版风格，让信息呈现更贴合内容属性。

相比同类插件，Video Summary 的最大特色在于其“证据模式”和本地化隐私保护。它不仅提供摘要，还能标记关键论断的来源与置信度，并给出“观看、略读或跳过”的建议，帮助用户高效筛选信息。此外，所有数据处理均在用户本地计算机的 Docker 环境中完成，无需将视频上传至第三方云端，极大保障了隐私安全。插件还内置了阅读器功能，支持点击转录文本直接跳转视频进度，并支持跨视频搜索和论点矩阵对比。

使用前需注意，该插件仅支持 Obsidian 桌面版，且需要用户自行配置本地后端环境，包括安装 Docker 并配置 API 密钥，初次设置可能需要约十分钟。此外，虽然插件本身免费，但语音转文字和摘要生成依赖外部模型服务，可能产生少量按量计费的费用。如果你希望完全离线运行且不接受任何外部 API 调用，或者主要需求是处理纯图片/文档而非视频音频内容，那么这款插件可能不适合你。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


