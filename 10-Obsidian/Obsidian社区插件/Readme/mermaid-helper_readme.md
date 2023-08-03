---
uid: 20230803204329
title: Obsidian 插件：【Readme】Mermaid.js Helper (OMH)
tags: ['obsidian插件', 'readme']
description: 帮助 mermaid.js 工作流程和更多的插件
author: Francesco Di Cursi
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Mermaid.js Helper (OMH)

> [!Note] 插件名片
> - 插件名称：Mermaid.js Helper (OMH)
> - 插件作者：Francesco Di Cursi
> - 插件说明：帮助 mermaid.js 工作流程和更多的插件
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/FrancescoDiCursi/Mermaid.js-Helper-OMH-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mermaid-helper)

## 概述

帮助 mermaid.js 工作流程和更多的插件



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/FrancescoDiCursi/Mermaid.js-Helper-OMH-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[mermaid-helper]] 插件的自述翻译


# Mermaid.js-Helper-OMH-plugin
一个 [Obsidian](https://obsidian.md/) 插件，用于帮助处理 [mermaid.js 图表/流程图](https://mermaid.js.org/syntax/flowchart.html)，并提供额外的命令。

## Mermaid命令：

- ### \> 清理Mermaid.js代码（[图表|流程图]）：
  仅选择类型为图表或流程图的mermaid.js单元格，并运行该命令以将变量声明移到顶部。
  
  ![](https://github.com/FrancescoDiCursi/Obsidian-Mermaid.js-Helper-OMH-plugin/blob/main/gifs/obsidian%20clean%20text.gif)


- ### \> Mermaid.js的正则表达式（[样式|类]）：
  仅选择mermaid.js样式或类行，并提供正则表达式模式作为id
  
  （例如，style|class /any-regex-pattern/ fill:#f9f,stroke:#333|className）
  
   ![](https://github.com/FrancescoDiCursi/Obsidian-Mermaid.js-Helper-OMH-plugin/blob/main/gifs/obsidian%20style%20re.gif)

# 额外命令：

- ### \> 从标题列表创建空文件：
  选择一个以换行符分隔的名称列表，并运行该命令以在活动文件夹中创建这些文件

  ![](https://github.com/FrancescoDiCursi/Obsidian-Mermaid.js-Helper-OMH-plugin/blob/main/gifs/obsidian%20files.gif)

- ### \> 从章节创建文件（以H2作为章节标题）
  选择所有章节，每个章节的标题都是H2，并运行该命令以在活动文件夹中创建这些文件

- ### \> 将全局颜色组复制到本地图：
  在全局图视图中设置颜色组，然后打开一个文件并运行命令“图视图：打开本地图”。最后，在同一个活动文件中运行此插件命令并重新启动Obsidian。

- ### \> 列表转链接：
  给定一个由换行符、逗号或逗号加换行符分隔的字符串列表，它返回一个链接列表

  _例如：a,b,c --> [[a]],[[b]],[[c]]_



