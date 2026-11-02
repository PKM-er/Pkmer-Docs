---
uid: 1793625614671000
title: "Obsidian 插件：Labelled Links"
tags: ["模板与链接处理", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Label your links: give each link a relation, show the inverse relation from the other end, and browse every relation of a note in one pane. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Labelled Links

> [!Note] 插件名片
> - 插件名称：Labelled Links
> - 插件作者：Michael Naumov
> - 插件说明：Label your links: give each link a relation, show the inverse relation from the other end, and browse every relation of a note in one pane. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-labelled-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?labelled-links)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-labelled-links/master/README.md)



## 概述

Labelled Links 旨在解决 Obsidian 中普通链接仅表示“存在连接”而无法表达具体语义的问题。它通过识别笔记中的属性或内联字段（如 `employer:: [[Acme]]`），将链接转化为带有明确标签的关系。核心功能包括在链接旁显示标签徽章、在侧边栏集中展示某篇笔记的所有双向关系，以及自动计算并显示反向关系（例如从“孩子”视角自动识别为“父母”），让笔记间的逻辑联系一目了然。

典型使用场景包括构建人物关系网或知识图谱。例如，在记录家庭成员时，你可以将 Alice 链接到 Bob 并标记为 `child`，此时在 Bob 的笔记中，该链接会自动显示为 `parent`，无需手动维护反向数据。另一个场景是整理项目文档，通过 `depends_on` 标签明确模块间的依赖关系，并在关系面板中快速浏览所有上游和下游依赖，避免在复杂的反向链接列表中迷失方向。

相比同类插件，Labelled Links 的特色在于其非侵入性和高级关系推导能力。它不修改笔记原文，所有关系数据仅存在于内存中，确保库文件在没有插件时依然可读。此外，它支持组合规则（如通过“父母”和“兄弟姐妹”推导“阿姨”）、子标签分类以及预设包（如亲属关系预设），并提供了类型化 API 供其他插件查询，这些功能在 Graph Edge Notes 或 Minder Nexus 等竞品中较为少见或处理方式不同。

使用前需注意，该插件主要服务于桌面端和移动端阅读体验，且需要用户预先在设置中声明标签对（如 `parent <-> child`）才能启用反向显示。它不适合需要直接修改笔记内容以存储反向属性的用户，也不适合仅依赖图谱视图进行导航的场景，因为它的核心优势在于编辑器内的链接徽章和独立的关系面板，而非图谱边缘的可视化。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


