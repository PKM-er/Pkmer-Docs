---
uid: 20230803203633
title: Obsidian 插件：【Readme】Cloudinary
tags: ['obsidian插件', 'readme']
description: 将内容（图片、视频、音频）上传到Cloudinary，并将它们插入（复制或拖放）到您的笔记中。
author: Uday Samsani, Jordan Handy
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Cloudinary

> [!Note] 插件名片
> - 插件名称：Cloudinary
> - 插件作者：Uday Samsani, Jordan Handy
> - 插件说明：将内容（图片、视频、音频）上传到Cloudinary，并将它们插入（复制或拖放）到您的笔记中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/uday-samsani/obsidian-cloudinary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloudinary)

## 概述

将内容（图片、视频、音频）上传到Cloudinary，并将它们插入（复制或拖放）到您的笔记中。

![Cloudinary](https://cdn.pkmer.cn/covers/cloudinary_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/uday-samsani/obsidian-cloudinary/main/README.md)
> 

---

## Readme(翻译）

下面是 [[cloudinary]] 插件的自述翻译


# 云端图像管理平台

什么是Cloudinary？
[Cloudinary](https://cloudinary.com/)是一个云存储平台，允许您将各种媒体文件上传到存储账户中。然后，可以使用Cloudinary的API来操作存储账户中的媒体文件的数据属性和元数据。

该插件将使编辑器中拖放或粘贴的所有文件（图像、视频、音频）上传到Cloudinary媒体库，而不是文件系统。您将获得在互联网上更容易使用和在Obsidian笔记中渲染时占用更少内存的链接。

您可以为每种内容类型和每个文件夹自定义上传行为和转换选项。

## 工作原理

![动作GIF](docs/assets/cloudinary.gif)

## 配置
1. 禁用 Obsidian 安全模式
2. 安装插件
    - 从 Obsidian 社区插件中安装（推荐）
        - 进入 `设置 > 社区插件 > 浏览`
        - 搜索 "Cloudinary" 并安装
    - 手动安装
        - 克隆此仓库
        - 使用 `yarn` 或 `npm` 安装依赖
        - 运行 `npm run build` 将插件安装到选择的 Obsidian 保险库中
3. 启用插件
4. 配置设置

未签名的上传到Cloudinary
该插件上传到Cloudinary是未签名的。[您可以在此处阅读更多信息](https://cloudinary.com/documentation/upload_images#unsigned_upload)。签名上传需要使用API密钥和密钥，但出于安全原因，我选择不在插件配置中要求这些信息。

转换
Cloudinary允许使用其API进行即时图像转换。对于最终用户来说，当上传完成时，只需对Cloudinary返回的URL进行简单的URL修改即可实现。您可以[在此处阅读有关Cloudinary转换参数的更多信息](https://cloudinary.com/documentation/transformation_reference)。
从版本0.2.0开始，您现在可以设置一个默认转换，以逗号分隔的列表应用于您的所有上传。请**注意语法**，因为使用不正确的转换参数将导致您的图像在Obsidian中无法渲染。

如果发生这种情况，只需修改上传后的URL即可解决。

请注意您的[转换令牌配额](https://cloudinary.com/blog/understanding_cloudinary_s_transformation_quotas)。根据您的计划，Cloudinary允许每月进行'x'次转换。在应用转换到您的上传时，请记住这个计数。

感谢
特别感谢：
1. @jordanhandy的[这个仓库](https://github.com/jordanhandy/obsidian-cloudinary-uploader)。我fork了这个仓库并对其进行了一些修改，但这个插件的基础是他们的工作。



