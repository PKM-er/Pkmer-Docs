---
uid: 20231027184033
title: Obsidian 插件：Checkbox Reorder 针对任务列表的完成情况重新排序
tags: ['obsidian插件', '任务', '排序']
description: Obsidian 插件：Checkbox Reorder 针对任务列表的完成情况重新排序。将已完成的复选框重新排序，放置在相应列表的末尾。
author: OS
type: other
draft: false
editable: false
modified: 20240116114830
---

# Obsidian 插件：Checkbox Reorder 针对任务列表的完成情况重新排序

## 概述

将已完成的复选框重新排序，放置在相应列表的末尾。

> [!Note] 插件名片
> - 插件名称：Checkbox Reorder
> - 插件作者：Ivan Knöfler
> - 插件说明：将已完成的复选框重新排序，放置在相应列表的末尾。
> - 插件分类：['obsidian 插件 ', ' 任务 ', ' 排序 ']
> - 项目地址：[点我访问](https://github.com/Erl-koenig/obsidian-checkboxReorder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?checkbox-reorder)

## 使用

- 按下 CTRL + P（Mac 上为 cmd + P），然后运行“Checkbox Reorder:Reorder Checkboxes in List”
- 简单的插件，将选中的复选框放在列表的末尾
- 为了方便起见，使用键盘快捷键绑定该命令

输入：

- [x] 购物
- [ ] 清洁
- [x] 阅读
- [ ] 淋浴

输出：

- [ ] 清洁
- [ ] 淋浴
- [x] 购物
- [x] 阅读

此插件无法对嵌套/多级任务列表中第二级及更下层的任务生效排序。但对第一级的排序支持很好，且不会破坏嵌套/多级任务的结构。

P.S. 此插件没有设置选项
