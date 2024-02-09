---
uid: 20231220185749
title: Obsidian 插件：Slash Commander
tags: [Obsidian, 插件]
description: 定制 slash 命令列表。
author: alephpiece
type: other
draft: false
editable: false
modified: 20240108111446
---

# Obsidian 插件：Slash Commander

斜杠命令（slash commands）是用斜杠 `/` 字符启动的命令。Obsidian 核心插件 `Slash commands` 提供的斜杠命令功能可用来启动任何命令，完全就是另一个命令面板。

这个插件提供可定制的斜杠命令列表，只显示自己添加的命令。它是基于 Obsidian Commander 的代码开发的，和下面几个相似的社区插件有不同：

- [[cmdr|Commander]]：没有斜杠命令列表。
- [[typing-assistant_readme|Typing Assistant]]: 有斜杠命令列表，但不能定制。
- [Better Slash Commands](https://github.com/SPiCaRiA/obsidian-better-slash-commands): 有斜杠命令列表，但不能定制。

> [!Note] 插件名片
> - 插件名称：Slash Commander
> - 插件作者：alephpiece
> - 插件说明：定制 slash 命令列表。
> - 插件分类：[' 界面相关 ', ' 效率 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/alephpiece/obsidian-slash-commander)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?slash-commander)

## 效果&特性

替换 Obsidian 原本的 `Slash commands` 核心插件。

![slash-commander-usage](https://cdn.pkmer.cn/images/202401051923469.gif!pkmer)

命令列表完全可由自己定制，相当于一个命令收藏列表。

![slash-commander-add](https://cdn.pkmer.cn/images/202401051923398.gif!pkmer)

其他特性：

- 可以更换斜杠命令的触发字符。如果改成 `/` 以外的字符，可以跟核心插件 `Slash commands` 一起使用。
- 可以只在每一行的行首启用。

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Slash Commander
3. 安装
4. 开启插件

## 使用

### 触发

开启插件后，在笔记中输入 `/` 即可启动。如果 `/` 不生效，请检查是否同时开启了核心插件 `Slash commands` 或其他同样使用 `/` 触发符的插件。

![slash-commander-usage-simple](https://cdn.pkmer.cn/images/202401051923170.gif!pkmer)

### 增加命令

进入 Slash Commander 设置即可添加或修改要显示的命令。命令可以同名，如果它们同名但来自于不同的插件，插件名（或 Obsidian）可以显示出来。

![slash-commander-usage-add](https://cdn.pkmer.cn/images/202401051924185.gif!pkmer)

### 修改触发字符

默认的 `/` 触发字符可以修改。

![slash-commander-usage-trigger](https://cdn.pkmer.cn/images/202401051923170.gif!pkmer)

### 只在行首触发

默认情况下，斜杠命令会在一行中的任何空格后面触发，可以修改选项让斜杠命令只在行首触发。

![slash-commander-usage-newline](https://cdn.pkmer.cn/images/202401051923701.gif!pkmer)

### 显示说明

可以显示命令的说明。

![slash-commander-usage-description](https://cdn.pkmer.cn/images/202401051923680.gif!pkmer)