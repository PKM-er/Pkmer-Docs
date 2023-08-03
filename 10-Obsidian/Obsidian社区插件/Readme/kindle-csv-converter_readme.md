---
uid: 2023080322210474
title: Obsidian 插件：【Readme】Kindle CSV Converter
tags: ['obsidian插件', 'readme']
description: 将您的Kindle笔记以.csv格式导入到Obsidian中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Kindle CSV Converter

> [!Note] 插件名片
> - 插件名称：Kindle CSV Converter
> - 插件作者：Alvaro Cas
> - 插件说明：将您的Kindle笔记以.csv格式导入到Obsidian中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/alvaro-cas/kindle-csv-converter-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kindle-csv-converter)

## 概述

将您的Kindle笔记以.csv格式导入到Obsidian中。

![Kindle CSV Converter](https://cdn.pkmer.cn/covers/kindle-csv-converter.jpeg!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/alvaro-cas/kindle-csv-converter-obsidian/main/README.md)
> 

---

## Readme(翻译）

下面是 [[kindle-csv-converter]] 插件的自述翻译


# Kindle CSV Converter Obsidian
**在[Obsidian.md](https://obsidian.md/) vault中创建有用的Kindle笔记。**

![](https://github.com/alvaro-cas/kindle-csv-converter-obsidian/blob/main/assets/ss.png?raw=true)

> 使用Iframe（左侧）和不使用Iframe（右侧）的示例图像，使用自定义笔记名称，默认配置。

介绍

这个 Obsidian 插件用于将您的 CSV 格式的笔记转换为 Obsidian 文件，同时它现在也支持 "My Clipplings.txt"。如果您不知道如何获取您的笔记，请[点击这里](https://medium.com/@keisuke_w/how-to-export-kindle-notes-and-highlights-ebce5812bbfc#55d8)，这篇文章解释了如何获取这两种格式。

这个插件的存在只是为了方便地将 CSV 和 My Clippings 转换为所需的格式，而不需要将任何亚马逊账户链接到 Obsidian。如果您想要保持您的亮点同步，请使用这个[很棒的插件](https://obsidian.md/plugins?search=Kindle%20Highlights)。

考虑因素和限制

"My Clippings.txt"是一个敏感文件，它不会删除高亮，只是将它们追加到文件中，这意味着如果您删除一个高亮，它仍然会在文件中可用。此插件有助于清理重复项，但可能会意外删除一些内容。再次强调，它有限制，您可能会遇到*您已达到此项目的剪辑限制*，但可以通过删除[DRM](https://www.makeuseof.com/tag/remove-drm-every-ebook-own/)来解决此问题，这是一种完全合法的方法，仅用于个人使用。

> 在您可以的情况下，请使用CSV格式。

## 安装
您可以通过在Obsidian中搜索“Kindle CSV Converter”，并通过[Community Plugins](https://obsidian.md/plugins?search=Kindle%20CSV%20Converter)选项卡安装插件。

### 手动安装
您可以手动安装插件：
- 前往GitHub上的[最新版本](https://github.com/alvaro-cas/kindle-csv-converter-obsidian/releases/latest)。
- 下载 `main.js`、`manifest.json` 和 `style.css`。
- 将 `main.js`、`manifest.json` 和 `style.css` 复制到您的vault中的以下位置：`VaultName/.obsidian/plugins/kindle-csv-converter`（创建 kindle-csv-converter 文件夹）。

使用方法
您可以以两种不同的方式打开Kindle CSV Converter：

#### 1.命令面板
按下Ctrl+P或选择的热键打开命令面板。搜索"Kindle CSV Converter"或"选择文件"。

![](https://raw.githubusercontent.com/alvaro-cas/kindle-csv-converter-obsidian/main/assets/ss_command.jpg)

导航到左侧边栏，选择带有图书馆图标的缎带。

### 导入您的文件
在选择选项1或选项2后，将出现一个模态窗口。

![](https://github.com/alvaro-cas/kindle-csv-converter-obsidian/blob/main/assets/ss_modal.png?raw=true)

根据您的需求，您可以选择CSV或"My Clippings.txt"。点击所需的框，文件浏览器将打开，选择您的文件并打开。然后，您可以选择特定的转换选项：

#### ~ CSV

![](https://github.com/alvaro-cas/kindle-csv-converter-obsidian/blob/main/assets/ss_csv.png?raw=true)

##### 选项

| 名称 | 描述 | 默认值 |
|--|--|--|
| 使用书名作为注释 | 这将使用在设置中指定的分隔符与书名标题一起显示。 | true |
| 名称 | 如果上述设置为false，则显示此项。 | 无 |
| Iframe | 这将在一个iframe中显示您的书籍的附加信息。 | true |

#### ~ 我的剪报

![](https://github.com/alvaro-cas/kindle-csv-converter-obsidian/blob/main/assets/ss_clippings.png?raw=true)

##### 选项

| 名称 | 描述 | 默认值 |
|--|--|--|
| 选择要导入的书籍 | 这将显示在"My Clippings.txt"中可用的所有书籍，您必须选择所需的书籍。 | 无 |
| 使用书名作为注释 | 这将使用设置中指定的分隔符与书名一起使用。 | true |
| 名称 | 如果上述设置为false，则会显示此项。 | 无 |
| 增强 | 通过删除重复内容来改进注释。 | true |

点击生成！现在您的文件已转换！

> 注意：根据您选择的设置，文件的位置和格式可能会有所不同。

## 设置

| 名称 | 描述 | 默认值 |
|--|--|--|
| 路径 | 你的笔记将保存在你的保险库中的路径。 | / |
| 分隔符 | 你的文件名的分隔符。例如："我的书的标题"将变成"我的_书的_标题"。 | _ |
| 头部 | 你的笔记的头部将如何格式化。（Markdown语法）（使用'\n'表示换行）（标题和作者是变量，将被替换） | \n==你的Kindle笔记：== title __作者：author__ \n \n |
| 高亮 | 你的书的高亮将如何格式化。（Markdown语法）（使用'\n'表示换行）（高亮是一个变量，将被替换）| *** \n \n > [!quote] 位置 \n \*高亮\* \n \n |
| 笔记 | 你的书的笔记将如何格式化。（Markdown语法）（使用'\n'表示换行）（笔记是一个变量，将被替换）| \*\*笔记\*\* \n > 笔记 \n \n |

## 未来的实施方案
- 自动清理“我的剪报.txt”文件
- 批量导入

MIT许可证
请查看[LICENSE](https://github.com/alvaro-cas/kindle-csv-converter-obsidian/blob/main/LICENSE)。

希望你喜欢！你可以在这里支持我的工作（我会将1%的收入用于资助碳减排🌳），或者在我的Medium上查看更多内容。

祝你平安！🤙

<noscript></noscript>



