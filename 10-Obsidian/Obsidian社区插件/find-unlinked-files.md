---
uid: 20230329145816
title: Obsidian 插件：Find unlinked files 快速查找没有链接的文件
tags: [Obsidian, 插件, 文件管理, 失效链接, 笔记]
description: Obsidian 插件：Find unlinked files 快速查找没有链接的文件
author: OS
type: other
draft: false
editable: false
modified: 20230531200112
---

# Obsidian 插件：Find unlinked files 快速查找没有链接的文件

## 概述

这个插件会遍历你的整个仓库，并搜索没有反向链接的文件。然后，它将创建一个文件，其中包含指向这些未链接文件的链接列表。

利用这列表，您可以删除这些未使用的文件或将它们重新利用到它应该有的位置。

> [!Note] 插件名片
> - 插件名称：Find unlinked files
> - 插件作者：Vinzent
> - 插件说明：在仓库中查找未在任何位置链接的文件
> - 插件项目地址：[点我跳转](https://github.com/Vinzent03/find-unlinked-files)
> - 插件适配：仅适用于 Obsidian v0.9.7+。

## 效果&特性

1. 寻找空文件，里面内容未空
2. 寻找孤立笔记，即没有任何链接到此笔记，也没有连接到其他笔记
3. 寻找没有创建链接的笔记，比如建立内链语法，但是没有对应的笔记

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Find unlinked files
3. 安装
4. 开启插件

### 使用

- 添加忽略文件
- 添加忽略文件夹
- 添加忽略带有某个标签的文件
- 添加忽略使用链接的文件
- 添加忽略特定文件类型
- 可以自定义输出整理未链接文件列表的名字，方便你查找

> [!Tip] 相关推荐
> - [[attachment-management]]：可以基于一些建议规则，自动化归类你笔记中的附件内容
> - [[settings-search]]：提供搜索 Obsidian 设置和插件设置选项的能力
> - [[nl-fast-image-cleaner]]：快速删除笔记中图片和引用链接
> - [[oz-clear-unused-images]]：清除笔记中不再使用的图像以节省空间
> - [[obsidian-regex-pipeline]]：让用户用自定义的正则表达式进行格式化文本的插件，相比 Obsidian 自带的搜索替换，Regex Pipeline 利用正则表达式这个强大的文本处理技术可以执行更复杂的文本操作