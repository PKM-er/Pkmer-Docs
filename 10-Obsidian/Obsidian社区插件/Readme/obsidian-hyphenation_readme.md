---
uid: 20230803204130
title: Obsidian 插件：【Readme】Hyphenation
tags: ['obsidian插件', 'readme']
description: 启用两端对齐文本和换行
author: 7596ff
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Hyphenation

> [!Note] 插件名片
> - 插件名称：Hyphenation
> - 插件作者：7596ff
> - 插件说明：启用两端对齐文本和换行
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/7596ff/obsidian-hyphenation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-hyphenation)

## 概述

启用两端对齐文本和换行



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/7596ff/obsidian-hyphenation/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-hyphenation]] 插件的自述翻译


# 连字

在Obsidian中启用文本对齐和连字。

使用`navigator.language`来确定连字的主要语言。
可以通过在文件的前置元数据中添加`lang`键来更改每个文件的语言：

```md
---
lang: de
---
```

该插件的CSS将规则应用于预览模式中的`p`、`ol`和`ul`元素，
但对于外部链接，我认为在连字时看起来很丑。



