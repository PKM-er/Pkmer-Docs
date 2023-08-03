---
uid: 20230803204429
title: Obsidian 插件：【Readme】Obsidian Leaflet
tags: ['第三方工具集成', '图片', 'obsidian插件', 'readme']
description: 在笔记中插入交互式地图，此地图基于 Leaflet.js。添加需要通过使用特定语法。
author: Jeremy Valentine
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Leaflet

> [!Note] 插件名片
> - 插件名称：Obsidian Leaflet
> - 插件作者：Jeremy Valentine
> - 插件说明：在笔记中插入交互式地图，此地图基于 Leaflet.js。添加需要通过使用特定语法。
> - 插件分类：['第三方工具集成', '图片', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/javalent/obsidian-leaflet)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-leaflet-plugin)

## 概述

在笔记中插入交互式地图，此地图基于 Leaflet.js。添加需要通过使用特定语法。

![Obsidian Leaflet](https://cdn.pkmer.cn/covers/obsidian-leaflet-plugin.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/javalent/obsidian-leaflet/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-leaflet-plugin]] 插件的自述翻译


# Obsidian Leaflet
> **开发状态**: 维护模式
> 
> 由于大量优先级较高的 Javalent 插件项目，该插件目前进入维护模式。这**不是**永久状态。
> - Pull Request 将会被审查。
> - *耶*，如果可能的话，将会审查并修复错误。
> - 功能请求**不会**被处理。

---

使用 [Leaflet.js](https://leafletjs.com/) 为 Obsidian.md 添加可交互的地图功能。

<img src="https://raw.githubusercontent.com/valentine195/obsidian-leaflet-plugin/master/images/7d595a3db9bf0eff9f2a2150819d2bd6956ddcd8.gif">

<img src="https://raw.githubusercontent.com/valentine195/obsidian-leaflet-plugin/master/images/275ff1f560bb6dec0d4fc02b267a7f63860f20c9_2_690x262.jpeg">

目前只是概念验证。可能无法按预期工作。目前仅在 Windows 和 Mac 上进行了测试。

在其他语言中阅读：[简体中文](./README_zh_CN.md)。

## 使用插件和示例

可以使用`leaflet`代码块创建地图。例如：

````markdown
```leaflet
id: leaflet-map
image: [[Image.jpg]]
height: 500px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 5
unit: meters
scale: 1
marker: default, 39.983334, -82.983330, [[Note]]
darkMode: true
```
````

## 选项

> :pencil: 使用链接
>
> 下面的几个参数用于提供地图的链接，无论是用于图像、标记文件等等。
>
> 在所有情况下，可以提供 Obsidian 的 Wikilinks (`[[链接]]`) 或标准的 markdown 链接 (`[链接](./路径/到/文件)`)。

| 选项                                   | 描述                                                                                                        | 默认值                                      |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [id](#map-ids)                          | 唯一标识符（可以是任何内容）。**必填**。                                                                  |                                             |
| [image](#image-maps)                    | 用作地图图层的图像文件的直接 URL/文件路径。                                                               | OpenStreetMap 地图                           |
| [tileServer](#real-world-maps)          | 添加其他瓦片服务器作为不同的图层。                                                                         |                                             |
| [tileSubdomains](#tile-subdomains)      | 添加可用的子域名以进行其他瓦片服务器的并发请求。用逗号分隔，例如 'a,b,c'。                                | a,b,c                                       |
| [tileOverlay](#real-world-maps)         | 将其他瓦片服务器添加为基础地图的覆盖层。                                                                  |                                             |
| [osmLayer](#real-world-maps)            | 关闭 OpenStreetMap 图层（仅在提供了其他瓦片服务器时可用）。                                               |                                             |
| [lat](#initial-coordinates)             | 渲染时显示的默认纬度。                                                                                    | 50%（图像）/ 39.983334（open street map）    |
| [long](#initial-coordinates)            | 渲染时显示的默认经度。                                                                                    | 50%（图像）/ -82.983330（open street map）   |
| height                                 | 地图元素的高度。可以以像素或笔记高度的百分比提供。                                                         | 500px                                       |
| width                                  | 地图元素的宽度。可以以像素或笔记宽度的百分比提供。                                                         | 100%                                        |
| [minZoom](#initial-zoom-level)          | 地图的最小缩放级别。                                                                                      | 1                                           |
| [maxZoom](#initial-zoom-level)          | 地图的最大缩放级别。                                                                                      | 10                                          |
| [defaultZoom](#initial-zoom-level)      | 地图将以此级别加载。                                                                                       | 5                                           |
| [zoomDelta](#initial-zoom-level)        | 缩放时，缩放级别将按此数量更改。                                                                          | 1                                           |
| zoomFeatures                            | 地图将自动适应所有 [GeoJSON](#geojson) 和 [GPX](#gpx) 特征。                                               |                                             |
| [unit](#unit-and-scale)                 | 显示距离的单位。                                                                                          | 米                                          |
| [scale](#unit-and-scale)                | 图像地图距离计算的比例因子。                                                                              | 1                                           |
| [marker](#markers)                      | 在地图上创建不可变的标记。                                                                                  |                                             |
| [commandMarker](#defined-in-code-block) | 创建执行命令的不可变标记。                                                                                  |                                             |
| [markerFile](#marker-file)              | 从笔记的正文中创建不可变标记。                                                                              |                                             |
| [markerFolder](#marker-folders)         | 从给定路径（相对于 Vault 根目录的相对路径或绝对路径）中的 _所有_ 笔记创建不可变标记。通过在每个文件夹级别附加一个 '/' 来限制深度。 |                                             |
| [markerTag\*](#marker-tags)             | 从具有指定标签的 _所有_ 笔记中创建不可变标记。                                                              |                                             |
| [filterTag\*](#filter-tag)              | 过滤要用于创建标记的文件。只使用与标签匹配的标记。                                                          |                                             |
| [linksTo\*](#links)                     | 从链接到某个笔记的 _所有_ 笔记中创建不可变标记。                                                             |                                             |
| [linksFrom\*](#links)                   | 从链接自某个笔记的 _所有_ 笔记中创建不可变标记。                                                             |                                             |
| [darkMode](#dark-mode)                  | 反转地图颜色。                                                                                             | false                                       |
| [overlay](#overlays)                    | 在地图上添加一个圆形覆盖层。                                                                                |                                             |
| [overlayTag](#overlay-tag)              | 定义要在指定的标记笔记中搜索的 YAML 标签。                                                                  |                                             |
| [overlayColor](#overlay-color)          | 更改默认覆盖层颜色。                                                                                        | 蓝色                                        |
| [bounds](#bounds)                       | 将图像地图边界设置为指定的坐标，而不是默认值。                                                              |                                             |
| [coordinates](#initial-coordinates)     | 从笔记中读取位置数据并将其用作初始坐标。                                                                  |                                             |
| [zoomTag](#initial-zoom-level)          | 从笔记中读取距离缩放数据，并将其用作默认初始缩放级别。                                                     |                                             |
| [geojson](#geojson)                     | 将多个 *.GeoJSON 文件路径（以 Json 或 YAML 语法）加载到此地图中。相对路径以 `.`（点）开头。                   |                                             |
| [geojsonColor](#styles-and-color)       | 更改 GeoJSON 特征的默认颜色。                                                                              | #3388ff                                     |
| geojsonFolder                           | 在多个文件夹（Json 或 YAML 语法）中搜索 `*.geojson` 或 `*.json` 文件，以加载到此地图中。相对路径以 `.`（点）开头。通过在每个文件夹级别附加一个斜杠来限制子文件夹深度。 |                                             |
| [gpx](#gpx)                             | 将 GPX 文件加载到地图上。                                                                                  |                                             |
| [gpxMarkers](#gpx-markers)              | 设置默认的起点、终点和途经点标记。                                                                          |                                             |
| gpxColor                                | 控制默认的 GPX 颜色。                                                                                      | #3388ff                                     |
| gpxFolder                               | 解析一个文件夹中的 `.gpx` 文件，以加载到地图中。                                                            |                                             |
| [imageOverlay](#image-overlays)         | 在地图上添加图像覆盖层。                                                                                   |                                             |
| [draw](#enable-draw-mode-by-default)    | 在地图上启用绘制控制器。                                                                                   | true                                        |
| drawColor                               | 新形状的默认颜色。                                                                                          | #3388ff                                     |
| showAllMarkers                          | 地图将打开显示所有标记。                                                                                    | false                                       |
| preserveAspect                          | 如果笔记窗格中的地图大小发生变化，地图将调整大小以保持其初始纵横比。                                       | false                                       |
| noUI                                    | 地图上不会添加任何控件。                                                                                    | false                                       |
| lock                                    | 控制地图是否启动时为锁定状态。                                                                              | false                                       |
| recenter                                | 强制地图在平移后保持重新居中。                                                                              | false                                       |
| noScrollZoom                            | 关闭滚轮缩放。                                                                                              | false                                       |

> \*: 需要 [DataView 插件](https://github.com/blacksmithgu/obsidian-dataview)。

### YAML语法

从版本**3.11.0**开始，所有参数可以使用YAML语法来定义，而不是使用多个相同的标签。原始语法仍然有效，但两者不能混合使用。

例如：

````
```leaflet
image:
    - [[Image 1]]
    - [[Image 2]]
    - [[Image 3]]
marker:
    - [<type>, <lat>, <long>, <link>]
    - [<type>, <lat>, <long>, <link>]
```
````

#### YAML中的标记标签

YAML将`#`符号视为注释，因此`markerTag`或`filterTag`参数必须用引号括起来(`"#tag"`)，或者不使用`#`符号定义。

#### 链接

I

## 地图ID

从**3.0.0**版本开始，地图ID是必需的。如果打开一个带有旧地图块的笔记，插件将会警告您该地图现在需要一个ID。

一旦给旧地图分配了一个ID，插件将尝试将标记数据与新地图关联起来。

在更新到3.0.0后第一次打开插件时，将会创建您的标记数据的备份，以防您需要降级。如果遇到问题，请在Github上创建一个问题。

初始地图视图

### 初始坐标

地图将根据使用`lat`和`long`定义的纬度和经度打开。如果未提供，则默认使用设置中定义的纬度和经度。

或者，可以使用`coordinates`参数来定义纬度和经度。坐标可以定义为数字数组，或者作为具有`location`前置标签的注释的维基链接：

```
coordinates: [36, -89]
coordinates: [[具有位置前置标签的注释]]
```

### 初始缩放级别

> :warning: 使用图像地图？
>
> 缩放级别和图像地图可能有点不直观。
>
> 请查看下面的[使用图像地图进行缩放](#zooming-with-image-maps)。

可以使用`defaultZoom`参数设置地图的初始缩放级别。该参数必须是`minZoom`和`maxZoom`参数之间的数字 - 如果超出范围，将设置为最接近的参数。

或者，如果已经定义了`coordinates`注释，初始缩放级别可以从该注释的正文中读取为`<distance> <unit>`。

例如，如果一个注释具有以下正文：

### 带有前置信息的笔记.md
---
位置: [-36, 89]
附近: 100 英里
---
```

地图定义如下:

```leaflet
坐标: [[带有前置信息的笔记]]
缩放标签: 附近
```

然后地图将读取 `附近` 标签，识别为 `100 英里`，并将地图的初始缩放设置为最接近的级别，以显示 100 英里（这取决于 `minZoom`、`maxZoom` 和 `zoomDelta`）。

现实世界地图

如果未提供`image`参数，则会创建现实世界地图。默认情况下，这些地图将加载`OpenStreetMap`地图，但可以使用`tileServer`参数提供其他瓦片服务器。

**您需要确保您使用的瓦片服务器是公开可用的。**

目前，需要API访问权限的瓦片服务器无法使用。

如果提供了其他瓦片服务器，则可以使用`osmLayer: false`参数关闭`OpenStreetMap`图层。

### 瓦片服务器

如上所述，可以使用`tileServer`和`tileOverlay`参数添加额外的瓦片服务器。两者具有相同的语法：

`tileServer: <domain>|<alias (optional)>`

例如：

```md
tileServer: https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png|Dark

---

tileServer:

-   https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png|Dark
-   https://tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png|Hills
```

在`tileServer`中指定的瓦片服务器将作为额外的**图层**添加，并可以完全切换。

### 瓦片覆盖

将瓦片服务器指定为 `tileOverlay` 而不是 `tileServer` 将作为覆盖层添加到基础地图之上。

可以通过在末尾添加 `|on` 来将瓦片覆盖设置为默认打开：

```md
tileServer: https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png|Dark|on
```

### 瓦片子域名

为了支持额外的瓦片服务器并发请求，添加可用的子域名。使用逗号分隔，例如 'a,b,c'。

`tileSubdomains: <domain1>,<domain2>,<domain3>`

例如：
----
```leaflet
osmLayer: false
tileServer: https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
tileSubdomains: 1,2,3
```
---

这样地图将从以下URL加载地图数据：
https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
https://webrd03.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}

## 图像地图

> **:warning: 制作图像地图？**
>
> 对于图像地图，**强烈建议**您首先设置[边界](#bounds)。
>
> 这将使您处理图像变得更加容易！
>
> 阅读有关该过程的[讨论](https://github.com/valentine195/obsidian-leaflet-plugin/discussions/130)。Josh Plunkett还制作了一段很棒的视频，详细介绍了该过程，视频链接在[这里](https://www.youtube.com/watch?v=54EyMzJP5DU)。

### 图片地图的URL / 文件路径

图片地图可以通过以下三种方式加载：

1. 直接URL（例如，https://i.imgur.com/jH8j3mJ.jpg）
2. Obsidian URL（例如，obsidian://open?vault=VaultName&file=Path/To/Image.jpg）
3. Obsidian图片的wikilink（例如，[[Image.jpg]]）

使用图像地图进行缩放

您可能会注意到，基本的图像地图和缩放并不一定按照您的预期方式进行。例如，您可能会发现将最大缩放值设置得更高只会使地图“开始更远”，而不是实际允许您进行更多缩放。

这是因为图像地图本质上是在LeafletJS模块之上进行的一种黑客方式。仍然存在一个基础地图，它仍然具有其纬度和经度，只是无法看到。然后，在该地图上绘制图像（居中于[0, 0]），然后拉伸以适应。如果更改参数（例如缩放级别），则会更改基础地图...但图像仍然被放置在[0, 0]并拉伸以适应！

相反，需要为您的地图设置[图像边界](#bounds)。这告诉Leaflet在底层地图图层上将图像放置在哪些坐标上。无论地图实例如何更改，图像都将位于相同的位置并具有相同的大小，每次都是如此！

### 多图层地图

通过向插件提供多个图像，可以将图像叠加在一起：

````markdown
```leaflet
id: 带有图层图像的地图
image:
    - [[Image1.jpg|可选别名]]
    - [[Image2.jpg]]
    - [[Image3.jpg]]
```
````

这将生成一个具有3个图层的地图。图像1位于顶部，图像2位于中间，图像3位于底部。图像将围绕其中心点对齐。

地图右上角的控制框将允许您更改图层。

可以在每个图层上单独创建和保存标记。

如果给定别名，则图层控制框将显示给定的名称而不是文件名。

### 边界

可以使用`bounds`参数为图像地图设置自定义边界：

````
```leaflet
image: [[Image.jpg]]
bounds:
    - [<左上纬度>, <左上经度>]
    - [<右下纬度>, <右下经度>]
```
````

这将导致图像地图的纬度和经度更新以适应边界。_如果提供的边界与图像的宽高比不匹配，则会扭曲图像。_

地图上定义的任何标记或覆盖物都不会被更新。

由于图像地图没有真正的坐标系统，提供的纬度和经度必须以**图像的左上角**为基准，以百分比的形式给出。

如果不改变地图的默认缩放级别，这个设置似乎没有任何作用。

### 单位和比例

如果提供了`scale`参数，插件将通过`scale`对两点之间的计算距离进行缩放，并将结果显示为`xxx unit`。

在真实世界的地图上，只需要提供`unit`参数。它将尝试将测量结果从`meters`缩放到`unit`。

标记

可以通过右键单击将新标记添加到地图中。

如果在插件设置或同一目录中的`markers.json`文件中创建了任何其他标记类型，则会显示一个列表供选择。

创建了标记后，可以将其拖动到其他位置。

在地图上创建的标记将保存到地图实例中。以这种方式保存的标记数据将持续存在，只要地图与一个笔记相关联 - 如果从笔记中删除了地图块，或者如果删除了包含地图块的所有笔记，则与其关联的数据将在7天后被删除。

### 标记缩放级别断点

当地图缩放超过或低于断点时，给定缩放级别断点的标记将从地图上移除。

这些断点可以在地图上创建的标记的右键菜单中设置，也可以在源代码块中创建的标记的参数中设置（有关更多信息，请参见[代码块中定义的对象](#objects-defined-in-the-code-block)）。

请注意！确保断点在地图的缩放范围内，否则标记可能永远不会显示！

### 标记坐标

<kbd>Alt</kbd> 或 <kbd>Shift</kbd> 点击标记将显示其坐标。

### 标记链接

标记也可以指向一个注释；右键点击它，将会弹出一个弹出窗口。目标可以输入为注释的名称。此外，注释中的标题或块也可以成为标记的目标：

`注释`

`注释#标题1`

如果您有多个同名的注释，您应该指定注释的直接路径。否则，地图可能不会打开您期望的那个注释。

一旦链接，点击将打开注释（<kbd>Ctrl</kbd>/<kbd>Cmd</kbd>-点击将在新窗口中打开）。

此外，可以通过将注释从文件树拖放到地图上来创建标记。

标记链接也可以设置为外部网站。点击标记将打开该网站。

#### Obsidian命令作为链接

标记链接也可以通过两种方式之一设置为定义的Obsidian命令。

命令必须是在调色板中显示的命令的完整名称。

**将标记链接设置为命令将在点击标记时执行该命令。**

> ##### **警告**
>
> 将命令用作标记目标可能会产生意想不到的后果。
>
> 请参阅[此问题](https://github.com/valentine195/obsidian-leaflet-plugin/issues/38)以供参考。

在代码块中使用`commandMarker:`代替`marker:`

在地图上创建

打开“命令标记”切换。

### 批量编辑

从3.9.0版本开始，地图上添加了一个批量编辑按钮。点击此按钮将打开一个模态窗口，方便对地图上定义的所有可编辑标记进行批量编辑。

## 叠加层

可以通过<kbd>Shift</kbd>-右键单击地图，拖动鼠标设置半径，然后再次单击来添加叠加层。按下<kbd>Escape</kbd>键将取消绘制并删除叠加层。以这种方式添加到地图上的叠加层与标记一样保存在地图实例中，并在重新打开地图时重新创建。

此外，还可以在源代码块中使用`overlay`参数指定叠加层，如下所示：

`overlay: [<color>, [<lat>, <long>], <radius> <unit?>, <desc>]`

或者

```
overlay:
    - [<color>, [<lat>, <long>], <radius> <unit?>, <desc>]
    - [<color>, [<lat>, <long>], <radius> <unit?>, <desc>]
    ...
```

这将创建一个以`<lat>, <long>`为中心、半径为`<radius>`的`<color>`叠加层圆。

> **请注意**
>
> 叠加层按照指定的顺序绘制。如果较小的叠加层被较大的叠加层遮挡，较小的叠加层将无法交互。

`<color>`可以是任何有效的CSS颜色，包括十六进制、`rgb()`和`hsl()`。

请注意，由于YAML语法的限制，以`#`开头的字符串和包含逗号的条目必须用引号括起来。

示例：

````
```leaflet
overlay: [blue, [32, -89], 25 mi, 'This is my overlay!']
```
````

````
```leaflet
overlay:
  - ['rgb(255, 255, 0)', [32, -89], 25 km, 'This is also my overlay!']
  - ['#00FF00', [32, -89], 500 ft, 'This is a third overlay!']
```
````

编辑覆盖层

直接在地图上绘制的覆盖层可以进行编辑。通过右键单击覆盖层，可以更改半径和颜色，或者删除覆盖层。

### 使用笔记前置元数据创建叠加层

与标记类似，可以使用`markerFile`、`markerFolder`和`markerTag`参数从找到的笔记中创建叠加层。`filterTag`参数可以用来根据标签筛选要使用的文件。

插件将扫描笔记的前置元数据，并根据前置元数据中的`mapoverlay`参数生成叠加层，使用与上述相同的语法。

### 叠加标签

叠加标签参数可以用于从笔记的前置元数据中自动生成叠加层。

示例：

````
```leaflet
overlayTag: nearby
```
````

笔记的前置元数据：

```
nearby: 50 km
```

### 叠加颜色

叠加颜色标签可用于指定在绘制地图或使用叠加标签参数时的默认叠加颜色。

图像叠加

可以使用代码块中的`imageOverlay`参数将图像叠加到地图上。

该参数使用以下语法：

````
```leaflet
imageOverlay:
 - [ [[ImageFile|Optional Alias]], [Top Left Coordinates], [Bottom Right Coordinates] ]
 - [ [[ImageFile2|Optional Alias]], [Top Left Coordinates], [Bottom Right Coordinates] ]
 - ...
```
````

这将在两个坐标边界之间添加一个图像叠加。如果未提供坐标边界，则叠加层将：

1. 在图像地图上，覆盖整个图像。
2. 在真实地图上，覆盖初始地图视图。

可以使用右上角的图层控制框来切换图像叠加的开启或关闭。与具有多个图层的地图类似，如果提供了可选的别名，则图层框将显示别名而不是文件名。

GeoJSON（地理JSON）是一种用于描述地理数据结构（如点、线和形状）的格式。请参阅[此链接](https://datatracker.ietf.org/doc/html/rfc7946)以获取完整的GeoJSON格式参考。

可以使用以下语法将GeoJSON加载到地图中：

````
```leaflet
geojson: [[GeoJSON_File.json]]|optional-alias
```
````

或者

````
```leaflet
geojson:
  - [[GeoJSON_File.json]]
  - [[GeoJSON_File_2.json]]|optional-alias|[[optional-note-wikilink]]
```
````

请注意，GeoJSON按照提供的顺序绘制。如果一个较小的文件与一个较大的文件重叠，您可能无法与其进行交互。

特别大或大量的GeoJSON文件可能会减慢初始渲染速度。

### 链接到笔记

GeoJSON文件可以通过在末尾添加`|[[]]`来链接到一个笔记。

**请注意，在链接到笔记时需要提供别名。**

### 样式和颜色

可以在地图的代码块中使用`geojsonColor`参数来定义GeoJSON要素的默认颜色。该颜色必须是有效的CSS颜色。

此外，地图将尝试读取为GeoJSON要素定义的样式属性以应用样式。样式应该使用[MapBox SimpleStyle规范](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0)来定义。

### 工具提示

当鼠标悬停时，地图将尝试读取GeoJSON要素的标题以显示工具提示。该标题应该在GeoJSON要素属性的`title`、`description`或`name`字段中定义。

GPX，即GPS交换格式，文件可以通过使用`gpx`参数将其添加到地图中，类似于将GeoJSON文件添加到地图中的方式。

> 想要在Obsidian中显示您的Apple Health锻炼数据吗？按照[这些](https://support.apple.com/guide/iphone/share-health-and-fitness-data-iph27f6325b2/ios)步骤操作，然后将导出的GPX文件添加到您的保险库中，并在地图中使用它们！

````
```leaflet
gpx: [[GPX_File.gpx]]
```
````

或者

````
```leaflet
gpx:
  - [[GPX_File.gpx]]
  - [[GPX_File 2.gpx]]
```
````

特别大或大量的GPX文件可能会减慢渲染速度。

### GPX 标记点

默认情况下，地图不会显示起点、终点或定义的途经点的标记点。可以通过使用 `gpxMarkers` 参数告诉地图使用在设置中定义的标记点类型：

````
```leaflet
gpx: [[GPX_File.gpx]]
gpxMarkers:
  start: start_marker_type
  waypoint: waypoint_marker_type
```
````

### GPX数据

GPX文件被解析为可以在地图上显示为热线的数据点。单击GPX路线将打开一个控制框，可以在其中选择这些数据点。将鼠标悬停在轨迹上的某个点上将显示该特定点的信息。

目前，从GPX文件解析出的数据包括：

1. 步频
2. 海拔
3. 心率
4. 速度

如果文件中缺少其中任何一项，将无法选择该选项。

## 在代码块中定义的对象

可以使用以下语法直接在代码块中定义标记和覆盖物：

| 类型    | 语法                                                                                  |
| ------- | ------------------------------------------------------------------------------------- |
| 标记    | `marker: <type*>,<latitude>,<longitude>,<link*>,<description*>,<minZoom*>,<maxZoom*>` |
| 覆盖物  | `overlay: [<color*>, [<latitude, longitude>], <radius*>, <description*>]`             |

可以定义任意数量的对象，但是_这些对象都不能进行编辑_。如果需要对这些对象进行更改，必须编辑代码块。

标记链接可以定义为 Obsidian 的内部链接。

> \*: 这些参数是可选的，可以在定义中留空。
> 例如，`marker: ,25,25,,,3` 将使用默认的标记类型，纬度和经度为 25，没有链接，没有描述，最小缩放级别为 3，没有最大缩放级别。

**这些对象不会包含在导出的数据中。**

标记文件、标记文件夹、标记标签和链接标记

这些参数允许您直接从指定的笔记文件中创建标记。

在代码块中定义这些参数的数量没有限制；所有找到的文件都将被解析以获取定义的标记。

请注意，在我实现某种形式的缓存之前，定义大量的标记文件可能会影响性能。

#### 注意事项前置元数据

`markerFile`、`markerFolder`、`markerTag`、`filterTag`、`linksTo`和`linksFrom`参数告诉插件“在哪里查找笔记”。笔记本身通过使用笔记前置元数据标签来确定如何创建标记。

从笔记创建的所有标记都会自动将其链接设置为该笔记。

| 前置元数据标签 | 用途                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------- |
| location        | 在此位置创建一个标记。如果`coordinates`参数指向此笔记，也会使用此位置。                           |
| mapmarker       | 使用此标记类型创建使用`location`创建的标记。可选。                                               |
| mapzoom         | 从此笔记创建的标记将其缩放断点设置为`[min, max]`。可选。                                         |
| mapmarkers      | 要创建的标记数组。有关语法，请参见下文。                                                       |
| mapoverlay      | 要创建的覆盖层数组。有关语法，请参见下文。                                                       |

mapmarker参数可用于定义创建的标记的类型。这可以是以下两种情况之一：

1. 设置中给出的标记类型的名称。
2. 一个定义，定义了图标名称、颜色以及是否将图标叠加在默认标记类型上。

示例：

```
mapmarker: event    # 在设置中创建了一个名为event的标记类型。

# OR

mapmarker:
  icon: user        # Font Awesome图标名称。
  color: 00ff00     # 十六进制颜色字符串。可选。
  layer: false      # 是否叠加。可选。

##### mapmarkers

`mapmarkers`参数可用于在地图上定义任意数量的标记。这不需要设置`location`标签。

使用`mapmarkers`定义的标记应具有以下语法：

```
---
mapmarkers:
  - [<type>, [<latitude>, <longitude>], <optional description>, <optional minZoom>, <optional maxZoom>]
  - [<type>, [<latitude>, <longitude>], <optional description>, <optional minZoom>, <optional maxZoom>]
  - ...
---
```

##### mapoverlays

`mapoverlay`参数可用于定义在地图上显示的任意数量的覆盖层。这不需要设置`location`标签。

使用`mapoverlay`定义的标记应具有以下语法：

```
---
mapoverlay:
  - [<color>, [<latitude>, <longitude>], <radius> <unit?>, <optional description>]
  - [<color>, [<latitude>, <longitude>], <radius> <unit?>, <optional description>]
  - ...
---
```

如上所示，覆盖层的半径应使用`<radius> <unit>`（例如`100 miles`）指定。如果未提供`<unit>`，它将默认为`meters`。请参阅[此处](src/utils/units.ts)以获取支持的单位列表。

#### 标记文件

可以使用以下语法在代码块中定义标记文件：

`markerFile: [[WikiLinkToFile]]` **或**
`markerFile: Direct/Path/To/Note`

#### 标记文件夹

可以使用以下语法在代码块中定义标记文件夹：

`markerFolder: Direct/Path/To/Folder`

这将默认包括所有子文件夹中的笔记。

要限制子文件夹的数量，请在路径后面添加一个'/'（斜杠）以包括每个子文件夹级别。

#### 标记标签

如果您已安装[Dataview插件](https://github.com/blacksmithgu/obsidian-dataview)，还可以使用以下语法从标签创建标记：

`markerTag: <tag>, <tag>, ...`

**请注意：该插件使用YAML解析代码块，因此除非用引号括起来（`"#tag"`），否则使用`#`定义的标签将无法工作。**

每个`markerTag`参数将返回具有该参数中定义的所有标签的笔记。如果您要查找包含任何列出的标签的文件，请使用单独的`markerTag`参数。

示例：

```
markerTag:
  - tag1
  - [tag2, tag3]
  - tag4
```

上述示例将解析：

1. 任何包含`tag1`的笔记。
2. 任何同时包含`tag2`和`tag3`的笔记。
3. 任何包含`tag4`的笔记。

> 注意：即使一个笔记符合多个条件，也只会解析一次。

#### 过滤标签

可以使用`filterTag`参数对返回的文件进行过滤。该参数使用与`markerTag`相同的语法，但不是_添加_文件，而是要求使用`markerFile`、`markerFolder`或`markerTag`找到的每个文件都匹配一组标签。

#### 链接

`linksTo` 和 `linksFrom` 参数使用 DataView 的链接索引来查找与参数中指定的笔记相关联的笔记，以构建不可变标记，使用与上述相同的语法。

> 请注意：`links` 参数都需要安装 [Dataview 插件](https://github.com/blacksmithgu/obsidian-dataview)。

可以使用 YAML 数组语法指定多个文件：

```
linksTo: [[文件]]
linksFrom:
    - [[文件 1]]
    - [[文件 2]]
```

示例

```
markerFile: [[MarkerFile]]
```

将会

1. 加载MarkerFile.md笔记文件，并且如果它有正确的frontmatter字段，就会创建一个标记。

```
markerFile: [[MarkerFile]]
markerFolder: People and Locations
```

将会

1. 加载MarkerFile.md笔记
2. 在People and Locations文件夹中查找其他笔记

```
markerTag: #location, #friends
```

将会

1. 查找所有同时带有`#location`和`#friends`标签的笔记，并使用它们的frontmatter创建标记

```
markerFolder: People and Locations
markerFolder: Interests/Maps of the World
markerTag: #people, #friends
markerTag: #Paris
```

将会搜索满足以下条件的笔记：

1. 在People and Locations文件夹或Interests/Maps of the World文件夹中的笔记，并且
2. 同时包含标签#people和#friends，或者标签#Paris

## 距离

在地图或标记上按下<kbd>Shift</kbd>或<kbd>Alt</kbd>键，然后再次按下<kbd>Shift</kbd>或<kbd>Alt</kbd>键，将显示两点之间的距离。

距离以米为单位显示，除非在地图块中指定了比例因子和/或单位。

地图左下角的控制框显示最后计算的距离。将鼠标悬停在上面将在地图上显示距离线，点击它将缩放地图到这些坐标。

暗黑模式

`darkMode`参数将使用CSS反转地图的颜色。这是通过将`.dark-mode` CSS类应用于地图瓦片图层，并使用以下CSS来实现的：

```css
.leaflet-container .dark-mode {
    filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(
            0.3
        ) brightness(0.7);
}
```

在自定义代码片段中覆盖此CSS将允许自定义暗黑模式的外观。有关CSS `filter`属性的参考，请参阅[此文章](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)。

## 设置

### 标记 CSV 文件

标记数据可以导出为 CSV 文件。该数据的格式如下：

| 列1      | 列2         | 列3      | 列4         | 列5          | 列6           | 列7      |
| -------- | ----------- | -------- | ----------- | ------------ | ------------- | -------- |
| 地图 ID   | 标记类型    | 纬度     | 经度        | 标记链接     | 标记图层      | 标记 ID   |

如果留空，标记类型将默认为 "default"。

如果地图只有一个图层，则标记图层可以留空。

对于新的标记，标记 ID 可以留空。

以这种格式的标记数据可以重新导入。该功能仍在开发中，可能无法按预期工作。

### 默认标记工具提示行为

设置此项将使标记工具提示默认为此行为。

您可以在标记的右键上下文菜单中覆盖此行为。

### 默认启用绘制模式

如果禁用，则除非在地图块中将`draw`参数设置为true，否则绘制控制器将不会添加到地图中。

### 显示笔记预览

在悬停链接标记时使用Obsidian的笔记预览。

请注意，必须启用Obsidian页面预览核心插件才能使用此功能。

### 显示覆盖工具提示

如果禁用，覆盖工具提示将不会默认显示。可以在覆盖上下文菜单中按覆盖进行更改。

目前无法在不可变覆盖上更改此设置。

在打开此设置后，当在地图上的任何位置按下<kbd>Ctrl</kbd> + <kbd>Shift</kbd>并点击时，将会将纬度和经度坐标复制到剪贴板上。

纬度和经度

如果没有提供纬度和经度，地图将打开到这个默认的纬度和经度。

### 默认地图标记

默认标记设置允许您定义一个可以在其上叠加其他标记的标记。如果没有添加其他标记，右键单击地图将放置此标记。

#### 标记图标

要使用的[Font Awesome Free](https://fontawesome.com/icons?d=gallery&p=2&s=solid&m=free)图标名称。

标记颜色

用于选择标记颜色的颜色选择器。

#### 图层基准标记

默认情况下，额外的标记将叠加在此标记之上。可以在特定的额外标记上覆盖此设置。

### 附加标记

可以添加附加的标记类型，可以从地图上的上下文菜单中进行选择。

创建一个额外的标记

添加一个新的标记会显示一个新窗口，可以在其中添加新的标记参数。

| 参数             | 描述                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| 标记名称         | 在添加标记时显示在上下文菜单中（例如，位置、事件、人物）                                               |
| 标记图标         | 使用[Font Awesome Free](https://fontawesome.com/icons?d=gallery&p=2&s=solid&m=free)图标名称           |
| 上传图片         | 上传自定义图片以用作标记图标，而不是使用Font Awesome图标                                              |
| 图层图标         | 将此图标叠加在基本标记上。如果关闭，则使用图标本身。                                                  |
| 图标颜色         | 覆盖默认图标颜色                                                                                      |
| 关联标签         | 如果文件具有此标签且未设置`mapmarker`，则不可更改的标记将使用此标记类型。                               |

如果图层图标打开，可以通过点击和拖动来移动图标，以自定义图标的叠加位置。如果在移动图标时按住<kbd>Shift</kbd>键，它将自动对齐到中线。

#### 创建本地标记类型

新的标记类型也可以在`markers.json`文件中定义。这些标记类型将对与json文件相同目录中的任何笔记可用。json文件应包含一个Icon对象数组，详见[Icon接口](https://github.com/javalent/obsidian-leaflet/blob/1fa4c237deceff1def883872fdad3822f9bff560/types/saved.d.ts#L7)。

使用图像作为标记图标

在创建额外的标记时，可以上传图像作为标记图标，而不是选择Font Awesome图标。

点击“上传图像”按钮并选择要使用的图像。插件将加载图像并将其缩放为`24px x 24px`。一旦上传了标记的图像，就无法编辑它。

如果已经上传了图像，则选择Font Awesome图标将删除该图像。

#### 关联标签

将标签与标记类型关联。

如果使用`markerFile`、`markerFolder`或`markerTag`找到了一个笔记，插件将首先使用前置元数据`mapmarker`参数来确定标记类型。如果没有设置该参数，则将使用笔记的标签来查找与其中一个标签关联的标记类型。

标签按照标记类型的定义顺序进行搜索。

# 插件集成：行动追踪器

如果已安装[行动追踪器](https://github.com/valentine195/obsidian-initiative-tracker)插件，可以从行动追踪器视图中打开战斗地图。

该战斗地图将预加载加载的战斗中的任何活动生物作为标记。可以为PC和NPC设置默认的标记类型，并且还可以进一步设置每个个体生物将使用的标记类型。

战斗地图将与行动追踪器战斗同步其状态-当生物被添加、移除等时，它们的状态将在地图上更新。

# 版本历史

请参阅[更新日志](https://github.com/valentine195/obsidian-leaflet-plugin/blob/master/CHANGELOG.md)。

# 安装

从Obsidian v0.9.8开始，您可以通过以下步骤在Obsidian中激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索此插件
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

## 来自GitHub

- 从GitHub存储库的Releases部分下载最新版本
- 从zip文件中提取插件文件夹到您的vault的插件文件夹：`<vault>/.obsidian/plugins/`
  注意：在某些机器上，`.obsidian`文件夹可能是隐藏的。在MacOS上，您可以按`Command+Shift+Dot`来在Finder中显示该文件夹。
- 重新加载Obsidian
- 如果提示安全模式，您可以禁用安全模式并启用插件。
  否则，请前往设置，第三方插件，确保安全模式关闭，并从那里启用插件。

您可以按照相同的步骤来更新插件。

# 警告

该插件没有稳定性保证，可能会导致数据丢失的错误。
请确保您有自动备份。

# TTRPG插件

如果您正在使用Obsidian来运行/计划TTRPG，您可能会发现我的其他插件很有用：

- [5e Statblocks](https://github.com/valentine195/obsidian-5e-statblocks/) - 在笔记中创建5e风格的状态块
- [Dice Roller](https://github.com/valentine195/obsidian-dice-roller) - 在笔记中掷骰子和重新掷骰子
- [Initiative Tracker](https://github.com/valentine195/obsidian-initiative-tracker) - 在Obsidian中查看倡议追踪器





