---
uid: 2024052909122348
title: Obsidian 插件：Mehrmaid
tags: ['第三方工具集成', '样式与美化', '图表', 'obsidian插件']
description: Enables you to put Markdown inside of Mermaid diagrams.
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mehrmaid

> [!Note] 插件名片
> - 插件名称：Mehrmaid
> - 插件作者：huterguier
> - 插件说明：Enables you to put Markdown inside of Mermaid diagrams.
> - 插件分类：[' 第三方工具集成 ', ' 样式与美化 ', ' 图表 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/huterguier/obsidian-mehrmaid)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mehrmaid)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/huterguier/obsidian-mehrmaid/master/README.md)

![Mehrmaid](https://cdn.pkmer.cn/covers/mehrmaid.png!pkmer)

## 概述

Obsidian Mehrmaid 插件扩展了 Mermaid-JS 代码块在 Obsidian 中的功能，允许在节点标签中渲染 Obsidian 生成的 Markdown 内容，包括链接、标签、代码块和最重要的 Mathjax 表达式。用户可以通过在节点内容外部添加单引号来实现在 mehrmaid 节点中渲染 Obsidian markdown。插件利用 Mermaid-JS 库来渲染图表，使用简单的 Markdown 语法定义节点和边。该插件通过首先使用 Obsidian Markdown 渲染器渲染节点内容并估计其大小，然后使用 Mermaid-JS 的 HTML 渲染器以正确的节点大小渲染图形，最后用渲染的 HTML 替换占位节点。插件解决了在 Mermaid 图表中使用 Obsidian Markdown 的问题，为用户提供了更多的图表定制和展示方式。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



