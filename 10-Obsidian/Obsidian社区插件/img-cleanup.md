---
uid: 1793625614167001
title: "Obsidian 插件：Img Cleanup"
tags: ["文件管理", "图片与PDF", "效率工具", "obsidian插件"]
description: "Selective attachment cleanup: detects images unlinked from a note and offers to send them to the trash. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Img Cleanup

> [!Note] 插件名片
> - 插件名称：Img Cleanup
> - 插件作者：Radix
> - 插件说明：Selective attachment cleanup: detects images unlinked from a note and offers to send them to the trash. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/radixtenshi/obsidian-img)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?img-cleanup)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/radixtenshi/obsidian-img/master/README.md)



## 概述

Img Cleanup 专注于解决 Obsidian 笔记编辑过程中产生的“孤儿”附件问题。当你在笔记中删除或移动图片引用后，该插件能实时检测到这些不再被任何笔记链接的附件，并主动提示你将其移入回收站。它仅监控指定文件夹（默认为 `.img/`）内的文件，支持 Markdown 和 Wiki 链接格式，确保清理操作精准且安全，避免误删仍在使用的资源。

典型场景包括：当你重构笔记结构，将某张配图从 A 笔记移至 B 笔记，但忘记删除 A 笔记中的旧引用时，插件会在你停止输入 1.5 秒后弹出提示，列出该图片供你确认删除。另一个场景是批量整理素材库，若你误删了某张图的所有引用，插件会立即捕获这一变化，让你快速清理磁盘空间，而无需手动遍历文件夹查找孤立文件。

相比其他清理工具，Img Cleanup 的核心特色在于其“智能防误删”机制与完整的操作追溯能力。它会自动检查反向链接，若其他笔记仍引用该文件，则不会提供删除选项，极大降低了误操作风险。此外，插件提供“不再询问”策略，允许你设定永久删除或保留规则，减少重复弹窗干扰。所有操作均记录在 JSONL 日志中，支持查看历史、打开文件或清空记录，且严格遵循 Obsidian 的回收站设置，绝不进行不可逆的永久删除。

需要注意的是，该插件仅处理附件（如图片），不扫描未被任何笔记引用的孤立文件，也不支持 Canvas 或笔记间的链接清理。如果你需要全面扫描整个库中的孤儿文件，或希望清理非指定文件夹内的附件，此插件可能无法满足需求。此外，它依赖对 `.md` 文件变化的监听，若你频繁进行大规模批量重命名或移动操作，可能会触发多次提示，建议配合“不再询问”策略使用以提升效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


