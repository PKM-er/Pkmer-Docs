---
uid: 2023120522274155
title: Obsidian 插件：【Readme】Zhongwen Block
tags: ['obsidian插件', 'readme']
description: 为中国学习者提供具有特色的代码块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Zhongwen Block

> [!Note] 插件名片
> - 插件名称：Zhongwen Block
> - 插件作者：Kodai Matsumoto
> - 插件说明：为中国学习者提供具有特色的代码块。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/0918nobita/obsidian-zhongwen-block)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zhongwen-block)

## 概述

为中国学习者提供具有特色的代码块。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/0918nobita/obsidian-zhongwen-block/main/README.md)
> 

---

## Readme(翻译）

下面是 [[zhongwen-block]] 插件的自述翻译


# 黑曜石中文代码块

一个为中文学习者提供功能的黑曜石插件，可以在代码块中为每个中文句子添加对应的拼音注释。

为了帮助你记住发音，只有在鼠标悬停在中文句子上时，才会显示每个拼音。

编辑视图：

````markdown
```zh-cn
他先去医院，再去学校。
```
彼女はまず病院に行って、次に学校に行きます。
````

阅读视图：

（默认）

![阅读视图（默认）](images/reading-view-default.png)

（悬停时）

![阅读视图（悬停时）](images/reading-view-on-hover.png)
## 设置
始终显示拼音

默认值：`false`

当设置为`true`时，每个拼音将从开头显示。
## 归属

- Zhongwen Block依赖于[pinyin-pro](https://github.com/zh-lx/pinyin-pro)来将中文转换为拼音。
开发
### 构建

```bash
$ npm run build
```
### Lint

```bash
$ npm run lint
```
### 格式化

```bash
$ npm run format
```



