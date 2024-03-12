---
uid: 20240227160841
title: Obsidian 插件：【Readme】Paste From History
tags: ['obsidian插件', 'readme']
description: 从编辑器的最近剪贴板历史粘贴。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Paste From History

> [!Note] 插件名片
> - 插件名称：Paste From History
> - 插件作者：Daniel Karakka
> - 插件说明：从编辑器的最近剪贴板历史粘贴。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Karakaz/obsidian-paste-from-history)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?paste-from-history)

## 概述

从编辑器的最近剪贴板历史粘贴。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Karakaz/obsidian-paste-from-history/master/README.md)

---

## Readme(翻译）

下面是 [[paste-from-history]] 插件的自述翻译

【机翻】

# 黑曜石插件：从历史记录中粘贴

## 用法

您复制或剪切的文本将被跟踪。然后，您可以从先前的剪贴板事件中粘贴文本。

![演示](https://cdn.pkmer.cn/covers/paste-from-history_2_0.gif!pkmer)

### 命令

从剪贴板历史粘贴

打开一个菜单，显示最近剪贴板文本的列表，可以选择粘贴到编辑器中。

##### 快捷键

选择一个与您的快捷键配合得很好的快捷键。以下对我来说效果很好：

- Linux & Windows: Ctrl + Shift + V
- Mac: Command + Shift + V
清除剪贴板历史记录

从插件的剪贴板历史记录中删除所有条目。

### 设置

#### 历史记录限制

您可以在设置中调整跟踪剪贴板文本事件数量的限制。默认为 `16`。

#### 历史视图

剪贴板历史视图有两种模式。

- `hovered` - 菜单浮动在编辑器上方。（默认）
- `docked` - 菜单停靠在编辑器底部。
在预览中的行数

由“停靠”视图支持

用于多行预览保留的行数。默认为 `6`。

## 限制

- Obsidian 无法访问操作系统的剪贴板，这意味着在 Obsidian 之外发生的剪贴板事件不会在此插件的剪贴板历史记录中被跟踪。
- [从剪贴板历史记录粘贴](#paste-from-clipboard-history) 仅在 _编辑视图_ 中有效。
- 目前仅支持文本内容。
- 剪贴板历史记录保存在内存中。影响：
    - 插件激活之前的剪贴板历史记录不可用。
    - 会话之间丢失剪贴板历史记录。
    - 设备之间不可用剪贴板历史记录。

## 实现细节

在 Obsidian 应用程序中，通过 `document` HTML DOM 对象保留了剪贴板 `copy` 和 `cut` 事件中所见文本的有限内存历史记录。

## 许可证

GNU LGPLv3

## 贡献

### 捐赠

任何金额的捐赠都受欢迎，并将使我能够将更多时间投入到社区事业，如这个项目。

- [Github 赞助商: Karakaz](https://github.com/sponsors/Karakaz)

### 错误、反馈和想法

请随时打开一个 [问题](https://github.com/Karakaz/obsidian-paste-from-history/issues)，我会查看一下。
