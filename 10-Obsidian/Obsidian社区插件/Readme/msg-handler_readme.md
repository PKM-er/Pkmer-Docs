---
uid: 2023080322224277
title: Obsidian 插件：【Readme】MSG Handler
tags: ['obsidian插件', 'readme']
description: 在Obsidian Vault中轻松显示和搜索来自Outlook的MSG文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：MSG Handler

> [!Note] 插件名片
> - 插件名称：MSG Handler
> - 插件作者：Ozan Tellioglu
> - 插件说明：在Obsidian Vault中轻松显示和搜索来自Outlook的MSG文件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ozntel/obsidian-msg-handler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?msg-handler)

## 概述

在Obsidian Vault中轻松显示和搜索来自Outlook的MSG文件。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ozntel/obsidian-msg-handler/master/README.md)
> 

---

## Readme(翻译）

下面是 [[msg-handler]] 插件的自述翻译


# Obsidian MSG和EML处理插件

Obsidian默认不会打开任何**Outlook**（`.msg`，`.eml`）文件。它会提示您在操作系统的默认应用程序中打开文件。此插件是为了在您的文件夹中**显示**和**轻松搜索**保存的Outlook项目而创建的。

大多数公司在电子邮件方面都有保留政策（如2年或3年）。可能甚至更短。您需要将重要的电子邮件保存在计算机上。或者，即使您没有任何保留政策，您也可能只想保存和搜索特定的Outlook邮件。对于这样的人来说，这个插件非常方便，可以轻松找到相关项目并打开它们。

该插件基本上添加了一个自定义视图来处理具有`.msg`和`.eml`扩展名的文件。还创建了一个额外的**搜索视图**，以便轻松找到您要搜索的内容。它的外观与Obsidian的默认搜索器非常相似，因为它使用相同的样式类，使用户随时都能更容易地使用。

为了使搜索功能更快，插件在涉及`.msg`和`.eml`文件的保险库更改时进行观察，并在数据库中对它们进行索引，以便不需要每次搜索时都返回文件并读取它们。在每次保险库打开/插件加载后，插件将交叉检查您的保险库中的所有`.msg`和`.eml`文件与数据库，并进行必要的更新，以防在插件未打开或保险库未打开时带入了一些`.msg`或`.eml`文件。

在插件的msg文件视图中，您将有3个部分：

- **头部**：包括发件人姓名、发件人电子邮件、收件人姓名和电子邮件、主题等信息
- **正文**：包括电子邮件正文的纯文本版本
- **附件**：包括电子邮件的附件。插件将使用切换按钮自动渲染并隐藏图像。您可以切换查看它们。如果文件不是图像，您可以将文件保存在您想要的任何文件夹中。插件将提示您选择要保存的文件夹。

在编辑器源代码模式下查看消息

您可以安装**Ozan's Image in Editor**插件，使用WikiLinks直接从编辑器中查看您的`.msg`或`.eml`文件的嵌入式预览：

```md
![[MyMessageFromOutlook.msg]]
![[AnotherMessageToSee.eml]]
```

请确保您在**Ozan's Image in Editor**插件设置中启用了渲染msg文件的功能。

在预览模式下查看消息

该插件默认支持在Obsidian的预览模式中预览嵌入的图片。如果您同时使用编辑器源代码模式和预览模式，您的嵌入消息将始终与您的Markdown笔记一起显示。与编辑器源代码模式一样，使用Wikilink格式。

## 联系方式

如果您有任何问题或建议，请随时通过我的网站联系页面 [ozan.pl/contact/](https://www.ozan.pl/contact/) 或直接发送邮件至 <me@ozan.pl> 与我联系。

## 支持

如果您喜欢这个插件，可以通过给我买杯咖啡来支持我的工作和热情：

<a href='https://ko-fi.com/L3L356V6Q' target='_blank'>
    <img height='48' style='border:0px;height:48px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='在ko-fi.com上给我买杯咖啡' />
</a>



