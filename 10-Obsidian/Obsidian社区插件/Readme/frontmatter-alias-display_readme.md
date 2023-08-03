---
uid: 2023080322185262
title: Obsidian 插件：【Readme】Frontmatter Alias Display
tags: ['obsidian插件', 'readme']
description: 在文件资源管理器中，将前置元数据别名显示为显示名称。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Frontmatter Alias Display

> [!Note] 插件名片
> - 插件名称：Frontmatter Alias Display
> - 插件作者：muhammadv-i
> - 插件说明：在文件资源管理器中，将前置元数据别名显示为显示名称。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/muhammadv-i/obsidian-frontmatter-alias-display)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-alias-display)

## 概述

在文件资源管理器中，将前置元数据别名显示为显示名称。

![Frontmatter Alias Display](https://cdn.pkmer.cn/covers/frontmatter-alias-display.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/muhammadv-i/obsidian-frontmatter-alias-display/main/README.md)
> 

---

## Readme(翻译）

下面是 [[frontmatter-alias-display]] 插件的自述翻译


# 前言别名显示
这是一个为 Obsidian.md 设计的插件，可以在文件资源管理器中将前言别名显示为文件名。目前，它只支持文件资源管理器，但我计划在图形视图中也实现这个功能。

![演示](frontmatter-alias-display.gif)

为什么？
“为什么一开始就要在前置数据中写标题呢？”
许多将Obsidian用作[Zettelkasten](https://zettelkasten.de/)系统的人会立即意识到，在文件资源管理器中导航时，只看到带有任意标题（例如`202303041748`，也称为ID）的笔记而不是更具信息性的标题（例如` .prototype和.constructor之间的区别`）会有些困难。

这些任意的标题，或者更准确地说，ID，使得在笔记之间进行导航和链接变得容易，这是Zettelkasten方法的核心概念，同时还确保没有两个笔记具有相同的ID。

因此，现在我们可以保持笔记ID的纯净性，同时在前置数据中保持一个信息丰富的标题。当我们链接到另一个笔记时，我们可以使用Obsidian的有用的链接别名，通过输入`[[ID|Alias]]`来链接到以`ID`为标题的笔记，但显示`Alias`作为链接。

![使用“[[ID|Alias]]”](IDAlias.gif)

#### 反馈
我很想听到大家的意见，并获得关于改进这个插件的建设性批评，尤其是与API的实现和使用以及TypeScript的一般情况相关的反馈。

#### 警告
这是我第一次开发插件并使用Obsidian API。请先在一个虚拟保险库中测试插件。请自行决定是否使用。

#### 待办事项
- [ ] 将功能扩展到图形视图中
- [ ] 添加一个设置菜单，用于自定义和其他选项



