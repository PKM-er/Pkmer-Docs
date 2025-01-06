---
uid: 20250106103358
title: Obsidian 轻量级 PPT 教程
tags: [演示, PPT]
description: 
author: 曲淡歌
type: other
draft: false
editable: false
modified: 20250106113637
---

# Obsidian 轻量级 PPT 教程

## 前言

不论是学习还是工作，我们总有需要展示内容的时候，一般会用幻灯片 [^1] 来完成。PPT 相较于传统文稿，可以更直观地将信息传递给观众，通过图文结合的方式展现内容，同时利用动画效果引导视线，减轻演讲者的压力。

随着我们在 Obsidian（后文简称 ob）笔记系统中的应用日渐深入，用 ob 制作 PPT 的需求变得自然而然。本文将介绍几种在 ob 中制作 PPT 的常见方式，包括 ob 自带的幻灯片与白板核心插件，以及第三方插件 Slides Extend、Advanced Canvas 和 Excalidraw。

当然，ob 在制作 PPT 领域无法与专业软件相提并论，因此建议大家结合自己的实际需求和 ob 的功能限制，选择最适合的方式进行尝试。

## 核心插件：幻灯片

### 相关资料

- 官方文档：[幻灯片 - Obsidian 中文帮助 - Obsidian Publish](https://publish.obsidian.md/help-zh/%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%B9%BB%E7%81%AF%E7%89%87)

### 使用教程

ob 提供了一个原生的幻灯片核心插件。启用插件后，可以右键任意文件选择 开始演示，或按下快捷键 Ctrl+P 输入命令 幻灯片：开始演示 来激活模式。

在演示模式下，当前文档会以幻灯片形式播放，并以 --- 分隔符将文档内容划分为多页。通过键盘左右箭头可以控制翻页。

### 优点/推荐使用场景

- 完美支持 Ob 的所有语法
- 对已有笔记的改动最小，能快速将笔记转换为演示内容

### 缺点/局限性分析

- 功能简单，缺少动画等高级功能
- 单页内容超出限制时，额外内容会被直接截断，无法滚动查看

## 第三方插件：slides extend[^2]

Slides Extend 插件是 ob 原生幻灯片插件的功能扩展版本，由 Reveal.js 提供支持。

### 相关资料

- 项目开源地址：[ebullient/obsidian-slides-extended](https://github.com/ebullient/obsidian-slides-extended)
- 项目文档：见 GitHub 仓库的 `docs` 目录（ps：吐槽一下 readme 里也不放链接，需要自己找）
- 此插件由 Reveal.js 驱动，因此可以参考 Reveal.js 的文档：[The HTML presentation framework | reveal.js](https://revealjs.com/)

### 使用教程

- 基本的操作逻辑与核心插件幻灯片一致，`---` 作为分页符
- 支持动画，参考文档：[自动动画 | Reveal.js --- Auto-Animate | reveal.js](https://revealjs.com/auto-animate/)
- 支持嵌入 Excalidraw 图形，需开启 Excalidraw 的自动导出功能或通过 Frontmatter 配置

其中为了支持 excalidraw 嵌入，需要让 excalidraw 自动生成对应的图片，并且编辑后自动修改图片，下面设置二选一：

1. 打开【嵌入到 Markdown 文档中的绘图】— 【导出】— 【导出设置】— 【自动导出 SVG 副本】或【自动导出 PNG 副本】
2. 把 excalidraw 文件以 md 视图打开（编辑器右上角三个点或者命令搜索”excalidraw 切换“），手动添加 frontmatter `excalidraw-autoexport:svg` （值也可以设置为 png/both），这种方法只会让被设置的文件自动生成对应图片。

### 优点/推荐使用场景

- 代码编辑与 ob 的笔记系统无缝衔接，可快速将笔记转换为 PPT
- 易于实现自动化流程，例如针对固定格式的笔记（如日记）自动生成 PPT
- 内置 web 服务器，可用浏览器播放 PPT

### 缺点/局限性分析

- 缺少可视化界面，学习成本较高
- 编辑过程中容易因代码错误导致演示失效

## 核心插件：白板 + 第三方插件 advanced canvas

ob 自带的白板插件虽无演示功能，但可通过 Advanced Canvas 插件实现扩展。这种方法尤其适合以白板形式记录笔记的场景，如头脑风暴或碎片知识整理，能帮助理清分散的思路

### 相关资料

- 白板的官方文档：[白板 - Obsidian 中文帮助 - Obsidian Publish](https://publish.obsidian.md/help-zh/%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E7%99%BD%E6%9D%BF)
- advanced canvas 项目开源地址：[Developer-Mike/obsidian-advanced-canvas](https://github.com/Developer-Mike/obsidian-advanced-canvas)

### 使用教程

安装好 advanced canvas 插件，无需任何配置，在 ob 里新建一个白板文件，然后在正下方能看到在原有白板的基础上多出来两个按钮，点击或拖拽 `Drag to add slide` 按钮即可新增 PPT 分页区域。

每一个区域就是一页 PPT，第一次创建的 PPT 分页就是整个 PPT 的封面，右上角有一个 `start` 标识。

![[Pasted image 20250101134306.png]]

在创建了 PPT 分页后，按 `ctrl`+`p` 输入命令 `Advanced Canvas:Start presentation` 即可开始 PPT 展示。

这种方式制作的 PPT 的展示顺序由 PPT 分页的箭头控制，如果只是添加了多个分页，但是没有使用箭头将 PPT 分页连接起来，播放时则只展示 start 分页。

可以通过箭头实现 PPT 的复杂跳转逻辑，比如 1-->2-->3-->2-->4-->5，但需要注意，start 分页只能连接一个后续节点，如果连接多个，则只有第一个连接的分页会被识别。

### 优点/推荐使用场景

- 充分利用 ob 原生白板功能，可直接嵌入笔记内容
- 制作过程中白板的布局即完成了排版，减少了 PPT 制作的额外工作量
- 通过箭头控制分页跳转逻辑，轻松实现复杂的 PPT 演示路径

### 缺点/局限性分析

- 如果原笔记以文字为主，需手动将内容转换为白板形式，工作量较大
- 动画效果有限，仅支持页面切换

## 第三方插件：excalidraw

### 相关资料

- 项目开源地址：[zsviczian/obsidian-excalidraw-plugin: A plugin to edit and view Excalidraw drawings in Obsidian](https://github.com/zsviczian/obsidian-excalidraw-plugin)
- 项目文档：[欢迎 - Excalidraw --- Welcome - Excalidraw](https://excalidraw-obsidian.online/Welcome) （建设中）
- （强烈推荐）[PKMer_Excalidraw 脚本：Slideshow 完美实现画板幻灯片演示的脚本](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/excalidraw/excalidraw%E8%84%9A%E6%9C%AC-slideshow%E5%AE%8C%E7%BE%8E%E5%AE%9E%E7%8E%B0%E7%94%BB%E6%9D%BF%E5%B9%BB%E7%81%AF%E7%89%87%E6%BC%94%E7%A4%BA%E7%9A%84%E8%84%9A%E6%9C%AC/)

### 使用教程

具体教程见 pkmer 文章：[PKMer_Excalidraw 脚本：Slideshow 完美实现画板幻灯片演示的脚本](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/excalidraw/excalidraw%E8%84%9A%E6%9C%AC-slideshow%E5%AE%8C%E7%BE%8E%E5%AE%9E%E7%8E%B0%E7%94%BB%E6%9D%BF%E5%B9%BB%E7%81%AF%E7%89%87%E6%BC%94%E7%A4%BA%E7%9A%84%E8%84%9A%E6%9C%AC/)

需要先在 excalidraw 的脚本库中安装 `slideshow` 脚本，然后可以通过箭头和 frames 的编号来控制幻灯片顺序。

### 优点/推荐使用场景

- excalidraw 有着 ob 里最强的画图能力，用它来做 PPT，内容丰富的上限极高
- frame 编号和箭头这两种方式来控制 PPT 的镜头运动，兼顾了简单出图与复杂运动轨迹的需求

### 缺点/局限性分析

- excalidraw 相对重量级，对设备性能要求更高
- 同白板一样，都需要根据文字内容再创作，不能直接转换

## 后话

为什么坚持用 ob 做 PPT？最初是因为工作电脑性能较低，且由于网络限制，难以使用现代化工具。相比老旧的 Office，ob 简洁的风格反而更适合理工科的表达需求。此外，我日常习惯用 ob 写工作笔记，用它制作 PPT 显得顺理成章。

当然，用 ob 制作 PPT 需要量力而行，明确目标。如果只是单纯追求好看效果，专业软件仍然是不二之选。若只是为了“玩”或者“炫技”，这套方法也有相当高的上限，世界也需要更多“无意义”的探索。

---

[^1]: 严格意义上“PPT”指代的是微软公司的 PowerPoint 软件，而“幻灯片”才是这种方式的名称，但是由于 PowerPoint 其广泛使用，所以人们把“幻灯片”与“PPT”划上了等号。因为本文中会频繁出现 obsidian 软件自带的幻灯片插件，为了避免混淆二者，因此本文以“PPT” 指代严格意义上的“幻灯片”，而用“幻灯片”指代 obsidian 中的幻灯片插件。
[^2]: 这个项目继承自 `advanced slides` 插件，原插件作者表示在盈利路径上和 ob 官方有矛盾，做插件赚不到钱，导致他决定停止发布插件的后续更新。