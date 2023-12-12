---
uid: 2023120719250715
title: Obsidian 插件：【Readme】Colored Tags
tags: ['obsidian插件', 'readme']
description: 将不同的标签着色为不同的颜色。颜色取决于标签的内容。嵌套标签的颜色与父标签混合。文本颜色对比度会自动匹配，以符合AA级WCAG 2.1的要求。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Colored Tags

> [!Note] 插件名片
> - 插件名称：Colored Tags
> - 插件作者：Pavel Frankov
> - 插件说明：将不同的标签着色为不同的颜色。颜色取决于标签的内容。嵌套标签的颜色与父标签混合。文本颜色对比度会自动匹配，以符合 AA 级 WCAG 2.1 的要求。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/pfrankov/obsidian-colored-tags)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?colored-tags)

## 概述

将不同的标签着色为不同的颜色。颜色取决于标签的内容。嵌套标签的颜色与父标签混合。文本颜色对比度会自动匹配，以符合 AA 级 WCAG 2.1 的要求。

![Colored Tags](https://cdn.pkmer.cn/covers/colored-tags.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pfrankov/obsidian-colored-tags/master/README.md)
>

---

## Readme(翻译）

下面是 [[colored-tags]] 插件的自述翻译

# Obsidian 的彩色标签插件

![演示](https://cdn.pkmer.cn/covers/colored-tags_1_0.gif)

<img width="700" alt="设置" src="https://github.com/pfrankov/obsidian-colored-tags/assets/584632/829b84da-ff37-460c-9daf-5b110c414fe3">

将标签着色为不同的颜色。嵌套标签的颜色与父标签混合。

文本颜色对比度会自动匹配以符合 WCAG 2.1 的 AA 级别。

这些颜色也适用于暗色主题。

## 路线图

- [x] ~~调色板大小、基本色度和基本亮度的设置。~~
- [x] ~~优化：存储已存在的、已计算过的标签颜色。仅渲染新的标签颜色。~~
- [x] ~~优化：追加样式而不是每次替换。~~
- [x] ~~将颜色分配更改为可预测的循环，从一种颜色到另一种颜色（破坏性更改）。~~
- [ ] 能够为非拉丁标签上色
- [ ] 优化：在组内计算顺序必须优于 O(n^2)
- [ ] 优化：在插件启动时从配置中删除过时的标签
- [ ] 优化：保存已计算的调色板，以避免不必要的计算
- [ ] 颜色混合必须仅使用色调属性
- [ ] 第一个子标签的颜色必须与其父标签不同。也许将其与下一个父标签的颜色也区分开来是个好主意。所以 +2 应该足够了（破坏性更改）
- [x] ~~优化：通过使用 Web Workers 或延迟大量计算来加快 Obsidian 的加载速度~~
- [ ] 优化：临时保存所有颜色，以避免在 Obsidian 启动时闪烁标签的颜色
安装

### Obsidian 插件商店

该插件可在 Obsidian 社区插件商店中找到 <https://obsidian.md/plugins?id=colored-tags>

您可以通过 [BRAT](https://obsidian.md/plugins?id=obsidian42-brat) 安装此插件：`pfrankov/obsidian-colored-tags`

受以下插件的启发：

- [Colorful Tag插件](https://github.com/rien7/obsidian-colorful-tag)。



