---
uid: 2023080322174598
title: Obsidian 插件：【Readme】Embedded Note Paths
tags: ['obsidian插件', 'readme']
description: 在每个笔记上插入笔记文件路径。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Embedded Note Paths

> [!Note] 插件名片
> - 插件名称：Embedded Note Paths
> - 插件作者：b0o
> - 插件说明：在每个笔记上插入笔记文件路径。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/b0o/obsidian-embedded-note-paths)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-embedded-note-paths)

## 概述

在每个笔记上插入笔记文件路径。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/b0o/obsidian-embedded-note-paths/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-embedded-note-paths]] 插件的自述翻译


这个插件已经归档！

Obsidian `0.16.3` 版本中包含了一个更好的原生实现的插件，可以在 `设置 > 外观 > 显示标签标题栏` 中启用。这个插件将继续在 Obsidian `0.15.x` 版本中工作，但不会再进行更新。

Obsidian嵌入式笔记路径插件

该插件在预览和编辑模式下，在每个笔记的顶部嵌入了笔记路径。该插件不会修改笔记，并且路径不是文档本身的一部分。

**功能：**

- 可以使用Style Settings插件对嵌入的路径进行样式设置
- 路径可以通过文件的frontmatter进行隐藏或覆盖
- 如果存在一级标题，可以隐藏路径
- 如果需要，可以启用前导/尾随斜杠
- 如果需要，可以显示文件名

<img src="https://user-images.githubusercontent.com/21299126/185779567-ba379655-9ed7-495c-841c-112a76101698.png" alt="嵌入路径插件的截图" />

### 注意事项

一般来说，该插件会尝试调整路径的大小以与注释内容对齐。但是某些主题可能会与这些计算产生冲突。如果您注意到路径与注释之间存在错位，可以通过以下方式使用CSS来设置路径的样式：

```css
h1.embedded-note-path {
  /* ...阅读模式样式... */
}

h1.cm-line.embedded-note-path {
  /* ...实时预览/编辑模式样式... */
}
```

您可能还需要考虑可读行长度：

```css
.is-readable-line-width h1.embedded-note-path {
  /* ...阅读模式样式... */
}

.is-readable-line-width h1.cm-line.embedded-note-path {
  /* ...阅读模式样式... */
}
```

## 鸣谢

这个插件是基于 [mgmeyers/obsidian-embedded-note-titles](https://github.com/mgmeyers/obsidian-embedded-note-titles) 进行的一些修改。



