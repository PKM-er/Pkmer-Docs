---
uid: 2023102611080073
title: Obsidian 插件：【Readme】Image Converter
tags: ['obsidian插件', 'readme']
description: 通过拖放或粘贴到笔记中，将图像从一种格式转换、压缩和调整大小为另一种格式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Image Converter

> [!Note] 插件名片
> - 插件名称：Image Converter
> - 插件作者：xRyul
> - 插件说明：通过拖放或粘贴到笔记中，将图像从一种格式转换、压缩和调整大小为另一种格式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/xryul/obsidian-image-converter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-converter)

## 概述

通过拖放或粘贴到笔记中，将图像从一种格式转换、压缩和调整大小为另一种格式。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/xRyul/obsidian-image-converter/master/README.md)
>

---

## Readme(翻译）

下面是 [[image-converter]] 插件的自述翻译

# ObsidianMD 的图像转换器

<https://github.com/xRyul/obsidian-image-converter/assets/47340038/63a0646b-29ec-4055-abfc-55d31e07b2f7>

## 特点

- 自动将拖放/粘贴的图像转换为 WEBP、JPG 或 PNG 格式。
- 自动将 HEIC 和 TIF 文件转换为 WEBP、JPG 或 PNG 格式。
- 通过指定 1-100 之间的期望质量值来减小图像文件大小。
- 自动重命名转换后的图像。
- 根据 6 种模式自动调整图像大小：适应、填充、最长边、最短边、高度、宽度
  - 通过最长边调整图像大小

  <https://github.com/xRyul/obsidian-image-converter/assets/47340038/6c287f86-08b8-4483-800d-040dd5207341>

- 可以通过右键单击上下文菜单将图像复制到剪贴板
  - <img src="https://github.com/xRyul/obsidian-image-converter/assets/47340038/2034a444-cd49-4ce0-af98-745694ba4986" width="600px">
- 可以通过右键单击上下文菜单调整原始图像的大小
  - <img src="https://github.com/xRyul/obsidian-image-converter/assets/47340038/3367b41c-63fa-4a1c-a616-8561e467eef7" width="600px">
- 可以通过拖动图像边缘调整图像大小
  - <img src="https://github.com/xRyul/obsidian-image-converter/assets/47340038/5724c6e9-19d4-4eaf-a559-1168f6557a14" width="600px">
- 可以通过按住 Shift 键 + 鼠标滚轮调整图像大小

支持的图像格式：WEBP、JPG、PNG、HEIC、TIF

图像压缩的快速摘要

推荐的导出设置是将 WEBP 设置为质量 75。这是大多数类型图像的最佳设置。

- 第一名。JPG 转 WEBP，质量为 50：PSNR = 31.16，压缩比 = -85.9%，文件大小 = 7,482 KB
- 第二名。PNG 转 WEBP，质量为 50：PSNR = 29.23，压缩比 = -93.5%，文件大小 = 1,520 KB
- 第三名。WEBP 转 JPG，质量为 50：PSNR = 32.65，压缩比 = -93%，文件大小 = 2,000 KB
- 第四名。PNG 转 JPG，质量为 50：PSNR = 28.62，压缩比 = -92.4%，文件大小 = 1,776 KB
- 第五名。JPG 转 JPG，质量为 50：PSNR = 29.25，压缩比 = -85.8%，文件大小 = 5,926 KB

### 示例 1 - 将原始图像转换为质量为 1 的 WEBP 和 JPG 进行比较

<https://github.com/xRyul/obsidian-image-converter/assets/47340038/52ffd607-e92c-4b08-bde4-8a389fd992fc>

### 示例 2 - 将原始图像转换为质量为 1 的 WEBP 和 JPG 进行比较

<https://github.com/xRyul/obsidian-image-converter/assets/47340038/6978be85-6f83-47ba-a9df-1f5864c6fbcb>

### 示例 3 - WEBB 100 与 JPG 100 的比较 > WEBB 1 与 JPG 1

<https://github.com/xRyul/obsidian-image-converter/assets/47340038/aa62380e-b977-42c5-8a2f-71cb09a811b7>

### 比较

#### 将一种图像格式转换为另一种的文件大小

| 从/到 | WEBP | JPG | PNG |
| --- | --- | --- | --- |
| JPG | 64,122 KB (100) <br> 7,482 KB (50) <br> 480 KB (1)|52,864 KB (100)<br>5,926KB(50)<br>363KB(1)|96,556KB(100)<br>44,702KB(50)<br>9,072KB(1)|
| PNG |21,812KB(100)<br>1,520KB(50)<br>401KB(1)|14,744KB(100)<br>1,776KB(50)<br>163KB(1)|29,830KB(100)<br>12,161KB(50)<br>3,226KB(1)|
| WEBP |30,960KB(100)<br>1,414KB(50)<br>353KB(1)|19,236KB(100)<br>2,000KB(50)<br>189KB(1)|43,154KB(100)<br>15,327KB(50)<br>1,806KB(1)|

