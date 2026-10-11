---
uid: 1791709369152000
title: 'Obsidian 插件：Paste YouTube embed'
tags: ['第三方工具集成', '多媒体', '模板与链接处理', 'obsidian插件']
description: 'Turns a pasted YouTube link into an inline player with the video title, right where you paste it. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Paste YouTube embed

> [!Note] 插件名片
> - 插件名称：Paste YouTube embed
> - 插件作者：Maximiliano Burgos
> - 插件说明：Turns a pasted YouTube link into an inline player with the video title, right where you paste it. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '多媒体', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/maxwellnewage/obsidian-youtube-paste-embed)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?youtube-paste-embed)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/maxwellnewage/obsidian-youtube-paste-embed/master/README.md)



## 概述

**主要功能**
该插件在粘贴YouTube链接时自动将其转换为内嵌播放器，无需手动输入代码或执行额外命令。它会在笔记中写入视频标题和频道信息，并支持标准链接、Shorts、直播及播放列表等多种格式。

**适用场景**
适用于需要在笔记中快速引用视频内容的场景，特别是长期保存的笔记。即使视频后续被删除，笔记中保留的标题信息也能帮助用户回忆内容或重新搜索。

**核心特色**
1. **智能粘贴**：仅当粘贴纯链接且无选中文字时触发，避免误操作。
2. **信息持久化**：将标题和频道名以纯文本形式存入笔记，确保链接失效后仍可识别内容。
3. **格式兼容**：支持时间戳跳转，Shorts视频以9:16竖屏显示，其余为16:9横屏。
4. **原生兼容**：底层使用代码块存储原始URL，不依赖插件也能通过grep搜索；也可切换为Obsidian原生嵌入格式。

**使用建议**
建议默认使用插件生成的代码块格式，以便保留标题信息。若需兼容其他Markdown编辑器，可在设置中将插入格式改为“Native embed”，但会失去标题栏和Shorts优化显示功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


