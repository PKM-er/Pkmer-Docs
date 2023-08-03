---
uid: 20230803212857
title: Obsidian 插件：【Readme】Obsidian markmind
tags: ['思维导图', 'PDF', 'obsidian插件', 'readme']
description: 让你在 Osidian 中绘制思维导图、大纲和 PDF文件标注工具。包括多种模式，包括导图模式，表格模式，类白板模式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian markmind

> [!Note] 插件名片
> - 插件名称：Obsidian markmind
> - 插件作者：Mark
> - 插件说明：让你在 Osidian 中绘制思维导图、大纲和 PDF文件标注工具。包括多种模式，包括导图模式，表格模式，类白板模式。
> - 插件分类：['思维导图', 'PDF', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/MarkMindCkm/obsidian-markmind)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-markmind)

## 概述

让你在 Osidian 中绘制思维导图、大纲和 PDF文件标注工具。包括多种模式，包括导图模式，表格模式，类白板模式。

![Obsidian markmind](https://cdn.pkmer.cn/covers/obsidian-markmind.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MarkMindCkm/obsidian-markmind/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-markmind]] 插件的自述翻译



# Obsidian MarkMind

[Chinese Manual](https://github.com/MarkMindCkm/obsidian-MarkMind/blob/main/docs/%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.md)

### **注意**

这不是一个开源项目，但是[lishid](https://github.com/lishid)（obsidian开发者）可以检查这段代码。

### 功能比较

| 免费版                                     | Catalyst专业版                                           |
| ---------------------------------------- | -------------------------------------------------- |
|  MindMap的`基本`模式                 | MindMap的`丰富`模式中的高级功能        |
|  MindMap的`丰富`模式中的大多数功能 | PDF批注                                       |
|  列表模式                               | 支持开发                                |
|  支持PC和移动设备                   | 支持PC和移动设备                              |
|  不支持                             | 导出思维导图为pdf文件                         |
|  $0                                      | $12（永久购买）购买[链接](https://www.MarkMind.net) |

您可以免费试用30天。30天后，您可以在网站上购买激活码。

## MarkMind文档导航

### MarkMind
- [创建思维导图的基本模式](https://markmindckm.github.io/markmind-docs/index.html#/basic)
- [将基本模式显示为大纲](https://markmindckm.github.io/markmind-docs/index.html#/outline)
- [将基本模式显示为表格](https://markmindckm.github.io/markmind-docs/index.html#/table)
- [创建思维导图的丰富模式](https://markmindckm.github.io/markmind-docs/index.html#/rich)
- [从丰富模式的思维导图获取Markdown文本](https://markmindckm.github.io/markmind-docs/index.html#/markdown)
- [复制和粘贴思维导图的节点](https://markmindckm.github.io/markmind-docs/index.html#/copy)
- [在其他Markdown文件中嵌入思维导图](https://markmindckm.github.io/markmind-docs/index.html#/embed)
- [思维导图的常见操作](https://markmindckm.github.io/markmind-docs/index.html#/common)
   - 从桌面拖动图像到思维导图的丰富模式
   - 从浏览器复制文本到思维导图
   - 拖动多个节点

### PDF注释工具
- [安装和功能](https://markmindckm.github.io/markmind-docs/index.html#/pdfAnnotator)
- [从PDF文件中提取注释](https://markmindckm.github.io/markmind-docs/index.html#/highlight)
- [将高亮和注释保存到PDF中](https://markmindckm.github.io/markmind-docs/index.html#/commitHighlight)
- [将思维导图节点与注释关联](https://markmindckm.github.io/markmind-docs/index.html#/relate)

介绍

Obsidian MarkMind是一款基于Obsidian API的思维导图、大纲和PDF批注工具。

### 特点：

- 链接
- **内联** ~~文本~~ *样式*
- <p> 多行<br>
   文本</p>
- `内联代码`
- Katex - $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$

### 链接：

- GitHub: https://github.com/MarkMindCkm/obsidian-MarkMind
- 更新日志：[点击这里](/Changelog.md)
- 网站：https://www.MarkMind.net
- 加入我们的Discord：https://discord.gg/8653ZWX649
- 中文说明：[中文手册](https://github.com/MarkMindCkm/obsidian-MarkMind/blob/main/docs/%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.md)

### 相关链接：

- [coc-markmap](https://github.com/gera2ld/coc-markmap)
- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)

## 创建一个思维导图文件

- 它包含两种模式：`基本`和`丰富`
- 你可以通过以下方式创建一个思维导图文件：
   - 右键点击一个文件夹，选择`新建思维导图板`
   - 手动添加YAML代码：

```YAML
---

mindmap-plugin: basic (或 rich)

---
```

## 模式

您可以将基本思维导图功能与大纲或表格模式结合使用。它的工作方式类似于增强MindMap插件。所有这些模式在丰富模式中也都可用。

#### 大纲

要访问大纲模式，您可以选择以下方式之一：

- 单击笔记上的“更多选项”，然后选择“打开大纲”
- 手动添加YAML代码：

```YAML
---

mindmap-plugin: basic
display-mode: outline

---
```

##### 思维导图大纲快捷键

| 功能                                 | 快捷键                                 |
| ------------------------------------- | ----------------------------------------- |
| 新建思维导图                          | CTRL/CMD + P                              |
| 新建子节点                        | Enter                                     |
| 缩进                                | Tab                                       |
| 取消缩进                              | Shift + Tab                                |
| 放大                               | CTRL/CMD + ] or 双击节点 |
| 缩小                              | CTRL/CMD + [                              |
| 放大/缩小                           | CTRL + 鼠标滚轮                        |
| 将思维导图居中                    | CTRL/CMD + E                              |
| 上移或下移节点                  | CTRL/CMD + 上/下                        |
| 删除节点                           | Delete/Backspace                          |
| 编辑节点                             | Space/双击节点                   |
| 撤销                                  | CTRL/CMD + Z                              |
| 重做                                  | CTRL/CMD + Y                              |
| 展开/折叠节点                  | CTRL/CMD + /                              |
| 将节点移动到另一个节点             | 拖放节点                        |
| 制表节点                              | 上/下/左/右                        |
| 更改思维导图布局                 | 选择节点, CTRL/CMD + U/D/L/R/M/J/K/T/Q |
| 删除摘要/边界/相关链接  | Delete/Backspace                          |

![outline](https://user-images.githubusercontent.com/18719494/138630597-fc2396d1-c818-43dc-83eb-fa638d8a0028.gif)

#### 表格

要访问表格模式，您可以选择以下方式之一：

- 单击笔记上的`更多选项`，然后选择`以表格形式打开`
- 手动添加YAML代码：

```YAML
---

mindmap-plugin: basic
display-mode: table

---
```

![table](https://user-images.githubusercontent.com/18719494/150626028-8d8733d5-8cd2-4eaf-b369-73ebbbcc5244.gif)

### 丰富模式

在丰富模式下，您可以使用基本模式的所有功能。此外，您还可以：

- 添加摘要
- 添加边界
- 添加与节点相关的链接
- 添加自由节点

#### 富文本模式的Markdown格式：

```YAML
---

mindmap-plugin: rich

---

# md 

{JSON 数据}
```

<img src = 'https://user-images.githubusercontent.com/18719494/130028629-1a1e448d-32b9-4201-b152-1ad09439e18e.gif' width="800px">

### 其他功能

- 将思维导图导出为图片
   - 使用 `CTRL + P` 并点击 `导出为HTML` 命令
- 在 `富文本` 模式下获取 markdown
   - 在 `更多选项` 中可以找到 `复制为markdown` 菜单
- 将思维导图导出为pdf
   - 下载最新版本的Obsidian，在独立窗口中打开一个思维导图
   - 使用 `CTRL + P` 并点击 `将思维导图导出为pdf文件` 命令

<img src = 'https://user-images.githubusercontent.com/18719494/142220099-a69fa850-4ead-465a-98e5-f45611b48b55.gif' width='800px'>

## PDF批注

- 高亮文本
- 区域批注
- 关联思维导图节点和批注

### 如何使用PDF注释

1. 下载适用的PDFJS [插件](https://github.com/MarkMindCkm/obsidian-markmind/releases/download/1.5.9/pdfjs.zip)
2. 安装PDFJS插件：
   - 在Android上，创建一个`andriod`文件夹，然后将`pdfjs`文件夹解压到其中
   - 在IOS上，创建一个`ios`文件夹，然后将`pdfjs`文件夹解压到其中
      - PDFJS路径是单独设置的，如果没有设置，可以尝试使用`filza`应用程序，它可以找到Obsidian的路径
   - 在PC上，将`pdfjs`文件夹解压到`.obsidian`文件夹中
      - `CTRL/CMD + P`，点击`set up pdfjs plugin path`
   - 在Mac上，按下`Command + Shift + .`显示隐藏文件夹，将`pdfjs`文件夹解压到`.obsidian`文件夹中
   - 重新启动Obsidian
3. 确保这些文件夹存在于PDFJS文件夹中（VaultLocation\.obsidian\pdfjs）：
   - build
   - epub
   - epub.js
   - pdfextrct
   - web
4. 将以下YAML代码添加到MindMap文档中：

```YAML
---

annotate-target: test/test.PDF
annotate-type: pdf

---
```

5. 然后您可以在`更多选项`中找到`Annotate PDF`

### 矩形标注的截图文件夹

1. 在MindMap插件设置中，您可以设置一个文件夹路径
   - 这应该是一个相对路径，指向您的vault文件夹
2. 或者您可以在YAML中添加文件夹路径：

```YAML
---

annotate-target: test/test.PDF
annotate-type: pdf
annotate-image-target: assets/image

---
```

### 为annotate添加的快捷方式

| 功能               | 快捷键                          |
| ------------------ | ------------------------------- |
| 黄色高亮           | CTRL/CMD/ALT + Y                |
| 绿色高亮           | CTRL/CMD/ALT + G                |
| 蓝色高亮           | CTRL/CMD/ALT + B                |
| 粉色高亮           | CTRL/CMD/ALT + P                |
| 红色高亮           | CTRL/CMD/ALT + R                |
| 删除annotate       | CTRL/CMD/ALT + Delete/Backspace |

### 思维导图和PDF批注

1. 以思维导图的形式打开文件
2. 使用`[[]]`来引用PDF文件
3. 点击PDF引用，如果PDF插件路径正确，将会打开一个PDF阅读器
4. 使用PDF批注功能：
   - 默认情况下，它会在当前文件夹中创建一个`annos`文件，该文件以JSON格式存储批注数据
   - 如果在设置选项卡中将`保存PDF批注类型`设置为`markdown`，它将在当前文件夹中创建一个`${PDF名称}-annotate.md`文件
   - 每个批注都有一个关联的引用块
      - **请不要修改这些块**

### 关联思维导图节点和注释

有三种方法可以关联思维导图节点和注释：

1. 默认方式（仅支持富文本模式）
   - 创建一个PDF注释
   - 点击PDF注释
   - 编辑思维导图节点，按下 `CTRL/CMD + V` 来关联节点和注释
   - 点击节点的PDF注释，它将自动将注释的 `id` 复制到剪贴板中
2. 使用 Jumpto 协议 `obsidian://jump-to-PDF`（支持基本模式和富文本模式）
   - 在 MindMark 设置中，将 `Support protocol` 设置为 `Open`
   - 当你点击PDF注释时，它将自动创建一个PDF注释引用链接并复制到剪贴板中
   - 将其粘贴到Markdown文件中
3. 使用Markdown保存PDF注释（支持基本模式和富文本模式）
   - 你可以使用 `[[${md name}#${block reference}]]` 来将一个引用块与一个块引用关联起来
   - 当点击指向注释块引用的Obsidian链接时，它将打开相应的文件并滚动到关联的高亮处
   - 如果文件已经在一个窗格中打开，则该链接将导致现有窗格滚动

### 导入PDF高亮注释

1. 您可以使用`CTRL + P`，然后执行切换到富文本模式的命令
2. 从PDF导入高亮注释
   - 在打开PDF时，您可以在“更多选项”菜单中找到此选项
3. 您还可以将PDF注释导出为PDF格式
   - 在MindMap文档的“更多选项”菜单中
   - 您可以在MarkMind设置选项卡中设置所需的格式
   - 默认格式为：
```
页码：{{page}}
文本：{{highlightText}}
评论：{{comment}}
^{{id}}
```

#### 演示

<img src='https://user-images.githubusercontent.com/18719494/130031749-84b84833-a52c-4ad1-b589-00eb2d8af317.gif' width="800px">

捐赠



---

### 更新日志

![table](https://github.com/MarkMindCkm/obsidian-markmind/assets/18719494/70c90efb-3b15-4216-8c9b-874b5cf87b5e)



