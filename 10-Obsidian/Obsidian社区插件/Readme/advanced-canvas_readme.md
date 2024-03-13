---
uid: 2024031219293892
title: Obsidian 插件：【Readme】Advanced Canvas
tags: ['obsidian插件', 'readme']
description: Supercharge your canvas experience. Create presentations, flowcharts and more.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Advanced Canvas

> [!Note] 插件名片
> - 插件名称：Advanced Canvas
> - 插件作者：Developer-Mike
> - 插件说明：Supercharge your canvas experience. Create presentations, flowcharts and more.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Developer-Mike/obsidian-advanced-canvas)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?advanced-canvas)

## 概述

Supercharge your canvas experience. Create presentations, flowcharts and more.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/main/README.md)

---

## Readme(翻译）

下面是 [[advanced-canvas]] 插件的自述翻译

<h3 align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="./assets/logo-dark.svg">
        <img alt="Logo" src="./assets/logo-light.svg" width="100">
    </picture><br/><br/>
	Advanced Canvas for
</h3>

<p align="center">



    <br/>
	
    
    <br/><br/>
    <b>⚡ Supercharge</b> your canvas experience! Create presentations, flowcharts and more!
</p>

## 安装（等待社区插件列表的批准）

- 使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 进行安装

或者

- 在您的保险库插件文件夹中创建一个名为 `advanced-canvas` 的文件夹（`<vault>/.obsidian/plugins/`）。
- 从最新版本中下载 `main.js`、`styles.css` 和 `manifest.json`，并将它们放入 `advanced-canvas` 文件夹中。
- 在设置 -> 社区插件 -> 已安装插件中启用插件

## 特点

所有特点都可以在设置中启用/禁用。

