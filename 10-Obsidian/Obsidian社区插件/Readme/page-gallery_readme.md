---
uid: 2023120719395491
title: Obsidian 插件：【Readme】Page Gallery
tags: ['obsidian插件', 'readme']
description: 根据所选页面内容创建可嵌入的图库。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Page Gallery

> [!Note] 插件名片
> - 插件名称：Page Gallery
> - 插件作者：Nathan Clark
> - 插件说明：根据所选页面内容创建可嵌入的图库。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/tokenshift/obsidian-page-gallery)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?page-gallery)

## 概述

根据所选页面内容创建可嵌入的图库。

![Page Gallery](https://cdn.pkmer.cn/covers/page-gallery.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tokenshift/obsidian-page-gallery/main/README.md)
>

---

## Readme(翻译）

下面是 [[page-gallery]] 插件的自述翻译

# Obsidian 页面图库

根据页面中的图片生成所选页面的图库视图。

> **警告：**此插件正在开发中，应被视为不稳定！在测试新插件之前，始终备份您的保险库。

先决条件

依赖于 [obsidian-dataview](https://github.com/blacksmithgu/obsidian-dataview) 来列出页面和页面元数据。

## 用法

创建一个类型为 `page-gallery` 的代码块：

```page-gallery
from: '"Test Gallery"'
orientation: landscape
columns: 3
fields: [file.name, Description]
```

![使用 page-gallery 插件的示例](https://cdn.pkmer.cn/covers/page-gallery_2_0.png!pkmer)

*照片来自 [Unsplash](https://unsplash.com/)*

## 设置

`page-gallery` 块中的选项使用 YAML 进行解析。

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
|`from`|`string`|-|用于在画廊中包含的页面的查询。使用与 [obsidian-dataview](https://github.com/blacksmithgu/obsidian-dataview) 相同的查询语法。|
|`fields`|`Array<string>`|[]|要在画廊中显示的字段列表，在图像下方显示。支持 [frontmatter 和内联字段](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/)。|
|`limit`|`number`|100|在画廊中显示的页面数量限制。将其设置为 `null` 以显示与 `from` 查询匹配的所有页面。|
|`groupBy`|`string`|-|按特定字段（或 [obsidian-dataview](https://github.com/blacksmithgu/obsidian-dataview) 表达式）对页面进行分组。|
|`sortBy`|`string[]`|`['file.path']`|用于对页面进行排序的一个或多个字段/表达式。使用 `-` 符号作为前缀（例如 `-file.path`）以反转排序顺序。|
|`filter`|`boolean`|true|是否显示过滤栏。|
|`columns`|`number`|4|以全宽度显示的列数。|
|`gutterSize`|`string`|`16px`|图像之间的间距大小。|
|`orientation`|`portrait`|`landscape`|`portrait`|以纵向或横向模式显示样式。这控制了默认的 `width`（见下文）。|
|`width`|`string`|根据 `columns` 和 `gutterSize` 计算得出。|画廊中每个图像的显示宽度。覆盖 `columns`。|
|`height`|`string`|根据 `imageWidth` 计算得出。|画廊中每个图像的显示高度。|
|`size`|`string`|`cover`|图像在画廊瓷砖中应如何缩放以适应。有关可用选项，请参见 [CSS background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)。|
|`position`|`string`|`center`|画廊中每个图像的定位。尝试 `top`、`center` 或 `bottom`（等等）以更改图像的可见部分。有关可用选项，请参见 [CSS background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)。|
|`repeat`|`string`|`no-repeat`|是否在每个画廊项中重复（平铺）图像。有关可用选项，请参见 [CSS background-repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)。|

此外，`size`、`position` 和 `repeat` 值可以通过 YAML frontmatter 在特定页面上进行覆盖：

```yaml
---
pageGallery:
  size: contain
  position: left
  repeat: repeat-x
---
```

**注意：** 这将覆盖页面出现在的 *任何* 页面画廊的这些设置。
