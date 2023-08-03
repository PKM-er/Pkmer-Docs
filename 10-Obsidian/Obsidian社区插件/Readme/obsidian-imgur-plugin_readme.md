---
uid: 2023080322202445
title: Obsidian 插件：Imgur Plugin
tags: ['第三方工具集成', '图片', '链接处理', 'obsidian插件', 'readme']
description: 此插件将剪贴板中的图像上传到 imgur.com 并将上传的图像嵌入到您的笔记中
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Imgur Plugin

> [!Note] 插件名片
> - 插件名称：Imgur Plugin
> - 插件作者：Kirill Gavrilov
> - 插件说明：此插件将剪贴板中的图像上传到 imgur.com 并将上传的图像嵌入到您的笔记中
> - 插件分类：[' 第三方工具集成 ', ' 图片 ', ' 链接处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/gavvvr/obsidian-imgur-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-imgur-plugin)

## 概述

此插件将剪贴板中的图像上传到 imgur.com 并将上传的图像嵌入到您的笔记中

![Imgur Plugin](https://cdn.pkmer.cn/covers/obsidian-imgur-plugin.GIF!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gavvvr/obsidian-imgur-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-imgur-plugin]] 插件的自述翻译

# Obsidian Imgur 插件

[![可维护性评级](https://sonarcloud.io/api/project_badges/measure?project=gavvvr_obsidian-imgur-plugin&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=gavvvr_obsidian-imgur-plugin)

[![安装次数](https://img.shields.io/github/downloads/gavvvr/obsidian-imgur-plugin/main.js.svg)][安装说明]

[安装说明]: <https://help.obsidian.md/Advanced+topics/Third-party+plugins#Discover+and+install+community+plugins>

该插件将图片上传到 [imgur.com](https://imgur.com/)，而不是将其本地存储在您的 vault 中。

![obsidian-imgur-plugin-demo](https://user-images.githubusercontent.com/1719646/120395609-efe33b80-c33d-11eb-9960-95b9aac0b0b9.gif)

为什么？

Obsidian 的设计是将所有数据存储在本地

（对于文本来说非常完美，但对于图片来说可能还有改进的空间）。

如果您经常在笔记中添加图片，您的存储库大小可能会迅速增长。

这可能会导致在使用免费的云存储服务同步笔记时达到限制，

或者在使用 git 备份笔记时导致存储库大小增长。

对于经常在笔记中粘贴图片的人来说，这个插件是一个完美的解决方案

（例如，学生截取讲座幻灯片的屏幕截图），

他们不想用图像文件堆积他们的存储库。

使用远程图片还可以更轻松地与他人共享笔记，

您只需要共享一个文件即可。

如果您不确定这个解决方案是否适合您，您可以查看 [FAQ](#faq) 部分

和/或由 [@santiyounger][santiyounger] 创建的视频，讨论这种方法的优缺点

[![Santi Younger - Use Images Like A Pro](https://img.youtube.com/vi/-a1vJVy20cQ/0.jpg)](https://www.youtube.com/watch?v=-a1vJVy20cQ)

[santiyounger]: <https://github.com/santiyounger>

## 特点

- 匿名上传图片或上传到您的 Imgur 账户
- 通过从剪贴板粘贴或从文件系统拖动来上传图片
- 支持拖放上传动画 gif 图片

## 安装

通过 Obsidian 中的 [Community Plugins][installation-instructions] 选项卡安装插件。

开始使用

### 验证上传

转到插件的设置，选择“验证的 Imgur 上传”并完成身份验证。

就这样！现在您已经准备好远程制作笔记并上传所有图片了。

您将在<https://your_login.imgur.com/all/>上看到您上传的所有图片。

### 匿名上传

您可能不希望将您的 Obsidian 图像与 Imgur 账户绑定。

针对这种情况，有一个“匿名 Imgur 上传”选项。

要执行匿名上传，插件需要一个**客户端 ID**。

该插件已经附带了嵌入的**客户端 ID**，默认情况下将使用该 ID，直到您提供自己的 ID。

但是，全球其他用户也将使用相同的客户端 ID，

这可能会导致此共享客户端 ID 达到 [每日上传限制](#known-limitations)。

如果您在匿名图像上传方面遇到问题，建议您生成自己的客户端 ID。

请按照以下说明操作。

#### 获取您自己的客户端 ID

如果您还没有 imgur.com 账户，您需要首先 [注册一个](https://imgur.com/register)。

登录后，转到<https://api.imgur.com/oauth2/addclient>并为 Obsidian 生成**客户端 ID**：

- 提供应用程序名称，例如 "Obsidian"
- 选择 "OAuth 2 授权，无回调 URL"
- 并指定您的电子邮件

您只需要**客户端 ID**，不需要客户端密钥，无需记录。

## 常见问题解答

**问：** 这种方法有多安全？
**答：** 除非你分享了一个链接或者有人神奇地猜到了你的图片的 URL，否则没有人能看到你上传的图片。

**问：** 我能删除一个不小心上传的远程图片吗？
**答：** 对于已认证的上传 - 是的，前往<https://your_login.imgur.com/all/>，

对于匿名上传 - 不行

（从技术上讲是可能的，但你需要一个没有记录的 `deleteHash`。我会记录它，但 Obsidian 还没有登录的地方）

**问：** 图片在 imgur.com 上会保留多久？有可能丢失数据吗？
**答：** 对于已认证的上传，我猜它们永远不会被删除。那么匿名上传呢？

早些时候，在 Imgur 网站上 [曾经声明过][early-imgur-guarantees] 你上传的图片会永远保留。

我认为这是 [从 2015 年开始][imgur-pro-free] 的。今天我在 Imgur 网站上找不到这个声明。

我可以假设那些多年没有被查看的图片可能会被删除，但没有什么可担心的。

你可以在 [讨论][ttl-discussion] 中阅读我对此的详细想法。

[imgur-pro-free]: <https://blog.imgur.com/2015/02/09/imgur-pro-for-everyone/>
[early-imgur-guarantees]: <https://webapps.stackexchange.com/questions/75993/how-long-does-imgur-store-uploaded-images/75994#75994>
[ttl-discussion]: <https://github.com/gavvvr/obsidian-imgur-plugin/discussions/4#discussioncomment-590286>

**问：** Imgur 支持视频。这个插件支持上传视频吗？
**答：** 不支持。最初，我没有考虑支持视频上传，因为没有 Markdown 语法来嵌入视频。

另一方面，你可以简单地使用 `<video>`HTML 标签，所以我可能会在将来添加对视频的支持。

**问：** 它能上传图片到其他服务吗？
**答：** 目前没有计划支持其他图像托管解决方案，

但对于你来说，创建一个分支并创建自己的 `ImageUploader` 接口的实现应该不难。

### 讨论

如果您有任何问题/建议，请考虑使用 [GitHub 讨论][gh-discussions]。

在 Obsidian 论坛上也有一个 [插件的帖子][forum-thread]。

[gh-discussions]: <https://forum.obsidian.md/t/imgur-plugin-for-pasting-images/11462/10>
[forum-thread]: <https://forum.obsidian.md/t/imgur-plugin-for-pasting-images/11462>

### 已知限制

- 无法直接从剪贴板粘贴动画 GIF（它们最初会被复制为静态图像到剪贴板）。如果要上传动画 GIF，请改用拖放方式。
- 对于使用相同客户端 ID 的 [匿名上传](#anonymous-upload)，存在每日 [上传限制](https://apidocs.imgur.com/#rate-limits)。因此，建议 [生成自己的客户端ID](#obtaining-your-own-client-id)。

### 已知问题

- 有时候 Imgur 会无明显原因地拒绝你上传图片的请求。
  这种情况下通常会报告错误 [known-cors-problem-issue]，即 CORS 请求失败，
  这不允许 Obsidian 继续进行图片上传。如果你遇到这个问题，无需采取任何行动：
  只需等待，它很快就会消失。每当插件无法远程上传图片时，
  它会回退到默认的本地存储图片的方法。

[known-cors-problem-issue]: <https://github.com/gavvvr/obsidian-imgur-plugin/issues/8>

贡献

欢迎贡献。

请查看 [DEVELOPMENT.md](DEVELOPMENT.md) 以开始编写代码。

### 您的支持

如果这个插件对您有帮助，您可以在 GitHub 上给它一个⭐️来表示您的支持。

您也可以通过 Ko-fi 给我买杯咖啡：

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F2F44TOP7)
