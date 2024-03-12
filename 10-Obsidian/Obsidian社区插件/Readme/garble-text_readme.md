---
uid: 20230817224052
title: Obsidian 插件：Garble Text
tags: ['安全', 'obsidian插件', 'readme']
description: 在Obsidian中混淆文本会将整个应用程序（笔记，侧边栏等）中的所有内容转换为行，以便您可以在不暴露敏感数据的情况下拍摄屏幕截图。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Garble Text

> [!Note] 插件名片
> - 插件名称：Garble Text
> - 插件作者：kurakart
> - 插件说明：在 Obsidian 中混淆文本会将整个应用程序（笔记，侧边栏等）中的所有内容转换为行，以便您可以在不暴露敏感数据的情况下拍摄屏幕截图。
> - 插件分类：[' 安全 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kurakart/garble-text)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?garble-text)

## 概述

在 Obsidian 中混淆文本会将整个应用程序（笔记，侧边栏等）中的所有内容转换为行，以便您可以在不暴露敏感数据的情况下拍摄屏幕截图。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kurakart/garble-text/master/README.md)

---

## Readme(翻译）

下面是 [[garble-text]] 插件的自述翻译

**此插件不再维护。对造成的任何不便表示抱歉。**

# 文本混淆

此插件在 Obsidian 中公开了 `garbleText()` 函数。使用命令面板（`ctrl+p`）查找函数**切换文本混淆**。

在 Obsidian 中混淆文本会将整个应用程序中的所有内容（笔记、侧边栏等）转换为不可读的文本（并模糊图像），以便您可以在不暴露敏感数据的情况下进行截屏。

悬停时，混淆的文本将恢复为原始文本。

## 待办事项

- 为移动端添加编辑器工具栏图标
- 基于正则表达式的混淆
- 设置以更改混淆显示字体

## 鸣谢

非常感谢 [**Matthias C. Hormann（也称为Moonbase59）**](https://github.com/Moonbase59) 在 Android 上的测试工作和用于悬停时解开混乱的 CSS，以及 [**Jeremy Valentine（也称为Valentine195）**](https://github.com/valentine195) 在 iOS 上测试插件。

## 更新日志

2021-08-25：在移动设备上启用；当文字模糊时，添加了对图像的**模糊处理**；当鼠标悬停时，添加了**取消模糊处理**。

2021-08-13：从两个命令“Garble”和“Ungarble”更改为一个命令“Toggle Garble”。
