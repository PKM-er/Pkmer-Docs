---
uid: 20260419111233
title: 自定义 Excalidraw 脚本 - 更新裁剪图片到原文件（Update Cropped Image To Local）
tags: [Excalidraw脚本]
description: 在 Excalidraw 里对图片做「裁剪」时，默认只是画布上的显示区域变了，库里的原图文件并不会被改写。如果你希望把当前裁剪结果写回附件本身（并去掉元素上的 crop，让画布与文件内容一致），可以用本脚本一键处理。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20260419111316
---

# 自定义 Excalidraw 脚本 - 更新裁剪图片到原文件（Update Cropped Image To Local）

![260419_自定义Excalidraw脚本：更新裁剪图片到原文件（Update Cropped Image To Local）](https://cdn.pkmer.cn/images/File-20260419110109197.webp!pkmer)

### 脚本介绍

在 Excalidraw 里对图片做「裁剪」时，默认只是画布上的显示区域变了，**库里的原图文件并不会被改写**。如果你希望把当前裁剪结果**写回附件本身**（并去掉元素上的 `crop`，让画布与文件内容一致），可以用本脚本一键处理。

**适用场景**：已在画布上裁好构图，想把同一张本地图永久替换成裁切后的版本，减少重复调裁剪框、也方便在库外打开时看到的就是最终画面。

**使用方式**：在 Excalidraw 绘图中选中一张或多张**已设置裁剪**的图片，运行脚本 → 确认张数 → 等待完成提示。**操作不可逆**（直接覆盖原文件），建议重要素材先备份。

**依赖与前提**：

- 需安装并启用 **QuickAdd**（用于「是/否」确认；未启用时会 `Notice` 提示并中止）。
- 图片需能解析到 **库内真实文件**（通过 Excalidraw 的 `fileId` 关联到路径）；找不到文件或没有 `crop` 的项会跳过并提示。

### 效果演示

![260419_自定义Excalidraw脚本：更新裁剪图片到原文件（Update Cropped Image To Local）](https://cdn.pkmer.cn/images/File-20260419105728340.webp!pkmer)

### 安装链接

复制下述代码，粘贴到 md 空白文档，阅读模式下会显示为按钮，点击安装即可。

````
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/UpdateCroppedImageToLocal.md
```
````
