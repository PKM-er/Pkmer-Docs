---
uid: 2024022117290680
title: Obsidian 插件：【Readme】Lyrics
tags: ['obsidian插件', 'readme']
description: Enhance the audio player with interacive lyrics
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Lyrics

> [!Note] 插件名片
> - 插件名称：Lyrics
> - 插件作者：eatgrass
> - 插件说明：Enhance the audio player with interacive lyrics
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/eatgrass/obsidian-lyrics)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lyrics)

## 概述

Enhance the audio player with interacive lyrics



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/eatgrass/obsidian-lyrics/master/README.md)
> 

---

## Readme(翻译）

下面是 [[lyrics]] 插件的自述翻译

【机翻】
## 截图

![Screen Recording 2023-12-05 at 14 29 53](https://cdn.pkmer.cn/covers/lyrics_1_0.gif!pkmer)
## 描述

通过添加交互式歌词显示功能来增强您的音频播放器。  
现在您可以使用歌词来浏览播放器，获得更加引人入胜和有组织的听歌体验。  
它允许您无缝地查看您的音频笔记和亮点。
## 用法
### 基本

在 `lrc` 代码块中包含一个音频源和 [.lrc 格式](<https://en.wikipedia.org/wiki/LRC_(file_format)>) 歌词。  
您可以将音频文件的来源指定为文件路径或内部链接。

1. 使用内部链接作为音频源：

<pre>
```lrc
source [[audio_file.mp3]]
[00:01.00] 您的 .lrc 格式内容
[00:02.00] ....
```
</pre>

2. 使用文件路径作为音频源：

<pre>
```lrc
source path/to/your_audio_file.mp3
[00:01.00] 您的 .lrc 格式内容
[00:02.00] ....
```
</pre>
### 上下文菜单

在“阅读视图”中，右键单击歌词显示区域以使用上下文菜单。

- 播放/暂停音频播放器
- 切换自动滚动
- 切换句子模式
- 寻找
- 编辑
## 样式

通过利用下面提供的CSS类来自定义您自己的样式。
```html
<span class="lyrics-wrapper lyrics-highlighted" >
    <span data-lyid="35" data-time="538120" class="lyrics-timestamp">08:58</span>
    <span class="lyrics-text">
        歌词文本...
    </span >
</span>
```
-  `lyrics-wrapper`: 整个歌词行。
- `lyrics-timestamp`: 歌词的时间戳。
- `lyrics-text`: 歌词的文本内容。
- `lyrics-highlighted`: 标记当前高亮显示的歌词。

---

[![coffee](https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=%E2%98%95&slug=eatgrass&button_colour=FFDD00&font_colour=000000&font_family=Comic&outline_colour=000000&coffee_colour=ffffff)](https://www.buymeacoffee.com/eatgrass)



