---
uid: 20230717151344
title: Excalidraw 脚本：Slideshow 完美实现画板幻灯片演示的脚本
tags: [Excalidraw, Slideshow, 幻灯片, PPT]
description: Excalidraw脚本Slideshow可以将您的绘图转换为幻灯片演示文稿
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20230717171828
---

# Excalidraw 脚本：Slideshow 完美实现画板幻灯片演示的脚本

想要将自己的创意和奇思妙想展示给朋友吗？本文将介绍一个 Obsidian 插件——Excalidraw 的 Slideshow 脚本。它可以将您的绘图转换成幻灯片演示文稿，无论您在绘图中嵌入了图片、草稿、视频、网页还是动图，都可以通过该插件一一展示。您无需规划整个绘图的布局，只需使用箭头或框架的形式标记您想展示的内容，就能像使用 PPT 一样展示给他人。

> [!note] Slideshow
> 脚本 ID：Slideshow
> 脚本作者：zsiczian
> 脚本描述：该脚本会将您的绘图转换为幻灯片演示文稿
> 脚本版本：3.0
> 脚本源码地址：[obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin)
> 脚本作者演示：[Excalidraw-Obsidian Slideshow 3.0脚本的详细演练 - YouTube](https://www.youtube.com/watch?v=JwgtCrIVeEU&t=6s)

![[230717 154514.gif]]

## 从 Excalidraw 脚本商店安装脚本

在 Excalidraw 画板中，点击齿轮图标可以进入 Excalidraw 的相关脚本下载页面。在该页面上，您可以找到 Slideshow 脚本，并点击下载或更新，以获取最新版本的脚本。

![[230717 153932.gif]]

## 创建幻灯片

创建幻灯片有两种方式：① 使用箭头；② 使用框架（Frames）

### ① 使用箭头创建幻灯片

通过绘制箭头来指示幻灯片的播放顺序和范围：使用 **右下箭头 ↘** 来标记幻灯片的开始和结束范围。

![[230717 161200.gif]]

### ②通过 Frames 框架来创建幻灯片

![[230717 161709.gif]]

- 幻灯片演示的顺序根据框架的名称大小 (可以是字母或数字) 来排序：
  - eg：`Frame 1` -> `Frame 2` -> `Frame 3` ->......
  - eg：`01` -> `02` -> `03` ->......
  - eg：`A` -> `B` -> `C` ->......

## 演示幻灯片

![[Pasted image 20230717162200.png]]

- 如果你只使用箭头标记形式创建的幻灯片，可以选中箭头的线点击 Slideshow 脚本的图标后就可以开始你的幻灯演示
	- 如果线型被隐藏了，直接点击 Slideshow 脚本的图标就可以开始演示
- 若果你只使用 Frames 框架形式创建的幻灯片，直接点击 Slideshow 脚本的图标就可以开始演示
- 如果你使用了两种混搭的模式，则优先选择选中的箭头形式播放顺序，随后是隐藏箭头，最后才是框架 Frames 演示模式

## 编辑幻灯片

在第一次设计幻灯片的过程中，经常会出现错误或者需要添加其他布局。为了使编辑幻灯片变得更加简单，Slideshow 3.0 版本的 Zsolt Viczian 作者提供了一个工具栏。该工具栏可以让您在播放时进行编辑和修改幻灯片的播放。

![[Pasted image 20230717163709.png]]

![[230717 165118.gif]]

编辑箭头线条的方式除了在放映时编辑之外，也可以在画板中进行编辑：

- `Ctrl`+**鼠标双击线条**进行编辑模式
- 选中线条后，右键弹窗点击 `Edit line` 进入编辑模式
![[230717 164428.gif]]

> [!note] 修改框架 Frames 的幻灯片顺序，直接修改编号即可
> - 幻灯片演示的顺序根据框架的名称大小 (可以是字母或数字) 来排序：
>   - eg：`Frame 1` -> `Frame 2` -> `Frame 3` ->......
>   - eg：`01` -> `02` -> `03` ->......
>   - eg：`A` -> `B` -> `C` ->......

## 详细的操作思维导图

这是 Zsolt Viczian 作者在脚本介绍中插入的思维导图，这里附加上了一些中文翻译：

![[Pasted image 20230717164746.png]]

> [!tip]
> 在 1.9.5 版本的 Excalidraw 里面新增了 Frames 的功能，可以嵌入网页或者 Obsidian 里面笔记，可以让你的画板内容更加丰富。
> 作者相关功能介绍视频：["Obsidian" Canvas on STEROIDS: Excalidraw 1.9.5 release - YouTube](https://www.youtube.com/watch?v=ICpoyMv6KSs)