---
uid: 2024042221330345
title: Obsidian 插件：【Readme】Mehrmaid
tags: ['obsidian插件', 'readme']
description: Enables you to put Markdown inside of Mermaid diagrams.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Mehrmaid

> [!Note] 插件名片
> - 插件名称：Mehrmaid
> - 插件作者：huterguier
> - 插件说明：Enables you to put Markdown inside of Mermaid diagrams.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/huterguier/obsidian-mehrmaid)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mehrmaid)

## 概述

Enables you to put Markdown inside of Mermaid diagrams.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/huterguier/obsidian-mehrmaid/master/README.md)

---

## Readme(翻译）

下面是 [[mehrmaid]] 插件的自述翻译

【机翻】

# 黑曜石 Mehrmaid

Mehrmaid（德语中的“mehr”表示“更多”）是 Obsidian 中 Mermaid-JS 代码块的扩展。

它允许在节点标签内呈现 Obsidian 生成的 markdown。

这包括*链接*、*标签*、*代码块*和最重要的是*Mathjax 表达式*！

# 示例

为了在 mehrmaid 节点中呈现 Obsidian markdown，节点内容必须用单引号括起来。

以下示例展示了如何呈现具有不同节点类型的图表。

````
```mehrmaid
flowchart LR
A --> B & C --> D --> E --> F & G
G --> F
A["![[logo.png|100]]"]
B("![[logo-old.png|100]]")
C("[[thisisalink]]")
D("$f(x)=\sum_i^\inf x^i$")
E("**Caption**
1. **Bold**
2. *Italic*
3. ==Marker==
- [ ] Point
---
Different Section")
F("#uni")
G(("$\dfrac{2}{\pi}+2$"))
```
````

![](https://cdn.pkmer.cn/covers/mehrmaid_2_0.png!pkmer)

这里是另一个简单示例，展示了如何呈现具有子图的图表。

在这个示例中，图表以浅色模式呈现。

````
```mehrmaid
flowchart LR
A --> C
B --> D
C & D --> E
E --> F & G
F --> H
G --> J
subgraph X ["$X$"]
A(("$A$"))
end
subgraph id1 ["$Y$"]
G(("$G$"))
end
subgraph id3 ["$Z$"]
E(("$E$"))
end
C(("$C$"))
D(("$D$"))
F(("$F$"))
B(("$B$"))
H(("$H$"))
J(("$J$"))
```
````

![](https://cdn.pkmer.cn/covers/mehrmaid_2_1.png!pkmer)

# 安装

该插件目前尚未在官方的 Obsidian 插件商店中提供。

您可以通过将此存储库克隆到您的 `.obsidian/plugins` 文件夹中，然后在克隆的存储库中运行 `npm install`，接着运行 `npm run build` 来安装它。

然后该插件应该会在 Obsidian 插件设置中可用。

# 它是如何工作的

Mehrmaid 利用 [Mermaid-JS](https://mermaid-js.github.io/mermaid/#/) 库来渲染图形。

Mermaid-JS 允许使用简单的 Markdown 语法来定义图中的节点和边。

节点的内容可以使用 HTML 或纯文本来定义。

Mehrmaid 首先使用 Obsidian Markdown 渲染器来渲染节点的内容并估计它们的大小。

然后使用 Mermaid-JS 的 HTML 渲染器来以正确的节点大小渲染图形。

最后，占位节点将被替换为渲染的 HTML。

这种方法仍然存在一些问题，希望将来能够解决。
