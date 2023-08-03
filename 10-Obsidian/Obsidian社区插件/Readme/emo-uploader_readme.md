---
uid: 2023080322174671
title: Obsidian 插件：【Readme】Emo
tags: ['obsidian插件', 'readme']
description: 嵌入Markdown在线文件/图像链接。此插件用于将图像上传到Obsidian中的托管或文件上传到Github。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Emo

> [!Note] 插件名片
> - 插件名称：Emo
> - 插件作者：yaleiyale
> - 插件说明：嵌入Markdown在线文件/图像链接。此插件用于将图像上传到Obsidian中的托管或文件上传到Github。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/yaleiyale/obsidian-emo-uploader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?emo-uploader)

## 概述

嵌入Markdown在线文件/图像链接。此插件用于将图像上传到Obsidian中的托管或文件上传到Github。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/yaleiyale/obsidian-emo-uploader/main/README.md)
> 

---

## Readme(翻译）

下面是 [[emo-uploader]] 插件的自述翻译


# Obsidian Emo Uploader

<p align="center">
		<img src="https://img.shields.io/github/release-date/yaleiyale/obsidian-emo-uploader?style=for-the-badge">
      <img src="https://img.shields.io/github/downloads/yaleiyale/obsidian-emo-uploader/total?style=for-the-badge">
</p>

在Obsidian中嵌入Markdown在线文件/图片链接。  
该插件用于将**图片**上传到托管平台或将**文件**上传到Github（更多功能，现在可用）。  

**图床聚合 & 文件上传器**：*Imgur SM.MS Github Cloudinary Catbox ……*

