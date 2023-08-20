---
uid: 2023082011353437
title: Obsidian 插件：【Readme】At People
tags: ['obsidian插件', 'readme']
description: 使用熟悉的@符号来在人员文件夹中进行人员文件的交叉链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】At People

> [!Note] 插件名片
> - 插件名称：At People
> - 插件作者：Tobias Davis
> - 插件说明：使用熟悉的@符号来在人员文件夹中进行人员文件的交叉链接。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/saibotsivad/obsidian-at-people)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?at-people)

## 概述

使用熟悉的@符号来在人员文件夹中进行人员文件的交叉链接。

![At People](https://cdn.pkmer.cn/covers/at-people.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/saibotsivad/obsidian-at-people/main/README.md)
> 

---

## Readme(翻译）

下面是 [[at-people]] 插件的自述翻译


# Obsidian `@People`

Obsidian插件，用于添加熟悉的@-to-tag-someone语法：

![](./example.png)

当你在建议上按下回车键时，它会创建一个看起来像这样的链接：

```
The author was [[@Rich Hickey]]
```

并将光标留在末尾。
选项

这里没有太多可以配置的内容，但它们非常重要：
人员文件在哪里？

你可能想要将人员文件分组放在一个文件夹中。

我通常会这样做：

```
People/
	@Rich Hickey.md
	@Rich Harris.md
```

你可以在设置中配置将其指向其他位置，比如 `Reference/People/` 或者其他有意义的位置。
### 2. 显式链接结构？

默认情况下，插件会插入简单版本：

```
[[@Rich Hickey]]
```

但是你可能更喜欢将其明确表示出来，这种情况下，你可以启用“显式链接”，它们将会像这样：

```
[[People/@Rich Hickey.md|@Rich Hickey]]
```
### 3. 姓氏分组？

对于我的个人Obsidian vaults，我有很多和我姓氏相同的人，所以我把他们放在子文件夹中进行组织。

您可以切换“姓氏文件夹”选项，它会在链接中执行此操作。

之前的示例文件夹结构如下：

```
People/
	Hickey/
		@Rich Hickey.md
	Harris/
		@Rich Harris.md
```

然后插入的链接将如下所示：

```
[[People/Hickey/@Rich Hickey.md|@Rich Hickey]]
```

> 注意：确定“姓氏”是什么（或者它是否有姓氏）非常复杂！该插件采用了一种非常简单的方法：如果您通过空格字符拆分姓名，它将选择最后一个“单词”。因此，例如“Charles Le Fabre”将是“Fabre”，而不是“Le Fabre”。
>
> 我对不会增加太多复杂性的更好实现方法持开放态度，只需开始讨论。
## 许可证

根据[非常开放许可证](http://veryopenlicense.com/)发布并免费提供。



