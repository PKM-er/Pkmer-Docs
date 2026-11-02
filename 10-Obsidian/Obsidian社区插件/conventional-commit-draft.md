---
uid: 1793625611245000
title: "Obsidian 插件：Conventional Commit Draft"
tags: ["发布工具", "效率工具", "数据处理", "obsidian插件"]
description: "Group selected conventional commit subjects into a new release draft. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Conventional Commit Draft

> [!Note] 插件名片
> - 插件名称：Conventional Commit Draft
> - 插件作者：theluckystrike
> - 插件说明：Group selected conventional commit subjects into a new release draft. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/conventional-commit-draft)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?conventional-commit-draft)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/conventional-commit-draft/master/README.md)



## 概述

Conventional Commit Draft 旨在解决从大量提交记录中手动整理发布说明的繁琐问题。它通过读取编辑器中选中的 Conventional Commit 主题行，自动将其按类型（如功能、修复、文档等）分组，并生成一份结构清晰的 Markdown 草稿。该插件完全在本地运行，无需连接 Git 仓库、执行终端命令或依赖任何发布服务，确保源笔记内容保持不变，仅输出独立的报告文件。

典型场景包括：当你准备发布新版本时，从提交日志中复制相关条目，粘贴到笔记中并选中，插件即可快速生成包含“新功能”、“修复”等分类的预览；或者在整理项目历史时，将散乱的提交信息转化为带有 BREAKING 标记和哈希值的结构化文档，方便后续审查。例如，你可以将过去一周的 `feat: add login` 和 `fix: crash on startup` 等条目一键转化为带有对应标题的发布草案。

相比同类工具，其特色在于对不确定内容的透明处理。无法解析的行或未知类型不会被丢弃，而是保留在“Review”区域供人工检查，避免信息丢失。此外，它支持保留提交哈希、作用域及破坏性变更标记，并在预览中正确转义特殊字符，确保保存后的 Markdown 格式安全。Pro 版本还允许自定义分组标题顺序及保存命名报告模板，满足更复杂的团队规范需求。

使用前需注意，单次处理上限为 2000 行非空文本，超出需分批处理。该插件仅生成草稿，不自动确定版本号或发布，需维护者最终确认。它不适合需要直接对接 GitHub Release API 或自动计算语义化版本号的自动化流水线场景，仅作为辅助整理工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


