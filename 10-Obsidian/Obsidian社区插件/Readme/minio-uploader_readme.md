---
uid: 2023120719364412
title: Obsidian 插件：【Readme】Minio Uploader
tags: ['obsidian插件', 'readme']
description: 上传图片、视频、音频、PDF和其他文件到Minio OSS。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Minio Uploader

> [!Note] 插件名片
> - 插件名称：Minio Uploader
> - 插件作者：Seebin
> - 插件说明：上传图片、视频、音频、PDF 和其他文件到 Minio OSS。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/seebin/obsidian-minio-uploader-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?minio-uploader)

## 概述

上传图片、视频、音频、PDF 和其他文件到 Minio OSS。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/seebin/obsidian-minio-uploader-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[minio-uploader]] 插件的自述翻译

# Obsidian Minio Uploader 插件

将图片、视频、音频、PDF 和其他文件上传到 Minio OSS，而不是在本地复制它们。减少本地磁盘使用量，提高多个设备之间同步的效率。

## 预览

![演示](https://cdn.pkmer.cn/covers/minio-uploader_2_0.gif!pkmer)

可以与 [编辑工具栏](https://github.com/PKM-er/obsidian-editing-toolbar) 配对使用。要使用该插件，请将 mini 命令添加到操作栏中。您可以点击选择文件，上传文件，并将其添加到 Observer 文档中。

## 特点

- 支持将文件拖放到编辑器中，并直接上传到 Minio
- 支持将文件粘贴到编辑器中后直接上传到 Minio
- 支持通过命令选择文件并上传到 Minio，与编辑工具栏插件一起使用更加方便

## 设置

首先，在正常使用之前，必须正确配置所有与 Minio 相关的配置：

>提示：Minio 的 API 数据访问端口号

- accessKey
- secretKey
- bucket
- endpoint
- port
- SSL

其次，在 Minio 控制台的 Bucket 设置中，需要启用文件的匿名访问，这意味着可以通过 URL 直接访问文件。

![设置](https://cdn.pkmer.cn/covers/minio-uploader_2_1.png!pkmer)

感谢 [S3图像上传器](https://github.com/jvsteiner/s3-image-uploader) 和 [编辑工具栏](https://github.com/PKM-er/obsidian-editing-toolbar) 插件，这个项目从中获得了灵感。
