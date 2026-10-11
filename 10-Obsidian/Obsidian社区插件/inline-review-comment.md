---
uid: 1791709367803000
title: 'Obsidian 插件：Inline Review Comments'
tags: ['样式与美化', '编辑工具', '界面优化', 'obsidian插件']
description: 'Renders Obsidian inline %% comments %% as Google-Docs-style review cards in the right margin, visible in reading, live preview and source modes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inline Review Comments

> [!Note] 插件名片
> - 插件名称：Inline Review Comments
> - 插件作者：Deepal Jayasekara
> - 插件说明：Renders Obsidian inline %% comments %% as Google-Docs-style review cards in the right margin, visible in reading, live preview and source modes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编辑工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/deepal/obsidian-inline-review-comments)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-review-comment)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/deepal/obsidian-inline-review-comments/master/README.md)



## 概述

**1. 主要功能**
该插件将 Obsidian 中标准的 `%% 注释 %%` 渲染为右侧边栏的 Google Docs 风格审阅卡片。支持在阅读、实时预览和源码模式下显示，实现文本旁注的可视化交互。

**2. 适用场景**
主要用于人与 AI 智能体（Agent）的协作场景。用户可在笔记中留下指令、提问或反馈，AI 读取 Markdown 文件后在对应位置写入回复，形成双向对话线程。适用于内容修订、事实核查、创意讨论及代码审查。

**3. 核心特色**
*   **纯文本存储**：评论直接保存在 Markdown 文件中，不依赖插件数据库，即使禁用或卸载插件，数据依然保留且可编辑。
*   **多模式兼容**：在阅读、实时预览和源码模式下均能正常显示审阅卡片。
*   **结构化对话**：通过 `%% ::角色:: 内容 %%` 格式区分用户与 AI 回复，支持线程式回复与最终“解决”（Resolve）以清理笔记。

**4. 使用建议**
*   **配置 AI**：需单独配置具有文件读写权限的 AI 智能体，插件仅提供界面，AI 负责逻辑处理。
*   **标准格式**：AI 回复需严格遵循 `%% ::Agent:: 回复内容 %%` 格式，紧跟在用户评论之后。
*   **流程管理**：完成一轮交互后，使用“Reply…”继续对话；满意结果后点击“Resolve”移除注释，保持笔记整洁。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


