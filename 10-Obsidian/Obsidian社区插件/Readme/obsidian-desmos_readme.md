---
uid: 2023080322171489
title: Obsidian 插件：Desmos
tags: ['obsidian插件', 'readme']
description: 将Desmos图形嵌入您的笔记中
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Desmos

> [!Note] 插件名片
> - 插件名称：Desmos
> - 插件作者：Nigecat
> - 插件说明：将 Desmos 图形嵌入您的笔记中
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Nigecat/obsidian-desmos)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-desmos)

## 概述

将 Desmos 图形嵌入您的笔记中

![Desmos](https://cdn.pkmer.cn/covers/obsidian-desmos.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Nigecat/obsidian-desmos/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-desmos]] 插件的自述翻译

# 黑曜石 Desmos

在你的笔记中直接渲染 [Desmos](https://www.desmos.com/calculator) 图形。

可以在线和 [离线](#offline-usage) 使用。

![演示](https://user-images.githubusercontent.com/48661288/159597221-afc18198-5a3f-4a58-a6b2-a3a552a92a7f.png)

# 安装

### 自动（推荐）

在内置的 Obsidian 社区插件浏览器中搜索 `Desmos`，然后从那里安装它。

### 手册

从 [最新版本](https://github.com/Nigecat/obsidian-desmos/releases/latest) 下载附带的文件，并将它们放置在 `<vault-root>/.obsidian/plugins/obsidian-desmos/` 目录中（您可能需要创建任何缺失的目录），然后启用社区插件（如果需要），并切换 `Desmos` 插件。

# 导出

如果您希望将带有图形的笔记导出为 PDF，则必须启用缓存并且图形必须在缓存中（表示您至少查看过一次）- 因为无论如何 Obsidian 进行 PDF 导出都会导致 Desmos API 中断并且无法返回渲染的图形。

# 用法

这个插件的最基本用法是创建一个带有 `desmos-graph` 标签的代码块，并在其中放置你想要绘制的方程：

````
    ```desmos-graph
    y=x
    ```
````

<details>
  <summary>查看图形</summary>

  ![linear](https://user-images.githubusercontent.com/48661288/158956700-96525ec7-20bb-4da6-9314-106a6c43eced.png)

</details>

方程使用 [LaTeX数学](https://en.wikibooks.org/wiki/LaTeX/Mathematics) 格式，你可以通过将每个方程放在单独的一行上来绘制多个方程：

````
    ```desmos-graph
    y=\sin(x)
    y=\frac{1}{x}
    ```
````

<details>
  <summary>查看图形</summary>

  ![latex](https://user-images.githubusercontent.com/48661288/158957163-2b561a94-08b0-40fa-b725-0e8957bd696c.png)

</details>

你可以通过在方程之前放置一个 `---` 分隔符来限制图形的范围并应用其他设置。它之前的内容必须是一组以**换行符或分号**（或两者都有）分隔的 `key=value` 对：

````
    ```desmos-graph
    left=0; right=100;
    top=10; bottom=-10;
    ---
    y=\sin(x)
    ```
````

<details>
  <summary>查看图形</summary>

  ![restriction](https://user-images.githubusercontent.com/48661288/158957249-eb3f063e-e4c4-4d50-9935-d4fb95fd2336.png)

</details>

你可以通过使用 `height` 和 `width` 字段来设置渲染图像的尺寸。

此外，你可以通过设置 `grid=false` 来禁用图形网格。

你可以通过使用 `degreeMode` 设置来设置三角函数的模式。

它有两个有效值：`radians` 或 `degrees`。默认情况下，它将被设置为 `radians`。

## 方程控制

您还可以为每个方程设置三个其他字段 - 样式、颜色和限制。每个字段都必须放置在方程后面的一系列 `|` 字符之间（可以任意顺序）。

有效的颜色有（不区分大小写）：

 - `RED`
 - `GREEN`
 - `BLUE`
 - `YELLOW`
 - `MAGENTA`
 - `CYAN`
 - `PURPLE`
 - `ORANGE`
 - `BLACK`
 - `WHITE`
 - 以 `#` 开头的任何十六进制颜色代码（例如 `#42ddf5`）

请注意，可以使用图形设置中的 `defaultColor` 字段来设置默认颜色。该字段遵循相同的格式。

有效的样式有（不区分大小写）：

 - 线（例如 `y=x`）
    - `SOLID`（默认）
    - `DASHED`
    - `DOTTED`
 - 点（例如 `(1,4)`）
    - `POINT`（默认）
    - `OPEN`
    - `CROSS`

例如，如果我们想要创建一条绿色虚线 `x=2`，并且限制条件为 `y>0`，我们可以使用以下任何一种方式。

````
    ```desmos-graph
    x=2|y>0|green|dashed
    ```
````

````
    ```desmos-graph
    x=2|y>0|dashed|green
    ```
````

````
    ```desmos-graph
    x=2|green|y>0|dashed
    ```
````

````
    ```desmos-graph
    x=2|dashed|green|y>0
    ```
````

（你明白了）

<details>
  <summary>查看图形</summary>

  ![equation-control](https://user-images.githubusercontent.com/48661288/158956490-9d4eaf54-4ae6-4b1c-9f49-18e3eb456650.png)

</details>

此外，可以使用 `hidden` 标志隐藏单个方程，这在绘制导数等内容时非常有用：

````
    ```desmos-graph
        f(x)=x^2|hidden
        f'(x)
    ```
````

<details>
  <summary>查看图形</summary>

  ![hidden](https://user-images.githubusercontent.com/48661288/161505291-9a28618a-d14e-48ec-9d5e-14b7235db733.png)

</details>

### 标签

可以使用 `label:<内容>` 标志来指定点标签（Desmos 不支持方程标签）：

````
    ```desmos-graph
        (0,0)|label:(0,0)
        (5,4)|open|label:这是一个标签
    ```
````

<details>
  <summary>查看图表</summary>

  ![label](https://user-images.githubusercontent.com/48661288/163488878-a1d8daeb-8ac6-41e7-9a6c-899b0a7f3c5f.svg)

</details>

# 自定义样式

`obsidian-desmos` CSS 类应用于所有图形。可以在主题和片段中使用它来覆盖某些行为。

例如，如果您希望所有图形在页面内容中居中显示，可以使用以下片段：

```css
/* 在页面内容中水平居中图形 */
.desmos-graph {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
```

# 离线使用

如果您在连接到互联网时至少渲染了一个图形，那么以后的任何图形（无论缓存设置如何）都应该能够渲染（如果不能，请在此处提出问题）。

* 需要在插件设置中启用传统 API 模式。
