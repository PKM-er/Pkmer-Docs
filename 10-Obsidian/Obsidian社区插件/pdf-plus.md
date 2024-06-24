---
uid: 20240513195604
title: Obsidian 插件：PDF++ 的个人推荐设置
tags: [插件, Obsidian, 编辑工具]
description: Obsidian 的一款好用的 PDF 标注增强插件，很适合用来做读书笔记。
author: ImmortalSty
type: advanced
draft: false
editable: true
modified: 20240520085221
---

# Obsidian 插件：PDF++ 的个人推荐设置

> [!tip]+ 注意
>
> 由于 PDF++ 插件本体的设置和功能太多，太复杂，所以本篇不会详细的一点点描述，只会着重讲讲笔者的使用习惯与方法。
>
> 当前文章可用于 0.39.23 版本的 PDF++。

> [!Note] 插件名片
> - 插件名称：PDF++
> - 插件作者：Ryota Ushio
> - 插件说明：Obsidian 的一款好用的 PDF 标注增强插件
> - 插件分类：编辑工具
> - 项目地址：[点我访问](https://github.com/RyotaUshio/obsidian-pdf-plus)
> - 插件文档介绍：[Home (ryotaushio.github.io)](https://ryotaushio.github.io/obsidian-pdf-plus/)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-plus)

## 插件介绍

PDF++ 是一种针对 Obsidian 的原生 PDF 注释和编辑工具，显著提升了 Obsidian 的 PDF 支持能力。

- 功能概览
	- **高亮注释**：将 PDF 文件中的反向链接转换为高亮注释，允许通过链接文本选择来注释 PDF。
	- **注释同步**：支持将注释直接添加到 PDF 文件中，以便在 Obsidian 之外也可见。
	- **查看器增强**：为内置的 PDF 查看器和嵌入功能添加了便利性改进，即使不用于注释，也能提升用户体验。
- 特点
	- **与 Obsidian 原生查看器集成**：补充而非替代 Obsidian 的本机查看器，注释以纯 Markdown 保存，确保持久性。
	- **独立注释工具**：无需在 Obsidian 和外部应用程序之间切换，即可使用丰富的 Markdown 编辑器注释 PDF。
	- **分布式注释**：支持将单个 PDF 的注释分布在整个 vault 中。
	- **轻量级依赖**：除可选的 `&color=...`/`&rect=...` 链接表示法外，不引入插件依赖的语法。

## 插件设置推荐

### Editing PDF files

首先，==这个设置不要开！！！==

解释一下这个设置的意思：开启 PDF 编辑。简而言之，就是把注释、高亮等，写入 PDF 文件中。当你用其它软件打开该 PDF 文件时（比如 Sumatra PDF），你依然可以看到自己做的注释，摆脱对 Obsidian 的依赖。

这个功能非常好，奈何不靠谱，有损坏文件的风险。之前在群聊中有看到群友的 PDF 文件因此被损坏了，作者也标黄了一段文字示警，所以极不推荐打开。

### Backlink highlighting

这部份重点看 Colors 部份的设置。

这部份可以设定你想在 PDF 中用哪几种颜色标注，标注的颜色、含意全部都能自定义，也可以选择其中一个作为默认的标注颜色。

除此以外，我还作了如下更改：

- 打开了 `Highlight backlinks inPDF embeds` 项，使高亮在嵌入中也可以看到；
- 打开了 `Highlight backlinks in hover popover previews` 项，使高亮在悬浮小窗中也能看到；
- 把 `How to open the markdown file when no markdown file is opened` 设为了 `Split left`，这样在打开注释文件时，会在左侧打开，而不是右侧。

### Rectangular selection embeds

当前部份是用于设定框选嵌入笔记的，推荐默认。

个人感觉这部份功能不全，等更新全了再推荐设置吧。

### PDF++ callouts

默认设置就很好，没有什么需要更改的。

### PDF toolbar

该项用于设置 PDF 页面上方工具栏的内容，要注意一下其中的 `Default color selected in color palette`。

后面可看到如何用快捷键快速引用注释，这时，会使用工具栏中选中的颜色新建注释，而上面说的那项设置，正是决定打开 PDF 文件时，默认选中哪个颜色的。

除此以外，我还作了以下更改：

- 关闭了 `Show zoom level box` 项，隐藏了尺寸缩放的控件，因为我用不着；
- 关闭了 `Show "without specifying color" button in the color palette` 项，隐藏了默认颜色选项，反正默认颜色又不是不显示，用不着。

### Viewer options

默认设置就很好，没有什么需要更改的。

### Context menu in PDF viewel

这里决定了你选中要注释的部份后的右键菜单，不过基本没什么要改的。

我只关闭了其中的 `Customize menu..`，用不着。

### Copying links via hotkeys

这里没有设置，只是提供了一个通往快捷键设置的按钮。

推荐给命令中的 `PDF++: Copy link to selection or annotation` 添加一个快捷键，后面可以通过按这个快捷键快速添加注释。

### Other shortcut commands

这里也是快捷键，没什么要改的。

### Link copy templates

这里是重点，用于决定添加的注释的样式，即：为注释设定模版。想要自定义该区域的样式，需要一点点的 Markdown 语法知识，如果不会，按下面照抄就行了。

- 在 `Display text format` 设置中，把 `Page` 右侧的 `p.{{pageLabel}}` 改为 `Page.{{pageLabel}}`；
- 在 `Default display text format` 中选择 `Page`；
- 在 `Custom link copy formats` 设置中，点击 `+` 加号，新增一行，在下面新增的一行在左侧填入 `Quote in callout`，在右侧填入下列代码：

	```
	> [!{{calloutType}}|{{color}}] {{linkWithDisplay}}
	> > {{text}}
	> 
	> 
	```

- 开启 `Use another template when no text is selected` 项；
- 在 `Link copy template used when no text is selected` 项中，填入 `{{linkToPageWithDisplay}}`。

### Auto-copy / auto-focus / auto-paste

#### Auto-copy

关闭即可，这是“自动复制”，也就是选中文本后会自动复制。个人认为用不上，且会污染剪贴板。

#### Auto-focus

这个也一样，用于“自动聚焦”，但在 auto-paste 中已经有了，不需要这个。

#### Auto-paste

可用快捷键触发（就是上面设置的快捷键），会自动将选中文本的注释加到某个指定的 Markdown 文件中，它的默认设置就很好。

#### General

这项设置很重要。

- 将 `How to open target markdown file when not opened` 项设为 `Split left`，使指定的 Markdown 文件在左侧打开，而不是右侧；
- 关闭 `Always open in editing view` 项，不然每次打开 Markdown 注释文件时，都会处于编辑状态；
- 在 `Command to execute` 中填入 `PDF++: Create new note for auto-focus or auto-paste`，这样就会为每个 PDF 文件自动新建一个对应的 Markdown 文件，用于存放注释；
- `New note title format` 是用来设置新建的 Markdown 文件位置与名称的，我的设置为 `Notes/{{ file.basename }}.md`；
- `Template file path` 可用于为新建的 Markdown 文件指定模版，需要先在库中手动建一个 Markdown 模版文件，然后在模版文件中输入模版，再将模版文件的路径写入到该设置中，模版内容推荐用下面这个：

	```
	---
	PDF: "[[{{ file.path }}|{{ file.basename }}]]"
	---
	
	# {{ file.basename }}
	
	```

### PDF Annotations

这项不用管，这与最开始说的 `Editing PDF files` 有关。

### PDF internal links

没有需要修改的，默认就好。

### Citationsin PDF experimental

这是实验性内容，我不用，所以不讲。

### External links in PDF

我把这项关了。如果开启的话，需要按下 Ctrl 才能用悬浮小窗预览，否则不需要。

### PDF sidebar

没有需要修改的，默认就好。

### PDF outline (table of contents)

没有需要修改的，默认就好。

### PDF thumbnails

没有需要修改的，默认就好。

### PDF page composer (experimental)

实验性内容，而且与最开始说的 `Editing PDF files` 有关，不用管。

### Opening links to PDF files

本设置决定了“当在 PDF 对应的 Markdown 文件中点击 PDF 链接时，如何打开该 PDF 文件”。

以下是我的更改：

- 将 `How to open PDF links when there is no open PDF file` 项改为 `Split right`，保证 PDF 文件在左侧，对应的 Markdown 文件在右侧；
- 关闭 `Ignore "height" parameter in popover preview` 项，使高度参数在悬浮小窗中有效。

### Embedding PDF files

此处是有关 PDF 文件嵌入相关的设置，推荐开启 `Make PDF embeds with a page specified unscrollable`，使嵌入后的页面无法滚动。

### Backlinks pane for PDF files

此处是有关 PDF 文件的反链的设置，其实就是 PDF 高亮。本插件通过 PDF 文件的反链指向的文本与位置，来高亮对应的文本与位置。

### Search from links

我用不着，就没看了。

### Integration with external apps (desktop-only)

将内容全部关闭就好，用不着。

### View Sync

用于和 View Sync 插件配合使用的，我用不着。

### Misc

其他设置，没什么要改的。

### Style settings

用于和 Style settings 插件配合使用的，我用不着。

## 使用方法

每个 PDF 文件都对应着一个 Markdown 文件。

打开一个 PDF 文件，点击左侧 Obsidian 自带的工具栏中的 `PDF++: Toggle auto-paste` 按钮，用以开启自动粘贴功能。

可以选中一段文本，按下之前设好的快捷键，就会将该文本按照设置好的模版，和上方工具栏里选中的颜色，自动粘贴到对应的 Markdown 文件中。

也可以在选中文本后，直接右键，更自由的选择颜色与其它模版（如果看不懂，试试就明白了）。

如果对应的 Markdown 文件不存在，会自动按照前文设置好的模版与路径来自动创建，然后再粘贴。

可以右键 PDF 文件中高亮的部份，重新选择高亮颜色。

## 小声叨叨

这插件好用是好用，但这设置也太多了吧？放弃全部详细说明了，还是只把我咋设置，以及这些设置都是啥意思讲讲吧。

## 其他相关文章

[[如何让mousewheel-image-zoom插件适配pdf++嵌入块]]



## 兼容性

PDF++ 与以下插件兼容：

- [[obsidian-hover-editor]]
- [Better Search Views](https://github.com/ivan-lednev/better-search-views)

以下插件跟 PDF++ 冲突：

- [[close-similar-tabs]]
