---
uid: 1793625622534001
title: "Obsidian 插件：TBX Term Import"
tags: ["表格", "数据处理", "效率工具", "obsidian插件"]
description: "Import local term records with language labels into a glossary table. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TBX Term Import

> [!Note] 插件名片
> - 插件名称：TBX Term Import
> - 插件作者：theluckystrike
> - 插件说明：Import local term records with language labels into a glossary table. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/tbx-term-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tbx-term-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/tbx-term-import/master/README.md)



## 概述

TBX Term Import 旨在解决将本地术语库文件转化为 Obsidian 笔记的痛点。它允许用户直接加载本地的 TBX v2 格式文件，通过选择源语言和目标语言标签，生成包含双语列的 Markdown 表格。整个过程在本地内存中完成，无需上传数据或注册账号，既保护了隐私，又确保了源文件不被修改。

典型场景适用于需要快速建立双语词汇表的个人用户。例如，你可以导入一份包含英语和德语的泵送设备术语库，在预览界面确认概念 ID 和定义无误后，一键生成名为 Glossary 的笔记。若需处理多个文件，Pro 版本支持批量导入，每个文件会生成独立的笔记和报告，方便分类管理。

相比通用的 TBX 转换器，该插件专注于“检查后使用”的小规模术语库。它严格拒绝 TBX v3 结构及 DTD 声明，确保数据纯净。特色功能包括精确的语言标签匹配（如区分 en 和 en-US）以及 Pro 版本的合并审查功能，能对比新旧术语库，标记新增、变更和保留的概念，帮助用户追踪术语演变。

使用前需注意，该插件仅支持 TBX v2 结构，不支持 v3 或反向导出。文件限制为 4 MiB 且不超过 10000 条记录，不适合处理大型或复杂的企业级术语库。此外，手动编辑生成的表格不会更新内部合并数据，若需后续合并，请保留笔记中的特定数据块。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


