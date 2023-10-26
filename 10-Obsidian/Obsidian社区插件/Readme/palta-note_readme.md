---
uid: 2023102611081897
title: Obsidian 插件：【Readme】Palta Note
tags: ['obsidian插件', 'readme']
description: 渲染Tabla的Bhatkhande符号。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Palta Note

> [!Note] 插件名片
> - 插件名称：Palta Note
> - 插件作者：Niket Shah (mrniket)
> - 插件说明：渲染Tabla的Bhatkhande符号。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mrniket/palta-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?palta-note)

## 概述

渲染Tabla的Bhatkhande符号。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mrniket/palta-obsidian-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[palta-note]] 插件的自述翻译


# Palta Note Obsidian 插件

在 Obsidian 中使用 Bhatkhande 记谱法编写 Kaydas、Gats 和 Relas。在底层，它使用 [`<palta-note>`](https://github.com/mrniket/palta-note) web 组件。

![Palta Obsidian 插件使用演示](docs/demo.gif)
## 使用方法

安装插件。然后在任何笔记中，您可以创建一个具有以下结构的Palta代码块：

````
```palta
vibhags: 0 1 2
---
Tin Tin Na
Dhin Na
Dhin Na
```
````

然后将被渲染为：

![渲染示例（Rupak）](docs/rendered_example_with_vibhags.png)
### 没有分组

您还可以选择不指定分组结构（例如，如果您想快速记录事物）：

````
```palta
Tin Tin Na
Dhin Na
Dhin Na
```
````

![没有分组的Rupak](docs/rendered_example_without_vibhags.png)



