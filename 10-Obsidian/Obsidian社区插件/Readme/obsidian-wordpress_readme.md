---
uid: 2023080322294221
title: Obsidian 插件：【Readme】WordPress
tags: ['obsidian插件', 'readme']
description: 一个插件，用于将您的Obsidian文档发布到WordPress
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：WordPress

> [!Note] 插件名片
> - 插件名称：WordPress
> - 插件作者：devbean
> - 插件说明：一个插件，用于将您的Obsidian文档发布到WordPress
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/devbean/obsidian-wordpress)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-wordpress)

## 概述

一个插件，用于将您的Obsidian文档发布到WordPress



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/devbean/obsidian-wordpress/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-wordpress]] 插件的自述翻译


# obsidian-wordpress

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/devbean)

这个插件可以让你将Obsidian文档发布到WordPress。

你可以观看一些介绍视频：
* [YouTube（中文）by 简睿学堂-emisjerry](https://youtu.be/7YECfr_W1WM)
* [Bilibili（中文）by 简睿学堂-emisjerry](https://www.bilibili.com/video/BV1FT411A77m/?vd_source=8d3e1ef8cd3aab146af84cfad2f5076f)

## 用法

在设置中设置您的WordPress URL以及用户名（如果需要）。

将光标放在MarkDown编辑器中，然后在[命令面板](https://help.obsidian.md/Plugins/Command+palette)中使用**发布到WordPress**，或者您可以在设置中显示一个按钮。文档将被发布到您设置的WordPress URL。

您可以在笔记前面添加YAML前置元数据。插件将从前置元数据中读取元数据，例如覆盖标题或标签。此外，如果笔记成功发布，WordPress文章ID和分类将添加到此前置元数据中，以支持编辑。

例如，您可以添加如下内容：

```markdown
---
title: 要覆盖笔记标题的文章标题，非必需
tags:
  - 您想要的任何标签
  - 非必需
---
笔记内容在这里。
```

限制

该插件使用XML-RPC或REST协议发布到WordPress。

XML-RPC默认启用，但由于安全问题，一些网站可能会禁用它。虽然一些共享主机可能默认禁用XML-RPC，您无法启用它。因此，如果禁用了XML-RPC，则无法正常工作。

REST API从WordPress 4.7开始默认启用。某些REST API需要额外的操作来保护可写API。传统上，这是通过安装插件来完成的。WordPress 5.6引入了应用程序密码来执行类似的操作。因此，如果您使用WordPress 5.6，并且可以接受应用程序密码，则应优先使用它，无需安装插件。

阅读[此页面](https://devbean.github.io/obsidian-wordpress)获取更多信息。



