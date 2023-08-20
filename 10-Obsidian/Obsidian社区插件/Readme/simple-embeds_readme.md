---
uid: 2023080322265568
title: Obsidian 插件：【Readme】Simple Embeds
tags: ['转换工具', '界面相关', 'obsidian插件', 'readme']
description: 在预览文件时，将Twitter和YouTube链接替换为嵌入式内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Simple Embeds

> [!Note] 插件名片
> - 插件名称：Simple Embeds
> - 插件作者：Sam Warnick
> - 插件说明：在预览文件时，将 Twitter 和 YouTube 链接替换为嵌入式内容。
> - 插件分类：[' 转换工具 ', ' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/samwarnick/obsidian-simple-embeds)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?simple-embeds)

## 概述

在预览文件时，将 Twitter 和 YouTube 链接替换为嵌入式内容。

![Simple Embeds](https://cdn.pkmer.cn/covers/simple-embeds.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/samwarnick/obsidian-simple-embeds/main/README.md)
>

---

## Readme(翻译）

下面是 [[simple-embeds]] 插件的自述翻译

# 简单嵌入

这个 [Obsidian](https://obsidian.md) 插件会在文件预览时将 Twitter 和 YouTube 链接转换为嵌入内容，而不会改变文件的内容。甚至在悬停在内部链接上时也能工作。

只需像平常一样添加链接：

```md
[Twitter链接](https://twitter.com/johnvoorhees/status/1437735225086316548?s=21)
[YouTube链接](https://youtu.be/C4sAUc_ZGMY)
```

如果您想禁用特定的链接，请在链接文本中添加 `|noembed`。例如：

```md
[Twitter链接|noembed](https://twitter.com/johnvoorhees/status/1437735225086316548?s=21)
```

默认情况下，大多数嵌入内容的最大宽度为 550px（Twitter 嵌入内容的最大宽度）。要使嵌入内容全宽 [^1]，请在链接文本中添加 `|fullwidth`。例如：

```md
[YouTube链接|fullwidth](https://www.youtube.com/watch?v=aqafn8kFDyY)
```

## 支持的链接

- Apple Music[^2]
- Apple Podcasts
- Apple TV[^2]
- CodePen
- Flat.io
- Github Gists
- Instagram
- Noteflight
- Twitter
- YouTube

## 样式化

每个嵌入内容都被包裹在一个带有类名 `.embed-container` 的容器中，并且每个嵌入类型都有一个唯一的类名：

| 嵌入类型 | 类名 |
| ------------- | ------------- |
| Apple Music | `.apple-music` |
| Apple Podcasts | `.apple-podcasts` |
| Apple TV | `.apple-tv` |
| CodePen | `.codepen` |
| Flat.io | `.flat_io` |
| GitHub Gists | `.github_gist` |
| Instagram | `.instagram` |
| Noteflight | `.noteflight` |
| Twitter | `.twitter` |
| YouTube | `.youtube` |

你可以在自己的 [CSS 代码片段](https://help.obsidian.md/How+to/Add+custom+styles#Use+Themes+and+or+CSS+snippets) 中使用这些类名。例如，如果你想要使所有的 YouTube 嵌入内容宽度铺满整个容器，你可以添加以下代码：

```css
.embed-container.youtube {
    max-width: 100%;
} 
```

或者如果你想要将所有的 Twitter 嵌入内容居中显示：

```css
.embed-container.twitter {
    margin: 0 auto;
}
```

## 截图

![简单嵌入演示](https://raw.githubusercontent.com/samwarnick/obsidian-simple-embeds/main/screenshots/demo.gif)

_演示_

![iOS应用中的嵌入截图](https://raw.githubusercontent.com/samwarnick/obsidian-simple-embeds/main/screenshots/ios.png)

_iOS 应用_

![Android应用中的嵌入截图](https://raw.githubusercontent.com/samwarnick/obsidian-simple-embeds/main/screenshots/android.png)

_Android 应用_

[^1]: 许多主题在预览区域设置了最大宽度，通常约为 750 像素。嵌入内容不会超过主题允许的宽度。
[^2]: 部分支持。存在一些已知问题。