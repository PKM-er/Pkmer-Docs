---
uid: 20230822233857
title: Obsidian 插件：Multi-Column Markdown
tags:
  - 界面相关
  - 编辑工具
  - 美化
  - obsidian插件
  - readme
description: 在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档。
author: AI
type: readme
draft: false
editable: false
modified: 20230912181621
---

# Obsidian 插件：Multi-Column Markdown

> [!Note] 插件名片
> - 插件名称：Multi-Column Markdown
> - 插件作者：Cameron Robinson
> - 插件说明：在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档。
> - 插件分类：[' 界面相关 ', ' 编辑工具 ', ' 美化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ckRobinson/multi-column-markdown)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?multi-column-markdown)

## 概述

在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ckRobinson/multi-column-markdown/master/README.md)
>

---

## Readme(翻译）

下面是 [[multi-column-markdown]] 插件的自述翻译

# 多列 Markdown

将您的普通 Markdown 文档添加一些列！使用多列 Markdown，您不再局限于单个线性文件的文档布局，而是可以定义要水平排列在一起的数据块。这种额外的功能使您可以以更有创意的方式组织笔记。

<br>

![Preview_1](https://github.com/ckRobinson/multi-column-markdown/blob/master/images/Preview_1.png?raw=true)

<br>

---

## **核心功能**

---

- 在 Obsidian 文档中定义可自定义的列布局。
- 设置您的列以符合您的要求，可以定义列数、宽度、间距、文本对齐方式等。
- 多种语法选项，包括与 Pandoc 兼容的 [fenced divs](https://github.com/dialoa/columns/blob/master/README.md)。
- 在 Obsidian 的阅读模式下，设置整个文档自动重新排列为多列。

# 目录

- [使用方法](#usage)
- [语法参考](#syntax-reference)
- [区域设置](#region-settings)
- [多列重排](#full-document-multi-column-reflow)
- [可用命令](#plugin-commands)
- [安装](#installation)
- [已知问题](#known-issues)
- [更新日志](#change-log)

---
---

<br>

---

## **关于实时预览**

---

实时预览已经在多列 Markdown 中得到支持，然而与其他插件的交叉兼容性、需要交互的任何内容（例如：按钮点击）以及更高级的、非原生的 Markdown 和 Obsidian 功能在这种模式下可能会得到支持，也可能不会得到支持。

由于自定义实时预览插件是如何在 CodeMirror6 中实现并与 Obsidian 连接的，我无法保证所有插件在实时预览中都能正确渲染。那些不能立即渲染其内容的插件，例如需要等待 dataview 查询的插件，无法正确渲染。

这个插件最初只是用于阅读模式，插件在这种模式下对内容的渲染有更多的控制权。*大多数*插件、交互元素、高级 Markdown 和视觉样式在阅读模式下会更好地渲染，并且具有更好的交叉兼容性。

# 用法

通过定义开始、设置、列结束和结束标签来创建多列区域。例如：

<br>

显示在上方的文本。

\```start-multi-column\

ID: ExampleRegion1\

列数：2\

最大列：左\

\```

显示在第一列的文本。

\--- end-column ---

显示在第二列的文本。

\--- end-multi-column

显示在下方的文本。

**渲染为：**

![Example_1](https://github.com/ckRobinson/multi-column-markdown/blob/master/images/Example_1.png?raw=true)

---


<br>

# 语法参考

### **区域起始标签：**

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

<br>

### **有效的语法标签：**

<br>

每种标签类型可以使用以下选项进行定义：

#### **开始多列区域：**

> \```start-multi-column\
> ID: A_unique_region_ID\
> *任何其他设置标志（见下文）*\
> \```

> \```multi-column-start\
> ID: A_unique_region_ID_2\
> *任何其他设置标志（见下文）*\
> \```

> ::::: {.columns id=A_unique_region_ID_2 *任何其他设置标志（见下文）*}

<br>

#### **结束一列：**

\--- column-end \---\

\--- end-column \---\

\--- column-break \---\

\--- break-column \---\

> ::: columnbreak\
> :::\
> *(在列断点后需要换行。)*

<br>

#### **结束多列区域：**

\--- end-multi-column\

\--- multi-column-end\

> :::\
> *(只有在使用 Pandoc 围栏 div 语法开始一个区域时，此结束区域语法才有效。)*

<br>

### **Pandoc 支持围栏式 divs**

您还可以使用 Pandoc 的围栏式 divs 语法来定义列区域。（有关此语法的更多详细信息，请参见 [此处](https://pandoc.org/MANUAL.html#divs-and-spans) 和 [此处](https://github.com/dialoa/columns/blob/master/README.md)。）

要创建一个多列区域，请使用：

> ::: columns
>
> \<列内容>
>
> :::

要在同一文档中定义多个 Pandoc 区域，并定义区域设置，必须使用属性语法：

> ::::: {.columns property=value id=ID_ExampleID}
>
> \<列内容>
>
> :::::

如果不提供 ID，将导致区域不呈现。

所有其他设置都可以在属性中使用下面定义的相同设置标志名称来定义。

##### **这个语法支持什么：**

- 基本的围栏 div 列定义：'::: columns' 或 '::: {.columns}'
- 用英文单词指定列数，最多十列：'::: twocolumns'，'::: {.three-columns}' 等
- 通过属性指定列数：'::: {.columns col-count=3}'
- 通过属性指定列间距：'::: {.columns columngap=3em}'
- 通过列分隔 div 指定列分隔：:::: columnbreak\n::::

##### **不支持的功能：**

- 递归列区域。递归区域在 Core MCM 中不受支持，因此无法像导出的 Pandoc PDF 一样呈现。
- 跨越元素。不能支持将列区域分割成跨越视图的元素。您必须手动结束该区域并开始一个新的区域。
- 指定“column rule”，因为目前没有其他语法来定义它。
- 两端对齐或不对齐的列模式。
- 默认的“Fluid Columns”。Pandoc 语法中的 fluid columns 默认等同于 MCM 的自动布局。然而，自动布局在实时预览中具有显著的性能开销，因此 Pandoc 语法不会自动标记区域以进行自动布局。但是，您可以通过在属性中添加设置来手动标记它们：::: {.three-columns fluid-columns=true}或::: {.three-columns auto-layout=true}

## **区域设置：**

#### **ID:**

- **设置标志**:
    - ID:
- **有效选择**:
    - 任意字符的字符串。

*示例:*

> \```start-multi-column\
> ID: 随机 *ID* 字符串\
> \```

- ID 用于区分同一文档中的不同区域。
- 每个 ID 在同一文档中必须是唯一的，否则可能会出现意外的渲染问题。可以在多个文档中使用相同的 ID，例如，您可以在用于您的周期性笔记的模板中使用 ID“dailynote”。
- 如果文档中只有一个列区域，则可以省略 ID。

#### **列数：**

- **设置标志：**
    - 列数：
    - 列数：
    - 列计数：
- **有效选择：**
    - 任何数字。

*示例：*

> \```start-multi-column\
> 列数：2\
> \```

<br>

#### **列尺寸：**

如果省略此选项，默认情况下，所有列的尺寸将设置为相等。<br>
*可以使用数组语法为每列定义尺寸：例如：[25%，75%]*

- **设置标志**：
    - 列尺寸：
    - 列大小：
    - 列宽度：
    - 列宽：
    - 最大列：
- **有效选择**：
    - 单列布局：
        - 小
        - 中
        - 大
        - 全
    - 适用于 2 列或 3 列布局
        - 标准
        - 左
        - 第一
        - 右
        - 第二
    - 仅适用于 3 列布局
        - 居中
        - 第三
        - 中间
    - 允许*大多数* CSS 单位长度（px、pt、% 等）。

*示例：*

> \```start-multi-column\
> 列尺寸：标准 \
> ( **或者** )\
> 列尺寸：[25%，75%]\
> \```

<br>

#### **边框：**

默认情况下，边框是启用的，但可以通过以下方式移除：<br>
*可以使用数组语法按列定义：例如：[off, on, off]*

- **设置标志**：
    - 边框：
- **有效选择**：
    - 禁用
    - 关闭
    - 假

*示例：*

> \```start-multi-column\
> 边框：禁用 \
> ( **或者** )\
> 边框：[关闭，开启]\
> \```

<br>

#### **阴影：**

默认情况下启用，可以通过以下方式移除：

- **设置标志**：
    - 阴影：
- **有效选择**：
    - 禁用
    - 关闭
    - 假

*示例：*

> \```start-multi-column\
> 阴影：关闭 \
> \```

<br>

#### **列位置或列位置：**

仅与单列选项一起使用。

- **设置标志**：
    - 列位置：
    - 列位置：
    - 列位置：
    - 列位置：
- **有效选择**：
    - 左
    - 右
    - 中心
    - 中间

*示例：*

> \```start-multi-column\
> 列数：1\
> 列位置：左 \
> \```

<br>

#### **列间距:**

用于设置所有列之间的距离。<br>
*可以使用数组语法为每一列定义距离: 例如: [5px, 10px]*

- **设置标志**:
    - 列间距:
- **有效选择**:
    - 允许大多数 CSS 单位长度 (px, pt, %, 等)。
    - 单独的数字没有定义单位类型时，默认为 pt 单位。

*示例:*

> \```start-multi-column\
> 列间距: 5px \
> ( **或者** )\
> 列间距: [5px, 10px]\
> \```

<br>

#### **内容溢出：**

列是否应该截断超出列边界的内容，还是应该可以滚动显示。<br>
*可以使用数组语法为每一列定义：例如：[滚动，隐藏]*

- **设置标志**：
    - 溢出：
    - 内容溢出：
- **有效选择**：
    - 滚动（默认）
    - 隐藏

*示例：*

> \```start-multi-column\
> 溢出：隐藏 \
> ( **或者** )\
> 溢出：[滚动，隐藏]\
> \```

<br>

#### **对齐方式：**

选择列中内容的对齐方式。<br>
*可以使用数组语法为每一列定义对齐方式：例如：[左对齐，居中对齐]*

- **设置标志**：
    - 对齐方式：
    - 内容对齐方式：
    - 内容对齐：
    - 文本对齐：
- **有效选择**：
    - 左对齐（默认）
    - 居中对齐
    - 右对齐

*示例：*

> \```start-multi-column\
> 对齐方式：居中 \
> ( **或者** )\
> 对齐方式：[左对齐，居中对齐]\
> \```

<br>

#### **自动布局**

- **设置标志**：
    - 自动布局：
    - 流体列：
    - 流体列：
- **有效选择**：
    - true
    - on

*示例：*

> \```start-multi-column\
> 自动布局：on \
> \```

<br>
---

自动布局区域不使用定义的列断点。相反，这种类型的多列区域将尝试在列之间平衡所有内容。标题也会尽量保留，以便标题块不会结束一列，而是会移动到下一列的顶部，并与其相应的内容一起显示。

要使用此功能，请在区域设置中设置 "Auto Layout: true"。

<br>

完整文档多列重排
---

在阅读模式下，可以将文档设置为完全重排为多列。

#### **语法**

要启用文档重新流动，请使用 Obsidian 的前置元数据来提供文件的元数据，语法如下：

例如：

```
---
Multi-Column Markdown:
  - Number of columns: 3
  - Alignment: [Left, Center, Left]
  - Border: off
---

文档的第一行。
```

所有设置都必须在 Multi-Column Markdown 标签下面以列表形式提供。如果 Obsidian 无法解析有效的语法，则不会渲染。您可以使用“设置多列重新流动”命令来确保正确的语法。

**功能：**

- 重新流动会自动检测您的文档视图大小，并设置列高以匹配，减少您需要滚动文档的次数。
    - 自动列高可以通过使用标准的 MCM 语法在前置元数据设置中定义 col-height 来覆盖。
    - 对视图大小的更改当前需要重新加载文档以更新布局。
- 用户可以使用默认的 Multi-Column Markdown 列分隔符语法定义列分隔符。

**其他说明：**

- 与核心 MCM 一样，Obsidian 的默认主题应完全支持所有基本的 markdown 语法和渲染元素。但是与其他插件、嵌入和主题的兼容性不能保证。
- 所有手动设置的多列区域都会被文档重新流动覆盖。

**已知问题：**

- 对文档的更改可能需要重新加载文件才能正确更新。
- 目前不支持导出为 PDF。
- 长段落的文本不会跨列分割，因为 Obsidian 将其渲染为单个内容块。

插件的跨兼容性。
---

并非所有插件都能在多列区域中进行跨兼容。根据实现方式或使用情况，有些插件可能无法完全渲染，渲染不正确，或者渲染后无法交互。就大部分情况而言，由于 Obsidian 插件的工作原理，目前很难保证跨兼容性。而且在使用实时预览时，情况更加复杂。您可以查看 [跨兼容性](documentation/CrossCompatibility.md) 表格，了解已知适用于多列的插件。该列表之外的插件尚未经过测试。

Obsidian 主题化
---

与上述的跨兼容性一样，多列区域可能会受到您正在使用的 Obsidian 主题的影响。在 MCM 中，几乎没有与布局无关的 CSS，但是一些主题可能会添加或删除必要的元素以正确渲染列。如果在特定主题中区域无法正确渲染，请随时提出问题，并确保在描述问题时包括您正在运行的 Obsidian 主题。

[这里](documentation/FullExamples.md)

**插件命令：**

您可以使用 Ctrl/Command - P 访问命令面板。

#### **插入多列区域**

将在光标所在位置创建一个两列区域，其中包含一个随机生成的 ID 和一个默认的设置块。当前选择的任何内容都将移动到插入区域的末尾，以免覆盖任何数据。

<br>

#### **修复多列区域缺失的 ID**

将搜索当前文档中缺少 ID 的任何区域起始标签，并为每个区域随机生成新的 ID。

<br>

#### **切换移动渲染 - 多列 Markdown**

仅在移动设备上启用或禁用列渲染。

<br>

#### **设置多列重排**

将默认的多列重排标签和设置添加到文档的前言中。如果已经定义，则不会覆盖。

# 安装

## 来自 Obsidian 社区插件

您可以按照以下步骤从 Obsidian 社区插件菜单中安装此插件：

- 在 Obsidian 中打开设置
- 点击“社区插件”并确保安全模式已禁用
- 浏览社区插件并找到“多列 Markdown”
- 点击安装
- 安装完成后，点击启用

从最新版本中下载 main.js、manifest.json 和 styles.css，并添加一个新目录：[Obsidian-vault]/.obsidian/plugins/multi-column-markdown，并将文件添加到该目录中。

如果这是您第一次使用 Obsidian 插件，请关闭并重新打开 Obsidian，然后打开设置菜单，点击左侧的 Community 插件选项卡，确保安全模式已禁用，然后在已安装插件列表中启用“Multi-Column Markdown”。

- Obsidian API 和此插件仍在开发中，两者都可能发生变化。
