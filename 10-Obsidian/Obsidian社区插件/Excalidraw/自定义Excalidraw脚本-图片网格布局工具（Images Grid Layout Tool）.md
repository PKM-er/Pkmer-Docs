---
uid: 20260419111328
title: 自定义 Excalidraw 脚本 - 图片网格布局工具（Images Grid Layout Tool）
tags: [Excalidraw脚本]
description: Images Grid Layout Tool（图片网格布局工具） 是面向 Obsidian Excalidraw 的自定义脚本：在画布上多选图片元素后运行，通过弹窗把当前选区内的图片按统一网格重新排布，适合整理截图、参考图、素材拼版等需要「横平竖直、间距一致」的场景。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20260419111412
---

# 自定义 Excalidraw 脚本 - 图片网格布局工具（Images Grid Layout Tool）

![260419_自定义Excalidraw脚本：图片网格布局工具（Images Grid Layout Tool）](https://cdn.pkmer.cn/images/File-20260419110041358.webp!pkmer)

### 脚本介绍

**Images Grid Layout Tool（图片网格布局工具）** 是面向 Obsidian Excalidraw 的自定义脚本：在画布上**多选图片元素**后运行，通过弹窗把当前选区内的图片按**统一网格**重新排布，适合整理截图、参考图、素材拼版等需要「横平竖直、间距一致」的场景。

**使用方式简述**

1. 在 Excalidraw 画布里框选或点选**仅图片**（脚本会过滤非图片元素）。
2. 从脚本库或命令面板运行本脚本，弹出「排列图片参数」窗口。
3. 调整**行数 / 列数**（滑块与 ±）、**水平间距 / 垂直间距**；满意后点击 **「排列图片」** 写入画布并关闭弹窗；**「关闭」** 则放弃本次弹窗操作（若已开启实时预览，画布可能已被预览改动，需自行撤销）。

**参数与行为说明**

- **行数与列数**：二者联动，保证网格能容纳当前选中张数；默认按接近正方形网格估算初始行列。
- **间距**：以像素为单位；单元格宽度按「当前选区内图片的最大宽度 + 水平间距」、高度按「最大高度 + 垂直间距」对齐，左上角以选区**整体包围盒的左上角**为基准，避免整块布局漂移。
- **排序规则**：重排前会按画面上大致「从上到下、从左到右」的顺序（纵坐标差大于约 10px 视为换行）排序后再依次填入网格，便于在散乱摆放后仍按视觉顺序成表。

**实时预览（可选）**

弹窗**底部右侧**提供 **「实时预览」** 复选框，默认关闭。勾选后，在调节行列或间距时会以较短防抖间隔**同步更新画布**；取消勾选则停止自动预览。无论是否预览，点击 **「排列图片」** 都会用当前参数**最终应用**一次布局。

### 效果演示

![260419_自定义Excalidraw脚本：图片网格布局工具（Images Grid Layout Tool）](https://cdn.pkmer.cn/images/File-20260419104540623.webp!pkmer)

### 安装链接

复制下述代码，粘贴到 md 空白文档，阅读模式下会显示为按钮，点击安装即可。

````
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/ImagesGridLayoutTool.md
```
````
