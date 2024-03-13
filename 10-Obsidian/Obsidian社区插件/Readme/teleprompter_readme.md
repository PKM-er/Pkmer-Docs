---
uid: 2023120522272018
title: Obsidian 插件：【Readme】Teleprompter
tags: ['obsidian插件', 'readme']
description: 实时演示和视频制作的电子白板窗口。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Teleprompter

> [!Note] 插件名片
> - 插件名称：Teleprompter
> - 插件作者：Lumetrium
> - 插件说明：实时演示和视频制作的电子白板窗口。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lumetrium/obsidian-teleprompter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?teleprompter)

## 概述

实时演示和视频制作的电子白板窗口。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lumetrium/obsidian-teleprompter/master/README.md)

---

## Readme(翻译）

下面是 [[teleprompter]] 插件的自述翻译

<h1 align="center">Obsidian Teleprompter</h1>

<div align="center">

[![](https://img.shields.io/github/v/release/lumetrium/obsidian-teleprompter?style=for-the-badge)](https://github.com/lumetrium/obsidian-teleprompter/releases/latest) ![](https://img.shields.io/github/downloads/lumetrium/obsidian-teleprompter/total?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/lumetrium/obsidian-teleprompter?style=for-the-badge)

</div>
<br/>
<p align="center">
  <img src="./assets/logos/teleprompter.png" height="140"/>
</p>

<p align="center">
一个Obsidian插件，旨在无缝集成<br/>
电子提示器功能到您的笔记工作流中。
</p>
关于插件

在 Obsidian 中打开 Teleprompter 窗口并聚焦您想要阅读的笔记。Teleprompter 窗口将以大字体、易于阅读的格式显示笔记的内容。当您阅读时，它会自动滚动，使您能够保持稳定的阅读速度。

<p align="center">
  <img src="./assets/screenshots/devices.png"/>
</p>

# 📖 目录

- [📃 关于插件](#about-the-plugin)
- [📸 截图](#screenshots)
- [🌟 特点](#features)
  - [🕹️ 控制](#controls)
    - [播放](#play)
    - [固定笔记](#pin-note)
    - [速度](#speed)
    - [字体大小](#font-size)
    - [行高](#line-height)
    - [字间距](#letter-spacing)
    - [字体样式](#font-family)
    - [内边距](#padding)
    - [水平翻转](#flip-horizontally)
    - [垂直翻转](#flip-vertically)
    - [文字颜色](#text-color)
    - [背景颜色](#background-color)
    - [视图模式](#view-mode)
    - [保持唤醒](#keep-awake)
    - [分离窗口](#detach-window)
    - [不透明度](#opacity)
    - [打开设置](#open-settings)
    - [全屏](#full-screen)
  - [🔳 面板](#panels)
    - [控制面板](#control-panel)
    - [页面缩略图](#page-minimap)
  - [⌨️ 快捷键](#hotkeys)
    - [控制快捷键](#controls-hotkeys)
    - [内容快捷键](#content-hotkeys)
    - [附加快捷键](#additional-hotkeys)
- [📦 安装](#installation)
  - [社区插件目录](#community-plugins-catalog)
  - [手动安装](#manual-installation)
- [📢 披露](#disclosures)
- [💡 推荐](#recommendations)

请注意，“特点”下的某些部分包含有关详细信息和演示的可折叠内容。您可以通过点击其描述来展开它们。

# 截图

<p>

侧边栏中的单独选项卡中的电子白板：

<img src="./assets/screenshots/tab.png" />

单独窗口中的电子白板：

<img src="./assets/screenshots/window.png"/>

设置：面板选项卡：

<img src="./assets/screenshots/settings-panels.png"/>

</p>

<details>
  <summary><b>更多截图</b></summary>

设置：控制选项卡

<img src="./assets/screenshots/settings-controls.png"/>

设置：控制选项卡中的扩展字体大小控制

<img src="./assets/screenshots/settings-controls-expanded.png"/>

设置：面板选项卡中扩展的控制面板，白色主题（如果你喜欢）

<img src="./assets/screenshots/settings-panels-expanded-white.png"/>

快捷键

<img src="./assets/screenshots/hotkeys.png"/>

</details>

展开下面的部分以查看更多截图。点击您感兴趣的功能描述以查看其详细信息和视觉演示。

# 特性

有一个特性想法，你相信它将把这个项目提升到一个新的水平？不要自己留着，通过在 [这里](https://github.com/lumetrium/obsidian-teleprompter/issues/new) 创建一个新的问题与社区分享。这将是讨论和记录你的特性建议的地方。

控件

控件是可以放置在控制面板上的交互元素。它们提供了广泛的自定义选项，使您能够根据自己的特定偏好来调整其功能。每个控件都提供一组命令，可以方便地分配给热键。

### 播放

<details>
  <summary>切换自动滚动</summary>

- 当<b style="color: green">启用</b>时，电子提词器将以设定的速度自动滚动。
- 当<b style="color: red">禁用</b>时，电子提词器将停止滚动并等待您手动滚动。

---

命令：

- 切换（ID：control:play:toggle）
- 打开（ID：control:play:true）
- 关闭（ID：control:play:false）

---

设置：

- 标签：显示名称（默认值：“播放”）
- 状态： <b style="color: green">启用</b> / <b style="color: red">禁用</b>（默认值：<b style="color: red">禁用</b>）
- 激活标签：启用时显示的标签（默认值：“正在播放”）
- 非激活标签：禁用时显示的标签（默认值：“已暂停”）

---

演示：

<img src="./assets/screenshots/features/play.gif" />

</details>

### 固定笔记

<details>
  <summary>切换焦点到其他笔记时保留内容</summary>

- 当<b style="color: green">启用</b>时，当您切换焦点到其他笔记时，提示器的内容将保持不变。
- 当<b style="color: red">禁用</b>时，当您切换焦点到其他笔记时，提示器的内容将更改为您当前关注的笔记的内容。

---

命令：

- 切换（ID：control:pin-note:toggle）
- 启用（ID：control:pin-note:true）
- 禁用（ID：control:pin-note:false）

---

设置：

- 标签：显示名称（默认值：“固定笔记”）
- 状态：<b style="color: green">启用</b> / <b style="color: red">禁用</b>（默认值：<b style="color: red">禁用</b>）
- 激活标签：启用时显示的标签（默认值：“已固定”）
- 非激活标签：禁用时显示的标签（默认值：“未固定”）

---

演示：

<img src="./assets/screenshots/features/pin-note.gif" />

</details>

### 速度

<details>
  <summary>设置电子提示器滚动的速度</summary>

---

命令：

- 增加 X 步（ID：control:speed:up）
- 减少 X 步（ID：control:speed:down）
- 重置（ID：control:speed:reset）

**步长可以在设置中配置*

---

设置：

- 标签：显示名称（默认值："Speed"）
- 值：当前速度（默认值：18）
- 重置值：重置时将应用的速度（默认值：18）
- 最小值：最低可能速度（默认值：0）
- 最大值：最高可能速度（默认值：50）
- 步长：每次增加或减少的值（默认值：1）

---

演示：

<img src="./assets/screenshots/features/speed.gif" />

</details>

### 字体大小

<details>
  <summary>设置文本的大小</summary>

---

命令：

- 增加 X 步骤（ID：control:font-size:up）
- 减小 X 步骤（ID：control:font-size:down）
- 重置（ID：control:font-size:reset）

**步骤可以在设置中配置*

---

设置：

- 标签：显示名称（默认值：“字体大小”）
- 值：当前字体大小（默认值：60）
- 重置值：重置时将应用的字体大小（默认值：60）
- 最小值：最小可能的字体大小（默认值：1）
- 最大值：最大可能的字体大小（默认值：200）
- 步骤：每次增加或减少的值（默认值：1）

---

演示：

<img src="./assets/screenshots/features/font-size.gif" />

</details>

### 行高

<details>
  <summary>设置行之间的间距</summary>

---

命令：

- 增加 X 步长（ID：control:line-height:up）
- 减小 X 步长（ID：control:line-height:down）
- 重置（ID：control:line-height:reset）

**步长可以在设置中配置*

---

设置：

- 标签：显示名称（默认值：" 行高 "）
- 值：当前行高（默认值：1.2）
- 重置值：重置时将应用的行高（默认值：1.2）
- 最小值：最小可能行高（默认值：0.7）
- 最大值：最大可能行高（默认值：5）
- 步长：每次值增加或减少的量（默认值：0.1）

---

演示：

<img src="./assets/screenshots/features/line-height.gif" />

</details>

### 字间距

<details>
  <summary>设置字母之间的间距</summary>

---

命令：

- 增加 X 步骤（ID：control:letter-spacing:up）
- 减小 X 步骤（ID：control:letter-spacing:down）
- 重置（ID：control:letter-spacing:reset）

**步骤可以在设置中配置*

---

设置：

- 标签：显示名称（默认值：“字间距”）
- 值：当前字间距（默认值：0，表示正常）
- 重置值：重置时将应用的字间距（默认值：0）
- 最小值：最小字间距（默认值：-5）
- 最大值：最大可能的字间距（默认值：10）
- 步骤：每次值增加或减少的量（默认值：0.05）

---

演示：

<img src="./assets/screenshots/features/letter-spacing.gif" />

</details>

### 字体系列

<details>
  <summary>设置用于文本的字体</summary>

---

命令：

- 重置（ID：control:font-family:reset）

---

设置：

- 标签：显示名称（默认值：“字体系列”）
- 值：当前字体系列（默认值：“默认”）
- 重置值：重置时将应用的字体系列（默认值：“默认”）

---

选项：

- 默认
- Arial
- Courier New *(等宽字体)*
- Georgia
- Helvetica
- Times New Roman
- Trebuchet MS
- Tahoma
- Roboto
- Verdana

---

演示：

<img src="./assets/screenshots/features/font-family.gif" />

</details>

### 填充

<details>
  <summary>设置文本与窗口边缘之间的间距</summary>

---

命令：

- 顶部 - 增加 X 步长（ID：control:padding:0:up）
- 顶部 - 减少 X 步长（ID：control:padding:0:down）
- 顶部 - 重置（ID：control:padding:0:reset）
- 右侧 - 增加 X 步长（ID：control:padding:1:up）
- 右侧 - 减少 X 步长（ID：control:padding:1:down）
- 右侧 - 重置（ID：control:padding:1:reset）
- 底部 - 增加 X 步长（ID：control:padding:2:up）
- 底部 - 减少 X 步长（ID：control:padding:2:down）
- 底部 - 重置（ID：control:padding:2:reset）
- 左侧 - 增加 X 步长（ID：control:padding:3:up）
- 左侧 - 减少 X 步长（ID：control:padding:3:down）
- 左侧 - 重置（ID：control:padding:3:reset）

**步长可以在设置中配置*

---

设置：

- 顶部
  - 标签：显示名称（默认值：“顶部”）
  - 值：当前顶部填充（默认值：50%）
  - 重置值：重置时将应用的顶部填充（默认值：50%）
  - 最小值：最小可能的顶部填充（默认值：0%）
  - 最大值：最大可能的顶部填充（默认值：100%）
  - 步长：每次值增加或减少的量（默认值：1%）
- 右侧
  - 标签：显示名称（默认值：“右侧”）
  - 值：当前右侧填充（默认值：5%）
  - 重置值：重置时将应用的右侧填充（默认值：5%）
  - 最小值：最小可能的右侧填充（默认值：0%）
  - 最大值：最大可能的右侧填充（默认值：100%）
  - 步长：每次值增加或减少的量（默认值：1%）
- 底部
  - 标签：显示名称（默认值：“底部”）
  - 值：当前底部填充（默认值：50%）
  - 重置值：重置时将应用的底部填充（默认值：50%）
  - 最小值：最小可能的底部填充（默认值：0%）
  - 最大值：最大可能的底部填充（默认值：100%）
  - 步长：每次值增加或减少的量（默认值：1%）
- 左侧
  - 标签：显示名称（默认值：“左侧”）
  - 值：当前左侧填充（默认值：5%）
  - 重置值：重置时将应用的左侧填充（默认值：5%）
  - 最小值：最小可能的左侧填充（默认值：0%）
  - 最大值：最大可能的左侧填充（默认值：100%）
  - 步长：每次值增加或减少的量（默认值：1%）

---

演示：

<img src="./assets/screenshots/features/padding.gif"/>

</details>

### 水平翻转

<details>
  <summary>水平翻转文本</summary>

- 当<b style="color: green">启用</b>时，文本将沿着 X 轴翻转。
- 当<b style="color: red">禁用</b>时，文本将正常显示。

---

命令：

- 切换（ID：control:flip-x:toggle）
- 打开（ID：control:flip-x:true）
- 关闭（ID：control:flip-x:false）

---

设置：

- 标签：显示名称（默认值：“水平翻转”）
- 状态： <b style="color: green">启用</b> / <b style="color: red">禁用</b>（默认值：<b style="color: red">禁用</b>）
- 激活标签：启用时显示的标签（默认值：“翻转”）
- 非激活标签：禁用时显示的标签（默认值：“”）

---

演示：

<img src="./assets/screenshots/features/flip-x.gif"/>

</details>

### 垂直翻转

<details>
  <summary>垂直翻转文本</summary>

- 当<b style="color: green">启用</b>时，文本将沿 Y 轴翻转。
- 当<b style="color: red">禁用</b>时，文本将正常显示。

---

命令：

- 切换（ID：control:flip-y:toggle）
- 打开（ID：control:flip-y:true）
- 关闭（ID：control:flip-y:false）

---

设置：

- 标签：显示名称（默认值：“垂直翻转”）
- 状态：<b style="color: green">启用</b> / <b style="color: red">禁用</b>（默认值：<b style="color: red">禁用</b>）
- 激活标签：启用时显示的标签（默认值：“翻转”）
- 非激活标签：禁用时显示的标签（默认值：“”）

---

演示：

<img src="./assets/screenshots/features/flip-y.gif"/>

</details>

### 文本颜色

<details>
  <summary>设置文本的颜色</summary>

---

命令:

- 重置 (ID: control:text-color:reset)

---

设置:

- 标签: 显示名称 (默认值: " 文本颜色 ")
- 值: 当前文本颜色 (默认值: Obsidian 的文本颜色)

---

演示:

<img src="./assets/screenshots/features/text-color.gif"/>

</details>

### 背景颜色

<details>
  <summary>设置背景颜色</summary>

---

命令：

- 重置（ID：control:bg-color:reset）

---

设置：

- 标签：显示名称（默认值：“背景颜色”）
- 值：当前背景颜色（默认值：Obsidian 的背景颜色）

---

演示：

<img src="./assets/screenshots/features/bg-color.gif"/>

</details>

### 查看模式

<details>
  <summary>选择2种不同的内容显示模式："Markdown"或"纯文本"</summary>

---

命令：

- 重置（ID：control:content:reset）

---

设置：

- 标签：显示名称（默认值：" 查看模式 "）
- 值：当前查看模式（默认值："Markdown"）
- 重置值：重置时将应用的查看模式（默认值："Markdown"）

---

选项：

- Markdown
- 纯文本

---

演示：

<img src="./assets/screenshots/features/view-mode.gif"/>

</details>

### 保持唤醒

<details>
  <summary>防止显示器进入睡眠状态</summary>

- 当<b style="color: green">启用</b>时，打开电视台时显示器不会关闭。
- 当<b style="color: red">禁用</b>时，显示器将根据系统设置关闭。

---

命令：

- 切换（ID：control:wake-lock:toggle）
- 打开（ID：control:wake-lock:true）
- 关闭（ID：control:wake-lock:false）

---

设置：

- 标签：显示名称（默认值：“保持唤醒”）
- 状态： <b style="color: green">启用</b> / <b style="color: red">禁用</b>（默认值：<b style="color: green">启用</b>）
- 激活标签：启用时显示的标签（默认值：“激活”）
- 非激活标签：禁用时显示的标签（默认值：“”）

</details>

### 分离窗口

> 📵 此功能在移动设备上不可用。

<details>
  <summary>将提示器移动到新窗口</summary>

- 在<b style="color: green">启用</b>后，提示器将被移动到一个新窗口。
- 在<b style="color: red">禁用</b>后，提示器将被移动到主 Obsidian 窗口。

---

命令：

- 切换 (ID: control:detach-window:toggle)
- 打开 (ID: control:detach-window:true)
- 关闭 (ID: control:detach-window:false)

---

设置：

- 标签：显示名称（默认值："Detach window"）
- 状态： <b style="color: green">启用</b> / <b style="color: red">禁用</b>（默认值：<b style="color: red">禁用</b>）
- 激活标签：启用时显示的标签（默认值："Detached"）
- 非激活标签：禁用时显示的标签（默认值：""）

---

演示：

<img src="./assets/screenshots/features/detach-window.gif"/>

</details>

### 不透明度

> 📵 此功能在移动设备上不可用。

<details>
  <summary>使电子白板窗口半透明（仅适用于桌面）</summary>

---

命令：

- 增加 X 步（ID：control:opacity:up）
- 减少 X 步（ID：control:opacity:down）
- 重置（ID：control:opacity:reset）

**步长可以在设置中配置*

---

设置：

- 标签：显示名称（默认值：“不透明度”）
- 值：当前不透明度（默认值：100%）
- 重置值：重置时将应用的不透明度（默认值：100%）
- 最小值：最低可能的不透明度（默认值：40%）
- 最大值：最高可能的不透明度（默认值：100%）
- 步长：每次增加或减少的值（默认值：1%）

---

演示：

<img src="./assets/screenshots/features/opacity.gif"/>

</details>

### 打开设置

<details>
  <summary>使用按钮快速打开插件的设置</summary>

---

命令:

- 打开设置 (ID: control:open-settings:trigger)

---

设置:

- 标签: 显示名称 (默认值: " 打开设置 ")

---

演示:

<img src="./assets/screenshots/features/open-settings.gif"/>

</details>

### 全屏

<details>
  <summary>最大化电子提示器的视图</summary>

- 启用后，电子提示器将最大化以填满整个屏幕。
- 禁用后，电子提示器将恢复到原始大小。

---

命令：

- 切换（ID：control:fullscreen:toggle）
- 打开（ID：control:fullscreen:true）
- 关闭（ID：control:fullscreen:false）

---

设置：

- 标签：显示名称（默认值：“全屏”）
- 状态：启用/禁用（默认值：禁用）
- 激活标签：启用时显示的标签（默认值：“激活”）
- 非激活标签：禁用时显示的标签（默认值：“”）

---

演示：

<img src="./assets/screenshots/features/fullscreen.gif"/>

</details>
面板

面板是多功能容器，可在垂直和水平方向上使用，您可以将其插入到电视台窗口中，以展示各种控件和附加信息。您可以根据需要添加任意数量的面板，并根据特定要求调整其内容、尺寸、定位和其他属性。

目前，有两种类型的面板可用：

### 控制面板

<details>
  <summary>包含一个控件列表，您可以添加、删除、重新排序和配置。</summary>

---

设置：

- 名称：显示名称（默认值：“控制面板”）
- 位置：面板放置的位置（默认值：“顶部”）
  - 顶部
  - 底部
  - 左侧
  - 右侧
- 宽度：面板的宽度（默认值：250 像素），仅适用于“左侧”和“右侧”位置
- 高度：面板的高度（默认值：48 像素），仅适用于“顶部”和“底部”位置
- 对齐方式：面板的对齐方式（默认值：“居中”），仅适用于“左侧”和“右侧”位置
  - 默认
  - 居中
  - 左对齐
  - 右对齐
- 控件：将显示在面板中的控件列表

---

演示：

<img src="./assets/screenshots/features/control-panel.gif"/>

<img src="./assets/screenshots/features/control-panel-settings.png"/>

</details>

### 页面小地图

<details>
  <summary>显示内容的小地图，以便于导航和更好的上下文感知。</summary>

---

设置:

- 名称: 显示的名称（默认值: " 控制面板 "）
- 位置: 面板的放置位置（默认值: " 右侧 "）
    - 左侧
    - 右侧
- 宽度: 面板的宽度（默认值: 156 像素）
- 对齐: 面板的对齐方式（默认值: " 居中 "）
    - 默认
    - 居中
    - 左对齐
    - 右对齐

---

演示:

<img src="./assets/screenshots/features/pagemap.gif"/>

</details>

## 快捷键

在 Teleprompter 窗口中，可以使用快捷键执行所有可能的操作。

总共，该插件提供了**60 个命令**，可以映射到快捷键上。

### 控制热键

控制提供了与其功能相关的命令。请查看您感兴趣的控制的详细描述，以了解它提供了哪些命令。

### 内容快捷键

- 滚动到顶部（ID：content:scroll-to-top）
- 滚动到底部（ID：content:scroll-to-bottom）
- 向上滚动 50 像素（ID：content:scroll-up）
- 向下滚动 50 像素（ID：content:scroll-down）

### 附加快捷键

- 在侧边栏中打开电子提示器（ID：open-app:sidebar）
- 在新标签页中打开电子提示器（ID：open-app:new-tab）
- 在新窗口中打开电子提示器（ID：open-app:new-window）
安装

### 社区插件目录

点击 [这里](https://obsidian.md/plugins?id=teleprompter) 在 Obsidian 中打开安装页面。

有关详细信息，请参阅 [官方安装说明](https://help.obsidian.md/Extending+Obsidian/Community+plugins)。

### 手动安装

1. 从最新的 [Github Release](https://github.com/lumetrium/obsidian-teleprompter/releases) 下载最新的 `obsidian-teleprompter.zip` 文件。
2. 从压缩包中提取 `obsidian-teleprompter` 文件夹，并将其放置在你的 vault 的插件文件夹 `<vault>/.obsidian/plugins/` 中（注意，`.obsidian` 文件夹可能默认是隐藏的）。
3. 重新启动 Obsidian。
4. 打开 **设置** -> **社区插件**，并激活 **Teleprompter**。

详细信息请参见 [论坛](https://forum.obsidian.md/t/plugins-mini-faq/7737)。

## 披露

根据 [Obsidian的开发者政策](https://docs.obsidian.md/Developer+policies)，在插件界面中存在任何静态广告，如横幅和弹出消息，都需要透明披露。

该插件包含一个 [静态广告](./assets/screenshots/settings-about.png)，仅在设置的“关于”页面上可访问。该广告是指向由该插件的作者开发的 [项目](https://lumetrium.com/definer) 的链接。重要的是要强调，没有任何第三方广告的参与。

## 推荐

查看由同一作者制作的这个浏览器扩展程序：

<a href="https://lumetrium.com/definer">
  <img src="./assets/logos/definer.png" style="margin-right: 0.7em" height="30px" align="left"/>
</a>

**[Definer - 弹出式词典和翻译工具](https://lumetrium.com/definer)**
即时为您选择或输入的单词和短语提供定义、翻译和搜索结果。
