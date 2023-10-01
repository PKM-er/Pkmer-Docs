---
uid: 20230329145819
title: Obsidian 插件：Lapel 为你显示标题等级
tags: [Obsidian, 插件, 标题, 快捷操作, 显示标题等级]
description: Obsidian 插件：Lapel 为你显示标题等级
author: OS
type: other
draft: false
editable: false
modified: 20230604172500
---

# Obsidian 插件：Lapel 为你显示标题等级

## 概述

在标题旁边显示标题等级，并提供快捷切换标题等级的能力

> [!Note] 插件名片
>
> - 插件名称：Lapel
> - 插件作者：liamcain
> - 插件说明：在标题旁边显示标题等级
> - 插件分类：[' 界面相关 ', ' 效率 ', ' 目录/标题 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/liamcain/obsidian-lapel)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lapel)

## 效果&特性

![Pasted image 20230215232821](https://cdn.pkmer.cn/images/9b67b733eac74ff9c2c0c7d699fd6b52_MD5.png!pkmer)

- 在编辑器中显示对应标题级别（例如 H1、H2、H3 等）。
- 点击显示标题级别，可以通过下拉菜单，快速切换标题级别。

## 使用

- Show before line numbers：控制显示的标题等级 和 编辑器行号的位置关系
    - 默认：开启，标题等级显示在行号之前。
    - 关闭：标题等级显示在行号之后。
- 自定义样式
	- 每个标题级别可以用 CSS 分别定义样式
	- 例如，如果您希望所有 H6 看起来像更多菜单，只需增加 CSS Snippets 文件如下即可：

```CSS
.cm-heading-marker[data-level="6"] {
  --heading-marker: "☰";
}
```

> [!Tip] 相关推荐
> - [[creases]]：给 Obsidian 的标题增加折叠和展开的功能。
> - [[number-headings-obsidian]]：给笔记中的标题自动编号，以及动态目录