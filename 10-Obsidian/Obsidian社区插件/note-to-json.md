---
uid: 1793625618596000
title: "Obsidian 插件：Note to JSON"
tags: ["数据处理", "编辑工具", "效率工具", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note to JSON

> [!Note] 插件名片
> - 插件名称：Note to JSON
> - 插件作者：yaobian
> - 插件说明：
> - 插件分类：['数据处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dabing119/note-to-json)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-to-json)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dabing119/note-to-json/master/README.md)



## 概述

Note to JSON 是一款专注于文本规范化与数据处理的本地插件，旨在解决 Markdown 笔记排版杂乱及 JSON 数据难以阅读或传输的问题。它提供四条核心命令：Markdown 格式化、Markdown 简化、JSON 格式化与 JSON 压缩。所有操作均在本地完成，零网络请求且无运行时依赖，确保数据隐私与安全。通过统一的规则引擎，它能快速将混乱的笔记结构整理得井井有条，或将冗长的 JSON 数据转换为紧凑或美观的格式，提升笔记的可读性与数据的可用性。

典型使用场景包括整理长期积累的笔记库和调试 API 数据。例如，当你从网页复制大量文本到 Obsidian 时，Markdown 格式化命令能自动统一列表符号、清理行尾空白并规范标题层级，使文档瞬间整洁；而在处理后端返回的 JSON 数据时，若数据被压缩成一行难以阅读，使用 JSON 格式化命令可将其展开为 2 空格缩进的可读结构，反之，若需将配置嵌入代码，使用压缩命令可将其还原为单行，方便复制粘贴。

相比同类插件，Note to JSON 在 JSON 处理上具备极高的保真度。它不依赖标准的 `JSON.stringify` 解析，而是直接重排 Token 间的空白，从而完美保留大整数精度、科学计数法及特殊转义字符，避免数据失真。此外，它能智能识别并修正从 Excel 或聊天工具复制时混入的全角空格、零宽字符等“隐形杀手”，这些字符常导致 JSON 解析失败但肉眼难辨。同时，其 Markdown 规则具备精细的保护区机制，确保代码块、数学公式及 YAML 头部内容不被误改。

使用前需注意，该插件单次处理上限为 2 MB，超大文件会被跳过。它不支持 JSON5 或 JSONC 语法，也不提供图形化树视图或键名排序功能。对于纯中文表格，由于等宽字体下中文字符宽度计算差异，竖线可能无法完全视觉对齐。此外，若整篇文档为笔记正文而非 JSON，直接执行 JSON 命令会报错，需先选中 JSON 片段。因此，它不适合需要复杂 JSON 编辑、图形化浏览或处理超大型数据文件的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


