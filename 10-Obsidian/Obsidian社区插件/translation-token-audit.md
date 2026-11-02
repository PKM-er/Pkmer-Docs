---
uid: 1793625623741000
title: "Obsidian 插件：Translation Token Audit"
tags: ["文字处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Find missing, added, or changed placeholders in translated line pairs. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Translation Token Audit

> [!Note] 插件名片
> - 插件名称：Translation Token Audit
> - 插件作者：theluckystrike
> - 插件说明：Find missing, added, or changed placeholders in translated line pairs. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/translation-token-audit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?translation-token-audit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/translation-token-audit/master/README.md)



## 概述

Translation Token Audit 是一款专注于本地化质量控制的工具，旨在解决翻译过程中占位符丢失或错位的问题。它通过对比源语言与目标语言笔记中的每一行文本，精准识别缺失、新增或类型变更的变量标记。该插件仅读取本地 Markdown 文件，不会修改任何文本内容，确保在将字符串导入应用程序前，所有支持的占位符格式均保持一致。

典型使用场景是开发者或译者在进行最终校对时。例如，当你将英文界面字符串翻译为中文后，可以使用该插件快速检查 `{name}` 或 `%d` 等变量是否完整保留。若源文件中有两个 `{n}` 而译文只有一个，报告会明确提示“Missing {n} × 1”，让你能迅速定位并修正错误，避免应用运行时出现显示异常。

相比其他通用检查工具，它的特色在于对占位符语法的精细解析。除了支持常见的单双花括号和 printf 格式外，Pro 版本还额外支持 `${name}` 语法及批量文件夹配对检查。它能区分命名占位符与编号占位符，并检测未编号 printf 占位符的顺序变化，这种细粒度的对比能力在同类插件中较为少见，能有效捕捉细微的逻辑错误。

使用前需注意，该插件仅比较占位符结构，不评估翻译的语义准确性或应用渲染效果。它要求源文件和译文文件严格保持行对齐，若行数不一致需先手动调整。此外，它不支持从 JSON 或 YAML 等结构化数据中提取字符串，也不支持任意自定义正则表达式。如果你需要自动翻译服务或处理复杂的 ICU 嵌套语法，此插件可能无法满足需求，建议结合其他工具使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


