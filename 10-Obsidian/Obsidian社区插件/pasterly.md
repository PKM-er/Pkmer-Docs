---
uid: 2025060517173844
title: 'Obsidian 插件：Pasterly'
tags: ['文件管理', '编辑工具', '第三方工具集成', 'obsidian插件']
description: '自动把剪贴板里的图片上传到Firebase存储，还能以Markdown链接的形式插入图片呢！'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pasterly

> [!Note] 插件名片
> - 插件名称：Pasterly
> - 插件作者：easternkite
> - 插件说明：自动把剪贴板里的图片上传到Firebase存储，还能以Markdown链接的形式插入图片呢！
> - 插件分类：['文件管理', '编辑工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/easternkite/Pasterly)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pasterly)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/easternkite/Pasterly/master/README.md)



## 概述

Pasterly 是一款 Obsidian 插件，能够自动将剪贴板中的图片上传至 Firebase Storage 并生成 Markdown 链接，主要功能包括自动上传图片至配置的 Firebase Storage 存储桶、在上传过程中显示 `![Uploading...]()` 占位符、上传成功后转换为标准的 Markdown 图片链接，同时支持离线时回退至 Obsidian 默认粘贴行为。该插件适用于需要快速插入并托管网络图片的用户，解决了传统粘贴图片时需手动上传和管理的繁琐问题，尤其适合频繁插入截图或网络图片的场景。使用前需在 Firebase 控制台创建项目并启用 Storage 服务，然后在插件设置中配置存储桶 URL，使用时只需复制图片后粘贴到 Obsidian 编辑器即可自动完成上传和链接插入，仅支持图片文件且依赖网络连接，离线时则转为本地粘贴。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



