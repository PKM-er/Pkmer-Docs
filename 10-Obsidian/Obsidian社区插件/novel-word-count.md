---
uid: 20230504113543
title: Obsidian 插件：Novel word count 增加统计信息
tags: [Obsidian, 插件, 统计, 自定义]
description: Obsidian 插件：Novel word count 增加统计信息
author: OS,却能火里种金莲
type: other
draft: false
editable: false
modified: 20230718135143
---

# Obsidian 插件：Novel word count 增加统计信息

## 概述

对于知识管理，或者说建议笔记建议管理来讲，数字化的统计有时候是必不可少的功能，它能帮我们

> [!Note] 插件名片
> - 插件名称：Novel word count
> - 插件作者：Isaac Lyman
> - 插件说明：在 Obsidian 的文件资源管理器窗格中显示每个文件、文件夹和保险库的字数，以及更多其他信息。
> - 插件项目地址：[点我跳转](https://github.com/isaaclyman/novel-word-count-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?novel-word-count)

## 效果&特性

![readme-screenshot-2.png](https://cdn.pkmer.cn/images/readme-screenshot-2.png!pkmer)

- 在文件资源管理器窗格中，为每个文件、文件夹和仓库旁边显示您选择的统计信息。
- 插件提供可选的统计信息，包括字数统计、页面统计、字符统计、笔记统数量统计、创建/修改日期、文件大小。
- 这些统计信息是实时更新。

## 使用

- 启用插件后，会自动在文件资源管理器窗格中，为每个文件、文件夹和仓库旁边显示您选择的统计信息
- 统计设置
	- 最多可以选择三种数据类型并排显示。
	- 支持这些统计信息的缩写：
		- "3,250 words" => "3,250w"
		- "30 pages" => "30p"
		- "23,800 characters" => "23,800ch"
		- "12 notes" => "12n"
		- "Created 1/22/2022" => "1/22/2022/c"
		- "Updated 1/22/2022" => "1/22/2022/u"
		- "13.39 KB" => "13.39kb"
	- 默认情况下，在文件夹上显示与文件相同的统计数据项目。您可以关闭此设置，来设定文件夹和文件的显示不同的数据项。
	- 如果文档结构和内容发生较大变化，可以手动重新计算统计值，找到设置中的 `Reanalyze`（重新分析所有文档）。触发全仓库中所有文件的重新计数。
- 样式设置
	- 对齐方式：选择数据相对于文件/文件夹名称的显示位置：内联、右对齐或下方。所有对齐方式与基本的 Obsidian 兼容，但是在自定义主题和插件中，内联方式具有最好的兼容性。

>[!Tip] 提示
>- 字数统计的计算方法。选择是使用空格分隔策略（用于英语和其他欧洲语言）还是使用汉字、假名和韩文字母（用于中文、日语和韩语）来计数字数。自动检测设置将用两种方法对每个文件进行计数，然后返回其中较大的结果。
>- 页面统计的计算方法。选择是根据单词数（默认：300）还是根据字符数（默认：1500）计算页面。您可以更改要使用的单词数/字符数。
>- 每页字数/每页字符数。根据所选的页面计数方法设置每页的单词数或字符数。

6.重新分析所有文档。触发对库中所有文档的重新计数。如果您在 Obsidian 之外进行了更改，则此项非常有用。（此命令提供了快捷键绑定。）

7.调试模式。启用开发者控制台的调试输出，这在您需要报告问题时可能非常有用。

![Snipaste_2023-07-18_13-18-09.png](https://cdn.pkmer.cn/images/Snipaste_2023-07-18_13-18-09.png!pkmer)

### 支持的统计数据项

- 字数统计（**Word count:**）
- 页面数统计（**Page count**）：总计页数默认情况下，一页为 300 个单词。要更改此设置，请参阅高级>页面计数方法。
- 页面数（小数）（**Page count**）
- 字符数统计（**Character count**）
- 笔记数量统计（**Note count**）
- 创建日期（**Created date**）：记录笔记创建的日期。
	- 在文件夹上，以文件夹中所有笔记的最早创建日期为准。
- 最后更新日期（**Last updated date**）：笔记最后更新的日期
	- 在文件夹上，以该文件夹中所有笔记中最新编辑日期为准。
- 文件大小（**File size**）：所有文件存储大小之合；
- 别名（**First alias**）：显示别名
	- 如果没有则不会显示任何内容。由于文件夹没有别名，所以它们也不会显示任何内容。
- 插入 Embed 资源统计（**Embed count**）：通过 Embed 方式嵌入的图像、文件、注释等数量。
- 链接数量（**Link count**）【暂不支持反向链接】
	- 文件夹后缀是 2n，代表有两个笔记。其中“未命名”主动链接了“实例文件”，后缀 1x，代表 1 个主动链接。

 ![Snipaste_2023-07-18_13-17-55.png](https://cdn.pkmer.cn/images/Snipaste_2023-07-18_13-17-55.png!pkmer)

>[!Tip] 关联推荐
> - [[quick-explorer]]：在应用标题栏和笔记标题栏增加面包屑导航功能，提供了笔记和目录快速切换的能力
> - [[obsidian-collapse-all-plugin]]：单击对应图标或者使用命令，展开或关闭文件管理器中的文件夹
> - [[pane-relief]]：每个窗格的历史记录、用于窗格移动和导航的快捷键等
> - [[recent-files-obsidian]]：显示最近打开的文件列表
> - [[obsidian-gallery]]：让你的笔记变成画廊
> - [[obsidian-tagfolder]]：通过笔记中的标签，重新组织所有的笔记
> - [[chronology]]：按照月历模式导航，轻松了解编辑修改锅的笔记内容。
> - [[hidden-folder-obsidian]]：在文件管理器中快速隐藏文件夹
> - [[obsidian-show-file-path]]：显示正在编辑的文件所在的路径
> - [[hidden-folder-obsidian]]：快速隐藏文件夹