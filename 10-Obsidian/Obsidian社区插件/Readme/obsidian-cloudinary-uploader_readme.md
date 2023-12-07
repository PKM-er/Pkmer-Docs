---
uid: 2023120719374716
title: Obsidian 插件：【Readme】Obsidian Cloudinary Uploader
tags: ['obsidian插件', 'readme']
description: 将从剪贴板复制的图像上传到Cloudinary
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Obsidian Cloudinary Uploader

> [!Note] 插件名片
> - 插件名称：Obsidian Cloudinary Uploader
> - 插件作者：Jordan Handy
> - 插件说明：将从剪贴板复制的图像上传到 Cloudinary
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jordanhandy/obsidian-cloudinary-uploader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-cloudinary-uploader)

## 概述

将从剪贴板复制的图像上传到 Cloudinary

![Obsidian Cloudinary Uploader](https://cdn.pkmer.cn/covers/obsidian-cloudinary-uploader.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jordanhandy/obsidian-cloudinary-uploader/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-cloudinary-uploader]] 插件的自述翻译

# Obsidian Cloudinary Uploader

![下载量](https://img.shields.io/github/downloads/jordanhandy/obsidian-cloudinary-uploader/main.js.svg)

![版本](https://img.shields.io/github/manifest-json/v/jordanhandy/obsidian-cloudinary-uploader?color=blue)

[文档](https://jordanhandy.github.io/obsidian-cloudinary-uploader/)

这是什么？

[Cloudinary](https://cloudinary.com/) 是一个云存储平台，允许您将各种媒体文件上传到存储账户中。然后，可以使用 Cloudinary 的 API 来操作存储账户中的媒体文件的数据属性和元数据。

该插件允许您将粘贴到 Obsidian 中的图片自动上传到您的 Cloudinary 账户（而不是本地存储）。注意：该插件没有媒体操作功能。

## 工作原理

![动作GIF](https://cdn.pkmer.cn/covers/obsidian-cloudinary-uploader_1_2.gif!pkmer)

## 配置

1. 禁用 Obsidian 安全模式
2. 安装插件
    - 从 Obsidian 社区插件选项卡中安装
    - 手动安装
        - 克隆此存储库
        - 使用 `yarn` 或 `npm` 安装依赖项
        - 运行 `npm run dev` 开始编译
3. 启用插件
4. 配置设置并设置：
    - 云名称
    - 上传预设名称（[在此处设置](https://cloudinary.com/documentation/upload_presets)）
    - 设置文件夹名称
5. 可选配置
    - Cloudinary 默认转换参数

上传到 Cloudinary 的文件是未签名的。[您可以在此处阅读更多信息](https://cloudinary.com/documentation/upload_images#unsigned_upload)。签名上传需要使用 API 密钥和密钥，但出于安全考虑，我选择不在插件配置中要求这些信息。

转换

Cloudinary 允许使用其 API 进行即时图像转换。对于最终用户来说，当上传完成时，只需对 Cloudinary 返回的 URL 进行简单的 URL 修改即可实现。您可以 [在此处阅读有关Cloudinary转换参数的更多信息](https://cloudinary.com/documentation/transformation_reference)。

从版本 0.2.0 开始，您现在可以设置一个默认转换，以逗号分隔的列表应用于您的所有上传。请**注意语法**，因为使用不正确的转换参数将导致您的图像在 Obsidian 中无法渲染。

如果发生这种情况，只需修改上传后的 URL 即可修复。

请注意您的 [转换令牌配额](https://cloudinary.com/blog/understanding_cloudinary_s_transformation_quotas)。根据您的计划，Cloudinary 允许每月进行 'x' 次转换。在应用转换到您的上传时，请记住这个计数。

## 感谢

特别感谢：

1. @Creling 和他们的仓库 [这里](https://github.com/Creling/obsidian-image-uploader)。由于这是我第一次创建 Obsidian 插件，他们的基础帮助了我很多。
2. [Obsidian 非官方插件开发文档](https://marcus.se.net/obsidian-plugin-docs/)。



