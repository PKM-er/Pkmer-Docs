---
uid: 1793625624986001
title: "Obsidian 插件：Zim Notebook Import"
tags: ["文件管理", "第三方工具集成", "数据处理", "obsidian插件"]
description: "Convert basic Zim Desktop Wiki pages into linked Markdown notes. Migrate a Zim notebook folder with a preview, and write the Markdown pages to a new folder. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Zim Notebook Import

> [!Note] 插件名片
> - 插件名称：Zim Notebook Import
> - 插件作者：theluckystrike
> - 插件说明：Convert basic Zim Desktop Wiki pages into linked Markdown notes. Migrate a Zim notebook folder with a preview, and write the Markdown pages to a new folder. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/zim-notebook-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zim-notebook-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/zim-notebook-import/master/README.md)



## 概述

Zim Notebook Import 旨在解决从 Zim Desktop Wiki 迁移笔记到 Obsidian 的痛点，核心功能是将 Zim 的 `.txt` 页面转换为带有内部链接的 Markdown 笔记。它通过解析 Zim 特有的语法，如标题、列表、代码块和复选框，将其映射为 Obsidian 兼容的格式，并自动处理页面间的链接关系，确保笔记在迁移后保持结构完整和可导航性。

典型使用场景包括将个人知识库从 Zim 整体迁移至 Obsidian，或仅导入特定子文件夹。例如，你可以将 Zim 笔记文件夹复制到 Obsidian 库中，运行插件后预览转换计划，确认路径映射无误后写入新文件夹。此时，源文件保留在原位，方便你逐页对比转换结果，确保内容准确无误。

相比同类工具，该插件的特色在于其严谨的冲突检测机制和详细的导入报告。它会在写入前检查目标路径是否存在冲突，防止覆盖现有文件，并生成一份报告，列出未解析的链接、不支持的语法片段及保留的源属性。此外，Pro 版本支持保存导入规则，并允许在后续通过快照对比源文件的变化，便于增量更新。

使用前需注意，该插件仅支持 Zim 0.4 至 0.6 版本的基础语法，图片、表格及复杂对象块将保留为源文本而非转换。它不适合需要完全自动化、无预览直接覆盖的场景，也不支持合并已编辑的输出笔记。若源文件在预览后发生变更，需重新生成计划。建议将生成的报告文件纳入版本控制，以便追溯转换细节。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


