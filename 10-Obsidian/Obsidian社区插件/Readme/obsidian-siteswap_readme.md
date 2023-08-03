---
uid: 2023080322270074
title: Obsidian 插件：【Readme】Siteswap
tags: ['obsidian插件', 'readme']
description: 通过JugglingLab gif服务器可视化杂耍模式Siteswap。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Siteswap

> [!Note] 插件名片
> - 插件名称：Siteswap
> - 插件作者：Tim Dresser
> - 插件说明：通过JugglingLab gif服务器可视化杂耍模式Siteswap。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/tdresser/obsidian-siteswap)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-siteswap)

## 概述

通过JugglingLab gif服务器可视化杂耍模式Siteswap。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tdresser/obsidian-siteswap/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-siteswap]] 插件的自述翻译


## Obsidian Siteswap

该插件通过Juggling Lab GIF服务器呈现“[Siteswap](https://en.wikipedia.org/wiki/Siteswap)”杂耍符号。有关GIF服务器的完整文档在[这里](https://jugglinglab.org/html/animinfo.html)。

该插件需要互联网连接。

可以通过以下方式直观地显示直接的siteswaps：

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

细节通过YAML指定 - 每行包含一个键的名称，后跟一个冒号和一个空格，然后是一个值。

某些属性可以通过插件设置全局定义。如果全局设置与指定给定动画的细节冲突，则全局属性将被覆盖。

## 动画设置

- pattern：要进行动画的siteswap模式，使用广义siteswap符号表示。
- bps：模式中每秒的拍数，浮点数值。默认值从模式中自动计算。
- dwell：在下一次抛掷之前进行接球的拍数。值为0.0到2.0之间的浮点数；默认值为1.3。
- hands：其中之一为'mills'、'inside'、'outside'、'half'或手部运动的空间坐标的序列。详细信息[在这里](https://jugglinglab.org/html/sspanel.html)。
- body：身体运动的角度和空间坐标的序列。详细信息[在这里](https://jugglinglab.org/html/sspanel.html)。
- colors：确定道具的着色。每个颜色可以通过名称或在0-255范围内的红/绿/蓝分量来定义。例如，如果此设置等于{red}或{255,0,0}，动画制作者将使用红色球。如果在列表中定义了多个颜色，则它们以循环方式分配给球。例如，{255,0,0}{0,255,0}表示球1为红色，球2为绿色，球3为红色，球4为绿色，依此类推。可识别的颜色名称有：black、blue、cyan、gray、green、magenta、orange、pink、red、yellow。使用值mixed（无括号）将应用预定义的颜色混合。默认值为{red}。
- propdiam：道具的直径，以厘米为单位。默认值为10.0。
- prop：要使用的道具类型。可识别的道具名称为ball、image和ring；默认值为ball。
- gravity：重力加速度，以cm/sec^2为单位。默认值为980.0（地球标准）。
- bouncefrac：球从地面弹起后保留的能量的比例（它从落下的高度返回多少）。值为大于0.0的浮点数；默认值为0.9。
- hss：要应用于手的手部siteswap模式。请参阅[文档](https://jugglinglab.org/html/HandSiteswapFeature.pdf)。
- handspec：（仅适用于hss模式）将手分配给抛接者；有关格式，请参阅[文档](https://jugglinglab.org/html/HandSiteswapFeature.pdf)。
- dwellmax：（仅适用于hss模式）是否自动最大化停留时间。默认值为true。
- hold：（仅适用于hss模式）是否保持可以保持的抛掷。默认值为false。

## 全局设置

-   width: 动画的宽度，以像素为单位。
-   height: 动画的高度，以像素为单位。
-   scale: 生成的GIF的缩放因子。1.0 表示不进行缩放。
-   fps: 生成的GIF每秒的帧数。
-   slowdown: 定义整体的时间减速因子（例如，slowdown: 1.0 表示实际速度，slowdown: 2.0 表示实际速度的一半）。
-   showground: 是否显示地面（"true"、"false" 或 "auto"）。
-   camangle: 相机角度，以度为单位，可以是一个角度或一对角度。例如：camangle: (0,90)。第一个角度描述相机围绕抛接者的旋转，第二个角度是仰角，以度为单位，从正上方开始计算（即，90 将相机放在与抛接者同一水平线上）。默认值取决于模式。
-   hidejugglers: 需要隐藏（即不渲染）的一个或多个抛接者的列表。例如：hidejugglers=1 或 hidejugglers=(1,3)。
-   stereo: 是否将模式显示为交叉眼立体图。



