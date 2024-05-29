---
uid: 2024052908575543
title: Obsidian 插件：Minio Uploader
tags: ['文件管理', '第三方工具集成', '图片与PDF', 'obsidian插件']
description: 上传图片、视频、音频、PDF和其他文件到Minio OSS。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Minio Uploader

> [!Note] 插件名片
> - 插件名称：Minio Uploader
> - 插件作者：Seebin
> - 插件说明：上传图片、视频、音频、PDF 和其他文件到 Minio OSS。
> - 插件分类：[' 文件管理 ', ' 第三方工具集成 ', ' 图片与 PDF', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/seebin/obsidian-minio-uploader-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?minio-uploader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/seebin/obsidian-minio-uploader-plugin/master/README.md)

![Minio Uploader](https://cdn.pkmer.cn/covers/minio-uploader.gif!pkmer)

## 概述

Obsidian Minio Uploader Plugin 是一个可以将图片、视频、音频、PDF 和其他文件上传到 Minio OSS 的插件。通过将文件上传到 Minio 而不是本地复制，可以减少本地磁盘使用量，提高多台设备间同步的效率。该插件支持拖放文件到编辑器直接上传到 Minio，支持粘贴文件后直接上传到 Minio，还支持通过命令选择文件上传到 Minio，方便与 Editing ToolBar 插件一起使用。在使用前需要正确配置 Minio 相关设置，包括 accessKey、secretKey、bucket、endpoint、port 和 SSL。同时需要在 Minio 控制台的 Bucket 设置中启用文件的匿名访问，以便可以通过 URL 直接访问文件。该插件解决了 Obsidian 用户上传文件到 Minio 的需求，提高了工作效率。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



