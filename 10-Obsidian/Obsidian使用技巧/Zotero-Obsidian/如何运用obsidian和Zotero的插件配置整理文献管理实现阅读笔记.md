---
uid: 20230905002022
title: 如何运用 Obsidian 和 Zotero 的插件配置整理文献管理实现阅读笔记
tags: []
description: 
author: 蜜蜜儿
type: other
draft: false
editable: false
modified: 20230905114018
---

# 如何运用 Obsidian 和 Zotero 的插件配置整理文献管理实现阅读笔记

## 引言

“读书笔记”一词对大家来说不陌生，日常工作流程包括收集资源、阅读和注释、创建笔记、撰写手稿和引用参考文献。综合了每个学者所读的内容，链接概念，获取和发展想法，并完成了更广泛主题的原子部分的初稿。

## Zotero：收集资源，注释资源，引用参考文献

[Zotero官网](https://www.zotero.org)Zotero 是一款免费开源参考管理软件，用于管理书目数据和相关研究材料，例如 PDF 文件。

### Zotero 插件: [**betterbibtex**](https://pkmer.cn/products/zotero/zoteroMarket/?better%20bibtex)

![Pasted image 20230904164017.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904164017.png!pkmer)

## Obsidian：创建笔记，撰写手稿

[Obsidian官网](https://obsidian.md/)Obsidian 是一个在 Markdown 文件上运行的个人知识库和笔记软件应用程序。它允许用户为笔记创建内部链接，然后将连接可视化为图表。它旨在帮助用户以灵活的非线性方式组织和构建他们的思想和知识。

### Obsidian 插件：[Zotero Integration](https://github.com/mgmeyers/obsidian-zotero-integration)

![Pasted image 20230904164711.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904164711.png!pkmer)

![Pasted image 20230904165706.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904165706.png!pkmer)

![Pasted image 20230904182126.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904182126.png!pkmer)

另外需要配置安装 Citation 插件

安装此插件之后需要开启 2 个地方，如见截图红框

> [!Tip] 提示⚠️

- 以上具体安装方法不详述了～搜 [pkmer](https://pkmer.cn/)

好了～开始正式入题！

### Zotero Integration 界面设置主要是讲 2 种方式

#### 一、Citation Formats 引文格式

##### 1、需要配置安装 [Citation插件](https://github.com/hans/obsidian-citation-plugin)

在 Obsidian 中找到 citation 插件的设置页面如下：

![Pasted image 20230904190020.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904190020.png!pkmer)

##### 2. 设置 citation plugin

Citation database format 选择 CSL-JSON

![Pasted image 20230904202517.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904202517.png!pkmer)

- 要点：
   - Citation database path 这个前提在 zotero 需要先导出
![Pasted image 20230904202759.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904202759.png!pkmer)

![Pasted image 20230904202838.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904202838.png!pkmer)

![Pasted image 20230904202909.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904202909.png!pkmer)

![Pasted image 20230904202957.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904202957.png!pkmer)

在 mac 桌面保存呈现出来文件.json

![Pasted image 20230904203112.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904203112.png!pkmer)

尤其是 mac 系统如何查询该文件的路径？

![Pasted image 20230904203304.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904203304.png!pkmer)

打开 mac 系统的终端 Terminal

![Pasted image 20230904203651.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904203651.png!pkmer)

![Pasted image 20230904204119.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904204119.png!pkmer)

**Citation Path**就是刚才提到的保存的目录，也就是绝对路径

![Pasted image 20230904204628.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904204628.png!pkmer)

LN Folder 就是 Obsidian 中的任意一个文件夹。可以先设置好文件夹中，再回到这个界面选择文件夹。如图，我的文件夹是 03 Zotero。

![Pasted image 20230904204555.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904204555.png!pkmer)

回到 Zotero Integration 界面，可以设置你喜欢的引文格式如下：

![Pasted image 20230904204312.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904204312.png!pkmer)

![Pasted image 20230904213103.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904213103.png!pkmer)

![Pasted image 20230904204844.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904204844.png!pkmer)

这个是引文格式的模板，可以参考如下：

![Pasted image 20230904205044.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904205044.png!pkmer)

Citation Formats 设置结束了，将要把 zo 的文献书本导入到 ob 上做阅读笔记。

按 command/Ctrl+O 键出现命令面板

![Pasted image 20230904205546.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904205546.png!pkmer)

选择这个打开出现如下：==这个才是最关键的要点== ：如果前期 citaion 设置没有正确操作，会导致无法识别 zotero 的所有文件资源。

![Pasted image 20230904205708.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904205708.png!pkmer)

选择你想要哪一本书准备做阅读笔记，确认，出现该书本的引文格式文件。

![Pasted image 20230904210153.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904210153.png!pkmer)

![Pasted image 20230904210339.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904210339.png!pkmer)

以上 Citation Formats 引文格式的方法到此结束了，接下来可以做读书笔记；

#### 二、Import Formats 导入格式

![Pasted image 20230904183355.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904183355.png!pkmer)

首先要制作特意为 zotero 文献的注释导入指定文件路径的模板，后期不需要反复手动导入，直接一键呈现出来注释内容，这个模板 “infoheader" 为 zotero 文献笔记提供了你喜欢阅读笔记的框架格式。该模板从 Zotero 中提取元数据，包括使用 nunjucks 'if'' 函数来填充特定的资源详细信息，导入后可以做读后感笔记。

![Pasted image 20230904184934.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904184934.png!pkmer)

按“comm+p”键 出现命令面板，输入 zotero.....

![Pasted image 20230904185345.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904185345.png!pkmer)

选择它之后会出现 zotero 查找文件红色框框如下：

![Pasted image 20230904185458.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904185458.png!pkmer)

![Pasted image 20230904185600.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904185600.png!pkmer)

选择你想要看的该文献资源某一文本按确认键，导入格式后呈现的结果如下：

![Pasted image 20230904185048.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230904185048.png!pkmer)

以上是 Import Formats 导入格式的操作方法，到此结束。

## 结语

一旦您熟悉了流程和设置，工作流程就会运行得非常顺利。如果您的编程经验或舒适度有限，这是一个陡峭的学习曲线，但这是一种相当用户界面驱动的友好方法，用于开发完整的学术研究和引文工作流程。
