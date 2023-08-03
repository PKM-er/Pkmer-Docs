---
uid: 2023080322150291
title: Obsidian 插件：Better Inline Fields
tags: ['搜索/排序', '界面相关', '笔记文件处理', '统计', 'obsidian插件', 'readme']
description: 增强Dataview样式内联字段
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Better Inline Fields

> [!Note] 插件名片
> - 插件名称：Better Inline Fields
> - 插件作者：David Sarman
> - 插件说明：增强 Dataview 样式内联字段
> - 插件分类：[' 搜索/排序 ', ' 界面相关 ', ' 笔记文件处理 ', ' 统计 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dsarman/better-inline-fields)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?better-inline-fields)

## 概述

增强 Dataview 样式内联字段

![Better Inline Fields](https://cdn.pkmer.cn/covers/better-inline-fields.GIF!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dsarman/better-inline-fields/master/README.md)
>

---

## Readme(翻译）

下面是 [[better-inline-fields]] 插件的自述翻译

# 更好的内联字段

这是一个简单的 Obsidian 插件，旨在改进与 [Dataview内联字段](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/)（例如 `Some Field:: value`）的工作。

## 特点

- 复选框，允许切换内联布尔值

![复选框](https://raw.githubusercontent.com/dsarman/better-inline-fields/master/imgs/checkboxes.gif)

- 根据配置文件夹中的页面自动完成字段值（需要 [dataview](https://github.com/blacksmithgu/obsidian-dataview) 插件）。
  - 考虑别名。
  - 可以使用正则表达式通过在文本前加上正则表达式触发器（在设置中可配置，默认为“/”）来搜索自动完成的值。
    - `Field:: /.*a.*b`

![页面自动完成](https://raw.githubusercontent.com/dsarman/better-inline-fields/master/imgs/field-autocomplete.gif)

- [ ] 在其他文件中基于相同名称字段为字段值添加自动完成功能。

不兼容性

- 此插件与“各种补充”插件不兼容，该插件的“自动补充”设置已打开（请参见 [#2](https://github.com/dsarman/better-inline-fields/issues/2)）。

## 归属

- 设置表明输入使用了来自 [obsidian-periodic-notes](https://github.com/liamcain/obsidian-periodic-notes) 的代码。



