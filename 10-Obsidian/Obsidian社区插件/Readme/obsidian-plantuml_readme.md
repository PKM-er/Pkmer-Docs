---
uid: 2023120719402959
title: Obsidian 插件：【Readme】PlantUML
tags: ['图表生成', '界面相关', '编辑器', '编程', 'obsidian插件', 'readme']
description: 在 Obsidian 笔记中渲染 UML 图
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】PlantUML

> [!Note] 插件名片
> - 插件名称：PlantUML
> - 插件作者：Johannes Theiner
> - 插件说明：在 Obsidian 笔记中渲染 UML 图
> - 插件分类：[' 图表生成 ', ' 界面相关 ', ' 编辑器 ', ' 编程 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joethei/obsidian-plantuml)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plantuml)

## 概述

在 Obsidian 笔记中渲染 UML 图

![PlantUML](https://cdn.pkmer.cn/covers/obsidian-plantuml.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joethei/obsidian-plantuml/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-plantuml]] 插件的自述翻译

# Obsidian 对 PlantUML 的支持

![Maintenance](https://shields.joethei.xyz:/maintenance/yes/2022)

![GitHub manifest.json dynamic (path)](https://img.shields.io/github/manifest-json/minAppVersion/joethei/obsidian-plantuml?label=lowest%20supported%20app%20version)

[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

在 [Obsidian](https://obsidian.md) 中渲染 [PlantUML](https://plantuml.com) 图表

---

![演示](https://cdn.pkmer.cn/covers/obsidian-plantuml_1_3.gif)

该插件使用 [PlantUML在线服务器](https://plantuml.com/server) 或本地的 `.jar` 文件进行渲染。

您还可以托管自己的服务器（[Docker](https://hub.docker.com/r/plantuml/plantuml-server) / [JEE](https://plantuml.com/de/server) / [PicoWeb](https://plantuml.com/de/picoweb)）并在设置中指定其地址。

请注意，使用本地渲染方法的性能不如使用服务器。

## 用法

使用 `plantuml` 作为语言创建一个带有围栏的代码块。

在内部指定您的 plantuml 代码。

要生成更高分辨率的图表，请使用 `plantuml-svg`。

您还可以使用 `plantuml-ascii` 生成 ASCII 艺术。

有关 Plantuml 的文档可以在 [plantuml.com](https://plantuml.com/) 上找到。

### 链接到存储库中的笔记

由于 PlantUML 中的网络链接语法与 Obsidian 中的 Wikilinks 相同，因此使用了特殊的语法：

`[[[Your other note]]]`

有关此链接的内容，请参阅 [Obsidian文档](https://help.obsidian.md/How+to/Internal+link)。

普通的网络链接在 [这里](https://plantuml.com/de/link) 中描述。

### 包含一个 `.puml` 文件

> ⚠️ 仅在使用本地渲染时有效

这个功能的工作方式与 [官方文档](https://plantuml.com/de/preprocessing#393335a6fd28a804) 中描述的一样。

### 示例

~~~markdown
```plantuml
Bob -> Alice : hello
Alice -> Wonderland: hello
Wonderland -> next: hello
next -> Last: hello
Last -> next: hello
next -> Wonderland : hello
Wonderland -> Alice : hello
Alice -> Bob: hello
```
~~~

结果为：

![](https://cdn.pkmer.cn/covers/obsidian-plantuml_1_4.png!pkmer)

~~~markdown
```plantuml-ascii
Bob -> Alice : hello
Alice -> Wonderland: hello
Wonderland -> next: hello
next -> Last: hello
Last -> next: hello
next -> Wonderland : hello
Wonderland -> Alice : hello
Alice -> Bob: hello
```
~~~

结果为：

```
     ┌───┐          ┌─────┐          ┌──────────┐          ┌────┐          ┌────┐
     │Bob│          │Alice│          │Wonderland│          │next│          │Last│
     └─┬─┘          └──┬──┘          └────┬─────┘          └─┬──┘          └─┬──┘
       │    hello      │                  │                  │               │   
       │──────────────>│                  │                  │               │   
       │               │                  │                  │               │   
       │               │      hello       │                  │               │   
       │               │─────────────────>│                  │               │   
       │               │                  │                  │               │   
       │               │                  │       hello      │               │   
       │               │                  │ ─────────────────>               │   
       │               │                  │                  │               │   
       │               │                  │                  │     hello     │   
       │               │                  │                  │ ──────────────>   
       │               │                  │                  │               │   
       │               │                  │       hello      │               │   
       │               │                  │ <─────────────────               │   
       │               │                  │                  │               │   
       │               │      hello       │                  │               │   
       │               │<─────────────────│                  │               │   
       │               │                  │                  │               │   
       │    hello      │                  │                  │               │   
       │<──────────────│                  │                  │               │   
     ┌─┴─┐          ┌──┴──┐          ┌────┴─────┐          ┌─┴──┐          ┌─┴──┐
     │Bob│          │Alice│          │Wonderland│          │next│          │Last│
     └───┘          └─────┘          └──────────┘          └────┘          └────┘
```

## 已知问题

并非所有使用 PlantUML 的方法都支持所有不同的图表。

以下是一些已知问题。

- ASCII 只能生成序列图
- PicoWeb 服务器不支持 png 图表中的可点击链接
- 一些语言如中文无法正确渲染 -> 切换到 SVG 渲染

## 安装

`设置 > 第三方插件 > 社区插件 > 浏览`，然后搜索 `PlantUML`。
