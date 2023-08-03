---
uid: 2023080322233255
title: Obsidian 插件：Obsidian Math+
tags: ['obsidian插件', 'readme']
description: 这是一个使用Excalidraw进行数学笔记的Obsidian插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Math+

> [!Note] 插件名片
> - 插件名称：Obsidian Math+
> - 插件作者：Oscar Capraro
> - 插件说明：这是一个使用 Excalidraw 进行数学笔记的 Obsidian 插件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ocapraro/obsidian-math-plus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-math-plus)

## 概述

这是一个使用 Excalidraw 进行数学笔记的 Obsidian 插件。

![Obsidian Math+](https://cdn.pkmer.cn/covers/obsidian-math-plus.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-math-plus]] 插件的自述翻译

Obsidian Math+ 是一个快速高效地记录数学笔记的插件。

[<img style="float:left" src="https://user-images.githubusercontent.com/14358394/115450238-f39e8100-a21b-11eb-89d0-fa4b82cdbce8.png" width="200">](https://ko-fi.com/ocapraro)

<br><br>

## 用法

运行“插入数学块”命令，可以使用命令面板或 `cmd + M` 快捷键。这将为您创建一个数学块，您可以使用 LaTeX 编写这些笔记，或者直观地编写方程式，插件将尽力解析它们。

![渲染的方程式](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/editor-to-rendered.png)

现在，您的笔记已经被渲染，您可以通过点击块右上角的笔图标进入绘图模式。

这将在数学块上打开一个 [Excalidraw](https://github.com/excalidraw/excalidraw) 实例，以便您可以轻松添加自由形式的注释。

> **注意：**这仅在实时预览模式下有效

![excalidraw](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/math-annotated.png)

要保存您的绘图，请按右上角的勾号，您的绘图将被渲染为 SVG 格式。

![excalidraw svg](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/math-annotated-svg.png)

## 设置

**保存数据路径**

此设置允许您更改绘图和绘图数据保存的位置。

![路径设置](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/assets/path-settings.png)

**快捷键**

快捷键设置允许您输入自定义命令，以在数学块中输入时转换为 LaTeX。

```
{
  "op":"COMMAND",
  "format":"LATEX"
}
```

您还可以通过使用 `%s1%` 或 `%s2%` 来传递参数给快捷方式，以表示快捷方式之前或之后的字符或组。

```
{
  "op":"/",
  "format":"\frac{%s1%}{%s2%}"
}
```

此快捷方式使得每当您键入 `/` 时，它将获取其之前的字符或组，并将其放入分数格式中。例如，`3/17` 将变为 `\frac{3}{17}`，`{x-5a}/2` 将变为 `\frac{x-5a}{2}`。所有快捷方式必须保持正确的 JSON 格式。

![数学块大小设置](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/assets/shortcuts-settings.png)

使用更新按钮应用您的快捷方式更改。

**颜色**

在这里，您可以更改笔记时可选择的三种默认颜色，或者打开即时自定义颜色选择器。

![颜色设置](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/colors-settings.png)

**数学块大小**

这允许您更改数学块的大小。

![数学块大小设置](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/assets/math-block-size-settings.png)

**实时预览设置**

这允许您切换实时预览的开启和关闭。

![实时预览设置](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/assets/live-preview-settings.png)

**元数据设置**

这允许您切换代码块中存储的一些元数据的开启和关闭。

![元数据设置](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/assets/metadata-settings.png)

**Excalidraw 用户界面**

Excalidraw 有很多绘图工具，您可以根据需要在此处切换开启或关闭。

![Excalidraw用户界面设置](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/excalidraw-ui-settings.png)

**Excalidraw 设置**

您可以在此处切换网格模式的开启和关闭。

![Excalidraw设置](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/excalidraw-settings-settings.png)
