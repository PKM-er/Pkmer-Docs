---
uid: 20230822233904
title: Obsidian 插件：Tidy Footnotes
tags:
  - 文件重构
  - obsidian插件
  - 脚注
description: 可以将所有注脚都合并到一个地方，也能给注脚重新排序
author: OS
type: other
draft: false
editable: false
modified: 20230911003951
---

# Obsidian 插件：Tidy Footnotes

## 概述

可以将所有注脚都合并到一个地方，并支持给注脚重新排序

> [!Note] 插件名片
> - 插件名称：Tidy Footnotes
> - 插件作者：Charlie Chao
> - 插件说明：可以将所有注脚都合并到一个地方，也能给注脚重新排序
> - 插件分类：[' 文件重构 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/charliecm/obsidian-tidy-footnotes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tidy-footnotes)

## 效果&特性

![Tidy Footnotes](https://cdn.pkmer.cn/covers/obsidian-tidy-footnotes.png!pkmer)

## 使用

在 [Obsidian](https://obsidian.md) 中添加一个命令，可以整理你的 [脚注](https://help.obsidian.md/How+to/Format+your+notes#Footnotes)，使其易于阅读：

- 将所有脚注定义整合到一个地方，并按出现顺序排序
- 重新索引编号脚注（例如，`[^1][^4][^2]` 变为 `[^1][^2][^3]`）
- 从命令面板中运行 `Tidy Footnotes: Tidy Footnotes`【整理脚注】或者，从设置→**快捷键**中为这个命令设置快捷键。

### 注意事项

- 目前，代码块中的脚注也会被解析，而不是被忽略。
- 脚注定义的原始位置不会被保留。插件总是会将所有定义移动到找到第一个定义的位置。
- 非编号的脚注（例如 `[^abc]`）不会影响编号脚注的重新索引。
