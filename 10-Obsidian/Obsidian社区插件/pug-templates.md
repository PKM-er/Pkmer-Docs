---
uid: 2024100113283023
title: Obsidian 插件：Pug Templates
tags: ['编辑工具', '模板与链接处理', '自定义命令', 'obsidian插件']
description: 在您的保险库中使用Pug模板引擎。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pug Templates

> [!Note] 插件名片
> - 插件名称：Pug Templates
> - 插件作者：Nicholas Wilcox
> - 插件说明：在您的保险库中使用Pug模板引擎。
> - 插件分类：['编辑工具', '模板与链接处理', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nicholas-wilcox/pug-templates-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pug-templates)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nicholas-wilcox/pug-templates-obsidian-plugin/main/README.md)



## 概述

该插件允许在您的Obsidian vault中使用Pug模板引擎。通过在Markdown代码块中使用`pug`语法，可以渲染Pug模板，将当前笔记的属性作为变量`fm`包含在Pug的渲染上下文中。此插件使用FileSystemAdapter API读取配置目录中的文件。还支持使用`include`和`extends`来引用部分模板。此外，与Dataview插件集成，将Dataview的API暴露给Pug渲染上下文。然而，并非所有Dataview JavaScript API方法都受支持。通过这个插件，您可以更方便地使用Pug模板语言处理Obsidian笔记。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



