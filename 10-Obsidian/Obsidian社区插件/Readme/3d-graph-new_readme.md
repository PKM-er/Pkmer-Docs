---
uid: 2023120719214750
title: Obsidian 插件：【Readme】3D Graph New
tags: ['obsidian插件', 'readme']
description: 一个用于黑曜石的3D图表
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】3D Graph New

> [!Note] 插件名片
> - 插件名称：3D Graph New
> - 插件作者：Hananoshika Yomaru (original by Alexander Weichart)
> - 插件说明：一个用于黑曜石的 3D 图表
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/HananoshikaYomaru/obsidian-3d-graph)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?3d-graph-new)

## 概述

一个用于黑曜石的 3D 图表

![3D Graph New](https://cdn.pkmer.cn/covers/3d-graph-new.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HananoshikaYomaru/obsidian-3d-graph/master/README.md)
>

---

## Readme(翻译）

下面是 [[3d-graph-new]] 插件的自述翻译

Obsidian 3D Graph（Yomaru）

![Obsidian 3D graph](https://cdn.pkmer.cn/covers/3d-graph-new_1_0.jpeg!pkmer)

一个带有许多功能的 Obsidian 3D 图表！

查看演示：<https://www.youtube.com/watch?v=w1H-pcM8nOU>

 [![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/hananoshikayomaru)

安装

通过社区插件商店，您可以在社区插件商店上安装此插件 😎

### 通过 BRAT

1. 安装 BRAT 插件
2. 进入插件选项，添加 beta 插件，复制并粘贴此存储库的链接。
3. 插件将自动出现在已安装的社区插件列表中，启用此插件。

### 手动安装

1. 切换到 `.obsidian/plugins` 目录
2. 克隆该仓库
3. 运行 `cd obsidian-3d-graph && bun install && bun run build`
4. 完成！🎉

## 特点

### 全局图

使用功能区按钮或命令打开全局图。

您可以在图中进行缩放（滚动鼠标滚轮）、旋转（拖动场景）和平移（按住 `ctrl`/`cmd` 并拖动场景）操作。

> ⚠️ 底层的 [3D图形](https://github.com/vasturiano/3d-force-graph) 存在性能问题，我不知道如何修复。您可以在插件设置中设置最大节点数限制。如果图中的总节点数超过限制，为了保护您的计算机免于崩溃，图形将不会被渲染。

### 本地图

在一个笔记中，你可以运行命令“打开本地 3D 图”来打开一个本地图。本地图只会显示与该节点连接的节点。

在本地图中，你将拥有全局图的所有功能，以及：

1. 深度：你可以控制离中心节点的最大距离的深度。
2. 链接类型：只显示入链、出链或两者都显示。

> ✨ 提示：我将“cmd + L”设置为打开本地 3D 图的快捷键。

### 在全局图上过滤节点

1. 按查询条件过滤
2. 过滤附件
   1. 附件的定义：任何非 Markdown 文件
3. 过滤孤立节点
   1. 孤立节点的定义：在当前图中没有链接的任何节点
您可以使用查询在全局图上创建组并为节点着色。
当您靠近节点时，标签将出现。当您远离节点时，节点将逐渐消失。

### 更改显示设置

您可以更改以下内容：

1. 节点大小
   1. 节点大小也会随连接的程度而缩放。节点的连接越多，它就越大。
2. 连接线粗细
3. 连接线距离
4. 节点排斥力
5. 距离焦点的距离。这将影响标签的淡入淡出效果。当距离焦点的距离较小时，离您所查看的内容较远的节点的标签将具有较低的不透明度。
6. 节点悬停颜色、节点悬停邻居颜色、连接线悬停颜色
7. 显示文件扩展名，在标签上显示完整路径
8. 显示中心坐标
9. 显示连接线箭头
10. 拖动时不移动节点
11. [有向无环图（DAG）](https://en.wikipedia.org/wiki/Directed_acyclic_graph) 模式。更多信息请参见 [DAG模式](https://github.com/HananoshikaYomaru/obsidian-3d-graph#dag-mode)。
聚焦节点

按住 `Ctrl`/`cmd` 并单击一个节点将会飞到并聚焦在该节点上。这是在大型图表上导航的完美方式。

您可以在图中搜索并聚焦于一个节点

按住 `shift` 键并单击节点以选择多个节点。然后右键单击所选节点中的一个以打开命令。您可以在所选节点上运行批处理命令。

### DAG 模式

您可以在图表上看到有向无环图（DAG）的方向。这仅在图表是无环的情况下才有效。

### 保存设置

您可以保存、更新和恢复以前的设置。

### 其他自定义

您可以通过 CSS 代码片段来更改图形视图的样式。

1. 打开设置 > 外观
2. 创建一个 CSS 代码片段
3. 添加以下内容

```css
body {
  /* 更改默认节点颜色 */
  --graph-node: #00ff00;
  /* 更改默认链接颜色 */
  --graph-line: #ff0000;
}

.graph-3d-view canvas {
  /* 更改背景颜色 */
  background: white;
}

.graph-3d-view .node-label {
  /* 更改默认节点标签颜色 */
  color: #00ff00;
}
```

![](https://cdn.pkmer.cn/covers/3d-graph-new_1_2.jpeg!pkmer)

### 功能路线图

1. 使用 dataview 作为搜索引擎。
2. 开放 API，使其他插件更容易集成。

一些其他不确定的功能将在 GitHub 问题中进行讨论，但我会根据 ICE（影响、信心、工作量）来处理它们。

## 开发

1. 切换到 `.obsidian/plugins` 目录
2. 克隆这个仓库
3. 运行 `cd obsidian-3d-graph && bun install && bun run dev`
4. 完成 🎉

发布时，只需运行 `bun release` 来发布补丁。你也可以添加 `--minor` 或 `--major` 来更改更新版本。

## 注意事项

1. 我一直免费开发这个项目。我尽量优先考虑功能而不是花哨的东西。我也根据 ICE（影响力、信心、努力）来优先处理任务。
2. 我还有其他正在进行的项目。我需要开源的帮手。赞助将给我动力，代码贡献者也非常受欢迎。我愿意通过<<https://cal.com/manlung> 进行讨论。>
3. 如果您有任何问题或功能请求，请在 Github 上提出问题。
如果您喜欢这个插件，请通过在 Github 上赞助我或在<<https://www.buymeacoffee.com/yomaru> 上给我买杯咖啡来支持我的工作和热情。>

 [![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/hananoshikayomaru)

## 致谢

只是想感谢那些人。没有他们，这个仓库就不会存在。

1. 原始仓库：<https://github.com/AlexW00/obsidian-3d-graph>
2. 3D 力导向图由@vasturiano 提供：<https://github.com/vasturiano/3d-force-graph>



