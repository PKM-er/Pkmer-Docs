---
uid: 1786577079025002
title: 'Obsidian 插件：Image Paste on GitHub'
tags: ['第三方工具集成', '图片与PDF', '发布工具', '效率工具', 'obsidian插件']
description: '把粘贴的图片上传到你的 GitHub 仓库，然后自动插入原始 CDN 链接，而不是把图片保存在本地。——这个插件还没有经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Image Paste on GitHub

> [!Note] 插件名片
> - 插件名称：Image Paste on GitHub
> - 插件作者：HyoYoonNam
> - 插件说明：把粘贴的图片上传到你的 GitHub 仓库，然后自动插入原始 CDN 链接，而不是把图片保存在本地。——这个插件还没有经过 Obsidian 官方人员的人工审核。
> - 插件分类：['第三方工具集成', '图片与PDF', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hyoyoonnam/image-paste-on-github)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-paste-on-github)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hyoyoonnam/image-paste-on-github/master/README.md)



## 概述

### 插件名称
Image Paste on GitHub

### 主要功能
将粘贴（或拖放）的图片直接上传到用户的 GitHub 仓库，并自动插入 `raw.githubusercontent.com` 链接，而非将图片保存到本地 Obsidian 库中。

### 适用场景
适用于希望控制 Obsidian 库大小，同时利用 GitHub CDN 存储图片的用户。

### 核心特色
- 避免本地库因存储大量图片而不断增大。
- 借助 GitHub CDN 存储图片，提高访问速度。

### 使用建议
- 目标仓库必须为公开仓库，避免粘贴敏感图片。
- 使用细粒度个人访问令牌，作用域限定为单个仓库，具备“Contents: read and write”权限，并设置过期日期。
- 令牌以未加密形式存储在库的插件数据中，不要同步、提交或共享 `data.json` 文件。
- 按设置步骤依次操作，先选择仓库，再创建令牌，最后测试连接。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


