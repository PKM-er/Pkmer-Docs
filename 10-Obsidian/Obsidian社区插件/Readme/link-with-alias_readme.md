---
uid: 20230803204239
title: Obsidian 插件：【Readme】Link with alias
tags: ['obsidian插件', 'readme']
description: 在目标文档的前置元数据中创建链接和别名。
author: Pavel Vojtechovsky
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Link with alias

> [!Note] 插件名片
> - 插件名称：Link with alias
> - 插件作者：Pavel Vojtechovsky
> - 插件说明：在目标文档的前置元数据中创建链接和别名。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/pvojtechovsky/obsidian-link-with-alias)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-with-alias)

## 概述

在目标文档的前置元数据中创建链接和别名。

![Link with alias](https://cdn.pkmer.cn/covers/link-with-alias.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pvojtechovsky/obsidian-link-with-alias/main/README.md)
> 

---

## Readme(翻译）

下面是 [[link-with-alias]] 插件的自述翻译


# 别名链接

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=下载量&query=%24%5B%22link-with-alias%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&style=plastic) ![](https://img.shields.io/github/v/release/pvojtechovsky/obsidian-link-with-alias?label=最新版本&style=plastic)

该插件实现了两个命令：

- 创建别名链接 - 快速创建链接，其显示文本将添加到目标笔记的前置元数据的别名属性中。
- 创建链接 - 快速创建链接

这两个命令都确保链接的显示文本保持不变，不会被 Obsidian 的链接自动完成功能替换。

用例

在现有文本上创建链接

用户选择一些文本并运行命令“使用别名创建链接”。该命令将从所选文本中复制目标和显示名称创建一个新链接，并打开链接自动完成弹出窗口，然后...

A) ... 用户可以从自动完成弹出窗口中选择一个值，按Enter键，链接和别名就会被创建。

![运行命令，按Enter键，完成](use-case1.gif)

B) ... 用户可以编辑链接目标，然后从自动完成弹出窗口中选择一个值，按Enter键，链接和别名就会被创建。请注意，链接文本保持不变。

![运行命令，编辑链接，选择自动完成，按Enter键，完成](use-case5.gif)

C) ... 用户可以输入新笔记的名称，让光标离开链接，然后新笔记会自动创建，链接显示文本作为别名。

![运行命令，编辑链接，离开链接，完成](use-case6.gif)

为现有链接添加别名

用户将光标放置在现有链接中，并运行“创建带有别名的链接”命令。该命令会创建目标文档（如果不存在），并将链接显示文本作为别名添加到目标笔记的前置元数据中。

![在链接中运行命令，完成](use-case2.gif)

创建全新链接

用户将光标放在文本中并运行命令“使用别名创建链接”。它会创建链接括号并打开自动完成弹出窗口，以输入链接目标名称。用户输入目标名称或别名的一部分并通过回车键选择后，链接将被创建。如果没有显示文本并且用户返回到链接并输入一个，则系统会检测到它，并在光标离开括号或用户关闭窗口后，将链接显示文本添加为目标笔记的别名到前置事项中。虽然支持这种用例，但通常更快地先编写没有链接的文本，然后再进行**在现有文本上创建链接**。

![运行命令，选择目标，按Enter键，将光标移回，写入别名，离开链接，完成](use-case3.gif)

# 设置

您可以配置以下选项：

A) 在执行命令时，选择的文本是否作为链接目标名称复制，以便自动完成可以立即提供类似的术语。

B) 或者链接目标是否保持为空，以便您可以立即输入目标笔记名称。

# 注意事项

-   仅当目标笔记的前置元数据中不存在别名时，才会将别名添加进去
-   别名按照从长到短的顺序排序，以便正确检测 Obsidian 的反向链接
-   链接自动完成弹出窗口是 Obsidian 提供的标准窗口。有时它会自动替换链接文本，但在这种情况下并不需要。"使用别名创建链接" 操作将保持链接文本与之前完全相同。

![运行命令，按 Enter，完成](use-case4.gif)

关于我

我是一名软件开发人员和架构师，拥有超过35年的编程经验。我对创建和维护人类可理解、最新、分布式和可信赖的知识非常感兴趣。

我热爱生活、大自然、人们、心理学和舞蹈。我对Obsidian非常兴奋，因为它帮助我实验、原型设计和准备这个知识库的概念。

感谢您的支持，这使我能够为Obsidian插件和我梦想中的知识库项目提供更多时间。

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/pavel_knowledge)

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="BuyMeACoffee" width="170">](https://www.buymeacoffee.com/pavel.knowledge)



