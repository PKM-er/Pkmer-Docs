---
uid: 1793625612804000
title: "Obsidian 插件：Fast Find 10K"
tags: ["搜索与排序", "效率工具", "第三方工具集成", "obsidian插件"]
description: "Fast fuzzy search for large vaults: titles first, then headings, then content. Live preview, typo tolerance, finds duplicates, instant on 10k+ notes, uses Smart Connections if present. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Fast Find 10K

> [!Note] 插件名片
> - 插件名称：Fast Find 10K
> - 插件作者：Simon Späti
> - 插件说明：Fast fuzzy search for large vaults: titles first, then headings, then content. Live preview, typo tolerance, finds duplicates, instant on 10k+ notes, uses Smart Connections if present. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '效率工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ssp-data/obsidian-fast-find-10k)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fast-find)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ssp-data/obsidian-fast-find-10k/master/README.md)



## 概述

Fast Find 10K 专为拥有数千甚至上万篇笔记的大型库设计，旨在解决原生搜索在海量数据下响应缓慢、结果杂乱无章的痛点。它内置基于 Rust 编译的 WebAssembly 搜索引擎，能在极短时间内完成索引，实现毫秒级的模糊搜索。该插件采用分层排序机制，优先匹配标题和别名，其次才是正文内容，并结合使用频率与时间权重，确保最相关的笔记始终排在列表顶端，让查找过程既快速又精准。

想象一下，当你需要查找一篇关于“故障排除”的笔记，但只记得拼写为“troubleshoot”时，Fast Find 10K 能容忍拼写错误，直接定位到正确笔记。另一个典型场景是避免重复创建笔记：在输入关键词时，插件右下角会实时显示相似笔记，若你试图新建一篇已存在的“AI 工程”笔记，它会立即提示“已有相似笔记”，从而防止库中堆积大量内容雷同的冗余文件。

相比 Omnisearch 或 Quick Switcher，Fast Find 10K 的核心优势在于其极致的速度与智能的防错机制。它不仅支持模糊匹配，还严格限制误匹配范围，例如输入“invoice”不会错误匹配到“Brand Voice”。此外，它深度整合了 Smart Connections 插件（若已安装），利用语义嵌入提供“相似笔记”建议，并允许用户通过快捷键查看每条结果被排名的具体原因，这种透明度在同类插件中较为罕见。

需要注意的是，如果你的笔记库少于 1,000 篇，Obsidian 原生搜索或 Quick Switcher 已足够高效，安装此插件可能显得多余。该插件主要服务于追求极致检索效率、依赖搜索而非文件夹结构管理笔记的重度用户。对于仅需简单关键词匹配、不关心模糊容错或语义相似性的轻量级用户，其复杂的功能配置可能并非必需。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


