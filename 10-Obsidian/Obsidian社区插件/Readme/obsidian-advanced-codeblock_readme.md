---
uid: 2023080322134229
title: Obsidian 插件：Advanced Codeblock
tags: ['编程', '美化', 'obsidian插件', 'readme']
description: 为 Obsidian 的代码域，增加代码块行号，和编程语言的高亮方案。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Advanced Codeblock

> [!Note] 插件名片
> - 插件名称：Advanced Codeblock
> - 插件作者：Lijyze
> - 插件说明：为 Obsidian 的代码域，增加代码块行号，和编程语言的高亮方案。
> - 插件分类：[' 编程 ', ' 美化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lijyze/obsidian-advanced-codeblock)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-advanced-codeblock)

## 概述

为 Obsidian 的代码域，增加代码块行号，和编程语言的高亮方案。

![Advanced Codeblock](https://cdn.pkmer.cn/covers/obsidian-advanced-codeblock.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lijyze/obsidian-advanced-codeblock/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-advanced-codeblock]] 插件的自述翻译

# Obsidian 高级代码块

为代码块添加额外功能。

## 演示

![演示](https://raw.githubusercontent.com/lijyze/obsidian-advanced-codeblock/main/assets/demo.png)

## 特性

1. 为代码块添加行号
2. 为代码块添加行高亮功能

## 用法

所有功能不会普遍适用，如果您需要任何功能，您需要正确指定特定代码块的参数。参数应该用 `' '` 分隔。

| 功能               | 参数     | 描述             |
| ----------------- | -------- | --------------- |
| 显示行号         | nums     |
| 高亮行           | {a, b-c} | 括号很重要 |

## 注意事项

- **如果您只更改代码块的参数，则在预览模式下代码块不会更新。**

  Obsidian 会缓存文章的每个部分，但它会直接忽略在 ```` ```language ```` 之后的第一个空格之后的任何内容。这意味着如果您只更改代码块的参数，Obsidian 会认为没有任何更改，因此在预览视图渲染过程中不会调用任何后处理器。

## 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/obsidian-advanced-codeblock/` 目录下。

发布

### 1.1.0

1. 功能在实时预览模式下可用！

捐赠
