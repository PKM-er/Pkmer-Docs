---
uid: 1793625616296001
title: "Obsidian 插件：Mermaid Fence Helper"
tags: ["图表与可视化", "编辑工具", "效率工具", "obsidian插件"]
description: "Add mermaid to opening code fences without changing closing fences. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mermaid Fence Helper

> [!Note] 插件名片
> - 插件名称：Mermaid Fence Helper
> - 插件作者：Atharva Savnerkar 
> - 插件说明：Add mermaid to opening code fences without changing closing fences. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ayush4265/mermaid-fence-helper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mermaid-fence-helper)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ayush4265/mermaid-fence-helper/master/README.md)



## 概述

Mermaid Fence Helper 旨在解决在 Obsidian 中手动为代码块添加 Mermaid 语言标签的繁琐问题。它能在不改变闭合围栏的前提下，自动在起始反引号后插入 `mermaid` 标识，从而快速将普通代码块转换为可渲染的图表。该插件支持自动模式，当检测到 `flowchart` 或 `graph` 等特定声明时，会即时完成标签添加，无需用户反复手动编辑。

典型使用场景包括快速整理笔记中的流程图。例如，当你粘贴一段以 `flowchart TD` 开头的代码时，若开启了自动模式，插件会立即为其打上标签，省去手动输入步骤。对于已有大量未标记图表的旧笔记，你可以直接运行“为当前笔记中的图表块添加 mermaid”命令，一键批量处理，极大提升图表整理效率。

相比同类插件，其特色在于对复杂围栏结构的精准处理。它能识别长反引号围栏、引用块及 Callout 中的代码块，并严格保留原有的闭合围栏、换行符及语言标签，确保笔记格式不被意外破坏。此外，它仅作用于当前编辑器，不会扫描或重写整个库，既保证了操作的安全性，也避免了因全局扫描带来的性能负担。

使用前需注意，自动模式默认关闭，需在设置中手动启用。若需撤销自动转换，建议先关闭自动模式，否则后续编辑可能再次触发标签添加。该插件不适合需要处理 YAML 配置前置的 Mermaid 块，此类情况需使用“所有未标记块”命令。另外，它不支持列表项中缩进超过三个空格的围栏，且不会转换波浪线围栏，请根据笔记结构合理选择命令。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


