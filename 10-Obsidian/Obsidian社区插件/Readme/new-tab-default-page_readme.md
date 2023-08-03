---
uid: 2023080322171328
title: Obsidian 插件：【Readme】Default New Tab Page
tags: ['obsidian插件', 'readme']
description: 在创建新标签时，可以打开你选择的笔记，就像在浏览器中一样。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Default New Tab Page

> [!Note] 插件名片
> - 插件名称：Default New Tab Page
> - 插件作者：pseudometa
> - 插件说明：在创建新标签时，可以打开你选择的笔记，就像在浏览器中一样。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/chrisgrieser/new-tab-default-page)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?new-tab-default-page)

## 概述

在创建新标签时，可以打开你选择的笔记，就像在浏览器中一样。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisgrieser/new-tab-default-page/main/README.md)
> 

---

## Readme(翻译）

下面是 [[new-tab-default-page]] 插件的自述翻译


# 新标签页默认页面

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22new-tab-default-page%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/new-tab-default-page?label=Latest%20Release&style=plastic) [![](https://img.shields.io/badge/changelog-click%20here-FFE800?style=plastic)](Changelog.md)

[Obsidian](https://obsidian.md/)插件，用于在创建新标签页时打开您选择的笔记或快速切换器，就像在浏览器中一样。

---

📽️ [插件的YouTube演示](https://www.youtube.com/watch?v=PKcnKqErwJw&t=2s)

---

<!--toc:start-->
  - [默认新标签页页面示例](#默认新标签页页面示例)
  - [用法](#用法)
  - [高级示例](#高级示例)
    - [随机引用](#随机引用)
  - [安装](#安装)
  - [捐赠](#捐赠)
  - [致谢](#致谢)
<!--toc:end-->

## 默认新标签页的示例
- 你的主页笔记
- 你的日常笔记
- 一个草稿本笔记
- 触发快速切换器
- 一张图片
- 一个随机引用
- ...

## 使用方法
1. 在插件设置中将笔记设置为在新标签页中打开。
2. 设置笔记应该打开的模式。
3. 打开一个新的标签页。

> __注意__  
> 关闭最后一个标签页也会打开新的标签页。

高级示例

### 随机引用
要在每个新标签页上显示随机引用，您可以使用dataview，并将以下代码作为dataviewjs-codeblock粘贴到一个笔记中。

```js
const quote = JSON.parse(await request("https://api.quotable.io/random"));
dv.span(`> "${quote.content}"  \n> <div style="text-align:end; color:var(--text-muted); font-weight: 600; font-size:90%;">– ${quote.author}</div>`);
```

然后，在“新标签页默认页面”设置中输入笔记的路径，并选择“阅读模式”。现在，每个新标签页都会显示一个随机引用。

### 提交你自己的想法
有一个很酷的想法吗？请随意向这个README提交一个PR，并提交你自己的想法。

## 安装
通过 Obsidian 的社区插件浏览器可用：`设置` → `社区插件` → `浏览` → 搜索 *"New Tab Default Page"*

捐赠


感谢[@pjeby](https://github.com/pjeby)和`#plugin-dev`频道的各位人士对我提供的帮助。



