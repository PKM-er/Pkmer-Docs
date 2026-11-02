---
uid: 1793625612822001
title: "Obsidian 插件：Fence File Export"
tags: ["文件管理", "编辑工具", "效率工具", "obsidian插件"]
description: "Write named code blocks from the current note to new files in a chosen vault folder. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Fence File Export

> [!Note] 插件名片
> - 插件名称：Fence File Export
> - 插件作者：theluckystrike
> - 插件说明：Write named code blocks from the current note to new files in a chosen vault folder. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/fence-file-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fence-file-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/fence-file-export/master/README.md)



## 概述

Fence File Export 允许将当前笔记中带有特定名称的代码块直接导出为独立的文件。通过在代码围栏的语言标签后添加 `file="文件名"` 属性，插件能识别这些目标块，并将其内容写入你指定的库文件夹中。它支持反引号和波浪线两种围栏格式，且能自动创建缺失的父级目录，让笔记中的脚本、配置或数据片段能够以真实文件的形式存在，方便后续调用或版本管理。

典型场景包括维护项目文档时，将嵌入在 Markdown 中的 Python 脚本或 YAML 配置直接提取为可执行文件。例如，你可以在一篇技术笔记中编写多个代码片段，通过该插件一次性将它们导出到 `Exports` 文件夹，保持笔记整洁的同时获得独立的代码文件。若同一目标路径对应多个代码块，插件会按笔记中的顺序将它们合并为一个完整文件，中间以空行分隔，适合构建由多部分组成的长脚本。

相比其他导出工具，该插件强调“先预览后创建”的安全机制。在执行前，它会展示所有目标文件的完整路径和内容，并明确列出因路径非法、围栏嵌套或缺少闭合标记而被拒绝的块。这种透明性避免了误操作覆盖现有文件。此外，Pro 版本提供了文件夹配置档案和导出索引功能，后者能自动生成包含源笔记和输出文件链接的 Markdown 索引页，便于追踪导出结果。

使用前需注意，插件仅处理顶层围栏，不支持列表或引用块内的嵌套代码。源文件若超过 2 MiB 或目标数超过 100 个将无法处理。它不会覆盖已存在的文件，若需更新内容，必须更换输出文件夹或手动删除旧文件。此外，批量导出并非原子操作，若中途失败，已成功创建的文件会保留在库中。对于需要频繁同步或依赖移动端实时测试的用户，该插件可能不是最佳选择，因为其移动端支持未经过真机验证。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


