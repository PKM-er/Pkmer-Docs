---
uid: 2023080322294511
title: Obsidian 插件：Workona To Obsidian
tags: ['obsidian插件', 'readme']
description: 用于导入 Workona 资源。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Workona To Obsidian

> [!Note] 插件名片
> - 插件名称：Workona To Obsidian
> - 插件作者：Holmes555
> - 插件说明：用于导入 Workona 资源。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Holmes555/workona-to-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?workona-to-obsidian)

## 概述

用于导入 Workona 资源。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Holmes555/workona-to-obsidian/master/README.md)
>

---

## Readme(翻译）

下面是 [[workona-to-obsidian]] 插件的自述翻译

# Workona To Obsidian 插件

[![ko-fi](https://img.shields.io/badge/Ko--Fi-holmes555-success)](https://ko-fi.com/holmes555?style=flat)

[![paypal](https://img.shields.io/badge/Paypal-holmes555-success)](https://paypal.me/holmes555)

![最新发布下载次数](https://img.shields.io/github/downloads/Holmes555/workona-to-obsidian/main.js?style=flat)

![GitHub 许可证](https://img.shields.io/github/license/Holmes555/workona-to-obsidian?style=flat)

这个插件允许你从 Workona 生成的 JSON 文件中导入所有资源。它将创建与你的工作区和资源部分相同的文件夹结构。对于每个资源，它将创建一个新的.md 笔记，其中实现了你提供的模板或默认模板：

```
---
创建日期：{{date}}
修改日期：{{date}}
标签：Workona，{{workspaceSectionTitleTag}}，{{workspaceSubSectionTitleTag}}，{{resourceSectionTitleTag}}
---

# {{标题}}

源链接：{{url}}

描述：{{description}}
```

如果您正在指定自己的模板，您可以从以下变量中选择：

```
[标题，日期，工作区部分标题标签，工作区子部分标题标签，资源部分标题标签，链接，描述]

## 如何使用

- 通过社区插件进行安装
- 转到 Workona 以生成包含所有数据的 JSON 文件
- 在 Workona To Obsidian 插件的设置中选择 JSON 文件，或将文件数据复制/粘贴到文本区域中
- 您可以选择模板 .md 文件，该文件应为 [Handlebars 模板文件](https://handlebarsjs.com/guide/#what-is-handlebars)。
- 选择是否要覆盖具有相同名称的旧文件
- 指定导入文件的根文件夹
- 运行导入
- 你令人惊叹！

## 更新日志

**[0.1.3]** - 添加了使用自定义模板.md文件进行导入的功能，可以按照您的格式进行导入。  
**[0.1.4]** - 格式化默认模板，以生成正确的标签。替换文件名中的“|”符号。  
**[0.2.0]** - 添加了比较Workona JSON文件并仅导出新资源的功能，这样您就可以更新Obsidian而不会产生重复。

## 注意

Workona To Obsidian仍处于早期阶段，因为我只是在业余时间为自己使用而开发它。
在这个阶段，它只能导入资源，但我计划也添加选项卡、笔记和任务的转移功能。

如果你想支持我：[ko-fi](https://ko-fi.com/holmes555) 或直接通过 [PayPal](https://paypal.me/holmes555) 支付。

欢迎提出问题或贡献。
https://github.com/Holmes555/workona-to-obsidian



