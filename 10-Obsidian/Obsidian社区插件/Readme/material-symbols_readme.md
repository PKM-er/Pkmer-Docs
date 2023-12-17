---
uid: 2023120719361802
title: Obsidian 插件：【Readme】Material Symbols
tags: ['obsidian插件', 'readme']
description: 该插件将材料符号（轮廓）添加到黑曜石中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Material Symbols

> [!Note] 插件名片
> - 插件名称：Material Symbols
> - 插件作者：Cristoph Berane
> - 插件说明：该插件将材料符号（轮廓）添加到黑曜石中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/cberane/obsidian-material-symbols)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?material-symbols)

## 概述

该插件将材料符号（轮廓）添加到黑曜石中。

![Material Symbols](https://cdn.pkmer.cn/covers/material-symbols.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cberane/obsidian-material-symbols/master/README.md)
>

---

## Readme(翻译）

下面是 [[material-symbols]] 插件的自述翻译

# 材料符号插件

这是一个简单的 Obsidian 插件，用于添加 Google 的材料符号轮廓。

该插件添加了 2 个命令，可以轻松地将符号添加到当前文档中。

## 使用方法

1. 按下 `Ctrl + P` 并搜索 `symbol`。
   您可以找到两个选项来添加图标：
   1. `Add Symbol` 添加 `<span class="mso"></span>`
   2. `Add Symbol (class single-quoted)` 添加 `<span class='mso'></span>`
      因为在嵌套元素中可能需要。
2. 在插入图标的 HTML 后，光标将设置在标签中。
3. 根据期望从 [Google Material Symbols](https://fonts.google.com/icons?icon.style=Outlined) 添加图标名称。

`<span class="mso">dashboard</span>` 应该渲染为

[此图标](https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Adashboard%3AFILL%400%3Bwght%40200%3BGRAD%40-25%3Bopsz%4024)：

![](https://cdn.pkmer.cn/covers/material-symbols_2_0.png!pkmer)

## 默认设置

以下字体设置将默认应用：

| 设置    | 描述         |
|---------|-------------|
| 填充    | 0           |
| 粗细    | 200         |
| 等级    | -25         |

覆盖默认值

为了更容易进行更改，您可以使用以下类之一来激活其他字体设置：

| 类别       | 更改                          |
|-----------|-----------------------------|
| fill1     | 激活字体填充                  |
| weight100 | 将字体粗细设置为 100           |
| weight300 | 将字体粗细设置为 300           |
| weight400 | 将字体粗细设置为 400           |
| weight500 | 将字体粗细设置为 500           |
| weight600 | 将字体粗细设置为 600           |
| weight700 | 将字体粗细设置为 700           |
| grade0    | 将等级设置为 0                 |
| grade200  | 将等级设置为 200               |

- `<span class="mso">dashboard</span>` 将以默认的权重 200 渲染仪表盘图标
- `<span class="mso weight400 grade200">dashboard</span>` 将以权重 400 和等级 200 渲染仪表盘图标



