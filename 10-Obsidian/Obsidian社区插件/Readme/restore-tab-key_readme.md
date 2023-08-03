---
uid: 20230803231105
title: Obsidian 插件：Restore Tab Key
tags: ['obsidian插件', 'readme']
description: 恢复tab键行为：tab键插入一个tab，就像它应该的那样。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232427
---

# Obsidian 插件：Restore Tab Key

> [!Note] 插件名片
> - 插件名称：Restore Tab Key
> - 插件作者：jerrymk
> - 插件说明：恢复 tab 键行为：tab 键插入一个 tab，就像它应该的那样。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jrymk/restore-tab-key)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?restore-tab-key)

## 概述

恢复 tab 键行为：tab 键插入一个 tab，就像它应该的那样。

![Restore Tab Key](https://cdn.pkmer.cn/covers/restore-tab-key.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jrymk/restore-tab-key/main/README.md)
>

---

## Readme(翻译）

下面是 [[restore-tab-key]] 插件的自述翻译

恢复 Obsidian 的 Tab 键插件

恢复 Tab 键的行为：按下 Tab 键会插入一个制表符，就像它应该的那样。

总结一下，**这个插件使得 Tab 键插入制表符**（如果没有选中任何文本），**而不影响快速缩进行的能力**（如果选中了一些文本），就像大多数集成开发环境一样。此外，它还允许您快速插入硬空格，以便在文本中创建宽度空白。同时，它还允许您使用例如 2 个空格作为制表符，这在编辑代码块时可能会用到。

它解决了这个论坛帖子中提到的问题：<https://forum.obsidian.md/t/option-to-disable-tab-to-indent/40868>

---

![](img_plugin-settings.png)\

现在，Tab 键的工作方式与其他集成开发环境一样。如果您选择了一些文本并按下 Tab 键，选中的行将缩进。如果没有选中任何内容，将插入一个制表符。还有一个选项可以无论如何都插入制表符。

使用制表符进行缩进

选择一些文本并按下制表键进行缩进，就像几乎所有的集成开发环境一样。

缩进操作完全不变，您可以在编辑器设置中更改“使用制表符进行缩进”和“制表符缩进大小”来更改该行为。

### 硬空格

硬空格（U+00A0）作为制表符，允许您在文本中插入宽度空白。如果不使用硬空格，重复的空格（和制表符）将被渲染为一个单一的空格。您可以切换是否使用硬空格而不是普通空格。\

您可以在行的开头插入硬空格，以起到缩进的作用。不过，您需要将光标移动到开头并按下制表符来插入它们。**缩进（选择文本并按下制表符）不会插入硬空格。**

实时预览/源代码视图：（是的，使用硬空格作为缩进后，它仍然变成了一个代码块。啊啊啊！）\

![](img_hard-spaces.png)\

渲染后（阅读视图）：\

![](img_hard-spaces-rendered.png)
