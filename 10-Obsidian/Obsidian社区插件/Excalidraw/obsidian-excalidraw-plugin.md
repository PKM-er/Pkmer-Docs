---
uid: 20230329145825
title: Obsidian 插件：Excalidraw 完美的绘图工具
tags: [Obsidian, 插件, 绘图工具, 手绘风格, 效率工具]
description: Obsidian 插件：Excalidraw 完美的绘图工具
author: windilycloud
type: basic
draft: false
editable: false
modified: 20231110210605
---

# Obsidian 插件：Excalidraw 完美的绘图工具

![Excalidraw](https://cdn.pkmer.cn/covers/obsidian-excalidraw-plugin.PNG!pkmer)

> [!Note] Excalidraw
> - 插件名称：Excalidraw
> - 插件作者：Zsolt Viczian
> - 插件分类：[' 图表生成 ', ' 界面相关 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 插件说明：在 Obsidian 中 使用 Excalidraw 绘图
> - 项目地址：[点我访问](https://github.com/zsviczian/obsidian-excalidraw-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-excalidraw-plugin)

![微信图片_20230513174136.jpg](https://cdn.pkmer.cn/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230513174136.jpg!pkmer)

Excalidraw 本是开源的在线协作手写软件，来自匈牙利的 Zsolt Viczian 大叔将其融合进了 Obsidian。这个融合是高度融合，目前与原项目已经大相径庭了，主要差别在于对 Obsidian 的适配，包括双链，文件拖拽，嵌入笔记并实时更新，脚本系统，图库系统，手写压感，pdf 批注和引用等。这样强大的插件，完全可以当作一个独立的软件来学习！这个大叔倡导的是视觉化笔记，笔记方法也很值得参考。大叔在官方 Github 项目下录有数十个从入门到进阶的教程，并有分享笔记方法在 Youtube 上。本文只起到一个引导的作用，很难面面俱到 Excalidraw 插件的功能，非常强大。

![微信图片_20230513174056.jpg](https://cdn.pkmer.cn/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230513174056.jpg!pkmer)

有些人可能会担心 excalidraw 并不是标准 markdown 格式的存储，但显而易见的是，excalidraw 本身就是开源的，很多软件 logseq，RoamReasearch，Vscode 等都集成了 excalidraw，并且 Obsidian 的数据存在本地（以 Markdown 文件格式存储为 json），并提供丰富的导出功能，即使 excalidraw 以后不维护了，亦可以导出为 png 嵌入在笔记里（目前是实时嵌入到笔记里的，点一下就能再次修改）。所以完全不用担心 excalidraw 捆绑你或者再也不能使用了。

## 基本功能

关于在 excalidraw 里添加图形，文字，箭头这些看看就会了，就不多说了，说点特色功能。

### 工具和样式面板

- 虽然因为插件版本更新的不同，呼出菜单的方式和样式略有变化，但是核心功能一版不会丢失。另外就是图标的表意上基本也是近似的。
- 对于在画板中已经创建的元素，需要通过鼠标框选才能选择多个。选择之后右击，菜单栏中有**Group Selection**, 能够组合成一个合并单元进行操作。

![image.png|586](https://cdn.pkmer.cn/images/20230801151638.png!pkmer)

### 右键菜单

- 右击元素或者背景画布，会弹出一个右键的上下文菜单，可以对一个或多个元素进行翻转、复制样式、添加到库等操作。

![image.png|334](https://cdn.pkmer.cn/images/20230801155050.png!pkmer)

### 图库

![image.png|460](https://cdn.pkmer.cn/images/20230513192018.png!pkmer)

excalidraw 可以把常用的一些绘图存为小组件库，也可以从网上白嫖别人绘制好的组件。上图就是我在 [Excalidraw Libraries](https://libraries.excalidraw.com/?target=_blank&referrer=app%3A%2F%2Fobsidian.md&useHash=true&token=QsBDpV33IaUrThzJN19Od&theme=dark&version=2&sort=default) 白嫖的一些便利贴和小人儿。这样一来，复用图形变得非常容易，绘画风格也会趋于一致，不用在不同图里面重复画一些相同的东西。对于视觉笔记工作者来说，表现力可以说是得到了进一步的提升。

### 绘制简单图表

![simple chart.gif](https://cdn.pkmer.cn/images/simple%20chart.gif!pkmer)

一图胜千言，看完就懂。直接从 Excel 里把数据拖进去便可绘图，如果熟悉 [[dataview]] 和 [[table-editor-obsidian]]，它俩能导出 CSV 格式的数据，意味着能相互配合，Excalidraw 就是支持 CSV 数据画图的。

### 丰富的格式

原生 Excalidraw 在格式上可能比较瓜皮，Obsidian 的 Excalidraw 支持插入已有的 markdown 文件并渲染，双链语法，Markdown 语法，Latex 语法。虽然说实际使用稍显麻烦，比如插入 latex 语法得用命令插入，修改也得重写：

![image.png](https://cdn.pkmer.cn/images/20230514095151.png!pkmer)

但插入 md 双链链接就很容易，直接 `[[` 就行了。

颜色方面大叔也是不遗余力的进行了提升，什么渐进啊，颜色选择啊，颜色脚本，自定义颜色啊，你可以自己到各大网站白嫖配色和色系到 Excalidraw 并保存为自己的。下面的图片就是通过颜色脚本自动生成的色谱图：

![image.png](https://cdn.pkmer.cn/images/20230514102238.png!pkmer)

除此之外，自定义字体也是很棒的功能。原 Excalidraw 由于版权问题并没有内置手写中文字体，和英文对比非常不协调，我自己不知道从哪嫖了个名为“字语青梅硬笔”中文手写字体，我觉得很好看也很搭。

![image.png](https://cdn.pkmer.cn/images/20230514101504.png!pkmer)

### 脚本引擎

![image.png](https://cdn.pkmer.cn/images/20230514100009.png!pkmer)

插件的插件了属于是，点击右上角倒数第二个形如齿轮的图标，就可在线预览大叔分享的自动化脚本，点击安装就会下载到本地设置好的脚本文件夹，就可以随时使用了。

这些脚本是一些自动化创建一些常用图形的方式，比如：

- 选中图里的文字，一键给所有文本元素添加框
- 一键对齐选中的元素
- 一键把弯箭头转换为直角箭头
- 一键 OCR 图表文字
- 一键重命名图片
- 一键设置链接别名
- 把图形转换为脑图模式
- 使用 Excalidraw 做 PPT 演示：[[Excalidraw脚本-Slideshow完美实现画板幻灯片演示的脚本]]
- .......

当然，你也可以到 [obsidian-excalidraw-plugin/Add Connector Point.md](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/Add%20Connector%20Point.md) 下载和学习脚本自己学习，这也有大叔录制的 [Youtube视频](https://www.youtube.com/watch?v=hePJcObHIso&feature=youtu.be) 教程，熟悉 Javascript 还是挺容易上手的。我曾经尝试过在 Excalidraw 里做动画，这些都是可以实现的。

### 嵌入

如果给我个理由为什么不用其他笔记软件或者 web 应用里的 Excalidraw，那么必定是 Obsidian 里的 Excalidraw 强大的嵌入功能。

1. 实时嵌入：你可以修改绘图，其嵌入的地方都会同步更新。修改起来也非常方便，只要点一下嵌入的图就能进入绘图界面。
2. 自定义大小：在默认设置中，你可以自定义嵌入图的默认大小，当然也可以用类似 `![[test.excalidraw|200]]` 这样的语法进行调节
3. 自定义嵌入样式：绘图想要白色背景，嵌入想要黑色背景，透明背景？想要边框？想要无边框？想要不同的字体？没问题，设置里可以添加 CSS 样式文件！
4. [[Excalidraw局部嵌入Obsidian]]： Excalidraw 生成链接局部嵌入图形到 Obsidian 中

### 基于 Obsidian 优化

Excalidraw 在早期是有很多问题的，比如没有手写压感，插图太多很卡，但是随着大叔的精力不断投入，几年如一日，这些问题终被解决了。光是 Github 上提到的优化就有：

- 支持手机端，并配有适配手机端的工具栏
- 提供选项压缩为 JSON 并将内容以 base64 编码，减少文件大小的同时，解决由于某些用户并不想在图谱里看到 Excalidraw 文件被双链。这一选项也提升了同步体验。
- 自定义调色盘
- 橡皮擦，左手模式，链接图标自定义，提升文件名自定义体验，导出为 PNG 和 SVG，插件的脚本提供自定义选项
- 支持 yaml，受益于保存为 Markdown 文件，我们可以像管理笔记一样管理绘图，添加 tags，添加 category 等元信息，且这些元信息脚本里也可以访问，以此对绘图进行微调
- 图里放几百个文本元素和连线，没有丝毫卡顿
- ......

这样深度融合进 Obsidian，配合 Markdown 语法，方便的嵌入，高度自定义的 Excalidraw 又怎能不爱？

## 社区实践

> EA 脚本开发的介绍： [[ExcalidrawAutomate index]]

- [[Excalidraw脚本-Slideshow完美实现画板幻灯片演示的脚本]]
- [[Excalidraw局部嵌入Obsidian]]
- [[自定义Excalidraw脚本-实现Zotero与Excalidraw的拖拽联动]]
- [[自定义Excalidraw脚本-建立库外Eagle素材库的连接]]
- [[自定义Excalidraw脚本-画板局部或者全局播放动画]]
- [[自定义Excalidraw脚本-快速插入时间戳笔记]]
- [[自定义Excalidraw脚本-OCR自动提取图片文字]]

## 支持开源开发者

如果你深度使用 Excalidraw 并可以用其提高生产力，建议登录 [Buy ZsoltViczián a Coffee. ko-fi.com/zsolt - Ko-fi ❤️.](https://ko-fi.com/zsolt) 赞助一波，需要 paypal 或者信用卡。没有这两样的也可以 [zsviczian/obsidian-excalidraw-plugin](https://github.com/zsviczian/obsidian-excalidraw-plugin) 到这个项目下，登录后点右上角的星星，让更多人看到。

## Excalidraw 的朋友们

如果你喜欢 Excalidraw，请考虑尝试一下 [ExcaliBrain](https://github.com/zsviczian/excalibrain)（也可通过 Obsidian Community Plugins 获得）。