---
uid: 20230619212544
title: MarginNote 生成页码与 Obsidian 联动
tags: [MarginNote, 联动]
description: MarginNote 生成页码链接与 Obsidian 联动
author: 却能火里种金莲
type: tutorial
draft: false
editable: false
modified: 20230619214759
---

# MarginNote 生成页码链接与 Obsidian 联动

## 概述

> MarginNote 是一款苹果独占的 pdf 阅读器，以拆书，思维导图为核心

本教程主要实现：

1. 去除 marginnote 每一张卡片最末自带的 pdf 转跳链接
2. 快速获取 mn 中卡片摘录及链接，方便在 Obsidian 中引用

主要解决的问题是：MarginNote 自带的深度链接可以很方便的从 Obsidian 中跳转到 MarginNote，但是该链接是 MarginNote 私有独占的，不具有通用性。为了避免以后深度链接失效，本文试图采取生成从 Obsidian 跳转到 MarginNote 的页码链接。一方面即使没有软件也可手动操作跳转到原文处，另一方面，Obsidian，Sioyek 等阅读器都支持通过页码跳转到相应位置。

## 操作步骤

### 插件准备

- Obsidian 插件：Marginnote companion
- Marginnote3 插件：Obsidian Bridge
- Marginnote3 插件：ohmymn 插件（建议使用 4.1.1 版本）

![](https://cdn.pkmer.cn/images/Snipaste_2023-06-18_11-23-43.png!pkmer)

### Marginnote Companion 配置

![](https://cdn.pkmer.cn/images/Snipaste_2023-06-18_11-23-00%201.png!pkmer)

如图，复制下列模板到对应笔记正文一栏

```
{{#Title}}

## {{.}}

{{/Title}}{{Excerpt}}{{> CmtBreak}}{{> Comments}}
```

### MarginNote 中获取卡片组

在右边的插件中点开，开启 ob bridge ，随后开启获取目录模式。

![](https://cdn.pkmer.cn/images/Snipaste_2023-06-18_16-58-20.png!pkmer)

复制后，在 Ob 中粘贴即可获得一整个卡片组、卡片树下卡片。此时没有 pdf 页码。

### 链接附带 pdf 页码

确保 MarginNote 中安装了 OhMyMN 插件：

![](https://cdn.pkmer.cn/images/Snipaste_2023-06-18_16-59-41%202.png!pkmer)

在模块快捷开关中，打开 AutoComment：

![](https://cdn.pkmer.cn/images/IMG_2527.png!pkmer)

![](https://cdn.pkmer.cn/images/IMG_2528.png!pkmer)

随后在 AutoComment 预设中，复制粘贴：

```
(/^.+$/gs, "%%{{doc.title}}, p{{page.start}} %%")
```

敲下回车保存。

![](https://cdn.pkmer.cn/images/IMG_2529.png!pkmer)

此时所有摘录会以 ob 中注释格式附带评论，书籍名称 + 页码。比如：`%%《悟真篇》p29%%`。对此，可手动关闭「摘录时自动执行」，免得所有稀碎卡片都带有出处，影响后续重组。对于自己想要的关键语句，再开启即可。

## 注意事项

1. 得到的页码是 pdf 文件的页码，而非实体书页码。
2. pdf 电子书和实体书的页码有一个差值，通常在制作电子书时候已经固定。比如书籍目录显示实体书第十页，但在 pdf 电子书文件中是第 20 页。上述操作得到的，就是这个 pdf 文件的第 20 页。
3. 推荐 pdf 电子书命名中，附带偏移值。比如《悟真篇》- 中华出版社第 1 版 (2003)- 偏移 10
4. 这样当摘录悟真篇第 19 页的笔记时，得到的出处索引是：《悟真篇》- 中华出版社第 1 版 (2003)- 偏移 10，p29