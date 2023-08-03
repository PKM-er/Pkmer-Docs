---
uid: 20230803212849
title: Obsidian 插件：【Readme】Obsidian Enhancing Export
tags: ['obsidian插件', 'readme']
description: 一款基于Pandoc的Obsidian导出插件，它允许导出到Html、DOCX、ePub和PDF或Hugo等格式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Enhancing Export

> [!Note] 插件名片
> - 插件名称：Obsidian Enhancing Export
> - 插件作者：YISH
> - 插件说明：一款基于Pandoc的Obsidian导出插件，它允许导出到Html、DOCX、ePub和PDF或Hugo等格式。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mokeyish/obsidian-enhancing-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-enhancing-export)

## 概述

一款基于Pandoc的Obsidian导出插件，它允许导出到Html、DOCX、ePub和PDF或Hugo等格式。

![Obsidian Enhancing Export](https://cdn.pkmer.cn/covers/obsidian-enhancing-export.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mokeyish/obsidian-enhancing-export/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-enhancing-export]] 插件的自述翻译



# Obsidian增强导出插件

![GitHub发布（包括预发布）的最新版本](https://img.shields.io/github/v/release/mokeyish/obsidian-enhancing-export?display_name=tag&include_prereleases)
![Obsidian下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%27obsidian-enhancing-export%27%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

英文 | [中文](https://github.com/mokeyish/obsidian-enhancing-export/blob/master/README_zh-CN.md)

这是一个基于`Pandoc`的Obsidian增强导出插件（[https://obsidian.md/](https://obsidian.md/)）。它允许您导出为`Markdown`、`Markdown (Hugo)`、`HTML`、`docx`、`Latex`等格式。

其中，`Markdown`、`Markdown (Hugo)`、`HTML`将导出其媒体资源。

**注意：** `Markdown`、`Markdown (Hugo)`、`HTML`在Mac OS、Windows和Linux上进行了测试，因为我自己使用过，其他格式没有经过充分测试。

**广告：** 您可能会喜欢我的其他插件 🤪
- [Obsidian代码发射器](https://github.com/mokeyish/obsidian-code-emitter)

## 屏幕截图

- 导出视图，点击文件菜单上的`导出到...`。

  ![](https://raw.githubusercontent.com/mokeyish/obsidian-enhancing-export/master/screenshot/exportview_en-US.png)
- 设置视图

  ![](https://raw.githubusercontent.com/mokeyish/obsidian-enhancing-export/master/screenshot/settingview_en-US.png)

## 安装

1. 首先安装最新的 `pandoc`（2.19+），然后将 `pandoc` 路径添加到环境变量 `PATH` 中，或在插件设置视图中设置 `pandoc` 的绝对路径。

   更多详细信息请参阅 [https://pandoc.org/installing.html](https://pandoc.org/installing.html)。

2. 在 Obsidian 的社区插件中搜索 `obsidian-enhancing-export`，并进行安装。

您可以自定义导出命令，点击插件设置视图中的“添加”，然后选择模板“自定义”来添加新的自定义配置。

## 变量

您可以在自定义导出命令中使用`${variables}`，它们的值如下：

| 键值                      | 值                                                           |
| ------------------------- | ------------------------------------------------------------ |
| `${outputPath}`           | 导出后的输出文件路径。例如，如果您导出到位置`/User/aaa/Documents/test.pdf`，那么`${outputDir}`将替换该路径。 |
| `${outputDir}`            | 保存导出文件的输出目录，在上述情况下为`/User/aaa/Documents`。   |
| `${outputFileName}`       | 保存导出文件的文件名（不包括扩展名），在上述情况下为`test`。   |
| `${outputFileFullName}`   | 保存导出文件的文件名（包括扩展名），在上述情况下为`test.pdf`。 |
| `${currentPath}`          | 当前编辑文件的路径。例如，如果您正在编辑`/User/aaa/Documents/readme.md`，则该值将为`/User/aaa/Documents/readme.md`。 |
| `${currentDir}`           | 当前编辑文件的目录，在上述情况下为`/User/aaa/Documents`。       |
| `${currentFileName}`      | 当前编辑文件的文件名（不包括扩展名），在上述情况下为`readme`。 |
| `${currentFileFullName}`  | 当前编辑文件的文件名（包括扩展名），在上述情况下为`readme.md`。 |
| `${vaultDir}`             | Obsidian当前的vaultDir。                                     |
| `${attachmentFolderPath}` | Obsidian的`attachmentFolderPath`。                            |
| 其他变量                  | 您可以在[YAML Front Matter](https://jekyllrb.com/docs/front-matter/)中使用`keyword: value`，然后使用`${metadata.keyword}`。 |

## 相关资源

- **教程**: [Obsidian学术写作教程](https://betterhumans.pub/obsidian-tutorial-for-academic-writing-87b038060522) - 介绍如何设置和使用此插件进行学术写作（导出为`.docx`、`.pdf`、`.tex`、`.bib`格式）
- **Pandoc的一系列lua过滤器**: [https://github.com/pandoc-ext](https://github.com/pandoc-ext) - 过滤器和其他工具，以充分利用pandoc，这个通用的文档转换器。
- **数学LaTeX编辑器**: [https://math.yish.org/](https://math.yish.org/)

## 最后

- 欢迎提供更多的命令模板到[这里](src/export_templates.ts)。
- 如有任何问题，请随时提交问题。



