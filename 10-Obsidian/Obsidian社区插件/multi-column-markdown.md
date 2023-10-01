---
uid: 20230329145820
title: Obsidian 插件：Multi-Column Markdown Obsidian 也能分栏，超级方便无需 CSS 代码
tags: [Obsidian, 插件, 多列编辑, 分栏]
description: Obsidian 插件：Multi-Column Markdown Obsidian 也能分栏，超级方便无需 CSS 代码
author: OS
type: other
draft: false
editable: false
modified: 20230920221103
---

# Obsidian 插件：Multi-Column Markdown Obsidian 也能分栏，超级方便无需 CSS 代码

## 概述

在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档。

> [!Note] 插件名片
> - 插件名称：Multi-Column Markdown
> - 插件作者：ckRobinson
> - 插件说明：在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档。
> - 插件分类：[' 界面相关 ', ' 编辑工具 ', ' 美化 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/ckRobinson/multi-column-markdown)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?multi-column-markdown)

## 效果&特性

![Obsidian 插件：Multi-Column Markdown Obsidian 也能分栏](https://cdn.pkmer.cn/images/28aa9456049bdb0e79b47755d15af857_MD5.png!pkmer)

![Multi-Column Markdown](https://cdn.pkmer.cn/covers/multi-column-markdown.PNG!pkmer)

- 通过命令面板可以快速生成语法模板
- 语法模板里面进行配置，生成对应的填写空间
- 填写空间里面可以放入任意 Markdown 语法内容

## 使用

通过 命令面板，或者自定义快捷键方式，快速输入多栏语法

![Obsidian 插件：Multi-Column Markdown Obsidian 也能分栏](https://cdn.pkmer.cn/images/5ed3d6714f9742d671fb2b437d251765_MD5.png!pkmer)

- 选择后会自动插入对应的模板
- 代码域内 `star-multi-column` ,表示的是 ID，用于引用
- 代码域内 Number of Columns，代表你需要分栏的数量
- 代码域内 可通过 border 参数:
    - on：开启多栏的边框
    - off：关闭，不显示多栏的边框。
- 代码域内 可通过 Largest Column 参数，来控制分栏大小。
    - 双列或三列布局
        - Standard：平分
        - Left：最左侧的大一些
        - First：左数第一列大一些
        - Right：最右侧的大一些
        - Second：左数第二列大一些
    - 仅使用三列布局
        - Center：中间列大一些
        - Third：左数第三列大一些
        - Middle：中间列大一些
- 代码域内 Shadow 参数
    - off ，关闭阴影
    - on ，显示阴影
- 代码域 Column size 参数：控制单栏的大小，仅能用于单列
    - Small
    - Medium
    - Large
    - Full
- 代码域内 Column Position or Column Location: 参数：仅能用于单列，控制栏的对齐位置
    - Left
    - Right
    - Center
    - Middle
- 代码域内 Alignment 参数：控制栏内文本对齐方式 - Left (Default) - Center - Right
    ![Obsidian 插件：Multi-Column Markdown Obsidian 也能分栏](https://cdn.pkmer.cn/images/0fd834d8560094b69271079e4c5daba6_MD5.png!pkmer)

- 每一栏的内容：就按照平时输入笔记的方法输入内容就是了
- 每一栏后面都要跟一条结束语句<kbd>=== end-column ===</kbd>
- 最后一栏内容结束时没有此<kbd>=== end-column ===</kbd>语句，而是跟此<kbd>=== multi-column-end</kbd>语句

## 语法参考

### 区域起始标签

每个多列区域必须以以下之一开始：

> \```start-multi-column \
> ID: A_unique_region_ID\
> \```

或

> \```multi-column-start \
> ID: A_unique_region_ID_1\
> \```

或

> ::::: {.columns id=A_unique_region_ID_2}\
> *(有关 Pandoc 的围栏 div 语法的更多信息，请参见下文。)*

在定义起始标签之后，必须为该区域声明一个 ID。如果同一文档中有多个区域，则使用 ID 来区分它们。

每个 ID 在同一文档中必须是唯一的，否则可能会出现意外的渲染问题。可以在多个文档中使用相同的 ID，以便例如在用于您的周期性笔记的模板中使用 ID“dailynote”。

通过使用“插入多列区域”命令（更多信息请参见下文），起始 ID 将预先设置为一个随机生成的 4 个字符的字符串。

您还可以使用“修复缺失的 ID”命令，在当前打开的文档中搜索并为所有缺少 ID 的区域附加随机 ID。

### 有效的语法标签

每种标签类型可以使用以下选项进行定义：

#### 开始多列区域

> \```start-multi-column\
> ID: A_unique_region_ID\
> *任何其他设置标志（见下文）*\
> \```

> \```multi-column-start\
> ID: A_unique_region_ID_2\
> *任何其他设置标志（见下文）*\
> \```

> ::::: {.columns id=A_unique_region_ID_2 *任何其他设置标志（见下文）*}

#### 结束多列区域

\--- end-multi-column\

\--- multi-column-end\

> :::\
> *(只有在使用 Pandoc 围栏 div 语法开始一个区域时，此结束区域语法才有效。)*

#### 结束一列

\--- column-end \---\

\--- end-column \---\

\--- column-break \---\

\--- break-column \---\

> ::: columnbreak\
> :::\
> *(在列断点后需要换行。)*

## 已知问题

### 实时预览

- 任何文件交互都会导致嵌入内容重新加载。
    - 所有这类问题都是由于 Obsidian 在每次文件交互（点击、按键等）时重新绘制整个编辑器引起的。重新绘制会导致所有嵌入内容重新加载，使它们在屏幕上闪烁。目前还没有解决这个问题的方法。
- 与其他插件的某些交叉兼容性不受支持，无法渲染。
    - 大多数无法渲染的插件都是更高级的插件，它们会在渲染时逐步加载内容，而不是立即加载。
- 在文档内点击会导致文档在重新定位到光标位置之前闪烁。
- 在编辑器外点击，然后再点击回来，可能会在某些情况下导致视口跳到编辑器底部。

### 代码块开始标签

- 在同时打开同一文档的编辑视图和阅读视图时，使用代码块开始标签会导致渲染问题。

### 次要渲染问题

- 任何列中的一般渲染问题：
    - 如果列以意外的方式呈现其内容，请尝试切换到一个新文件，然后再切换回来，这通常可以解决问题。
- 在多列区域中输入数据时，数据有时会在预览窗口中的预期位置的上方或下方呈现。当该行靠近列或区域的开头或结尾时，它可能会在错误的列或完全在区域之外呈现。
- 将文本复制并粘贴到区域内的新位置时，预览视图可能无法正确更新。
- 在自动布局或单列之间切换时，区域有时可能会卡在呈现旧布局的状态。
- 自动布局区域有时会卡在非等高状态。
    - 解决方法：
        - 切换到另一个文件然后再切换回来，或者关闭并重新打开文件将强制重新加载数据并修复渲染问题。

### 其他

- 使用 pandoc 列导出包含其他嵌入的围栏 div 的文档将无法正确导出。
- 对文档的更改可能需要重新加载文件才能正确更新多列重排。
- 在多列重排中，长段落的文本不会跨列分割，因为 Obsidian 将其呈现为单个内容块。

> [!Tip] 提示
> 这个方法，会引入一个插件，如果你担心插件的稳定性或是希望更加清爽，那么可以参考别的方法