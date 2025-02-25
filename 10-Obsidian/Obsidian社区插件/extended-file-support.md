---
uid: 20250225194739
title: Obsidian 插件：Etended File Support 增强 Obsidian 图像文件查看浏览能力
tags: ['状态栏', '任务管理', '效率工具', 'obsidian插件']
description: Obsidian 插件：Etended File Support 增强 Obsidian 图像文件查看浏览能力
author: OS
type: auto
draft: false
editable: false
modified: 20250225195907
---

# Obsidian 插件：Etended File Support 增强 Obsidian 图像文件查看浏览能力

## 概述

这个插件为 Obsidian 增加了针对图形文件的查看浏览能力。

> [!Note] 插件名片
> - 插件名称：Extended File Support
> - 插件作者：Nick de Bruin
> - 插件说明：增加对各种文件类型的文件支持。允许查看和嵌入这些文件类型。包括：.kra, .psd, .obj, .glb, .gltf 等等。
> - 插件分类：[' 文件管理 ', ' 效率工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/Nick-de-Bruin/obsidian-extended-file-support)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?extended-file-support)

## 效果&特性

- 当前支持的文件类型是：
	- .KRA（在 Krita 中制作的文件）
	- .psd（Photoshop，其他视觉程序）
	- .ai（Adobe Illustrator）
	- .gltf，.glb（3D 场景格式）
	- .OBJ（3D 对象格式）
	- .stl（3D 格式，通常用于 3D 打印）

## 使用

- 嵌入文件方式
	- 可以添加以下设置为！`[[file.ext | setter1 = value; sett2 = value]]]`
	- 或 `![setter1 = value; setter2 = value]（file.ext）`。
- 所有文件：
	- `width` and `height`，遵循将图像嵌入黑曜石的方式，并允许更改嵌入的宽度和高度。
- 3D 文件（.obj，.gltf，.glb，.stl）：
	- spin = true 或 spin = false，覆盖是否动画 3D 模型的默认设置。
	- campos = x，y，z，其中 x，y 和 z 是相机应具有的坐标。
	- cam lookat = x，y，z，其中 x，y 和 z 是相机应该查看的坐标。

请注意，通过启用旋转/动画，`CamPos` 将无法使用，并且 `camLookAt` 可能没有所需的行为，因为相机可以移动。此外，加载中的 3D 对象放在 `(0、0、0)` 上，并缩放以适合单位立方体。

- .AI 文件：
	- `scale=number`，将覆盖 .ai 文件缩放的默认设置。可能会导致高负载时间，影响性能。
