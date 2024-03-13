---
uid: 2023080322273516
title: Obsidian 插件：Symbols Prettifier
tags: ['obsidian插件', 'readme']
description: 这个插件允许您使用您经常输入的实际符号（如箭头）来美化符号。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Symbols Prettifier

> [!Note] 插件名片
> - 插件名称：Symbols Prettifier
> - 插件作者：Florian Woelki
> - 插件说明：这个插件允许您使用您经常输入的实际符号（如箭头）来美化符号。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/FlorianWoelki/obsidian-symbols-prettifier)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?symbols-prettifier)

## 概述

这个插件允许您使用您经常输入的实际符号（如箭头）来美化符号。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/FlorianWoelki/obsidian-symbols-prettifier/master/README.md)

---

## Readme(翻译）

下面是 [[symbols-prettifier]] 插件的自述翻译

# Obsidian 符号美化工具

这是什么

你是否曾经想要美化箭头或符号，比如 `->` 或 `<=>`？

借助这个插件，这比以往任何时候都更容易。这个插件允许你美化几个字符组合，使得这些组合不再像是晦涩的符号。

如何使用

使用该插件的最简单方法是安装它，然后尝试输入以下符号。所有这些符号都将被美化：

`->`，`<-`，`<->`，`<=>`，`<=`，`=>`，`?unclear`，`!important`

## 开发

要根据您的需求自定义此项目，您可以克隆它，然后安装所有依赖项：

```sh
$ git clone https://github.com/FlorianWoelki/obsidian-symbols-prettifier
$ cd obsidian-symbols-prettifier
$ yarn
```

安装完成后，您需要在根目录中创建一个 `env.mjs` 文件。将以下内容填入文件中：

```js
export const obsidianExportPath =
  '<path-to-obsidian-vault>/.obsidian/plugins/obsidian-symbols-prettifier';
```

之后，您可以使用以下命令启动 rollup 开发服务器：

```sh
$ yarn dev
```

此命令将自动构建用于测试和开发的必要文件。此外，它还会将所有必要文件复制到指定的插件目录中。

最后，您可以自定义插件并将其添加到您的插件中。
