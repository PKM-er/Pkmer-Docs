---
uid: 20230718172333
title: Obsidian 插件：Show Whitespace 显示不易察觉的字符
tags: [Obsidian, 插件, 字符, 制表符, 空格]
description: Obsidian 插件：Show Whitespace 显示不易察觉的字符，对于 Obsidian 这样对输入较为严格的编辑器，或许可以帮你在初学阶段，自我发现一些格式错误。
author: OS
type: basic
draft: false
editable: false
modified: 20230825093656
---

# Obsidian 插件：Show Whitespace 显示不易察觉的字符

## 概述

该插件可以显示一些不易差距的字符，对于 Obsidian 这样对输入较为严格的编辑器，或许可以帮你在初学阶段，自我发现一些格式错误。

> [!Note] 插件名片
> - 插件名称：Show Whitespace
> - 插件版本：0.3.1
> - 插件作者：death_au
> - 插件描述：在编辑器中显示空白和制表符
> - 插件分类：[' 界面相关 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/deathau/cm-show-whitespace-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cm-show-whitespace-obsidian)

## 效果&特性

在编辑器中强化显示你输入的空格，防止因为不可见的输入导致格式错乱。

![image.png](https://cdn.pkmer.cn/images/20230718174628.png!pkmer)

- 支持显示连续的空格字符
- 支持显示单个空格字符
- 支持显示行尾多余的空格字符
- 显示或隐藏尾随空格字符
- 显示 tab 产生缩进和制表符
- 显示截断换行符

## 使用

### 注意事项

目前这一切都是实验性的，所以某些部分可能无法正常工作等。

某些 CSS 类等可能会干扰它，并使空白字符更加突出。

请查看发布中的 styles.css，以了解添加的样式以进行自定义。

如果您希望使用不同的字符，可以在自定义 CSS 中覆盖以下 CSS 变量。

  - `--spaceChar`
  - `--trailingSpaceChar`
  - `--singleSpaceChar`
  - `--tabChar`
  - `--newlineChar`
  - `--strictLineBreakChar`

## 兼容性

自定义插件仅适用于 Obsidian v0.9.7+。

此存储库的当前 API 目标为 Obsidian **v0.10.0**。

> [!Warning] 注意
> - 此插件在 Obsidian 1.0.x 之后的版本已经失效
> - 此插件不适配移动端版本