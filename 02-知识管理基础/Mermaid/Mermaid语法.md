---
uid: 20230518204621
title: Mermaid 语法
tags: [Mermaid, 语法]
description: Mermaid 语法
author: cuman,OS
type: awesome
draft: false
editable: false
modified: 20240511100045
---

# Mermaid 语法

## 什么是 Mermaid

Mermaid 是一种开源的可交互式的数据可视化库，它使用 Markdown 标记语言来生成图表和流程图。它通常用于生成网站或文档中的图表。Mermaid 不属于任何公司，而是一个由社区开发和维护的开源项目。

学习 Mermaid 的好方法是访问它的官方网站，其中包含了详细的文档和教程。

官方网站：​ ​<<https://mermaid-js.github.io/>​>

在线调试： [Mermaidv10.9.0 Live Editor](https://mermaid.live/)

在这里，你可以找到有关 Mermaid 的基础知识、语法和用例的信息。此外，你还可以在该网站的“Examples”部分找到各种示例图表和流程图，以及如何使用 Mermaid 创建它们的代码。

简单的说 mermaid 就是一个在 [[Markdown]] 下画图的一个语法工具， 这种通过代码画图的方式，对小白不太友好，但一旦熟悉，比用鼠标画图要灵活方便的多。

创建 mermaid 只需要创建一个代码块语言选为 mermaid 即可比如这样

````Mermaid
flowchart TD
Start --> Stop
````

> [!Tip] 关联推荐
> - 如果你对此感兴趣，也许这些插件能帮助你
> - [[mermaid-tools]]

## 图表类型

- [[Mermaid语法-流程图]]
- [[Mermaid语法-时序图]]
- Mermaid 语法 - 类图
- Mermaid 语法 - 状态
- Mermaid 语法 - 实体关系图
- Mermaid 语法 - 用户旅程图
- Mermaid 语法 - 甘特图
- Mermaid 语法 - 饼图
- Mermaid 语法 - 需求图
- Mermaid 语法 -Git 图
- Mermaid 语法 - 一些示例

## Mermaid 和 PlantUML 异同

Mermaid 和 PlantUML 是两种用于生成图表和流程图的工具。它们之间有一些主要的区别：

- 语言：Mermaid 使用 Markdown 标记语言来描述图表和流程图，而 PlantUML 使用自己的独特语言。
- 支持的图表类型：Mermaid 支持的图表类型更为丰富，包括流程图、甘特图、序列图、用例图、类图和关系图。PlantUML 只支持流程图、序列图、用例图、类图和对象图。
- 运行环境：Mermaid 可以在浏览器中直接运行，也可以使用 Node.js 在服务器端生成图表。PlantUML 只能在服务器端运行，并使用 Graphviz 库生成图表。

总的来说，Mermaid 更为简单易用，适合快速制作网站或文档中的图表。PlantUML 功能更为强大，适合更复杂的图表和模型。

## 其他绘图工具

这里简单介绍一些常用的画架构图流程图的软件

### draw.io

draw.io 是开源免费的在线画图东西，还提供桌面版别。

特性：

- 实时协作；
- 支撑在线离线版别；
- 存储支持多种方式：Google Drive, OneDrive, GitHub, GitLab, Dropbox 等；
- 许多丰厚的图标库。

![image.png](https://cdn.pkmer.cn/images/20230518155116.png!pkmer)

### ProccessOn

ProccessOn 是一款优异的国产在线协作画图软件，非常好用，也非常漂亮。

![image.png](https://cdn.pkmer.cn/images/20230518155139.png!pkmer)

### Excalidraw

Excalidraw 是免费的在线协作画图东西。

- 手写风格的草图非常美观；
- 漂亮的图库。

![image.png](https://cdn.pkmer.cn/images/20230518155219.png!pkmer)

### OmniGraffle

OmniGraffle 是一款在苹果体系上的画图软件。支撑 Mac/iPad/iPhone，功用丰厚。

![image.png](https://cdn.pkmer.cn/images/20230518155248.png!pkmer)

### PlantUML

PlantUML 开源的画图东西，可以用代码来画图。

![image.png](https://cdn.pkmer.cn/images/20230518155309.png!pkmer)

### Visio

微软出品，以前仍是非常常用的。

![image.png](https://cdn.pkmer.cn/images/20230518155335.png!pkmer)