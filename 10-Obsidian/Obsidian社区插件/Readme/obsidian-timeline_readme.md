---
uid: 2023080322282154
title: Obsidian 插件：【Readme】Timeline
tags: ['界面相关', 'obsidian插件', 'readme']
description: 用于构建时间轴。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Timeline

> [!Note] 插件名片
> - 插件名称：Timeline
> - 插件作者：George Butco
> - 插件说明：用于构建时间轴。
> - 插件分类：[' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/George-debug/obsidian-timeline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-timeline)

## 概述

用于构建时间轴。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/George-debug/obsidian-timeline/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-timeline]] 插件的自述翻译

构建令人惊叹的时间线

我们建议您使用 [代码片段](https://github.com/George-debug/obsidian-timeline/tree/master/src/style/snippet) 来处理 `脚注` 和 `节点链接`，并与 `其他插件` 一起使用。

![创建您自己的时间线](https://user-images.githubusercontent.com/57345333/180435506-7d51bec3-0cc8-48b1-9f22-24199c988dbf.gif)

如何使用它

选择 `timeline` 或 `timeline-labeled` 标签

- ### `timeline` 标签

  每行开头需要有 `+` 符号：

  - 每个事件总共有 3 个 `+` 符号：一个表示时间，一个表示标题，一个表示内容
  - 如果你觉得写起来更容易，可以用空行将它们分开
  ~~~markdown
  ```timeline
  [line-3, body-2]
  + pre</br> 17世纪
  + 咖啡的起源
  + 现代烘焙咖啡起源于阿拉伯。在13世纪，咖啡因的刺激作用使其在穆斯林社区中非常受欢迎，尤其在长时间的祈祷会中非常有用。通过烘烤和煮沸咖啡豆，使其不孕不育，阿拉伯人能够垄断咖啡作物市场。事实上，传统说法是直到17世纪，当印度朝圣者巴巴·布丹将肥沃的咖啡豆系在腹部的带子上离开麦加时，阿拉伯或非洲以外没有一棵咖啡树存在。巴巴的咖啡豆导致了一个新的、有竞争力的欧洲咖啡贸易。

  + 17世纪
  + 欧洲和咖啡
  + 1616年，荷兰人在斯里兰卡（当时是锡兰，后来是爪哇）建立了第一个欧洲人拥有的咖啡庄园。法国人开始在加勒比地区种植咖啡，随后西班牙人在中美洲，葡萄牙人在巴西也开始种植咖啡。欧洲的咖啡馆在意大利和后来的法国兴起，达到了新的流行水平。现在，巴黎人在巴黎各处的咖啡馆里享用一杯咖啡、一根法棍或可颂面包已经成为一种时尚。
  ```
  ~~~


- ### `timeline-labeled` 标签
  - 每个事件都有对应的标签（`date`、`title` 和 `content`），并且标签位于行首
  - 如果你觉得写起来更容易，可以用空行将它们分开
  ~~~markdown
  ```timeline-labeled
  [line-3, body-2]
  date: pre</br> 17世纪
  title: 咖啡的起源
  content:
  现代烘焙咖啡起源于阿拉伯。在13世纪，咖啡因的刺激作用使其在穆斯林社区中非常受欢迎，尤其在长时间的祈祷会中非常有用。通过烘烤和煮沸咖啡豆，使其不孕不育，阿拉伯人能够垄断咖啡作物市场。事实上，传统说法是直到17世纪，当印度朝圣者巴巴·布丹将肥沃的咖啡豆系在腹部的带子上离开麦加时，阿拉伯或非洲以外没有一棵咖啡树存在。巴巴的咖啡豆导致了一个新的、有竞争力的欧洲咖啡贸易。

  date: 17世纪
  title: 欧洲和咖啡
  content:
  1616年，荷兰人在斯里兰卡（当时是锡兰，后来是爪哇）建立了第一个欧洲人拥有的咖啡庄园。法国人开始在加勒比地区种植咖啡，随后西班牙人在中美洲，葡萄牙人在巴西也开始种植咖啡。欧洲的咖啡馆在意大利和后来的法国兴起，达到了新的流行水平。现在，巴黎人在巴黎各处的咖啡馆里享用一杯咖啡、一根法棍或可颂面包已经成为一种时尚。
  ```
  ~~~

  <br/>

`[]` 是可选的！

你可以在代码块的开头使用 `[]` 来添加预先编写的类或你自己的类到包装器中。 <br />

自定义

使用预先编写的 `line`、`body` 和 `active color` 类：

- ### line:
  - line-2
  - line-3
  - line-4
  - line-5
- ### body:
  - body-2
  - body-3
  - body-4
- ### active color:
  - active-color-background-modifier-success
  - active-color-background-modifier-error
  - active-color-background-modifier-error-hover
  - active-color-text-accent
  - active-color-text-accent-hover
  - active-color-text-error
  - active-color-text-error-hover
  - active-color-text-selection
  - active-color-interactive-accent
  - active-color-interactive-accent-hover
  - active-color-interactive-success

![带颜色的时间线](https://user-images.githubusercontent.com/57345333/180477136-256d5cf5-aaf3-41ee-9055-e4e82de35af2.gif)

对于 `active color`，我们使用 obsidian 的 css 变量作为活动颜色，以便与主题匹配。默认的活动颜色是 `background-modifier-success`。

如果您想使用自己的颜色，请使用附加到 `.timeline` 类的 `--timeline-active-color` css 变量

```css
.timeline
    --timeline-active-color: #00c137
```

## 特别感谢

- [Welding Torch](https://github.com/Welding-Torch)
- [Ivan Che](https://github.com/taqyon)

## 支持