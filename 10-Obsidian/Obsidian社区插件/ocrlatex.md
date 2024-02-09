---
uid: 20240130154450
title: Image2LaTEX
tags: [obsidian, latex, math, 公式, ocr]
description: 识别剪切板中的图片中的数学公式并且转换为 latex
author: Huajin
type: other
draft: false
editable: false
modified: 20240130182959
---

# Image2LaTEX

> [!Note] 插件名片
> - 插件名称：Image2LaTEX
> - 插件版本：1.0.3
> - 插件作者：Hugo Persson
> - 插件描述：识别剪切板中的图片中的数学公式并且转换为 latex
> - 插件项目地址：[点我跳转](https://github.com/Hugo-Persson/obsidian-ocrlatex)

- 插件尚未上架，需要在插件的 GitHub 项目的 release 中下载
- 配置简单，十分钟左右能配置完成
- 插件使用体验好，识别速度很快（十秒内识别成功）

> [!warning] 注意
> 插件使用的是 simpletex 的 api，目前 (2024-01-30) 还可以免费使用。未来如果 simpletex 的 api 收费，可以使用另一款同样功能的插件 [[latex-ocr]]

## 效果演示

多行公式

![image.png](https://cdn.pkmer.cn/images/20240130160317.png!pkmer)

矩阵识别

![image.png](https://cdn.pkmer.cn/images/20240130160542.png!pkmer)

手写识别

![image.png](https://cdn.pkmer.cn/images/20240130160726.png!pkmer)

## 配置

该插件实际上是调用了 simpletex 进行的公式识别，因此需要联网使用。并且在使用之前，需要进行一些简单配置

- 在 <https://simpletex.cn/> 中创建一个个人账户
- 点击上方的 API 接口（或者 [API接口 (simpletex.cn)](https://simpletex.cn/api)）

![image.png](https://cdn.pkmer.cn/images/20240130161955.png!pkmer)

点击按钮：前往 API 仪表板

![image.png](https://cdn.pkmer.cn/images/20240130162033.png!pkmer)

点击：用户授权令牌创建一个 token，复制 token

![image.png](https://cdn.pkmer.cn/images/20240130162123.png!pkmer)

粘贴 token 到插件的设置中，配置完成

## 使用方法

- 插件是识别剪切板中的图片，因此需要先复制一张想要识别有公式的图片
- 光标放到笔记中想要插入公式的地方，打开命令面板（快捷键 <kbd>ctrl+p</kbd>）
- 搜索命令 <kbd>Image2laTEX: Generate latex from last image to clipboard</kbd>
- 使用该命令，正文中出现 <kbd>Loading latex...</kbd> 字样
- 等待几秒后公式就会自动插入笔记
