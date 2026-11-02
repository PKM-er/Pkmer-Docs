---
uid: 1793625607890000
title: "Obsidian 插件：Berry Radio"
tags: ["多媒体", "界面优化", "导航与状态栏", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Berry Radio

> [!Note] 插件名片
> - 插件名称：Berry Radio
> - 插件作者：Berry
> - 插件说明：
> - 插件分类：['多媒体', '界面优化', '导航与状态栏', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/berry51/berry-radio)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?berry-radio)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/berry51/berry-radio/master/README.md)



## 概述

Berry Radio 将全球在线电台引入 Obsidian，核心在于提供笔记内嵌、侧栏面板及状态栏迷你播放器三种形态。这三处界面共享同一个播放实例，确保你在任何位置操作时，其他界面状态即时同步。它基于 radio-browser.info 公共目录，让你无需离开当前笔记即可收听直播流，实现了从搜索、筛选到播放的一体化体验。

典型场景包括在撰写文档时通过 `radio` 代码块嵌入特定电台，例如在交通类笔记中直接播放“北京交通广播”，卡片会融入正文而不打断写作流。另一场景是利用状态栏的常驻迷你播放器，在专注阅读或编辑时，通过下拉菜单快速切换至新闻或音乐频道，全程无需跳转页面或打开新标签，保持工作流的连续性。

相比同类插件，Berry Radio 的特色在于其严谨的流媒体选择策略。针对同一电台存在多个镜像源的情况，插件会优先选择已验证、直连 MP3/AAC 且使用 HTTPS 的源，并自动尝试最多三个候选源，显著提升了播放成功率。此外，其界面设计采用全直角与单一品牌色，风格极简且统一，避免了视觉干扰，同时支持将原始标签映射为易读的中文分类，如音乐、新闻、戏曲等。

使用前需注意，该插件依赖网络获取电台目录，且默认过滤 HTTP 流以符合 Obsidian 安全规范，若需收听部分仅支持 HTTP 的电台，需在设置中手动开启。它不适合需要录音、离线缓存或复杂音频编辑的用户，因为插件仅作为直播流播放器，不存储音频数据，也不提供上一曲/下一曲等点播功能，仅支持在当前列表内切换电台。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


