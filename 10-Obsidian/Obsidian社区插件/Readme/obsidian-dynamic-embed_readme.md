---
uid: 20230803203818
title: Obsidian 插件：【Readme】Dynamic Embed
tags: ['obsidian插件', 'readme']
description: 将片段、模板和任何可链接的内容嵌入，通过将当前范围委派给嵌入的文件，将其作为内容而不是引用来处理。
author: Ivaylo Dimitrov Dabravin
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Dynamic Embed

> [!Note] 插件名片
> - 插件名称：Dynamic Embed
> - 插件作者：Ivaylo Dimitrov Dabravin
> - 插件说明：将片段、模板和任何可链接的内容嵌入，通过将当前范围委派给嵌入的文件，将其作为内容而不是引用来处理。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/dabravin/obsidian-dynamic-embed)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-dynamic-embed)

## 概述

将片段、模板和任何可链接的内容嵌入，通过将当前范围委派给嵌入的文件，将其作为内容而不是引用来处理。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dabravin/obsidian-dynamic-embed/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-dynamic-embed]] 插件的自述翻译


# Obsidian 动态嵌入

通过将当前范围委托给嵌入文件，将片段、模板和任何可链接的内容作为内容而不是引用进行嵌入，与集成标签 `![[]]` 相反。

## 示例
导入活动保险库中存在的文件***`Script-note-template file name link.md`***的内容。
请注意，链接语法**不支持**标题/块链接（例如`[[file#heading1]]`）。
~~~
```dynamic-embed
[[Script-note-template file name link]]
```
~~~



