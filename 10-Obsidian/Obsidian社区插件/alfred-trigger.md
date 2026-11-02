---
uid: 1793625605777000
title: "Obsidian 插件：Alfred Trigger"
tags: ["第三方工具集成", "效率工具", "快捷键", "obsidian插件"]
description: "Triggers Alfred on the active editor. macOS only. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Alfred Trigger

> [!Note] 插件名片
> - 插件名称：Alfred Trigger
> - 插件作者：Vincent Oostindie
> - 插件说明：Triggers Alfred on the active editor. macOS only. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '快捷键', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/voostindie/obsidian-alfred-trigger-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?alfred-trigger)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/voostindie/obsidian-alfred-trigger-plugin/master/README.md)



## 概述

Alfred Trigger 是一款专为 macOS 设计的 Obsidian 插件，旨在打通 Obsidian 与 Alfred 之间的数据通道。它的核心功能是在你激活某个文档时，通过系统 URL 处理器触发 Alfred 工作流，并将当前文档的关键信息以 Base64 编码的 JSON 格式传递给 Alfred。这些数据包括文档的显示名称、本地绝对路径以及 Frontmatter 中定义的所有属性。通过这种方式，你可以将 Obsidian 中的笔记上下文无缝接入 Alfred 的自动化流程，实现跨应用的信息流转。

典型的使用场景是当你需要基于当前笔记执行复杂的系统级操作时。例如，你可以配置一个 Alfred 工作流，当触发该插件时，自动将当前笔记的标题和路径填入邮件草稿，或者根据 Frontmatter 中的 `status` 字段自动将文件移动到对应的文件夹。另一个例子是，如果你正在编辑一篇标记为 `draft` 的笔记，触发插件后，Alfred 可以识别这一状态并执行特定的归档或提醒操作，而无需手动复制粘贴文件路径或元数据。

相比其他仅传递文件路径的插件，Alfred Trigger 的特色在于其对上下文信息的深度提取。它不仅支持普通文档，还能智能识别编辑模式下的 Wikilink。当光标位于 `[[Note#Heading|Label]]` 这样的链接内时，插件会优先解析该链接指向的目标笔记，并提取其文件名、路径及 Frontmatter 属性，而非当前正在编辑的文档。此外，它完整保留了 Frontmatter 中的数据类型，确保接收端能准确处理布尔值、数组等复杂结构，这为构建精细化的自动化逻辑提供了坚实基础。

需要注意的是，该插件仅支持 macOS 系统，且依赖本地安装的 Alfred 及其工作流。它本身不执行任何文件修改或网络请求，仅负责数据传递，因此不适合需要直接修改笔记内容或同步云端数据的场景。如果未激活任何文档，插件会显示提示而非报错。对于希望将 Obsidian 笔记作为数据源，驱动 Alfred 进行文件管理、信息检索或跨应用协作的用户，这是一个高效且轻量级的连接工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


