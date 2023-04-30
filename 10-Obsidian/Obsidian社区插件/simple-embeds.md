---
uid: 20230430090320
title: Obsidian 插件：Simple Embeds 为链接
description: 
author: 
type: other
draft: false
editable: false
modified: 20230430101943
---

# Obsidian 插件：Simple Embeds 为链接

## 概述

这个插件将把 Twitter 和 YouTube 网页链接嵌入当前笔记中预览，而不改变你的笔记内容。甚至工作时，悬停在内部链接。

> [!Note] 插件名片
> - 插件名称：Simple Embeds
> - 插件作者：Sam Warnick
> - 插件说明：把 Twitter 和 YouTube 网页链接嵌入当前笔记中预览
> - 插件项目地址：[点我跳转](https://github.com/samwarnick/obsidian-simple-embeds)

>[!Tip] 提示
>- 如果你其他视频网站有兴趣，或者希望做视频笔记，使用时间戳等，可以参考这个插件。[[media-extended]] 和 [[mx-bili-plugin]]

## 效果&特性

![](https://cdn.pkmer.cn/images/GIF%202023-4-30%2010-18-34.gif)

支持以下网站的链接预览化：

- Apple Music
- Apple Podcasts
- Apple TV
- CodePen
- Flat.io
- Github Gists
- Instagram
- Noteflight
- Twitter
- YouTube

## 使用

只需像平常一样添加链接：

`[Twitter链接](https://twitter.com/johnvoorhees/status/1437735225086316548?s=21)`

`[YouTube链接](https://youtu.be/C4sAUc_ZGMY) `

如果您想禁用特定的链接预览，请在链接文本后添加 ` |noembed`。例如：

`[Twitter链接|noembed](https://twitter.com/johnvoorhees/status/1437735225086316548?s=21) `

默认情况下，大多数嵌入式内容最大宽度为 550 像素（Twitter 嵌入式内容的最大宽度）。要使嵌入式内容全宽，可以在链接文本后添加 `|fullwidth`。例如：

`[YouTube链接|fullwidth](https://www.youtube.com/watch?v=aqafn8kFDyY)`

## 高级样式微调

每个嵌入式内容都包装在一个容器中，该容器的类名为 .embed-container，并且每种嵌入式内容类型都有唯一的类名。

| Embed          | Class           |
| -------------- | --------------- |
| Apple Music    | .apple-music    |
| Apple Podcasts | .apple-podcasts |
| Apple TV       | .apple-tv       |
| CodePen        | .codepen        |
| Flat.io        | .flat_io        |
| GitHub Gists   | .github_gist    |
| Instagram      | .instagram      |
| Noteflight     | .noteflight     |
| Twitter        | .twitter        |
| YouTube        | .youtube        |

您可以在自己的 CSS 代码片段中使用这些类名。例如，如果您想将所有 YouTube 嵌入式内容设为全宽，可以添加以下代码：

```CSS
.embed-container.youtube {
    max-width: 100%;
}
```

或者如果你想居中所有的 Twitter 嵌入

```CSS
.embed-container.twitter {
    margin: 0 auto;
}
```