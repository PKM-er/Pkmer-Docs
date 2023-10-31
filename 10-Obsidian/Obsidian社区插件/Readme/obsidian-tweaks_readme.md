---
uid: 2023080322235575
title: Obsidian 插件：ObsidianTweaks
tags: ['快捷键', '效率', 'obsidian插件', 'readme']
description: 提供了一些快捷键和小功能，包括快速改变大纲等级，加粗，斜体设置等等。部分功能官方已这次hi对应的快捷键。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：ObsidianTweaks

> [!Note] 插件名片
> - 插件名称：ObsidianTweaks
> - 插件作者：Jeppe Klitgaard
> - 插件说明：提供了一些快捷键和小功能，包括快速改变大纲等级，加粗，斜体设置等等。部分功能官方已这次 hi 对应的快捷键。
> - 插件分类：[' 快捷键 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/JeppeKlitgaard/ObsidianTweaks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tweaks)

## 概述

提供了一些快捷键和小功能，包括快速改变大纲等级，加粗，斜体设置等等。部分功能官方已这次 hi 对应的快捷键。

![ObsidianTweaks](https://cdn.pkmer.cn/covers/obsidian-tweaks_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/JeppeKlitgaard/ObsidianTweaks/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-tweaks]] 插件的自述翻译

# ObsidianTweaks

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/JeppeKlitgaard/ObsidianTweaks?style=for-the-badge&sort=semver)](https://github.com/JeppeKlitgaard/ObsidianTweaks/releases/latest)

![GitHub All Releases](https://img.shields.io/github/downloads/JeppeKlitgaard/ObsidianTweaks/total?style=for-the-badge)

这是一个小插件，实现了一些我认为应该是 Obsidian 核心版本的一部分的功能 - 或许在未来它们会成为核心功能？❤️

## 哲学

- **默认情况下，没有启用任何功能**。您可以启用您想要的功能。
  - 因此，所有功能也可以被禁用。
- 所有代码都以公共领域的形式发布，不需要使用 [Unlicense](https://unlicense.org/) 进行归属要求。

## 特点

以下是当前可用的功能列表。

请注意，热键无法“禁用”，但可以设置为<kbd>空白</kbd>。默认情况下，它们都设置为<kbd>空白</kbd>。转到“设置 > 热键”以设置快捷键以匹配下面的建议，或使用您自己的绑定！

### 命令

| 推荐快捷键 | 动作 |
| --- | --- |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd> | 向左移动选择 |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd> | 向右移动选择 |
| <kbd>空格</kbd> | 更好地切换粗体（星号） |
| <kbd>Ctrl</kbd> + <kbd>B</kbd> | 更好地切换粗体（下划线） |
| <kbd>空格</kbd> | 更好地切换斜体（星号） |
| <kbd>Ctrl</kbd> + <kbd>I</kbd> | 更好地切换斜体（下划线） |
| <kbd>空格</kbd> | 更好地切换代码 |
| <kbd>Ctrl</kbd> + <kbd>/</kbd> | 更好地切换注释 |
| <kbd>空格</kbd> | 更好地切换高亮 |
| <kbd>空格</kbd> | 更好地切换删除线 |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> | 选择当前行 |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↑</kbd> | 复制当前行向上 |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd> | 复制当前行向下 |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd> | 复制当前行向左 |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd> | 复制当前行向右 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd> | 切换标题 - H1 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd> | 切换标题 - H2 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd> | 切换标题 - H3 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>4</kbd> | 切换标题 - H4 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>5</kbd> | 切换标题 - H5 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>6</kbd> | 切换标题 - H6 |
| <kbd>空格</kbd> | 新建相邻文件 |
| <kbd>空格</kbd> | 复制文件 |

### 更好的切换

Obsidian 中的默认切换有时可能有些问题，不总是工作得很好。这里实现的切换应该在切换两次时始终返回到相同的状态。

它们还可以为您进行良好的换行。

此外，使用下划线和星号实现了 __ 粗体 __ 和 _ 斜体 _。只需绑定您想要的命令。

还包括数学切换。

![默认格式](images/DefaultFormatting.gif)

![更好的格式](images/BetterFormatting.gif)

如何安装

通过以下三种方法之一安装 Obsidian 插件。

### 社区插件

通过 Obsidian 的社区插件界面安装此插件（**强烈推荐**）

您可以按照以下步骤在 Obsidian 中激活此插件：

    - 打开设置 > 第三方插件
    - 确保安全模式已关闭
    - 点击浏览社区插件
    - 搜索“**AnkiBridge**”
    - 点击安装
    - 安装完成后，关闭社区插件窗口并激活新安装的插件

### BRAT

如果您已安装了 [Obsidian BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件，您可以通过以下步骤安装 ObsidianTweaks：

    - 打开“命令面板”
    - 选择“Obsidian42 - BRAT: Add a beta plugin for testing”命令
    - 将“JeppeKlitgaard/ObsidianTweaks”粘贴到文本字段中
    - 按下“Add Plugin”
    - 在“设置 → 社区插件”菜单下找到并激活插件

### 手动安装

    或者您可以进行手动安装：
    
    - 从GitHub的发布页面下载最新的`ObsidianTweaks-X.Y.Z.zip`文件。
    - 创建一个名为`ObsidianTweaks`的新文件夹。
    - 将zip文件中的文件解压到`ObsidianTweaks`文件夹中。
    - 将文件夹放置在您的.obsidian/plugins目录中。
    - 重新加载插件（最简单的方法就是重新启动Obsidian）。
    - 正常激活插件。

为什么选择 Unlicense？

如果 Obsidian 的开发者想要直接将一些代码复制到 Obsidian 中，他们可以毫不担心地这样做，而不需要考虑许可问题。

请注意，对 ObsidianTweaks 的任何贡献也将是 Unlicensed 的。

荣誉提及

我最初计划为 [Hotkeys++](https://github.com/argenos/hotkeysplus-obsidian) 插件做贡献，但由于我不希望 ObsidianTweaks 将来受限于热键，所以我决定自己制作一个插件。

## 贡献者

- [Jeppe Klitgaard](https://github.com/JeppeKlitgaard)



