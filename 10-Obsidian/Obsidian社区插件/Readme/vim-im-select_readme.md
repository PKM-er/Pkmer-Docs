---
uid: 20230803213428
title: Obsidian 插件：【Readme】Vim IM Select
tags: ['obsidian插件', 'readme']
description: 支持在不同的 Vim 模式中自动选择合适的输入法。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Vim IM Select

> [!Note] 插件名片
> - 插件名称：Vim IM Select
> - 插件作者：Alonelur
> - 插件说明：支持在不同的 Vim 模式中自动选择合适的输入法。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ALONELUR/vim-im-select-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vim-im-select)

## 概述

支持在不同的 Vim 模式中自动选择合适的输入法。

![Vim IM Select](https://cdn.pkmer.cn/covers/vim-im-select.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ALONELUR/vim-im-select-obsidian/master/README.md)
> 

---

## Readme(翻译）

下面是 [[vim-im-select]] 插件的自述翻译



# Obsidian Vim IM 选择插件

[Chinese ver. 中文版本](./README_zh.md)

该插件用于在 Obsidian 中使用 `vim 键绑定` 时自动切换系统的当前输入法，以防止非英文输入法在 `vim 正常` 模式下导致键绑定失败。

## 安装

首先，在 Obsidian 中需要打开 `vim 键绑定`。

在 Obsidian 的设置中，关闭 `安全模式`，然后安装这个插件。

或者，手动安装：将 `main.js` 和 `manifast.json` 复制到 `VAULT_ROOT/.obsidian/plugins/vim-im-select/`。

## 使用方法

启用此插件后，您可以在设置中找到一个设置选项卡。

设置选项分为两部分，第一部分是默认平台的设置，第二部分是Windows平台的设置。

如果您在Windows平台下使用Obsidian，则插件将使用设置的第二部分，否则将使用设置的第一部分。

不同平台的选项相似。

| 选项                | 定义                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| `默认输入法`        | 指定在正常模式下使用的输入法                                                                                   |
| `获取输入法命令`    | 获取当前输入法的命令（必须可执行）                                                                             |
| `切换输入法命令`    | 切换当前输入法的命令（必须可执行，使用`{im}`作为目标输入法的占位符）                                           |

以下是一个示例：
![示例](./example.png)

**在第一次激活插件并完成设置后，您需要重新启动Obsidian。**

如果您想了解更多信息：

- 在Windows上切换输入法的解决方案[im-select](https://github.com/daipeihust/im-select)
- 受到[vscodevim](https://github.com/VSCodeVim/Vim#input-method)的启发

## 鸣谢

- [im-select](https://github.com/daipeihust/im-select)
- [obsidian-vimrc-support](https://github.com/esm7/obsidian-vimrc-support)



