---
uid: 2023080322293224
title: Obsidian 插件：【Readme】Wielder
tags: ['obsidian插件', 'readme']
description: 在你的笔记中支持 Clojure/ClojureScript 
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Wielder

> [!Note] 插件名片
> - 插件名称：Wielder
> - 插件作者：victorb
> - 插件说明：在你的笔记中支持 Clojure/ClojureScript 
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/victorb/obsidian-wielder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wielder)

## 概述

在你的笔记中支持 Clojure/ClojureScript 



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/victorb/obsidian-wielder/master/README.md)
> 

---

## Readme(翻译）

下面是 [[wielder]] 插件的自述翻译


## Obsidian Wielder
> 在你的 Obsidian 文档中使用 Clojure！

<a href="https://github.com/victorb/obsidian-wielder/raw/master/demo-vault/Attachments/WielderDemo.mp4">
  <img alt="演示视频" src="https://github.com/victorb/obsidian-wielder/raw/master/demo-vault/Attachments/WielderDemo.gif"/>
</a>

这个 Obsidian 插件允许你直接在 Obsidian 的文档中使用 Clojure 的全部功能！如果你在 Obsidian 的视图模式中查看标记为 `clojure` 的代码块的文档，这个插件会自动运行你在代码块中指定的代码。

该插件逐个代码块地处理整个文档，因此你可以在描述性文本之间构建数据流水线，并逐步构建最终数据，然后呈现出来。所有这些都可以直接在你的文档中完成，而无需在 Obsidian 之外进行任何操作。

再加上使用 Reagent 渲染 React 组件，你可以通过只在 markdown 文件中编写代码，在 Obsidian 中渲染出完全交互式的应用程序！

Wielder 还允许你直接访问 Obsidian API（通过 `window.app`），因此你可以像使用插件一样直接在文档中进行任何操作。

### 安装说明

请查看[安装教程](https://wielder.victor.earth/Tutorials/02-Installation)，了解如何在Obsidian中安装Wielder。

警告：Wielder可以运行在您的Obsidian文档中定义的任何Clojure代码块

就像[Templater](https://github.com/SilentVoid13/Templater)或[Dataview](https://github.com/blacksmithgu/obsidian-dataview)一样，Wielder执行由您的Obsidian文档定义的代码。这意味着任何类型的代码。

除非您确切地知道您要执行的代码的作用，否则它可能对您的Vault、Obsidian安装甚至整个系统造成危害。

您应该小心只运行您理解其作用的Wielder代码，并且不要将来自陌生人的代码复制粘贴到您的Vault中，而不完全理解其作用。

Wielder永远不会运行来自Obsidian Vault之外的任何代码，因此您自己负责执行的代码。

再次强调，小心使用Wielder运行的代码，因为它可能具有潜在的破坏性。

### 演示保险库

很难用文字准确描述您可以使用Wielder做什么，所以最简单的方法就是安装插件并查看此存储库中提供的演示保险库。

如果您不想在实际操作之前安装插件，您可以在此处查看保险库（以及Wielder）的Web版本：https://wielder.victor.earth（啊，是的，我忘了提到：当然它也适用于网页和Obsidian内部！）

### 代码布局

主要的文件如下：

- `sci-js/src/sci/api.cljs` - ClojureScript 文件，提供了一个 JS<>CLJS 接口，供该插件使用
- `src/evaluator.ts` - TypeScript 源代码，用于初始化 SCI 环境并从 DOM 元素中评估代码片段
- `src/main.ts` - Obsidian 插件的主要源文件。编译成 `main.js` 并发布为插件
- `src/publish.ts` - 发布部分的源代码。包含此库的编译版本，加载到桌面 Obsidian 时，您的发布站点将（大部分）与您的 vault 相同。



