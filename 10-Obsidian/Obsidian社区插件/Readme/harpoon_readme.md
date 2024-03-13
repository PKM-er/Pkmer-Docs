---
uid: 2023102611075838
title: Obsidian 插件：【Readme】Harpoon
tags: ['obsidian插件', 'readme']
description: 使用快捷方式来管理和导航Obsidian中的前四个常用文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Harpoon

> [!Note] 插件名片
> - 插件名称：Harpoon
> - 插件作者：mask(developermask)
> - 插件说明：使用快捷方式来管理和导航 Obsidian 中的前四个常用文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/rodrez/obsidian-harpoon)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?harpoon)

## 概述

使用快捷方式来管理和导航 Obsidian 中的前四个常用文件。

![Harpoon](https://cdn.pkmer.cn/covers/harpoon.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rodrez/obsidian-harpoon/main/README.md)

---

## Readme(翻译）

下面是 [[harpoon]] 插件的自述翻译

# 黑曜石鱼叉插件

一个用于管理和快速导航到您喜爱的文件的黑曜石插件。

这是一个为 Obsidian 移植的 Harpoon 插件（github.com/theprimeagen/harpoon）。

![示例用法](./sample.gif)

### 安装

注意：这假设您已经熟悉安装 Obsidian 插件的步骤。

* 下载 Harpoon 插件
* 将其安装到您的 Obsidian vault 中，就像安装其他插件一样。

### 初始设置

我建议您使用您喜欢的按键绑定来添加/导航文件。

安装后，插件将在您的保险库中创建一个名为 harpoon-config.json 的默认配置文件。

### 使用方法

* 打开文件列表：此命令打开一个模态框，列出您已经与 Harpoon 关联的文件。
* 添加文件到列表：将当前活动文件添加到 Harpoon 列表中。注意：最多只能添加 4 个文件。
* 转到文件：您可以使用“转到文件 x”命令之一（其中 x 是从 1 到 4 的数字）快速跳转到您关联的文件之一。

### 键盘快捷键

> Ctrl + Shift + D：打开模态框。

当 Harpoon 模态框打开时：

**Ctrl + Shift + D**：关闭模态框。

**Enter**：选择与当前高亮索引对应的文件。

**dd**：快速按两次以从列表中删除文件。

**p**：将最后删除的文件插入到当前高亮文件之后。

**Shift + p**：将最后删除的文件插入到当前高亮文件之前。

**ArrowDown 或 J**：在列表中向下导航。

**ArrowUp 或 K**：在列表中向上导航。

### 提示

* 确保在确定之前不要手动删除 harpoon-config.json 文件。它保存了插件的配置和挂钩文件的列表。
* 该插件旨在提供快速导航，因此请利用键盘快捷键以提高效率。

## 待办事项

- [ ] 添加滚动到指定位置（包括初始加载/刷新）
- [ ] 添加可调整的 Harpoon Modal 快捷键？（也许）



