---
uid: 20231215142409
title: Obsidian 插件技巧 - Zoom 插件的妙用
tags: [Zoom, 增强编辑, 写作]
description: 介绍一些Zoom插件的妙用，增强编辑体验
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231215143614
---

# Obsidian 插件技巧 - Zoom 插件的妙用

## 切换缩放的标题设置

[[obsidian-zoom|Zoom]] 插件可以把编辑视角切换到标题或者列表之中，非常实用，但是切换缩放标题时还是有一点点不流畅，要先退出缩放选择一个标题后再进行**Zoom in** 。

于是发现了另外一个非常有用的插件**Quick snippets and navigation**：

**Quick snippets and navigation**的**Go to next heading**命令可以切换到下一个标题，**Go to previous heading** 命令可以切换上一个标题。

于是可以直接用 QuickAdd 的 Macro 命令组合标题切换的工作流程就可以了，这里是我配置的 2 个 QuickAdd 的 Macro：

![Obsidian 插件技巧：Zoom 插件的妙用](https://cdn.pkmer.cn/images/202312151427102.png!pkmer)

> 注意：切换上一个标题和切换下一个标题是 2 个命令，可以分别注册不同的快捷键，我设置的是 `Alt + [` 和 `Alt + ]`。

效果如下：

![Obsidian 插件技巧：Zoom 插件的妙用](https://cdn.pkmer.cn/images/202312151427103.gif!pkmer)

> [!tip]
> 如果想快速切换其他标题，可以试试插件**Another Quick Switcher**的 `Header floating search in file` 命令，可以在阅读或者编辑模式快速切换和预览标题内容

## 拓展：任意段落或小章节缩放

其实还有一个歪门邪道，利用 Zoom 插件缩放至一个非列表的段落或者空行，或者当前小标题下方的所有文本 (即小章节)。

- 任意段落缩放：
	- 将**某个空白段落或者非列表的段落**转换为**列表**后再进行缩放 (Zoom in)，然后取消列表格式，将缩放到这一行里面。
	- ![Obsidian 插件技巧：Zoom 插件的妙用](https://cdn.pkmer.cn/images/202312151427104.png!pkmer)
- 任意小章节缩放：
	- 将**某个空白段落或者非列表的段落**转为 6 级小标题后再进行缩放 (Zoom in)，然后取消 6 级小标题格式，将缩放到这一小章节里面。
	- ![Obsidian 插件技巧：Zoom 插件的妙用](https://cdn.pkmer.cn/images/202312151427105.png!pkmer)

> 我分别配置的快捷键是：`Ctrl + Shift + =` 和 `Ctrl + Shift + -`

这样可以通过 Zoom 插件在任意空行、段落、列表 (有序无序)、标题进行缩放，能更加的专注目前编辑的内容，个人感觉还是挺实用的操作。

### 效果演示

![Obsidian 插件技巧：Zoom 插件的妙用](https://cdn.pkmer.cn/images/202312151427106.gif!pkmer)

## QuickAdd 中 Zoom 指令的快捷设置

![Obsidian 插件技巧：Zoom 插件的妙用](https://cdn.pkmer.cn/images/202312151427107.png!pkmer)

## References

- [[Obsidian搭配 Vim Mode]]
- [[obsidian-zoom]]
- [[quick-snippets-and-navigation_readme]]
- [[quickadd]]