---
uid: 1793625620769000
title: "Obsidian 插件：Rentry integration"
tags: ["第三方工具集成", "发布工具", "社交与社区", "obsidian插件"]
description: "Share your vault notes using Rentry - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Rentry integration

> [!Note] 插件名片
> - 插件名称：Rentry integration
> - 插件作者：akatopo
> - 插件说明：Share your vault notes using Rentry - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '社交与社区', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/akatopo/rentry-integration)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rentry-integration)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/akatopo/rentry-integration/master/README.md)



## 概述

Rentry integration 插件旨在解决 Obsidian 笔记与外部平台 Rentry 之间的内容同步问题，核心功能是将本地笔记快速发布为 Rentry 上的公开粘贴内容。它支持一键创建、更新和删除 Rentry 粘贴，并能在笔记的 Frontmatter 中自动记录 Rentry ID、公开链接及编辑代码，方便用户随时追踪和管理已发布的笔记状态。

典型使用场景包括将技术文档或代码片段分享给他人。例如，当你完成一篇 Markdown 格式的技术教程后，可以通过命令面板或右键菜单直接将其发布到 Rentry，生成一个无需对方安装 Obsidian 即可访问的链接。若后续修改了笔记内容，再次执行更新操作即可同步最新文本，确保接收者看到的信息始终与本地版本一致。

相比其他仅支持单向分享的插件，该插件的一大特色是支持通过 Cloudinary 上传图片嵌入（实验性功能），解决了纯文本粘贴无法展示图片的痛点。此外，它在更新粘贴时采用“upsert”模式，这意味着你在 Rentry 网页端手动修改的元数据（如标题或选项）在后续同步中会被保留，不会因本地更新而被覆盖，提供了更灵活的协作空间。

使用前需注意，图片上传功能目前标记为实验性，且需要自行配置 Cloudinary 凭证才能使用。该插件主要面向需要频繁将笔记转化为公开链接的用户，如果你只需要在 Obsidian 内部整理笔记，或者对图片展示有极高要求且不愿配置额外云服务，那么此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


