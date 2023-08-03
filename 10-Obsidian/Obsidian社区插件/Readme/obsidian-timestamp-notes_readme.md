---
uid: 20230803213341
title: Obsidian 插件：【Readme】Timestamp Notes
tags: ['obsidian插件', 'readme']
description: 该插件允许在视频旁边进行笔记。使用时间戳在您的笔记中注释。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Timestamp Notes

> [!Note] 插件名片
> - 插件名称：Timestamp Notes
> - 插件作者：Julian Grunauer
> - 插件说明：该插件允许在视频旁边进行笔记。使用时间戳在您的笔记中注释。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/juliang22/ObsidianTimestampNotes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-timestamp-notes)

## 概述

该插件允许在视频旁边进行笔记。使用时间戳在您的笔记中注释。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/juliang22/ObsidianTimestampNotes/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-timestamp-notes]] 插件的自述翻译



## 奥斯迪安时间戳笔记

用例
大家好，Obsidian用户们！和你们一样，我喜欢使用Obsidian来做笔记。我的常规工作流程是，在屏幕的一侧使用浏览器观看视频，同时在另一侧使用Obsidian做笔记。虽然Obsidian本身是一个很好的笔记工具，但我发现这种设置还是有些不足。当我回顾我的笔记时，经常需要花很长时间才能找到笔记来自哪个视频的部分，而且我发现频繁在浏览器和Obsidian之间切换很烦人。

## 解决方案
该插件通过以下方式解决了这个问题：
- 在Obsidian的侧边栏中打开视频播放器
- 使用热键插入时间戳
- 选择时间戳以导航到视频中的相应位置

## 设置
- 下载并启用插件
- 为以下操作设置快捷键：
  - 打开视频播放器（默认为cmnd-shift-y）
  - 打开本地视频（默认为cmnd-shift-l）
  - 插入时间戳（默认为cmnd-y）
  - 播放/暂停视频（默认为cntrl-space）
  - 快进/快退（默认为cntrl-arrows）
- 设置选项：
  - URL、URL文本、时间戳按钮和时间戳文本的颜色
  - 使用“打开视频播放器”快捷键时粘贴的标题
  - 快进/快退的距离

## 使用方法
- 高亮视频网址，使用“打开视频播放器”热键或按下指定的热键选择本地视频进行播放（对于本地视频，不需要高亮文本）
- 记下笔记，任何时候想要插入时间戳，按下注册的热键
- 使用热键切换暂停/播放视频（我的默认热键是option空格）
- 在离开时打开视频的时间戳（如果插件被禁用，则会重置）
- 通过右键点击视频播放器上方的图标并选择关闭来关闭播放器

有效的视频播放器
该插件应该适用于以下视频播放器：
- youtube
- vimeo
- facebook
- soundcloud
- wistia
- mixcloud
- dailymotion
- twitch
- 本地视频

https://user-images.githubusercontent.com/39292521/167230491-f5439a62-a3f7-445c-a208-839c804953d7.mov

已知问题
1. 在项目符号部分插入时间戳无效。不幸的是，代码块无法与文本内联。请确保按下回车键/在新行上插入时间戳。
2. 如果您决定更改按钮/文本的颜色，任何旧的按钮/文本在重新加载应用程序之前都不会更新为新的颜色。您还可以在悬停在代码块上时单击“<>”，它将使用新的颜色刷新。
3. 如果您的时间戳/视频按钮无效，请简单地在编辑和查看模式之间切换。
4. 目前无法为本地视频生成按钮。这可能是可行的，但我找不到一种不会出现故障的方法来使其正常工作。

其他作者
该插件使用了react-player npm包：https://www.npmjs.com/package/react-player。



