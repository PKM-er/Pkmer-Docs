---
uid: 2024042221323037
title: Obsidian 插件：【Readme】Misskey Connector
tags: ['obsidian插件', 'readme']
description: 启用发布和嵌入Misskey笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Misskey Connector

> [!Note] 插件名片
> - 插件名称：Misskey Connector
> - 插件作者：minimarimo3
> - 插件说明：启用发布和嵌入 Misskey 笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/minimarimo3/Obsidian-plugin-for-Misskey)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?misskey-connector)

## 概述

启用发布和嵌入 Misskey 笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/minimarimo3/Obsidian-plugin-for-Misskey/master/README.md)

---

## Readme(翻译）

下面是 [[misskey-connector]] 插件的自述翻译

# 为 Misskey 开发的 Obsidian 插件

[日本語はこちら](https://github.com/minimarimo3/Obsidian-plugin-for-Misskey/blob/master/documents/ja-JP/README.md)

## 特点

添加了在引用格式中嵌入一个 Misskey 笔记的命令 `Embed a Misskey note` 以及将当前行发布到 Misskey 的命令 `Post the current line to Misskey`。

※ 使用这些功能需要一个 Misskey 账户。

发布命令支持标记、限制上传文件以及在上传过程中对文件名进行匿名化等选项。它可以与日语和机器翻译的英语一起使用。

## 初始设置

1. 打开设置，并从社区插件中选择“Misskey Connector”。
2. 在“域”中输入您账户的域名。（例如，对于<<https://misskey.io/>@minimarimo3>，请输入 misskey.io。）
![初始设置屏幕](./documents/en-US/Initial%20Setup.png)
3. 在底部点击“生成访问令牌”按钮。浏览器将打开一个类似于图像中显示的屏幕，请立即点击“允许”。
![MiAuth认证](./documents/en-US/MiAuth.png)
Q: 这是什么？为什么需要这样做？
A: 这是 [Misskey提供的认证方法MiAuth](https://misskey-hub.net/ja/docs/for-developers/api/token/miauth/)。在这种情况下，它请求“创建和删除笔记”以及“操作驱动器”的权限。操作驱动器对于上传媒体是必要的。
4. 一旦您点击“允许”，初始设置就完成了。

## 如何使用

### `嵌入一个Misskey笔记`

将 Misskey 笔记的 URL 粘贴到 Obsidian 中，并在包含 URL 的行上执行 `嵌入一个Misskey笔记` 命令。

![嵌入一个Misskey笔记](./documents/en-US/Embed%20a%20Misskey%20note.gif)

可用的设置如下：

- 嵌入格式的更改
  - 该插件使用 HTML 来嵌入图片和视频。可以在设置中切换为 Markdown 格式。

### `将当前行发布到Misskey`

在您希望发布到 Misskey 的文本所在的行上执行 `将当前行发布到Misskey` 命令。如果同一行上有媒体文件，如图片或视频，它们也将被附加并发布。

![将当前行发布到Misskey](./documents/en-US/Post%20the%20current%20line%20to%20Misskey.gif)

以下设置可用：

- 在帖子内容之前和之后插入文本
  - 您可以在帖子内容之前和之后插入任何文本。例如，这可以用于标记。
- 匿名化文件名
  - 通常，在发布文件时，本地文件名会原样在 Misskey 上使用。打开此选项将保持本地文件名不变，但将在 Misskey 上显示的文件名更改为发布时的时间。
- 调整可见范围
  - 您可以从公开、主页、关注者中选择可见范围。不支持直接可见。
- 设置允许上传的文件扩展名
  - 您可以指定只有具有特定扩展名的文件才能上传。

## 许可证

该项目使用 [i18next](https://www.i18next.com)，该项目在 MIT 许可下可用。有关更多详细信息，请参阅 [i18next 许可信息](https://github.com/i18next/i18next)。

该项目根据 MIT 许可获得许可 - 有关详细信息，请参阅 [LICENSE.md](./LICENSE) 文件。

## 联系

对于功能请求或错误报告，请通过 GitHub、[@minimarimo3@misskey.io](https://misskey.io/@minimarimo3) 或 [Google表格](https://forms.gle/K4EecLTgpERZRrbq5) 与我们联系。
