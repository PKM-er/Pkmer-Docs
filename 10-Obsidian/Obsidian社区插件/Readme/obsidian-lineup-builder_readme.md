---
uid: 2023080322212328
title: Obsidian 插件：【Readme】Lineup Builder
tags: ['obsidian插件', 'readme']
description: 在Obsidian中构建足球阵容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Lineup Builder

> [!Note] 插件名片
> - 插件名称：Lineup Builder
> - 插件作者：James Fallon
> - 插件说明：在 Obsidian 中构建足球阵容。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/James-Fallon/obsidian-lineup-builder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-lineup-builder)

## 概述

在 Obsidian 中构建足球阵容。

![Lineup Builder](https://cdn.pkmer.cn/covers/obsidian-lineup-builder.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/James-Fallon/obsidian-lineup-builder/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-lineup-builder]] 插件的自述翻译

# Obsidian 阵容构建插件

该插件允许您通过指定阵型和球员列表在 Obsidian 中构建足球阵容。

阵容在代码块中定义，并在预览模式下可见。

## 使用插件

要创建一个阵容，您需要使用以下选项定义一个 `lineup` 代码块：

### 阵型

`formation` 选项是当前可用的阵型之一：

- 433
- 4231
- 442
- 442-diamond
- 523
- 532
- 541
- 352
- 343

球员

`players` 选项定义了首发 11 人，从下到上，从左到右排序。

例如，对于 433 阵型：Mendy,Chilwell,Silva,Rudiger,James,Mount,Jorginho,Kante,Werner,Lukaku,Havertz

### 示例

````
```lineup
阵型：4231
球员：Kepa，Chilwell，Silva，Rudi，Azpi，Kante，Kovacic，CHO，Mount，Havertz，Lukaku
```
````

![示例](media/example_screenshot.png)

### SVG 图像

所使用的图像是从维基共享资源（Wikimedia Commons）的 SVG 文件生成的，通过移动位置来创建新的阵型，并用自定义球员名称替换位置名称。

© [433](https://en.wikipedia.org/wiki/File:Association_football_4-3-3_formation.svg) / 维基共享资源用户：Threner / [CC-BY-SA-3.0](https://creativecommons.org/licenses/by-sa/3.0/)

© [4231](https://en.wikipedia.org/wiki/File:Association_football_4-2-3-1_formation.svg) / 维基共享资源用户：Threner / [CC-BY-SA-3.0](https://creativecommons.org/licenses/by-sa/3.0/)

© [442](https://en.wikipedia.org/wiki/File:Association_football_4-4-2_formation.svg) / 维基共享资源用户：MaxDZ8 / [CC-BY-SA-3.0](https://creativecommons.org/licenses/by-sa/3.0/)

© [442-diamond](https://en.wikipedia.org/wiki/File:Association_football_4-4-2_diamond_formation.svg) / 维基共享资源用户：Threner / [CC-BY-SA-3.0](https://creativecommons.org/licenses/by-sa/3.0/)

### 特别感谢

在没有使用 [THeK3nger的国际象棋插件](https://github.com/THeK3nger/obsidian-chessboard) 作为参考的情况下，这将不可能实现。

## 待办事项

- [x] 添加 5ATB 阵型
- [x] 清理 SVG 代码以重用重复元素
- [x] 添加维基媒体的信用线
- [x] 提交 PR 以将其添加到社区插件列表中
- [ ] 研究不同的输入方法来列出球员
- [ ] 自定义球队颜色
- [ ] 自定义球场



