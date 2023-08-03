---
uid: 2023080322140795
title: Obsidian 插件：【Readme】APL Render
tags: ['obsidian插件', 'readme']
description: 渲染APL语法
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：APL Render

> [!Note] 插件名片
> - 插件名称：APL Render
> - 插件作者：my99n
> - 插件说明：渲染APL语法
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/vzsky/apl-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?apl-render)

## 概述

渲染APL语法



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vzsky/apl-obsidian/master/README.md)
> 

---

## Readme(翻译）

下面是 [[apl-render]] 插件的自述翻译


# obsidian的APL代码

*美观地渲染APL代码*

APL是一种编程语言，字面上的意思。

简而言之，该插件将tick符号表示法渲染为如下形式：
```
(+/`-`")`j`i 100
```
变成如下形式：
```
(+/÷≢)∘⍳ 100
```
使用RIDE约定。

该插件适用于语言为`apl`的代码块。

# 用法
将字符串放入一个语言设置为apl的块中，就像这样
<img width="711" alt="Screenshot 2566-07-20 at 14 51 24" src="https://github.com/vzsky/apl-obsidian/assets/20735983/1ef3d6e8-21ae-4d48-bdb8-61c09001c287">
插件将会渲染相应的APL Unicode。

通过在字符后面写入勾号符号，可以呈现相应的APL Unicode。
像这样*average function*

<img width="725" alt="Screenshot 2566-07-20 at 14 13 07" src="https://github.com/vzsky/apl-obsidian/assets/20735983/a62aad3b-f7df-4a97-9253-0598f87d0ed2">

或者*variance function*

<img width="718" alt="Screenshot 2566-07-20 at 14 24 42" src="https://github.com/vzsky/apl-obsidian/assets/20735983/bf34abb5-f7e2-4cec-96f7-00596effebde">

它还可以呈现方框，但需要手动绘制或从RIDE复制。

<img width="727" alt="Screenshot 2566-07-20 at 14 12 54" src="https://github.com/vzsky/apl-obsidian/assets/20735983/ffa6c188-bac2-4153-a9c3-f5600e65c83e">
<img width="731" alt="Screenshot 2566-07-20 at 14 12 59" src="https://github.com/vzsky/apl-obsidian/assets/20735983/a3021abd-2c78-4b5f-9449-ccff382634cf">

# 安装

除了插件之外，您还需要单独安装APL385字体。这不是必需的用于Unicode渲染，但如果没有它，显示效果会很丑。

感谢https://github.com/secwang/espanso-apl-keyboard/blob/main/base.yml提供了APL Unicode的映射。



