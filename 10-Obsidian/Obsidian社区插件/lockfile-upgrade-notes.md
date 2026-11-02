---
uid: 1793625615102000
title: "Obsidian 插件：Lockfile Upgrade Notes"
tags: ["数据处理", "文件管理", "效率工具", "obsidian插件"]
description: "Compare two npm lockfiles and save a note with package additions, removals, and version changes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lockfile Upgrade Notes

> [!Note] 插件名片
> - 插件名称：Lockfile Upgrade Notes
> - 插件作者：theluckystrike
> - 插件说明：Compare two npm lockfiles and save a note with package additions, removals, and version changes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/lockfile-upgrade-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lockfile-upgrade-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/lockfile-upgrade-notes/master/README.md)



## 概述

Lockfile Upgrade Notes 是一款专为 Obsidian 设计的工具，旨在解决 npm 依赖更新后难以追踪具体变化的问题。它通过对比 Vault 中两个不同版本的 npm lockfile（支持 v2 和 v3），自动生成一份 Markdown 报告，详细列出新增、移除及版本变更的包。该插件不执行任何 npm 命令或访问外部网络，仅基于本地文件进行静态分析，确保数据隐私与安全，让你能直观地记录每次依赖升级的具体内容。

典型场景是当你完成项目依赖升级后，希望将变更详情归档到笔记中。例如，你可以将升级前后的 `package-lock.json` 复制到 Vault，运行对比命令，插件会生成一份包含版本差异标签（如 major、minor、patch）的报告。另一场景是定期审查依赖健康度，通过对比基线快照与当前文件，快速识别哪些包发生了降级或重大版本跳跃，从而辅助决策是否回滚或进一步测试。

相比其他仅显示差异的插件，其特色在于对安装路径的精细区分。它能明确标记直接依赖与嵌套依赖，并保留 scope 信息，避免混淆同名不同路径的包。此外，它提供 Pro 功能，允许保存命名文件对或本地基线快照，方便后续快速对比，无需每次重新选择文件。报告生成后直接作为笔记保存，便于在 Obsidian 内通过链接回溯源文件，形成完整的文档闭环。

使用前需注意，该插件仅比较版本字符串，不评估兼容性、安全漏洞或许可证风险，因此不能替代安全审计或项目测试。它不支持 yarn 或 pnpm 的 lockfile，且对输入文件大小有限制（每个文件不超过 2 MiB）。如果你需要自动化的依赖更新建议、安全扫描或跨包管理器的统一视图，此插件可能无法满足需求。核心对比功能免费，但保存文件对和基线等高级功能需通过 GitHub Sponsors 支持解锁。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


