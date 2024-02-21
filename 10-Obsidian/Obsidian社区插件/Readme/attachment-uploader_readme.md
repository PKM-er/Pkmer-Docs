---
uid: 2024022117261459
title: Obsidian 插件：【Readme】Attachment Uploader
tags: ['obsidian插件', 'readme']
description: Attachment uploader插件，允许您自定义上传命令，自定义上传文件类型。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Attachment Uploader

> [!Note] 插件名片
> - 插件名称：Attachment Uploader
> - 插件作者：zhuxining
> - 插件说明：Attachment uploader插件，允许您自定义上传命令，自定义上传文件类型。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/zhuxining/obsidian-attachment-uploader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?attachment-uploader)

## 概述

Attachment uploader插件，允许您自定义上传命令，自定义上传文件类型。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhuxining/obsidian-attachment-uploader/master/README.md)
> 

---

## Readme(翻译）

下面是 [[attachment-uploader]] 插件的自述翻译


# obsidian-attachment-uploader

This Obsidian plugin can help you upload local attachments to cloud storage, the upload shell command can be customized, and the format of the attachments to be uploaded can be customized as well.
## 功能

* Support custom shell commands for uploading
  * Built-in [uPic](https://github.com/gee1k/uPic) upload command `/Applications/uPic.app/Contents/MacOS/uPic -o url -u %s`
  * Built-in [Picsee](https://picsee.chitaner.com/blog/Picsee_imageClound_command.html) upload command `"/Applications/Picsee.app/Contents/MacOS/Picsee -u %s"`
* Customize the attachment formats to be uploaded
* Whether to delete the original attachment after uploading
## 插件安装

1. 在 Obsidian 中，打开插件管理器
2. 搜索 "obsidian-attachment-uploader"
3. 点击 "安装",安装后启用并配置
## 使用配置

1. 安装图床工具（带shell上传命令）或自定义制作shell上传命令
2. Obsidian attachment uploader插件配置
    - 上传命令：配置上传附件的 shell 命令
    - 需要上传的附件格式：配置需要上传的附件格式,以回车分隔
    - 上传后是否要删除原附件：配置上传后是否要删除原附件
## 插件使用

1. 在 Obsidian 中打开包含附件的笔记
2. `command+p`呼出面板输入`Upload editor attachments`，或使用`Ribbon`按钮
## Thank You

* Reference [typora](https://typora.io/) for image upload



