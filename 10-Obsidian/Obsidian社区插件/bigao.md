---
uid: 1793625611090000
title: "Obsidian 插件：Collate"
tags: ["文字处理", "编辑工具", "效率工具", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Collate

> [!Note] 插件名片
> - 插件名称：Collate
> - 插件作者：SigiL
> - 插件说明：
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ouatis/obsidian-bigao)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bigao)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ouatis/obsidian-bigao/master/README.md)



## 概述

Collate 是一款专为 Obsidian 设计的笔记对比工具，核心功能是将两篇笔记以左右或上下分屏形式并排展示，并精确到词级高亮显示差异。它直接读取编辑器中未保存的缓冲区内容，确保你看到的对比结果与当前编辑状态实时同步。高亮仅用于视觉提示，绝不会修改或写入任何笔记内容，让你能安全地审视文本变化，而无需担心误操作导致数据丢失。

典型使用场景包括校对长文草稿或合并不同版本的文档。例如，当你修改了论文的第二稿，可以将其与第一稿并排打开，快速定位修改过的具体词汇，避免逐行阅读带来的疲劳。另一个场景是处理同步冲突，插件提供专门的命令来遍历标记为 `sync-conflict` 的笔记，并支持按块（hunk）进行合并操作，帮助你高效解决多设备同步产生的文本冲突。

相比同类插件，Collate 的最大特色在于对中文文本的精准处理。它利用 `Intl.Segmenter` 进行分词，确保中文差异是按“词”而非“行”高亮，这比传统的行级 diff 更直观、更准确。此外，它支持“对比并合并”功能，允许你在查看差异的同时直接执行合并操作，且界面风格与 Obsidian 主题保持一致，视觉干扰最小化。

使用前需注意，该插件仅支持桌面版 Obsidian，移动端不可用。全量对比视图有规模限制（单篇不超过 4000 行或 100 万字符），超出限制时会显示提示而非错误地显示“无差异”。另外，合并操作会实际修改笔记，建议在确认前备份重要文件。如果你只需要简单的行级差异查看，或者主要在移动端使用，这款插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


