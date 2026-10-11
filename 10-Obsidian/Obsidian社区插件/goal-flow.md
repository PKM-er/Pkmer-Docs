---
uid: 1791709367324000
title: 'Obsidian 插件：Goal Flow'
tags: ['任务管理', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Connect Markdown tasks, projects and problems using shared Tasks IDs. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Goal Flow

> [!Note] 插件名片
> - 插件名称：Goal Flow
> - 插件作者：Yuki
> - 插件说明：Connect Markdown tasks, projects and problems using shared Tasks IDs. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ykgitname/goal-flow)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?goal-flow)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ykgitname/goal-flow/master/README.md)



## 概述

**Goal Flow 插件总结**

**主要功能**
该插件通过共享任务 ID，将 Markdown 笔记中的任务、项目与问题相互连接。支持从笔记读取项目，以表格形式查看并编辑优先级与状态，在画布上可视化任务关系，并记录问题及备选方案。

**适用场景**
适用于需要管理复杂项目、追踪多任务依赖关系、梳理问题解决路径，以及希望保持数据纯文本化（Markdown）存储的知识工作者。

**核心特色**
1. **原生 Markdown 兼容**：任务数据直接保留在笔记中，插件仅回写 ID、截止日期等元数据，不破坏笔记结构。
2. **可视化关系图**：提供 Canvas 视图展示任务间关联，支持按项目筛选。
3. **自动 ID 管理**：自动为任务添加稳定 ID，便于跨笔记引用。
4. **中文界面**：当前界面为中文，符合本土化使用习惯。

**使用建议**
1. 在项目笔记的 Frontmatter 中添加 `goal-flow: true` 以启用识别。
2. 建议配置“项目文件夹”限制扫描范围，提升性能。
3. 关系图数据存储于 `TaskExtension/goal-flow-data/graph.json`，请定期备份 Vault 以防数据丢失。
4. 可通过命令面板执行“为当前项目任务补充 ID”手动同步 ID。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


