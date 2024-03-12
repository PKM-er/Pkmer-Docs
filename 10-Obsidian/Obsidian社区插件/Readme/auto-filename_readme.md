---
uid: 20231220112631
title: Obsidian 插件：【Readme】Auto Filename
tags: ['obsidian插件', 'readme']
description: 根据文件的前x个字符，在进行操作时自动重命名文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Auto Filename

> [!Note] 插件名片
> - 插件名称：Auto Filename
> - 插件作者：rcsaquino
> - 插件说明：根据文件的前 x 个字符，在进行操作时自动重命名文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/rcsaquino/obsidian-auto-filename)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-filename)

## 概述

根据文件的前 x 个字符，在进行操作时自动重命名文件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rcsaquino/obsidian-auto-filename/main/README.md)

---

## Readme(翻译）

下面是 [[auto-filename]] 插件的自述翻译

# 自动文件名

📁 简化您的文件命名工作流程

🙌 Obsidian 自动文件名是一个插件，它根据文件的前 x 个字符自动重命名 Obsidian 中的文件。这可以节省您大量的时间和精力，特别是如果您经常创建大量的新笔记或文件。

🔧 这个插件很容易使用。只需从 Obsidian 社区插件中安装它，并根据您的喜好配置设置。您可以选择要将插件重命名文件的目标文件夹，用于文件名的字符数，以及是否隐藏目标文件夹中文件的内联标题。

🚀 配置完插件后，它将自动重命名您在目标文件夹中创建的任何新文件。您还可以通过在插件设置中点击“重命名所有文件”按钮一次性重命名目标文件夹中的所有文件。

📝 Obsidian 自动文件名是一个非常适合希望简化文件命名工作流程的人使用的插件。对于经常使用 Obsidian 创建大量新笔记或文件的人来说，它尤其有用。

😊 今天就试试 Obsidian 自动文件名，节省您的时间和精力！

## 演示

![](https://github.com/rcsaquino/obsidian-auto-filename/blob/main/assets/demo.gif)

## 如何使用

1. 从 Obsidian 社区插件中安装。
2. 设置选项
    - 目标文件夹
        - 字段：接受来自 Vault 的文件夹路径。
        - Auto Filename 将自动将文件重命名为目标文件夹路径。
        - 默认值：无
        - 示例：
            - My Notes/Quick Notes
            - Fleeting Notes
            - /
    - 包括子文件夹
        - 切换
        - 也会将目标文件夹的子文件夹中的文件作为目标文件。
        - 默认值：关闭
    - 字符计数
        - 字段：接受 10 到 100 之间的数字。
        - Auto Filename 将使用文件中的前 x 个字符作为文件名。
        - 默认值：50
    - 隐藏目标文件夹的内联标题
        - 切换
        - 这将覆盖目标文件夹上的“外观 > 高级 > 显示内联标题”设置。
        - 您必须在选项中启用“显示内联标题”才能使用此设置。
        - 默认值：关闭
    - 检查间隔
        - 字段：接受数字
        - 编辑时重命名文件的间隔时间（以毫秒为单位）。如果有性能问题，请增加间隔时间。
        - 默认值：500
    - 使用标题作为文件名
        - 切换
        - 如果文件以 H1 开头，则使用标题作为文件名。
        - 默认值：开启
    - YAML 支持
        - 切换
        - 启用 YAML 支持。
        - 默认值：开启
    - 重命名所有文件
        - 按钮
        - 重命名目标文件夹中的所有文件。
        - 警告：为了安全起见，请确保在进行操作之前备份文件。

## 手动安装

1. 从 [最新版本](https://github.com/rcsaquino/obsidian-auto-filename/releases/) 下载 `main.js`、`styles.css` 和 `manifest.json`。
2. 将下载的文件复制或移动到 `path_to_your_vault/.obsidian/plugins/obsidian-auto-filename` 目录下。
如果您喜欢 Auto Filename，请通过在 [https://ko-fi.com/rcsaquino](https://ko-fi.com/rcsaquino) 上给我买杯咖啡来支持我的工作和热情😊。





