---
uid: 2023080322160296
title: Obsidian 插件：Code Block Labels
tags: ['obsidian插件', 'readme']
description: 为篱笆代码块添加标签
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Code Block Labels

> [!Note] 插件名片
> - 插件名称：Code Block Labels
> - 插件作者：Sean Bowers
> - 插件说明：为篱笆代码块添加标签
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/stbowers/obsidian-codeblock-labels)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-codeblock-labels)

## 概述

为篱笆代码块添加标签

![Code Block Labels](https://cdn.pkmer.cn/covers/obsidian-codeblock-labels.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/stbowers/obsidian-codeblock-labels/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-codeblock-labels]] 插件的自述翻译

# Obsidian 代码块标签插件

该插件用于为围栏代码块添加标签。

在围栏代码块的第一行末尾（如果适用的话，在语言之后），将标签放在花括号（`{}`）中以添加标签。

![命名代码块的演示](docs/demo.gif)

该插件还可以选择配置为将语言作为标签显示，如果没有设置显式标签的话（默认情况下启用 - 可以在设置面板中关闭）。

![使用语言作为标签的截图](docs/language-label.png)

标签被分配了 "codeblock-label" 类，因此可以使用 CSS 进行样式设置：

```css
/* 样式化标签 */
.markdown-preview-view .codeblock-label {
  color: magenta;
  background: green;
}

/* 样式化代码块本身，但保持未标记的代码块不受影响，选择直接在标签后面的 pre 标签 */
.markdown-preview-view .codeblock-label + pre {
  background: blue;
}
```

![带有自定义 CSS 的带标签代码块的截图](docs/custom-css.png)

刷新错误

已知存在一个问题，即更改标签并不总是导致预览更新。

我正在寻找一个潜在的修复方法，但我想确保以正确的方式进行修复 :)

因为 Obsidian 在其 Markdown 渲染中试图高效，所以只有在检测到 Markdown 的更改时才会更新预览。

然而，此处使用的语法并不总是触发此更新，因为 Obsidian 不认为它是有效的 Markdown 语法。

具体来说，Obsidian 仅检查代码块的第一行*直到第一个空格或换行符*，以确定用于语法高亮的语言。

这意味着如果您在语言和标签之间有一个空格（或者您的标签中有一个空格），当您修改超过该第一个空格之后的任何内容时，它不会自动更新预览。

要手动修复此问题，只需对代码块的任何其他部分进行更改，它应该触发更新。

![显示错误操作的动画](docs/refresh-bug.gif)

实时预览

目前该插件不支持实时预览。

实时预览的工作方式与“正常”预览有很大的不同，而且我个人不使用实时预览，所以没有太大的动力去使其工作。

如果有人愿意研究一下，我非常乐意接受拉取请求！

## 信用

此插件基于此处的模板插件 <https://github.com/obsidianmd/obsidian-sample-plugin>
