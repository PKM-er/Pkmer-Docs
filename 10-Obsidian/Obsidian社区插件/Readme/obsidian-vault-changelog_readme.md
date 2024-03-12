---
uid: 20230817224055
title: Obsidian 插件：Vault Changelog
tags: ['文件历史', 'obsidian插件', 'readme']
description: 在库中自动生成一个最近变更的文件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Vault Changelog

> [!Note] 插件名片
> - 插件名称：Vault Changelog
> - 插件作者：Badr Bouslikhin
> - 插件说明：在库中自动生成一个最近变更的文件
> - 插件分类：[' 文件历史 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/badrbouslikhin/obsidian-vault-changelog)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-vault-changelog)

## 概述

在库中自动生成一个最近变更的文件

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/badrbouslikhin/obsidian-vault-changelog/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-vault-changelog]] 插件的自述翻译

# Obsidian Vault Changelog 插件

这是一个简单的插件，用于在您的 vault 中维护最近编辑文件的变更日志。

变更日志的更新可以手动或自动触发。

<img src="https://raw.githubusercontent.com/MrZeroo00/obsidian-vault-changelog/main/resources/demo.png" width=50% height=50%>

**变更日志笔记中的所有内容都将被覆盖**。最好使用一个专用的变更日志笔记，并将其嵌入到其他笔记中。

<img src="https://raw.githubusercontent.com/MrZeroo00/obsidian-vault-changelog/main/resources/demo-embedded.png" width=50% height=50%>

如何安装

### 手动安装

1. 从 GitHub 的发布页面下载 zip 压缩包。
2. 将压缩包解压到 `<vault>/.obsidian/plugins` 目录中。
3. 重新加载 Obsidian。

### 从 Obsidian 内部

您可以通过 Obsidian 内的 Community Plugins 选项卡安装插件。只需搜索“Changelog”。

## 如何使用

安装并激活插件后，您必须提供它的 changelog 文件路径。

您可以使用新的命令 `Vault changelog: update` 在命令面板中更新 changelog。

您可以配置另外两个选项：

1. 在 changelog 中显示的最近文件数量
2. changelog 的自动刷新：此选项会在任何笔记修改、删除或重命名时自动更新 changelog。

### 更新日志文件位置

更新日志文件位置输入的是完整的绝对路径（包括 .md 扩展名）。

```
./
├── notes/
│   └── misc/
│       └── changelog.md
├── pictures/
├── some-note.md
└── some-other-note.md
```

如果你想使用上面示例中的 `changelog.md`，你应该在首选项窗格中输入 `notes/misc/changelog.md`。

## 开发

该项目使用 Typescript 提供类型检查和文档。

该插件依赖于 Typescript 定义格式中的最新 [插件API](https://github.com/obsidianmd/obsidian-api)，其中包含了描述其功能的 TSDoc 注释。

**注意：** Obsidian API 仍处于早期 alpha 版本，随时可能发生变化！

如果您想要为开发做出贡献和/或自定义它以适应您自己的调整，您可以执行以下操作：

- 克隆该存储库。
- 运行 `npm i` 或 `yarn` 以安装依赖项。
- 运行 `npm run build` 进行编译。
- 将 `manifest.json`、`main.js` 和 `styles.css` 复制到插件文件夹的子文件夹中（例如 `<vault>/.obsidian/plugins/obsidian-vault-changelog/`）。
- 重新加载 Obsidian 以查看更改。

注意事项

这是一个实验性的功能，可能存在不稳定性。有可能存在会删除当前笔记中数据的错误。请务必备份！

常见问题和解决方案

### 问题 1：无法编写变更日志：请检查文件路径

1. 创建一个新文件，例如 - `notes/misc/changelog`
2. 进入 **设置 -> 插件选项 -> Vault Changelog**
3. 在 **变更日志位置 - notes/misc/changelog.md** 中输入路径
4. 重新启动 Obsidian

#### **注意事项：**

> - 确保保持一个**_ 正确的文件路径和名称 _**，就像我使用的那样。
> - 如果你正在使用 Obsidian 创建一个新文件，那么**_ 不要加上 (.md) 扩展名 _**。