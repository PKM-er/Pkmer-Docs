---
uid: 2023080322265663
title: Obsidian 插件：Simple Mention
tags: ['obsidian插件', 'readme']
description: in the text.获取高亮提及和提及建议。 查找文本中提及的所有发生。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Simple Mention

> [!Note] 插件名片
> - 插件名称：Simple Mention
> - 插件作者：der-tobi
> - 插件说明：in the text.获取高亮提及和提及建议。 查找文本中提及的所有发生。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/der-tobi/obsidian-simple-mention)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-simple-mention)

## 概述

in the text.获取高亮提及和提及建议。 查找文本中提及的所有发生。

![Simple Mention](https://cdn.pkmer.cn/covers/obsidian-simple-mention.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/der-tobi/obsidian-simple-mention/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-simple-mention]] 插件的自述翻译

# Obsidian 简单提及

一个简单的插件，当你写作时，它会在视觉上突出显示提及，并建议现有的提及。
提及前缀可以自定义，默认为 `@`。
在侧边栏中找到提及的所有出现，并跳转到文档中相应的行。
通过不同的颜色区分个人提及和其他提及。

![Obsidian简单提及概述](obsidian_general.gif)

通过短语筛选你的提及

![筛选你的提及](obsidian_filter.gif)

## 设置

您可以设置：

- 触发短语（@）
- 提及的颜色（绿色）
- 自己提及的颜色（深粉色）
- 您希望提及自己的名称（我）

## 快捷方式

### 在编辑模式下

`ctrl+space` 或 `ctrl+click` 在提及上，打开右侧面板，显示所有该提及的出现。

![编辑模式快捷键 (ctrl+space 或 ctrl+click)](obsidian_ctrl_space.gif)

### 在预览模式下

当您点击一个提及时，右侧窗格会打开，显示该提及的所有出现。

## 已知问题

- 大型保险库似乎存在问题（请参见 [问题](https://github.com/der-tobi/obsidian-simple-mention/issues/1)）。
- 调整触发短语后，需要重新启动 Obsidian 才能生效。
- 更改自己的名称后，需要重新启动 Obsidian 才能生效。
- 目前无法通过模板覆盖样式（简单修复）

## 想法

- 分组提及
  - 例如：@group-x（@bob，@lisa）
  - 用法：通过搜索@group-x 来查找所有@bob 和@lisa 的提及
- 在视图中多选提及
- 在视图中标记筛选短语
- 显示子级项目符号
- 为每个“人”设置自己的颜色



