---
uid: 20231220112631
title: Obsidian 插件：【Readme】Barcode Generator
tags: ['obsidian插件', 'readme']
description: 生成可定制的条形码到你的笔记中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Barcode Generator

> [!Note] 插件名片
> - 插件名称：Barcode Generator
> - 插件作者：noxonad
> - 插件说明：生成可定制的条形码到你的笔记中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/noxonad/obsidian-barcode-generator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?barcode-generator)

## 概述

生成可定制的条形码到你的笔记中。

![Barcode Generator](https://cdn.pkmer.cn/covers/barcode-generator.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/master/README.md)

---

## Readme(翻译）

下面是 [[barcode-generator]] 插件的自述翻译

黑曜石条形码生成器
==========================

一个用于 [obsidian](https://obsidian.md/) 的插件，可以生成和显示不同变体的条形码。它使用 [JsBarcode](https://github.com/lindell/JsBarcode) 插件来生成条形码。

如果你需要生成 QR 码的插件，可以查看 [这个仓库](https://github.com/rudimuc/obsidian-qrcode)。

安装

### 来自 Obsidian

您可以通过以下步骤在 Obsidian 中激活此插件：

  - 打开设置 > 社区插件；
  - 确保限制模式已关闭；
  - 点击浏览社区插件；
  - 搜索“条形码”；
  - 点击安装；
  - 使用前不要忘记启用它。

### 移动设备

该插件也适用于移动设备。安装过程与桌面设备相同。

### 手动安装

您可以从 [最新版本](https://github.com/noxonad/obsidian-barcode-generator/releases) 手动下载此插件。将 `main.js` 和 `manifest.json` 复制到 `<vault>/.obsidian/plugins/obsidian-barcode` 目录中。然后您可以在 Obsidian 的 `Comunity Plugins` 中启用该插件。

## 用法

要插入默认条形码，您可以使用以下代码块结构：

````markdown
```barcode
内容
```
````

如果您想选择特定类型的条形码，可以输入破折号，然后是条形码类型：

````markdown
```barcode-code128
内容
```
````

注意：更改选项后，页面上的条形码不会刷新。

### 条形码

目前支持以下条形码：

| Codeblock          | 名称       | 描述                                                                                                                                                                                                      | 图片                             |
| ------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| barcode-code128    | Code 128   | 自动选择 Code 128。它的范围是 30 个字符或 60 个数字。                                                                                                                                   | ![code128](https://cdn.pkmer.cn/covers/barcode-generator_2_0.png!pkmer)       |
| barcode-code128a   | Code 128 A | 编码 ASCII 字符 00 到 95（0-9，A-Z 和控制字符），特殊字符和 FNC 1-4。                                                                                                                 | ![code128a](https://cdn.pkmer.cn/covers/barcode-generator_2_1.png!pkmer)     |
| barcode-code128b   | Code 128 B | 编码 ASCII 字符 32 到 127（0-9，A-Z，a-z），特殊字符和 FNC 1-4。                                                                                                                             | ![code128b](https://cdn.pkmer.cn/covers/barcode-generator_2_2.png!pkmer)     |
| barcode-code128c   | Code 128 C | 00-99（用单个码点编码两个数字）和 FNC1。                                                                                                                                                    | ![code128c](https://cdn.pkmer.cn/covers/barcode-generator_2_3.png!pkmer)     |
| barcode-ean13      | EAN-13     | 编码 13 位数字。用于标记产品。最后一位是校验和。如果未指定最后一位，则会自动生成。                                                                | ![ean13](https://cdn.pkmer.cn/covers/barcode-generator_2_4.png!pkmer)           |
| barcode-upc        | UPC        | 编码 12 位数字。用于标记产品。最后一位是校验和。如果未指定最后一位，则会自动生成。                                                                | ![upc](https://cdn.pkmer.cn/covers/barcode-generator_2_5.png!pkmer)               |
| barcode-ean8       | EAN-8      | 编码 8 位数字。最后一位是校验和。如果未指定最后一位，则会自动生成。                                                                                             | ![ean8](https://cdn.pkmer.cn/covers/barcode-generator_2_6.png!pkmer)             |
| barcode-ean5       | EAN 5      | 编码 5 位数字。                                                                                                                                                                                                | ![ean5](https://cdn.pkmer.cn/covers/barcode-generator_2_7.png!pkmer)             |
| barcode-ean2       | EAN 2      | 编码 2 位数字。                                                                                                                                                                                                | ![ean2](https://cdn.pkmer.cn/covers/barcode-generator_2_8.png!pkmer)             |
| barcode-code39     | Code 39    | 编码数字，大写字母和一些特殊字符（`-`，`.`，`$`，`/`，`+`，`%` 和 `space`）                                                                                                | ![code39](https://cdn.pkmer.cn/covers/barcode-generator_2_9.png!pkmer)         |
| barcode-itf4       | ITF-14     | 编码 14 位数字。最后一位是校验和。如果未指定最后一位，则会自动生成。                                                                                           | ![itf14](https://cdn.pkmer.cn/covers/barcode-generator_2_10.png!pkmer)           |
| barcode-msi        | MSI        | 编码数字。                                                                                                                                                                                                  | ![msi](https://cdn.pkmer.cn/covers/barcode-generator_2_11.png!pkmer)               |
| barcode-msi10      | MSI 10     | 编码数字。自动进行模 10 校验。                                                                                                                                                    | ![msi10](https://cdn.pkmer.cn/covers/barcode-generator_2_12.png!pkmer)           |
| barcode-msi11      | MSI 11     | 编码数字。自动进行模 11 校验。                                                                                                                                                    | ![msi11](https://cdn.pkmer.cn/covers/barcode-generator_2_13.png!pkmer)           |
| barcode-msi1010    | MSI 1010   | 编码数字。自动进行模 1010 校验。                                                                                                                                                  | ![msi1010](https://cdn.pkmer.cn/covers/barcode-generator_2_14.png!pkmer)       |
| barcode-msi1110    | MSI 1110   | 编码数字。自动进行模 1110 校验。                                                                                                                                                  | ![msi1110](https://cdn.pkmer.cn/covers/barcode-generator_2_15.png!pkmer)       |
| barcode-pharmacode | Pharmacode | 编码数字从 3 到 131070。                                                                                                                                                                                | ![pharmacode](https://cdn.pkmer.cn/covers/barcode-generator_2_16.png!pkmer) |
| barcode-codabar    | Codabar    | 编码数字和一些特殊字符（`–`，`$`，`:`，`/`，`+`，`.`）。您可以将起始字符和停止字符设置为 `A`，`B`，`C` 或 `D`，但如果未定义起始字符和停止字符，则将使用 `A`。 | ![codabar](https://cdn.pkmer.cn/covers/barcode-generator_2_17.png!pkmer)       |

请注意，某些条形码对内容有一定的限制，如果提供的内容不符合这些限制，条形码将不会显示。有关条形码的更多详细信息，您可以查看 [此资源](https://github.com/lindell/JsBarcode/wiki)。
