---
uid: 1786577078964004
title: 'Obsidian 插件：Image Attachment Upload'
tags: ['图片与PDF', '第三方工具集成', '编辑工具', '效率工具', 'obsidian插件']
description: '选一张图片，把它上传到Cloudflare R2，然后将其嵌入到文本中，或者把它设为笔记的图片属性。——这款插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Image Attachment Upload

> [!Note] 插件名片
> - 插件名称：Image Attachment Upload
> - 插件作者：rocketBANG
> - 插件说明：选一张图片，把它上传到Cloudflare R2，然后将其嵌入到文本中，或者把它设为笔记的图片属性。——这款插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['图片与PDF', '第三方工具集成', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rocketbang/obsidian-image-attachment-upload)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-attachment-upload)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rocketbang/obsidian-image-attachment-upload/master/README.md)



## 概述

### 主要功能
提供两个命令，一是“Upload image and insert inline”，选取图片上传至 Cloudflare R2 并以内联方式嵌入当前笔记；二是“Upload image and set image property”，上传图片到 R2 并将笔记的 `image` 前置属性设为图片公共 URL。

### 适用场景
适用于需要在 Obsidian 笔记中插入图片，且希望将图片存储在 Cloudflare R2 的用户，支持桌面和移动设备。

### 核心特色
无需 SDK，利用 Web Crypto API 在设备上完成签名，无需对存储桶进行 CORS 设置；对象键遵循路径模板，文件名添加随机后缀避免冲突。

### 使用建议
1. 先创建 R2 API 令牌，公开存储桶，再在插件设置中填入相关信息。
2. 因凭证以明文存储在 `data.json` 中，将 R2 令牌作用域限定在一个存储桶，且不要将该文件纳入版本控制。
3. 可通过 BRAT 或手动方式安装插件。开发需 NodeJS v22.13+ 和 pnpm 11。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


