---
uid: 1791709365319000
title: 'Obsidian 插件：Annotation Inbox'
tags: ['第三方工具集成', '效率工具', '数据处理', 'obsidian插件']
description: '将 Hypothesis 的网页高亮、页面笔记和标签导入到你的仓库中，每页生成一条笔记。支持增量同步，自动跳过重复内容，且绝不会重新创建你已删除的笔记。非官方插件，并非由 Hypothesis 开发。- 此插件未经 Obsidian 官方团队人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Annotation Inbox

> [!Note] 插件名片
> - 插件名称：Annotation Inbox
> - 插件作者：theluckystrike
> - 插件说明：将 Hypothesis 的网页高亮、页面笔记和标签导入到你的仓库中，每页生成一条笔记。支持增量同步，自动跳过重复内容，且绝不会重新创建你已删除的笔记。非官方插件，并非由 Hypothesis 开发。- 此插件未经 Obsidian 官方团队人工审核。
> - 插件分类：['第三方工具集成', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/annotation-inbox)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?annotation-inbox)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/annotation-inbox/master/README.md)



## 概述

**1. 主要功能**
该插件将 Hypothesis 网页高亮、页面笔记及标签同步至 Obsidian 库，实现“每页一注”。支持增量同步，自动跳过重复项，且尊重用户删除操作（已删除笔记不会重建）。

**2. 适用场景**
适合重度使用 Hypothesis 进行网页阅读、学术检索或知识管理的用户，需将分散的网页标注集中化管理，并保留原始网页上下文。

**3. 核心特色**
*   **智能同步**：基于时间戳增量拉取，单次最多处理 10,000 条标注，支持断点续传。
*   **结构清晰**：按 URL 聚合笔记，自动提取页面标题、标签（转换为 Obsidian 兼容格式）及更新时间。
*   **非官方但安全**：通过用户自建的开发者令牌调用公开 API，仅读取个人数据，无隐私泄露风险。

**4. 使用建议**
*   需在 Hypothesis 官网生成开发者令牌并在插件设置中配置。
*   建议指定专用文件夹存放导入笔记，以便区分本地手写笔记。
*   若标注量巨大，可多次运行“Sync now”命令完成全量同步。
*   注意标签格式转换规则（如空格转连字符），以便后续检索。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


