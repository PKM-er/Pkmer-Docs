---
uid: 2023080322160526
title: Obsidian 插件：Code Editor Shortcuts
tags: ['obsidian插件', 'readme']
description: 添加经常出现在代码编辑器（如Visual Studio Code（vscode）或Sublime Text）中的快捷键（热键）
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Code Editor Shortcuts

> [!Note] 插件名片
> - 插件名称：Code Editor Shortcuts
> - 插件作者：Tim Hor
> - 插件说明：添加经常出现在代码编辑器（如 Visual Studio Code（vscode）或 Sublime Text）中的快捷键（热键）
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/timhor/obsidian-editor-shortcuts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-editor-shortcuts)

## 概述

添加经常出现在代码编辑器（如 Visual Studio Code（vscode）或 Sublime Text）中的快捷键（热键）

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/timhor/obsidian-editor-shortcuts/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-editor-shortcuts]] 插件的自述翻译

# 代码编辑器快捷键

这个 [Obsidian](https://obsidian.md) 插件添加了常见于代码编辑器（如 Visual Studio Code 或 Sublime Text）的键盘快捷键（热键）。

| 命令                                             | 快捷键 \*                   |
| ------------------------------------------------ | -------------------------- |
| 在下方插入行                                     | `Ctrl` + `Enter`           |
| 在上方插入行                                     | `Ctrl` + `Shift` + `Enter` |
| 删除行                                           | `Ctrl` + `Shift` + `K`     |
| 复制行                                           | `Ctrl` + `Shift` + `D`     |
| 向上复制行                                       | `Alt` + `Shift` + `Up`     |
| 向下复制行                                       | `Alt` + `Shift` + `Down`   |
| 将下方行合并到当前行                             | `Ctrl` + `J`               |
| 选择行（重复以扩展选择）                         | `Ctrl` + `L`               |
| 在选择的两端添加光标                             | `Alt` + `Shift` + `I`      |
| 选择单词或选择下一个出现的内容                   | `Ctrl` + `D`               |
| 选择所有出现的内容                               | `Ctrl` + `Shift` + `L`     |
| 将光标向上移动                                   | 未设置                     |
| 将光标向下移动                                   | 未设置                     |
| 将光标向左移动                                   | 未设置                     |
| 将光标向右移动                                   | 未设置                     |
| 跳转到上一个单词                                 | 未设置                     |
| 跳转到下一个单词                                 | 未设置                     |
| 跳转到行首                                       | 未设置                     |
| 跳转到行尾                                       | 未设置                     |
| 跳转到上一行                                     | 未设置                     |
| 跳转到下一行                                     | 未设置                     |
| 跳转到第一行                                     | 未设置                     |
| 跳转到最后一行                                   | 未设置                     |
| 跳转到指定行                                     | 未设置                     |
| 删除到行首                                       | 未设置                     |
| 删除到行尾                                       | 未设置                     |
| 将选择转换为大写                                 | 未设置                     |
| 将选择转换为小写                                 | 未设置                     |
| 将选择转换为首字母大写                           | 未设置                     |
| 切换选择的大小写                                 | 未设置                     |
| 扩展选择到括号                                   | 未设置                     |
| 扩展选择到引号                                   | 未设置                     |
| 扩展选择到引号或括号                             | 未设置                     |
| 在上方插入光标                                   | 未设置                     |
| 在下方插入光标                                   | 未设置                     |
| 跳转到下一个标题                                 | 未设置                     |
| 跳转到上一个标题                                 | 未设置                     |
| 切换行号显示                                     | 未设置                     |
| 使用制表符缩进                                   | 未设置                     |
| 使用空格缩进                                     | 未设置                     |
| 撤销                                             | 未设置                     |
| 重做                                             | 未设置                     |

\* 在 macOS 上，将 `Ctrl` 替换为 `Cmd`，将 `Alt` 替换为 `Opt`

### 重要说明

- `Ctrl` + `Enter` 用于“在下方插入行”的快捷键可能与默认的“在新标签页中打开光标下的链接”的快捷键冲突；建议更改或删除其中一个绑定。
- `Ctrl` + `L` 用于“选择行”的快捷键可能与默认的“切换复选框状态”的快捷键冲突；建议更改或删除其中一个绑定。
- `Ctrl` + `D` 用于“选择单词或选择下一个匹配项”的快捷键的行为取决于初始选择的方式。如果初始选择也是通过 `Ctrl` + `D` 完成的，该命令只会在后续匹配项中查找整个单词。然而，如果选择是手动完成的，它还会在单词内部进行搜索。
- “切换所选内容的大小写”将在大写、小写和标题大小写之间循环切换。
- 如果你想要在 Obsidian 中使用 VS Code 的 `Alt` + `Up` 和 `Alt` + `Down` 快捷键，你可以将这些热键分配给 Obsidian 内置的“向上移动行”和“向下移动行”操作。

### 多重光标

大多数这些快捷键都适用于 [多重光标](https://help.obsidian.md/How+to/Multiple+cursors)。然而，在实时预览中，撤消和重做操作不会直观地工作 - 每个光标的操作将被单独处理，而不是分组在一起。正在进行的工作是逐步将它们迁移到更新的 Obsidian 编辑器 API，以便进行分组，并且已经完成了以下操作：

- 在上方插入行
- 在下方插入行
- 删除行

作为解决方法，您还可以在设置中切换回传统编辑器，因为在这种情况下，所有操作都将被分组。

\* 目前这些快捷键不支持多重光标：

- 扩展选择到引号或括号
- 转到下一个/上一个标题

安装插件

请参考官方安装第三方插件的说明 [链接](https://help.obsidian.md/Extending+Obsidian/Community+plugins)。

## 配置设置

转到“设置”→“热键”以自定义每个操作的键盘快捷键。

可以通过此插件的设置选项卡配置以下行为：

| 设置                     | 描述                                                         |
| ----------------------- | ----------------------------------------------------------- |
| 自动插入列表前缀 | 在上方或下方插入行时自动插入列表前缀 |

## 贡献

欢迎贡献和建议 - 请随时提出问题或发起拉取请求。

开始操作：

- 切换到指定的 Node 版本：`nvm use`
- 安装依赖：`yarn install`
- 运行扩展：`yarn start`
- 运行测试：`yarn test`（使用 `--watch` 进行观察模式）

## 支持

这个插件完全免费使用，但如果你想表示感谢，考虑给我买杯咖啡吧！😄

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/timhor)
