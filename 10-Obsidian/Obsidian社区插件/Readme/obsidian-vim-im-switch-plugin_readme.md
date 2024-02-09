---
uid: 2023120719461813
title: Obsidian 插件：【Readme】Vim Input Method Switch
tags: ['Vim相关', 'obsidian插件', 'readme']
description: 当 Vim 模式被启用时，使用 fcitx-remote 切换输入法。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Vim Input Method Switch

> [!Note] 插件名片
> - 插件名称：Vim Input Method Switch
> - 插件作者：yuanotes
> - 插件说明：当 Vim 模式被启用时，使用 fcitx-remote 切换输入法。
> - 插件分类：['Vim 相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/yuanotes/obsidian-vim-im-switch-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-vim-im-switch-plugin)

## 概述

当 Vim 模式被启用时，使用 fcitx-remote 切换输入法。

![Vim Input Method Switch](https://cdn.pkmer.cn/covers/obsidian-vim-im-switch-plugin.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/yuanotes/obsidian-vim-im-switch-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-vim-im-switch-plugin]] 插件的自述翻译

# Obsidian Vim IM 切换插件

## 简介

本插件可以让你在使用 [Obsidian](https://obsidian.md/) 的时候，在启动 Vim 键绑定 后，能够自动切换输入法。

在 Vim 模式下切换到 `normal` 的时候，该插件会自动将系统输入法切换到英文状态，在进入 `insert` 或者 `replace` 模式时，则会将输入法切换成中文输入法。

## 依赖

注意：该插件依赖 `fcitx-remote` 命令，插件会通过调用 `fcitx-remote` 来判断系统输入法的状态以及自动切换输入法。

1. 如果你使用 macOS 系统，可以在 <https://github.com/xcodebuild/fcitx-remote-for-osx> 下载该命令。
2. 如果你使用的是 Linux 系统，则可以通过系统的包管理器安装 `fcitx` 输入法，一般 `fcitx` 输入法会自带 `fcitx-remote` 命令。
3. 如果你使用的是 Windows 系统，我通过 AutoHotKey 编译了一个简单的版本，可在 [这里](https://github.com/yuanotes/obsidian-vim-im-switch-plugin/releases/download/1.0.3/fcitx-remote.exe) 直接下载 exe 文件。

## 后续计划

- Support [im-select](https://github.com/daipeihust/im-select)

## 捐赠

通过金钱来鞭策我吧。

| 支付宝 | 微信支付 |
|--------| ------- |
|  ![支付宝收款码](./assets/alipay.jpg) | ![微信支付收款码](https://cdn.pkmer.cn/covers/obsidian-vim-im-switch-plugin_2_0.jpeg!pkmer) |