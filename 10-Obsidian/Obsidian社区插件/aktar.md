---
uid: 1793625605769000
title: "Obsidian 插件：Aktar"
tags: ["文件管理", "第三方工具集成", "备份与恢复", "obsidian插件"]
description: "Keep attachments in your own S3, Cloudflare R2 or Backblaze B2 bucket. Paste, drop or move files and get links that work on every device. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Aktar

> [!Note] 插件名片
> - 插件名称：Aktar
> - 插件作者：Aktar
> - 插件说明：Keep attachments in your own S3, Cloudflare R2 or Backblaze B2 bucket. Paste, drop or move files and get links that work on every device. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/getaktar/obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?aktar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/getaktar/obsidian/master/README.md)



## 概述

Aktar 旨在解决 Obsidian 附件同步的痛点，将图片等文件存储于 S3、Cloudflare R2 等对象存储中。它支持粘贴、拖放或移动文件，自动生成跨设备通用的 HTTPS 链接。笔记保持轻量，仅同步文本，而大文件独立存放，确保在任何设备上打开笔记都能正常显示内容，且无需插件也能通过纯链接访问资源。

典型场景包括在手机上拍摄照片并自动上传至云端，或在电脑上整理旧笔记时将本地附件批量迁移至对象存储。例如，你可以将大量历史图片从本地库移至 R2，插件会重写所有笔记中的链接并保留尺寸与说明，同时清理本地副本。若需离线查看，已浏览过的图片会缓存在设备上，确保无网络时笔记依然完整。

相比同类插件，Aktar 的特色在于其“移动”功能的安全性与可逆性。执行迁移前会进行干运行预览，明确显示哪些链接将被修改，且支持一键撤销。它还能自动处理新附件，如手机拍摄的照片，并在上传前移除照片中的地理位置信息以保护隐私。此外，它提供私有桶签名 URL 功能，以及将笔记发布为静态网页的能力，适合需要对外分享内容的用户。

使用前需注意，该插件需要配置对象存储密钥，且密钥存储在设备本地，不同步。它不适合希望完全离线使用、或不愿将任何数据上传至云端的用户。若你的笔记主要依赖本地网络共享，或不需要跨设备同步附件，此插件可能并非必需。此外，虽然支持离线缓存，但首次加载未缓存的图片仍需网络连接。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


