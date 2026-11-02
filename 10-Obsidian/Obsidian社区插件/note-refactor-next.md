---
uid: 1793625618558001
title: "Obsidian 插件：Note Refactor Next"
tags: ["文件管理", "编辑工具", "效率工具", "obsidian插件"]
description: "Extract selected text into new notes and split notes. A maintained continuation of Note Refactor by James Lynch. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Refactor Next

> [!Note] 插件名片
> - 插件名称：Note Refactor Next
> - 插件作者：Linking Your Thinking
> - 插件说明：Extract selected text into new notes and split notes. A maintained continuation of Note Refactor by James Lynch. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nickmilo/note-refactor-next)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-refactor-next)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nickmilo/note-refactor-next/master/README.md)



## 概述

Note Refactor Next 旨在解决 Obsidian 笔记中内容臃肿、难以拆分的问题，核心功能是将选中的文本提取为独立的新笔记，或将当前笔记在指定位置拆分为两部分。作为 James Lynch 原版 Note Refactor 的维护延续，它保留了原有的设计逻辑与操作习惯，主要目的是确保该功能在最新版本的 Obsidian 中稳定运行，无需用户改变既有的工作流。

典型使用场景包括整理长篇文档或会议记录。例如，当你在阅读一篇长文时，选中某段关键论述，按下默认快捷键 `Cmd/Ctrl + Shift + R`，即可瞬间将其提取为独立笔记，且文件名自动取自选中内容的第一行。另一个场景是拆分大型笔记，你可以将光标定位在某个标题处，执行“在此处拆分笔记”命令，将后续内容分离出去，从而保持单篇笔记的聚焦与轻量。

相比同类插件，其特色在于对 Obsidian 原生 API 的深度适配，如使用 `Vault.process` 处理文件操作，确保文件写入的顺序性与稳定性。默认设置更加人性化，新笔记默认保存在当前笔记同目录下，且模板自动添加 `up`、`related` 及 ISO 格式 `created` 日期属性，便于建立双向链接。此外，设置项已集成至 Obsidian 全局设置搜索中，查找配置项更为便捷。

使用前需注意，该插件要求 Obsidian 版本在 1.13 及以上，且仅支持 Markdown 视图。它不适合需要复杂自动化批量重构或高级模板引擎的用户，因为其行为与原版一致，未引入新的重构逻辑。若你依赖旧版插件的特定非标准行为，或需要更复杂的笔记拆分策略，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


