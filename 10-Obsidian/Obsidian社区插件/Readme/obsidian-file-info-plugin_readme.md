---
uid: 20230817224054
title: Obsidian 插件：File Info Panel
tags: ['文件管理', '效率', 'obsidian插件', 'readme']
description: 文件信息视图，显示活动文件的创建日期、修改日期、文件大小以及在其本机应用程序中打开文件和打开文件文件夹的链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：File Info Panel

> [!Note] 插件名片
> - 插件名称：File Info Panel
> - 插件作者：CattailNu
> - 插件说明：文件信息视图，显示活动文件的创建日期、修改日期、文件大小以及在其本机应用程序中打开文件和打开文件文件夹的链接。
> - 插件分类：[' 文件管理 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/CattailNu/obsidian-file-info-panel-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-file-info-plugin)

## 概述

文件信息视图，显示活动文件的创建日期、修改日期、文件大小以及在其本机应用程序中打开文件和打开文件文件夹的链接。

![File Info Panel](https://cdn.pkmer.cn/covers/obsidian-file-info-plugin.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/CattailNu/obsidian-file-info-panel-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-file-info-plugin]] 插件的自述翻译

# obsidian-file-info-panel-plugin

这个插件为 [Obsidian](https://obsidian.md/) 创建了一个文件信息视图，显示活动文件的创建日期、修改日期、文件大小，并提供打开文件所在应用程序和打开文件所在文件夹的链接。它还具有写作统计（字符、单词、句子和段落计数）和词频分析功能。

使用方法

在设置菜单中启用插件后，您应该会看到信息按钮出现在左侧导航面板中。这将切换文件信息面板的视图。

文件信息面板设置允许您设置显示哪些文件信息。

## 特点

- 单击文件名以在其原生应用程序中打开文件。
- 单击文件夹名以打开文件所在位置。
- 不显眼的文本与当前安装的主题相匹配。
- 文件大小以人类可读的格式显示（包括字节、KB、MB、GB 等）。
- 图像文件显示图像的宽度和高度。
- 日期包括人类可读的“从现在开始”的文本。示例：

> 周一，2021 年 11 月 22 日 下午 7:59
>
> 21 天前

- 写作统计：
	- 字符、单词、句子和段落计数。
	- 所选文本的字符、单词、句子和段落计数。
	- 根据您提供的每页字数估计的页数。
	- 单词频率分析。可选择根据您提供的正则表达式拆分为两个列表。
	- URL 和文件名可以与单词计数分开。

兼容性

`obsidian-file-info-panel-plugin` 已在 Mac 和 Windows 11 上进行了测试，Obsidian v0.12.19 版本。移动版本似乎也可以正常工作。

## 设置

- **显示创建日期**：显示文件创建的日期和时间。
- **显示修改日期**：显示文件上次修改的日期和时间。
- **显示文件大小**：显示可读的文件大小。
- **显示文件**：将文件名显示为打开文件的链接。
- **显示文件夹**：将文件所在文件夹显示为打开该文件夹的链接。
- **显示文件夹相对路径**：显示文件相对于存储库的位置，而不是完整路径。
- **显示字符计数**：显示 md 和 txt 文件的字符计数。
- **显示单词计数**：显示 md 和 txt 文件的单词计数。
- **显示句子计数**：显示 md 和 txt 文件的句子计数。
- **显示段落数量**：显示 md 和 txt 文件的段落数量。不包括空行。
- **显示页面数量估计**：显示 md 和 txt 文件的句子计数。
- **每页单词数**：输入估计的每页单词数，用于计算页面数量。
- **显示单词频率报告**：显示按照使用频率排序的唯一单词列表。
- **筛选单词频率报告**：使用提供的正则表达式将报告分为两个列表。
- **筛选正则表达式**：自定义从主报告中分离出的单词。[正则表达式帮助](https://cattail.nu/obsidian/filePluginRegexHelper.html)
- **显示筛选后的单词**：显示通过上述正则表达式筛选的单词。
- **显示 URL 和文件频率报告**：显示提及的 URL 和文件。
- **从单词频率报告和单词计数中排除 URL 和文件**：从单词计数解析器中排除 URL 和文件。不适用于字符、句子、段落或页面。
- **显示所选文本的字符计数**：显示所选文本的字符计数。
- **显示所选文本的单词计数**：显示所选文本的单词计数。
- **显示所选文本的句子计数**：显示所选文本的句子计数。
- **显示所选文本的段落计数**：显示所选文本的段落计数。不包括空行。

## 截图

<img src="https://cattail.nu/obsidian/screenshot_110.png" alt="文件信息面板信息视图" height="400">
*截图未显示URL/文件排除报告。

[放大上图](https://cattail.nu/obsidian/screenshot_110.png)

<img src="https://cattail.nu/obsidian/sidebar_icon_screenshot.png" alt="文件信息面板信息按钮" width="200">

<img src="https://cattail.nu/obsidian/setting01_120.png" alt="文件信息面板信息设置1/4" width="400">
<img src="https://cattail.nu/obsidian/setting02_110.png" alt="文件信息面板信息设置2/4" width="400">
<img src="https://cattail.nu/obsidian/setting03_120.png" alt="文件信息面板信息设置3/4" width="400">
... URL/文件名报告和排除选项...
<img src="https://cattail.nu/obsidian/setting04_110.png" alt="文件信息面板信息设置4/4" width="400">

## 自定义

以下 CSS 变量可以在您的 `obsidian.css` 文件中进行覆盖。

请参阅 CSS 注释中的日期/文件/文件夹包装的注意事项。

```css
/* obsidian-file-info-panel-plugin */
/* https://github.com/CattailNu/obsidian-file-info-panel-plugin


20230112 更新以修复破损的按钮样式

 */

/* 所有其他表格 */
.tlfFileInfoTable {
	display: table;
	border: none;
	margin: 0em;
	padding: 0em;
}

/* 单词过滤器报告列表，文件打开/文件夹打开按钮 */
.tlfFileInfoTable100 {
	display: table;
	border: none;
	margin: 0em;
	padding: 0em;
	width: 100%;
}


.tlfFileInfoRow {
	display: table-row;
	border: none;
	margin: 0em;
	margin-bottom: 0.3em;
	padding: 0em;
}


.tlfFileInfoCell {
	display: table-cell;
	border: none;
	margin: 0px;
	margin-left: 0.5em;
	padding: 0em;
	text-align: left;
	white-space: nowrap;
}

/* 应用于单词/URL脚注 */
.tlfFileInfoParagraph {
	display: table-cell;
	border: none;
	margin: 0px;
	margin-left: 0.5em;
	margin-right: 0.5em;
	padding: 0em;
	text-align: left;
	white-space: normal;
	word-break: break-word;
}


.tlfFileInfoLabel {
	border: none;
	margin: 0px;
	margin-right: 0.3em;
	padding: 0.3em;
	font-size: 0.7em;
	color: var(--text-muted);
}

/*
	要自动换行日期文本，
	请将tlfFileInfoValue中的"white-space: nowrap;"替换为:
	white-space: normal;
	word-break: break-word;
*/

.tlfFileInfoValue {
	border: none;
	margin: 0px;
	padding: 0em;
	padding-left: 2em;
	padding-top: 0.3em;
	padding-bottom: 0.3em;
	font-size: 0.7em;
	font-weight: bold;
	height: auto;
	white-space: nowrap;
}

.tlfFileInfoValueNumber {
	border: none;
	margin: 0px;
	padding: 0em;
	padding-left: 3em;
	font-weight: bold;
	font-size: 0.7em;
	text-align: right;
}

.tlfFileInfoCellButton {
	display: table-cell;
	border: none;
	margin: 0px;
	padding: 0.3em;
	text-align: left;
	margin-left: 0.5em;
	padding: 0em;
}

/*
	要自动换行文件名/文件夹名中的文本，
	请将tlfFileInfoButton中的"white-space: nowrap;"替换为:
	white-space: normal;
	word-break: break-all;
*/

.tlfFileInfoButton {
	border: none;
	margin: 0px;
	margin-bottom:0.3em;
	margin-top:0.3em;
	padding: 0px;
	text-align: left;
	font-size: 0.7em;
	background:none;
	color: var(--text-muted);
	height: 2em;
	width:100%;
	max-width:100%;
	height:auto;
	white-space: nowrap;
}

.tlfFileInfoButton:Hover {
	font-weight: bold;
}

.tlfFileInfoTextArea {
	margin: 0px;
	padding: 0.3em;
	font-size: 0.7em;
	color: var(--text-muted);
	line-height: 1.2;
	width: 100%;
	height: 8em;
}

```

<img src="https://cattail.nu/obsidian/css_customization_variables.png" alt="文件信息面板CSS自定义变量" width="400">

说声谢谢🙏

考虑阅读并分享我的一本书（可通过亚马逊购买）。这些书包括奇幻、科幻、艺术创意、非虚构和惊悚等类型。请分享它们的链接。说真的，作为一个独立出版的作者，我真的需要你们的帮助来传播我的作品。成为一个独立出版的作者是具有挑战性的。

[https://www.amazon.com/T.-L.-Ford/e/B0034Q6Q2S](https://www.amazon.com/T.-L.-Ford/e/B0034Q6Q2S)

你还可以在我的个人网站上找到大量免费内容和写作/艺术工具。

[https://www.Cattail.Nu](https://www.Cattail.Nu)

特别推荐：制作自己的梦网图形：

[http://www.cattail.nu/journal_tools/page_dreamcatcher_art.html](http://www.cattail.nu/journal_tools/page_dreamcatcher_art.html)

## 更新日志

感谢那些在 GitHub 上提交问题的人。你们的反馈非常有帮助！

### 1.3

- 新增功能：将 URL 与单词计数和单词频率报告分开。（问题＃9）
- 新增功能：为热键打开和关闭项目。（问题＃10）
- 新增功能：显示图像的宽度/高度。（问题＃11）
- 修复错误：更新了用于破坏旧 CSS 的新版本的 CSS。（问题＃12）

### 1.2.5

- 修复了一个错误（问题＃8）。

### 1.2.4

- 移动版本正常工作。
- 选定文本计数再次正常工作（在新版本的 Obsidian 中出现故障）。
- 优化。
- 可能的错误修复。

### 1.2.1

- 在设置中删除了对计时器的引用，因为它不再使用。
- 当没有文件时，更改为显示“没有文件。”
- 修复了在 Obsidian 中打开保险库文件夹时，将文件拖出时的显示错误。
- 将所有设置默认设置为打开状态。

### 1.2.0

- 添加了设置选项以更改日期显示格式。
- 更新了视图/ CSS，以便更好地进行微调，特别是能够为文件/文件夹名称和过滤列表换行。
- 添加了设置选项，以相对于保险库显示文件夹路径。
- 调整了词频文本框的显示。
- 添加了设置选项以显示/隐藏过滤的单词。
- 将选定的文本算法从计时器更改为事件，提高了响应性。
- 更改了文档路径代码，以尝试修复 Android 问题。

### 1.1.0

添加了文档统计功能。

- 字符数统计
- 单词数统计
- 句子数统计
- 段落数统计
- 估计的页数
- 使用正则表达式过滤的单词频率报告
- 选定字符数统计
- 选定单词数统计
- 选定句子数统计

### 1.0.1

初始版本：文件名链接，修改日期，创建日期，完整文件夹路径链接。
