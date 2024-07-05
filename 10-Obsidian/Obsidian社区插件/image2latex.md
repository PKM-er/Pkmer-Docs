---
uid: 20240604103523
title: Obsidian 插件：Image2LaTEX
tags: ['图片与PDF', '编辑工具', '数据处理', 'obsidian插件']
description: 将您的图像转换为LaTEX代码。
author: Obsidianer,AI
type: auto
draft: false
editable: false
modified: 20240704232953
---

# Obsidian 插件：Image2LaTEX

> [!Note] 插件名片
> - 插件名称：Image2LaTEX
> - 插件作者：Hugo Persson
> - 插件说明：将您的图像转换为 LaTEX 代码。
> - 插件分类：[' 图片与 PDF', ' 编辑工具 ', ' 数据处理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/Hugo-Persson/obsidian-ocrlatex)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image2latex)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/Hugo-Persson/obsidian-ocrlatex/master/README.md)

## 概述

Obsidian 插件允许用户将剪贴板中的数学公式转换为 LaTeX 代码，并将其插入到编辑器中。用户需要先获取 SimpleTex 的 API 令牌，并将其插入到 Obsidian 设置中。之后，用户可以通过命令“从最后一个图像生成 LaTeX 到剪贴板”来使用插件。插件的功能是将数学公式转换为 LaTeX 代码，解决了用户需要手动输入复杂数学公式的问题。使用场景是在编辑器中快速插入数学公式，并且未来将会支持转换已经粘贴的图像。插件的未来改进计划包括支持自托管版本。

## 使用

![Clip_2024-06-23_08-24-43.png](https://cdn.pkmer.cn/images/Clip_2024-06-23_08-24-43.png!pkmer)

- 截图并且复制到剪贴板
- 第一个选项代表复制为内联 Latex
- 第二个选项代表复制为多行 Latex
- 第三个选项代表使用外部 OCR 识别

### SimpleTex 设置

- 点击 [https://simpletex.cn/api](https://simpletex.cn/api)
- 点击“API 控制面板”
- 创建账号
- 创建 Token
- 将 Token 复制回插件设置