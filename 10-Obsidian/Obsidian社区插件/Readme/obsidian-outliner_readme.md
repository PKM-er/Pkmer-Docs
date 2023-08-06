---
uid: 2023080322241845
title: Obsidian 插件：【Readme】Outliner
tags: ['编辑工具', '编辑器', 'obsidian插件', 'readme']
description: 为 Obsidian 的大纲添加快捷操作，像在Workflowy或RoamResearch中一样，使用快捷键调整大纲的顺序和层级变化，移动大纲上的项目。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Outliner

> [!Note] 插件名片
> - 插件名称：Outliner
> - 插件作者：Viacheslav Slinko
> - 插件说明：为 Obsidian 的大纲添加快捷操作，像在 Workflowy 或 RoamResearch 中一样，使用快捷键调整大纲的顺序和层级变化，移动大纲上的项目。
> - 插件分类：[' 编辑工具 ', ' 编辑器 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vslinko/obsidian-outliner)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-outliner)

## 概述

为 Obsidian 的大纲添加快捷操作，像在 Workflowy 或 RoamResearch 中一样，使用快捷键调整大纲的顺序和层级变化，移动大纲上的项目。

![Outliner](https://cdn.pkmer.cn/covers/obsidian-outliner.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vslinko/obsidian-outliner/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-outliner]] 插件的自述翻译

# Obsidian 大纲

![GitHub工作流状态](https://img.shields.io/github/workflow/status/vslinko/obsidian-outliner/Release?logo=github&style=for-the-badge)

![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/vslinko/obsidian-outliner?style=for-the-badge&sort=semver)

**像 Workflowy 或 RoamResearch 一样处理列表**

⁉️ [讨论想法或提问](https://github.com/vslinko/obsidian-outliner/discussions)<br>
⚙️ [跟踪开发过程](https://github.com/users/vslinko/projects/3/views/1)<br>
🐛 [报告问题](https://github.com/vslinko/obsidian-outliner/issues)

与 [Obsidian Zoom插件](https://github.com/vslinko/obsidian-zoom) 兼容。

## 演示

![演示](https://raw.githubusercontent.com/vslinko/obsidian-outliner/main/demo.gif)

如何安装

从 Obsidian 内部

您可以通过以下步骤在 Obsidian 内部激活此插件：

- 打开设置>第三方插件
- 确保安全模式关闭
- 点击浏览社区插件
- 搜索“大纲”
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

### 手动安装

从 [最新版本](https://github.com/vslinko/obsidian-outliner/releases/latest) 下载 `main.js`、`manifest.json` 和 `styles.css`，并将它们放入 `<vault>/.obsidian/plugins/obsidian-outliner` 文件夹中。

如何使用

尝试创建一个深层结构的列表，并通过按下下面描述的热键来移动项目。

## 特点

### 改善列表的样式

如果你喜欢上面演示中的样式，你可以在插件设置选项卡中启用它们。

> **免责声明：**这些样式仅与内置的 Obsidian 主题兼容。

| 设置                           | 默认值 |
| ----------------------------- | :----: |
| 改善列表的样式 | `true` |

### 前后移动列表

在不破坏结构的情况下，将带有子列表的列表移动到任意位置。

| 命令                         |       默认快捷键（Windows/Linux）       |             默认快捷键（MacOS）             |
| --------------------------- | :------------------------------------: | :--------------------------------------: |
| 上移列表及其子列表           | <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>↑</kbd> | <kbd>Command</kbd><kbd>Shift</kbd><kbd>↑</kbd> |
| 下移列表及其子列表           | <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>↓</kbd> | <kbd>Command</kbd><kbd>Shift</kbd><kbd>↓</kbd> |
| 缩进列表及其子列表           |                                        |                                          |
| 减少列表及其子列表的缩进     |                                        |                                          |

| 设置               | 默认值 |
| ----------------- | :----: |
| 增强 Tab 键功能 | `true` |

### 绘制垂直缩进线

![垂直缩进线演示](https://raw.githubusercontent.com/vslinko/obsidian-outliner/main/demo2.gif)

| 设置                                   | 默认值           |
| -------------------------------------- | :--------------: |
| 绘制垂直缩进线                         |     `false`      |
| 垂直缩进线点击操作                     | `切换折叠状态`   |

### 将光标固定在内容上

不要让光标移动到项目符号位置。影响光标移动、文本删除、文本选择。

| 设置                           | 默认值  |
| ------------------------------ | :----: |
| 将光标固定在内容上 | `true` |

### 增强回车键功能

使回车键的行为与其他大纲工具相同：

- 如果列表项为空，则回车键会取消缩进。
- 如果存在子项，则回车键会在子级别上创建新行。
- Shift-Enter 键会创建一个新的注释行。

[更多信息](https://github.com/vslinko/obsidian-outliner/discussions/98#discussioncomment-649514)

| 设置                   | 默认值  |
| --------------------- | :----: |
| 增强回车键功能         | `true` |

### 折叠和展开你的列表

| 命令           | 默认热键（Windows/Linux） | 默认热键（MacOS） |
| --------------- | :----------------------------: | :----------------------------: |
| 折叠列表   |  <kbd>Ctrl</kbd><kbd>↑</kbd>   | <kbd>Command</kbd><kbd>↑</kbd> |
| 展开列表 |  <kbd>Ctrl</kbd><kbd>↓</kbd>   | <kbd>Command</kbd><kbd>↓</kbd> |

### Enhance the <kbd>Ctrl</kbd><kbd>A</kbd> or <kbd>Cmd</kbd><kbd>A</kbd> behavior

按下热键一次选择当前列表项。按下热键两次选择整个列表。

| 设置                                 | 默认值        |
| ------------------------------------ | :-----------: |
| Enhance the Ctrl+A or Cmd+A behavior |    `true`     |

### 调试模式

打开开发者工具（Command+Option+I 或 Control+Shift+I）以复制调试日志。

| 设置       | 默认值  |
| ---------- | :----: |
| 调试模式   | `false` |

- [多行操作](https://github.com/vslinko/obsidian-outliner/issues/3)（尚不支持）

定价

这个插件对每个人都是免费的。

### 赞助者和支持者

我想对支持我的人说声谢谢，我非常感激！

- [Lucas D](https://twitter.com/lucasdreier)
- Philipp K.
- [Daniel B.](https://github.com/danieltomasz)
- Mat Rhein ([@mat_rhein7](http://twitter.com/mat_rhein7))
- [Ollie Lovell](https://www.ollielovell.com/)
- Faiz MK ([@faizkhuzaimah](https://twitter.com/faizkhuzaimah))
- 更多赞助者和匿名支持者



