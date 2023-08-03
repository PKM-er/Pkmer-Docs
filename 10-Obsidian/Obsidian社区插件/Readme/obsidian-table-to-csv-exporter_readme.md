---
uid: 2023080322274352
title: Obsidian 插件：【Readme】Table to CSV Exporter
tags: ['obsidian插件', 'readme']
description: 这个插件允许从阅读模式中的窗格导出表格到CSV文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Table to CSV Exporter

> [!Note] 插件名片
> - 插件名称：Table to CSV Exporter
> - 插件作者：Stefan Wolfrum
> - 插件说明：这个插件允许从阅读模式中的窗格导出表格到CSV文件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/metawops/obsidian-table-to-csv-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-table-to-csv-exporter)

## 概述

这个插件允许从阅读模式中的窗格导出表格到CSV文件。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/metawops/obsidian-table-to-csv-export/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-table-to-csv-exporter]] 插件的自述翻译


![](https://badgen.net/github/release/metawops/obsidian-table-to-csv-export?icon=github) ![](https://badgen.net/github/assets-dl/metawops/obsidian-table-to-csv-export?icon=github) ![](https://badgen.net/github/stars/metawops/obsidian-table-to-csv-export?icon=github&color=cyan) ![](https://badgen.net/github/watchers/metawops/obsidian-table-to-csv-export?icon=github&color=cyan) ![](https://badgen.net/github/license/metawops/obsidian-table-to-csv-export?icon=github&color=grey)

![](https://badgen.net/github/closed-issues/metawops/obsidian-table-to-csv-export?icon=github) ![](https://badgen.net/github/open-issues/metawops/obsidian-table-to-csv-export?icon=github)
# Obsidian插件“表格到CSV导出器”

这是我第一次尝试为[Obsidian](https://obsidian.md)编写插件。在此之前，我甚至不了解TypeScript（只了解JavaScript）。

它是做什么的？

该插件的目的是能够将阅读模式下的窗格中的表格数据导出为CSV文件。

背景：Obsidian的出色插件[Dataview](https://github.com/blacksmithgu/obsidian-dataview)允许根据笔记元数据的类似SQL的查询动态创建表格。
我希望能够进一步在外部应用程序（如MS Power BI）中使用这些创建的数据，以创建该数据的可视化效果。
但是该插件可以将任何表格导出为CSV文件，甚至包括您在Markdown中“硬编码”或其他插件创建的表格（如果这对您有意义的话）。

## 设置

我的插件允许您在其设置中配置一些内容：

* **CSV文件的基本文件名**

   这是您要保存的CSV文件的文件名的第一部分。

   **默认值**：`table-export`

* **文件编号附加**

   这将添加到基本文件名后面（连字符后）。然后添加扩展名`.csv`。  
   每次成功导出后，此编号会递增一次，并在达到999后重置为001。  
   通常情况下，您不需要在设置中干预此项，但如果需要，可以进行更改。  
   **但要小心！** 不要搞乱它。不要将其更改为文本或与数字不同的其他内容。并且保持###方案（最多三个数字，前导零）。  
   可能需要手动更改此编号，或者将文件从存储文件夹中删除/重命名/移动。  
   不过，不用担心：插件永远不会覆盖任何文件，并且如果文件已存在，它会向您发出警告。

   **默认值**：`001`

* **分隔字符**

   在此处，您可以选择在CSV文件中分隔数据字段的字符。下拉框中包含逗号、分号和制表符等常见选择。但也有一些不寻常的选择。

   **默认值**：`;`

* **引用数据**

   如果您希望CSV文件中的数据单元格被引号括起来，可以在此处选择。在下拉框中，您可以选择双引号（`"`）、单引号（`'`）或不引用数据。

   **默认值**：不引用

* **处理数据中的CR/LF**

   在某些罕见情况下，您可能在数据字段/单元格中有回车（CR）或换行（LF）字符。这将破坏CSV文件。通过此设置，您可以选择如何处理这些字符。您可以简单地删除它们，用一个空格字符替换它们，或者用固定字符串`[CR]`替换它们，以便以后仍然可以看到您的数据中曾经有某种回车字符。

   **默认值**：用一个空格替换所有CR和LF字符

* **同时复制到剪贴板**

   可选地，您还可以将CSV字符串复制到剪贴板中。
   
   **默认值**：`关闭`

## 使用方法

该插件添加了一个新的命令：“将表格导出为CSV文件”。只有当您当前活动的窗格处于阅读模式时，此命令才起作用。执行该命令后，将根据您的存储库主文件夹中的设置编写一个`.csv`文件。该CSV文件包含笔记阅读模式中的*第一个*表格的数据。

该插件也适用于移动设备。（仅在iPadOS上进行了测试。）

## 当前限制

当然，总是有改进的空间。截至版本0.1.4，存在以下限制/限制：

* 插件目前只导出笔记阅读模式中找到的第一个表格。
* 插件将CSV文件直接保存在您的存储库的主文件夹中。稍后将添加选择存储库内其他文件夹的功能。

感谢

我想在这里感谢几个人。没有他们，这个插件就不会诞生。

* [Edmund Gröpl](https://twitter.com/groepl) - 因为他提出了这个问题，并在多年来一直鼓励我。
* [Marcus Olsson](https://github.com/marcusolsson) - 因为他启动了[Obsidian插件开发文档](https://marcus.se.net/obsidian-plugin-docs/)项目，我强烈推荐这个项目，特别适合初学者。他也在Twitter上：[@marcusolsson](https://twitter.com/marcusolsson)
* [Johannes Theiner](https://github.com/joethei) - 他是官方Obsidian Discord服务器上非常友善和乐于助人的用户。我在`#plugin-dev`频道遇到了他，他对我的问题的回答非常有帮助。他也在Twitter上：[@joethei](https://twitter.com/joethei)

## 联系方式

如果您发现了错误或有功能请求，请在GitHub讨论区留下反馈或提交新的问题。
您也可以通过Twitter与我联系：
[![](https://badgen.net/twitter/follow/metawops?icon=twitter)](https://twitter.com/metawops)

## 赞助

如果这个插件对您有价值，并且您希望帮助支持持续开发，请考虑通过[GitHub赞助商](https://github.com/sponsors/metawops)，[PayPal](https://paypal.me/stefanwolfrum)或[请我喝咖啡](https://www.buymeacoffee.com/metawops)来赞助这个仓库。

[![](https://img.buymeacoffee.com/button-api/?text=请我喝咖啡&emoji=&slug=metawops&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff)](https://www.buymeacoffee.com/metawops)

在德国波恩用❤️制作。



