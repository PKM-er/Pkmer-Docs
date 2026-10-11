---
uid: 1791709369666000
title: 'Obsidian 插件：Remnic Manager'
tags: ['数据处理', '图表与可视化', '效率工具', '图谱', '数据分析', 'obsidian插件']
description: 'Local-first dashboard, governance, recall diagnostics, and entity topology for Remnic memories. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Remnic Manager

> [!Note] 插件名片
> - 插件名称：Remnic Manager
> - 插件作者：lornezhang
> - 插件说明：Local-first dashboard, governance, recall diagnostics, and entity topology for Remnic memories. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '图表与可视化', '效率工具', '图谱', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lornezhang66/obsidian-remnic-manage)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?remnic-manager)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lornezhang66/obsidian-remnic-manage/master/README.md)



## 概述

**Remnic Manager** 是一款本地优先的 Obsidian 插件，专为管理 Remnic 记忆目录而设计，提供强大的治理与诊断功能。

**主要功能**：作为控制面板，它提供基于 Frontmatter 的仪表盘统计、记忆过滤与批量元数据编辑、冲突对比及版本覆盖（Supersede）功能。此外，还包含实体拓扑图可视化、召回诊断沙盒以及本地守护进程（Daemon）的健康监控与 CLI 控制。

**适用场景**：适用于需要长期管理复杂知识库、依赖 Remnic 记忆系统的高级用户。特别适合需要监控记忆质量、分析实体关系网络、调试召回算法效果以及维护本地记忆服务稳定性的场景。

**核心特色**：
1. **深度诊断**：提供 BM25、向量、重排器等维度的召回解释，直观展示记忆价值。
2. **可视化拓扑**：基于关系和 Wiki 链接生成原生 SVG 实体拓扑图。
3. **本地优先与安全**：所有文件操作通过 Vault API 完成，网络请求仅指向用户配置的本地守护进程，确保数据隐私。
4. **治理工具**：内置 OKF Lint 和 Sweep 功能，辅助记忆清理与规范。

**使用建议**：安装需从源码构建并手动部署文件。启用后，务必正确配置 Vault 内的记忆目录路径、本地守护进程 URL（默认 `http://127.0.0.1:4318`）及可选 Token。建议先通过“Doctor”功能检查守护进程状态，再使用召回沙盒优化记忆检索策略。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


