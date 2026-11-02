---
uid: 1793625614845001
title: "Obsidian 插件：LinkLens"
tags: ["模板与链接处理", "文件管理", "效率工具", "obsidian插件"]
description: "Scan Markdown notes for broken internal file links. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LinkLens

> [!Note] 插件名片
> - 插件名称：LinkLens
> - 插件作者：massi910
> - 插件说明：Scan Markdown notes for broken internal file links. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/massi910/LinkLens)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?linklens)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/massi910/LinkLens/master/README.md)



## 概述

LinkLens 是一款专注于扫描 Obsidian 库中失效内部文件链接的工具。它通过遍历所有 Markdown 笔记，精准定位那些指向不存在文件的 wikilink、Markdown 链接或嵌入引用。扫描结果会详细列出每一处缺失链接的源笔记、目标路径、原始语法类型以及具体的行列位置，帮助用户快速识别并修复断链，确保知识库内部引用的完整性。

典型使用场景包括定期维护大型知识库或整理旧笔记。例如，当你重命名或移动了大量附件和笔记后，可以使用 LinkLens 一次性找出所有指向旧路径的链接，避免手动逐个检查的繁琐。另一个场景是清理长期未维护的库，通过扫描发现指向已删除文件的引用，从而决定是恢复文件还是更新链接，保持库的整洁。

相比其他链接检查工具，LinkLens 的特色在于其严谨的状态管理和导航体验。它严格区分扫描、空闲、错误等状态，并在扫描过程中若检测到源文件被修改，会拒绝提供可能过时的结果，确保数据准确性。此外，它支持分页浏览大量结果，并允许直接点击“打开源文件”在编辑器中定位到具体链接位置，方便手动编辑。插件不会自动修改笔记或创建缺失文件，所有操作均由用户手动完成。

需要注意的是，LinkLens 仅检查文件是否存在，不验证标题或块引用的有效性，也不扫描非 Markdown 格式的文件。由于依赖 Obsidian 的元数据缓存，扫描并非原子快照，编辑笔记后需等待索引更新再重新扫描。如果你需要自动修复链接、检查标题引用或扫描非 Markdown 文件，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


