---
uid: 20230720102116
title: Obsidian 插件：Auto Note Mover 自动将笔记根据规则，移动到各自的文件夹中
tags: [Obsidian, 插件, 自动化, 移动笔记, 文件归类]
description: Obsidian 插件：Auto Note Mover 自动将笔记根据规则，移动到各自的文件夹中
author: OS,Brown Bear
type: basic
draft: false
editable: false
modified: 20230816110304
---

# Obsidian 插件：Auto Note Mover 自动将笔记根据规则，移动到各自的文件夹中

## 概述

圈里有一句话很火，可以当作成句、金句了：“收集/记录一时爽，整理火葬场”。做为生态如此繁荣，自定义如此之高的 Obsidian，怎么会没有开发者看到这样的需求呢？所以 Obsidian 中有很多自动化插件，其中 Auto Note Mover 就是来完成这件事情的。

Auto Note Mover 可以自动将笔记根据规则，移动到各自的文件夹中。

> [!Note] 插件名片
> - 插件名称：Auto Note Mover
> - 插件版本：1.2.0
> - 插件作者：faru
> - 插件描述：可以自动将笔记根据规则，移动到各自的文件夹中
> - 插件项目地址：[点我跳转](https://github.com/farux/obsidian-auto-note-mover)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-note-mover)

## 效果&特性

注册要移动到规则中的注释的标记或标题。当活动笔记与规则匹配时，自动笔记移动器将把笔记移动到目标文件夹。如果你从现有笔记的链接或从另一个插件创建一个新的笔记，自动笔记移动器将这些笔记移动到你想要的文件夹，所以你不必担心在哪里或如何创建笔记。如果匹配了规则，但没有找到目标文件夹，或者目标文件夹有相同名称的注释，则将显示警告并终止移动。

## 使用

按照需要建立一或多个移动笔记的规则。

- 先选择自动触发或手动触发
	- 为了方便当然是使用自动触发方便
	- 但是如果你不熟悉一些基础操作，你可以使用手动触发尝试下规则正确性

![image.png|613](https://cdn.pkmer.cn/images/20230720104559.png!pkmer)

- 手动触发移动，需要使用命令面板找到如下命令

![image.png](https://cdn.pkmer.cn/images/20230720105324.png!pkmer)

- 新增规则
	- Folder：先指定要移动到的文件夹（要移动到的目标文件夹）
	- Tag：指定是否包含特定标签进行移动，如果文档有此标签，则触发移动
		- 支持正则，但是需要你打开 Use regular expressions to check for tags
	- Title by regex：指定是否按照文件标题的名称进行移动（支持正则去匹配）如果文档标题符合此正则表达式，则触发移动。，如「^Obs」或「*黑曜石*」
	- Add Excluded Folder：添加排除文件夹

![image.png|550](https://cdn.pkmer.cn/images/20230720104632.png!pkmer)

- 使用标签还是标题正则来作为移动规则，只能使用其中一种条件
- 附加的文件不会被移动，但它们仍然会出现在笔记中。
- 如果一个笔记命中多个移动规则，以**第一個**符合的規則為準
- 存储在 Obsidian 仓库根目录里无法触发搬运规则

### 禁用移动

- 如果不想某个笔记被规则命中，可以在 frontmatter 中声明
- 也可以在设置规则时候进行排除文件夹
![image.png|487](https://cdn.pkmer.cn/images/20230720105412.png!pkmer)

### 不生效时候的简易自查

- 确保规则是正确的，没有设置排除的文件夹
- 并且没有在笔记的 frontmatter 中禁用移动
- 另一种可能性是，如果仓库由 Dropbox 等实时同步软件监控，如果编辑与同步时间重叠，同步软件可能会锁定笔记，阻止它被移动。
- 可能因为因为同步软件产生了冗余文件，导致移动效果不如预期

## 实践

### 基本使用

- 基于 标签（#tag）进行

![image.png](https://cdn.pkmer.cn/images/20230720105058.png!pkmer)

- 基于嵌套标签

![image.png](https://cdn.pkmer.cn/images/20230720105125.png!pkmer)

- 基于任务

![image.png](https://cdn.pkmer.cn/images/20230720105257.png!pkmer)

### 自动投放实战

* \# 一个井号 + 文本等同于标签，含有特定标签放入特定文件夹
* ^ 一个上角标 + 文本，等同于文档名，含有特定文档名放入特定文件夹
* `[I|i]ndex$`，美元号表示以什么结尾，前面的中括号里的一个大写 I，一个写 i 表示单词开头字母大写或小写都可以。

### 与日记联动

![image.png](https://cdn.pkmer.cn/images/20230720103746.png!pkmer)

如果你有记录笔记的习惯，每天一个的笔记，一年几百个笔记都放在一个文件夹中，可能不够优雅，但是有了 Auto Note Mover 插件，你可以自动归类这些笔记，比如上图的示例，我简单的将 2023 年 6 月的笔记，都放入了日历的一个文件夹中。当然你也可以按照季度，甚至半年来组织。

甚至你可以按照出现笔记标签来归类，比如 `#work,#假日` 等

### 与 Inbox 思路联动

比如我们之前在一些文章中介绍过 Inbox 的用法，就是将你不知道如何分类的内容，先放到一个收件箱中，然后以后定期整理。

> [!Tip] 提示
> 这些内容中我们都提到过 inbox 思路 i
> [[Obsidian使用案例展示]]
> [[obsidian-tasks的GTD实践]]
>[[构建第二大脑-入门指南]]

那么你可以 设置→【文件与链接】→【新建笔记存放位置】(如 010-Inbox)，笔记完成后必须手动移动到指定位置。有了 Auto Note Mover 插件则可以更进一步，通过设定规则一定程度自动整理，很大程度提升了效率。