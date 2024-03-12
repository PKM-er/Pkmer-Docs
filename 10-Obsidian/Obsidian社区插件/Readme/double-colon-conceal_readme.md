---
uid: 20231220115812
title: Obsidian 插件：【Readme】Double Colon Conceal
tags: ['obsidian插件', 'readme']
description: 在阅读视图（预览模式）中，将双冒号（即Dataview内联字段）显示为单冒号，以获得更自然的体验。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Double Colon Conceal

> [!Note] 插件名片
> - 插件名称：Double Colon Conceal
> - 插件作者：Michal Srch
> - 插件说明：在阅读视图（预览模式）中，将双冒号（即 Dataview 内联字段）显示为单冒号，以获得更自然的体验。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/msrch/obsidian-double-colon-conceal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?double-colon-conceal)

## 概述

在阅读视图（预览模式）中，将双冒号（即 Dataview 内联字段）显示为单冒号，以获得更自然的体验。

![Double Colon Conceal](https://cdn.pkmer.cn/covers/double-colon-conceal.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/msrch/obsidian-double-colon-conceal/master/README.md)

---

## Readme(翻译）

下面是 [[double-colon-conceal]] 插件的自述翻译

# 双冒号隐藏 ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/msrch/obsidian-double-colon-conceal) ![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22double-colon-conceal%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

[Obsidian](https://obsidian.md/) 插件，用于将双冒号（即 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 的 [内联字段](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/#inline-fields)）显示为单冒号，以获得更自然的阅读体验。

阅读视图

## 编辑视图

默认情况下，编辑视图中的双冒号隐藏功能是关闭的。如果您希望使用该功能，请在插件设置中将其打开。当激活时，双冒号在实时预览中也会被隐藏。

![编辑视图示例](https://cdn.pkmer.cn/covers/double-colon-conceal_1_2.gif)

以下情况下不会隐藏双冒号：

- 在活动行（光标所在行）
- 在文本选择中
- 在源代码模式中

隐藏的双冒号（单冒号）具有 `.cm-double-colon-conceal` CSS 类，可以用于添加自定义样式。下面的示例中使用了红色文本颜色进行演示。

![样式示例](https://cdn.pkmer.cn/covers/double-colon-conceal_1_3.png!pkmer)

安装

建议在安装和启用此插件后重新启动 Obsidian，以防止任何渲染缓存问题。还要确保插件已启用。

Obsidian 中的社区插件

插件现在可以下载了 - 在 [搜索](https://obsidian.md/plugins?search=Double+Colon+Conceal) 中搜索“Double Colon Conceal”。

### 手动安装

1. 从 [最新版本](https://github.com/msrch/obsidian-double-colon-conceal/releases/latest) 下载以下文件：
   - [`manifest.json`](https://github.com/msrch/obsidian-double-colon-conceal/releases/latest/download/manifest.json)
   - [`main.js`](https://github.com/msrch/obsidian-double-colon-conceal/releases/latest/download/main.js)
2. 进入 Obsidian 笔记库的插件目录 - `{{vault-root}}/.obsidian/plugins`
3. 创建一个名为 `obsidian-double-colon-conceal` 的新目录
4. 将 `manifest.json` 和 `main.js` 放入新目录中
   `{{vault-root}}/.obsidian/plugins/obsidian-double-colon-conceal`
5. 打开 Obsidian 应用程序，在 " 设置 " 的 " 社区插件 " 中启用 "Double Colon Conceal" 插件。



