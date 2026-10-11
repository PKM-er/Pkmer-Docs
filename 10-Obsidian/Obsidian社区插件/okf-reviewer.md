---
uid: 1791709368944000
title: 'Obsidian 插件：OKF Reviewer'
tags: ['任务管理', '文件管理', '日历与时间', '效率工具', 'obsidian插件']
description: 'Review side panel for OKF documents: record human verification events, set lifecycle status and stale-after dates. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OKF Reviewer

> [!Note] 插件名片
> - 插件名称：OKF Reviewer
> - 插件作者：Tijs van Erp
> - 插件说明：Review side panel for OKF documents: record human verification events, set lifecycle status and stale-after dates. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '文件管理', '日历与时间', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vanerp/obsidian-okf-reviewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?okf-reviewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vanerp/obsidian-okf-reviewer/master/README.md)



## 概述

**主要功能**：为 OKF 文档提供右侧审查面板，记录人工验证事件、设置生命周期状态（草稿/稳定/弃用）及过期审查日期，并直接写入笔记 Frontmatter。

**适用场景**：适用于采用 Open Knowledge Format 规范的知识库管理，特别适合需要区分机器生成与人工撰写内容、追踪数据时效性及验证状态的团队或个人。

**核心特色**：
1. **智能触发**：仅当笔记包含 `type` 字段时自动激活，避免干扰普通笔记。
2. **严谨记录**：验证事件支持多人协作，同一审查者重复验证会更新而非堆积，且支持单独撤销。
3. **可视化标记**：文件列表中通过颜色区分来源（绿色人工/蓝色机器），并通过后缀点显示验证状态。
4. **安全写入**：编辑即时保存，失败时自动回滚，绝不触碰正文及无关字段。

**使用建议**：在笔记 Frontmatter 中规范设置 `type` 以启用插件；利用“Stale after”预设（如 90 天）定期清理过期内容；通过文件列表的颜色和标记快速识别需重点复核的未验证或机器生成文档。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


