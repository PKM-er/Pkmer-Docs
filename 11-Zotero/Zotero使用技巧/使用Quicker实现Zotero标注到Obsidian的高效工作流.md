---
uid: 20250424020402
title: 使用 Quicker 实现 Zotero 标注到 Obsidian 的高效工作流
tags: [zotero, Obsidian, 文献笔记]
description: 使用 Quicker 实现 Zotero 标注到 Obsidian 的高效工作流
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20250424020916
---

# 使用 Quicker 实现 Zotero 标注到 Obsidian 的高效工作流

![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240205352.png!pkmer)

> [!tip] Quicker 动作链接
> ZoteroToObsidian：<https://getquicker.net/Sharedaction?code=b7727e44-4933-4ec5-8103-08dbc1cb1ea7>

关于如何通过 Quicker 制作自定义标注到 Obsidian 的笔记中，我制作了一个 Quicker 动作实现摘录 Zotero 图片或者标注 Obsidian 的操作 [^1] ，最近对这个动作进行了一次大更新，本文章将主要介绍新版的功能。

## 布局调整

首先，此次更新主要通过 Quicker 的自定义操作窗口设置了一个悬浮操作框，可以直接通过按钮来进行不同的操作，可以更方便的进行 Zotero 标注格式的复制。

通过动作的右键菜单下的布局按钮可以设置操作框的布局形式，目前自带有 9 种布局形式，效果如下图所示。

![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240205332.png!pkmer)

## 复制功能

![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240205641.png!pkmer)

- 复制标注：可以直接复制标注和图片，格式包含标注文本 + 注释内容 + 引用来源
- 更新图片：如果修改了标注图片的矩形框，不用重新复制，直接选中框选区域点击更新图片功能既可。

## 引用功能

![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240206955.png!pkmer)

根据实际需要的一些情况，设置了 4 种不同格式的引用形式，可以引用条目、Citation（引用）、标注等。

## 定位搜索

通过定位搜索可以实现 Zotero 与 Obsidian 的双向定位：

![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240206419.png!pkmer)

- ① 从 Obsidian 到 Zotero，可以直接通过 Zotero 的外部回链来跳转至对标注区域；
- ② 从 Zotero 到 Obsidian，可以通过 Obsidian URI[^2] 来调用 Obsidian 的全局搜索来定位。

目前可以实现 2 种检索形式：

- 定位文档：通过 Zotero 标注 ID 和 标注文本 来定位文档，即：检索包含这条标注信息的笔记。
- 关联笔记：通过 Zotero 条目 ID 和 作者名称 和 文献名称 来检索所有关联的笔记，即涉及到这篇文献的所有笔记。

![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240206000.png!pkmer)

> [!tip] Excalidraw 已适配 Obsidian 的全局搜索，可以通过检索内容定位具体文本框和图片
>
> ![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240206368.gif!pkmer)
>
> 关于 Obsidian 中 Excalidraw 与 Zotero 的配合，请移动至 [[230929_自定义Excalidraw脚本：实现Zotero与Excalidraw的联动|自定义Excalidraw脚本：实现Zotero与Excalidraw的联动]]。

## 其他功能说明

- **自动折叠功能**：启用后，会自动折叠操作窗口鼠标悬浮展开
    - ![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240206327.png!pkmer)
- **关联到前台进程**：启用后，当窗口
    - ![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240206796.png!pkmer)

## 配置说明

首先需要配置路径，通过动作的右键菜单可以设置参数：

![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240206326.png!pkmer)

其中，ZoteroPath 为 Zotero 数据存储位置，如下图所示：

![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240206819.png!pkmer)

ZoteroImages 为 Obsidian 中用来存储 Zotero 中标注图片的文件路径，如下图所示：

![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240206338.png!pkmer)

## 扩展说明

Zotero 目前主要是管理阅读的文献的，但是对书籍管理就缺少封面视图以及分库管理的方法，我是采用 Calibre 来管理的，使用界面如下：

![250424_使用Quicker实现Zotero标注到Obsidian的高效工作流.md](https://cdn.pkmer.cn/images/202504240206802.png!pkmer)

关于这部分的介绍，后续也会写篇文章进行说明，具体电子书籍做笔记的工作流可以参考这个流程图：

![使用Quicker实现Zotero标注到Obsidian的高效工作流](https://cdn.pkmer.cn/images/202504240207325.png!pkmer)

[^1]: [[Quicker动作之自定义Zotero标注到Obsidian]]
[^2]: [[Obsidian_URI]]