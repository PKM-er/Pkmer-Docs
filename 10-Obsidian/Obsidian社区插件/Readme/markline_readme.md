---
uid: 2024022121193768
title: Obsidian 插件：【Readme】Markline
tags: ['obsidian插件', 'readme']
description: Markdown中的时间轴视图
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Markline

> [!Note] 插件名片
> - 插件名称：Markline
> - 插件作者：闲耘
> - 插件说明：Markdown 中的时间轴视图
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/hotoo/obsidian-markline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markline)

## 概述

Markdown 中的时间轴视图

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/hotoo/obsidian-markline/master/README.md)
>

---

## Readme(翻译）

下面是 [[markline]] 插件的自述翻译

【机翻】

# 黑曜石标记线

这是 [Markline](https://github.com/hotoo/markline) 的一个分支，可以在黑曜石编辑器中从 markdown 中显示时间轴视图。

## 特性

- 在 Obsidian 编辑器中使用 `markline` 代码块显示时间轴视图。
- 通过命令添加 markline 代码块引用。

![屏幕截图](https://cdn.pkmer.cn/covers/markline_2_0.png!pkmer)

## 安装

社区插件很快就会发布在 <https://github.com/obsidianmd/obsidian-releases/pull/2779>

手动安装：

1. 将 [最新版本](https://github.com/hotoo/obsidian-markline/releases/latest) 解压到您的 `<vault>/.obsidian/plugins/markline` 文件夹中。
2. 重新加载 Obsidian.app
3. 在社区插件部分的设置中启用插件。

您也可以使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat/) 插件来安装最新版本。

```markline```

# 我的文档标题

## 组名（可选）

- 2023 一整年的活动。
  - 2023-01~2023-03 子活动
  - 2023-05~2023-08 子活动 2
- 2023-01 月活动名称。
- 2023-01-02 带有 [链接](https://github.com/hotoo/obsidian-markline) 的活动名称。

## 另一组

- 2013 另一个列表项。
- 2013-05-05 再一个列表项。

## Markdown

Markdown 是如此简单，又如此强大，你可以使用它来构建时间线图。

Markline 现在使用 Markdown 的子集：

### 日期

```markdown
* 年份为1986。
* 月份为1986/06。
* 1986/06/28 是一个好日子。
* 你也可以使用1986-06-28这种日期格式。
```

### 日期范围

```markdown
* 2012~2014 年至年。
* 2012~2014/02 年至年。
* 1986/06/28~1986/08/14 从一个日期到另一个日期。
* 2012~ 年至现在。
```

### 标题

# 标题

## h2 组名

### h3 组名

#### h4 组名

##### h5 组名

###### h6 组名

### 元数据

在标题和组或行之间，我们可以通过键值对在 markdown 中设置元数据。

# 标题

- 年龄：显示
- 日期：2014/01/01
- 作者：@hotoo
- 提及：<https://twitter.com/{@mention}>

----

# 组 1

* 2014 年第 1 行。

```

现在我们支持元数据：

* `age`：在顶部标题行中的年份后显示年龄。默认为隐藏，如果想要显示，设置为：

  ```markdown
  - age: show
  ```

* `mention`：设置提及启用，并设置提及基本 URL。默认情况下提及是禁用的。

  ```md
  # @提及演示

  - mention: https://github.com/{@mention}

  ----

  - 2014年 @hotoo 提及 @lizzie
  ```

  `{@mention}` 是提及名称的占位符。

* 标签和颜色：直接使用 `#FF0000` 或标签自定义样式。

  ```md
  # #标签演示

  - 标签:
    - #标签名称: 背景颜色, 文本颜色
    - #生活: 黄色, #f00
    - #工作: rgb(255,255,255), rgba(255,0,0,0.5)
    - #一些标签: 红色

  ----

  - 2014年这是我的 #生活
  - 2023年这行的颜色是红色 #f00
  
  ## 组 #F00
  - 2023年这个组中的所有事件都是红色的。
  - 2023年红色的行。

  ## 组 #F00 #0F0
  - 2023年这个组中的所有事件都是红色条和绿色文本。
  - 2023年红色条和绿色文本。
  ```

即将支持以下元数据。

* `theme`：通过内置主题名称或主题 CSS 文件 URL 设置不同的主题。

  ```markdown
  - theme: light
  - theme: http://www.example.com/theme.css
  ```

* `year-length`：设置日期列宽度。
* `date-type`：按 `年`、`月` 或 `日期` 显示日期类型
* `author`：设置作者信息。

```markdown
* 2014列表项
  * 2014/01子列表项

- 2014另一个列表项
  - 2014/01另一个子列表项
```

### 水平

对于匿名团体。

```markdown
* 2014 行 1

----

* 2015 行 2
```

### 链接

```markdown
* 2014 这是一个 [link](url)
* 2014 这是一个 [[inner link]]
```

### 图片

```markdown
* 2014 这是一张图片: ![alt](image-url)
* 2014 这是一个内部图片: ![[image file]]
```

```markdown
* 2014 这是 **强调** 文本。
* 2014 这是 __另一个强调__ 文本。
```

```markdown
* 2014 这是 _强调_ 文本。
* 2014 这是 *另一个强调* 文本。
```

### 删除

```markdown
* 2014 this is ~delete~ text.
* 2014 this is ~~another delete~~ text.
```

* [Markdown 语法](http://daringfireball.net/projects/markdown/syntax)
