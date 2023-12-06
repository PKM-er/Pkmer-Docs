---
uid: 2023120522253781
title: Obsidian 插件：【Readme】Image2LaTEX
tags: ['obsidian插件', 'readme']
description: 将您的图像转换为LaTEX代码。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Image2LaTEX

> [!Note] 插件名片
> - 插件名称：Image2LaTEX
> - 插件作者：Hugo Persson
> - 插件说明：将您的图像转换为 LaTEX 代码。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Hugo-Persson/obsidian-ocrlatex)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image2latex)

## 概述

将您的图像转换为 LaTEX 代码。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Hugo-Persson/obsidian-ocrlatex/master/README.md)
>

---

## Readme(翻译）

下面是 [[image2latex]] 插件的自述翻译

# 关于 🗞️

该扩展程序会获取剪贴板中最新复制的图像，并将其转换为 LaTeX，并将其插入到编辑器中的指定位置。使用键绑定的示例用法请参见下面的 GIF 图片：

![](docs/example.gif)

以下是几个步骤的说明：

1. 我截取了左侧的公式的屏幕截图
2. 我使用键绑定来触发 OCRToLatex
3. 插入了一个加载指示器

# 开始使用 🚀

首先获取一个 API 令牌，见下文。然后进入设置并插入它。完成后，您就可以使用该插件了。尝试将数学公式剪切到剪贴板上，并运行命令“从最后一个图像生成 LaTeX 到剪贴板”。

## 获取 API 令牌 🔐

要使用此插件，您需要在 <https://simpletex.cn> 上创建一个开发者帐户。以下是如何操作：

1. 前往 <https://simpletex.cn/api>
2. 点击 " 前往 API 仪表板 "
3. 创建一个账户
4. 完成后，转到 `用户访问令牌` 并点击 `创建令牌`
5. 复制令牌并粘贴到 Obsidian 设置中 ![](docs/UAT.png)
6. 现在您已经准备好使用此插件了 🥳

# 未来的改进 ✅

- [ ] 转换已粘贴的图片
- [ ] 使用 <https://github.com/lukas-blecher/LaTeX-OCR> 进行自托管版本
归因

感谢以下库和服务使得这个插件成为可能：

- <https://www.npmjs.com/package/node-fetch>
- <https://www.npmjs.com/package/form-data>
- <https://simpletex.cn/>



