---
uid: 1793625611151001
title: "Obsidian 插件：Concepts"
tags: ["模板与链接处理", "效率工具", "导航与状态栏", "obsidian插件"]
description: "Organize, track, and link concepts stored in callout blocks. Make your vault a wikipedia. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Concepts

> [!Note] 插件名片
> - 插件名称：Concepts
> - 插件作者：Yiran
> - 插件说明：Organize, track, and link concepts stored in callout blocks. Make your vault a wikipedia. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '效率工具', '导航与状态栏', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yiran-frank-mao/obsidian-concepts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?concepts)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yiran-frank-mao/obsidian-concepts/master/README.md)



## 概述

Concepts 插件旨在将你的 Obsidian 库转化为类似维基百科的概念索引系统。它通过识别和追踪 Callout 块（如定义、定理等），为每个概念建立稳定的数据库记录。核心功能包括自动为 Callout 分配唯一的块 ID，并允许你通过快捷键或命令快速在笔记间插入指向这些概念的双向链接，从而构建起结构化的知识网络。

典型场景适用于数学或学术笔记管理。例如，当你写下“Banach 空间”的定义 Callout 后，只需点击按钮将其注册为概念。之后在另一篇笔记中选中“Banach 空间”并执行链接命令，插件会自动生成指向原定义的链接。若遇到“product”这类多义词，插件会弹出列表让你选择具体指代拓扑积还是笛卡尔积，确保链接精准无误。

相比普通链接插件，Concepts 的特色在于其强大的别名匹配与自动维护能力。支持使用正则表达式定义别名，以覆盖复数形式或不同措辞。当 Callout 被移动到其他笔记时，插件会自动更新数据库记录，并全库重写所有指向该概念的链接路径，确保链接永不失效。此外，它生成的概念记录是纯 Markdown 文件，即使卸载插件，数据依然可读。

使用前需注意，Callout 标题应为纯文本，且移动 Callout 时必须连同下方的块 ID 一起移动，否则会导致身份追踪失效。该插件不适合需要复杂富文本标题或非 Callout 格式概念管理的用户。若你的主题或插件严重修改了渲染 API，可能会影响按钮显示位置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


