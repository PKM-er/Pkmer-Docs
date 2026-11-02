---
uid: 1793625605931000
title: "Obsidian 插件：Anki Cloze Deletion"
tags: ["ANKI", "学习与教育", "编辑工具", "obsidian插件"]
description: "Creates Anki-compatible cloze deletions scoped to card blocks between horizontal rules. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Anki Cloze Deletion

> [!Note] 插件名片
> - 插件名称：Anki Cloze Deletion
> - 插件作者：leonfroschauer
> - 插件说明：Creates Anki-compatible cloze deletions scoped to card blocks between horizontal rules. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['ANKI', '学习与教育', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leon-3/Obsidian-Anki-Cloze)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?anki-cloze)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leon-3/Obsidian-Anki-Cloze/master/README.md)



## 概述

Anki Cloze Deletion 是一款专为 Obsidian 用户设计的轻量级插件，旨在解决手动编写 Anki 填空式卡片时编号混乱和效率低下的问题。它的核心功能是提供快速的键盘快捷键，让你能一键生成符合 Anki 标准的 `{{cN::text}}` 语法。与常规做法不同，该插件采用“卡片级”编号机制，即自动识别由水平线分隔的卡片块，确保每张新卡片的填空编号都从 `c1` 重新开始，避免了跨卡片编号递增导致的同步错误。

想象一下你在整理学习笔记，需要将一段文字转化为多张填空卡片。使用 `Ctrl+Shift+C`，你可以快速将选中的文本包裹为当前卡片的新填空项，编号自动递增；若需在同一张卡片中测试多个关联知识点，使用 `Ctrl+Alt+C` 即可复用相同的编号，使这些空白在复习时同时出现。这种操作方式极大地简化了从笔记到卡片的转换流程，无需手动计算编号或调整格式。

相比其他同类工具，该插件最显著的特色在于其严格的“卡片作用域”逻辑。它不会在整个笔记范围内追踪编号，而是严格限定在 `---` 分隔的单个卡片块内，这确保了生成的卡片在导入 Anki 时结构清晰、无冲突。此外，它具备安全编辑能力，能自动跳过 YAML 前置元数据，并阻止无效的嵌套填空结构，从源头上防止了因语法错误导致卡片无法同步的情况。

需要注意的是，该插件主要服务于 Anki-VaultSync 和 Markdown2Anki 生态，如果你不使用这些同步工具，其价值可能会打折扣。它专注于填空式卡片的创建，并不支持直接生成基础问答卡片（Basic Cards）。此外，虽然快捷键默认设置合理，但如果你习惯使用其他组合键，记得在 Obsidian 设置中重新映射。对于需要复杂卡片样式或高级同步逻辑的用户，建议配合其配套插件使用，以获得完整的体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


