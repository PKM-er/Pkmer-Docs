---
uid: 1791709368164000
title: 'Obsidian 插件：Local Agent Assistant'
tags: ['自动化与AI', '搜索与排序', '文字处理', '效率工具', 'obsidian插件']
description: 'Ask local AI agents questions about your Markdown vault, cite evidence, and add review notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Agent Assistant

> [!Note] 插件名片
> - 插件名称：Local Agent Assistant
> - 插件作者：zero
> - 插件说明：Ask local AI agents questions about your Markdown vault, cite evidence, and add review notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '搜索与排序', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fwacjo81/local-agent-assistant)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-agent-assistant)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fwacjo81/local-agent-assistant/master/README.md)



## 概述

**Local Agent Assistant** 是一款 Obsidian 桌面插件，旨在通过本地 AI 代理 CLI 处理 Markdown 库中的内容查询与审查。

**主要功能**：支持选中文字后调用浮动工具栏进行解释、查找 ADR 或生成审查建议；也可直接输入指令提问。插件会先检索当前库，提取有界证据发送给 AI，并在结果中保留 `[来源：路径#章节]` 形式的引用，同时支持在源文档中添加可编辑的 AI 或人工审查注释。

**适用场景**：适合需要利用本地 AI 能力对技术文档、笔记库进行深度解析、代码审查或知识关联的用户，特别适用于注重数据隐私、希望避免数据上传云端的场景。

**核心特色**：
1. **隐私安全**：默认只读模式，禁止 AI 修改文件或执行 Shell 命令；不上传整个库，仅发送有界证据片段；凭证由本地代理管理，不存入插件或笔记。
2. **本地优先**：支持配置多种本地 Agent CLI 和模型，完全在本地环境运行。
3. **证据追踪**：提供从审查位置或引用直接跳转至源标题的功能，并支持通过唯一 ID 删除审查记录。
4. **进程控制**：在 Windows 上可中断 Agent 进程及其子进程树。

**使用建议**：安装后需在设置中配置具体的本地 AI 代理命令和模型标识符。建议先测试“有界证据”的检索范围，确保发送给 AI 的内容符合隐私预期。对于远程模型，需知悉部分提示词可能发送至提供商。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


