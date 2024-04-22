---
uid: 2024042221311424
title: Obsidian 插件：【Readme】Universal renderer
tags: ['obsidian插件', 'readme']
description: 使用系统原生包来渲染各种图表
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Universal renderer

> [!Note] 插件名片
> - 插件名称：Universal renderer
> - 插件作者：Kloud
> - 插件说明：使用系统原生包来渲染各种图表
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dgudim/obsidian-universal-renderer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?universal-renderer)

## 概述

使用系统原生包来渲染各种图表

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dgudim/obsidian-universal-renderer/master/README.md)

---

## Readme(翻译）

下面是 [[universal-renderer]] 插件的自述翻译

<h1 id="title">通用渲染器</h1>

<img src="https://github.com/dgudim/obsidian-universal-renderer/blob/master/assets/icon.png" height=150 id="icon"></img>

<img src="https://github.com/dgudim/obsidian-universal-renderer/blob/master/assets/thumb.png" height=0 id="thumb"></img>

> [!Warning]
> 我为自己制作了这个插件，可能在其他系统上无法正常工作，并且缺乏花哨的 GUI 设置

在 [Obsidian](https://obsidian.md) 中渲染各种图表并生成动态的 SVG。 (类似于 [Obsidian kroki](https://github.com/gregzuro/obsidian-kroki))

> [!Note]
> 该插件使用系统包进行图表渲染（`js` 端口*较慢*，我想要原生的东西)

## 支持的图表

| 图表 | 文档 | 代码块标签 |
| - | - | - |
| graphviz | [graphviz.org](https://graphviz.org/) | dot |
| latex | [latex-project.org](https://www.latex-project.org/) | latex |
| ditaa | [ditaa.sourceforge.net](https://ditaa.sourceforge.net/) | ditaa |
| blockdiag | [blockdiag.com](http://blockdiag.com/en/) | blockdiag |
| asciidoc | [asciidoc.org](http://asciidoc.org) | asciidoc |
| plantuml | [plantuml.com](http://plantuml.com/) | plantuml |
| typst | [typst.app](https://typst.app/) | typst |

### 特殊图表

| 图表 | 文档 | 代码块标签 |

| - | - | - |

| refgraph | [refgraph](#refgraph) | refgraph |

| dynamic-svg | [dynamic svg](#dynamic-svg) | dynamic-svg |

## 安装

### 从社区商店

只需在 obsidian 社区插件中搜索“通用渲染器”

- 从发布部分将 `main.js`、`styles.css`、`manifest.json` 复制到您的保险库 `<VaultFolder>/.obsidian/plugins/universal-renderer/` 中
- 克隆这个存储库
- 运行 `npm i` 或 `yarn` 安装依赖
- 运行 `npm run build`
- 将 `main.js`、`styles.css`、`manifest.json` 复制到您的保险库 `<VaultFolder>/.obsidian/plugins/universal-renderer/` 中。
- 通过系统包管理器安装 `graphviz, latex, asciidoc` 和其他软件包（您可以在插件设置中自定义可执行文件位置）
- 通过 BRAT 插件搜索安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件
- [阅读文档](https://tfthacker.com/BRAT)
- 添加<https://github.com/dgudim/obsidian-universal-renderer>

## 用法

- 使用渲染器支持的图表类型作为语言创建一个围栏代码块（查看 [支持的图表](#supported-diagrams) 列表）
- 使用 [图表参数](#graph-parameters) 来自定义图表的*外观*
- 在代码块内指定您的图表代码

## 自定义图表颜色

1. 打开 `palattegen.ts`
2. 修改 `colors` 和 `shades` 常量以符合您的喜好（默认主题为 gruvbox）
3. 重新构建插件
4. 删除 `styles.css`
5. 重新启用插件/重启 Obsidian **2** 次

## 图参数

在图表代码之前可以指定各种参数，类似于 *obsidian 的前置信息*

### 可用参数

| Paramater | Description |
| - | - |
| width | 渲染图形的宽度，可以是任何 `css` 大小修饰符（%， px， em 等） |
| doc-start | 在渲染之前在图表代码前面添加的字符串（与预设一起使用） |
| doc-end | 与 `doc-start` 相同，但是附加而不是前置 |
| ref-name <br> graph-name <br> name | 设置图表名称，以便稍后通过 [ref graph](#refgraph) 重用 |
| preset | 应用于图表的一组参数（参见 [presets](#presets)） |
| invert-shade <br> invert-color | 反转图表的阴影或颜色 |
| \<svg tag\>-**fill**/**stroke**:keep-**shade**/**color**/**all** | 在特定的 svg 标签（例如圆圈、文本、线条）中冻结*颜色*或*阴影*在浅色/深色主题中的反转 |

````sh
```
---
invert-shade:1
width:90%
text-fill:keep-shade
---
<diagram code>
```
````

## 预设

默认情况下有 **2** 个明确的预设定义

| 预设 | 描述 |
| - | - |
| math-graph | 在具有白色节点的 graphviz 图上看起来很好（将 `ellipse` 和 `text` 填充模式设置为 `keep-shade`） |
| default-tikz | 通过 `doc-start` 和 `doc-end` 参数附加一些样板代码（有关预设参数，请参见 `processor.ts`） |

还有一些默认应用的预设

| 预设 | 描述 |
| - | - |
| default-latex | 应用于所有 `latex` 图形，添加一些样板起始和结束代码 |
| default-plantuml | 应用于所有 `plantuml` 图形，分别在代码的开头和结尾添加 `@startuml` 和 `@enduml` |

### 定义预设

1. 打开 `processors.ts`
2. 修改 `presets` 常量以符合您的喜好，预设可以包含任何 [图参数](#graph-parameters)
3. 重新构建插件

> [!Note]
> 以 `default-`<[diagram type](#supported-diagrams)>开头的预设将默认应用于该图表类型

## Refgraph

一种特殊的图表类型，用于减少代码重复，只显示已经渲染的图表

语法如下：

````sh
```refgraph
<图表名称>
```
````

图表名称由 `name`/`ref-name`/`graph-name` 参数设置（参见 [图表参数](#graph-parameters)）

## 动态 svg

这甚至不是一个图表，这段代码的目的是使您的 svg 遵循定义的颜色方案（例如，您有一个黑色的 svg，在暗色主题下看起来很糟糕）

语法和示例：

````ruby
```dynamic-svg
---
invert-shade
width:100%
---
[[文件名]]
```
````

在这里，我们取一些 svg，使其遵循颜色方案（请参阅 [自定义图表颜色](#customizing-diagram-colors)）并反转其色调（从黑色到白色等）

> [!Note]
> 这对于非优化的大型 svg 或复杂的 svg 效果不佳