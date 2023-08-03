---
uid: 2023080322235008
title: Obsidian 插件：【Readme】Obsidian Webhooks
tags: ['obsidian插件', 'readme']
description: 通过Webhooks连接编辑器与物联网的插件和服务。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Webhooks

> [!Note] 插件名片
> - 插件名称：Obsidian Webhooks
> - 插件作者：Stephen Solka
> - 插件说明：通过Webhooks连接编辑器与物联网的插件和服务。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/trashhalo/obsidian-webhooks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-webhooks)

## 概述

通过Webhooks连接编辑器与物联网的插件和服务。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/trashhalo/obsidian-webhooks/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-webhooks]] 插件的自述翻译


# Obsidian Webhooks

Obsidian插件和服务，通过Webhooks将您的编辑器连接到物联网。

- 通过与您的Google助手交谈，将快速想法添加到您的笔记中
- 每次您在Spotify上喜欢一首歌时，都会记录一条笔记
- 每次您用铅笔表情符号对Slack消息做出反应时，都会记录一条笔记
- 每当您在任何其他应用上执行任何操作时，都可以更改或添加笔记

## 设置一个示例规则

1. 从发布页面安装Obsidian插件
2. 前往https://obsidian-buffer.web.app注册该服务
3. 生成一个登录令牌，并将其安装到Obsidian的Webhook插件设置中
4. 使用服务网站上的Webhook URL与您喜欢的自动化服务进行连接
5. 对于Spotify示例用例，将IFTTT连接到Spotify
6. 创建一个将“新保存的曲目”事件连接到Webhooks服务的Applet
7. 将Webhook URL粘贴到服务URL中
8. 将内容类型更改为text/plain
9. 将方法类型更改为POST
10. 现在您可以在请求正文中键入要附加到笔记的Markdown内容，请确保使用“ingredients”按钮引用来自Spotify事件的信息。

我的规则设置为附加：

```markdown
- [[{{Spotify.newSavedTrack.ArtistName}}]] [[{{Spotify.newSavedTrack.AlbumName}}]] - {{Spotify.newSavedTrack.TrackName}}
```



