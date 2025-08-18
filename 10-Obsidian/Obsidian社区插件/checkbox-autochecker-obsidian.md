---
uid: 20250806232035
title: Obsidian 插件：# Checkbox Autochecker 嵌套任务关联工具，自动帮你完成子任务
tags: [' 任务 ', ' 待办 ', ' 效率工具 ', 'obsidian 插件 ']
description: Obsidian 插件：# Checkbox Autochecker 嵌套任务关联工具，自动帮你完成子任务
author: OS
type: auto
draft: false
editable: false
modified: 20250806233618
---

# Obsidian 插件：# Checkbox Autochecker 嵌套任务关联工具，自动帮你完成子任务

## 概述

Obsidian 默认的任务语法，并不能在嵌套中自动将父级和子任务视为一个任务主体，需要借助其他插件完成。

> [!Note] 插件名片
> - 插件名称：Checkbox Autochecker
> - 插件作者：Klaas Klee
> - 插件说明：嵌套任务关联工具，自动帮你完成子任务
> - 插件分类：[' 任务 ', ' 待办 ', ' 效率工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/klaasklee/checkbox-autochecker-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?checkbox-autochecker)
> - 自述文件：[Readme](https://github.com/klaasklee/checkbox-autochecker-obsidian/blob/main/README.md)

## 效果&特性

1. **主要功能**：让嵌套任务语法中，父级任务和子任务产生关联，需要完成子任务变回自动勾选父级任务
2. **适用场景**：适用于以任务为主，进行 list 记录和有记录整理待办的用户，可以方便帮你自动勾选完成父级任务
3. 打字时实时工作
4. 完全支持嵌套清单和多个缩进级别。
5. 与原生 Obsidian Markdown 文件完全兼容。

## 使用

- 几乎无需其他特殊设置
- 根据子任务的完成情况自动检查或取消检查父任务。
- 3 种同步模式：
    - **松散：**仅向上传播（子 -> 父）。
    - **部分严格：**切换父级 ->仅更新未选中的子级。
    - **严格：**切换父级 ->覆盖所有子级。

## 其他

- 几个模式选项，实际使用中，效果差别不明显，且实时编辑模式和阅读模式的使用体验有区别，其他作者后面几个版本改进
- 与常见插件 [[obsidian-tasks-plugin]] 搭配不够好，比如子任务勾选后，虽然父任务会被勾选，但并不会 打上 task 插件的时间戳
