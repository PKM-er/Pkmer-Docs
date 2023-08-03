---
uid: 2023080322202180
title: Obsidian 插件：【Readme】Image Uploader
tags: ['自动化', 'obsidian插件', 'readme']
description: 这个插件可以在粘贴时自动将剪贴板中的图像上传到任何图像托管。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Image Uploader

> [!Note] 插件名片
> - 插件名称：Image Uploader
> - 插件作者：Creling
> - 插件说明：这个插件可以在粘贴时自动将剪贴板中的图像上传到任何图像托管。
> - 插件分类：['自动化', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Creling/obsidian-image-uploader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-image-uploader)

## 概述

这个插件可以在粘贴时自动将剪贴板中的图像上传到任何图像托管。

![Image Uploader](https://cdn.pkmer.cn/covers/obsidian-image-uploader.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Creling/obsidian-image-uploader/LivePreviewEditor/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-image-uploader]] 插件的自述翻译


# Obsidian 图片上传器

![](https://i.loli.net/2021/07/16/fxWBeLAESNc6tK9.gif)

当粘贴时，此插件可以自动调整大小（可选）并将剪贴板中的图片上传到任何图片托管服务。

开始使用

### 设置

1. Api Endpoint: 图片托管api的端点。
2. Upload Header: 上传请求的头部，以**json**格式。
3. Upload Body: 上传请求的主体，以**json**格式。除非你知道自己在做什么，否则不要更改。
4. Image Url Path: 图片url在http响应中的路径。
5. Enable Resize: 是否在上传前调整图片大小。
6. Max Width: 宽度大于此值的图片将按照自然纵横比进行调整大小。

以Imgur为例。上传请求如下所示：

```shell
curl --location --request POST 'https://api.imgur.com/3/image' \
--header 'Authorization: Client-ID {{clientId}}' \
--form 'image="R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"'
```

因此，`Api Endpoint`应为`https://api.imgur.com/3/image`，`Upload Header`应为`{"Authorization": "Client-ID {{clientId}}"}`。

上传请求的响应如下所示：
```json
{
	"data": {
		"id": "orunSTu",
		"title": null,
		"description": null,
		"datetime": 1495556889,
		"type": "image/gif",
		"animated": false,
		"width": 1,
		"height": 1,
		"size": 42,
		"views": 0,
		"bandwidth": 0,
		"vote": null,
		"favorite": false,
		"nsfw": null,
		"section": null,
		"account_url": null,
		"account_id": 0,
		"is_ad": false,
		"in_most_viral": false,
		"tags": [],
		"ad_type": 0,
		"ad_url": "",
		"in_gallery": false,
		"deletehash": "x70po4w7BVvSUzZ",
		"name": "",
		"link": "http://i.imgur.com/orunSTu.gif"
	},
	"success": true,
	"status": 200
}
```

你只需要图片的URL `http://i.imgur.com/orunSTu.gif`，因此`Image Url Path`应为`data.link`。

## 感谢
1. [obsidian-imgur-plugin](https://github.com/gavvvr/obsidian-imgur-plugin)
2. [create-obsidian-plugin](https://www.npmjs.com/package/create-obsidian-plugin)



