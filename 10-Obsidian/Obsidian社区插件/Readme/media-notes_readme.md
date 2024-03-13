---
uid: 2024031219321499
title: Obsidian 插件：【Readme】Media Notes
tags: ['obsidian插件', 'readme']
description: 在YouTube视频和播客上做笔记，带有媒体控件和时间戳。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Media Notes

> [!Note] 插件名片
> - 插件名称：Media Notes
> - 插件作者：jemstelos
> - 插件说明：在 YouTube 视频和播客上做笔记，带有媒体控件和时间戳。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jemstelos/obsidian-media-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?media-notes)

## 概述

在 YouTube 视频和播客上做笔记，带有媒体控件和时间戳。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jemstelos/obsidian-media-notes/main/README.md)

---

## Readme(翻译）

下面是 [[media-notes]] 插件的自述翻译

# 黑曜石媒体笔记

该插件旨在为音频和视频笔记提供最佳体验。

捕捉并重播来自 YouTube 视频、播客和讲座的见解，集成到您的个人知识库中。

- **媒体控制热键** - 在不中断您的笔记流程的情况下暂停和快进/快退
- **嵌入式时间戳** - 插入可点击的时间戳链接，以跳转回关键时刻
- **恢复播放** - 稍后回来，从您离开的地方继续
- **专注学习环境** - 在您的知识环绕下进行视频笔记，而不是内容源

<img src="images/screen-shot.png">

## 安装

这是一个为 Obsidian 社区开发的插件。在社区插件库中搜索“Media Notes”以找到此插件并添加。阅读有关如何使用 Obsidian 插件的更多信息，请点击 [这里](https://help.obsidian.md/Extending+Obsidian/Community+plugins)。

## 文档

媒体笔记只是一个带有包含支持的 URL 格式（例如 YouTube 链接）的 `media_link` [属性](https://help.obsidian.md/Editing+and+formatting/Properties) 的 Markdown 笔记。

```
---
  media_link: https://www.youtube.com/watch?v=MFXWY8TqSWw
---

[02:01]() - 一个有用的见解，与我认为[[连接是创造力的关键。]]相关联
```

媒体笔记在笔记窗格中显示一个嵌入式播放器，因此在查看播放器时可以滚动笔记内容。

时间戳以时间戳格式插入到笔记中作为 Markdown 链接：

`[3:05:53]()`

点击具有时间戳格式（`HH:MM:SS`）的链接将使笔记的媒体播放器跳转到该时间戳的播放时间。

## 用法

### 创建媒体注释

将笔记转换为媒体注释的最简单方法是使用“添加文件属性”命令，然后输入 `media_link` 并粘贴您的 URL：

更高级的用户可能希望为媒体注释创建一个 Templater 模板，提示输入 meda_link URL。

### 浏览器书签工具 - 从 YouTube 创建媒体笔记

为了在浏览器中从 YouTube 页面创建媒体笔记的流畅工作流程，您可以使用一个书签工具。

书签工具是一个在浏览器中运行 JavaScript 代码片段的书签。在这种情况下，它获取当前 YouTube 页面的 URL 和标题，并为 Obsidian 的 [创建笔记端点](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI#Create%20note) 构建一个 URI 链接。创建的笔记中插入了媒体链接，并在笔记标题中包含了视频页面的标题。

设置说明可以在 [这里](https://obsidian-media-notes.netlify.app/) 找到。

### 媒体控制

这个插件的主要好处之一是可以将热键分配给媒体控制，这样您就可以在不离开笔记的情况下控制您正在记录笔记的内容的播放。媒体控制可以通过热键设置页面绑定到您喜欢的任何热键上。

为 Mac 用户建议的热键，与 YouTube 的热键布局相同：

⌃J - 后退

⌃K - 播放/暂停

⌃L - 前进

⌃I - 插入时间戳

### 插入和使用时间戳

时间戳可以使用“插入时间戳”命令插入，可以将其绑定到热键，以便无缝捕捉重要片段。偏移量是可配置的，因为通常您希望在过去几秒钟提出的观点上做笔记。

单击具有时间戳格式（`HH:MM:SS`）的链接将使笔记的媒体播放器的播放时间跳转到该时间戳。

## 设置

为了定制查看和记笔记的体验，提供了许多设置选项，包括：

- 垂直/水平播放器模式 - 这将设置默认的查看行为，您仍然可以为任何给定的笔记切换模式
- 播放器大小
- 进度条可见性 + 颜色
- 时间戳偏移 - 通常您希望在过去几秒钟内做出注释
- 时间戳模板 - 您可能希望在末尾或开头插入带有空格的时间戳，具体取决于您的工作流程

## 路线图

- [ ] 支持使用键盘快捷键跳转到时间戳链接（例如 alt+enter）
- [ ] 支持通过 <https://github.com/mrjackphil/obsidian-jump-to-link> 跳转到时间戳链接
- [ ] 拖动调整媒体播放器框架大小
- [ ] 快捷键切换焦点到视频并使用 YouTube 快捷键

如果您想提供反馈或改进建议，请使用此 [表格](https://forms.gle/6DK61u5XMfAKwwwp9)

## 支持

如果您从这个插件中获得了价值，并希望支持我的工作，请考虑捐赠！
