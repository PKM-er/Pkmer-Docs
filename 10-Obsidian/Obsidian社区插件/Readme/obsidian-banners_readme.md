---
uid: 20230803203526
title: Obsidian 插件：【Readme】Banners
tags: ['编辑工具', '模板', '图片', '美化', 'obsidian插件', 'readme']
description: 为 Obsidian 添加笔记顶部横幅图（banner）的能力，也能增加横幅图标。
author: Danny Hernandez
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Banners

> [!Note] 插件名片
> - 插件名称：Banners
> - 插件作者：Danny Hernandez
> - 插件说明：为 Obsidian 添加笔记顶部横幅图（banner）的能力，也能增加横幅图标。
> - 插件分类：['编辑工具', '模板', '图片', '美化', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/noatpad/obsidian-banners)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-banners)

## 概述

为 Obsidian 添加笔记顶部横幅图（banner）的能力，也能增加横幅图标。

![Banners](https://cdn.pkmer.cn/covers/obsidian-banners.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/noatpad/obsidian-banners/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-banners]] 插件的自述翻译


# 横幅
一个[Obsidian](https://obsidian.md/)插件，可以为您的笔记添加横幅图片（和图标）！

![banners-demo](https://raw.githubusercontent.com/noatpad/obsidian-banners/master/images/banners.gif)

使用方法
在打开的笔记中，您可以使用“添加/更改本地图像横幅”命令选择本地图像作为笔记的横幅；或者您可以复制图像URL并运行“从剪贴板粘贴横幅”命令将URL粘贴为横幅图像。您还可以拖动横幅图像以重新定位图像，以及使用“锁定/解锁横幅位置”命令来“锁定”横幅的位置，反之亦然。

如果您想要删除横幅，可以运行“删除横幅”命令来完成。

您还可以使用“添加/更改表情符号图标”并选择您喜欢的表情符号来添加横幅图标。您还可以通过在预览中单击图标来更改现有的表情符号。

类似地，您可以使用“删除图标”命令来删除图标。

高级
在幕后，此插件使用文件的YAML前置元数据来存储有关您的横幅的信息。因此，您也可以手动输入它或使用其他插件来为您输入它。到目前为止，您可以使用以下字段（使用默认的前置元数据字段前缀）：

您的横幅图片的源路径，可以是一个URL或者是指向图片的内部链接。

"banner": "string"

# 横幅的中心位置。一个介于0-1之间的数字
banner_x: number
banner_y: number

# 确定横幅是否被锁定在原位
横幅锁定: 布尔值

# 横幅图标。可以是表情符号或任何字符串（但只会接受第一个字母）
banner_icon: string

## 设置

### 横幅
- **横幅高度**：指定每个笔记的横幅图像应该有多高。
- **横幅样式**：更改笔记中横幅的外观。目前有两个选项：
  - *实心*：简单的、尖锐容器的横幅图像。
  - *渐变*：一个渐变为透明的横幅，灵感来自于[这个论坛帖子](https://forum.obsidian.md/t/header-images-with-css/18917)。

| 实心 | 渐变 |
| --- | --- |
| ![实心样式](https://raw.githubusercontent.com/noatpad/obsidian-banners/master/images/solid.png) | ![渐变样式](https://raw.githubusercontent.com/noatpad/obsidian-banners/master/images/gradient.png) |

- **在内部嵌入中显示横幅**：选择是否在文件内部嵌入中显示横幅。
- **内部嵌入中的横幅高度预览**：如果打开了**在内部嵌入中显示横幅**，此设置确定嵌入中的横幅图像应该有多高。

![内嵌](https://raw.githubusercontent.com/noatpad/obsidian-banners/master/images/inception.png)

- **在预览嵌入中显示横幅**：选择是否在*页面预览*插件的预览嵌入中显示横幅。
- **预览嵌入中的横幅高度**：如果打开了**在预览嵌入中显示横幅**，此设置确定嵌入中的横幅图像应该有多高。

![嵌入](https://raw.githubusercontent.com/noatpad/obsidian-banners/master/images/embed.png)

- **Frontmatter字段名称**：如果设置了，使用可自定义的Frontmatter字段来使用横幅数据。例如，默认值`banner`将使用字段`banner_x`、`banner_y`等。
- **横幅拖动修饰键**：设置必须使用的修饰键来拖动横幅。例如，将其设置为*Shift*意味着您必须使用Shift来拖动它。这可以避免意外的横幅移动。

### 横幅图标
- **水平对齐**: 在笔记的边界内水平对齐图标。如果设置为*自定义*，您可以输入相对于笔记左边界的自定义偏移量。这可以是任何有效的[CSS长度值](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)。
- **垂直对齐**: 相对于横幅的底部边缘，垂直对齐图标（如果存在横幅）。如果设置为*自定义*，您可以输入相对于横幅下边缘中心的自定义偏移量（如果有的话）。这也可以是任何有效的[CSS长度值](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)。
- **使用 Twemoji**: 如果设置，将使用 Twemoji（Twitter 的表情符号集）而不是设备上的默认表情符号。默认情况下，此选项已启用，因为使用 Twemoji 可以获得更好的表情符号支持。

### 本地图片模态框
- **显示预览图片**：启用此选项，可以在模态框中搜索时看到预览图片。
- **建议限制**：限制模态框一次显示的建议数量。
  - ***注意：**如果将此设置为一个较大的数字，并且同时启用了**显示预览图片**，可能会在搜索时出现一些减速。*
- **横幅文件夹**：指定一个文件夹，仅在模态框中搜索图像文件。如果未设置，模态框将默认搜索整个存储库。

### 实验性功能
- **允许移动拖动**：选择是否可以通过拖动来调整移动设备上的横幅位置。
  - ***注意：**由于与移动应用程序已经内置的触摸手势有些冲突，此设置是实验性的。*

兼容性
该插件已在0.12.12及更高版本的桌面端进行了测试（先前是MacOS，目前是Windows），并在1.0.4及更高版本的移动端（iOS）上进行了测试。它可能在旧版本上也能正常工作，但请注意。

## 安装
- **从社区插件选项卡中安装**：
	- 在Obsidian中，在社区插件浏览器中搜索Banners并直接安装
- **手动安装**：
  - 前往最新版本发布页面[这里](https://github.com/noatpad/obsidian-banners/releases/latest)，并下载列在那里的文件（`main.js`，`styles.css`和`manifest.json`）
  - 前往您的存储库的插件文件夹（`<vault>/.obsidian/plugins`），创建一个名为`obsidian-banners`的文件夹，并将文件移动到其中。
  - 重新加载Obsidian，并在设置->社区插件中启用插件。

常见问题解答

这个插件使用frontmatter来存储有关笔记横幅的数据，例如其位置等。您可以使用的字段在[这里](https://github.com/noatpad/obsidian-banners#advanced)列出，并且可以使用“Frontmatter字段名称”设置自定义前缀。

这与其他插件不兼容吗？
有一些情况，但这取决于具体情况。由于其功能方式，任何与横幅样式冲突的插件可能会引起问题。这是相对情境性的，但我计划在未来解决一些与这些冲突相关的样式修复问题。

目前有一些插件被报告与横幅存在冲突：
- [ ] [Breadcrumbs](https://github.com/SkepticMystic/breadcrumbs)
- [x] [Obsidian Code Block Copy](https://github.com/jdbrice/obsidian-code-block-copy)
  - *较新版本的Obsidian已内置此功能，且没有问题*
- [ ] [Obsidian Code Block Enhancer](https://github.com/nyable/obsidian-code-block-enhancer)
- [ ] [Obsidian Embedded Note Titles](https://github.com/mgmeyers/obsidian-embedded-note-titles)

## 开发
运行`npm i`后，你可以通过运行`npm run build`将文件轻松地构建到`dist/`中。

你还可以在开发过程中让它监视你的文件并更新你的插件，只需运行`npm run dev`。只需确保在之前将`./esbuild.config.mjs`中的`DEVDIR`设置为你的测试保险库。

## 未来可能会做的事情
- [ ] 插件兼容性修复和增强
- [ ] 笔记特定设置（覆盖全局样式和高度设置）
  - [ ] 拖动横幅底部以确定笔记特定横幅高度
- [ ] 图像图标而不仅仅是表情符号
- [ ] 横幅标题（类似于Notion风格）
- [ ] 允许内容的垂直位移高度与横幅高度不同（这对于*渐变*样式的美观选择可能很好）
- [ ] 复制图像文件并粘贴为横幅
- [ ] Unsplash API集成（直接从Obsidian选择Unsplash的图像）



