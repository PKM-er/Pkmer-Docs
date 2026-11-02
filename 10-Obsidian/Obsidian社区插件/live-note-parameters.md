---
uid: 1793625614949000
title: "Obsidian 插件：Live Note Parameters"
tags: ["编辑工具", "效率工具", "自定义命令", "obsidian插件"]
description: "Edit note parameters inline, synchronize their values within each tab, and copy resolved commands. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Live Note Parameters

> [!Note] 插件名片
> - 插件名称：Live Note Parameters
> - 插件作者：nestealin
> - 插件说明：Edit note parameters inline, synchronize their values within each tab, and copy resolved commands. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '效率工具', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nestealin/obsidian-live-note-parameters)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?live-note-parameters)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nestealin/obsidian-live-note-parameters/master/README.md)



## 概述

Live Note Parameters 允许你在笔记中定义可复用的参数，实现“一次填写，多处同步”。它支持在正文、行内代码或标记为 `docvars` 的命令块中插入变量引用。当你点击某个参数并输入新值时，当前标签页内所有匹配的引用会立即更新，而无需手动逐个修改。这种机制特别适合编写包含动态上下文的运行手册或技术文档，让你能在保持文档结构稳定的同时，灵活调整具体执行环境。

典型场景如编写云资源操作指南：你可以设定 `PROJECT_ID` 和 `REGION` 为默认值，在文档中同时保留一个固定的示例命令和一个可交互的命令块。当需要针对特定项目进行操作时，只需点击紫色参数填入当前项目 ID 和区域，即可通过代码块自带的复制按钮，直接获取替换好数值的完整命令。另一个例子是 Kubernetes 检查清单，通过统一修改命名空间和标签参数，确保 Pod 查询和事件日志命令始终指向同一目标环境，避免复制粘贴时的遗漏。

相比同类插件，其核心特色在于“临时值”与“默认值”的分离管理。临时输入仅存在于当前标签页内存中，关闭或新开标签页后自动恢复为笔记中保存的默认值，这保证了文档的整洁性。此外，它提供了可视化的参数管理面板，允许你在 Live Preview 模式下直接编辑默认值、查看引用计数并安全地重命名参数，且不会破坏笔记中其他无关的 Frontmatter 或正文内容。

使用前需注意，该插件仅进行字面量替换，不会执行 Shell 转义，因此你需要自行确保命令中的引号使用正确。它也不适合需要复杂逻辑判断或嵌套变量定义的场景，因为参数值被限制为单行字符串。如果你希望插件自动运行命令或处理多行文本变量，此插件无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


