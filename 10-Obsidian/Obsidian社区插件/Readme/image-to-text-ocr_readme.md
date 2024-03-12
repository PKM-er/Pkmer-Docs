---
uid: 20240312193744
title: Obsidian 插件：【Readme】Image to text OCR
tags: ['obsidian插件', 'readme']
description: 将笔记中的图像转换为文本。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Image to text OCR

> [!Note] 插件名片
> - 插件名称：Image to text OCR
> - 插件作者：Dario Baumberger
> - 插件说明：将笔记中的图像转换为文本。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dario-baumberger/obsidian-image-to-text-ocr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-to-text-ocr)

## 概述

将笔记中的图像转换为文本。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dario-baumberger/obsidian-image-to-text-ocr/master/README.md)

---

## Readme(翻译）

下面是 [[image-to-text-ocr]] 插件的自述翻译

【机翻】

[![构建和测试](https://github.com/dario-baumberger/obsidian-image-to-text-ocr/actions/workflows/build.yml/badge.svg)](https://github.com/dario-baumberger/obsidian-image-to-text-ocr/actions/workflows/build.yml)

[![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?color=7e6ad6&labelColor=34208c&label=Obsidian%20下载量&query=$['image-to-text-ocr'].downloads&url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json&)](obsidian://show-plugin?id=image-to-text-ocr)

![GitHub 星标](https://img.shields.io/github/stars/dario-baumberger/obsidian-image-to-text-ocr?style=flat)

[![许可证: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/dario-baumberger/obsidian-image-to-text-ocr/blob/master/LICENCE)

# 黑曜石图像转文本

在您的笔记中识别图像上的文本。选择图像并运行命令。识别的文本将附加到您的图像上或将替换您的图像 - 具体取决于命令。

## 命令

| Command                             | Description                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 替换选择                           | 用识别出的文本替换您的图像。根据设置中定义的语言识别文本                                             |
| 替换选择 - 自定义语言               | 用识别出的文本替换您的图像。根据自定义选择识别文本                                                 |
| 追加选择                           | 将识别出的文本追加到您的图像。根据设置中定义的语言识别文本                                         |
| 追加选择 - 自定义语言               | 将识别出的文本追加到您的图像。根据自定义选择识别文本                                               |

![Lorem ipsum动画](https://cdn.pkmer.cn/covers/image-to-text-ocr_2_0.gif!pkmer)

## 支持的图片类型

- .jpg
- .jpeg
- .png
- .gif
- .bmp
- .pbm
- .webp

| 格式                        | 示例                                             | 描述                        |
| ----------------------------- | --------------------------------------------------- | ---------------------------------- |
| Obsidian 图片                | `![[example.png]]`                                  | Obsidian 图片标签                 |
| 包括大小的 Obsidian 图片 | `![[example.png\|300]]`                             | 包括大小的 Obsidian 图片标签  |
| Markdown 图片                | `![Image](https://www.example.com/example.png)`     | Markdown 图片标签                 |
| URL                           | `https://www.example.com/example.png`               | 图片的 URL                    |
| img 标签                       | `<img src="https://www.example.com/example.png" />` | 带有有效 src 属性的 img 标签 |

## 安装

### 社区插件

- 跟随这个链接 [Obsidian Plugin](https://obsidian.md/plugins?id=image-to-text-ocr)
- 或者打开 Obsidian 设置，进入社区插件，浏览 "Image to Text OCR"，点击安装并激活。
- 前往最新的 [Releases](https://github.com/dario-baumberger/obsidian-image-to-text-ocr/releases)
- 下载 `main.js`, `manifest.json`
- 保存到你的 vault `VaultFolder/.obsidian/plugins/obsidian-image-to-text-ocr/`

### 设置

| 名称                 | 描述                                                                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 内容语言             | 选择要识别的语言。默认为英语。如果图像包含特殊字符，更改语言可能会获得更好的结果。                                                     |
| 启用调试日志         | 如果启用，将在控制台中记录更多信息。                                                                                                    |

## 资源

This plugin uses [tesseract.js](https://github.com/naptha/tesseract.js/) to recognize text.

## 贡献

- 如果您有任何遗漏的内容，请随时 [提出问题](https://github.com/dario-baumberger/obsidian-image-to-text-ocr/issues)
- 欢迎提交拉取请求以实现新功能
    - 如果您添加逻辑，请扩展测试



