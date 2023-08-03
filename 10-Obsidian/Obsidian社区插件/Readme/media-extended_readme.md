---
uid: 20230803231105
title: Obsidian 插件：Media Extended
tags: ['音频和视频', '效率', '第三方工具集成', 'obsidian插件', 'readme']
description: 改善 Obsidian 中的媒体（视频/音频）播放的体验，你可以通过简单的方法在OB中播放视频并添加时间戳来记录对应节点的笔记了。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232544
---

# Obsidian 插件：Media Extended

> [!Note] 插件名片
> - 插件名称：Media Extended
> - 插件作者：AidenLx
> - 插件说明：改善 Obsidian 中的媒体（视频/音频）播放的体验，你可以通过简单的方法在 OB 中播放视频并添加时间戳来记录对应节点的笔记了。
> - 插件分类：[' 音频和视频 ', ' 效率 ', ' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aidenlx/media-extended)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?media-extended)

## 概述

改善 Obsidian 中的媒体（视频/音频）播放的体验，你可以通过简单的方法在 OB 中播放视频并添加时间戳来记录对应节点的笔记了。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aidenlx/media-extended/main/README.md)
>

---

## Readme(翻译）

下面是 [[media-extended]] 插件的自述翻译

# 媒体扩展

为 Obsidian.md 提供媒体（视频/音频）播放增强功能

介绍

该插件引入了一些增强媒体（视频/音频）播放的新功能：

- 播放器增强
  - [速度控制](https://github.com/aidenlx/media-extended/wiki/Speed-Control)
  - [内联选项](https://github.com/aidenlx/media-extended/wiki/Inline-Options) 用于循环/自动播放/静音/隐藏控件
  - [在线媒体的嵌入/链接](https://github.com/aidenlx/media-extended/wiki/Create-Online-Media-Embed-Link)
  - [字幕支持](https://github.com/aidenlx/media-extended/wiki/Caption-Subtitle-Support)
- 记笔记
  - [创建时间戳链接/媒体片段](https://github.com/aidenlx/media-extended/wiki/Restrict-Play-Range)
  - 绑定到文档的专用媒体视图以打开媒体链接
  - [从现有媒体文件获取时间戳](https://github.com/aidenlx/media-extended/wiki/Get-Timestamp)
  - [从音频录音机获取时间戳](https://github.com/aidenlx/media-extended/wiki/Audio-Recorder)

## 演示

<https://user-images.githubusercontent.com/31102694/118903647-c9d79780-b94a-11eb-8beb-ab507117790f.mp4>

<https://user-images.githubusercontent.com/31102694/119340113-a3a45580-bcc4-11eb-9098-a27a16e9d6e0.mp4>

<https://user-images.githubusercontent.com/31102694/118903678-dd82fe00-b94a-11eb-8ef3-7b5044a2bab8.mp4>

<https://user-images.githubusercontent.com/31102694/127543453-011d13b2-40e4-41e5-861e-3549d19be23f.mp4>

如何使用

请访问 [Media Extended Wiki](https://github.com/aidenlx/media-extended/wiki) 获取更多详细信息

***

注意：从 v2.9.0 开始，bilibili 用户需要安装 [bilibili plugin](https://github.com/aidenlx/mx-bili-plugin) 以启用 `高级bilibili功能`

兼容性

所需的 API 功能仅适用于 Obsidian v0.12.2+。

安装

### 来自 Obsidian

1. 打开 `设置` > `第三方插件`
2. 确保安全模式为**关闭**
3. 点击 `浏览社区插件`
4. 搜索此插件
5. 点击 `安装`
6. 安装完成后，关闭社区插件窗口，补丁即可使用。

### 来自 GitHub

1. 从 GitHub 存储库的 Releases 部分下载最新版本
2. 将文件放入您的保险库的插件文件夹中：`<vault>/.obsidian/plugins/media-extended`
3. 重新加载 Obsidian
4. 如果提示安全模式，您可以禁用安全模式并启用插件。
   否则，前往设置，第三方插件，确保安全模式关闭，
   然后从那里启用插件。

> 注意：`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。