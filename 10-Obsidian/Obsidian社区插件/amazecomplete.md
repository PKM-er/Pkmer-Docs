---
uid: 1793625605826000
title: "Obsidian 插件：AmazeComplete"
tags: ["编辑工具", "模板与链接处理", "日历与时间", "效率工具", "obsidian插件"]
description: "Smart unified autocomplete for natural language dates, Templater templates, and vault file links. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AmazeComplete

> [!Note] 插件名片
> - 插件名称：AmazeComplete
> - 插件作者：nout
> - 插件说明：Smart unified autocomplete for natural language dates, Templater templates, and vault file links. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '模板与链接处理', '日历与时间', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/notnout/amazecomplete)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?amazecomplete)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/notnout/amazecomplete/master/README.md)



## 概述

AmazeComplete 将自然语言日期、Templater 模板展开和库内文件链接整合在同一个触发字符（默认 @）下，解决多插件自动补全弹窗冲突、触发符号分散的问题。输入 @ 后，建议菜单会同时列出日期短语、模板文件和笔记文件，按 Enter 即可插入对应内容，无需在多个插件间切换或记忆不同触发方式。

典型场景如：写日记时输入 @next Friday 直接得到 [[2026-10-31]] 链接；整理旅行笔记时输入 @Trip 立即展开预设的行程模板；引用财务笔记时输入 @Taxes 模糊匹配到对应文件并插入 [[Taxes]] 链接，若该文件有别名则自动以 [[File|Alias]] 形式插入。

相比单独使用 Natural Language Dates 或 Templater 的补全功能，AmazeComplete 的核心特色是统一入口与键盘细分操作：Enter 执行默认动作（插入日期链接、展开模板、插入文件链接），Shift+Enter 则保留自然语言作为别名或仅插入模板文件链接而不展开，避免误操作。日期解析基于 chrono-node，支持 @in 3 days、@2 weeks ago 等灵活表达，且建议菜单内实时预览格式化结果。

需注意该插件依赖 Templater 或核心 Templates 插件来发现模板文件夹，若未安装或模板路径配置异常，模板补全可能失效；文件搜索仅覆盖 Markdown 文件及 YAML 别名，不支持非文本资源。如果你只需要简单的日期插入或已有稳定的多触发符工作流，此插件的整合价值有限，可能增加配置复杂度。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


