---
uid: 2023080322285465
title: Obsidian 插件：【Readme】Typst Renderer
tags: ['obsidian插件', 'readme']
description: 使用Typst将`typst`代码块和数学块渲染为图像。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Typst Renderer

> [!Note] 插件名片
> - 插件名称：Typst Renderer
> - 插件作者：fenjalien
> - 插件说明：使用Typst将`typst`代码块和数学块渲染为图像。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/fenjalien/obsidian-typst)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?typst)

## 概述

使用Typst将`typst`代码块和数学块渲染为图像。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/fenjalien/obsidian-typst/master/README.md)
> 

---

## Readme(翻译）

下面是 [[typst]] 插件的自述翻译


# Typst 渲染器

使用 [Typst](https://github.com/typst/typst) 和 WASM 的强大功能，将 `typst` 代码块和可选的数学块渲染为图像！这个项目仍在积极开发中，欢迎提出建议和报告错误！

## 需要注意的小细节
- 此插件使用 Typst 0.6.0 版本。
- Typst 目前不支持导出为 HTML，只支持 PDF 和 PNG 格式。因此，由于图像缩放的原因，渲染的视图可能会看起来有些糟糕。如果您知道如何解决这个问题，请帮忙。
- 文件路径应相对于存储库文件夹。
- 默认情况下不加载系统字体，因为这需要大约 20 秒的时间（在我的机器上）。在设置中有一个选项可以启用它们（需要重新加载插件）。
- 由于移动设备上不支持文件读取，因此无法在移动设备上导入。这是因为移动设备上不支持 `SharedArrayBuffer`，但在桌面上出于某种原因是可用的。

使用包
该插件仅支持从[`@preview`](https://github.com/typst/packages#downloads)和[`@local`](https://github.com/typst/packages#local-packages)命名空间读取包。请使用Typst cli下载您所需的包。这意味着插件可以访问您的保险库之外的文件，但仅用于读取，它不会修改或创建您的保险库之外的文件。

## 数学块的使用
该插件可以在数学块中渲染`typst`！默认情况下，此功能处于关闭状态，要启用它，请设置“覆盖数学块”设置或使用“切换数学块覆盖”命令。数学块类型在Obsidian和Typst之间保持一致，`$...$` -> `$...$` 和 `$$...$$` -> `$ ... $`。

根据我的实验，Typst对于普通的数学块没有问题，但对于任何LaTeX代码，Typst都无法正常工作。

有关使用样式和导入数学块的方法，请参阅下一节。

## 前言
每次都需要以相同的方式对`typst`代码进行样式设置，但又不想每次都写出来？或者在使用数学块时需要导入一些内容？使用前言！

在编译之前，前言会被添加到您的`typst`代码之前。设置中有三种不同类型的前言：
- `shared`：添加到所有`typst`代码之前。
- `math`：仅在数学块中添加到`typst`代码之前。
- `code`：仅在代码块中添加到`typst`代码之前。

已知问题

运行时错误：无法访问或递归使用对象
当Typst编译器由于任何原因而发生恐慌时，会出现这些错误，这意味着编译器在重新启动之前无法再次使用。控制台日志中应该有更多信息，请创建一个带有此错误的问题！

```
```typst
= 斐波那契数列
斐波那契数列通过递推关系定义：$F_n = F_(n-1) + F_(n-2)$。
它也可以用闭式形式表示：

$ F_n = floor(1 / sqrt(5) phi.alt^n), quad
  phi.alt = (1 + sqrt(5)) / 2 $

#let count = 10
#let nums = range(1, count + 1)
#let fib(n) = (
  if n <= 2 { 1 }
  else { fib(n - 1) + fib(n - 2) }
)

数列的前 #count 个数是：

#align(center, table(
  columns: count,
  ..nums.map(n => $F_#n$),
  ..nums.map(n => str(fib(n))),
))

```​
```

<img src="assets/example.png">
```

## 安装
从设置中的社区插件选项卡中安装“Typst Renderer”

或者

将发布选项卡中的`main.js`、`styles.css`和`manifest.json`复制到您的保险库中的`.obsidian/plugins/obsidian-typst`文件夹中进行安装。

## TODO / 目标（无特定顺序）
- [x] 改进字体加载
- [x] 修复导入问题
- [x] 修复 Github Actions
- [ ] 更好的错误处理
- [x]? 修复输出图像缩放
- [ ] 使用 HTML 输出
- [x] 覆盖默认的方程式渲染
- [ ] `.typ` 文件的自定义编辑器
- [ ] 移动设备文件阅读
- [ ] 自动化包下载



