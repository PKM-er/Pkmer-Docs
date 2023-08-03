---
uid: 20230803212755
title: Obsidian 插件：【Readme】Metadata Menu
tags: ['obsidian插件', 'readme']
description: 对于数据质量爱好者和Dataview用户：访问和管理您的笔记的元数据
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Metadata Menu

> [!Note] 插件名片
> - 插件名称：Metadata Menu
> - 插件作者：mdelobelle
> - 插件说明：对于数据质量爱好者和Dataview用户：访问和管理您的笔记的元数据
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mdelobelle/metadatamenu)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?metadata-menu)

## 概述

对于数据质量爱好者和Dataview用户：访问和管理您的笔记的元数据



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mdelobelle/metadatamenu/master/README.md)
> 

---

## Readme(翻译）

下面是 [[metadata-menu]] 插件的自述翻译



# 元数据菜单
该插件是为数据质量爱好者而设计的：可以访问和管理Obsidian笔记中的元数据。

通过右键单击链接或在dataview表格中，Metadata Menu可以添加上下文菜单项来修改目标笔记的frontmatter字段和“内联字段”（dataview语法）。

您可以在插件的设置中全局定义这些字段的预设类型和值，也可以通过fileClass定义逐个文件进行定义。

它还可以根据预设值为内联字段的frontmatter提供自动完成功能。

完整的文档请参阅：https://mdelobelle.github.io/metadatamenu

[demo 1](https://youtu.be/7bvIAkJf0OE)：基本功能、设置和字段类型

[demo 2](https://youtu.be/gU-StGyDciY)：自动完成和“句中”字段命令

[demo 3](https://youtu.be/sYudigxPEnY)：文件类型字段

[demo 4](https://youtu.be/PrbYaVh7N7g)：日期类型字段

[demo 5](https://youtu.be/Mq2tbA0RVM8)：输入类型字段的模板

[demo 6](https://youtu.be/QxXSuh7HUZY)：FileClass

[demo 7](https://youtu.be/6dEk9no269g)：用于间隔重复或日期推迟的时间偏移

[demo 8](https://youtu.be/ad0nJf8TZP8)：查找字段

[demo 9](https://youtu.be/zUcZWG7nWF4)：作为项目符号列表的查找字段

[demo 10](https://youtu.be/vc55ivQuHuY)：更好的选择和文件字段

[demo 11](https://youtu.be/I73uW8fqOZ8)：强化标签、多个fileClasses和元数据按钮

[demo 12](https://youtu.be/3jukvV7OODg)：Fileclass视图

[demo 13](https://youtu.be/7oaau8ijVUA)：画布字段

[demo 14](https://youtu.be/G47AYkmoKJs)：使用画布组字段创建看板板块

# 通用概念

元数据菜单可以管理位于前置元数据（YAML语法）或笔记正文中使用`field::`（dataview风格）语法的任何元数据字段。

## 字段类型
元数据菜单为每个字段提供了一个类型。
可用的类型有：
- `Input`（自由文本）：如果没有为该字段设置任何内容（参见＃字段设置），则默认应用此类型。它将`接受任何值`
- `Boolean`：可以`接受true或false`或null值的字段
- `Number`：可以`接受数字`（浮点数）值，可选地在范围（`min`，`max`）内，并且可以通过`step`值（默认为1）进行增加/减少
- `Select`：可以从列表中`接受单个值`的字段
- `Multi`：可以从列表中`接受多个值`的字段
- `Cycle`：将从列表中`循环显示值`的字段
- `File`：将从您的保险库中`接受文件链接`的字段
- `MultiFile`：将`接受多个链接`的字段
- `Date`：将`接受日期`的字段
- `Lookup`：将`接受查找查询`的字段
- `Canvas`：将根据画布中的链接`更新`的字段
- `Canvas Group`：将根据画布中的组`更新`的字段
- `Canvas Group Link`：将根据画布中的组链接`更新`的字段

## 字段设置
默认情况下，每个字段都是一个“输入”字段。

您可以为每个字段定义一个“字段设置”。

字段设置由以下内容组成：
- 名称
- 类型（参见上面的##字段类型列表）
- 根据类型的选项

字段设置可以在以下位置定义：
- 元数据菜单设置（参见＃元数据菜单设置）
- 在文件类别注释中（参见＃文件类别）

> 注意：如果一个字段在元数据菜单设置中和文件类别注释中都有定义，文件类别的设置将优先于元数据菜单设置中定义的设置。

## 控制
一个字段可以从多个位置进行修改或添加：
- 在编辑模式下进行自动补全
- Obsidian和插件菜单：文件浏览器、笔记、日历、链接的上下文菜单，以及其他许多未完全测试的插件...
- 如果安装了dataview插件，则可以在dataview表中进行修改或添加。

# 路线图
- [ ] 管理缩进列表多值前置字段

# 已知问题
- 自动补全与Various Complements插件冲突



