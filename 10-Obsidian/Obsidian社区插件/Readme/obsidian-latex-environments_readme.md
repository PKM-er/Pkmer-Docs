---
uid: 2023080322211642
title: Obsidian 插件：【Readme】Latex Environments
tags: ['数学', 'obsidian插件', 'readme']
description: 允许快速插入和更改数学环境中的Latex环境。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Latex Environments

> [!Note] 插件名片
> - 插件名称：Latex Environments
> - 插件作者：Zach Raines
> - 插件说明：允许快速插入和更改数学环境中的Latex环境。
> - 插件分类：['数学', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/raineszm/obsidian-latex-environments)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-latex-environments)

## 概述

允许快速插入和更改数学环境中的Latex环境。

![Latex Environments](https://cdn.pkmer.cn/covers/obsidian-latex-environments_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/raineszm/obsidian-latex-environments/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-latex-environments]] 插件的自述翻译


# obsidian-latex-environments
[![](https://img.shields.io/github/v/release/raineszm/obsidian-latex-environments?style=for-the-badge)](https://github.com/raineszm/obsidian-latex-environments/releases/latest)
![](https://img.shields.io/github/commits-since/raineszm/obsidian-latex-environments/latest?style=for-the-badge)
![](https://img.shields.io/github/manifest-json/minAppVersion/raineszm/obsidian-latex-environments?color=red&label=Min%20Obsidian%20Version&style=for-the-badge)
![](https://img.shields.io/github/downloads/raineszm/obsidian-latex-environments/total?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](#license)

> 在Obsidian中快速插入和更改数学块中的LaTeX环境。

**内部已在版本0.3.0中进行了重写。请参阅下面的版本0.3.0重写。**

## 安装

如果您使用的是 Obsidian 版本 0.9.8 或更高版本：

1. 打开选项面板
2. 转到“第三方插件”
3. 确保“安全模式”处于关闭状态。（**警告：在使用插件之前，请自行验证其安全性。**）
4. 点击“浏览”，找到“社区插件”
5. 搜索“Latex Environments”
6. 点击“安装”
7. 返回“第三方插件”页面，启用“Latex Environments”

要更新插件，只需返回“Latex Environments”的“第三方插件”页面，然后点击“更新”。

### 手动安装
要进行手动安装：
 1. 从[最新的Github发布](https://github.com/raineszm/obsidian-latex-environments/releases/latest)中下载最新的`zip`文件。
 1. 将文件解压缩到您的vault的`.plugins/obsidian-latex-environments`子目录中。
 1. 重新加载Obsidian。
 1. 进入设置 > 第三方插件，并激活obsidian-latex-environments。

有关详细信息，请参见[论坛](https://forum.obsidian.md/t/plugins-mini-faq/7737)。

使用方法

![](latexenv.gif)

###  命令

该插件目前提供了3个命令，这些命令没有默认绑定。
这两个命令只在光标位于数学块内时有效。
这两个命令还会询问环境的名称。

#### 插入环境

在光标处插入一个新的LaTeX环境。

**如果有选中内容**，则在选中内容周围插入一个新的LaTeX环境。
0.

#### 更改环境

更改周围LaTeX环境的名称。

*如果光标位于`\begin`或`\end`上，则将更改相应的环境。*

### 删除环境

删除包围光标的最内层的LaTeX环境。

版本0.3.0重写

为了支持Obsidian的实时预览功能，该插件的内部需要进行重写。
目标是不影响功能，但与之前的版本可能存在一些差异。
如果您发现在0.2.0版本中有效但在0.3.0版本中无效的内容，请提交错误报告。

## 贡献
欢迎提交拉取请求。对于重大更改，请先打开一个问题来讨论您想要更改的内容。

请确保根据需要更新测试。

## 许可证
[MIT](https://choosealicense.com/licenses/mit/)



