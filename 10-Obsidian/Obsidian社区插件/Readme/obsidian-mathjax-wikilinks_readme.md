---
uid: 20230803212737
title: Obsidian 插件：【Readme】MathJax WikiLinks
tags: ['obsidian插件', 'readme']
description: 允许在WikiLink别名中渲染MathJax。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：MathJax WikiLinks

> [!Note] 插件名片
> - 插件名称：MathJax WikiLinks
> - 插件作者：Aaron Manning
> - 插件说明：允许在WikiLink别名中渲染MathJax。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/aaron-jack-manning/obsidian-mathjax-wikilinks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-mathjax-wikilinks)

## 概述

允许在WikiLink别名中渲染MathJax。

![MathJax WikiLinks](https://cdn.pkmer.cn/covers/obsidian-mathjax-wikilinks.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aaron-jack-manning/obsidian-mathjax-wikilinks/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-mathjax-wikilinks]] 插件的自述翻译



Obsidian MathJax WikiLinks

Obsidian插件，用于在WikiLinks中渲染MathJax。

在原始的obsidian中，WikiLink `[[sigma-algebra|$\sigma$-algebra]]` 不会渲染出MathJax表达式，如下所示：

![无MathJax链接](no-mathjax-link.png)

而形式为 `[$\sigma$-algebra](sigma-algebra.md)` 的链接将会正确渲染：

![MathJax链接](mathjax-link.png)

该插件统一了这两个版本，在第一种情况下正确地渲染MathJax。

## 手动安装

要手动安装此插件，只需将 `main.js` 和 `manifest.json` 复制到文件夹 `VAULT_PATH/.obsidian/plugins/obsidian-mathjax-wikilinks` 中。



