---
uid: 20230803204054
title: Obsidian 插件：【Readme】Google Photos
tags: ['obsidian插件', 'readme']
description: Obsidian与Google照片的集成
author: Alan Grainger
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Google Photos

> [!Note] 插件名片
> - 插件名称：Google Photos
> - 插件作者：Alan Grainger
> - 插件说明：Obsidian与Google照片的集成
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/alangrainger/obsidian-google-photos)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?google-photos)

## 概述

Obsidian与Google照片的集成

![Google Photos](https://cdn.pkmer.cn/covers/google-photos.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/alangrainger/obsidian-google-photos/main/README.md)
> 

---

## Readme(翻译）

下面是 [[google-photos]] 插件的自述翻译


# Obsidian的Google相册

![](https://img.shields.io/github/license/alangrainger/obsidian-google-photos) ![](https://img.shields.io/github/v/release/alangrainger/obsidian-google-photos?style=flat-square) ![](https://img.shields.io/github/downloads/alangrainger/obsidian-google-photos/total)



这个插件允许你直接在Obsidian中嵌入Google相册的图片。当你选择一张图片时，它会保存并嵌入一张低分辨率的缩略图，并附带一个指向Google相册中高分辨率图片的链接。

![](img/demo.gif)

如果你的笔记标题包含可检测的日期，插件会默认只显示该日期的照片。顶部有一个切换按钮，可以显示所有照片。

使用移动设备

您可以在移动设备上使用Google相册，但由于移动设备的限制，您首先需要使用桌面设备从Obsidian连接到Google相册。

一旦您的桌面设备经过身份验证，您可以将插件设置同步到移动设备上，而且不会出现任何问题。如果您正在使用Obsidian vault的任何同步方式，这应该会自动发生。具体来说，您需要将桌面插件文件夹中的`data.json`文件传输到移动设备上。

如果您正在使用Obsidian Sync，您需要确保在桌面和移动设备上都启用了**已安装的社区插件**同步选项，以便正确传输设置。

# 如何设置

要从第三方插件连接到Google相册，您需要为插件创建一个API密钥。

**该插件仅请求只读访问权限。它无法修改您的照片或相册。**

1. 访问[https://developers.google.com/photos/library/guides/get-started](https://developers.google.com/photos/library/guides/get-started)


2. 点击如下图所示的按钮：

![](img/setup-enable.png)

3. 创建一个新项目，并给它任何您喜欢的名称。
在下一个屏幕上使用相同的名称，该屏幕要求输入“产品名称”：

![](img/setup-create-project.png)

4. 在OAuth配置屏幕中填写以下设置：

重定向URI：`https://localhost/google-photos`

![x200](img/setup-oauth.png)

5. 点击**创建**。


6. 复制`客户端ID`和`客户端密钥`。您需要将这些值添加到Obsidian插件设置中：

![](img/setup-client-conf.png)

高级功能

有非常基本的代码块支持。您可以使用Photos API搜索格式运行自己的自定义查询：

https://developers.google.com/photos/library/reference/rest/v1/mediaItems/search

例如，如果您想显示每年4月1日拍摄的食物照片，您可以使用以下代码：

````
```photos
{
  "filters": {
    "dateFilter": {
      "dates": [{
        "year": 0,
        "month": 4,
        "day": 1
      }]
    },
    "contentFilter": {
      "includedContentCategories": [
        "FOOD"
      ]
    }
  }
}
```
````

调整视觉样式

如果您想要调整样式，这些是使用的类：

`.google-photos-grid-thumbnail` - 缩略图图像
`.google-photos-codeblock` - 嵌入的代码块容器
`.google-photos-modal-grid` - 弹出式模态网格容器

常见问题解答

这些图片必须保存在本地吗？它们可以是远程缩略图吗？

Photos API生成的URL只在短时间内有效，然后就会过期。因此，虽然你可以将它们添加到你的笔记中，但它们会在某个时候停止工作。

我目前正在测试几个潜在的选项，但需要等待链接的过期时间（或者如果它有效的话，就是不过期）需要一些时间。

从[loading.io](https://loading.io/)加载旋转图标。



