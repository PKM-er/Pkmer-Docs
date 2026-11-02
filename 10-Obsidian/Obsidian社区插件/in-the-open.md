---
uid: 1793625614182000
title: "Obsidian 插件：In the Open"
tags: ["发布工具", "第三方工具集成", "模板与链接处理", "obsidian插件"]
description: "Publish a note to your website over Micropub, with its links turned into real citations. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：In the Open

> [!Note] 插件名片
> - 插件名称：In the Open
> - 插件作者：Jorrit van der Heide
> - 插件说明：Publish a note to your website over Micropub, with its links turned into real citations. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jorritvanderheide/obsidian-in-the-open)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?in-the-open)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jorritvanderheide/obsidian-in-the-open/master/README.md)



## 概述

In the Open 解决了在 Obsidian 中写作时，内部链接和引用无法直接发布到个人网站的问题。它通过 Micropub 开放标准，将笔记一键发布为博客文章，并自动将笔记中的 `[[wikilinks]]` 转换为符合学术规范的真实引用格式，同时生成参考文献列表。这一过程不仅保留了内容的完整性，还确保了发布后的文章在外部读者眼中是专业且可追溯的。

典型场景包括学术博客或研究笔记的发布。例如，当你撰写一篇关于某项研究的评论时，笔记中通过 `[[marsh2024]]` 链接到 Zotero 中的文献。使用 In the Open 发布后，这些链接会自动变为标准的学术引用，并附带完整的参考文献列表。另一个场景是发布系列文章，笔记中指向其他已发布笔记的链接，会自动转换为指向你网站上对应文章的真实 URL，而非失效的内部链接。

相比其他导出工具，In the Open 的核心特色在于其“智能过滤”与“引用自动化”。它会自动剔除仅对 Obsidian 用户有意义的内部注释和属性，只保留标题、摘要、分类和正文内容。此外，它深度集成 Zotero 和 Better BibTeX，无需手动调整引用格式，即可根据你选择的样式生成规范的参考文献，且支持将参考文献作为独立数据发送给支持扩展的网站，让网站端可以自定义展示方式。

使用前需注意，该插件仅支持桌面端，且依赖 Pandoc 进行格式转换，若系统未安装 Pandoc，插件会提示下载内置版本。此外，它要求你的网站必须支持 Micropub 协议才能接收文章，并非所有静态网站生成器都原生支持。如果你只需要将笔记导出为 PDF 或 Word 文档，或者你的网站不支持 Micropub 标准，那么此插件可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


