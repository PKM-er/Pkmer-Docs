---
uid: 1793625611436001
title: "Obsidian 插件：CSV Glossary Lookup"
tags: ["文字处理", "效率工具", "学习与教育", "obsidian插件"]
description: "Look up selected terms in a local CSV glossary and insert a meaning. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CSV Glossary Lookup

> [!Note] 插件名片
> - 插件名称：CSV Glossary Lookup
> - 插件作者：theluckystrike
> - 插件说明：Look up selected terms in a local CSV glossary and insert a meaning. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '效率工具', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/csv-glossary-lookup)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?csv-glossary-lookup)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/csv-glossary-lookup/master/README.md)



## 概述

CSV Glossary Lookup 允许你在笔记中选中特定词汇，从本地 CSV 或 TSV 文件中查找其定义并直接插入。它不依赖网络，而是读取你指定的本地文件，支持多义词展示，让你能根据上下文选择最合适的释义。核心流程是导入文件、映射“术语”和“释义”两列，然后在编辑器中选中文字执行查找命令，即可在弹窗中查看匹配结果。

想象你在阅读一篇关于金融的文章，选中“bank”一词，插件会列出“河岸”和“银行”两个释义，你只需点击对应按钮，原文即被替换为“银行”。或者在整理课程笔记时，选中专业术语，快速插入讲义中对应的解释，无需手动复制粘贴。这种操作特别适合处理那些定义分散在外部表格或讲义中的词汇，让笔记编辑过程更加流畅。

与依赖在线词典或固定词库的插件不同，该工具完全基于你提供的本地数据，隐私性更强且内容可控。它支持精确匹配，默认忽略大小写，但可关闭以区分大小写不同的术语。免费版已包含文件导入、列映射、多义项查找及手动重载功能。若需管理多个不同主题的词库（如同时维护“医学”和“工程”术语表），或希望一次查找同时搜索多个词库，则需要 Pro 版本提供的多配置文件和跨库搜索功能。

使用前请注意，插件不会自动监控源文件的变化。如果修改了 CSV 文件，必须手动执行“重载”命令并重新选择文件，否则查找结果仍是旧数据。此外，插入释义前若笔记内容发生变动，插件会拒绝写入以防覆盖错误，此时需重新执行查找。该插件不适合需要实时联网查询、自动同步外部数据库，或希望插件自动监听文件变更的用户。文件限制为 4 MiB，且仅支持 UTF-8 编码的 CSV/TSV 格式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


