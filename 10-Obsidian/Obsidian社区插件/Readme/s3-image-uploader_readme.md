---
uid: 20230803213149
title: Obsidian 插件：【Readme】S3 Image Uploader
tags: ['obsidian插件', 'readme']
description: 一款为Obsidian设计的图像上传器，可以让您在AWS S3上自行托管图像。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：S3 Image Uploader

> [!Note] 插件名片
> - 插件名称：S3 Image Uploader
> - 插件作者：jvsteiner
> - 插件说明：一款为Obsidian设计的图像上传器，可以让您在AWS S3上自行托管图像。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jvsteiner/s3-image-uploader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?s3-image-uploader)

## 概述

一款为Obsidian设计的图像上传器，可以让您在AWS S3上自行托管图像。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jvsteiner/s3-image-uploader/master/README.md)
> 

---

## Readme(翻译）

下面是 [[s3-image-uploader]] 插件的自述翻译



# S3 图片上传器

这是一个为 [Obsidian](https://obsidian.md) 设计的插件。它基于 [标准插件模板](https://github.com/obsidianmd/obsidian-sample-plugin) 生成。

该项目实现了一个图片上传器，类似于社区提供的其他插件，但有一个重要的区别：您可以提供自己基于 S3 的存储，而不是依赖于第三方服务，如 `imgur`。

该插件通过广告支持。

注意：该插件仍在开发中，可能存在一些错误。请报告您发现的任何问题。

它受到了令人惊叹的 Markdown 编辑器 Typora 和以下 Obsidian 插件的启发：

-   [Obsidian 图片上传器](https://github.com/Creling/obsidian-image-uploader)
-   [远程保存](https://github.com/remotely-save/remotely-save)
-   [Obsidian Imgur 插件](https://github.com/gavvvr/obsidian-imgur-plugin)

用法

您需要设置自己的S3存储桶，并向插件提供以下信息：

- `accessKeyId`：具有对您的存储桶具有写入权限的S3用户的访问密钥ID
- `secretAccessKey`：S3用户的秘密访问密钥
- `region`：您的存储桶所在的区域
- `bucket`：您的存储桶的名称（必须已存在）
- `folder`：您希望存储图像的存储桶中的文件夹（可选，如果不存在将会动态创建）

如果您希望其他人能够查看图像，您需要使您的存储桶对所有人可读。您可以通过向存储桶添加以下策略来实现：

```json
{
	"Version": "2008-10-17",
	"Statement": [
		{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::<your-bucket>/*"
		}
	]
}
```

您还需要为存储桶设置CORS策略：

```json
[
	{
		"AllowedHeaders": ["*"],
		"AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
		"AllowedOrigins": ["*"],
		"ExposeHeaders": []
	}
]
```

您还需要为您的存储桶设置具有写入权限的用户。您可以在IAM控制台中创建一个新用户，并将`AmazonS3FullAccess`策略附加到该用户上。也可以使用更细粒度的访问控制策略，但这是最简单的入门方式。

当您将剪贴板中的图像粘贴到Obsidian笔记中时，插件将会将图像上传到您的存储桶，并在您的笔记中插入图像的链接。链接的格式将为`https://<your-bucket>.s3.<your-region>.amazonaws.com/<your-optional-folder>/<image-name>`。如果您已经使您的存储桶对所有人可读，您可以与他人共享链接，他们将能够查看图像。

如果您在插件设置中选择了“拖放上传”选项，插件还将上传您拖放到笔记中的图像。如果您想要从文件系统上传图像，这将非常有用。

如果您不希望在所有笔记中都有此行为，您可以根据每个笔记自定义它。

1. 您可以在笔记中添加一个`uploadOnDrag`的YAML前置标签，如下所示。
2. 您还可以将`localUpload`选项设置为`true`，这将把图像复制到本地文件系统中的一个文件夹，而不是上传到云端，覆盖全局设置。
3. 您还可以通过在YAML前置标签中添加`localUploadFolder`选项来设置图像将上传到的特定文件夹。这将覆盖全局设置。

这些设置将覆盖全局设置。`uploadOnDrag`标签影响S3和本地上传。其他两个选项仅影响本地上传。

```
---
uploadOnDrag: true
localUpload: true
localUploadFolder: "my-folder"
---
```

## 开发

欢迎提交PR，我希望添加的功能包括：

-   [ ] 添加对其他云存储提供商的支持，如Google Drive、Dropbox等。
-   [x] 添加将图片复制到本地文件系统中可配置的文件夹的支持，而不是将其上传到云端。
-   [ ] 添加通过热键在上述选项之间动态移动图片的支持。
-   [ ] 添加自动创建存储桶（bucket）的支持，如果它们不存在的话。



