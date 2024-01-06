---
uid: 20231229235957
title: Lyrics 插件样式 - 音乐播放界面美化
tags: [Obsidian, css, 美化, Lyrics, 音乐]
description: 美化 Lyrics 插件的歌词界面
author: ProudBenzene
type: advanced
draft: false
editable: false
modified: 20240103230809
---

# Lyrics 插件样式 - 音乐播放界面美化

## 引言

[[Lyrics|Obsidian Lyrics]] 插件可以将 Obsidian 变成一个带有滚动歌词的音乐播放器，美中不足是默认样式外观较为一般，遂根据插件作者的指引进行一些自定义美化设置。

## 代码

```css
body {
    --font-lyrics: Bookerly, 方正聚珍新仿简繁;
}

body.colorful-link-animation :is(.markdown-preview-view,.markdown-rendered) .lyrics-line .lyrics-timestamp:hover {
    animation: 2s colorful-link infinite;
    cursor: pointer;
}

@keyframes colorful-link {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

.lyrics-line p {
    font-family: var(--font-lyrics) !important;
    font-weight: bold;
}

.lyrics-highlighted .lyrics-text {
    color: purple;
    background: linear-gradient(45deg,#FD8A8A 0%,#FFBF9B 11%,#FFDD83 22%,#DFFFD8 33%,#B4E4FF 44%,#ADA2FF 55%);;
    border-radius: 5px;
}

```

> [!note] 美化
> 1. 增加了歌词字体自定义选项
> 2. 鼠标悬浮在时间戳上时时间戳会呈彩色变换
> 3. 彩虹色歌词高亮

## 效果展示

![](https://cdn.pkmer.cn/images/202312300105522.gif!pkmer)