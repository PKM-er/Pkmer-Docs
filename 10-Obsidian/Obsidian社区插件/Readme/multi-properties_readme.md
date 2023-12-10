---
uid: 2023120719365763
title: Obsidian 插件：【Readme】Multi Properties
tags: ['obsidian插件', 'readme']
description: 一次性为多个笔记添加属性。要么右键单击文件夹，要么选择多个笔记并右键单击选择。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Multi Properties

> [!Note] 插件名片
> - 插件名称：Multi Properties
> - 插件作者：fez-github
> - 插件说明：一次性为多个笔记添加属性。要么右键单击文件夹，要么选择多个笔记并右键单击选择。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/fez-github/obsidian-multi-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?multi-properties)

## 概述

一次性为多个笔记添加属性。要么右键单击文件夹，要么选择多个笔记并右键单击选择。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/fez-github/obsidian-multi-properties/master/README.md)
>

---

## Readme(翻译）

下面是 [[multi-properties]] 插件的自述翻译

# 多属性

安装后，右键单击文件夹将弹出一个选项，可以为文件夹中的所有笔记添加属性。点击此选项后，将弹出一个表单，要求您添加属性。您可以添加属性，并将其添加到文件夹中的所有笔记中。

您还可以使用 Shift+ 鼠标选择多个笔记，然后右键单击选择以获得相同的效果。

## 演示

![多属性演示 0-10-1](https://cdn.pkmer.cn/covers/multi-properties_1_0.gif!pkmer)

## 安装

该项目目前正在作为 Obsidian 社区插件提交，可以直接在应用程序中安装。一旦可用，请转到“设置”->“社区插件”->“浏览器”，然后搜索名称“Multi Props”。

如果您希望手动安装，

1. 下载最新版本。
2. 提取发布版本中的文件夹，并将其添加到 `[yourVault]/.obsidian/plugins/`。

## 功能点的想法

- [x] 切换按钮，让用户选择在已存在的属性名称上添加另一个值时是覆盖属性还是追加到属性。
- [ ] 想为这个插件添加测试，但是我不确定如何处理直接写入笔记的插件的测试。

## 已知问题

- [x] 目前没有对输入无效标签的保护措施。如果一个标签包含无效字符（逗号、问号等），它将被添加到笔记中，但 Obsidian 将无法识别它。
- [ ] 目前没有错误处理机制。如果由于任何原因未正确添加属性，您将不会收到通知。



