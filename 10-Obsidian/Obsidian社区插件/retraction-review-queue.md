---
uid: 1793625620813000
title: "Obsidian 插件：Retraction Review Queue"
tags: ["学术与科研", "文件管理", "效率工具", "obsidian插件"]
description: "Match a local notice list to reference notes and linked manuscripts for review. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Retraction Review Queue

> [!Note] 插件名片
> - 插件名称：Retraction Review Queue
> - 插件作者：theluckystrike
> - 插件说明：Match a local notice list to reference notes and linked manuscripts for review. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/retraction-review-queue)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?retraction-review-queue)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/retraction-review-queue/master/README.md)



## 概述

Retraction Review Queue 旨在帮助研究者快速定位受撤稿或更正通知影响的文献。它通过读取本地 CSV 通知列表，将其中的论文 DOI 与库内参考文献笔记的属性进行匹配，并进一步追踪引用这些文献的手稿，生成一份待审查清单。该插件的核心价值在于自动化繁琐的比对过程，让你能迅速识别出哪些笔记和稿件需要人工复核，从而避免在海量文献中遗漏关键的风险提示。

典型场景包括定期清理参考文献库或处理批量通知。例如，当你下载了最新的撤稿通知 CSV 文件后，只需在插件中映射 DOI 和通知类型列，点击匹配，插件便会列出所有受影响的笔记。另一个场景是检查手稿引用，若某篇被撤稿的文献被你的论文通过原生链接或 Pandoc 键引用，该手稿会自动进入审查队列，提醒你重新评估论证依据。

相比同类工具，该插件的特色在于其严谨的匹配逻辑与状态管理。它支持处理复杂的 CSV 格式（如 BOM、引号转义），并能识别 Pandoc 引用键，确保匹配精准。此外，它具备“已检查”状态记忆功能，基于笔记路径、DOI 及通知日期生成唯一标识，防止重复审查。Pro 版本还支持保存列映射和导出带时间戳的本地 JSON 报告，方便归档审查进度。

使用前需注意，该插件仅生成待办清单，不自动修改笔记内容，也不判断论文是否真正不可靠，最终决策仍需依赖人工阅读原始通知。它不适合需要实时监控 CSV 变化或自动更新笔记内容的用户，因为扫描是按需触发的。另外，若你的引用格式非常规或库结构极深，可能影响匹配效率，建议先在小范围库中测试。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


