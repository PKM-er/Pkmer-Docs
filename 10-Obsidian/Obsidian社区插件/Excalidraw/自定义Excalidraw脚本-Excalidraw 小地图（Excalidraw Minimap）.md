---
uid: 20260419111030
title: 自定义 Excalidraw 脚本 -Excalidraw 小地图（Excalidraw Minimap）
tags: [Excalidraw脚本]
description: Excalidraw 小地图（Minimap） 会在 Excalidraw 画布角落生成一个可交互的小地图，用来快速掌握整张图的结构分布，并直接完成定位、拖拽视口和缩放操作。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20260419111156
---

# 自定义 Excalidraw 脚本 -Excalidraw 小地图（Excalidraw Minimap）

![260418_自定义Excalidraw脚本：Excalidraw 小地图（Excalidraw Minimap）](https://cdn.pkmer.cn/images/File-20260418092018901.png!pkmer)

### 脚本介绍

`Excalidraw 小地图（Minimap）` 会在 Excalidraw 画布角落生成一个可交互的小地图，用来快速掌握整张图的结构分布，并直接完成定位、拖拽视口和缩放操作。

主要能力：

- 实时概览当前画布中的主要元素分布，自动绘制当前视口范围
- 直接在小地图中点击任意区域，快速把主画布移动到目标位置
- 支持拖拽小地图中的视口框，连续平移主画布
- 支持滚轮围绕鼠标位置缩放，便于在局部与全局之间切换
- 点击元素区域时可选择“移动到该位置”或“平滑缩放聚焦到该元素”
- 内置设置面板，可调整最大宽高、四角停靠位置、边距、自适应尺寸等参数

适合用于内容很多、画布范围很大的 Excalidraw 文件，减少来回缩放和拖动画布的成本。脚本再次运行时会直接关闭当前 minimap，便于按需开启或退出。

### 效果演示

![260418_自定义Excalidraw脚本：Excalidraw 小地图（Excalidraw Minimap）](https://cdn.pkmer.cn/images/File-20260418090729396.gif)

### 安装链接

复制下述代码，粘贴到 md 空白文档，阅读模式下会显示为按钮，点击安装即可。

````
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/ExcalidrawMinimap.md
```
````

### 拓展说明

配合Slideshow演示效果更佳，可以配置个Commander按钮在首页，然后通过CSS设置只在Excalidraw视图下显示该命令按钮：

```css
.workspace-leaf-content:not([data-type="excalidraw"]) [aria-label *="ExcalidrawMinimap"] {
  display: none;
}
```

演示效果：

![260418_自定义Excalidraw脚本：Excalidraw 小地图（Excalidraw Minimap）](https://cdn.pkmer.cn/images/File-20260419191446207.png!pkmer)