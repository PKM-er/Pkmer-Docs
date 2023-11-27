---
uid: 20231127165619
title: 一网打尽，带你了解 Obsidian 中标签汇总方案
tags: []
description: 一网打尽，带你了解 Obsidian 中标签汇总方案
author: Chenghuang
type: other
draft: false
editable: false
modified: 20231127190118
---

# 一网打尽，带你了解 Obsidian 中标签汇总方案

如何在 Obsidian 中将某个标签的全部笔记汇总到当前页面？本文将按照笔者推荐程度从高到底排序介绍几个实现方法，请不要拘泥于笔者的一家之言，尽量多方尝试后选择最适合自己的方法，由于笔者对 dataview 无甚了解，故不在此列出利用 `Dataview` 插件整合的选项，如有需要请单独参阅 pkmer 相关文章。

首先需要说明的是：下文中的软件术语尽量以 ob 中文教程翻译为准，不再另行添加英语原文。

另外侧边栏中的面板可以拖拽至标签页位置，从而产生一个新的和普通笔记面板并列的标签页面板，。

最后，对于笔者来说，标签是实现笔记内容实现层级管理的手段，希望通过点击标签就能对同主题笔记进行聚合，以笔者笔记库为例，目前有以下一级标签：共运、女权、斗争、血仇、翻译、医学等；二级标签：国别、时代等。

相对的，传统文件夹仅用于归类笔记类型：【自留】（即自己创作的文章）、【读书笔记】（即文献笔记）、【卡片盒】（即永久笔记）、【辞海】（即个人维基百科）、【语料库】（即汉语外语知识库）之用。

## Tags Overview 插件

Github 地址：[christianwannerstedt/obsidian-tags-overview](https://github.com/christianwannerstedt/obsidian-tags-overview)

PKMer 简介地址：[Obsidian 插件：Tags Overview]( https://pkmer.cn/show/2023102611083698 )

> [!done] 优点
> - 搜索栏提供了 and/or 两种选项，更可以通过下拉栏直观选择已有标签
> - 输出的汇总页可选择 compact 和 list 两种形式，排版优秀，list 形式更可以在选项中自定义需要展示的表格元素

---

## Tag Page 插件

此插件可将含有同一标签（不可多选）的笔记链接

github 地址：[mjsumpter/obsidian-tag-page](https://github.com/mjsumpter/obsidian-tag-page)

PKMer 简介地址：[Obsidian 插件：Tag Page]( https://pkmer.cn/show/2023102611083622 )

> [!done] 优点
> - 输出的汇总页排版较优
> - 切换阅读和编辑模式便可实时刷新汇总页

> [!fail] 缺点
> - 仅会在编辑模式下显示笔记的全名，阅读模式则不提示笔记全名

---

## Tag Summary 插件

Github 地址：[macrojd/tag-summary](https://github.com/macrojd/tag-summary)

PKMer 简介地址：[Obsidian 插件：Tag Summary]( https://pkmer.cn/show/2023080322274711 )

此插件可将含有同一标签（可多选）的文本块（文本块之间必须空行）或通过命令面板中的命令，或通过固定代码形式另外汇总在一则新的笔记上

> [!done] 优点
> - 可以输出为 callout 格式
> - 可以输出回到原笔记的内部链接

> [!fail] 缺点
> - 仅支持文本块，不支持成篇笔记
> - 对选项的修改无法实时反映在当前汇总页，需要另外新建汇总页才能看到修改后的效果
> - 汇总页必须独立于标签所在笔记，否则不会将该笔记中的标签纳入结果之中

---

## TagFolder 插件

Github 地址： [vrtmrz/obsidian-tagfolder](https://github.com/vrtmrz/obsidian-tagfolder)

PKMer 简介地址：[Obsidian 插件：TagFolder ]( https://pkmer.cn/show/20230508163524 )

默认设置下，点击标签会在左侧边栏下方输出汇总页

> [!done] 优点
> - 自定义选项较多
> - 会列出所有未添加标签的笔记（untagged），方便用户查漏补缺

> [!fail] 缺点
> - 输出的汇总页行间距过于狭窄，阅读体验差强人意

---

## Obsidian-tag-navigator 插件

Github 地址：[GitHub - alexobenauer/obsidian-tag-navigator: Cross-reference navigation through your Obsidian tags and notes](https://github.com/alexobenauer/obsidian-tag-navigator)

此款插件已经不再更新，仅列出以供参考。