---
uid: 20240120123044
title: Obsidian 插件：Home Tab 多功能新标签页
tags: [obsidian, tab, homepage]
description: 一个多功能且更好看的tab页面
author: Huajin
type: other
draft: false
editable: false
modified: 20240120143734
---

# Obsidian 插件：Home Tab 多功能新标签页

## 一、概述

用过浏览器的应该都知道浏览器有新建标签页的功能，通常我们可以在这个新建的标签页中进行搜索。在 obsidian 这个浏览器中同样也有着新建标签页的功能，但是默认的新标签页几乎没有任何功能。Home tab 插件提供了一个多功能新标签页，使你可以直接在该新标签页中进行搜索。该插件入选了 obsidian 的 2023 年 Best new plugin 榜单，并且在入榜的 20 个插件中排名第四（[来源](https://discord.com/channels/686053708261228577/702717892533157999/1193993875577126983)）。

> [!Note] 插件名片
> - 插件名称：Home tab
> - 插件作者：Renso
> - 插件说明：多功能新标签页
> - 项目地址：[点我访问](https://github.com/olrenso/obsidian-home-tab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?home-tab)

home tab 给新标签页添加了一个搜索栏，并且增加了查看最近修改的文件的功能，你可以在插件设置的 Recent file 选项中控制显示的最近修改文件的最大数量。当然，你也可以选择关闭 Recent file 功能。

![image.png](https://cdn.pkmer.cn/images/20240120133837.png!pkmer)

home tab 还可以自定义该新标签页的图标和文本，试着把他装饰成独属于你的样式吧！

## 二、使用方法

安装了 home tab 插件并且打开插件后，当你打开一个新标签页，该插件会把新标签页自动替换为 home tab 标签页视图。

如果你在 home tab 的设置中关闭了这个自动替换，你就需要通过命令面板才能打开 home tab 新标签页：

1. 使用快捷键 <kbd>ctrl p</kdb> 打开命令面板
2. 使用命令：<kbd>Home tab: Open new Home tab</kbd>

## 三、设置介绍

Home tab 设置分为三个部分：

- General settings：常规设置
	- 是否用 home tab 替换 ob 自带的新标签页
	- 启动 ob 的同时启动 home tab
- Search settings：搜索设置
	- Search only markdown files：只搜索 markdown 文件
	- Show uncreated files：搜索包括未创建的文件（指文中有链接但是没有创建的文件）
	- Show file path：在搜索结果的文件名右侧显示文件路径
	- Show shorcuts：在搜索结果下方显示缩写
	- Search results：显示搜索的数目
	- Search delay：搜索延迟，单位为毫秒
- Files display：文件设置
	- Show bookmarked files：在搜索栏下方显示书签
	- Show recent files：在搜索下方显示最近修改文件
	- Store last recent files：存出最近修改文件
	- Recent files：显示的最近修改文件的最大数目
- Appearance：样式
	- Logo：修改 home tab 上方的图标，可以使用 Lucide icon，也可以使用本地图片，或者图片的链接。如果不需要图标可以选择 Empty
	- Logo icon color：图标的颜色
	- Logo scale：图标的尺寸
	- Title：图标右侧的文字，也就是 home tab 的标题
	- Title font：标题的字体
	- Title font size：标题的大小，单位可以是任何 css 可用的文字大小的值。
	- Title font weight：标题的粗细
	- Title color：标题的颜色
	- Selection highlight：选中元素的高亮颜色，例如鼠标悬浮在最近文件时，最近文件的背景颜色，又比如搜索时搜索结果的背景高亮颜色。

## 四、特点

### 按文件类型或扩展名筛选搜索结果

如果已经知道需要搜索的文件的文件类型，你可以通过 home tab 筛选器来筛选搜索结果

- 在 home tab 的搜索栏中输入筛选器关键字
- 按下 Tab 键激活筛选器
- 直接按下退格键即可删除筛选器

home tab 提供了 24 种过滤器：

| 文件类型 | 文件扩展名 |
| :--: | :--: |
| `markdown` | `md` |
| `image` | `png`，`jpg`，`jpeg`，`svg`，`gif`，`bmp` |
| `video` | `mp4`，`webm`，`ogv`，`mov`，`mkv` |
| `audio` | `mp3`，`wav`，`m4a`，`ogg`，`3gp`，`flac` |
| `pdf` | `pdf` |

操作演示：

- 筛选 image 类型的文件
- 筛选 png 类型的文件

![](https://cdn.pkmer.cn/covers/home-tab_2_2.gif)

### 嵌入式搜索栏

Home tab 不仅只能在新标签页中使用，还可以直接嵌入文章中使用。Home tab 使用渲染 <kbd>seach-bar</kbd> 代码块的方法实现了嵌入功能。

以下示例可以在文中嵌入 home tab 的搜索框和星标文件

````
```seach-bar
only search bar
show starred files
```
````

![](https://cdn.pkmer.cn/covers/home-tab_2_3.png!pkmer)

## 五、其他

该插件可能无法与其他将新标签页替换为自定义视图的插件配合使用（或干扰），例如 [Obsidian-Surfing](https://github.com/PKM-er/Obsidian-Surfing) 插件。解决方法可以是二选一使用，也可以关闭 surfing 的替换新标签页的功能（毕竟 home tab 的主要功能就是替换新标签页）

Activity History 插件可以在笔记中渲染代码块生成一个记录你修改笔记频率的热力图，通过阅读 Activity History 的源码得知，他使用的是 svelt-heatmap 组件，而 home tab 恰好也是使用了 svelte 构建的新标签页视图，因此我把两者结合起来，并且去除了 Acitivity History 插件记录特定路径下笔记大小的功能，只保留了记录整库大小绘制热力图的功能，并且将热力图添加到了 home tab 新标签页的下方。

![image.png|800](https://cdn.pkmer.cn/images/20240120143445.png!pkmer)

同时，在 home tab 的设置中，我还添加了与该热力图相关的一些设置，方便大家对热力图进行一些自定义

![image.png](https://cdn.pkmer.cn/images/20240120143705.png!pkmer)
