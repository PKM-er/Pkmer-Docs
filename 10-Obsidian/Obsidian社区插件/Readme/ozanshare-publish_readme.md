---
uid: 20230803204518
title: Obsidian 插件：【Readme】OzanShare Publish
tags: ['obsidian插件', 'readme']
description: 从你的保险库一键发布你的markdown笔记。（封闭源）
author: Ozan Tellioglu
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：OzanShare Publish

> [!Note] 插件名片
> - 插件名称：OzanShare Publish
> - 插件作者：Ozan Tellioglu
> - 插件说明：从你的保险库一键发布你的markdown笔记。（封闭源）
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ozntel/ozanshare-publish-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ozanshare-publish)

## 概述

从你的保险库一键发布你的markdown笔记。（封闭源）



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[ozanshare-publish]] 插件的自述翻译


# OzanShare发布插件

<a href="https://discord.gg/GBV7wHYq">
   <img src="https://img.shields.io/discord/893092863867486218?logo=discord" alt="在Discord上聊天" width="120">
</a>

该插件允许您通过单击一次直接从Obsidian vault发布您的Markdown笔记。它适用于移动设备和桌面设备。

您发布的每个文件都将有唯一的代码，仅您可以使用。您可以与他人分享链接，并在进行小的更改后重新发布。它将保持相同的“代码”和“URL”。

**重要**：
- 这不是一个开源项目。

- 该插件仅适用于处于“独家支持级别”的用户。一旦您达到此支持级别，我将向您发送您可以在插件中使用的“TOKEN”（请确保正确提供您的“电子邮件地址”）

    <a href="https://buy.stripe.com/fZe8wNaOL07MbKg144" target="_blank">
        <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/exclusive-supporter.png" width="230"></img>
    </a>

- 您还可以直接通过下面的[联系方式](#Contact)与我联系以了解更多信息。

**请记住**：
- 该插件仍处于早期阶段。可能会有一些错误和缺失的功能，这些将逐步改进和实现。如果您发现任何错误和问题，请尽快向我报告，我将非常感激您的耐心等待，以便我可以解决它。

要了解更多详细信息，您可以访问“OzanShare发布”页面：

查看插件的工作原理

<a href="https://youtu.be/yrwg4wqUg3A" target="_blank">
    <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/Watch%20on%20Youtube.png" width="550px"></img>
</a>

## 插件描述

1. 您需要处于“独家支持级别”才能使用该插件。您将收到一个“TOKEN”以便使用插件和发布功能。一旦在插件设置中输入“TOKEN”并点击验证，您就可以开始享受所有可用功能：

2. 您可以通过单击文件库中文件的“上下文菜单”中的一个按钮，将您的笔记和所有相关链接的笔记一键发布到主要发布的笔记中：

    <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/publish-page-link.png" width="250px"></img>

3. 您的页面将在[https://ozanshare.web.app/](https://ozanshare.web.app/)上提供。您可以访问该网站查看一个示例已发布的笔记。

4. 插件将以下内容呈现为HTML：

    - **任何基本的Markdown内容**
    - **链接的文件**
	- **引用**（以及嵌套的引用）

        <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/transclusions.png" width="500" alt="transclusions"></img>

    - **警示**

        <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/admonitions.png" width="500" alt="admonitions"></img>

    - **Excalidraw绘图**

        <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/excalidraw-drawing.png" width="500" alt="admonitions"></img>

	- **Mermaids**

        <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/mermaids.png" width="500" alt="mermaid-sample"></img>

	- **MathJax**

        <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/mathjax.png" width="500" alt="mathjax-sample"></img>

	- **代码块**

        <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/code-blocks.png" width="500" alt="code-blocks"></img>
        
5. 您还可以添加自定义CSS。转到设置并使用按钮打开您的自定义CSS设置。

    <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/custom-css.png" width="400px"></img>

6. 您可以从插件创建的“视图”中查看所有已发布的笔记。只需点击“Ribbon图标”并列出您的已发布笔记。

    <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/leaf-view.png" width="750px"></img>

7. 只要您不取消发布笔记并更改文件在文件库中的位置，“重新发布”功能将保留旧的发布引用。这将帮助您更新已经与他人共享的文件，而无需发送新链接。

    <img src="https://raw.githubusercontent.com/ozntel/ozanshare-publish-plugin/main/images/republish-button-2.png" width="550px"></img>

8. “图片”会上传到Firebase服务器，并使用一个秘密令牌提供服务。提供的令牌的图像源将自动嵌入到您在OzanShare上的最终发布中。

9. 每次发布都会触发对您的“已发布文件”和“文件库”的扫描。这意味着您不应该手动从“Frontmatter”中删除引用，因为这将触发从服务器中删除已发布的笔记。如果您不再需要该笔记共享，您应该使用“取消发布”按钮。这将从服务器中删除共享的笔记。

10. 您可以直接从“上下文菜单”或“复制URL”中打开Web应用程序上的已发布笔记，从而可以在Web上访问该笔记。

## 联系方式

如果您有任何问题或建议，请随时通过我的网站联系页面或直接发送邮件至<me@ozan.pl>与我联系。



