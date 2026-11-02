---
uid: 1793625606254000
title: "Obsidian 插件：Attachment Lens"
tags: ["文件管理", "模板与链接处理", "效率工具", "obsidian插件"]
description: "See where attachments are used, find broken attachment links, and repair them one at a time after reviewing the exact change. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Attachment Lens

> [!Note] 插件名片
> - 插件名称：Attachment Lens
> - 插件作者：Mohan Das Adhikari
> - 插件说明：See where attachments are used, find broken attachment links, and repair them one at a time after reviewing the exact change. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jokeroct/attachment-lens)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?attachment-lens)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jokeroct/attachment-lens/master/README.md)



## 概述

Attachment Lens 专注于解决 Obsidian 库中附件引用混乱的问题，核心功能是提供一份可搜索的附件清单，并精准定位每个文件在笔记、属性、Canvas 画板及 Bases 中的具体使用位置。它不仅能展示附件的详细信息，还能自动识别指向不存在文件的“断链”，例如因重命名或移动文件夹导致的图片失效，帮助用户快速掌握库内资源的使用状况。

典型场景包括整理大型知识库时，你需要确认某张截图是否被多处引用，以便安全删除或归档；或者在重构文件夹结构后，批量检查是否有笔记中的图片链接失效。通过筛选“断链引用”，你可以直观看到哪些文件缺失，并针对每一处引用进行修复，避免手动全局搜索带来的遗漏或误改。

相比其他仅能列出文件的插件，Attachment Lens 的特色在于其“安全修复”机制。它不会自动替换任何内容，而是针对每一处断链提供基于文件名和文件夹相似度的建议，并展示精确的修改预览。只有在用户确认无误后才会写入，且支持跨重启的撤销操作。此外，扫描过程只读不写，绝不触碰附件文件本身，确保数据绝对安全。

使用前需注意，该插件目前仅支持桌面端（Windows、macOS、Linux），移动端版本尚在计划中。它不适合需要自动批量重命名或移动附件文件的场景，因为插件明确禁止对附件文件进行任何物理操作。如果你的需求是自动整理文件结构，而非修复引用链接，此插件可能无法满足要求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


