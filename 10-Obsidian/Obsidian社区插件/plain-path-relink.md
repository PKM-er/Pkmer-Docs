---
uid: 1793625620122001
title: "Obsidian 插件：Plain Path Relink"
tags: ["文件管理", "模板与链接处理", "效率工具", "obsidian插件"]
description: "When you move notes or folders, rewrite plain-text paths that Obsidian does not update, such as paths in frontmatter or inline code, and log mentions left unchanged. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Plain Path Relink

> [!Note] 插件名片
> - 插件名称：Plain Path Relink
> - 插件作者：cge
> - 插件说明：When you move notes or folders, rewrite plain-text paths that Obsidian does not update, such as paths in frontmatter or inline code, and log mentions left unchanged. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/goeun23/obsidian-plain-path-relink)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plain-path-relink)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/goeun23/obsidian-plain-path-relink/master/README.md)



## 概述

Plain Path Relink 旨在解决 Obsidian 在移动或重命名笔记时，仅更新双链和 Markdown 链接，却忽略 frontmatter 及行内代码中纯文本路径的问题。该插件的核心功能是自动扫描库内所有 Markdown 文件，将指定范围内的旧路径精确替换为新路径，确保诸如 `source_path` 或代码块中的文件引用始终指向正确位置，从而避免笔记移动后出现大量断链。

典型使用场景包括整理大型知识库或归档项目文档。例如，当你将 `sources/2026/meeting-notes.md` 移动到新目录时，插件会自动更新其他笔记 frontmatter 中引用的该路径，以及正文中用反引号包裹的路径文本。此外，它还能记录那些未被修改的提及，如位于排除文件夹外的笔记或不含扩展名的部分路径，并在日志文件中详细列出这些位置，方便你手动检查。

相比同类插件，Plain Path Relink 的特色在于其精细的控制能力与透明的反馈机制。它允许用户通过设置“重写文件夹”来限定修改范围，保护特定目录（如原始资料库）不被自动更改。同时，它绝不触碰 Obsidian 已自动处理的双链和 Markdown 链接，避免重复操作。每次移动后，插件会生成通知摘要，并可选地将操作详情追加到指定的日志笔记中，清晰展示哪些路径被更新、哪些被跳过，极大提升了维护大型库时的可追溯性。

使用前需注意，该插件仅响应 Obsidian 内部触发的移动或重命名事件，通过文件管理器、Git 或脚本在外部进行的文件移动无法被检测。此外，它仅处理完全匹配且包含 `.md` 扩展名的路径，不含扩展名的部分路径不会被自动修改，而是记录在日志中。因此，如果你主要依赖外部工具管理文件结构，或希望插件能模糊匹配并自动补全路径，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


