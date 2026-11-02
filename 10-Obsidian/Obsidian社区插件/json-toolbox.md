---
uid: 1793625614407000
title: "Obsidian 插件：JSON Toolbox"
tags: ["数据处理", "编辑工具", "效率工具", "obsidian插件"]
description: "View JSON as a collapsible rich tree with inline previews for images, colors, links, timestamps, JWT and more. Format, validate, convert to YAML or a table. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：JSON Toolbox

> [!Note] 插件名片
> - 插件名称：JSON Toolbox
> - 插件作者：Genglin Zheng
> - 插件说明：View JSON as a collapsible rich tree with inline previews for images, colors, links, timestamps, JWT and more. Format, validate, convert to YAML or a table. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kbmjj123/json-toolbox)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?json-toolbox)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kbmjj123/json-toolbox/master/README.md)



## 概述

JSON Toolbox 旨在解决 Obsidian 中查看 JSON 数据枯燥且难以阅读的问题。它核心功能是将 JSON 或 YAML 代码块自动渲染为可折叠的富文本树状结构，并支持格式化、验证、转换为 YAML 或表格等操作。所有解析与转换均在本地完成，无需联网即可处理数据，确保隐私安全。

典型场景包括快速调试 API 响应或阅读包含复杂嵌套结构的配置文件。例如，当 JSON 中包含图片链接、颜色代码或时间戳时，插件会直接显示缩略图、色块或可读时间，而非原始字符串。若数据是对象数组，它会自动渲染为表格，方便对比多条记录，极大提升了数据浏览效率。

相比同类插件，其特色在于支持多达 14 种内联预览类型，如 JWT、Base64、UUID 及正则表达式等，能直观展示底层数据含义。此外，它保留了原始源码在预览下方的折叠区域，方便随时核对。设置项支持中英文本地化，且完全离线运行，无遥测数据收集，适合对隐私敏感的用户。

使用前需注意，虽然核心功能离线，但内联媒体预览（如图片、音频）需从远程 URL 获取资源以渲染，若网络受限可能无法显示。该插件不适合需要大规模数据编辑、复杂逻辑处理或实时协作的场景，它主要定位为轻量级的数据查看与格式转换工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


