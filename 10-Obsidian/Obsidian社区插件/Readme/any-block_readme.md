---
uid: 20230807143745
title: Obsidian 插件：Any Block
tags: ['obsidian插件', 'readme']
description: 您可以通过某种方式灵活地创建一个“块”。它还提供了一些有用的功能，比如`列表转表格`。
author: AI
type: readme
draft: false
editable: false
modified: 20230811095110
---

# Obsidian 插件：Any Block

> [!Note] 插件名片
> - 插件名称：Any Block
> - 插件作者：LincZero
> - 插件说明：您可以通过某种方式灵活地创建一个“块”。它还提供了一些有用的功能，比如 `列表转表格`。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/LincZero/obsidian-any-block)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?any-block)

## 概述

黑曜石插件 AnyBlock（后文可能会简称 `AB` ）。你可以通过一些方法灵活地创建一个“块”。

同时该插件提供了一些实用的功能，例如 `列表转化为表格`

插件由两个核心部分组成：**选择器**和**处理器。**

选择器可以选择一段文本区域，并将其转化为“块”。

处理器可以将选择器转化为的“块”，进行一定程度的再处理。

![Any Block](https://cdn.pkmer.cn/covers/any-block.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/LincZero/obsidian-any-block/main/README.md)
>

---

## Readme(翻译）

下面是 [[10-Obsidian/Obsidian社区插件/any-block]] 插件的自述翻译

# obsidian-any-block

一个 Obsidian 插件。您可以通过某种方式灵活地创建一个“块”。

功能：块转换、列表转表格或其他树状图

如果有错误，请尝试关闭“严格换行”。

## 简介

说其中一些比较常用的处理器：

- 列表转表格
- 列表转列表格
- 列表转流程图
- 列表转思维导图
- 列表转标签栏
- 列表转时间线
- 标题转列表从而转其他（can use title2list processor）

![](https://cdn.pkmer.cn/images/202308110925636.png!pkmer)

![](https://cdn.pkmer.cn/images/202308110925637.png!pkmer)

![](https://cdn.pkmer.cn/images/202308110925638.png!pkmer)

![](https://cdn.pkmer.cn/images/202308110925639.gif!pkmer)

![](https://cdn.pkmer.cn/images/202308110925640.gif!pkmer)

![](https://cdn.pkmer.cn/images/202308110925641.png!pkmer)

![](https://cdn.pkmer.cn/images/202308110925642.png!pkmer)

![](https://cdn.pkmer.cn/images/202308110925643.png!pkmer)

![](https://cdn.pkmer.cn/images/202308110925644.png!pkmer)

![](https://cdn.pkmer.cn/images/202308110925645.gif!pkmer)

![](https://cdn.pkmer.cn/images/202308110925647.png!pkmer)

![](https://cdn.pkmer.cn/images/202308110925648.gif!pkmer)

![](https://cdn.pkmer.cn/images/202308110925649.gif!pkmer)

![](https://cdn.pkmer.cn/images/202308110925650.png!pkmer)

## 教程文档

- [[0 - 基础教程]]
- [[1 - 使用示例 - 列表选择器]]
- [[2 - 使用示例 - 代码块引用块选择器]]
- [[3 - 使用示例 - 全局选择器]]
- [[4 - 使用示例 - 更多处理器]]
- [[10-Obsidian/Obsidian社区插件/any-block/any-block]]
- [[9 - For Developer]]
- [[10 - TODO]]

## Todo

**(Don't repet it in issue)**

- reinforce
	- 选择器
		- **嵌套选择器**
		  没有嵌套的程序是没有灵魂的 !!!
		  （但问题在于，例如说第一层是 tree，可能会破坏结构，有歧义。因为现在的 tree 格式是 number-str 的，那需要 number-dom 才行）
		  （或者说：列表选择器不能嵌套列表选择器有歧义，需要嵌套引用选择器，在此基础上你解除引用选择器间接嵌套）
	- 处理器
		- QA 处理器
		- 优化 2ultable，在这个模式中让内联换行变成同级换行而非下级换行的意思
	- 层级
		- 负级列表开关
		- 根据层级关系，推荐合理的处理器（如检测到树相关的就推荐树类处理器）
	- 样式
		- 树表格的间隔着色样式获取可以优化
		  方案 1：例如多行的格可以视情况使用渐变（单数不用，复数需要，但会不会有不统一的问题）？
		  方案 2：仿 mindmap 的着色，后面的列就不要隔行着色了
	- 转化
		- 右键选择转化为：md 原生 (表格)/html 格式/图片
- fixing bug
	- 复选框列表的兼容、有序列表的兼容
	- **引用块内的列表/列表内的引用块 无法识别**
	- **表格转置与表头符号冲突、转置模式目前是纯 css 实现的 如果大家的行高不相同，会出现不匹配的情况。**
	  后续会将 css 实现改进为转化 table元素实现

Reference、import

- [html-to-md](https://github.com/stonehank/html-to-md)
- [mermaid](https://github.com/mermaid-js/mermaid)



