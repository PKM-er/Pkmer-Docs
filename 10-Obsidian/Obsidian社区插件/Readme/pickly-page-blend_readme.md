---
uid: 2023102611081980
title: Obsidian 插件：【Readme】Pickly PageBlend
tags: ['obsidian插件', 'readme']
description: 一键发布您的Obsidian笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Pickly PageBlend

> [!Note] 插件名片
> - 插件名称：Pickly PageBlend
> - 插件作者：Dmitrii Mitrichev
> - 插件说明：一键发布您的 Obsidian 笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dmitrichev/pickly-page-blend)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pickly-page-blend)

## 概述

一键发布您的 Obsidian 笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dmitrichev/pickly-page-blend/master/README.md)
>

---

## Readme(翻译）

下面是 [[pickly-page-blend]] 插件的自述翻译

Pickly PageBlend - 分享你的 Obsidian 笔记的最简单方式。

## 特点

- 笔记发布
- 支持 Markdown 语法
- 发布链接的笔记和文件
- 文件的永久链接
- 美观的社交媒体预览
- 通过 [Viqeo.tv文章转视频播放器](https://viqeo.tv/article-to-video-player) 将笔记文本转为视频并直接发布在页面上（有免费计划）

## 使用方法

您可以通过以下几种方式发布您的笔记：

- 只需按下 `Command+Shift+P`（如果您使用的是 Windows/Linux，则为 `Ctrl+Shift+P`）
- 通过文件上下文菜单。打开文件上下文菜单，然后点击“使用 PageBlend 发布”。
- 通过命令。要执行此操作，请执行命令“Pickly PageBlend: 使用 PageBlend 发布”。

等待笔记发布完成后，您将收到一个已发布文件的链接。

![example.gif](./img/example.gif)

预览

您的笔记的预览图像将设置为笔记中的第一张图像。

如果您的文章中没有图像，将自动创建一个包含文章标题的图像。例如：

![preview-example.png](./img/preview-example.png)

## 元标签

默认情况下，笔记标题将用作页面的元标签。

您可以通过指定笔记的属性来更改元标签。

```
---
pickly_title: 您自定义的 <meta property="og:title"> 和其他标签的标题。
pickly_description: 您自定义的 <meta name="description"> 和其他标签的描述。
---
```

页面的标题将始终与笔记的标题相匹配。

## 注意事项视频

> **视频将在 10-15 分钟内自动生成。发布后，在浏览器中打开您的页面，打开页面将启动视频创建过程。**

使用 [Viqeo和文章转视频播放器](https://viqeo.tv/article-to-video-player) 从您的笔记中创建视频。

示例：[https://pb.pickly.space/pages/article-to-video-example.html](https://pb.pickly.space/pages/article-to-video-example.html)

您需要：

1. 在 [Viqeo.tv](https://studio.viqeo.tv) 上创建一个帐户。
2. 添加文章转视频播放器
![img.png](./img/viqeo/first.png)
![img.png](./img/viqeo/second.png)
3. 自定义它

> **重要！将“元素的 CSS 选择器”字段设置为** `.container .cover`

![img.png](./img/viqeo/third.png)

1. 获取播放器的嵌入代码

![img.png](./img/viqeo/fourth.png)

1. 将选项添加到您的笔记属性中

```
pickly_ttv: yes
viqeo_player_id: 123
viqeo_profile_id: 321
```

`pickly_ttv` 字段表示您想从笔记中生成视频。它应始终等于 `yes`。

在 `viqeo_player_id` 字段中，输入嵌入代码中的播放器 ID，即 `data-playerId` 字段。

在 `viqeo_profile_id` 字段中，输入嵌入代码中的配置文件 ID，即 `data-profileId` 字段。

发布您的笔记并等待视频创建完成！

安装

该插件仍在等待批准。只能进行手动安装。

## 手动安装

1. 下载最新版本
2. 从压缩包中提取 `pickly-page-blend` 文件夹到你的 vault 的插件文件夹：<vault>/.obsidian/plugins/

   > 注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 MacOS 上，你可以按下 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。

3. 重新加载 Obsidian
4. 如果提示安全模式，你可以禁用安全模式并启用该插件。
MIT 许可证
支持

我在业余时间开发了这个项目。我在日常生活中使用这个插件，并且非常满意。对我来说，这是一段有趣的旅程，我希望我的工作也能给您带来好处。这个项目完全免费，将保持免费。然而，如果您决定对这个工作表示赞赏，我将非常感激。
