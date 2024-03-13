---
uid: 2024031219331206
title: Obsidian 插件：【Readme】Seafile
tags: ['obsidian插件', 'readme']
description: 在Seafile上使用跨设备同步笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Seafile

> [!Note] 插件名片
> - 插件名称：Seafile
> - 插件作者：conql
> - 插件说明：在 Seafile 上使用跨设备同步笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/conql/obsidian-seafile)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?seafile)

## 概述

在 Seafile 上使用跨设备同步笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/conql/obsidian-seafile/master/README.md)

---

## Readme(翻译）

下面是 [[seafile]] 插件的自述翻译

【机翻】

# 黑曜石海文件

## 简介

这是一个旨在使用 Seafile 作为后端，在设备之间同步笔记的 Obsidian 插件。

![obsidian-seafile-demo](https://cdn.pkmer.cn/covers/seafile_1_0.gif!pkmer)

### 什么是 Seafile？

- [Seafile](https://www.seafile.com/) 是一个开源的、自托管的文件同步和共享解决方案，具有高性能和可靠性。它支持通过增量下载和上传实现高效同步。并提供用户友好的 Web 界面和在多个操作系统上具有出色同步功能的客户端。

### 特点

- 支持桌面和移动设备。
- 利用 Seafile 的内部同步 API 实现完整的同步功能。
- 快速同步速度，即使在低端安卓手机上也表现良好。

## 用法

<img src="https://github.com/conql/obsidian-seafile/assets/49243542/26399e88-d054-41cf-ae19-7bc82b178522" width="300">

1. 打开设置。
2. 输入您服务器的 URL 并登录到您的 Seafile 账户。
3. 选择要同步的存储库。
4. 可选：指定要忽略的文件。这使用了 [gitignore语法](https://git-scm.com/docs/gitignore)。插件本身的路径和 Obsidian 配置将被添加到用户定义的忽略列表中。
5. 点击“启用”开始同步。
6. 插件现在将在间隔时间同步您的文件。

对于每个单独的文件，将显示同步状态。此外，一个图标将出现在文件资源管理器的右下角。单击此图标将立即启动同步过程，无需等待下一个间隔时间。

## 注意事项

1. **不支持加密仓库：** 此功能尚未实现，但将考虑添加。
2. **自行承担风险：** 此插件目前正在开发中。在使用插件时存在数据损坏或丢失的风险。请确保您有重要数据的备份。
3. **不支持大文件：** 由于 Obsidian 的 API 限制，下载或上传大文件（例如大于 50MB）可能需要很长时间或导致应用程序崩溃。请不要使用插件处理过大的文件。
4. **清除存储库：** 如果遇到任何问题，您可以尝试清除存储库并重新启动同步。
5. **不要中断：** 在同步过程中，请不要关闭 Obsidian，特别是在将数据上传到服务器时（会显示上传图标）。否则，可能会导致数据损坏或丢失。

## 贡献

非常感谢您的反馈和建议。如果您想要：

- 报告错误或问题，
- 提交功能请求或改进建议，

请在 [GitHub issue](https://github.com/conql/obsidian-seafile/issues) 中提出。
