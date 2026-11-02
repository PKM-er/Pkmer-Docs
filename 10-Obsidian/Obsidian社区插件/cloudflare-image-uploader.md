---
uid: 1793625610973000
title: "Obsidian 插件：Cloudflare Image Uploader"
tags: ["图片与PDF", "第三方工具集成", "文件管理", "obsidian插件"]
description: "Save the images of clipped web pages into your own Cloudflare R2 bucket so they never disappear, and upload pasted or dropped images to R2. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cloudflare Image Uploader

> [!Note] 插件名片
> - 插件名称：Cloudflare Image Uploader
> - 插件作者：dddeewww
> - 插件说明：Save the images of clipped web pages into your own Cloudflare R2 bucket so they never disappear, and upload pasted or dropped images to R2. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yunasuka/obsidian-r2-image-uploader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloudflare-image-uploader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yunasuka/obsidian-r2-image-uploader/master/README.md)



## 概述

Cloudflare Image Uploader 旨在解决网页剪藏中图片依赖外部服务器的问题。当作者删除原帖时，笔记中的图片往往会随之失效。该插件会自动下载这些图片并存储到你自己的 Cloudflare R2 存储桶中，同时更新笔记内的链接指向你的副本。此外，它还能处理你直接粘贴或拖入笔记的图片，将其上传至云端，确保所有视觉内容都掌握在你手中，不再受制于第三方网站的变动。

典型场景包括：当你使用剪藏工具保存一篇长文时，插件会在几秒后自动将文中的图片备份到你的 R2 空间，即使原网页被删，你的笔记依然完整。另一个场景是你从网页复制图片粘贴到 Obsidian 时，插件会直接将其上传至云端，而非仅保存在本地库中。对于已有笔记，你也可以手动触发命令，批量将当前或整个库中的网络图片迁移至 R2，实现彻底的本地化归档。

相比其他仅支持本地存储的插件，该工具的核心优势在于利用 Cloudflare R2 的免费额度（10GB 且无流量费）实现低成本云端备份。它具备智能去重机制，相同内容的图片只存储一次，并支持可选的 WebP 格式转换以节省空间。特别值得一提的是，插件记录了原始链接，允许你随时一键恢复为原始网络地址，而不会删除已上传的云端副本。这种可逆性让你能在“永久归档”和“引用原站”之间灵活切换。

使用前需注意，你需要拥有 Cloudflare 账户并配置好 R2 存储桶及自定义域名，因为默认的 r2.dev 地址有访问限制。密钥仅保存在当前设备，若需多设备同步需手动开启特定选项，且需确保同步渠道私密。该插件不适合那些希望完全离线、不依赖任何云服务的用户，也不适合对图片版权有极高要求、不愿将图片上传至任何第三方存储的场景。此外，若原网站禁止下载或图片已失效，插件会跳过这些图片并在日志中列出，不会强制处理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


