---
uid: 20230715232602
title: Obsidian 插件：Canvas Presentation 实现 Canvas 画布演示效果
tags: [Obsidian, 插件, Canvas, 白板]
description: Canvas-Presentation-plugin 实现 Canvas 画布演示效果
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20230716171734
---

# Obsidian 插件：Canvas Presentation 实现 Canvas 画布演示效果

## 概述

白板可以帮我们汇聚自己的思路、素材，让我们可以整理归并思路。但在一定程度上，这种思路有时候需要演示给出我们自己之外的人查看， 那么一点点拖动白板中的卡片，似乎效率较低，有没有一种方法来让白板具有样式效果呢？

Canvas Presentation 插件，就是帮助你根据顺序演示白板中的卡片，有点类似思维导图的简易演示模式。

> [!note] Text Generator
> 插件名称：Canvas Presentation
> 插件版本：0.0.3
> 插件作者：Boninall
> 插件说明：帮助你根据顺序演示白板中的卡片
> 插件分类：[' 白板相关 ', 'obsidian 插件 ']
> 插件项目地址：[点我跳转](https://github.com/Quorafind/Obsidian-Canvas-Presentation)
> 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-presentation)

## 效果&特性

- Canvas 画布演示效果

![cover|784](https://cdn.pkmer.cn/images/230716%20010511.gif!pkmer)

## 使用

### 创建幻灯片——Canvas Presentation: Mark Slide Number

在画布中，从“命令”面板中选择要作为第一张幻灯片和触发器的**卡片** `Canvas Presentation: Mark Slide Number`，这时会在当前 `canvas` 画板中出现一个**Slide 卡片**，其中包含您添加的卡片的 ID，标志着你刚刚选择的卡片已经进入要演示的列表之中了：

![Pasted image 20230716001921](https://cdn.pkmer.cn/images/Pasted%20image%2020230716001921.png!pkmer)

可以通过鼠标选择一个 **组 (Group)** 或者**卡片笔记**，也可以通过框选多个卡片进行创建幻灯片，依次把你想要播放视图的顺序选择卡片通过 `Canvas Presentation: Mark Slide Number` 命令进行创建幻灯片播放列表。

> [!Tip]
> - 如果想修改幻灯片，可以通过修改或删除 **Slide 卡片** 里面 **卡片 ID** 的无序列表来实现，但目前该插件只能生成 ID 来识别卡片，并不太好调整
> - 在 **Slide 卡片** 里面通过注释符号 **\%\%** (`Ctrl+?`) 可以适当加点幻灯片的记号
> - 重新制作幻灯片也可以直接把 **Slide 卡片** 删除就行了

 ![Pasted image 20230716010802](https://cdn.pkmer.cn/images/Pasted%20image%2020230716010802.png!pkmer)

### 演示幻灯片——Next Slide 和 Previous slide

- 命令 `Next Slide`：
	- 播放下一个幻灯片视图
- 命令 `Previous slide`：
	- 播放上一个幻灯片视图

通过这两个命令就可以控制要演示的幻灯片视图了。

### 使用技巧——设置快捷键

> [!tip] 快捷键设置
> - 安装并启用 `Canvas Presentation` 插件后，可以过通过创建命令的快捷键方式 (hotkeys) 来调用创建幻灯片并控制幻灯片播放
> - 可以设置常用的 创建幻灯片、查看下一张或上一张幻灯片的快捷指令

![Pasted image 20230716000927|874](https://cdn.pkmer.cn/images/Pasted%20image%2020230716000927.png!pkmer)