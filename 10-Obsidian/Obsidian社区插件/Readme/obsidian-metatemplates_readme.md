---
uid: 2023080322223178
title: Obsidian 插件：metatemplates
tags: ['模板', 'obsidian插件', 'readme']
description: 使用YAML前置语法从模板生成笔记
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：metatemplates

> [!Note] 插件名片
> - 插件名称：metatemplates
> - 插件作者：avirut
> - 插件说明：使用 YAML 前置语法从模板生成笔记
> - 插件分类：[' 模板 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/avirut/obsidian-metatemplates)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-metatemplates)

## 概述

使用 YAML 前置语法从模板生成笔记

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/avirut/obsidian-metatemplates/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-metatemplates]] 插件的自述翻译

利用 YAML 前置元数据从模板生成笔记

免责声明

我在除了自己的保险库之外，实际上没有在任何保险库上对这个插件进行过测试，很可能有很多地方缺少适当的检查 `null` 或 `undefined` 值的地方。因此，您可能会在早期遇到重大错误。当这种情况发生时，请打开开发者工具（`ctrl/cmd + shift + i`），保存控制台错误输出，并通过此存储库的 `Issues` 选项卡报告问题。这个插件*不应该*删除您的文件或其他任何东西，但它可能偶尔不按预期工作。

基于前置元数据的模板

这个插件更多或多少是用来替代核心的 `templates` 插件。

![示例模板](https://github.com/avirut/obsidian-metatemplates/blob/master/imgs/template-sample.png?raw=true)

## 用法

首先，请参考插件设置，并指定模板文件夹的位置以及所需的日期和时间格式。

每个模板都通过其前置元数据中的 `type` 属性进行区分。然后，您还可以额外指定一个 `nameFormat` 属性和一个 `destFolder` 属性。`nameFormat` 属性将用于动态重命名 Obsidian 存储库中其他位置（但不在模板文件夹中）的相同 `type` 的笔记。也就是说，任何指定了 `nameFormat` 的模板都适用于使用该模板生成的其他笔记。`nameFormat` 属性从每个文件的其他前置元数据属性中获取，并在前置元数据发生更改时自动更新。

`destFolder` 属性与 `metatemplates: Create from template` 命令一起使用（可在命令面板中找到，并通过设置分配给热键）。当指定了此属性时，从该模板创建的任何笔记都将自动放置在指定的位置（相对于存储库根目录的路径）。

在使用元模板时，插入/创建笔记时动态填充的值 `{{date}}` 和 `{{time}}` 将被替换为 `<<date>>` 和 `<<time>>`，以减少混淆。

![示例输出](https://github.com/avirut/obsidian-metatemplates/blob/master/imgs/from-template.png?raw=true)

## 鸣谢

感谢 Discord 的 #plugins 频道中的 Liam 和 Licat 经常提供的帮助！
