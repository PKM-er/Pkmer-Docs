---
uid: 20230803203929
title: Obsidian 插件：【Readme】Export To TeX
tags: ['转换工具', 'obsidian插件', 'readme']
description: 将拱顶文件导出为适合粘贴到TeX文档中的格式
author: Zach Raines
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Export To TeX

> [!Note] 插件名片
> - 插件名称：Export To TeX
> - 插件作者：Zach Raines
> - 插件说明：将拱顶文件导出为适合粘贴到TeX文档中的格式
> - 插件分类：['转换工具', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/raineszm/obsidian-export-to-tex)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-export-to-tex)

## 概述

将拱顶文件导出为适合粘贴到TeX文档中的格式

![Export To TeX](https://cdn.pkmer.cn/covers/obsidian-export-to-tex_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/raineszm/obsidian-export-to-tex/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-export-to-tex]] 插件的自述翻译


# obsidian-export-to-tex
[![](https://img.shields.io/github/v/release/raineszm/obsidian-export-to-tex?style=for-the-badge)](https://github.com/raineszm/obsidian-export-to-tex/releases/latest)
![](https://img.shields.io/github/commits-since/raineszm/obsidian-export-to-tex/latest?style=for-the-badge)
![](https://img.shields.io/github/manifest-json/minAppVersion/raineszm/obsidian-export-to-tex?color=red&label=Min%20Obsidian%20Version&style=for-the-badge)
![](https://img.shields.io/github/downloads/raineszm/obsidian-export-to-tex/total?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](#license)

> 将 Obsidian 笔记导出为 LaTeX 格式，适用于粘贴到 TeX 文件中。
> 
![](https://raw.githubusercontent.com/raineszm/obsidian-export-to-tex/master/images/export-to-clipboard.gif)

## 安装

如果您使用的是 Obsidian 版本 0.9.8 或更高版本：

1. 打开选项面板
1. 转到“第三方插件”
1. 确保“安全模式”处于关闭状态。（**警告：在使用插件之前，请自行验证其安全性。**）
1. 点击“浏览”，找到“Community Plugins”
1. 搜索“Export To TeX”
1. 点击“安装”
1. 返回“第三方插件”页面，启用“Export To TeX”

要更新插件，只需返回“第三方插件”页面，找到“Export To TeX”，然后点击“更新”。

### 手动安装
要进行手动安装：
 1. 从[最新的Github发布](https://github.com/raineszm/obsidian-export-to-tex/releases/latest)中下载最新的`zip`文件。
 1. 将文件解压缩到您的vault的`.plugins/obsidian-export-to-tex`子目录中。
 1. 重新加载Obsidian。
 1. 进入设置 > 第三方插件，并激活obsidian-export-to-tex。

有关详细信息，请参阅[论坛](https://forum.obsidian.md/t/plugins-mini-faq/7737)。

## 使用方法

该插件允许将Obsidian文件导出为TeX格式。
在这样做时：
- 删除与其他文件的WikiLinks链接
- 解析嵌入的内容
- 默认情况下，标题和块与标签相关联

### 命令
Export to TeX 提供了两个命令

导出为TeX

该命令将产生一个保存对话框。当前文件的内容将被转换为TeX格式并保存到该文件中。

#### 导出到剪贴板

当前文件的内容将被转换为TeX格式并复制到剪贴板。

### 设置

### 生成标签和引用

**默认值：true**

默认情况下，将导出为TeX会自动生成标题和块的标签。
在同一文件中的链接将被转换为`\ref`调用。

### 引用命令

**默认值：'\cref'**

用于生成引用的命令：默认为`\cref`。

### 附加的数学环境

**默认值：[]**

默认情况下，将从顶级数学环境（如`equation`）中删除周围的显示数学定界符进行TeX导出。
如果您希望对其他环境执行此操作，可以将它们添加到此列表中。

### 默认为方程

**默认值：false**

默认情况下，显示数学环境

```
$$
x^2
$$
```
将被导出为显示数学
```latex
\[
x^2
\]
```
如果没有顶级环境存在。

如果默认为方程，则会导出为
```latex
\begin{equation}
x^2
\end{equation}
```

### 压缩换行符

**默认值：false**

启用后，导出的 TeX 将会将连续多个空行压缩为单个空行。

### 图片路径格式

**默认：相对于存储库根目录**

确定将图像嵌入`![[image.png]]`转换为`\includegraphics`调用时，图像路径的写入方式。
选项包括：

- *相对于存储库根目录*：使用相对于当前存储库根目录的文件路径，`\includegraphics{Figures/image.png}`
- *绝对路径*：使用文件在文件系统上的绝对路径，`\includegraphics{/Users/user/Documents/Vault/Figures/image.png}`
- *文件基本名称*：仅使用图像文件的基本名称，`\includegraphics{image}`
- *相对于导出目录*：给出相对于导出的TeX目录的文件路径（如果复制到剪贴板，则相对于默认导出目录）。

### 默认导出目录

**默认为保险库根目录*

如果设置了该选项，文件选择器将会打开到选择的目录以进行导出。

## 贡献
欢迎提交拉取请求。对于重大更改，请先打开一个问题来讨论您想要更改的内容。

请确保根据需要更新测试。

## 许可证
[MIT](https://choosealicense.com/licenses/mit/)