- 括号中的数字表示转换的质量。

#### 转换后的文件大小差异百分比

通过比较转换后的文件大小与正在转换的图像的原始文件大小来计算百分比变化。

| 从/到 | WEBP | JPG | PNG |
| --- | --- | --- | --- |
| JPG | +21.4% (100)PSNR: 45.85 <br> -85.9% (50)PSNR: 31.16 <br> -99.1% (1)PSNR: 26.28|+29.3%(100)<br>-85.8%(50) PSNR:29.25<br>-99.3%(1) PSNR:23.2|+135.9%(100)<br>+8.9%(50)<br>-78%(1)|
| PNG |-6.9%(100)PSNR: 34.78<br>-93.5%(50)PSNR: 29.23<br>-98.3%(1)PSNR: 23.52|-37%(100)PSNR: 35.07<br>-92.4%(50) PSNR: 28.62<br>-99.3%(1)PSNR: 19.52|+27.4%(100)<br>-48%(50)<br>-86.2%(1)|
| WEBP |+8.8%(100)PSNR: 38.46<br>-95%(50)PSNR: 32.72<br>-98.8%(1)PSNR: 27.98|-32.4%(100)PSNR: 39.04<br>-93%(50)PSNR: 32.65<br>-99.3%(1)PSNR: 22.79|+51.8%(100)<br>-46.1%(50)<br>-93.6%(1)|

#### PSNR 和质量损失

下表显示了每次转换时我们损失的质量。PSNR 值越低，图像质量越低：

| 从/到   | WEBP        | JPG         | PNG |
| ------- | ----------- | ----------- | --- |
| JPG     | 45.85 (100) |             |     |
|         | 31.16 (50)  | 29.25 (50)  |     |
|         | 26.28 (1)   | 23.2 (1)    |     |
| PNG     | 34.78 (100) | 35.07 (100) |     |
|         | 29.23 (50)  | 28.62 (50)  |     |
|         | 23.52 (1)   | 19.52 (1)   |     |
| WEBP    | 38.46 (100) | 39.04 (100) |     |
|         | 32.72 (50)  | 32.65 (50)  |     |
|         | 27.98 (1)   | 22.79 (1)   |     |

### 结论

- 根据以上测试，使用**WEBP 作为图像压缩的目标格式可以显著减小文件大小，同时保持高质量的图像**。
- WEBP 通常提供最佳的压缩比，从 JPG 和 PNG 转换时，所有质量级别（100、50 和 1）的文件大小最小。
- 从 WEBP 转换到其他格式会导致更大的文件大小，表明 WEBP 在压缩图像数据方面更高效。
- PSNR 值表明，压缩图像的质量通常很高，在大多数 50 质量的转换中，PSNR 值都超过 30。
- 压缩百分比的值显示，通过转换为 WEBP 或 JPG 的较低质量级别，可以实现文件大小的显著减小。
- 压缩百分比的值显示，将 PNG 转换为 JPG 或 WEBP，质量为 50 时，文件大小显著减小，在两种情况下都可以减小超过 90%。
- 从 JPG 转换为 PNG 在任何质量级别上都会增加文件大小，表明 PNG 在压缩图像数据方面不如 WEBP 或 JPG 高效。
- 从 PNG 转换为 JPG 或 WEBP，质量为 50 时，PSNR 值也相对较高，表明尽管文件大小大幅减小，压缩图像的质量仍然很好。

## 待办事项

- [修复] 第一次拖放时没有活动文件。
- 添加对 HEIC、TIF、PSD、AVIF 的支持。
- 添加基本的调整/编辑功能。
    - 添加自动背景去除
    - 添加具有特定边距的自动裁剪
- 添加更好的压缩算法：mozJPEG、PngQUANT、OxiPNG、WEBP v2、JPEG XL~。
- 添加用户选择/定义自定义新文件名的功能。
- 改进通知以更清晰地说明正在发生的事情。
- 提高大文件（100MB+）的转换速度。

## 安装方法

1. 从此存储库下载 `main.js`、`styles.css` 和 `manifest.json` 文件。
2. 在 `VaultFolder/.obsidian/plugins/` 目录下创建一个名为 `obsidian-image-converter` 的新文件夹。如果插件文件夹不存在，则手动创建它。
3. 将下载的文件移动到 `/obsidian-image-converter` 文件夹中。
4. 在 ObsidianMD 中启用该插件。

# 鸣谢

- 本仓库受到 <https://github.com/musug/obsidian-paste-png-to-jpeg> 的启发。musug 为该项目打下了惊人的基础，但不幸的是，他已经失踪，没有修复一些重大问题。因此，这是一个尝试来重振该项目。



