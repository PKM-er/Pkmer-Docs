---
uid: 20230803204500
title: Obsidian 插件：【Readme】Onyx Boox Annotation & Highlight Extractor
tags: ['obsidian插件', 'readme']
description: 这个插件可以提取Onyx Boox平板电脑导出的注释和高亮文件，并将它们转换为符合Zettelkasten方法的参考文献和永久笔记。
author: Akos Balasko
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Onyx Boox Annotation & Highlight Extractor

> [!Note] 插件名片
> - 插件名称：Onyx Boox Annotation & Highlight Extractor
> - 插件作者：Akos Balasko
> - 插件说明：这个插件可以提取Onyx Boox平板电脑导出的注释和高亮文件，并将它们转换为符合Zettelkasten方法的参考文献和永久笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/akosbalasko/Onyx-Boox-Annotation-Highlight-Extractor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?onyx-boox-extractor)

## 概述

这个插件可以提取Onyx Boox平板电脑导出的注释和高亮文件，并将它们转换为符合Zettelkasten方法的参考文献和永久笔记。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/akosbalasko/Onyx-Boox-Annotation-Highlight-Extractor/master/README.md)
> 

---

## Readme(翻译）

下面是 [[onyx-boox-extractor]] 插件的自述翻译


Onyx Boox批注和高亮提取器

通过这个插件，您可以提取您在Onyx Boox电子墨水设备上做的批注和高亮，并将它们转换为经典的Zettelkasten笔记。

你将会得到什么？

- 如果你在Onyx Boox上阅读一本书，这个插件将会生成一个带有元数据（标题和作者）的“参考笔记”。
- 如果你在书中划重点，这个文本将会成为一个与参考笔记相关联的“文学笔记”，并且在前言中存储有元信息（创建时间、页码、章节标题、书名）。
- 如果你对划重点的文本进行注释，这个注释将会成为一个与文学笔记和参考笔记相关联的“永久笔记”。

主要的好处是你可以直接将你当前阅读的书中的想法写入书中，而插件会将它们整合到你的第二大脑中。

当前的笔记格式如下：

插件生成的不同笔记如下：

### 参考注释：

```

标题：《你的书名》
作者：作者名

```

### 文学笔记：
```
---
_来源_：《书名》
_章节_：《章节标题》
_页码_：页码
_时间_：创建时间

---

> <被标记的文本>

---

_参考笔记_：[链接到参考笔记]

---
```

### 永久笔记：

```
---

标签：
  - <用下划线代替空格的书名>

---

<你的注释>

---

_文献笔记_： <链接到你的文献笔记>
_参考笔记_： <链接到你的参考笔记>

---

从Onyx Boox导出和提取到Obsidian的过程

由于Onyx Boox提供基于Android的电子墨水设备，可以通过Google Play直接安装Obsidian。然后，在设置好你的vault、选择同步选项并安装并启用此插件后，流程如下：

1. 从epub中将你的批注导出到本地。你可以通过点击书中的“TOC”，然后在下方菜单中导航到批注，选择所有的笔记和高亮，然后点击导出图标并选择“导出到本地存储”来完成。
2. 然后，当弹出的窗口允许时，'跳转'到导出文件所在的文件夹。
3. 将导出的文件的扩展名从txt更改为md，以便在Obsidian中可见。你可以通过长按文件本身，然后点击“重命名”按钮来完成。
4. 然后将文件移动到vault的文件夹中。
5. 然后打开Obsidian。
6. 长按导出的文件，然后选择“提取Onyx文件”。
7. 完成！

如果你不想将Obsidian安装到你的Onyx Boox设备上，你可以通过邮件将批注导出发送给自己，然后将其下载到本地计算机，更改扩展名并放入Obsidian的vault中。

## 路线图和已知的“问题”

- 插件目前在存储库的根文件夹中生成文件。在即将发布的版本中可以进行自定义。
- 目前还没有模板功能，将很快添加。
- 永久笔记中的标签是硬编码的，将来可以进行自定义。

反馈、赞赏、捐赠：
如果您对改进插件有任何想法或遇到任何问题，请随时提出问题，甚至可以贡献代码！
如果这个插件让您的生活更加轻松，请考虑在github上给它一个星星，或通过支持我。

非常感谢！