🚩[中文](https://lestua.eu.org/notes/2022/10/16/172318)

## 工作原理

<video src="https://user-images.githubusercontent.com/55282569/200258839-0979aa8c-7e5b-4254-bbe3-b9eeff458a40.mp4" controls="controls"></video>

## 状态

| 文件托管                           | 图片托管                         | 多语言支持                                        |
| ---------------------------------- | -------------------------------- | ------------------------------------------------- |
| [GitHub](https://github.com/)      | [Imgur](https://imgur.com/)       | 简体中文                                          |
| [Clouinary](https://cloudinary.com/) | [SM.MS](https://smms.app/)        | 繁體中文 [@emisjerry](https://github.com/emisjerry) |
| [Catbox](https://catbox.moe/)      | [ImgURL](https://www.imgurl.org/) | 英语                                              |
|                                    | [imgbb](https://imgbb.com/)       |                                                   |
|                                    | [chevereto](https://chevereto.com/)   |                                                   |

### V2.16

适应了Chevereto v3

### V2.15

支持 [chevereto](https://chevereto.com/)

### V2.14

添加Github cdn切换

## 提示

如果你想在Imgur上创建自己的客户端ID，请重定向到`obsidian://emo-imgur-oauth`。  
在注册**catbox**时，请记住你的用户名。🤨

从2.6版本开始，支持剪贴板和拖拽文件；非图片文件在嵌入到markdown后，默认情况下会以没有"!"开头的链接形式显示。

如何扩展

想要支持更多的平台吗？如果你想要贡献代码但又不想花太多时间阅读旧代码，你可以通过以下方式进行扩展。

- 参考现有的*parms*文件，通过向`src/Parms`添加文件来添加你的新*uploader*所需的参数。
- 使用你的*parms*接口。在`config.ts`中，添加关于你的*uploader*的参数配置，以提供选择并在运行时作为*uploader*的构造函数。
- 通过向`src/Uploader, src/Fragment`添加文件来实现你的*uploader*和*settings panel*。
- 在`settings-tab.ts`中，添加你的*fragment*以在设置选项卡中显示和设置参数。
- 在`main.ts`中的切换判断块中添加你的*uploader*。
- 进行测试。

完成了！ 😽

## 配置

1. 禁用 Obsidian 安全模式
2. 安装插件
   - 从 Obsidian 社区插件选项卡中安装
   - 使用发布版本
      - 在最新的发布版本中下载 **main.js manifest.json 或 zip 文件**
      - 将 **main.js manifest.json** 移动到 Obsidian Vault 的插件文件夹中的一个文件夹中
   - 手动安装
      - 克隆此存储库
      - 使用 `yarn` 或 `npm` 安装依赖项，例如 `npm install`
      - 运行 `yarn run dev` 开始编译
3. 启用插件
4. 配置设置 👉 [一些详细信息：以配置 GitHub 为例](https://lestua.eu.org/notes/2022/10/16/172318#english)
5. 享受便利之处 🌟

关于上传到Github

对于来自代码世界之外的初学者，Github是一个著名的互联网托管服务，用于软件开发和使用Git进行版本控制。
如果您需要关于托管图像的更多帮助，请转到[其他部分](https://github.com/yaleiyale/obsidian-emo-uploader#about-the-other)。这些服务更加专注于此。

这部分允许你将粘贴到Obsidian中的**文件**自动上传到你的Github仓库（而不是存储在本地）。当你想在笔记中提到一个你认为适合分享的文件，比如脚本、配置文件或其他文件时，这非常有用。当然，它也可以作为一个简单的图片上传工具，可以很好地将图片嵌入到Markdown文件中。但它不仅仅是一个图片上传工具，只要Github接受，你可以上传**各种类型的文件**。文件链接能否在Obsidian中渲染取决于Obsidian本身的支持。即使不能渲染，它们仍然可以作为链接使用。🍭只需删除开头的感叹号即可。

### 关于使用政策

[GitHub服务条款](https://docs.github.com/cn/site-policy/github-terms/github-terms-of-service)  
[jsdelivr使用政策](https://www.jsdelivr.com/terms/acceptable-use-policy-jsdelivr-net)  

⚠️ **请注意**

1. Github目标仓库必须是公开的，这意味着所有上传的文件都是公开的。Github也更适合那些乐于分享的人。请确保您分享的文件对您来说是无害的。我个人期待有一天您上传的文件是无私分享的。🌻
2. 不要上传空文件。这在这里是没有意义且错误的。
3. 建议在面板中检查随机文件名。重复的文件名会引发错误。随机文件名将大大避免重复的文件名。
4. 一般来说，Github已经足够慷慨了。但是您需要有一个适度的意识，**不要过度滥用Github的服务**。放松点，正常使用，比如在Github页面上，当然是可以接受的。但是如果您需要大量使用图片，请使用专业的图片托管服务（现在已经集成到这个插件中）。超出正常范围（例如在单个仓库中存储超过**1GB的文件**），滥用Github，并上传具有不良影响的坏文件可能会导致您的Github仓库甚至账户受到影响。
5. 我在这里使用的是[jsdelivr](https://www.jsdelivr.com/)。它是免费的。就像上面所说的，不要滥用它。就像我在视频中所做的那样，使用jsdelivr传输大型视频是不好的，我已经删除了它。*我的情况是一个小尺寸的视频*。 😼

关于其他平台

除了GitHub之外，这里的其他平台都是纯粹的托管平台。注册一个账号并找到所需的参数。将参数放置到正确的位置，然后就可以像视频中演示的那样使用了。

[ImgURL](https://www.imgurl.org/)和[SM.MS](https://smms.app/)是云存储平台，允许您上传图片到存储账户中。对于在中国生活的用户来说，它们比GitHub和Cloudinary更容易访问。

关于[Cloudinary](https://cloudinary.com/)，请参考[obsidian-cloudinary-uploader/README.md](https://github.com/jordanhandy/obsidian-cloudinary-uploader/blob/main/README.md)。当然，这里也支持Cloudinary。如果您发现Cloudinary已经足够满足您的需求，您可以直接使用它。（实际上，我的插件体积更小。😳）

如果您在中国，不建议使用[imgbb](https://imgbb.com/)。我发现上传到该平台的图片在中国大陆很难访问，并且通常以缩略图的形式呈现。

~~[Imgur](https://imgur.com/)很好用。但在我的网络环境中，很难访问和测试。我只是参考了一些帖子，实现了匿名上传。~~ 感谢这个[参考](https://github.com/gavvvr/obsidian-imgur-plugin)。使用imgur匿名上传时，删除哈希值将以`![deletehash](url)`的形式出现，用于防止您后悔上传错误的图片。您可以在[这里](https://lestua.eu.org/imgurdeleteimage)或插件中删除它们。

[Catbox](https://catbox.moe/)原本支持匿名上传。但我没有找到如何删除匿名上传的文件。为了避免意外情况，这里不提供catbox的匿名上传。

⚠️ 文件是公开可见的，请不要上传违禁物品！请自行检查服务限制。

注意

由于不同平台支持的文件范围不同，对于粘贴到此插件中的文件类型没有限制。这将导致不支持的类型上传失败且没有正确的响应。幸运的是，很少有奇怪的文件类型嵌入到文档中。（应该不会有很多，对吧？）

如果您需要将文件作为附件嵌入，请暂时关闭插件。

一般来说，**Github、Cloudinary、Catbox**支持**任何**文件类型，**SM.MS、ImgURL**支持常见的**图像**类型。

尝试上传平台不支持的文件或超过上限的文件大小可能会导致出现类似`![](undefined)`的字符串。请注意，不要只是等待。

---

如果您喜欢这个插件，可以通过给我买一杯可乐来支持我的工作和热情：



谢谢！

## 感谢

|                                                                                             | 感谢                                              |                                                                          |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| [obsidian-cloudinary-uploader](https://github.com/jordanhandy/obsidian-cloudinary-uploader) | [Github REST API](https://docs.github.com/cn/rest) | [jsdelivr](https://www.jsdelivr.com/)                                    |
| [SM.MS](https://smms.app/)                                                                  | [ImgURL](https://www.imgurl.org/)                  | [Clouinary](https://cloudinary.com/)                                     |
| [Imgur](https://imgur.com/)                                                                 | [imgbb](https://imgbb.com/)                        | [obsidian-imgur-plugin](https://github.com/gavvvr/obsidian-imgur-plugin) |
| [Catbox](https://catbox.moe/)                                                               | [chevereto](https://chevereto.com/)                                                   |                                                                          |