- 独立于节点创建群组（[更新的卡片菜单](#updated-canvas-card-menu)）
- 更多 [画布命令](#canvas-commands)
- （流程图）[节点形状](#node-shapes)
  - 终端形状
  - 过程形状
  - 决策形状
  - 输入/输出形状
  - 页面内参考形状
  - 预定义过程形状
  - 文档形状
  - 数据库形状
- [边缘样式](#edge-styles)
  - 虚线
  - 短划线
  - 长划线
- [贴纸](#stickers)
  - 将图像节点转换为贴纸（透明背景且无边框）
- [演示模式](#presentation)
  - 通过连接节点创建演示文稿
- [门户](#portals)
  - 在您的画布内嵌入其他画布
  - 创建到嵌入画布的边缘（箭头）
- [更好的只读模式](#better-readonly)
  - 禁用节点弹出菜单
  - 锁定画布位置
  - 锁定画布缩放
- [封装选择](#encapsulate-selection)
  - 从选定的节点创建新画布
  - 在当前画布中创建到新画布的链接
- 公开 [画布事件](#canvas-events) 以在其他插件中使用
- 公开节点数据以使用 CSS 样式化它们

## 更新后的用户界面

### 画布卡片菜单

<details>
    <summary>画布卡片菜单</summary>
    <img src="./assets/card-menu.png" alt="新画布卡片菜单"/>
</details>

### 节点弹出菜单

<details>
    <summary>节点弹出菜单</summary>
    <img src="./assets/popup-menu.png" alt="New node popup menu"/>
</details>

### 画布控制菜单

<details>
    <summary>画布控制菜单</summary>
    <img src="./assets/control-menu.png" alt="新画布控制菜单"/>
</details>

## 画布命令

- `高级画布：创建文本节点`
  - 创建一个新的文本节点
- `高级画布：缩放到选择区域`
  - 缩放到所选节点的边界框
- `高级画布：向上/向下/向左/向右克隆节点`
  - 沿着箭头键的方向克隆所选节点
  - 克隆的节点将具有与原始节点相同的尺寸和颜色
- `高级画布：向上/向下/向左/向右扩展节点`
  - 沿着箭头键的方向扩展所选节点

## 节点形状

<details>
    <summary>流程图示例</summary>
    <img src="./assets/sample-flowchart.png" alt="流程图示例"/>
</details>

### 用法

- 使用 [更新后的弹出菜单](#node-popup-menu) 设置节点的形状

### 形状

<details>
    <summary>终端形状</summary>
    <img src="./assets/flowchart-nodes/terminal.png" alt="终端形状"/>
</details>

<details>
    <summary>处理/中心形状</summary>
    <img src="./assets/flowchart-nodes/process.png" alt="处理/中心形状"/>
</details>

<details>
    <summary>决策形状</summary>
    <img src="./assets/flowchart-nodes/decision.png" alt="决策形状"/>
</details>

<details>
    <summary>输入/输出形状</summary>
    <img src="./assets/flowchart-nodes/input-output.png" alt="输入/输出形状"/>
</details>

<details>
    <summary>页面内引用形状</summary>
    <img src="./assets/flowchart-nodes/reference.png" alt="页面内引用形状"/>
</details>

<details>
    <summary>预定义流程形状</summary>
    <img src="./assets/flowchart-nodes/predefined-process.png" alt="预定义流程形状"/>
</details>

<details>
    <summary>文档形状</summary>
    <img src="./assets/flowchart-nodes/document.png" alt="文档形状"/>
</details>

<details>
    <summary>数据库形状</summary>
    <img src="./assets/flowchart-nodes/database.png" alt="数据库形状"/>
</details>

## 边缘样式

将边缘（箭头）的样式设置为点状、短虚线或长虚线。

<details>
    <summary>边缘样式示例</summary>
    <img src="./assets/edge-styles.png" alt="边缘样式示例"/>
</details>

## 贴纸

将图像节点转换为贴纸。贴纸具有透明背景和无边框。

<details>
    <summary>贴纸示例</summary>
    <img src="./assets/stickers.png" alt="贴纸示例"/>
</details>

## 演示模式

在演示模式下，您可以使用箭头键浏览节点。不同的幻灯片/节点之间使用箭头连接。如果您希望从同一节点指向多个箭头，可以按照您希望浏览它们的顺序对它们进行编号。在演示模式下，画布处于只读模式（因此 [better readonly](#better-readonly) 也会影响演示模式！）。您可以使用 `ESC` 键退出演示模式。

<img src="./assets/sample-presentation-simple.gif" alt="演示模式示例"/>

<details>
    <summary>画布文件</summary>
    <img src="./assets/sample-presentation-simple.png" alt="演示画布文件"/>
</details>

### 更复杂的示例

<img src="./assets/sample-presentation-complex.gif" alt="复杂演示模式示例"/>

<details>
    <summary>画布文件</summary>
    <img src="./assets/sample-presentation-complex.png" alt="复杂演示画布文件"/>
</details>

### 用法

- 创建第一张幻灯片
  - 使用 [更新的弹出菜单](#node-popup-menu) 创建演示文稿的第一张幻灯片
  - 或者创建一个节点，并使用 [更新的卡片菜单](#canvas-card-menu) 标记为第一张幻灯片
- 添加更多幻灯片
  - 使用箭头链接幻灯片
    - 如果您想要回到以前的幻灯片，您可以按照您想要浏览它们的顺序编号箭头
  - <b>提示:</b> 使用 [更新的卡片菜单](#canvas-card-menu) 创建具有一致尺寸的幻灯片
- 控制演示文稿
  - 使用命令面板开始演示文稿（`高级画布：开始演示文稿`）
  - 使用箭头键更改幻灯片
  - 使用 `ESC` 键退出演示文稿

## 门户

在您的画布内嵌入其他画布，并创建到嵌入画布的边缘（箭头）。

<img src="./assets/sample-portal-usage.png" alt="Portal example"/>

### 用法

- 嵌入一个画布文件，然后点击弹出菜单中的门图标以打开一个门户。

## 更好的只读

- 禁用节点弹出菜单
- 锁定画布位置
- 锁定画布缩放
- 但为了保留一些交互性，它允许缩放到一个边界框（例如，缩放到选择，缩放以适应所有）

### 用法

- 使用 [更新的控制菜单](#canvas-control-menu) 来切换新功能（仅在画布处于只读模式时显示）

## 封装选择

将当前选择移动到新画布中，并在当前画布中创建一个链接。

### 用法

- 选择您想要封装的节点
- 使用上下文菜单（右键单击）来封装选择内容
- 或者使用命令面板（`高级画布：封装选择`）

## 画布事件

所有自定义事件都以 `advanced-canvas:` 为前缀，并且可以使用 `app.workspace.on` 进行监听（就像默认事件一样）。

<details>
    <summary>
        所有事件（23）
    </summary>

  - `advanced-canvas:canvas-changed`
    - 当新画布加载时触发
    - 负载：`Canvas`
  - `advanced-canvas:viewport-changed:before` 和 `advanced-canvas:viewport-changed:after`
    - 在视口改变之前和之后触发
    - 负载：`Canvas`
  - `advanced-canvas:node-moved`
    - 当节点移动时触发
    - 负载：`Canvas`, `Node`
  - `advanced-canvas:dragging-state-changed`
    - 当画布的拖动状态改变时触发
    - 负载：`Canvas`, `boolean`
  - `advanced-canvas:node-added`
    - 当新节点添加时触发
    - 负载：`Canvas`, `Node`
  - `advanced-canvas:edge-added`
    - 当新边添加时触发
    - 负载：`Canvas`, `Edge`
  - `advanced-canvas:node-removed`
    - 当节点移除时触发
    - 负载：`Canvas`, `Node`
  - `advanced-canvas:edge-removed`
    - 当边移除时触发
    - 负载：`Canvas`, `Edge`
  - `advanced-canvas:nodes-changed`
    - 当任何节点改变时触发
    - 负载：`Canvas`, `Node[]`
  - `advanced-canvas:edge-changed`
    - 当任何边改变时触发
    - 负载：`Canvas`, `Edge`
  - `advanced-canvas:selection-changed`
    - 当画布的选择改变时触发
    - 负载：`Canvas`, `updateSelection: (() => void) => void`
  - `advanced-canvas:zoom-to-bbox:before` 和 `advanced-canvas:zoom-to-bbox:after`
    - 在画布缩放到边界框之前和之后触发（例如缩放到选择区域，缩放以适应所有）
    - 负载：`Canvas`, `BBox`
  - `advanced-canvas:popup-menu-created`
    - 当节点弹出菜单创建时触发（如果在相同类型的节点之间移动，不会多次触发）
    - 负载：`Canvas`, `Node`
  - `advanced-canvas:node-interaction`
    - 当节点悬停时触发
    - 负载：`Canvas`, `Node`
  - `advanced-canvas:undo`
    - 当执行撤销操作时触发
    - 负载：`Canvas`
  - `advanced-canvas:redo`
    - 当执行重做操作时触发
    - 负载：`Canvas`
  - `advanced-canvas:readonly-changed`
    - 当画布的只读状态改变时触发
    - 负载：`Canvas`, `boolean`
  - `advanced-canvas:data-requested`
    - 当请求画布数据时触发
    - 负载：`Canvas`, `CanvasData（引用！）`
  - `advanced-canvas:load-data`
    - 当设置画布数据时触发
    - 负载：`Canvas`, `CanvasData（引用！）`, `setData: (CanvasData) => void`
  - `advanced-canvas:canvas-saved:before` 和 `advanced-canvas:canvas-saved:after`
    - 在画布保存之前和之后触发
    - 负载：`Canvas`
</details>

## 设置

每个功能都可以在设置中启用/禁用。所有功能都被设计为尽可能可定制。

## 贡献

欢迎所有贡献！以下是您可以帮助的方式：

- 创建存储库的分支
- 使用描述性名称创建一个分支
- 进行更改
- 使用 `npm run dev` 调试插件
- 创建一个拉取请求
- 等待审核

## 已知问题 - 如果发现任何问题，请创建一个问题

- [ ] 在预览中未显示形状



