---
uid: 20230803231105
title: Obsidian 插件：Siteswap
tags: ['obsidian插件', 'readme']
description: 通过JugglingLab gif服务器可视化杂耍模式Siteswap。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232450
---

# Obsidian 插件：Siteswap

> [!Note] 插件名片
> - 插件名称：Siteswap
> - 插件作者：Tim Dresser
> - 插件说明：通过 JugglingLab gif 服务器可视化杂耍模式 Siteswap。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/tdresser/obsidian-siteswap)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-siteswap)

## 概述

通过 JugglingLab gif 服务器可视化杂耍模式 Siteswap。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tdresser/obsidian-siteswap/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-siteswap]] 插件的自述翻译

## Obsidian Siteswap

该插件通过 Juggling Lab GIF 服务器呈现“[Siteswap](https://en.wikipedia.org/wiki/Siteswap)”杂耍符号。有关 GIF 服务器的完整文档在 [这里](https://jugglinglab.org/html/animinfo.html)。

该插件需要互联网连接。

可以通过以下方式直观地显示直接的 siteswaps：

<pre>
```siteswap
(4x,2)*
```
</pre>

![](<https://jugglinglab.org/anim?redirect=true;height=200;width=200;pattern=(4%2C2x)*>)

如果您想指定比模式更多的细节，请使用以下形式：

<pre>
```siteswap
pattern: 3
hands: (-25)(2.5).(25)(-2.5).(-25)(0).
colors: mixed
```
</pre>

![](<https://jugglinglab.org/anim?redirect=true;pattern=3;height=200;width=200;hands=(-25)(2.5).(25)(-2.5).(-25)(0).;colors=mixed>)

细节通过 YAML 指定 - 每行包含一个键的名称，后跟一个冒号和一个空格，然后是一个值。

某些属性可以通过插件设置全局定义。如果全局设置与指定给定动画的细节冲突，则全局属性将被覆盖。

## 动画设置

- pattern：要进行动画的 siteswap 模式，使用广义 siteswap 符号表示。
- bps：模式中每秒的拍数，浮点数值。默认值从模式中自动计算。
- dwell：在下一次抛掷之前进行接球的拍数。值为 0.0 到 2.0 之间的浮点数；默认值为 1.3。
- hands：其中之一为 'mills'、'inside'、'outside'、'half' 或手部运动的空间坐标的序列。详细信息 [在这里](https://jugglinglab.org/html/sspanel.html)。
- body：身体运动的角度和空间坐标的序列。详细信息 [在这里](https://jugglinglab.org/html/sspanel.html)。
- colors：确定道具的着色。每个颜色可以通过名称或在 0-255 范围内的红/绿/蓝分量来定义。例如，如果此设置等于{red}或{255,0,0}，动画制作者将使用红色球。如果在列表中定义了多个颜色，则它们以循环方式分配给球。例如，{255,0,0}{0,255,0}表示球 1 为红色，球 2 为绿色，球 3 为红色，球 4 为绿色，依此类推。可识别的颜色名称有：black、blue、cyan、gray、green、magenta、orange、pink、red、yellow。使用值 mixed（无括号）将应用预定义的颜色混合。默认值为{red}。
- propdiam：道具的直径，以厘米为单位。默认值为 10.0。
- prop：要使用的道具类型。可识别的道具名称为 ball、image 和 ring；默认值为 ball。
- gravity：重力加速度，以 cm/sec^2 为单位。默认值为 980.0（地球标准）。
- bouncefrac：球从地面弹起后保留的能量的比例（它从落下的高度返回多少）。值为大于 0.0 的浮点数；默认值为 0.9。
- hss：要应用于手的手部 siteswap 模式。请参阅 [文档](https://jugglinglab.org/html/HandSiteswapFeature.pdf)。
- handspec：（仅适用于 hss 模式）将手分配给抛接者；有关格式，请参阅 [文档](https://jugglinglab.org/html/HandSiteswapFeature.pdf)。
- dwellmax：（仅适用于 hss 模式）是否自动最大化停留时间。默认值为 true。
- hold：（仅适用于 hss 模式）是否保持可以保持的抛掷。默认值为 false。

## 全局设置

- width: 动画的宽度，以像素为单位。
- height: 动画的高度，以像素为单位。
- scale: 生成的 GIF 的缩放因子。1.0 表示不进行缩放。
- fps: 生成的 GIF 每秒的帧数。
- slowdown: 定义整体的时间减速因子（例如，slowdown: 1.0 表示实际速度，slowdown: 2.0 表示实际速度的一半）。
- showground: 是否显示地面（"true"、"false" 或 "auto"）。
- camangle: 相机角度，以度为单位，可以是一个角度或一对角度。例如：camangle: (0,90)。第一个角度描述相机围绕抛接者的旋转，第二个角度是仰角，以度为单位，从正上方开始计算（即，90 将相机放在与抛接者同一水平线上）。默认值取决于模式。
- hidejugglers: 需要隐藏（即不渲染）的一个或多个抛接者的列表。例如：hidejugglers=1 或 hidejugglers=(1,3)。
- stereo: 是否将模式显示为交叉眼立体图。



