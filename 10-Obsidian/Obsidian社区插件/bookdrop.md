---
uid: 1793625608012000
title: "Obsidian 插件：Bookdrop"
tags: ["第三方工具集成", "模板与链接处理", "效率工具", "obsidian插件"]
description: "Drop a book into your vault: search Kakao Book Search or Google Books by title, author, or ISBN, then create a templated book note or fill the current note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bookdrop

> [!Note] 插件名片
> - 插件名称：Bookdrop
> - 插件作者：Paul Hong
> - 插件说明：Drop a book into your vault: search Kakao Book Search or Google Books by title, author, or ISBN, then create a templated book note or fill the current note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/b2winus/bookdrop)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bookdrop)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/b2winus/bookdrop/master/README.md)



## 概述

Bookdrop 旨在解决在 Obsidian 中手动整理书籍元数据的繁琐问题。它允许用户通过书名、作者或 ISBN 快速搜索 Kakao Book Search、Aladin、Google Books 和 Open Library 四个数据源，并自动将搜索结果转化为包含封面、作者、出版社、ISBN 及简介的结构化笔记。插件支持创建新笔记、在当前光标处插入信息块，或补全现有笔记的 Frontmatter 属性，确保书籍信息以统一、干净的格式存入你的知识库。

典型场景包括快速建立阅读清单或补充已有笔记。例如，当你读到一本好书时，只需粘贴 ISBN，Bookdrop 即可自动抓取完整信息并生成笔记；或者，如果你已有一篇关于某本书的草稿，可以使用“填充 Frontmatter”功能，自动补全缺失的页数、目录或封面链接，且不会覆盖你已手动填写的内容。此外，插件内置阅读日志功能，可记录阅读状态、日期、评分及页码，并生成基于 Bases 的书架视图，方便直观地管理阅读进度。

相比同类插件，Bookdrop 的核心特色在于多源数据互补与智能回退机制。当主要搜索源缺少某些字段（如目录或原书名）时，插件会自动通过 ISBN 查询其他源以填补空白，确保韩文与国际书籍都能获得一致且完整的信息。它支持条件模板，仅在数据存在时显示相应章节，避免笔记中出现空行。此外，界面支持中英文切换，并针对韩语输入法做了优化，确保在组合字符时不会误触发选择操作，对韩语用户尤为友好。

使用前需注意，Kakao 和 Aladin 数据源需要申请免费的 API Key 才能使用，而 Google Books 和 Open Library 则无需配置即可直接搜索。该插件主要面向希望自动化书籍元数据管理的用户，不适合需要深度编辑书籍内部内容或进行复杂文献引用的场景。如果你主要阅读非韩文且非英文的书籍，或者对书籍数据的字段有非常定制化的需求，可能需要自行调整模板或寻找其他更通用的元数据插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


