---
uid: 2023120719403904
title: Obsidian 插件：【Readme】Podcast Note
tags: ['音频和视频', '模板', 'obsidian插件', 'readme']
description: Podcast Note可以自动将播客信息添加到您的笔记中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Podcast Note

> [!Note] 插件名片
> - 插件名称：Podcast Note
> - 插件作者：Marc Julian Schwarz
> - 插件说明：Podcast Note 可以自动将播客信息添加到您的笔记中。
> - 插件分类：[' 音频和视频 ', ' 模板 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/marcjulianschwarz/obsidian-podcast-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?podcast-note)

## 概述

Podcast Note 可以自动将播客信息添加到您的笔记中。

![Podcast Note](https://cdn.pkmer.cn/covers/podcast-note.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/marcjulianschwarz/obsidian-podcast-note/main/README.md)
>

---

## Readme(翻译）

下面是 [[podcast-note]] 插件的自述翻译

<p align="center">
<img width="180" src="https://user-images.githubusercontent.com/67844154/159135750-7bfb6623-ba92-4344-9426-8a43ed2de379.png">
</p>
播客笔记是一种很好的记录播客内容的方式。通过一个单一的URL，您可以获取播客的标题、图片和描述。使用自定义模板，您可以根据自己的喜好来设置笔记的样式。更多的设置和功能将在下面进一步解释。

如何使用它

您可以通过打开命令面板（cmd + p）并搜索“Podcast Note”命令来添加新的播客笔记：

### 添加播客笔记

将打开一个提示框，您可以在其中输入您想要记录笔记的播客的 URL。

当然，您也可以指定一个键盘快捷键来触发该提示框。

从选择中添加播客笔记

此命令仅在编辑模式下可见。

确保您选择的文本包含指向播客剧集的 Markdown 链接。运行该命令将为所选文本中的每个 URL 创建新的播客笔记。它还会自动链接这些笔记。

### 支持的播客服务

目前支持以下播客服务：

- Apple Podcast
- Spotify Podcast
- Google Podcast
- Pocket Casts
- Airr
- Overcast
- Castro
- Castbox
- Podcast Addict
- YouTube

## 演示

### 示例播客笔记

![播客笔记示例](https://cdn.pkmer.cn/covers/podcast-note_1_0.png!pkmer)

## 设置

### 1. 模板

在这里，您可以指定您的播客笔记的元数据的外观。

使用以下三个占位符：

- `{{Title}}` -> 播客的标题
- `{{ImageURL}}` -> 播客的图片 URL
- `{{Description}}` -> 简短的播客描述
- `{{ShowNotes}}` -> 播客节目笔记（仅适用于 PocketCasts 和 Castro）
- `{{EpisodeDate}}` -> 播客发布日期（仅适用于 PocketCasts）
- `{{PodcastURL}}` -> 播客的 URL
- `{{Date}}` -> 日期（格式：日 - 月 - 年）
- `{{Timestamp}}` -> 当前时间戳

---
tags: [播客]
date: {{日期}}
---

# {{标题}}

![]({{图片URL}})

## 描述

> {{描述}}
-> [播客链接]({{播客链接}})

## 注意事项

```
**将创建此笔记：**
<br><br>
<img width="900" alt="Podcast Note example editor" src="https://user-images.githubusercontent.com/67844154/132244681-e629ec06-a44a-4f8c-b9db-5a83576ad186.png">

### 2. 文件名模板
指定播客注释是插入在光标位置还是添加一个新的注释。
您还可以使用文件名模板。
占位符：
- `{{Title}}`       -> 您的播客标题
- `{{Timestamp}}`   -> 时间戳（类似于 Zettelkasten ID）
- `{{Date}}`        -> 日期（格式：日-月-年）

### 3. 文件夹
设置新的播客笔记保存的文件夹。路径是相对于您的保险库的。例如，`folder/podcast_folder` 将变成 `path/to/vault/folder/podcastfolder`。

### 4. 在光标处插入播客笔记
指定您是要创建一个新的笔记，还是要将元数据插入到光标处。

如果您有任何问题、反馈或功能请求，请告诉我并发送邮件至[marc-julian.de](https://www.marc-julian.de)，或在上创建一个新的问题。

未来版本将包括：
请参阅。

## 版本
"[]" 中的数字是与修复或功能相关联的问题编号。

*1.0.0*：
- 初始发布。

*1.1.1*：
- [#7, #8] 修复了错误（自定义文件夹未按预期工作，相同占位符的多个出现未能正常工作）
- [#2, #5] 新命令：*从选择中添加播客笔记*
    - 从选择中获取 markdown 链接
    - 创建播客笔记
    - 用指向播客笔记的链接替换 markdown 链接

*1.1.2*：
- [#12] *从选择中添加播客笔记* 现在可以使用纯链接
- 播客笔记现在在 Obsidian 移动版上可用

*1.2.0*：
- [#15] 现在可以在 YouTube 视频上添加笔记
- [#14] 支持节目笔记（PocketCasts 和 Castro）

*1.3.0*：
- [#18] 修复了移动设备上的 ImageURL 错误
- [#17] 添加使用 markdown 文件作为模板的选项



